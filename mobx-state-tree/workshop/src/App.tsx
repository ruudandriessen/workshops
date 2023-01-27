import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { applyPatch, getSnapshot, IJsonPatch, Instance, onPatch, onSnapshot, SnapshotOut } from "mobx-state-tree";
import { useEffect, useState } from "react";
import { RootModel, RootModelProvider } from "./models/RootStore";
import { Routes } from "./Routes";

// const lightTheme = createTheme();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const defaultStore = {
    epics: [],
    tasks: [],
}

let history: IJsonPatch[] = [];

function App() {
    const localStore = localStorage.getItem('store');
    const initialStore = localStore
        ? JSON.parse(localStore)
        : defaultStore

    const [ model ] = useState(RootModel.create(initialStore))

    useEffect(() => {
        const disposeSnapshot = onSnapshot(model, snapshot => {
            localStorage.setItem('store', JSON.stringify(snapshot))
        })

        const disposePatch = onPatch(model, (_, inversePatch) => {
            history.push(inversePatch);
        });

        const listener = (e: KeyboardEvent) => {
            if (e.key === 'z' && e.ctrlKey) {
                const inversePatch = history.pop();
                if (inversePatch) {
                    applyPatch(model, inversePatch);
                    console.log(getSnapshot(model));
                    history = history.slice(0, history.length - 1)
                }
            }
        }

        window.addEventListener('keypress', listener)
        return () => {
            disposeSnapshot();
            disposePatch();
            window.removeEventListener('keypress', listener)
        }
    }, [ model ])

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <RootModelProvider value={model}>
                <Routes />
            </RootModelProvider>
        </ThemeProvider>
    );
}

export default App;

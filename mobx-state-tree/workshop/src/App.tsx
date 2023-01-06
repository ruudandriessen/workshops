import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RootModel, RootModelProvider } from "./models/RootStore";
import { Routes } from "./Routes";

// const lightTheme = createTheme();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
    const initialRootModel = RootModel.create({});
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <RootModelProvider value={initialRootModel}>
            <Routes />
            </RootModelProvider>
        </ThemeProvider>
    );
}

export default App;

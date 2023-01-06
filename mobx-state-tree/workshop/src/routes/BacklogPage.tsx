import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { EpicList } from "../components/EpicList";
import { TodoList } from "../components/TodoList";
import { useRoot } from "../hooks/useRoot";

export const BacklogPage = observer(() => {
    const model = useRoot();
    const todos: any[] = [];
    const epics: any[] = [];

    console.log(model.toString());

    return <Box display='flex' flexDirection='column'>
        <Typography variant="h4" component="h1">
            Backlog
        </Typography>

        <Box
            display='grid'
            gridTemplateColumns='1fr 3fr'
        >
            <EpicList epics={epics} />
            <TodoList todos={todos} />
        </Box>
    </Box>
});

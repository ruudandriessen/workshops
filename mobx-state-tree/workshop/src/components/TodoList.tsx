import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Todo } from "./Todo";

interface TodoListProps {
    todos: any[];
    selectedEpic: any;
}

export const TodoList = observer(({
    todos,
    selectedEpic,
}: TodoListProps) => {
    return (
        <Box>
            <Typography variant="h6" component="h2">
                Todos
            </Typography>
            {
                todos.length === 0
                    ? <span>No epics</span>
                    : todos.map(todo => <Todo
                        id={todo.id}
                        key={todo.id}
                    />)
            }
        </Box>
    );
});

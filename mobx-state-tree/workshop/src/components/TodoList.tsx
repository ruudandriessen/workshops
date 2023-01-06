import { Box, Typography } from "@mui/material";
import { Todo } from "./Todo";

interface TodoListProps {
    todos: any[]; /* replace with your todo model */
}

export function TodoList({
    todos
}: TodoListProps) {
    return (
        <Box>
            <Typography variant="h6" component="h2">
                Todos
            </Typography>
            {
                todos.map(todo => <Todo
                    id={todo.id}
                    key={todo.id}
                />)
            }
        </Box>
    );
}

import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Task } from "./Task";

interface TaskListProps {
    tasks: any[];
    selectedEpic: any;
}

export const TaskList = observer(({
    tasks,
    selectedEpic,
}: TaskListProps) => {
    return (
        <Box>
            <Typography variant="h6" component="h2">
                Tasks
            </Typography>
            {
                tasks.length === 0
                    ? <span>No tasks</span>
                    : tasks.map(task => <Task
                        id={task.id}
                        key={task.id}
                    />)
            }
        </Box>
    );
});

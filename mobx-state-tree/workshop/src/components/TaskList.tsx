import { Box, List, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { TaskInstance } from "../models/TaskModel";
import { Task } from "./Task";

interface TaskListProps {
    tasks: TaskInstance[];
    onDelete: (task: TaskInstance) => void;
    onSelect: (task: TaskInstance) => void;
}

export const TaskList = observer(({
    tasks,
    onDelete,
    onSelect,
}: TaskListProps) => {
    return (
        <Box
            flex={3}
            display='flex'
            flexDirection='column'
        >
            <Typography variant="h6" component="h2">
                Tasks
            </Typography>
            <List dense>
                {
                    tasks.length === 0
                        ? <span>No tasks</span>
                        : tasks.map(task =>
                            <Task
                                key={task.id}
                                task={task}
                                onDelete={() => onDelete(task)}
                                onSelect={() => onSelect(task)}
                            />
                        )
                }
            </List>
        </Box>
    );
});

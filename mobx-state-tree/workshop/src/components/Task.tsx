import { Delete } from "@mui/icons-material";
import { Checkbox, Chip, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { observer } from "mobx-react-lite";
import { TaskInstance } from "../models/TaskModel";

interface TaskProps {
    task: TaskInstance;
    onDelete: () => void;
    onSelect: () => void;
}

export const Task = observer(({
    task,
    onDelete,
    onSelect
}: TaskProps) => {
    return <ListItem
        disablePadding
        secondaryAction={
            <IconButton onClick={onDelete}>
                <Delete />
            </IconButton>
        }
    >
        <ListItemButton onClick={onSelect}>
            <ListItemText
                primary={task.title}
                secondary={
                     <Box
                        paddingTop={1}
                        visibility={task.epic ? 'visible' : 'hidden'}
                    >
                        <Chip
                            size="small"
                            label={task.epic?.title}
                        />
                    </Box>
                }
            />
        </ListItemButton>
    </ListItem>
})

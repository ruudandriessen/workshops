import { Close } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { TaskInstance, TASK_STATES } from "../models/TaskModel";

interface EntityDetailsProps {
    entity: TaskInstance;
    onClose: () => void;
}

export const EntityDetails = observer(({
    entity,
    onClose,
}: EntityDetailsProps) => {
    return (
        <Box
            flex={1}
            gap={2}
            borderLeft={1}
            padding={2}
        >
            <Typography variant="h6" component="h2">
                {entity.title}

                <IconButton onClick={onClose}>
                    <Close />
                </IconButton>
            </Typography>

            <Select
                value={entity.status}
                onChange={(e) => entity.setStatus(e.target.value)}
            >
                {TASK_STATES.map(state => <MenuItem
                    key={state}
                    value={state}
                >
                    {state}
                </MenuItem>)}
            </Select>

            <Typography variant="body1" component="p">
                {entity.description}
            </Typography>
        </Box>
    )
})

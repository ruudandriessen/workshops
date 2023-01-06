import { Box, Typography } from "@mui/material";
import { Epic } from "./Epic";

interface EpicListProps {
    epics: any[]; /* replace with your epic model */
}

export function EpicList({
    epics
}: EpicListProps) {
    return (
        <Box>
        <Typography variant="h6" component="h2">
            Epics
        </Typography>
        {
            epics.map(epic => <Epic
                id={epic.id}
                key={epic.id}
            />)
        }
        </Box>
    );
}

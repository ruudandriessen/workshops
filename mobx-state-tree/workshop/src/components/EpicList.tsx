import { Close } from "@mui/icons-material";
import { Box, IconButton, List, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useRoot } from "../hooks/useRoot";
import { EpicInstance } from "../models/EpicModel";
import { Epic } from "./Epic";

interface EpicListProps {
    epics: EpicInstance[];
    selectedEpic?: EpicInstance;
    setSelectedEpic: (epic?: EpicInstance) => void;
    deleteEpic: (epic: EpicInstance) => void;
    onClose: () => void;
}

export const EpicList = observer(({
    epics,
    selectedEpic,
    setSelectedEpic,
    deleteEpic,
    onClose,
}: EpicListProps)=> {
    return (
        <Box
            flex={1}
            display='flex'
            flexDirection='column'
            border={1}
            padding={2}
        >
            <Typography variant="h6" component="h2">
                Epics
                 <IconButton onClick={onClose}>
                    <Close />
                </IconButton>
            </Typography>
            <List dense>
                {
                    epics.length === 0
                        ? <span>No epics</span>
                        : epics.map(epic => {
                            const isSelected = epic === selectedEpic;
                            return <Epic
                                epic={epic}
                                key={epic.id}
                                onClick={() => {
                                    setSelectedEpic(
                                        isSelected
                                            ? undefined
                                            : epic
                                    )
                                }}
                                onDelete={() => deleteEpic(epic)}
                                isSelected={isSelected}
                            />
                        })
                }
            </List>
        </Box>
    );
})

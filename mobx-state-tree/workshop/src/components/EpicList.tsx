import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Epic } from "./Epic";

interface EpicListProps {
    epics: any[];
    selectedEpic: any;
    setSelectedEpic: (epic: any) => void;
}

export const EpicList = observer(({
    epics,
}: EpicListProps)=> {
    return (
        <Box>
            <Typography variant="h6" component="h2">
                Epics
            </Typography>
            {
                epics.length === 0
                    ? <span>No epics</span>
                    : epics.map(epic => <Epic
                        id={epic.id}
                        key={epic.id}
                        onClick={() => {
                            console.log("click", epic.id)
                        }}
                        onDelete={() => {
                            console.log('delete', epic.id)
                        }}
                    />)
            }
        </Box>
    );
})

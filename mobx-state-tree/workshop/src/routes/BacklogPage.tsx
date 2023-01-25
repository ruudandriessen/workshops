import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { getSnapshot } from "mobx-state-tree";
import { useState } from "react";
import { EpicList } from "../components/EpicList";
import { TodoList } from "../components/TodoList";
import { useRoot } from "../hooks/useRoot";

export const BacklogPage = observer(() => {
    const model = useRoot();

    console.log(getSnapshot(model))
    const [selectedEpic, setSelectedEpic] = useState<null>(null)

    return <Box display='flex' flexDirection='column'>
        <Typography variant="h4" component="h1">
            Backlog
        </Typography>

        <Box
            display='grid'
            gridTemplateColumns='1fr 3fr'
        >
            <EpicList
                epics={[]}
                selectedEpic={selectedEpic}
                setSelectedEpic={setSelectedEpic}
             />
            <TodoList
                todos={[]}
                selectedEpic={selectedEpic}
            />
        </Box>
    </Box>
});

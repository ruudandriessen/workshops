import { ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Instance } from "mobx-state-tree";
import { useState } from "react";
import { EpicList } from "../components/EpicList";
import { TaskList } from "../components/TaskList";
import { useRoot } from "../hooks/useRoot";
import { RootModel } from "../models/RootStore";
import { TaskInstance } from "../models/TaskModel";
import { EntityDetails } from "./EntityDetails";
export const BacklogPage = () => {
    const model = useRoot();

    return <BacklogContent
        model={model}
    />
}

export const BacklogContent = observer(
    ({
        model
    }: {model: Instance<typeof RootModel>}
) => {
    const [ selectedDetailItem, setSelectedDetailItem ] = useState<TaskInstance | undefined>(undefined);
    const [ isEpicPaneOpen, setIsEpicPaneOpen ] = useState<boolean>(true);

    return <Box
        display='flex'
        flexDirection='column'
        height="100%"
    >
        <Typography variant="h4" component="h1">
            Backlog
        </Typography>

        <Box
            display='flex'
            gap={2}
        >
            {isEpicPaneOpen
                ? <EpicList
                    epics={model.epics}
                    selectedEpic={model.selectedEpic}
                    setSelectedEpic={model.setSelectedEpic}
                    deleteEpic={model.deleteEpic}
                    onClose={() => setIsEpicPaneOpen(false)}
                />
                : <IconButton
                    style={{height: '34px'}}
                    size="small"
                    onClick={() => setIsEpicPaneOpen(true)}
                >
                    <ChevronRight />
                </IconButton>
            }
            <TaskList
                tasks={model.visibleTasks}
                onDelete={(task) => model.deleteTask(task)}
                onSelect={(task) => {
                    const isSelected = task === selectedDetailItem;
                    setSelectedDetailItem(
                        isSelected ? undefined : task
                    )
                }}
            />
            {selectedDetailItem && <EntityDetails
                entity={selectedDetailItem}
                onClose={() => setSelectedDetailItem(undefined)}
            />}
        </Box>
    </Box>
});

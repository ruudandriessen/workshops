import { Delete } from "@mui/icons-material";
import { IconButton, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { observer } from "mobx-react-lite";
import { EpicInstance } from "../models/EpicModel";

interface EpicProps {
    epic: EpicInstance;
    onClick: () => void;
    onDelete: () => void;
    isSelected: boolean;
}

export const Epic = observer(({
    epic,
    onClick,
    onDelete,
    isSelected
}: EpicProps) => {
    return <ListItem
        disablePadding
        secondaryAction={
            <IconButton onClick={onDelete}>
                <Delete />
            </IconButton>
        }
    >
        <ListItemButton selected={isSelected} onClick={onClick}>
            <ListItemText primary={epic.title} />
        </ListItemButton>
    </ListItem>
})

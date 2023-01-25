import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface TaskProps {
    id: string;
}

export function Task({ id }: TaskProps) {
    function onDelete() {

    }

    return <>
        {id}
        <IconButton onClick={onDelete}><Delete /></IconButton>
    </>
}

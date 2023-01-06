import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface TodoProps {
    id: string;
}

export function Todo({ id }: TodoProps) {
    function onDelete() {

    }

    return <>
        {id}
        <IconButton onClick={onDelete}><Delete /></IconButton>
    </>
}

import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface EpicProps {
    id: string;
}

export function Epic({ id }: EpicProps) {
    function onDelete() {

    }

    return <>
        {id}
        <IconButton onClick={onDelete}><Delete /></IconButton>
    </>
}

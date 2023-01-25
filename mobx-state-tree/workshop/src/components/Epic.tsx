import { Delete } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

interface EpicProps {
    id: string;
    onClick: () => void;
    onDelete: () => void;
}

export function Epic({
    id,
    onClick,
    onDelete,
}: EpicProps) {
    return <Box onClick={onClick}>
        {id}
        <IconButton onClick={onDelete}><Delete /></IconButton>
    </Box>
}

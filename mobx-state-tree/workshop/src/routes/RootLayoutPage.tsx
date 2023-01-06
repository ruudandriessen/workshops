import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink, Outlet } from "react-router-dom";

export function RootLayoutPage() {
    return <Box
        display='flex'
        flexDirection='column'
    >
        <Box
            display="flex"
            gap={2}
            padding={2}
        >
            <Button
                variant="text"
                to='/'
                component={NavLink}
            >
                Backlog
            </Button>
            <Button
                variant="outlined"
                to='/tasks/new'
                component={NavLink}
            >
                New task
            </Button>
            <Button
                variant="outlined"
                to='/epics/new'
                component={NavLink}
            >
                New epic
            </Button>
        </Box>

        <Box padding={2}>
            <Outlet />
        </Box>
    </Box>
}

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink, Outlet } from "react-router-dom";

export function RootLayoutPage() {
    return <Box
        display='flex'
        flexDirection='column'
        width='100vw'
        height='100vh'
    >
        <Box
            display="flex"
            gap={2}
            padding={2}
            flex="0 1 auto"
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

        <Box padding={2} flex="1">
            <Outlet />
        </Box>
    </Box>
}

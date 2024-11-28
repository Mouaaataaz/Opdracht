
import { Box, Typography, ThemeProvider, CssBaseline } from "@mui/material";


import { Header } from "~/Components/Header";
import {Sidebar} from "~/Components/Sidebar";
import { MapView} from "~/Components/Map";
import { theme } from "~/Components/styles";


export default function Index() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Main Layout Container */}
            <Box className="layout-container">

                {/* Header */}
                <Box className="header">
                    <Header />
                </Box>

                {/* Content */}
                <Box className="contentContainer">

                    {/* Dossier Text */}
                    <Box className="infoRow">
                        <Typography variant="h6">Dossier</Typography>
                    </Box>

                    {/* Sidebar */}
                    <Sidebar />

                    {/* Main Content Section (Map) */}
                    <Box className="mapContainer">
                        <MapView />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}


import { Box, Typography } from "@mui/material";


import { Header } from "~/Components/Header";
import {Sidebar} from "~/Components/Sidebar";
import { MapView} from "~/Components/Map";
import { layoutStyles, mapStyles } from "~/Components/styles";


export default function Index() {
    return (
        <Box sx={layoutStyles.container}>
            {/* Header */}
            <Box sx={layoutStyles.header}>
                <Header />
            </Box>

            {/* Content */}
            <Box sx={layoutStyles.contentContainer}>
                {/* "Dossiers" Title */}
                <Box sx={layoutStyles.dossiersTitle}>
                    <Typography >
                        Dossiers
                    </Typography>
                </Box>

                <Sidebar />

                {/* Main Content Section (Map) */}
                <Box sx={mapStyles.container}>
                    {/* Placeholder for the map */}
                    <MapView />
                </Box>
            </Box>
        </Box>
    );
}

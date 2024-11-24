import type { LinksFunction } from "@remix-run/node";
import { Box, Typography } from "@mui/material";


import appStylesHref from "../tailwind.css";
import { Header } from "~/Components/Header";
import {Sidebar} from "~/Components/Sidebar";
import { layoutStyles, mapStyles } from "../Components/styles";


export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref, },
    { rel: "stylesheet", href: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" }, // Leaflet styles

];

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
                    <Typography sx={mapStyles.placeholderText}>
                        Map or Content Goes Here
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

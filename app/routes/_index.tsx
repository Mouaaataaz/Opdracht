import type { LinksFunction } from "@remix-run/node";
import { Box, Typography } from "@mui/material";

import appStylesHref from "../tailwind.css";
import { Header } from "~/Components/Header";
import {Sidebar} from "~/Components/Sidebar";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref },
];


const layoutStyles = {
    container: {
        display: "grid",
        gridTemplateRows: "64px auto", // Header row and content row
        gridTemplateColumns: "1fr", // Single column for full-width elements
        height: "100vh", // Full viewport height
        gap: 0, // Remove unnecessary row gaps
    },
    header: {
        gridColumn: "1 / -1",
        padding: "16px",
    },
    contentContainer: {
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "300px 1fr",
        gap: "16px",
        padding: "16px",
    },
    dossiersTitle: {
        gridColumn: "1 / -1",
        marginBottom: "8px",
    },
};

const sidebarStyles = {
    sidebarContainer: {
        marginLeft: "40px",
        fontWeight: "bold",
    },
};

const mapStyles = {
    container: {
        backgroundColor: "#f1f1f1f1",
        borderRadius: "40px",
        position: "relative",
        overflow: "hidden",
        height: "100%",
    },
    placeholderText: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#aaa",
    },
};


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
                    <Typography sx={sidebarStyles.sidebarContainer}>
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

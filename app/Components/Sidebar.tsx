import { Box, Typography, Checkbox, Divider } from "@mui/material";


const sidebarStyles = {
    container: {
        width: "300px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "100%",
    },
    filterSection: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
};

export function Sidebar() {
    return (
        <Box sx={sidebarStyles.container}>
            {/* Filters Section */}
            <Typography>Todo: filters</Typography>
            <Divider />

            {/* Checkbox and Text in the Same Row */}
            <Box sx={sidebarStyles.filterSection}>
                <Checkbox />
                <Typography>Toon enkel dossiers van op de kaart</Typography>
            </Box>
        </Box>
    );
}

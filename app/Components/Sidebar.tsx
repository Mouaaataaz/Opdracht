import { Box, Typography, Paper, IconButton, Checkbox, Divider } from "@mui/material";


const sidebarStyles = {
    container: {
        width: "300px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "100%",
        overflowY: "auto",
    },
    filterSection: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
};

const typographyStyles ={
    container:{
        backgroundColor: "#899499",
        padding:"15px"

    }
}

const boxStyles = {
    container: {
        width:"95%",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        borderRadius: "16px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        gap: "8px",
    },
    header: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
};

function SidebarBox() {
    return (
        <Paper sx={boxStyles.container} elevation={3}>
            {/* Header with Time Icon */}
            <Box sx={boxStyles.header}>

                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#555" }}>
                    Nog 3 dagen
                </Typography>
            </Box>

            {/* Title and Subtitle */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "4px" }}>
                    Aanvraag
                </Typography>
                <Typography variant="body2" sx={{ color: "#888" }}>
                    CaPaKey
                </Typography>
            </Box>

            {/* Footer with ID and Info Icon */}
            <Box sx={boxStyles.footer}>
                <Typography variant="body2" sx={{ color: "#888" }}>
                    450ZTB0332/00R000
                </Typography>
                <IconButton sx={{ padding: 0 }}>

                </IconButton>
            </Box>

            {/* Reference */}
            <Typography variant="body2" sx={{ color: "#888" }}>
                Vip referentie: VIP-0000011
            </Typography>
        </Paper>
    );
}


export function Sidebar() {
    return (
        <Box sx={sidebarStyles.container}>
            {/* Filters Section */}
            <Typography sx={typographyStyles.container}>Todo: filters</Typography>
            <Divider />

            {/* Checkbox and Text in the Same Row */}
            <Box sx={sidebarStyles.filterSection}>
                <Checkbox />
                <Typography>Toon enkel dossiers van op de kaart</Typography>
            </Box>

            {/* List of Sidebar Boxes */}
            <SidebarBox />
            <SidebarBox />
            <SidebarBox />
        </Box>
    );
}

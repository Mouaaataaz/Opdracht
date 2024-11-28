import { createTheme } from "@mui/material";

// Header Theme Styles
export const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    boxShadow: "none",
                    borderBottom: "1px solid #e0e0e0",
                    display: "grid",
                    gridTemplateRows: "auto",
                    position: "fixed",
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems:"center",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "black",
                    textTransform: "none",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: "black",
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    display: "grid",
                    gridTemplateRows: "64px auto",
                    height: "100vh",
                },
                ".layout-container": {
                    display: "grid",
                    gridTemplateRows: "64px auto",
                    height: "100vh",
                },
                ".contentContainer": {
                    display: "grid",
                    gridTemplateRows: "auto 1fr",
                    gridTemplateColumns: "auto 1fr",
                    gap: "16px",
                    padding: "16px",
                    height: "calc(100vh - 64px)",
                },
                // Dossier Styles
                ".infoRow": {
                    gridColumn: "1 / -1",
                    padding: "10px 16px",
                    backgroundColor: "lightgrey",
                    borderRadius: "25px",
                    color: "black",

                },
                // Map Styles
                ".mapContainer": {
                    position: "relative",
                    borderRadius: "40px",

                    height: "100%", // Fill the content area
                    width: "100%",  // Ensure full width
                    overflow: "hidden", // Prevent extra overflow
                },
                // Sidebar styles
                ".sidebarContainer": {
                    width: "350px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    height: "100%",
                    overflowY: "auto",
                },
                ".sidebarFilterSection": {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                },
                // Typography Styles
                ".typographyContainer": {
                    backgroundColor: "#899499",
                    padding: "15px",
                },
                // Sidebar Box Styles
                ".boxContainer": {
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
                    borderRadius: "16px",
                    backgroundColor: "#f9f9f9",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    gap: "8px",
                    margin:"auto",
                },
                ".boxHeader": {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                },
                ".boxFooter": {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                },
            },
        },

    },
});




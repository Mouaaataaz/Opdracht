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
                },
            },
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    color: "black",
                    display: "flex",
                    flexGrow: 1,
                    alignItems: "center",
                    gap: 4,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "black",
                    textDecoration: "none",
                    textTransform: "none",
                    gap: 5,
                },
            },
        },
    },
});

// Layout Styles
export const layoutStyles = {
    container: {
        display: "grid",
        gridTemplateRows: "64px auto",
        gridTemplateColumns: "1fr",
        height: "100vh",
        gap: 0,
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
        height: "calc(100vh - 64px)",
    },
    dossiersTitle: {
        gridColumn: "1 / -1",
        marginBottom: "8px",
        backgroundColor: "lightgray",
        padding:"10px",
        borderRadius:"20px"
    },
};

// Sidebar Styles
export const sidebarStyles = {
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

export const typographyStyles = {
    container: {
        backgroundColor: "#899499",
        padding: "15px",
    },
};

// Sidebar Box Styles
export const boxStyles = {
    container: {
        width: "95%",
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

// Map Styles
export const mapStyles = {
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


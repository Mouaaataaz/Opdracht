import { createTheme } from "@mui/material/styles";
// global.d.ts
import '@mui/material/Button';
import '@mui/material/List';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    columba: true;
    footer: true;
  }
}

declare module '@mui/material/List' {
  interface ListPropsVariantOverrides {
    columba: true;
  }
}

export const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    boxShadow: "none",
                    borderBottom: "1px solid #e0e0e0",
                    
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minHeight: "64px", // Matches the AppBar height
                    padding: "0 16px",
                    textDecoration:"none"
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                ".SidebarBox": {
                    
                    backgroundColor: "white",
                    height: "100%",
                    padding: "16px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                },
            },
        },
        MuiList: {
            variants: [
                {
                    props: { variant: "listsidebar" }, 
                    style: {
                        
                        marginBottom: 2, 
                        backgroundColor: "white", 
                        borderRadius: "26px", 
                        
                    },
                },
            ],
        },
        
        MuiListItemText: {
            variants: [
                {
                    props: { variant: "itemssidebar" },
                    style: {
                        backgroundColor:"white",
                        marginBottom: "10px",
                        
                    },
                },
            ],
        },
        
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none", // Prevents uppercase text
                    borderRadius: "16px",
                },
            },
            variants: [
                {
                    props: { variant: "columba" }, // Custom "outlined" variant
                    style: {
                        border: "2px solid #1976d2",
                        color: "black",
                        padding: "4px 12px",
                        borderRadius:"30px",
                        whiteSpace: "nowrap",
                        "&:hover": {
                            backgroundColor: "#e3f2fd",
                            borderColor: "#1565c0",
                        },
                    },
                },
                {
                    props: { variant: "contained" }, // Custom "contained" variant
                    style: {
                        
                        color: "black",
                        borderRadius:"30px",
                        whiteSpace: "nowrap",
                        backgroundColor: "#f58f8f",
                        "&:hover": {
                            backgroundColor: "#e3f2fd",
                            borderColor: "#1565c0",
                        },
                    },
                },
                {
                    props: { variant: "footer" }, // Custom "footer" variant
                    style: {
                        color: "black",
                        padding: "10px 30px",
                        backgroundColor:"#dce0f7",
                        borderRadius: "26px",
                        marginTop: "auto", // Pushes the button to the very bottom
                        alignSelf: "center", // Optional: Center the button horizontally
                        "&:hover": {
                            backgroundColor: "#e3f2fd",
                            borderColor: "#1565c0",
                        },
                        
                    },
                },
            ],
        },
        
        MuiTextField: {
            styleOverrides: {
                root: {
                    marginBottom: "16px", // Adds spacing between fields
                    "& .MuiInputBase-root": {
                        backgroundColor: "#d0d5dd", // Light background for inputs
                        borderRadius: "25px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e0e0e0", // Default border color
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1976d2", // Hover border color
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1565c0", // Focus border color
                    },
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#757575", // Label color
                    "&.Mui-focused": {
                        color: "#1976d2", // Focused label color
                    },
                },
            },
        },
       
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#757575", // Label color
                    "&.Mui-focused": {
                        color: "#1976d2", // Focused label color
                    },
                },
            },
        },


    },

});

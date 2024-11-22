import type { LinksFunction } from "@remix-run/node";
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    ThemeProvider,
    createTheme,
} from "@mui/material";

import appStylesHref from "../tailwind.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: appStylesHref },
];

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    boxShadow: "none",
                    borderBottom: "1px solid #e0e0e0",
                    display:"grid",
                    gridTemplateRows: "auto",
                    position:"fixed",
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
                    color:"black",
                    textDecoration:"none",
                    textTransform: "none",
                    gap: 5,
                },
            },
        },
    },
});
export function Header() {
    return (
       <>
           <ThemeProvider theme={theme}>
               <AppBar >
                   <Toolbar>
                       {/* Logo */}
                       <Box component="img"
                            src="https://cdn.prod.website-files.com/65eeb1c04628f3bbeed86c6a/65eef0966b0dcf9469ebf83a_logo.svg"
                            alt="Logo"/>
                       {/* Navigation Links */}
                       <Box>
                           <Button to="/Home">Link naar deze pagina</Button>
                           <Button to="/">Update GeoJSON</Button>
                           <Button to="/">Upload GeoJSON</Button>
                           <Button to="/">Help</Button>
                           <Button to="/">Documentatie</Button>
                           <Button to="/">Upload GeoJSON</Button>
                           <Button to="/">Naam Gemeente</Button>
                       </Box>
                   </Toolbar>
               </AppBar>
           </ThemeProvider></>
    );
}

import {
    AppBar,
    Box,
    Toolbar,
    Button,
    ThemeProvider,
} from "@mui/material";
import { theme } from "./styles";


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

import { AppBar, Toolbar, Box } from "@mui/material";
import { NavLink } from "@remix-run/react";



export function Header() {
    return (
        <AppBar sx={{backgroundColor: "#ffffff", color: "darkgrey", boxShadow: "none", borderBottom: "1px solid #e0e0e0",}}>
            <Toolbar>
                {/* Logo */}
                <Box component="img"
                    src="https://cdn.prod.website-files.com/65eeb1c04628f3bbeed86c6a/65eef0966b0dcf9469ebf83a_logo.svg"
                    alt="Logo"
                    sx={{ height: 40, marginRight: 2 }}
                />

                {/* Navigation Links */}
                <Box sx={{display: "flex", flexGrow: 1, justifyContent: "flex-end", alignItems: "center", gap: 4,}}>
                    <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/Home">Link naar deze pagina</NavLink>
                    <NavLink style={{ textDecoration: "none",  color: "inherit" }}  to="/" >Update GeoJSON</NavLink>
                    <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/">Upload GeoJSON</NavLink>
                    <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/">Help</NavLink>
                    <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/">Documentatie</NavLink>
                    <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/">Upload GeoJSON</NavLink>
                    <NavLink style={{ textDecoration: "none", color: "inherit" }} to="/">Naam Gemeente</NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

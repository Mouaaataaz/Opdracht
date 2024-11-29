import React from "react";
import {
    Typography,
    Toolbar,
    Box,
    Button,
    AppBar,
    ThemeProvider,
    CssBaseline,
    TextField,
    Grid,
    List,
    ListItemText,
} from "@mui/material";
import { faTrash, faUser, faBookOpen, faPersonWalking, faArrowUpLong, faRotate, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "~/theme/theme"; 

// Sidebar Component
function Sidebar() {
    const menuItems = ["Algemene informatie", "Overheidsplannen", "Vergunningen", "Milieu", "Natuur", "Grond-en pandenbeleid", "Onroerend erfgoed", "Erfdienstbaarheden", "Gemeentelijke heffingen"];

    return (
        <Box className="SidebarBox">
            <List variant="">
                {menuItems.map((item, index) => (
                    <ListItemText variant="itemssidebar" key={index} primary={item} />
                ))}
            </List>


            {/* Add margin-top: auto to push the button to the bottom */}
            <Button variant="footer" href="/" >Terug naar de kaart</Button>
        </Box>
    );
}

// Main Component
function FormExample() {
    const formFields = [
        { label: "Onderwerp", name: "onderwerp", defaultValue: "Voorstel erfnummer 27", xs: 12 },
        { label: "Referentie", name: "reference", defaultValue: "123456/ERFG", xs: 6 },
        { label: "Type", name: "type", defaultValue: "Beschermd artikel of aangewezen", xs: 6 },
        { label: "Geldig van", name: "validFrom", defaultValue: "2023-01-01", xs: 6, type: "date" },
        { label: "Geldig tot en met", name: "validTo", defaultValue: "2023-12-31", xs: 6, type: "date" },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* Full Screen Grid Layout */}
            <Box sx={{ display: "grid", gridTemplateRows: "auto 1fr", height: "100vh" }}>
                {/* Header */}
                <AppBar position="relative">
                    <Toolbar>
                        {/* Logo */}
                        <Box
                            component="img"
                            src="https://cdn.prod.website-files.com/65eeb1c04628f3bbeed86c6a/65eef0966b0dcf9469ebf83a_logo.svg"
                            alt="Logo"
                            sx={{ height: 40 }}
                        />
                        {/* Navigation Links */}
                        <Box sx={{ display: "flex", gap: 2, ml: "auto", textDecoration:"none", textTransform:"none" }}>
                            
                            <Button  startIcon={<FontAwesomeIcon icon={faPaperclip} />}/>
                            <Button  startIcon={<FontAwesomeIcon icon={faRotate} />}/>
                            <Button  startIcon={<FontAwesomeIcon icon={faArrowUpLong} />}/>
                            <Button  startIcon={<FontAwesomeIcon icon={faPersonWalking} />}/>
                            <Button  startIcon={<FontAwesomeIcon icon={faBookOpen} />}/>
                            <Button  startIcon={<FontAwesomeIcon icon={faUser} />}></Button>
                            <Button >Naam Gemeente</Button>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Content Area */}
                <Box sx={{ display: "grid", gridTemplateColumns: "250px 1fr", height: "100%", overflow: "hidden", gridTemplateColumns: "250px 1px 1fr" }}>
                    {/* Sidebar */}
                    <Sidebar />
                    
                        {/* Divider */}
                         <Box sx={{ backgroundColor: "#ddd", width: "1px" }} />

                    {/* Form Container */}
                    <Box sx={{ overflowY: "hidden", padding: 2 }}>
                        <Grid container spacing={3} alignItems="center">
                            {/* Header with Buttons */}
                            <Grid item xs={8}>
                                <Typography variant="h5">VIP-00000011 / Onroerend erfgoed</Typography>
                            </Grid>
                            
                            <Grid item xs={4}sx={{display: "flex", justifyContent: "flex-end", gap: 2 }}>
                                <Button variant="outlined">1 openstaande inlichting</Button>
                                <Button variant="contained">Dossier weigeren</Button>
                            </Grid>
                        </Grid>

                        {/* Form Fields */}
                        <Grid container spacing={3}>
                            {formFields.map(({ label, name, defaultValue, xs, type }, index) => (
                                <Grid key={index} item xs={xs}>
                                    <Typography>{label}</Typography>
                                    <TextField
                                        name={name}
                                        type={type || "text"}
                                        variant="outlined"
                                        fullWidth
                                        defaultValue={defaultValue}
                                    />
                                </Grid>
                            ))}
                            <Grid item xs={12}>
                                <Typography>Bijlages</Typography>
                                <TextField
                                    name="attachments"
                                    type="file"
                                    variant="outlined"
                                    fullWidth
                                    helperText="Het bestand is verplicht een PDF met een maximale bestandsgrootte van 8MB"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default FormExample;

import React from "react";
import { Form, useActionData } from "@remix-run/react";
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
import { json } from "@remix-run/node";
import fs from "fs";

import path from "path";

// Define the path to the JSON file
const filePath = path.resolve("./test.json");

// Loader function to provide data to the form
export async function loader() {
    let existingData;
    try {
        const fileContents = fs.readFileSync(filePath, "utf-8");
        existingData = JSON.parse(fileContents);
    } catch (error) {
        console.error("Error reading the JSON file:", error);
        existingData = {}; // Provide an empty object as fallback
    }

    return json({ data: existingData });
}

// Action function to handle form submission
export async function action({ request }: { request: Request }) {
    const formData = await request.formData();

    // Create a new object from the submitted form data
    const newData = {
        onderwerp: formData.get("onderwerp") || "",
        reference: formData.get("reference") || "",
        type: formData.get("type") || "",
        validFrom: formData.get("validFrom") || "",
        validTo: formData.get("validTo") || "",
    };

    // Overwrite the JSON file with the new data
    try {
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing to the JSON file:", error);
        return json({ success: false, message: "Failed to save form data." });
    }

    // Return success response
    return json({ success: true, message: "Form data saved successfully!", data: newData });
}


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
function View() {
    const actionData = useActionData<typeof action>();



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
                        <Box sx={{ display: "flex", gap: 2, ml: "auto", textDecoration: "none", textTransform: "none" }}>

                            <Button startIcon={<FontAwesomeIcon icon={faPaperclip} />} />
                            <Button startIcon={<FontAwesomeIcon icon={faRotate} />} />
                            <Button startIcon={<FontAwesomeIcon icon={faArrowUpLong} />} />
                            <Button startIcon={<FontAwesomeIcon icon={faPersonWalking} />} />
                            <Button startIcon={<FontAwesomeIcon icon={faBookOpen} />} />
                            <Button startIcon={<FontAwesomeIcon icon={faUser} />}></Button>
                            <Button >Naam Gemeente</Button>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Content Area */}
                <Box sx={{ display: "grid", height: "100%", overflow: "hidden", gridTemplateColumns: "250px 1px 1fr" }}>
                    {/* Sidebar */}
                    <Sidebar />

                    {/* Divider */}
                    <Box sx={{ backgroundColor: "#ddd", width: "1px", height: "100%"}} />

                    {/* Form Container */}
                    <Form method="post">
                        <Box sx={{ overflowY: "auto", padding: 2, height: "100%", display:"flex", flexDirection:"column" }}>
                            <Grid container spacing={1} alignItems="center">
                                {/* Header with Buttons */}
                                <Grid item xs={8}>
                                    <Typography variant="h5">VIP-00000011 / Onroerend erfgoed</Typography>
                                </Grid>

                                <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                                    <Button variant="outlined">1 openstaande inlichting</Button>
                                    <Button variant="contained">Dossier weigeren</Button>
                                </Grid>
                            </Grid>

                            {/* Form Fields */}
                            <Grid container spacing={1}>
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
                                     {/* Submit Button */}
                                <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
                                      {/* Display Feedback */}
                                {actionData?.message && (
                                    <p style={{ color: actionData.success ? "green" : "red" }}>
                                        {actionData.message}
                                    </p>
                                )}
                                    <Button variant="contained" type="submit">
                                        Submit Form
                                    </Button>
                                  
                                </Box>
                                </Grid>
                               
                            </Grid>


                        </Box>
                    </Form>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default View;

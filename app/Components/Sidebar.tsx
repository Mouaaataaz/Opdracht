import {Box, Typography, IconButton, Checkbox} from "@mui/material";


function SidebarBox() {
    return (
        <Box className="boxContainer">
            {/* Header */}
            <Box className="boxHeader">
                <Typography variant="body2" className="boxHeaderText">
                    Nog 3 dagen
                </Typography>
            </Box>

            {/* Title and Subtitle */}
            <Box>
                <Typography variant="h6" className="boxTitle">
                    Aanvraag
                </Typography>
                <Typography variant="body2" className="boxSubtitle">
                    CaPaKey
                </Typography>
            </Box>

            {/* Footer */}
            <Box className="boxFooter">
                <Typography variant="body2" className="boxFooterText">
                    450ZTB0332/00R000
                </Typography>
                <IconButton className="boxIconButton">
                    {/* Add Icon */}
                </IconButton>
            </Box>

            {/* Reference */}
            <Typography variant="body2" className="boxReference">
                Vip referentie: VIP-0000011
            </Typography>
        </Box>
    );
}


export function Sidebar() {
    return (
        <Box className="sidebarContainer">
            {/* Filters Section */}
            <Typography className="typographyContainer">Todo: filters</Typography>


            {/* Checkbox and Text in the Same Row */}
            <Box className="sidebarFilterSection">
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

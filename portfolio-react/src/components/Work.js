import { Typography, Grid } from "@mui/material";
import reactImg from "../media/review-code.svg";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box } from "@mui/system";

const Work = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000F2E",
        padding: 3,
        border: "1px solid #00C7FF",
        borderRadius: "10px",
        maxWidth: "315px",
        postion: "relative",
        mx: 3,
      }}
    >
      <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
        Emprendimiento { " " }  Servicio Tecnico de PC { " " } Marzo 2021 - Mayo 2022
        <ul>
        <li>Instalación de Software</li>
        <li>Instalación de Software</li>
        <li>Instalación de Software</li>
        </ul>
      </Typography>
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>Cornelus</span>{" "}
        <span style={{ color: "#7B89A8" }}>CEO - Jupiter</span>
      </Typography>
    </Box>
  );
};

export default Work;

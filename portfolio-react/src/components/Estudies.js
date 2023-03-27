import { Typography, Grid } from "@mui/material";
import reactImg from "../media/review-code.svg";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box } from "@mui/system";

const Esudies = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000F2E",
        padding: 3,
        border: "1px solid #00C7FF",
        borderRadius: "10px",
        maxWidth: "475px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        mx: "auto",
        mb:5,
      }}
    >
    <Box  component="img" sx={{ width:120, mt: 4, mb: 4}} src="https://portfolio-dante.vercel.app/static/media/unpaz.97a3da36a2cce19ae480.jpg" />
      <div>
      <Typography variant="body1" sx={{ color: "white", mb: 2, mr:2 }}>
      <h3> Universidad Nacional de José C. Paz{ " " }</h3>
        <h4>Analistas de Sistemas (Nivel Inicial)</h4>
        <h4> 2021 - Actualidad</h4>
      </Typography>
    
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>UNPAZ</span>{" "}
      </Typography>
      
      </div>
    </Box>
  );
};

export default Esudies;

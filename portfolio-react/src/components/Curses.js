import { Typography, Grid } from "@mui/material";
import reactImg from "../media/review-code.svg";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Box } from "@mui/system";

const Curses = ({img, title, nombre, fecha}) => {
  return (
    <Box
      sx={{
        
        padding: 3,
        width: "475px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        mx: 3,
        mb:5,
      }}
    >
    <div>
    <Box  component="img" sx={{ width:120, mt: 4, mb: 4}} src={img} />
    </div>
      <div>
      <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
        
        <h3> </h3>
        <h4>{nombre}</h4>
        <h4> {fecha} </h4>
      </Typography>
    
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>{ title }</span>{" "}
      </Typography>
      
      </div>
    </Box>
  );
};

export default Curses;

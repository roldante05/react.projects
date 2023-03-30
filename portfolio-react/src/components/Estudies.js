import { Typography, Grid } from "@mui/material";
import unpaz from "../media/unpaz.png";
import { Box, styled } from "@mui/system";

const Esudies = () => {

  const BoxEstudies = styled(Box)(({ theme })  => ({
    [theme.breakpoints.down("md")]: {
     
    },
    [theme.breakpoints.down("sm")]: {
      padding:"25px 20px",
      backgroundColor:"black",
      // margin:"10px 0px",
      width:"340px",
      border: "1px solid #00C7FF",
      backgroundColor: "#000F2E",
    borderRadius: "10px",
      justifyContent:"start"
    },
  }))

  
  return (
    <BoxEstudies
      sx={{
        backgroundColor: "#000F2E",
        padding: 3,
        // border: "1px solid #00C7FF",
        borderRadius: "10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        mx: "auto",
        mb:5,
      }}
    >
      
    <Box className="img-unpaz" component="img" sx={{ width:120, mt: 4, mb: 4, mr:4 }} src={unpaz} />
      
      <div>
      <Typography variant="body1" sx={{ color: "white", mb: 2, mr:2 }}>
      <h3> Universidad Nacional de José C. Paz{ " " }</h3>
        <h4>Analistas de Sistemas (Nivel Inicial)</h4>
        <h4> </h4>
      </Typography>
        
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>2021 - Actualidad</span>{" "}
      </Typography>
      </div>
      
    </BoxEstudies>
  );
};

export default Esudies;

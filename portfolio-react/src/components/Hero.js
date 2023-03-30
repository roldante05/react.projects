import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import reactImg from "../media/review-code.svg";

const Hero = () => {

const CustomButton = styled(Button)(({theme}) => ({
border:"3px solid transparent",
backgroundColor:"#00C7FF",
color:"white",
width:"20%",
borderRadius:"25px",
"&:hover": {
    border: "3px solid white",
    backgroundColor:"transparent",
},
[theme.breakpoints.down("md")]: {
    width:"35%",
},
[theme.breakpoints.down("sm")]: {
    width:"50%",
},

}));
const CustomTitle = styled(Typography)(({theme}) => ({
color:"white",
textAlign:"center",
[theme.breakpoints.down("md")]: {
    fontSize:"3.5rem",
},
[theme.breakpoints.down("sm")]: {
    fontSize:"2.5rem",
},

}));

  return (<Box sx={{mt: 8, mb: 12, p:2, maxWidth:"1200px", mx:"auto"}}  >
  <div>

    <Typography sx={{color: "white", textAlign:"center", md:2}} variant="h4" >
        Hola, Me llamo Dante !
    </Typography>
    <CustomTitle variant="h3" >
        Soy <span style={{color:"rgba(0, 199,255,255)"}}  >Desarrollador</span> {" "} Web <span style={{color:"rgba(0, 199,255,255)"}} >Trainee</span> 
    </CustomTitle>
  </div>
    <Box sx={{display:"flex", flexDirection: "column", alignItems:"center", justifyContent:"center", gap:"1rem"}} >
    <Box component="img" sx={{ width:190, mt: 4, mb: 4}} src={reactImg} />

    <CustomButton>Contactame</CustomButton>

    </Box>
  </Box>
  );
};

export default Hero;
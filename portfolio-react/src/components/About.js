import { Box, Button, Typography, styled } from "@mui/material";
import Work from "./Work";

const About = () => {
  const CustomBox = styled(Box)(({theme}) => ({
        display:"flex",
        justifyContent:"space-around",
        [
            theme.breakpoints.down("md")]: {
                flexDirection:"column",
                alignItems:"center",
                gap:"2rem",
            },
    }));

    const CustomTitleBox = styled(Box)(({theme}) => ({
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        [
            theme.breakpoints.down("md")]: {
                flexDirection:"column",
                alignItems:"center",
                gap:"2rem",
            },
    }));
    const CustomButton = styled(Button)(({theme}) => ({
        border:"3px solid white",
        borderRadius:"25px",
        display:"block",
        color:"white",
        width:"15%",
        "&:hover":{
          border:"3px solid #00C7FF",
        },
            [
               theme.breakpoints.down("md")]: {
                width:"50%",
            },
            [
               theme.breakpoints.down("sm")]: {
                width:"75%",
            },
    }));
  return <Box sx={{maxWidth:"1300px", my: 10, padding: 3, mx:"auto"}} id="about" >
    <CustomTitleBox>
    <Typography variant="h4" sx={{color:"white", textAlign:"center"}} >
       Mi experienca laboral ! 
           </Typography>
      <div 
      style={{
        height:"5px",
        backgroundColor:"#00C7FF",
        width:"50%",
        border:0,
        borderRadius:"25px"
      }} >
      </div>
    </CustomTitleBox>
    <CustomBox sx={{my: 7}} >
    <Work/>
    <Work/>
    </CustomBox>

    <div 
      style={{
        height:"5px",
        backgroundColor:"#00C7FF",
        width:"100%",
        border:0,
        borderRadius:"25px"
      }} >
      </div>
  </Box>;
};

export default About;
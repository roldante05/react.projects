import { Box, Typography } from "@mui/material";

const Icon = ({name, src}) => {
  return <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", mb: 4, mt:4}} >
<img src={src} height="50px" width="50px" /> 
<Typography variant="body1" sx={{color: "white", mt: 1,mb: 1, color:"gray"}}  >
    {name}
</Typography>
  </Box>;
};

export default Icon;
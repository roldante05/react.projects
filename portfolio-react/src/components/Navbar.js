import Toolbar from '@mui/material/Toolbar';
import  Typography  from '@mui/material/Typography';
import { Button } from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import navIcon from "../media/logo-react.png";
import { Link } from 'react-scroll';
import {styled} from '@mui/system';
import AppBar from '@mui/material/AppBar'
import Box from "@mui/material/Box";


const Navbar = () => {
    const CustomBox = styled(Box)(({theme}) => ({
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"1rem",
        [
            theme.breakpoints.down("sm")]: {
                marginTop:"1rem",
            },
    }));

    const CustomToolbar = styled(Box)(({theme}) => ({
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        [
            theme.breakpoints.down("sm")]: {
                flexDirection:"column",
            },
    }));

  return <Box sx={{flexGrow: 1, px:5, py:2, maxWidth: "1200px", mx: "auto"}} id="home" >
            <AppBar position="static" style = {{background: "transparent", boxShadow:"none"}} >
              <CustomToolbar>
                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem"}}>
                <Box component="img" sx={{maxHeight:"45px", maxWidth:"45px", objectFit:"cover"}} src={navIcon} />
                <Typography variant="h6" component="div" sx={{flexGrow: 1}} >
                    Mi Portfolio
                </Typography>
                </Box>

                <CustomBox  >
                <Link to="home" className="link" smooth >
                    Inicio
                </Link>
                <Link to="experience" className="link" smooth >
                    Proyectos
                </Link>
                <Link to="about" className="link" smooth >
                    Sobre mi
                </Link>
                <Link to="skills" className="link" smooth >
                Tecnologías
                </Link>
                </CustomBox>

              </CustomToolbar>
            </AppBar>
    </Box>
  
}

export default Navbar
import { Box, Typography } from "@mui/material";
import { projects } from "../resources/projects";
import Project from "./Project";
import Stack from "./Stack";


const Experience = () => {
  return (
  <Box sx={{maxWidth: "1300px", mx:"auto", my: 12}} id="experience" >
    <Typography variant="h4" sx={{color:"white", textAlign:"center", mb:2}} >
    Los siguientes 
    <span style={{color:"rgba(0,199,255,255)"}} > proyectos </span>
     que he realizado:
    </Typography>
    <Box sx={{display:"flex", justifyContent:"center", flexWrap:"wrap"}} >
        {
            projects.map((project) => (
                
                <Project key={project.id} title={project.nombre} description={project.descripcion} tags={project.tags} img={project.imagen} />
            ))
        }
    </Box>
  </Box>
  );
};

export default Experience;
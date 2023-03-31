import { Box, Button, Typography, styled } from "@mui/material";
import Stack from "./Stack";
import Work from "./Work";
import Estudies from "./Estudies";
import Curses from "./Curses";
import { estudies } from "../resources/estudies";
import { experiences } from "../resources/experiences";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#000F2E",
    // borderRadius: "10px",
    // border: "1px solid #00C7FF",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
      width: "400px",
      margin: "5px auto",
      backgroundColor: "rgba(0, 10, 31, 255)",
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));
  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid white",
    borderRadius: "25px",
    display: "block",
    color: "white",
    width: "15%",
    "&:hover": {
      border: "3px solid #00C7FF",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  }));
  return (
    <Box sx={{ maxWidth: "1300px", my: 10, padding: 3, mx: "auto" }}>
      <CustomTitleBox sx={{ my: 3 }}>
        <Typography
          variant="h4"
          sx={{ color: "white", textAlign: "center" }}
          id="skills"
        >
          Dominios de tecnologías !
        </Typography>
      </CustomTitleBox>
      <Stack />
      <CustomTitleBox sx={{ my: 7 }}>
        <Typography
          variant="h4"
          sx={{ color: "white", textAlign: "center", mr: 2 }}
          id="about"
        >
          Mi experienca laboral
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "50%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>
      </CustomTitleBox>

      <CustomBox sx={{ my: 7 }}>
        {experiences.map((experience) => (
          <Work
            key={experience.id}
            title={experience.title}
            nombre={experience.nombre}
            img={experience.imagen}
            fecha={experience.fecha}
            descripcion={experience.descripcion}
          />
        ))}
      </CustomBox>

      <CustomTitleBox sx={{ my: 6 }}>
        <Typography
          className="title-estudie"
          variant="h4"
          sx={{ color: "white", textAlign: "center", mr: 2 }}
          id="about"
        >
          Formación academica
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "50%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>
      </CustomTitleBox>
      <Estudies />
      <Typography
        variant="h4"
        sx={{ color: "white", textAlign: "center", my: 7 }}
        id="about"
      >
        Cursos de desarrollo profesional
      </Typography>
      <CustomBox sx={{ my: 1 }}>
        {estudies.map((estudie) => (
          <Curses
            key={estudie.id}
            title={estudie.title}
            nombre={estudie.nombre}
            fecha={estudie.fecha}
            img={estudie.imagen}
          />
        ))}
      </CustomBox>
      <div
        style={{
          height: "5px",
          backgroundColor: "#00C7FF",
          width: "100%",
          border: 0,
          borderRadius: "25px",
          marginTop: "50px",
        }}
      ></div>
    </Box>
  );
};

export default About;

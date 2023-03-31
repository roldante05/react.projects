import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";

const Work = ({ title, nombre, fecha, descripcion, img }) => {
  const BoxWork = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      padding: "25px 20px",
      backgroundColor: "black",
      margin: "10px 0px",
      width: "340px",
      border: "1px solid #00C7FF",
      backgroundColor: "#000F2E",
      borderRadius: "10px",
      justifyContent: "start",
    },
  }));

  return (
    <BoxWork
      sx={{
        padding: 3,

        width: "475px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mx: "auto",
      }}
    >
      <Box
        className="img-work"
        component="img"
        sx={{ width: 120, mt: 4, mb: 4 }}
        src={img}
      />
      <div>
        <Typography
          variant="body1"
          sx={{ color: "white", mb: 2, height: "175px" }}
        >
          <h3> </h3>
          <h4> {title} </h4>
          <h4> {nombre} </h4>

          <ul>
            {descripcion.map((descripcion) => (
              <li key={descripcion}>{descripcion}</li>
            ))}
          </ul>
        </Typography>
        <Typography variant="body2">
          <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
            {" "}
            {fecha}{" "}
          </span>{" "}
          <span style={{ color: "#7B89A8" }}></span>
        </Typography>
      </div>
    </BoxWork>
  );
};

export default Work;

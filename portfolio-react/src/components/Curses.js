import { Typography, Grid, styled } from "@mui/material";
import { Box } from "@mui/system";

const Curses = ({ img, title, nombre, fecha }) => {
  const BoxCurse = styled(Box)(({ theme }) => ({
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
    <BoxCurse
      sx={{
        // border: "1px solid #00C7FF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 3,
        width: "475px",

        mx: 3,
        mb: 3,
      }}
      className="box-curse"
    >
      <div>
        <Box
          className="img-curses"
          component="img"
          sx={{ width: 120, mt: 4, mb: 0 }}
          src={img}
        />
      </div>
      <div>
        <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
          <h4> {title} </h4>
          <h4>{nombre}</h4>
        </Typography>

        <Typography variant="body2">
          <span style={{ color: "#33C7FF", fontWeight: "bold" }}>{fecha}</span>{" "}
        </Typography>
      </div>
    </BoxCurse>
  );
};

export default Curses;

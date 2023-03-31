import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";

const Project = ({ title, description, tags, img }) => {
  return (
    <Card sx={{ maxWidth: 375, margin: "1rem" }}>
      <CardActionArea>
        <CardMedia component="img" image={img} style={{ height: "195px" }} />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: "45px", margin: "15px 0px" }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            mx: "auto",
            mb: 3,
          }}
        >
          <Button
            size="small"
            style={{ backgroundColor: "rgba(0,199,255,255)" }}
            variant="contained"
          >
            Ver Código
          </Button>
          <Button
            size="small"
            style={{ backgroundColor: "rgba(0,199,255,255)" }}
            variant="contained"
          >
            Vistar Demo
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "irem",
            mb: 2,
          }}
        >
          {tags.map((tag) => (
            <Chip sx={{ mx: 1 }} label={tag} key={tag} variant="outlined" />
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};

export default Project;

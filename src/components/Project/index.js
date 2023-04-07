import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Project({ project }) {
  const { name, title, repo, link, description } = project;

  return (
    <Card
      className="float"
      sx={{
        maxWidth: 700,
        backgroundColor: "rgb(26, 26, 26)",
        border: "rgb(26, 26, 26) 2px solid",
        mb: "20px",
        boxShadow: "5px 10px 10px grey",
      }}
    >
      <CardMedia
        component="img"
        alt={name}
        height="300"
        image={require(`../../assets/projects/${name}.jpg`)}
      />
      <CardContent>
        <Typography
          sx={{ color: "white" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="rgb(117, 117, 117)">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button href={repo} target="_blank" size="small">
          Github
        </Button>
      </CardActions>
    </Card>
  );
}

export default Project;

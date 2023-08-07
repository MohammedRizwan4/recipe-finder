import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Recipe = ({ title, calories, image, ingredients }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345, display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        <CardHeader title={title} subheader={`Calories : ${calories.toFixed(2)}`} />
        <CardMedia component="img" height="194" image={image} alt={title} />

        <CardActions disableSpacing style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>Ingredients</div>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            style={{ cursor: "pointer" }}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {ingredients.map((ingredient, index) => (
              <Typography paragraph>{ingredient.text}</Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>

      {/* <p> {title} </p>
      <p>{calories}</p>
      <img src={image} alt="" />
      <ol>
        {" "}
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol> */}
    </div>
  );
};

export default Recipe;

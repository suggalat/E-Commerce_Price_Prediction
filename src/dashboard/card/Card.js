import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Row from "./row";
import Header from "./cardHeader";
import { Link, Route } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Header change={props.Change} />
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Laptop"
          image={props.Image}
          title="Laptop"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h8">
            {props.name}
          </Typography>
          <div style={{textAlign: "left", width: "150%"}}>
          <Row 
            current_price={props.price}
            expected={props.expected}
            growth={props.per}
          />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.link} target="_blank">
          <Button variant="contained" color="primary" component="span">
            <b>view Now</b>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}

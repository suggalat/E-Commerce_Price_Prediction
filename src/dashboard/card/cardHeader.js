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
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import PanToolIcon from '@material-ui/icons/PanTool';

export default function ImgMediaCard(props) {
  if (props.change >= 0) {
    return (
      <CardHeader
        avatar={<ThumbUpIcon style={{ color: "Green", fontSize: 50  }} />}
        subheader="Price is Expected to Rise"
        title="Buy Now"
      />
    );
  } else {
    return (
      <CardHeader
        avatar={<PanToolIcon style={{ color: "Red", fontSize: 50   }} />}
        subheader="Price is Expected to Drop"
        title="Wait"
      />
    );
  }
}

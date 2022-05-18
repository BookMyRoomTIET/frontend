import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./css/HostelCard.css";

const HostelCard = ({ hostel, image }) => {
  const LongText = ({ content, limit }) => {
    const [showAll, setShowAll] = useState(false);

    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);

    if (content.length <= limit) {
      // there is nothing more to show
      return <div>{content}</div>;
    }
    if (showAll) {
      // We show the extended text and a link to reduce it
      return (
        <div>
          {content}
          <button onClick={showLess}>Read less</button>
        </div>
      );
    }
    // In the final case, we show a text with ellipsis and a `Read more` button
    const toShow = content.substring(0, limit) + "...";
    return (
      <div>
        {toShow}
        <button onClick={showMore}>Read more</button>
      </div>
    );
  };

  return (
    <div>
      {" "}
      <Card className="hostelCard" sx={{ maxWidth: 345, margin: "3%" }}>
        <CardActionArea>
          <Link to={`/hostel/${hostel.hostel_id}`}>
            <CardMedia
              component="img"
              height="140"
              image={image.image_link1}
              alt="green iguana"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {hostel.hostelName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <LongText content={hostel.description} limit={100} />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default HostelCard;

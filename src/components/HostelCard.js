import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./css/HostelCard.css";

const HostelCard = () => {
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
          <Link to={`/hostel/1`}>
            <CardMedia
              component="img"
              height="140"
              image="http://www.thapar.edu/images/hostel/hostelA1.jpg"
              alt="green iguana"
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hostel K
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <LongText
                content="Hostel-K is having 2 floors with 2 blocks. Each block is having separate arrangements of water purifiers &amp; bathrooms with geysers. There is high speed internet connection in each blocks. To keep students physically fit GYM facility is also provided to students to keep students updated with current affairs T.V. Room with sitting facility &amp; newspapers are also provided. Best quality of food is served in hostel mess. Best cleaning of provided in rooms and washrooms . indoor games T.T TABLES, CARROM BOARD, CHESS are available in hostel. 6 reading rooms, 1 laundry room, night mess, and 2 guest rooms are available for students and there parents for staying in hostel and big parking stand is available in outside of hostel, and big lawns are available inner and outer side hostels."
                limit={100}
              />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default HostelCard;

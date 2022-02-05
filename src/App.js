import { useState, useEffect } from "react";
import { albums } from "./albums";
import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

function App() {
  const [data, setData] = useState([]);
  const [sortTypeAsc, setSortTypeAsc] = useState("albums");
  const [sortTypeDesc, setSortTypeDesc] = useState("albums");

  useEffect(() => {
    const sortArrayAsc = (type) => {
      const types = {
        albums: "albums",
        members: "members",
        formed: "formed_in",
      };
      const sortProperty = types[type];
      const sorted = [...albums].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };

    sortArrayAsc(sortTypeAsc);
  }, [sortTypeAsc]);

  useEffect(() => {
    const sortArrayAsc = (type) => {
      const types = {
        albums: "albums",
        members: "members",
        formed: "formed_in",
      };
      const sortProperty = types[type];
      const sorted = [...albums].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };

    sortArrayAsc(sortTypeDesc);
  }, [sortTypeDesc]);

  return (
    <div className="App">
      <div className="Options">
        <select onChange={(e) => setSortTypeAsc(e.target.value)}>
          <option value="albums">Albums</option>
          <option value="members">Members</option>
          <option value="formed">Formed in</option>
        </select>
      </div>
      <Grid container spacing={3}>
        {data.map((albums) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="AlbumCard" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={albums.img}
                  alt={albums.Title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {albums.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {albums.AlbumNumber} - {albums.Artist} - {albums.Year} -{" "}
                    {albums.OneToTen}/10 -
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;

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
  const [sortType, setSortType] = useState("albums");
  const [sortOther, setSortTypeOther] = useState("albums");

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        AlbumNumber: "AlbumNumber",
        Year: "Year",
        Rating: "OneToTen",
      };
      const sortProperty = types[type];
      const sorted = [...albums].sort(
        (a, b) => a[sortProperty] - b[sortProperty]
      );
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        AlbumNumber: "AlbumNumber",
        Year: "Year",
        Rating: "OneToTen",
      };
      const sortProperty = types[type];
      const sorted = [...albums].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
    };

    sortArray(sortOther);
  }, [sortOther]);

  return (
    <div className="App">
      <div className="options">
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="AlbumNumber">Album Number ⬆️</option>
          <option value="Year">Year ⬆️</option>
          <option value="Rating">Rating ⬆️</option>
        </select>

        <select onChange={(e) => setSortTypeOther(e.target.value)}>
          <option value="AlbumNumber">Album Number ⬇️</option>
          <option value="Year">Year ⬇️</option>
          <option value="Rating">Rating ⬇️</option>
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

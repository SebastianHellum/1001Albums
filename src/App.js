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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";

function App() {
  const [data, setData] = useState([]);
  const [sortType, setSortTypeAsc] = useState("albums");
  const [sortOther, setSortTypeDesc] = useState("albums");

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
      <div className="App-header">
        <h1 style={{ fontSize: "10vh", marginTop: "-5vh" }}>1001 Album</h1>
        <h2 style={{ fontSize: "8vh", marginTop: "-10vh" }}>du må høre</h2>
        <h2 style={{ fontSize: "8vh", marginTop: "-10vh" }}>før du</h2>
        <h2 style={{ fontSize: "8vh", marginTop: "-10vh" }}>dør</h2>
        <img src="./img/vinyl.png" alt="vinyl logo" className="vinyl-logo" />
      </div>
      <div>
        <Box
          sx={{ maxWidth: 200 }}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <FormControl fullWidth>
            <InputLabel>Sorter oppover ⬆️</InputLabel>
            <Select
              style={{ backgroundColor: "white" }}
              onChange={(e) => setSortTypeAsc(e.target.value)}
              label="Sorter oppover ⬆️"
            >
              <MenuItem value="AlbumNumber">Album Number ⬆️</MenuItem>
              <MenuItem value="Year">Year ⬆️</MenuItem>
              <MenuItem value="Rating">Rating ⬆️</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{ maxWidth: 200 }}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <FormControl fullWidth>
            <InputLabel>Sorter nedover ⬇️</InputLabel>
            <Select
              style={{ backgroundColor: "white" }}
              onChange={(e) => setSortTypeDesc(e.target.value)}
              label="Sorter nedover ⬇️"
            >
              <MenuItem value="AlbumNumber">Album Number ⬇️</MenuItem>
              <MenuItem value="Year">Year ⬇️</MenuItem>
              <MenuItem value="Rating">Rating ⬇️</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <Grid
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "2vh" }}
        container
        spacing={1}
      >
        {data.map((albums) => (
          <Grid item xs={12} md={3} lg={3}>
            <Card
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2vh",
                backgroundColor: "#f5f5f5",
                borderRadius: "20px",
              }}
              className="AlbumCard"
              sx={{ maxWidth: 345 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={albums.img}
                  alt={albums.Title}
                />
                <CardContent>
                  <Typography
                    style={{ color: "#00223b" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {albums.Title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {albums.AlbumNumber} - {albums.Artist} - {albums.Year} -{" "}
                    {albums.OneToTen}/10 -
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{
                  background: "linear-gradient(to right, #ce770d, #ff9311)",
                }}
              ></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;

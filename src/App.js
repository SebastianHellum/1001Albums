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
      <select onChange={(e) => setSortTypeAsc(e.target.value)}>
        <option value="albums">Albums</option>
        <option value="members">Members</option>
        <option value="formed">Formed in</option>
      </select>

      {data.map((band) => (
        <div key={band.id} style={{ margin: "30px" }}>
          <div>{`Band: ${band.name}`}</div>
          <div>{`Albums: ${band.albums}`}</div>
          <div>{`Members: ${band.members}`}</div>
          <div>{`Year of founding: ${band.formed_in}`}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

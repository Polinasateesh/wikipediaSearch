import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Card, Button, CircularProgress } from "@mui/material";
import logo from "../assets/logo.jpg";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);



  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/wikipedia/search/${searchTerm}`
      );
      setSearchResults(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
     
      <section style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "#006400", fontSize: "43px" }}>Tiny Wiki</h1>
      </section>

      <Card className="card">
        <section className="search-bar">
          <TextField
            variant="outlined"
            //   label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ borderRadius: "20px", width: "600px", marginRight: "15px" }}
            InputProps={{
              startAdornment: (
                <SearchIcon
                  sx={{
                    marginLeft: 1,
                    marginRight: 1,
                    color: "action.active"
                  }}
                />
              )
            }}
            size="small"
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            className="button"
          >
            Search
          </Button>
        </section>

        <section>
          {isLoading && <CircularProgress style={{ marginTop: "20px" }} />}

          {isLoading === false && (
            <ul>
              {searchResults.length == 0 ? (
                <p>No Data Availble</p>
              ) : (
                searchResults.map((result) => (
                  <li key={result.pageid}>
                    <a href={`/wiki/${result.title}`}>{result.title} </a>
                  </li>
                ))
              )}
            </ul>
          )}
        </section>
      </Card>
    </>
  );
};

export default SearchPage;

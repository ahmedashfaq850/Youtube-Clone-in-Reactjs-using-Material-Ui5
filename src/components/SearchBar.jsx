
import React from "react";
import { IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (searchTerm) {
        navigate(`/search/${searchTerm}`);

        //setSearchTerm("")
    }
  }

  return (
    <Box sx={{width:'30%', maxWidth:'30%', minWidth:'30%' ,height:'40px', background:'#202020', padding:'10px', display:'flex', justifyContent: 'space-between', borderRadius: '5px'}}>
      <input style={{flex:3, background: 'none', outline: 'none', border: 'none', color:'white', borderRight:'2px solid grey', width:'100%'}}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        value={searchTerm}
        type='search'
      />
      <IconButton onClick={handleSubmit}><SearchIcon style={{color:'white'}}/></IconButton>
    </Box>
  );
};

export default SearchBar;

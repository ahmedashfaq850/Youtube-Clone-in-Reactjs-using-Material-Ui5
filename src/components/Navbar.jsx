import { Box, Avatar, Stack, Typography, Badge } from "@mui/material";
import { logo } from "../utilities/constants";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import React from "react";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Box sx={{ padding: "0px 15px" }}>
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        pt={2}
        pr={5}
        pl={5}
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          justifyContent: "space-between",
        }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            height={45}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <SearchBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <VideoCallIcon style={{ color: "white", cursor: 'pointer' }} />
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon style={{ color: "white", cursor: 'pointer' }} />
          </Badge>
          <Avatar alt="Remy Sharp" src="" style={{width:'30px', height: '30px', cursor: 'pointer'}} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;

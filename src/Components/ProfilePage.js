import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ProfilePage = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("https://panorbit.in/api/users.json").then((response) => {
      setData(response.data.users);
      console.log(response.data.users);
    });
  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    if ("Logout") {
      navigate("../home-page", { replace: true });
    }
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <IconButton></IconButton>

            <Box sx={{ flexGrow: 5 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {data.map((item) => {
                      <img
                        className=".home-img"
                        src={item.profilepicture}
                        alt="Profile-Picture"
                        height={50}
                        width={50}
                      />;
                    })}
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="container">
        {data.map((item, id) => {
          return (
            <div>
              <div key={id}>
                <img
                className="container-img"
                  src={item.profilepicture}
                  alt="Profile-Picture"
                  height={75}
                  width={75}
                />
                <>
                  <div>{item.name}</div>
                  <div>Username: {item.username}</div>
                  <div>Email: {item.email}</div>
                  <div>Phone: {item.phone}</div>
                  <div>Website: {item.website}</div>
                </>
              </div>

              <>
                <div>Company</div>
                <div>Name: {item.company.name}</div>
                <div>Catchphrase: {item.company.catchPhrase}</div>
                <div>bs: {item.company.bs}</div>
              </>
              <>
                <div>Address</div>
                <div>Street: {item.address.street}</div>
                <div>Suite: {item.address.street}</div>
                <div>City: {item.address.city}</div>
                <div>Zipcode: {item.address.zipcode}</div>
              </>
              <>
                <div>Lat: {item.address.geo.lat}</div>
                <div>Long: {item.address.geo.lng}</div>
              </>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProfilePage;

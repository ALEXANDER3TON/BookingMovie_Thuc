import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import People from "@mui/icons-material/People";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import AddMovie from "../../../Module/Admin/AdminMovie/AddMovie";
import AdminMovieTable from "../AdminMenu/AdminMovieTable";
import AdminUserTable from "../AdminUserTable/AdminUserTable";

import {
  ContactEmergency,
  GroupAdd,
  LocalMovies,
  TheaterComedy,
} from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import { PATH } from "../../../Routes/path";
import AddUser from "../../../Module/Admin/AdminMovie/AddUser/AddUser";
const data = [
  { icon: <People />, label: "Quản lý người dùng" },
  { icon: <Dns />, label: "Quản lý phim" },
  { icon: <LocalMovies />, label: "Thêm phim" },
  { icon: <GroupAdd />, label: "Thêm người dùng" },
  { icon: <Public />, label: "Hosting" },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const DashBoard = () => {
  const [selectedComponent, setSelectedComponent] = useState("Quản lý phim");
  const [open, setOpen] = useState(true);

  const handleAddMovieClick = (label) => {
    if (label === "Thêm phim") {
      setSelectedComponent("Thêm phim");
    }
    if (label === "Quản lý phim") {
      setSelectedComponent("Quản lý phim");
    }
    if (label === "Quản lý người dùng") {
      setSelectedComponent("Quản lý người dùng");
    }
    if (label === "Thêm người dùng") {
      setSelectedComponent("Thêm người dùng");
    }
    if (label === "Hosting") {
      setSelectedComponent("Hosting");
    }
  };
  return (
    <Box sx={{ display: "flex", height: 600 }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  "&:hover, &:focus": { "& svg": { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="QUẢN TRỊ"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                  secondary="Quản lý người dùng, quản lý phim,..."
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: "16px",
                    color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? "rotate(-180deg)" : "rotate(0)",
                    transition: "0.2s",
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: "rgba(255,255,255,.8)" }}
                    onClick={() => handleAddMovieClick(item.label)}
                  >
                    <ListItemIcon sx={{ color: "inherit" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        fontWeight: "medium",
                      }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
      {selectedComponent === "Thêm phim" && <AddMovie />}
      {selectedComponent === "Quản lý phim" && <AdminMovieTable />}
      {selectedComponent === "Quản lý người dùng" && <AdminUserTable />}
      {selectedComponent === "Thêm người dùng" && <AddUser />}
      {selectedComponent === "Hosting" && <Navigate to={PATH.HOME} />}
    </Box>
  );
};

export default DashBoard;

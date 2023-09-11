import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Person2Icon from "@mui/icons-material/Person2";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";

const SideNav = () => {
  const [openSideNav, setSideNav] = useState({
    openSideNav: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSideNav({ ...openSideNav, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List sx={{ position: "relative" }}>
        {["Home", "About", "Portfolio", "Pricing", "Contact", "Exit"].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component="a"
                role="link"
                href={text !== "Exit" ? `#` + text : "#"}>
                <ListItemIcon>
                  {text == "Home" ? (
                    <HomeIcon />
                  ) : text == "Portfolio" ? (
                    <LibraryBooksIcon />
                  ) : text == "Resume" ? (
                    <FilePresentIcon />
                  ) : text == "Contact" ? (
                    <PhoneIcon />
                  ) : text == "About" ? (
                    <Person2Icon />
                  ) : (
                    <CloseIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      <Button onClick={toggleDrawer("left", true)} id="sidenav-trigger">
        <MenuIcon sx={{ color: "#fff" }} />
      </Button>
      <Drawer
        anchor="left"
        open={openSideNav["left"]}
        onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>
    </React.Fragment>
  );
};

export default SideNav;

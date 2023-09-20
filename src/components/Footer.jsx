import * as React from "react";
import { Box, Typography, Divider, Link } from "@mui/material";
import linkedIn from "../assets/linkedin_rounded_shiny.png";
import github from "../assets/github_round_shiny.png";
import email from "../assets/gmail.png";

const footerMenu = ["Home", "About", "Portfolio", "Pricing"];

const footerIcons = [linkedIn, github, email];

const Footer = () => {
  return (
    <Box
      component="section"
      id="Contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "rgb(44,46,45)",
        py: { xs: 8, sm: 12, md: 18 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
        }}
      >
        <Box
          component="nav"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "28px", mb: 2 }}>
            James Jannetti
          </Typography>
          <Box
            component="ul"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingInlineStart: "0px !important",
              mt: 1,
              mb: { xs: 4, sm: 2 },
              width: "100%",
              maxWidth: { xs: "300px", lg: "400px", xl: "500px" },
            }}
          >
            {footerMenu.map((menuItem) => (
              <Box
                component="li"
                key={menuItem}
                sx={{ display: "inline-block", listStyle: "none" }}
              >
                <Link
                  href={"#" + menuItem}
                  underline="hover"
                  sx={{ color: "#fff", fontSize: "20px" }}
                >
                  {menuItem}
                </Link>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "170px",
              mb: { xs: 2 },
            }}
          >
            {footerIcons.map((icon) => (
              <Link href="#" key={icon}>
                <img src={icon} alt="Footer Icon" className="footer-icon" />
              </Link>
            ))}
          </Box>
        </Box>
        <Divider
          variant="middle"
          sx={{ mt: 2, mb: 5, width: "100%", borderColor: "#fff" }}
        />
        <Box sx={{ textAlign: "center" }}>
          <Typography>© James Jannetti. All Rights Reserved 2023.</Typography>
          <Typography>
            Photos provided by Unsplash & Icons by Flaticon
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

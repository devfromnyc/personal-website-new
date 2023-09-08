import * as React from "react";
import Box from "@mui/material/Box";
import { ImageList, ImageListItem } from "@mui/material";
import { Typography, Divider } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
];

const FlipImages = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        textAlign: "center",
        backgroundColor: "#fff",
        width: "100%",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "rgb(54,57,62)",
          py: { xs: 8, sm: 14, lg: 20 },
        }}>
        <Typography variant="h2">Portfolio</Typography>
        <Divider
          variant="middle"
          sx={{ mt: 2, width: "25%", borderColor: "#fff", mb: 10 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: { xs: "-110px auto 0px auto", sm: "-160px auto 0px auto" },
          maxWidth: "1800px",
          width: "90%",
          height: "auto",
          overflowY: "auto",
        }}>
        <ImageList
          sx={{
            width: "100%",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr) !important",
              sm: "repeat(2, 1fr) !important",
            },
            pb: 12,
          }}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                mt: 4,
                pl: 2,
                pr: 2,
                perspective: "1000px",
                backgroundColor: "transparent",
              }}>
              <Box
                className="flip-card"
                sx={{ width: "100%", height: "350px" }}>
                <Box className="flip-card-inner">
                  <Box
                    className="flip-card-front"
                    sx={{
                      backgroundImage: `url(${item.img}?w=248&fit=crop&auto=format)`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backfaceVisibility: "hidden",
                    }}></Box>
                  <Box
                    className="flip-card-back"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}></Box>
                </Box>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default FlipImages;

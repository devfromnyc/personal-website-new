import * as React from "react";
import Box from "@mui/material/Box";
import { ImageList, ImageListItem } from "@mui/material";
import { Typography, Divider } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { fadeIn } from "../hooks/AnimationOptions";
import flipData from "../data/FlipCardData";

const pages = [
  "https://clone-38aca.web.app/",
  "https://savr-app-frontend-382e7.web.app/",
  "https://github.com/devfromnyc/todo-list",
  "https://fitness-app-66e8e.web.app/",
];

const FlipImages = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    if (!animated) {
      if (inView) {
        control.start("visible");
        setAnimated(true);
      } else {
        control.start("hidden");
        setAnimated(false);
      }
    }
  }, [control, inView]);
  return (
    <Box
      component="section"
      id="Portfolio"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        textAlign: "center",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "rgb(44,46,45)",
          py: { xs: 8, sm: 14, lg: 20 },
          margin: { xs: "0 auto -110px auto", sm: "0 auto -160px auto" },
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2.75rem", md: "3.75rem" } }}
        >
          Portfolio
        </Typography>
        <Divider
          variant="middle"
          sx={{
            mt: 2,
            width: "25%",
            borderColor: "#fff",
            mb: { xs: 5, sm: 10 },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          maxWidth: "1400px",
          width: "90%",
          height: "auto",
          overflowY: "auto",
        }}
      >
        <ImageList
          sx={{
            width: "100%",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr) !important",
              sm: "repeat(2, 1fr) !important",
            },
            pb: { xs: 12, lg: 24, xl: 32 },
          }}
        >
          {flipData.map((item, index) => (
            <ImageListItem
              key={item.img}
              component="a"
              href={pages[index]}
              role="link"
              target="_blank"
              sx={{
                mt: 4,
                pl: 2,
                pr: 2,
                perspective: "1000px",
                color: "#fff",
                backgroundColor: "transparent",
              }}
            >
              <motion.div
                className="slide-left"
                ref={ref}
                variants={fadeIn}
                initial="hidden"
                animate={control}
              >
                <Box
                  className="flip-card"
                  sx={{
                    width: "100%",
                    height: { xs: "250px", sm: "350px", lg: "500px" },
                  }}
                >
                  <Box className="flip-card-inner">
                    <Box
                      className="flip-card-front"
                      sx={{
                        backgroundImage: `url(${item.img}?w=248&fit=crop&auto=format)`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backfaceVisibility: "hidden",
                      }}
                    ></Box>
                    <Box
                      className="flip-card-back"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: {
                            xs: "24px",
                            sm: "32px",
                            md: "40px",
                            lg: "52px",
                          },
                          fontWeight: "600",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          mt: 1,
                          maxWidth: "350px",
                          fontSize: {
                            xs: "12px",
                            sm: "16px",
                            md: "20px",
                            lg: "24px",
                          },
                        }}
                      >
                        {item.projectInfo}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default FlipImages;

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ServicesGrid from "./ServicesGrid";
import shopifyIcon from "../assets/money-bag.gif";
import developmentIcon from "../assets/html.gif";
import freelanceIcon from "../assets/success.gif";

const ServicesContainer = () => {
  return (
    <Box
      component="section"
      id="Services"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        textAlign: "center",
        backgroundColor: "#fff",
        color: "#000",
        py: 12,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "700" }}>
        What I Do
      </Typography>
      <Divider
        variant="middle"
        sx={{ mt: 2, width: "25%", borderColor: "#000", mb: 6 }}
      />
      <ServicesGrid
        header="Web Development"
        paragraphText="I'm a web developer based out of New York City with 6+ years of
          experience in the field. My mission is to provide a professional web
          development experience to propel your business or personal aspirations.
          I possess a variety of skills including modern technologies like MERN
          stack, React.js, Material UI, & More!"
        mainImage={{
          src:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Coding Image",
        }}
        direction="row"
        mobileDirection="column"
        icons={[
          {
            src: shopifyIcon,
            alt: "Shopify",
            innerText:
              "This service covers any and all things Shopify! Whether you want a new online store or a theme extension, I've got you covered! I can also build re-usable components and custom landing pages for your store!",
          },
          {
            src: developmentIcon,
            alt: "Web Development",
            innerText:
              "A general service that covers personal websites and web projects that do not fall under the category of e-commerce. This can be anything from a portfolio website to a custom utility web application!",
          },
          {
            src: freelanceIcon,
            alt: "Freelance",
            innerText:
              "I'm available for hire as a freelancer or on a contract basis to handle your Shopify and/or general web development needs!",
          },
        ]}
      />
      <ServicesGrid
        header="Shopify Customizations"
        paragraphText="I'm a web developer based out of New York City with 6+ years of
          experience in the field. My mission is to provide a professional web
          development experience to propel your business or personal aspirations.
          I possess a variety of skills including modern technologies like MERN
          stack, React.js, Material UI, & More!"
        mainImage={{
          src:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Coding Image",
        }}
        direction="row-reverse"
        mobileDirection="column"
        icons={[
          {
            src: shopifyIcon,
            alt: "Shopify",
            innerText:
              "This service covers any and all things Shopify! Whether you want a new online store or a theme extension, I've got you covered! I can also build re-usable components and custom landing pages for your store!",
          },
          {
            src: developmentIcon,
            alt: "Web Development",
            innerText:
              "A general service that covers personal websites and web projects that do not fall under the category of e-commerce. This can be anything from a portfolio website to a custom utility web application!",
          },
          {
            src: freelanceIcon,
            alt: "Freelance",
            innerText:
              "I'm available for hire as a freelancer or on a contract basis to handle your Shopify and/or general web development needs!",
          },
        ]}
      />
      <ServicesGrid
        header="Freelancing"
        paragraphText="I'm a web developer based out of New York City with 6+ years of
          experience in the field. My mission is to provide a professional web
          development experience to propel your business or personal aspirations.
          I possess a variety of skills including modern technologies like MERN
          stack, React.js, Material UI, & More!"
        mainImage={{
          src:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Coding Image",
        }}
        direction="row"
        mobileDirection="column"
        icons={[
          {
            src: shopifyIcon,
            alt: "Shopify",
            innerText:
              "This service covers any and all things Shopify! Whether you want a new online store or a theme extension, I've got you covered! I can also build re-usable components and custom landing pages for your store!",
          },
          {
            src: developmentIcon,
            alt: "Web Development",
            innerText:
              "A general service that covers personal websites and web projects that do not fall under the category of e-commerce. This can be anything from a portfolio website to a custom utility web application!",
          },
          {
            src: freelanceIcon,
            alt: "Freelance",
            innerText:
              "I'm available for hire as a freelancer or on a contract basis to handle your Shopify and/or general web development needs!",
          },
        ]}
      />
    </Box>
  );
};

export default ServicesContainer;

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ServicesGrid from "./ServicesGrid";
import layersIcon from "../assets/layers.gif";
import apiIcon from "../assets/api.gif";
import websiteIcon from "../assets/scale.gif";
import webIcon from "../assets/web-design.gif";
import pagesIcon from "../assets/schedule.gif";
import databaseIcon from "../assets/database.gif";
import clockIcon from "../assets/speedometer.gif";
import promoIcon from "../assets/black-friday.gif";
import accessibilityIcon from "../assets/wheelchair.gif";

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
        pt: { xs: 8, sm: 12 },
        pb: { xs: 0, sm: 12 },
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2.75rem", md: "3.75rem" }, fontWeight: "700" }}
      >
        What I Do
      </Typography>
      <Divider
        variant="middle"
        sx={{ mt: 2, width: "25%", borderColor: "#000", mb: 6 }}
      />
      <ServicesGrid
        header="Web Development"
        paragraphText="I provide a variety of different web development services to fit your needs including but not limited to static & dynamic websites, full stack web applications, frontend development work, & more!"
        mainImage={{
          src:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Coding Image",
        }}
        direction="row"
        mobileDirection="column"
        icons={[
          {
            src: databaseIcon,
            alt: "Full Stack",
            innerText:
              "This service covers any and all things Shopify! Whether you want a new online store or a theme extension, I've got you covered! I can also build re-usable components and custom landing pages for your store!",
          },
          {
            src: webIcon,
            alt: "Frontend",
            innerText:
              "A general service that covers personal websites and web projects that do not fall under the category of e-commerce. This can be anything from a portfolio website to a custom utility web application!",
          },
          {
            src: websiteIcon,
            alt: "Platform",
            innerText:
              "One of the many Saas website builders such as squarespace or wix caught your eye? Looking to get your website up FAST? This might be the option for you!",
          },
        ]}
      />
      <ServicesGrid
        header="Shopify Customizations"
        paragraphText="This service covers any and all things Shopify! Shopify is a very powerful ecommerce tool that helps business thrive! Let me help you get the best out of your Shopify store with a variety of different Shopify related services including building custom components, landing pages, & third party app integrations!"
        mainImage={{
          src:
            "https://images.unsplash.com/photo-1586880244543-0528a802be97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Shopify Image",
        }}
        direction="row-reverse"
        mobileDirection="column"
        icons={[
          {
            src: layersIcon,
            alt: "Custom Components",
            innerText:
              "Custom Shopify components are additional pieces of reusable conent that extend your theme's store building capabilities. You can tweak them in the customize area in the same way as any default theme section!",
          },
          {
            src: pagesIcon,
            alt: "Landing Pages",
            innerText:
              "Need assistance in building custom landing pages and page templates? These tools are an excellent way to diversify your store's web content and user engagement",
          },
          {
            src: apiIcon,
            alt: "App Integrations",
            innerText:
              "Thid party apps are a great way to greatly extend the functionality of your store, however, sometimes it can be scary installing a new app, Let me help!",
          },
        ]}
      />
      <ServicesGrid
        header="Freelancing/For Hire"
        paragraphText="Need a developer for a project sprint or a fixed amount of time to compliment your development resources? I'm open to accepting contracts for development work or to be brought on a as a full-time employee!"
        mainImage={{
          src:
            "https://images.unsplash.com/photo-1589362281138-e3f7ebe47f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          alt: "Coding Image",
        }}
        direction="row"
        mobileDirection="column"
        icons={[
          {
            src: promoIcon,
            alt: "Seasonal",
            innerText:
              "Holiday seasons putting a strain on your development resources? I'm available to assist on projects and any development work during these promotional periods",
          },
          {
            src: clockIcon,
            alt: "TimeZone Flexible",
            innerText:
              "While I'm stationed on EST/ET, I am able to work in many different time zones including all timezones active in the United States",
          },
          {
            src: accessibilityIcon,
            alt: "Accessibility and Optimization",
            innerText:
              "Now more than ever, having an accessible website that is optimized for speed and efficiency is extremely important to your success. I offer consultations/services related to web accessibility and web optimization",
          },
        ]}
      />
    </Box>
  );
};

export default ServicesContainer;

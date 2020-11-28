import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Testimonials from "../components/Testimonials";
import Trips from "../components/Trips";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
  </Layout>
)

export default IndexPage

/*
  Build a Responsive Website using React, Gatsby, and GraphQL
  https://www.youtube.com/watch?v=smHhNzM5Uo4

  Go on: 02:13:00


*/ 

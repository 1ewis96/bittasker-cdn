// src/pages/Home.js
import React from "react";
import { useAuth } from "react-oidc-context";
import { Container } from "react-bootstrap";
import Navigation from "../pages/Navigation";
import Footer from "../pages/Footer";
import APIDocumentation from "../components/APIDocumentation"; // Import the API documentation component

const Home = () => {
  const auth = useAuth();

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <header className="bg-dark text-white text-center py-5">
        <h1>📡 BitTasker API Documentation</h1>
        <p className="lead">Integrate seamlessly with our powerful API.</p>
      </header>

      {/* Show API documentation for all users */}
      <APIDocumentation />

      <Container className="mt-4">
        <Footer />
      </Container>
    </>
  );
};

export default Home;

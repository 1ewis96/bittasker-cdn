import React, { useEffect } from "react";
import SwaggerUI from "swagger-ui-dist";
import "swagger-ui-dist/swagger-ui.css";

const APIDocumentation = () => {
  useEffect(() => {
    SwaggerUI.SwaggerUIBundle({
      dom_id: "#swagger-ui", // The element where Swagger UI will be rendered
      url: "https://cdn.bittasker.xyz/swagger.json", // Path to your Swagger JSON
	  theme: "BaseLayout",
    });
  }, []);

  return <div id="swagger-ui" style={{ height: "100vh" }} />;
};

export default APIDocumentation;

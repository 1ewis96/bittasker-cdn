import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container mt-5">
      <header className="mb-4 border-bottom pb-3">
        <h1 className="text-center">API Documentation</h1>
        <p className="text-center text-muted">Simple, modern, and clean API reference</p>
      </header>
      <section>
        <h2>Authentication</h2>
        <p>To use our API, include your API key in the request header:</p>
        <pre className="bg-light p-3 border rounded">
          {`curl -H "Authorization: Bearer YOUR_API_KEY" https://api.example.com/data`}
        </pre>
      </section>
      <section>
        <h2>Endpoints</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">GET /users</h5>
            <p className="card-text">Fetches a list of users.</p>
            <pre className="bg-light p-3 border rounded">
              {`{
  "users": [
    { "id": 1, "name": "John Doe" },
    { "id": 2, "name": "Jane Smith" }
  ]
}`}
            </pre>
          </div>
        </div>
      </section>
      <footer className="text-center mt-5">
        <p className="text-muted">&copy; 2025 API Docs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

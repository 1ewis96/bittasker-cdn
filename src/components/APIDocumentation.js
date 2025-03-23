// src/components/APIDocumentation.js
import React from "react";
import { Card, Container, Row, Col, ListGroup, Badge } from "react-bootstrap";

const APIDocumentation = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        {/* Sidebar Navigation */}
        <Col md={3}>
          <Card>
            <Card.Header className="bg-primary text-white">API Sections</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item action href="#authentication">🔐 Authentication</ListGroup.Item>
              <ListGroup.Item action href="#users">👥 Users</ListGroup.Item>
              <ListGroup.Item action href="#tasks">📋 Tasks</ListGroup.Item>
              <ListGroup.Item action href="#errors">⚠️ Error Handling</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* API Content */}
        <Col md={9}>
          {/* Authentication Section */}
          <Card className="mb-4" id="authentication">
            <Card.Body>
              <h3>🔐 Authentication</h3>
              <p>Use this endpoint to authenticate users.</p>
              <Card bg="light" body>
                <code>POST /api/auth/login</code>
              </Card>
              <pre className="bg-dark text-white p-3 rounded">
{`{
  "username": "user@example.com",
  "password": "securepassword"
}`}
              </pre>
              <Badge bg="success">200 OK</Badge>{" "}
              <Badge bg="danger">401 Unauthorized</Badge>
            </Card.Body>
          </Card>

          {/* Users Section */}
          <Card className="mb-4" id="users">
            <Card.Body>
              <h3>👥 Users</h3>
              <p>Retrieve a list of registered users.</p>
              <Card bg="light" body>
                <code>GET /api/users</code>
              </Card>
              <pre className="bg-dark text-white p-3 rounded">
{`[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]`}
              </pre>
              <Badge bg="success">200 OK</Badge>{" "}
              <Badge bg="warning">403 Forbidden</Badge>
            </Card.Body>
          </Card>

          {/* Tasks Section */}
          <Card className="mb-4" id="tasks">
            <Card.Body>
              <h3>📋 Tasks</h3>
              <p>Create a new task in the system.</p>
              <Card bg="light" body>
                <code>POST /api/tasks</code>
              </Card>
              <pre className="bg-dark text-white p-3 rounded">
{`{
  "title": "Finish API docs",
  "description": "Write the complete API documentation."
}`}
              </pre>
              <Badge bg="success">201 Created</Badge>{" "}
              <Badge bg="danger">400 Bad Request</Badge>
            </Card.Body>
          </Card>

          {/* Error Handling Section */}
          <Card className="mb-4" id="errors">
            <Card.Body>
              <h3>⚠️ Error Handling</h3>
              <p>Standard API error response format.</p>
              <pre className="bg-dark text-white p-3 rounded">
{`{
  "error": "Invalid token",
  "code": 401
}`}
              </pre>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default APIDocumentation;

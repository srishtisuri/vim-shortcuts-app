import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Header = () => {
  return (
    <div className="jumbotron-header text-center mb-3 jumbotron">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">vimshortcuts</h1>
          <p className="lead">
            A personalised app for you to save your favourite vim shortcuts
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;

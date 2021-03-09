import React from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Country = (props) => {
  const countryInfo = props.countryInfo;
  const { name, flag } = countryInfo;
  const history = useHistory();
  const redirectTo = (name) => {
    history.push(`/country/${name}`);
  };

  return (
    <div className="col-md-4 col-sm-6 mt-5">
      <Card className="w-100 h-100">
        <Card.Img variant="top" src={flag} style={{ height: "15rem" }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary" onClick={() => redirectTo(name)}>
            More Info
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Country;

import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

const Collapsible = props => {
  console.log(props.expanded)
  return (
    <Accordion defaultActiveKey={props.expanded ? props.expanded : null}>
      {props.firstHeading && (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {props.firstHeading ? props.firstHeading : ""}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{props.firstBody ? props.firstBody : ""}</Card.Body>
          </Accordion.Collapse>
        </Card>
      )}
      {props.secondHeading && (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            {props.secondHeading ? props.secondHeading : ""}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{props.secondBody ? props.secondBody : ""}</Card.Body>
          </Accordion.Collapse>
        </Card>
      )}
      {props.thirdHeading && (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            {props.thirdHeading ? props.thirdHeading : ""}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>{props.thirdBody ? props.thirdBody : ""}</Card.Body>
          </Accordion.Collapse>
        </Card>
      )}
      {props.fourthHeading && (
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            {props.fourthHeading ? props.fourthHeading : ""}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>{props.fourthBody ? props.fourthBody : ""}</Card.Body>
          </Accordion.Collapse>
        </Card>
      )}
    </Accordion>
  )
}

export default Collapsible

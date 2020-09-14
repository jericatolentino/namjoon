import React from 'react';
import { Card } from 'react-bootstrap';

import './Landing.css';

type LandingProps = {
  title: string,
  text?: string
}

class LandingCard extends React.Component<LandingProps, {}> {

    constructor(props: any){
      super(props);
    }

    render() {
        return (<div style={{
          color: "lightblue",
          backgroundColor: "rgb(58, 58, 58)",
          padding: "2em",
          margin: "0.25em"
          }}>
          <Card>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>);
    }
}

export default LandingCard;
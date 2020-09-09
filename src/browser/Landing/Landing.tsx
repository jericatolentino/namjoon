import React from 'react';

import LandingCard from './LandingCard';

import './Landing.css';

class Landing extends React.Component {

    constructor(props: any){
        super(props);
    }

    render() {
        return (<div className="Landing">
          HELLOOOOOOOOO
          <LandingCard/>
        </div>);
    }
}

export default Landing;
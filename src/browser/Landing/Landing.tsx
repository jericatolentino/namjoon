import React from 'react';
import LandingCard from './LandingCard';

import './Landing.css';
import { Link } from 'react-router-dom';

class Landing extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        console.log(JSON.stringify(props, null, 2))
    }

    mainTrio = (): React.ReactFragment => {
        return (
            <React.Fragment>
                <Link to="/Koya"><LandingCard title={"Koya"} text={"Koya is Joonie's mascot"} /></Link>
                <Link to="/Chimmy"><LandingCard title={"Chimmy"} text={"Chimmy is a dog"} /></Link>
                <Link to="/Kookie"><LandingCard title={"Kookie"} /></Link>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div className="Landing">
                {this.mainTrio()}
            </div>
        );
    }
}

export default Landing;
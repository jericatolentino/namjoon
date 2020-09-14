import React from 'react';
import LandingCard from './LandingCard';

import './Landing.css';
import { 
    Switch,
    Link,
    Route
} from 'react-router-dom';

class Landing extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        console.log(JSON.stringify(props, null, 2))
    }

    mainTrio = (): React.ReactFragment => {
        return (
            <React.Fragment>
                <Link to="/Koya">KOYA</Link>
                <Link to="/RJ">RJ</Link>
                <Switch>
                    <Route path="/Koya" component={() => <LandingCard title={"Koya"} text={"Koya is Joonie's mascot"}/>} />
                    <Route path="/RJ">{this.RJRoute()}</Route>
                </Switch>
                <LandingCard title={"Chimmy"} text={"Chimmy is a dog"} />
                <LandingCard title={"Kookie"} />
            </React.Fragment>
        );
    }

    RJRoute = () => {
        return <h1>RJ</h1>;
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

/*
          <React.Fragment>
                <Switch>
                    <Route path="/Koya" component={() => <LandingCard title={"Koya"} text={"Koya is Joonie's mascot"}/>} />
                    <LandingCard title={"Chimmy"} text={"Chimmy is a dog"}/>
                    <LandingCard title={"Kookie"}/>
                </Switch>
            </React.Fragment>


             <React.Fragment>
                <LandingCard title={"Koya"} text={"Koya is Joonie's mascot"}/>
                <LandingCard title={"Chimmy"} text={"Chimmy is a dog"}/>
                <LandingCard title={"Kookie"}/>
            </React.Fragment>*/

/*
<Route path="/Koya">
                        <LandingCard title={"Koya"} text={"Koya is Joonie's mascot"}/>
                    </Route>*/


/*
   <Link to="/Koya">KOYA</Link>
<Link to="/RJ">RJ</Link>
<Switch>
<Route path="/Koya" component={() => <LandingCard title={"Koya"} text={"Koya is Joonie's mascot"}/>} />
<Route path="/RJ">{this.RJRoute()}</Route>
</Switch>*/
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import TopNavbarComponent from "./components/TopNavbarComponent";
import BottomNavbarComponent from "./components/BottomNavbarComponent";
import Container from "react-bootstrap/Container";
import { ObjectFormat } from "./models/ObjectFormat";
import { ObservationsInformationWrapper } from "./models/ObservationsInformationWrapper";
import Home from "./Home";

class App extends React.Component {
    state = {
        obs: null,
    };

    componentDidUpdate() {
        console.log(this.state.obs);
    }
    componentDidMount() {
        this.setState({
            obs: new ObservationsInformationWrapper(ObjectFormat),
        });
    }

    render() {
        return (
            <div className="App">
                <TopNavbarComponent />
                <Container className="topnav-margin">
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Container>
                <BottomNavbarComponent />
            </div>
        );
    }
}

export default App;

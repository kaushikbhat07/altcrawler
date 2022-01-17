import React from "react";
import "./App.css";
import { ObjectFormat } from "./models/ObjectFormat";
import { ObservationsInformationWrapper } from "./models/ObservationsInformationWrapper";

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
                <header className="App-header">
                    Alt<em>(ternative)</em> Crawler
                </header>
            </div>
        );
    }
}

export default App;

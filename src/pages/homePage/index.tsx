import React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";

class HomePage extends React.Component<RouteComponentProps<{}>> {
    render() {
        return (
            <h1>HomePage</h1>
        );
    }
}

export default withRouter(HomePage)
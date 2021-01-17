import React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";

class RestorePage extends React.Component<RouteComponentProps<{}>> {
    render() {
        return (
            <h1>RestorePage</h1>
        );
    }
}

export default withRouter(RestorePage)
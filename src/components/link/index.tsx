import React from "react";
import {Link} from "react-router-dom";

import './style.sass';

function LinkToPage(props: { to: string; text: string }) {
    return (
        <div className="link-wrapper">
            <Link className='link' to={props.to}>{props.text}</Link>
        </div>
    )
}

export default LinkToPage
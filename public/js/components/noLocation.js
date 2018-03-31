import React from "react"

const noLocation = ({ location }) => {
    return (
        <h5>
            No match for the path <code>{location.pathname}</code>
        </h5>
    )
};
export default noLocation;

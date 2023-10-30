import { Fragment } from "react";

export default function AddEvent() {
    return(
        <Fragment>
            <input name="eventName" />
            <input name="eventPlace" />
            <input name="eventLocation" />
            <input name="eventHost" />
        </Fragment>
    );
}
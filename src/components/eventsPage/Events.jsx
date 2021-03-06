import React from "react";
import "./Events.css";

export default function Events({event}) {
    const RenderChiefGuestList = (chiefGuestList) =>
        chiefGuestList.map((chiefGuest) => (
            <div key={chiefGuest.id} className="eachGuest">
                <h2>{chiefGuest.name}</h2>
                <h4>{chiefGuest.details}</h4>
            </div>
        ));

    const RenderCoordinatorsList = (coordinatorsList) => {
       return coordinatorsList.map((coordinator,index) => (
            <div key={index} className="eachCoordinator">
                <h2>{coordinator.name}</h2>
                <p>{coordinator.designation}</p>
                <p>{coordinator.contact}</p>
            </div>

        ));
    }

    return (
        <div className="events">
            <div className="poster" style={{backgroundImage: `url(${event.poster})`}} />
            <div className="details">
                <div className="aboutVenue">
                    <div className="eachDetail">
                        <h4>What</h4>
                        <h1>{event.what}</h1>
                    </div>
                    <div className="eachDetail">
                        <h4>Where</h4>
                        <h1>{event.where}</h1>
                    </div>
                    <div className="eachDetail">
                        <h4>When</h4>
                        <h1>{event.when}</h1>
                    </div>
                </div>
                <div className="eventDetails">
                    <div className="aboutEvent">
                        <h4>{event.upcoming ? `What is it about ??` : `Event Summary`}</h4>
                        <p>{event.aboutEvent}</p>
                    </div>
                    <div className="chiefGuests">
                        <h4>{event.chiefGuests.length===1?`Chief Guest` : `Chief Guests`}</h4>
                        {RenderChiefGuestList(event.chiefGuests)}
                    </div>
                </div>
                <div className="contactDetails">
                    <h2>Have a question ?</h2>
                    <div className="coordinators">
                    {RenderCoordinatorsList(event.coordinators)}
                    </div>
                </div>
            </div>

        </div>
    );
}

import React from "react";
export default function Card(props){
    // console.log("woi")
    const one = props
    return(
       <section className="card">
            <img src={one.imageUrl} alt="locationPic"/>
            <div className="card--text">
                <div >
                    <i className="fa-solid fa-location-dot locIcon" ></i>
                    <span className="map--loc">{one.location.toUpperCase()}</span>
                    <a href={one.googleMapsUrl} className="grey">View on Google Maps</a>
                    <p className="card--title">{one.title}</p>
                    <p className="card--date">{one.startDate} - {one.endDate}</p>
                    <p className="card--description">{one.description}</p>
                </div>
                
            </div>
       </section>
    )
}
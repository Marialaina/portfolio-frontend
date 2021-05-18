import { useState, useEffect } from "react";

const About = (props) => {
    //creating state to hold the data
    const [about, setAbout] = useState(null);

    //creating function to make api call
    const getAboutData = async () => {
        const response = await fetch(props.URL + "about");
        const data = await response.json();
        //set the about state to the data
        setAbout(data);
    };
      
    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => getAboutData(), []);

    //define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <img src={about.headshot} />
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

    return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
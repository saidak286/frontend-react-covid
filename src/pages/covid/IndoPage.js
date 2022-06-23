import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Indo from "../../components/Indonesia";
import ENDPOITS from "../../utils/constants/endpoint";

function IndoPage() {
    // membuat state global
    const [ indonesia, setIndo] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect (async () => {
        const response = await axios(ENDPOITS.INDO);
        const covid = [
            {
                id: nanoid(),
                status: "Confirmed",
                total: response.data.confirmed,
            },
            {
                id: nanoid(),
                status: "Recovered",
                total: response.data.recovered,
            },
            {
                id: nanoid(),
                status: "Deaths",
                total: response.data.deaths,
              },  
        ]
        setIndo(covid)
    }, []);

    return(
        <div>
            <Hero />
            <Indo indonesia={indonesia}/>
        </div>
    );
}

export default IndoPage;
import { useState } from "react";
import Form from "../../components/Form";
import Hero from "../../components/Hero";
import Provinsi from "../../components/Provinsi";
import data from "../../utils/constants/provinces";


function ProvPage() {
    const [provinces, setProvinces] = useState(data.provinces);

    return(
        <div>
            <Hero />
            <Provinsi  provinces={provinces} setProvinces={setProvinces}/>
            <Form provinces={provinces} setProvinces={setProvinces}/>
        </div>
    )
}

export default ProvPage;
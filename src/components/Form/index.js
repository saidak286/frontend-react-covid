import { useState } from "react";
import { useDispatch } from  "react-redux";
import Alert from "../Alert";
import StyledForm from "./index.Styled";
import { updateCovids } from "../../feature/covidSlice";

function Form(props) {
    const {provinces, setProvinces} = props;
    const dispatch = useDispatch();
    // const data = data.provinces
    const [provinsi, setProvinsi] = useState("");
    const [status, setStatus] = useState("");
    const [jumlah, setJumlah] = useState("");

    // Membuat state title dan data error/empty
    const [isProvinsiError, setIsProvinsiError] = useState(false);
    const [isStatusError, setIsStatusError] = useState(false);
    const [isJumlahError, setIsJumlahError] = useState(false);

    function handleProvinsi(e) {
        setProvinsi(e.target.value);
    }

    function handleStatus(e) {
        setStatus(e.target.value);
    }

    function handleJumlah(e) {
        setJumlah(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Jika title kosong, maka set error title run
        if (provinsi === "") {
            setIsProvinsiError(true);
        }
        // Jika title kosong, maka set error date true
        else if (status === "") {
            setIsProvinsiError(false);
            setIsStatusError(true);
        }
        // Jika title dan date kosong, maka set error poster true
        else if (jumlah === "") {
            setIsProvinsiError(false);
            setIsStatusError(false);
            setIsJumlahError(true);
        }

        else {
             // Siapkan movie yang ingin diinput
            const movie = {
                provinsi: provinsi,
                status: status,
                jumlah: jumlah,
            };

            dispatch(updateCovids(movie));
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <section>
                <div className="form__left">
                    <img 
                        src="https://img.freepik.com/free-vector/flat-hand-drawn-doctor-injecting-vaccine-patient-illustration_23-2148863748.jpg?t=st=1650291126~exp=1650291726~hmac=ca995fee7e45f1cd0ba7e21282b7f3b5d2bb5e08cdb243ff7a075076e4fb378c&w=740" 
                        alt="" />
                </div>
                <div className="form__right">
                    <h2>Form Covid</h2>
                    <div className="form__covid">
                        <label >Provinsi</label>
                        <select onChange={handleProvinsi} value={provinsi}>
                            <option>--Select One--</option>
                            {provinces.map((data) => (
                                <option key={data.kota} value={data.kota}>{data.kota}</option>
                            ))}
                        </select>
                        {/* 
                        Jika error title true: muncul error 
                        Jika tidak, munculkan string kosong  
                        */}
                        {isProvinsiError && <Alert>Provinsi Wajib Diisi </Alert>}
                    </div>
                    <div className="form__covid">
                        <label>Status</label>
                        <select onChange={handleStatus}>
                            <option>--Select One--</option>
                            <option value="kasus">Positif</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="dirawat">Dirawat</option>
                            <option value="meninggal">Meninggal</option>
                        </select>
                         {/* 
                        Jika error title true: muncul error 
                        Jika tidak, munculkan string kosong  
                        */}
                        {isStatusError && <Alert>Status Wajib Diisi </Alert>}
                    </div>
                    <div className="form__covid">
                        <label>Jumlah</label>
                        <input type="text" onChange={handleJumlah} value={jumlah}/>
                         {/* 
                        Jika error title true: muncul error 
                        Jika tidak, munculkan string kosong  
                        */}
                        {isJumlahError && <Alert>Jumlah Wajib Diisi </Alert>}
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </section>
        </StyledForm>
    );
}

export default Form;
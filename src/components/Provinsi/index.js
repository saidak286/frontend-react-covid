import Table from "../Table/index";
import StyledProv from "./index.Styled";

function Provinsi(props) {
    const {provinces, setProvinces} = props;
    return (
        <StyledProv>
            <section>
                <div>
                    <h1>Provinsi</h1>
                    <h3>Data Covid Berdasarkan Provinsi</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Provinsi</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Dirawat</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {provinces.map((data, index) => (
                            <Table
                                index={index} key={data.kota} kota={data.kota} kasus={data.kasus} sembuh={data.sembuh} dirawat={data.dirawat} meninggal={data.meninggal}
                            />
                         ))}
                    </tbody>
                </table>
            </section>
        </StyledProv>
    );
}

export default Provinsi;
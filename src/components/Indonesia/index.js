import ENDPOINTS from "../../utils/constants/endpoint";
import Card from "../Card";
import StyledIndo, { Container } from "./index.Styled";

function Indo(props) {
    const { indonesia } = props;

    return (
        <StyledIndo>
            <Container>
                <h1>Indonesia</h1>
                <h3>Data Covid Berdasarkan Indonesia</h3>
                    <div className="global__container">
                        {indonesia.map((data) => (
                            <Card
                                key={data.id} indonesia={data}
                            />
                        ))};
                    </div>
            </Container>
            <Container>
                <h1>Sumary</h1>
                <p>Data Covid Berdasarkan Provinsi</p>
                <div>
                    <img
                        src={ENDPOINTS.IMG_INDO}
                        alt="" 
                    />
                </div>
            </Container>
        </StyledIndo>
    );
}

export default Indo;
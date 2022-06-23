import ENDPOINTS from "../../utils/constants/endpoint";
import Content from "../Content";
import StyledGlobal, { Container } from "./index.Styled";

function Global(props) {
    const { global } = props;
    return (
        <StyledGlobal>
            <Container>
                <h1>Global</h1>
                <h3>Data Covid Berdasarkan Global</h3>
                    <div className="global__container">
                        {global.map((data) => (
                            <Content
                                key={data.id} global={data}
                            />
                        ))};
                    </div>
            </Container>
            <Container>
                <h1>Sumary</h1>
                <p>Data Covid Berdasarkan Provinsi</p>
                <div>
                    <img
                        src={ENDPOINTS.IMG_GLOBAL}
                        alt="" 
                    />
                </div>
            </Container>
        </StyledGlobal>
    );
}

export default Global;
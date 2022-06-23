import StyledCard from "./index.Styled";

function Card(props) {
    const { indonesia } = props;
    return (
        <StyledCard>
            <h3>{indonesia.status}</h3>
            <h2 className="total">{indonesia.total.value}</h2>
        </StyledCard>
    );
}

export default Card;
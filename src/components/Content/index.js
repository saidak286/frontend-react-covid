import StyledContent from "./index.Styled";

function Content(props) {
    const { global } = props;
    return (
        <StyledContent>
            <h3>{global.status}</h3>
            <h2 className="total">{global.total.value}</h2>
        </StyledContent>
    );
};

export default Content;
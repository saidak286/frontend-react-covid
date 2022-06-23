import StyledContainer from "./index.Styled";

function Container(props) {
    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    );
}

export default Container;
import styled from "styled-components";

const StyledContent = styled.div`
    width: 100%;
    margin: 2rem 0;
    padding: 1rem;
    text-align: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: 2px solid;

    h3 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        color: #073B4C;;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
    }

    :nth-child(1) .total{
        color: #118AB2;
    }

    :nth-child(2) .total {
        color: #06D6A0;
    }

    :nth-child(3) .total {
        color: #ea3546;
    }
`

export default StyledContent
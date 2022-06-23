import styled from "styled-components";

const StyledProv = styled.div`
    text-align: center;

    section {
        max-width: 1200px;
        margin: 0 auto;
    }

    h1 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 61px;
        color: #06D6A0;
    }

    h3 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        color: #118AB2;
    }

    table {
        margin: 2rem auto;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        max-width: 1000px;
    }

    th {
        padding: 2rem 0;
        border-color: #64748B;
        border-style: solid;
        border-width: 1px;
        color: #06D6A0;
    }
    
    td {
        padding: 2rem 0;
        border-color: #64748B;
        border-style: solid;
        border-width: 1px;
    }
`

export default StyledProv;
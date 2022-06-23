import styled from "styled-components";

const Container = styled.div`
    margin: 5rem 0;
    text-align: center;

    .global__container {
        display: flex;
        flex-direction: column;
    }

    /* Medium Screen */
    @media screen and (min-width: 768px) {
        .global__container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 2rem;
        }
    }
`

const StyledGlobal = styled.div`
    margin: 1rem;
    text-align: center;
    
    h1 {
        margin-bottom: 1rem;
        font-size: 61px;
        color: #06D6A0;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
    }

    h3 {
        color: #118AB2;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        color: #118AB2;
    }

    img {
        filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.25));
        border-radius: 20px;
        height: auto;
        left: 220px;
        top: 1800px;
        max-width: 100%;
    }

    /* Medium Screen */
    @media screen and (min-width: 768px) {
    } 
    
    /* Large Screen */
    @media screen and (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;
    }    
`

export default StyledGlobal;
export {Container};
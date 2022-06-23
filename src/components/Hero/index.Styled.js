import styled from "styled-components";

const StyledHero = styled.div`
    margin: 1rem;

    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1rem;
    }

    .hero__right {
        margin-bottom: 1rem;
    }

    h2 {
        color: #06D6A0;
        margin-bottom: 1rem;
        font-size: 61px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
    }

    h3 {
        color: #118AB2;
        margin-bottom: 1rem;
        font-size: 1.59rem;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
    }

    p {
        color: #64748b;
        margin-bottom: 1rem;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        /*
        * Nothing TODO Here.
        * We dont change style Hero. 
        */
    }

     /* Large Screen */
    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;

        section {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        
        .hero__left {
            flex-basis: 40%;
        }
    
        .hero__right {
            flex-basis: 60%;
        }
    }
`

export default StyledHero;
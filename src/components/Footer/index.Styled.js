import styled from "styled-components";

const StyledFooter = styled.div`
    /* Small Screen */
    background-color: #06D6A0;
    padding: 1rem;
    color: #fff;

    nav {
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 2.4rem;
        margin-top: 1rem;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
    }

    p {
        margin-top: 1rem;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    li {
        margin-bottom: 1rem;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
    }

    a {
        color: #fff;
    }

    /* Medium Screen */
    @media (min-width: 768px) {
        nav {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        h1 {
            margin-bottom: 0;
        }

        ul {
            flex-direction: row;
        }

        li {
            margin: 0 1rem;
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 500;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
    /* 
    * Nothing TODO HERE.
    * We haven't styling Navbar.
    */
    }
`

export default StyledFooter;
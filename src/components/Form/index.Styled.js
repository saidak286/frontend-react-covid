import styled from "styled-components";

// const Container = styled.div`
//     margin: 1rem;

//     /* Large Screen */
//     @media (min-width: 992px) {
//         max-width: 1000px;
//         margin: 3rem auto;
//     }
// `

const StyledForm = styled.form`
    margin: 1rem;

    section {
        display: flex;
        flex-direction: column;
    }

    .form__left {
        margin-bottom: 1rem;
    }
    
    .form__right {
        margin-bottom: 1rem;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    h2 {
        margin-bottom: 1rem;
        font-size: 2.44rem;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        color: #06D6A0;
    }

    .form__covid {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 1rem;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
    }

    select {
        margin-bottom: 1rem;
        padding: 0.5rem 0.5rem;
        border-radius: 10px;
        border: 2px solid #06D6A0;
    }

    option {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
    }

    input {
        margin-bottom: 1rem;
        padding: 0.5rem 0.5rem;
        border-radius: 10px;
        border: 2px solid #06D6A0;
    }

    button {
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 10px;
        background-color: #06D6A0;
        color: #fff;
        display: block;
        margin: 0 auto;
        width: 100%;
    }

    /* Large Screen */
    @media (min-width: 992px) {
        max-width: 1000px;
        margin: 3rem auto;

        section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .form__left {
            flex-basis: 40%;
        }
    
        .form__right {
            flex-basis: 40%;
        }
    }
`

export default StyledForm;
import { StyledForm } from "./styled";


const Form = ({ children, calculateResult, currency, amount }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount)
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            {children}
        </StyledForm>
    )
};

export default Form;
import { StyledSelect } from "./styled";

const Select = ({ currency, setCurrency, ratesData }) => {

    return (
        <StyledSelect
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
        >
            {Object.keys(ratesData.rates).map((currency => (
                <option
                    key={currency}
                    value={currency}
                >
                    {currency}
                </option>
            )))}
        </StyledSelect>
    );
};

export default Select;
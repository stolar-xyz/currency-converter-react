import { StyledFooter } from "./styled";

const Footer = ({ ratesData }) => (
    <StyledFooter>
        The rates are taken from the European Central Bank of {Object.values(ratesData.date)}.
    </StyledFooter>
);

export default Footer;
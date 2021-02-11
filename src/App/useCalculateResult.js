import { useState } from "react";
import { useRatesData } from "./useRatesData";

export const useCalculateResult = () => {
    const [result, setResult] = useState();
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        })
    };

    return {
        result,
        currency,
        amount,
        ratesData,
        setCurrency,
        setAmount,
        calculateResult,
    }
};
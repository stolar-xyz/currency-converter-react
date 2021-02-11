import { useState, useEffect } from "react";
import axios from "axios";

const exchangeRatesUrl = "https://api.exchangeratesapi.io/latest?base=PLN";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get(exchangeRatesUrl);
                const { rates, date } = response.data;

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(getRates, 1000);
    }, []);

    return ratesData;
};
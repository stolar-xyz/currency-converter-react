import { useState, useEffect } from "react";
import axios from "axios";

const currencies = "USD,PLN,JPY,GBP,AUD,CAD,CHF,CNH,SEK,NZD";

const exchangeRatesAPI = `https://api.exchangerate.host/latest?symbols=${currencies}`;

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await axios.get(exchangeRatesAPI);
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

        getRates();

    }, []);

    return ratesData;
};
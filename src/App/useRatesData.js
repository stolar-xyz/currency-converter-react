import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "6977e0053d1b260e9d5bc3a76953732f/";
const currencies = ["USD","PLN","JPY","GBP","AUD","CAD","CHF","CNH","SEK","NZD"];

const exchangeRatesAPI = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=${currencies}`;

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
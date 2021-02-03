import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(currentDate => currentDate = new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const fullDate = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    return fullDate;
};
import React, { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
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

    return (
        <p className="form__clock">
            Today is {fullDate}
        </p>
    );
};

export default Clock;
import React from "react";
import { StyledClock } from "./styled";
import { useCurrentDate } from "../../customHooks/useCurrentDate";

const Clock = () => {
    const fullDate = useCurrentDate();

    return (
        <StyledClock>
            Today is {fullDate}
        </StyledClock>
    );
};

export default Clock;
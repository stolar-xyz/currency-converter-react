import React from "react";

const Result = ({ result }) => {
    return (
        <>
            <p>
                The rates are taken from the nbp.pl website from Table 010/A/NBP/2021 of 2021-01-17
            </p>
            <p>
                {!!result && (
                    <>
                        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

                    <strong>
                            {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                        </strong>
                    </>
                )}
            </p>
        </>
    )
};

export default Result;
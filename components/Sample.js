import React from "react";

const Sample = ({
    count,
    onCounterClick,
    onCounterClick2
}) => 
    <div>
        <p>count : {count}</p>
        <button onClick={onCounterClick}>like</button>
        <button onClick={onCounterClick2}>dislike</button>
    </div>;

export default Sample;
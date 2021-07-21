import React from "react";

const Counter = ({
    count,
    onCounterClick
}) => 
    <div>
        <p>count : {count}</p>
        <button onClick={onCounterClick}>increment</button>
    </div>;

export default Counter;
import React, {useState} from "react";
import Counter from "../components/Counter";

const CounterPage = () => {
    const [count, setCount] = useState(0);
          /*value, method*/
    return (
        <div>
            <Counter
                count={count}
                onCounterClick={() => setCount(count + 1)}
            />
        </div>
    );
}

export default CounterPage;



//setCount는 다시 렌더링 시키는 기능을 함

// 현실에서의 동작을 data화
//event, event handler, listner
//event-driven architecture

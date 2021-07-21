import React, {useState} from "react";
import Counter from "../components/Sample";

const Name = "Ikanny";
const Age = "20";
const Major = "Computer science";

const SamplePage = () => {
    const [count, setCount] = useState(0);
          /*value, method*/

    return (
        <div>
            <p>Name: {Name}</p>
            <p>Age: {Age}</p>
            <p>Major: {Major}</p>

            <Counter
                count={count}
                onCounterClick={() => setCount(count + 1)}
                onCounterClick2={() => {
                    if(count == 0){
                        return;
                    }
                    setCount(count - 1)}
                }
            />
        </div>
    );
}

export default SamplePage;
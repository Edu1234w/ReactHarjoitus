import React from "react";
import { useState } from "react";
export const Buttons = ()  =>
{
    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(0);

    function countClicks()
    {
        setCount(count + 1);

    }
    function countClicks2()
    {
        setCount2(count2 + 1);
    }
    function resetClicks()
    {
        setCount(0)
        setCount2(0)
    }
    return(
        <div>
            <button onClick={countClicks}>Clicked: {count} Times!</button>
            <button onClick={resetClicks}>Reset Clicks to 0</button>
            <button onClick={countClicks2}>Clicked: {count2} Times!</button>
        </div>
    );
}
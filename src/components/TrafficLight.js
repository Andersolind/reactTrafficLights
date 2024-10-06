import { useEffect, useState } from "react";

export default function TrafficLight({ trafficStates }) {
    //    create our hooks
    const [currentColor, setCurrentColor] = useState("green");

    useEffect(() => {
        const {duration,next } = trafficStates[currentColor];

        //set timeout to move the lights
        const timerId = setTimeout(() => {
            setCurrentColor(next);
        },duration)

        return () => {
            clearTimeout(timerId);
        }

    }, [currentColor])
    return (
        <div className="traffic-light-container">
            {/* setup the loop for the light */}
          
            {Object.keys(trafficStates).map((color) => (

                <div className="traffic-light" key={color}
                    style={{
                        backgroundColor: color === currentColor
                            && trafficStates[color].backgroundColor
                    }}
                />
            ))}
        </div>
    );
}

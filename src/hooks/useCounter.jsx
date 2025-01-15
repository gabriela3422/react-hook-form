import {useEffect, useState} from "react";

const useCounter = (initialMinutes = 15, initialSeconds = 0) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let timer = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
            } else if(seconds === 0){
                setMinutes((prevMinutes) => prevMinutes - 1);
                setSeconds(59);
            } else {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes, seconds]);

    return { minutes, seconds };
}

export default useCounter;
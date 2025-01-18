import { useEffect, useState } from "react";

const TimingWatch = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const IntervalTimer = setInterval(() => {
            setSeconds((prev) => {
                if (prev === 59) {
                    setSeconds(0);
                    setMinutes((prevMin) => {
                        if (prevMin === 59) {
                            setMinutes(0);
                            setHours((prevHour) => prevHour + 1);
                        }
                        return prevMin + 1;
                    })
                    return 0;
                }
                return prev + 1;
            });
        }, 1000)
        return () => clearInterval(IntervalTimer);
    }, []);

    const formatTime = (value) => String(value).padStart(2, '0');

    return (
        <>
            <h3 className="text-center mt-10">
                {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
            </h3>
        </>
    )
}

export default TimingWatch;
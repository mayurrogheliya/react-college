import { useEffect, useState } from "react"

const ImageChange = () => {
    const [imageSrc, setImageSrc] = useState("src/assets/guitar.jpg");
    const [intervalId, setIntervalId] = useState(null);
    useEffect(() => {
        const imageList = ["jazz.jpg", "music-prod.jpg", "piano.jpg", "song-writing.jpg", "guitar.jpg"];
        let initial = 0;
        const id = setInterval(async () => {
            await setImageSrc(`src/assets/${imageList[initial]}`)
            initial = (initial + 1) % imageList.length;
        }, 2000);

        setIntervalId(id);

        return () => clearInterval(id);
    }, []);

    const stopInterval = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    return (
        <>
            <div className="h-screen w-full flex justify-center items-center">
                <img src={imageSrc} alt="Change image" />
                <button type="button" className="py-2 px-4 bg-slate-300/35 border-2" onClick={stopInterval}>Stop</button>
            </div>
        </>
    )
}

export default ImageChange;
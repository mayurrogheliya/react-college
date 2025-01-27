import { useState } from "react";

function ThemeSwitcher() {
    const [modeChecked, setModeChecked] = useState(false);

    const handleToggle = () => {
        setModeChecked((prevModeChecked) => {
            const newMode = !prevModeChecked;
            if (newMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return newMode;
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center dark:bg-black bg-white transition-colors">
            <label className="flex items-center space-x-4">
                <span className="dark:text-white text-black text-lg">Dark Mode:</span>
                <div
                    onClick={handleToggle}
                    className={`relative flex items-center h-7 w-12 ps-1 pe-7 cursor-pointer rounded-full transition-colors duration-300 ${modeChecked ? "bg-slate-700" : "bg-gray-300"
                        }`}
                >
                    <div
                        className={`h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300 ${modeChecked ? "translate-x-6" : "translate-x-0"
                            }`}
                    ></div>
                </div>
            </label>
        </div>
    );
}

export default ThemeSwitcher;

import { useEffect, useState } from "react";

function ColorPicker() {
    const [paraBgColor, setParaBgColor] = useState('');
    const [paraTextColor, setParaTextColor] = useState('');

    useEffect(() => {
        const paragraphs = document.querySelectorAll("p");
        paragraphs.forEach((para) => {
            para.style.backgroundColor = paraBgColor;
            para.style.color = paraTextColor;
        })
    }, [paraBgColor, paraTextColor])
    return (
        <>
            <div className="flex flex-col min-h-screen justify-center items-center bg-green-300">
                <div>
                    <div>
                        <label htmlFor="bg-color">Background Color:</label>
                        <input
                            type="color"
                            id="bg-color"
                            value={paraBgColor}
                            className="w-full"
                            onChange={(e) => setParaBgColor(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="text-color">Text Color:</label>
                        <input
                            type="color"
                            id="text-color"
                            value={paraTextColor}
                            className="w-full"
                            onChange={(e) => setParaTextColor(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md text-gray-800">
                    <h1 className="text-3xl font-bold mb-4">
                        Web Development
                    </h1>
                    <p className="text-xl mb-4">
                        Web development involves creating websites, web applications, and
                        online services. It uses programming languages like HTML, CSS, and
                        JavaScript to create interactive and responsive websites. Web
                        developers work closely with designers and other developers to
                        create a user-friendly and engaging website.
                    </p>
                    <h3 className="text-xl font-bold mb-4">
                        Popular Web Development Frameworks and Tools
                    </h3>
                    <p className="text-xl mb-4">
                        Some popular web development frameworks and tools include React,
                        Angular, Vue.js, Laravel, Django, Ruby on Rails, and Flask. These
                        frameworks and tools provide a set of tools and libraries to help
                        developers build web applications quickly and efficiently.
                    </p>
                    <h3 className="text-xl font-bold mb-4">
                        Web Development Tools and Resources
                    </h3>
                    <p className="text-xl mb-4">
                        Web development tools and resources include IDEs like Visual Studio
                        Code, Sublime Text, and Atom, version control systems like Git, and
                        cloud-based hosting platforms like GitHub, GitLab, and Heroku.
                        Additionally, there are many online courses, tutorials, and
                        documentation resources available to help developers learn web
                        development.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ColorPicker;

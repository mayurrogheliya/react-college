import { useState } from 'react';

function SpecialChar() {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        let value = e.target.value;
        setErrorMessage('');
        const sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, '');
        if (value !== sanitizedValue) {
            setErrorMessage('* Only alphanumeric characters are allowed');
        }
        setInputValue(sanitizedValue);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
                <div className="mb-4">
                    <label
                        htmlFor="user"
                        className="block text-lg font-medium text-gray-700 mb-2"
                    >
                        Enter the Alphanumeric Character
                    </label>
                    <input
                        type="text"
                        id="user"
                        name="user"
                        value={inputValue}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        onChange={handleChange}
                        placeholder="Type here..."
                    />
                    <p className="text-sm text-red-600">{errorMessage}</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Preview
                    </h3>
                    <div
                        id="preview"
                        className={`w-full min-h-[3rem] break-words p-2 border rounded-lg text-lg font-medium bg-gray-50 border-gray-300`}
                    >
                        {inputValue}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialChar;

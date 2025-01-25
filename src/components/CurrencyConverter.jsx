import axios from 'axios';
import { useEffect, useState } from 'react';

const APIKEY = import.meta.env.VITE_CURRENCY_API_KEY;

function CurrencyConvert() {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setTocurrency] = useState("INR");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);

    const fetchCurrencyDetails = async () => {
        const { data } = await axios.get(`${APIKEY}`);
        setCurrencies(data.data);
    };

    useEffect(() => {
        fetchCurrencyDetails();
    }, []);

    useEffect(() => {
        if (currencies && fromCurrency && toCurrency && amount) {
            const fromRate = currencies[fromCurrency]?.value || 1;
            const toRate = currencies[toCurrency]?.value || 1;
            const result = (amount / fromRate) * toRate;
            setConvertedAmount(result);
        }
    }, [currencies, fromCurrency, toCurrency, amount]);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Currency Converter</h1>

                <div className="mb-4">
                    <input
                        type="number"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700 mb-2">
                        From Currency
                    </label>
                    <select
                        name="fromCurrency"
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {Object.keys(currencies).map((currencyKey) => (
                            <option key={currencyKey} value={currencyKey}>
                                {currencies[currencyKey].code}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700 mb-2">
                        To Currency
                    </label>
                    <select
                        name="toCurrency"
                        value={toCurrency}
                        onChange={(e) => setTocurrency(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {Object.keys(currencies).map((currencyKey) => (
                            <option key={currencyKey} value={currencyKey}>
                                {currencies[currencyKey].code}
                            </option>
                        ))}
                    </select>
                </div>

                {convertedAmount !== null && (
                    <div className="mt-6 bg-green-100 p-4 rounded-lg text-center">
                        <p className="text-lg font-medium text-gray-800">
                            {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CurrencyConvert;

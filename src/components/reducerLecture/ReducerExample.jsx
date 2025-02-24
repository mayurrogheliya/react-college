import { useReducer } from "react";

function Funct1(state, action) {
    switch (action.type) {
        case "changeName":
            return { ...state, name: action.value };
        case "changeAge":
            return { ...state, age: action.value };
        default:
            return state;
    }
}

const ReducerExample = () => {
    const [{ name, age }, dispatch] = useReducer(Funct1, { name: "abc", age: 45 });
    return (
        <>
            <input type="text" value={name} onChange={(e) => dispatch({ type: "changeName", value: e.target.value })} placeholder="Enter your name" className="px-4 py-1 border border-gray-400 rounded-md outline-none" />
            <p>Name is {name}</p>
            <input value={age} onChange={(e) => dispatch({ type: "changeAge", value: e.target.value })} placeholder="Enter your age" className="px-4 py-1 border border-gray-400 rounded-md outline-none" />
            <p>Age is {age}</p>
        </>
    );
}

export default ReducerExample;

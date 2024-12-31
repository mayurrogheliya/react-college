import ButtonCom from "./ButtonCom"
import Mylist from "./Mylist"

function Combined() {
    const data = {
        items: [
            {
                id: 1,
                name: "Mayur"
            },
            {
                id: 2,
                name: "Brijesh"
            },
            {
                id: 3,
                name: "Meet"
            },
            {
                id: 4,
                name: "Dhruv"
            },
            {
                id: 5,
                name: "Majnu"
            }
        ],
        btnName: "Click Me..."
    }
    return (
        <div>
            <ButtonCom btn={data.btnName} />
            <Mylist list={data.items} />
        </div>
    )
}

export default Combined

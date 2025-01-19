const Product = ({ productData, title }) => {
    const mainStyle = {
        border: "2px solid black",
        padding: "10px",
        margin: "20px",
        display: "inline-block"
    }
    return (
        <>
            <h3 className="text-xl text-center font-semibold">{title}</h3>
            {
                productData.map((item) => (
                    <div key={item.id} style={mainStyle}>
                        <h3>Title: {item.name}</h3>
                        <p>Description: {item.description}</p>
                        <p>Price: {item.price}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    );
}

export default Product;

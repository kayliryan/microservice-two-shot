import REACT from 'react'

function ShoeList(props) {



    const getShoeDetail = async() => {
        const url = "http://localhost:8080/api/shoes/${currentShoe.id}/";
    }
    return(
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Bin</th>
                        <th>Erase</th>
                    </tr>
                </thead>
                <tbody>
                    {props.shoes.map(shoe => {
                        return (
                            <tr key={shoe.id}>
                                <td>{shoe.model_name}</td>
                                <td>{shoe.manufacturer}</td>
                                <td>{shoe.color}</td>
                                <td>{shoe.bin}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default ShoeList
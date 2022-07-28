function ShoeList(props) {
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Shoes</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.shoes.map(shoe => {
                    return (
                        <tr key={shoe.id}>
                            <td>{shoe.model_name}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}
export default ShoeList
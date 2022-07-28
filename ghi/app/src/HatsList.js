function HatsList(props) {
    return (
    <table className="table table-striped">
        <thead>
          <tr>
            <th>Style Name</th>
            <th>Fabric</th>
            <th>Color</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {/* for (let attendee of props.attendees) {
            <tr>
              <td>{ attendee.name }</td>
              <td>{ attendee.conference }</td>
            </tr>
          } */}
          {props.hats.map(hat => {
            return (
              <tr key={hat.id}>
                <td>{ hat.style }</td>
                <td>{ hat.fabric }</td>
                <td>{ hat.color }</td>
                <td><img src={ hat.picture_url } style={{height:"100px", width:"100px"}}></img></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
}

export default HatsList
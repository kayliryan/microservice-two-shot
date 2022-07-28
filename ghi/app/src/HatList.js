import React from "react";

import { NavLink } from 'react-router-dom';


class HatList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {hats: []}
    this.deleteHat = this.deleteHat.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8090/api/hats/');
    if (response.ok) {
      const data = await response.json();
      this.setState({hats: data.hats});
    }
  }

  async deleteHat(hat) {
    await fetch(`http://localhost:8090/api/hats/${hat.id}/`, { method: 'DELETE' });
    let index = this.state.hats.indexOf(hat);
    let updated_hats = [...this.state.hats];
    updated_hats.splice(index,1)
    this.setState({hats: updated_hats})
  }

render() {
  return (
    <React.Fragment>
    <div className="container-fluid">
        <NavLink className="navbar-brand" to="/hats/create">Create a Hat</NavLink>
    </div>
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
          {this.state.hats.map(hat => {
            return (
              <tr key={hat.id}>
                <td>{ hat.style }</td>
                <td>{ hat.fabric }</td>
                <td>{ hat.color }</td>
                {hat.picture_url &&
                <td><img src={ hat.picture_url } style={{height:"100px", width:"100px"}}></img></td>
                }
                <td><button onClick={() => this.deleteHat(hat)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </React.Fragment>
    )
}
}


export default HatList
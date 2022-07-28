import React from 'react';

class HatForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fabric: "",
            style: "",
            color: "",
            pictureUrl: "",
            locations: [],
        }
        this.handleFabricChange = this.handleFabricChange.bind(this);
        this.handleStyleChange = this.handleStyleChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) { 
        event.preventDefault();
        const data = {...this.state};
        data.picture_url = data.pictureUrl;
        delete data.pictureUrl;
        delete data.locations;
        // console.log(data);
        let hatUrl = `http://localhost:8090/api/locations/${data.location}/hats/`;
        let fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let response = await fetch(hatUrl, fetchConfig);
        if (response.ok) {
            // console.log("response is ok")
            const newLocation = await response.json();
            console.log(newLocation);
            const cleared = {
                fabric: "",
                style: "",
                color: "",
                pictureUrl: "",
            }
            this.setState(cleared);
        }


    }
    handleFabricChange(event) {
        const value = event.target.value;
        this.setState({fabric: value});
    }

    handleStyleChange(event) {
        const value = event.target.value;
        this.setState({style: value});
    }

    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value});
    }

    handlePictureUrlChange(event) {
        const value = event.target.value;
        this.setState({pictureUrl: value});
    }

    handleLocationChange(event) {
        const value = event.target.value;
        this.setState({location: value});
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/locations/";
        const response = await fetch(url);
    
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            this.setState({locations: data.locations});
    }
}

    render () {
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new Hat</h1>
                <form onSubmit={this.handleSubmit} id="create-hat-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleFabricChange} placeholder="Fabric" required type="text" name="fabric" id="fabric" className="form-control" />
                        <label htmlFor="fabric">Fabric</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleStyleChange} placeholder="Style" required type="text" name="style" id="style" className="form-control" />
                        <label htmlFor="style">Style</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleColorChange} placeholder="Color" required type="text"  name="color" id="color" className="form-control" />
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="form-label mb-3">
                        <label htmlFor="description">Picture Url</label>
                        <textarea onChange={this.handlePictureUrlChange} type="text"  name = "picture_url" id="picture_url" className="form-control" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleLocationChange} required id="location" name = "location" className="form-select">
                        <option value="">Choose a location</option>
                        {this.state.locations.map(location => {
                            return (
                                <option key={location.id} value={location.id}>
                                {location.closet_name}
                                </option>
                            );
                            })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
            </div>

        );
    }
}

export default HatForm
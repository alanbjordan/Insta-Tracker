import React, {Component} from 'react';
import '../App.css';
import './Component.css';

class CovidData extends Component {
    state = {
        update: false,
        options: [],
        data: [],
        stateData: [],
        countryData: [],
        theState: ["AK"],
    }

    loadData = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            return data;
        } catch (error) {
            console.error("error", error);
            return error;
        }
    }

    //CountryData
    getCountryData = async () => {
        const url = `https://covidtracking.com/api/v1/us/current.json`
        const countryData = await this.loadData(url);
        console.log("countryData =>", countryData[0]);
        return this.setState({
            data: countryData[0]
        })
    }
    
    handleCountryChange = () => {
        this.setState({
            data: this.getCountryData()
        })
    }

    //StateData
    getStateData = async () => {
        const url = `https://covidtracking.com/api/v1/states/${this.state.theState}/daily.json`
        const stateData = await this.loadData(url);
        return this.setState({
            data: stateData[0]
        })
    }

   //StateData
    handleStateChange = async (event) => {
        this.setState({
            update: true,
            data: this.getStateData()
        }, this.handleChange(event));
    }

    async componentDidMount() {
        const url = `https://covidtracking.com/api/v1/states/current.json`
        const stateData = await this.loadData(url);
        this.setState({
            stateData
        })
        this.getCountryData();
    }

    handleChange = async (event) => {        
        this.setState({
            theState: event.target.value,
        }, this.getStateData);
    }

    render() {
        const { data, stateData} = this.state;

        return (
            <div className="data">
                <button onClick={this.handleCountryChange} id='usButton'>See U.S. Totals</button>
                <h3>or</h3>
                <h2>Select a State</h2>
                <form  value={this.state.theState} onChange={this.handleChange}>
                    <label>State:
                    <select>
                        {stateData.map((state) => <option key={state.state} value={state.state}>{state.state}</option>)}
                    </select> 
                    </label> 
                </form  >
                <h5>Positive Test: {data.positive}</h5>
                <h5>Total Deaths: {data.death}</h5>
                <h5>Total Cases: {data.total}</h5>
            </div>
        )
    }
}

export default CovidData;
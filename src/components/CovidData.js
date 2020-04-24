import React, {Component} from 'react';
import '../App.css';
import './Component.css';

class CovidData extends Component {
    state = {
        options: [],
        data: [],
        stateData: []
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

    handleStateChange = () => {
        this.setState({
            data: this.getStateData()
        })
    }

    async componentDidMount() {
        const url = `https://covidtracking.com/api/v1/states/current.json`
        const stateData = await this.loadData(url);
        this.setState({
            stateData
        })

    }

    handleSubmit = async () => {
        
    }



    render() {
        const { data, stateData } = this.state;
        return (

            <div className="data">
                <button>Global</button>
                <button onClick={this.handleCountryChange}>Country</button>
                <button>State</button>
                <form>
                    <label>State:<select>
                        {stateData.map((state) => <option value={state.positive}>{state.state}</option>)}
                    </select> 
                    </label>  
                </form>
                <h5>Last Update: {data.lastModified}</h5>
                <h5>Positive Test: {data.positive}</h5>
                <h5>Recovered: {data.recovered}</h5>
                <h5>Hospitalized Currently:  {data.hospitalizedCurrently}</h5>
                <h5>Total Cases: {data.cases}</h5>
            </div>
        )
    }
}

export default CovidData;
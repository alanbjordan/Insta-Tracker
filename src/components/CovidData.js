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
        theState: "ak",
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
        const countryData = await this.loadData(url);;
        console.log('the country data => ',countryData[0])
        return this.setState({
            countryData: countryData[0]
        })
    }
    
    handleCountryChange = () => {
        this.setState({
            countryData: this.getCountryData()
        })
    }

    //StateData
    getStateData = async () => {
        const url = `https://covidtracking.com/api/v1/states/${this.state.theState}/daily.json`
        const stateData = await this.loadData(url);
        return this.setState({
            data: stateData[0],
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
        const {stateData} = this.state;
        const { data } = this.state;
        const theState = this.state.theState;
        const lcState = theState.toLowerCase();
        const countryData = this.state.countryData;
        return (
            <div className="data">
                
                <div className='resultsDiv'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png' className='flag' alt='state flag'/>
                    <div>
                        <h3 className='results1'>Positive Test: </h3><h5>{countryData.positive}</h5>
                        <h3 className='results1'>Total Deaths: </h3><h5>{countryData.death}</h5>
                        <h3 className='results1'>Total Cases: </h3><h5>{countryData.total}  </h5>                     
                    </div>
                </div>
                <h2>Select a State</h2>
                <form  value={this.state.theState} onChange={this.handleChange}>
                    <label>State:
                    <select class="ui selection dropdown">
                        {stateData.map((state) => <option  class="dropdown icon" key={state.state} value={state.state}>{state.state}</option>)}
                    </select> 
                    </label> 
                </form  >
                <div className='resultsDiv'>
                    <img src={`http://flags.ox3.in/svg/us/${lcState}.svg`} className='flag' alt='state flag'/>
                    <div>
                        <h3 className='results1'>Positive Test: </h3><h5>{data.positive}</h5>
                        <h3 className='results1'>Total Deaths: </h3><h5>{data.death}</h5>
                        <h3 className='results1'>Total Cases: </h3><h5>{data.total}  </h5>                     
                    </div>
                </div>

                <hr />
            </div>
        )
    }
}

export default CovidData;
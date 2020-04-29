import React, {Component} from 'react';
import '../App.css';
import './Component.css';
import { LineChart, Line } from 'recharts';

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

     getChartData = async () => {
         const url = `https://covidtracking.com/api/v1/states/daily.json`
         const chartData = await this.loadData(url);
         console.log('chart data => ', chartData);
         return this.setState({
             chartData
         })
     }

    async componentDidMount() {
        const url = `https://covidtracking.com/api/v1/states/current.json`
        const stateData = await this.loadData(url);
        this.setState({
            stateData
        })
        this.getCountryData();
        this.getChartData();
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
        const chartData = this.state.chartData;
    //     if (chartData.length !== 0) {
    //         for (let i = 0; i < 56; i++ ) {
    //             console.log("Positive Cases", chartData[i])
    //         }
    // }
        const newData = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 300, pv: 1400, amt: 1400}, {name: 'Page C', uv: 200, pv: 800, amt: 800}];
        return (
            <div className="data">
                <div className='resultsDiv'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png' className='flag' alt='state flag'/>
                    <div className='usa'>
                        <h3 className='results1'>Positive Test: </h3><h2>{countryData.positive}</h2>
                        <h3 className='results1'>Total Deaths: </h3><h2>{countryData.death}</h2>
                        <h3 className='results1'>Total Cases: </h3><h2>{countryData.total}  </h2>                     
                    </div>
                </div>
                <div className='resultsDiv2'>
                <h2>Select a State</h2>
                <form  value={this.state.theState} onChange={this.handleChange}>
                    <label>
                    <select className="ui selection dropdown">
                        {stateData.map((state) => <option  className="dropdown icon" key={state.state} value={state.state}>{state.state}</option>)}
                    </select> 
                    </label> 
                </form  >

                    <img src={`http://flags.ox3.in/svg/us/${lcState}.svg`} className='flag2' alt='state flag'/>
                    <div>
                        <h3 className='results1'>Positive Test: </h3><h2>{data.positive}</h2>
                        <h3 className='results1'>Total Deaths: </h3><h2>{data.death}</h2>
                        <h3 className='results1'>Total Cases: </h3><h2>{data.total}  </h2>                     
                    </div>
                </div>
                <hr />
                <div>
                <LineChart width={400} height={400} data={newData}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
                </div>
            </div>
        )
    }
}

export default CovidData;
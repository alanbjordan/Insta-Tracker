import React, {Component} from 'react';
import '../App.css';
import './Component.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

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
        const url = `https://covidtracking.com/api/v1/us/daily.json`
        const countryData = await this.loadData(url);;
        console.log('the country data => ',countryData[0])
        return this.setState({
            countryData: countryData[0]
        })
    }

    getChartData = async () => {
        const url = `https://covidtracking.com/api/v1/us/daily.json`
        const chartData = await this.loadData(url);
        console.log('chart data => ', chartData);
        return this.setState({
            chartData: chartData
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
            stateData: stateData
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
        const stateData = this.state.stateData;
        console.log(stateData)
        const { data } = this.state;
        const theState = this.state.theState;
        const lcState = theState.toLowerCase();
        const countryData = this.state.countryData;
        const chartData = this.state.chartData;
        console.log("cd render", countryData)
        function day1() {
            if (chartData !== undefined) {
                console.log("chart data at render => ", chartData[0].positive); return chartData[0].positive;
                }
            }
        function day2() {
            if (chartData !== undefined) {
                console.log("chart data at render2 => ", chartData[1].positive); return chartData[1].positive;
                }
            }
        function day3() {
            if (chartData !== undefined) {
                console.log("chart data at render3 => ", chartData[2].positive); return chartData[2].positive;
                }
            }
        function day4() {
            if (chartData !== undefined) {
                console.log("chart data at render3 => ", chartData[3].positive); return chartData[3].positive;
                }
            }
        function day5() {
            if (chartData !== undefined) {
                console.log("chart data at render3 => ", chartData[4].positive); return chartData[4].positive;
                }
            }
        function day6() {
            if (chartData !== undefined) {
                console.log("chart data at render3 => ", chartData[5].positive); return chartData[5].positive;
                }
            }
        function day7() {
            if (chartData !== undefined) {
                console.log("chart data at render3 => ", chartData[6].positive); return chartData[6].positive;
                }
            }
        
        const newData = [{name: "7 Days", uv: day7(), pv: 2400, amt: 2400}, {name: '6 Days', uv: day6(), pv: 2400, amt: 2400}, {name: '5 Days', uv: day5(), pv: 2400, amt: 2400}, {name: '4 Days', uv: day4(), pv: 2400, amt: 2400}, {name: '3 Days', uv: day3(), pv: 2400, amt: 2400}, {name: 'Yesterday', uv: day2(), pv: 2400, amt: 2400}, {name: 'Today', uv: day1(), pv: 2400, amt: 2400}];
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
                <div className='lineChart'>
                    <h1>7 Day Historical Chart</h1>
                    <LineChart width={500} height={200} data={newData}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart>
                </div>
            </div>
        )
    }
}

export default CovidData;
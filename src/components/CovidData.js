import React, {Component} from 'react';
import '../App.css';
import './Component.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import CountryTable from './CountryTable';

class CovidData extends Component {
    state = {
        update: false,
        options: [],
        data:[],
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
        return this.setState({
            countryData: countryData[0]
        })
    }

    getChartData = async () => {
        const url = `https://covidtracking.com/api/v1/us/daily.json`
        const chartData = await this.loadData(url);
        return this.setState({
            chartData: chartData
        })
    }

    getStateHistory = async () => {
        const url = `https://covidtracking.com/api/v1/states/daily.json`
        const stateHistory = await this.loadData(url);
        return this.setState({
            stateHistory
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

    getTheStates = async () => {
        const url = `https://covidtracking.com/api/v1/states/current.json`
        const stateData = await this.loadData(url);
        this.setState({
        stateData: stateData
        })   
    }

    handleChange = async (event) => {        
        this.setState({
            theState: event.target.value,
        }, this.getStateData);
    }    

    checkState = async () => {
        console.log("the state history", this.state.stateHistory)        
        if (this.state.stateHistory !== null) {
            console.log("No Data!!!")
        } else {
            console.log("Data is in")
        }
    }

    async componentDidMount() {
        this.getTheStates();
        this.getCountryData();
        this.getChartData();
        this.getStateHistory();
        this.getStateData();
        this.checkState();

    }

    render() {
        const stateAbb = [
            {
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "name": "Guam",
                "abbreviation": "GU"
            },
            {
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ]
        const stateData = this.state.stateData;
        const { data } = this.state;
        const theState = this.state.theState;
        const upperTheState = theState.toUpperCase();
        const lcState = theState.toLowerCase();
        const countryData = this.state.countryData;
        const matchingState = [];
        stateAbb.map(element => {
            if (upperTheState === element.abbreviation) {
                matchingState.push(element.name);
            }}
        )
        const stateDateArray = [];    
        const statePosArray = [];
            if (this.state.stateHistory !== undefined) {
            for (let i = 0; i < 768; i++) {
                if (lcState === this.state.stateHistory[i].state.toLowerCase()) {
                    const stateDate = this.state.stateHistory[i].date;
                    const statePos = this.state.stateHistory[i].hospitalizedCurrently;
                    stateDateArray.push(stateDate);
                    statePosArray.push(statePos)
                }
            }
        }

        const newData = [{name: stateDateArray[13], uv: statePosArray[13], pv: 2400, amt: 2400}, {name: stateDateArray[12], uv: statePosArray[12], pv: 2400, amt: 2400}, {name: stateDateArray[11], uv: statePosArray[11], pv: 2400, amt: 2400}, {name: stateDateArray[10], uv: statePosArray[10], pv: 2400, amt: 2400},{name: stateDateArray[9], uv: statePosArray[9], pv: 2400, amt: 2400}, {name: stateDateArray[8], uv: statePosArray[8], pv: 2400, amt: 2400}, {name: stateDateArray[7], uv: statePosArray[7], pv: 2400, amt: 2400}, {name: stateDateArray[6], uv: statePosArray[6], pv: 2400, amt: 2400}, {name: stateDateArray[5], uv: statePosArray[5], pv: 2400, amt: 2400}, {name: stateDateArray[4], uv: statePosArray[4], pv: 2400, amt: 2400}, {name: stateDateArray[3], uv: statePosArray[3], pv: 2400, amt: 2400}, {name: stateDateArray[2], uv: statePosArray[2], pv: 2400, amt: 2400}, {name: stateDateArray[1], uv: statePosArray[1], pv: 2400, amt: 2400}, {name: stateDateArray[0], uv: statePosArray[0], pv: 2400, amt: 2400}];
        return (
            <div className="data">
                <div className='resultsDiv'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png' className='usFlag' alt='state flag'/>
                    <div className='usaresults'>
                        <h3 className='results1'>Positive Test: </h3><h2>{countryData.positive}</h2>
                        <h3 className='results1'>Total Deaths: </h3><h2>{countryData.death}</h2>
                        <h3 className='results1'>Total Test: </h3><h2>{countryData.total}  </h2>                     
                    </div>
                </div>
                <div className='resultsDiv2'>
                <div className='stateNameDiv'><h1 className='stateName'>{matchingState[0]}</h1></div>
                <div className='stateSelector'>
                    <form className='stateSelector' value={this.state.theState} onChange={this.handleChange}>
                        <label> Select State <br></br>
                        <select className="ui compact menu">
                            {stateData.map((state) => <option  className="dropdown icon" key={state.state} value={state.state}>{state.state}</option>)}
                        </select> 
                        </label> 
                    </form>
                </div>
                    <img src={`http://flags.ox3.in/svg/us/${lcState}.svg`} className='flag2' alt='state flag'/>
                    <div className='hospitalData'>
                        <h1 className='dp'>{data.hospitalizedCurrently}</h1><h3 className='results1'>COVID-19 Hospitaliziations: </h3>
                    </div>
                </div>
                <hr />
                <div className='lineChart'>
                    <h1>{matchingState[0]}: 14 Day Historical(+ Test)</h1>
                    <LineChart width={500} height={200} data={newData}>
                        <Line type="monotone" dataKey="uv" stroke="#ff0000"  activeDot={{ r: 8 }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="name" />
                        <Tooltip/>
                        <YAxis />
                    </LineChart>
                </div>
                <div>
                   {/* <CountryTable />  */}
                </div>
            </div>
        )
    }
}

export default CovidData;
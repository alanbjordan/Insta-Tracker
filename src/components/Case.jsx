import React, { Component } from 'react';
import '../CasePage.css';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Case extends Component {

    state = { 
        test_date: "",
        state: "alabama" ,
        site_name : 'asite',
        testing_site: [],
        redirect: null,
        caseSubmit : false,
        loading : false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state)
        console.log('state - ', this.state.state)
    }

    stateHandleChange = (event) => {
        this.setState({
            state: event.target.value
        }); 
        this.getTestingSites(event.target.value);
    }

    componentDidMount = async () => {
        this.getTestingSites(this.state.state);
    }

    onSiteChange = (event) => {
        this.setState({
            site_name : event.target.value
        })
        console.log(this.state.testing_site)
    }

    getTestingSites = async(stateName) => {
        const testSiteUrl = await fetch(`https://covid-19-testing.github.io/locations/${stateName.toLowerCase()}/complete.json`);
        const response = await testSiteUrl.json();
        const siteNames = [];
        response.map(site => {
            return siteNames.push(site.name);
        });
        console.log(siteNames);
        this.setState({
            testing_site : siteNames
        });
        // console.log('test site =>', sites);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            loading : true
        })
        const data = this.state
        console.log(data);
        const url = 'http://localhost:9000/case';
        axios.post(url,data)
        .then(response => { if (response.status === 200) {
            this.setState({
                caseSubmit : true,
                loading : false
            })
            setTimeout(() => {
                this.setState({
                    redirect : "/"
                })
            }, 5000 )
            
            console.log(response);
        }}) 
        .catch(e => console.log(e))        
    }

    render() {

        const stateOptions = ['Alabama' , 'Alaska' , 'Arizona' , 'Arkansas' , 'California' , 'Colorado' , 'Connecticut' , 'Delaware' , 'Florida' , 'Georgia' , 
        'Hawaii' , 'Idaho', 'Illinois', 'Indiana', 'Iowa' , 'Kansas' , 'Kentucky' , 'Louisiana' , 'Maine' , 'Maryland', 'Massachusetts' , 'Michigan' , 'Minnesota' , 'Mississippi', 'Missouri',
        'Montana' , 'Nebraska' , 'Nevada' , 'New-Hampshire' , 'New-Jersey' , 'New-Mexico' , 'New-York' , 'North-Carolina' , 'North-Dakota' , 'Ohio', 'Oklahoma' , 'Oregon' , 'Pennsylvania', 'South-Carolina', 
        'Tennessee' , 'Texas' , 'Utah' , 'Vermont' , 'Virginia' , 'Washington' , 'West-Virginia' , 'Wisconsin' , 'Wyoming' ]

        const { test_date, testing_site, site_name, caseSubmit, loading } = this.state

        if (loading === true) {
            return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-danger" role="status" style={{margin : "auto", width: "3rem", height: "3rem"}}>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
          )
        }

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }

        console.log('this the sites', testing_site);
        if(caseSubmit === false) {
            return (
                <div className="case">
                    <div className="caseTitle">
                        <h1>Have you tested positive for <span className="spanTags">COVID-19</span>? Please file an <span className="spanTags" >anonymous</span> case report below.</h1>
                    </div>
                    <form className="caseForm" onSubmit={this.handleSubmit}>
                        <div className="caseInputLabel">TEST DATE : 
                            <div className="caseInputDiv">
                                <input className="inputElement"  style={{ borderRadius: "20px", textAlign: "center", paddingLeft:"25px", fontStyle: "normal", fontFamily: "sans-serif", color: "black" }} type="date" name="test_date" value={test_date} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="caseInputLabel">STATE :
                            <div className="caseInputDiv">
                                {/* <input placeholder="State" style={{borderRadius: "10px", textAlign: "center"}} type="text" name="state" value={state} onChange={this.handleChange} /> */}
                                <select className="inputElement"  style={{borderRadius: "20px", padding: "2.5px"}} onChange={this.stateHandleChange}>
                                    {stateOptions.map((stateOption, index) => (
                                        <option key={index} value={stateOption} name="state" >{stateOption}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <p style={{visibility: "hidden", width: "0px"}} value={site_name} name="site_name">{site_name}</p>
                        </div>
                        <div className="caseInputLabel">TEST SITE :
                            <div className="caseInputDiv">
                                <select className="inputElement" style={{borderRadius: "20px", textAlign: "center", padding: "2.5px"}} onChange={this.onSiteChange}>
                                    {testing_site.map((site, index) => (
                                        <option key={index} name="testing_site" value={site} >{site}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div id="caseButtDiv" className="caseInputDiv">
                            <button className="caseInputButt" type="submit"> <b>SUBMIT</b> </button>
                        </div>
                    </form>  
                </div>
            )
        } else {
            return (
                <div className="formSuccess">
                    <span className="spanTags">Thank you</span> for your submition!<br></br> You will now be <span className="spanTags">redirected</span> to the <span className="spanTags">homepage</span>.
                </div>
            )
        }
    }
}

export default Case;
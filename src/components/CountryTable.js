import React, { Component } from 'react';
import './Component.css';


class CountryTable extends Component {
    state = {
        data: [],
        loading : true
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

    async componentDidMount() {
        const url = `https://coronavirus-19-api.herokuapp.com/countries`
        const stateData = await this.loadData(url);
        const data =  stateData.map(state => state)
        console.log("Data is =>", data);
        this.setState({
            data,
            loading : false
        })

    }


    render() {
        const { data, loading } = this.state;

        if (loading === true) {
            return(
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-danger" role="status" style={{margin : "auto", width: "3rem", height: "3rem"}}>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            )
        }

        return (
        <div className="countryTable">
            <table className="table">
            <thead className="thead-dark">
                <tr className="fixed">
                <th scope="col">Country</th>
                <th scope="col">Cases</th>
                <th scope="col">Recovered</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.map(country => <tr className='tableText'>{country.country}</tr>)}</td>
                    <td>{data.map(country => <tr className='tableText'>{country.cases}</tr>)}</td>
                    <td>{data.map(country => <tr className='tableText'>{country.recovered}</tr>)}</td>
                </tr>
            </tbody>
            </table>
        </div>
        )
    }
}

export default CountryTable;
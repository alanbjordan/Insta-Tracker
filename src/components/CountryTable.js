import React, { Component } from 'react';
import './Component.css';


class CountryTable extends Component {
    state = {
        data: []
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
            data
        })

    }


    render() {
        const { data } = this.state;
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
                    <td>{data.map(country => <tr>{country.country}</tr>)}</td>
                    <td>{data.map(country => <tr>{country.cases}</tr>)}</td>
                    <td>{data.map(country => <tr>{country.recovered}</tr>)}</td>
                </tr>
            </tbody>
            </table>
        </div>
        )
    }
}

export default CountryTable;
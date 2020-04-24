import React, { Component } from 'react'

class Exercise extends Component {
    state = {
        muscles: []
    }

    loadMuscle = async () => {
        const url = await fetch('https://wger.de/api/v2/muscle/?format=json');
        const response = await url.json();
        const data = response.results;
        return data; 
    }

    componentDidMount = async () => {
        const muscleData = await this.loadMuscle();
        this.setState({ 
           muscles : muscleData 
        })
        console.log('Muscles are: ', this.state.muscles)
    }

    render() {
        const { muscles } = this.state
        return (
            <div>
                What body part would you like to work?
                <div>
                    <form>
                        <label id="muscleSelectLabel">SELECT A MUSCLE:
                            <select id="muscleChangeForm">
                                {muscles.map(muscle => (
                                    <option key={muscle.id} value={muscle.name}>{muscle.name}</option>
                                ))}
                            </select>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default Exercise;
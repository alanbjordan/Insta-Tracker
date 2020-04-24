import React, { Component } from 'react'

class Exercise extends Component {
    state = {
        muscles: [],
        equipment: [],
        exercises: []
    }

    loadMuscle = async () => {
        const url = await fetch('https://wger.de/api/v2/muscle/?format=json');
        const response = await url.json();
        const data = response.results;
        return data; 
    }
    
    loadEquipment = async () => {
        const url = await fetch('https://wger.de/api/v2/equipment/?format=json');
        const response = await url.json();
        const data = response.results;
        return data; 
    }

    componentDidMount = async () => {
        const muscleData = await this.loadMuscle();
        const equipmentData = await this.loadEquipment();
        this.setState({ 
           muscles : muscleData,
           equipment: equipmentData
        })
        console.log('Muscles are: ', this.state.muscles)
        console.log('Equipment is: ', this.state.equipment)
    }

    render() {
        const { muscles, equipment } = this.state
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
                <br></br>
                What equipment do you have available?
                <div>
                    <form>
                        <label id="equipmentSelectLabel">SELECT A PIECE OF EQUIPMENT:
                            <select id="equipmentChangeForm">
                                {equipment.map(stuff => (
                                    <option key={stuff.id} value={stuff.name}>{stuff.name}</option>
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

// Link to get exercises based on muscle group and equipment available https://wger.de/api/v2/exercise/?language=2&muscles={this.state.muscles}&equipment={this.state.equipment}
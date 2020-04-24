import React, { Component } from 'react'

class Exercise extends Component {
    state = {
        muscles: [],
        equipment: [],
        exercises: [],
        selectMuscle: "",
        selectEquipment: "",
        musclesId: null,
        equipmentId: null
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

    handleMuscleChange = event => {
        this.setState({
            musclesId: event.target.value,
          selectMuscle: event.target.id,
        })
        console.log(this.state.selectMuscle)
    }

    handleEquipChange = event => {
        this.setState({
            equipmentId: event.target.value,
          selectEquipment: event.target.id
        })
        console.log(this.state.selectEquipment)
    }

    handleSubmit = async event => {
        event.preventDefault();
        const url = await fetch(`https://wger.de/api/v2/exercise/?language=2&muscles=${this.state.musclesId}&equipment=${this.state.equipmentId}`);
        const response = await url.json();
        const data = response.results;
        this.setState({
            exercises: data
        })
        console.log(this.state.exercises)
    }

    componentDidMount = async () => {
        const muscleData = await this.loadMuscle();
        const equipmentData = await this.loadEquipment();
        this.setState({ 
           muscles : muscleData,
           equipment: equipmentData,
           selectMuscle: muscleData[0].name,
           selectEquipment: equipmentData[0].name,
           musclesId : muscleData[0].id,
           equipmentId : equipmentData[0].id
        })
        console.log('Muscles are: ', this.state.muscles)
        console.log('Equipment is: ', this.state.equipment)
    }

    render() {
        const { muscles, equipment, exercises } = this.state
        return (
            <div>
                What body part would you like to work?
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label id="muscleSelectLabel">SELECT A MUSCLE:
                            <select onChange={this.handleMuscleChange} id="muscleChangeForm">
                                {muscles.map(muscle => (
                                    <option id={muscle.name} key={muscle.id} value={muscle.id}>{muscle.name}</option>
                                ))}
                            </select>
                        </label>
                <br></br>
                <br></br>
                What equipment do you have available?
                        <label id="equipmentSelectLabel">SELECT A PIECE OF EQUIPMENT:
                            <select onChange={this.handleEquipChange} id="equipmentChangeForm">
                                {equipment.map(stuff => (
                                    <option id={stuff.name} key={stuff.id} value={stuff.id}>{stuff.name}</option>
                                ))}
                            </select>
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <br></br>
                <div>
                EXERCISES: 
                <br></br>
                    <div>
                        {exercises.map(exercise => (
                            <p id={exercise.name} key={exercise.id} value={exercise.id}>{exercise.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Exercise;


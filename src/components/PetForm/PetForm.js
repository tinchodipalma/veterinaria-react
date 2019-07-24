import React from 'react';

import './PetForm.css';
import Perro from '../../entities/Perro';

class PetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {},
    };
  }

  onFormChange(event) {
    const newFormData = { ...this.state.formData };

    newFormData[event.target.name] = event.target.value;

    this.setState({ formData: newFormData });
  }

  onPetSubmit(event) {
    event.preventDefault();

    const pet = new Perro(this.state.formData);

    this.props.onCreate(pet);
  }

  render() {
    return (
      <div className="PetForm">
        <form onSubmit={this.onPetSubmit.bind(this)}>
          <div>
            <label>Tipo:</label>
            <select value={this.state.formData.type || ''} name="type" onChange={this.onFormChange.bind(this)}>
              <option value="p">Perro</option>
              <option value="g">Gato</option>
              <option value="c">Conejo</option>
            </select>
          </div>

          <div>
            <label>Nombre:</label>
            <input type="text" value={this.state.formData.name || ''} name="name" onChange={this.onFormChange.bind(this)}/>
          </div>

          <div>
            <label>Fecha de Nacimiento:</label>
            <input type="date" value={this.state.formData.birthdate || ''} name="birthdate" onChange={this.onFormChange.bind(this)}/>
          </div>

          <div>
            <label>Color:</label>
            <input type="text" value={this.state.formData.color || ''} name="color" onChange={this.onFormChange.bind(this)}/>
          </div>

          <div>
            <label>Peso:</label>
            <input type="text" value={this.state.formData.weight || ''} name="weight" onChange={this.onFormChange.bind(this)}/>
          </div>

          <div>
            <button type="submit">
              Agregar Mascota
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default PetForm;

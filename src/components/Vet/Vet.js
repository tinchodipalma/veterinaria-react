import React from 'react';
import PetForm from '../PetForm';
import PetList from '../PetList/PetList';
import PetData from '../PetData/PetData';

import './Vet.css';
import Perro from '../../entities/Perro';

class Vet extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      selectedPet: null,
      pets: [
        new Perro({ name: 'Gloria' }),
      ],
    };
  }

  onPetSubmit(pet) {
    let pets = [ ...this.state.pets ];
    let selectedPet = { ...this.state.selectedPet };

    if (this.state.isEdit) {
      const petIndex = pets.findIndex(({ id }) => id === this.state.selectedPet.id);
      if (petIndex >= 0) {
        pets[petIndex] = pet;
        selectedPet = pet;
      }
    } else {
      pets.push(pet);
    }

    this.setState({ pets, selectedPet, isEdit: false });
  }

  onPetDelete() {
    let pets = [ ...this.state.pets ];
    const petIndex = pets.findIndex(({ id }) => id === this.state.selectedPet.id);
    if (petIndex >= 0) {
      pets.splice(petIndex, 1);
    }

    this.setState({ pets, selectedPet: null, isEdit: false });
  }

  onSelectPet(pet) {
    return () => {
      this.setState({
        isEdit: false,
        selectedPet: pet,
      });
    }
  }

  onPetDataClose() {
    this.setState({
      isEdit: false,
      selectedPet: null,
    });
  }

  onPetEdit() {
    this.setState({
      isEdit: true,
    });
  }

  onEditCancel() {
    this.setState({
      isEdit: false,
    });
  }

  render() {
    return (
      <div className="Vet">
        <div>
          <PetForm
            isEdit={this.state.isEdit}
            pet={this.state.selectedPet}
            onCreate={this.onPetSubmit.bind(this)}
            onDelete={this.onPetDelete.bind(this)}
            onEditCancel={this.onEditCancel.bind(this)}
          />
        </div>
        <div>
          <PetList pets={this.state.pets} onSelectPet={this.onSelectPet.bind(this)} />
        </div>
        <div>
          <PetData
            pet={this.state.selectedPet}
            onClose={this.onPetDataClose.bind(this)}
            onEdit={this.onPetEdit.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Vet;
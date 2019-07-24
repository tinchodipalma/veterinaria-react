import React from 'react';
import PetForm from '../PetForm';
import PetList from '../PetList/PetList';

import './Vet.css';
import PetData from '../PetData/PetData';

class Vet extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedPet: null,
      pets: [],
    };
  }

  onPetCreate(pet) {
    this.setState({
      pets: [ ...this.state.pets, pet ],
    });
  }

  onSelectPet(pet) {
    return () => {
      this.setState({
        selectedPet: pet,
      });
    }
  }

  render() {
    return (
      <div className="Vet">
        <div>
          <PetForm onCreate={this.onPetCreate.bind(this)} />
        </div>
        <div>
          <PetList pets={this.state.pets} onSelectPet={this.onSelectPet.bind(this)} />
        </div>
        <div>
          <PetData pet={this.state.selectedPet} />
        </div>
      </div>
    );
  }
}

export default Vet;
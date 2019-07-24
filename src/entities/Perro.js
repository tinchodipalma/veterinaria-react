import Mascota from './Mascota';

class Perro extends Mascota {
  constructor(data) {
    super(data);

    this.sound = 'guau guau';
  }
}

export default Perro;

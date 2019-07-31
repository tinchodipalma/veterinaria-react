class Mascota {
  constructor(data) {
    this.id = data.id || (new Date()).getTime();
    this.name = data.name;
    this.weight = data.weight;
    this.color = data.color;
    this.birthdate = data.birthdate;
  }
}

export default Mascota;
const carro = {
  velAtual: 0,
  velMaz: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`;
  },
};

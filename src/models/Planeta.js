export default class Planeta {
    constructor(planet, date, color1, color2, populacao, recursos, assentamentos, galaxia, sistema, coordenadas, frequencia, codificacao, name, cargo) {
      this.id = this.generateId();
      this.planet = planet;
      this.date = date;
      this.color1 = color1;
      this.color2 = color2;
      this.populacao = populacao;
      this.recursos = recursos;
      this.assentamentos = assentamentos;
      this.galaxia = galaxia;
      this.sistema = sistema;
      this.coordenadas = coordenadas;
      this.frequencia = frequencia;
      this.codificacao = codificacao;
      this.name = name;
      this.cargo = cargo;
      
    }

    generateId(){
      return Math.floor(Math.random() * 1000);
    }
  }
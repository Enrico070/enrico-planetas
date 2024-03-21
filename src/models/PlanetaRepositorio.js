class PlanetaRepository {
    constructor() {
      this.planetas = [];
    }
  
    getAll() {
      return this.planetas;
    }
  
    get(id) {
      return this.planetas.find((planeta) => planeta.id === id);
    }
  
    add(planeta) {
      this.planetas.push(planeta);
    }
  
    remove(id) {
      this.planetas = this.planetas.filter((planeta) => planeta.id !== id);
    }
  
    update(id, planet, date, color1, color2, populacao, recursos, assentamentos, galaxia, sistema, coordenadas, frequencia, codificacao, name, cargo) {
      const mundo = this.get(id);
  
      if (mundo) {
      mundo.planet = planet;
      mundo.date = date;
      mundo.color1 = color1;
      mundo.color2 = color2;
      mundo.populacao = populacao;
      mundo.recursos = recursos;
      mundo.assentamentos = assentamentos;
      mundo.galaxia = galaxia;
      mundo.sistema = sistema;
      mundo.coordenadas = coordenadas;
      mundo.frequencia = frequencia;
      mundo.codificacao = codificacao;
      mundo.name = name;
      mundo.cargo = cargo;
      }
      return mundo;
    }
  }
  
  const mundoRepository = new PlanetaRepository();
  
  export default mundoRepository;
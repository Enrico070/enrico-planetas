import {planeta} from "../data/Profile"
import Planeta from "./Planeta"




class PlanetaRepositorio {
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
      const planeta = this.get(id);
  
      if (planeta) {
      planeta.planet = planet;
      planeta.date = date;
      planeta.color1 = color1;
      planeta.color2 = color2;
      planeta.populacao = populacao;
      planeta.recursos = recursos;
      planeta.assentamentos = assentamentos;
      planeta.galaxia = galaxia;
      planeta.sistema = sistema;
      planeta.coordenadas = coordenadas;
      planeta.frequencia = frequencia;
      planeta.codificacao = codificacao;
      planeta.name = name;
      planeta.cargo = cargo;
      }
      return planeta;
    }
  }
  
  const planetaRepositorio = new PlanetaRepositorio();
  const newPlaneta = new Planeta(planeta.planet, planeta.date, planeta.color1, planeta.color2, planeta.populacao, planeta.recursos, planeta.assentamentos, planeta.galaxia, planeta.sistema, planeta.coordenadas, planeta.frequencia, planeta.codificacao, planeta.name, planeta.cargo || 0)
  
  planetaRepositorio.add(newPlaneta)
  
  export default planetaRepositorio;
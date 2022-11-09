import { Injectable } from '@angular/core';
import { Exercise } from 'src/app/components/homepage/homepage.component';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor() { }

  GetAllExercises() : Exercise[] {
    let supinoComBarra: Exercise = {
      started: false,
      finished: false,
      name: 'Supino com barra',
      description: '',
      image: '..\\assets\\'+ 1 +'.png',
      weekDay: 'Segunda',
      type: 'Composto'
    };
    let exercisesList: Exercise[] = [supinoComBarra];

    let supinoComHalteres: Exercise = {
      started: false,
      finished: false,
      name: 'Supino com halteres',
      description: '',
      image: '..\\assets\\'+ 2 +'.png',
      weekDay: 'Segunda',
      type: 'Composto'
    };
    exercisesList.push(supinoComHalteres);

    let supinoComMaquina: Exercise = {
      started: false,
      finished: false,
      name: 'Supino com máquina',
      description: '',
      image: '..\\assets\\'+ 3 +'.png',
      weekDay: 'Segunda',
      type: 'Composto'
    };
    exercisesList.push(supinoComMaquina);

    let flexoesDeTronco: Exercise = {
      started: false,
      finished: false,
      name: 'Flexoes de tronco',
      description: '',
      image: '..\\assets\\'+ 4 +'.png',
      weekDay: 'Segunda',
      type: 'Composto'
    };
    exercisesList.push(flexoesDeTronco);

    let crucifixoComHalteres: Exercise = {
      started: false,
      finished: false,
      name: 'Crucifixo com halteres',
      description: '',
      image: '..\\assets\\'+ 5 +'.png',
      weekDay: 'Segunda',
      type: 'Isolamento'
    };
    exercisesList.push(crucifixoComHalteres);

    let crucifixoEmPolia: Exercise = {
      started: false,
      finished: false,
      name: 'Crucifixo em polia',
      description: '',
      image: '..\\assets\\'+ 6 +'.png',
      weekDay: 'Segunda',
      type: 'Isolamento'
    };
    exercisesList.push(crucifixoEmPolia);

    let crossover: Exercise = {
      started: false,
      finished: false,
      name: 'Crossover',
      image: '..\\assets\\'+ 7 +'.png',
      description: '',
      weekDay: 'Segunda',
      type: 'Isolamento'
    };
    exercisesList.push(crossover);

    let peckDeck: Exercise = {
      started: false,
      finished: false,
      name: 'Peck deck',
      description: '',
      image: '..\\assets\\'+ 8 +'.png',
      weekDay: 'Segunda',
      type: 'Isolamento'
    };
    exercisesList.push(peckDeck);

    return exercisesList;
  }
}

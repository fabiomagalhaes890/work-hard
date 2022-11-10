import { Injectable } from '@angular/core';
import { Exercise } from 'src/app/components/homepage/homepage.component';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor() { }

  GetAllExercises(day: string) : Exercise[] {
    let supinoComBarra: Exercise = {
      started: false,
      finished: false,
      name: 'Supino com barra',
      description: '',
      image: '..\\assets\\'+ 1 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Composto',
      muscleGroup: 'Peitoral'
    };
    let exercisesList: Exercise[] = [supinoComBarra];

    let supinoComHalteres: Exercise = {
      started: false,
      finished: false,
      name: 'Supino com halteres',
      description: '',
      image: '..\\assets\\'+ 2 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Composto',
      muscleGroup: 'Peitoral'
    };
    exercisesList.push(supinoComHalteres);

    let supinoComMaquina: Exercise = {
      started: false,
      finished: false,
      name: 'Supino com máquina',
      description: '',
      image: '..\\assets\\'+ 3 +'.gif',
      weekDay: 'Segunda-Feira',
      type: 'Composto',
      muscleGroup: 'Peitoral'
    };
    exercisesList.push(supinoComMaquina);

    let flexoesDeBraco: Exercise = {
      started: false,
      finished: false,
      name: 'Flexoes de braço',
      description: '',
      image: '..\\assets\\'+ 4 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Composto',
      muscleGroup: 'Peitoral'
    };
    exercisesList.push(flexoesDeBraco);

    let crucifixoComHalteres: Exercise = {
      started: false,
      finished: false,
      name: 'Crucifixo com halteres',
      description: '',
      image: '..\\assets\\'+ 5 +'.gif',
      weekDay: 'Segunda-Feira',
      type: 'Isolamento',
      muscleGroup: 'Peitoral'
    };
    exercisesList.push(crucifixoComHalteres);

    let crucifixoEmPolia: Exercise = {
      started: false,
      finished: false,
      name: 'Crucifixo em polia',
      description: '',
      image: '..\\assets\\'+ 6 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Isolamento',
      muscleGroup: 'Peitoral'
    };
    exercisesList.push(crucifixoEmPolia);

    let crossover: Exercise = {
      started: false,
      finished: false,
      name: 'Crossover',
      image: '..\\assets\\'+ 7 +'.gif',
      description: '',
      weekDay: 'Segunda-Feira',
      type: 'Isolamento',
      muscleGroup: 'Peitoral'
    };
    exercisesList.push(crossover);

    let peckDeck: Exercise = {
      started: false,
      finished: false,
      name: 'Peck deck',
      description: '',
      image: '..\\assets\\'+ 8 +'.gif',
      weekDay: 'Segunda-Feira',
      type: 'Isolamento',
      muscleGroup: 'Peitoral'
    };
    exercisesList.push(peckDeck);

    let fundosEmBarras: Exercise = {
      started: false,
      finished: false,
      name: 'Fundos em barras',
      description: '',
      image: '..\\assets\\'+ 9 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Composto',
      muscleGroup: 'Tríceps'
    };
    exercisesList.push(fundosEmBarras);

    let fundosEntreBancos: Exercise = {
      started: false,
      finished: false,
      name: 'Fundos entre bancos',
      description: '',
      image: '..\\assets\\'+ 10 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Composto',
      muscleGroup: 'Tríceps'
    };
    exercisesList.push(fundosEntreBancos);

    let fundosEmMaquina: Exercise = {
      started: false,
      finished: false,
      name: 'Fundos em máquina',
      description: '',
      image: '..\\assets\\'+ 11 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Composto',
      muscleGroup: 'Tríceps'
    };
    exercisesList.push(fundosEmMaquina);

    let supinoAgarreJunto: Exercise = {
      started: false,
      finished: false,
      name: 'Supino agarre junto',
      description: '',
      image: '..\\assets\\'+ 12 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Composto',
      muscleGroup: 'Tríceps'
    };
    exercisesList.push(supinoAgarreJunto);

    let flexoesAgarreJunto: Exercise = {
      started: false,
      finished: false,
      name: 'Flexões agarre junto',
      description: '',
      image: '..\\assets\\'+ 13 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Composto',
      muscleGroup: 'Tríceps'
    };
    exercisesList.push(flexoesAgarreJunto);

    let extensaoTricepsDeitado: Exercise = {
      started: false,
      finished: false,
      name: 'Extensao triceps deitado',
      description: '',
      image: '..\\assets\\'+ 14 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Isolamento',
      muscleGroup: 'Tríceps'
    };
    exercisesList.push(extensaoTricepsDeitado);

    let extensaoTricepsInclinado: Exercise = {
      started: false,
      finished: false,
      name: 'Extensao triceps inclinado',
      description: '',
      image: '..\\assets\\'+ 15 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Isolamento',
      muscleGroup: 'Tríceps'
    };
    exercisesList.push(extensaoTricepsInclinado);

    let extensaoTricepsMaquina: Exercise = {
      started: false,
      finished: false,
      name: 'Extensao triceps em máquina',
      description: '',
      image: '..\\assets\\'+ 16 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Isolamento',
      muscleGroup: 'Tríceps'
    };
    exercisesList.push(extensaoTricepsMaquina);

    // let extensaoTricepsSentadoHalter: Exercise = {
    //   started: false,
    //   finished: false,
    //   name: 'Extensao triceps sentado c/ halter',
    //   description: '',
    //   image: '..\\assets\\'+ 17 +'.png',
    //   weekDay: 'Segunda-Feira',
    //   type: 'Isolamento',
    //   muscleGroup: 'Tríceps'
    // };
    // exercisesList.push(extensaoTricepsSentadoHalter);

    let puxadaTriceps: Exercise = {
      started: false,
      finished: false,
      name: 'Puxada de tríceps',
      description: '',
      image: '..\\assets\\'+ 18 +'.webp',
      weekDay: 'Segunda-Feira',
      type: 'Isolamento',
      muscleGroup: 'Tríceps'
    };
    exercisesList.push(puxadaTriceps);

    let kickbackHalter: Exercise = {
      started: false,
      finished: false,
      name: 'Kickback com halter',
      description: '',
      image: '..\\assets\\'+ 19 +'.gif',
      weekDay: 'Segunda-Feira',
      type: 'Isolamento',
      muscleGroup: 'Tríceps'
    };
    exercisesList.push(kickbackHalter);

    return exercisesList.filter((exercise) => exercise.weekDay === day);
  }
}

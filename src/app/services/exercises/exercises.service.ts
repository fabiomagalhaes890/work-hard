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

    let puxadaDorsal: Exercise = {
      started: false,
      finished: false,
      name: 'Puxada dorsal em pronação',
      description: '',
      image: '..\\assets\\'+ 20 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Composto',
      muscleGroup: 'Grande dorsal'
    };
    exercisesList.push(puxadaDorsal);

    let elevacoesTroncoSupinacao: Exercise = {
      started: false,
      finished: false,
      name: 'Elevação de tronco em supinação',
      description: '',
      image: '..\\assets\\'+ 21 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Composto',
      muscleGroup: 'Grande dorsal'
    };
    exercisesList.push(elevacoesTroncoSupinacao);

    let elevacoesTroncoPronacao: Exercise = {
      started: false,
      finished: false,
      name: 'Elevação de tronco em pronação',
      description: '',
      image: '..\\assets\\'+ 22 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Composto',
      muscleGroup: 'Grande dorsal'
    };
    exercisesList.push(elevacoesTroncoPronacao);

    let elevacoesTroncoNeutro: Exercise = {
      started: false,
      finished: false,
      name: 'Elevação de tronco neutro',
      description: '',
      image: '..\\assets\\'+ 29 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Composto',
      muscleGroup: 'Grande dorsal'
    };
    exercisesList.push(elevacoesTroncoNeutro);

    let puxadaDorsalNeutra: Exercise = {
      started: false,
      finished: false,
      name: 'Puxada dorsal neutra',
      description: '',
      image: '..\\assets\\'+ 23 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Composto',
      muscleGroup: 'Grande dorsal'
    };
    exercisesList.push(puxadaDorsalNeutra);

    let remadaComBarraPronada: Exercise = {
      started: false,
      finished: false,
      name: 'Remada com barra pronada',
      description: '',
      image: '..\\assets\\'+ 24 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Composto',
      muscleGroup: 'Intermédia dos trapézios'
    };
    exercisesList.push(remadaComBarraPronada);

    let remadaComBarraT: Exercise = {
      started: false,
      finished: false,
      name: 'Remada com barra  T',
      description: '',
      image: '..\\assets\\'+ 25 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Composto',
      muscleGroup: 'Intermédia dos trapézios'
    };
    exercisesList.push(remadaComBarraT);

    let remadaComHalter: Exercise = {
      started: false,
      finished: false,
      name: 'Remada com halter',
      description: '',
      image: '..\\assets\\'+ 26 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Composto',
      muscleGroup: 'Intermédia dos trapézios'
    };
    exercisesList.push(remadaComHalter);

    let remadaEmPolia: Exercise = {
      started: false,
      finished: false,
      name: 'Remada em polia',
      description: '',
      image: '..\\assets\\'+ 27 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Composto',
      muscleGroup: 'Intermédia dos trapézios'
    };
    exercisesList.push(remadaEmPolia);

    let remadaInvertida: Exercise = {
      started: false,
      finished: false,
      name: 'Remada invertida',
      description: '',
      image: '..\\assets\\'+ 28 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Composto',
      muscleGroup: 'Intermédia dos trapézios'
    };
    exercisesList.push(remadaInvertida);

    let encolhimentoTrapezio: Exercise = {
      started: false,
      finished: false,
      name: 'Encolhimento trapézio',
      description: '',
      image: '..\\assets\\'+ 30 +'.gif',
      weekDay: 'Terça-Feira',
      type: 'Isolado',
      muscleGroup: 'Trapézio superior'
    };
    exercisesList.push(encolhimentoTrapezio);

    let curlComBarra: Exercise = {
      started: false,
      finished: false,
      name: 'CUrl com barra',
      description: '',
      image: '..\\assets\\'+ 31 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Isolado',
      muscleGroup: 'Bíceps'
    };
    exercisesList.push(curlComBarra);

    let curlComHalter: Exercise = {
      started: false,
      finished: false,
      name: 'Curl com halter',
      description: '',
      image: '..\\assets\\'+ 32 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Isolado',
      muscleGroup: 'Bíceps'
    };
    exercisesList.push(curlComHalter);

    let curlScott: Exercise = {
      started: false,
      finished: false,
      name: 'Curl scott',
      description: '',
      image: '..\\assets\\'+ 33 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Isolado',
      muscleGroup: 'Bíceps'
    };
    exercisesList.push(curlScott);

    let curlMartelo: Exercise = {
      started: false,
      finished: false,
      name: 'Curl martelo',
      description: '',
      image: '..\\assets\\'+ 43 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Isolado',
      muscleGroup: 'Bíceps'
    };
    exercisesList.push(curlMartelo);

    let roscaConcentradaUnilateral: Exercise = {
      started: false,
      finished: false,
      name: 'Rosca concentrada unilateral',
      description: '',
      image: '..\\assets\\'+ 34 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Isolado',
      muscleGroup: 'Bíceps'
    };
    exercisesList.push(roscaConcentradaUnilateral);

    let roscaComCorda: Exercise = {
      started: false,
      finished: false,
      name: 'Rosca em pé com corda',
      description: '',
      image: '..\\assets\\'+ 35 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Isolado',
      muscleGroup: 'Bíceps'
    };
    exercisesList.push(roscaComCorda);

    let roscaBancoInclinado: Exercise = {
      started: false,
      finished: false,
      name: 'Rosca banco inclinado',
      description: '',
      image: '..\\assets\\'+ 44 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Isolado',
      muscleGroup: 'Bíceps'
    };
    exercisesList.push(roscaBancoInclinado);

    let marteloBancoInclinado: Exercise = {
      started: false,
      finished: false,
      name: 'Martelo banco inclinado',
      description: '',
      image: '..\\assets\\'+ 45 +'.webp',
      weekDay: 'Terça-Feira',
      type: 'Isolado',
      muscleGroup: 'Bíceps'
    };
    exercisesList.push(marteloBancoInclinado);

    let flexaoDePunho: Exercise = {
      started: false,
      finished: false,
      name: 'Flexão de punho',
      description: '',
      image: '..\\assets\\'+ 36 +'.gif',
      weekDay: 'Terça-Feira',
      type: 'Isolado',
      muscleGroup: 'Antebraço'
    };
    exercisesList.push(flexaoDePunho);

    /* pernas */

    let pressMilitarComHalter: Exercise = {
      started: false,
      finished: false,
      name: 'Press militar com halter',
      description: '',
      image: '..\\assets\\'+ 37 +'.webp',
      weekDay: 'Sexta-Feira',
      type: 'Composto',
      muscleGroup: 'Ombro'
    };
    exercisesList.push(pressMilitarComHalter);

    let pressMilitarComBarra: Exercise = {
      started: false,
      finished: false,
      name: 'Press militar com barra',
      description: '',
      image: '..\\assets\\'+ 38 +'.webp',
      weekDay: 'Sexta-Feira',
      type: 'Composto',
      muscleGroup: 'Ombro'
    };
    exercisesList.push(pressMilitarComBarra);

    let remadaVerticalComHalter: Exercise = {
      started: false,
      finished: false,
      name: 'Remada vertical com halter',
      description: '',
      image: '..\\assets\\'+ 39 +'.webp',
      weekDay: 'Sexta-Feira',
      type: 'Composto',
      muscleGroup: 'Ombro'
    };
    exercisesList.push(remadaVerticalComHalter);

    let remadaVerticalComBarra: Exercise = {
      started: false,
      finished: false,
      name: 'Remada vertical com barra',
      description: '',
      image: '..\\assets\\'+ 40 +'.webp',
      weekDay: 'Sexta-Feira',
      type: 'Composto',
      muscleGroup: 'Ombro'
    };
    exercisesList.push(remadaVerticalComBarra);

    let arnoldParaOmbro: Exercise = {
      started: false,
      finished: false,
      name: 'Arnold com halter',
      description: '',
      image: '..\\assets\\'+ 46 +'.webp',
      weekDay: 'Sexta-Feira',
      type: 'Composto',
      muscleGroup: 'Ombro'
    };
    exercisesList.push(arnoldParaOmbro);

    let crucifixoInvertido: Exercise = {
      started: false,
      finished: false,
      name: 'Crucifixo invertido',
      description: '',
      image: '..\\assets\\'+ 41 +'.webp',
      weekDay: 'Sexta-Feira',
      type: 'Isolamento',
      muscleGroup: 'Ombro'
    };
    exercisesList.push(crucifixoInvertido);

    let elevacaoLateralComHalter: Exercise = {
      started: false,
      finished: false,
      name: 'Elevacao lateral com halter',
      description: '',
      image: '..\\assets\\'+ 42 +'.webp',
      weekDay: 'Sexta-Feira',
      type: 'Isolamento',
      muscleGroup: 'Ombro'
    };
    exercisesList.push(elevacaoLateralComHalter);

    return exercisesList.filter((exercise) => exercise.weekDay === day);
  }
}

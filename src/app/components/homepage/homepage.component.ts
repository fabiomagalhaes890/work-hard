import { Component, OnInit } from '@angular/core';

import { EventTypes } from 'src/app/models/event-types';
import { Exercise } from 'src/app/models/exercise';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';
import { ToastService } from 'src/app/services/toaster/toast.service';

import { Subject } from 'rxjs'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  exercisesList!: Exercise[]
  exercisesAlreadyDone!: Exercise[]
  days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  weekDay!: string;
  isolationCount: number = 0;
  compoundCount: number = 0;
  IsTrainingDay: boolean = true;
  toastrShow: boolean = false;
  done: boolean = false;
  timer: any = null;
  interval!: any;

  EventTypes = EventTypes;

  constructor(
    private exercisesService: ExercisesService,
    private toastService: ToastService) { }

  changeExercise(exercise: any){
    
    this.exercisesList.filter((item) => item === exercise)[0].started = true;
  }

  finishExercise(e: any){
    if(e.session < 2) {
      this.toastService.showInfoToast('Informação', 'É recomendado fazer de 2 a 4 séries, foi feito apenas ' + e.session);
      return;
    }

    let index = this.exercisesList.indexOf(e);
    this.exercisesList.splice(index, 1);

    if(this.exercisesAlreadyDone == null || this.exercisesAlreadyDone == undefined) {
      this.exercisesAlreadyDone = [];
      this.exercisesAlreadyDone.push(e);
    }
    else
      this.exercisesAlreadyDone.push(e);

    this.showToast(EventTypes.Success, e);
    
    let compoundCount = this.exercisesAlreadyDone.filter((doneExercise) => doneExercise.type === "Composto" 
    && doneExercise.muscleGroup === e.muscleGroup).length;

    if(compoundCount > 2){
      this.showToast(EventTypes.Warning, e);
    } 

    let isolationCount = this.exercisesAlreadyDone.filter((doneExercise) => doneExercise.type === "Isolamento" 
    && doneExercise.muscleGroup === e.muscleGroup).length;

    if(isolationCount > 1){
      this.showToast(EventTypes.Warning, e);
    } 
      
    if(this.exercisesList.length === 0)
      this.done = true;
  }

  showToast(type: EventTypes, exercise: any) {
    switch (type) {
      case this.EventTypes.Success:
        this.toastService.showSuccessToast('Exercício concluído', exercise.name);
        break;
      case EventTypes.Warning:
        this.toastService.showWarningToast('Atenção', 'Você já fez a quantidade recomendada de exercícios ' + exercise.type + ' para o grupo muscular: ' + exercise.muscleGroup);
        break;
      case EventTypes.Error:
        this.toastService.showErrorToast('Error toast title', 'This is an error toast message.');
        break;
      default:
        this.toastService.showInfoToast('Info toast title', 'This is an info toast message.');
        break;
    }
  }

  changeDay(e: any){
    this.weekDay = e.target.value;
    this.loadTraining(this.weekDay);
  }

  loadTraining(day: any){
    this.exercisesList = this.exercisesService.GetAllExercises(day);

    if(this.exercisesList.length == 0)
      this.IsTrainingDay = false;
    else
      this.IsTrainingDay = true;
  }

  finishSession(exercise: any){
    clearInterval(this.interval);
    this.startTimer(30);
    
    exercise.session++;
    
    if(exercise.session > 4) {
      this.toastService.showInfoToast('Informação', 'É recomendado fazer de 2 a 4 séries, foram feitas ' + exercise.session);
    }
  }

  startTimer(timeInSeconds: number) {
    this.timer = timeInSeconds;

    this.interval = setInterval(() => {
      if(this.timer === 1)
        clearInterval(this.interval);

      this.timer--;
    }, 1000)
  }

  ngOnInit(): void {
    let date = new Date();
    this.weekDay = this.days[date.getDay()];

    this.loadTraining(this.weekDay);
  }
}
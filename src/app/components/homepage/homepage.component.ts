import { Component, OnInit } from '@angular/core';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';

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

  done: boolean = false;

  constructor(private exercisesService: ExercisesService) { }

  changeExercise(exercise: any){
    
    this.exercisesList.filter((item) => item === exercise)[0].started = true;
  }

  finishExercise(e: any){
    let index = this.exercisesList.indexOf(e);
    this.exercisesList.splice(index, 1);

    if(this.exercisesAlreadyDone == null || this.exercisesAlreadyDone == undefined) {
      this.exercisesAlreadyDone = [];
      this.exercisesAlreadyDone.push(e);
    }
    else
      this.exercisesAlreadyDone.push(e);

    // let compoundCount = this.exercisesAlreadyDone.filter((doneExercise) => doneExercise.type === "Composto" 
    // && doneExercise.muscleGroup === e.muscleGroup).length;

    // if(compoundCount === 2){
    //   this.exercisesList = this.exercisesList.filter((exercise) => exercise.type === "Isolamento" && exercise.muscleGroup === e.muscleGroup);
    // }

    // let isolationCount = this.exercisesAlreadyDone.filter((doneExercise) => doneExercise.type === "Isolamento" 
    // && doneExercise.muscleGroup === e.muscleGroup).length;

    // if(isolationCount === 1){
    //   this.exercisesList = this.exercisesList.filter((exercise) => exercise.type === "Composto" && exercise.muscleGroup === e.muscleGroup);
    // }
      
    if(this.exercisesList.length === 0)
      this.done = true;
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

  ngOnInit(): void {
    let date = new Date();
    this.weekDay = this.days[date.getDay()];

    this.loadTraining(this.weekDay);
  }
}

export interface Exercise {
  started: boolean,
  finished: boolean,
  name: string,
  description: string,
  image: string,
  weekDay: string,
  type: string,
  muscleGroup: string
}
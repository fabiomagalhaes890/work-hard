import { Component, OnInit } from '@angular/core';
import { ExercisesService } from 'src/app/services/exercises/exercises.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  exercisesList!: Exercise[]
  week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  weekDay!: string;

  constructor(private exercisesService: ExercisesService) { }

  changeExercise(exercise: any){
    console.log('ex', exercise.target.value);

    let teste = this.exercisesList.indexOf(exercise.target)
    console.log('teste', teste)
  }

  ngOnInit(): void {
    let date = new Date();
    this.weekDay = this.week[date.getDay()];

    this.exercisesList = this.exercisesService.GetAllExercises();
  }
}

export interface Exercise {
  started: boolean,
  finished: boolean,
  name: string,
  description: string,
  image: string,
  weekDay: string,
  type: string
}
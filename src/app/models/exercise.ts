export interface Exercise {
    started: boolean,
    finished: boolean,
    name: string,
    description: string,
    image: string,
    weekDay: string,
    type: string,
    muscleGroup: string,
    session?: number
  }
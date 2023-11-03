export class Todo {
  constructor(
    public id: number,
    public content: string,
    public hasFinished = false
  ) {
    //this.id = id;
    //this.content = content;
    //this.hasFinished = false;
  }
  //id: number;
  //content: string;
  //hasFinished: boolean;
  //finisDate: Date | undefined;
  finisDate?: Date;
}

export class Todo {
  constructor(
    public id: number,
    public content: string,
    public hasFinished: boolean = false
  ) {
    //this.id = id;
    //this.content = content;
    //this.hasFinished = false;
  }
  //id: number;
  //content: string;
  //hasFinished: boolean;
  //finisDate: Date | undefined;
  finishDate?: Date;

  setFinished(finishDate: Date): void {
    this.hasFinished = true;
    this.finishDate = finishDate;
  }
}

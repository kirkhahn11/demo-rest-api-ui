import { TheoryService } from './../services/theory.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'theory'
})
export class TheoryPipe implements PipeTransform {

  constructor(private theoryService: TheoryService){}


  transform(userId: number, ...args: unknown[]): any {
    console.log(userId);
    return this.theoryService.getTheory(userId);
  }

  // we can apply this Custom Pipe to any template to capture data and transform it
}

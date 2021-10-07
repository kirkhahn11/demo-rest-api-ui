import { UserService } from './../../services/user.service';
import { TheoryService } from './../../services/theory.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @HostListener('click')
  clicked(){
    console.log('Clicked')
  }

  title = "In the UserComponent"
  age = 4;

  constructor(public userService: UserService, public theoryService: TheoryService) { }

  getTheory(userId: number): any {

    console.log('file: user.component.ts')

    return this.theoryService.getTheory(userId);
  }

}

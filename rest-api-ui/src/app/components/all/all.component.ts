import { UserService } from './../../services/user.service';
import { ClientMessage } from './../../models/client-message';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  title = "All Users";
  public users: User[] = [];

  //use a structural directive to check if we have users, if not we show the client message
  public clientMessage: ClientMessage = new ClientMessage('Sorry no users to display');

  constructor(private userService: UserService) { }

  // When this component is initialized (rendered in the root component)
  // we want to populate the array with all the users in the database
  ngOnInit(): void {

    // we will call the service method through a method of this class
    // below will call the findAllUsers() when the page is initialized
    this.findAllUsers();

  }

  public findAllUsers() {
    this.userService.findAllUsers()
      .subscribe(data => this.users = data)
  }

}

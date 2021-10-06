import { ClientMessage } from './../../models/client-message';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User, Address } from './../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Register User';

  public user = new User(0, '', '', '', '', '', []);
  public address = new Address('', '', '', '');
  public clientMessage = new ClientMessage('');

  // inject the UserService into this component
  constructor(private userService: UserService) { }

  public registerUser(): void {
    // this will call injected UserService

    //push the address object captured into the User's address's []
    this.user.addresses.push(this.address);
    //call this.userService.registerUser() method and post it
    this.userService.registerUser(this.user)
      .subscribe(
        data => this.clientMessage.message = `succefully added ${data.firstName}`,
        error => this.clientMessage.message = `We got an error : ${error}`
      )
    //subscripe to the data returned and do something

  }

  public testUserObj(): void {
    //after we've bound the input properties to the User and Address propeties
    //of the component we print it to the console

    // push the address to the User's address array:
    this.user.addresses.push(this.address);
    console.log(this.user);

    //we need to implement our HTTP service now that we have Users
  }
}

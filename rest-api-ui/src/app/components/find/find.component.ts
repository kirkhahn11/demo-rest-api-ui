import { UserService } from './../../services/user.service';
import { ClientMessage } from './../../models/client-message';
import { User } from './../../models/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  title = "Find User"
  username: string = '';
  user = new User(0, '', '', '', '', '', [])

  public clientMessage: ClientMessage = new ClientMessage('Sorry no user found by that Username')

  constructor(private userService: UserService) { }

  public findByUsername() {
    this.userService.findByUsername(this.username)
      .subscribe(data => this.user = data)
  }
}

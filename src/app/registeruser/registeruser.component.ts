import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

export class User {
  username: string;
  public constructor(username: string){
    this.username = username;
  }
}
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent {
  isRegistered = false;
  username = '';
  password = '';
  password2 = '';
  users : any[] = [new User("jcamarena"), new User("jcamarena2")];
  public submitRegistration() {
    console.log('submitRegistration()');
    this.isRegistered = true;
  }
  public clearRegistration(){
    console.log('clearRegistration()');
    this.isRegistered = false;
    this.username = '';
    this.password = '';
    this.password2 = '';
  }
  public getColor() : string {
    return this.isRegistered ? 'green' : 'red';
  }
}

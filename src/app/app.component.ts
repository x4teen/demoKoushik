import { Component } from '@angular/core';
import { User } from './models/user.model';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demoKoushik';
  user!: User;

  constructor(svc: TestService) {
    this.user = new User();
    this.user.name = 'Yasmeen Khan';
    this.user.designation = 'Student';
    this.user.address = '123 Main Street, Anytown, NY';
    this.user.phone = ['555-123-4564', '555-555-5555'];
    svc.printToConsole('Hello from App component Constructor');
  }
}

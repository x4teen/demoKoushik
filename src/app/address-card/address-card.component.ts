import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent implements OnInit {
  @Input() userObj!: User;
  isCollapsed: boolean = true;

  constructor(svc: TestService, private http:HttpClient) {}
  ngOnInit(): void {
    let url:string = "https://api.github.com/users/x4teen";
    let obs = this.http.get(url);
    obs.subscribe((response) => {console.log(response)})
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}

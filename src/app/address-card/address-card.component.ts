import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent implements OnInit {
  @Input('userProvided') userObj!: User;

  constructor() {}

  ngOnInit(): void {
    this.userObj = {
      name: this.userObj.name,
      designation: this.userObj.designation,
      address: this.userObj.address,
      phone: this.userObj.phone,
    };
  }
}

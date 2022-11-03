import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user:any;
  constructor() { 
    this.user = {
      name: 'Ryan Khan',
      address: '123 Main St, mytown',
      phone:[
        '917-555-1212',
        '631-555-1212'
      ]
    }
  }

  ngOnInit(): void {
  }

} 

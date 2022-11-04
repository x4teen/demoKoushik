import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user:any;
  @Input('name')  userName!: String;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.user = {
      name: this.userName,
      address: '123 Main St, mytown',
      phone:[
        '718-359-2100',
        '917-523-6058',
        '631-940-9334'
      ]
    }
  }

} 

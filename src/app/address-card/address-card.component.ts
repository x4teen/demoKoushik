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

  constructor(svc: TestService) {}
  ngOnInit(): void {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}

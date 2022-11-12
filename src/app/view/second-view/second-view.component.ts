import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Gituser } from '../gituser.model';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css'],
})
export class SecondViewComponent implements OnInit {
  userName: String = '';
  response: any;
  gituser!: Gituser;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getGitHubUser() {
    let url = 'https://api.github.com/users/';
    this.http.get(url + this.userName).subscribe((response) => {
      this.response = response;
      this.gituser = this.response;
    });
    console.log(this.response);
  }
}

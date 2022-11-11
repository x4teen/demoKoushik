import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {

  userName:String = "";
  response:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getGitHubUser(){
    let url = "https://api.github.com/users/";
    this.http.get(url + this.userName).subscribe((response)=>{this.response=response;});
    console.log(this.response);
  }

}

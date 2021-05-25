import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  token: any;
  constructor( private router: Router) {

  }

  ngOnInit() {
    this.token =  window.localStorage.getItem('token');
   console.log(this.token);
  }
  logOut(){
    window.localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}

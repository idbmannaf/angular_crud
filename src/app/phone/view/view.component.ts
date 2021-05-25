import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { ApiResponse } from '../../Model/api-response';
import {Router} from '@angular/router';
import { User } from 'src/app/Model/user';
import * as $ from 'jquery';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class PhoneViewComponent implements OnInit {

  phones: any;
  token: any;
  url:any;
  constructor(
    private apiService: ServicesService,
    private router : Router
    ) { }

  ngOnInit() {
    this.token =  window.localStorage.getItem('token');
if(!this.token){
  this.router.navigate(['login/']);
}
    this.apiService.getAllPhones()
    .subscribe( (data : any) => {
        this.phones = data;
        console.log(this.phones);
    });
    this.url=this.router.url;
    console.log(this.url);
  }
//   ngAfterViewInit() {
//     $("#view").click(function(){
//       alert("Hello");
//     });
//     $('#myTable').DataTable();

// }

  delete(phone: any): void {
    this.apiService.deletePhone(phone.id)
      .subscribe( data => {
        this.phones = this.phones.filter(u => u !== phone);
      });
  }

  edit(phone: any): void {
    this.router.navigate(['editphone/' + phone.id]);
  }
  view(phone: any): void {
    this.router.navigate(['showphone/' + phone.id]);
  }
  logOut(){
    if(this.token){
      window.localStorage.removeItem('token');
      this.router.navigate(['login']);
      // this.router.navigate(['login']);
   }

  }

}

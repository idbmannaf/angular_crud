import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { ApiResponse } from '../../Model/api-response';
import {Router, Params, ActivatedRoute} from '@angular/router';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  user: any;
  token: any;
  constructor(
    private apiService: ServicesService, 
    private router : Router,
    private routes : ActivatedRoute) {
    //alert("it works");
   }

  ngOnInit() {
    //alert("single works1");
    const singleParams = this.routes.snapshot.params;
    //console.log("View id:" + singleParams.id);
    this.token =  window.localStorage.getItem('token');
    this.apiService.getUserById(singleParams.id)
    .subscribe( (data : any) => {
        this.user = data;
        console.log(this.user);
    });
  

}
back(){  
    this.router.navigate(['view']);  
}
}

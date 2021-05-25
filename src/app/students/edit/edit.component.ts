import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import {Router, Params, ActivatedRoute} from '@angular/router';
import {User} from '../../Model/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private apiService: ServicesService,
              private router : Router,
              private routes : ActivatedRoute
) { }

addForm: FormGroup;

ngOnInit() {

  const routeParams = this.routes.snapshot.params;
  console.log(routeParams.id);
  //$_GET[]

  this.addForm = this.formBuilder.group({
    id: [],
    username: ['', Validators.required],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    // salary: ['', Validators.required]
  });


  this.apiService.getUserById(routeParams.id).subscribe((data: any) => {
    // console.log(data)
    this.addForm.patchValue(data);
  });

}

onUpdate(){
  // console.log(this.addForm.value)
   // console.log(this.addForm.value);
   this.apiService.updateStudent(this.addForm.value).subscribe(() => {
    this.router.navigate(['view']);
  },
    error => {
      alert(error);
    });
}

}

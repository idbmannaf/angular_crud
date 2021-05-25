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
export class EditPhoneComponent implements OnInit {
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
    name: ['', Validators.required],
    phoneno: ['', Validators.required],
    email: [],
    note: [],
  });


  this.apiService.getPhoneById(routeParams.id).subscribe((data: any) => {
    // console.log(data)
    this.addForm.patchValue(data);
  });

}

onUpdate(){
  // console.log(this.addForm.value)
   // console.log(this.addForm.value);
   this.apiService.updatePhone(this.addForm.value).subscribe(() => {
    this.router.navigate(['phone']);
  },
    error => {
      alert(error);
    });
}

}

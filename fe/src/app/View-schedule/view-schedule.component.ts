import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { JobOpeningService } from '../job-opening.service';


@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class SelectedCandidateComponent implements OnInit {
  constructor(private service:JobOpeningService,private router:Router) { 
    this.getDetails();
   

  }

  printopenings(form:NgForm){
    this.service.postdata(form.value).subscribe(data =>{
      this.getDetails()
      form.reset();
      console.log(data)
    },err=>{
      console.log(err)
    },()=>{
      console.log('data send successfully')
    })
  }

res:any=[]
  getDetails(){
    this.service.getData().subscribe(data=>{
   this.res=data;
    },err=>{
      console.log(err)
    },()=>{
      console.log("data got")
    })
  }


  Schedule(){
    console.log('working')
    this.router.navigate(['./schedule-interview']);

  }

  ngOnInit() {
  }

}

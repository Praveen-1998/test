import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class CandidateDetailsComponent implements OnInit {
 candidate:any=[];
  constructor(private service:LoginService,private router:Router) {
    this.getInterview();
   
  }

  schduleInterview(form:NgForm) {
    this.service.postInterview(form.value).subscribe(data => {
      console.log(data);
      this.getInterview();
      form.reset();
    }),err=>{
      console.log(err)
    },()=>{
      console.log("Interviewed successfully");
    }
  }
  

  getInterviewData:any = [];
   getInterview() {
     this.service.getInterview().subscribe(getData => {
       this.getInterviewData = getData;
       console.log(this.getInterviewData);
     }, err => {
       console.log(err);
     } , () => {
       console.log('Got Interview');
     })
   }
  ngOnInit() {
  }

}

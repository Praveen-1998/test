import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class RequirementDetailsComponent implements OnInit, DoCheck {
  user:any=[];
  companies:any=[];
  // currentRate = 8;

  postCandidate={
    _id:null,
    name:null,
    email:null,
    exp:null,
    salary:null,
    location:null,
    position:null
  }
  constructor(private service:LoginService,private router:Router) {
   this.getData()
   }
  printForm(form:NgForm){
    this.service.postData(form.value).subscribe(user=>{
      this.getData();
      form.reset();
      // this.router.navigate(['./add-requirement']);
      setTimeout(()=>{
        this.service.addRequire=false;
       },2000);
    },(err)=>{
      console.log(err);
    },()=>{
      console.log("data sent successfully");
    })
  }
  getData(){
    this.service.getData().subscribe(data=>{
      this.companies=data;
      console.log(this.companies)
    },err=>{
      console.log(err);
    },()=>{
      console.log("data got successfully");
    })
  }
  ngDoCheck() {
    $(document).ready(function(){
      $("#i").click(function(){
       
        $("#Modal").show();
      });
    });
    
    $(document).ready(function(){
      $("#rev").click(function(){
       
        $("#exampleModalCenter").toggle();
      });
    });
  }    
  
  ngOnInit(){
    
  }
  
  
   

 

  filterCandidateByName(name){
    console.log(name.value)
    if(name.value===" "){
      this.getData();
    }else{
      this.service.getFilteredData(name.value).subscribe(data=>{
        this.companies=data;
        console.log(this.companies)
      },err=>{
        console.log(err)
      },()=>{
        console.log("filtered successfully")
    })
    }
}

postRequirement(data,  id){
  console.log(id);
  console.log(data);
  this.postCandidate=data;

  $(document).ready(function(){
    $(`#${id}`).click(function(){
     
      $("#Modal").show();
    });
  });
  
  $(document).ready(function(){
    $("#rev").click(function(){
     
      $("#exampleModalCenter").toggle();
    });
  });

}



}

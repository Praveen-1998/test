import { Component, OnInit } from '@angular/core';
import { ShowimageService } from '../showimage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.css']
})
export class ShowimageComponent implements OnInit {
  images: any;

  constructor(private showimageservice: ShowimageService,private router:Router) { }

  ngOnInit() {
    this.showimageservice.showImage()
    .subscribe((result_imagename)=>{
      this.images=result_imagename.imagename;
      console.log(this.images);
    },
    (err)=>{
      console.log(err);
    })
  }
  delete(id){
    console.log(id)
    this.showimageservice.deleteProduct(id).subscribe(product=>{
      console.log(product)
      this.router.navigateByUrl('/adduser')
    },err=>{
      console.log(err)
    },()=>{
      console.log("deleted successfully")
    })
  }

  // slideConfig = {  
  //   "slidesToShow": 2,  
  //   "slidesToScroll": 2,  
  //   "dots": true,  
  //   "infinite": true  
  // };  
 

products:any='';

  sendProduct(image){
    this.products=image
    console.log(this.products);
  }
}




import { Component, OnInit, Input } from '@angular/core';
import { ShowimageService } from '../showimage.service';

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.component.html',
  styleUrls: ['./displayimage.component.css']
})
export class DisplayimageComponent implements OnInit {

  constructor(private showimageservice: ShowimageService) { 
    this.showimageservice.showImage();
  }

  ngOnInit() {
  }
@Input() product:any='';
}

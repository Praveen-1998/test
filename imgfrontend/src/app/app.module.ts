import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';  


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { AppRoutingModule } from './/app-routing.module';
import { NgxUploaderModule } from 'ngx-uploader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowimageComponent } from './showimage/showimage.component';
// import { from } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';
import { HeaderComponent } from './header/header.component';
import { DisplayimageComponent } from './displayimage/displayimage.component';
// import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    ImageuploadComponent,
    ShowimageComponent,
    AdduserComponent,
    HeaderComponent,
    DisplayimageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxUploaderModule,
    SlickCarouselModule,
    RouterModule.forRoot([
      {path:'adduser', component:AdduserComponent},
      {path:'imageupload', component:ImageuploadComponent},
      {path:'showimage', component:ShowimageComponent},
      {path:'display', component:DisplayimageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

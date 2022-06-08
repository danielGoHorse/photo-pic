import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoModule } from "./photo/photo.module";
import { PhotosComponent } from "./photo-list/photos/photos.component";


@NgModule({
    imports: [ 
        PhotoModule,
        PhotoListModule,
        PhotoFormModule,
        CommonModule
    ],
    
})


export class PhotosModule {

}
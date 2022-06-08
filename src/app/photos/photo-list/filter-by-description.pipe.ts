import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({name: 'filterByDescription'})
export class FilterByDescriptionPipe implements PipeTransform{
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery
        .trim()
        .toLocaleLowerCase();

        if(descriptionQuery){
           return photos.filter(photos => 
              photos.description.toLocaleLowerCase().includes(descriptionQuery)
           );
        }else{
            return photos;
        }

    }


}
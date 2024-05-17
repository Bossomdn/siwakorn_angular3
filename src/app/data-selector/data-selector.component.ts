import { Component } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-data-selector',
  standalone: true,
  imports: [],
  providers: [DogService],
  templateUrl: './data-selector.component.html',
  styleUrl: './data-selector.component.css'
})
export class DataSelectorComponent {

  constructor(private dogService: DogService) {}

  getDogImage() {
    this.dogService.getRandomDogImage().subscribe( data => {
      console.log(data.message);
    });
  }

}

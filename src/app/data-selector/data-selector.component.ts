import { Component, EventEmitter, Output } from '@angular/core';
import { DogService } from '../dog.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-selector',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [DogService],
  templateUrl: './data-selector.component.html',
  styleUrl: './data-selector.component.css'
})
export class DataSelectorComponent {

  @Output() dogImageLoaded = new EventEmitter<string>();

  constructor(private dogService: DogService) {}

  requestRandomDogImage(): void {
    this.dogService.getRandomDogImage().subscribe(data => {
      this.dogImageLoaded.emit(data.message);
    });
  }

}

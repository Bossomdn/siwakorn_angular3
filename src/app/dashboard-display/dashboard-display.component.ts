import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-display',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers: [DogService],
  templateUrl: './dashboard-display.component.html',
  styleUrl: './dashboard-display.component.css'
})
export class DashboardDisplayComponent implements OnInit{

  dogImageUrl: string | undefined;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.loadRandomDogImage();
  }

  loadRandomDogImage(): void {
    this.dogService.getRandomDogImage().subscribe( data => {
      this.dogImageUrl = data.message;
    });
  }

}

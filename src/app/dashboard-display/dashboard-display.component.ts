import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-display',
  standalone: true,
  imports: [CommonModule],
  providers: [DogService],
  templateUrl: './dashboard-display.component.html',
  styleUrl: './dashboard-display.component.css'
})
export class DashboardDisplayComponent {

  dogImageUrl: string | undefined;

  setDogImage(url: string): void {
    this.dogImageUrl = url;
  }

}

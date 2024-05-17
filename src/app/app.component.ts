import { Component, NgModule, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataSelectorComponent } from './data-selector/data-selector.component';
import { DashboardDisplayComponent } from './dashboard-display/dashboard-display.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataSelectorComponent, DashboardDisplayComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'siwakorn_ass3';

  @ViewChild('dashboard') dashboard!: DashboardDisplayComponent;

  handleDogImageLoaded(url: string): void {
    this.dashboard.setDogImage(url);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VozacComponent } from './vozac/vozac.component';
import { DRIVERS } from './db-data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VozacComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proekt2';
  vozaci = DRIVERS;
  funk() {
    window.alert('Kliknavte na elementot');
  }
}

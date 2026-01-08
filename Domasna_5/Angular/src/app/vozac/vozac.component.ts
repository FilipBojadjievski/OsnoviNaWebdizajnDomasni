import { Component, Input } from '@angular/core';
import { Shofer } from './shofer';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-vozac',
  standalone: true,
  imports: [],
  templateUrl: './vozac.component.html',
  styleUrl: './vozac.component.css',
})
export class VozacComponent {
  @Input()
  shofer: Shofer | undefined;
  @Input()
  indeks: number = 0;
  funk() {
    window.alert('Kliknavte na ' + this.shofer?.name);
  }
}

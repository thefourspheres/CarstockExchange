import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {
  @Input() car: any;       // Parent → Child data
  @Output() callBack = new EventEmitter<any>();  // Child → Parent event

  onCallBack() {
    this.callBack.emit(this.car);
  }
}

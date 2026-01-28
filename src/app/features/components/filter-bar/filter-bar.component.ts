import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [NgFor, NgClass, FormsModule,],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {
  @Input() categories: string[] = [];
  @Input() selectedCategory = '';
  @Input() searchText = '';

  @Output() searchChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string>();
  @Output() sortClick = new EventEmitter<void>();
  @Output() fuelClick = new EventEmitter<void>();

  onSearchChange(value: string) {
    this.searchChange.emit(value);
  }

  selectCategory(category: string) {
    this.categoryChange.emit(category);
  }
}

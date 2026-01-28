import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import {
  SlickCarouselComponent,
  SlickCarouselModule,
} from 'ngx-slick-carousel';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RequestACallComponent } from '../../dialog/request-acall/request-acall.component';
import { FreeTestDriveComponent } from '../../dialog/free-test-drive/free-test-drive.component';
import { FormsModule } from '@angular/forms';
import { ReportDownloadComponent } from '../../dialog/report-download/report-download.component';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [
    SlickCarouselModule,
    NgFor,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss',
})
export class CarDetailsComponent {
  @ViewChild('mainSlider') mainSlider!: SlickCarouselComponent;
  readonly dialog = inject(MatDialog);
  overviewList = [
    { value: '2023', label: 'Make Year' },
    { value: 'Jun 2023', label: 'Registration' },
    { value: 'Petrol (BS VI)', label: 'Fuel Type' },
    { value: '24000', label: 'Fuel KMs Driven' },
    { value: 'Manual', label: 'Transmission' },
    { value: '1st Owner', label: 'No. of Owner' },
    { value: 'May 2026', label: 'Insurance Validity' },
    { value: 'Comprehensive', label: 'Insurance Type' },
    { value: 'MH 14', label: 'RTO' },
    { value: 'Manual', label: 'Transmission' },
  ];

  images = [
    'assets/hero/img1.png',
    'assets/hero/img2.png',
    'assets/hero/img3.png',
  ];

  searchText = '';
  selectedCategory = 'Comfort & Convenience';

  categories = [
    'Comfort & Convenience',
    'Locks & Security',
    'Seats & Upholstery',
    'Safety And Security',
    'Lights',
    'Instrumentation',
    'Entertainment',
  ];

  features: any = {
    'Comfort & Convenience': [
      { label: 'Air Conditioner', value: 'Auto' },
      { label: 'Heater', value: 'Yes' },
      { label: 'Climate Control', value: 'No' },
      { label: 'Paddle Shift', value: 'Yes' },
      { label: 'Start Button', value: 'Yes' },
      { label: 'Steering Mounted Audio', value: 'Yes' },
      { label: 'Rain Sensing Vipers', value: 'Yes' },
      { label: 'Automatic Headlamps', value: 'No' },
      { label: 'Power Outlets 12V', value: 'Yes' },
    ],

    'Locks & Security': [
      { label: 'Engine Mobilizer', value: 'Yes' },
      { label: 'Speed Sensing Door Lock', value: 'No' },
      { label: 'Child Safety Lock', value: 'Yes' },
    ],

    'Seats & Upholstery': [
      { label: 'Fabric Seats', value: 'Yes' },
      { label: 'Height Adjustable Driver Seat', value: 'Yes' },
    ],

    'Safety And Security': [
      { label: 'ABS', value: 'Yes' },
      { label: 'Airbags', value: 'Yes' },
    ],

    Lights: [{ label: 'LED Headlamps', value: 'Yes' }],

    Instrumentation: [{ label: 'Digital Cluster', value: 'Yes' }],

    Entertainment: [{ label: 'Touchscreen', value: 'Yes' }],
  };

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  get filteredFeatures() {
    const list = this.features[this.selectedCategory] || [];

    if (!this.searchText) return list;

    return list.filter((item: any) =>
      item.label.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  searchSpecifications = '';
  selectedSpecifications = 'Engine & Performance';

  categoriesSpecifications = [
    'Engine & Performance',
    'Dimensions & Weight',
    'Capacity & Fuel Efficiency',
    'Suspension Brakes & Steering',
    'Tyres & Wheels',
  ];

  specs: any = {
    'Engine & Performance': [
      {
        label: 'Engine Type',
        value:
          '1.5 TSI Petrol, In-line, 4 Stroke Positive Ignition Direct Injection Engine With Active Cylinder Technology',
      },
      { label: 'Power', value: '148 bhp' },
      { label: 'Displacement (CC)', value: '1498 CC' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Drive Train', value: 'FWD' },
      { label: 'No. of gears', value: '7' },
      { label: 'Torque', value: '250 Nm' },
    ],

    'Dimensions & Weight': [
      { label: 'Length', value: '4541 mm' },
      { label: 'Width', value: '1752 mm' },
      { label: 'Height', value: '1507 mm' },
      { label: 'Wheelbase', value: '2651 mm' },
    ],

    'Capacity & Fuel Efficiency': [
      { label: 'Fuel Tank Capacity', value: '45 Litres' },
      { label: 'Mileage (ARAI)', value: '18.41 kmpl' },
    ],

    'Suspension Brakes & Steering': [
      { label: 'Front Suspension', value: 'McPherson Strut' },
      { label: 'Rear Suspension', value: 'Twist Beam Axle' },
      { label: 'Steering Type', value: 'Electric' },
    ],

    'Tyres & Wheels': [
      { label: 'Tyre Size', value: '205/55 R16' },
      { label: 'Wheel Type', value: 'Alloy Wheels' },
    ],
  };

  selectSpecifications(cat: string) {
    this.selectedSpecifications = cat;
  }

  get filteredSpecs() {
    const list = this.specs[this.selectedSpecifications] || [];

    if (!this.searchSpecifications) return list;

    return list.filter(
      (item: any) =>
        item.label.toLowerCase().includes(this.searchSpecifications.toLowerCase()) ||
        item.value.toLowerCase().includes(this.searchSpecifications.toLowerCase())
    );
  }

  mainConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    asNavFor: '.thumb-slider',
  };

  thumbConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    infinite: false,
    asNavFor: '.main-slider',
  };

  goToSlide(index: number) {
    this.mainSlider.slickGoTo(index);
  }
  request() {
    const dialogRef = this.dialog.open(RequestACallComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  bookATest() {
    const dialogRef = this.dialog.open(FreeTestDriveComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  askAI() {
    const dialogRef = this.dialog.open(ReportDownloadComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

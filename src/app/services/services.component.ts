import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { DataServiceService, ServiceItem } from '../data-service.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
services: ServiceItem[] = [];

constructor(private dataService: DataServiceService) {}

ngOnInit() {
  this.loadServices();
}

loadServices(){
  this.dataService.getData().subscribe(
    (data) => {
      console.log(data);
      this.services = data;
    },
    (error) => {
      console.log('Error fetching data', error);
    }
  )
}

}

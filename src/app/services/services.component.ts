import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { DataServiceService, ServiceItem } from '../data-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
services$: Observable<ServiceItem[]> | undefined;

constructor(private dataService: DataServiceService) {}

ngOnInit() {
  this.services$ = this.dataService.getData();
}

}

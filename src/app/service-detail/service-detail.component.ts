import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';
import { DataServiceService, ServiceObject } from '../data-service.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MapComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent {
  id: string;
  serviceData: Partial<ServiceObject> | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataServiceService){
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }
  async ngOnInit(): Promise<void> {
    window.scroll(0,0);
    try {
      // Call the getService method when the component initializes
      this.serviceData = await firstValueFrom(this.dataService.getService(this.id));
      if(this.serviceData === null){
        // No document found
      }
    } catch (error) {
      console.error('Error fetching service data:', error);
    }

  }
}

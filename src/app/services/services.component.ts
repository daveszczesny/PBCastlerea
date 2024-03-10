import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { DataServiceService, ServiceItem } from '../data-service.service';
import { Observable } from 'rxjs';
import { MapComponent } from '../map/map.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent, CommonModule, MapComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services$: Observable<ServiceItem[]> | undefined;
  hideNavbar: boolean | undefined;

  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute
  ) {
    this.hideNavbar = this.route.snapshot.url.length <= 0;
  }

  ngOnInit() {
    this.services$ = this.dataService.getData();
  }
}

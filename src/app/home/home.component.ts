import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MapComponent } from '../map/map.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

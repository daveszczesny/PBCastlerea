import { Component } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [GoogleMap, MapMarker],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

  center: google.maps.LatLngLiteral = { lat: 53.76797540102892, lng: -8.489166180262075};
  zoom = 16;
  display: google.maps.LatLngLiteral | undefined;
  markerPosition: google.maps.LatLngLiteral = {lat: 53.76797540102892, lng: -8.489166180262075};

mapOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  draggable: false
}

markerOptions: google.maps.MarkerOptions = {
  draggable: false
}

googleMaps(){
  window.location.href = 'https://www.google.com/maps/dir//53.7679903,-8.4892283/@53.7677747,-8.4894107,19z/data=!4m2!4m1!3e3?entry=ttu'
}

}

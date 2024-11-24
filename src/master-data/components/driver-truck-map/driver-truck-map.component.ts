import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GoogleMapsModule, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-driver-truck-map',
  standalone: true,
  imports: [GoogleMapsModule,MapMarker],
  templateUrl: './driver-truck-map.component.html',
  styleUrl: './driver-truck-map.component.css'
})
export class DriverTruckMapComponent {
  center: google.maps.LatLngLiteral = { lat: 52.52, lng: 13.405 }; // Zentrum der Karte (z. B. Berlin)
  zoom = 6; // Startzoom
  markers: any[] = []; // Markerdaten für Fahrer und Trucks

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Holen der Daten von deinem Backend
    this.http.get<any[]>('http://localhost:3001/map/map-data').subscribe(data => {
      this.markers = data.map(item => ({
        position: {
          lat: item.coordinates.latitude,
          lng: item.coordinates.longitude,
        },
        title: item.name, // Für InfoWindows
        icon: this.getIcon(item.type), // Dynamisches Icon
        label: {
          text: item.name, // Name des Fahrers oder Trucks
          color: 'black', // Textfarbe
          fontSize: '12px', // Schriftgröße
        },
      }));
    });
  }

  getIcon(type: string): google.maps.Icon {
    const baseUrl = 'assets/icons/'; // Basispfad für die Icons
    const size = new google.maps.Size(50, 50); // Größe des Icons in Pixel (Breite, Höhe)
  
    if (type === 'driver') {
      return {
        url: `${baseUrl}driver.png`, // Fahrer-Icon
        scaledSize: size, // Angepasste Größe
      };
    }
    if (type === 'truck') {
      return {
        url: `${baseUrl}truck.png`, // Truck-Icon
        scaledSize: size, // Angepasste Größe
      };
    }
    return {
      url: `${baseUrl}driver.png`, // Standard-Icon
      scaledSize: size, // Angepasste Größe
    };
  }
}

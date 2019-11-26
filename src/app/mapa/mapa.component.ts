import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {


  @ViewChild('mapa', { static: false }) mapaElement: ElementRef;

  directionsService: any;
  directionsDisplay: any;

  map: any;


  constructor() { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.loadMap(position);
      });
    } else {
      alert('Ud. está aquí');
    }

  }

  loadMap(posicion) {

    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();

    const mapProps = {

      center: new google.maps.LatLng(posicion.coords.latitude, posicion.coords.longitude),
      positionUno: new google.maps.LatLng(40.451250, - 3.345232),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(document.getElementById('mapId'), mapProps);

    this.directionsDisplay.setMap(this.map);



    const Marker = new google.maps.Marker({
      position: mapProps.center,
      title: 'Ud. Está aquí'
    });
    Marker.setMap(this.map);

    const ascanMarker = new google.maps.Marker({
      position: { lat: 40.451250, lng: - 3.345232 },
      title: 'ASCAN MADRID',
    });
    ascanMarker.setMap(this.map);

    const vozAnimakMarker = new google.maps.Marker({
      position: { lat: 40.240746, lng: - 3.754222 },
      title: 'ASOCIACION LA VOZ ANIMAL'
    });
    vozAnimakMarker.setMap(this.map);

    const albaMarker = new google.maps.Marker({
      position: { lat: 40.540147, lng: - 3.397872 },
      title: 'PROTECTORA ALBA'
    });
    albaMarker.setMap(this.map);

    const annaMarker = new google.maps.Marker({
      position: { lat: 40.674603, lng: - 3.474912 },
      title: 'PROTECTORA ANNA'
    });
    annaMarker.setMap(this.map);

    const arpaMarker = new google.maps.Marker({
      position: { lat: 40.023244, lng: - 3.603719 },
      title: 'PROTECCIÓN ANIMAL ARPA'
    });
    arpaMarker.setMap(this.map);

    const nuevaVidaMarker = new google.maps.Marker({
      position: { lat: 40.472883, lng: - 3.875216 },
      title: 'PROTECTORA NUEVA VIDA'
    });
    nuevaVidaMarker.setMap(this.map);

    const perrikusMarker = new google.maps.Marker({
      position: { lat: 41.037583, lng: - 3.620449 },
      title: 'PROTECTORA PERRIKUS'
    });
    perrikusMarker.setMap(this.map);

    const elRefugioMmarker = new google.maps.Marker({
      position: { lat: 40.481445, lng: - 3.659882 },
      title: 'EL REFUGIO'
    });
    elRefugioMmarker.setMap(this.map);

    const rivanimalMarker = new google.maps.Marker({
      position: { lt: 40.356191, lng: - 3.543498 },
      title: 'RIVANIMAL'
    });
    rivanimalMarker.setMap(this.map);
  }
}

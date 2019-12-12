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
      title: 'Ud. Está aquí',
    });
    Marker.setMap(this.map);

    const ascanMarker = new google.maps.Marker({
      position: { lat: 40.451250, lng: - 3.345232 },
      title: 'ASCAN MADRID',
    });
    ascanMarker.setMap(this.map);

    const infowindowAscan = new google.maps.InfoWindow({
      content: '<div> <h5>ASCAN</h5><p><strong>DIRECCIÓN:</strong> Calle de Oriente, 7 Majadahonda (Madrid)</p><p><strong>EMAIL:</strong> gestionadopciones@nuevavida-adopciones.com</p><p><strong>TELÉFONO:</strong> 690008527</p>  </div>'
    });

    google.maps.event.addListener(ascanMarker, 'click', function () {

      infowindowAscan.open(this.map, ascanMarker);
    });

    const vozAnimakMarker = new google.maps.Marker({
      position: { lat: 40.240746, lng: - 3.754222 },
      title: 'ASOCIACION LA VOZ ANIMAL'
    });
    vozAnimakMarker.setMap(this.map);

    const infowindowVozAnimal = new google.maps.InfoWindow({
      content: '<div> <h5>ASOCIACIÓN LA VOZ ANIMAL</h5><p><strong>DIRECCIÓN:</strong> Calle de Oriente, 7 Majadahonda (Madrid)</p><p><strong>EMAIL:</strong> gestionadopciones@nuevavida-adopciones.com</p><p><strong>TELÉFONO:</strong> 690008527</p>  </div>'
    });

    google.maps.event.addListener(vozAnimakMarker, 'click', function () {

      infowindowVozAnimal.open(this.map, vozAnimakMarker);
    });

    const albaMarker = new google.maps.Marker({
      position: { lat: 40.540147, lng: - 3.397872 },
      title: 'PROTECTORA ALBA'
    });
    albaMarker.setMap(this.map);

    const infowindowAlba = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA ALBA</h5><p><strong>DIRECCIÓN:</strong> Calle de Oriente, 7 Majadahonda (Madrid)</p><p><strong>EMAIL:</strong> gestionadopciones@nuevavida-adopciones.com</p><p><strong>TELÉFONO:</strong> 690008527</p>  </div>'
    });

    google.maps.event.addListener(albaMarker, 'click', function () {

      infowindowAlba.open(this.map, albaMarker);
    });



    const annaMarker = new google.maps.Marker({
      position: { lat: 40.674603, lng: - 3.474912 },
      title: 'PROTECTORA ANNA'
    });
    annaMarker.setMap(this.map);

    const infowindowAnna = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA ANNA</h5><p><strong>DIRECCIÓN:</strong> Calle de Oriente, 7 Majadahonda (Madrid)</p><p><strong>EMAIL:</strong> gestionadopciones@nuevavida-adopciones.com</p><p><strong>TELÉFONO:</strong> 690008527</p>  </div>'
    });

    google.maps.event.addListener(annaMarker, 'click', function () {

      infowindowAnna.open(this.map, annaMarker);
    });




    const arpaMarker = new google.maps.Marker({
      position: { lat: 40.023244, lng: - 3.603719 },
      title: 'PROTECCIÓN ANIMAL ARPA'
    });
    arpaMarker.setMap(this.map);

    const infowindowArpa = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA ARPA</h5><p><strong>DIRECCIÓN:</strong> Calle de Oriente, 7 Majadahonda (Madrid)</p><p><strong>EMAIL:</strong> gestionadopciones@nuevavida-adopciones.com</p><p><strong>TELÉFONO:</strong> 690008527</p>  </div>'
    });

    google.maps.event.addListener(arpaMarker, 'click', function () {

      infowindowArpa.open(this.map, arpaMarker);
    });





    const nuevaVidaMarker = new google.maps.Marker({
      position: { lat: 40.472883, lng: - 3.875216 },
      title: 'PROTECTORA NUEVAVIDA'
    });
    nuevaVidaMarker.setMap(this.map);

    const infowindowNuevaVida = new google.maps.InfoWindow({
      content: '<div> <h5>PROTECTORA NUEVAVIDA</h5><p><strong>DIRECCIÓN:</strong> Calle de Oriente, 7 Majadahonda (Madrid)</p><p><strong>EMAIL:</strong> gestionadopciones@nuevavida-adopciones.com</p><p><strong>TELÉFONO:</strong> 690008527</p>  </div>'
    });

    google.maps.event.addListener(nuevaVidaMarker, 'click', function () {

      infowindowNuevaVida.open(this.map, nuevaVidaMarker);
    });




    const perrikusMarker = new google.maps.Marker({
      position: { lat: 41.037583, lng: - 3.620449 },
      title: 'PROTECTORA PERRIKUS'
    });
    perrikusMarker.setMap(this.map);




    const elRefugioMarker = new google.maps.Marker({
      position: { lat: 40.481445, lng: - 3.659882 },
      title: 'EL REFUGIO'
    });
    elRefugioMarker.setMap(this.map);





    const rivanimalMarker = new google.maps.Marker({
      position: { lat: 40.356191, lng: - 3.543498 },
      title: 'RIVANIMAL'
    });
    rivanimalMarker.setMap(this.map);




    const almanimalMarker = new google.maps.Marker({
      position: { lat: 40.406669, lng: - 3.875029 },
      title: 'ALMANIMAL'
    });
    almanimalMarker.setMap(this.map);
  }
}

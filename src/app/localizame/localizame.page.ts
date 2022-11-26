
import { Component, OnInit } from '@angular/core';
import { markAsUntransferable } from 'worker_threads';
declare var google;

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

@Component({
  selector: 'app-localizame',
  templateUrl: './localizame.page.html',
  styleUrls: ['./localizame.page.scss'],
})
export class LocalizamePage implements OnInit {

  label = {
    titulo:'Ubicación',
    subtitulo:'Mi ubicación actual'
  };
  map = null;

  constructor() { }

  ngOnInit(){
    this.loadMap();
  }
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -34.660399598240474, lng: -58.57432924571234};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
        mapEle.classList.add('show-map');
        const marker = {
          position: {
            lat: -34.660399598240474,
            lng: -58.57432924571234,
          },
          title: 'punto uno'
          };
          this.addMarker(marker);
    });
  }
    //renderMarkers() {
      //this.markers.forEach(marker =>{
    //  });
  //  }
    addMarker(marker: Marker) {
      return new google.maps.Marker({
        position: marker.position,
        map: this.map,
        title: marker.title
      });
    }
  }


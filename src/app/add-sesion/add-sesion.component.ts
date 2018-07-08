import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../placeDefinition';

@Component({
  selector: 'app-add-sesion',
  templateUrl: './add-sesion.component.html',
  styleUrls: ['./add-sesion.component.css']
})
export class AddSesionComponent implements OnInit {
  places = {};
  placesUrls = this.ps.getPlaces();
  constructor(private ps : PlacesService) { }
  
  ngOnInit() {
    
  }

  showContent(e) {
    document.getElementById("placeContent").style.display = "block";
    /*var allplaces =     document.getElementsByClassName('placesDisplay');
    for(var i=0; i < allplaces.length; i++) {
      if(e.srcElement != allplaces[i]){
        allplaces[i]['style'].filter = 'brightness(70%)';
        allplaces[i].id = '';
      } else {
        e.srcElement.style.filter = 'brightness(100%)';
        e.srcElement.id = 'active';
      }
      
    }*/
    let referenceElement = e.srcElement.closest(".placesDisplay");

    var allplaces = document.getElementById('active');
    if(allplaces != null){
      allplaces['style'].filter = 'brightness(70%)';
      allplaces.id = ''; 
    }
    referenceElement.style.filter = 'brightness(100%)';
    referenceElement.id = 'active';
  }

  showCross (e) : void {
      
      e.srcElement.style.filter = 'brightness(100%)';

  }
  hideCross (e) : void {

    if(e.srcElement.id != 'active')
      e.srcElement.style.filter = 'brightness(70%)';
   
  }

}

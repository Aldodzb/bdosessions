import { Injectable } from '@angular/core';
import { Place } from './placeDefinition';

@Injectable()
export class PlacesService{
  // 1 - url , 2 - tipos de objetos
  private places: Place[] = [];
  private incrementalId = 0;
  constructor() { }

  initService () : void {
    //let arrayofitems = Array<string>();
    let arrayofitem = [] as string[]
    //arrayofitems.push("asdsa");

    let p : Place = {
      id : this.incrementalId,
      nombre : 'Fogans',
      url : 'lugares/fogans.png',
      items : ['asdasd'],
    }
    this.incrementalId++;
    let p2 : Place = {
      id : this.incrementalId,
      nombre : 'Nagas',
      url : "lugares/nagas.jpg",
      items : ["null"]
    }
    this.incrementalId++;
    let p3 : Place = {
      id : this.incrementalId,
      nombre : 'Creciente',
      url : "lugares/crescent.jpg",
      items : ["null"]
    }
    this.places.push(p);
    this.places.push(p2);
    this.places.push(p3);
    this.incrementalId++;

  }

  getPlaces () : any {
    return this.places;
  }

  getPlace (placename) : any {
    return this.places[placename];
  }

}

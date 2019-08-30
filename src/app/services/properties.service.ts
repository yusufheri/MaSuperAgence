import { Injectable } from '@angular/core';
import { Property } from '../models/Property.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  properties: Property[] = [];
  propertiesSubject = new Subject<Property[]>();

  constructor() { }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  saveProperty() {
    // console.log(this.properties.toString);
    alert(this.properties.length);
    firebase.database().ref('/properties').set(this.properties);
  }

  createProperty(newProperty: Property) {
    this.properties.push(newProperty);
    this.saveProperty();
    this.emitProperties();
  }
}

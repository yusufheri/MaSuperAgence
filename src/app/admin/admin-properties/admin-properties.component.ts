import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertiesService } from 'src/app/services/properties.service';
import { Property } from 'src/app/models/Property.model';


@Component({
  selector: 'app-admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['./admin-properties.component.css']
})
export class AdminPropertiesComponent implements OnInit {

  @ViewChild('closeBtn', {static: false}) closeBtn: ElementRef;

  propertyForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.propertyForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', Validators.required],
      surface: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      rooms: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      description: ['']
    });
  }
  onSaveProperty() {
    const title = this.propertyForm.get('title').value;
    const category = this.propertyForm.get('category').value;
    const surface = this.propertyForm.get('surface').value;
    const rooms = this.propertyForm.get('rooms').value;
    const description = this.propertyForm.get('description').value;

    const newProperty = new Property(title, category, surface, rooms, description);
    this.propertiesService.createProperty(newProperty);
    this.closeModal();
    this.propertyForm.reset();
  }

  closeModal() {
    this.closeBtn.nativeElement.click();
  }

}

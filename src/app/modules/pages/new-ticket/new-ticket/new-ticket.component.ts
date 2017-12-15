import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../../models/Brand';
import { Store } from '../../../../models/Store';
import { Family } from '../../../../models/Family';
import { EquipmentClassification } from '../../../../models/EquipmentClassification';
import { EquipmentDetail } from '../../../../models/EquipmentDetail';
import { FailureType } from '../../../../models/FailureType';
import { NewTicketServiceService } from '../../../../_services/new-ticket-service.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  
  public brandDropdown: Brand[];                                          
  public storeDropdown: Store[];
  public equipmentClassDropdown: EquipmentClassification[];
  public familyDropdown: Family[];
  public equipmentDetailDropdown: EquipmentDetail[];
  public failureTypeDropdown: FailureType[];
  public comment: Comment;

  public selectedBrand: Brand;
  public selectedStore: Store;
  public selectedClassification: EquipmentClassification;
  public selectedFamily: Family;
  public selectedEquipment: EquipmentDetail;
  public selectedFailureType: FailureType;
  

  constructor(private newTicketService: NewTicketServiceService) { }

  ngOnInit() {
    this.brandDropdown =[{id:0,description:'-- Seleccione --'}]
    this.storeDropdown =[{id:0,brandId:0, description:'-- Seleccione --'}]
    this.equipmentClassDropdown =[{id:0,description:'-- Seleccione --'}]
    this.familyDropdown =[{id:0,description:'-- Seleccione --'}]
    this.equipmentDetailDropdown =[{id:0,description:'-- Seleccione --'}]
    this.failureTypeDropdown =[{id:0,description:'-- Seleccione --'}]
    this.getBrandOptions();  
    this.getClassificationOptions();
    this.getFailureTypeOptions();

    // temporary options
    this.getFamilyOptions({id:0,brandId:0,description:'-- Seleccione --'}, {id:0, description:'-- Seleccione --'});
    this.getEquipmentOptions({id:0,brandId:0,description:'-- Seleccione --'}, {id:0,description:'-- Seleccione --'}, {id:0,description:'-- Seleccione --'});
  }

  //<<<-----ASYNCHRONOUS CALLS -------------------------------------------------------->
  getBrandOptions():void{
    this.newTicketService.getBrandDropdownOptions().subscribe(
      data => {
        console.log(data);
        this.brandDropdown = data;
        this.selectedBrand = data[0];
        this.getStoreOptions(this.selectedBrand);
      },
      err => console.log(err),
      () => console.log('done retrieving brands dropdown options')
    );
  }

  getStoreOptions(selectedBrand: Brand):void{
    this.newTicketService.getStoreDropdownOptions(selectedBrand.id).subscribe(
      data => {
        console.log(data);
        this.storeDropdown = data;
        this.selectedStore = data[0];
      },
      err => console.log(err),
      () => console.log('done retrieving store dropdown options')
    );
  }

  getClassificationOptions():void{
    this.newTicketService.getClassificationDropdownOptions().subscribe(
      data => {
        console.log(data);
        this.equipmentClassDropdown = data;
        this.selectedClassification = data[0];
      },
      err => console.log(err),
      () => console.log('done retrieving classification dropdown options')
    );
  }

  getFamilyOptions(selectedStore: Store, selectedClassification: EquipmentClassification):void{
    this.newTicketService.getFamilyDropdownOptions(selectedStore.id, selectedClassification.id).subscribe(
      data => {
        console.log(data);
        this.familyDropdown = data;
        this.selectedFamily = data[0];
      },
      err => console.log(err),
      () => console.log('done retrieving family dropdown options')
    );
  }

  getEquipmentOptions(selectedStore: Store, selectedClassification: EquipmentClassification, selectedFamily: Family):void{
    this.newTicketService.getEquipmentDropdownOptions(selectedStore.id, selectedClassification.id, selectedFamily.id).subscribe(
      data => {
        console.log(data);
        this.equipmentDetailDropdown = data;
        this.selectedEquipment = data[0];
      },
      err => console.log(err),
      () => console.log('done retrieving equipment dropdown options')
    );
  }

  getFailureTypeOptions():void{
    this.newTicketService.getFailureTypeDropdownOptions().subscribe(
      data => {
        console.log(data);
        this.failureTypeDropdown = data;
        this.selectedFailureType = data[0];
      },
      err => console.log(err),
      () => console.log('done retrieving failure type dropdown options')
    );
  }

  //<<<-----DROPDOWN ON CHANGE EVENTS ------------------------------------------->
  onBrandChange(event): void {
    this.getStoreOptions(this.selectedBrand);
  }
  
  onStoreChange(event): void {
  }

  onOtherDropdownChange(event): void {
  }

}

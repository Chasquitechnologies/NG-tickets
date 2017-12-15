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
  public comment: string;

  public selectedBrand: Brand;
  public selectedStore: Store;
  public selectedClassification: EquipmentClassification;
  public selectedFamily: Family;
  public selectedEquipment: EquipmentDetail;
  public selectedFailureType: FailureType;


  constructor(private newTicketService: NewTicketServiceService) { }

  ngOnInit() {
    // Initializing all dropdowns
    this.brandDropdown = [{ id: 0, description: '-- Seleccione --' }]
    this.storeDropdown = [{ id: 0, brandId: 0, description: '-- Seleccione --' }]
    this.equipmentClassDropdown = [{ id: 0, description: '-- Seleccione --' }]
    this.familyDropdown = [{ id: 0, description: '-- Seleccione --' }]
    this.equipmentDetailDropdown = [{ id: 0, description: '-- Seleccione --' }]
    this.failureTypeDropdown = [{ id: 0, description: '-- Seleccione --' }]

    this.selectedBrand = this.brandDropdown[0];
    this.selectedStore = this.storeDropdown[0];
    this.selectedClassification = this.equipmentClassDropdown[0];
    this.selectedFamily = this.familyDropdown[0];
    this.selectedEquipment = this.equipmentDetailDropdown[0];
    this.selectedFailureType = this.failureTypeDropdown[0];

    // Clearing comments box
    this.comment ='';

    // Get the base dropdowns
    this.getBrandOptions();
    this.getClassificationOptions();
    this.getFailureTypeOptions();

  }

  //<<<-------------------------------------------------ASYNCHRONOUS CALLS ---------------------------------------------------------------->
  //<<<------------------------------------------------------------------------------------------------------------------------------------>
  getBrandOptions(): void {
    this.newTicketService.getBrandDropdownOptions().subscribe(
      data => {
        
        // Check if there is at least a single brand in the dropdown and add the '-- Seleccione --' option to the dropdown options 
        // received from http response if it the user does not have any brands assigned to him. If at least one brand is assigned to the user,
        // then the first bran available is selected
        let filteredCheck: Brand[] = data.filter(brand => brand.id > 0);
        if (!(typeof filteredCheck[0] != 'undefined')) {
          data.unshift({ id: 0, description: '-- Seleccione --' });
        }

        console.log(data);
        this.brandDropdown = data;
        this.selectedBrand = data[0];

        //Only queries for the store dropdown options if the user has at least 1 brand with id>0 assigned to him
        if (this.selectedBrand.id>0){
          this.getStoreOptions(this.selectedBrand);
        }
        
      },
      err => console.log(err),
      () => console.log('done retrieving brands dropdown options')
    );
  }

  getStoreOptions(selectedBrand: Brand): void {
    this.newTicketService.getStoreDropdownOptions(selectedBrand.id).subscribe(
      data => {

        // Check if there is at least a single store in the dropdown and add the '-- Seleccione --' option to the dropdown options 
        // received from http response if it the user does not have any stores assigned to him. If at least one store is assigned to the user,
        // then the first store available is selected
        let filteredCheck: Store[] = data.filter(store => store.id > 0);
        if (!(typeof filteredCheck[0] != 'undefined')) {
          data.unshift({ id: 0, brandId: 0, description: '-- Seleccione --' });
        }

        // Populates dropdown and selects first option (i.e. '-- Seleccione --')
        this.storeDropdown = data;
        this.selectedStore = data[0];
      },
      err => console.log(err),
      () => console.log('done retrieving store dropdown options')
    );
  }

  getClassificationOptions(): void {
    this.newTicketService.getClassificationDropdownOptions().subscribe(
      data => {

        // Check if -- Seleccione -- option exists in dropdown and adds it to dropdown options received from http response if it does not exist
        let filteredCheck: EquipmentClassification[] = data.filter(classification => classification.id === 0);
        if (!(typeof filteredCheck[0] != 'undefined')) {
          data.unshift({ id: 0, description: '-- Seleccione --' });
        }

        // Populates dropdown and selects first option (i.e. '-- Seleccione --')
        this.equipmentClassDropdown = data;
        this.selectedClassification = data[0];
      },
      err => console.log(err),
      () => console.log('done retrieving classification dropdown options')
    );
  }

  getFamilyOptions(selectedStore: Store, selectedClassification: EquipmentClassification): void {
    this.newTicketService.getFamilyDropdownOptions(selectedStore.id, selectedClassification.id).subscribe(
      data => {
        // Check if -- Seleccione -- option exists in dropdown and adds it to dropdown options received from http response if it does not exist
        let filteredCheck: Family[] = data.filter(family => family.id === 0);
        if (!(typeof filteredCheck[0] != 'undefined')) {
          data.unshift({ id: 0, description: '-- Seleccione --' });
        }

        // Populates dropdown and selects first option (i.e. '-- Seleccione --')
        console.log(data);
        this.familyDropdown = data;
        this.selectedFamily = data[0];
      },
      err => console.log(err),
      () => console.log('done retrieving family dropdown options')
    );
  }

  getEquipmentOptions(selectedStore: Store, selectedClassification: EquipmentClassification, selectedFamily: Family): void {
    this.newTicketService.getEquipmentDropdownOptions(selectedStore.id, selectedClassification.id, selectedFamily.id).subscribe(
      data => {
        // Check if -- Seleccione -- option exists in dropdown and adds it to dropdown options received from http response if it does not exist
        let filteredCheck: EquipmentDetail[] = data.filter(equipmentDetail => equipmentDetail.id === 0);
        if (!(typeof filteredCheck[0] != 'undefined')) {
          data.unshift({ id: 0, description: '-- Seleccione --' });
        }

        // Populates dropdown and selects first option (i.e. '-- Seleccione --')
        this.equipmentDetailDropdown = data;
        this.selectedEquipment = data[0];
      },
      err => console.log(err),
      () => console.log('done retrieving equipment dropdown options')
    );
  }

  getFailureTypeOptions(): void {
    this.newTicketService.getFailureTypeDropdownOptions().subscribe(
      data => {
        // Check if -- Seleccione -- option exists in dropdown and adds it to dropdown options received from http response if it does not exist
        let filteredCheck: FailureType[] = data.filter(failureType => failureType.id === 0);
        if (!(typeof filteredCheck[0] != 'undefined')) {
          data.unshift({ id: 0, description: '-- Seleccione --' });
        }

        // Populates dropdown and selects first option (i.e. '-- Seleccione --')        
        this.failureTypeDropdown = data;
        this.selectedFailureType = data[0];
      },
      err => console.log(err),
      () => console.log('done retrieving failure type dropdown options')
    );
  }

  //<<<---------------------------------------------DROPDOWN ON CHANGE EVENTS ------------------------------------------------------------->
  //<<<------------------------------------------------------------------------------------------------------------------------------------>
  onBrandChange(event): void {
    // Clears dropdowns to prevent old data from sticking on the variable
    this.storeDropdown = [{ id: 0, brandId: 0, description: '-- Seleccione --' }]
    this.familyDropdown = [{ id: 0, description: '-- Seleccione --' }]
    this.equipmentDetailDropdown = [{ id: 0, description: '-- Seleccione --' }]

    // Selects first option in dropdown (i.e. '-- Seleccione --' or first store available to the user)        
    this.selectedStore = this.storeDropdown[0];
    this.selectedClassification = this.equipmentClassDropdown[0];
    this.selectedFamily = this.familyDropdown[0];
    this.selectedEquipment = this.equipmentDetailDropdown[0];
    this.selectedFailureType = this.failureTypeDropdown[0];

    this.getStoreOptions(this.selectedBrand);
  }

  onStoreChange(event): void {
    // Clears dropdowns to prevent data from sticking on the variable
    this.familyDropdown = [{ id: 0, description: '-- Seleccione --' }]
    this.equipmentDetailDropdown = [{ id: 0, description: '-- Seleccione --' }]

    // Selects first option in dropdown (i.e. '-- Seleccione --')
    this.selectedClassification = this.equipmentClassDropdown[0];
    this.selectedFamily = this.familyDropdown[0];
    this.selectedEquipment = this.equipmentDetailDropdown[0];
    this.selectedFailureType = this.failureTypeDropdown[0];

  }

  onClassificationChange(event): void {
    // Clears dropdowns to prevent data from sticking on the variable
    this.familyDropdown = [{ id: 0, description: '-- Seleccione --' }]
    this.equipmentDetailDropdown = [{ id: 0, description: '-- Seleccione --' }]

    // Selects first option in dropdown (i.e. '-- Seleccione --')
    this.selectedFamily = this.familyDropdown[0];
    this.selectedEquipment = this.equipmentDetailDropdown[0];
    this.selectedFailureType = this.failureTypeDropdown[0];

    // Validation that both a store and an equipment classification have been selected prior
    // to performing and Http request for the families
    if (this.selectedStore.id > 0 && this.selectedClassification.id > 0) {
      this.getFamilyOptions(this.selectedStore, this.selectedClassification);
    }


  }

  onFamilyChange(event): void {
    // Clears dropdowns to prevent data from sticking on the variable
    this.equipmentDetailDropdown = [{ id: 0, description: '-- Seleccione --' }]

    // Selects first option in dropdown (i.e. '-- Seleccione --')
    this.selectedEquipment = this.equipmentDetailDropdown[0];
    this.selectedFailureType = this.failureTypeDropdown[0];

    // Validation that both a store, an equipment classification, and a family have been selected prior
    // to performing and Http request for the families
    if (this.selectedStore.id > 0 && this.selectedClassification.id > 0 && this.selectedFamily.id > 0) {
      this.getEquipmentOptions(this.selectedStore, this.selectedClassification, this.selectedFamily);
    }
  }

  onEquipmentChange(event): void {
    this.selectedFailureType = this.failureTypeDropdown[0];    
  }



}

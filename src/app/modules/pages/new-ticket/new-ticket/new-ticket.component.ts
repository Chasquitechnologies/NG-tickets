import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../../models/Brand';
import { Store } from '../../../../models/Store';
import { Family } from '../../../../models/Family';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  
  public brandDropdown: Brand[];
  public storeDropdown: Store[];
  public familyDropdown: Family[];


  public selectedBrand: Brand;
  public selectedStore: Store;
  public selectedFamily: Family;

  public comment: string;

  constructor() { }

  ngOnInit() {

  }

  onBrandChange(event): void {
  }
  
  onStoreChange(event): void {
  }

  onOtherDropdownChange(event): void {
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { FilterDropDownService } from '../../../../_services/filter-drop-down.service';
import { Brand } from '../../../../models/Brand';
import { Store } from '../../../../models/Store';
import { Family } from '../../../../models/Family';
import { Priority } from '../../../../models/Priority';
import { Status } from '../../../../models/Status';

// declare var jquery: any;
// declare var $: any;

@Component({
  templateUrl: "./base-data-ajax.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./base-data-ajax.component.css']
})

export class BaseDataAjaxComponent implements OnInit {

  public brandDropdown: Brand[];
  public storeDropdown: Store[];
  public familyDropdown: Family[];
  public priorityDropdown: Priority[];
  public statusDropdown: Status[];

  public selectedBrand: number;
  public selectedStore: number;
  public selectedFamily: number;
  public selectedPriority: number;
  public selectedStatus: number;
  
  public dateNow: Date;
  public dateRangeSelected: Date[];
  public starDate: Date;
  public endDate: Date;

  constructor(private _script: ScriptLoaderService, private dropdownService: FilterDropDownService) {
      
   }
  ngOnInit() {
    this.brandDropdown = this.dropdownService.getBrands();
    this.storeDropdown = this.dropdownService.getStores(0);
    this.familyDropdown = this.dropdownService.getFamilies();
    this.priorityDropdown = this.dropdownService.getPriorities();
    this.statusDropdown = this.dropdownService.getStatus();

    this.selectedBrand = 0;
    this.selectedStore = 0;
    this.selectedFamily = 0;
    this.selectedPriority = 0;
    this.selectedStatus = 0;
    this.endDate = new Date();    
    this.starDate = new Date();
    this.starDate.setMonth(this.endDate.getMonth() - 12);
    this.dateRangeSelected=[this.starDate,this.endDate]

    // $('input[name="daterange"]').daterangepicker();

  }

  ngAfterViewInit() {
    this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
      'assets/app/js/data-ajax.js');

  }

  onBrandChange(event): void {
    console.log(event);
    this.storeDropdown = this.dropdownService.getStores(parseInt(event.id))

  }


}

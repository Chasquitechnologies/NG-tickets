import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseDataAjaxComponent } from '../base-data-ajax/base-data-ajax.component';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './admin-tickets-main.component.html',
  styleUrls: ['./admin-tickets-main.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AdminTicketsMainComponent implements OnInit {

  public show: boolean;
  
  constructor() { }

  ngOnInit() {
    this.show=false;
  }

}


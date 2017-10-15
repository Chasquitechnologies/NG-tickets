import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';

@Component({
  selector: 'app-baseajax',
  templateUrl: "./base-data-ajax.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./base-data-ajax.component.css']
})
export class BaseDataAjaxComponent implements OnInit {

  private show: boolean;
  
  constructor(private _script: ScriptLoaderService) { }
  ngOnInit() {
    this.show=false;
  }

  ngAfterViewInit() {
    this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
        'assets/app/js/data-ajax.js');
        

}

}

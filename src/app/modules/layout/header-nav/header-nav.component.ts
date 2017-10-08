import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare let mLayout: any;

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
            mLayout.initHeader();
    
        }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header-checkbox',
  templateUrl: './header-checkbox.component.html',
  styleUrls: ['./header-checkbox.component.scss']
})
export class HeaderCheckboxComponent {
  params: any;
  agInit(params: any) {
    this.params = params;
  }
}

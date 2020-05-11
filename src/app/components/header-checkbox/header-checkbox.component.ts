import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header-checkbox',
  templateUrl: './header-checkbox.component.html',
  styleUrls: ['./header-checkbox.component.scss']
})
export class HeaderCheckboxComponent {
  @ViewChild('toggledCheckbox', {static: false}) toggledCheckbox: ElementRef;

  params: any;
  agInit(params: any) {
    this.params = params;
  }

  onClick() {
    if (this.params.api.getSelectedRows().length !== this.params.api.getDisplayedRowCount()) {
      this.params.api.selectAll();
      this.toggledCheckbox.nativeElement.checked = true;
    } else {
      this.params.api.deselectAll();
      this.toggledCheckbox.nativeElement.checked = false;
    }
  }
}

import { Component, ViewChild, ElementRef } from '@angular/core';

import { SelectedItemsService } from 'src/app/services/selected-items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-checkbox',
  templateUrl: './header-checkbox.component.html',
  styleUrls: ['./header-checkbox.component.scss']
})
export class HeaderCheckboxComponent {
  @ViewChild('toggledCheckbox', {static: false}) toggledCheckbox: ElementRef;

  params: any;
  isAllSelected = new Observable<boolean>();

  constructor(private selectedItemsService: SelectedItemsService) {
    this.isAllSelected = this.selectedItemsService.getIsAllSelected();
  }

  agInit(params: any) {
    this.params = params;
  }

  onClick(): void {
    if (this.params.api.getSelectedRows().length !== this.params.api.getDisplayedRowCount()) {
      this.params.api.selectAll();
      this.toggledCheckbox.nativeElement.checked = true;
      this.selectedItemsService.emit(this.params.api.getSelectedRows());
    } else {
      this.params.api.deselectAll();
      this.toggledCheckbox.nativeElement.checked = false;
      this.selectedItemsService.emit([]);
    }
  }
}

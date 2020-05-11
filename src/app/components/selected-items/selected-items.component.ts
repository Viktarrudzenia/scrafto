import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.scss'],
})
export class SelectedItemsComponent {
  @Input() selectedItems: [][];
}

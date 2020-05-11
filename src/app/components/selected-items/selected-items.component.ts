import { Component } from '@angular/core';
import { SelectedItemsService } from 'src/app/services/selected-items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.scss'],
})
export class SelectedItemsComponent {
  selected = new Observable<number>();

  constructor(private selectedItemsService: SelectedItemsService) {
    this.selected = this.selectedItemsService.get();
  }
}

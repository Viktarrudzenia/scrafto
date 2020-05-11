import { Component, OnInit, ViewChild } from '@angular/core';
import { GetDataService } from './services/get-data.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ImageFormatterComponent } from './components/image-formatter/image-formatter.component';
import { LinkFormatterComponent } from './components/link-formatter/link-formatter.component';
import { HeaderCheckboxComponent } from './components/header-checkbox/header-checkbox.component';
import { debug } from 'util';
import { SelectedItemsService } from './services/selected-items.service';

interface YoutubeItem {
  id: {
    videoId: string;
  };
  snippet: {
    description: string;
    publishedAt: string;
    title: string;
    thumbnails: {
      default: { url: string; };
    };
  };
}

interface RowDataItem {
  description: string;
  publishedAt: string;
  thumbnail: string;
  title: {
    name: string;
    id: string;
  };
}

interface RecievedData {
  items: YoutubeItem[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;

  gridApi: any;
  gridColumnApi: any;

  columnDefs = [
    {
      field: 'selection',
      headerName: '',
      headerComponentFramework: HeaderCheckboxComponent,
      checkboxSelection: true,
    },
    {
      field: 'thumbnail',
      headerName: '',
      cellRendererFramework: ImageFormatterComponent,
      autoHeight: true,
    },
    { field: 'publishedAt', headerName: 'Published on', filter: true, },
    { field: 'title', headerName: 'Video Title', filter: true, cellRendererFramework: LinkFormatterComponent, },
    { field: 'description', headerName: 'Description', sortable: true, filter: true },
  ];

  rowData;

  isCheckboxColumnVisible = true;

  selectedItems = [];

  constructor(private getDataService: GetDataService, private selectedItemsService: SelectedItemsService) { }

  ngOnInit() {
    this.getDataService.getData().subscribe((recievedData: RecievedData) => {
      const parsedData: RowDataItem[] = [];

      recievedData.items.map((item: YoutubeItem) => {
        const parsedItem: RowDataItem = {
          thumbnail: 'https://p7.hiclipart.com/preview/144/913/211/no-symbol-sign-clip-art-svg.jpg',
          description: 'Default description',
          publishedAt: 'Default publishedAt',
          title: {
            name: 'Default title',
            id: 'Default video id'
          }
        };
        parsedItem.title = {
          name: item.snippet.title,
          id: item.id.videoId,
        };
        parsedItem.thumbnail = item.snippet.thumbnails.default.url;
        if (item.snippet.description !== '') { parsedItem.description = item.snippet.description; }
        parsedItem.publishedAt = new Date(item.snippet.publishedAt).toLocaleDateString();
        parsedData.push(parsedItem);
      });

      return this.rowData = parsedData;
    });
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.description).join(', ');
    if (selectedDataStringPresentation) {
      alert(`Select ${selectedNodes.length} rows.
      Info: ${selectedDataStringPresentation}`);
    } else {
      alert(`Choose something in the grid first`);
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged() {
    this.selectedItems = this.gridApi.getSelectedRows();
    this.selectedItemsService.emit(this.selectedItems);
  }

  toggleCheckboxColumn(isVisible) {
    this.gridColumnApi.setColumnVisible('selection', isVisible);
    this.isCheckboxColumnVisible = !this.isCheckboxColumnVisible;
  }

  getContextMenuItems(params) {
    if (params.column.colId === 'title') {
      return [
        {
          name: 'Open in new tab',
          action() {
            // here implement redirect to link
            window.alert('Imagine that here redirect to youtube link with id: ' + params.value.id);
          },
        },
        'copy',
        'copyWithHeaders',
        'paste',
        'separator',
        'export',
      ];
    } else {
      return [
        'copy',
        'copyWithHeaders',
        'paste',
        'separator',
        'export',
      ];
    }
  }
}

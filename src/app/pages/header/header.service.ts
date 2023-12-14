import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DialogMapComponent } from './components/dialog-map/dialog-map.component';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
    constructor(private dialog: MatDialog) {}

    openDialog(): void {
        this.dialog.open(DialogMapComponent, {
            width: '410px',
            height: '410px'
        });
    }
    
}

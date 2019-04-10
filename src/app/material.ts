import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule],
})

export class MaterialModule{}
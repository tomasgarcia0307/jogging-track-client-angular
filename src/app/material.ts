import { MatButtonModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, 
        MatMenuModule, MatInputModule, MatFormFieldModule, MatTableModule, MatGridListModule, MatCardModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, 
        MatMenuModule, MatInputModule, MatFormFieldModule, MatTableModule, MatGridListModule, MatCardModule],
})

export class MaterialModule{}
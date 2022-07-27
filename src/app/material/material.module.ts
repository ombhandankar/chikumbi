import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

const MaterialComponent = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatOptionModule

]

@NgModule({
  declarations: [],
  imports: [  MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }

import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule],
})
export class MaterialModule { }
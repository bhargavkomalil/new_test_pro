import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatButtonModule} from '@angular/material';
const materialComponents = [
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [materialComponents]
})
export class MaterialModule {}

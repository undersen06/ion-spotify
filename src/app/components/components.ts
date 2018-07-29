import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [ LoaderComponent ],
  exports: [ LoaderComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
    LoaderComponent,
    IonicModule.forRoot(),
    
  ],
  entryComponents: [],
})
export class ComponentsModule {}

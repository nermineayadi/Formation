import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing';
import { ProductsComponent } from './products.component';
import { FormsModule} from "@angular/forms";

@NgModule({
    declarations: [ProductsComponent],
    imports: [ CommonModule,ProductsRoutingModule ,FormsModule],
    exports: [],
    providers: [],
})
export class ProductsModule {}
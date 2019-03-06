import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [ProfileComponent],
    imports: [ CommonModule, ProfileRoutingModule,MatCardModule],
    exports: [],
    providers: [],
})
export class ProfileModule {}
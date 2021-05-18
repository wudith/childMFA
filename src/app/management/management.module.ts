import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import { SharedModule } from '../shared/shared.module';
import { ManagementRouting } from './management-routing.module';
import {ManagementComponent} from "./management.component";





@NgModule({
    imports: [
        CommonModule,
        SharedModule,       
        ManagementRouting
    ],
    declarations: [
        ManagementComponent
    ],    
    providers: [ 

    ],
    entryComponents: [
    ]
})

export class ManagementModule {
}

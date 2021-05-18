import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ManagementComponent} from "./management.component";

const routes:Routes = [
    {path: '', component: ManagementComponent},
];

export const ManagementRouting: ModuleWithProviders = RouterModule.forChild(routes);
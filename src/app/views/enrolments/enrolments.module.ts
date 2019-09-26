import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EnrolmentsRoutes } from './enrolments.routing';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';

import { ListComponent } from './list/list.component';

@NgModule({
    imports     : [
        CommonModule,
        DemoMaterialModule,
        FlexLayoutModule,
        ChartistModule,
        ChartsModule,
        RouterModule.forChild(EnrolmentsRoutes)
    ],
    declarations: [ ListComponent ]
})
export class EnrolmentsModule {}

import { Routes } from '@angular/router';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { WithoutSignalComponent } from './without-signal/without-signal.component';

export const routes: Routes = [
    {
        path: 'without-signal',
        component: WithoutSignalComponent
    },
    {
        path: 'linked-signal',
        component: LinkedSignalComponent
    },
];

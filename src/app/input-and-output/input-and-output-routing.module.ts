import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputAndOutputComponent } from './input-and-output.component';

const routes: Routes = [{ path: '', component: InputAndOutputComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputAndOutputRoutingModule { }
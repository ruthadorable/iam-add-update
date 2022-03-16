import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { UpdateCbusComponent } from './form/update-cbus/update-cbus.component';
import { InlineFormComponent } from './inline-form/inline-form.component';

const routes: Routes = [
  {path:'',redirectTo:'inline-form',pathMatch:'full'},
  {path:'inline-form',component: InlineFormComponent},
  {path: 'update/:id', component: UpdateCbusComponent },
  {path:'addform', component: AddFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

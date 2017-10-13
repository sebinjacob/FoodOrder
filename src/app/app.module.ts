import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddChefComponent } from './add-chef/add-chef.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ApprovalTypeComponent } from './approval-type/approval-type.component';
import { MenuViewComponent } from './view/menu-view/menu-view.component';
import { ChefViewComponent } from './view/chef-view/chef-view.component';
import { ApproveViewComponent } from './view/approve-view/approve-view.component';
import { ApproveListComponent } from './approve-list/approve-list.component';
import { ApproveListViewComponent } from './view/approve-list-view/approve-list-view.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ModalwindowComponent } from './modalwindow/modalwindow.component';



@NgModule({
  declarations: [
    AppComponent,
    AddMenuComponent,
    AddChefComponent,
    SideBarComponent,
    ApprovalTypeComponent,
    MenuViewComponent,
    ChefViewComponent,
    ApproveViewComponent,
    ApproveListComponent,
    ApproveListViewComponent,
    LoginComponent,
    HomeComponent,
    ModalwindowComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([ 
        {
        path:"",
        component: HomeComponent
        },
        {
          path:"menu",
          component: MenuViewComponent
        },
        {
          path:"chef",
          component: ChefViewComponent
        },
        {
          path:"login",
          component:LoginComponent
        },
        {
          path:"list",
          component:ApproveListViewComponent
        },
        {
          path:"appr",
          component:ApproveViewComponent
        }
    ])
  ],
  providers: [AddMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

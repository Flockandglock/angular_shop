import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./shared/admin-layout/admin-layout.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddPageComponent } from "./add-page/add-page.component";
import { OrdersPageComponent } from "./orders-page/orders-page.component";
import { EditPageComponent } from "./edit-page/edit-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { authGuard } from "../shared/auth.guard";

@NgModule({
    declarations: [
        AdminLayoutComponent,
        LoginPageComponent,
        DashboardComponent,
        AddPageComponent,
        OrdersPageComponent,
        EditPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: AdminLayoutComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'login',
                        pathMatch: 'full'
                    },
                    {
                        path: 'login',
                        component: LoginPageComponent
                    },
                    {
                        path: 'dashboard',
                        component: DashboardComponent,
                        canActivate: [authGuard]
                    },
                    {
                        path: 'add',
                        component: AddPageComponent,
                        canActivate: [authGuard]
                    },
                    {
                        path: 'orders',
                        component: OrdersPageComponent,
                        canActivate: [authGuard]
                    },
                    {
                        path: 'product/:id/edit',
                        component: EditPageComponent,
                        canActivate: [authGuard]
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})

export class AdminModule {
    
}
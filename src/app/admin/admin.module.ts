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
                        component: DashboardComponent
                    },
                    {
                        path: 'add',
                        component: AddPageComponent
                    },
                    {
                        path: 'orders',
                        component: OrdersPageComponent
                    },
                    {
                        path: 'product/:id/edit',
                        component: EditPageComponent
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})

export class AdminModule {
    
}
import { Routes } from '@angular/router';
import { AdminLayout } from './Layout/admin-layout/admin-layout';
import { Dashboard } from './Pages/dashboard/dashboard';
import { Events } from './Pages/events/events';
import { Bookings } from './Pages/bookings/bookings';
import { Inventory } from './Pages/inventory/inventory';



export const routes: Routes = [

    {
        path: '',
        redirectTo: '/Admin/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'Admin',
        component: AdminLayout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                data: { animation: 'DashboardPage' } 
            },
            {
                
                path: 'events', 
                component: Events, // Add new route
                data: { animation: 'EventsPage' } 
            },
            
            { 
                path: 'bookings', 
                component: Bookings, 
                data: { animation: 'BookingsPage' } 
            },
            { 
                path: 'inventory', 
                component: Inventory, 
                data: { animation: 'InventoryPage' } },
        ]
    }
];

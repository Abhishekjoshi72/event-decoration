import { Routes } from '@angular/router';
import { AdminLayout } from './Layout/admin-layout/admin-layout';
import { Dashboard } from './Pages/dashboard/dashboard';
import { Events } from './Pages/events/events';
import { Bookings } from './Pages/bookings/bookings';
import { Inventory } from './Pages/inventory/inventory';
import { Staff } from './Pages/staff/staff';
import { Settings } from './Pages/settings/settings';



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
                data: { animation: 'InventoryPage' } 
            },
            { 
                path: 'staff', 
                component: Staff, // Add new route
                data: { animation: 'StaffPage' } 
            },
            { 
                path: 'settings', 
                component: Settings, // Add new route
                data: { animation: 'SettingsPage' } 
            },
        ]
    }
];

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatCard } from "./components/stat-card/stat-card";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, StatCard],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  recentBookings = [
    { id: 1, client: 'Alice & Bob Wedding', date: '2023-11-15', type: 'Full Wedding Decor', status: 'Confirmed', amount: '$4,500' },
    { id: 2, client: 'TechCorp Gala', date: '2023-11-20', type: 'Corporate Stage', status: 'Pending', amount: '$2,100' },
    { id: 3, client: 'Smith 50th Birthday', date: '2023-11-22', type: 'Party Hall', status: 'Confirmed', amount: '$850' },
    { id: 4, client: 'City Hall Event', date: '2023-12-01', type: 'Floral Installation', status: 'Draft', amount: '$1,200' },
  ];

  getStatusClass(status: string): string {
    switch(status) {
        case 'Confirmed': return 'bg-green-100 text-green-800';
        case 'Pending': return 'bg-orange-100 text-orange-800';
        default: return 'bg-gray-100 text-gray-800';
    }
  }
}

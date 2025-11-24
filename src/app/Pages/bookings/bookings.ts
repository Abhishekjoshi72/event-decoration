import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { cardAnimation, listAnimation } from '../../Shared/animations';

@Component({
  selector: 'app-bookings',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
  animations: [listAnimation, cardAnimation]
})
export class Bookings {
  bookings = [
    { id: 'BK001', client: 'Alice & Bob Wedding', date: '2023-11-15', service: 'Full Wedding Decor', status: 'Confirmed', amount: 4500, contact: 'alice@example.com' },
    { id: 'BK002', client: 'TechCorp Annual Gala', date: '2023-11-20', service: 'Corporate Stage Design', status: 'Pending', amount: 2100, contact: 'info@techcorp.com' },
    { id: 'BK003', client: 'Smith Family Reunion', date: '2023-11-22', service: 'Backyard Party Setup', status: 'Confirmed', amount: 850, contact: 'smiths@email.com' },
    { id: 'BK004', client: 'City Hall Fundraiser', date: '2023-12-01', service: 'Floral Installations', status: 'Draft', amount: 1200, contact: 'events@cityhall.gov' },
    { id: 'BK005', client: 'Green Innovations Expo', date: '2023-12-08', service: 'Exhibition Booths', status: 'Confirmed', amount: 3200, contact: 'expo@greeninno.org' },
    { id: 'BK006', client: 'Children\'s Charity Ball', date: '2023-12-15', service: 'Theme Decor & Lighting', status: 'Pending', amount: 1800, contact: 'charity@kids.org' },
    { id: 'BK007', client: 'Holiday Market Decor', date: '2023-12-20', service: 'Seasonal Displays', status: 'Confirmed', amount: 950, contact: 'market@local.com' },
  ];

  getStatusClass(status: string) {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-orange-100 text-orange-800';
      case 'Draft': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}

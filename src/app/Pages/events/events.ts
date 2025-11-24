import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { cardAnimation, listAnimation } from '../../Shared/animations';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './events.html',
  styleUrl: './events.css',
  animations: [listAnimation,cardAnimation]
})
export class Events {

    events = [
    { id: 'E001', name: 'Grand Wedding Expo', date: '2024-03-10', location: 'Convention Center Hall A', status: 'Upcoming', type: 'Exhibition' },
    { id: 'E002', name: 'Annual Charity Gala', date: '2024-04-22', location: 'The Grand Ballroom', status: 'Upcoming', type: 'Gala' },
    { id: 'E003', name: 'Summer Music Festival', date: '2024-07-15', location: 'Central Park Amphitheater', status: 'Planning', type: 'Festival' },
    { id: 'E004', name: 'Corporate Product Launch', date: '2024-09-01', location: 'Tech Innovation Hub', status: 'Confirmed', type: 'Corporate' },
    { id: 'E005', name: 'Holiday Market Festival', date: '2024-12-05', location: 'Downtown Square', status: 'Planning', type: 'Market' },
  ];

  getStatusClass(status: string) {
    switch (status) {
      case 'Upcoming': return 'bg-blue-100 text-blue-800';
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}

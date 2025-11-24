import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { cardAnimation, listAnimation } from '../../Shared/animations';

@Component({
  selector: 'app-staff',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './staff.html',
  styleUrl: './staff.css',
  animations: [listAnimation,cardAnimation]
})
export class Staff {
  staffMembers = [
    { id: 'S001', name: 'Sarah Johnson', role: 'Event Manager', email: 'sarah.j@gala.com', phone: '555-1234', imageUrl: 'https://i.pravatar.cc/150?img=47', status: 'Active' },
    { id: 'S002', name: 'Michael Chen', role: 'Lead Designer', email: 'michael.c@gala.com', phone: '555-5678', imageUrl: 'https://i.pravatar.cc/150?img=68', status: 'Active' },
    { id: 'S003', name: 'Emily White', role: 'Logistics Coordinator', email: 'emily.w@gala.com', phone: '555-9012', imageUrl: 'https://i.pravatar.cc/150?img=25', status: 'Active' },
    { id: 'S004', name: 'David Lee', role: 'Marketing Specialist', email: 'david.l@gala.com', phone: '555-3456', imageUrl: 'https://i.pravatar.cc/150?img=12', status: 'On Leave' },
    { id: 'S005', name: 'Jessica Brown', role: 'Customer Support', email: 'jessica.b@gala.com', phone: '555-7890', imageUrl: 'https://i.pravatar.cc/150?img=33', status: 'Active' },
  ];

  getStatusClass(status: string) {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'On Leave': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}

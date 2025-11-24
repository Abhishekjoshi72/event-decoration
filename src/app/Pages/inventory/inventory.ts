import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { cardAnimation, listAnimation } from '../../Shared/animations';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './inventory.html',
  styleUrl: './inventory.css',
  animations: [listAnimation, cardAnimation]
})
export class Inventory {

  inventoryItems = [
    { id: 'INV001', name: 'Gold Chiavari Chairs', category: 'Seating', quantity: 250, status: 'Available', lastUsed: '2023-11-15', imageUrl: 'https://via.placeholder.com/150/f0d756/ffffff?text=Chairs' },
    { id: 'INV002', name: 'Crystal Chandeliers', category: 'Lighting', quantity: 15, status: 'Available', lastUsed: '2023-11-20', imageUrl: 'https://via.placeholder.com/150/a7d9f7/ffffff?text=Chandeliers' },
    { id: 'INV003', name: 'Floral Archway (Large)', category: 'Structures', quantity: 3, status: 'In Use', lastUsed: '2023-11-22', imageUrl: 'https://via.placeholder.com/150/9ad09f/ffffff?text=Archway' },
    { id: 'INV004', name: 'White Linen Tablecloths', category: 'Linens', quantity: 300, status: 'Available', lastUsed: '2023-12-01', imageUrl: 'https://via.placeholder.com/150/ffffff/000000?text=Linens' },
    { id: 'INV005', name: 'LED Uplights', category: 'Lighting', quantity: 50, status: 'Available', lastUsed: '2023-12-08', imageUrl: 'https://via.placeholder.com/150/d2a3e0/ffffff?text=Uplights' },
    { id: 'INV006', name: 'Velvet Draping (Burgundy)', category: 'Fabrics', quantity: 100, status: 'In Use', lastUsed: '2023-12-15', imageUrl: 'https://via.placeholder.com/150/8a2b2b/ffffff?text=Draping' },
  ];

  getStatusClass(status: string) {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'In Use': return 'bg-orange-100 text-orange-800';
      case 'Maintenance': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css',
})
export class StatCard {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() color: 'purple' | 'blue' | 'green' | 'orange' = 'purple';

  get borderColorClass() {
    const colors = {
      purple: 'border-brand-purple',
      blue: 'border-blue-500',
      green: 'border-green-500',
      orange: 'border-orange-500',
    };
    return colors[this.color];
  }

   get iconBgClass() {
    const colors = {
      purple: 'bg-purple-100 text-brand-purple',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
    };
    return colors[this.color];
  }
}

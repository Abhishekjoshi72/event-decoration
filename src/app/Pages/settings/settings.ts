import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { cardAnimation, listAnimation } from '../../Shared/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './settings.html',
  styleUrl: './settings.css',
  animations: [listAnimation,cardAnimation]
})
export class Settings {

  generalSettings = {
    siteName: 'Gala Decor Admin',
    emailNotifications: true,
    darkMode: false
  };

  profileSettings = {
    userName: 'Admin User',
    userEmail: 'admin@galadecor.com'
  };

  saveSettings() {
    console.log('General Settings Saved:', this.generalSettings);
    console.log('Profile Settings Saved:', this.profileSettings);
    alert('Settings saved successfully!');
  }
}

import { Component, computed } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isLoggedIn = computed(() => this.authService.isLoggedIn());

  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('NgOnInit called');
  }

  ngAfterViewInit() {
    console.log('The component has been loaded');
  }

  ngOnDestroy() {
    console.log('NgOnDestroy called');
  }

  onLogout(): void {
    this.authService.logout();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { NoDataFoundComponent } from '../no-data-found/no-data-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent ,HomeComponent , AboutComponent , PortfolioComponent , ContactComponent , FooterComponent , NoDataFoundComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAssignment';
}

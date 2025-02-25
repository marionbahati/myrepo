import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarComponent } from "./bar/bar.component";
import { NetdraphComponent } from "./netdraph/netdraph.component";
import { PieComponent } from "./pie/pie.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BarComponent, NetdraphComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'd3visualisation';
}

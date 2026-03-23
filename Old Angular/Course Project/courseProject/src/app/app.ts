import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  loadedfeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedfeature = feature;
  }
}

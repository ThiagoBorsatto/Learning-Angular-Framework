import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit{
  // places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  private placesServices = inject(PlacesService);
  private destroyRef = inject(DestroyRef);
  places = this.placesServices.loadedUserPlaces;
  
  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.placesServices.loadUserPlaces().subscribe({
        error: (error: Error) => {
          this.error.set(error.message);
        },
        complete: () => {
          this.isFetching.set(false);
        }
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onRemove(place: Place) {
    const subscription = this.placesServices.removeUserPlace(place).subscribe();

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}

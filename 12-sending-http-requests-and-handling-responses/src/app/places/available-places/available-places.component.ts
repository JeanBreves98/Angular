import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesService } from '../places.service';


@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private placesService = inject(PlacesService)
  // private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef)

  // constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = 
      this.placesService.loadAvailablePlaces().
    // const subscription = this.httpClient
    // .get<{places: Place[]}>('http://localhost:3000/places')
    // .pipe(
    //   map((resData) => resData.places), 
    //   catchError((error) => {
    //     console.log(error);
    //     return throwError(
    //       () =>
    //          new Error(
    //           'Something went wrong fetching the available places. Please try again later.'
    //         )
    //       );
    //     })
    // )
    // const subscription = this.httpClient.get<{places: Place[]}>('http://localhost:3000/places', {
    //   observe: 'response'
    // })
    subscribe({
      next: (places) => {
        this.places.set(places);
        // console.log(resData.places);
        // console.log(response.body?.places);
      },
      error: (error: Error) => {
        console.log(error);
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

  onSelectPlace(selectedPlace: Place) {
    // this.httpClient.put('http://localhost:3000/user-places', {
    //   placeId: selectedPlace.id
    //   })
    const subscription = this.placesService.addPlaceToUserPlaces(selectedPlace).subscribe({
      next: (resData) => console.log(resData),
    });

     this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });  
  }
}

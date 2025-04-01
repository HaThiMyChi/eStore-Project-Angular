import { Component, Input } from '@angular/core';
import { IconDefinition, faStar, faStarHalf  } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent {
  faStar = faStar;
  faStarHalf  = faStarHalf;
  faStarEmpty = faStarEmpty;

  stars: IconDefinition[] = [];
  private _score: number = 0;

  @Input()
  set score(val: number) {
    this._score = val > 5 ? 5 : val;
    const solidStarCount: number = Math.floor(this._score);
    for (let i: number = 0; i < solidStarCount; i++) {
      this.stars.push(faStar);
    }

    if (this._score - solidStarCount > 0 && this._score - solidStarCount < 1) {
      this.stars.push(faStarHalf );
    }

    for (let i: number = this.stars.length; i < 5; i++) {
      this.stars.push(faStarEmpty);
    }
  }
}

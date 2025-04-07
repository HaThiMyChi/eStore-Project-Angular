import { Component } from '@angular/core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';

@Component({
  selector: 'app-categorynavigation',
  templateUrl: './categorynavigation.component.html',
  styleUrls: ['./categorynavigation.component.scss']
})
export class CategorynavigationComponent {
  constructor(public categoryStore: CategoriesStoreItem) {
  }
}

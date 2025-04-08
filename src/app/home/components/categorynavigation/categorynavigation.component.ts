import { Component, EventEmitter, Output } from '@angular/core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { Category } from '../../types/category.type';

@Component({
  selector: 'app-categorynavigation',
  templateUrl: './categorynavigation.component.html',
  styleUrls: ['./categorynavigation.component.scss']
})
export class CategorynavigationComponent {
  @Output() categoryClicked : EventEmitter<number> = new EventEmitter<number>();
  constructor(public categoryStore: CategoriesStoreItem) {
  }

  onCategoryClick(category: Category) : void {
    this.categoryClicked.emit(category.id);
  }
}

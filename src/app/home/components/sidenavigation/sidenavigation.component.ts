import { Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category/category.service';
import { Subscription } from 'rxjs';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss']
})
export class SidenavigationComponent implements OnDestroy{
  @Output()
  subCategoryClicked: EventEmitter<number> = new EventEmitter<number>();

  categories: Category[] =  [];
  subscriptions: Subscription = new Subscription();

  constructor(categoryStore: CategoriesStoreItem) {
    this.subscriptions.add(
      categoryStore.categories$.subscribe((categories) => {
        this.categories = categories;
      })
    );
  }

  getCategories(parentCategoryId?: number) {
    return this.categories.filter(category => parentCategoryId ? category.parent_category_id === parentCategoryId : category.parent_category_id === null);
  }

  onSubCategoryClick(subCategory: Category) : void {
    console.log('category', subCategory)
    this.subCategoryClicked.emit(subCategory.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

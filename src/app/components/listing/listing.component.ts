import { Component, OnInit } from '@angular/core';
import { RewardService } from '../../services/reward.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  rewards: any = []; // Original rewards list
  filteredRewards: any = []; // Filtered rewards list
  searchQuery = ''; // Search input for filtering
  selectedCategory: string[] = []; // Multiple selected categories
  categories = ['e-Voucher', 'Products', 'Evergreen', 'Fashions & Retails']; // Hardcoded categories
  sortOrder: 'asc' | 'desc' | null = null;
  isSortTrayOpen: boolean = false; // Flag for sort tray visibility

  constructor(private rewardService: RewardService) {
    this.rewards = this.rewardService.getRewards();
    this.filteredRewards = [...this.rewards]; 
  }
  ngOnInit(): void {
  }
  // Filter rewards based on selected categories and search query
  filterRewards(): void {
    this.filteredRewards = this.rewards.filter((reward: any) => {
      const matchesCategory = this.selectedCategory.length === 0 || this.selectedCategory.includes(reward.category);
      const matchesSearch = reward.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
  // Select a category and filter rewards
  toggleCategory(category: string): void {
    if (this.selectedCategory.includes(category)) {
      this.selectedCategory = this.selectedCategory.filter(c => c !== category); // Remove category
    } else {
      this.selectedCategory.push(category); // Add category
    }
    this.filterRewards();
  }
  // Remove the category filter
  removeFilter(): void {
    this.selectedCategory = [];
    this.searchQuery = '';
    this.filterRewards();
  }

  // Count the total filtered items
  getTotalCount(): number {
    return this.rewards.length;
  }
  // Toggle sort tray visibility
  toggleSortTray(): void {
    this.isSortTrayOpen = !this.isSortTrayOpen;
  }
  // Sort rewards based on the selected order (A to Z or Z to A)
  setSortOrder(order: 'asc' | 'desc'): void {
    this.sortOrder = this.sortOrder === order ? null : order;
  }
  applySort(): void {
    if (this.sortOrder) {
      this.filteredRewards.sort((a: any, b: any) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (this.sortOrder === 'asc') {
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        } else {
          return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
        }
      });
    }
  }
}

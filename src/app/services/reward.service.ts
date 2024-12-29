import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RewardService {
  private rewards = [
    {
      pk: 987,
      name: 'Reward Name 1',
      points: 150,
      display_img_url: 'assets/flower.jpg',
      quantity: 14,
      valid_until: '2024-12-31T00:00:00',
      low_quantity: 10,
      category: 'e-Voucher'
    },
    {
      pk: 988,
      name: 'Reward Name 2',
      points: 100,
      display_img_url: 'assets/watch.jpg',
      quantity: 20,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 5,
      category: 'Products'
    },
    {
      pk: 989,
      name: 'Reward Name 3',
      points: 100,
      display_img_url: 'assets/flower.jpg',
      quantity: 20,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 50,
      category: 'Products'
    },
    {
      pk: 990,
      name: 'Reward Name 4',
      points: 100,
      display_img_url: 'assets/watch.jpg',
      quantity: 20,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 2,
      category: 'e-Voucher'
    },
    {
      pk: 991,
      name: 'Reward Name 5',
      points: 100,
      display_img_url: 'assets/life.jpg',
      quantity: 0,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 5,
      category: 'e-Voucher'
    },
    {
      pk: 992,
      name: 'Reward Name 6',
      points: 200,
      display_img_url: 'assets/copun1.jpg',
      quantity: 0,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 35,
      category: 'e-Voucher'
    },
    {
      pk: 993,
      name: 'Reward Name 7',
      points: 100,
      display_img_url: 'assets/watch.jpg',
      quantity: 0,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 50,
      category: 'e-Voucher'
    },
    {
      pk: 994,
      name: 'Reward Name 8',
      points: 100,
      display_img_url: 'assets/copn2.jpg',
      quantity: 10,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 5,
      category: 'Evergreen'
    },
    {
      pk: 995,
      name: 'Reward Name 9',
      points: 100,
      display_img_url: 'assets/lif2.jpg',
      quantity: 20,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 5,
      category: 'Fashions & Retails'
    },
    {
      pk: 996,
      name: 'Reward Name green',
      points: 100,
      display_img_url: 'assets/watch.jpg',
      quantity: 0,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 5,
      category: 'Evergreen'
    },
    {
      pk: 997,
      name: 'Reward Name voucher',
      points: 100,
      display_img_url: 'assets/flower.jpg',
      quantity: 40,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 5,
      category: 'e-Voucher'
    },
    {
      pk: 998,
      name: 'Reward Name new',
      points: 100,
      display_img_url: 'assets/life.jpg',
      quantity: 22,
      valid_until: '2024-11-30T00:00:00',
      low_quantity: 5,
      category: 'Fashions & Retails'
    }
    // Add more rewards here
  ];

  getRewards() {
    return this.rewards;
  }
}

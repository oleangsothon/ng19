import { CommonModule } from '@angular/common';
import { Component, computed, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface MenuItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-linked-signal',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

  protected readonly menuItems = [
    { id: 1, name: 'ข้าวผัด', price: 50 },
    { id: 2, name: 'ก๋วยเตี๋ยว', price: 40 },
    { id: 3, name: 'ส้มตำ', price: 30 },
  ];

  protected selectedMenuItemId = signal<number>(1);
  protected quantity = signal<number>(1);

  protected total = computed(() => {
    console.log('Compute total');
    const menuItem = this.menuItems.find(item => item.id === this.selectedMenuItemId());
    return menuItem ? menuItem.price * this.quantity() : 0;
  });

  protected remark = linkedSignal({
    source: () => ({
      menuItemId: this.selectedMenuItemId(),
      quantity: this.quantity(),
    }),
    computation: () => '',
  });

  protected changeMenuItem(event: Event): void {
    const menuItemId = Number((event.target as HTMLSelectElement).value);
    this.selectedMenuItemId.set(menuItemId);
  }

  protected changeQuantity(event: Event): void {
    const quantity = Number((event.target as HTMLSelectElement).value);
    this.quantity.set(quantity);
  }

  protected changeRemark(event: Event): void {
    const remark = (event.target as HTMLInputElement).value;
    this.remark.set(remark);
  }
}

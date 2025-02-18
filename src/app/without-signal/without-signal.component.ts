import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-without-signal',
  imports: [
        CommonModule,
        FormsModule
  ],
  templateUrl: './without-signal.component.html',
  styleUrl: './without-signal.component.css'
})
export class WithoutSignalComponent {

  constructor(private router: Router) {
    const tree = this.router.createUrlTree(['/dashboard', 123, 456], { queryParams: { user: 'admin' } });
    console.log('createUrlTree', tree.toString());
  }

  menuItems = [
    { id: 1, name: 'ข้าวผัด', price: 50 },
    { id: 2, name: 'ก๋วยเตี๋ยว', price: 40 },
    { id: 3, name: 'ส้มตำ', price: 30 },
  ];

  selectedMenuItemId: number = 1;
  quantity: number = 1;
  remark: string = '';

  get total(): number {
    console.log('Compute total');
    const menuItem = this.menuItems.find(item => item.id === this.selectedMenuItemId);
    return menuItem ? menuItem.price * this.quantity : 0;
  }

  changeMenuItem(event: Event): void {
    const menuItemId = Number((event.target as HTMLSelectElement).value);
    this.selectedMenuItemId = menuItemId;

    // Reset remark เมื่อเปลี่ยนเมนู
    this.remark = '';
  }

  changeQuantity(event: Event): void {
    const quantity = Number((event.target as HTMLInputElement).value);
    this.quantity = quantity;

    // Reset remark เมื่อเปลี่ยนจำนวน
    this.remark = '';
  }

  changeRemark(event: Event): void {
    const remark = (event.target as HTMLInputElement).value;
    this.remark = remark;
  }
}

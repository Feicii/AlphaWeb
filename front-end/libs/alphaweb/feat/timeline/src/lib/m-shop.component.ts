import { Component } from '@angular/core';

@Component({
  selector: 'm-shop',
  standalone: true,
  templateUrl: './m-shop.component.html',
  styleUrls: ['./m-shop.component.scss']
})
export class mShopComponent {
  products = [
    { name: 'Produkt 1', description: 'Beschreibung von Produkt 1' },
    { name: 'Produkt 2', description: 'Beschreibung von Produkt 2' },
    { name: 'Produkt 3', description: 'Beschreibung von Produkt 3' },
  ];
}

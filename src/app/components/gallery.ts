import { Component } from '@angular/core';

interface GalleryItem {
  label: string;
  color: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly items: GalleryItem[] = [
    { label: 'Волонтерський табір', color: '#e2b714' },
    { label: 'Ремонт школи', color: '#3498db' },
    { label: 'Молодіжний центр', color: '#e74c3c' },
    { label: 'Бурчик у парку', color: '#2ecc71' },
    { label: 'Командна робота', color: '#9b59b6' },
    { label: 'Відбудова Ірпінь', color: '#f39c12' },
    { label: 'Тренінг лідерства', color: '#1abc9c' },
    { label: 'Спільний результат', color: '#e2b714' },
  ];
}

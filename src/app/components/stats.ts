import { Component } from '@angular/core';

interface StatItem {
  number: string;
  label: string;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  protected readonly stats: StatItem[] = [
    { number: '500+', label: 'Волонтерів' },
    { number: '50+', label: 'Волонтерських акцій' },
    { number: '30+', label: 'Бурчиків' },
    { number: '10+', label: 'Громадських просторів' },
    { number: '5', label: 'Осередків' },
    { number: '3', label: 'Роки активності' },
  ];
}

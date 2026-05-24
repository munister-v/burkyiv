import { Component } from '@angular/core';

interface ResultItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class Results {
  protected readonly results: ResultItem[] = [
    {
      icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
      title: 'Відновлено помешкань',
      description:
        'Десятки домівок та громадських будівель відремонтовано та повернуто до нормального стану завдяки нашим волонтерам.',
    },
    {
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
      title: 'Об\'єднано молодь',
      description:
        'Сотні молодих людей з різних куточків Києва та області долучилися до волонтерського руху і знайшли однодумців.',
    },
    {
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
      title: 'Створено простори',
      description:
        'Молодіжні центри та громадські простори, створені нашою командою, стали місцями для розвитку та зустрічей.',
    },
    {
      icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
      title: 'Розвинуто спільноту',
      description:
        'Тренінги, воркшопи та освітні програми допомогли волонтерам набути нових навичок та реалізувати власні проєкти.',
    },
  ];
}

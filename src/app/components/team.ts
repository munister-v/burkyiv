import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected readonly members: TeamMember[] = [
    { name: 'Михайло Мельник', role: 'Керівник РО Північ', initials: 'ММ' },
    { name: 'Роман Гичун', role: 'Технічний менеджер РО', initials: 'РГ' },
    { name: 'Давид Ковалевич', role: 'Технічний менеджер РО', initials: 'ДК' },
    { name: 'Ангеліна Щербик', role: 'PR-менеджер РО Північ', initials: 'АЩ' },
    { name: 'Федір Чернов', role: 'Фінансовий менеджер РО', initials: 'ФЧ' },
    { name: 'Катерина Бежинар', role: 'Фінансовий менеджер РО', initials: 'КБ' },
  ];
}

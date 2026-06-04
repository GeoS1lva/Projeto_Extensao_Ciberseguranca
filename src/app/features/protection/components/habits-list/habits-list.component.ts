import { Component } from '@angular/core';
import { HabitItem } from '../../../../core/models';
import { HABIT_ITEMS } from '../../../../core/data/protection.data';

@Component({
  selector: 'app-habits-list',
  standalone: false,
  templateUrl: './habits-list.component.html',
  styleUrls: ['./habits-list.component.scss']
})
export class HabitsListComponent {
  habits: HabitItem[] = HABIT_ITEMS;
}
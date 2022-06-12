import { Injectable } from '@nestjs/common';
import { ITasks } from './tasks.interface';

@Injectable()
export class TasksService {
  private tasks: ITasks[] = [];

  getAllTasks() {
    return this.tasks;
  }
}

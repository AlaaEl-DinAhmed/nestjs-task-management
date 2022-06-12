import { Controller, Get } from '@nestjs/common';
import { ITasks } from './tasks.interface';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): ITasks[] {
    return this.tasksService.getAllTasks();
  }
}

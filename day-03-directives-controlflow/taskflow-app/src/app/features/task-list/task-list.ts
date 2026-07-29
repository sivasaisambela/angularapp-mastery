import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {

  tasks:Task[]=[
    {id:1,title:'Learn Typescript',completed:true},
    {id:2,title:'Master Angular Core',completed:true},
    {id:3,title:'Build Apps',completed:false}
  ];

  toggleComplete(task:Task){
    task.completed= !task.completed;
  }

  trackByTaskId(index:number,task:Task):number{
    return task.id;
  }

}

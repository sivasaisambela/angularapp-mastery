# Day 3 — Directives & Control Flow (Old Syntax)

## Topics Covered

- *ngIf / *ngIf-else with <ng-template>
- *ngFor with trackBy for performance
- CommonModule import required for standalone components using these directives
- [class.x] for conditional single-class binding

## What I Built

- `TaskListComponent` — renders task array, toggle complete/undo, trackBy for efficient re-renders

## Key Takeaways

- *ngIf / *ngFor need CommonModule imported (unlike @if/@for which are built-in)
- trackBy tells Angular how to identify list items by id, not position — avoids unnecessary DOM rebuilds
- [class.completed]="expr" toggles a single CSS class based on a boolean

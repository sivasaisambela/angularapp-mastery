# Day 4 — Component Communication (@Input / @Output)

## Topics Covered

- @Input() — parent passes data DOWN to child
- @Output() + EventEmitter — child sends events UP to parent
- Smart (App) vs Dumb (ProductList, SearchBar) component pattern
- FormsModule + [(ngModel)] for two-way binding on inputs
- models/ folder convention — data shapes live separately, never inside components
- shared/ vs features/ — shared = reusable anywhere, features/ = tied to one screen

## What I Built

- `models/product.model.ts` — Product interface, shared across the app
- `ProductList` (features/) — displays products, emits addToCart event
- `SearchBar` (shared/) — reusable search input, emits typed search term
- `App` — owns product/cart state, handles both child events

## The Core Pattern (in my own words)

Data always flows DOWN through [ ] brackets, from parent to child.
Events always flow UP through ( ) parentheses, from child to parent.
The child never touches the parent's real data directly — it only
asks the parent to act on its behalf by emitting an event.

## Key Takeaways

- @Input() = passing a parameter in; @Output() EventEmitter ≈ C# event Action<T>
- [prop]="value" sends data down; (event)="handler($event)" listens for events up
- Dumb components stay reusable because they own no business logic
- Every ng new project auto-creates its own .git — delete it immediately (Step 2, every day)

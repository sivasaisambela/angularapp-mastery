# Day 10 — Reactive Forms & Validation

## Topics Covered

- FormGroup — represents the whole form
- FormControl — represents one field, with its own value + validity
- Validators (required, minLength, min, pattern) ≈ C# Data Annotations
- [formGroup], formControlName, (ngSubmit) template bindings
- touched state — only show errors after user interacts with a field
- signal() for UI feedback state (showSuccess), separate from form state

## What I Built

- AddProduct component with a validated form: name, image URL, price,
  category, description
- Submit button disabled while form is invalid
- Error messages shown only after a field is touched
- Success message shown briefly after valid submission, form resets after
- Added nav bar in App shell (Home / Add Product links) so the page is
  actually reachable, not just via typed URL

## Bugs I Hit and Fixed

- Forgot to add the 'add-product' route entry in app.routes.ts — blank
  page with no error, since no route matched at all
- Description FormControl existed in the TypeScript form but had no
  matching field in the HTML — form was permanently invalid because
  that control's value could never be filled in
- Console log WAS working the whole time — I just wasn't checking the
  Console tab, and the form silently reset on success with no visible
  feedback, which looked like "nothing happened"

## Key Takeaways

- Every FormControl declared in TypeScript needs a matching
  formControlName in the template, or the form can never become valid
- A route with no entry in the routes array fails silently (blank page,
  no error) — always double check the route list when adding a new page
- Always check the Console tab before assuming something "did nothing"

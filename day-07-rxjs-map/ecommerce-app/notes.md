# Day 7 — RxJS map() + Zoneless Change Detection (unplanned but real discovery)

## Topics Covered

- RxJS .pipe(map(...)) — transforming API responses into the app's own model shape
- Keeping a separate models/api/ folder for external API DTOs vs models/ for app models
- Zoneless Angular (no zone.js) — discovered while debugging "No products available"
  even though the API call succeeded with zero console errors
- Signals (signal(), .set(), .update()) as the fix for zoneless change detection
- Reading a signal in a template requires calling it: products()

## What I Built

- ProductService maps fakestoreapi.com's raw shape into our Product model
- Refactored App to use signal<Product[]> instead of plain properties, since
  plain property mutation inside .subscribe() never triggered a re-render
  in this zoneless Angular 22 project
- Styled ProductList into a responsive card grid (products-grid, product-card)

## The Core Bug, In My Own Words

A plain class property update inside an RxJS subscribe callback does NOT
automatically update the UI in a zoneless Angular app, even though the data
technically changed. Angular needs to be explicitly told via a signal.set()
call — this is very different from CommonJS/zone-based Angular apps and from
anything in earlier tutorials.

## Key Takeaways

- Always check the browser Console tab FIRST when something silently fails
- A successful network response + no console errors does not guarantee
  the UI actually updates — check what's driving change detection
- signal<T>() + .set()/.update() ≈ the "reactive state" pattern going forward
- object-fit: contain fixes distorted/stretched product images in a fixed-size box

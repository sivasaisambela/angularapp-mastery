# Day 9 — Routing: Multiple Pages, One App

## Topics Covered

- Route table (app.routes.ts) mapping URL paths to components
- RouterOutlet — placeholder where the matched component renders
- routerLink — internal navigation without full page reload
- ActivatedRoute + route parameters (:id) — reading URL data in a component

## What I Built

- Home component (absorbed old App logic: search, product list, cart)
- ProductDetail component, reads :id from the URL, shows one product
- App reduced to a thin shell with just <router-outlet>
- ProductList cards now link to /products/:id via routerLink

## Bugs I Hit and Fixed

- Route path missing colon: 'products/id' matched nothing — needed 'products/:id'
- routerLink wasn't actually added to product-list.html initially — a route
  with no link pointing to it will never be triggered, even if configured correctly

## Key Takeaways

- app.routes.ts ≈ a routing table, similar in spirit to ASP.NET route config
- RouterOutlet ≈ @RenderBody() in a Razor layout
- ActivatedRoute.snapshot.paramMap.get('id') ≈ a route parameter bound
  into an ASP.NET controller action method
- A missing colon in a route param, or a missing routerLink, fails silently —
  no console error, just "nothing happens" — always check both together

# Day 6 — HttpClient & RxJS Basics

## Topics Covered

- provideHttpClient() setup in app.config.ts
- HttpClient injected into a service (same DI pattern as Day 5)
- Observable<T> — cold until subscribed, unlike a C# Task
- .subscribe({ next, error }) — where the actual request fires

## What I Built

- ProductService now calls a real API (fakestoreapi.com/products) instead of hardcoded data
- App subscribes to the Observable and populates products on response
- Verified the real HTTP request in browser DevTools Network tab

## The Core Pattern (in my own words)

An Observable is like a Task that does nothing until you subscribe to it.
Calling an HTTP method on HttpClient just describes the request —
it only actually fires the moment .subscribe() runs.

## Known Issue (to fix Day 7)

fakestoreapi.com returns fields like `title` instead of `name`, and has
no `inStock` field — so the UI shows blanks even though data loaded
successfully (confirmed via Network tab). Day 7 will fix this using
RxJS's map() operator to transform the API response into our Product shape.

## Key Takeaways

- Observable<T> ≈ conceptually like Task<T>, but "cold" (inert until subscribed)
- next = success handler, error = failure handler
- provideHttpClient() must be registered once, in app.config.ts
- A successful network response doesn't guarantee correct UI — data shape matters too

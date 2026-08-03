# Day 8 — Real Search Filtering with computed() Signals

## Topics Covered

- computed() signals — auto-recalculating derived state
- Splitting signal state: allProducts (source) vs filteredProducts (derived)
- ProductList needed zero changes despite adding real filtering logic

## What I Built

- searchTerm signal, updated only by handleSearch()
- filteredProducts computed signal, combining allProducts + searchTerm
- Wired ProductList to filteredProducts() instead of allProducts()

## The Core Pattern (in my own words)

computed() is like an Excel formula cell — I declare the relationship once,
and Angular automatically recalculates it whenever any signal it reads
from changes. I never manually call a "refilter" function myself.

## Key Takeaways

- computed(() => ...) reads other signals and derives a new value automatically
- Never .set() a computed signal directly — it's derived, not stored
- Keeping "source of truth" (allProducts) separate from "derived" (filteredProducts)
  keeps filtering logic in exactly one place

Svelte version of my Farbe5000 workshop.

# Brainstorming

How do I store the state?
- how about an arbitray unique ID for each imported colour (UUID?)
- it can have an initial value and a current value
 - it can also have many derived values
 - it can have "background" flag
o should the state be an array or an object?
 - if it's an array, does it need the unique ID?

- so the import can dump it into a store.
o put a button on import
o add an export box with a button
 - this will do a search/replace on text from import

- i guess what's tricky is that all of the values for a colour are derived from each other.
- if some value changes that should change the RGB and then that triggers everything else to change?
- what about values that don't map directly to RGB?
 - ie: if I increase lightness by one but it maps to the same RGB value then the change to teh lightness will be overwritten.
 - i guess this is what I want because in the long run everything should be represented by the rgb value.
 - so then the only problem might be one of timing where the increment is immediately nullified.  fix that if it happens...

```
{
  "originalHex": "123abc",
  "hex": "8237ab",
  "r": 12,
  "g": 211
}
```

- colors is array of hexes
- colorValues is derrived
- table



So when a person sets a new value for LAB, what RGB/HEX should it map to?  Each LAB can map to multiple ones.  The app needs to pick the RGB/HEX that is going to map back to that LAB value.
o does every LAB value map to an RGB that will map back to it?
 - probably not
 o if not, what hex should be used?
  - the default one from the algorithm?
  - the "closest" one that does have a LAB reciprocal?
   o how is this found?

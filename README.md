reindex.js
==========

Got bored of rewriting this for every project, so put it here. It does one simple job:

```js
array = [
    { id: 'AFG', name: 'Afghanistan' },
    { id: 'ALB', name: 'Albania' },
    { id: 'ASM', name: 'American Samoa' }
    // and so on...
];

hash = reindex( array, 'id' );

console.log( hash.AFG ); // { id: 'AFG', name: 'Afghanistan' }
```

This is handy if you have a bunch of data loaded from a CSV or something, and you want a fast way to iterate through all your records (the array) but also to quickly look up information indexed by an id (the hash).

Works everywhere, is AMD compatible. MIT licensed.
reindex.js
==========

You have an array, which looks like this:

```js
countries = [
	{ code: 'ABW', name: 'Aruba', population: 102484 },
	{ code: 'AFG', name: 'Afghanistan', population: 31108077 },
	{ code: 'AGO', name: 'Angola', population: 18498000 },
	{ code: 'AIA', name: 'Anguilla', population: 13600 },
	{ code: 'ALA', name: 'Åland Islands', population: 28355 },
	...
];
```

That's great - you can iterate through the list quickly, and sort it, and filter it, and do all the things you'd normally do with arrays. But what if you need the record for a particular country?

```js
lookup = reindex( countries, 'code' );
code = 'AFG'; // got via a dropdown select, or whatever

console.log( lookup[code] );
// -> { code: 'AFG', name: 'Afghanistan', population: 31108077 }
```

Pretty basic stuff, but I found myself rewriting it in just about every new project when I should have been doing this:

```
$ npm install reindex
```

Works everywhere, is AMD compatible.


License
-------

MIT

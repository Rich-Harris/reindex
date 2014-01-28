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


Why would you use this instead of `_.find()`?
---------------------------------------------

*Written in response to [this tweet](https://twitter.com/BrianRosamilia/status/428285680913891329). As [pointed out by @jdalton](https://twitter.com/jdalton/status/428298721181175808), there's also a `_.indexBy()` function, which does basically the same thing as reindex.js. Crucially, it's available as a [standalone npm module](https://npmjs.org/package/lodash.indexby). Thanks John!*

If you just want to find a particular item in an array, you could use [Underscore](http://underscorejs.org/#find) or [Lodash](http://lodash.com/docs#find):

```js
// with Underscore
_.find( countries, function ( country ) {
  return country.code === code;
});

// with Lodash, you could also do this
_.find( countries, { code: code });
```

That way you only go as far through the array as you need to in order to find what you're looking for, rather than reindexing the whole thing.

But if you want to repeatedly look up items, and the objects in your array have a consistent (and unique!) ID field, like `code` in the example above, reindex.js is way simpler and faster:

* You only iterate through the array once (if you used `_.find()` three times, then assuming the members you were looking for were somewhere in the middle of the array on average, you'd have already iterated through more array members in total than reindex.js)
* Both Underscore and Lodash call an iterator function (Lodash has to create one, if you supply an object of properties to match instead of a function), which has an unavoidable performance overhead even if you're [@jdalton](https://twitter.com/jdalton).

In summary: this is for creating lookup tables, not for ad-hoc finding of array members.


License
-------

MIT

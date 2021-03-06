// https://github.com/Rich-Harris/reindex
// --------------------------------------
//
// MIT licensed. Go nuts.

(function ( global ) {

	'use strict';

	var reindex = function ( array, idField ) {
		var obj = {}, i, record;

		if ( Object.prototype.toString.call( array ) !== '[object Array]' ) {
			throw new Error( 'Cannot reindex a non-array!' );
		}

		if ( !idField ) {
			throw new Error( 'You must specify an ID field' );
		}

		i = array.length;
		while ( i-- ) {
			record = array[i];
			if ( record.hasOwnProperty( idField ) ) {
				obj[ record[ idField ] ] = record;
			}
		}

		return obj;
	};

	// export as CommonJS module...
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = reindex;
	}

	// ... or as AMD module...
	else if ( typeof define !== 'undefined' && define.amd ) {
		define( function () { return reindex; });
	}

	// ... or as browser global
	else {
		global.reindex = reindex;
	}

}( typeof window !== 'undefined' ? window : this ));

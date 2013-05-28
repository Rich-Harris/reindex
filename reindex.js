(function ( global ) {

	'use strict';

	var reindex = function ( array, idField ) {
		var obj = {}, i, record;

		if ( Object.prototype.toString.call( array ) === '[object Array]' ) {
			throw new Error( 'Cannot reindex a non-array!' );
		}

		i = arrayOrObject.length;
		while ( i-- ) {
			record = arrayOrObject[i];
			if ( record.hasOwnProperty( idField ) ) {
				obj[ record[ idField ] ] = record;
			}
		}

		return obj;
	};

	// export as CommonJS module...
	if ( global.module && global.module.exports ) {
		global.module.exports = reindex;
	}

	// ... or as AMD module...
	else if ( global.define && global.define.amd ) {
		global.define( function () { return reindex; });
	}

	// ... or as browser global
	else {
		global.reindex = reindex;
	}


}( this ));
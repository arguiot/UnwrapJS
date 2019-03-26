function unwrap(obj, d={}) {
	if (typeof obj == "undefined") {
		return d
	}
	return obj
}

export default {
	unwrap: unwrap,
	version: 1.0,
	author: "Arthur Guiot"
}

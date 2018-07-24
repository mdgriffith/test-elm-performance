
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function(offset, a) { return a << offset; }),
	shiftRightBy: F2(function(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function(offset, a) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightZfBy = _elm_lang$core$Native_Bitwise.shiftRightZfBy;
var _elm_lang$core$Bitwise$shiftRightBy = _elm_lang$core$Native_Bitwise.shiftRightBy;
var _elm_lang$core$Bitwise$shiftLeftBy = _elm_lang$core$Native_Bitwise.shiftLeftBy;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _Skinney$murmur3$UTF8$accumulate = F3(
	function (add, $char, _p0) {
		var _p1 = _p0;
		var _p3 = _p1._0;
		var _p2 = _p1._1;
		if (_p2.ctor === 'Nothing') {
			return (_elm_lang$core$Native_Utils.cmp($char, 128) < 0) ? {
				ctor: '_Tuple2',
				_0: A2(add, $char, _p3),
				_1: _elm_lang$core$Maybe$Nothing
			} : ((_elm_lang$core$Native_Utils.cmp($char, 2048) < 0) ? {
				ctor: '_Tuple2',
				_0: A2(
					add,
					128 | (63 & $char),
					A2(add, 192 | ($char >>> 6), _p3)),
				_1: _elm_lang$core$Maybe$Nothing
			} : (((_elm_lang$core$Native_Utils.cmp($char, 55296) < 0) || (_elm_lang$core$Native_Utils.cmp($char, 57344) > -1)) ? {
				ctor: '_Tuple2',
				_0: A2(
					add,
					128 | (63 & $char),
					A2(
						add,
						128 | (63 & ($char >>> 6)),
						A2(add, 224 | ($char >>> 12), _p3))),
				_1: _elm_lang$core$Maybe$Nothing
			} : {
				ctor: '_Tuple2',
				_0: _p3,
				_1: _elm_lang$core$Maybe$Just($char)
			}));
		} else {
			var combined = ((1023 & $char) | ((1023 & _p2._0) << 10)) + 65536;
			return {
				ctor: '_Tuple2',
				_0: A2(
					add,
					128 | (63 & combined),
					A2(
						add,
						128 | (63 & (combined >>> 6)),
						A2(
							add,
							128 | (63 & (combined >>> 12)),
							A2(add, 240 | (combined >>> 18), _p3)))),
				_1: _elm_lang$core$Maybe$Nothing
			};
		}
	});
var _Skinney$murmur3$UTF8$foldl = F3(
	function (op, acc, input) {
		var helper = F2(
			function ($char, acc) {
				return A3(
					_Skinney$murmur3$UTF8$accumulate,
					op,
					_elm_lang$core$Char$toCode($char),
					acc);
			});
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$String$foldl,
				helper,
				{ctor: '_Tuple2', _0: acc, _1: _elm_lang$core$Maybe$Nothing},
				input));
	});

var _Skinney$murmur3$Murmur3$mur = F2(
	function (c, h) {
		return 4294967295 & (((h & 65535) * c) + ((65535 & ((h >>> 16) * c)) << 16));
	});
var _Skinney$murmur3$Murmur3$step = function (acc) {
	var h1 = A2(_Skinney$murmur3$Murmur3$mur, 5, (acc >>> 19) | (acc << 13));
	return ((h1 & 65535) + 27492) + ((65535 & ((h1 >>> 16) + 58964)) << 16);
};
var _Skinney$murmur3$Murmur3$mix = F2(
	function (h1, h2) {
		var k1 = A2(_Skinney$murmur3$Murmur3$mur, 3432918353, h2);
		return h1 ^ A2(_Skinney$murmur3$Murmur3$mur, 461845907, (k1 >>> 17) | (k1 << 15));
	});
var _Skinney$murmur3$Murmur3$finalize = function (data) {
	var acc = (!_elm_lang$core$Native_Utils.eq(data.hash, 0)) ? A2(_Skinney$murmur3$Murmur3$mix, data.seed, data.hash) : data.seed;
	var h1 = acc ^ data.charsProcessed;
	var h2 = A2(_Skinney$murmur3$Murmur3$mur, 2246822507, h1 ^ (h1 >>> 16));
	var h3 = A2(_Skinney$murmur3$Murmur3$mur, 3266489909, h2 ^ (h2 >>> 13));
	return (h3 ^ (h3 >>> 16)) >>> 0;
};
var _Skinney$murmur3$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.hash | (c << data.shift);
		var _p0 = data.shift;
		if (_p0 === 24) {
			var newHash = _Skinney$murmur3$Murmur3$step(
				A2(_Skinney$murmur3$Murmur3$mix, data.seed, res));
			return {shift: 0, seed: newHash, hash: 0, charsProcessed: data.charsProcessed + 1};
		} else {
			return {shift: data.shift + 8, seed: data.seed, hash: res, charsProcessed: data.charsProcessed + 1};
		}
	});
var _Skinney$murmur3$Murmur3$HashData = F4(
	function (a, b, c, d) {
		return {shift: a, seed: b, hash: c, charsProcessed: d};
	});
var _Skinney$murmur3$Murmur3$hashString = F2(
	function (seed, str) {
		return _Skinney$murmur3$Murmur3$finalize(
			A3(
				_Skinney$murmur3$UTF8$foldl,
				_Skinney$murmur3$Murmur3$hashFold,
				A4(_Skinney$murmur3$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});

var _elm_lang$animation_frame$Native_AnimationFrame = function()
{

function create()
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
		};
	});
}

return {
	create: create
};

}();

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$animation_frame$AnimationFrame$rAF = _elm_lang$animation_frame$Native_AnimationFrame.create(
	{ctor: '_Tuple0'});
var _elm_lang$animation_frame$AnimationFrame$subscription = _elm_lang$core$Native_Platform.leaf('AnimationFrame');
var _elm_lang$animation_frame$AnimationFrame$State = F3(
	function (a, b, c) {
		return {subs: a, request: b, oldTime: c};
	});
var _elm_lang$animation_frame$AnimationFrame$init = _elm_lang$core$Task$succeed(
	A3(
		_elm_lang$animation_frame$AnimationFrame$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing,
		0));
var _elm_lang$animation_frame$AnimationFrame$onEffects = F3(
	function (router, subs, _p0) {
		var _p1 = _p0;
		var _p5 = _p1.request;
		var _p4 = _p1.oldTime;
		var _p2 = {ctor: '_Tuple2', _0: _p5, _1: subs};
		if (_p2._0.ctor === 'Nothing') {
			if (_p2._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(
					A3(
						_elm_lang$animation_frame$AnimationFrame$State,
						{ctor: '[]'},
						_elm_lang$core$Maybe$Nothing,
						_p4));
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (pid) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (time) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$animation_frame$AnimationFrame$State,
										subs,
										_elm_lang$core$Maybe$Just(pid),
										time));
							},
							_elm_lang$core$Time$now);
					},
					_elm_lang$core$Process$spawn(
						A2(
							_elm_lang$core$Task$andThen,
							_elm_lang$core$Platform$sendToSelf(router),
							_elm_lang$animation_frame$AnimationFrame$rAF)));
			}
		} else {
			if (_p2._1.ctor === '[]') {
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p3) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$animation_frame$AnimationFrame$State,
								{ctor: '[]'},
								_elm_lang$core$Maybe$Nothing,
								_p4));
					},
					_elm_lang$core$Process$kill(_p2._0._0));
			} else {
				return _elm_lang$core$Task$succeed(
					A3(_elm_lang$animation_frame$AnimationFrame$State, subs, _p5, _p4));
			}
		}
	});
var _elm_lang$animation_frame$AnimationFrame$onSelfMsg = F3(
	function (router, newTime, _p6) {
		var _p7 = _p6;
		var _p10 = _p7.subs;
		var diff = newTime - _p7.oldTime;
		var send = function (sub) {
			var _p8 = sub;
			if (_p8.ctor === 'Time') {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p8._0(newTime));
			} else {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p8._0(diff));
			}
		};
		return A2(
			_elm_lang$core$Task$andThen,
			function (pid) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p9) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$animation_frame$AnimationFrame$State,
								_p10,
								_elm_lang$core$Maybe$Just(pid),
								newTime));
					},
					_elm_lang$core$Task$sequence(
						A2(_elm_lang$core$List$map, send, _p10)));
			},
			_elm_lang$core$Process$spawn(
				A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Platform$sendToSelf(router),
					_elm_lang$animation_frame$AnimationFrame$rAF)));
	});
var _elm_lang$animation_frame$AnimationFrame$Diff = function (a) {
	return {ctor: 'Diff', _0: a};
};
var _elm_lang$animation_frame$AnimationFrame$diffs = function (tagger) {
	return _elm_lang$animation_frame$AnimationFrame$subscription(
		_elm_lang$animation_frame$AnimationFrame$Diff(tagger));
};
var _elm_lang$animation_frame$AnimationFrame$Time = function (a) {
	return {ctor: 'Time', _0: a};
};
var _elm_lang$animation_frame$AnimationFrame$times = function (tagger) {
	return _elm_lang$animation_frame$AnimationFrame$subscription(
		_elm_lang$animation_frame$AnimationFrame$Time(tagger));
};
var _elm_lang$animation_frame$AnimationFrame$subMap = F2(
	function (func, sub) {
		var _p11 = sub;
		if (_p11.ctor === 'Time') {
			return _elm_lang$animation_frame$AnimationFrame$Time(
				function (_p12) {
					return func(
						_p11._0(_p12));
				});
		} else {
			return _elm_lang$animation_frame$AnimationFrame$Diff(
				function (_p13) {
					return func(
						_p11._0(_p13));
				});
		}
	});
_elm_lang$core$Native_Platform.effectManagers['AnimationFrame'] = {pkg: 'elm-lang/animation-frame', init: _elm_lang$animation_frame$AnimationFrame$init, onEffects: _elm_lang$animation_frame$AnimationFrame$onEffects, onSelfMsg: _elm_lang$animation_frame$AnimationFrame$onSelfMsg, tag: 'sub', subMap: _elm_lang$animation_frame$AnimationFrame$subMap};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var normHue = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, normHue, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(normHue, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(normHue, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';
                    console.time('Build VDOM');
                    var nextNode = view(nextModel);
                    console.timeEnd('Build VDOM');

                    console.time('Diff');
                    var patches = diff(currNode, nextNode);
                    console.timeEnd('Diff');

                    console.time('Apply');
                    domNode = applyPatches(domNode, currNode, patches, eventNode);
                    console.timeEnd('Apply');

                    console.log('--');
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$html$Html_Keyed$node = _elm_lang$virtual_dom$VirtualDom$keyedNode;
var _elm_lang$html$Html_Keyed$ol = _elm_lang$html$Html_Keyed$node('ol');
var _elm_lang$html$Html_Keyed$ul = _elm_lang$html$Html_Keyed$node('ul');

var _elm_lang$html$Html_Lazy$lazy3 = _elm_lang$virtual_dom$VirtualDom$lazy3;
var _elm_lang$html$Html_Lazy$lazy2 = _elm_lang$virtual_dom$VirtualDom$lazy2;
var _elm_lang$html$Html_Lazy$lazy = _elm_lang$virtual_dom$VirtualDom$lazy;

var _rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier = function (identifier) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
		function (_p0) {
			return '';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('\\s+'),
			function (_p1) {
				return '-';
			},
			_elm_lang$core$String$trim(
				_elm_lang$core$Basics$toString(identifier))));
};
var _rtfeldman$elm_css_util$Css_Helpers$identifierToString = F2(
	function (name, identifier) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(name),
			_rtfeldman$elm_css_util$Css_Helpers$toCssIdentifier(identifier));
	});

var _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations = function (declarations) {
	dropEmptyDeclarations:
	while (true) {
		var _p0 = declarations;
		if (_p0.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			switch (_p0._0.ctor) {
				case 'StyleBlockDeclaration':
					var _p1 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0._2)) {
						var _v1 = _p1;
						declarations = _v1;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p1)
						};
					}
				case 'MediaRule':
					var _p4 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p2) {
							var _p3 = _p2;
							return _elm_lang$core$List$isEmpty(_p3._2);
						},
						_p0._0._1)) {
						var _v3 = _p4;
						declarations = _v3;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p4)
						};
					}
				case 'SupportsRule':
					var _p5 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v4 = _p5;
						declarations = _v4;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p5)
						};
					}
				case 'DocumentRule':
					return {
						ctor: '::',
						_0: _p0._0,
						_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p0._1)
					};
				case 'PageRule':
					var _p6 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v5 = _p6;
						declarations = _v5;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p6)
						};
					}
				case 'FontFace':
					var _p7 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v6 = _p7;
						declarations = _v6;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p7)
						};
					}
				case 'Keyframes':
					var _p8 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._1)) {
						var _v7 = _p8;
						declarations = _v7;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p8)
						};
					}
				case 'Viewport':
					var _p9 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v8 = _p9;
						declarations = _v8;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p9)
						};
					}
				case 'CounterStyle':
					var _p10 = _p0._1;
					if (_elm_lang$core$List$isEmpty(_p0._0._0)) {
						var _v9 = _p10;
						declarations = _v9;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p10)
						};
					}
				default:
					var _p13 = _p0._1;
					if (A2(
						_elm_lang$core$List$all,
						function (_p11) {
							var _p12 = _p11;
							return _elm_lang$core$List$isEmpty(_p12._1);
						},
						_p0._0._0)) {
						var _v11 = _p13;
						declarations = _v11;
						continue dropEmptyDeclarations;
					} else {
						return {
							ctor: '::',
							_0: _p0._0,
							_1: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p13)
						};
					}
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Structure$dropEmpty = function (_p14) {
	var _p15 = _p14;
	return {
		charset: _p15.charset,
		imports: _p15.imports,
		namespaces: _p15.namespaces,
		declarations: _rtfeldman$elm_css$Css_Structure$dropEmptyDeclarations(_p15.declarations)
	};
};
var _rtfeldman$elm_css$Css_Structure$concatMapLast = F2(
	function (update, list) {
		var _p16 = list;
		if (_p16.ctor === '[]') {
			return list;
		} else {
			if (_p16._1.ctor === '[]') {
				return update(_p16._0);
			} else {
				return {
					ctor: '::',
					_0: _p16._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$concatMapLast, update, _p16._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$mapLast = F2(
	function (update, list) {
		var _p17 = list;
		if (_p17.ctor === '[]') {
			return list;
		} else {
			if (_p17._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: update(_p17._0),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: _p17._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$mapLast, update, _p17._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$Property = F3(
	function (a, b, c) {
		return {important: a, key: b, value: c};
	});
var _rtfeldman$elm_css$Css_Structure$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, declarations: d};
	});
var _rtfeldman$elm_css$Css_Structure$MediaExpression = F2(
	function (a, b) {
		return {feature: a, value: b};
	});
var _rtfeldman$elm_css$Css_Structure$Compatible = {ctor: 'Compatible'};
var _rtfeldman$elm_css$Css_Structure$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _rtfeldman$elm_css$Css_Structure$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock = F2(
	function (update, declarations) {
		var _p18 = declarations;
		_v15_12:
		do {
			if (_p18.ctor === '[]') {
				return declarations;
			} else {
				if (_p18._1.ctor === '[]') {
					switch (_p18._0.ctor) {
						case 'StyleBlockDeclaration':
							return A2(
								_elm_lang$core$List$map,
								_rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration,
								update(_p18._0._0));
						case 'MediaRule':
							if (_p18._0._1.ctor === '::') {
								if (_p18._0._1._1.ctor === '[]') {
									return {
										ctor: '::',
										_0: A2(
											_rtfeldman$elm_css$Css_Structure$MediaRule,
											_p18._0._0,
											update(_p18._0._1._0)),
										_1: {ctor: '[]'}
									};
								} else {
									var _p19 = A2(
										_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock,
										update,
										{
											ctor: '::',
											_0: A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p18._0._0, _p18._0._1._1),
											_1: {ctor: '[]'}
										});
									if (((_p19.ctor === '::') && (_p19._0.ctor === 'MediaRule')) && (_p19._1.ctor === '[]')) {
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p19._0._0,
												{ctor: '::', _0: _p18._0._1._0, _1: _p19._0._1}),
											_1: {ctor: '[]'}
										};
									} else {
										return _p19;
									}
								}
							} else {
								break _v15_12;
							}
						case 'SupportsRule':
							return {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Css_Structure$SupportsRule,
									_p18._0._0,
									A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._0._1)),
								_1: {ctor: '[]'}
							};
						case 'DocumentRule':
							return A2(
								_elm_lang$core$List$map,
								A4(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p18._0._0, _p18._0._1, _p18._0._2, _p18._0._3),
								update(_p18._0._4));
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v15_12;
				}
			}
		} while(false);
		return {
			ctor: '::',
			_0: _p18._0,
			_1: A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, update, _p18._1)
		};
	});
var _rtfeldman$elm_css$Css_Structure$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$Css_Structure$withPropertyAppended = F2(
	function (property, _p20) {
		var _p21 = _p20;
		return A3(
			_rtfeldman$elm_css$Css_Structure$StyleBlock,
			_p21._0,
			_p21._1,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p21._2,
				{
					ctor: '::',
					_0: property,
					_1: {ctor: '[]'}
				}));
	});
var _rtfeldman$elm_css$Css_Structure$appendProperty = F2(
	function (property, declarations) {
		var _p22 = declarations;
		if (_p22.ctor === '[]') {
			return declarations;
		} else {
			if (_p22._1.ctor === '[]') {
				switch (_p22._0.ctor) {
					case 'StyleBlockDeclaration':
						return {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
								A2(_rtfeldman$elm_css$Css_Structure$withPropertyAppended, property, _p22._0._0)),
							_1: {ctor: '[]'}
						};
					case 'MediaRule':
						return {
							ctor: '::',
							_0: A2(
								_rtfeldman$elm_css$Css_Structure$MediaRule,
								_p22._0._0,
								A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$withPropertyAppended(property),
									_p22._0._1)),
							_1: {ctor: '[]'}
						};
					default:
						return declarations;
				}
			} else {
				return {
					ctor: '::',
					_0: _p22._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, _p22._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendToLastSelector = F2(
	function (f, styleBlock) {
		var _p23 = styleBlock;
		if (_p23._1.ctor === '[]') {
			var _p24 = _p23._0;
			return {
				ctor: '::',
				_0: A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p24,
					{ctor: '[]'},
					_p23._2),
				_1: {
					ctor: '::',
					_0: A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						f(_p24),
						{ctor: '[]'},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			};
		} else {
			var _p26 = _p23._1;
			var _p25 = _p23._0;
			var newFirst = f(_p25);
			var newRest = A2(_elm_lang$core$List$map, f, _p26);
			return {
				ctor: '::',
				_0: A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p25, _p26, _p23._2),
				_1: {
					ctor: '::',
					_0: A3(
						_rtfeldman$elm_css$Css_Structure$StyleBlock,
						newFirst,
						newRest,
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			};
		}
	});
var _rtfeldman$elm_css$Css_Structure$Speech = {ctor: 'Speech'};
var _rtfeldman$elm_css$Css_Structure$Screen = {ctor: 'Screen'};
var _rtfeldman$elm_css$Css_Structure$Print = {ctor: 'Print'};
var _rtfeldman$elm_css$Css_Structure$CustomQuery = function (a) {
	return {ctor: 'CustomQuery', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$NotQuery = F2(
	function (a, b) {
		return {ctor: 'NotQuery', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$OnlyQuery = F2(
	function (a, b) {
		return {ctor: 'OnlyQuery', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$AllQuery = function (a) {
	return {ctor: 'AllQuery', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Selector = F3(
	function (a, b, c) {
		return {ctor: 'Selector', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$Css_Structure$applyPseudoElement = F2(
	function (pseudo, _p27) {
		var _p28 = _p27;
		return A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			_p28._0,
			_p28._1,
			_elm_lang$core$Maybe$Just(pseudo));
	});
var _rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector = F2(
	function (pseudo, styleBlock) {
		return A2(
			_rtfeldman$elm_css$Css_Structure$appendToLastSelector,
			_rtfeldman$elm_css$Css_Structure$applyPseudoElement(pseudo),
			styleBlock);
	});
var _rtfeldman$elm_css$Css_Structure$CustomSelector = F2(
	function (a, b) {
		return {ctor: 'CustomSelector', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence = function (a) {
	return {ctor: 'UniversalSelectorSequence', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$TypeSelectorSequence = F2(
	function (a, b) {
		return {ctor: 'TypeSelectorSequence', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatable = F2(
	function (selector, sequence) {
		var _p29 = sequence;
		switch (_p29.ctor) {
			case 'TypeSelectorSequence':
				return A2(
					_rtfeldman$elm_css$Css_Structure$TypeSelectorSequence,
					_p29._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._1,
						{
							ctor: '::',
							_0: selector,
							_1: {ctor: '[]'}
						}));
			case 'UniversalSelectorSequence':
				return _rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._0,
						{
							ctor: '::',
							_0: selector,
							_1: {ctor: '[]'}
						}));
			default:
				return A2(
					_rtfeldman$elm_css$Css_Structure$CustomSelector,
					_p29._0,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_p29._1,
						{
							ctor: '::',
							_0: selector,
							_1: {ctor: '[]'}
						}));
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator = F2(
	function (selector, list) {
		var _p30 = list;
		if (_p30.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if ((_p30._0.ctor === '_Tuple2') && (_p30._1.ctor === '[]')) {
				return {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: _p30._0._0,
						_1: A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, selector, _p30._0._1)
					},
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: _p30._0,
					_1: A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, selector, _p30._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableSelector = F2(
	function (repeatableSimpleSelector, selector) {
		var _p31 = selector;
		if (_p31._1.ctor === '[]') {
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				A2(_rtfeldman$elm_css$Css_Structure$appendRepeatable, repeatableSimpleSelector, _p31._0),
				{ctor: '[]'},
				_p31._2);
		} else {
			return A3(
				_rtfeldman$elm_css$Css_Structure$Selector,
				_p31._0,
				A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableWithCombinator, repeatableSimpleSelector, _p31._1),
				_p31._2);
		}
	});
var _rtfeldman$elm_css$Css_Structure$extendLastSelector = F2(
	function (selector, declarations) {
		var _p32 = declarations;
		_v24_15:
		do {
			if (_p32.ctor === '[]') {
				return declarations;
			} else {
				if (_p32._1.ctor === '[]') {
					switch (_p32._0.ctor) {
						case 'StyleBlockDeclaration':
							if (_p32._0._0._1.ctor === '[]') {
								return {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
										A3(
											_rtfeldman$elm_css$Css_Structure$StyleBlock,
											A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._0._0),
											{ctor: '[]'},
											_p32._0._0._2)),
									_1: {ctor: '[]'}
								};
							} else {
								var newRest = A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
									_p32._0._0._1);
								return {
									ctor: '::',
									_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
										A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._0._0, newRest, _p32._0._0._2)),
									_1: {ctor: '[]'}
								};
							}
						case 'MediaRule':
							if (_p32._0._1.ctor === '::') {
								if (_p32._0._1._1.ctor === '[]') {
									if (_p32._0._1._0._1.ctor === '[]') {
										var newStyleBlock = A3(
											_rtfeldman$elm_css$Css_Structure$StyleBlock,
											A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._1._0._0),
											{ctor: '[]'},
											_p32._0._1._0._2);
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p32._0._0,
												{
													ctor: '::',
													_0: newStyleBlock,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										};
									} else {
										var newRest = A2(
											_rtfeldman$elm_css$Css_Structure$mapLast,
											_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
											_p32._0._1._0._1);
										var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._1._0._0, newRest, _p32._0._1._0._2);
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p32._0._0,
												{
													ctor: '::',
													_0: newStyleBlock,
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										};
									}
								} else {
									var _p33 = A2(
										_rtfeldman$elm_css$Css_Structure$extendLastSelector,
										selector,
										{
											ctor: '::',
											_0: A2(_rtfeldman$elm_css$Css_Structure$MediaRule, _p32._0._0, _p32._0._1._1),
											_1: {ctor: '[]'}
										});
									if (((_p33.ctor === '::') && (_p33._0.ctor === 'MediaRule')) && (_p33._1.ctor === '[]')) {
										return {
											ctor: '::',
											_0: A2(
												_rtfeldman$elm_css$Css_Structure$MediaRule,
												_p33._0._0,
												{ctor: '::', _0: _p32._0._1._0, _1: _p33._0._1}),
											_1: {ctor: '[]'}
										};
									} else {
										return _p33;
									}
								}
							} else {
								break _v24_15;
							}
						case 'SupportsRule':
							return {
								ctor: '::',
								_0: A2(
									_rtfeldman$elm_css$Css_Structure$SupportsRule,
									_p32._0._0,
									A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p32._0._1)),
								_1: {ctor: '[]'}
							};
						case 'DocumentRule':
							if (_p32._0._4._1.ctor === '[]') {
								var newStyleBlock = A3(
									_rtfeldman$elm_css$Css_Structure$StyleBlock,
									A2(_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector, selector, _p32._0._4._0),
									{ctor: '[]'},
									_p32._0._4._2);
								return {
									ctor: '::',
									_0: A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p32._0._0, _p32._0._1, _p32._0._2, _p32._0._3, newStyleBlock),
									_1: {ctor: '[]'}
								};
							} else {
								var newRest = A2(
									_rtfeldman$elm_css$Css_Structure$mapLast,
									_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
									_p32._0._4._1);
								var newStyleBlock = A3(_rtfeldman$elm_css$Css_Structure$StyleBlock, _p32._0._4._0, newRest, _p32._0._4._2);
								return {
									ctor: '::',
									_0: A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p32._0._0, _p32._0._1, _p32._0._2, _p32._0._3, newStyleBlock),
									_1: {ctor: '[]'}
								};
							}
						case 'PageRule':
							return declarations;
						case 'FontFace':
							return declarations;
						case 'Keyframes':
							return declarations;
						case 'Viewport':
							return declarations;
						case 'CounterStyle':
							return declarations;
						default:
							return declarations;
					}
				} else {
					break _v24_15;
				}
			}
		} while(false);
		return {
			ctor: '::',
			_0: _p32._0,
			_1: A2(_rtfeldman$elm_css$Css_Structure$extendLastSelector, selector, _p32._1)
		};
	});
var _rtfeldman$elm_css$Css_Structure$appendRepeatableToLastSelector = F2(
	function (selector, styleBlock) {
		return A2(
			_rtfeldman$elm_css$Css_Structure$appendToLastSelector,
			_rtfeldman$elm_css$Css_Structure$appendRepeatableSelector(selector),
			styleBlock);
	});
var _rtfeldman$elm_css$Css_Structure$PseudoClassSelector = function (a) {
	return {ctor: 'PseudoClassSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$IdSelector = function (a) {
	return {ctor: 'IdSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$ClassSelector = function (a) {
	return {ctor: 'ClassSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$TypeSelector = function (a) {
	return {ctor: 'TypeSelector', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$PseudoElement = function (a) {
	return {ctor: 'PseudoElement', _0: a};
};
var _rtfeldman$elm_css$Css_Structure$Descendant = {ctor: 'Descendant'};
var _rtfeldman$elm_css$Css_Structure$Child = {ctor: 'Child'};
var _rtfeldman$elm_css$Css_Structure$GeneralSibling = {ctor: 'GeneralSibling'};
var _rtfeldman$elm_css$Css_Structure$AdjacentSibling = {ctor: 'AdjacentSibling'};

var _rtfeldman$elm_css$Css_Preprocess$propertyToPair = function (property) {
	var value = property.important ? A2(_elm_lang$core$Basics_ops['++'], property.value, ' !important') : property.value;
	return {ctor: '_Tuple2', _0: property.key, _1: value};
};
var _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs = function (styles) {
	toPropertyPairs:
	while (true) {
		var _p0 = styles;
		if (_p0.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			switch (_p0._0.ctor) {
				case 'AppendProperty':
					return {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css_Preprocess$propertyToPair(_p0._0._0),
						_1: _rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1)
					};
				case 'ApplyStyles':
					return A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._0._0),
						_rtfeldman$elm_css$Css_Preprocess$toPropertyPairs(_p0._1));
				default:
					var _v1 = _p0._1;
					styles = _v1;
					continue toPropertyPairs;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet = function (_p1) {
	var _p2 = _p1;
	return _p2._0;
};
var _rtfeldman$elm_css$Css_Preprocess$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p3 = declaration;
		switch (_p3.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					mediaQueries,
					{
						ctor: '::',
						_0: _p3._0,
						_1: {ctor: '[]'}
					});
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p3._0),
					_p3._1);
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$SupportsRule,
					_p3._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess$toMediaRule(mediaQueries),
						_p3._1));
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p3._0, _p3._1, _p3._2, _p3._3, _p3._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$stylesheet = function (snippets) {
	return {
		charset: _elm_lang$core$Maybe$Nothing,
		imports: {ctor: '[]'},
		namespaces: {ctor: '[]'},
		snippets: snippets
	};
};
var _rtfeldman$elm_css$Css_Preprocess$Property = F4(
	function (a, b, c, d) {
		return {key: a, value: b, important: c, warnings: d};
	});
var _rtfeldman$elm_css$Css_Preprocess$Stylesheet = F4(
	function (a, b, c, d) {
		return {charset: a, imports: b, namespaces: c, snippets: d};
	});
var _rtfeldman$elm_css$Css_Preprocess$ApplyStyles = function (a) {
	return {ctor: 'ApplyStyles', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$WithMedia = F2(
	function (a, b) {
		return {ctor: 'WithMedia', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement = F2(
	function (a, b) {
		return {ctor: 'WithPseudoElement', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$NestSnippet = F2(
	function (a, b) {
		return {ctor: 'NestSnippet', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$ExtendSelector = F2(
	function (a, b) {
		return {ctor: 'ExtendSelector', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$AppendProperty = function (a) {
	return {ctor: 'AppendProperty', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$mapLastProperty = F2(
	function (update, style) {
		var _p4 = style;
		switch (_p4.ctor) {
			case 'AppendProperty':
				return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
					update(_p4._0));
			case 'ExtendSelector':
				return A2(
					_rtfeldman$elm_css$Css_Preprocess$ExtendSelector,
					_p4._0,
					A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p4._1));
			case 'NestSnippet':
				return style;
			case 'WithPseudoElement':
				return style;
			case 'WithMedia':
				return style;
			default:
				return _rtfeldman$elm_css$Css_Preprocess$ApplyStyles(
					A2(
						_rtfeldman$elm_css$Css_Structure$mapLast,
						_rtfeldman$elm_css$Css_Preprocess$mapLastProperty(update),
						_p4._0));
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty = F2(
	function (update, styles) {
		var _p5 = styles;
		if (_p5.ctor === '[]') {
			return styles;
		} else {
			if (_p5._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: A2(_rtfeldman$elm_css$Css_Preprocess$mapLastProperty, update, _p5._0),
					_1: {ctor: '[]'}
				};
			} else {
				return {
					ctor: '::',
					_0: _p5._0,
					_1: A2(_rtfeldman$elm_css$Css_Preprocess$mapAllLastProperty, update, _p5._1)
				};
			}
		}
	});
var _rtfeldman$elm_css$Css_Preprocess$Snippet = function (a) {
	return {ctor: 'Snippet', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$FontFeatureValues = function (a) {
	return {ctor: 'FontFeatureValues', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$CounterStyle = function (a) {
	return {ctor: 'CounterStyle', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$Viewport = function (a) {
	return {ctor: 'Viewport', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$Keyframes = F2(
	function (a, b) {
		return {ctor: 'Keyframes', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$FontFace = function (a) {
	return {ctor: 'FontFace', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$PageRule = F2(
	function (a, b) {
		return {ctor: 'PageRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$DocumentRule = F5(
	function (a, b, c, d, e) {
		return {ctor: 'DocumentRule', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _rtfeldman$elm_css$Css_Preprocess$SupportsRule = F2(
	function (a, b) {
		return {ctor: 'SupportsRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$MediaRule = F2(
	function (a, b) {
		return {ctor: 'MediaRule', _0: a, _1: b};
	});
var _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration = function (a) {
	return {ctor: 'StyleBlockDeclaration', _0: a};
};
var _rtfeldman$elm_css$Css_Preprocess$StyleBlock = F3(
	function (a, b, c) {
		return {ctor: 'StyleBlock', _0: a, _1: b, _2: c};
	});

var _rtfeldman$hex$Hex$toString = function (num) {
	return _elm_lang$core$String$fromList(
		(_elm_lang$core$Native_Utils.cmp(num, 0) < 0) ? {
			ctor: '::',
			_0: _elm_lang$core$Native_Utils.chr('-'),
			_1: A2(
				_rtfeldman$hex$Hex$unsafePositiveToDigits,
				{ctor: '[]'},
				_elm_lang$core$Basics$negate(num))
		} : A2(
			_rtfeldman$hex$Hex$unsafePositiveToDigits,
			{ctor: '[]'},
			num));
};
var _rtfeldman$hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(num, 16) < 0) {
				return {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(num),
					_1: digits
				};
			} else {
				var _v0 = {
					ctor: '::',
					_0: _rtfeldman$hex$Hex$unsafeToDigit(
						A2(_elm_lang$core$Basics_ops['%'], num, 16)),
					_1: digits
				},
					_v1 = (num / 16) | 0;
				digits = _v0;
				num = _v1;
				continue unsafePositiveToDigits;
			}
		}
	});
var _rtfeldman$hex$Hex$unsafeToDigit = function (num) {
	var _p0 = num;
	switch (_p0) {
		case 0:
			return _elm_lang$core$Native_Utils.chr('0');
		case 1:
			return _elm_lang$core$Native_Utils.chr('1');
		case 2:
			return _elm_lang$core$Native_Utils.chr('2');
		case 3:
			return _elm_lang$core$Native_Utils.chr('3');
		case 4:
			return _elm_lang$core$Native_Utils.chr('4');
		case 5:
			return _elm_lang$core$Native_Utils.chr('5');
		case 6:
			return _elm_lang$core$Native_Utils.chr('6');
		case 7:
			return _elm_lang$core$Native_Utils.chr('7');
		case 8:
			return _elm_lang$core$Native_Utils.chr('8');
		case 9:
			return _elm_lang$core$Native_Utils.chr('9');
		case 10:
			return _elm_lang$core$Native_Utils.chr('a');
		case 11:
			return _elm_lang$core$Native_Utils.chr('b');
		case 12:
			return _elm_lang$core$Native_Utils.chr('c');
		case 13:
			return _elm_lang$core$Native_Utils.chr('d');
		case 14:
			return _elm_lang$core$Native_Utils.chr('e');
		case 15:
			return _elm_lang$core$Native_Utils.chr('f');
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Hex',
				{
					start: {line: 138, column: 5},
					end: {line: 188, column: 84}
				},
				_p0)(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Tried to convert ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_rtfeldman$hex$Hex$toString(num),
						' to hexadecimal.')));
	}
};
var _rtfeldman$hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		var _p2 = chars;
		if (_p2.ctor === '[]') {
			return _elm_lang$core$Result$Ok(accumulated);
		} else {
			var recurse = function (additional) {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					position - 1,
					_p2._1,
					accumulated + (additional * Math.pow(16, position)));
			};
			var _p3 = _p2._0;
			switch (_p3.valueOf()) {
				case '0':
					return recurse(0);
				case '1':
					return recurse(1);
				case '2':
					return recurse(2);
				case '3':
					return recurse(3);
				case '4':
					return recurse(4);
				case '5':
					return recurse(5);
				case '6':
					return recurse(6);
				case '7':
					return recurse(7);
				case '8':
					return recurse(8);
				case '9':
					return recurse(9);
				case 'a':
					return recurse(10);
				case 'b':
					return recurse(11);
				case 'c':
					return recurse(12);
				case 'd':
					return recurse(13);
				case 'e':
					return recurse(14);
				case 'f':
					return recurse(15);
				default:
					return _elm_lang$core$Result$Err(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p3),
							' is not a valid hexadecimal character.'));
			}
		}
	});
var _rtfeldman$hex$Hex$fromString = function (str) {
	if (_elm_lang$core$String$isEmpty(str)) {
		return _elm_lang$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var formatError = function (err) {
			return A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(str),
					_1: {
						ctor: '::',
						_0: 'is not a valid hexadecimal string because',
						_1: {
							ctor: '::',
							_0: err,
							_1: {ctor: '[]'}
						}
					}
				});
		};
		var result = function () {
			if (A2(_elm_lang$core$String$startsWith, '-', str)) {
				var list = A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '[]'},
					_elm_lang$core$List$tail(
						_elm_lang$core$String$toList(str)));
				return A2(
					_elm_lang$core$Result$map,
					_elm_lang$core$Basics$negate,
					A3(
						_rtfeldman$hex$Hex$fromStringHelp,
						_elm_lang$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					_rtfeldman$hex$Hex$fromStringHelp,
					_elm_lang$core$String$length(str) - 1,
					_elm_lang$core$String$toList(str),
					0);
			}
		}();
		return A2(_elm_lang$core$Result$mapError, formatError, result);
	}
};

var _rtfeldman$elm_css$Css$stroke = {value: 'stroke', pointerEvents: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$painted = {value: 'painted', pointerEvents: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$visibleStroke = {value: 'visibleStroke', pointerEvents: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$visibleFill = {value: 'visibleFill', pointerEvents: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$visiblePainted = {value: 'visiblePainted', pointerEvents: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$manipulation = {value: 'manipulation', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$pinchZoom = {value: 'pinch-zoom', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panDown = {value: 'pan-down', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panUp = {value: 'pan-up', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panY = {value: 'pan-y', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panRight = {value: 'pan-right', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panLeft = {value: 'pan-left', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$panX = {value: 'pan-x', touchAction: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$stringsToValue = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				function (s) {
					return s;
				},
				list))
	};
};
var _rtfeldman$elm_css$Css$valuesOrNone = function (list) {
	return _elm_lang$core$List$isEmpty(list) ? {value: 'none'} : {
		value: A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.value;
				},
				list))
	};
};
var _rtfeldman$elm_css$Css$stringToInt = function (str) {
	return A2(
		_elm_lang$core$Result$withDefault,
		0,
		_elm_lang$core$String$toInt(str));
};
var _rtfeldman$elm_css$Css$numberToString = function (num) {
	return _elm_lang$core$Basics$toString(num + 0);
};
var _rtfeldman$elm_css$Css$numericalPercentageToString = function (value) {
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'%',
		_rtfeldman$elm_css$Css$numberToString(
			A2(
				F2(
					function (x, y) {
						return x * y;
					}),
				100,
				value)));
};
var _rtfeldman$elm_css$Css$pseudoElement = function (element) {
	return _rtfeldman$elm_css$Css_Preprocess$WithPseudoElement(
		_rtfeldman$elm_css$Css_Structure$PseudoElement(element));
};
var _rtfeldman$elm_css$Css$after = _rtfeldman$elm_css$Css$pseudoElement('after');
var _rtfeldman$elm_css$Css$before = _rtfeldman$elm_css$Css$pseudoElement('before');
var _rtfeldman$elm_css$Css$firstLetter = _rtfeldman$elm_css$Css$pseudoElement('first-letter');
var _rtfeldman$elm_css$Css$firstLine = _rtfeldman$elm_css$Css$pseudoElement('first-line');
var _rtfeldman$elm_css$Css$selection = _rtfeldman$elm_css$Css$pseudoElement('selection');
var _rtfeldman$elm_css$Css$pseudoClass = function ($class) {
	return _rtfeldman$elm_css$Css_Preprocess$ExtendSelector(
		_rtfeldman$elm_css$Css_Structure$PseudoClassSelector($class));
};
var _rtfeldman$elm_css$Css$active = _rtfeldman$elm_css$Css$pseudoClass('active');
var _rtfeldman$elm_css$Css$any = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'any(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$checked = _rtfeldman$elm_css$Css$pseudoClass('checked');
var _rtfeldman$elm_css$Css$disabled = _rtfeldman$elm_css$Css$pseudoClass('disabled');
var _rtfeldman$elm_css$Css$empty = _rtfeldman$elm_css$Css$pseudoClass('empty');
var _rtfeldman$elm_css$Css$enabled = _rtfeldman$elm_css$Css$pseudoClass('enabled');
var _rtfeldman$elm_css$Css$first = _rtfeldman$elm_css$Css$pseudoClass('first');
var _rtfeldman$elm_css$Css$firstChild = _rtfeldman$elm_css$Css$pseudoClass('first-child');
var _rtfeldman$elm_css$Css$firstOfType = _rtfeldman$elm_css$Css$pseudoClass('first-of-type');
var _rtfeldman$elm_css$Css$fullscreen = _rtfeldman$elm_css$Css$pseudoClass('fullscreen');
var _rtfeldman$elm_css$Css$focus = _rtfeldman$elm_css$Css$pseudoClass('focus');
var _rtfeldman$elm_css$Css$hover = _rtfeldman$elm_css$Css$pseudoClass('hover');
var _rtfeldman$elm_css$Css$visited = _rtfeldman$elm_css$Css$pseudoClass('visited');
var _rtfeldman$elm_css$Css$indeterminate = _rtfeldman$elm_css$Css$pseudoClass('indeterminate');
var _rtfeldman$elm_css$Css$invalid = _rtfeldman$elm_css$Css$pseudoClass('invalid');
var _rtfeldman$elm_css$Css$lang = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'lang(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$lastChild = _rtfeldman$elm_css$Css$pseudoClass('last-child');
var _rtfeldman$elm_css$Css$lastOfType = _rtfeldman$elm_css$Css$pseudoClass('last-of-type');
var _rtfeldman$elm_css$Css$link = _rtfeldman$elm_css$Css$pseudoClass('link');
var _rtfeldman$elm_css$Css$nthChild = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-child(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$nthLastChild = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-last-child(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$nthLastOfType = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-last-of-type(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$nthOfType = function (str) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'nth-of-type(',
			A2(_elm_lang$core$Basics_ops['++'], str, ')')));
};
var _rtfeldman$elm_css$Css$onlyChild = _rtfeldman$elm_css$Css$pseudoClass('only-child');
var _rtfeldman$elm_css$Css$onlyOfType = _rtfeldman$elm_css$Css$pseudoClass('only-of-type');
var _rtfeldman$elm_css$Css$optional = _rtfeldman$elm_css$Css$pseudoClass('optional');
var _rtfeldman$elm_css$Css$outOfRange = _rtfeldman$elm_css$Css$pseudoClass('out-of-range');
var _rtfeldman$elm_css$Css$readWrite = _rtfeldman$elm_css$Css$pseudoClass('read-write');
var _rtfeldman$elm_css$Css$required = _rtfeldman$elm_css$Css$pseudoClass('required');
var _rtfeldman$elm_css$Css$root = _rtfeldman$elm_css$Css$pseudoClass('root');
var _rtfeldman$elm_css$Css$scope = _rtfeldman$elm_css$Css$pseudoClass('scope');
var _rtfeldman$elm_css$Css$target = _rtfeldman$elm_css$Css$pseudoClass('target');
var _rtfeldman$elm_css$Css$valid = _rtfeldman$elm_css$Css$pseudoClass('valid');
var _rtfeldman$elm_css$Css$directionalityToString = function (directionality) {
	var _p0 = directionality;
	if (_p0.ctor === 'Ltr') {
		return 'ltr';
	} else {
		return 'rtl';
	}
};
var _rtfeldman$elm_css$Css$dir = function (directionality) {
	return _rtfeldman$elm_css$Css$pseudoClass(
		A2(
			_elm_lang$core$Basics_ops['++'],
			'dir(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$directionalityToString(directionality),
				')')));
};
var _rtfeldman$elm_css$Css$propertyWithWarnings = F3(
	function (warnings, key, value) {
		return _rtfeldman$elm_css$Css_Preprocess$AppendProperty(
			{key: key, value: value, important: false, warnings: warnings});
	});
var _rtfeldman$elm_css$Css$property = _rtfeldman$elm_css$Css$propertyWithWarnings(
	{ctor: '[]'});
var _rtfeldman$elm_css$Css$pointerEventsFill = A2(_rtfeldman$elm_css$Css$property, 'pointer-events', 'fill');
var _rtfeldman$elm_css$Css$pointerEventsAll = A2(_rtfeldman$elm_css$Css$property, 'pointer-events', 'all');
var _rtfeldman$elm_css$Css$batch = _rtfeldman$elm_css$Css_Preprocess$ApplyStyles;
var _rtfeldman$elm_css$Css$animationNames = function (identifiers) {
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css_util$Css_Helpers$identifierToString(''),
			identifiers));
	return A2(_rtfeldman$elm_css$Css$property, 'animation-name', value);
};
var _rtfeldman$elm_css$Css$animationName = function (identifier) {
	return _rtfeldman$elm_css$Css$animationNames(
		{
			ctor: '::',
			_0: identifier,
			_1: {ctor: '[]'}
		});
};
var _rtfeldman$elm_css$Css$preLine = {value: 'pre-line', whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$preWrap = {value: 'pre-wrap', whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$pre = {value: 'pre', whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$grabbing = {value: 'grabbing', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$grab = {value: 'grab', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$zoomOut = {value: 'zoom-out', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$zoomIn = {value: 'zoom-in', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$allScroll = {value: 'all-scroll', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$rowResize = {value: 'row-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$colResize = {value: 'col-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$nwseResize = {value: 'nwse-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$neswResize = {value: 'nesw-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$nsResize = {value: 'ns-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$ewResize = {value: 'ew-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$wResize = {value: 'w-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$swResize = {value: 'sw-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$seResize = {value: 'se-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$sResize = {value: 's-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$nwResize = {value: 'nw-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$neResize = {value: 'ne-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$nResize = {value: 'n-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$eResize = {value: 'e-resize', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$notAllowed = {value: 'not-allowed', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noDrop = {value: 'no-drop', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$move = {value: 'move', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$copy = {value: 'copy', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cursorAlias = {value: 'alias', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$verticalText = {value: 'vertical-text', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$text_ = {value: 'text', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cell = {value: 'cell', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$wait = {value: 'wait', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$progress = {value: 'progress', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$pointer = {value: 'pointer', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$help = {value: 'help', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$contextMenu = {value: 'context-menu', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$crosshair = {value: 'crosshair', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$default = {value: 'default', cursor: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fontWeight = function (_p1) {
	var _p2 = _p1;
	var _p3 = _p2.value;
	var validWeight = function (weight) {
		return (!_elm_lang$core$Native_Utils.eq(
			_p3,
			_elm_lang$core$Basics$toString(weight))) ? true : A2(
			_elm_lang$core$List$member,
			weight,
			A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return x * y;
					})(100),
				A2(_elm_lang$core$List$range, 1, 9)));
	};
	var warnings = validWeight(
		_rtfeldman$elm_css$Css$stringToInt(_p3)) ? {ctor: '[]'} : {
		ctor: '::',
		_0: A2(
			_elm_lang$core$Basics_ops['++'],
			'fontWeight ',
			A2(_elm_lang$core$Basics_ops['++'], _p3, ' is invalid. Valid weights are: 100, 200, 300, 400, 500, 600, 700, 800, 900. Please see https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values')),
		_1: {ctor: '[]'}
	};
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-weight', _p3);
};
var _rtfeldman$elm_css$Css$fontFeatureSettingsList = function (featureTagValues) {
	var warnings = _elm_lang$core$List$concat(
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.warnings;
			},
			featureTagValues));
	var value = A2(
		_elm_lang$core$String$join,
		', ',
		A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.value;
			},
			featureTagValues));
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'font-feature-settings', value);
};
var _rtfeldman$elm_css$Css$fontFeatureSettings = function (_p4) {
	var _p5 = _p4;
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, _p5.warnings, 'font-feature-settings', _p5.value);
};
var _rtfeldman$elm_css$Css$qt = function (str) {
	return _elm_lang$core$Basics$toString(str);
};
var _rtfeldman$elm_css$Css$fontFace = function (value) {
	return A2(_elm_lang$core$Basics_ops['++'], 'font-face ', value);
};
var _rtfeldman$elm_css$Css$src_ = function (value) {
	return _elm_lang$core$Basics$toString(value.value);
};
var _rtfeldman$elm_css$Css$color = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'color', c.value);
};
var _rtfeldman$elm_css$Css$backgroundColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'background-color', c.value);
};
var _rtfeldman$elm_css$Css$outlineColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'outline-color', c.value);
};
var _rtfeldman$elm_css$Css$borderColor4 = F4(
	function (c1, c2, c3, c4) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: c1.value,
				_1: {
					ctor: '::',
					_0: c2.value,
					_1: {
						ctor: '::',
						_0: c3.value,
						_1: {
							ctor: '::',
							_0: c4.value,
							_1: {ctor: '[]'}
						}
					}
				}
			});
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(
				_elm_lang$core$Basics_ops['++'],
				c2.warnings,
				A2(_elm_lang$core$Basics_ops['++'], c3.warnings, c4.warnings)));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor3 = F3(
	function (c1, c2, c3) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: c1.value,
				_1: {
					ctor: '::',
					_0: c2.value,
					_1: {
						ctor: '::',
						_0: c3.value,
						_1: {ctor: '[]'}
					}
				}
			});
		var warnings = A2(
			_elm_lang$core$Basics_ops['++'],
			c1.warnings,
			A2(_elm_lang$core$Basics_ops['++'], c2.warnings, c3.warnings));
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor2 = F2(
	function (c1, c2) {
		var value = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: c1.value,
				_1: {
					ctor: '::',
					_0: c2.value,
					_1: {ctor: '[]'}
				}
			});
		var warnings = A2(_elm_lang$core$Basics_ops['++'], c1.warnings, c2.warnings);
		return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, warnings, 'border-color', value);
	});
var _rtfeldman$elm_css$Css$borderColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBlockEndColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-end-color', c.value);
};
var _rtfeldman$elm_css$Css$borderTopColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-top-color', c.value);
};
var _rtfeldman$elm_css$Css$borderRightColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-right-color', c.value);
};
var _rtfeldman$elm_css$Css$borderLeftColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-left-color', c.value);
};
var _rtfeldman$elm_css$Css$borderInlineEndColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-end-color', c.value);
};
var _rtfeldman$elm_css$Css$borderInlineStartColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-inline-start-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBottomColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-bottom-color', c.value);
};
var _rtfeldman$elm_css$Css$borderBlockStartColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'border-block-start-color', c.value);
};
var _rtfeldman$elm_css$Css$featureTag2 = F2(
	function (tag, value) {
		var potentialWarnings = {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: !_elm_lang$core$Native_Utils.eq(
					_elm_lang$core$String$length(tag),
					4),
				_1: A2(
					_elm_lang$core$Basics_ops['++'],
					'Feature tags must be exactly 4 characters long. ',
					A2(_elm_lang$core$Basics_ops['++'], tag, ' is invalid.'))
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.cmp(value, 0) < 0,
					_1: A2(
						_elm_lang$core$Basics_ops['++'],
						'Feature values cannot be negative. ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(value),
							' is invalid.'))
				},
				_1: {ctor: '[]'}
			}
		};
		var warnings = A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$second,
			A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$first, potentialWarnings));
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(tag),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_elm_lang$core$Basics$toString(value))),
			featureTagValue: _rtfeldman$elm_css$Css_Structure$Compatible,
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css$featureTag = function (tag) {
	return A2(_rtfeldman$elm_css$Css$featureTag2, tag, 1);
};
var _rtfeldman$elm_css$Css$featureOff = 0;
var _rtfeldman$elm_css$Css$featureOn = 1;
var _rtfeldman$elm_css$Css$slashedZero = {value: 'slashed-zero', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$ordinal = {value: 'ordinal', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$stackedFractions = {value: 'stacked-fractions', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$diagonalFractions = {value: 'diagonal-fractions', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tabularNums = {value: 'tabular-nums', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$proportionalNums = {value: 'proportional-nums', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$oldstyleNums = {value: 'oldstyle-nums', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$liningNums = {value: 'lining-nums', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantNumeric: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noContextual = {value: 'no-contextual', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$contextual = {value: 'context', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noHistoricalLigatures = {value: 'no-historical-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$historicalLigatures = {value: 'historical-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noDiscretionaryLigatures = {value: 'no-discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$discretionaryLigatures = {value: 'discretionary-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noCommonLigatures = {value: 'no-common-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$commonLigatures = {value: 'common-ligatures', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantLigatures: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$titlingCaps = {value: 'titling-caps', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$unicase = {value: 'unicase', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$allPetiteCaps = {value: 'all-petite-caps', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$petiteCaps = {value: 'petite-caps', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$allSmallCaps = {value: 'all-small-caps', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$smallCaps = {value: 'small-caps', fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible, fontVariantCaps: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$bolder = {value: 'bolder', fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lighter = {value: 'lighter', fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$bold = {value: 'bold', fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$oblique = {value: 'oblique', fontStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$italic = {value: 'italic', fontStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$normal = {
	value: 'normal',
	warnings: {ctor: '[]'},
	fontStyle: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible,
	featureTagValue: _rtfeldman$elm_css$Css_Structure$Compatible,
	overflowWrap: _rtfeldman$elm_css$Css_Structure$Compatible,
	whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible
};
var _rtfeldman$elm_css$Css$larger = {value: 'larger', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$smaller = {value: 'smaller', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$xxLarge = {value: 'xx-large', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$xLarge = {value: 'x-large', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$large = {value: 'large', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$medium = {value: 'medium', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$small = {value: 'small', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$xSmall = {value: 'x-small', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$xxSmall = {value: 'xx-small', fontSize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fantasy = {value: 'fantasy', fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cursive = {value: 'cursive', fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$monospace = {value: 'monospace', fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$sansSerif = {value: 'sans-serif', fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$serif = {value: 'serif', fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$absolute = {value: 'absolute', position: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$relative = {value: 'relative', position: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$sticky = {value: 'sticky', position: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fixed = {value: 'fixed', position: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundAttachment: _rtfeldman$elm_css$Css_Structure$Compatible, tableLayout: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$static = {value: 'static', position: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fillAvailable = {value: 'fill-available', minMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fitContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'fit-content'});
var _rtfeldman$elm_css$Css$minContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'min-content'});
var _rtfeldman$elm_css$Css$maxContent = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$fillAvailable,
	{value: 'max-content'});
var _rtfeldman$elm_css$Css$displayFlex = A2(_rtfeldman$elm_css$Css$property, 'display', 'flex');
var _rtfeldman$elm_css$Css$textEmphasisColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'text-emphasis-color', c.value);
};
var _rtfeldman$elm_css$Css$textDecorationColor = function (c) {
	return A3(_rtfeldman$elm_css$Css$propertyWithWarnings, c.warnings, 'text-decoration-color', c.value);
};
var _rtfeldman$elm_css$Css$prop6 = F7(
	function (key, argA, argB, argC, argD, argE, argF) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {
								ctor: '::',
								_0: argD.value,
								_1: {
									ctor: '::',
									_0: argE.value,
									_1: {
										ctor: '::',
										_0: argF.value,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$boxShadow6 = _rtfeldman$elm_css$Css$prop6('box-shadow');
var _rtfeldman$elm_css$Css$prop5 = F6(
	function (key, argA, argB, argC, argD, argE) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {
								ctor: '::',
								_0: argD.value,
								_1: {
									ctor: '::',
									_0: argE.value,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$boxShadow5 = _rtfeldman$elm_css$Css$prop5('box-shadow');
var _rtfeldman$elm_css$Css$prop4 = F5(
	function (key, argA, argB, argC, argD) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {
								ctor: '::',
								_0: argD.value,
								_1: {ctor: '[]'}
							}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$textShadow4 = _rtfeldman$elm_css$Css$prop4('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow4 = _rtfeldman$elm_css$Css$prop4('box-shadow');
var _rtfeldman$elm_css$Css$padding4 = _rtfeldman$elm_css$Css$prop4('padding');
var _rtfeldman$elm_css$Css$margin4 = _rtfeldman$elm_css$Css$prop4('margin');
var _rtfeldman$elm_css$Css$borderImageOutset4 = _rtfeldman$elm_css$Css$prop4('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth4 = _rtfeldman$elm_css$Css$prop4('border-image-width');
var _rtfeldman$elm_css$Css$borderWidth4 = _rtfeldman$elm_css$Css$prop4('border-width');
var _rtfeldman$elm_css$Css$borderRadius4 = _rtfeldman$elm_css$Css$prop4('border-radius');
var _rtfeldman$elm_css$Css$prop3 = F4(
	function (key, argA, argB, argC) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {
							ctor: '::',
							_0: argC.value,
							_1: {ctor: '[]'}
						}
					}
				}));
	});
var _rtfeldman$elm_css$Css$textShadow3 = _rtfeldman$elm_css$Css$prop3('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow3 = _rtfeldman$elm_css$Css$prop3('box-shadow');
var _rtfeldman$elm_css$Css$textIndent3 = _rtfeldman$elm_css$Css$prop3('text-indent');
var _rtfeldman$elm_css$Css$padding3 = _rtfeldman$elm_css$Css$prop3('padding');
var _rtfeldman$elm_css$Css$margin3 = _rtfeldman$elm_css$Css$prop3('margin');
var _rtfeldman$elm_css$Css$border3 = _rtfeldman$elm_css$Css$prop3('border');
var _rtfeldman$elm_css$Css$borderTop3 = _rtfeldman$elm_css$Css$prop3('border-top');
var _rtfeldman$elm_css$Css$borderBottom3 = _rtfeldman$elm_css$Css$prop3('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft3 = _rtfeldman$elm_css$Css$prop3('border-left');
var _rtfeldman$elm_css$Css$borderRight3 = _rtfeldman$elm_css$Css$prop3('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart3 = _rtfeldman$elm_css$Css$prop3('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd3 = _rtfeldman$elm_css$Css$prop3('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset3 = _rtfeldman$elm_css$Css$prop3('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth3 = _rtfeldman$elm_css$Css$prop3('border-image-width');
var _rtfeldman$elm_css$Css$borderWidth3 = _rtfeldman$elm_css$Css$prop3('border-width');
var _rtfeldman$elm_css$Css$borderRadius3 = _rtfeldman$elm_css$Css$prop3('border-radius');
var _rtfeldman$elm_css$Css$outline3 = _rtfeldman$elm_css$Css$prop3('outline');
var _rtfeldman$elm_css$Css$fontVariant3 = _rtfeldman$elm_css$Css$prop3('font-variant');
var _rtfeldman$elm_css$Css$fontVariantNumeric3 = _rtfeldman$elm_css$Css$prop3('font-variant-numeric');
var _rtfeldman$elm_css$Css$textDecoration3 = _rtfeldman$elm_css$Css$prop3('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations3 = function (_p6) {
	return A2(
		_rtfeldman$elm_css$Css$prop3,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p6));
};
var _rtfeldman$elm_css$Css$prop2 = F3(
	function (key, argA, argB) {
		return A2(
			_rtfeldman$elm_css$Css$property,
			key,
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: argA.value,
					_1: {
						ctor: '::',
						_0: argB.value,
						_1: {ctor: '[]'}
					}
				}));
	});
var _rtfeldman$elm_css$Css$textShadow2 = _rtfeldman$elm_css$Css$prop2('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow2 = _rtfeldman$elm_css$Css$prop2('box-shadow');
var _rtfeldman$elm_css$Css$textIndent2 = _rtfeldman$elm_css$Css$prop2('text-indent');
var _rtfeldman$elm_css$Css$padding2 = _rtfeldman$elm_css$Css$prop2('padding');
var _rtfeldman$elm_css$Css$margin2 = _rtfeldman$elm_css$Css$prop2('margin');
var _rtfeldman$elm_css$Css$border2 = _rtfeldman$elm_css$Css$prop2('border');
var _rtfeldman$elm_css$Css$borderTop2 = _rtfeldman$elm_css$Css$prop2('border-top');
var _rtfeldman$elm_css$Css$borderBottom2 = _rtfeldman$elm_css$Css$prop2('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft2 = _rtfeldman$elm_css$Css$prop2('border-left');
var _rtfeldman$elm_css$Css$borderRight2 = _rtfeldman$elm_css$Css$prop2('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart2 = _rtfeldman$elm_css$Css$prop2('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd2 = _rtfeldman$elm_css$Css$prop2('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset2 = _rtfeldman$elm_css$Css$prop2('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth2 = _rtfeldman$elm_css$Css$prop2('border-image-width');
var _rtfeldman$elm_css$Css$borderWidth2 = _rtfeldman$elm_css$Css$prop2('border-width');
var _rtfeldman$elm_css$Css$borderTopWidth2 = _rtfeldman$elm_css$Css$prop2('border-top-width');
var _rtfeldman$elm_css$Css$borderBottomLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-left-radius');
var _rtfeldman$elm_css$Css$borderBottomRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-bottom-right-radius');
var _rtfeldman$elm_css$Css$borderTopLeftRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-left-radius');
var _rtfeldman$elm_css$Css$borderTopRightRadius2 = _rtfeldman$elm_css$Css$prop2('border-top-right-radius');
var _rtfeldman$elm_css$Css$borderRadius2 = _rtfeldman$elm_css$Css$prop2('border-radius');
var _rtfeldman$elm_css$Css$borderSpacing2 = _rtfeldman$elm_css$Css$prop2('border-spacing');
var _rtfeldman$elm_css$Css$backgroundRepeat2 = _rtfeldman$elm_css$Css$prop2('background-repeat');
var _rtfeldman$elm_css$Css$backgroundPosition2 = _rtfeldman$elm_css$Css$prop2('background-position');
var _rtfeldman$elm_css$Css$backgroundSize2 = _rtfeldman$elm_css$Css$prop2('background-size');
var _rtfeldman$elm_css$Css$fontVariant2 = _rtfeldman$elm_css$Css$prop2('font-variant');
var _rtfeldman$elm_css$Css$fontVariantNumeric2 = _rtfeldman$elm_css$Css$prop2('font-variant-numeric');
var _rtfeldman$elm_css$Css$textDecoration2 = _rtfeldman$elm_css$Css$prop2('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations2 = function (_p7) {
	return A2(
		_rtfeldman$elm_css$Css$prop2,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p7));
};
var _rtfeldman$elm_css$Css$prop1 = F2(
	function (key, arg) {
		return A2(_rtfeldman$elm_css$Css$property, key, arg.value);
	});
var _rtfeldman$elm_css$Css$textRendering = _rtfeldman$elm_css$Css$prop1('text-rendering');
var _rtfeldman$elm_css$Css$textOrientation = _rtfeldman$elm_css$Css$prop1('text-orientation');
var _rtfeldman$elm_css$Css$textOverflow = _rtfeldman$elm_css$Css$prop1('text-overflow');
var _rtfeldman$elm_css$Css$textShadow = _rtfeldman$elm_css$Css$prop1('text-shadow');
var _rtfeldman$elm_css$Css$boxShadow = _rtfeldman$elm_css$Css$prop1('box-shadow');
var _rtfeldman$elm_css$Css$textIndent = _rtfeldman$elm_css$Css$prop1('text-indent');
var _rtfeldman$elm_css$Css$textTransform = _rtfeldman$elm_css$Css$prop1('text-transform');
var _rtfeldman$elm_css$Css$display = _rtfeldman$elm_css$Css$prop1('display');
var _rtfeldman$elm_css$Css$opacity = _rtfeldman$elm_css$Css$prop1('opacity');
var _rtfeldman$elm_css$Css$width = _rtfeldman$elm_css$Css$prop1('width');
var _rtfeldman$elm_css$Css$maxWidth = _rtfeldman$elm_css$Css$prop1('max-width');
var _rtfeldman$elm_css$Css$minWidth = _rtfeldman$elm_css$Css$prop1('min-width');
var _rtfeldman$elm_css$Css$height = _rtfeldman$elm_css$Css$prop1('height');
var _rtfeldman$elm_css$Css$minHeight = _rtfeldman$elm_css$Css$prop1('min-height');
var _rtfeldman$elm_css$Css$maxHeight = _rtfeldman$elm_css$Css$prop1('max-height');
var _rtfeldman$elm_css$Css$padding = _rtfeldman$elm_css$Css$prop1('padding');
var _rtfeldman$elm_css$Css$paddingBlockStart = _rtfeldman$elm_css$Css$prop1('padding-block-start');
var _rtfeldman$elm_css$Css$paddingBlockEnd = _rtfeldman$elm_css$Css$prop1('padding-block-end');
var _rtfeldman$elm_css$Css$paddingInlineStart = _rtfeldman$elm_css$Css$prop1('padding-inline-start');
var _rtfeldman$elm_css$Css$paddingInlineEnd = _rtfeldman$elm_css$Css$prop1('padding-inline-end');
var _rtfeldman$elm_css$Css$paddingTop = _rtfeldman$elm_css$Css$prop1('padding-top');
var _rtfeldman$elm_css$Css$paddingBottom = _rtfeldman$elm_css$Css$prop1('padding-bottom');
var _rtfeldman$elm_css$Css$paddingRight = _rtfeldman$elm_css$Css$prop1('padding-right');
var _rtfeldman$elm_css$Css$paddingLeft = _rtfeldman$elm_css$Css$prop1('padding-left');
var _rtfeldman$elm_css$Css$margin = _rtfeldman$elm_css$Css$prop1('margin');
var _rtfeldman$elm_css$Css$marginTop = _rtfeldman$elm_css$Css$prop1('margin-top');
var _rtfeldman$elm_css$Css$marginBottom = _rtfeldman$elm_css$Css$prop1('margin-bottom');
var _rtfeldman$elm_css$Css$marginRight = _rtfeldman$elm_css$Css$prop1('margin-right');
var _rtfeldman$elm_css$Css$marginLeft = _rtfeldman$elm_css$Css$prop1('margin-left');
var _rtfeldman$elm_css$Css$marginBlockStart = _rtfeldman$elm_css$Css$prop1('margin-block-start');
var _rtfeldman$elm_css$Css$marginBlockEnd = _rtfeldman$elm_css$Css$prop1('margin-block-end');
var _rtfeldman$elm_css$Css$marginInlineStart = _rtfeldman$elm_css$Css$prop1('margin-inline-start');
var _rtfeldman$elm_css$Css$marginInlineEnd = _rtfeldman$elm_css$Css$prop1('margin-inline-end');
var _rtfeldman$elm_css$Css$top = _rtfeldman$elm_css$Css$prop1('top');
var _rtfeldman$elm_css$Css$bottom = _rtfeldman$elm_css$Css$prop1('bottom');
var _rtfeldman$elm_css$Css$left = _rtfeldman$elm_css$Css$prop1('left');
var _rtfeldman$elm_css$Css$right = _rtfeldman$elm_css$Css$prop1('right');
var _rtfeldman$elm_css$Css$border = _rtfeldman$elm_css$Css$prop1('border');
var _rtfeldman$elm_css$Css$borderTop = _rtfeldman$elm_css$Css$prop1('border-top');
var _rtfeldman$elm_css$Css$borderBottom = _rtfeldman$elm_css$Css$prop1('border-bottom');
var _rtfeldman$elm_css$Css$borderLeft = _rtfeldman$elm_css$Css$prop1('border-left');
var _rtfeldman$elm_css$Css$borderRight = _rtfeldman$elm_css$Css$prop1('border-right');
var _rtfeldman$elm_css$Css$borderBlockStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
var _rtfeldman$elm_css$Css$borderBlockEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
var _rtfeldman$elm_css$Css$borderInlineStart = _rtfeldman$elm_css$Css$prop1('border-block-start');
var _rtfeldman$elm_css$Css$borderInlineEnd = _rtfeldman$elm_css$Css$prop1('border-block-end');
var _rtfeldman$elm_css$Css$borderImageOutset = _rtfeldman$elm_css$Css$prop1('border-image-outset');
var _rtfeldman$elm_css$Css$borderImageWidth = _rtfeldman$elm_css$Css$prop1('border-image-width');
var _rtfeldman$elm_css$Css$borderBlockEndStyle = _rtfeldman$elm_css$Css$prop1('border-block-end-style');
var _rtfeldman$elm_css$Css$borderBlockStartStyle = _rtfeldman$elm_css$Css$prop1('border-block-start-style');
var _rtfeldman$elm_css$Css$borderInlineEndStyle = _rtfeldman$elm_css$Css$prop1('border-inline-end-style');
var _rtfeldman$elm_css$Css$borderBottomStyle = _rtfeldman$elm_css$Css$prop1('border-bottom-style');
var _rtfeldman$elm_css$Css$borderInlineStartStyle = _rtfeldman$elm_css$Css$prop1('border-inline-start-style');
var _rtfeldman$elm_css$Css$borderLeftStyle = _rtfeldman$elm_css$Css$prop1('border-left-style');
var _rtfeldman$elm_css$Css$borderRightStyle = _rtfeldman$elm_css$Css$prop1('border-right-style');
var _rtfeldman$elm_css$Css$borderTopStyle = _rtfeldman$elm_css$Css$prop1('border-top-style');
var _rtfeldman$elm_css$Css$borderStyle = _rtfeldman$elm_css$Css$prop1('border-style');
var _rtfeldman$elm_css$Css$borderCollapse = _rtfeldman$elm_css$Css$prop1('border-collapse');
var _rtfeldman$elm_css$Css$borderWidth = _rtfeldman$elm_css$Css$prop1('border-width');
var _rtfeldman$elm_css$Css$borderBottomWidth = _rtfeldman$elm_css$Css$prop1('border-bottom-width');
var _rtfeldman$elm_css$Css$borderInlineEndWidth = _rtfeldman$elm_css$Css$prop1('border-inline-end-width');
var _rtfeldman$elm_css$Css$borderLeftWidth = _rtfeldman$elm_css$Css$prop1('border-left-width');
var _rtfeldman$elm_css$Css$borderRightWidth = _rtfeldman$elm_css$Css$prop1('border-right-width');
var _rtfeldman$elm_css$Css$borderTopWidth = _rtfeldman$elm_css$Css$prop1('border-top-width');
var _rtfeldman$elm_css$Css$borderBottomLeftRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-left-radius');
var _rtfeldman$elm_css$Css$borderBottomRightRadius = _rtfeldman$elm_css$Css$prop1('border-bottom-right-radius');
var _rtfeldman$elm_css$Css$borderTopLeftRadius = _rtfeldman$elm_css$Css$prop1('border-top-left-radius');
var _rtfeldman$elm_css$Css$borderTopRightRadius = _rtfeldman$elm_css$Css$prop1('border-top-right-radius');
var _rtfeldman$elm_css$Css$borderRadius = _rtfeldman$elm_css$Css$prop1('border-radius');
var _rtfeldman$elm_css$Css$borderSpacing = _rtfeldman$elm_css$Css$prop1('border-spacing');
var _rtfeldman$elm_css$Css$outline = _rtfeldman$elm_css$Css$prop1('outline');
var _rtfeldman$elm_css$Css$outlineWidth = _rtfeldman$elm_css$Css$prop1('outline-width');
var _rtfeldman$elm_css$Css$outlineStyle = _rtfeldman$elm_css$Css$prop1('outline-style');
var _rtfeldman$elm_css$Css$outlineOffset = _rtfeldman$elm_css$Css$prop1('outline-offset');
var _rtfeldman$elm_css$Css$resize = _rtfeldman$elm_css$Css$prop1('resize');
var _rtfeldman$elm_css$Css$fill = _rtfeldman$elm_css$Css$prop1('fill');
var _rtfeldman$elm_css$Css$visibility = _rtfeldman$elm_css$Css$prop1('visibility');
var _rtfeldman$elm_css$Css$overflow = _rtfeldman$elm_css$Css$prop1('overflow');
var _rtfeldman$elm_css$Css$overflowX = _rtfeldman$elm_css$Css$prop1('overflow-x');
var _rtfeldman$elm_css$Css$overflowY = _rtfeldman$elm_css$Css$prop1('overflow-y');
var _rtfeldman$elm_css$Css$overflowWrap = _rtfeldman$elm_css$Css$prop1('overflow-wrap');
var _rtfeldman$elm_css$Css$whiteSpace = _rtfeldman$elm_css$Css$prop1('white-space');
var _rtfeldman$elm_css$Css$backgroundRepeat = _rtfeldman$elm_css$Css$prop1('background-repeat');
var _rtfeldman$elm_css$Css$backgroundAttachment = _rtfeldman$elm_css$Css$prop1('background-attachment');
var _rtfeldman$elm_css$Css$backgroundClip = _rtfeldman$elm_css$Css$prop1('background-clip');
var _rtfeldman$elm_css$Css$backgroundOrigin = _rtfeldman$elm_css$Css$prop1('background-origin');
var _rtfeldman$elm_css$Css$backgroundImage = _rtfeldman$elm_css$Css$prop1('background-image');
var _rtfeldman$elm_css$Css$backgroundSize = _rtfeldman$elm_css$Css$prop1('background-size');
var _rtfeldman$elm_css$Css$lineHeight = _rtfeldman$elm_css$Css$prop1('line-height');
var _rtfeldman$elm_css$Css$letterSpacing = _rtfeldman$elm_css$Css$prop1('letter-spacing');
var _rtfeldman$elm_css$Css$fontFamily = _rtfeldman$elm_css$Css$prop1('font-family');
var _rtfeldman$elm_css$Css$fontFamilies = function (_p8) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'font-family',
		_rtfeldman$elm_css$Css$stringsToValue(_p8));
};
var _rtfeldman$elm_css$Css$fontSize = _rtfeldman$elm_css$Css$prop1('font-size');
var _rtfeldman$elm_css$Css$fontStyle = _rtfeldman$elm_css$Css$prop1('font-style');
var _rtfeldman$elm_css$Css$fontVariant = _rtfeldman$elm_css$Css$prop1('font-variant');
var _rtfeldman$elm_css$Css$fontVariantLigatures = _rtfeldman$elm_css$Css$prop1('font-variant-ligatures');
var _rtfeldman$elm_css$Css$fontVariantCaps = _rtfeldman$elm_css$Css$prop1('font-variant-caps');
var _rtfeldman$elm_css$Css$fontVariantNumeric = _rtfeldman$elm_css$Css$prop1('font-variant-numeric');
var _rtfeldman$elm_css$Css$fontVariantNumerics = function (_p9) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'font-variant-numeric',
		_rtfeldman$elm_css$Css$valuesOrNone(_p9));
};
var _rtfeldman$elm_css$Css$cursor = _rtfeldman$elm_css$Css$prop1('cursor');
var _rtfeldman$elm_css$Css$textDecoration = _rtfeldman$elm_css$Css$prop1('text-decoration');
var _rtfeldman$elm_css$Css$textDecorations = function (_p10) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'text-decoration',
		_rtfeldman$elm_css$Css$valuesOrNone(_p10));
};
var _rtfeldman$elm_css$Css$textDecorationLine = _rtfeldman$elm_css$Css$prop1('text-decoration-line');
var _rtfeldman$elm_css$Css$textDecorationLines = function (_p11) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'text-decoration-line',
		_rtfeldman$elm_css$Css$valuesOrNone(_p11));
};
var _rtfeldman$elm_css$Css$textDecorationStyle = _rtfeldman$elm_css$Css$prop1('text-decoration-style');
var _rtfeldman$elm_css$Css$zIndex = _rtfeldman$elm_css$Css$prop1('z-index');
var _rtfeldman$elm_css$Css$touchAction = _rtfeldman$elm_css$Css$prop1('touch-action');
var _rtfeldman$elm_css$Css$tableLayout = _rtfeldman$elm_css$Css$prop1('table-layout');
var _rtfeldman$elm_css$Css$pointerEvents = _rtfeldman$elm_css$Css$prop1('pointer-events');
var _rtfeldman$elm_css$Css$position = _rtfeldman$elm_css$Css$prop1('position');
var _rtfeldman$elm_css$Css$textBottom = _rtfeldman$elm_css$Css$prop1('text-bottom');
var _rtfeldman$elm_css$Css$textTop = _rtfeldman$elm_css$Css$prop1('text-top');
var _rtfeldman$elm_css$Css$super = _rtfeldman$elm_css$Css$prop1('super');
var _rtfeldman$elm_css$Css$sub = _rtfeldman$elm_css$Css$prop1('sub');
var _rtfeldman$elm_css$Css$baseline = _rtfeldman$elm_css$Css$prop1('baseline');
var _rtfeldman$elm_css$Css$middle = _rtfeldman$elm_css$Css$prop1('middle');
var _rtfeldman$elm_css$Css$noWrap = {value: 'nowrap', whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible, flexWrap: _rtfeldman$elm_css$Css_Structure$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$auto = {value: 'auto', cursor: _rtfeldman$elm_css$Css_Structure$Compatible, flexBasis: _rtfeldman$elm_css$Css_Structure$Compatible, overflow: _rtfeldman$elm_css$Css_Structure$Compatible, textRendering: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible, alignItemsOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible, justifyContentOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, intOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, pointerEvents: _rtfeldman$elm_css$Css_Structure$Compatible, touchAction: _rtfeldman$elm_css$Css_Structure$Compatible, tableLayout: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$none = {value: 'none', cursor: _rtfeldman$elm_css$Css_Structure$Compatible, none: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNone: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible, textDecorationLine: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible, display: _rtfeldman$elm_css$Css_Structure$Compatible, outline: _rtfeldman$elm_css$Css_Structure$Compatible, pointerEvents: _rtfeldman$elm_css$Css_Structure$Compatible, resize: _rtfeldman$elm_css$Css_Structure$Compatible, transform: _rtfeldman$elm_css$Css_Structure$Compatible, borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundImage: _rtfeldman$elm_css$Css_Structure$Compatible, textTransform: _rtfeldman$elm_css$Css_Structure$Compatible, touchAction: _rtfeldman$elm_css$Css_Structure$Compatible, updateFrequency: _rtfeldman$elm_css$Css_Structure$Compatible, blockAxisOverflow: _rtfeldman$elm_css$Css_Structure$Compatible, inlineAxisOverflow: _rtfeldman$elm_css$Css_Structure$Compatible, pointerDevice: _rtfeldman$elm_css$Css_Structure$Compatible, hoverCapability: _rtfeldman$elm_css$Css_Structure$Compatible, scriptingSupport: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inlineListItem = {value: 'inline-list-item', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$listItem = {value: 'list-item', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableFooterGroup = {value: 'table-footer-group', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableHeaderGroup = {value: 'table-header-group', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableColumnGroup = {value: 'table-column-group', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableRowGroup = {value: 'table-row-group', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableCaption = {value: 'table-caption', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableColumn = {value: 'table-column', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableCell = {value: 'table-cell', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$tableRow = {value: 'table-row', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inlineTable = {value: 'inline-table', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$table = {value: 'table', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inline = {value: 'inline', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inlineFlex = {value: 'inline-flex', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inlineBlock = {value: 'inline-block', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$block = {value: 'block', display: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toTopLeft = {value: 'to top left', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toLeft = {value: 'to left', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toBottomLeft = {value: 'to bottom left', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toBottom = {value: 'to bottom', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toBottomRight = {value: 'to bottom right', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toRight = {value: 'to right', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toTopRight = {value: 'to top right', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$toTop = {value: 'to top', angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$stop2 = F2(
	function (c, len) {
		return {
			ctor: '_Tuple2',
			_0: c,
			_1: _elm_lang$core$Maybe$Just(len)
		};
	});
var _rtfeldman$elm_css$Css$stop = function (c) {
	return {ctor: '_Tuple2', _0: c, _1: _elm_lang$core$Maybe$Nothing};
};
var _rtfeldman$elm_css$Css$collectStops = _elm_lang$core$List$map(
	function (_p12) {
		var _p13 = _p12;
		return A2(
			_elm_lang$core$String$append,
			_p13._0.value,
			A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(
					_elm_lang$core$Maybe$map,
					function (_p14) {
						return A2(
							_elm_lang$core$String$cons,
							_elm_lang$core$Native_Utils.chr(' '),
							function (_) {
								return _.value;
							}(_p14));
					},
					_p13._1)));
	});
var _rtfeldman$elm_css$Css$local = {value: 'local', backgroundAttachment: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$noRepeat = {value: 'no-repeat', backgroundRepeat: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$round = {value: 'round', backgroundRepeat: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$space = {value: 'space', backgroundRepeat: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$repeat = {value: 'repeat', backgroundRepeat: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$repeatY = {value: 'repeat-y', backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$repeatX = {value: 'repeat-x', backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lineThrough = {value: 'line-through', textDecorationLine: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$overline = {value: 'overline', textDecorationLine: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$underline = {value: 'underline', textDecorationLine: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$row = {value: 'row', flexDirection: _rtfeldman$elm_css$Css_Structure$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$rowReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'row-reverse'});
var _rtfeldman$elm_css$Css$column = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'column'});
var _rtfeldman$elm_css$Css$columnReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$row,
	{value: 'column-reverse'});
var _rtfeldman$elm_css$Css$stretch = _rtfeldman$elm_css$Css$prop1('stretch');
var _rtfeldman$elm_css$Css$spaceBetween = _rtfeldman$elm_css$Css$prop1('space-between');
var _rtfeldman$elm_css$Css$spaceAround = _rtfeldman$elm_css$Css$prop1('space-around');
var _rtfeldman$elm_css$Css$flexEnd = _rtfeldman$elm_css$Css$prop1('flex-end');
var _rtfeldman$elm_css$Css$flexStart = _rtfeldman$elm_css$Css$prop1('flex-start');
var _rtfeldman$elm_css$Css$wrap = {value: 'wrap', flexWrap: _rtfeldman$elm_css$Css_Structure$Compatible, flexDirectionOrWrap: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$wrapReverse = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$wrap,
	{value: 'wrap-reverse'});
var _rtfeldman$elm_css$Css$content = {value: 'content', flexBasis: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$order = _rtfeldman$elm_css$Css$prop1('order');
var _rtfeldman$elm_css$Css$flexFlow2 = _rtfeldman$elm_css$Css$prop2('flex-flow');
var _rtfeldman$elm_css$Css$flexFlow1 = _rtfeldman$elm_css$Css$prop1('flex-flow');
var _rtfeldman$elm_css$Css$flexDirection = _rtfeldman$elm_css$Css$prop1('flex-direction');
var _rtfeldman$elm_css$Css$flexWrap = _rtfeldman$elm_css$Css$prop1('flex-wrap');
var _rtfeldman$elm_css$Css$flexShrink = _rtfeldman$elm_css$Css$prop1('flex-shrink');
var _rtfeldman$elm_css$Css$flexGrow = _rtfeldman$elm_css$Css$prop1('flex-grow');
var _rtfeldman$elm_css$Css$flexBasis = _rtfeldman$elm_css$Css$prop1('flex-basis');
var _rtfeldman$elm_css$Css$flex3 = _rtfeldman$elm_css$Css$prop3('flex');
var _rtfeldman$elm_css$Css$flex2 = _rtfeldman$elm_css$Css$prop2('flex');
var _rtfeldman$elm_css$Css$flex = _rtfeldman$elm_css$Css$prop1('flex');
var _rtfeldman$elm_css$Css$listStyle3 = _rtfeldman$elm_css$Css$prop3('list-style');
var _rtfeldman$elm_css$Css$listStyle2 = _rtfeldman$elm_css$Css$prop2('list-style');
var _rtfeldman$elm_css$Css$listStyle = _rtfeldman$elm_css$Css$prop1('list-style');
var _rtfeldman$elm_css$Css$thai = {value: 'thai', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$telugu = {value: 'telugu', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$oriya = {value: 'oriya', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$myanmar = {value: 'myanmar', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$malayalam = {value: 'malayalam', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lao = {value: 'lao', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$khmer = {value: 'khmer', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$kannada = {value: 'kannada', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$gurmukhi = {value: 'gurmukhi', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$gujarati = {value: 'gujarati', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$georgian = {value: 'georgian', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$devanagari = {value: 'devanagari', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cjkHeavenlyStem = {value: 'cjk-heavenly-stem', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cjkEarthlyBranch = {value: 'cjk-earthly-branch', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$bengali = {value: 'bengali', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$armenian = {value: 'armenian', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$arabicIndic = {value: 'arabic-indic', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$upperLatin = {value: 'upper-latin', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lowerLatin = {value: 'lower-latin', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$upperAlpha = {value: 'upper-alpha', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lowerAlpha = {value: 'lower-alpha', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$upperGreek = {value: 'upper-greek', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lowerGreek = {value: 'lower-greek', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$upperRoman = {value: 'upper-roman', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lowerRoman = {value: 'lower-roman', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$decimalLeadingZero = {value: 'decimal-leading-zero', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$decimal = {value: 'decimal', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$square = {value: 'square', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$circle = {value: 'circle', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$disc = {value: 'disc', listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$listStyleType = _rtfeldman$elm_css$Css$prop1('list-style-type');
var _rtfeldman$elm_css$Css$outside = {value: 'outside', listStylePosition: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inside = {value: 'inside', listStylePosition: _rtfeldman$elm_css$Css_Structure$Compatible, listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$listStylePosition = _rtfeldman$elm_css$Css$prop1('list-style-position');
var _rtfeldman$elm_css$Css$transformStyle = _rtfeldman$elm_css$Css$prop1('transform-style');
var _rtfeldman$elm_css$Css$flat = {value: 'flat', transformStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$preserve3d = {value: 'preserve-3d', transformStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$boxSizing = _rtfeldman$elm_css$Css$prop1('box-sizing');
var _rtfeldman$elm_css$Css$transformBox = _rtfeldman$elm_css$Css$prop1('transform-box');
var _rtfeldman$elm_css$Css$viewBox = {value: 'view-box', transformBox: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$borderBox = {value: 'border-box', boxSizing: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundClip: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$contentBox = {value: 'content-box', boxSizing: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundClip: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fillBox = {value: 'fill-box', transformBox: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$transforms = function (_p15) {
	return A2(
		_rtfeldman$elm_css$Css$prop1,
		'transform',
		_rtfeldman$elm_css$Css$valuesOrNone(_p15));
};
var _rtfeldman$elm_css$Css$transform = function (only) {
	return _rtfeldman$elm_css$Css$transforms(
		{
			ctor: '::',
			_0: only,
			_1: {ctor: '[]'}
		});
};
var _rtfeldman$elm_css$Css$angleConverter = F2(
	function (suffix, num) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$numberToString(num),
				suffix),
			angle: _rtfeldman$elm_css$Css_Structure$Compatible,
			angleOrDirection: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$deg = _rtfeldman$elm_css$Css$angleConverter('deg');
var _rtfeldman$elm_css$Css$grad = _rtfeldman$elm_css$Css$angleConverter('grad');
var _rtfeldman$elm_css$Css$rad = _rtfeldman$elm_css$Css$angleConverter('rad');
var _rtfeldman$elm_css$Css$turn = _rtfeldman$elm_css$Css$angleConverter('turn');
var _rtfeldman$elm_css$Css$lengthConverter = F3(
	function (units, unitLabel, numericValue) {
		return {
			value: A2(
				_elm_lang$core$Basics_ops['++'],
				_rtfeldman$elm_css$Css$numberToString(numericValue),
				unitLabel),
			numericValue: numericValue,
			units: units,
			unitLabel: unitLabel,
			length: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrNone: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible,
			textIndent: _rtfeldman$elm_css$Css_Structure$Compatible,
			flexBasis: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible,
			fontSize: _rtfeldman$elm_css$Css_Structure$Compatible,
			absoluteLength: _rtfeldman$elm_css$Css_Structure$Compatible,
			lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible,
			calc: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$true = _rtfeldman$elm_css$Css$prop1('true');
var _rtfeldman$elm_css$Css$matchParent = _rtfeldman$elm_css$Css$prop1('match-parent');
var _rtfeldman$elm_css$Css$end = _rtfeldman$elm_css$Css$prop1('end');
var _rtfeldman$elm_css$Css$start = _rtfeldman$elm_css$Css$prop1('start');
var _rtfeldman$elm_css$Css$justifyAll = _rtfeldman$elm_css$Css$prop1('justify-all');
var _rtfeldman$elm_css$Css$justify = _rtfeldman$elm_css$Css$prop1('justify');
var _rtfeldman$elm_css$Css$center = _rtfeldman$elm_css$Css$prop1('center');
var _rtfeldman$elm_css$Css$collapse = {value: 'collapse', borderCollapse: _rtfeldman$elm_css$Css_Structure$Compatible, visibility: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$separate = {value: 'separate', borderCollapse: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$outset = {value: 'outset', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$inset = {value: 'inset', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$ridge = {value: 'ridge', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$groove = {value: 'groove', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$double = {value: 'double', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$solid = {value: 'solid', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$dashed = {value: 'dashed', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$dotted = {value: 'dotted', borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$wavy = {value: 'wavy', textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$clip = {value: 'clip', textOverflow: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$ellipsis = {value: 'ellipsis', textOverflow: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$fullWidth = {value: 'full-width', textTransform: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$lowercase = {value: 'lowercase', textTransform: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$uppercase = {value: 'uppercase', textTransform: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$capitalize = {value: 'capitalize', textTransform: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$sideways = {value: 'sideways', textOrientation: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$upright = {value: 'upright', textOrientation: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$mixed = {value: 'mixed', textOrientation: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$eachLine = {value: 'each-line', textIndent: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$hanging = {value: 'hanging', textIndent: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$geometricPrecision = {value: 'geometricPrecision', textRendering: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$optimizeLegibility = {value: 'optimizeLegibility', textRendering: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$optimizeSpeed = {value: 'optimizeSpeed', textRendering: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$hslaToRgba = F6(
	function (value, warnings, hue, saturation, lightness, hslAlpha) {
		var _p16 = _elm_lang$core$Color$toRgb(
			A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, hslAlpha));
		var red = _p16.red;
		var green = _p16.green;
		var blue = _p16.blue;
		var alpha = _p16.alpha;
		return {value: value, color: _rtfeldman$elm_css$Css_Structure$Compatible, red: red, green: green, blue: blue, alpha: alpha, warnings: warnings};
	});
var _rtfeldman$elm_css$Css$withPrecedingHash = function (str) {
	return A2(_elm_lang$core$String$startsWith, '#', str) ? str : A2(
		_elm_lang$core$String$cons,
		_elm_lang$core$Native_Utils.chr('#'),
		str);
};
var _rtfeldman$elm_css$Css$erroneousHex = function (str) {
	return {
		value: _rtfeldman$elm_css$Css$withPrecedingHash(str),
		color: _rtfeldman$elm_css$Css_Structure$Compatible,
		red: 0,
		green: 0,
		blue: 0,
		alpha: 1,
		warnings: _elm_lang$core$List$singleton(
			A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: 'Hex color strings must contain exactly 3, 4, 6, or 8 hexadecimal digits, optionally preceded by \"#\".',
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(str),
						_1: {
							ctor: '::',
							_0: 'is an invalid hex color string.',
							_1: {
								ctor: '::',
								_0: 'Please see: https://drafts.csswg.org/css-color/#hex-notation',
								_1: {ctor: '[]'}
							}
						}
					}
				}))
	};
};
var _rtfeldman$elm_css$Css$validHex = F5(
	function (str, _p20, _p19, _p18, _p17) {
		var _p21 = _p20;
		var _p22 = _p19;
		var _p23 = _p18;
		var _p24 = _p17;
		var toResult = function (_p25) {
			return _rtfeldman$hex$Hex$fromString(
				_elm_lang$core$String$toLower(
					_elm_lang$core$String$fromList(_p25)));
		};
		var results = {
			ctor: '_Tuple4',
			_0: toResult(
				{
					ctor: '::',
					_0: _p21._0,
					_1: {
						ctor: '::',
						_0: _p21._1,
						_1: {ctor: '[]'}
					}
				}),
			_1: toResult(
				{
					ctor: '::',
					_0: _p22._0,
					_1: {
						ctor: '::',
						_0: _p22._1,
						_1: {ctor: '[]'}
					}
				}),
			_2: toResult(
				{
					ctor: '::',
					_0: _p23._0,
					_1: {
						ctor: '::',
						_0: _p23._1,
						_1: {ctor: '[]'}
					}
				}),
			_3: toResult(
				{
					ctor: '::',
					_0: _p24._0,
					_1: {
						ctor: '::',
						_0: _p24._1,
						_1: {ctor: '[]'}
					}
				})
		};
		var _p26 = results;
		if (((((_p26.ctor === '_Tuple4') && (_p26._0.ctor === 'Ok')) && (_p26._1.ctor === 'Ok')) && (_p26._2.ctor === 'Ok')) && (_p26._3.ctor === 'Ok')) {
			return {
				value: _rtfeldman$elm_css$Css$withPrecedingHash(str),
				color: _rtfeldman$elm_css$Css_Structure$Compatible,
				red: _p26._0._0,
				green: _p26._1._0,
				blue: _p26._2._0,
				alpha: _elm_lang$core$Basics$toFloat(_p26._3._0) / 255,
				warnings: {ctor: '[]'}
			};
		} else {
			return _rtfeldman$elm_css$Css$erroneousHex(str);
		}
	});
var _rtfeldman$elm_css$Css$hex = function (str) {
	var withoutHash = A2(_elm_lang$core$String$startsWith, '#', str) ? A2(_elm_lang$core$String$dropLeft, 1, str) : str;
	var _p27 = _elm_lang$core$String$toList(withoutHash);
	_v9_4:
	do {
		if (((_p27.ctor === '::') && (_p27._1.ctor === '::')) && (_p27._1._1.ctor === '::')) {
			if (_p27._1._1._1.ctor === '[]') {
				var _p30 = _p27._0;
				var _p29 = _p27._1._0;
				var _p28 = _p27._1._1._0;
				return A5(
					_rtfeldman$elm_css$Css$validHex,
					str,
					{ctor: '_Tuple2', _0: _p30, _1: _p30},
					{ctor: '_Tuple2', _0: _p29, _1: _p29},
					{ctor: '_Tuple2', _0: _p28, _1: _p28},
					{
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.chr('f'),
						_1: _elm_lang$core$Native_Utils.chr('f')
					});
			} else {
				if (_p27._1._1._1._1.ctor === '[]') {
					var _p34 = _p27._0;
					var _p33 = _p27._1._0;
					var _p32 = _p27._1._1._0;
					var _p31 = _p27._1._1._1._0;
					return A5(
						_rtfeldman$elm_css$Css$validHex,
						str,
						{ctor: '_Tuple2', _0: _p34, _1: _p34},
						{ctor: '_Tuple2', _0: _p33, _1: _p33},
						{ctor: '_Tuple2', _0: _p32, _1: _p32},
						{ctor: '_Tuple2', _0: _p31, _1: _p31});
				} else {
					if (_p27._1._1._1._1._1.ctor === '::') {
						if (_p27._1._1._1._1._1._1.ctor === '[]') {
							return A5(
								_rtfeldman$elm_css$Css$validHex,
								str,
								{ctor: '_Tuple2', _0: _p27._0, _1: _p27._1._0},
								{ctor: '_Tuple2', _0: _p27._1._1._0, _1: _p27._1._1._1._0},
								{ctor: '_Tuple2', _0: _p27._1._1._1._1._0, _1: _p27._1._1._1._1._1._0},
								{
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.chr('f'),
									_1: _elm_lang$core$Native_Utils.chr('f')
								});
						} else {
							if ((_p27._1._1._1._1._1._1._1.ctor === '::') && (_p27._1._1._1._1._1._1._1._1.ctor === '[]')) {
								return A5(
									_rtfeldman$elm_css$Css$validHex,
									str,
									{ctor: '_Tuple2', _0: _p27._0, _1: _p27._1._0},
									{ctor: '_Tuple2', _0: _p27._1._1._0, _1: _p27._1._1._1._0},
									{ctor: '_Tuple2', _0: _p27._1._1._1._1._0, _1: _p27._1._1._1._1._1._0},
									{ctor: '_Tuple2', _0: _p27._1._1._1._1._1._1._0, _1: _p27._1._1._1._1._1._1._1._0});
							} else {
								break _v9_4;
							}
						}
					} else {
						break _v9_4;
					}
				}
			}
		} else {
			break _v9_4;
		}
	} while(false);
	return _rtfeldman$elm_css$Css$erroneousHex(str);
};
var _rtfeldman$elm_css$Css$hidden = {value: 'hidden', overflow: _rtfeldman$elm_css$Css_Structure$Compatible, borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible, visibility: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$contain = {value: 'contain', lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$cover = {value: 'cover', lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$url = function (urlValue) {
	return {
		value: A2(
			_elm_lang$core$Basics_ops['++'],
			'url(',
			A2(_elm_lang$core$Basics_ops['++'], urlValue, ')')),
		backgroundImage: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$paddingBox = {value: 'padding-box', backgroundClip: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$luminosity = _rtfeldman$elm_css$Css$prop1('luminosity');
var _rtfeldman$elm_css$Css$saturation = _rtfeldman$elm_css$Css$prop1('saturation');
var _rtfeldman$elm_css$Css$hue = _rtfeldman$elm_css$Css$prop1('hue');
var _rtfeldman$elm_css$Css$exclusion = _rtfeldman$elm_css$Css$prop1('exclusion');
var _rtfeldman$elm_css$Css$difference = _rtfeldman$elm_css$Css$prop1('difference');
var _rtfeldman$elm_css$Css$softLight = _rtfeldman$elm_css$Css$prop1('soft-light');
var _rtfeldman$elm_css$Css$hardLight = _rtfeldman$elm_css$Css$prop1('hard-light');
var _rtfeldman$elm_css$Css$colorBurn = _rtfeldman$elm_css$Css$prop1('color-burn');
var _rtfeldman$elm_css$Css$colorDodge = _rtfeldman$elm_css$Css$prop1('color-dodge');
var _rtfeldman$elm_css$Css$lighten = _rtfeldman$elm_css$Css$prop1('lighten');
var _rtfeldman$elm_css$Css$darken = _rtfeldman$elm_css$Css$prop1('darken');
var _rtfeldman$elm_css$Css$overlay = _rtfeldman$elm_css$Css$prop1('overlay');
var _rtfeldman$elm_css$Css$screenBlendMode = _rtfeldman$elm_css$Css$prop1('screen');
var _rtfeldman$elm_css$Css$multiply = _rtfeldman$elm_css$Css$prop1('multiply');
var _rtfeldman$elm_css$Css$vertical = {value: 'vertical', resize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$horizontal = {value: 'horizontal', resize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$both = {value: 'both', resize: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$breakWord = {value: 'break-word', overflowWrap: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$scroll = {value: 'scroll', scroll: _rtfeldman$elm_css$Css_Structure$Compatible, overflow: _rtfeldman$elm_css$Css_Structure$Compatible, backgroundAttachment: _rtfeldman$elm_css$Css_Structure$Compatible, blockAxisOverflow: _rtfeldman$elm_css$Css_Structure$Compatible, inlineAxisOverflow: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$visible = {value: 'visible', overflow: _rtfeldman$elm_css$Css_Structure$Compatible, visibility: _rtfeldman$elm_css$Css_Structure$Compatible, pointerEvents: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$currentColor = {
	value: 'currentColor',
	color: _rtfeldman$elm_css$Css_Structure$Compatible,
	warnings: {ctor: '[]'}
};
var _rtfeldman$elm_css$Css$transparent = {
	value: 'transparent',
	color: _rtfeldman$elm_css$Css_Structure$Compatible,
	warnings: {ctor: '[]'}
};
var _rtfeldman$elm_css$Css$important = _rtfeldman$elm_css$Css_Preprocess$mapLastProperty(
	function (property) {
		return _elm_lang$core$Native_Utils.update(
			property,
			{important: true});
	});
var _rtfeldman$elm_css$Css$all = _rtfeldman$elm_css$Css$prop1('all');
var _rtfeldman$elm_css$Css$combineLengths = F3(
	function (operation, first, second) {
		var numericValue = A2(operation, first.numericValue, second.numericValue);
		var value = A2(
			_elm_lang$core$String$join,
			'',
			A2(
				_elm_lang$core$List$filter,
				function (_p35) {
					return !_elm_lang$core$String$isEmpty(_p35);
				},
				{
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(numericValue),
					_1: {
						ctor: '::',
						_0: first.unitLabel,
						_1: {ctor: '[]'}
					}
				}));
		return _elm_lang$core$Native_Utils.update(
			first,
			{value: value, numericValue: numericValue});
	});
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|*|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x * y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|/|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x / y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|-|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x - y;
		}));
var _rtfeldman$elm_css$Css_ops = _rtfeldman$elm_css$Css_ops || {};
_rtfeldman$elm_css$Css_ops['|+|'] = _rtfeldman$elm_css$Css$combineLengths(
	F2(
		function (x, y) {
			return x + y;
		}));
var _rtfeldman$elm_css$Css$calcExpressionToString = function (expression) {
	var _p36 = expression;
	if (_p36.ctor === 'Addition') {
		return '+';
	} else {
		return '-';
	}
};
var _rtfeldman$elm_css$Css$colorValueForOverloadedProperty = _rtfeldman$elm_css$Css$transparent;
var _rtfeldman$elm_css$Css$getOverloadedProperty = F3(
	function (functionName, desiredKey, style) {
		getOverloadedProperty:
		while (true) {
			var _p37 = style;
			switch (_p37.ctor) {
				case 'AppendProperty':
					return A2(_rtfeldman$elm_css$Css$property, desiredKey, _p37._0.key);
				case 'ExtendSelector':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable Style for selector ',
										_elm_lang$core$Basics$toString(_p37._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				case 'NestSnippet':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable Style for combinator ',
										_elm_lang$core$Basics$toString(_p37._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				case 'WithPseudoElement':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable Style for pseudo-element setter ',
										_elm_lang$core$Basics$toString(_p37._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				case 'WithMedia':
					return A3(
						_rtfeldman$elm_css$Css$propertyWithWarnings,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								'Cannot apply ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									functionName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										' with inapplicable Style for media query ',
										_elm_lang$core$Basics$toString(_p37._0)))),
							_1: {ctor: '[]'}
						},
						desiredKey,
						'');
				default:
					if (_p37._0.ctor === '[]') {
						return A3(
							_rtfeldman$elm_css$Css$propertyWithWarnings,
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'Cannot apply ',
									A2(_elm_lang$core$Basics_ops['++'], functionName, ' with empty Style. ')),
								_1: {ctor: '[]'}
							},
							desiredKey,
							'');
					} else {
						if (_p37._0._1.ctor === '[]') {
							var _v12 = functionName,
								_v13 = desiredKey,
								_v14 = _p37._0._0;
							functionName = _v12;
							desiredKey = _v13;
							style = _v14;
							continue getOverloadedProperty;
						} else {
							var _v15 = functionName,
								_v16 = desiredKey,
								_v17 = _rtfeldman$elm_css$Css_Preprocess$ApplyStyles(_p37._0._1);
							functionName = _v15;
							desiredKey = _v16;
							style = _v17;
							continue getOverloadedProperty;
						}
					}
			}
		}
	});
var _rtfeldman$elm_css$Css$backgroundBlendMode = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'backgroundBlendMode',
		'background-blend-mode',
		fn(_rtfeldman$elm_css$Css$colorValueForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$cssFunction = F2(
	function (funcName, args) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			funcName,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$String$join, ', ', args),
					')')));
	});
var _rtfeldman$elm_css$Css$calc = F3(
	function (first, expression, second) {
		var grab = function (l) {
			return A2(_elm_lang$core$String$startsWith, 'calc(', l.value) ? A2(_elm_lang$core$String$dropLeft, 4, l.value) : l.value;
		};
		var calcs = A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: grab(first),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$calcExpressionToString(expression),
					_1: {
						ctor: '::',
						_0: grab(second),
						_1: {ctor: '[]'}
					}
				}
			});
		var value = A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'calc',
			{
				ctor: '::',
				_0: calcs,
				_1: {ctor: '[]'}
			});
		return {value: value, length: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNone: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, textIndent: _rtfeldman$elm_css$Css_Structure$Compatible, flexBasis: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible, fontSize: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible, calc: _rtfeldman$elm_css$Css_Structure$Compatible};
	});
var _rtfeldman$elm_css$Css$rgb = F3(
	function (red, green, blue) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(blue, 255) > 0)))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255. rgb(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									') is not valid.')))))),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rgb',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: red,
						_1: {
							ctor: '::',
							_0: green,
							_1: {
								ctor: '::',
								_0: blue,
								_1: {ctor: '[]'}
							}
						}
					})),
			color: _rtfeldman$elm_css$Css_Structure$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: 1
		};
	});
var _rtfeldman$elm_css$Css$rgba = F4(
	function (red, green, blue, alpha) {
		var warnings = ((_elm_lang$core$Native_Utils.cmp(red, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(red, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(green, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(green, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(blue, 255) > 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0)))))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'RGB color values must be between 0 and 255, and the alpha in RGBA must be between 0 and 1. rgba(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(red),
					A2(
						_elm_lang$core$Basics_ops['++'],
						', ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(green),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(blue),
									A2(
										_elm_lang$core$Basics_ops['++'],
										', ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_elm_lang$core$Basics$toString(alpha),
											') is not valid.')))))))),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rgba',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css$numberToString,
						{
							ctor: '::',
							_0: red,
							_1: {
								ctor: '::',
								_0: green,
								_1: {
									ctor: '::',
									_0: blue,
									_1: {ctor: '[]'}
								}
							}
						}),
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$numberToString(alpha),
						_1: {ctor: '[]'}
					})),
			color: _rtfeldman$elm_css$Css_Structure$Compatible,
			warnings: warnings,
			red: red,
			green: green,
			blue: blue,
			alpha: alpha
		};
	});
var _rtfeldman$elm_css$Css$hsl = F3(
	function (hue, saturation, lightness) {
		var valuesList = {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$numberToString(hue),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$numericalPercentageToString(lightness),
					_1: {ctor: '[]'}
				}
			}
		};
		var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsl', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0)))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'HSL color values must have an H value between 0 and 360 (as in degrees) and S and L values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.')),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, 1);
	});
var _rtfeldman$elm_css$Css$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		var valuesList = {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css$numberToString(hue),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numericalPercentageToString(saturation),
				_1: {
					ctor: '::',
					_0: _rtfeldman$elm_css$Css$numericalPercentageToString(lightness),
					_1: {
						ctor: '::',
						_0: _rtfeldman$elm_css$Css$numberToString(alpha),
						_1: {ctor: '[]'}
					}
				}
			}
		};
		var value = A2(_rtfeldman$elm_css$Css$cssFunction, 'hsla', valuesList);
		var warnings = ((_elm_lang$core$Native_Utils.cmp(hue, 360) > 0) || ((_elm_lang$core$Native_Utils.cmp(hue, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(saturation, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 1) > 0) || ((_elm_lang$core$Native_Utils.cmp(lightness, 0) < 0) || ((_elm_lang$core$Native_Utils.cmp(alpha, 1) > 0) || (_elm_lang$core$Native_Utils.cmp(alpha, 0) < 0)))))))) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'HSLA color values must have an H value between 0 and 360 (as in degrees) and S, L, and A values between 0 and 1. ',
				A2(_elm_lang$core$Basics_ops['++'], value, ' is not valid.')),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
		return A6(_rtfeldman$elm_css$Css$hslaToRgba, value, warnings, hue, saturation, lightness, alpha);
	});
var _rtfeldman$elm_css$Css$matrix = F6(
	function (a, b, c, d, tx, ty) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'matrix',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: a,
						_1: {
							ctor: '::',
							_0: b,
							_1: {
								ctor: '::',
								_0: c,
								_1: {
									ctor: '::',
									_0: d,
									_1: {
										ctor: '::',
										_0: tx,
										_1: {
											ctor: '::',
											_0: ty,
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					})),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$matrix3d = function (a1) {
	return function (a2) {
		return function (a3) {
			return function (a4) {
				return function (b1) {
					return function (b2) {
						return function (b3) {
							return function (b4) {
								return function (c1) {
									return function (c2) {
										return function (c3) {
											return function (c4) {
												return function (d1) {
													return function (d2) {
														return function (d3) {
															return function (d4) {
																return {
																	value: A2(
																		_rtfeldman$elm_css$Css$cssFunction,
																		'matrix3d',
																		A2(
																			_elm_lang$core$List$map,
																			_rtfeldman$elm_css$Css$numberToString,
																			{
																				ctor: '::',
																				_0: a1,
																				_1: {
																					ctor: '::',
																					_0: a2,
																					_1: {
																						ctor: '::',
																						_0: a3,
																						_1: {
																							ctor: '::',
																							_0: a4,
																							_1: {
																								ctor: '::',
																								_0: b1,
																								_1: {
																									ctor: '::',
																									_0: b2,
																									_1: {
																										ctor: '::',
																										_0: b3,
																										_1: {
																											ctor: '::',
																											_0: b4,
																											_1: {
																												ctor: '::',
																												_0: c1,
																												_1: {
																													ctor: '::',
																													_0: c2,
																													_1: {
																														ctor: '::',
																														_0: c3,
																														_1: {
																															ctor: '::',
																															_0: c4,
																															_1: {
																																ctor: '::',
																																_0: d1,
																																_1: {
																																	ctor: '::',
																																	_0: d2,
																																	_1: {
																																		ctor: '::',
																																		_0: d3,
																																		_1: {
																																			ctor: '::',
																																			_0: d4,
																																			_1: {ctor: '[]'}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			})),
																	transform: _rtfeldman$elm_css$Css_Structure$Compatible
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$perspective = function (l) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'perspective',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(l),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotate = function (_p38) {
	var _p39 = _p38;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotate',
			{
				ctor: '::',
				_0: _p39.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateX = function (_p40) {
	var _p41 = _p40;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateX',
			{
				ctor: '::',
				_0: _p41.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateY = function (_p42) {
	var _p43 = _p42;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateY',
			{
				ctor: '::',
				_0: _p43.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotateZ = function (_p44) {
	var _p45 = _p44;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'rotateZ',
			{
				ctor: '::',
				_0: _p45.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$rotate3d = F4(
	function (x, y, z, _p46) {
		var _p47 = _p46;
		var coordsAsStrings = A2(
			_elm_lang$core$List$map,
			_rtfeldman$elm_css$Css$numberToString,
			{
				ctor: '::',
				_0: x,
				_1: {
					ctor: '::',
					_0: y,
					_1: {
						ctor: '::',
						_0: z,
						_1: {ctor: '[]'}
					}
				}
			});
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'rotate3d',
				A2(
					_elm_lang$core$Basics_ops['++'],
					coordsAsStrings,
					{
						ctor: '::',
						_0: _p47.value,
						_1: {ctor: '[]'}
					})),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$scale = function (x) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scale',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(x),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$scale2 = F2(
	function (x, y) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: x,
						_1: {
							ctor: '::',
							_0: y,
							_1: {ctor: '[]'}
						}
					})),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$scaleX = function (x) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scaleX',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(x),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$scaleY = function (y) {
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'scaleY',
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css$numberToString(y),
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$scale3d = F3(
	function (x, y, z) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'scale3d',
				A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css$numberToString,
					{
						ctor: '::',
						_0: x,
						_1: {
							ctor: '::',
							_0: y,
							_1: {
								ctor: '::',
								_0: z,
								_1: {ctor: '[]'}
							}
						}
					})),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$skew = function (_p48) {
	var _p49 = _p48;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skew',
			{
				ctor: '::',
				_0: _p49.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$skew2 = F2(
	function (ax, ay) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'skew',
				{
					ctor: '::',
					_0: ax.value,
					_1: {
						ctor: '::',
						_0: ay.value,
						_1: {ctor: '[]'}
					}
				}),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$skewX = function (_p50) {
	var _p51 = _p50;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skewX',
			{
				ctor: '::',
				_0: _p51.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$skewY = function (_p52) {
	var _p53 = _p52;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'skewY',
			{
				ctor: '::',
				_0: _p53.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate = function (_p54) {
	var _p55 = _p54;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translate',
			{
				ctor: '::',
				_0: _p55.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate2 = F2(
	function (tx, ty) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate',
				{
					ctor: '::',
					_0: tx.value,
					_1: {
						ctor: '::',
						_0: ty.value,
						_1: {ctor: '[]'}
					}
				}),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$translateX = function (_p56) {
	var _p57 = _p56;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateX',
			{
				ctor: '::',
				_0: _p57.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$translateY = function (_p58) {
	var _p59 = _p58;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateY',
			{
				ctor: '::',
				_0: _p59.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$translateZ = function (_p60) {
	var _p61 = _p60;
	return {
		value: A2(
			_rtfeldman$elm_css$Css$cssFunction,
			'translateZ',
			{
				ctor: '::',
				_0: _p61.value,
				_1: {ctor: '[]'}
			}),
		transform: _rtfeldman$elm_css$Css_Structure$Compatible
	};
};
var _rtfeldman$elm_css$Css$translate3d = F3(
	function (tx, ty, tz) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'translate3d',
				{
					ctor: '::',
					_0: tx.value,
					_1: {
						ctor: '::',
						_0: ty.value,
						_1: {
							ctor: '::',
							_0: tz.value,
							_1: {ctor: '[]'}
						}
					}
				}),
			transform: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$linearGradient = F3(
	function (stop1, stop2, stops) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'linear-gradient',
				_rtfeldman$elm_css$Css$collectStops(
					A2(
						_elm_lang$core$Basics_ops['++'],
						{
							ctor: '::',
							_0: stop1,
							_1: {
								ctor: '::',
								_0: stop2,
								_1: {ctor: '[]'}
							}
						},
						stops))),
			backgroundImage: _rtfeldman$elm_css$Css_Structure$Compatible,
			listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$linearGradient2 = F4(
	function (dir, stop1, stop2, stops) {
		return {
			value: A2(
				_rtfeldman$elm_css$Css$cssFunction,
				'linear-gradient',
				A2(
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					dir.value,
					_rtfeldman$elm_css$Css$collectStops(
						A2(
							_elm_lang$core$Basics_ops['++'],
							{
								ctor: '::',
								_0: stop1,
								_1: {
									ctor: '::',
									_0: stop2,
									_1: {ctor: '[]'}
								}
							},
							stops)))),
			backgroundImage: _rtfeldman$elm_css$Css_Structure$Compatible,
			listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible
		};
	});
var _rtfeldman$elm_css$Css$CalculatedLength = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return {value: a, length: b, lengthOrAuto: c, lengthOrNumber: d, lengthOrNone: e, lengthOrMinMaxDimension: f, lengthOrNoneOrMinMaxDimension: g, textIndent: h, flexBasis: i, lengthOrNumberOrAutoOrNoneOrContent: j, fontSize: k, lengthOrAutoOrCoverOrContain: l, calc: m};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$ExplicitLength = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return {value: a, numericValue: b, units: c, unitLabel: d, length: e, lengthOrAuto: f, lengthOrNumber: g, lengthOrNone: h, lengthOrMinMaxDimension: i, lengthOrNoneOrMinMaxDimension: j, textIndent: k, flexBasis: l, absoluteLength: m, lengthOrNumberOrAutoOrNoneOrContent: n, fontSize: o, lengthOrAutoOrCoverOrContain: p, calc: q};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$NonMixable = {};
var _rtfeldman$elm_css$Css$BasicProperty = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return function (u) {
																					return function (v) {
																						return function (w) {
																							return function (x) {
																								return function (y) {
																									return function (z) {
																										return function (_1) {
																											return function (_2) {
																												return function (_3) {
																													return function (_4) {
																														return function (_5) {
																															return function (_6) {
																																return function (_7) {
																																	return function (_8) {
																																		return function (_9) {
																																			return function (_10) {
																																				return function (_11) {
																																					return function (_12) {
																																						return function (_13) {
																																							return function (_14) {
																																								return function (_15) {
																																									return function (_16) {
																																										return function (_17) {
																																											return function (_18) {
																																												return function (_19) {
																																													return function (_20) {
																																														return function (_21) {
																																															return function (_22) {
																																																return function (_23) {
																																																	return function (_24) {
																																																		return function (_25) {
																																																			return function (_26) {
																																																				return function (_27) {
																																																					return function (_28) {
																																																						return {value: a, all: b, alignItems: c, borderStyle: d, boxSizing: e, color: f, cursor: g, display: h, flexBasis: i, flexWrap: j, flexDirection: k, flexDirectionOrWrap: l, justifyContent: m, none: n, number: o, outline: p, overflow: q, pointerEvents: r, visibility: s, textDecorationLine: t, textRendering: u, textIndent: v, textDecorationStyle: w, textTransform: x, length: y, lengthOrAuto: z, lengthOrNone: _1, lengthOrNumber: _2, lengthOrMinMaxDimension: _3, lengthOrNoneOrMinMaxDimension: _4, lengthOrNumberOrAutoOrNoneOrContent: _5, listStyleType: _6, listStylePosition: _7, listStyleTypeOrPositionOrImage: _8, fontFamily: _9, fontSize: _10, fontStyle: _11, fontWeight: _12, fontVariant: _13, units: _14, numericValue: _15, unitLabel: _16, warnings: _17, backgroundRepeat: _18, backgroundRepeatShorthand: _19, backgroundAttachment: _20, backgroundBlendMode: _21, backgroundOrigin: _22, backgroundImage: _23, lengthOrAutoOrCoverOrContain: _24, intOrAuto: _25, touchAction: _26, whiteSpace: _27, tableLayout: _28};
																																																					};
																																																				};
																																																			};
																																																		};
																																																	};
																																																};
																																															};
																																														};
																																													};
																																												};
																																											};
																																										};
																																									};
																																								};
																																							};
																																						};
																																					};
																																				};
																																			};
																																		};
																																	};
																																};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _rtfeldman$elm_css$Css$Normal = F7(
	function (a, b, c, d, e, f, g) {
		return {value: a, warnings: b, fontStyle: c, fontWeight: d, featureTagValue: e, overflowWrap: f, whiteSpace: g};
	});
var _rtfeldman$elm_css$Css$Subtraction = {ctor: 'Subtraction'};
var _rtfeldman$elm_css$Css$minus = _rtfeldman$elm_css$Css$Subtraction;
var _rtfeldman$elm_css$Css$Addition = {ctor: 'Addition'};
var _rtfeldman$elm_css$Css$plus = _rtfeldman$elm_css$Css$Addition;
var _rtfeldman$elm_css$Css$PercentageUnits = {ctor: 'PercentageUnits'};
var _rtfeldman$elm_css$Css$pct = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PercentageUnits, '%');
var _rtfeldman$elm_css$Css$EmUnits = {ctor: 'EmUnits'};
var _rtfeldman$elm_css$Css$em = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$EmUnits, 'em');
var _rtfeldman$elm_css$Css$ExUnits = {ctor: 'ExUnits'};
var _rtfeldman$elm_css$Css$ex = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ExUnits, 'ex');
var _rtfeldman$elm_css$Css$ChUnits = {ctor: 'ChUnits'};
var _rtfeldman$elm_css$Css$ch = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$ChUnits, 'ch');
var _rtfeldman$elm_css$Css$RemUnits = {ctor: 'RemUnits'};
var _rtfeldman$elm_css$Css$rem = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$RemUnits, 'rem');
var _rtfeldman$elm_css$Css$VhUnits = {ctor: 'VhUnits'};
var _rtfeldman$elm_css$Css$vh = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VhUnits, 'vh');
var _rtfeldman$elm_css$Css$VwUnits = {ctor: 'VwUnits'};
var _rtfeldman$elm_css$Css$vw = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VwUnits, 'vw');
var _rtfeldman$elm_css$Css$VMinUnits = {ctor: 'VMinUnits'};
var _rtfeldman$elm_css$Css$vmin = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMinUnits, 'vmin');
var _rtfeldman$elm_css$Css$VMaxUnits = {ctor: 'VMaxUnits'};
var _rtfeldman$elm_css$Css$vmax = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$VMaxUnits, 'vmax');
var _rtfeldman$elm_css$Css$PxUnits = {ctor: 'PxUnits'};
var _rtfeldman$elm_css$Css$px = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PxUnits, 'px');
var _rtfeldman$elm_css$Css$MMUnits = {ctor: 'MMUnits'};
var _rtfeldman$elm_css$Css$mm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$MMUnits, 'mm');
var _rtfeldman$elm_css$Css$CMUnits = {ctor: 'CMUnits'};
var _rtfeldman$elm_css$Css$cm = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$CMUnits, 'cm');
var _rtfeldman$elm_css$Css$InchUnits = {ctor: 'InchUnits'};
var _rtfeldman$elm_css$Css$inches = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$InchUnits, 'in');
var _rtfeldman$elm_css$Css$PtUnits = {ctor: 'PtUnits'};
var _rtfeldman$elm_css$Css$pt = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PtUnits, 'pt');
var _rtfeldman$elm_css$Css$PcUnits = {ctor: 'PcUnits'};
var _rtfeldman$elm_css$Css$pc = A2(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$PcUnits, 'pc');
var _rtfeldman$elm_css$Css$UnitlessInteger = {ctor: 'UnitlessInteger'};
var _rtfeldman$elm_css$Css$zero = {value: '0', length: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNone: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible, number: _rtfeldman$elm_css$Css_Structure$Compatible, outline: _rtfeldman$elm_css$Css_Structure$Compatible, units: _rtfeldman$elm_css$Css$UnitlessInteger, unitLabel: '', numericValue: 0, lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible};
var _rtfeldman$elm_css$Css$int = function (val) {
	return {
		value: _rtfeldman$elm_css$Css$numberToString(val),
		lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible,
		number: _rtfeldman$elm_css$Css_Structure$Compatible,
		fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible,
		intOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible,
		numericValue: _elm_lang$core$Basics$toFloat(val),
		unitLabel: '',
		units: _rtfeldman$elm_css$Css$UnitlessInteger
	};
};
var _rtfeldman$elm_css$Css$UnitlessFloat = {ctor: 'UnitlessFloat'};
var _rtfeldman$elm_css$Css$num = function (val) {
	return {
		value: _rtfeldman$elm_css$Css$numberToString(val),
		lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible,
		number: _rtfeldman$elm_css$Css_Structure$Compatible,
		lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible,
		numericValue: val,
		unitLabel: '',
		units: _rtfeldman$elm_css$Css$UnitlessFloat
	};
};
var _rtfeldman$elm_css$Css$IncompatibleUnits = {ctor: 'IncompatibleUnits'};
var _rtfeldman$elm_css$Css$initial = {
	value: 'initial',
	overflow: _rtfeldman$elm_css$Css_Structure$Compatible,
	visibility: _rtfeldman$elm_css$Css_Structure$Compatible,
	none: _rtfeldman$elm_css$Css_Structure$Compatible,
	number: _rtfeldman$elm_css$Css_Structure$Compatible,
	textDecorationLine: _rtfeldman$elm_css$Css_Structure$Compatible,
	textRendering: _rtfeldman$elm_css$Css_Structure$Compatible,
	textIndent: _rtfeldman$elm_css$Css_Structure$Compatible,
	textDecorationStyle: _rtfeldman$elm_css$Css_Structure$Compatible,
	textTransform: _rtfeldman$elm_css$Css_Structure$Compatible,
	borderStyle: _rtfeldman$elm_css$Css_Structure$Compatible,
	boxSizing: _rtfeldman$elm_css$Css_Structure$Compatible,
	color: _rtfeldman$elm_css$Css_Structure$Compatible,
	cursor: _rtfeldman$elm_css$Css_Structure$Compatible,
	display: _rtfeldman$elm_css$Css_Structure$Compatible,
	all: _rtfeldman$elm_css$Css_Structure$Compatible,
	alignItems: _rtfeldman$elm_css$Css_Structure$Compatible,
	justifyContent: _rtfeldman$elm_css$Css_Structure$Compatible,
	length: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrNone: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrNumber: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrNoneOrMinMaxDimension: _rtfeldman$elm_css$Css_Structure$Compatible,
	listStyleType: _rtfeldman$elm_css$Css_Structure$Compatible,
	listStylePosition: _rtfeldman$elm_css$Css_Structure$Compatible,
	listStyleTypeOrPositionOrImage: _rtfeldman$elm_css$Css_Structure$Compatible,
	flexBasis: _rtfeldman$elm_css$Css_Structure$Compatible,
	flexWrap: _rtfeldman$elm_css$Css_Structure$Compatible,
	flexDirection: _rtfeldman$elm_css$Css_Structure$Compatible,
	flexDirectionOrWrap: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrNumberOrAutoOrNoneOrContent: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontFamily: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontSize: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontStyle: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontWeight: _rtfeldman$elm_css$Css_Structure$Compatible,
	fontVariant: _rtfeldman$elm_css$Css_Structure$Compatible,
	outline: _rtfeldman$elm_css$Css_Structure$Compatible,
	pointerEvents: _rtfeldman$elm_css$Css_Structure$Compatible,
	units: _rtfeldman$elm_css$Css$IncompatibleUnits,
	numericValue: 0,
	unitLabel: '',
	warnings: {ctor: '[]'},
	backgroundRepeat: _rtfeldman$elm_css$Css_Structure$Compatible,
	backgroundRepeatShorthand: _rtfeldman$elm_css$Css_Structure$Compatible,
	backgroundAttachment: _rtfeldman$elm_css$Css_Structure$Compatible,
	backgroundBlendMode: _rtfeldman$elm_css$Css_Structure$Compatible,
	backgroundOrigin: _rtfeldman$elm_css$Css_Structure$Compatible,
	backgroundImage: _rtfeldman$elm_css$Css_Structure$Compatible,
	lengthOrAutoOrCoverOrContain: _rtfeldman$elm_css$Css_Structure$Compatible,
	intOrAuto: _rtfeldman$elm_css$Css_Structure$Compatible,
	touchAction: _rtfeldman$elm_css$Css_Structure$Compatible,
	whiteSpace: _rtfeldman$elm_css$Css_Structure$Compatible,
	tableLayout: _rtfeldman$elm_css$Css_Structure$Compatible
};
var _rtfeldman$elm_css$Css$unset = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$initial,
	{value: 'unset'});
var _rtfeldman$elm_css$Css$inherit = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Css$initial,
	{value: 'inherit'});
var _rtfeldman$elm_css$Css$lengthForOverloadedProperty = A3(_rtfeldman$elm_css$Css$lengthConverter, _rtfeldman$elm_css$Css$IncompatibleUnits, '', 0);
var _rtfeldman$elm_css$Css$alignItems = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'alignItems',
		'align-items',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$alignSelf = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'alignSelf',
		'align-self',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$justifyContent = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'justifyContent',
		'justify-content',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$float = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'float',
		'float',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$textAlignLast = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'textAlignLast',
		'text-align-last',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$textAlign = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'textAlign',
		'text-align',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$verticalAlign = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'verticalAlign',
		'vertical-align',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$backgroundPosition = function (fn) {
	return A3(
		_rtfeldman$elm_css$Css$getOverloadedProperty,
		'backgroundPosition',
		'background-position',
		fn(_rtfeldman$elm_css$Css$lengthForOverloadedProperty));
};
var _rtfeldman$elm_css$Css$Rtl = {ctor: 'Rtl'};
var _rtfeldman$elm_css$Css$Ltr = {ctor: 'Ltr'};
var _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs = {ctor: 'IntentionallyUnsupportedPleaseSeeDocs'};
var _rtfeldman$elm_css$Css$thin = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _rtfeldman$elm_css$Css$thick = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;
var _rtfeldman$elm_css$Css$blink = _rtfeldman$elm_css$Css$IntentionallyUnsupportedPleaseSeeDocs;

var _mdgriffith$stylish_elephants$Internal_Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .se.row > .se { flex-basis: auto !important; }\n  .se.row > .se.container { flex-basis: auto !important; }\n}';
var _mdgriffith$stylish_elephants$Internal_Style$dot = function (c) {
	return A2(_elm_lang$core$Basics_ops['++'], '.', c);
};
var _mdgriffith$stylish_elephants$Internal_Style$lenToString = function (len) {
	var _p0 = len;
	if (_p0.ctor === 'Shrink') {
		return 'content';
	} else {
		return 'fill';
	}
};
var _mdgriffith$stylish_elephants$Internal_Style$dimensionToString = function (x) {
	var _p1 = x;
	if (_p1.ctor === 'Width') {
		return 'width';
	} else {
		return 'height';
	}
};
var _mdgriffith$stylish_elephants$Internal_Style$single = {root: 'z', any: 's', single: 'e', row: 'r', column: 'c', page: 'l', paragraph: 'p', text: 't', grid: 'g', widthFill: '↔', widthContent: 'wc', widthExact: 'w', heightFill: '↕', heightContent: 'hc', heightExact: 'h', above: 'o', below: 'u', onRight: 'r', onLeft: 'l', inFront: 'f', behind: 'b', alignTop: '⤒', alignBottom: '⤓', alignRight: '⇥', alignLeft: '⇤', alignCenterX: 'self-center-x', alignCenterY: 'self-center-y', spaceEvenly: 'space-evenly', container: 'container', contentTop: 'c⤒', contentBottom: 'c⤓', contentRight: 'c⇥', contentLeft: 'c⇤', contentCenterX: 'content-center-x', contentCenterY: 'content-center-y', noTextSelection: 'no-text-selection', cursorPointer: 'cursor-pointer', cursorText: 'cursor-text', passPointerEvents: 'pass-pointer-events', capturePointerEvents: 'capture-pointer-events', transparent: 'transparent', opaque: 'opaque', overflowHidden: 'overflow-hidden', scrollbars: 'scrollbars', scrollbarsX: 'scrollbars-x', scrollbarsY: 'scrollbars-y', clip: '✂', clipX: '✂x', clipY: '✂y', borderNone: 'border-none', borderDashed: 'border-dashed', borderDotted: 'border-dotted', borderSolid: 'border-solid', textThin: 'text-thin', textExtraLight: 'text-extra-light', textLight: 'text-light', textNormalWeight: 'text-normal-weight', textMedium: 'text-medium', textSemiBold: 'text-semi-bold', bold: 'b', textExtraBold: 'text-extra-bold', textHeavy: 'text-heavy', italic: 'i', strike: '-', underline: 'u', textUnitalicized: 'text-unitalicized', textJustify: 'text-justify', textJustifyAll: 'text-justify-all', textCenter: 'text-center', textRight: 'text-right', textLeft: 'text-left'};
var _mdgriffith$stylish_elephants$Internal_Style$unicode = {root: 'style-elements', any: 's', single: 'e', row: '⋯', column: '⋮', page: '🗏', paragraph: 'p', text: 'text', grid: '▦', widthFill: '↔', widthContent: 'width-content', widthExact: 'width-exact', heightFill: '↕', heightContent: 'height-content', heightExact: 'height-exact', above: 'above', below: 'below', onRight: 'on-right', onLeft: 'on-left', inFront: 'infront', behind: 'behind', alignTop: '⤒', alignBottom: '⤓', alignRight: '⇥', alignLeft: '⇤', alignCenterX: 'self-center-x', alignCenterY: 'self-center-y', spaceEvenly: 'space-evenly', container: 'container', contentTop: 'content-top', contentBottom: 'content-bottom', contentRight: 'content-right', contentLeft: 'content-left', contentCenterX: 'content-center-x', contentCenterY: 'content-center-y', noTextSelection: 'no-text-selection', cursorPointer: 'cursor-pointer', cursorText: 'cursor-text', passPointerEvents: 'pass-pointer-events', capturePointerEvents: 'capture-pointer-events', transparent: 'transparent', opaque: 'opaque', overflowHidden: 'overflow-hidden', scrollbars: 'scrollbars', scrollbarsX: 'scrollbars-x', scrollbarsY: 'scrollbars-y', clip: '✂', clipX: '✂x', clipY: '✂y', borderNone: 'border-none', borderDashed: 'border-dashed', borderDotted: 'border-dotted', borderSolid: 'border-solid', textThin: 'text-thin', textExtraLight: 'text-extra-light', textLight: 'text-light', textNormalWeight: 'text-normal-weight', textMedium: 'text-medium', textSemiBold: 'text-semi-bold', bold: 'bold', textExtraBold: 'text-extra-bold', textHeavy: 'text-heavy', italic: 'italic', strike: 'strike', underline: 'underline', textUnitalicized: 'text-unitalicized', textJustify: 'text-justify', textJustifyAll: 'text-justify-all', textCenter: 'text-center', textRight: 'text-right', textLeft: 'text-left'};
var _mdgriffith$stylish_elephants$Internal_Style$classes = {root: 'style-elements', any: 'se', single: 'el', row: 'row', column: 'column', page: 'page', paragraph: 'paragraph', text: 'text', grid: 'grid', widthFill: 'width-fill', widthContent: 'width-content', widthExact: 'width-exact', heightFill: 'height-fill', heightContent: 'height-content', heightExact: 'height-exact', above: 'above', below: 'below', onRight: 'on-right', onLeft: 'on-left', inFront: 'infront', behind: 'behind', alignTop: 'self-top', alignBottom: 'self-bottom', alignRight: 'self-right', alignLeft: 'self-left', alignCenterX: 'self-center-x', alignCenterY: 'self-center-y', spaceEvenly: 'space-evenly', container: 'container', contentTop: 'content-top', contentBottom: 'content-bottom', contentRight: 'content-right', contentLeft: 'content-left', contentCenterX: 'content-center-x', contentCenterY: 'content-center-y', noTextSelection: 'no-text-selection', cursorPointer: 'cursor-pointer', cursorText: 'cursor-text', passPointerEvents: 'pass-pointer-events', capturePointerEvents: 'capture-pointer-events', transparent: 'transparent', opaque: 'opaque', overflowHidden: 'overflow-hidden', scrollbars: 'scrollbars', scrollbarsX: 'scrollbars-x', scrollbarsY: 'scrollbars-y', clip: 'clip', clipX: 'clip-x', clipY: 'clip-y', borderNone: 'border-none', borderDashed: 'border-dashed', borderDotted: 'border-dotted', borderSolid: 'border-solid', textThin: 'text-thin', textExtraLight: 'text-extra-light', textLight: 'text-light', textNormalWeight: 'text-normal-weight', textMedium: 'text-medium', textSemiBold: 'text-semi-bold', bold: 'bold', textExtraBold: 'text-extra-bold', textHeavy: 'text-heavy', italic: 'italic', strike: 'strike', underline: 'underline', textUnitalicized: 'text-unitalicized', textJustify: 'text-justify', textJustifyAll: 'text-justify-all', textCenter: 'text-center', textRight: 'text-right', textLeft: 'text-left'};
var _mdgriffith$stylish_elephants$Internal_Style$contentName = function (desc) {
	var _p2 = desc;
	switch (_p2._0.ctor) {
		case 'Top':
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.contentTop);
		case 'Bottom':
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.contentBottom);
		case 'Right':
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.contentRight);
		case 'Left':
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.contentLeft);
		case 'CenterX':
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterX);
		default:
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterY);
	}
};
var _mdgriffith$stylish_elephants$Internal_Style$selfName = function (desc) {
	var _p3 = desc;
	switch (_p3._0.ctor) {
		case 'Top':
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignTop);
		case 'Bottom':
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignBottom);
		case 'Right':
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignRight);
		case 'Left':
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignLeft);
		case 'CenterX':
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignCenterX);
		default:
			return _mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignCenterY);
	}
};
var _mdgriffith$stylish_elephants$Internal_Style$Class = F2(
	function (a, b) {
		return {ctor: 'Class', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Style$Batch = function (a) {
	return {ctor: 'Batch', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Style$Adjacent = F2(
	function (a, b) {
		return {ctor: 'Adjacent', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Style$Descriptor = F2(
	function (a, b) {
		return {ctor: 'Descriptor', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Style$Supports = F2(
	function (a, b) {
		return {ctor: 'Supports', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Style$Child = F2(
	function (a, b) {
		return {ctor: 'Child', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Style$Prop = F2(
	function (a, b) {
		return {ctor: 'Prop', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Style$makeImportant = function (rule) {
	var _p4 = rule;
	if (_p4.ctor === 'Prop') {
		return A2(
			_mdgriffith$stylish_elephants$Internal_Style$Prop,
			_p4._0,
			A2(_elm_lang$core$Basics_ops['++'], _p4._1, ' !important'));
	} else {
		return rule;
	}
};
var _mdgriffith$stylish_elephants$Internal_Style$describeText = F2(
	function (cls, props) {
		return A2(
			_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
			cls,
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Internal_Style$makeImportant, props),
				{
					ctor: '::',
					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Child, '.text', props),
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Child, '.el', props),
						_1: {
							ctor: '::',
							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Child, '.el > .text', props),
							_1: {ctor: '[]'}
						}
					}
				}));
	});
var _mdgriffith$stylish_elephants$Internal_Style$Spacer = {ctor: 'Spacer'};
var _mdgriffith$stylish_elephants$Internal_Style$Grid = {ctor: 'Grid'};
var _mdgriffith$stylish_elephants$Internal_Style$Text = {ctor: 'Text'};
var _mdgriffith$stylish_elephants$Internal_Style$Page = {ctor: 'Page'};
var _mdgriffith$stylish_elephants$Internal_Style$Paragraph = {ctor: 'Paragraph'};
var _mdgriffith$stylish_elephants$Internal_Style$Column = {ctor: 'Column'};
var _mdgriffith$stylish_elephants$Internal_Style$Row = {ctor: 'Row'};
var _mdgriffith$stylish_elephants$Internal_Style$Single = {ctor: 'Single'};
var _mdgriffith$stylish_elephants$Internal_Style$Any = {ctor: 'Any'};
var _mdgriffith$stylish_elephants$Internal_Style$Root = {ctor: 'Root'};
var _mdgriffith$stylish_elephants$Internal_Style$Behind = {ctor: 'Behind'};
var _mdgriffith$stylish_elephants$Internal_Style$Within = {ctor: 'Within'};
var _mdgriffith$stylish_elephants$Internal_Style$OnLeft = {ctor: 'OnLeft'};
var _mdgriffith$stylish_elephants$Internal_Style$OnRight = {ctor: 'OnRight'};
var _mdgriffith$stylish_elephants$Internal_Style$Below = {ctor: 'Below'};
var _mdgriffith$stylish_elephants$Internal_Style$Above = {ctor: 'Above'};
var _mdgriffith$stylish_elephants$Internal_Style$locations = function () {
	var loc = _mdgriffith$stylish_elephants$Internal_Style$Above;
	var _p5 = function () {
		var _p6 = loc;
		switch (_p6.ctor) {
			case 'Above':
				return {ctor: '_Tuple0'};
			case 'Below':
				return {ctor: '_Tuple0'};
			case 'OnRight':
				return {ctor: '_Tuple0'};
			case 'OnLeft':
				return {ctor: '_Tuple0'};
			case 'Within':
				return {ctor: '_Tuple0'};
			default:
				return {ctor: '_Tuple0'};
		}
	}();
	return {
		ctor: '::',
		_0: _mdgriffith$stylish_elephants$Internal_Style$Above,
		_1: {
			ctor: '::',
			_0: _mdgriffith$stylish_elephants$Internal_Style$Below,
			_1: {
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Internal_Style$OnRight,
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Internal_Style$OnLeft,
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Internal_Style$Within,
						_1: {
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Internal_Style$Behind,
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	};
}();
var _mdgriffith$stylish_elephants$Internal_Style$Fill = {ctor: 'Fill'};
var _mdgriffith$stylish_elephants$Internal_Style$Shrink = {ctor: 'Shrink'};
var _mdgriffith$stylish_elephants$Internal_Style$lengths = {
	ctor: '::',
	_0: _mdgriffith$stylish_elephants$Internal_Style$Shrink,
	_1: {
		ctor: '::',
		_0: _mdgriffith$stylish_elephants$Internal_Style$Fill,
		_1: {ctor: '[]'}
	}
};
var _mdgriffith$stylish_elephants$Internal_Style$describeLength = F2(
	function (dimension, lenValue) {
		var name = _mdgriffith$stylish_elephants$Internal_Style$dimensionToString(dimension);
		var renderLengthRule = function (len) {
			return A2(
				_mdgriffith$stylish_elephants$Internal_Style$Child,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					A2(
						_elm_lang$core$Basics_ops['++'],
						name,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'-',
							_mdgriffith$stylish_elephants$Internal_Style$lenToString(len)))),
				{
					ctor: '::',
					_0: lenValue(len),
					_1: {ctor: '[]'}
				});
		};
		return _mdgriffith$stylish_elephants$Internal_Style$Batch(
			A2(_elm_lang$core$List$map, renderLengthRule, _mdgriffith$stylish_elephants$Internal_Style$lengths));
	});
var _mdgriffith$stylish_elephants$Internal_Style$Height = {ctor: 'Height'};
var _mdgriffith$stylish_elephants$Internal_Style$Width = {ctor: 'Width'};
var _mdgriffith$stylish_elephants$Internal_Style$Self = function (a) {
	return {ctor: 'Self', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Style$Content = function (a) {
	return {ctor: 'Content', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Style$CenterY = {ctor: 'CenterY'};
var _mdgriffith$stylish_elephants$Internal_Style$CenterX = {ctor: 'CenterX'};
var _mdgriffith$stylish_elephants$Internal_Style$Left = {ctor: 'Left'};
var _mdgriffith$stylish_elephants$Internal_Style$Right = {ctor: 'Right'};
var _mdgriffith$stylish_elephants$Internal_Style$Bottom = {ctor: 'Bottom'};
var _mdgriffith$stylish_elephants$Internal_Style$Top = {ctor: 'Top'};
var _mdgriffith$stylish_elephants$Internal_Style$alignments = {
	ctor: '::',
	_0: _mdgriffith$stylish_elephants$Internal_Style$Top,
	_1: {
		ctor: '::',
		_0: _mdgriffith$stylish_elephants$Internal_Style$Bottom,
		_1: {
			ctor: '::',
			_0: _mdgriffith$stylish_elephants$Internal_Style$Right,
			_1: {
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Internal_Style$Left,
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Internal_Style$CenterX,
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Internal_Style$CenterY,
						_1: {ctor: '[]'}
					}
				}
			}
		}
	}
};
var _mdgriffith$stylish_elephants$Internal_Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _p7 = values(alignment);
		var content = _p7._0;
		var indiv = _p7._1;
		return {
			ctor: '::',
			_0: A2(
				_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
				_mdgriffith$stylish_elephants$Internal_Style$contentName(
					_mdgriffith$stylish_elephants$Internal_Style$Content(alignment)),
				content),
			_1: {
				ctor: '::',
				_0: A2(
					_mdgriffith$stylish_elephants$Internal_Style$Child,
					_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.any),
					{
						ctor: '::',
						_0: A2(
							_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
							_mdgriffith$stylish_elephants$Internal_Style$selfName(
								_mdgriffith$stylish_elephants$Internal_Style$Self(alignment)),
							indiv),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		};
	};
	return _mdgriffith$stylish_elephants$Internal_Style$Batch(
		A2(_elm_lang$core$List$concatMap, createDescription, _mdgriffith$stylish_elephants$Internal_Style$alignments));
};
var _mdgriffith$stylish_elephants$Internal_Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return {
			ctor: '::',
			_0: A2(
				_mdgriffith$stylish_elephants$Internal_Style$Child,
				_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.any),
				{
					ctor: '::',
					_0: A2(
						_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
						_mdgriffith$stylish_elephants$Internal_Style$selfName(
							_mdgriffith$stylish_elephants$Internal_Style$Self(alignment)),
						values(alignment)),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		};
	};
	return _mdgriffith$stylish_elephants$Internal_Style$Batch(
		A2(_elm_lang$core$List$concatMap, createDescription, _mdgriffith$stylish_elephants$Internal_Style$alignments));
};
var _mdgriffith$stylish_elephants$Internal_Style$Intermediate = function (a) {
	return {ctor: 'Intermediate', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Style$emptyIntermediate = F2(
	function (selector, closing) {
		return _mdgriffith$stylish_elephants$Internal_Style$Intermediate(
			{
				selector: selector,
				props: {ctor: '[]'},
				closing: closing,
				others: {ctor: '[]'}
			});
	});
var _mdgriffith$stylish_elephants$Internal_Style$renderRules = F2(
	function (_p8, rules) {
		var _p9 = _p8;
		var _p11 = _p9._0;
		var generateIntermediates = F2(
			function (rule, rendered) {
				var _p10 = rule;
				switch (_p10.ctor) {
					case 'Prop':
						return _elm_lang$core$Native_Utils.update(
							rendered,
							{
								props: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: _p10._0, _1: _p10._1},
									_1: rendered.props
								}
							});
					case 'Supports':
						return _elm_lang$core$Native_Utils.update(
							rendered,
							{
								others: {
									ctor: '::',
									_0: _mdgriffith$stylish_elephants$Internal_Style$Intermediate(
										{
											selector: A2(
												_elm_lang$core$Basics_ops['++'],
												'@supports (',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_p10._0._0,
													A2(
														_elm_lang$core$Basics_ops['++'],
														':',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_p10._0._1,
															A2(_elm_lang$core$Basics_ops['++'], ') {', _p11.selector))))),
											props: _p10._1,
											closing: '\n}',
											others: {ctor: '[]'}
										}),
									_1: rendered.others
								}
							});
					case 'Adjacent':
						return _elm_lang$core$Native_Utils.update(
							rendered,
							{
								others: {
									ctor: '::',
									_0: A2(
										_mdgriffith$stylish_elephants$Internal_Style$renderRules,
										A2(
											_mdgriffith$stylish_elephants$Internal_Style$emptyIntermediate,
											A2(
												_elm_lang$core$Basics_ops['++'],
												_p11.selector,
												A2(_elm_lang$core$Basics_ops['++'], ' + ', _p10._0)),
											''),
										_p10._1),
									_1: rendered.others
								}
							});
					case 'Child':
						return _elm_lang$core$Native_Utils.update(
							rendered,
							{
								others: {
									ctor: '::',
									_0: A2(
										_mdgriffith$stylish_elephants$Internal_Style$renderRules,
										A2(
											_mdgriffith$stylish_elephants$Internal_Style$emptyIntermediate,
											A2(
												_elm_lang$core$Basics_ops['++'],
												_p11.selector,
												A2(_elm_lang$core$Basics_ops['++'], ' > ', _p10._0)),
											''),
										_p10._1),
									_1: rendered.others
								}
							});
					case 'Descriptor':
						return _elm_lang$core$Native_Utils.update(
							rendered,
							{
								others: {
									ctor: '::',
									_0: A2(
										_mdgriffith$stylish_elephants$Internal_Style$renderRules,
										A2(
											_mdgriffith$stylish_elephants$Internal_Style$emptyIntermediate,
											A2(_elm_lang$core$Basics_ops['++'], _p11.selector, _p10._0),
											''),
										_p10._1),
									_1: rendered.others
								}
							});
					default:
						return _elm_lang$core$Native_Utils.update(
							rendered,
							{
								others: {
									ctor: '::',
									_0: A2(
										_mdgriffith$stylish_elephants$Internal_Style$renderRules,
										A2(_mdgriffith$stylish_elephants$Internal_Style$emptyIntermediate, _p11.selector, ''),
										_p10._0),
									_1: rendered.others
								}
							});
				}
			});
		return _mdgriffith$stylish_elephants$Internal_Style$Intermediate(
			A3(_elm_lang$core$List$foldr, generateIntermediates, _p11, rules));
	});
var _mdgriffith$stylish_elephants$Internal_Style$render = function (classes) {
	var renderValues = function (values) {
		return A2(
			_elm_lang$core$String$join,
			'\n',
			A2(
				_elm_lang$core$List$map,
				function (_p12) {
					var _p13 = _p12;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'  ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p13._0,
							A2(
								_elm_lang$core$Basics_ops['++'],
								': ',
								A2(_elm_lang$core$Basics_ops['++'], _p13._1, ';'))));
				},
				values));
	};
	var renderClass = function (rule) {
		var _p14 = rule.props;
		if (_p14.ctor === '[]') {
			return '';
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				rule.selector,
				A2(
					_elm_lang$core$Basics_ops['++'],
					' {\n',
					A2(
						_elm_lang$core$Basics_ops['++'],
						renderValues(rule.props),
						A2(_elm_lang$core$Basics_ops['++'], rule.closing, '\n}'))));
		}
	};
	var renderIntermediate = function (_p15) {
		var _p16 = _p15;
		var _p17 = _p16._0;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			renderClass(_p17),
			A2(
				_elm_lang$core$String$join,
				'\n',
				A2(_elm_lang$core$List$map, renderIntermediate, _p17.others)));
	};
	return A2(
		_elm_lang$core$String$join,
		'\n',
		A2(
			_elm_lang$core$List$map,
			renderIntermediate,
			A3(
				_elm_lang$core$List$foldr,
				F2(
					function (_p18, existing) {
						var _p19 = _p18;
						return {
							ctor: '::',
							_0: A2(
								_mdgriffith$stylish_elephants$Internal_Style$renderRules,
								A2(_mdgriffith$stylish_elephants$Internal_Style$emptyIntermediate, _p19._0, ''),
								_p19._1),
							_1: existing
						};
					}),
				{ctor: '[]'},
				classes)));
};
var _mdgriffith$stylish_elephants$Internal_Style$renderCompact = function (classes) {
	var renderValues = function (values) {
		return A2(
			_elm_lang$core$String$join,
			'',
			A2(
				_elm_lang$core$List$map,
				function (_p20) {
					var _p21 = _p20;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p21._0,
							A2(
								_elm_lang$core$Basics_ops['++'],
								':',
								A2(_elm_lang$core$Basics_ops['++'], _p21._1, ';'))));
				},
				values));
	};
	var renderClass = function (rule) {
		var _p22 = rule.props;
		if (_p22.ctor === '[]') {
			return '';
		} else {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				rule.selector,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'{',
					A2(
						_elm_lang$core$Basics_ops['++'],
						renderValues(rule.props),
						A2(_elm_lang$core$Basics_ops['++'], rule.closing, '}'))));
		}
	};
	var renderIntermediate = function (_p23) {
		var _p24 = _p23;
		var _p25 = _p24._0;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			renderClass(_p25),
			A2(
				_elm_lang$core$String$join,
				'',
				A2(_elm_lang$core$List$map, renderIntermediate, _p25.others)));
	};
	return A2(
		_elm_lang$core$String$join,
		'',
		A2(
			_elm_lang$core$List$map,
			renderIntermediate,
			A3(
				_elm_lang$core$List$foldr,
				F2(
					function (_p26, existing) {
						var _p27 = _p26;
						return {
							ctor: '::',
							_0: A2(
								_mdgriffith$stylish_elephants$Internal_Style$renderRules,
								A2(_mdgriffith$stylish_elephants$Internal_Style$emptyIntermediate, _p27._0, ''),
								_p27._1),
							_1: existing
						};
					}),
				{ctor: '[]'},
				classes)));
};
var _mdgriffith$stylish_elephants$Internal_Style$rules = A2(
	_elm_lang$core$Basics_ops['++'],
	_mdgriffith$stylish_elephants$Internal_Style$overrides,
	_mdgriffith$stylish_elephants$Internal_Style$renderCompact(
		{
			ctor: '::',
			_0: A2(
				_mdgriffith$stylish_elephants$Internal_Style$Class,
				'html,body',
				{
					ctor: '::',
					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', '100%'),
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'padding', '0'),
						_1: {
							ctor: '::',
							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0'),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_mdgriffith$stylish_elephants$Internal_Style$Class,
					A2(
						_elm_lang$core$Basics_ops['++'],
						_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.any),
						':focus'),
					{
						ctor: '::',
						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'outline', 'none'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_mdgriffith$stylish_elephants$Internal_Style$Class,
						_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.root),
						{
							ctor: '::',
							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'width', '100%'),
							_1: {
								ctor: '::',
								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', 'auto'),
								_1: {
									ctor: '::',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'min-height', '100%'),
									_1: {
										ctor: '::',
										_0: A2(
											_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
											'.se.el.height-content',
											{
												ctor: '::',
												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', '100%'),
												_1: {
													ctor: '::',
													_0: A2(
														_mdgriffith$stylish_elephants$Internal_Style$Child,
														_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.heightFill),
														{
															ctor: '::',
															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', '100%'),
															_1: {ctor: '[]'}
														}),
													_1: {ctor: '[]'}
												}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
												A2(_elm_lang$core$Basics_ops['++'], '.wireframe .', _mdgriffith$stylish_elephants$Internal_Style$classes.any),
												{
													ctor: '::',
													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'outline', '2px dashed black'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_mdgriffith$stylish_elephants$Internal_Style$Class,
							_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.any),
							{
								ctor: '::',
								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'position', 'relative'),
								_1: {
									ctor: '::',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'border', 'none'),
									_1: {
										ctor: '::',
										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-shrink', '0'),
										_1: {
											ctor: '::',
											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'flex'),
											_1: {
												ctor: '::',
												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-direction', 'row'),
												_1: {
													ctor: '::',
													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-basis', 'auto'),
													_1: {
														ctor: '::',
														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'resize', 'none'),
														_1: {
															ctor: '::',
															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'box-sizing', 'border-box'),
															_1: {
																ctor: '::',
																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0'),
																_1: {
																	ctor: '::',
																	_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'padding', '0'),
																	_1: {
																		ctor: '::',
																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'border-width', '0'),
																		_1: {
																			ctor: '::',
																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'border-style', 'solid'),
																			_1: {
																				ctor: '::',
																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-size', 'inherit'),
																				_1: {
																					ctor: '::',
																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'color', 'inherit'),
																					_1: {
																						ctor: '::',
																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-family', 'inherit'),
																						_1: {
																							ctor: '::',
																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'line-height', '1'),
																							_1: {
																								ctor: '::',
																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-weight', 'inherit'),
																								_1: {
																									ctor: '::',
																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'text-decoration', 'none'),
																									_1: {
																										ctor: '::',
																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-style', 'inherit'),
																										_1: {
																											ctor: '::',
																											_0: A2(
																												_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																												_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.noTextSelection),
																												{
																													ctor: '::',
																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'user-select', 'none'),
																													_1: {
																														ctor: '::',
																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, '-ms-user-select', 'none'),
																														_1: {ctor: '[]'}
																													}
																												}),
																											_1: {
																												ctor: '::',
																												_0: A2(
																													_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																													_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.cursorPointer),
																													{
																														ctor: '::',
																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'cursor', 'pointer'),
																														_1: {ctor: '[]'}
																													}),
																												_1: {
																													ctor: '::',
																													_0: A2(
																														_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																														_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.cursorText),
																														{
																															ctor: '::',
																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'cursor', 'text'),
																															_1: {ctor: '[]'}
																														}),
																													_1: {
																														ctor: '::',
																														_0: A2(
																															_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																															_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.passPointerEvents),
																															{
																																ctor: '::',
																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'none'),
																																_1: {ctor: '[]'}
																															}),
																														_1: {
																															ctor: '::',
																															_0: A2(
																																_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.capturePointerEvents),
																																{
																																	ctor: '::',
																																	_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'nauto'),
																																	_1: {ctor: '[]'}
																																}),
																															_1: {
																																ctor: '::',
																																_0: A2(
																																	_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																	_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.transparent),
																																	{
																																		ctor: '::',
																																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'opacity', '0'),
																																		_1: {ctor: '[]'}
																																	}),
																																_1: {
																																	ctor: '::',
																																	_0: A2(
																																		_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																		_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.opaque),
																																		{
																																			ctor: '::',
																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'opacity', '1'),
																																			_1: {ctor: '[]'}
																																		}),
																																	_1: {
																																		ctor: '::',
																																		_0: A2(
																																			_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																			'.hover-transparent:hover',
																																			{
																																				ctor: '::',
																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'opacity', '0'),
																																				_1: {ctor: '[]'}
																																			}),
																																		_1: {
																																			ctor: '::',
																																			_0: A2(
																																				_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																				'.hover-opaque:hover',
																																				{
																																					ctor: '::',
																																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'opacity', '1'),
																																					_1: {ctor: '[]'}
																																				}),
																																			_1: {
																																				ctor: '::',
																																				_0: A2(
																																					_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																					'.hover-transparent:hover',
																																					{
																																						ctor: '::',
																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'opacity', '0'),
																																						_1: {ctor: '[]'}
																																					}),
																																				_1: {
																																					ctor: '::',
																																					_0: A2(
																																						_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																						'.hover-opaque:hover',
																																						{
																																							ctor: '::',
																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'opacity', '1'),
																																							_1: {ctor: '[]'}
																																						}),
																																					_1: {
																																						ctor: '::',
																																						_0: A2(
																																							_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																							'.focus-transparent:focus',
																																							{
																																								ctor: '::',
																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'opacity', '0'),
																																								_1: {ctor: '[]'}
																																							}),
																																						_1: {
																																							ctor: '::',
																																							_0: A2(
																																								_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																								'.focus-opaque:focus',
																																								{
																																									ctor: '::',
																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'opacity', '1'),
																																									_1: {ctor: '[]'}
																																								}),
																																							_1: {
																																								ctor: '::',
																																								_0: A2(
																																									_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																									'.active-transparent:active',
																																									{
																																										ctor: '::',
																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'opacity', '0'),
																																										_1: {ctor: '[]'}
																																									}),
																																								_1: {
																																									ctor: '::',
																																									_0: A2(
																																										_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																										'.active-opaque:active',
																																										{
																																											ctor: '::',
																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'opacity', '1'),
																																											_1: {ctor: '[]'}
																																										}),
																																									_1: {
																																										ctor: '::',
																																										_0: A2(
																																											_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																											'.transition',
																																											{
																																												ctor: '::',
																																												_0: A2(
																																													_mdgriffith$stylish_elephants$Internal_Style$Prop,
																																													'transition',
																																													A2(
																																														_elm_lang$core$String$join,
																																														', ',
																																														A2(
																																															_elm_lang$core$List$map,
																																															function (x) {
																																																return A2(_elm_lang$core$Basics_ops['++'], x, ' 160ms');
																																															},
																																															{
																																																ctor: '::',
																																																_0: 'transform',
																																																_1: {
																																																	ctor: '::',
																																																	_0: 'opacity',
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 'filter',
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 'background-color',
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 'color',
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 'font-size',
																																																					_1: {ctor: '[]'}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}))),
																																												_1: {ctor: '[]'}
																																											}),
																																										_1: {
																																											ctor: '::',
																																											_0: A2(
																																												_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																												_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.overflowHidden),
																																												{
																																													ctor: '::',
																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'overflow', 'hidden'),
																																													_1: {
																																														ctor: '::',
																																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, '-ms-overflow-style', 'none'),
																																														_1: {ctor: '[]'}
																																													}
																																												}),
																																											_1: {
																																												ctor: '::',
																																												_0: A2(
																																													_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																													_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.scrollbars),
																																													{
																																														ctor: '::',
																																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'overflow', 'auto'),
																																														_1: {
																																															ctor: '::',
																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-shrink', '1'),
																																															_1: {ctor: '[]'}
																																														}
																																													}),
																																												_1: {
																																													ctor: '::',
																																													_0: A2(
																																														_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																														_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.scrollbarsX),
																																														{
																																															ctor: '::',
																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'overflow-x', 'auto'),
																																															_1: {
																																																ctor: '::',
																																																_0: A2(
																																																	_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																	_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.row),
																																																	{
																																																		ctor: '::',
																																																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-shrink', '1'),
																																																		_1: {ctor: '[]'}
																																																	}),
																																																_1: {ctor: '[]'}
																																															}
																																														}),
																																													_1: {
																																														ctor: '::',
																																														_0: A2(
																																															_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																															_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.scrollbarsY),
																																															{
																																																ctor: '::',
																																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'overflow-y', 'auto'),
																																																_1: {
																																																	ctor: '::',
																																																	_0: A2(
																																																		_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																		_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.column),
																																																		{
																																																			ctor: '::',
																																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-shrink', '1'),
																																																			_1: {ctor: '[]'}
																																																		}),
																																																	_1: {ctor: '[]'}
																																																}
																																															}),
																																														_1: {
																																															ctor: '::',
																																															_0: A2(
																																																_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.clip),
																																																{
																																																	ctor: '::',
																																																	_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'overflow', 'hidden'),
																																																	_1: {ctor: '[]'}
																																																}),
																																															_1: {
																																																ctor: '::',
																																																_0: A2(
																																																	_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																	_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.clipX),
																																																	{
																																																		ctor: '::',
																																																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'overflow-x', 'hidden'),
																																																		_1: {ctor: '[]'}
																																																	}),
																																																_1: {
																																																	ctor: '::',
																																																	_0: A2(
																																																		_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																		_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.clipY),
																																																		{
																																																			ctor: '::',
																																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'overflow-y', 'hidden'),
																																																			_1: {ctor: '[]'}
																																																		}),
																																																	_1: {
																																																		ctor: '::',
																																																		_0: A2(
																																																			_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																			_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.widthContent),
																																																			{
																																																				ctor: '::',
																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'width', 'auto'),
																																																				_1: {ctor: '[]'}
																																																			}),
																																																		_1: {
																																																			ctor: '::',
																																																			_0: A2(
																																																				_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																				_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.borderNone),
																																																				{
																																																					ctor: '::',
																																																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'border-width', '0'),
																																																					_1: {ctor: '[]'}
																																																				}),
																																																			_1: {
																																																				ctor: '::',
																																																				_0: A2(
																																																					_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																					_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.borderDashed),
																																																					{
																																																						ctor: '::',
																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'border-style', 'dashed'),
																																																						_1: {ctor: '[]'}
																																																					}),
																																																				_1: {
																																																					ctor: '::',
																																																					_0: A2(
																																																						_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																						_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.borderDotted),
																																																						{
																																																							ctor: '::',
																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'border-style', 'dotted'),
																																																							_1: {ctor: '[]'}
																																																						}),
																																																					_1: {
																																																						ctor: '::',
																																																						_0: A2(
																																																							_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																							_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.borderSolid),
																																																							{
																																																								ctor: '::',
																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'border-style', 'solid'),
																																																								_1: {ctor: '[]'}
																																																							}),
																																																						_1: {
																																																							ctor: '::',
																																																							_0: A2(
																																																								_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																								_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.text),
																																																								{
																																																									ctor: '::',
																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'white-space', 'pre'),
																																																									_1: {
																																																										ctor: '::',
																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'inline-block'),
																																																										_1: {ctor: '[]'}
																																																									}
																																																								}),
																																																							_1: {
																																																								ctor: '::',
																																																								_0: A2(
																																																									_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																									_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.single),
																																																									{
																																																										ctor: '::',
																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'flex'),
																																																										_1: {
																																																											ctor: '::',
																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-direction', 'column'),
																																																											_1: {
																																																												ctor: '::',
																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'white-space', 'pre'),
																																																												_1: {
																																																													ctor: '::',
																																																													_0: A2(
																																																														_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																														'.se-button',
																																																														{
																																																															ctor: '::',
																																																															_0: A2(
																																																																_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.text),
																																																																{
																																																																	ctor: '::',
																																																																	_0: A2(
																																																																		_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																		_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.heightFill),
																																																																		{
																																																																			ctor: '::',
																																																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '0'),
																																																																			_1: {ctor: '[]'}
																																																																		}),
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: A2(
																																																																			_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																			_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.widthFill),
																																																																			{
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'auto !important'),
																																																																				_1: {ctor: '[]'}
																																																																			}),
																																																																		_1: {ctor: '[]'}
																																																																	}
																																																																}),
																																																															_1: {ctor: '[]'}
																																																														}),
																																																													_1: {
																																																														ctor: '::',
																																																														_0: A2(
																																																															_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																															_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.heightContent),
																																																															{
																																																																ctor: '::',
																																																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', 'auto'),
																																																																_1: {ctor: '[]'}
																																																															}),
																																																														_1: {
																																																															ctor: '::',
																																																															_0: A2(
																																																																_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.heightFill),
																																																																{
																																																																	ctor: '::',
																																																																	_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '100000'),
																																																																	_1: {ctor: '[]'}
																																																																}),
																																																															_1: {
																																																																ctor: '::',
																																																																_0: A2(
																																																																	_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																	_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.widthFill),
																																																																	{
																																																																		ctor: '::',
																																																																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'stretch !important'),
																																																																		_1: {ctor: '[]'}
																																																																	}),
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: A2(
																																																																		_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																		_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.widthContent),
																																																																		{
																																																																			ctor: '::',
																																																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'left'),
																																																																			_1: {ctor: '[]'}
																																																																		}),
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: _mdgriffith$stylish_elephants$Internal_Style$describeAlignment(
																																																																			function (alignment) {
																																																																				var _p28 = alignment;
																																																																				switch (_p28.ctor) {
																																																																					case 'Top':
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'flex-start'),
																																																																								_1: {ctor: '[]'}
																																																																							},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-bottom', 'auto !important'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-top', '0 !important'),
																																																																									_1: {ctor: '[]'}
																																																																								}
																																																																							}
																																																																						};
																																																																					case 'Bottom':
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'flex-end'),
																																																																								_1: {ctor: '[]'}
																																																																							},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-top', 'auto !important'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-bottom', '0 !important'),
																																																																									_1: {ctor: '[]'}
																																																																								}
																																																																							}
																																																																						};
																																																																					case 'Right':
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'flex-end'),
																																																																								_1: {ctor: '[]'}
																																																																							},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'flex-end'),
																																																																								_1: {ctor: '[]'}
																																																																							}
																																																																						};
																																																																					case 'Left':
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'flex-start'),
																																																																								_1: {ctor: '[]'}
																																																																							},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'flex-start'),
																																																																								_1: {ctor: '[]'}
																																																																							}
																																																																						};
																																																																					case 'CenterX':
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'center'),
																																																																								_1: {ctor: '[]'}
																																																																							},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'center'),
																																																																								_1: {ctor: '[]'}
																																																																							}
																																																																						};
																																																																					default:
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {
																																																																								ctor: '::',
																																																																								_0: A2(
																																																																									_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																									_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.any),
																																																																									{
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-top', 'auto'),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-bottom', 'auto'),
																																																																											_1: {ctor: '[]'}
																																																																										}
																																																																									}),
																																																																								_1: {ctor: '[]'}
																																																																							},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-top', 'auto !important'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-bottom', 'auto !important'),
																																																																									_1: {ctor: '[]'}
																																																																								}
																																																																							}
																																																																						};
																																																																				}
																																																																			}),
																																																																		_1: {ctor: '[]'}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}),
																																																								_1: {
																																																									ctor: '::',
																																																									_0: A2(
																																																										_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																										_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.row),
																																																										{
																																																											ctor: '::',
																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'flex'),
																																																											_1: {
																																																												ctor: '::',
																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-direction', 'row'),
																																																												_1: {
																																																													ctor: '::',
																																																													_0: A2(
																																																														_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																														_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.any),
																																																														{
																																																															ctor: '::',
																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-basis', '0%'),
																																																															_1: {
																																																																ctor: '::',
																																																																_0: A2(
																																																																	_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																	_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.widthExact),
																																																																	{
																																																																		ctor: '::',
																																																																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-basis', 'auto'),
																																																																		_1: {ctor: '[]'}
																																																																	}),
																																																																_1: {ctor: '[]'}
																																																															}
																																																														}),
																																																													_1: {
																																																														ctor: '::',
																																																														_0: A2(
																																																															_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																															_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.heightFill),
																																																															{
																																																																ctor: '::',
																																																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'stretch !important'),
																																																																_1: {ctor: '[]'}
																																																															}),
																																																														_1: {
																																																															ctor: '::',
																																																															_0: A2(
																																																																_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																'.height-fill-portion',
																																																																{
																																																																	ctor: '::',
																																																																	_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'stretch !important'),
																																																																	_1: {ctor: '[]'}
																																																																}),
																																																															_1: {
																																																																ctor: '::',
																																																																_0: A2(
																																																																	_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																	'.height-fill-between',
																																																																	{
																																																																		ctor: '::',
																																																																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'stretch'),
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: A2(
																																																																				_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																				'.aligned-vertically',
																																																																				{
																																																																					ctor: '::',
																																																																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', '100%'),
																																																																					_1: {ctor: '[]'}
																																																																				}),
																																																																			_1: {ctor: '[]'}
																																																																		}
																																																																	}),
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: A2(
																																																																		_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																		_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.widthFill),
																																																																		{
																																																																			ctor: '::',
																																																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '100000'),
																																																																			_1: {ctor: '[]'}
																																																																		}),
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: A2(
																																																																			_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																			_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.container),
																																																																			{
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '0'),
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-basis', 'auto'),
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'stretch'),
																																																																						_1: {ctor: '[]'}
																																																																					}
																																																																				}
																																																																			}),
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: A2(
																																																																				_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																				'u:first-of-type.align-container-right',
																																																																				{
																																																																					ctor: '::',
																																																																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '1'),
																																																																					_1: {ctor: '[]'}
																																																																				}),
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																					's:first-of-type.align-container-center-x',
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '1'),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(
																																																																								_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																								_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignCenterX),
																																																																								{
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-left', 'auto !important'),
																																																																									_1: {ctor: '[]'}
																																																																								}),
																																																																							_1: {ctor: '[]'}
																																																																						}
																																																																					}),
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: A2(
																																																																						_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																						's:last-of-type.align-container-center-x',
																																																																						{
																																																																							ctor: '::',
																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '1'),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(
																																																																									_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																									_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignCenterX),
																																																																									{
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-right', 'auto !important'),
																																																																										_1: {ctor: '[]'}
																																																																									}),
																																																																								_1: {ctor: '[]'}
																																																																							}
																																																																						}),
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: A2(
																																																																							_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																							's:only-of-type.align-container-center-x',
																																																																							{
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '1'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(
																																																																										_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																										_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignCenterY),
																																																																										{
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-top', 'auto !important'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-bottom', 'auto !important'),
																																																																												_1: {ctor: '[]'}
																																																																											}
																																																																										}),
																																																																									_1: {ctor: '[]'}
																																																																								}
																																																																							}),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(
																																																																								_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																								's:last-of-type.align-container-center-x ~ u',
																																																																								{
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '0'),
																																																																									_1: {ctor: '[]'}
																																																																								}),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(
																																																																									_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																									'u:first-of-type.align-container-right ~ s.align-container-center-x',
																																																																									{
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '0'),
																																																																										_1: {ctor: '[]'}
																																																																									}),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: _mdgriffith$stylish_elephants$Internal_Style$describeAlignment(
																																																																										function (alignment) {
																																																																											var _p29 = alignment;
																																																																											switch (_p29.ctor) {
																																																																												case 'Top':
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'flex-start'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'flex-start'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													};
																																																																												case 'Bottom':
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'flex-end'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'flex-end'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													};
																																																																												case 'Right':
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'flex-end'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {ctor: '[]'}
																																																																													};
																																																																												case 'Left':
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'flex-start'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {ctor: '[]'}
																																																																													};
																																																																												case 'CenterX':
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'center'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {ctor: '[]'}
																																																																													};
																																																																												default:
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'center'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'center'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													};
																																																																											}
																																																																										}),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(
																																																																											_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																											_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.spaceEvenly),
																																																																											{
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'space-between'),
																																																																												_1: {ctor: '[]'}
																																																																											}),
																																																																										_1: {ctor: '[]'}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}),
																																																									_1: {
																																																										ctor: '::',
																																																										_0: A2(
																																																											_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																											_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.column),
																																																											{
																																																												ctor: '::',
																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'flex'),
																																																												_1: {
																																																													ctor: '::',
																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-direction', 'column'),
																																																													_1: {
																																																														ctor: '::',
																																																														_0: A2(
																																																															_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																															_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.heightFill),
																																																															{
																																																																ctor: '::',
																																																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '100000'),
																																																																_1: {ctor: '[]'}
																																																															}),
																																																														_1: {
																																																															ctor: '::',
																																																															_0: A2(
																																																																_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.widthFill),
																																																																{
																																																																	ctor: '::',
																																																																	_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'stretch !important'),
																																																																	_1: {ctor: '[]'}
																																																																}),
																																																															_1: {
																																																																ctor: '::',
																																																																_0: A2(
																																																																	_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																	'.width-fill-portion',
																																																																	{
																																																																		ctor: '::',
																																																																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'stretch !important'),
																																																																		_1: {ctor: '[]'}
																																																																	}),
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: A2(
																																																																		_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																		'.width-fill-between',
																																																																		{
																																																																			ctor: '::',
																																																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'stretch'),
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																					'.aligned-horizontally',
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'width', '100%'),
																																																																						_1: {ctor: '[]'}
																																																																					}),
																																																																				_1: {ctor: '[]'}
																																																																			}
																																																																		}),
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: A2(
																																																																			_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																			_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.widthContent),
																																																																			{
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'left'),
																																																																				_1: {ctor: '[]'}
																																																																			}),
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: A2(
																																																																				_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																				'u:first-of-type.align-container-bottom',
																																																																				{
																																																																					ctor: '::',
																																																																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '1'),
																																																																					_1: {ctor: '[]'}
																																																																				}),
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																					's:first-of-type.align-container-center-y',
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '1'),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(
																																																																								_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																								_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignCenterY),
																																																																								{
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-top', 'auto !important'),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-bottom', '0 !important'),
																																																																										_1: {ctor: '[]'}
																																																																									}
																																																																								}),
																																																																							_1: {ctor: '[]'}
																																																																						}
																																																																					}),
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: A2(
																																																																						_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																						's:last-of-type.align-container-center-y',
																																																																						{
																																																																							ctor: '::',
																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '1'),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(
																																																																									_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																									_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignCenterY),
																																																																									{
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-bottom', 'auto !important'),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-top', '0 !important'),
																																																																											_1: {ctor: '[]'}
																																																																										}
																																																																									}),
																																																																								_1: {ctor: '[]'}
																																																																							}
																																																																						}),
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: A2(
																																																																							_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																							's:only-of-type.align-container-center-y',
																																																																							{
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '1'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(
																																																																										_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																										_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.alignCenterY),
																																																																										{
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-top', 'auto !important'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-bottom', 'auto !important'),
																																																																												_1: {ctor: '[]'}
																																																																											}
																																																																										}),
																																																																									_1: {ctor: '[]'}
																																																																								}
																																																																							}),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(
																																																																								_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																								's:last-of-type.align-container-center-y ~ u',
																																																																								{
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '0'),
																																																																									_1: {ctor: '[]'}
																																																																								}),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(
																																																																									_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																									'u:first-of-type.align-container-bottom ~ s.align-container-center-y',
																																																																									{
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '0'),
																																																																										_1: {ctor: '[]'}
																																																																									}),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: _mdgriffith$stylish_elephants$Internal_Style$describeAlignment(
																																																																										function (alignment) {
																																																																											var _p30 = alignment;
																																																																											switch (_p30.ctor) {
																																																																												case 'Top':
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'flex-start'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-bottom', 'auto'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													};
																																																																												case 'Bottom':
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'flex-end'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin-top', 'auto'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													};
																																																																												case 'Right':
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'flex-end'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'flex-end'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													};
																																																																												case 'Left':
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'flex-start'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'flex-start'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													};
																																																																												case 'CenterX':
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'center'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'center'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													};
																																																																												default:
																																																																													return {
																																																																														ctor: '_Tuple2',
																																																																														_0: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'center'),
																																																																															_1: {ctor: '[]'}
																																																																														},
																																																																														_1: {ctor: '[]'}
																																																																													};
																																																																											}
																																																																										}),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(
																																																																											_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																											_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.container),
																																																																											{
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-grow', '0'),
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'flex-basis', 'auto'),
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'width', '100%'),
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-self', 'stretch !important'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													}
																																																																												}
																																																																											}),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(
																																																																												_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																												_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.spaceEvenly),
																																																																												{
																																																																													ctor: '::',
																																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'space-between'),
																																																																													_1: {ctor: '[]'}
																																																																												}),
																																																																											_1: {ctor: '[]'}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}),
																																																										_1: {
																																																											ctor: '::',
																																																											_0: A2(
																																																												_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																												_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.grid),
																																																												{
																																																													ctor: '::',
																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', '-ms-grid'),
																																																													_1: {
																																																														ctor: '::',
																																																														_0: A2(
																																																															_mdgriffith$stylish_elephants$Internal_Style$Supports,
																																																															{ctor: '_Tuple2', _0: 'display', _1: 'grid'},
																																																															{
																																																																ctor: '::',
																																																																_0: {ctor: '_Tuple2', _0: 'display', _1: 'grid'},
																																																																_1: {ctor: '[]'}
																																																															}),
																																																														_1: {
																																																															ctor: '::',
																																																															_0: _mdgriffith$stylish_elephants$Internal_Style$gridAlignments(
																																																																function (alignment) {
																																																																	var _p31 = alignment;
																																																																	switch (_p31.ctor) {
																																																																		case 'Top':
																																																																			return {
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'flex-start'),
																																																																				_1: {ctor: '[]'}
																																																																			};
																																																																		case 'Bottom':
																																																																			return {
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'flex-end'),
																																																																				_1: {ctor: '[]'}
																																																																			};
																																																																		case 'Right':
																																																																			return {
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'flex-end'),
																																																																				_1: {ctor: '[]'}
																																																																			};
																																																																		case 'Left':
																																																																			return {
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'flex-start'),
																																																																				_1: {ctor: '[]'}
																																																																			};
																																																																		case 'CenterX':
																																																																			return {
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'align-items', 'center'),
																																																																				_1: {ctor: '[]'}
																																																																			};
																																																																		default:
																																																																			return {
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'justify-content', 'center'),
																																																																				_1: {ctor: '[]'}
																																																																			};
																																																																	}
																																																																}),
																																																															_1: {ctor: '[]'}
																																																														}
																																																													}
																																																												}),
																																																											_1: {
																																																												ctor: '::',
																																																												_0: A2(
																																																													_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																													_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.page),
																																																													{
																																																														ctor: '::',
																																																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'block'),
																																																														_1: {
																																																															ctor: '::',
																																																															_0: A2(
																																																																_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																_mdgriffith$stylish_elephants$Internal_Style$dot(
																																																																	A2(_elm_lang$core$Basics_ops['++'], _mdgriffith$stylish_elephants$Internal_Style$classes.any, ':first-child')),
																																																																{
																																																																	ctor: '::',
																																																																	_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0 !important'),
																																																																	_1: {ctor: '[]'}
																																																																}),
																																																															_1: {
																																																																ctor: '::',
																																																																_0: A2(
																																																																	_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																	_mdgriffith$stylish_elephants$Internal_Style$dot(
																																																																		A2(
																																																																			_elm_lang$core$Basics_ops['++'],
																																																																			_mdgriffith$stylish_elephants$Internal_Style$classes.any,
																																																																			A2(
																																																																				_elm_lang$core$Basics_ops['++'],
																																																																				_mdgriffith$stylish_elephants$Internal_Style$selfName(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Self(_mdgriffith$stylish_elephants$Internal_Style$Left)),
																																																																				':first-child + .se'))),
																																																																	{
																																																																		ctor: '::',
																																																																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0 !important'),
																																																																		_1: {ctor: '[]'}
																																																																	}),
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: A2(
																																																																		_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																		_mdgriffith$stylish_elephants$Internal_Style$dot(
																																																																			A2(
																																																																				_elm_lang$core$Basics_ops['++'],
																																																																				_mdgriffith$stylish_elephants$Internal_Style$classes.any,
																																																																				A2(
																																																																					_elm_lang$core$Basics_ops['++'],
																																																																					_mdgriffith$stylish_elephants$Internal_Style$selfName(
																																																																						_mdgriffith$stylish_elephants$Internal_Style$Self(_mdgriffith$stylish_elephants$Internal_Style$Right)),
																																																																					':first-child + .se'))),
																																																																		{
																																																																			ctor: '::',
																																																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0 !important'),
																																																																			_1: {ctor: '[]'}
																																																																		}),
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: _mdgriffith$stylish_elephants$Internal_Style$describeAlignment(
																																																																			function (alignment) {
																																																																				var _p32 = alignment;
																																																																				switch (_p32.ctor) {
																																																																					case 'Top':
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {ctor: '[]'},
																																																																							_1: {ctor: '[]'}
																																																																						};
																																																																					case 'Bottom':
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {ctor: '[]'},
																																																																							_1: {ctor: '[]'}
																																																																						};
																																																																					case 'Right':
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {ctor: '[]'},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'float', 'right'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(
																																																																										_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																										':after:',
																																																																										{
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'content', '\"\"'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'table'),
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'clear', 'both'),
																																																																													_1: {ctor: '[]'}
																																																																												}
																																																																											}
																																																																										}),
																																																																									_1: {ctor: '[]'}
																																																																								}
																																																																							}
																																																																						};
																																																																					case 'Left':
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {ctor: '[]'},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'float', 'left'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(
																																																																										_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																										':after:',
																																																																										{
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'content', '\"\"'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'table'),
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'clear', 'both'),
																																																																													_1: {ctor: '[]'}
																																																																												}
																																																																											}
																																																																										}),
																																																																									_1: {ctor: '[]'}
																																																																								}
																																																																							}
																																																																						};
																																																																					case 'CenterX':
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {ctor: '[]'},
																																																																							_1: {ctor: '[]'}
																																																																						};
																																																																					default:
																																																																						return {
																																																																							ctor: '_Tuple2',
																																																																							_0: {ctor: '[]'},
																																																																							_1: {ctor: '[]'}
																																																																						};
																																																																				}
																																																																			}),
																																																																		_1: {ctor: '[]'}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}),
																																																												_1: {
																																																													ctor: '::',
																																																													_0: A2(
																																																														_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																														_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.paragraph),
																																																														{
																																																															ctor: '::',
																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'block'),
																																																															_1: {
																																																																ctor: '::',
																																																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'white-space', 'normal'),
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: A2(
																																																																		_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																		_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.text),
																																																																		{
																																																																			ctor: '::',
																																																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'inline'),
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'white-space', 'normal'),
																																																																				_1: {ctor: '[]'}
																																																																			}
																																																																		}),
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: A2(
																																																																			_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																			_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.single),
																																																																			{
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'inline'),
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'white-space', 'normal'),
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: A2(
																																																																							_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																							_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.inFront),
																																																																							{
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'flex'),
																																																																								_1: {ctor: '[]'}
																																																																							}),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(
																																																																								_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																								_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.behind),
																																																																								{
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'flex'),
																																																																									_1: {ctor: '[]'}
																																																																								}),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(
																																																																									_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																									_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.above),
																																																																									{
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'flex'),
																																																																										_1: {ctor: '[]'}
																																																																									}),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(
																																																																										_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																										_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.below),
																																																																										{
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'flex'),
																																																																											_1: {ctor: '[]'}
																																																																										}),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(
																																																																											_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																											_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.onRight),
																																																																											{
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'flex'),
																																																																												_1: {ctor: '[]'}
																																																																											}),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(
																																																																												_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																												_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.onLeft),
																																																																												{
																																																																													ctor: '::',
																																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'flex'),
																																																																													_1: {ctor: '[]'}
																																																																												}),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(
																																																																													_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																													_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.text),
																																																																													{
																																																																														ctor: '::',
																																																																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'inline'),
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'white-space', 'normal'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													}),
																																																																												_1: {ctor: '[]'}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}),
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: A2(
																																																																				_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																				_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.row),
																																																																				{
																																																																					ctor: '::',
																																																																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'inline-flex'),
																																																																					_1: {ctor: '[]'}
																																																																				}),
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																					_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.column),
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'inline-flex'),
																																																																						_1: {ctor: '[]'}
																																																																					}),
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: A2(
																																																																						_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																						_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.grid),
																																																																						{
																																																																							ctor: '::',
																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'inline-grid'),
																																																																							_1: {ctor: '[]'}
																																																																						}),
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: _mdgriffith$stylish_elephants$Internal_Style$describeAlignment(
																																																																							function (alignment) {
																																																																								var _p33 = alignment;
																																																																								switch (_p33.ctor) {
																																																																									case 'Top':
																																																																										return {
																																																																											ctor: '_Tuple2',
																																																																											_0: {ctor: '[]'},
																																																																											_1: {ctor: '[]'}
																																																																										};
																																																																									case 'Bottom':
																																																																										return {
																																																																											ctor: '_Tuple2',
																																																																											_0: {ctor: '[]'},
																																																																											_1: {ctor: '[]'}
																																																																										};
																																																																									case 'Right':
																																																																										return {
																																																																											ctor: '_Tuple2',
																																																																											_0: {ctor: '[]'},
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'float', 'right'),
																																																																												_1: {ctor: '[]'}
																																																																											}
																																																																										};
																																																																									case 'Left':
																																																																										return {
																																																																											ctor: '_Tuple2',
																																																																											_0: {ctor: '[]'},
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'float', 'left'),
																																																																												_1: {ctor: '[]'}
																																																																											}
																																																																										};
																																																																									case 'CenterX':
																																																																										return {
																																																																											ctor: '_Tuple2',
																																																																											_0: {ctor: '[]'},
																																																																											_1: {ctor: '[]'}
																																																																										};
																																																																									default:
																																																																										return {
																																																																											ctor: '_Tuple2',
																																																																											_0: {ctor: '[]'},
																																																																											_1: {ctor: '[]'}
																																																																										};
																																																																								}
																																																																							}),
																																																																						_1: {ctor: '[]'}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}),
																																																													_1: {
																																																														ctor: '::',
																																																														_0: A2(
																																																															_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																															'.hidden',
																																																															{
																																																																ctor: '::',
																																																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'display', 'none'),
																																																																_1: {ctor: '[]'}
																																																															}),
																																																														_1: {
																																																															ctor: '::',
																																																															_0: _mdgriffith$stylish_elephants$Internal_Style$Batch(
																																																																A3(
																																																																	_elm_lang$core$Basics$flip,
																																																																	_elm_lang$core$List$map,
																																																																	_mdgriffith$stylish_elephants$Internal_Style$locations,
																																																																	function (loc) {
																																																																		var _p34 = loc;
																																																																		switch (_p34.ctor) {
																																																																			case 'Above':
																																																																				return A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																					_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.above),
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'position', 'absolute'),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'bottom', '100%'),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'left', '0'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'width', '100%'),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'z-index', '10'),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0 !important'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(
																																																																													_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																													_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.heightFill),
																																																																													{
																																																																														ctor: '::',
																																																																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', 'auto'),
																																																																														_1: {ctor: '[]'}
																																																																													}),
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: A2(
																																																																														_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																														_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.widthFill),
																																																																														{
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'width', '100%'),
																																																																															_1: {ctor: '[]'}
																																																																														}),
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'none'),
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(
																																																																																_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																																_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.any),
																																																																																{
																																																																																	ctor: '::',
																																																																																	_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'auto'),
																																																																																	_1: {ctor: '[]'}
																																																																																}),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					});
																																																																			case 'Below':
																																																																				return A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																					_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.below),
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'position', 'absolute'),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'bottom', '0'),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'left', '0'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', '0'),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'width', '100%'),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'z-index', '10'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0 !important'),
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'auto'),
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: A2(
																																																																															_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																															_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.heightFill),
																																																																															{
																																																																																ctor: '::',
																																																																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', 'auto'),
																																																																																_1: {ctor: '[]'}
																																																																															}),
																																																																														_1: {ctor: '[]'}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					});
																																																																			case 'OnRight':
																																																																				return A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																					_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.onRight),
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'position', 'absolute'),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'left', '100%'),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'top', '0'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', '100%'),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0 !important'),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'z-index', '10'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'auto'),
																																																																												_1: {ctor: '[]'}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					});
																																																																			case 'OnLeft':
																																																																				return A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																					_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.onLeft),
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'position', 'absolute'),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'right', '100%'),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'top', '0'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', '100%'),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0 !important'),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'z-index', '10'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'auto'),
																																																																												_1: {ctor: '[]'}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					});
																																																																			case 'Within':
																																																																				return A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																					_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.inFront),
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'position', 'absolute'),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'width', '100%'),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', '100%'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'left', '0'),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'top', '0'),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0 !important'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'z-index', '10'),
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'none'),
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: A2(
																																																																															_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																															_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.any),
																																																																															{
																																																																																ctor: '::',
																																																																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'auto'),
																																																																																_1: {ctor: '[]'}
																																																																															}),
																																																																														_1: {ctor: '[]'}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					});
																																																																			default:
																																																																				return A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																					_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.behind),
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'position', 'absolute'),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'width', '100%'),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', '100%'),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'left', '0'),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'top', '0'),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'margin', '0 !important'),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'z-index', '0'),
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'none'),
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: A2(
																																																																															_mdgriffith$stylish_elephants$Internal_Style$Child,
																																																																															'.se',
																																																																															{
																																																																																ctor: '::',
																																																																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'auto'),
																																																																																_1: {ctor: '[]'}
																																																																															}),
																																																																														_1: {ctor: '[]'}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					});
																																																																		}
																																																																	})),
																																																															_1: {
																																																																ctor: '::',
																																																																_0: A2(
																																																																	_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																	_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textThin),
																																																																	{
																																																																		ctor: '::',
																																																																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-weight', '100'),
																																																																		_1: {ctor: '[]'}
																																																																	}),
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: A2(
																																																																		_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																		_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textExtraLight),
																																																																		{
																																																																			ctor: '::',
																																																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-weight', '200'),
																																																																			_1: {ctor: '[]'}
																																																																		}),
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: A2(
																																																																			_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																			_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textLight),
																																																																			{
																																																																				ctor: '::',
																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-weight', '300'),
																																																																				_1: {ctor: '[]'}
																																																																			}),
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: A2(
																																																																				_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																				_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textNormalWeight),
																																																																				{
																																																																					ctor: '::',
																																																																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-weight', '400'),
																																																																					_1: {ctor: '[]'}
																																																																				}),
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: A2(
																																																																					_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																					_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textMedium),
																																																																					{
																																																																						ctor: '::',
																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-weight', '500'),
																																																																						_1: {ctor: '[]'}
																																																																					}),
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: A2(
																																																																						_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																						_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textSemiBold),
																																																																						{
																																																																							ctor: '::',
																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-weight', '600'),
																																																																							_1: {ctor: '[]'}
																																																																						}),
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: A2(
																																																																							_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																							_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.bold),
																																																																							{
																																																																								ctor: '::',
																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-weight', '700'),
																																																																								_1: {ctor: '[]'}
																																																																							}),
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: A2(
																																																																								_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																								_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textExtraBold),
																																																																								{
																																																																									ctor: '::',
																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-weight', '800'),
																																																																									_1: {ctor: '[]'}
																																																																								}),
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: A2(
																																																																									_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																									_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textHeavy),
																																																																									{
																																																																										ctor: '::',
																																																																										_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-weight', '900'),
																																																																										_1: {ctor: '[]'}
																																																																									}),
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: A2(
																																																																										_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																										_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.italic),
																																																																										{
																																																																											ctor: '::',
																																																																											_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-style', 'italic'),
																																																																											_1: {ctor: '[]'}
																																																																										}),
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: A2(
																																																																											_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																											_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.strike),
																																																																											{
																																																																												ctor: '::',
																																																																												_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'text-decoration', 'line-through'),
																																																																												_1: {ctor: '[]'}
																																																																											}),
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: A2(
																																																																												_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																												_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.underline),
																																																																												{
																																																																													ctor: '::',
																																																																													_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'text-decoration', 'underline'),
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'text-decoration-skip-ink', 'auto'),
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'text-decoration-skip', 'ink'),
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													}
																																																																												}),
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: A2(
																																																																													_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																													_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textUnitalicized),
																																																																													{
																																																																														ctor: '::',
																																																																														_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'font-style', 'normal'),
																																																																														_1: {ctor: '[]'}
																																																																													}),
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: A2(
																																																																														_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																														_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textJustify),
																																																																														{
																																																																															ctor: '::',
																																																																															_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'text-align', 'justify'),
																																																																															_1: {ctor: '[]'}
																																																																														}),
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: A2(
																																																																															_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																															_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textJustifyAll),
																																																																															{
																																																																																ctor: '::',
																																																																																_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'text-align', 'justify-all'),
																																																																																_1: {ctor: '[]'}
																																																																															}),
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: A2(
																																																																																_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																																_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textCenter),
																																																																																{
																																																																																	ctor: '::',
																																																																																	_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'text-align', 'center'),
																																																																																	_1: {ctor: '[]'}
																																																																																}),
																																																																															_1: {
																																																																																ctor: '::',
																																																																																_0: A2(
																																																																																	_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																																	_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textRight),
																																																																																	{
																																																																																		ctor: '::',
																																																																																		_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'text-align', 'right'),
																																																																																		_1: {ctor: '[]'}
																																																																																	}),
																																																																																_1: {
																																																																																	ctor: '::',
																																																																																	_0: A2(
																																																																																		_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																																		_mdgriffith$stylish_elephants$Internal_Style$dot(_mdgriffith$stylish_elephants$Internal_Style$classes.textLeft),
																																																																																		{
																																																																																			ctor: '::',
																																																																																			_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'text-align', 'left'),
																																																																																			_1: {ctor: '[]'}
																																																																																		}),
																																																																																	_1: {
																																																																																		ctor: '::',
																																																																																		_0: A2(
																																																																																			_mdgriffith$stylish_elephants$Internal_Style$Descriptor,
																																																																																			'.modal',
																																																																																			{
																																																																																				ctor: '::',
																																																																																				_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'position', 'fixed'),
																																																																																				_1: {
																																																																																					ctor: '::',
																																																																																					_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'left', '0'),
																																																																																					_1: {
																																																																																						ctor: '::',
																																																																																						_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'top', '0'),
																																																																																						_1: {
																																																																																							ctor: '::',
																																																																																							_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'width', '100%'),
																																																																																							_1: {
																																																																																								ctor: '::',
																																																																																								_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'height', '100%'),
																																																																																								_1: {
																																																																																									ctor: '::',
																																																																																									_0: A2(_mdgriffith$stylish_elephants$Internal_Style$Prop, 'pointer-events', 'none'),
																																																																																									_1: {ctor: '[]'}
																																																																																								}
																																																																																							}
																																																																																						}
																																																																																					}
																																																																																				}
																																																																																			}),
																																																																																		_1: {ctor: '[]'}
																																																																																	}
																																																																																}
																																																																															}
																																																																														}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}),
						_1: {ctor: '[]'}
					}
				}
			}
		}));
var _mdgriffith$stylish_elephants$Internal_Style$viewportRules = A2(_elm_lang$core$Basics_ops['++'], 'html, body {\n    height: 100%;\n    width: 100%;\n} ', _mdgriffith$stylish_elephants$Internal_Style$rules);
var _mdgriffith$stylish_elephants$Internal_Style$viewportRulesElement = A3(
	_elm_lang$html$Html$node,
	'style',
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text(_mdgriffith$stylish_elephants$Internal_Style$viewportRules),
		_1: {ctor: '[]'}
	});
var _mdgriffith$stylish_elephants$Internal_Style$rulesElement = A3(
	_elm_lang$html$Html$node,
	'style',
	{ctor: '[]'},
	{
		ctor: '::',
		_0: _elm_lang$html$Html$text(_mdgriffith$stylish_elephants$Internal_Style$rules),
		_1: {ctor: '[]'}
	});

var _mdgriffith$stylish_elephants$Internal_Model$locationClass = function (location) {
	var _p0 = location;
	switch (_p0.ctor) {
		case 'Above':
			return 'se el above';
		case 'Below':
			return 'se el below';
		case 'OnRight':
			return 'se el on-right';
		case 'OnLeft':
			return 'se el on-left';
		case 'InFront':
			return 'se el infront';
		default:
			return 'se el behind';
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$isInt = function (x) {
	return x;
};
var _mdgriffith$stylish_elephants$Internal_Model$psuedoClassName = function ($class) {
	var _p1 = $class;
	switch (_p1.ctor) {
		case 'Focus':
			return 'focus';
		case 'Hover':
			return 'hover';
		default:
			return 'active';
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$styleKey = function (style) {
	var _p2 = style;
	switch (_p2.ctor) {
		case 'Shadows':
			return 'shadows';
		case 'Transparency':
			return 'transparency';
		case 'Style':
			return _p2._0;
		case 'FontSize':
			return 'fontsize';
		case 'FontFamily':
			return 'fontfamily';
		case 'Single':
			return _p2._1;
		case 'Colored':
			return _p2._1;
		case 'SpacingStyle':
			return 'spacing';
		case 'PaddingStyle':
			return 'padding';
		case 'GridTemplateStyle':
			return 'grid-template';
		case 'GridPosition':
			return 'grid-position';
		case 'PseudoSelector':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_mdgriffith$stylish_elephants$Internal_Model$psuedoClassName(_p2._0),
				A2(
					_elm_lang$core$String$join,
					'',
					A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Internal_Model$styleKey, _p2._1)));
		default:
			return 'transform';
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$intToString = function (i) {
	var _p3 = i;
	switch (_p3) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 100:
			return '100';
		case 255:
			return '255';
		default:
			return _elm_lang$core$Basics$toString(i);
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$formatColor = function (color) {
	var _p4 = _elm_lang$core$Color$toRgb(color);
	var red = _p4.red;
	var green = _p4.green;
	var blue = _p4.blue;
	var alpha = _p4.alpha;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		A2(
			_elm_lang$core$Basics_ops['++'],
			'rgba(',
			_mdgriffith$stylish_elephants$Internal_Model$intToString(red)),
		A2(
			_elm_lang$core$Basics_ops['++'],
			A2(
				_elm_lang$core$Basics_ops['++'],
				',',
				_mdgriffith$stylish_elephants$Internal_Model$intToString(green)),
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Basics_ops['++'],
					',',
					_mdgriffith$stylish_elephants$Internal_Model$intToString(blue)),
				A2(
					_elm_lang$core$Basics_ops['++'],
					',',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(alpha),
						')')))));
};
var _mdgriffith$stylish_elephants$Internal_Model$floatClass = function (x) {
	return _mdgriffith$stylish_elephants$Internal_Model$intToString(
		_elm_lang$core$Basics$round(x * 100));
};
var _mdgriffith$stylish_elephants$Internal_Model$formatColorClass = function (color) {
	var _p5 = _elm_lang$core$Color$toRgb(color);
	var red = _p5.red;
	var green = _p5.green;
	var blue = _p5.blue;
	var alpha = _p5.alpha;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_mdgriffith$stylish_elephants$Internal_Model$intToString(red),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'-',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_mdgriffith$stylish_elephants$Internal_Model$intToString(green),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'-',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_mdgriffith$stylish_elephants$Internal_Model$intToString(blue),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'-',
							_mdgriffith$stylish_elephants$Internal_Model$floatClass(alpha)))))));
};
var _mdgriffith$stylish_elephants$Internal_Model$formatBoxShadow = function (shadow) {
	return A2(
		_elm_lang$core$String$join,
		' ',
		A2(
			_elm_lang$core$List$filterMap,
			_elm_lang$core$Basics$identity,
			{
				ctor: '::',
				_0: shadow.inset ? _elm_lang$core$Maybe$Just('inset') : _elm_lang$core$Maybe$Nothing,
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Maybe$Just(
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(
								_elm_lang$core$Tuple$first(shadow.offset)),
							'px')),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Maybe$Just(
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(
									_elm_lang$core$Tuple$second(shadow.offset)),
								'px')),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(shadow.blur),
									'px')),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Maybe$Just(
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(shadow.size),
										'px')),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Maybe$Just(
										_mdgriffith$stylish_elephants$Internal_Model$formatColor(shadow.color)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}));
};
var _mdgriffith$stylish_elephants$Internal_Model$formatTextShadow = function (shadow) {
	return A2(
		_elm_lang$core$String$join,
		' ',
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_elm_lang$core$Tuple$first(shadow.offset)),
				'px'),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						_elm_lang$core$Tuple$second(shadow.offset)),
					'px'),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(shadow.blur),
						'px'),
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Internal_Model$formatColor(shadow.color),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _mdgriffith$stylish_elephants$Internal_Model$formatDropShadow = function (shadow) {
	return A2(
		_elm_lang$core$String$join,
		' ',
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(
					_elm_lang$core$Tuple$first(shadow.offset)),
				'px'),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						_elm_lang$core$Tuple$second(shadow.offset)),
					'px'),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(shadow.blur),
						'px'),
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Internal_Model$formatColor(shadow.color),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _mdgriffith$stylish_elephants$Internal_Model$filterName = function (filtr) {
	var _p6 = filtr;
	switch (_p6.ctor) {
		case 'FilterUrl':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'url(',
				A2(_elm_lang$core$Basics_ops['++'], _p6._0, ')'));
		case 'Blur':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'blur(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p6._0),
					'px)'));
		case 'Brightness':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'brightness(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p6._0),
					'%)'));
		case 'Contrast':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'contrast(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p6._0),
					'%)'));
		case 'Grayscale':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'grayscale(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p6._0),
					'%)'));
		case 'HueRotate':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'hueRotate(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p6._0),
					'deg)'));
		case 'Invert':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'invert(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p6._0),
					'%)'));
		case 'OpacityFilter':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'opacity(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p6._0),
					'%)'));
		case 'Saturate':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'saturate(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p6._0),
					'%)'));
		case 'Sepia':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'sepia(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p6._0),
					'%)'));
		default:
			var _p7 = _p6._0;
			var shadowModel = {offset: _p7.offset, size: _p7.size, blur: _p7.blur, color: _p7.color};
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'drop-shadow(',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$stylish_elephants$Internal_Model$formatDropShadow(shadowModel),
					')'));
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$lengthClassName = function (x) {
	var _p8 = x;
	switch (_p8.ctor) {
		case 'Px':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_mdgriffith$stylish_elephants$Internal_Model$intToString(_p8._0),
				'px');
		case 'Content':
			return 'auto';
		case 'Fill':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				_mdgriffith$stylish_elephants$Internal_Model$intToString(_p8._0),
				'fr');
		case 'Min':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'min',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p8._0),
					_mdgriffith$stylish_elephants$Internal_Model$lengthClassName(_p8._1)));
		default:
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'max',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p8._0),
					_mdgriffith$stylish_elephants$Internal_Model$lengthClassName(_p8._1)));
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$getStyleName = function (style) {
	var _p9 = style;
	switch (_p9.ctor) {
		case 'Shadows':
			return _p9._0;
		case 'Transparency':
			return _p9._0;
		case 'Style':
			return _p9._0;
		case 'FontFamily':
			return _p9._0;
		case 'FontSize':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'font-size-',
				_elm_lang$core$Basics$toString(
					_mdgriffith$stylish_elephants$Internal_Model$isInt(_p9._0)));
		case 'Single':
			return _p9._0;
		case 'Colored':
			return _p9._0;
		case 'SpacingStyle':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'spacing-',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						_mdgriffith$stylish_elephants$Internal_Model$isInt(_p9._0)),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'-',
						_elm_lang$core$Basics$toString(
							_mdgriffith$stylish_elephants$Internal_Model$isInt(_p9._1)))));
		case 'PaddingStyle':
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'pad-',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p9._0),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'-',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p9._1),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'-',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p9._2),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'-',
										_elm_lang$core$Basics$toString(_p9._3))))))));
		case 'GridTemplateStyle':
			var _p10 = _p9._0;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'grid-rows-',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$String$join,
						'-',
						A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Internal_Model$lengthClassName, _p10.rows)),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'-cols-',
						A2(
							_elm_lang$core$Basics_ops['++'],
							A2(
								_elm_lang$core$String$join,
								'-',
								A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Internal_Model$lengthClassName, _p10.columns)),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'-space-x-',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_mdgriffith$stylish_elephants$Internal_Model$lengthClassName(
										_elm_lang$core$Tuple$first(_p10.spacing)),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'-space-y-',
										_mdgriffith$stylish_elephants$Internal_Model$lengthClassName(
											_elm_lang$core$Tuple$second(_p10.spacing)))))))));
		case 'GridPosition':
			var _p11 = _p9._0;
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'grid-pos-',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p11.row),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'-',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p11.col),
							A2(
								_elm_lang$core$Basics_ops['++'],
								'-',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(_p11.width),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'-',
										_elm_lang$core$Basics$toString(_p11.height))))))));
		case 'PseudoSelector':
			return A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Internal_Model$psuedoClassName(_p9._0),
					_1: A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Internal_Model$getStyleName, _p9._1)
				});
		default:
			return 'transformation';
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$reduceStyles = F2(
	function (style, _p12) {
		var _p13 = _p12;
		var _p15 = _p13._1;
		var _p14 = _p13._0;
		var styleName = _mdgriffith$stylish_elephants$Internal_Model$getStyleName(style);
		return A2(_elm_lang$core$Set$member, styleName, _p14) ? {ctor: '_Tuple2', _0: _p14, _1: _p15} : {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$Set$insert, styleName, _p14),
			_1: {ctor: '::', _0: style, _1: _p15}
		};
	});
var _mdgriffith$stylish_elephants$Internal_Model$renderFont = function (families) {
	var fontName = function (font) {
		var _p16 = font;
		switch (_p16.ctor) {
			case 'Serif':
				return 'serif';
			case 'SansSerif':
				return 'sans-serif';
			case 'Monospace':
				return 'monospace';
			case 'Typeface':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'\"',
					A2(_elm_lang$core$Basics_ops['++'], _p16._0, '\"'));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'\"',
					A2(_elm_lang$core$Basics_ops['++'], _p16._0, '\"'));
		}
	};
	return A2(
		_elm_lang$core$String$join,
		', ',
		A2(_elm_lang$core$List$map, fontName, families));
};
var _mdgriffith$stylish_elephants$Internal_Model$focusDefaultStyle = {
	backgroundColor: _elm_lang$core$Maybe$Nothing,
	borderColor: _elm_lang$core$Maybe$Nothing,
	shadow: _elm_lang$core$Maybe$Just(
		{
			color: A3(_elm_lang$core$Color$rgb, 155, 203, 255),
			offset: {ctor: '_Tuple2', _0: 0, _1: 0},
			blur: 3,
			size: 3
		})
};
var _mdgriffith$stylish_elephants$Internal_Model$renderFontClassName = F2(
	function (font, current) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			current,
			function () {
				var _p17 = font;
				switch (_p17.ctor) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						return A2(
							_elm_lang$core$String$join,
							'-',
							_elm_lang$core$String$words(
								_elm_lang$core$String$toLower(_p17._0)));
					default:
						return A2(
							_elm_lang$core$String$join,
							'-',
							_elm_lang$core$String$words(
								_elm_lang$core$String$toLower(_p17._0)));
				}
			}());
	});
var _mdgriffith$stylish_elephants$Internal_Model$textElementFill = function (str) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom$node,
		'div',
		{
			ctor: '::',
			_0: A2(
				_elm_lang$virtual_dom$VirtualDom$property,
				'className',
				_elm_lang$core$Json_Encode$string('se text width-fill height-fill')),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom$text(str),
			_1: {ctor: '[]'}
		});
};
var _mdgriffith$stylish_elephants$Internal_Model$textElement = function (str) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom$node,
		'div',
		{
			ctor: '::',
			_0: A2(
				_elm_lang$virtual_dom$VirtualDom$property,
				'className',
				_elm_lang$core$Json_Encode$string('se text width-content height-content')),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$virtual_dom$VirtualDom$text(str),
			_1: {ctor: '[]'}
		});
};
var _mdgriffith$stylish_elephants$Internal_Model$getSpacing = F2(
	function (attrs, $default) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			$default,
			A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, acc) {
						var _p18 = acc;
						if (_p18.ctor === 'Just') {
							return _elm_lang$core$Maybe$Just(_p18._0);
						} else {
							var _p19 = x;
							if ((_p19.ctor === 'StyleClass') && (_p19._0.ctor === 'SpacingStyle')) {
								return _elm_lang$core$Maybe$Just(
									{ctor: '_Tuple2', _0: _p19._0._0, _1: _p19._0._1});
							} else {
								return _elm_lang$core$Maybe$Nothing;
							}
						}
					}),
				_elm_lang$core$Maybe$Nothing,
				attrs));
	});
var _mdgriffith$stylish_elephants$Internal_Model$filter = function (attrs) {
	return _elm_lang$core$Tuple$first(
		A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, _p20) {
					var _p21 = _p20;
					var _p24 = _p21._1;
					var _p23 = _p21._0;
					var _p22 = x;
					switch (_p22.ctor) {
						case 'NoAttribute':
							return {ctor: '_Tuple2', _0: _p23, _1: _p24};
						case 'Class':
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: _p24
							};
						case 'Attr':
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: _p24
							};
						case 'StyleClass':
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: _p24
							};
						case 'Width':
							return A2(_elm_lang$core$Set$member, 'width', _p24) ? {ctor: '_Tuple2', _0: _p23, _1: _p24} : {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: A2(_elm_lang$core$Set$insert, 'width', _p24)
							};
						case 'Height':
							return A2(_elm_lang$core$Set$member, 'height', _p24) ? {ctor: '_Tuple2', _0: _p23, _1: _p24} : {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: A2(_elm_lang$core$Set$insert, 'height', _p24)
							};
						case 'Describe':
							return A2(_elm_lang$core$Set$member, 'described', _p24) ? {ctor: '_Tuple2', _0: _p23, _1: _p24} : {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: A2(_elm_lang$core$Set$insert, 'described', _p24)
							};
						case 'Nearby':
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: _p24
							};
						case 'AlignX':
							return A2(_elm_lang$core$Set$member, 'align-x', _p24) ? {ctor: '_Tuple2', _0: _p23, _1: _p24} : {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: A2(_elm_lang$core$Set$insert, 'align-x', _p24)
							};
						case 'AlignY':
							return A2(_elm_lang$core$Set$member, 'align-y', _p24) ? {ctor: '_Tuple2', _0: _p23, _1: _p24} : {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: A2(_elm_lang$core$Set$insert, 'align-y', _p24)
							};
						case 'Filter':
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: _p24
							};
						case 'BoxShadow':
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: _p24
							};
						default:
							return {
								ctor: '_Tuple2',
								_0: {ctor: '::', _0: x, _1: _p23},
								_1: _p24
							};
					}
				}),
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Set$empty
			},
			attrs));
};
var _mdgriffith$stylish_elephants$Internal_Model$get = F2(
	function (attrs, isAttr) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, found) {
					return isAttr(x) ? {ctor: '::', _0: x, _1: found} : found;
				}),
			{ctor: '[]'},
			_mdgriffith$stylish_elephants$Internal_Model$filter(attrs));
	});
var _mdgriffith$stylish_elephants$Internal_Model$uncapitalize = function (str) {
	var tail = A2(_elm_lang$core$String$dropLeft, 1, str);
	var head = _elm_lang$core$String$toLower(
		A2(_elm_lang$core$String$left, 1, str));
	return A2(_elm_lang$core$Basics_ops['++'], head, tail);
};
var _mdgriffith$stylish_elephants$Internal_Model$className = function (x) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex('[\\s+]'),
		function (_p25) {
			return '';
		},
		A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$All,
			_elm_lang$core$Regex$regex('[A-Z0-9]+'),
			function (_p26) {
				var _p27 = _p26;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					_elm_lang$core$String$toLower(_p27.match));
			},
			A4(
				_elm_lang$core$Regex$replace,
				_elm_lang$core$Regex$All,
				_elm_lang$core$Regex$regex('[^a-zA-Z0-9_-]'),
				function (_p28) {
					return '';
				},
				_mdgriffith$stylish_elephants$Internal_Model$uncapitalize(x))));
};
var _mdgriffith$stylish_elephants$Internal_Model$floorAtZero = function (x) {
	return (_elm_lang$core$Native_Utils.cmp(x, 0) > 0) ? x : 0;
};
var _mdgriffith$stylish_elephants$Internal_Model$emptyTransformGroup = {translate: _elm_lang$core$Maybe$Nothing, rotate: _elm_lang$core$Maybe$Nothing, scale: _elm_lang$core$Maybe$Nothing};
var _mdgriffith$stylish_elephants$Internal_Model$emptyTransformationStates = {focus: _elm_lang$core$Maybe$Nothing, hover: _elm_lang$core$Maybe$Nothing, normal: _elm_lang$core$Maybe$Nothing, active: _elm_lang$core$Maybe$Nothing};
var _mdgriffith$stylish_elephants$Internal_Model$addIfNothing = F2(
	function (val, existing) {
		var _p29 = existing;
		if (_p29.ctor === 'Nothing') {
			return val;
		} else {
			return _p29;
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$stackTransforms = F2(
	function (transform, group) {
		var _p30 = transform;
		switch (_p30.ctor) {
			case 'Move':
				var _p34 = _p30._2;
				var _p33 = _p30._1;
				var _p32 = _p30._0;
				var _p31 = group.translate;
				if (_p31.ctor === 'Nothing') {
					return _elm_lang$core$Native_Utils.update(
						group,
						{
							translate: _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple3', _0: _p32, _1: _p33, _2: _p34})
						});
				} else {
					return _elm_lang$core$Native_Utils.update(
						group,
						{
							translate: _elm_lang$core$Maybe$Just(
								{
									ctor: '_Tuple3',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Model$addIfNothing, _p32, _p31._0._0),
									_1: A2(_mdgriffith$stylish_elephants$Internal_Model$addIfNothing, _p33, _p31._0._1),
									_2: A2(_mdgriffith$stylish_elephants$Internal_Model$addIfNothing, _p34, _p31._0._2)
								})
						});
				}
			case 'Rotate':
				return _elm_lang$core$Native_Utils.update(
					group,
					{
						rotate: A2(
							_mdgriffith$stylish_elephants$Internal_Model$addIfNothing,
							_elm_lang$core$Maybe$Just(
								{ctor: '_Tuple4', _0: _p30._0, _1: _p30._1, _2: _p30._2, _3: _p30._3}),
							group.rotate)
					});
			default:
				return _elm_lang$core$Native_Utils.update(
					group,
					{
						scale: A2(
							_mdgriffith$stylish_elephants$Internal_Model$addIfNothing,
							_elm_lang$core$Maybe$Just(
								{ctor: '_Tuple3', _0: _p30._0, _1: _p30._1, _2: _p30._2}),
							group.scale)
					});
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$stackOn = F3(
	function (maybePseudo, transform, gathered) {
		var states = A2(_elm_lang$core$Maybe$withDefault, _mdgriffith$stylish_elephants$Internal_Model$emptyTransformationStates, gathered.transform);
		var _p35 = maybePseudo;
		if (_p35.ctor === 'Nothing') {
			var normal = states.normal;
			return _elm_lang$core$Native_Utils.update(
				gathered,
				{
					transform: _elm_lang$core$Maybe$Just(
						_elm_lang$core$Native_Utils.update(
							states,
							{
								normal: _elm_lang$core$Maybe$Just(
									A2(
										_mdgriffith$stylish_elephants$Internal_Model$stackTransforms,
										transform,
										A2(_elm_lang$core$Maybe$withDefault, _mdgriffith$stylish_elephants$Internal_Model$emptyTransformGroup, normal)))
							}))
				});
		} else {
			switch (_p35._0.ctor) {
				case 'Hover':
					var hover = states.hover;
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							transform: _elm_lang$core$Maybe$Just(
								_elm_lang$core$Native_Utils.update(
									states,
									{
										hover: _elm_lang$core$Maybe$Just(
											A2(
												_mdgriffith$stylish_elephants$Internal_Model$stackTransforms,
												transform,
												A2(_elm_lang$core$Maybe$withDefault, _mdgriffith$stylish_elephants$Internal_Model$emptyTransformGroup, hover)))
									}))
						});
				case 'Active':
					var active = states.active;
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							transform: _elm_lang$core$Maybe$Just(
								_elm_lang$core$Native_Utils.update(
									states,
									{
										active: _elm_lang$core$Maybe$Just(
											A2(
												_mdgriffith$stylish_elephants$Internal_Model$stackTransforms,
												transform,
												A2(_elm_lang$core$Maybe$withDefault, _mdgriffith$stylish_elephants$Internal_Model$emptyTransformGroup, active)))
									}))
						});
				default:
					var focus = states.focus;
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							transform: _elm_lang$core$Maybe$Just(
								_elm_lang$core$Native_Utils.update(
									states,
									{
										focus: _elm_lang$core$Maybe$Just(
											A2(
												_mdgriffith$stylish_elephants$Internal_Model$stackTransforms,
												transform,
												A2(_elm_lang$core$Maybe$withDefault, _mdgriffith$stylish_elephants$Internal_Model$emptyTransformGroup, focus)))
									}))
						});
			}
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$noAreas = function (attrs) {
	var notAnArea = function (a) {
		var _p36 = a;
		if (_p36.ctor === 'Describe') {
			return false;
		} else {
			return true;
		}
	};
	return A2(_elm_lang$core$List$filter, notAnArea, attrs);
};
var _mdgriffith$stylish_elephants$Internal_Model$alignYName = function (align) {
	var _p37 = align;
	switch (_p37.ctor) {
		case 'Top':
			return A2(_elm_lang$core$Basics_ops['++'], 'aligned-vertically ', _mdgriffith$stylish_elephants$Internal_Style$classes.alignTop);
		case 'Bottom':
			return A2(_elm_lang$core$Basics_ops['++'], 'aligned-vertically ', _mdgriffith$stylish_elephants$Internal_Style$classes.alignBottom);
		default:
			return A2(_elm_lang$core$Basics_ops['++'], 'aligned-vertically ', _mdgriffith$stylish_elephants$Internal_Style$classes.alignCenterY);
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$alignXName = function (align) {
	var _p38 = align;
	switch (_p38.ctor) {
		case 'Left':
			return A2(_elm_lang$core$Basics_ops['++'], 'aligned-horizontally ', _mdgriffith$stylish_elephants$Internal_Style$classes.alignLeft);
		case 'Right':
			return A2(_elm_lang$core$Basics_ops['++'], 'aligned-horizontally ', _mdgriffith$stylish_elephants$Internal_Style$classes.alignRight);
		default:
			return A2(_elm_lang$core$Basics_ops['++'], 'aligned-horizontally ', _mdgriffith$stylish_elephants$Internal_Style$classes.alignCenterX);
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$renderNode = F4(
	function (_p39, children, styles, context) {
		var _p40 = _p39;
		var _p53 = _p40.attributes;
		var _p52 = _p40.alignment;
		var createNode = F3(
			function (node, attrs, styles) {
				var _p41 = children;
				if (_p41.ctor === 'Keyed') {
					var _p43 = _p41._0;
					return A3(
						_elm_lang$virtual_dom$VirtualDom$keyedNode,
						node,
						attrs,
						function () {
							var _p42 = styles;
							if (_p42.ctor === 'Nothing') {
								return _p43;
							} else {
								return {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'stylesheet',
										_1: A3(
											_elm_lang$virtual_dom$VirtualDom$node,
											'style',
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('stylesheet'),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(_p42._0),
												_1: {ctor: '[]'}
											})
									},
									_1: _p43
								};
							}
						}());
				} else {
					var _p45 = _p41._0;
					return A3(
						_elm_lang$virtual_dom$VirtualDom$node,
						node,
						attrs,
						function () {
							var _p44 = styles;
							if (_p44.ctor === 'Nothing') {
								return _p45;
							} else {
								return {
									ctor: '::',
									_0: A3(
										_elm_lang$virtual_dom$VirtualDom$node,
										'style',
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('stylesheet'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(_p44._0),
											_1: {ctor: '[]'}
										}),
									_1: _p45
								};
							}
						}());
				}
			});
		var html = function () {
			var _p46 = _p40.node;
			switch (_p46.ctor) {
				case 'Generic':
					return A3(createNode, 'div', _p53, styles);
				case 'NodeName':
					return A3(createNode, _p46._0, _p53, styles);
				default:
					return A3(
						_elm_lang$virtual_dom$VirtualDom$node,
						_p46._0,
						_p53,
						{
							ctor: '::',
							_0: A3(
								createNode,
								_p46._1,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('se el'),
									_1: {ctor: '[]'}
								},
								styles),
							_1: {ctor: '[]'}
						});
			}
		}();
		var _p47 = context;
		switch (_p47.ctor) {
			case 'AsRow':
				var _p48 = _p40.width;
				if ((_p48.ctor === 'Just') && (_p48._0.ctor === 'Fill')) {
					return html;
				} else {
					var _p49 = _p52;
					_v29_2:
					do {
						if ((_p49.ctor === 'Aligned') && (_p49._0.ctor === 'Just')) {
							switch (_p49._0._0.ctor) {
								case 'Right':
									return A3(
										_elm_lang$virtual_dom$VirtualDom$node,
										'u',
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('se el container align-container-right content-center-y'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: html,
											_1: {ctor: '[]'}
										});
								case 'CenterX':
									return A3(
										_elm_lang$virtual_dom$VirtualDom$node,
										's',
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('se el container align-container-center-x content-center-y'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: html,
											_1: {ctor: '[]'}
										});
								default:
									break _v29_2;
							}
						} else {
							break _v29_2;
						}
					} while(false);
					return html;
				}
			case 'AsColumn':
				var _p50 = _p40.height;
				if ((_p50.ctor === 'Just') && (_p50._0.ctor === 'Fill')) {
					return html;
				} else {
					var _p51 = _p52;
					_v31_2:
					do {
						if ((_p51.ctor === 'Aligned') && (_p51._1.ctor === 'Just')) {
							switch (_p51._1._0.ctor) {
								case 'CenterY':
									return A3(
										_elm_lang$virtual_dom$VirtualDom$node,
										's',
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('se el container align-container-center-y'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: html,
											_1: {ctor: '[]'}
										});
								case 'Bottom':
									return A3(
										_elm_lang$virtual_dom$VirtualDom$node,
										'u',
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('se el container align-container-bottom'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: html,
											_1: {ctor: '[]'}
										});
								default:
									break _v31_2;
							}
						} else {
							break _v31_2;
						}
					} while(false);
					return html;
				}
			default:
				return html;
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$Gathered = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return {node: a, attributes: b, styles: c, alignment: d, width: e, height: f, nearbys: g, filters: h, boxShadows: i, textShadows: j, transform: k, has: l};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _mdgriffith$stylish_elephants$Internal_Model$Decorated = F4(
	function (a, b, c, d) {
		return {focus: a, hover: b, normal: c, active: d};
	});
var _mdgriffith$stylish_elephants$Internal_Model$TransformationGroup = F3(
	function (a, b, c) {
		return {rotate: a, translate: b, scale: c};
	});
var _mdgriffith$stylish_elephants$Internal_Model$OptionRecord = F3(
	function (a, b, c) {
		return {hover: a, focus: b, mode: c};
	});
var _mdgriffith$stylish_elephants$Internal_Model$FocusStyle = F3(
	function (a, b, c) {
		return {borderColor: a, shadow: b, backgroundColor: c};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Shadow = F4(
	function (a, b, c, d) {
		return {color: a, offset: b, blur: c, size: d};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Empty = {ctor: 'Empty'};
var _mdgriffith$stylish_elephants$Internal_Model$Text = function (a) {
	return {ctor: 'Text', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Styled = function (a) {
	return {ctor: 'Styled', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Unstyled = function (a) {
	return {ctor: 'Unstyled', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$unstyled = function (_p54) {
	return _mdgriffith$stylish_elephants$Internal_Model$Unstyled(
		_elm_lang$core$Basics$always(_p54));
};
var _mdgriffith$stylish_elephants$Internal_Model$map = F2(
	function (fn, el) {
		var _p55 = el;
		switch (_p55.ctor) {
			case 'Styled':
				var _p56 = _p55._0;
				return _mdgriffith$stylish_elephants$Internal_Model$Styled(
					{
						styles: _p56.styles,
						html: F2(
							function (add, context) {
								return A2(
									_elm_lang$html$Html$map,
									fn,
									A2(_p56.html, add, context));
							})
					});
			case 'Unstyled':
				return _mdgriffith$stylish_elephants$Internal_Model$Unstyled(
					function (_p57) {
						return A2(
							_elm_lang$html$Html$map,
							fn,
							_p55._0(_p57));
					});
			case 'Text':
				return _mdgriffith$stylish_elephants$Internal_Model$Text(_p55._0);
			default:
				return _mdgriffith$stylish_elephants$Internal_Model$Empty;
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$AsTextColumn = {ctor: 'AsTextColumn'};
var _mdgriffith$stylish_elephants$Internal_Model$asTextColumn = _mdgriffith$stylish_elephants$Internal_Model$AsTextColumn;
var _mdgriffith$stylish_elephants$Internal_Model$AsParagraph = {ctor: 'AsParagraph'};
var _mdgriffith$stylish_elephants$Internal_Model$asParagraph = _mdgriffith$stylish_elephants$Internal_Model$AsParagraph;
var _mdgriffith$stylish_elephants$Internal_Model$AsGrid = {ctor: 'AsGrid'};
var _mdgriffith$stylish_elephants$Internal_Model$asGrid = _mdgriffith$stylish_elephants$Internal_Model$AsGrid;
var _mdgriffith$stylish_elephants$Internal_Model$AsEl = {ctor: 'AsEl'};
var _mdgriffith$stylish_elephants$Internal_Model$asEl = _mdgriffith$stylish_elephants$Internal_Model$AsEl;
var _mdgriffith$stylish_elephants$Internal_Model$renderNearbyGroupAbsolute = function (nearbys) {
	var create = function (_p58) {
		var _p59 = _p58;
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(
					_mdgriffith$stylish_elephants$Internal_Model$locationClass(_p59._0)),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: function () {
					var _p60 = _p59._1;
					switch (_p60.ctor) {
						case 'Empty':
							return _elm_lang$html$Html$text('');
						case 'Text':
							return _mdgriffith$stylish_elephants$Internal_Model$textElement(_p60._0);
						case 'Unstyled':
							return _p60._0(_mdgriffith$stylish_elephants$Internal_Model$asEl);
						default:
							return A2(_p60._0.html, _elm_lang$core$Maybe$Nothing, _mdgriffith$stylish_elephants$Internal_Model$asEl);
					}
				}(),
				_1: {ctor: '[]'}
			});
	};
	return A2(_elm_lang$core$List$map, create, nearbys);
};
var _mdgriffith$stylish_elephants$Internal_Model$AsColumn = {ctor: 'AsColumn'};
var _mdgriffith$stylish_elephants$Internal_Model$asColumn = _mdgriffith$stylish_elephants$Internal_Model$AsColumn;
var _mdgriffith$stylish_elephants$Internal_Model$AsRow = {ctor: 'AsRow'};
var _mdgriffith$stylish_elephants$Internal_Model$asRow = _mdgriffith$stylish_elephants$Internal_Model$AsRow;
var _mdgriffith$stylish_elephants$Internal_Model$Aligned = F2(
	function (a, b) {
		return {ctor: 'Aligned', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Unaligned = {ctor: 'Unaligned'};
var _mdgriffith$stylish_elephants$Internal_Model$Right = {ctor: 'Right'};
var _mdgriffith$stylish_elephants$Internal_Model$CenterX = {ctor: 'CenterX'};
var _mdgriffith$stylish_elephants$Internal_Model$Left = {ctor: 'Left'};
var _mdgriffith$stylish_elephants$Internal_Model$Bottom = {ctor: 'Bottom'};
var _mdgriffith$stylish_elephants$Internal_Model$CenterY = {ctor: 'CenterY'};
var _mdgriffith$stylish_elephants$Internal_Model$Top = {ctor: 'Top'};
var _mdgriffith$stylish_elephants$Internal_Model$Shadows = F2(
	function (a, b) {
		return {ctor: 'Shadows', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$onlyStyles = function (attr) {
	var _p61 = attr;
	switch (_p61.ctor) {
		case 'StyleClass':
			return _elm_lang$core$Maybe$Just(_p61._0);
		case 'TextShadow':
			var stringName = _mdgriffith$stylish_elephants$Internal_Model$formatTextShadow(_p61._0);
			return _elm_lang$core$Maybe$Just(
				A2(
					_mdgriffith$stylish_elephants$Internal_Model$Shadows,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'txt-shadow-',
						_mdgriffith$stylish_elephants$Internal_Model$className(stringName)),
					stringName));
		case 'BoxShadow':
			var stringName = _mdgriffith$stylish_elephants$Internal_Model$formatBoxShadow(_p61._0);
			return _elm_lang$core$Maybe$Just(
				A2(
					_mdgriffith$stylish_elephants$Internal_Model$Shadows,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'box-shadow-',
						_mdgriffith$stylish_elephants$Internal_Model$className(stringName)),
					stringName));
		default:
			return _elm_lang$core$Maybe$Nothing;
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$Transparency = F2(
	function (a, b) {
		return {ctor: 'Transparency', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$PseudoSelector = F2(
	function (a, b) {
		return {ctor: 'PseudoSelector', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Transform = function (a) {
	return {ctor: 'Transform', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$GridPosition = function (a) {
	return {ctor: 'GridPosition', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$GridTemplateStyle = function (a) {
	return {ctor: 'GridTemplateStyle', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$PaddingStyle = F4(
	function (a, b, c, d) {
		return {ctor: 'PaddingStyle', _0: a, _1: b, _2: c, _3: d};
	});
var _mdgriffith$stylish_elephants$Internal_Model$SpacingStyle = F2(
	function (a, b) {
		return {ctor: 'SpacingStyle', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Colored = F3(
	function (a, b, c) {
		return {ctor: 'Colored', _0: a, _1: b, _2: c};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Single = F3(
	function (a, b, c) {
		return {ctor: 'Single', _0: a, _1: b, _2: c};
	});
var _mdgriffith$stylish_elephants$Internal_Model$renderTransformationGroup = F2(
	function (maybePseudo, group) {
		var name = A2(
			_elm_lang$core$String$join,
			'-',
			A2(
				_elm_lang$core$List$filterMap,
				_elm_lang$core$Basics$identity,
				{
					ctor: '::',
					_0: A3(
						_elm_lang$core$Basics$flip,
						_elm_lang$core$Maybe$map,
						group.translate,
						function (_p62) {
							var _p63 = _p62;
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'move-',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_mdgriffith$stylish_elephants$Internal_Model$floatClass(
										A2(_elm_lang$core$Maybe$withDefault, 0, _p63._0)),
									A2(
										_elm_lang$core$Basics_ops['++'],
										'-',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_mdgriffith$stylish_elephants$Internal_Model$floatClass(
												A2(_elm_lang$core$Maybe$withDefault, 0, _p63._1)),
											A2(
												_elm_lang$core$Basics_ops['++'],
												'-',
												_mdgriffith$stylish_elephants$Internal_Model$floatClass(
													A2(_elm_lang$core$Maybe$withDefault, 0, _p63._2)))))));
						}),
					_1: {
						ctor: '::',
						_0: A3(
							_elm_lang$core$Basics$flip,
							_elm_lang$core$Maybe$map,
							group.scale,
							function (_p64) {
								var _p65 = _p64;
								return A2(
									_elm_lang$core$Basics_ops['++'],
									'scale',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_mdgriffith$stylish_elephants$Internal_Model$floatClass(_p65._0),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'-',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_mdgriffith$stylish_elephants$Internal_Model$floatClass(_p65._1),
												A2(
													_elm_lang$core$Basics_ops['++'],
													'-',
													_mdgriffith$stylish_elephants$Internal_Model$floatClass(_p65._2))))));
							}),
						_1: {
							ctor: '::',
							_0: A3(
								_elm_lang$core$Basics$flip,
								_elm_lang$core$Maybe$map,
								group.rotate,
								function (_p66) {
									var _p67 = _p66;
									return A2(
										_elm_lang$core$Basics_ops['++'],
										'rotate-',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_mdgriffith$stylish_elephants$Internal_Model$floatClass(_p67._0),
											A2(
												_elm_lang$core$Basics_ops['++'],
												'-',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_mdgriffith$stylish_elephants$Internal_Model$floatClass(_p67._1),
													A2(
														_elm_lang$core$Basics_ops['++'],
														'-',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_mdgriffith$stylish_elephants$Internal_Model$floatClass(_p67._2),
															A2(
																_elm_lang$core$Basics_ops['++'],
																'-',
																_mdgriffith$stylish_elephants$Internal_Model$floatClass(_p67._3))))))));
								}),
							_1: {ctor: '[]'}
						}
					}
				}));
		var rotate = A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Maybe$map,
			group.rotate,
			function (_p68) {
				var _p69 = _p68;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'rotate3d(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p69._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							',',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p69._1),
								A2(
									_elm_lang$core$Basics_ops['++'],
									',',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p69._2),
										A2(
											_elm_lang$core$Basics_ops['++'],
											',',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p69._3),
												'rad)'))))))));
			});
		var scale = A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Maybe$map,
			group.scale,
			function (_p70) {
				var _p71 = _p70;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'scale3d(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p71._0),
						A2(
							_elm_lang$core$Basics_ops['++'],
							', ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p71._1),
								A2(
									_elm_lang$core$Basics_ops['++'],
									', ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p71._2),
										')'))))));
			});
		var translate = A3(
			_elm_lang$core$Basics$flip,
			_elm_lang$core$Maybe$map,
			group.translate,
			function (_p72) {
				var _p73 = _p72;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'translate3d(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(
							A2(_elm_lang$core$Maybe$withDefault, 0, _p73._0)),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'px, ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(
									A2(_elm_lang$core$Maybe$withDefault, 0, _p73._1)),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'px, ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(
											A2(_elm_lang$core$Maybe$withDefault, 0, _p73._2)),
										'px)'))))));
			});
		var transformations = A2(
			_elm_lang$core$List$filterMap,
			_elm_lang$core$Basics$identity,
			{
				ctor: '::',
				_0: scale,
				_1: {
					ctor: '::',
					_0: translate,
					_1: {
						ctor: '::',
						_0: rotate,
						_1: {ctor: '[]'}
					}
				}
			});
		var _p74 = transformations;
		if (_p74.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p75 = function () {
				var _p76 = maybePseudo;
				if (_p76.ctor === 'Nothing') {
					return {
						ctor: '_Tuple2',
						_0: A2(_elm_lang$core$Basics_ops['++'], 'transform-', name),
						_1: A2(_elm_lang$core$Basics_ops['++'], '.transform-', name)
					};
				} else {
					var _p77 = _p76._0;
					switch (_p77.ctor) {
						case 'Hover':
							return {
								ctor: '_Tuple2',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'transform-',
									A2(_elm_lang$core$Basics_ops['++'], name, '-hover')),
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									'.transform-',
									A2(_elm_lang$core$Basics_ops['++'], name, '-hover:hover'))
							};
						case 'Focus':
							return {
								ctor: '_Tuple2',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'transform-',
									A2(_elm_lang$core$Basics_ops['++'], name, '-focus')),
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									'.transform-',
									A2(
										_elm_lang$core$Basics_ops['++'],
										name,
										A2(
											_elm_lang$core$Basics_ops['++'],
											'-focus:focus, .se:focus ~ .transform-',
											A2(_elm_lang$core$Basics_ops['++'], name, '-focus'))))
							};
						default:
							return {
								ctor: '_Tuple2',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'transform-',
									A2(_elm_lang$core$Basics_ops['++'], name, '-active')),
								_1: A2(
									_elm_lang$core$Basics_ops['++'],
									'.transform-',
									A2(_elm_lang$core$Basics_ops['++'], name, '-active:active'))
							};
					}
				}
			}();
			var classOnElement = _p75._0;
			var classInStylesheet = _p75._1;
			var transforms = A2(_elm_lang$core$String$join, ' ', _p74);
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '_Tuple2',
					_0: classOnElement,
					_1: A3(_mdgriffith$stylish_elephants$Internal_Model$Single, classInStylesheet, 'transform', transforms)
				});
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$FontSize = function (a) {
	return {ctor: 'FontSize', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$FontFamily = F2(
	function (a, b) {
		return {ctor: 'FontFamily', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Style = F2(
	function (a, b) {
		return {ctor: 'Style', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$tag = F2(
	function (label, style) {
		var _p78 = style;
		switch (_p78.ctor) {
			case 'Single':
				return A3(
					_mdgriffith$stylish_elephants$Internal_Model$Single,
					A2(
						_elm_lang$core$Basics_ops['++'],
						label,
						A2(_elm_lang$core$Basics_ops['++'], '-', _p78._0)),
					_p78._1,
					_p78._2);
			case 'Colored':
				return A3(
					_mdgriffith$stylish_elephants$Internal_Model$Colored,
					A2(
						_elm_lang$core$Basics_ops['++'],
						label,
						A2(_elm_lang$core$Basics_ops['++'], '-', _p78._0)),
					_p78._1,
					_p78._2);
			case 'Style':
				return A2(
					_mdgriffith$stylish_elephants$Internal_Model$Style,
					A2(
						_elm_lang$core$Basics_ops['++'],
						label,
						A2(_elm_lang$core$Basics_ops['++'], '-', _p78._0)),
					_p78._1);
			case 'Transparency':
				return A2(
					_mdgriffith$stylish_elephants$Internal_Model$Transparency,
					A2(
						_elm_lang$core$Basics_ops['++'],
						label,
						A2(_elm_lang$core$Basics_ops['++'], '-', _p78._0)),
					_p78._1);
			default:
				return _p78;
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$Active = {ctor: 'Active'};
var _mdgriffith$stylish_elephants$Internal_Model$Hover = {ctor: 'Hover'};
var _mdgriffith$stylish_elephants$Internal_Model$Focus = {ctor: 'Focus'};
var _mdgriffith$stylish_elephants$Internal_Model$finalize = function (gathered) {
	var addTextShadows = function (_p79) {
		var _p80 = _p79;
		var _p84 = _p80._1;
		var _p83 = _p80._0;
		var _p81 = gathered.textShadows;
		if (_p81.ctor === 'Nothing') {
			return {ctor: '_Tuple2', _0: _p83, _1: _p84};
		} else {
			var _p82 = _p81._0;
			var name = A2(
				_elm_lang$core$Basics_ops['++'],
				'text-shadow-',
				_mdgriffith$stylish_elephants$Internal_Model$className(_p82));
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: name, _1: _p83},
				_1: {
					ctor: '::',
					_0: A3(
						_mdgriffith$stylish_elephants$Internal_Model$Single,
						A2(_elm_lang$core$Basics_ops['++'], '.', name),
						'text-shadow',
						_p82),
					_1: _p84
				}
			};
		}
	};
	var addBoxShadows = function (_p85) {
		var _p86 = _p85;
		var _p90 = _p86._1;
		var _p89 = _p86._0;
		var _p87 = gathered.boxShadows;
		if (_p87.ctor === 'Nothing') {
			return {ctor: '_Tuple2', _0: _p89, _1: _p90};
		} else {
			var _p88 = _p87._0;
			var name = A2(
				_elm_lang$core$Basics_ops['++'],
				'box-shadow-',
				_mdgriffith$stylish_elephants$Internal_Model$className(_p88));
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: name, _1: _p89},
				_1: {
					ctor: '::',
					_0: A3(
						_mdgriffith$stylish_elephants$Internal_Model$Single,
						A2(_elm_lang$core$Basics_ops['++'], '.', name),
						'box-shadow',
						_p88),
					_1: _p90
				}
			};
		}
	};
	var addFilters = function (_p91) {
		var _p92 = _p91;
		var _p96 = _p92._1;
		var _p95 = _p92._0;
		var _p93 = gathered.filters;
		if (_p93.ctor === 'Nothing') {
			return {ctor: '_Tuple2', _0: _p95, _1: _p96};
		} else {
			var _p94 = _p93._0;
			var name = A2(
				_elm_lang$core$Basics_ops['++'],
				'filter-',
				_mdgriffith$stylish_elephants$Internal_Model$className(_p94));
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: name, _1: _p95},
				_1: {
					ctor: '::',
					_0: A3(
						_mdgriffith$stylish_elephants$Internal_Model$Single,
						A2(_elm_lang$core$Basics_ops['++'], '.', name),
						'filter',
						_p94),
					_1: _p96
				}
			};
		}
	};
	var add = F2(
		function ($new, _p97) {
			var _p98 = _p97;
			var _p101 = _p98._1;
			var _p100 = _p98._0;
			var _p99 = $new;
			if (_p99.ctor === 'Nothing') {
				return {ctor: '_Tuple2', _0: _p100, _1: _p101};
			} else {
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: _p99._0._0, _1: _p100},
					_1: {ctor: '::', _0: _p99._0._1, _1: _p101}
				};
			}
		});
	var addTransform = function (_p102) {
		var _p103 = _p102;
		var _p107 = _p103._1;
		var _p106 = _p103._0;
		var _p104 = gathered.transform;
		if (_p104.ctor === 'Nothing') {
			return {ctor: '_Tuple2', _0: _p106, _1: _p107};
		} else {
			var _p105 = _p104._0;
			return A2(
				add,
				A2(
					_elm_lang$core$Maybe$andThen,
					_mdgriffith$stylish_elephants$Internal_Model$renderTransformationGroup(
						_elm_lang$core$Maybe$Just(_mdgriffith$stylish_elephants$Internal_Model$Active)),
					_p105.active),
				A2(
					add,
					A2(
						_elm_lang$core$Maybe$andThen,
						_mdgriffith$stylish_elephants$Internal_Model$renderTransformationGroup(
							_elm_lang$core$Maybe$Just(_mdgriffith$stylish_elephants$Internal_Model$Hover)),
						_p105.hover),
					A2(
						add,
						A2(
							_elm_lang$core$Maybe$andThen,
							_mdgriffith$stylish_elephants$Internal_Model$renderTransformationGroup(
								_elm_lang$core$Maybe$Just(_mdgriffith$stylish_elephants$Internal_Model$Focus)),
							_p105.focus),
						A2(
							add,
							A2(
								_elm_lang$core$Maybe$andThen,
								_mdgriffith$stylish_elephants$Internal_Model$renderTransformationGroup(_elm_lang$core$Maybe$Nothing),
								_p105.normal),
							{ctor: '_Tuple2', _0: _p106, _1: _p107}))));
		}
	};
	var _p108 = addTransform(
		addTextShadows(
			addBoxShadows(
				addFilters(
					{
						ctor: '_Tuple2',
						_0: {ctor: '[]'},
						_1: gathered.styles
					}))));
	var classes = _p108._0;
	var styles = _p108._1;
	return _elm_lang$core$Native_Utils.update(
		gathered,
		{
			styles: styles,
			attributes: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(
					A2(_elm_lang$core$String$join, ' ', classes)),
				_1: gathered.attributes
			}
		});
};
var _mdgriffith$stylish_elephants$Internal_Model$ImportFont = F2(
	function (a, b) {
		return {ctor: 'ImportFont', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Typeface = function (a) {
	return {ctor: 'Typeface', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Monospace = {ctor: 'Monospace'};
var _mdgriffith$stylish_elephants$Internal_Model$SansSerif = {ctor: 'SansSerif'};
var _mdgriffith$stylish_elephants$Internal_Model$Serif = {ctor: 'Serif'};
var _mdgriffith$stylish_elephants$Internal_Model$Property = F2(
	function (a, b) {
		return {ctor: 'Property', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$renderFocusStyle = function (focus) {
	return A2(
		_mdgriffith$stylish_elephants$Internal_Model$Style,
		'.se:focus .focusable, .se.focusable:focus',
		A2(
			_elm_lang$core$List$filterMap,
			_elm_lang$core$Basics$identity,
			{
				ctor: '::',
				_0: A2(
					_elm_lang$core$Maybe$map,
					function (color) {
						return A2(
							_mdgriffith$stylish_elephants$Internal_Model$Property,
							'border-color',
							_mdgriffith$stylish_elephants$Internal_Model$formatColor(color));
					},
					focus.borderColor),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Maybe$map,
						function (color) {
							return A2(
								_mdgriffith$stylish_elephants$Internal_Model$Property,
								'background-color',
								_mdgriffith$stylish_elephants$Internal_Model$formatColor(color));
						},
						focus.backgroundColor),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Maybe$map,
							function (shadow) {
								return A2(
									_mdgriffith$stylish_elephants$Internal_Model$Property,
									'box-shadow',
									_mdgriffith$stylish_elephants$Internal_Model$formatBoxShadow(
										{color: shadow.color, offset: shadow.offset, inset: false, blur: shadow.blur, size: shadow.size}));
							},
							focus.shadow),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Maybe$Just(
								A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'outline', 'none')),
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};
var _mdgriffith$stylish_elephants$Internal_Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var renderTopLevels = function (rule) {
			var _p109 = rule;
			if (_p109.ctor === 'FontFamily') {
				var getImports = function (font) {
					var _p110 = font;
					if (_p110.ctor === 'ImportFont') {
						return _elm_lang$core$Maybe$Just(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'@import url(\'',
								A2(_elm_lang$core$Basics_ops['++'], _p110._1, '\');')));
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				};
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$String$join,
						'\n',
						A2(_elm_lang$core$List$filterMap, getImports, _p109._1)));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		};
		var renderProps = F3(
			function (force, _p111, existing) {
				var _p112 = _p111;
				var _p114 = _p112._1;
				var _p113 = _p112._0;
				return force ? A2(
					_elm_lang$core$Basics_ops['++'],
					existing,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'\n  ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p113,
							A2(
								_elm_lang$core$Basics_ops['++'],
								': ',
								A2(_elm_lang$core$Basics_ops['++'], _p114, ' !important;'))))) : A2(
					_elm_lang$core$Basics_ops['++'],
					existing,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'\n  ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p113,
							A2(
								_elm_lang$core$Basics_ops['++'],
								': ',
								A2(_elm_lang$core$Basics_ops['++'], _p114, ';')))));
			});
		var renderStyle = F4(
			function (force, maybePseudo, selector, props) {
				var _p115 = maybePseudo;
				if (_p115.ctor === 'Nothing') {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						selector,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'{',
							A2(
								_elm_lang$core$Basics_ops['++'],
								A3(
									_elm_lang$core$List$foldl,
									renderProps(force),
									'',
									props),
								'\n}')));
				} else {
					var _p116 = _p115._0;
					switch (_p116.ctor) {
						case 'Hover':
							return A2(
								_elm_lang$core$Basics_ops['++'],
								selector,
								A2(
									_elm_lang$core$Basics_ops['++'],
									':hover {',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A3(
											_elm_lang$core$List$foldl,
											renderProps(force),
											'',
											props),
										'\n}')));
						case 'Focus':
							var renderedProps = A3(
								_elm_lang$core$List$foldl,
								renderProps(force),
								'',
								props);
							return A2(
								_elm_lang$core$String$join,
								'\n',
								{
									ctor: '::',
									_0: A2(
										_elm_lang$core$Basics_ops['++'],
										selector,
										A2(
											_elm_lang$core$Basics_ops['++'],
											':focus {',
											A2(_elm_lang$core$Basics_ops['++'], renderedProps, '\n}'))),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$core$Basics_ops['++'],
											'.se:focus ~ ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												selector,
												A2(
													_elm_lang$core$Basics_ops['++'],
													':not(.focus)  {',
													A2(_elm_lang$core$Basics_ops['++'], renderedProps, '\n}')))),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$core$Basics_ops['++'],
												'.se:focus ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													selector,
													A2(
														_elm_lang$core$Basics_ops['++'],
														'  {',
														A2(_elm_lang$core$Basics_ops['++'], renderedProps, '\n}')))),
											_1: {ctor: '[]'}
										}
									}
								});
						default:
							return A2(
								_elm_lang$core$Basics_ops['++'],
								selector,
								A2(
									_elm_lang$core$Basics_ops['++'],
									':active {',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A3(
											_elm_lang$core$List$foldl,
											renderProps(force),
											'',
											props),
										'\n}')));
					}
				}
			});
		var renderStyleRule = F3(
			function (rule, maybePseudo, force) {
				var _p117 = rule;
				switch (_p117.ctor) {
					case 'Style':
						return A4(renderStyle, force, maybePseudo, _p117._0, _p117._1);
					case 'Shadows':
						return A4(
							renderStyle,
							force,
							maybePseudo,
							A2(_elm_lang$core$Basics_ops['++'], '.', _p117._0),
							{
								ctor: '::',
								_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'box-shadow', _p117._1),
								_1: {ctor: '[]'}
							});
					case 'Transparency':
						var _p118 = _p117._0;
						var opacity = A2(
							_elm_lang$core$Basics$max,
							0,
							A2(_elm_lang$core$Basics$min, 1, 1 - _p117._1));
						return (_elm_lang$core$Native_Utils.cmp(opacity, 0) < 1) ? A4(
							renderStyle,
							force,
							maybePseudo,
							A2(_elm_lang$core$Basics_ops['++'], '.', _p118),
							{
								ctor: '::',
								_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'opacity', '0'),
								_1: {
									ctor: '::',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'pointer-events', 'none'),
									_1: {ctor: '[]'}
								}
							}) : A4(
							renderStyle,
							force,
							maybePseudo,
							A2(_elm_lang$core$Basics_ops['++'], '.', _p118),
							{
								ctor: '::',
								_0: A2(
									_mdgriffith$stylish_elephants$Internal_Model$Property,
									'opacity',
									_elm_lang$core$Basics$toString(opacity)),
								_1: {
									ctor: '::',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'pointer-events', 'auto'),
									_1: {ctor: '[]'}
								}
							});
					case 'FontSize':
						var _p119 = _p117._0;
						return A4(
							renderStyle,
							force,
							maybePseudo,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'.font-size-',
								_mdgriffith$stylish_elephants$Internal_Model$intToString(_p119)),
							{
								ctor: '::',
								_0: A2(
									_mdgriffith$stylish_elephants$Internal_Model$Property,
									'font-size',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_mdgriffith$stylish_elephants$Internal_Model$intToString(_p119),
										'px')),
								_1: {ctor: '[]'}
							});
					case 'FontFamily':
						return A4(
							renderStyle,
							force,
							maybePseudo,
							A2(_elm_lang$core$Basics_ops['++'], '.', _p117._0),
							{
								ctor: '::',
								_0: A2(
									_mdgriffith$stylish_elephants$Internal_Model$Property,
									'font-family',
									_mdgriffith$stylish_elephants$Internal_Model$renderFont(_p117._1)),
								_1: {ctor: '[]'}
							});
					case 'Single':
						return A4(
							renderStyle,
							force,
							maybePseudo,
							_p117._0,
							{
								ctor: '::',
								_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, _p117._1, _p117._2),
								_1: {ctor: '[]'}
							});
					case 'Colored':
						return A4(
							renderStyle,
							force,
							maybePseudo,
							_p117._0,
							{
								ctor: '::',
								_0: A2(
									_mdgriffith$stylish_elephants$Internal_Model$Property,
									_p117._1,
									_mdgriffith$stylish_elephants$Internal_Model$formatColor(_p117._2)),
								_1: {ctor: '[]'}
							});
					case 'SpacingStyle':
						var _p121 = _p117._1;
						var _p120 = _p117._0;
						var any = _mdgriffith$stylish_elephants$Internal_Style$dot(
							function (_) {
								return _.any;
							}(_mdgriffith$stylish_elephants$Internal_Style$classes));
						var right = _mdgriffith$stylish_elephants$Internal_Style$dot(
							function (_) {
								return _.alignRight;
							}(_mdgriffith$stylish_elephants$Internal_Style$classes));
						var left = _mdgriffith$stylish_elephants$Internal_Style$dot(
							function (_) {
								return _.alignLeft;
							}(_mdgriffith$stylish_elephants$Internal_Style$classes));
						var paragraph = _mdgriffith$stylish_elephants$Internal_Style$dot(
							function (_) {
								return _.paragraph;
							}(_mdgriffith$stylish_elephants$Internal_Style$classes));
						var page = _mdgriffith$stylish_elephants$Internal_Style$dot(
							function (_) {
								return _.page;
							}(_mdgriffith$stylish_elephants$Internal_Style$classes));
						var column = _mdgriffith$stylish_elephants$Internal_Style$dot(
							function (_) {
								return _.column;
							}(_mdgriffith$stylish_elephants$Internal_Style$classes));
						var row = _mdgriffith$stylish_elephants$Internal_Style$dot(
							function (_) {
								return _.row;
							}(_mdgriffith$stylish_elephants$Internal_Style$classes));
						var yPx = A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p121),
							'px');
						var xPx = A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p120),
							'px');
						var $class = A2(
							_elm_lang$core$Basics_ops['++'],
							'.spacing-',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p120),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'-',
									_elm_lang$core$Basics$toString(_p121))));
						return A3(
							_elm_lang$core$List$foldl,
							F2(
								function (x, y) {
									return A2(_elm_lang$core$Basics_ops['++'], x, y);
								}),
							'',
							{
								ctor: '::',
								_0: A4(
									renderStyle,
									force,
									maybePseudo,
									A2(
										_elm_lang$core$Basics_ops['++'],
										$class,
										A2(
											_elm_lang$core$Basics_ops['++'],
											row,
											A2(
												_elm_lang$core$Basics_ops['++'],
												' > ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													any,
													A2(_elm_lang$core$Basics_ops['++'], ' + ', any))))),
									{
										ctor: '::',
										_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'margin-left', xPx),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A4(
										renderStyle,
										force,
										maybePseudo,
										A2(
											_elm_lang$core$Basics_ops['++'],
											$class,
											A2(
												_elm_lang$core$Basics_ops['++'],
												column,
												A2(
													_elm_lang$core$Basics_ops['++'],
													' > ',
													A2(
														_elm_lang$core$Basics_ops['++'],
														any,
														A2(_elm_lang$core$Basics_ops['++'], ' + ', any))))),
										{
											ctor: '::',
											_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'margin-top', yPx),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A4(
											renderStyle,
											force,
											maybePseudo,
											A2(
												_elm_lang$core$Basics_ops['++'],
												$class,
												A2(
													_elm_lang$core$Basics_ops['++'],
													page,
													A2(
														_elm_lang$core$Basics_ops['++'],
														' > ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															any,
															A2(_elm_lang$core$Basics_ops['++'], ' + ', any))))),
											{
												ctor: '::',
												_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'margin-top', yPx),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A4(
												renderStyle,
												force,
												maybePseudo,
												A2(
													_elm_lang$core$Basics_ops['++'],
													$class,
													A2(
														_elm_lang$core$Basics_ops['++'],
														page,
														A2(_elm_lang$core$Basics_ops['++'], ' > ', left))),
												{
													ctor: '::',
													_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'margin-right', xPx),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A4(
													renderStyle,
													force,
													maybePseudo,
													A2(
														_elm_lang$core$Basics_ops['++'],
														$class,
														A2(
															_elm_lang$core$Basics_ops['++'],
															page,
															A2(_elm_lang$core$Basics_ops['++'], ' > ', right))),
													{
														ctor: '::',
														_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'margin-left', xPx),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A4(
														renderStyle,
														force,
														maybePseudo,
														A2(_elm_lang$core$Basics_ops['++'], $class, paragraph),
														{
															ctor: '::',
															_0: A2(
																_mdgriffith$stylish_elephants$Internal_Model$Property,
																'line-height',
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	'calc(1em + ',
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		_elm_lang$core$Basics$toString(_p121),
																		'px)'))),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A4(
															renderStyle,
															force,
															maybePseudo,
															A2(_elm_lang$core$Basics_ops['++'], 'textarea', $class),
															{
																ctor: '::',
																_0: A2(
																	_mdgriffith$stylish_elephants$Internal_Model$Property,
																	'line-height',
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		'calc(1em + ',
																		A2(
																			_elm_lang$core$Basics_ops['++'],
																			_elm_lang$core$Basics$toString(_p121),
																			'px)'))),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A4(
																renderStyle,
																force,
																maybePseudo,
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	$class,
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		paragraph,
																		A2(_elm_lang$core$Basics_ops['++'], ' > ', left))),
																{
																	ctor: '::',
																	_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'margin-right', xPx),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A4(
																	renderStyle,
																	force,
																	maybePseudo,
																	A2(
																		_elm_lang$core$Basics_ops['++'],
																		$class,
																		A2(
																			_elm_lang$core$Basics_ops['++'],
																			paragraph,
																			A2(_elm_lang$core$Basics_ops['++'], ' > ', right))),
																	{
																		ctor: '::',
																		_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'margin-left', xPx),
																		_1: {ctor: '[]'}
																	}),
																_1: {
																	ctor: '::',
																	_0: A4(
																		renderStyle,
																		force,
																		maybePseudo,
																		A2(
																			_elm_lang$core$Basics_ops['++'],
																			$class,
																			A2(_elm_lang$core$Basics_ops['++'], paragraph, '::after')),
																		{
																			ctor: '::',
																			_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'content', '\'\''),
																			_1: {
																				ctor: '::',
																				_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'display', 'block'),
																				_1: {
																					ctor: '::',
																					_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'height', '0'),
																					_1: {
																						ctor: '::',
																						_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'width', '0'),
																						_1: {
																							ctor: '::',
																							_0: A2(
																								_mdgriffith$stylish_elephants$Internal_Model$Property,
																								'margin-top',
																								A2(
																									_elm_lang$core$Basics_ops['++'],
																									_elm_lang$core$Basics$toString(-1 * ((_p121 / 2) | 0)),
																									'px')),
																							_1: {ctor: '[]'}
																						}
																					}
																				}
																			}
																		}),
																	_1: {
																		ctor: '::',
																		_0: A4(
																			renderStyle,
																			force,
																			maybePseudo,
																			A2(
																				_elm_lang$core$Basics_ops['++'],
																				$class,
																				A2(_elm_lang$core$Basics_ops['++'], paragraph, '::before')),
																			{
																				ctor: '::',
																				_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'content', '\'\''),
																				_1: {
																					ctor: '::',
																					_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'display', 'block'),
																					_1: {
																						ctor: '::',
																						_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'height', '0'),
																						_1: {
																							ctor: '::',
																							_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Property, 'width', '0'),
																							_1: {
																								ctor: '::',
																								_0: A2(
																									_mdgriffith$stylish_elephants$Internal_Model$Property,
																									'margin-bottom',
																									A2(
																										_elm_lang$core$Basics_ops['++'],
																										_elm_lang$core$Basics$toString(-1 * ((_p121 / 2) | 0)),
																										'px')),
																								_1: {ctor: '[]'}
																							}
																						}
																					}
																				}
																			}),
																		_1: {ctor: '[]'}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							});
					case 'PaddingStyle':
						var _p125 = _p117._0;
						var _p124 = _p117._1;
						var _p123 = _p117._3;
						var _p122 = _p117._2;
						var $class = A2(
							_elm_lang$core$Basics_ops['++'],
							'.pad-',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p125),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'-',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p124),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'-',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p122),
												A2(
													_elm_lang$core$Basics_ops['++'],
													'-',
													_elm_lang$core$Basics$toString(_p123))))))));
						return A4(
							renderStyle,
							force,
							maybePseudo,
							$class,
							{
								ctor: '::',
								_0: A2(
									_mdgriffith$stylish_elephants$Internal_Model$Property,
									'padding',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p125),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'px ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p124),
												A2(
													_elm_lang$core$Basics_ops['++'],
													'px ',
													A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Basics$toString(_p122),
														A2(
															_elm_lang$core$Basics_ops['++'],
															'px ',
															A2(
																_elm_lang$core$Basics_ops['++'],
																_elm_lang$core$Basics$toString(_p123),
																'px')))))))),
								_1: {ctor: '[]'}
							});
					case 'GridTemplateStyle':
						var _p130 = _p117._0;
						var toGridLengthHelper = F3(
							function (minimum, maximum, x) {
								toGridLengthHelper:
								while (true) {
									var _p126 = x;
									switch (_p126.ctor) {
										case 'Px':
											return A2(
												_elm_lang$core$Basics_ops['++'],
												_elm_lang$core$Basics$toString(_p126._0),
												'px');
										case 'Content':
											var _p127 = {ctor: '_Tuple2', _0: minimum, _1: maximum};
											if (_p127._0.ctor === 'Nothing') {
												if (_p127._1.ctor === 'Nothing') {
													return 'max-content';
												} else {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														'minmax(max-content, ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_mdgriffith$stylish_elephants$Internal_Model$intToString(_p127._1._0),
															'px)'));
												}
											} else {
												if (_p127._1.ctor === 'Nothing') {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														'minmax(',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_mdgriffith$stylish_elephants$Internal_Model$intToString(_p127._0._0),
															A2(_elm_lang$core$Basics_ops['++'], 'px, ', 'max-content)')));
												} else {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														'minmax(',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_mdgriffith$stylish_elephants$Internal_Model$intToString(_p127._0._0),
															A2(
																_elm_lang$core$Basics_ops['++'],
																'px, ',
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	_mdgriffith$stylish_elephants$Internal_Model$intToString(_p127._1._0),
																	'px)'))));
												}
											}
										case 'Fill':
											var _p129 = _p126._0;
											var _p128 = {ctor: '_Tuple2', _0: minimum, _1: maximum};
											if (_p128._0.ctor === 'Nothing') {
												if (_p128._1.ctor === 'Nothing') {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														_mdgriffith$stylish_elephants$Internal_Model$intToString(_p129),
														'fr');
												} else {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														'minmax(max-content, ',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_mdgriffith$stylish_elephants$Internal_Model$intToString(_p128._1._0),
															'px)'));
												}
											} else {
												if (_p128._1.ctor === 'Nothing') {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														'minmax(',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_mdgriffith$stylish_elephants$Internal_Model$intToString(_p128._0._0),
															A2(
																_elm_lang$core$Basics_ops['++'],
																'px, ',
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	_mdgriffith$stylish_elephants$Internal_Model$intToString(_p129),
																	A2(_elm_lang$core$Basics_ops['++'], 'fr', 'fr)')))));
												} else {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														'minmax(',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_mdgriffith$stylish_elephants$Internal_Model$intToString(_p128._0._0),
															A2(
																_elm_lang$core$Basics_ops['++'],
																'px, ',
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	_mdgriffith$stylish_elephants$Internal_Model$intToString(_p128._1._0),
																	'px)'))));
												}
											}
										case 'Min':
											var _v65 = _elm_lang$core$Maybe$Just(_p126._0),
												_v66 = maximum,
												_v67 = _p126._1;
											minimum = _v65;
											maximum = _v66;
											x = _v67;
											continue toGridLengthHelper;
										default:
											var _v68 = minimum,
												_v69 = _elm_lang$core$Maybe$Just(_p126._0),
												_v70 = _p126._1;
											minimum = _v68;
											maximum = _v69;
											x = _v70;
											continue toGridLengthHelper;
									}
								}
							});
						var toGridLength = function (x) {
							return A3(toGridLengthHelper, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing, x);
						};
						var columns = function (x) {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'grid-template-columns: ',
								A2(_elm_lang$core$Basics_ops['++'], x, ';'));
						}(
							A2(
								_elm_lang$core$String$join,
								' ',
								A2(_elm_lang$core$List$map, toGridLength, _p130.columns)));
						var rows = function (x) {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'grid-template-rows: ',
								A2(_elm_lang$core$Basics_ops['++'], x, ';'));
						}(
							A2(
								_elm_lang$core$String$join,
								' ',
								A2(_elm_lang$core$List$map, toGridLength, _p130.rows)));
						var gapX = A2(
							_elm_lang$core$Basics_ops['++'],
							'grid-column-gap:',
							A2(
								_elm_lang$core$Basics_ops['++'],
								toGridLength(
									_elm_lang$core$Tuple$first(_p130.spacing)),
								';'));
						var gapY = A2(
							_elm_lang$core$Basics_ops['++'],
							'grid-row-gap:',
							A2(
								_elm_lang$core$Basics_ops['++'],
								toGridLength(
									_elm_lang$core$Tuple$second(_p130.spacing)),
								';'));
						var xSpacing = toGridLength(
							_elm_lang$core$Tuple$first(_p130.spacing));
						var ySpacing = toGridLength(
							_elm_lang$core$Tuple$second(_p130.spacing));
						var msColumns = function (x) {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'-ms-grid-columns: ',
								A2(_elm_lang$core$Basics_ops['++'], x, ';'));
						}(
							A2(
								_elm_lang$core$String$join,
								ySpacing,
								A2(_elm_lang$core$List$map, toGridLength, _p130.columns)));
						var msRows = function (x) {
							return A2(
								_elm_lang$core$Basics_ops['++'],
								'-ms-grid-rows: ',
								A2(_elm_lang$core$Basics_ops['++'], x, ';'));
						}(
							A2(
								_elm_lang$core$String$join,
								ySpacing,
								A2(_elm_lang$core$List$map, toGridLength, _p130.columns)));
						var $class = A2(
							_elm_lang$core$Basics_ops['++'],
							'.grid-rows-',
							A2(
								_elm_lang$core$Basics_ops['++'],
								A2(
									_elm_lang$core$String$join,
									'-',
									A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Internal_Model$lengthClassName, _p130.rows)),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'-cols-',
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(
											_elm_lang$core$String$join,
											'-',
											A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Internal_Model$lengthClassName, _p130.columns)),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'-space-x-',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_mdgriffith$stylish_elephants$Internal_Model$lengthClassName(
													_elm_lang$core$Tuple$first(_p130.spacing)),
												A2(
													_elm_lang$core$Basics_ops['++'],
													'-space-y-',
													_mdgriffith$stylish_elephants$Internal_Model$lengthClassName(
														_elm_lang$core$Tuple$second(_p130.spacing)))))))));
						var base = A2(
							_elm_lang$core$Basics_ops['++'],
							$class,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'{',
								A2(
									_elm_lang$core$Basics_ops['++'],
									msColumns,
									A2(_elm_lang$core$Basics_ops['++'], msRows, '}'))));
						var modernGrid = A2(
							_elm_lang$core$Basics_ops['++'],
							$class,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'{',
								A2(
									_elm_lang$core$Basics_ops['++'],
									columns,
									A2(
										_elm_lang$core$Basics_ops['++'],
										rows,
										A2(
											_elm_lang$core$Basics_ops['++'],
											gapX,
											A2(_elm_lang$core$Basics_ops['++'], gapY, '}'))))));
						var supports = A2(
							_elm_lang$core$Basics_ops['++'],
							'@supports (display:grid) {',
							A2(_elm_lang$core$Basics_ops['++'], modernGrid, '}'));
						return A2(_elm_lang$core$Basics_ops['++'], base, supports);
					case 'GridPosition':
						var _p131 = _p117._0;
						var modernPosition = A2(
							_elm_lang$core$String$join,
							' ',
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'grid-row: ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.row),
										A2(
											_elm_lang$core$Basics_ops['++'],
											' / ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.row + _p131.height),
												';')))),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$core$Basics_ops['++'],
										'grid-column: ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.col),
											A2(
												_elm_lang$core$Basics_ops['++'],
												' / ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.col + _p131.width),
													';')))),
									_1: {ctor: '[]'}
								}
							});
						var msPosition = A2(
							_elm_lang$core$String$join,
							' ',
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									'-ms-grid-row: ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.row),
										';')),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$core$Basics_ops['++'],
										'-ms-grid-row-span: ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.height),
											';')),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$core$Basics_ops['++'],
											'-ms-grid-column: ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.col),
												';')),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$core$Basics_ops['++'],
												'-ms-grid-column-span: ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.width),
													';')),
											_1: {ctor: '[]'}
										}
									}
								}
							});
						var $class = A2(
							_elm_lang$core$Basics_ops['++'],
							'.grid-pos-',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.row),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'-',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.col),
										A2(
											_elm_lang$core$Basics_ops['++'],
											'-',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.width),
												A2(
													_elm_lang$core$Basics_ops['++'],
													'-',
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p131.height))))))));
						var base = A2(
							_elm_lang$core$Basics_ops['++'],
							$class,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'{',
								A2(_elm_lang$core$Basics_ops['++'], msPosition, '}')));
						var modernGrid = A2(
							_elm_lang$core$Basics_ops['++'],
							$class,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'{',
								A2(_elm_lang$core$Basics_ops['++'], modernPosition, '}')));
						var supports = A2(
							_elm_lang$core$Basics_ops['++'],
							'@supports (display:grid) {',
							A2(_elm_lang$core$Basics_ops['++'], modernGrid, '}'));
						return A2(_elm_lang$core$Basics_ops['++'], base, supports);
					case 'PseudoSelector':
						var renderPseudoRule = function (style) {
							var _p132 = _p117._0;
							switch (_p132.ctor) {
								case 'Focus':
									return A3(
										renderStyleRule,
										style,
										_elm_lang$core$Maybe$Just(_mdgriffith$stylish_elephants$Internal_Model$Focus),
										false);
								case 'Active':
									return A3(
										renderStyleRule,
										style,
										_elm_lang$core$Maybe$Just(_mdgriffith$stylish_elephants$Internal_Model$Active),
										false);
								default:
									var _p133 = options.hover;
									switch (_p133.ctor) {
										case 'NoHover':
											return '';
										case 'AllowHover':
											return A3(
												renderStyleRule,
												style,
												_elm_lang$core$Maybe$Just(_mdgriffith$stylish_elephants$Internal_Model$Hover),
												false);
										default:
											return A3(renderStyleRule, style, _elm_lang$core$Maybe$Nothing, true);
									}
							}
						};
						return A2(
							_elm_lang$core$String$join,
							' ',
							A2(_elm_lang$core$List$map, renderPseudoRule, _p117._1));
					default:
						return '';
				}
			});
		var combine = F2(
			function (style, rendered) {
				return _elm_lang$core$Native_Utils.update(
					rendered,
					{
						rules: A2(
							_elm_lang$core$Basics_ops['++'],
							rendered.rules,
							A3(renderStyleRule, style, _elm_lang$core$Maybe$Nothing, false)),
						topLevel: function () {
							var _p134 = renderTopLevels(style);
							if (_p134.ctor === 'Nothing') {
								return rendered.topLevel;
							} else {
								return A2(_elm_lang$core$Basics_ops['++'], rendered.topLevel, _p134._0);
							}
						}()
					});
			});
		return function (_p135) {
			var _p136 = _p135;
			return A2(_elm_lang$core$Basics_ops['++'], _p136.topLevel, _p136.rules);
		}(
			A3(
				_elm_lang$core$List$foldl,
				combine,
				{rules: '', topLevel: ''},
				stylesheet));
	});
var _mdgriffith$stylish_elephants$Internal_Model$toHtml = F2(
	function (options, el) {
		var _p137 = el;
		switch (_p137.ctor) {
			case 'Unstyled':
				return _p137._0(_mdgriffith$stylish_elephants$Internal_Model$asEl);
			case 'Styled':
				var styleSheet = A2(
					_mdgriffith$stylish_elephants$Internal_Model$toStyleSheetString,
					options,
					_elm_lang$core$Tuple$second(
						A3(
							_elm_lang$core$List$foldr,
							_mdgriffith$stylish_elephants$Internal_Model$reduceStyles,
							{
								ctor: '_Tuple2',
								_0: _elm_lang$core$Set$empty,
								_1: {
									ctor: '::',
									_0: _mdgriffith$stylish_elephants$Internal_Model$renderFocusStyle(options.focus),
									_1: {ctor: '[]'}
								}
							},
							_p137._0.styles)));
				return A2(
					_p137._0.html,
					_elm_lang$core$Maybe$Just(styleSheet),
					_mdgriffith$stylish_elephants$Internal_Model$asEl);
			case 'Text':
				return _mdgriffith$stylish_elephants$Internal_Model$textElement(_p137._0);
			default:
				return _mdgriffith$stylish_elephants$Internal_Model$textElement('');
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$toStyleSheet = F2(
	function (options, styleSheet) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			'style',
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(
					A2(_mdgriffith$stylish_elephants$Internal_Model$toStyleSheetString, options, styleSheet)),
				_1: {ctor: '[]'}
			});
	});
var _mdgriffith$stylish_elephants$Internal_Model$Scale = F3(
	function (a, b, c) {
		return {ctor: 'Scale', _0: a, _1: b, _2: c};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Rotate = F4(
	function (a, b, c, d) {
		return {ctor: 'Rotate', _0: a, _1: b, _2: c, _3: d};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Move = F3(
	function (a, b, c) {
		return {ctor: 'Move', _0: a, _1: b, _2: c};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Filter = function (a) {
	return {ctor: 'Filter', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$BoxShadow = function (a) {
	return {ctor: 'BoxShadow', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$TextShadow = function (a) {
	return {ctor: 'TextShadow', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Nearby = F2(
	function (a, b) {
		return {ctor: 'Nearby', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Height = function (a) {
	return {ctor: 'Height', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Width = function (a) {
	return {ctor: 'Width', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$AlignX = function (a) {
	return {ctor: 'AlignX', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$AlignY = function (a) {
	return {ctor: 'AlignY', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$StyleClass = function (a) {
	return {ctor: 'StyleClass', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$getSpacingAttribute = F2(
	function (attrs, $default) {
		return function (_p138) {
			var _p139 = _p138;
			return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
				A2(_mdgriffith$stylish_elephants$Internal_Model$SpacingStyle, _p139._0, _p139._1));
		}(
			A2(
				_elm_lang$core$Maybe$withDefault,
				$default,
				A3(
					_elm_lang$core$List$foldr,
					F2(
						function (x, acc) {
							var _p140 = acc;
							if (_p140.ctor === 'Just') {
								return _elm_lang$core$Maybe$Just(_p140._0);
							} else {
								var _p141 = x;
								if ((_p141.ctor === 'StyleClass') && (_p141._0.ctor === 'SpacingStyle')) {
									return _elm_lang$core$Maybe$Just(
										{ctor: '_Tuple2', _0: _p141._0._0, _1: _p141._0._1});
								} else {
									return _elm_lang$core$Maybe$Nothing;
								}
							}
						}),
					_elm_lang$core$Maybe$Nothing,
					attrs)));
	});
var _mdgriffith$stylish_elephants$Internal_Model$rootStyle = function () {
	var families = {
		ctor: '::',
		_0: _mdgriffith$stylish_elephants$Internal_Model$Typeface('Open Sans'),
		_1: {
			ctor: '::',
			_0: _mdgriffith$stylish_elephants$Internal_Model$Typeface('Helvetica'),
			_1: {
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Internal_Model$Typeface('Verdana'),
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Internal_Model$SansSerif,
					_1: {ctor: '[]'}
				}
			}
		}
	};
	return {
		ctor: '::',
		_0: _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
			A3(
				_mdgriffith$stylish_elephants$Internal_Model$Colored,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'bg-color-',
					_mdgriffith$stylish_elephants$Internal_Model$formatColorClass(
						A4(_elm_lang$core$Color$rgba, 255, 255, 255, 0))),
				'background-color',
				A4(_elm_lang$core$Color$rgba, 255, 255, 255, 0))),
		_1: {
			ctor: '::',
			_0: _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
				A3(
					_mdgriffith$stylish_elephants$Internal_Model$Colored,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'font-color-',
						_mdgriffith$stylish_elephants$Internal_Model$formatColorClass(_elm_lang$core$Color$darkCharcoal)),
					'color',
					_elm_lang$core$Color$darkCharcoal)),
			_1: {
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
					A3(_mdgriffith$stylish_elephants$Internal_Model$Single, 'font-size-20', 'font-size', '20px')),
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
						A2(
							_mdgriffith$stylish_elephants$Internal_Model$FontFamily,
							A3(_elm_lang$core$List$foldl, _mdgriffith$stylish_elephants$Internal_Model$renderFontClassName, 'font-', families),
							families)),
					_1: {ctor: '[]'}
				}
			}
		}
	};
}();
var _mdgriffith$stylish_elephants$Internal_Model$Class = F2(
	function (a, b) {
		return {ctor: 'Class', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$class = function (x) {
	return A2(_mdgriffith$stylish_elephants$Internal_Model$Class, x, x);
};
var _mdgriffith$stylish_elephants$Internal_Model$Describe = function (a) {
	return {ctor: 'Describe', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Attr = function (a) {
	return {ctor: 'Attr', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$htmlClass = function (cls) {
	return _mdgriffith$stylish_elephants$Internal_Model$Attr(
		A2(
			_elm_lang$virtual_dom$VirtualDom$property,
			'className',
			_elm_lang$core$Json_Encode$string(cls)));
};
var _mdgriffith$stylish_elephants$Internal_Model$contextClasses = function (context) {
	var _p142 = context;
	switch (_p142.ctor) {
		case 'AsRow':
			return _mdgriffith$stylish_elephants$Internal_Model$htmlClass(
				A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$stylish_elephants$Internal_Style$classes.any,
					A2(_elm_lang$core$Basics_ops['++'], ' ', _mdgriffith$stylish_elephants$Internal_Style$classes.row)));
		case 'AsColumn':
			return _mdgriffith$stylish_elephants$Internal_Model$htmlClass(
				A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$stylish_elephants$Internal_Style$classes.any,
					A2(_elm_lang$core$Basics_ops['++'], ' ', _mdgriffith$stylish_elephants$Internal_Style$classes.column)));
		case 'AsEl':
			return _mdgriffith$stylish_elephants$Internal_Model$htmlClass(
				A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$stylish_elephants$Internal_Style$classes.any,
					A2(_elm_lang$core$Basics_ops['++'], ' ', _mdgriffith$stylish_elephants$Internal_Style$classes.single)));
		case 'AsGrid':
			return _mdgriffith$stylish_elephants$Internal_Model$htmlClass(
				A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$stylish_elephants$Internal_Style$classes.any,
					A2(_elm_lang$core$Basics_ops['++'], ' ', _mdgriffith$stylish_elephants$Internal_Style$classes.grid)));
		case 'AsParagraph':
			return _mdgriffith$stylish_elephants$Internal_Model$htmlClass(
				A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$stylish_elephants$Internal_Style$classes.any,
					A2(_elm_lang$core$Basics_ops['++'], ' ', _mdgriffith$stylish_elephants$Internal_Style$classes.paragraph)));
		default:
			return _mdgriffith$stylish_elephants$Internal_Model$htmlClass(
				A2(
					_elm_lang$core$Basics_ops['++'],
					_mdgriffith$stylish_elephants$Internal_Style$classes.any,
					A2(_elm_lang$core$Basics_ops['++'], ' ', _mdgriffith$stylish_elephants$Internal_Style$classes.page)));
	}
};
var _mdgriffith$stylish_elephants$Internal_Model$NoAttribute = {ctor: 'NoAttribute'};
var _mdgriffith$stylish_elephants$Internal_Model$mapAttr = F2(
	function (fn, attr) {
		var _p143 = attr;
		switch (_p143.ctor) {
			case 'NoAttribute':
				return _mdgriffith$stylish_elephants$Internal_Model$NoAttribute;
			case 'Describe':
				return _mdgriffith$stylish_elephants$Internal_Model$Describe(_p143._0);
			case 'AlignX':
				return _mdgriffith$stylish_elephants$Internal_Model$AlignX(_p143._0);
			case 'AlignY':
				return _mdgriffith$stylish_elephants$Internal_Model$AlignY(_p143._0);
			case 'Width':
				return _mdgriffith$stylish_elephants$Internal_Model$Width(_p143._0);
			case 'Height':
				return _mdgriffith$stylish_elephants$Internal_Model$Height(_p143._0);
			case 'Class':
				return A2(_mdgriffith$stylish_elephants$Internal_Model$Class, _p143._0, _p143._1);
			case 'StyleClass':
				return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(_p143._0);
			case 'Nearby':
				return A2(
					_mdgriffith$stylish_elephants$Internal_Model$Nearby,
					_p143._0,
					A2(_mdgriffith$stylish_elephants$Internal_Model$map, fn, _p143._1));
			case 'Attr':
				return _mdgriffith$stylish_elephants$Internal_Model$Attr(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p143._0));
			case 'TextShadow':
				return _mdgriffith$stylish_elephants$Internal_Model$TextShadow(_p143._0);
			case 'BoxShadow':
				return _mdgriffith$stylish_elephants$Internal_Model$BoxShadow(_p143._0);
			default:
				return _mdgriffith$stylish_elephants$Internal_Model$Filter(_p143._0);
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$mapAttrFromStyle = F2(
	function (fn, attr) {
		var _p144 = attr;
		switch (_p144.ctor) {
			case 'NoAttribute':
				return _mdgriffith$stylish_elephants$Internal_Model$NoAttribute;
			case 'Describe':
				return _mdgriffith$stylish_elephants$Internal_Model$Describe(_p144._0);
			case 'AlignX':
				return _mdgriffith$stylish_elephants$Internal_Model$AlignX(_p144._0);
			case 'AlignY':
				return _mdgriffith$stylish_elephants$Internal_Model$AlignY(_p144._0);
			case 'Width':
				return _mdgriffith$stylish_elephants$Internal_Model$Width(_p144._0);
			case 'Height':
				return _mdgriffith$stylish_elephants$Internal_Model$Height(_p144._0);
			case 'Class':
				return A2(_mdgriffith$stylish_elephants$Internal_Model$Class, _p144._0, _p144._1);
			case 'StyleClass':
				return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(_p144._0);
			case 'Nearby':
				return A2(
					_mdgriffith$stylish_elephants$Internal_Model$Nearby,
					_p144._0,
					A2(_mdgriffith$stylish_elephants$Internal_Model$map, fn, _p144._1));
			case 'Attr':
				return _mdgriffith$stylish_elephants$Internal_Model$Attr(
					A2(_elm_lang$html$Html_Attributes$map, fn, _p144._0));
			case 'TextShadow':
				return _mdgriffith$stylish_elephants$Internal_Model$TextShadow(_p144._0);
			case 'BoxShadow':
				return _mdgriffith$stylish_elephants$Internal_Model$BoxShadow(_p144._0);
			default:
				return _mdgriffith$stylish_elephants$Internal_Model$Filter(_p144._0);
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$removeNever = function (style) {
	return A2(_mdgriffith$stylish_elephants$Internal_Model$mapAttrFromStyle, _elm_lang$core$Basics$never, style);
};
var _mdgriffith$stylish_elephants$Internal_Model$unwrapDecorations = function (attrs) {
	var addShadow = function (styles) {
		var _p145 = styles.shadows;
		if (_p145.ctor === 'Nothing') {
			return styles.styles;
		} else {
			return {
				ctor: '::',
				_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Shadows, _p145._0._0, _p145._0._1),
				_1: styles.styles
			};
		}
	};
	var joinShadows = F2(
		function (x, styles) {
			var _p146 = x;
			if (_p146.ctor === 'Shadows') {
				var _p149 = _p146._1;
				var _p148 = _p146._0;
				var _p147 = styles.shadows;
				if (_p147.ctor === 'Nothing') {
					return _elm_lang$core$Native_Utils.update(
						styles,
						{
							shadows: _elm_lang$core$Maybe$Just(
								{ctor: '_Tuple2', _0: _p148, _1: _p149})
						});
				} else {
					return _elm_lang$core$Native_Utils.update(
						styles,
						{
							shadows: _elm_lang$core$Maybe$Just(
								{
									ctor: '_Tuple2',
									_0: A2(_elm_lang$core$Basics_ops['++'], _p147._0._0, _p148),
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										_p147._0._1,
										A2(_elm_lang$core$Basics_ops['++'], ', ', _p149))
								})
						});
				}
			} else {
				return _elm_lang$core$Native_Utils.update(
					styles,
					{
						styles: {ctor: '::', _0: x, _1: styles.styles}
					});
			}
		});
	return addShadow(
		A3(
			_elm_lang$core$List$foldr,
			joinShadows,
			{
				shadows: _elm_lang$core$Maybe$Nothing,
				styles: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$List$filterMap,
				function (_p150) {
					return _mdgriffith$stylish_elephants$Internal_Model$onlyStyles(
						_mdgriffith$stylish_elephants$Internal_Model$removeNever(_p150));
				},
				attrs)));
};
var _mdgriffith$stylish_elephants$Internal_Model$Button = {ctor: 'Button'};
var _mdgriffith$stylish_elephants$Internal_Model$LiveAssertive = {ctor: 'LiveAssertive'};
var _mdgriffith$stylish_elephants$Internal_Model$LivePolite = {ctor: 'LivePolite'};
var _mdgriffith$stylish_elephants$Internal_Model$Label = function (a) {
	return {ctor: 'Label', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Heading = function (a) {
	return {ctor: 'Heading', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Complementary = {ctor: 'Complementary'};
var _mdgriffith$stylish_elephants$Internal_Model$ContentInfo = {ctor: 'ContentInfo'};
var _mdgriffith$stylish_elephants$Internal_Model$Navigation = {ctor: 'Navigation'};
var _mdgriffith$stylish_elephants$Internal_Model$Main = {ctor: 'Main'};
var _mdgriffith$stylish_elephants$Internal_Model$DropShadow = function (a) {
	return {ctor: 'DropShadow', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Sepia = function (a) {
	return {ctor: 'Sepia', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Saturate = function (a) {
	return {ctor: 'Saturate', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$OpacityFilter = function (a) {
	return {ctor: 'OpacityFilter', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Invert = function (a) {
	return {ctor: 'Invert', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$HueRotate = function (a) {
	return {ctor: 'HueRotate', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Grayscale = function (a) {
	return {ctor: 'Grayscale', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Contrast = function (a) {
	return {ctor: 'Contrast', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Brightness = function (a) {
	return {ctor: 'Brightness', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Blur = function (a) {
	return {ctor: 'Blur', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$FilterUrl = function (a) {
	return {ctor: 'FilterUrl', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Max = F2(
	function (a, b) {
		return {ctor: 'Max', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Min = F2(
	function (a, b) {
		return {ctor: 'Min', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$Fill = function (a) {
	return {ctor: 'Fill', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Content = {ctor: 'Content'};
var _mdgriffith$stylish_elephants$Internal_Model$Px = function (a) {
	return {ctor: 'Px', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$AllAxis = {ctor: 'AllAxis'};
var _mdgriffith$stylish_elephants$Internal_Model$YAxis = {ctor: 'YAxis'};
var _mdgriffith$stylish_elephants$Internal_Model$XAxis = {ctor: 'XAxis'};
var _mdgriffith$stylish_elephants$Internal_Model$Behind = {ctor: 'Behind'};
var _mdgriffith$stylish_elephants$Internal_Model$InFront = {ctor: 'InFront'};
var _mdgriffith$stylish_elephants$Internal_Model$OnLeft = {ctor: 'OnLeft'};
var _mdgriffith$stylish_elephants$Internal_Model$OnRight = {ctor: 'OnRight'};
var _mdgriffith$stylish_elephants$Internal_Model$Below = {ctor: 'Below'};
var _mdgriffith$stylish_elephants$Internal_Model$Above = {ctor: 'Above'};
var _mdgriffith$stylish_elephants$Internal_Model$Embedded = F2(
	function (a, b) {
		return {ctor: 'Embedded', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Internal_Model$NodeName = function (a) {
	return {ctor: 'NodeName', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$addNodeName = F2(
	function (newNode, old) {
		var _p151 = old;
		switch (_p151.ctor) {
			case 'Generic':
				return _mdgriffith$stylish_elephants$Internal_Model$NodeName(newNode);
			case 'NodeName':
				return A2(_mdgriffith$stylish_elephants$Internal_Model$Embedded, _p151._0, newNode);
			default:
				return A2(_mdgriffith$stylish_elephants$Internal_Model$Embedded, _p151._0, _p151._1);
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$gatherAttributes = F2(
	function (attr, gathered) {
		var styleName = function (name) {
			return A2(_elm_lang$core$Basics_ops['++'], '.', name);
		};
		var formatStyleClass = function (style) {
			var _p152 = style;
			switch (_p152.ctor) {
				case 'Transform':
					return _mdgriffith$stylish_elephants$Internal_Model$Transform(_p152._0);
				case 'Shadows':
					return A2(_mdgriffith$stylish_elephants$Internal_Model$Shadows, _p152._0, _p152._1);
				case 'PseudoSelector':
					return A2(
						_mdgriffith$stylish_elephants$Internal_Model$PseudoSelector,
						_p152._0,
						A2(_elm_lang$core$List$map, formatStyleClass, _p152._1));
				case 'Style':
					return A2(
						_mdgriffith$stylish_elephants$Internal_Model$Style,
						styleName(_p152._0),
						_p152._1);
				case 'Single':
					return A3(
						_mdgriffith$stylish_elephants$Internal_Model$Single,
						styleName(_p152._0),
						_p152._1,
						_p152._2);
				case 'Colored':
					return A3(
						_mdgriffith$stylish_elephants$Internal_Model$Colored,
						styleName(_p152._0),
						_p152._1,
						_p152._2);
				case 'SpacingStyle':
					return A2(_mdgriffith$stylish_elephants$Internal_Model$SpacingStyle, _p152._0, _p152._1);
				case 'PaddingStyle':
					return A4(_mdgriffith$stylish_elephants$Internal_Model$PaddingStyle, _p152._0, _p152._1, _p152._2, _p152._3);
				case 'GridTemplateStyle':
					return _mdgriffith$stylish_elephants$Internal_Model$GridTemplateStyle(_p152._0);
				case 'GridPosition':
					return _mdgriffith$stylish_elephants$Internal_Model$GridPosition(_p152._0);
				case 'FontFamily':
					return A2(_mdgriffith$stylish_elephants$Internal_Model$FontFamily, _p152._0, _p152._1);
				case 'FontSize':
					return _mdgriffith$stylish_elephants$Internal_Model$FontSize(_p152._0);
				default:
					return A2(_mdgriffith$stylish_elephants$Internal_Model$Transparency, _p152._0, _p152._1);
			}
		};
		var className = function (name) {
			return A2(
				_elm_lang$virtual_dom$VirtualDom$property,
				'className',
				_elm_lang$core$Json_Encode$string(name));
		};
		var _p153 = attr;
		switch (_p153.ctor) {
			case 'NoAttribute':
				return gathered;
			case 'Class':
				var _p154 = _p153._0;
				return A2(_elm_lang$core$Set$member, _p154, gathered.has) ? gathered : _elm_lang$core$Native_Utils.update(
					gathered,
					{
						attributes: {
							ctor: '::',
							_0: className(_p153._1),
							_1: gathered.attributes
						},
						has: A2(_elm_lang$core$Set$insert, _p154, gathered.has)
					});
			case 'Attr':
				return _elm_lang$core$Native_Utils.update(
					gathered,
					{
						attributes: {ctor: '::', _0: _p153._0, _1: gathered.attributes}
					});
			case 'StyleClass':
				var _p160 = _p153._0;
				var addNormalStyle = F2(
					function (styleProp, gatheredProps) {
						var key = _mdgriffith$stylish_elephants$Internal_Model$styleKey(styleProp);
						return A2(_elm_lang$core$Set$member, key, gatheredProps.has) ? gatheredProps : _elm_lang$core$Native_Utils.update(
							gatheredProps,
							{
								attributes: function () {
									var _p155 = styleProp;
									if (_p155.ctor === 'PseudoSelector') {
										return {
											ctor: '::',
											_0: A2(
												_elm_lang$virtual_dom$VirtualDom$property,
												'className',
												_elm_lang$core$Json_Encode$string('transition')),
											_1: {
												ctor: '::',
												_0: className(
													_mdgriffith$stylish_elephants$Internal_Model$getStyleName(styleProp)),
												_1: gatheredProps.attributes
											}
										};
									} else {
										return {
											ctor: '::',
											_0: className(
												_mdgriffith$stylish_elephants$Internal_Model$getStyleName(styleProp)),
											_1: gatheredProps.attributes
										};
									}
								}(),
								styles: {
									ctor: '::',
									_0: formatStyleClass(styleProp),
									_1: gatheredProps.styles
								},
								has: A2(_elm_lang$core$Set$insert, key, gatheredProps.has)
							});
					});
				var _p156 = _p160;
				switch (_p156.ctor) {
					case 'Transform':
						return A3(_mdgriffith$stylish_elephants$Internal_Model$stackOn, _elm_lang$core$Maybe$Nothing, _p156._0, gathered);
					case 'PseudoSelector':
						var _p159 = _p156._0;
						var forTransforms = function (attr) {
							var _p157 = attr;
							if (_p157.ctor === 'Transform') {
								return _elm_lang$core$Maybe$Just(_p157._0);
							} else {
								return _elm_lang$core$Maybe$Nothing;
							}
						};
						var _p158 = A2(
							_elm_lang$core$List$partition,
							function (x) {
								return !_elm_lang$core$Native_Utils.eq(
									forTransforms(x),
									_elm_lang$core$Maybe$Nothing);
							},
							_p156._1);
						var transformationProps = _p158._0;
						var otherProps = _p158._1;
						var withTransforms = A3(
							_elm_lang$core$List$foldr,
							_mdgriffith$stylish_elephants$Internal_Model$stackOn(
								_elm_lang$core$Maybe$Just(_p159)),
							gathered,
							A2(_elm_lang$core$List$filterMap, forTransforms, transformationProps));
						return A2(
							addNormalStyle,
							A2(_mdgriffith$stylish_elephants$Internal_Model$PseudoSelector, _p159, otherProps),
							withTransforms);
					default:
						return A2(addNormalStyle, _p160, gathered);
				}
			case 'Width':
				var _p168 = _p153._0;
				if (_elm_lang$core$Native_Utils.eq(gathered.width, _elm_lang$core$Maybe$Nothing)) {
					var widthHelper = F2(
						function (w, gath) {
							widthHelper:
							while (true) {
								var _p161 = w;
								switch (_p161.ctor) {
									case 'Px':
										var _p162 = _p161._0;
										return _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(
														A2(
															_elm_lang$core$Basics_ops['++'],
															'width-exact width-px-',
															_elm_lang$core$Basics$toString(_p162))),
													_1: gath.attributes
												},
												styles: {
													ctor: '::',
													_0: A3(
														_mdgriffith$stylish_elephants$Internal_Model$Single,
														styleName(
															A2(
																_elm_lang$core$Basics_ops['++'],
																'width-px-',
																_elm_lang$core$Basics$toString(_p162))),
														'width',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString(_p162),
															'px')),
													_1: gath.styles
												}
											});
									case 'Content':
										return _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(
														function (_) {
															return _.widthContent;
														}(_mdgriffith$stylish_elephants$Internal_Style$classes)),
													_1: gath.attributes
												}
											});
									case 'Fill':
										var _p163 = _p161._0;
										return _elm_lang$core$Native_Utils.eq(_p163, 1) ? _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(
														function (_) {
															return _.widthFill;
														}(_mdgriffith$stylish_elephants$Internal_Style$classes)),
													_1: gath.attributes
												}
											}) : _elm_lang$core$Native_Utils.update(
											gath,
											{
												width: _elm_lang$core$Maybe$Just(_p168),
												attributes: {
													ctor: '::',
													_0: className(
														A2(
															_elm_lang$core$Basics_ops['++'],
															'width-fill-portion width-fill-',
															_elm_lang$core$Basics$toString(_p163))),
													_1: gath.attributes
												},
												styles: {
													ctor: '::',
													_0: A3(
														_mdgriffith$stylish_elephants$Internal_Model$Single,
														A2(
															_elm_lang$core$Basics_ops['++'],
															'.se.row > ',
															styleName(
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	'width-fill-',
																	_elm_lang$core$Basics$toString(_p163)))),
														'flex-grow',
														_elm_lang$core$Basics$toString(_p163 * 100000)),
													_1: gath.styles
												}
											});
									case 'Min':
										var _p165 = _p161._0;
										var _p164 = {
											ctor: '_Tuple2',
											_0: A2(
												_elm_lang$core$Basics_ops['++'],
												'min-width-',
												_mdgriffith$stylish_elephants$Internal_Model$intToString(_p165)),
											_1: A3(
												_mdgriffith$stylish_elephants$Internal_Model$Single,
												A2(
													_elm_lang$core$Basics_ops['++'],
													'.min-width-',
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p165)),
												'min-width',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p165),
													'px'))
										};
										var cls = _p164._0;
										var style = _p164._1;
										var newGathered = _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(cls),
													_1: gath.attributes
												},
												styles: {ctor: '::', _0: style, _1: gath.styles}
											});
										var _v92 = _p161._1,
											_v93 = newGathered;
										w = _v92;
										gath = _v93;
										continue widthHelper;
									default:
										var _p167 = _p161._0;
										var _p166 = {
											ctor: '_Tuple2',
											_0: A2(
												_elm_lang$core$Basics_ops['++'],
												'max-width-',
												_mdgriffith$stylish_elephants$Internal_Model$intToString(_p167)),
											_1: A3(
												_mdgriffith$stylish_elephants$Internal_Model$Single,
												A2(
													_elm_lang$core$Basics_ops['++'],
													'.max-width-',
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p167)),
												'max-width',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p167),
													'px'))
										};
										var cls = _p166._0;
										var style = _p166._1;
										var newGathered = _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(cls),
													_1: gath.attributes
												},
												styles: {ctor: '::', _0: style, _1: gath.styles}
											});
										var _v94 = _p161._1,
											_v95 = newGathered;
										w = _v94;
										gath = _v95;
										continue widthHelper;
								}
							}
						});
					return A2(
						widthHelper,
						_p168,
						_elm_lang$core$Native_Utils.update(
							gathered,
							{
								width: _elm_lang$core$Maybe$Just(_p168)
							}));
				} else {
					return gathered;
				}
			case 'Height':
				var _p176 = _p153._0;
				if (_elm_lang$core$Native_Utils.eq(gathered.height, _elm_lang$core$Maybe$Nothing)) {
					var heightHelper = F2(
						function (h, gath) {
							heightHelper:
							while (true) {
								var _p169 = h;
								switch (_p169.ctor) {
									case 'Px':
										var _p170 = _p169._0;
										return _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(
														A2(
															_elm_lang$core$Basics_ops['++'],
															'height-px-',
															_elm_lang$core$Basics$toString(_p170))),
													_1: gath.attributes
												},
												styles: {
													ctor: '::',
													_0: A3(
														_mdgriffith$stylish_elephants$Internal_Model$Single,
														styleName(
															A2(
																_elm_lang$core$Basics_ops['++'],
																'height-px-',
																_elm_lang$core$Basics$toString(_p170))),
														'height',
														A2(
															_elm_lang$core$Basics_ops['++'],
															_elm_lang$core$Basics$toString(_p170),
															'px')),
													_1: gath.styles
												}
											});
									case 'Content':
										return _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(
														function (_) {
															return _.heightContent;
														}(_mdgriffith$stylish_elephants$Internal_Style$classes)),
													_1: gath.attributes
												}
											});
									case 'Fill':
										var _p171 = _p169._0;
										return _elm_lang$core$Native_Utils.eq(_p171, 1) ? _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(
														function (_) {
															return _.heightFill;
														}(_mdgriffith$stylish_elephants$Internal_Style$classes)),
													_1: gath.attributes
												}
											}) : _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(
														A2(
															_elm_lang$core$Basics_ops['++'],
															'height-fill-portion height-fill-',
															_elm_lang$core$Basics$toString(_p171))),
													_1: gath.attributes
												},
												styles: {
													ctor: '::',
													_0: A3(
														_mdgriffith$stylish_elephants$Internal_Model$Single,
														A2(
															_elm_lang$core$Basics_ops['++'],
															'.se.column > ',
															styleName(
																A2(
																	_elm_lang$core$Basics_ops['++'],
																	'height-fill-',
																	_elm_lang$core$Basics$toString(_p171)))),
														'flex-grow',
														_elm_lang$core$Basics$toString(_p171 * 100000)),
													_1: gath.styles
												}
											});
									case 'Min':
										var _p173 = _p169._0;
										var _p172 = {
											ctor: '_Tuple2',
											_0: A2(
												_elm_lang$core$Basics_ops['++'],
												'min-height-',
												_mdgriffith$stylish_elephants$Internal_Model$intToString(_p173)),
											_1: A3(
												_mdgriffith$stylish_elephants$Internal_Model$Single,
												A2(
													_elm_lang$core$Basics_ops['++'],
													'.min-height-',
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p173)),
												'min-height',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p173),
													'px'))
										};
										var cls = _p172._0;
										var style = _p172._1;
										var newGathered = _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(cls),
													_1: gath.attributes
												},
												styles: {ctor: '::', _0: style, _1: gath.styles}
											});
										var _v97 = _p169._1,
											_v98 = newGathered;
										h = _v97;
										gath = _v98;
										continue heightHelper;
									default:
										var _p175 = _p169._0;
										var _p174 = {
											ctor: '_Tuple2',
											_0: A2(
												_elm_lang$core$Basics_ops['++'],
												'max-height-',
												_mdgriffith$stylish_elephants$Internal_Model$intToString(_p175)),
											_1: A3(
												_mdgriffith$stylish_elephants$Internal_Model$Single,
												A2(
													_elm_lang$core$Basics_ops['++'],
													'.max-height-',
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p175)),
												'max-height',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_mdgriffith$stylish_elephants$Internal_Model$intToString(_p175),
													'px'))
										};
										var cls = _p174._0;
										var style = _p174._1;
										var newGathered = _elm_lang$core$Native_Utils.update(
											gath,
											{
												attributes: {
													ctor: '::',
													_0: className(cls),
													_1: gath.attributes
												},
												styles: {ctor: '::', _0: style, _1: gath.styles}
											});
										var _v99 = _p169._1,
											_v100 = newGathered;
										h = _v99;
										gath = _v100;
										continue heightHelper;
								}
							}
						});
					return A2(
						heightHelper,
						_p176,
						_elm_lang$core$Native_Utils.update(
							gathered,
							{
								height: _elm_lang$core$Maybe$Just(_p176)
							}));
				} else {
					return gathered;
				}
			case 'Describe':
				var _p177 = _p153._0;
				switch (_p177.ctor) {
					case 'Main':
						return _elm_lang$core$Native_Utils.update(
							gathered,
							{
								node: A2(_mdgriffith$stylish_elephants$Internal_Model$addNodeName, 'main', gathered.node)
							});
					case 'Navigation':
						return _elm_lang$core$Native_Utils.update(
							gathered,
							{
								node: A2(_mdgriffith$stylish_elephants$Internal_Model$addNodeName, 'nav', gathered.node)
							});
					case 'ContentInfo':
						return _elm_lang$core$Native_Utils.update(
							gathered,
							{
								node: A2(_mdgriffith$stylish_elephants$Internal_Model$addNodeName, 'footer', gathered.node)
							});
					case 'Complementary':
						return _elm_lang$core$Native_Utils.update(
							gathered,
							{
								node: A2(_mdgriffith$stylish_elephants$Internal_Model$addNodeName, 'aside', gathered.node)
							});
					case 'Heading':
						var _p178 = _p177._0;
						return (_elm_lang$core$Native_Utils.cmp(_p178, 1) < 1) ? _elm_lang$core$Native_Utils.update(
							gathered,
							{
								node: A2(_mdgriffith$stylish_elephants$Internal_Model$addNodeName, 'h1', gathered.node)
							}) : ((_elm_lang$core$Native_Utils.cmp(_p178, 7) < 0) ? _elm_lang$core$Native_Utils.update(
							gathered,
							{
								node: A2(
									_mdgriffith$stylish_elephants$Internal_Model$addNodeName,
									A2(
										_elm_lang$core$Basics_ops['++'],
										'h',
										_elm_lang$core$Basics$toString(_p178)),
									gathered.node)
							}) : _elm_lang$core$Native_Utils.update(
							gathered,
							{
								node: A2(_mdgriffith$stylish_elephants$Internal_Model$addNodeName, 'h6', gathered.node)
							}));
					case 'Button':
						return _elm_lang$core$Native_Utils.update(
							gathered,
							{
								attributes: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'role', 'button'),
									_1: gathered.attributes
								}
							});
					case 'Label':
						return _elm_lang$core$Native_Utils.update(
							gathered,
							{
								attributes: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'aria-label', _p177._0),
									_1: gathered.attributes
								}
							});
					case 'LivePolite':
						return _elm_lang$core$Native_Utils.update(
							gathered,
							{
								attributes: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'aria-live', 'polite'),
									_1: gathered.attributes
								}
							});
					default:
						return _elm_lang$core$Native_Utils.update(
							gathered,
							{
								attributes: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'aria-live', 'assertive'),
									_1: gathered.attributes
								}
							});
				}
			case 'Nearby':
				var _p183 = _p153._0;
				var _p182 = _p153._1;
				var styles = function () {
					var _p179 = _p182;
					switch (_p179.ctor) {
						case 'Empty':
							return _elm_lang$core$Maybe$Nothing;
						case 'Text':
							return _elm_lang$core$Maybe$Nothing;
						case 'Unstyled':
							return _elm_lang$core$Maybe$Nothing;
						default:
							return _elm_lang$core$Maybe$Just(
								A2(_elm_lang$core$Basics_ops['++'], gathered.styles, _p179._0.styles));
					}
				}();
				return _elm_lang$core$Native_Utils.update(
					gathered,
					{
						styles: function () {
							var _p180 = styles;
							if (_p180.ctor === 'Nothing') {
								return gathered.styles;
							} else {
								return _p180._0;
							}
						}(),
						nearbys: function () {
							var _p181 = gathered.nearbys;
							if (_p181.ctor === 'Nothing') {
								return _elm_lang$core$Maybe$Just(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: _p183, _1: _p182},
										_1: {ctor: '[]'}
									});
							} else {
								return _elm_lang$core$Maybe$Just(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: _p183, _1: _p182},
										_1: _p181._0
									});
							}
						}()
					});
			case 'AlignX':
				var _p185 = _p153._0;
				var _p184 = gathered.alignment;
				if (_p184.ctor === 'Unaligned') {
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							attributes: {
								ctor: '::',
								_0: className(
									_mdgriffith$stylish_elephants$Internal_Model$alignXName(_p185)),
								_1: gathered.attributes
							},
							alignment: A2(
								_mdgriffith$stylish_elephants$Internal_Model$Aligned,
								_elm_lang$core$Maybe$Just(_p185),
								_elm_lang$core$Maybe$Nothing)
						});
				} else {
					if (_p184._0.ctor === 'Just') {
						return gathered;
					} else {
						return _elm_lang$core$Native_Utils.update(
							gathered,
							{
								attributes: {
									ctor: '::',
									_0: className(
										_mdgriffith$stylish_elephants$Internal_Model$alignXName(_p185)),
									_1: gathered.attributes
								},
								alignment: A2(
									_mdgriffith$stylish_elephants$Internal_Model$Aligned,
									_elm_lang$core$Maybe$Just(_p185),
									_p184._1)
							});
					}
				}
			case 'AlignY':
				var _p187 = _p153._0;
				var _p186 = gathered.alignment;
				if (_p186.ctor === 'Unaligned') {
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							attributes: {
								ctor: '::',
								_0: className(
									_mdgriffith$stylish_elephants$Internal_Model$alignYName(_p187)),
								_1: gathered.attributes
							},
							alignment: A2(
								_mdgriffith$stylish_elephants$Internal_Model$Aligned,
								_elm_lang$core$Maybe$Nothing,
								_elm_lang$core$Maybe$Just(_p187))
						});
				} else {
					if (_p186._1.ctor === 'Just') {
						return gathered;
					} else {
						return _elm_lang$core$Native_Utils.update(
							gathered,
							{
								attributes: {
									ctor: '::',
									_0: className(
										_mdgriffith$stylish_elephants$Internal_Model$alignYName(_p187)),
									_1: gathered.attributes
								},
								alignment: A2(
									_mdgriffith$stylish_elephants$Internal_Model$Aligned,
									_p186._0,
									_elm_lang$core$Maybe$Just(_p187))
							});
					}
				}
			case 'Filter':
				var _p189 = _p153._0;
				var _p188 = gathered.filters;
				if (_p188.ctor === 'Nothing') {
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							filters: _elm_lang$core$Maybe$Just(
								_mdgriffith$stylish_elephants$Internal_Model$filterName(_p189))
						});
				} else {
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							filters: _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Basics_ops['++'],
									_mdgriffith$stylish_elephants$Internal_Model$filterName(_p189),
									A2(_elm_lang$core$Basics_ops['++'], ' ', _p188._0)))
						});
				}
			case 'BoxShadow':
				var _p191 = _p153._0;
				var _p190 = gathered.boxShadows;
				if (_p190.ctor === 'Nothing') {
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							boxShadows: _elm_lang$core$Maybe$Just(
								_mdgriffith$stylish_elephants$Internal_Model$formatBoxShadow(_p191))
						});
				} else {
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							boxShadows: _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Basics_ops['++'],
									_mdgriffith$stylish_elephants$Internal_Model$formatBoxShadow(_p191),
									A2(_elm_lang$core$Basics_ops['++'], ', ', _p190._0)))
						});
				}
			default:
				var _p193 = _p153._0;
				var _p192 = gathered.textShadows;
				if (_p192.ctor === 'Nothing') {
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							textShadows: _elm_lang$core$Maybe$Just(
								_mdgriffith$stylish_elephants$Internal_Model$formatTextShadow(_p193))
						});
				} else {
					return _elm_lang$core$Native_Utils.update(
						gathered,
						{
							textShadows: _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Basics_ops['++'],
									_mdgriffith$stylish_elephants$Internal_Model$formatTextShadow(_p193),
									A2(_elm_lang$core$Basics_ops['++'], ', ', _p192._0)))
						});
				}
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$Generic = {ctor: 'Generic'};
var _mdgriffith$stylish_elephants$Internal_Model$initGathered = function (maybeNodeName) {
	return {
		attributes: {ctor: '[]'},
		styles: {ctor: '[]'},
		width: _elm_lang$core$Maybe$Nothing,
		height: _elm_lang$core$Maybe$Nothing,
		alignment: _mdgriffith$stylish_elephants$Internal_Model$Unaligned,
		node: function () {
			var _p194 = maybeNodeName;
			if (_p194.ctor === 'Nothing') {
				return _mdgriffith$stylish_elephants$Internal_Model$Generic;
			} else {
				return _mdgriffith$stylish_elephants$Internal_Model$NodeName(_p194._0);
			}
		}(),
		nearbys: _elm_lang$core$Maybe$Nothing,
		transform: _elm_lang$core$Maybe$Nothing,
		filters: _elm_lang$core$Maybe$Nothing,
		boxShadows: _elm_lang$core$Maybe$Nothing,
		textShadows: _elm_lang$core$Maybe$Nothing,
		has: _elm_lang$core$Set$empty
	};
};
var _mdgriffith$stylish_elephants$Internal_Model$OnlyDynamic = function (a) {
	return {ctor: 'OnlyDynamic', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$StaticRootAndDynamic = function (a) {
	return {ctor: 'StaticRootAndDynamic', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$NoStyleSheet = {ctor: 'NoStyleSheet'};
var _mdgriffith$stylish_elephants$Internal_Model$noStyleSheet = _mdgriffith$stylish_elephants$Internal_Model$NoStyleSheet;
var _mdgriffith$stylish_elephants$Internal_Model$Keyed = function (a) {
	return {ctor: 'Keyed', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$Unkeyed = function (a) {
	return {ctor: 'Unkeyed', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$asElement = F4(
	function (embedMode, children, context, rendered) {
		var gatherKeyed = F2(
			function (_p196, _p195) {
				var _p197 = _p196;
				var _p204 = _p197._0;
				var _p198 = _p195;
				var _p203 = _p198._0;
				var _p202 = _p198._1;
				var _p199 = _p197._1;
				switch (_p199.ctor) {
					case 'Unstyled':
						return {
							ctor: '_Tuple2',
							_0: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: _p204,
									_1: _p199._0(context)
								},
								_1: _p203
							},
							_1: _p202
						};
					case 'Styled':
						var _p200 = _p199._0;
						return {
							ctor: '_Tuple2',
							_0: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: _p204,
									_1: A2(_p200.html, _elm_lang$core$Maybe$Nothing, context)
								},
								_1: _p203
							},
							_1: A2(_elm_lang$core$Basics_ops['++'], _p200.styles, _p202)
						};
					case 'Text':
						var _p201 = _p199._0;
						return (_elm_lang$core$Native_Utils.eq(
							rendered.width,
							_elm_lang$core$Maybe$Just(_mdgriffith$stylish_elephants$Internal_Model$Content)) && (_elm_lang$core$Native_Utils.eq(
							rendered.height,
							_elm_lang$core$Maybe$Just(_mdgriffith$stylish_elephants$Internal_Model$Content)) && _elm_lang$core$Native_Utils.eq(context, _mdgriffith$stylish_elephants$Internal_Model$asEl))) ? {
							ctor: '_Tuple2',
							_0: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: _p204,
									_1: _elm_lang$html$Html$text(_p201)
								},
								_1: _p203
							},
							_1: _p202
						} : {
							ctor: '_Tuple2',
							_0: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: _p204,
									_1: _mdgriffith$stylish_elephants$Internal_Model$textElement(_p201)
								},
								_1: _p203
							},
							_1: _p202
						};
					default:
						return {ctor: '_Tuple2', _0: _p203, _1: _p202};
				}
			});
		var gather = F2(
			function (child, _p205) {
				var _p206 = _p205;
				var _p211 = _p206._0;
				var _p210 = _p206._1;
				var _p207 = child;
				switch (_p207.ctor) {
					case 'Unstyled':
						return {
							ctor: '_Tuple2',
							_0: {
								ctor: '::',
								_0: _p207._0(context),
								_1: _p211
							},
							_1: _p210
						};
					case 'Styled':
						var _p208 = _p207._0;
						return {
							ctor: '_Tuple2',
							_0: {
								ctor: '::',
								_0: A2(_p208.html, _elm_lang$core$Maybe$Nothing, context),
								_1: _p211
							},
							_1: A2(_elm_lang$core$Basics_ops['++'], _p208.styles, _p210)
						};
					case 'Text':
						var _p209 = _p207._0;
						return _elm_lang$core$Native_Utils.eq(context, _mdgriffith$stylish_elephants$Internal_Model$asEl) ? {
							ctor: '_Tuple2',
							_0: {
								ctor: '::',
								_0: _mdgriffith$stylish_elephants$Internal_Model$textElementFill(_p209),
								_1: _p211
							},
							_1: _p210
						} : {
							ctor: '_Tuple2',
							_0: {
								ctor: '::',
								_0: _mdgriffith$stylish_elephants$Internal_Model$textElement(_p209),
								_1: _p211
							},
							_1: _p210
						};
					default:
						return {ctor: '_Tuple2', _0: _p211, _1: _p210};
				}
			});
		var _p212 = function () {
			var _p213 = children;
			if (_p213.ctor === 'Keyed') {
				return A2(
					_elm_lang$core$Tuple$mapFirst,
					_mdgriffith$stylish_elephants$Internal_Model$Keyed,
					A3(
						_elm_lang$core$List$foldr,
						gatherKeyed,
						{
							ctor: '_Tuple2',
							_0: {ctor: '[]'},
							_1: rendered.styles
						},
						_p213._0));
			} else {
				return A2(
					_elm_lang$core$Tuple$mapFirst,
					_mdgriffith$stylish_elephants$Internal_Model$Unkeyed,
					A3(
						_elm_lang$core$List$foldr,
						gather,
						{
							ctor: '_Tuple2',
							_0: {ctor: '[]'},
							_1: rendered.styles
						},
						_p213._0));
			}
		}();
		var htmlChildren = _p212._0;
		var styleChildren = _p212._1;
		var _p214 = embedMode;
		switch (_p214.ctor) {
			case 'NoStyleSheet':
				var renderedChildren = function () {
					var _p215 = A2(_elm_lang$core$Maybe$map, _mdgriffith$stylish_elephants$Internal_Model$renderNearbyGroupAbsolute, rendered.nearbys);
					if (_p215.ctor === 'Nothing') {
						return htmlChildren;
					} else {
						var _p217 = _p215._0;
						var _p216 = htmlChildren;
						if (_p216.ctor === 'Keyed') {
							return _mdgriffith$stylish_elephants$Internal_Model$Keyed(
								A2(
									_elm_lang$core$Basics_ops['++'],
									_p216._0,
									A2(
										_elm_lang$core$List$map,
										function (x) {
											return {ctor: '_Tuple2', _0: 'nearby-elements-pls', _1: x};
										},
										_p217)));
						} else {
							return _mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
								A2(_elm_lang$core$Basics_ops['++'], _p216._0, _p217));
						}
					}
				}();
				var _p218 = styleChildren;
				if (_p218.ctor === '[]') {
					return _mdgriffith$stylish_elephants$Internal_Model$Unstyled(
						A3(_mdgriffith$stylish_elephants$Internal_Model$renderNode, rendered, renderedChildren, _elm_lang$core$Maybe$Nothing));
				} else {
					return _mdgriffith$stylish_elephants$Internal_Model$Styled(
						{
							styles: styleChildren,
							html: A2(_mdgriffith$stylish_elephants$Internal_Model$renderNode, rendered, renderedChildren)
						});
				}
			case 'StaticRootAndDynamic':
				var _p223 = _p214._0;
				var styles = _elm_lang$core$Tuple$second(
					A3(
						_elm_lang$core$List$foldr,
						_mdgriffith$stylish_elephants$Internal_Model$reduceStyles,
						{
							ctor: '_Tuple2',
							_0: _elm_lang$core$Set$empty,
							_1: {
								ctor: '::',
								_0: _mdgriffith$stylish_elephants$Internal_Model$renderFocusStyle(_p223.focus),
								_1: {ctor: '[]'}
							}
						},
						styleChildren));
				var renderedChildren = function () {
					var _p219 = A2(_elm_lang$core$Maybe$map, _mdgriffith$stylish_elephants$Internal_Model$renderNearbyGroupAbsolute, rendered.nearbys);
					if (_p219.ctor === 'Nothing') {
						var _p220 = htmlChildren;
						if (_p220.ctor === 'Keyed') {
							return _mdgriffith$stylish_elephants$Internal_Model$Keyed(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'static-stylesheet', _1: _mdgriffith$stylish_elephants$Internal_Style$rulesElement},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'dynamic-stylesheet',
											_1: A2(_mdgriffith$stylish_elephants$Internal_Model$toStyleSheet, _p223, styles)
										},
										_1: _p220._0
									}
								});
						} else {
							return _mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
								{
									ctor: '::',
									_0: _mdgriffith$stylish_elephants$Internal_Style$rulesElement,
									_1: {
										ctor: '::',
										_0: A2(_mdgriffith$stylish_elephants$Internal_Model$toStyleSheet, _p223, styles),
										_1: _p220._0
									}
								});
						}
					} else {
						var _p222 = _p219._0;
						var _p221 = htmlChildren;
						if (_p221.ctor === 'Keyed') {
							return _mdgriffith$stylish_elephants$Internal_Model$Keyed(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'static-stylesheet', _1: _mdgriffith$stylish_elephants$Internal_Style$rulesElement},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'dynamic-stylesheet',
											_1: A2(_mdgriffith$stylish_elephants$Internal_Model$toStyleSheet, _p223, styles)
										},
										_1: A2(
											_elm_lang$core$Basics_ops['++'],
											_p221._0,
											A2(
												_elm_lang$core$List$map,
												function (x) {
													return {ctor: '_Tuple2', _0: 'nearby-elements-pls', _1: x};
												},
												_p222))
									}
								});
						} else {
							return _mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
								{
									ctor: '::',
									_0: _mdgriffith$stylish_elephants$Internal_Style$rulesElement,
									_1: {
										ctor: '::',
										_0: A2(_mdgriffith$stylish_elephants$Internal_Model$toStyleSheet, _p223, styles),
										_1: A2(_elm_lang$core$Basics_ops['++'], _p221._0, _p222)
									}
								});
						}
					}
				}();
				return _mdgriffith$stylish_elephants$Internal_Model$Unstyled(
					A3(_mdgriffith$stylish_elephants$Internal_Model$renderNode, rendered, renderedChildren, _elm_lang$core$Maybe$Nothing));
			default:
				var _p228 = _p214._0;
				var styles = _elm_lang$core$Tuple$second(
					A3(
						_elm_lang$core$List$foldr,
						_mdgriffith$stylish_elephants$Internal_Model$reduceStyles,
						{
							ctor: '_Tuple2',
							_0: _elm_lang$core$Set$empty,
							_1: {
								ctor: '::',
								_0: _mdgriffith$stylish_elephants$Internal_Model$renderFocusStyle(_p228.focus),
								_1: {ctor: '[]'}
							}
						},
						styleChildren));
				var renderedChildren = function () {
					var _p224 = A2(_elm_lang$core$Maybe$map, _mdgriffith$stylish_elephants$Internal_Model$renderNearbyGroupAbsolute, rendered.nearbys);
					if (_p224.ctor === 'Nothing') {
						var _p225 = htmlChildren;
						if (_p225.ctor === 'Keyed') {
							return _mdgriffith$stylish_elephants$Internal_Model$Keyed(
								{
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'dynamic-stylesheet',
										_1: A2(_mdgriffith$stylish_elephants$Internal_Model$toStyleSheet, _p228, styles)
									},
									_1: _p225._0
								});
						} else {
							return _mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
								{
									ctor: '::',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Model$toStyleSheet, _p228, styles),
									_1: _p225._0
								});
						}
					} else {
						var _p227 = _p224._0;
						var _p226 = htmlChildren;
						if (_p226.ctor === 'Keyed') {
							return _mdgriffith$stylish_elephants$Internal_Model$Keyed(
								{
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'dynamic-stylesheet',
										_1: A2(_mdgriffith$stylish_elephants$Internal_Model$toStyleSheet, _p228, styles)
									},
									_1: A2(
										_elm_lang$core$Basics_ops['++'],
										_p226._0,
										A2(
											_elm_lang$core$List$map,
											function (x) {
												return {ctor: '_Tuple2', _0: 'nearby-elements-pls', _1: x};
											},
											_p227))
								});
						} else {
							return _mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
								{
									ctor: '::',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Model$toStyleSheet, _p228, styles),
									_1: A2(_elm_lang$core$Basics_ops['++'], _p226._0, _p227)
								});
						}
					}
				}();
				return _mdgriffith$stylish_elephants$Internal_Model$Unstyled(
					A3(_mdgriffith$stylish_elephants$Internal_Model$renderNode, rendered, renderedChildren, _elm_lang$core$Maybe$Nothing));
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$element = F5(
	function (embedMode, context, node, attributes, children) {
		return A4(
			_mdgriffith$stylish_elephants$Internal_Model$asElement,
			embedMode,
			children,
			context,
			_mdgriffith$stylish_elephants$Internal_Model$finalize(
				A3(
					_elm_lang$core$List$foldr,
					_mdgriffith$stylish_elephants$Internal_Model$gatherAttributes,
					_mdgriffith$stylish_elephants$Internal_Model$initGathered(node),
					{
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Internal_Model$contextClasses(context),
						_1: attributes
					})));
	});
var _mdgriffith$stylish_elephants$Internal_Model$WithVirtualCss = {ctor: 'WithVirtualCss'};
var _mdgriffith$stylish_elephants$Internal_Model$NoStaticStyleSheet = {ctor: 'NoStaticStyleSheet'};
var _mdgriffith$stylish_elephants$Internal_Model$Layout = {ctor: 'Layout'};
var _mdgriffith$stylish_elephants$Internal_Model$Viewport = {ctor: 'Viewport'};
var _mdgriffith$stylish_elephants$Internal_Model$ForceHover = {ctor: 'ForceHover'};
var _mdgriffith$stylish_elephants$Internal_Model$AllowHover = {ctor: 'AllowHover'};
var _mdgriffith$stylish_elephants$Internal_Model$embed = F2(
	function (fn, a) {
		var _p229 = fn(a);
		switch (_p229.ctor) {
			case 'Unstyled':
				return _p229._0;
			case 'Styled':
				var _p230 = _p229._0;
				return _p230.html(
					_elm_lang$core$Maybe$Just(
						A2(
							_mdgriffith$stylish_elephants$Internal_Model$toStyleSheetString,
							{
								hover: _mdgriffith$stylish_elephants$Internal_Model$AllowHover,
								focus: {borderColor: _elm_lang$core$Maybe$Nothing, shadow: _elm_lang$core$Maybe$Nothing, backgroundColor: _elm_lang$core$Maybe$Nothing},
								mode: _mdgriffith$stylish_elephants$Internal_Model$Layout
							},
							_p230.styles)));
			case 'Text':
				return _elm_lang$core$Basics$always(
					_elm_lang$html$Html$text(_p229._0));
			default:
				return _elm_lang$core$Basics$always(
					_elm_lang$html$Html$text(''));
		}
	});
var _mdgriffith$stylish_elephants$Internal_Model$optionsToRecord = function (options) {
	var finalize = function (record) {
		return {
			hover: function () {
				var _p231 = record.hover;
				if (_p231.ctor === 'Nothing') {
					return _mdgriffith$stylish_elephants$Internal_Model$AllowHover;
				} else {
					return _p231._0;
				}
			}(),
			focus: function () {
				var _p232 = record.focus;
				if (_p232.ctor === 'Nothing') {
					return _mdgriffith$stylish_elephants$Internal_Model$focusDefaultStyle;
				} else {
					return _p232._0;
				}
			}(),
			mode: function () {
				var _p233 = record.mode;
				if (_p233.ctor === 'Nothing') {
					return _mdgriffith$stylish_elephants$Internal_Model$Layout;
				} else {
					return _p233._0;
				}
			}()
		};
	};
	var combine = F2(
		function (opt, record) {
			var _p234 = opt;
			switch (_p234.ctor) {
				case 'HoverOption':
					var _p235 = record.hover;
					if (_p235.ctor === 'Nothing') {
						return _elm_lang$core$Native_Utils.update(
							record,
							{
								hover: _elm_lang$core$Maybe$Just(_p234._0)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var _p236 = record.focus;
					if (_p236.ctor === 'Nothing') {
						return _elm_lang$core$Native_Utils.update(
							record,
							{
								focus: _elm_lang$core$Maybe$Just(_p234._0)
							});
					} else {
						return record;
					}
				default:
					var _p237 = record.mode;
					if (_p237.ctor === 'Nothing') {
						return _elm_lang$core$Native_Utils.update(
							record,
							{
								mode: _elm_lang$core$Maybe$Just(_p234._0)
							});
					} else {
						return record;
					}
			}
		});
	return finalize(
		A3(
			_elm_lang$core$List$foldr,
			combine,
			{hover: _elm_lang$core$Maybe$Nothing, focus: _elm_lang$core$Maybe$Nothing, mode: _elm_lang$core$Maybe$Nothing},
			options));
};
var _mdgriffith$stylish_elephants$Internal_Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = _mdgriffith$stylish_elephants$Internal_Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _p238 = options.mode;
			if (_p238.ctor === 'NoStaticStyleSheet') {
				return _mdgriffith$stylish_elephants$Internal_Model$OnlyDynamic(options);
			} else {
				return _mdgriffith$stylish_elephants$Internal_Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			_mdgriffith$stylish_elephants$Internal_Model$toHtml,
			options,
			A5(
				_mdgriffith$stylish_elephants$Internal_Model$element,
				embedStyle,
				_mdgriffith$stylish_elephants$Internal_Model$asEl,
				_elm_lang$core$Maybe$Nothing,
				attributes,
				_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
					{
						ctor: '::',
						_0: child,
						_1: {ctor: '[]'}
					})));
	});
var _mdgriffith$stylish_elephants$Internal_Model$NoHover = {ctor: 'NoHover'};
var _mdgriffith$stylish_elephants$Internal_Model$RenderModeOption = function (a) {
	return {ctor: 'RenderModeOption', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$FocusStyleOption = function (a) {
	return {ctor: 'FocusStyleOption', _0: a};
};
var _mdgriffith$stylish_elephants$Internal_Model$HoverOption = function (a) {
	return {ctor: 'HoverOption', _0: a};
};

var _mdgriffith$stylish_elephants$Element$focused = function (decs) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A2(
			_mdgriffith$stylish_elephants$Internal_Model$PseudoSelector,
			_mdgriffith$stylish_elephants$Internal_Model$Focus,
			A2(
				_elm_lang$core$List$map,
				_mdgriffith$stylish_elephants$Internal_Model$tag('focus'),
				_mdgriffith$stylish_elephants$Internal_Model$unwrapDecorations(decs))));
};
var _mdgriffith$stylish_elephants$Element$mouseDown = function (decs) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A2(
			_mdgriffith$stylish_elephants$Internal_Model$PseudoSelector,
			_mdgriffith$stylish_elephants$Internal_Model$Active,
			A2(
				_elm_lang$core$List$map,
				_mdgriffith$stylish_elephants$Internal_Model$tag('active'),
				_mdgriffith$stylish_elephants$Internal_Model$unwrapDecorations(decs))));
};
var _mdgriffith$stylish_elephants$Element$mouseOver = function (decs) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A2(
			_mdgriffith$stylish_elephants$Internal_Model$PseudoSelector,
			_mdgriffith$stylish_elephants$Internal_Model$Hover,
			A2(
				_elm_lang$core$List$map,
				_mdgriffith$stylish_elephants$Internal_Model$tag('hover'),
				_mdgriffith$stylish_elephants$Internal_Model$unwrapDecorations(decs))));
};
var _mdgriffith$stylish_elephants$Element$modular = F3(
	function (normal, ratio, scale) {
		return _elm_lang$core$Native_Utils.eq(scale, 0) ? normal : ((_elm_lang$core$Native_Utils.cmp(scale, 0) < 0) ? (normal * Math.pow(
			ratio,
			_elm_lang$core$Basics$toFloat(scale))) : (normal * Math.pow(
			ratio,
			_elm_lang$core$Basics$toFloat(scale) - 1)));
	});
var _mdgriffith$stylish_elephants$Element$classifyDevice = function (_p0) {
	var _p1 = _p0;
	var _p2 = _p1.width;
	return {
		phone: _elm_lang$core$Native_Utils.cmp(_p2, 600) < 1,
		tablet: (_elm_lang$core$Native_Utils.cmp(_p2, 600) > 0) && (_elm_lang$core$Native_Utils.cmp(_p2, 1200) < 1),
		desktop: (_elm_lang$core$Native_Utils.cmp(_p2, 1200) > 0) && (_elm_lang$core$Native_Utils.cmp(_p2, 1800) < 1),
		bigDesktop: _elm_lang$core$Native_Utils.cmp(_p2, 1800) > 0,
		portrait: _elm_lang$core$Native_Utils.cmp(_p2, _p1.height) < 0
	};
};
var _mdgriffith$stylish_elephants$Element$pointer = A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'cursor', _mdgriffith$stylish_elephants$Internal_Style$classes.cursorPointer);
var _mdgriffith$stylish_elephants$Element$clipX = A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'overflow', _mdgriffith$stylish_elephants$Internal_Style$classes.clipX);
var _mdgriffith$stylish_elephants$Element$clipY = A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'overflow', _mdgriffith$stylish_elephants$Internal_Style$classes.clipY);
var _mdgriffith$stylish_elephants$Element$clip = A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'overflow', _mdgriffith$stylish_elephants$Internal_Style$classes.clip);
var _mdgriffith$stylish_elephants$Element$scrollbarX = A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'overflow', _mdgriffith$stylish_elephants$Internal_Style$classes.scrollbarsX);
var _mdgriffith$stylish_elephants$Element$scrollbarY = A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'overflow', _mdgriffith$stylish_elephants$Internal_Style$classes.scrollbarsY);
var _mdgriffith$stylish_elephants$Element$scrollbars = A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'overflow', _mdgriffith$stylish_elephants$Internal_Style$classes.scrollbars);
var _mdgriffith$stylish_elephants$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			_elm_lang$core$Basics$min,
			1.0,
			A2(_elm_lang$core$Basics$max, 0.0, o)));
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A2(
			_mdgriffith$stylish_elephants$Internal_Model$Transparency,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'transparency-',
				_mdgriffith$stylish_elephants$Internal_Model$floatClass(transparency)),
			transparency));
};
var _mdgriffith$stylish_elephants$Element$transparent = function (on) {
	return on ? _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A2(_mdgriffith$stylish_elephants$Internal_Model$Transparency, 'transparent', 1.0)) : _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A2(_mdgriffith$stylish_elephants$Internal_Model$Transparency, 'visible', 0.0));
};
var _mdgriffith$stylish_elephants$Element$spacingXY = F2(
	function (x, y) {
		return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
			A2(_mdgriffith$stylish_elephants$Internal_Model$SpacingStyle, x, y));
	});
var _mdgriffith$stylish_elephants$Element$spacing = function (x) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A2(_mdgriffith$stylish_elephants$Internal_Model$SpacingStyle, x, x));
};
var _mdgriffith$stylish_elephants$Element$spaceEvenly = A2(
	_mdgriffith$stylish_elephants$Internal_Model$Class,
	'x-align',
	function (_) {
		return _.spaceEvenly;
	}(_mdgriffith$stylish_elephants$Internal_Style$classes));
var _mdgriffith$stylish_elephants$Element$alignRight = _mdgriffith$stylish_elephants$Internal_Model$AlignX(_mdgriffith$stylish_elephants$Internal_Model$Right);
var _mdgriffith$stylish_elephants$Element$alignLeft = _mdgriffith$stylish_elephants$Internal_Model$AlignX(_mdgriffith$stylish_elephants$Internal_Model$Left);
var _mdgriffith$stylish_elephants$Element$alignBottom = _mdgriffith$stylish_elephants$Internal_Model$AlignY(_mdgriffith$stylish_elephants$Internal_Model$Bottom);
var _mdgriffith$stylish_elephants$Element$alignTop = _mdgriffith$stylish_elephants$Internal_Model$AlignY(_mdgriffith$stylish_elephants$Internal_Model$Top);
var _mdgriffith$stylish_elephants$Element$centerY = _mdgriffith$stylish_elephants$Internal_Model$AlignY(_mdgriffith$stylish_elephants$Internal_Model$CenterY);
var _mdgriffith$stylish_elephants$Element$centerX = _mdgriffith$stylish_elephants$Internal_Model$AlignX(_mdgriffith$stylish_elephants$Internal_Model$CenterX);
var _mdgriffith$stylish_elephants$Element$paddingEach = function (_p3) {
	var _p4 = _p3;
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A4(_mdgriffith$stylish_elephants$Internal_Model$PaddingStyle, _p4.top, _p4.right, _p4.bottom, _p4.left));
};
var _mdgriffith$stylish_elephants$Element$paddingXY = F2(
	function (x, y) {
		return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
			A4(_mdgriffith$stylish_elephants$Internal_Model$PaddingStyle, y, x, y, x));
	});
var _mdgriffith$stylish_elephants$Element$padding = function (x) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A4(_mdgriffith$stylish_elephants$Internal_Model$PaddingStyle, x, x, x, x));
};
var _mdgriffith$stylish_elephants$Element$moveLeft = function (x) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		_mdgriffith$stylish_elephants$Internal_Model$Transform(
			A3(
				_mdgriffith$stylish_elephants$Internal_Model$Move,
				_elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$negate(x)),
				_elm_lang$core$Maybe$Nothing,
				_elm_lang$core$Maybe$Nothing)));
};
var _mdgriffith$stylish_elephants$Element$moveRight = function (x) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		_mdgriffith$stylish_elephants$Internal_Model$Transform(
			A3(
				_mdgriffith$stylish_elephants$Internal_Model$Move,
				_elm_lang$core$Maybe$Just(x),
				_elm_lang$core$Maybe$Nothing,
				_elm_lang$core$Maybe$Nothing)));
};
var _mdgriffith$stylish_elephants$Element$moveDown = function (y) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		_mdgriffith$stylish_elephants$Internal_Model$Transform(
			A3(
				_mdgriffith$stylish_elephants$Internal_Model$Move,
				_elm_lang$core$Maybe$Nothing,
				_elm_lang$core$Maybe$Just(y),
				_elm_lang$core$Maybe$Nothing)));
};
var _mdgriffith$stylish_elephants$Element$moveUp = function (y) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		_mdgriffith$stylish_elephants$Internal_Model$Transform(
			A3(
				_mdgriffith$stylish_elephants$Internal_Model$Move,
				_elm_lang$core$Maybe$Nothing,
				_elm_lang$core$Maybe$Just(
					_elm_lang$core$Basics$negate(y)),
				_elm_lang$core$Maybe$Nothing)));
};
var _mdgriffith$stylish_elephants$Element$rotate = function (angle) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		_mdgriffith$stylish_elephants$Internal_Model$Transform(
			A4(_mdgriffith$stylish_elephants$Internal_Model$Rotate, 0, 0, 1, angle)));
};
var _mdgriffith$stylish_elephants$Element$scale = function (n) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		_mdgriffith$stylish_elephants$Internal_Model$Transform(
			A3(_mdgriffith$stylish_elephants$Internal_Model$Scale, n, n, 1)));
};
var _mdgriffith$stylish_elephants$Element$height = _mdgriffith$stylish_elephants$Internal_Model$Height;
var _mdgriffith$stylish_elephants$Element$width = _mdgriffith$stylish_elephants$Internal_Model$Width;
var _mdgriffith$stylish_elephants$Element$behind = function (element) {
	return A2(_mdgriffith$stylish_elephants$Internal_Model$Nearby, _mdgriffith$stylish_elephants$Internal_Model$Behind, element);
};
var _mdgriffith$stylish_elephants$Element$inFront = function (element) {
	return A2(_mdgriffith$stylish_elephants$Internal_Model$Nearby, _mdgriffith$stylish_elephants$Internal_Model$InFront, element);
};
var _mdgriffith$stylish_elephants$Element$onLeft = function (element) {
	return A2(_mdgriffith$stylish_elephants$Internal_Model$Nearby, _mdgriffith$stylish_elephants$Internal_Model$OnLeft, element);
};
var _mdgriffith$stylish_elephants$Element$onRight = function (element) {
	return A2(_mdgriffith$stylish_elephants$Internal_Model$Nearby, _mdgriffith$stylish_elephants$Internal_Model$OnRight, element);
};
var _mdgriffith$stylish_elephants$Element$above = function (element) {
	return A2(_mdgriffith$stylish_elephants$Internal_Model$Nearby, _mdgriffith$stylish_elephants$Internal_Model$Above, element);
};
var _mdgriffith$stylish_elephants$Element$below = function (element) {
	return A2(_mdgriffith$stylish_elephants$Internal_Model$Nearby, _mdgriffith$stylish_elephants$Internal_Model$Below, element);
};
var _mdgriffith$stylish_elephants$Element$decorativeImage = F2(
	function (attrs, _p5) {
		var _p6 = _p5;
		var imageAttributes = A2(
			_elm_lang$core$List$filter,
			function (a) {
				var _p7 = a;
				switch (_p7.ctor) {
					case 'Width':
						return true;
					case 'Height':
						return true;
					default:
						return false;
				}
			},
			attrs);
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asEl,
			_elm_lang$core$Maybe$Nothing,
			{ctor: '::', _0: _mdgriffith$stylish_elephants$Element$clip, _1: attrs},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
				{
					ctor: '::',
					_0: A5(
						_mdgriffith$stylish_elephants$Internal_Model$element,
						_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
						_mdgriffith$stylish_elephants$Internal_Model$asEl,
						_elm_lang$core$Maybe$Just('img'),
						A2(
							_elm_lang$core$Basics_ops['++'],
							imageAttributes,
							{
								ctor: '::',
								_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
									_elm_lang$html$Html_Attributes$src(_p6.src)),
								_1: {
									ctor: '::',
									_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
										_elm_lang$html$Html_Attributes$alt('')),
									_1: {ctor: '[]'}
								}
							}),
						_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
							{ctor: '[]'})),
					_1: {ctor: '[]'}
				}));
	});
var _mdgriffith$stylish_elephants$Element$image = F2(
	function (attrs, _p8) {
		var _p9 = _p8;
		var imageAttributes = A2(
			_elm_lang$core$List$filter,
			function (a) {
				var _p10 = a;
				switch (_p10.ctor) {
					case 'Width':
						return true;
					case 'Height':
						return true;
					default:
						return false;
				}
			},
			attrs);
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asEl,
			_elm_lang$core$Maybe$Nothing,
			{ctor: '::', _0: _mdgriffith$stylish_elephants$Element$clip, _1: attrs},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
				{
					ctor: '::',
					_0: A5(
						_mdgriffith$stylish_elephants$Internal_Model$element,
						_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
						_mdgriffith$stylish_elephants$Internal_Model$asEl,
						_elm_lang$core$Maybe$Just('img'),
						A2(
							_elm_lang$core$Basics_ops['++'],
							imageAttributes,
							{
								ctor: '::',
								_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
									_elm_lang$html$Html_Attributes$src(_p9.src)),
								_1: {
									ctor: '::',
									_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
										_elm_lang$html$Html_Attributes$alt(_p9.description)),
									_1: {ctor: '[]'}
								}
							}),
						_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
							{ctor: '[]'})),
					_1: {ctor: '[]'}
				}));
	});
var _mdgriffith$stylish_elephants$Element$text = function (content) {
	return _mdgriffith$stylish_elephants$Internal_Model$Text(content);
};
var _mdgriffith$stylish_elephants$Element$none = _mdgriffith$stylish_elephants$Internal_Model$Empty;
var _mdgriffith$stylish_elephants$Element$forceHover = _mdgriffith$stylish_elephants$Internal_Model$HoverOption(_mdgriffith$stylish_elephants$Internal_Model$ForceHover);
var _mdgriffith$stylish_elephants$Element$noHover = _mdgriffith$stylish_elephants$Internal_Model$HoverOption(_mdgriffith$stylish_elephants$Internal_Model$NoHover);
var _mdgriffith$stylish_elephants$Element$focusStyle = _mdgriffith$stylish_elephants$Internal_Model$FocusStyleOption;
var _mdgriffith$stylish_elephants$Element$defaultFocus = _mdgriffith$stylish_elephants$Internal_Model$focusDefaultStyle;
var _mdgriffith$stylish_elephants$Element$noStaticStyleSheet = _mdgriffith$stylish_elephants$Internal_Model$RenderModeOption(_mdgriffith$stylish_elephants$Internal_Model$NoStaticStyleSheet);
var _mdgriffith$stylish_elephants$Element$layoutWith = F3(
	function (_p11, attrs, child) {
		var _p12 = _p11;
		return A3(
			_mdgriffith$stylish_elephants$Internal_Model$renderRoot,
			_p12.options,
			{
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Internal_Model$htmlClass('style-elements se el'),
				_1: {
					ctor: '::',
					_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'x-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterX),
					_1: {
						ctor: '::',
						_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'y-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterY),
						_1: A2(_elm_lang$core$Basics_ops['++'], _mdgriffith$stylish_elephants$Internal_Model$rootStyle, attrs)
					}
				}
			},
			child);
	});
var _mdgriffith$stylish_elephants$Element$layout = _mdgriffith$stylish_elephants$Element$layoutWith(
	{
		options: {ctor: '[]'}
	});
var _mdgriffith$stylish_elephants$Element$fillPortion = _mdgriffith$stylish_elephants$Internal_Model$Fill;
var _mdgriffith$stylish_elephants$Element$maximum = F2(
	function (i, l) {
		return A2(_mdgriffith$stylish_elephants$Internal_Model$Max, i, l);
	});
var _mdgriffith$stylish_elephants$Element$minimum = F2(
	function (i, l) {
		return A2(_mdgriffith$stylish_elephants$Internal_Model$Min, i, l);
	});
var _mdgriffith$stylish_elephants$Element$fill = _mdgriffith$stylish_elephants$Internal_Model$Fill(1);
var _mdgriffith$stylish_elephants$Element$column = F2(
	function (attrs, children) {
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asColumn,
			_elm_lang$core$Maybe$Nothing,
			{
				ctor: '::',
				_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'y-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentTop),
				_1: {
					ctor: '::',
					_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'x-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentLeft),
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Element$height(_mdgriffith$stylish_elephants$Element$fill),
						_1: {
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$fill),
							_1: attrs
						}
					}
				}
			},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(children));
	});
var _mdgriffith$stylish_elephants$Element$paragraph = F2(
	function (attrs, children) {
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asParagraph,
			_elm_lang$core$Maybe$Just('p'),
			{
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Element$width(
					A2(
						_mdgriffith$stylish_elephants$Element$maximum,
						750,
						A2(_mdgriffith$stylish_elephants$Element$minimum, 500, _mdgriffith$stylish_elephants$Element$fill))),
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Element$spacing(5),
					_1: attrs
				}
			},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(children));
	});
var _mdgriffith$stylish_elephants$Element$textColumn = F2(
	function (attrs, children) {
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asTextColumn,
			_elm_lang$core$Maybe$Nothing,
			{
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Element$width(
					A2(
						_mdgriffith$stylish_elephants$Element$maximum,
						750,
						A2(_mdgriffith$stylish_elephants$Element$minimum, 500, _mdgriffith$stylish_elephants$Element$fill))),
				_1: attrs
			},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(children));
	});
var _mdgriffith$stylish_elephants$Element$shrink = _mdgriffith$stylish_elephants$Internal_Model$Content;
var _mdgriffith$stylish_elephants$Element$el = F2(
	function (attrs, child) {
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asEl,
			_elm_lang$core$Maybe$Nothing,
			{
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$shrink),
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Element$height(_mdgriffith$stylish_elephants$Element$shrink),
					_1: attrs
				}
			},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
				{
					ctor: '::',
					_0: child,
					_1: {ctor: '[]'}
				}));
	});
var _mdgriffith$stylish_elephants$Element$row = F2(
	function (attrs, children) {
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asRow,
			_elm_lang$core$Maybe$Nothing,
			{
				ctor: '::',
				_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'x-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentLeft),
				_1: {
					ctor: '::',
					_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'y-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterY),
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$fill),
						_1: {
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$height(_mdgriffith$stylish_elephants$Element$shrink),
							_1: attrs
						}
					}
				}
			},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(children));
	});
var _mdgriffith$stylish_elephants$Element$link = F2(
	function (attrs, _p13) {
		var _p14 = _p13;
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asEl,
			_elm_lang$core$Maybe$Just('a'),
			{
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
					_elm_lang$html$Html_Attributes$href(_p14.url)),
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$rel('noopener noreferrer')),
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$shrink),
						_1: {
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$height(_mdgriffith$stylish_elephants$Element$shrink),
							_1: {
								ctor: '::',
								_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'x-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterX),
								_1: {
									ctor: '::',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'y-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterY),
									_1: attrs
								}
							}
						}
					}
				}
			},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
				{
					ctor: '::',
					_0: _p14.label,
					_1: {ctor: '[]'}
				}));
	});
var _mdgriffith$stylish_elephants$Element$newTabLink = F2(
	function (attrs, _p15) {
		var _p16 = _p15;
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asEl,
			_elm_lang$core$Maybe$Just('a'),
			{
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
					_elm_lang$html$Html_Attributes$href(_p16.url)),
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$rel('noopener noreferrer')),
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
							_elm_lang$html$Html_Attributes$target('_blank')),
						_1: {
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$shrink),
							_1: {
								ctor: '::',
								_0: _mdgriffith$stylish_elephants$Element$height(_mdgriffith$stylish_elephants$Element$shrink),
								_1: {
									ctor: '::',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'x-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterX),
									_1: {
										ctor: '::',
										_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'y-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterY),
										_1: attrs
									}
								}
							}
						}
					}
				}
			},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
				{
					ctor: '::',
					_0: _p16.label,
					_1: {ctor: '[]'}
				}));
	});
var _mdgriffith$stylish_elephants$Element$download = F2(
	function (attrs, _p17) {
		var _p18 = _p17;
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asEl,
			_elm_lang$core$Maybe$Just('a'),
			{
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
					_elm_lang$html$Html_Attributes$href(_p18.url)),
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$download(true)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$shrink),
						_1: {
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$height(_mdgriffith$stylish_elephants$Element$shrink),
							_1: {
								ctor: '::',
								_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'x-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterX),
								_1: {
									ctor: '::',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'y-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterY),
									_1: attrs
								}
							}
						}
					}
				}
			},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
				{
					ctor: '::',
					_0: _p18.label,
					_1: {ctor: '[]'}
				}));
	});
var _mdgriffith$stylish_elephants$Element$downloadAs = F2(
	function (attrs, _p19) {
		var _p20 = _p19;
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asEl,
			_elm_lang$core$Maybe$Just('a'),
			{
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
					_elm_lang$html$Html_Attributes$href(_p20.url)),
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Internal_Model$Attr(
						_elm_lang$html$Html_Attributes$downloadAs(_p20.filename)),
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$shrink),
						_1: {
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$height(_mdgriffith$stylish_elephants$Element$shrink),
							_1: {
								ctor: '::',
								_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'x-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterX),
								_1: {
									ctor: '::',
									_0: A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'y-content-align', _mdgriffith$stylish_elephants$Internal_Style$classes.contentCenterY),
									_1: attrs
								}
							}
						}
					}
				}
			},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
				{
					ctor: '::',
					_0: _p20.label,
					_1: {ctor: '[]'}
				}));
	});
var _mdgriffith$stylish_elephants$Element$px = _mdgriffith$stylish_elephants$Internal_Model$Px;
var _mdgriffith$stylish_elephants$Element$tableHelper = F2(
	function (attrs, config) {
		var onGrid = F3(
			function (row, column, el) {
				return A5(
					_mdgriffith$stylish_elephants$Internal_Model$element,
					_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
					_mdgriffith$stylish_elephants$Internal_Model$asEl,
					_elm_lang$core$Maybe$Nothing,
					{
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
							_mdgriffith$stylish_elephants$Internal_Model$GridPosition(
								{row: row, col: column, width: 1, height: 1})),
						_1: {ctor: '[]'}
					},
					_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
						{
							ctor: '::',
							_0: el,
							_1: {ctor: '[]'}
						}));
			});
		var columnHeader = function (col) {
			var _p21 = col;
			if (_p21.ctor === 'InternalIndexedColumn') {
				return _p21._0.header;
			} else {
				return _p21._0.header;
			}
		};
		var maybeHeaders = function (headers) {
			return A2(
				_elm_lang$core$List$all,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(_mdgriffith$stylish_elephants$Internal_Model$Empty),
				headers) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (col, header) {
							return A3(onGrid, 1, col + 1, header);
						}),
					headers));
		}(
			A2(_elm_lang$core$List$map, columnHeader, config.columns));
		var add = F3(
			function (cell, columnConfig, cursor) {
				var _p22 = columnConfig;
				if (_p22.ctor === 'InternalIndexedColumn') {
					return _elm_lang$core$Native_Utils.update(
						cursor,
						{
							elements: {
								ctor: '::',
								_0: A3(
									onGrid,
									cursor.row,
									cursor.column,
									A2(
										_p22._0.view,
										_elm_lang$core$Native_Utils.eq(maybeHeaders, _elm_lang$core$Maybe$Nothing) ? (cursor.row - 1) : (cursor.row - 2),
										cell)),
								_1: cursor.elements
							},
							column: cursor.column + 1
						});
				} else {
					return _elm_lang$core$Native_Utils.update(
						cursor,
						{
							elements: {
								ctor: '::',
								_0: A3(
									onGrid,
									cursor.row,
									cursor.column,
									_p22._0.view(cell)),
								_1: cursor.elements
							},
							column: cursor.column + 1
						});
				}
			});
		var build = F3(
			function (columns, rowData, cursor) {
				var newCursor = A3(
					_elm_lang$core$List$foldl,
					add(rowData),
					cursor,
					columns);
				return _elm_lang$core$Native_Utils.update(
					newCursor,
					{row: cursor.row + 1, column: 1});
			});
		var children = A3(
			_elm_lang$core$List$foldl,
			build(config.columns),
			{
				elements: {ctor: '[]'},
				row: _elm_lang$core$Native_Utils.eq(maybeHeaders, _elm_lang$core$Maybe$Nothing) ? 1 : 2,
				column: 1
			},
			config.data);
		var _p23 = A2(
			_mdgriffith$stylish_elephants$Internal_Model$getSpacing,
			attrs,
			{ctor: '_Tuple2', _0: 0, _1: 0});
		var sX = _p23._0;
		var sY = _p23._1;
		var template = _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
			_mdgriffith$stylish_elephants$Internal_Model$GridTemplateStyle(
				{
					spacing: {
						ctor: '_Tuple2',
						_0: _mdgriffith$stylish_elephants$Element$px(sX),
						_1: _mdgriffith$stylish_elephants$Element$px(sY)
					},
					columns: A2(
						_elm_lang$core$List$repeat,
						_elm_lang$core$List$length(config.columns),
						_mdgriffith$stylish_elephants$Internal_Model$Fill(1)),
					rows: A2(
						_elm_lang$core$List$repeat,
						_elm_lang$core$List$length(config.data),
						_mdgriffith$stylish_elephants$Internal_Model$Content)
				}));
		return A5(
			_mdgriffith$stylish_elephants$Internal_Model$element,
			_mdgriffith$stylish_elephants$Internal_Model$noStyleSheet,
			_mdgriffith$stylish_elephants$Internal_Model$asGrid,
			_elm_lang$core$Maybe$Nothing,
			{
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$fill),
				_1: {ctor: '::', _0: template, _1: attrs}
			},
			_mdgriffith$stylish_elephants$Internal_Model$Unkeyed(
				function () {
					var _p24 = maybeHeaders;
					if (_p24.ctor === 'Nothing') {
						return children.elements;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], _p24._0, children.elements);
					}
				}()));
	});
var _mdgriffith$stylish_elephants$Element$mapAttribute = _mdgriffith$stylish_elephants$Internal_Model$mapAttr;
var _mdgriffith$stylish_elephants$Element$map = _mdgriffith$stylish_elephants$Internal_Model$map;
var _mdgriffith$stylish_elephants$Element$htmlAttribute = _mdgriffith$stylish_elephants$Internal_Model$Attr;
var _mdgriffith$stylish_elephants$Element$html = _mdgriffith$stylish_elephants$Internal_Model$unstyled;
var _mdgriffith$stylish_elephants$Element$FocusStyle = F3(
	function (a, b, c) {
		return {borderColor: a, backgroundColor: b, shadow: c};
	});
var _mdgriffith$stylish_elephants$Element$Table = F2(
	function (a, b) {
		return {data: a, columns: b};
	});
var _mdgriffith$stylish_elephants$Element$Column = F2(
	function (a, b) {
		return {header: a, view: b};
	});
var _mdgriffith$stylish_elephants$Element$IndexedTable = F2(
	function (a, b) {
		return {data: a, columns: b};
	});
var _mdgriffith$stylish_elephants$Element$IndexedColumn = F2(
	function (a, b) {
		return {header: a, view: b};
	});
var _mdgriffith$stylish_elephants$Element$InternalTable = F2(
	function (a, b) {
		return {data: a, columns: b};
	});
var _mdgriffith$stylish_elephants$Element$Link = F2(
	function (a, b) {
		return {url: a, label: b};
	});
var _mdgriffith$stylish_elephants$Element$Device = F5(
	function (a, b, c, d, e) {
		return {phone: a, tablet: b, desktop: c, bigDesktop: d, portrait: e};
	});
var _mdgriffith$stylish_elephants$Element$InternalColumn = function (a) {
	return {ctor: 'InternalColumn', _0: a};
};
var _mdgriffith$stylish_elephants$Element$table = F2(
	function (attrs, config) {
		return A2(
			_mdgriffith$stylish_elephants$Element$tableHelper,
			attrs,
			{
				data: config.data,
				columns: A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Element$InternalColumn, config.columns)
			});
	});
var _mdgriffith$stylish_elephants$Element$InternalIndexedColumn = function (a) {
	return {ctor: 'InternalIndexedColumn', _0: a};
};
var _mdgriffith$stylish_elephants$Element$indexedTable = F2(
	function (attrs, config) {
		return A2(
			_mdgriffith$stylish_elephants$Element$tableHelper,
			attrs,
			{
				data: config.data,
				columns: A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Element$InternalIndexedColumn, config.columns)
			});
	});

var _mdgriffith$stylish_elephants$Element_Background$gradient = F2(
	function (angle, colors) {
		return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
			A3(
				_mdgriffith$stylish_elephants$Internal_Model$Single,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'bg-gradient-',
					A2(
						_elm_lang$core$String$join,
						'-',
						{
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Internal_Model$floatClass(angle),
							_1: A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Internal_Model$formatColorClass, colors)
						})),
				'background',
				A2(
					_elm_lang$core$Basics_ops['++'],
					'linear-gradient(',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_elm_lang$core$String$join,
							', ',
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(angle),
									'rad'),
								_1: A2(_elm_lang$core$List$map, _mdgriffith$stylish_elephants$Internal_Model$formatColor, colors)
							}),
						')'))));
	});
var _mdgriffith$stylish_elephants$Element_Background$tiledY = function (src) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'bg-image-',
				_mdgriffith$stylish_elephants$Internal_Model$className(src)),
			'background',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'url(\"',
				A2(_elm_lang$core$Basics_ops['++'], src, '\") repeat-y'))));
};
var _mdgriffith$stylish_elephants$Element_Background$tiledX = function (src) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'bg-image-',
				_mdgriffith$stylish_elephants$Internal_Model$className(src)),
			'background',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'url(\"',
				A2(_elm_lang$core$Basics_ops['++'], src, '\") repeat-x'))));
};
var _mdgriffith$stylish_elephants$Element_Background$tiled = function (src) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'bg-image-',
				_mdgriffith$stylish_elephants$Internal_Model$className(src)),
			'background',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'url(\"',
				A2(_elm_lang$core$Basics_ops['++'], src, '\") repeat'))));
};
var _mdgriffith$stylish_elephants$Element_Background$uncropped = function (src) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'bg-fitted-image-',
				_mdgriffith$stylish_elephants$Internal_Model$className(src)),
			'background',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'url(\"',
				A2(_elm_lang$core$Basics_ops['++'], src, '\") center / contain no-repeat'))));
};
var _mdgriffith$stylish_elephants$Element_Background$image = function (src) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'bg-image-',
				_mdgriffith$stylish_elephants$Internal_Model$className(src)),
			'background',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'url(\"',
				A2(_elm_lang$core$Basics_ops['++'], src, '\") center / cover no-repeat'))));
};
var _mdgriffith$stylish_elephants$Element_Background$color = function (clr) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Colored,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'bg-',
				_mdgriffith$stylish_elephants$Internal_Model$formatColorClass(clr)),
			'background-color',
			clr));
};
var _mdgriffith$stylish_elephants$Element_Background$ToAngle = function (a) {
	return {ctor: 'ToAngle', _0: a};
};
var _mdgriffith$stylish_elephants$Element_Background$ToBottomLeft = {ctor: 'ToBottomLeft'};
var _mdgriffith$stylish_elephants$Element_Background$ToTopLeft = {ctor: 'ToTopLeft'};
var _mdgriffith$stylish_elephants$Element_Background$ToLeft = {ctor: 'ToLeft'};
var _mdgriffith$stylish_elephants$Element_Background$ToBottomRight = {ctor: 'ToBottomRight'};
var _mdgriffith$stylish_elephants$Element_Background$ToTopRight = {ctor: 'ToTopRight'};
var _mdgriffith$stylish_elephants$Element_Background$ToRight = {ctor: 'ToRight'};
var _mdgriffith$stylish_elephants$Element_Background$ToDown = {ctor: 'ToDown'};
var _mdgriffith$stylish_elephants$Element_Background$ToUp = {ctor: 'ToUp'};
var _mdgriffith$stylish_elephants$Element_Background$PxStep = F2(
	function (a, b) {
		return {ctor: 'PxStep', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Element_Background$px = _mdgriffith$stylish_elephants$Element_Background$PxStep;
var _mdgriffith$stylish_elephants$Element_Background$PercentStep = F2(
	function (a, b) {
		return {ctor: 'PercentStep', _0: a, _1: b};
	});
var _mdgriffith$stylish_elephants$Element_Background$ColorStep = function (a) {
	return {ctor: 'ColorStep', _0: a};
};
var _mdgriffith$stylish_elephants$Element_Background$step = _mdgriffith$stylish_elephants$Element_Background$ColorStep;

var _mdgriffith$stylish_elephants$Element_Border$shadow = function (_p0) {
	var _p1 = _p0;
	return _mdgriffith$stylish_elephants$Internal_Model$BoxShadow(
		{inset: false, offset: _p1.offset, size: _p1.size, blur: _p1.blur, color: _p1.color});
};
var _mdgriffith$stylish_elephants$Element_Border$innerShadow = function (_p2) {
	var _p3 = _p2;
	return _mdgriffith$stylish_elephants$Internal_Model$BoxShadow(
		{inset: true, offset: _p3.offset, size: _p3.size, blur: _p3.blur, color: _p3.color});
};
var _mdgriffith$stylish_elephants$Element_Border$box = function (_p4) {
	var _p5 = _p4;
	return _mdgriffith$stylish_elephants$Internal_Model$BoxShadow(
		{inset: false, offset: _p5.offset, size: _p5.size, blur: _p5.blur, color: _p5.color});
};
var _mdgriffith$stylish_elephants$Element_Border$innerGlow = F2(
	function (color, size) {
		return _mdgriffith$stylish_elephants$Element_Border$innerShadow(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 0},
				size: size,
				blur: size * 2,
				color: color
			});
	});
var _mdgriffith$stylish_elephants$Element_Border$glow = F2(
	function (color, size) {
		return _mdgriffith$stylish_elephants$Element_Border$box(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 0},
				size: size,
				blur: size * 2,
				color: color
			});
	});
var _mdgriffith$stylish_elephants$Element_Border$roundEach = function (_p6) {
	var _p7 = _p6;
	var _p11 = _p7.topRight;
	var _p10 = _p7.topLeft;
	var _p9 = _p7.bottomRight;
	var _p8 = _p7.bottomLeft;
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'border-radius-',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p10),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'-',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p11),
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p8),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'-',
									_elm_lang$core$Basics$toString(_p9))))))),
			'border-radius',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p10),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'px ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p11),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'px ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p9),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'px ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p8),
										'px')))))))));
};
var _mdgriffith$stylish_elephants$Element_Border$rounded = function (radius) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'border-radius-',
				_elm_lang$core$Basics$toString(radius)),
			'border-radius',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(radius),
				'px')));
};
var _mdgriffith$stylish_elephants$Element_Border$dotted = A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'border', _mdgriffith$stylish_elephants$Internal_Style$classes.borderDotted);
var _mdgriffith$stylish_elephants$Element_Border$dashed = A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'border', _mdgriffith$stylish_elephants$Internal_Style$classes.borderDashed);
var _mdgriffith$stylish_elephants$Element_Border$solid = A2(_mdgriffith$stylish_elephants$Internal_Model$Class, 'border', _mdgriffith$stylish_elephants$Internal_Style$classes.borderSolid);
var _mdgriffith$stylish_elephants$Element_Border$widthEach = function (_p12) {
	var _p13 = _p12;
	var _p17 = _p13.top;
	var _p16 = _p13.right;
	var _p15 = _p13.left;
	var _p14 = _p13.bottom;
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'border-',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(_p17),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'-',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(_p16),
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p14),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'-',
									_elm_lang$core$Basics$toString(_p15))))))),
			'border-width',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p17),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'px ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(_p16),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'px ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p14),
								A2(
									_elm_lang$core$Basics_ops['++'],
									'px ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(_p15),
										'px')))))))));
};
var _mdgriffith$stylish_elephants$Element_Border$widthXY = F2(
	function (x, y) {
		return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
			A3(
				_mdgriffith$stylish_elephants$Internal_Model$Single,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'border-',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(x),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'-',
							_elm_lang$core$Basics$toString(y)))),
				'border-width',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(y),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'px ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(x),
							'px')))));
	});
var _mdgriffith$stylish_elephants$Element_Border$width = function (v) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'border-',
				_elm_lang$core$Basics$toString(v)),
			'border-width',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(v),
				'px')));
};
var _mdgriffith$stylish_elephants$Element_Border$color = function (clr) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Colored,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'border-color-',
				_mdgriffith$stylish_elephants$Internal_Model$formatColorClass(clr)),
			'border-color',
			clr));
};

var _mdgriffith$stylish_elephants$Element_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _mdgriffith$stylish_elephants$Element_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _mdgriffith$stylish_elephants$Element_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _mdgriffith$stylish_elephants$Element_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _mdgriffith$stylish_elephants$Element_Events$onWithOptions = F3(
	function (event, options, decode) {
		return _mdgriffith$stylish_elephants$Internal_Model$Attr(
			A3(_elm_lang$html$Html_Events$onWithOptions, event, options, decode));
	});
var _mdgriffith$stylish_elephants$Element_Events$on = F2(
	function (event, decode) {
		return _mdgriffith$stylish_elephants$Internal_Model$Attr(
			A2(_elm_lang$html$Html_Events$on, event, decode));
	});
var _mdgriffith$stylish_elephants$Element_Events$onFocus = function (_p0) {
	return _mdgriffith$stylish_elephants$Internal_Model$Attr(
		_elm_lang$html$Html_Events$onFocus(_p0));
};
var _mdgriffith$stylish_elephants$Element_Events$onLoseFocus = function (_p1) {
	return _mdgriffith$stylish_elephants$Internal_Model$Attr(
		_elm_lang$html$Html_Events$onBlur(_p1));
};
var _mdgriffith$stylish_elephants$Element_Events$onMouseMove = function (msg) {
	return A2(
		_mdgriffith$stylish_elephants$Element_Events$on,
		'mousemove',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _mdgriffith$stylish_elephants$Element_Events$onMouseLeave = function (_p2) {
	return _mdgriffith$stylish_elephants$Internal_Model$Attr(
		_elm_lang$html$Html_Events$onMouseLeave(_p2));
};
var _mdgriffith$stylish_elephants$Element_Events$onMouseEnter = function (_p3) {
	return _mdgriffith$stylish_elephants$Internal_Model$Attr(
		_elm_lang$html$Html_Events$onMouseEnter(_p3));
};
var _mdgriffith$stylish_elephants$Element_Events$onDoubleClick = function (_p4) {
	return _mdgriffith$stylish_elephants$Internal_Model$Attr(
		_elm_lang$html$Html_Events$onDoubleClick(_p4));
};
var _mdgriffith$stylish_elephants$Element_Events$onClick = function (_p5) {
	return _mdgriffith$stylish_elephants$Internal_Model$Attr(
		_elm_lang$html$Html_Events$onClick(_p5));
};
var _mdgriffith$stylish_elephants$Element_Events$onMouseUp = function (_p6) {
	return _mdgriffith$stylish_elephants$Internal_Model$Attr(
		_elm_lang$html$Html_Events$onMouseUp(_p6));
};
var _mdgriffith$stylish_elephants$Element_Events$onMouseDown = function (_p7) {
	return _mdgriffith$stylish_elephants$Internal_Model$Attr(
		_elm_lang$html$Html_Events$onMouseDown(_p7));
};
var _mdgriffith$stylish_elephants$Element_Events$Coords = F2(
	function (a, b) {
		return {x: a, y: b};
	});
var _mdgriffith$stylish_elephants$Element_Events$screenCoords = A3(
	_elm_lang$core$Json_Decode$map2,
	_mdgriffith$stylish_elephants$Element_Events$Coords,
	A2(_elm_lang$core$Json_Decode$field, 'screenX', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'screenY', _elm_lang$core$Json_Decode$int));
var _mdgriffith$stylish_elephants$Element_Events$onClickScreenCoords = function (msg) {
	return A2(
		_mdgriffith$stylish_elephants$Element_Events$on,
		'click',
		A2(_elm_lang$core$Json_Decode$map, msg, _mdgriffith$stylish_elephants$Element_Events$screenCoords));
};
var _mdgriffith$stylish_elephants$Element_Events$onMouseScreenCoords = function (msg) {
	return A2(
		_mdgriffith$stylish_elephants$Element_Events$on,
		'mousemove',
		A2(_elm_lang$core$Json_Decode$map, msg, _mdgriffith$stylish_elephants$Element_Events$screenCoords));
};
var _mdgriffith$stylish_elephants$Element_Events$localCoords = A3(
	_elm_lang$core$Json_Decode$map2,
	_mdgriffith$stylish_elephants$Element_Events$Coords,
	A2(_elm_lang$core$Json_Decode$field, 'offsetX', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'offsetY', _elm_lang$core$Json_Decode$int));
var _mdgriffith$stylish_elephants$Element_Events$onClickCoords = function (msg) {
	return A2(
		_mdgriffith$stylish_elephants$Element_Events$on,
		'click',
		A2(_elm_lang$core$Json_Decode$map, msg, _mdgriffith$stylish_elephants$Element_Events$localCoords));
};
var _mdgriffith$stylish_elephants$Element_Events$onMouseCoords = function (msg) {
	return A2(
		_mdgriffith$stylish_elephants$Element_Events$on,
		'mousemove',
		A2(_elm_lang$core$Json_Decode$map, msg, _mdgriffith$stylish_elephants$Element_Events$localCoords));
};
var _mdgriffith$stylish_elephants$Element_Events$pageCoords = A3(
	_elm_lang$core$Json_Decode$map2,
	_mdgriffith$stylish_elephants$Element_Events$Coords,
	A2(_elm_lang$core$Json_Decode$field, 'pageX', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'pageY', _elm_lang$core$Json_Decode$int));
var _mdgriffith$stylish_elephants$Element_Events$onClickPageCoords = function (msg) {
	return A2(
		_mdgriffith$stylish_elephants$Element_Events$on,
		'click',
		A2(_elm_lang$core$Json_Decode$map, msg, _mdgriffith$stylish_elephants$Element_Events$pageCoords));
};
var _mdgriffith$stylish_elephants$Element_Events$onMousePageCoords = function (msg) {
	return A2(
		_mdgriffith$stylish_elephants$Element_Events$on,
		'mousemove',
		A2(_elm_lang$core$Json_Decode$map, msg, _mdgriffith$stylish_elephants$Element_Events$pageCoords));
};
var _mdgriffith$stylish_elephants$Element_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _mdgriffith$stylish_elephants$Element_Font$glow = F2(
	function (color, size) {
		return _mdgriffith$stylish_elephants$Internal_Model$TextShadow(
			{
				offset: {ctor: '_Tuple2', _0: 0, _1: 0},
				blur: size * 2,
				color: color
			});
	});
var _mdgriffith$stylish_elephants$Element_Font$shadow = function (_p0) {
	var _p1 = _p0;
	return _mdgriffith$stylish_elephants$Internal_Model$TextShadow(
		{offset: _p1.offset, blur: _p1.blur, color: _p1.color});
};
var _mdgriffith$stylish_elephants$Element_Font$unitalicized = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textUnitalicized);
var _mdgriffith$stylish_elephants$Element_Font$heavy = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textHeavy);
var _mdgriffith$stylish_elephants$Element_Font$extraBold = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textExtraBold);
var _mdgriffith$stylish_elephants$Element_Font$medium = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textMedium);
var _mdgriffith$stylish_elephants$Element_Font$semiBold = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textSemiBold);
var _mdgriffith$stylish_elephants$Element_Font$regular = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textNormalWeight);
var _mdgriffith$stylish_elephants$Element_Font$extraLight = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textExtraLight);
var _mdgriffith$stylish_elephants$Element_Font$hairline = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textThin);
var _mdgriffith$stylish_elephants$Element_Font$light = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textLight);
var _mdgriffith$stylish_elephants$Element_Font$bold = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.bold);
var _mdgriffith$stylish_elephants$Element_Font$italic = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.italic);
var _mdgriffith$stylish_elephants$Element_Font$strike = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.strike);
var _mdgriffith$stylish_elephants$Element_Font$underline = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.underline);
var _mdgriffith$stylish_elephants$Element_Font$justify = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textJustify);
var _mdgriffith$stylish_elephants$Element_Font$center = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textCenter);
var _mdgriffith$stylish_elephants$Element_Font$alignRight = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textRight);
var _mdgriffith$stylish_elephants$Element_Font$alignLeft = _mdgriffith$stylish_elephants$Internal_Model$class(_mdgriffith$stylish_elephants$Internal_Style$classes.textLeft);
var _mdgriffith$stylish_elephants$Element_Font$wordSpacing = function (offset) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'word-spacing-',
				_mdgriffith$stylish_elephants$Internal_Model$floatClass(offset)),
			'word-spacing',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(offset),
				'px')));
};
var _mdgriffith$stylish_elephants$Element_Font$letterSpacing = function (offset) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Single,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'letter-spacing-',
				_mdgriffith$stylish_elephants$Internal_Model$floatClass(offset)),
			'letter-spacing',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(offset),
				'px')));
};
var _mdgriffith$stylish_elephants$Element_Font$size = function (size) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		_mdgriffith$stylish_elephants$Internal_Model$FontSize(size));
};
var _mdgriffith$stylish_elephants$Element_Font$external = function (_p2) {
	var _p3 = _p2;
	return A2(_mdgriffith$stylish_elephants$Internal_Model$ImportFont, _p3.name, _p3.url);
};
var _mdgriffith$stylish_elephants$Element_Font$typeface = _mdgriffith$stylish_elephants$Internal_Model$Typeface;
var _mdgriffith$stylish_elephants$Element_Font$monospace = _mdgriffith$stylish_elephants$Internal_Model$Monospace;
var _mdgriffith$stylish_elephants$Element_Font$sansSerif = _mdgriffith$stylish_elephants$Internal_Model$SansSerif;
var _mdgriffith$stylish_elephants$Element_Font$serif = _mdgriffith$stylish_elephants$Internal_Model$Serif;
var _mdgriffith$stylish_elephants$Element_Font$family = function (families) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A2(
			_mdgriffith$stylish_elephants$Internal_Model$FontFamily,
			A3(_elm_lang$core$List$foldl, _mdgriffith$stylish_elephants$Internal_Model$renderFontClassName, 'font-', families),
			families));
};
var _mdgriffith$stylish_elephants$Element_Font$color = function (fontColor) {
	return _mdgriffith$stylish_elephants$Internal_Model$StyleClass(
		A3(
			_mdgriffith$stylish_elephants$Internal_Model$Colored,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'font-color-',
				_mdgriffith$stylish_elephants$Internal_Model$formatColorClass(fontColor)),
			'color',
			fontColor));
};

var _mdgriffith$stylish_elephants$Element_Region$description = function (_p0) {
	return _mdgriffith$stylish_elephants$Internal_Model$Describe(
		_mdgriffith$stylish_elephants$Internal_Model$Label(_p0));
};
var _mdgriffith$stylish_elephants$Element_Region$announce = _mdgriffith$stylish_elephants$Internal_Model$Describe(_mdgriffith$stylish_elephants$Internal_Model$LivePolite);
var _mdgriffith$stylish_elephants$Element_Region$announceUrgently = _mdgriffith$stylish_elephants$Internal_Model$Describe(_mdgriffith$stylish_elephants$Internal_Model$LiveAssertive);
var _mdgriffith$stylish_elephants$Element_Region$heading = function (_p1) {
	return _mdgriffith$stylish_elephants$Internal_Model$Describe(
		_mdgriffith$stylish_elephants$Internal_Model$Heading(_p1));
};
var _mdgriffith$stylish_elephants$Element_Region$footer = _mdgriffith$stylish_elephants$Internal_Model$Describe(_mdgriffith$stylish_elephants$Internal_Model$ContentInfo);
var _mdgriffith$stylish_elephants$Element_Region$navigation = _mdgriffith$stylish_elephants$Internal_Model$Describe(_mdgriffith$stylish_elephants$Internal_Model$Navigation);
var _mdgriffith$stylish_elephants$Element_Region$aside = _mdgriffith$stylish_elephants$Internal_Model$Describe(_mdgriffith$stylish_elephants$Internal_Model$Complementary);
var _mdgriffith$stylish_elephants$Element_Region$mainContent = _mdgriffith$stylish_elephants$Internal_Model$Describe(_mdgriffith$stylish_elephants$Internal_Model$Main);

var _rtfeldman$elm_css$Css_Structure_Output$noIndent = '';
var _rtfeldman$elm_css$Css_Structure_Output$spaceIndent = '    ';
var _rtfeldman$elm_css$Css_Structure_Output$indent = function (str) {
	return A2(_elm_lang$core$Basics_ops['++'], _rtfeldman$elm_css$Css_Structure_Output$spaceIndent, str);
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty = function (_p0) {
	var _p1 = _p0;
	var suffix = _p1.important ? ' !important;' : ';';
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_p1.key,
		A2(
			_elm_lang$core$Basics_ops['++'],
			': ',
			A2(_elm_lang$core$Basics_ops['++'], _p1.value, suffix)));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties = function (properties) {
	return A2(
		_elm_lang$core$String$join,
		'\n',
		A2(
			_elm_lang$core$List$map,
			function (_p2) {
				return _rtfeldman$elm_css$Css_Structure_Output$indent(
					_rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperty(_p2));
			},
			properties));
};
var _rtfeldman$elm_css$Css_Structure_Output$combinatorToString = function (combinator) {
	var _p3 = combinator;
	switch (_p3.ctor) {
		case 'AdjacentSibling':
			return '+';
		case 'GeneralSibling':
			return '~';
		case 'Child':
			return '>';
		default:
			return '';
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString = function (_p4) {
	var _p5 = _p4;
	return A2(_elm_lang$core$Basics_ops['++'], '::', _p5._0);
};
var _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString = function (repeatableSimpleSelector) {
	var _p6 = repeatableSimpleSelector;
	switch (_p6.ctor) {
		case 'ClassSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '.', _p6._0);
		case 'IdSelector':
			return A2(_elm_lang$core$Basics_ops['++'], '#', _p6._0);
		default:
			return A2(_elm_lang$core$Basics_ops['++'], ':', _p6._0);
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString = function (simpleSelectorSequence) {
	var _p7 = simpleSelectorSequence;
	switch (_p7.ctor) {
		case 'TypeSelectorSequence':
			return A2(
				_elm_lang$core$String$join,
				'',
				{
					ctor: '::',
					_0: _p7._0._0,
					_1: A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)
				});
		case 'UniversalSelectorSequence':
			var _p8 = _p7._0;
			return _elm_lang$core$List$isEmpty(_p8) ? '*' : A2(
				_elm_lang$core$String$join,
				'',
				A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p8));
		default:
			return A2(
				_elm_lang$core$String$join,
				'',
				{
					ctor: '::',
					_0: _p7._0,
					_1: A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$repeatableSimpleSelectorToString, _p7._1)
				});
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString = function (_p9) {
	var _p10 = _p9;
	return A2(
		_elm_lang$core$String$join,
		' ',
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure_Output$combinatorToString(_p10._0),
			_1: {
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p10._1),
				_1: {ctor: '[]'}
			}
		});
};
var _rtfeldman$elm_css$Css_Structure_Output$selectorToString = function (_p11) {
	var _p12 = _p11;
	var pseudoElementsString = A2(
		_elm_lang$core$String$join,
		'',
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(_elm_lang$core$Maybe$map, _rtfeldman$elm_css$Css_Structure_Output$pseudoElementToString, _p12._2)),
			_1: {ctor: '[]'}
		});
	var segments = A2(
		_elm_lang$core$Basics_ops['++'],
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure_Output$simpleSelectorSequenceToString(_p12._0),
			_1: {ctor: '[]'}
		},
		A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$selectorChainToString, _p12._1));
	return A3(
		_elm_lang$core$Basics$flip,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		pseudoElementsString,
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$filter,
				function (_p13) {
					return !_elm_lang$core$String$isEmpty(_p13);
				},
				segments)));
};
var _rtfeldman$elm_css$Css_Structure_Output$mediaExpressionToString = function (expression) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			expression.feature,
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					A2(
						_elm_lang$core$Maybe$map,
						F2(
							function (x, y) {
								return A2(_elm_lang$core$Basics_ops['++'], x, y);
							})(': '),
						expression.value)),
				')')));
};
var _rtfeldman$elm_css$Css_Structure_Output$mediaTypeToString = function (mediaType) {
	var _p14 = mediaType;
	switch (_p14.ctor) {
		case 'Print':
			return 'print';
		case 'Screen':
			return 'screen';
		default:
			return 'speech';
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$mediaQueryToString = function (mediaQuery) {
	var prefixWith = F3(
		function (str, mediaType, expressions) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				str,
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					A2(
						_elm_lang$core$String$join,
						' and ',
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Css_Structure_Output$mediaTypeToString(mediaType),
							_1: A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$mediaExpressionToString, expressions)
						})));
		});
	var _p15 = mediaQuery;
	switch (_p15.ctor) {
		case 'AllQuery':
			return A2(
				_elm_lang$core$String$join,
				' and ',
				A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$mediaExpressionToString, _p15._0));
		case 'OnlyQuery':
			return A3(prefixWith, 'only', _p15._0, _p15._1);
		case 'NotQuery':
			return A3(prefixWith, 'not', _p15._0, _p15._1);
		default:
			return _p15._0;
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock = F2(
	function (indentLevel, _p16) {
		var _p17 = _p16;
		var selectorStr = A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				_rtfeldman$elm_css$Css_Structure_Output$selectorToString,
				{ctor: '::', _0: _p17._0, _1: _p17._1}));
		return A2(
			_elm_lang$core$String$join,
			'',
			{
				ctor: '::',
				_0: selectorStr,
				_1: {
					ctor: '::',
					_0: ' {\n',
					_1: {
						ctor: '::',
						_0: indentLevel,
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Css_Structure_Output$prettyPrintProperties(_p17._2),
							_1: {
								ctor: '::',
								_0: '\n',
								_1: {
									ctor: '::',
									_0: indentLevel,
									_1: {
										ctor: '::',
										_0: '}',
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			});
	});
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration = function (declaration) {
	var _p18 = declaration;
	switch (_p18.ctor) {
		case 'StyleBlockDeclaration':
			return A2(_rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock, _rtfeldman$elm_css$Css_Structure_Output$noIndent, _p18._0);
		case 'MediaRule':
			var query = A2(
				_elm_lang$core$String$join,
				',\n',
				A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$mediaQueryToString, _p18._0));
			var blocks = A2(
				_elm_lang$core$String$join,
				'\n\n',
				A2(
					_elm_lang$core$List$map,
					function (_p19) {
						return _rtfeldman$elm_css$Css_Structure_Output$indent(
							A2(_rtfeldman$elm_css$Css_Structure_Output$prettyPrintStyleBlock, _rtfeldman$elm_css$Css_Structure_Output$spaceIndent, _p19));
					},
					_p18._1));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				'@media ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					query,
					A2(
						_elm_lang$core$Basics_ops['++'],
						' {\n',
						A2(_elm_lang$core$Basics_ops['++'], blocks, '\n}'))));
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'Css.Structure.Output',
				{
					start: {line: 61, column: 5},
					end: {line: 78, column: 49}
				},
				_p18)('not yet implemented :x');
	}
};
var _rtfeldman$elm_css$Css_Structure_Output$namespaceToString = function (_p21) {
	var _p22 = _p21;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@namespace ',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p22._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'\"',
				A2(_elm_lang$core$Basics_ops['++'], _p22._1, '\"'))));
};
var _rtfeldman$elm_css$Css_Structure_Output$importToString = function (_p23) {
	var _p24 = _p23;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'@import \"',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_p24._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p24._1),
				'\"')));
};
var _rtfeldman$elm_css$Css_Structure_Output$charsetToString = function (charset) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		'',
		A2(
			_elm_lang$core$Maybe$map,
			function (str) {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					'@charset \"',
					A2(_elm_lang$core$Basics_ops['++'], str, '\"'));
			},
			charset));
};
var _rtfeldman$elm_css$Css_Structure_Output$prettyPrint = function (_p25) {
	var _p26 = _p25;
	return A2(
		_elm_lang$core$String$join,
		'\n\n',
		A2(
			_elm_lang$core$List$filter,
			function (_p27) {
				return !_elm_lang$core$String$isEmpty(_p27);
			},
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Structure_Output$charsetToString(_p26.charset),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$String$join,
						'\n',
						A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$importToString, _p26.imports)),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$String$join,
							'\n',
							A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$namespaceToString, _p26.namespaces)),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$core$String$join,
								'\n\n',
								A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Structure_Output$prettyPrintDeclaration, _p26.declarations)),
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};

var _rtfeldman$elm_css$Css_Preprocess_Resolve$oneOf = function (maybes) {
	oneOf:
	while (true) {
		var _p0 = maybes;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var _p2 = _p0._0;
			var _p1 = _p2;
			if (_p1.ctor === 'Nothing') {
				var _v2 = _p0._1;
				maybes = _v2;
				continue oneOf;
			} else {
				return _p2;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors = function (declarations) {
	collectSelectors:
	while (true) {
		var _p3 = declarations;
		if (_p3.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p3._0.ctor === 'StyleBlockDeclaration') {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					{ctor: '::', _0: _p3._0._0._0, _1: _p3._0._0._1},
					_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(_p3._1));
			} else {
				var _v4 = _p3._1;
				declarations = _v4;
				continue collectSelectors;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning = function (_p4) {
	var _p5 = _p4;
	return {
		ctor: '_Tuple2',
		_0: _p5.warnings,
		_1: {key: _p5.key, value: _p5.value, important: _p5.important}
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings = function (properties) {
	return {
		ctor: '_Tuple2',
		_0: A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.warnings;
			},
			properties),
		_1: A2(
			_elm_lang$core$List$map,
			function (prop) {
				return _elm_lang$core$Tuple$second(
					_rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(prop));
			},
			properties)
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule = F5(
	function (str1, str2, str3, str4, declaration) {
		var _p6 = declaration;
		if (_p6.ctor === 'StyleBlockDeclaration') {
			return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, str1, str2, str3, str4, _p6._0);
		} else {
			return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration = function (declarations) {
	lastDeclaration:
	while (true) {
		var _p7 = declarations;
		if (_p7.ctor === '[]') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p7._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(
					{
						ctor: '::',
						_0: _p7._0,
						_1: {ctor: '[]'}
					});
			} else {
				var _v8 = _p7._1;
				declarations = _v8;
				continue lastDeclaration;
			}
		}
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings = function (declarationsAndWarnings) {
	var _p8 = declarationsAndWarnings;
	if (_p8.ctor === '[]') {
		return {
			declarations: {ctor: '[]'},
			warnings: {ctor: '[]'}
		};
	} else {
		var result = _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(_p8._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], _p8._0.declarations, result.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], _p8._0.warnings, result.warnings)
		};
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues = function (tuples) {
	var expandTuples = function (tuplesToExpand) {
		var _p9 = tuplesToExpand;
		if (_p9.ctor === '[]') {
			return {
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			};
		} else {
			var _p10 = expandTuples(_p9._1);
			var nextWarnings = _p10._0;
			var nextTuples = _p10._1;
			var _p11 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(_p9._0._1);
			var warnings = _p11._0;
			var properties = _p11._1;
			return {
				ctor: '_Tuple2',
				_0: A2(_elm_lang$core$Basics_ops['++'], warnings, nextWarnings),
				_1: {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: _p9._0._0, _1: properties},
					_1: nextTuples
				}
			};
		}
	};
	var _p12 = expandTuples(tuples);
	var warnings = _p12._0;
	var newTuples = _p12._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$FontFeatureValues(newTuples),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle = function (counterStyleProperties) {
	var _p13 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(counterStyleProperties);
	var warnings = _p13._0;
	var properties = _p13._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$Viewport(properties),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport = function (viewportProperties) {
	var _p14 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(viewportProperties);
	var warnings = _p14._0;
	var properties = _p14._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$Viewport(properties),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes = F2(
	function (str, properties) {
		return {
			declarations: {
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css_Structure$Keyframes, str, properties),
				_1: {ctor: '[]'}
			},
			warnings: {ctor: '[]'}
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace = function (fontFaceProperties) {
	var _p15 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(fontFaceProperties);
	var warnings = _p15._0;
	var properties = _p15._1;
	return {
		declarations: {
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$FontFace(properties),
			_1: {ctor: '[]'}
		},
		warnings: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule = F2(
	function (str, pageRuleProperties) {
		var _p16 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarnings(pageRuleProperties);
		var warnings = _p16._0;
		var properties = _p16._1;
		return {
			declarations: {
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css_Structure$PageRule, str, properties),
				_1: {ctor: '[]'}
			},
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule = F2(
	function (mediaQueries, declaration) {
		var _p17 = declaration;
		switch (_p17.ctor) {
			case 'StyleBlockDeclaration':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					mediaQueries,
					{
						ctor: '::',
						_0: _p17._0,
						_1: {ctor: '[]'}
					});
			case 'MediaRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$MediaRule,
					A2(_elm_lang$core$Basics_ops['++'], mediaQueries, _p17._0),
					_p17._1);
			case 'SupportsRule':
				return A2(
					_rtfeldman$elm_css$Css_Structure$SupportsRule,
					_p17._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
						_p17._1));
			case 'DocumentRule':
				return A5(_rtfeldman$elm_css$Css_Structure$DocumentRule, _p17._0, _p17._1, _p17._2, _p17._3, _p17._4);
			case 'PageRule':
				return declaration;
			case 'FontFace':
				return declaration;
			case 'Keyframes':
				return declaration;
			case 'Viewport':
				return declaration;
			case 'CounterStyle':
				return declaration;
			default:
				return declaration;
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule = F2(
	function (mediaQueries, styleBlocks) {
		var handleStyleBlock = function (styleBlock) {
			var _p18 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
			var declarations = _p18.declarations;
			var warnings = _p18.warnings;
			return {
				declarations: A2(
					_elm_lang$core$List$map,
					_rtfeldman$elm_css$Css_Preprocess_Resolve$toMediaRule(mediaQueries),
					declarations),
				warnings: warnings
			};
		};
		var results = A2(_elm_lang$core$List$map, handleStyleBlock, styleBlocks);
		return {
			warnings: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.warnings;
				},
				results),
			declarations: A2(
				_elm_lang$core$List$concatMap,
				function (_) {
					return _.declarations;
				},
				results)
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock = function (_p19) {
	var _p20 = _p19;
	return A2(
		_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles,
		_p20._2,
		{
			ctor: '::',
			_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
				A3(
					_rtfeldman$elm_css$Css_Structure$StyleBlock,
					_p20._0,
					_p20._1,
					{ctor: '[]'})),
			_1: {ctor: '[]'}
		});
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles = F2(
	function (styles, declarations) {
		applyStyles:
		while (true) {
			var _p21 = styles;
			if (_p21.ctor === '[]') {
				return {
					declarations: declarations,
					warnings: {ctor: '[]'}
				};
			} else {
				switch (_p21._0.ctor) {
					case 'AppendProperty':
						var _p22 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extractWarning(_p21._0._0);
						var warnings = _p22._0;
						var property = _p22._1;
						var result = A2(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles,
							_p21._1,
							A2(_rtfeldman$elm_css$Css_Structure$appendProperty, property, declarations));
						return {
							declarations: result.declarations,
							warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, result.warnings)
						};
					case 'ExtendSelector':
						return A4(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedStylesToLast,
							_p21._0._1,
							_p21._1,
							_rtfeldman$elm_css$Css_Structure$appendRepeatableToLastSelector(_p21._0._0),
							declarations);
					case 'NestSnippet':
						var chain = F2(
							function (_p24, _p23) {
								var _p25 = _p24;
								var _p26 = _p23;
								return A3(
									_rtfeldman$elm_css$Css_Structure$Selector,
									_p25._0,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p25._1,
										{
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: _p21._0._0, _1: _p26._0},
											_1: _p26._1
										}),
									_rtfeldman$elm_css$Css_Preprocess_Resolve$oneOf(
										{
											ctor: '::',
											_0: _p26._2,
											_1: {
												ctor: '::',
												_0: _p25._2,
												_1: {ctor: '[]'}
											}
										}));
							});
						var expandDeclaration = function (declaration) {
							var _p27 = declaration;
							switch (_p27.ctor) {
								case 'StyleBlockDeclaration':
									var newSelectors = A2(
										_elm_lang$core$List$concatMap,
										function (originalSelector) {
											return A2(
												_elm_lang$core$List$map,
												chain(originalSelector),
												{ctor: '::', _0: _p27._0._0, _1: _p27._0._1});
										},
										_rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations));
									var newDeclarations = function () {
										var _p28 = newSelectors;
										if (_p28.ctor === '[]') {
											return {ctor: '[]'};
										} else {
											return {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css_Structure$StyleBlockDeclaration(
													A3(
														_rtfeldman$elm_css$Css_Structure$StyleBlock,
														_p28._0,
														_p28._1,
														{ctor: '[]'})),
												_1: {ctor: '[]'}
											};
										}
									}();
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
										{
											ctor: '::',
											_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles, _p27._0._2, newDeclarations),
											_1: {ctor: '[]'}
										});
								case 'MediaRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p27._0, _p27._1);
								case 'SupportsRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p27._0, _p27._1);
								case 'DocumentRule':
									return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p27._0, _p27._1, _p27._2, _p27._3, _p27._4);
								case 'PageRule':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p27._0, _p27._1);
								case 'FontFace':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p27._0);
								case 'Keyframes':
									return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p27._0, _p27._1);
								case 'Viewport':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p27._0);
								case 'CounterStyle':
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p27._0);
								default:
									return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p27._0);
							}
						};
						return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							A2(
								F2(
									function (x, y) {
										return A2(_elm_lang$core$Basics_ops['++'], x, y);
									}),
								{
									ctor: '::',
									_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles, _p21._1, declarations),
									_1: {ctor: '[]'}
								},
								A2(
									_elm_lang$core$List$map,
									expandDeclaration,
									A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p21._0._1))));
					case 'WithPseudoElement':
						return A4(
							_rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedStylesToLast,
							_p21._0._1,
							_p21._1,
							_rtfeldman$elm_css$Css_Structure$appendPseudoElementToLastSelector(_p21._0._0),
							declarations);
					case 'WithMedia':
						var newDeclarations = function () {
							var _p29 = _rtfeldman$elm_css$Css_Preprocess_Resolve$collectSelectors(declarations);
							if (_p29.ctor === '[]') {
								return {ctor: '[]'};
							} else {
								return {
									ctor: '::',
									_0: A2(
										_rtfeldman$elm_css$Css_Structure$MediaRule,
										_p21._0._0,
										{
											ctor: '::',
											_0: A3(
												_rtfeldman$elm_css$Css_Structure$StyleBlock,
												_p29._0,
												_p29._1,
												{ctor: '[]'}),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								};
							}
						}();
						return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
							{
								ctor: '::',
								_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles, _p21._1, declarations),
								_1: {
									ctor: '::',
									_0: A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles, _p21._0._1, newDeclarations),
									_1: {ctor: '[]'}
								}
							});
					default:
						var _v19 = A2(_elm_lang$core$Basics_ops['++'], _p21._0._0, _p21._1),
							_v20 = declarations;
						styles = _v19;
						declarations = _v20;
						continue applyStyles;
				}
			}
		}
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$applyNestedStylesToLast = F4(
	function (nestedStyles, rest, f, declarations) {
		var withoutParent = function (decls) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '[]'},
				_elm_lang$core$List$tail(decls));
		};
		var nextResult = A2(
			_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles,
			rest,
			A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '[]'},
				_rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration(declarations)));
		var newDeclarations = function () {
			var _p30 = {
				ctor: '_Tuple2',
				_0: _elm_lang$core$List$head(nextResult.declarations),
				_1: _elm_lang$core$List$head(
					_elm_lang$core$List$reverse(declarations))
			};
			if (((_p30.ctor === '_Tuple2') && (_p30._0.ctor === 'Just')) && (_p30._1.ctor === 'Just')) {
				var _p32 = _p30._1._0;
				var _p31 = _p30._0._0;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$take,
						_elm_lang$core$List$length(declarations) - 1,
						declarations),
					{
						ctor: '::',
						_0: (!_elm_lang$core$Native_Utils.eq(_p32, _p31)) ? _p31 : _p32,
						_1: {ctor: '[]'}
					});
			} else {
				return declarations;
			}
		}();
		var handleInitial = function (declarationsAndWarnings) {
			var result = A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$applyStyles, nestedStyles, declarationsAndWarnings.declarations);
			return {
				warnings: A2(_elm_lang$core$Basics_ops['++'], declarationsAndWarnings.warnings, result.warnings),
				declarations: result.declarations
			};
		};
		var insertStylesToNestedDecl = function (lastDecl) {
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$concatDeclarationsAndWarnings(
				A2(
					_rtfeldman$elm_css$Css_Structure$mapLast,
					handleInitial,
					A2(
						_elm_lang$core$List$map,
						function (declaration) {
							return {
								declarations: {
									ctor: '::',
									_0: declaration,
									_1: {ctor: '[]'}
								},
								warnings: {ctor: '[]'}
							};
						},
						A2(_rtfeldman$elm_css$Css_Structure$concatMapLastStyleBlock, f, lastDecl))));
		};
		var initialResult = A2(
			_elm_lang$core$Maybe$withDefault,
			{
				warnings: {ctor: '[]'},
				declarations: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$Maybe$map,
				insertStylesToNestedDecl,
				_rtfeldman$elm_css$Css_Preprocess_Resolve$lastDeclaration(declarations)));
		return {
			warnings: A2(_elm_lang$core$Basics_ops['++'], initialResult.warnings, nextResult.warnings),
			declarations: A2(
				_elm_lang$core$Basics_ops['++'],
				newDeclarations,
				A2(
					_elm_lang$core$Basics_ops['++'],
					withoutParent(initialResult.declarations),
					withoutParent(nextResult.declarations)))
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule = F5(
	function (str1, str2, str3, str4, styleBlock) {
		var _p33 = _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(styleBlock);
		var declarations = _p33.declarations;
		var warnings = _p33.warnings;
		return {
			declarations: A2(
				_elm_lang$core$List$map,
				A4(_rtfeldman$elm_css$Css_Preprocess_Resolve$toDocumentRule, str1, str2, str3, str4),
				declarations),
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule = F2(
	function (str, snippets) {
		var _p34 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
			A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, snippets));
		var declarations = _p34.declarations;
		var warnings = _p34.warnings;
		return {
			declarations: {
				ctor: '::',
				_0: A2(_rtfeldman$elm_css$Css_Structure$SupportsRule, str, declarations),
				_1: {ctor: '[]'}
			},
			warnings: warnings
		};
	});
var _rtfeldman$elm_css$Css_Preprocess_Resolve$extract = function (snippetDeclarations) {
	var _p35 = snippetDeclarations;
	if (_p35.ctor === '[]') {
		return {
			declarations: {ctor: '[]'},
			warnings: {ctor: '[]'}
		};
	} else {
		var _p36 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations(_p35._0);
		var declarations = _p36.declarations;
		var warnings = _p36.warnings;
		var nextResult = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(_p35._1);
		return {
			declarations: A2(_elm_lang$core$Basics_ops['++'], declarations, nextResult.declarations),
			warnings: A2(_elm_lang$core$Basics_ops['++'], warnings, nextResult.warnings)
		};
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toDeclarations = function (snippetDeclaration) {
	var _p37 = snippetDeclaration;
	switch (_p37.ctor) {
		case 'StyleBlockDeclaration':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$expandStyleBlock(_p37._0);
		case 'MediaRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveMediaRule, _p37._0, _p37._1);
		case 'SupportsRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveSupportsRule, _p37._0, _p37._1);
		case 'DocumentRule':
			return A5(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveDocumentRule, _p37._0, _p37._1, _p37._2, _p37._3, _p37._4);
		case 'PageRule':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolvePageRule, _p37._0, _p37._1);
		case 'FontFace':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFace(_p37._0);
		case 'Keyframes':
			return A2(_rtfeldman$elm_css$Css_Preprocess_Resolve$resolveKeyframes, _p37._0, _p37._1);
		case 'Viewport':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveViewport(_p37._0);
		case 'CounterStyle':
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveCounterStyle(_p37._0);
		default:
			return _rtfeldman$elm_css$Css_Preprocess_Resolve$resolveFontFeatureValues(_p37._0);
	}
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure = function (_p38) {
	var _p39 = _p38;
	var _p40 = _rtfeldman$elm_css$Css_Preprocess_Resolve$extract(
		A2(_elm_lang$core$List$concatMap, _rtfeldman$elm_css$Css_Preprocess$unwrapSnippet, _p39.snippets));
	var warnings = _p40.warnings;
	var declarations = _p40.declarations;
	return {
		ctor: '_Tuple2',
		_0: {charset: _p39.charset, imports: _p39.imports, namespaces: _p39.namespaces, declarations: declarations},
		_1: warnings
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$compile1 = function (sheet) {
	var _p41 = _rtfeldman$elm_css$Css_Preprocess_Resolve$toStructure(sheet);
	var structureStylesheet = _p41._0;
	var warnings = _p41._1;
	return {
		warnings: warnings,
		css: _rtfeldman$elm_css$Css_Structure_Output$prettyPrint(
			_rtfeldman$elm_css$Css_Structure$dropEmpty(structureStylesheet))
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$compile = function (styles) {
	var results = A2(_elm_lang$core$List$map, _rtfeldman$elm_css$Css_Preprocess_Resolve$compile1, styles);
	return {
		warnings: A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.warnings;
			},
			results),
		css: A2(
			_elm_lang$core$String$join,
			'\n\n',
			A2(
				_elm_lang$core$List$map,
				function (_) {
					return _.css;
				},
				results))
	};
};
var _rtfeldman$elm_css$Css_Preprocess_Resolve$DeclarationsAndWarnings = F2(
	function (a, b) {
		return {declarations: a, warnings: b};
	});

var _rtfeldman$elm_css$VirtualDom_Styled$containsKey = F2(
	function (key, pairs) {
		containsKey:
		while (true) {
			var _p0 = pairs;
			if (_p0.ctor === '[]') {
				return false;
			} else {
				if (_elm_lang$core$Native_Utils.eq(key, _p0._0._0)) {
					return true;
				} else {
					var _v1 = key,
						_v2 = _p0._1;
					key = _v1;
					pairs = _v2;
					continue containsKey;
				}
			}
		}
	});
var _rtfeldman$elm_css$VirtualDom_Styled$getUnusedKey = F2(
	function ($default, pairs) {
		getUnusedKey:
		while (true) {
			var _p1 = pairs;
			if (_p1.ctor === '[]') {
				return $default;
			} else {
				var _p2 = _p1._1;
				var newKey = A2(_elm_lang$core$Basics_ops['++'], '_', _p1._0._0);
				if (A2(_rtfeldman$elm_css$VirtualDom_Styled$containsKey, newKey, _p2)) {
					var _v4 = newKey,
						_v5 = _p2;
					$default = _v4;
					pairs = _v5;
					continue getUnusedKey;
				} else {
					return newKey;
				}
			}
		}
	});
var _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty = function (_p3) {
	var _p4 = _p3;
	return _p4._0;
};
var _rtfeldman$elm_css$VirtualDom_Styled$stylesFromPropertiesHelp = F2(
	function (candidate, properties) {
		stylesFromPropertiesHelp:
		while (true) {
			var _p5 = properties;
			if (_p5.ctor === '[]') {
				return candidate;
			} else {
				var _p7 = _p5._1;
				var _p6 = _p5._0._2;
				if (_elm_lang$core$String$isEmpty(_p6)) {
					var _v8 = candidate,
						_v9 = _p7;
					candidate = _v8;
					properties = _v9;
					continue stylesFromPropertiesHelp;
				} else {
					var _v10 = _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p6, _1: _p5._0._1}),
						_v11 = _p7;
					candidate = _v10;
					properties = _v11;
					continue stylesFromPropertiesHelp;
				}
			}
		}
	});
var _rtfeldman$elm_css$VirtualDom_Styled$stylesFromProperties = function (properties) {
	var _p8 = A2(_rtfeldman$elm_css$VirtualDom_Styled$stylesFromPropertiesHelp, _elm_lang$core$Maybe$Nothing, properties);
	if (_p8.ctor === 'Nothing') {
		return _elm_lang$core$Dict$empty;
	} else {
		return A2(_elm_lang$core$Dict$singleton, _p8._0._0, _p8._0._1);
	}
};
var _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyles = F2(
	function (_p9, styles) {
		var _p10 = _p9;
		var _p11 = _p10._1;
		return _elm_lang$core$List$isEmpty(_p11) ? styles : A3(_elm_lang$core$Dict$insert, _p10._2, _p11, styles);
	});
var _rtfeldman$elm_css$VirtualDom_Styled$accumulateKeyedStyledHtml = F2(
	function (_p13, _p12) {
		var _p14 = _p13;
		var _p23 = _p14._0;
		var _p15 = _p12;
		var _p22 = _p15._1;
		var _p21 = _p15._0;
		var _p16 = _p14._1;
		switch (_p16.ctor) {
			case 'Unstyled':
				return {
					ctor: '_Tuple2',
					_0: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p23, _1: _p16._0},
						_1: _p21
					},
					_1: _p22
				};
			case 'Element':
				var _p18 = _p16._1;
				var combinedStyles = A3(_elm_lang$core$List$foldl, _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyles, _p22, _p18);
				var _p17 = A3(
					_elm_lang$core$List$foldl,
					_rtfeldman$elm_css$VirtualDom_Styled$accumulateStyledHtml,
					{
						ctor: '_Tuple2',
						_0: {ctor: '[]'},
						_1: combinedStyles
					},
					_p16._2);
				var childNodes = _p17._0;
				var finalStyles = _p17._1;
				var vdom = A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					_p16._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, _p18),
					_elm_lang$core$List$reverse(childNodes));
				return {
					ctor: '_Tuple2',
					_0: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p23, _1: vdom},
						_1: _p21
					},
					_1: finalStyles
				};
			default:
				var _p20 = _p16._1;
				var combinedStyles = A3(_elm_lang$core$List$foldl, _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyles, _p22, _p20);
				var _p19 = A3(
					_elm_lang$core$List$foldl,
					_rtfeldman$elm_css$VirtualDom_Styled$accumulateKeyedStyledHtml,
					{
						ctor: '_Tuple2',
						_0: {ctor: '[]'},
						_1: combinedStyles
					},
					_p16._2);
				var childNodes = _p19._0;
				var finalStyles = _p19._1;
				var vdom = A3(
					_elm_lang$virtual_dom$VirtualDom$keyedNode,
					_p16._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, _p20),
					_elm_lang$core$List$reverse(childNodes));
				return {
					ctor: '_Tuple2',
					_0: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: _p23, _1: vdom},
						_1: _p21
					},
					_1: finalStyles
				};
		}
	});
var _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyledHtml = F2(
	function (html, _p24) {
		var _p25 = _p24;
		var _p32 = _p25._1;
		var _p31 = _p25._0;
		var _p26 = html;
		switch (_p26.ctor) {
			case 'Unstyled':
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: _p26._0, _1: _p31},
					_1: _p32
				};
			case 'Element':
				var _p28 = _p26._1;
				var combinedStyles = A3(_elm_lang$core$List$foldl, _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyles, _p32, _p28);
				var _p27 = A3(
					_elm_lang$core$List$foldl,
					_rtfeldman$elm_css$VirtualDom_Styled$accumulateStyledHtml,
					{
						ctor: '_Tuple2',
						_0: {ctor: '[]'},
						_1: combinedStyles
					},
					_p26._2);
				var childNodes = _p27._0;
				var finalStyles = _p27._1;
				var node = A3(
					_elm_lang$virtual_dom$VirtualDom$node,
					_p26._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, _p28),
					_elm_lang$core$List$reverse(childNodes));
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: node, _1: _p31},
					_1: finalStyles
				};
			default:
				var _p30 = _p26._1;
				var combinedStyles = A3(_elm_lang$core$List$foldl, _rtfeldman$elm_css$VirtualDom_Styled$accumulateStyles, _p32, _p30);
				var _p29 = A3(
					_elm_lang$core$List$foldl,
					_rtfeldman$elm_css$VirtualDom_Styled$accumulateKeyedStyledHtml,
					{
						ctor: '_Tuple2',
						_0: {ctor: '[]'},
						_1: combinedStyles
					},
					_p26._2);
				var childNodes = _p29._0;
				var finalStyles = _p29._1;
				var node = A3(
					_elm_lang$virtual_dom$VirtualDom$keyedNode,
					_p26._0,
					A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, _p30),
					_elm_lang$core$List$reverse(childNodes));
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: node, _1: _p31},
					_1: finalStyles
				};
		}
	});
var _rtfeldman$elm_css$VirtualDom_Styled$murmurSeed = 15739;
var _rtfeldman$elm_css$VirtualDom_Styled$makeSnippet = F2(
	function (styles, sequence) {
		var selector = A3(
			_rtfeldman$elm_css$Css_Structure$Selector,
			sequence,
			{ctor: '[]'},
			_elm_lang$core$Maybe$Nothing);
		return _rtfeldman$elm_css$Css_Preprocess$Snippet(
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Preprocess$StyleBlockDeclaration(
					A3(
						_rtfeldman$elm_css$Css_Preprocess$StyleBlock,
						selector,
						{ctor: '[]'},
						styles)),
				_1: {ctor: '[]'}
			});
	});
var _rtfeldman$elm_css$VirtualDom_Styled$snippetFromPair = function (_p33) {
	var _p34 = _p33;
	return A2(
		_rtfeldman$elm_css$VirtualDom_Styled$makeSnippet,
		_p34._1,
		_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Css_Structure$ClassSelector(_p34._0),
				_1: {ctor: '[]'}
			}));
};
var _rtfeldman$elm_css$VirtualDom_Styled$toDeclaration = function (dict) {
	return function (_) {
		return _.css;
	}(
		_rtfeldman$elm_css$Css_Preprocess_Resolve$compile(
			_elm_lang$core$List$singleton(
				_rtfeldman$elm_css$Css_Preprocess$stylesheet(
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$VirtualDom_Styled$snippetFromPair,
						_elm_lang$core$Dict$toList(dict))))));
};
var _rtfeldman$elm_css$VirtualDom_Styled$toStyleNode = function (styles) {
	return A3(
		_elm_lang$virtual_dom$VirtualDom$node,
		'style',
		{ctor: '[]'},
		_elm_lang$core$List$singleton(
			_elm_lang$virtual_dom$VirtualDom$text(
				_rtfeldman$elm_css$VirtualDom_Styled$toDeclaration(styles))));
};
var _rtfeldman$elm_css$VirtualDom_Styled$unstyle = F3(
	function (elemType, properties, children) {
		var unstyledProperties = A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, properties);
		var initialStyles = _rtfeldman$elm_css$VirtualDom_Styled$stylesFromProperties(properties);
		var _p35 = A3(
			_elm_lang$core$List$foldl,
			_rtfeldman$elm_css$VirtualDom_Styled$accumulateStyledHtml,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: initialStyles
			},
			children);
		var childNodes = _p35._0;
		var styles = _p35._1;
		var styleNode = _rtfeldman$elm_css$VirtualDom_Styled$toStyleNode(styles);
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			elemType,
			unstyledProperties,
			{
				ctor: '::',
				_0: styleNode,
				_1: _elm_lang$core$List$reverse(childNodes)
			});
	});
var _rtfeldman$elm_css$VirtualDom_Styled$toKeyedStyleNode = F2(
	function (allStyles, keyedChildNodes) {
		var finalNode = _rtfeldman$elm_css$VirtualDom_Styled$toStyleNode(allStyles);
		var styleNodeKey = A2(_rtfeldman$elm_css$VirtualDom_Styled$getUnusedKey, '_', keyedChildNodes);
		return {ctor: '_Tuple2', _0: styleNodeKey, _1: finalNode};
	});
var _rtfeldman$elm_css$VirtualDom_Styled$unstyleKeyed = F3(
	function (elemType, properties, keyedChildren) {
		var unstyledProperties = A2(_elm_lang$core$List$map, _rtfeldman$elm_css$VirtualDom_Styled$extractUnstyledProperty, properties);
		var initialStyles = _rtfeldman$elm_css$VirtualDom_Styled$stylesFromProperties(properties);
		var _p36 = A3(
			_elm_lang$core$List$foldl,
			_rtfeldman$elm_css$VirtualDom_Styled$accumulateKeyedStyledHtml,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: initialStyles
			},
			keyedChildren);
		var keyedChildNodes = _p36._0;
		var styles = _p36._1;
		var keyedStyleNode = A2(_rtfeldman$elm_css$VirtualDom_Styled$toKeyedStyleNode, styles, keyedChildNodes);
		return A3(
			_elm_lang$virtual_dom$VirtualDom$keyedNode,
			elemType,
			unstyledProperties,
			{
				ctor: '::',
				_0: keyedStyleNode,
				_1: _elm_lang$core$List$reverse(keyedChildNodes)
			});
	});
var _rtfeldman$elm_css$VirtualDom_Styled$getClassname = function (styles) {
	return _elm_lang$core$List$isEmpty(styles) ? 'unstyled' : A2(
		_elm_lang$core$String$cons,
		_elm_lang$core$Native_Utils.chr('_'),
		_rtfeldman$hex$Hex$toString(
			A2(
				_Skinney$murmur3$Murmur3$hashString,
				_rtfeldman$elm_css$VirtualDom_Styled$murmurSeed,
				function (_) {
					return _.css;
				}(
					_rtfeldman$elm_css$Css_Preprocess_Resolve$compile(
						_elm_lang$core$List$singleton(
							_rtfeldman$elm_css$Css_Preprocess$stylesheet(
								_elm_lang$core$List$singleton(
									A2(
										_rtfeldman$elm_css$VirtualDom_Styled$makeSnippet,
										styles,
										_rtfeldman$elm_css$Css_Structure$UniversalSelectorSequence(
											{ctor: '[]'}))))))))));
};
var _rtfeldman$elm_css$VirtualDom_Styled$toUnstyled = function (node) {
	var _p37 = node;
	switch (_p37.ctor) {
		case 'Unstyled':
			return _p37._0;
		case 'Element':
			return A3(_rtfeldman$elm_css$VirtualDom_Styled$unstyle, _p37._0, _p37._1, _p37._2);
		default:
			return A3(_rtfeldman$elm_css$VirtualDom_Styled$unstyleKeyed, _p37._0, _p37._1, _p37._2);
	}
};
var _rtfeldman$elm_css$VirtualDom_Styled$Unstyled = function (a) {
	return {ctor: 'Unstyled', _0: a};
};
var _rtfeldman$elm_css$VirtualDom_Styled$unstyledNode = _rtfeldman$elm_css$VirtualDom_Styled$Unstyled;
var _rtfeldman$elm_css$VirtualDom_Styled$text = function (_p38) {
	return _rtfeldman$elm_css$VirtualDom_Styled$Unstyled(
		_elm_lang$virtual_dom$VirtualDom$text(_p38));
};
var _rtfeldman$elm_css$VirtualDom_Styled$lazy = F2(
	function (fn, arg) {
		return _rtfeldman$elm_css$VirtualDom_Styled$Unstyled(
			A2(_elm_lang$virtual_dom$VirtualDom$lazy, fn, arg));
	});
var _rtfeldman$elm_css$VirtualDom_Styled$lazy2 = F3(
	function (fn, arg1, arg2) {
		return _rtfeldman$elm_css$VirtualDom_Styled$Unstyled(
			A3(_elm_lang$virtual_dom$VirtualDom$lazy2, fn, arg1, arg2));
	});
var _rtfeldman$elm_css$VirtualDom_Styled$lazy3 = F4(
	function (fn, arg1, arg2, arg3) {
		return _rtfeldman$elm_css$VirtualDom_Styled$Unstyled(
			A4(_elm_lang$virtual_dom$VirtualDom$lazy3, fn, arg1, arg2, arg3));
	});
var _rtfeldman$elm_css$VirtualDom_Styled$KeyedElement = F3(
	function (a, b, c) {
		return {ctor: 'KeyedElement', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$VirtualDom_Styled$keyedNode = _rtfeldman$elm_css$VirtualDom_Styled$KeyedElement;
var _rtfeldman$elm_css$VirtualDom_Styled$Element = F3(
	function (a, b, c) {
		return {ctor: 'Element', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$VirtualDom_Styled$node = _rtfeldman$elm_css$VirtualDom_Styled$Element;
var _rtfeldman$elm_css$VirtualDom_Styled$Property = F3(
	function (a, b, c) {
		return {ctor: 'Property', _0: a, _1: b, _2: c};
	});
var _rtfeldman$elm_css$VirtualDom_Styled$property = F2(
	function (key, value) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A2(_elm_lang$virtual_dom$VirtualDom$property, key, value),
			{ctor: '[]'},
			'');
	});
var _rtfeldman$elm_css$VirtualDom_Styled$attribute = F2(
	function (key, value) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A2(_elm_lang$virtual_dom$VirtualDom$attribute, key, value),
			{ctor: '[]'},
			'');
	});
var _rtfeldman$elm_css$VirtualDom_Styled$attributeNS = F3(
	function (namespace, key, value) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A3(_elm_lang$virtual_dom$VirtualDom$attributeNS, namespace, key, value),
			{ctor: '[]'},
			'');
	});
var _rtfeldman$elm_css$VirtualDom_Styled$unstyledProperty = function (prop) {
	return A3(
		_rtfeldman$elm_css$VirtualDom_Styled$Property,
		prop,
		{ctor: '[]'},
		'');
};
var _rtfeldman$elm_css$VirtualDom_Styled$on = F2(
	function (eventName, decoder) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A2(_elm_lang$virtual_dom$VirtualDom$on, eventName, decoder),
			{ctor: '[]'},
			'');
	});
var _rtfeldman$elm_css$VirtualDom_Styled$onWithOptions = F3(
	function (eventName, options, decoder) {
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, options, decoder),
			{ctor: '[]'},
			'');
	});
var _rtfeldman$elm_css$VirtualDom_Styled$mapProperty = F2(
	function (transform, _p39) {
		var _p40 = _p39;
		return A3(
			_rtfeldman$elm_css$VirtualDom_Styled$Property,
			A2(_elm_lang$virtual_dom$VirtualDom$mapProperty, transform, _p40._0),
			_p40._1,
			_p40._2);
	});
var _rtfeldman$elm_css$VirtualDom_Styled$map = F2(
	function (transform, node) {
		var _p41 = node;
		switch (_p41.ctor) {
			case 'Element':
				return A3(
					_rtfeldman$elm_css$VirtualDom_Styled$Element,
					_p41._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$VirtualDom_Styled$mapProperty(transform),
						_p41._1),
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$VirtualDom_Styled$map(transform),
						_p41._2));
			case 'KeyedElement':
				return A3(
					_rtfeldman$elm_css$VirtualDom_Styled$KeyedElement,
					_p41._0,
					A2(
						_elm_lang$core$List$map,
						_rtfeldman$elm_css$VirtualDom_Styled$mapProperty(transform),
						_p41._1),
					A2(
						_elm_lang$core$List$map,
						function (_p42) {
							var _p43 = _p42;
							return {
								ctor: '_Tuple2',
								_0: _p43._0,
								_1: A2(_rtfeldman$elm_css$VirtualDom_Styled$map, transform, _p43._1)
							};
						},
						_p41._2));
			default:
				return _rtfeldman$elm_css$VirtualDom_Styled$Unstyled(
					A2(_elm_lang$virtual_dom$VirtualDom$map, transform, _p41._0));
		}
	});

var _rtfeldman$elm_css$Html_Styled_Internal$css = function (styles) {
	var classname = _rtfeldman$elm_css$VirtualDom_Styled$getClassname(styles);
	var classProperty = A2(
		_elm_lang$virtual_dom$VirtualDom$property,
		'className',
		_elm_lang$core$Json_Encode$string(classname));
	return A3(_rtfeldman$elm_css$VirtualDom_Styled$Property, classProperty, styles, classname);
};

var _rtfeldman$elm_css$Html_Styled$fromUnstyled = _rtfeldman$elm_css$VirtualDom_Styled$unstyledNode;
var _rtfeldman$elm_css$Html_Styled$toUnstyled = _rtfeldman$elm_css$VirtualDom_Styled$toUnstyled;
var _rtfeldman$elm_css$Html_Styled$program = function (config) {
	return _elm_lang$virtual_dom$VirtualDom$program(
		_elm_lang$core$Native_Utils.update(
			config,
			{
				view: function (_p0) {
					return _rtfeldman$elm_css$Html_Styled$toUnstyled(
						config.view(_p0));
				}
			}));
};
var _rtfeldman$elm_css$Html_Styled$beginnerProgram = function (_p1) {
	var _p2 = _p1;
	return _rtfeldman$elm_css$Html_Styled$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p2.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p2.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p2.view,
			subscriptions: function (_p3) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _rtfeldman$elm_css$Html_Styled$programWithFlags = function (config) {
	return _elm_lang$virtual_dom$VirtualDom$programWithFlags(
		_elm_lang$core$Native_Utils.update(
			config,
			{
				view: function (_p4) {
					return _rtfeldman$elm_css$Html_Styled$toUnstyled(
						config.view(_p4));
				}
			}));
};
var _rtfeldman$elm_css$Html_Styled$styled = F4(
	function (fn, styles, attrs, children) {
		return A2(
			fn,
			{
				ctor: '::',
				_0: _rtfeldman$elm_css$Html_Styled_Internal$css(styles),
				_1: attrs
			},
			children);
	});
var _rtfeldman$elm_css$Html_Styled$map = _rtfeldman$elm_css$VirtualDom_Styled$map;
var _rtfeldman$elm_css$Html_Styled$text = _rtfeldman$elm_css$VirtualDom_Styled$text;
var _rtfeldman$elm_css$Html_Styled$node = _rtfeldman$elm_css$VirtualDom_Styled$node;
var _rtfeldman$elm_css$Html_Styled$body = _rtfeldman$elm_css$Html_Styled$node('body');
var _rtfeldman$elm_css$Html_Styled$section = _rtfeldman$elm_css$Html_Styled$node('section');
var _rtfeldman$elm_css$Html_Styled$nav = _rtfeldman$elm_css$Html_Styled$node('nav');
var _rtfeldman$elm_css$Html_Styled$article = _rtfeldman$elm_css$Html_Styled$node('article');
var _rtfeldman$elm_css$Html_Styled$aside = _rtfeldman$elm_css$Html_Styled$node('aside');
var _rtfeldman$elm_css$Html_Styled$h1 = _rtfeldman$elm_css$Html_Styled$node('h1');
var _rtfeldman$elm_css$Html_Styled$h2 = _rtfeldman$elm_css$Html_Styled$node('h2');
var _rtfeldman$elm_css$Html_Styled$h3 = _rtfeldman$elm_css$Html_Styled$node('h3');
var _rtfeldman$elm_css$Html_Styled$h4 = _rtfeldman$elm_css$Html_Styled$node('h4');
var _rtfeldman$elm_css$Html_Styled$h5 = _rtfeldman$elm_css$Html_Styled$node('h5');
var _rtfeldman$elm_css$Html_Styled$h6 = _rtfeldman$elm_css$Html_Styled$node('h6');
var _rtfeldman$elm_css$Html_Styled$header = _rtfeldman$elm_css$Html_Styled$node('header');
var _rtfeldman$elm_css$Html_Styled$footer = _rtfeldman$elm_css$Html_Styled$node('footer');
var _rtfeldman$elm_css$Html_Styled$address = _rtfeldman$elm_css$Html_Styled$node('address');
var _rtfeldman$elm_css$Html_Styled$main_ = _rtfeldman$elm_css$Html_Styled$node('main');
var _rtfeldman$elm_css$Html_Styled$p = _rtfeldman$elm_css$Html_Styled$node('p');
var _rtfeldman$elm_css$Html_Styled$hr = _rtfeldman$elm_css$Html_Styled$node('hr');
var _rtfeldman$elm_css$Html_Styled$pre = _rtfeldman$elm_css$Html_Styled$node('pre');
var _rtfeldman$elm_css$Html_Styled$blockquote = _rtfeldman$elm_css$Html_Styled$node('blockquote');
var _rtfeldman$elm_css$Html_Styled$ol = _rtfeldman$elm_css$Html_Styled$node('ol');
var _rtfeldman$elm_css$Html_Styled$ul = _rtfeldman$elm_css$Html_Styled$node('ul');
var _rtfeldman$elm_css$Html_Styled$li = _rtfeldman$elm_css$Html_Styled$node('li');
var _rtfeldman$elm_css$Html_Styled$dl = _rtfeldman$elm_css$Html_Styled$node('dl');
var _rtfeldman$elm_css$Html_Styled$dt = _rtfeldman$elm_css$Html_Styled$node('dt');
var _rtfeldman$elm_css$Html_Styled$dd = _rtfeldman$elm_css$Html_Styled$node('dd');
var _rtfeldman$elm_css$Html_Styled$figure = _rtfeldman$elm_css$Html_Styled$node('figure');
var _rtfeldman$elm_css$Html_Styled$figcaption = _rtfeldman$elm_css$Html_Styled$node('figcaption');
var _rtfeldman$elm_css$Html_Styled$div = _rtfeldman$elm_css$Html_Styled$node('div');
var _rtfeldman$elm_css$Html_Styled$a = _rtfeldman$elm_css$Html_Styled$node('a');
var _rtfeldman$elm_css$Html_Styled$em = _rtfeldman$elm_css$Html_Styled$node('em');
var _rtfeldman$elm_css$Html_Styled$strong = _rtfeldman$elm_css$Html_Styled$node('strong');
var _rtfeldman$elm_css$Html_Styled$small = _rtfeldman$elm_css$Html_Styled$node('small');
var _rtfeldman$elm_css$Html_Styled$s = _rtfeldman$elm_css$Html_Styled$node('s');
var _rtfeldman$elm_css$Html_Styled$cite = _rtfeldman$elm_css$Html_Styled$node('cite');
var _rtfeldman$elm_css$Html_Styled$q = _rtfeldman$elm_css$Html_Styled$node('q');
var _rtfeldman$elm_css$Html_Styled$dfn = _rtfeldman$elm_css$Html_Styled$node('dfn');
var _rtfeldman$elm_css$Html_Styled$abbr = _rtfeldman$elm_css$Html_Styled$node('abbr');
var _rtfeldman$elm_css$Html_Styled$time = _rtfeldman$elm_css$Html_Styled$node('time');
var _rtfeldman$elm_css$Html_Styled$code = _rtfeldman$elm_css$Html_Styled$node('code');
var _rtfeldman$elm_css$Html_Styled$var = _rtfeldman$elm_css$Html_Styled$node('var');
var _rtfeldman$elm_css$Html_Styled$samp = _rtfeldman$elm_css$Html_Styled$node('samp');
var _rtfeldman$elm_css$Html_Styled$kbd = _rtfeldman$elm_css$Html_Styled$node('kbd');
var _rtfeldman$elm_css$Html_Styled$sub = _rtfeldman$elm_css$Html_Styled$node('sub');
var _rtfeldman$elm_css$Html_Styled$sup = _rtfeldman$elm_css$Html_Styled$node('sup');
var _rtfeldman$elm_css$Html_Styled$i = _rtfeldman$elm_css$Html_Styled$node('i');
var _rtfeldman$elm_css$Html_Styled$b = _rtfeldman$elm_css$Html_Styled$node('b');
var _rtfeldman$elm_css$Html_Styled$u = _rtfeldman$elm_css$Html_Styled$node('u');
var _rtfeldman$elm_css$Html_Styled$mark = _rtfeldman$elm_css$Html_Styled$node('mark');
var _rtfeldman$elm_css$Html_Styled$ruby = _rtfeldman$elm_css$Html_Styled$node('ruby');
var _rtfeldman$elm_css$Html_Styled$rt = _rtfeldman$elm_css$Html_Styled$node('rt');
var _rtfeldman$elm_css$Html_Styled$rp = _rtfeldman$elm_css$Html_Styled$node('rp');
var _rtfeldman$elm_css$Html_Styled$bdi = _rtfeldman$elm_css$Html_Styled$node('bdi');
var _rtfeldman$elm_css$Html_Styled$bdo = _rtfeldman$elm_css$Html_Styled$node('bdo');
var _rtfeldman$elm_css$Html_Styled$span = _rtfeldman$elm_css$Html_Styled$node('span');
var _rtfeldman$elm_css$Html_Styled$br = _rtfeldman$elm_css$Html_Styled$node('br');
var _rtfeldman$elm_css$Html_Styled$wbr = _rtfeldman$elm_css$Html_Styled$node('wbr');
var _rtfeldman$elm_css$Html_Styled$ins = _rtfeldman$elm_css$Html_Styled$node('ins');
var _rtfeldman$elm_css$Html_Styled$del = _rtfeldman$elm_css$Html_Styled$node('del');
var _rtfeldman$elm_css$Html_Styled$img = _rtfeldman$elm_css$Html_Styled$node('img');
var _rtfeldman$elm_css$Html_Styled$iframe = _rtfeldman$elm_css$Html_Styled$node('iframe');
var _rtfeldman$elm_css$Html_Styled$embed = _rtfeldman$elm_css$Html_Styled$node('embed');
var _rtfeldman$elm_css$Html_Styled$object = _rtfeldman$elm_css$Html_Styled$node('object');
var _rtfeldman$elm_css$Html_Styled$param = _rtfeldman$elm_css$Html_Styled$node('param');
var _rtfeldman$elm_css$Html_Styled$video = _rtfeldman$elm_css$Html_Styled$node('video');
var _rtfeldman$elm_css$Html_Styled$audio = _rtfeldman$elm_css$Html_Styled$node('audio');
var _rtfeldman$elm_css$Html_Styled$source = _rtfeldman$elm_css$Html_Styled$node('source');
var _rtfeldman$elm_css$Html_Styled$track = _rtfeldman$elm_css$Html_Styled$node('track');
var _rtfeldman$elm_css$Html_Styled$canvas = _rtfeldman$elm_css$Html_Styled$node('canvas');
var _rtfeldman$elm_css$Html_Styled$math = _rtfeldman$elm_css$Html_Styled$node('math');
var _rtfeldman$elm_css$Html_Styled$table = _rtfeldman$elm_css$Html_Styled$node('table');
var _rtfeldman$elm_css$Html_Styled$caption = _rtfeldman$elm_css$Html_Styled$node('caption');
var _rtfeldman$elm_css$Html_Styled$colgroup = _rtfeldman$elm_css$Html_Styled$node('colgroup');
var _rtfeldman$elm_css$Html_Styled$col = _rtfeldman$elm_css$Html_Styled$node('col');
var _rtfeldman$elm_css$Html_Styled$tbody = _rtfeldman$elm_css$Html_Styled$node('tbody');
var _rtfeldman$elm_css$Html_Styled$thead = _rtfeldman$elm_css$Html_Styled$node('thead');
var _rtfeldman$elm_css$Html_Styled$tfoot = _rtfeldman$elm_css$Html_Styled$node('tfoot');
var _rtfeldman$elm_css$Html_Styled$tr = _rtfeldman$elm_css$Html_Styled$node('tr');
var _rtfeldman$elm_css$Html_Styled$td = _rtfeldman$elm_css$Html_Styled$node('td');
var _rtfeldman$elm_css$Html_Styled$th = _rtfeldman$elm_css$Html_Styled$node('th');
var _rtfeldman$elm_css$Html_Styled$form = _rtfeldman$elm_css$Html_Styled$node('form');
var _rtfeldman$elm_css$Html_Styled$fieldset = _rtfeldman$elm_css$Html_Styled$node('fieldset');
var _rtfeldman$elm_css$Html_Styled$legend = _rtfeldman$elm_css$Html_Styled$node('legend');
var _rtfeldman$elm_css$Html_Styled$label = _rtfeldman$elm_css$Html_Styled$node('label');
var _rtfeldman$elm_css$Html_Styled$input = _rtfeldman$elm_css$Html_Styled$node('input');
var _rtfeldman$elm_css$Html_Styled$button = _rtfeldman$elm_css$Html_Styled$node('button');
var _rtfeldman$elm_css$Html_Styled$select = _rtfeldman$elm_css$Html_Styled$node('select');
var _rtfeldman$elm_css$Html_Styled$datalist = _rtfeldman$elm_css$Html_Styled$node('datalist');
var _rtfeldman$elm_css$Html_Styled$optgroup = _rtfeldman$elm_css$Html_Styled$node('optgroup');
var _rtfeldman$elm_css$Html_Styled$option = _rtfeldman$elm_css$Html_Styled$node('option');
var _rtfeldman$elm_css$Html_Styled$textarea = _rtfeldman$elm_css$Html_Styled$node('textarea');
var _rtfeldman$elm_css$Html_Styled$keygen = _rtfeldman$elm_css$Html_Styled$node('keygen');
var _rtfeldman$elm_css$Html_Styled$output = _rtfeldman$elm_css$Html_Styled$node('output');
var _rtfeldman$elm_css$Html_Styled$progress = _rtfeldman$elm_css$Html_Styled$node('progress');
var _rtfeldman$elm_css$Html_Styled$meter = _rtfeldman$elm_css$Html_Styled$node('meter');
var _rtfeldman$elm_css$Html_Styled$details = _rtfeldman$elm_css$Html_Styled$node('details');
var _rtfeldman$elm_css$Html_Styled$summary = _rtfeldman$elm_css$Html_Styled$node('summary');
var _rtfeldman$elm_css$Html_Styled$menuitem = _rtfeldman$elm_css$Html_Styled$node('menuitem');
var _rtfeldman$elm_css$Html_Styled$menu = _rtfeldman$elm_css$Html_Styled$node('menu');

var _rtfeldman$elm_css$Html_Styled_Attributes$css = _rtfeldman$elm_css$Html_Styled_Internal$css;
var _rtfeldman$elm_css$Html_Styled_Attributes$map = _rtfeldman$elm_css$VirtualDom_Styled$mapProperty;
var _rtfeldman$elm_css$Html_Styled_Attributes$attribute = _rtfeldman$elm_css$VirtualDom_Styled$attribute;
var _rtfeldman$elm_css$Html_Styled_Attributes$contextmenu = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'contextmenu', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$draggable = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'draggable', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$itemprop = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'itemprop', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$tabindex = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$charset = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'charset', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$height = function (value) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$width = function (value) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$formaction = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'formAction', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$list = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'list', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$minlength = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$maxlength = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$size = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$form = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'form', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$cols = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$rows = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$challenge = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'challenge', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$media = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'media', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$rel = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'rel', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$datetime = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'datetime', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$pubdate = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'pubdate', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$colspan = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$rowspan = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$manifest = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$attribute, 'manifest', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$property = _rtfeldman$elm_css$VirtualDom_Styled$property;
var _rtfeldman$elm_css$Html_Styled_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_rtfeldman$elm_css$Html_Styled_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _rtfeldman$elm_css$Html_Styled_Attributes$class = function (name) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'className', name);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$id = function (name) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'id', name);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$title = function (name) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'title', name);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$accesskey = function ($char) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$dir = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'dir', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$dropzone = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'dropzone', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$lang = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'lang', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$content = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'content', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$httpEquiv = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'httpEquiv', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$language = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'language', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$src = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'src', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$alt = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'alt', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$preload = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'preload', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$poster = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'poster', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$kind = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'kind', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$srclang = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'srclang', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$sandbox = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'sandbox', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$srcdoc = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'srcdoc', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$type_ = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'type', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$value = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'value', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$defaultValue = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'defaultValue', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$placeholder = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'placeholder', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$accept = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'accept', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$acceptCharset = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'acceptCharset', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$action = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'action', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$autocomplete = function (bool) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _rtfeldman$elm_css$Html_Styled_Attributes$enctype = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'enctype', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$method = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'method', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$name = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'name', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$pattern = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'pattern', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$for = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'htmlFor', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$max = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'max', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$min = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'min', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$step = function (n) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'step', n);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$wrap = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'wrap', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$usemap = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'useMap', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$shape = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'shape', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$coords = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'coords', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$keytype = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'keytype', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$align = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'align', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$cite = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'cite', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$href = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'href', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$target = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'target', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$downloadAs = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'download', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$hreflang = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'hreflang', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$ping = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'ping', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$start = function (n) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$headers = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'headers', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$scope = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$stringProperty, 'scope', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_rtfeldman$elm_css$Html_Styled_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _rtfeldman$elm_css$Html_Styled_Attributes$hidden = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'hidden', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$contenteditable = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'contentEditable', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$spellcheck = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'spellcheck', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$async = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'async', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$defer = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'defer', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$scoped = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'scoped', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$autoplay = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'autoplay', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$controls = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'controls', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$loop = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'loop', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$default = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'default', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$seamless = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'seamless', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$checked = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'checked', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$selected = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'selected', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$autofocus = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'autofocus', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$disabled = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'disabled', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$multiple = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'multiple', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$novalidate = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'noValidate', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$readonly = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'readOnly', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$required = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'required', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$ismap = function (value) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'isMap', value);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$download = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'download', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$reversed = function (bool) {
	return A2(_rtfeldman$elm_css$Html_Styled_Attributes$boolProperty, 'reversed', bool);
};
var _rtfeldman$elm_css$Html_Styled_Attributes$classList = function (list) {
	return _rtfeldman$elm_css$Html_Styled_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _rtfeldman$elm_css$Html_Styled_Attributes$fromUnstyled = _rtfeldman$elm_css$VirtualDom_Styled$unstyledProperty;
var _rtfeldman$elm_css$Html_Styled_Attributes$style = function (_p0) {
	return _rtfeldman$elm_css$Html_Styled_Attributes$fromUnstyled(
		_elm_lang$virtual_dom$VirtualDom$style(_p0));
};

var _rtfeldman$elm_css$Html_Styled_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _rtfeldman$elm_css$Html_Styled_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _rtfeldman$elm_css$Html_Styled_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _rtfeldman$elm_css$Html_Styled_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _rtfeldman$elm_css$Html_Styled_Events$onWithOptions = _rtfeldman$elm_css$VirtualDom_Styled$onWithOptions;
var _rtfeldman$elm_css$Html_Styled_Events$on = _rtfeldman$elm_css$VirtualDom_Styled$on;
var _rtfeldman$elm_css$Html_Styled_Events$onFocus = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onBlur = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_rtfeldman$elm_css$Html_Styled_Events$defaultOptions,
	{preventDefault: true});
var _rtfeldman$elm_css$Html_Styled_Events$onSubmit = function (msg) {
	return A3(
		_rtfeldman$elm_css$Html_Styled_Events$onWithOptions,
		'submit',
		_rtfeldman$elm_css$Html_Styled_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onCheck = function (tagger) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _rtfeldman$elm_css$Html_Styled_Events$targetChecked));
};
var _rtfeldman$elm_css$Html_Styled_Events$onInput = function (tagger) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _rtfeldman$elm_css$Html_Styled_Events$targetValue));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseOut = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseOver = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseLeave = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseEnter = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseUp = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onMouseDown = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onDoubleClick = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$onClick = function (msg) {
	return A2(
		_rtfeldman$elm_css$Html_Styled_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _rtfeldman$elm_css$Html_Styled_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$virtual_dom$Main$accordionElmCss = F3(
	function (openMsg, isOpen, acc) {
		return A2(
			_rtfeldman$elm_css$Html_Styled$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_rtfeldman$elm_css$Html_Styled$h4,
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Html_Styled_Events$onClick(openMsg),
						_1: {
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
								{
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$margin(_rtfeldman$elm_css$Css$zero),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$cursor(_rtfeldman$elm_css$Css$pointer),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$fontFamilies(
												{
													ctor: '::',
													_0: 'Arial',
													_1: {
														ctor: '::',
														_0: function (_) {
															return _.value;
														}(_rtfeldman$elm_css$Css$sansSerif),
														_1: {ctor: '[]'}
													}
												}),
											_1: {
												ctor: '::',
												_0: _rtfeldman$elm_css$Css$backgroundColor(
													_rtfeldman$elm_css$Css$hex('eee')),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$padding(
														_rtfeldman$elm_css$Css$px(8)),
													_1: {
														ctor: '::',
														_0: _rtfeldman$elm_css$Css$fontWeight(
															_rtfeldman$elm_css$Css$int(400)),
														_1: {
															ctor: '::',
															_0: _rtfeldman$elm_css$Css$fontSize(
																_rtfeldman$elm_css$Css$px(20)),
															_1: {
																ctor: '::',
																_0: A3(
																	_rtfeldman$elm_css$Css$border3,
																	_rtfeldman$elm_css$Css$px(1),
																	_rtfeldman$elm_css$Css$solid,
																	_rtfeldman$elm_css$Css$hex('aaa')),
																_1: {
																	ctor: '::',
																	_0: _rtfeldman$elm_css$Css$lineHeight(
																		_rtfeldman$elm_css$Css$px(20)),
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									}
								}),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _rtfeldman$elm_css$Html_Styled$text(acc.heading),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_rtfeldman$elm_css$Html_Styled$p,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
								{
									ctor: '::',
									_0: isOpen ? _rtfeldman$elm_css$Css$height(_rtfeldman$elm_css$Css$auto) : _rtfeldman$elm_css$Css$height(_rtfeldman$elm_css$Css$zero),
									_1: {
										ctor: '::',
										_0: _rtfeldman$elm_css$Css$overflow(_rtfeldman$elm_css$Css$hidden),
										_1: {
											ctor: '::',
											_0: _rtfeldman$elm_css$Css$fontFamilies(
												{
													ctor: '::',
													_0: 'Arial',
													_1: {
														ctor: '::',
														_0: function (_) {
															return _.value;
														}(_rtfeldman$elm_css$Css$sansSerif),
														_1: {ctor: '[]'}
													}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_rtfeldman$elm_css$Css$margin2,
													_rtfeldman$elm_css$Css$px(12),
													_rtfeldman$elm_css$Css$zero),
												_1: {
													ctor: '::',
													_0: _rtfeldman$elm_css$Css$lineHeight(
														_rtfeldman$elm_css$Css$px(21)),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled$text(acc.content),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$Main$accordionWrapperStyle = {
	ctor: '::',
	_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$fill),
	_1: {
		ctor: '::',
		_0: _mdgriffith$stylish_elephants$Element$spacing(12),
		_1: {ctor: '[]'}
	}
};
var _elm_lang$virtual_dom$Main$accordionContentStyle = {
	ctor: '::',
	_0: _mdgriffith$stylish_elephants$Element$clip,
	_1: {
		ctor: '::',
		_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$fill),
		_1: {
			ctor: '::',
			_0: _mdgriffith$stylish_elephants$Element_Font$family(
				{
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Element_Font$typeface('Arial'),
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Element_Font$sansSerif,
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Element_Font$size(16),
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Element_Font$color(_elm_lang$core$Color$black),
					_1: {ctor: '[]'}
				}
			}
		}
	}
};
var _elm_lang$virtual_dom$Main$accordionHeadingStyle = {
	ctor: '::',
	_0: _mdgriffith$stylish_elephants$Element$pointer,
	_1: {
		ctor: '::',
		_0: _mdgriffith$stylish_elephants$Element$padding(8),
		_1: {
			ctor: '::',
			_0: _mdgriffith$stylish_elephants$Element_Font$size(20),
			_1: {
				ctor: '::',
				_0: _mdgriffith$stylish_elephants$Element_Font$color(_elm_lang$core$Color$black),
				_1: {
					ctor: '::',
					_0: _mdgriffith$stylish_elephants$Element_Font$family(
						{
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element_Font$typeface('Arial'),
							_1: {
								ctor: '::',
								_0: _mdgriffith$stylish_elephants$Element_Font$sansSerif,
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Element_Background$color(
							A3(_elm_lang$core$Color$rgb, 238, 238, 238)),
						_1: {
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$width(_mdgriffith$stylish_elephants$Element$fill),
							_1: {
								ctor: '::',
								_0: _mdgriffith$stylish_elephants$Element_Border$color(
									A3(_elm_lang$core$Color$rgb, 170, 170, 170)),
								_1: {
									ctor: '::',
									_0: _mdgriffith$stylish_elephants$Element_Border$solid,
									_1: {
										ctor: '::',
										_0: _mdgriffith$stylish_elephants$Element_Border$width(1),
										_1: {
											ctor: '::',
											_0: _mdgriffith$stylish_elephants$Element_Region$heading(4),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _elm_lang$virtual_dom$Main$accordionSE = F3(
	function (openMsg, isOpen, acc) {
		return A2(
			_mdgriffith$stylish_elephants$Element$column,
			_elm_lang$virtual_dom$Main$accordionWrapperStyle,
			{
				ctor: '::',
				_0: A2(
					_mdgriffith$stylish_elephants$Element$paragraph,
					{
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Element_Events$onClick(openMsg),
						_1: _elm_lang$virtual_dom$Main$accordionHeadingStyle
					},
					{
						ctor: '::',
						_0: _mdgriffith$stylish_elephants$Element$text(acc.heading),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_mdgriffith$stylish_elephants$Element$paragraph,
						isOpen ? {
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$height(_mdgriffith$stylish_elephants$Element$shrink),
							_1: _elm_lang$virtual_dom$Main$accordionContentStyle
						} : {
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$height(
								_mdgriffith$stylish_elephants$Element$px(0)),
							_1: _elm_lang$virtual_dom$Main$accordionContentStyle
						},
						{
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$text(acc.content),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$Main$accordionHtmlInline = F3(
	function (openMsg, isOpen, acc) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h4,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(openMsg),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$style(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'font-family', _1: 'Arial, sans-serif'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'background', _1: '#eee'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'padding', _1: '8px'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'font-weight', _1: '400'},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'font-size', _1: '20px'},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'border', _1: 'solid 1px #aaa'},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'line-height', _1: '20px'},
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												}
											}
										}
									}
								}),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(acc.heading),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$p,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$style(
								{
									ctor: '::',
									_0: isOpen ? {ctor: '_Tuple2', _0: 'height', _1: 'auto'} : {ctor: '_Tuple2', _0: 'height', _1: '0'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'overflow', _1: 'hidden'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'font-family', _1: 'Arial, sans-serif'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'margin', _1: '12px 0'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'line-height', _1: '21px'},
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(acc.content),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$Main$css = '\n.page {\n    padding: 12px;\n}\n.header-button-row {\n    margin: 8px 0;\n}\n\n.header-button-row button {\n    margin: 0 4px;\n}\n.wrapper {\n    padding: 32px;\n}\n.accordion .header {\n    cursor: pointer;\n    margin: 0;\n    font-family: Arial, sans-serif;\n    font-weight: 400;\n    border: solid 1px #aaa;\n    background: #eee;\n    padding: 8px;\n    font-size: 20px;\n    line-height: 20px;\n}\n.accordion .header:hover {\n    border-color: #666;\n}\n\n.accordion .content {\n    overflow: hidden;\n    height: 0;\n    font-family: Arial, sans-serif;\n    margin: 12px 0;\n    line-height: 21px;\n}\n\n.accordion .content.open {\n    height: auto;\n}\n';
var _elm_lang$virtual_dom$Main$accordionHtmlCss = F3(
	function (openMsg, isOpen, acc) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('accordion'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h4,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(openMsg),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('header'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(acc.heading),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$p,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('content'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$classList(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'open', _1: isOpen},
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(acc.content),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _elm_lang$virtual_dom$Main$implLabel = function (impl) {
	var _p0 = impl;
	switch (_p0.ctor) {
		case 'Impl_HtmlCss':
			return 'HTML / CSS';
		case 'Impl_HtmlInline':
			return 'HTML with inline style';
		case 'Impl_SE':
			return 'Stylish Elephants (6.0.2)';
		default:
			return 'elm-css (14.0.0)';
	}
};
var _elm_lang$virtual_dom$Main$renderSummary = function (state) {
	if (state.isRunning) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Wait for test to complete'),
				_1: {ctor: '[]'}
			});
	} else {
		if (_elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(state.times),
			0)) {
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Hit start to run test'),
					_1: {ctor: '[]'}
				});
		} else {
			var testSum = _elm_lang$core$List$sum(state.times);
			var avg = testSum / _elm_lang$core$Basics$toFloat(
				_elm_lang$core$List$length(state.times));
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Total time: ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(
									_elm_lang$core$Basics$round(testSum)),
								'ms | '))),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(
								_elm_lang$core$Basics_ops['++'],
								'Avg time / frame: ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									_elm_lang$core$Basics$toString(
										_elm_lang$core$Basics$round(avg)),
									'ms | '))),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Avg frame rate: ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(
											_elm_lang$core$Basics$round(1000 / avg)),
										' frames / sec'))),
							_1: {ctor: '[]'}
						}
					}
				});
		}
	}
};
var _elm_lang$virtual_dom$Main$noCmd = function (s) {
	return {ctor: '_Tuple2', _0: s, _1: _elm_lang$core$Platform_Cmd$none};
};
var _elm_lang$virtual_dom$Main$testCount = 30;
var _elm_lang$virtual_dom$Main$accordion = {heading: 'Accorion Item (click to open)', content: 'Ipsum corrupti repudiandae hic deleniti ex aut adipisci ducimus et facere magni officiis? Ut debitis eius amet harum aliquam magnam perferendis dignissimos, quidem fugit quae soluta optio excepturi! Repellat cumque?'};
var _elm_lang$virtual_dom$Main$renderAccordions = function (state) {
	var _p1 = state.impl;
	switch (_p1.ctor) {
		case 'Impl_HtmlCss':
			return A2(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				'html-css',
				A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('wrapper'),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						function (_p2) {
							var _p3 = _p2;
							return A3(
								_elm_lang$virtual_dom$Main$accordionHtmlCss,
								_p3._1,
								_elm_lang$core$Native_Utils.eq(
									_elm_lang$core$Maybe$Just(_p3._0),
									state.open),
								_elm_lang$virtual_dom$Main$accordion);
						},
						state.actions)));
		case 'Impl_HtmlInline':
			return A2(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				'html-inline',
				A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'padding', _1: '32px'},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						function (_p4) {
							var _p5 = _p4;
							return A3(
								_elm_lang$virtual_dom$Main$accordionHtmlInline,
								_p5._1,
								_elm_lang$core$Native_Utils.eq(
									_elm_lang$core$Maybe$Just(_p5._0),
									state.open),
								_elm_lang$virtual_dom$Main$accordion);
						},
						state.actions)));
		case 'Impl_SE':
			return A2(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				'style-elements',
				A2(
					_mdgriffith$stylish_elephants$Element$layout,
					{ctor: '[]'},
					A2(
						_mdgriffith$stylish_elephants$Element$column,
						{
							ctor: '::',
							_0: _mdgriffith$stylish_elephants$Element$padding(32),
							_1: {
								ctor: '::',
								_0: _mdgriffith$stylish_elephants$Element$spacing(16),
								_1: {ctor: '[]'}
							}
						},
						A2(
							_elm_lang$core$List$map,
							function (_p6) {
								var _p7 = _p6;
								return A3(
									_elm_lang$virtual_dom$Main$accordionSE,
									_p7._1,
									_elm_lang$core$Native_Utils.eq(
										_elm_lang$core$Maybe$Just(_p7._0),
										state.open),
									_elm_lang$virtual_dom$Main$accordion);
							},
							state.actions))));
		default:
			return A2(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				'elm-css',
				_rtfeldman$elm_css$Html_Styled$toUnstyled(
					A2(
						_rtfeldman$elm_css$Html_Styled$div,
						{
							ctor: '::',
							_0: _rtfeldman$elm_css$Html_Styled_Attributes$css(
								{
									ctor: '::',
									_0: _rtfeldman$elm_css$Css$padding(
										_rtfeldman$elm_css$Css$px(32)),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						},
						A2(
							_elm_lang$core$List$map,
							function (_p8) {
								var _p9 = _p8;
								return A3(
									_elm_lang$virtual_dom$Main$accordionElmCss,
									_p9._1,
									_elm_lang$core$Native_Utils.eq(
										_elm_lang$core$Maybe$Just(_p9._0),
										state.open),
									_elm_lang$virtual_dom$Main$accordion);
							},
							state.actions))));
	}
};
var _elm_lang$virtual_dom$Main$State = F7(
	function (a, b, c, d, e, f, g) {
		return {open: a, impl: b, count: c, actions: d, times: e, frameCount: f, isRunning: g};
	});
var _elm_lang$virtual_dom$Main$Accordion = F2(
	function (a, b) {
		return {heading: a, content: b};
	});
var _elm_lang$virtual_dom$Main$Impl_ElmCss = {ctor: 'Impl_ElmCss'};
var _elm_lang$virtual_dom$Main$Impl_SE = {ctor: 'Impl_SE'};
var _elm_lang$virtual_dom$Main$Impl_HtmlInline = {ctor: 'Impl_HtmlInline'};
var _elm_lang$virtual_dom$Main$Impl_HtmlCss = {ctor: 'Impl_HtmlCss'};
var _elm_lang$virtual_dom$Main$SetCount = function (a) {
	return {ctor: 'SetCount', _0: a};
};
var _elm_lang$virtual_dom$Main$SetImpl = function (a) {
	return {ctor: 'SetImpl', _0: a};
};
var _elm_lang$virtual_dom$Main$TickTest = function (a) {
	return {ctor: 'TickTest', _0: a};
};
var _elm_lang$virtual_dom$Main$subscriptions = function (state) {
	return state.isRunning ? _elm_lang$animation_frame$AnimationFrame$diffs(_elm_lang$virtual_dom$Main$TickTest) : _elm_lang$core$Platform_Sub$none;
};
var _elm_lang$virtual_dom$Main$StartTest = {ctor: 'StartTest'};
var _elm_lang$virtual_dom$Main$heading = function (_p10) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$p,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('This is an attempt to compare the rendering performance of the Virtual Dom with three different implementations for style.'),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$ul,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$li,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('HTML with CSS classes (only CSS classes handled by VDOM)'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$li,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('HTML with inline style (all style is handled by VDOM)'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$li,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Style Elements (stylish elephants)'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$li,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('elm-css (rtfeldman/elm-css with inline styles)'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text('The rendering times are logged to the console and performance timeline (Chrome).'),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$br,
									{ctor: '[]'},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html$text('Three different metrics are logged:'),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$ul,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$li,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('Build VDOM: This is the view function in the Elm program.'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$li,
														{ctor: '[]'},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('Diff: The diffing of VDOM'),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$li,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('Apply: Applying the diff to the \"real\" DOM.'),
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												}
											}),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$p,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Use implementation:'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('header-button-row'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$button,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onClick(
										_elm_lang$virtual_dom$Main$SetImpl(_elm_lang$virtual_dom$Main$Impl_HtmlCss)),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text('HTML / CSS'),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$button,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onClick(
											_elm_lang$virtual_dom$Main$SetImpl(_elm_lang$virtual_dom$Main$Impl_HtmlInline)),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('HTML Inline'),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$button,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(
												_elm_lang$virtual_dom$Main$SetImpl(_elm_lang$virtual_dom$Main$Impl_SE)),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Stylish Elephants'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$button,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Events$onClick(
													_elm_lang$virtual_dom$Main$SetImpl(_elm_lang$virtual_dom$Main$Impl_ElmCss)),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('elm-css'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$p,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Repeat the accordion this many times:'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('header-button-row'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$button,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(
												_elm_lang$virtual_dom$Main$SetCount(64)),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('64'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$button,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Events$onClick(
													_elm_lang$virtual_dom$Main$SetCount(128)),
												_1: {ctor: '[]'}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('128'),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$button,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(
														_elm_lang$virtual_dom$Main$SetCount(256)),
													_1: {ctor: '[]'}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('256'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$button,
													{
														ctor: '::',
														_0: _elm_lang$html$Html_Events$onClick(
															_elm_lang$virtual_dom$Main$SetCount(512)),
														_1: {ctor: '[]'}
													},
													{
														ctor: '::',
														_0: _elm_lang$html$Html$text('512'),
														_1: {ctor: '[]'}
													}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$button,
														{
															ctor: '::',
															_0: _elm_lang$html$Html_Events$onClick(
																_elm_lang$virtual_dom$Main$SetCount(1024)),
															_1: {ctor: '[]'}
														},
														{
															ctor: '::',
															_0: _elm_lang$html$Html$text('1024'),
															_1: {ctor: '[]'}
														}),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$button,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Events$onClick(
																	_elm_lang$virtual_dom$Main$SetCount(2048)),
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text('2048'),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$button,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Events$onClick(
																		_elm_lang$virtual_dom$Main$SetCount(4096)),
																	_1: {ctor: '[]'}
																},
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('4096'),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$button,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Events$onClick(
																			_elm_lang$virtual_dom$Main$SetCount(8192)),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html$text('8192'),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$p,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(
											A2(
												_elm_lang$core$Basics_ops['++'],
												'This will render ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(_elm_lang$virtual_dom$Main$testCount),
													' frames and measure the time between each animation frame. '))),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html$text('On each frame the next accordion is opened.'),
											_1: {ctor: '[]'}
										}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$button,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(_elm_lang$virtual_dom$Main$StartTest),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Run Test'),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$hr,
											{ctor: '[]'},
											{ctor: '[]'}),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _elm_lang$virtual_dom$Main$view = function (state) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('page'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(_elm_lang$html$Html_Lazy$lazy, _elm_lang$virtual_dom$Main$heading, 1),
			_1: {
				ctor: '::',
				_0: _elm_lang$virtual_dom$Main$renderSummary(state),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$h2,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Implementation: ',
									_elm_lang$virtual_dom$Main$implLabel(state.impl))),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$p,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(
									A2(
										_elm_lang$core$Basics_ops['++'],
										'Number of accordions: ',
										_elm_lang$core$Basics$toString(state.count))),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A3(
								_elm_lang$html$Html_Keyed$node,
								'div',
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$virtual_dom$Main$renderAccordions(state),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A3(
									_elm_lang$html$Html$node,
									'style',
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(_elm_lang$virtual_dom$Main$css),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			}
		});
};
var _elm_lang$virtual_dom$Main$Open = function (a) {
	return {ctor: 'Open', _0: a};
};
var _elm_lang$virtual_dom$Main$makeActions = function (count) {
	return A2(
		_elm_lang$core$List$map,
		function (i) {
			return {
				ctor: '_Tuple2',
				_0: i,
				_1: _elm_lang$virtual_dom$Main$Open(i)
			};
		},
		A2(_elm_lang$core$List$range, 0, count - 1));
};
var _elm_lang$virtual_dom$Main$init = _elm_lang$virtual_dom$Main$noCmd(
	{
		open: _elm_lang$core$Maybe$Nothing,
		impl: _elm_lang$virtual_dom$Main$Impl_HtmlCss,
		count: 64,
		actions: _elm_lang$virtual_dom$Main$makeActions(100),
		times: {ctor: '[]'},
		frameCount: 0,
		isRunning: false
	});
var _elm_lang$virtual_dom$Main$update = F2(
	function (msg, state) {
		var _p11 = msg;
		switch (_p11.ctor) {
			case 'Open':
				var _p13 = _p11._0;
				return _elm_lang$virtual_dom$Main$noCmd(
					_elm_lang$core$Native_Utils.update(
						state,
						{
							open: function () {
								var _p12 = state.open;
								if (_p12.ctor === 'Just') {
									return _elm_lang$core$Native_Utils.eq(_p12._0, _p13) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(_p13);
								} else {
									return _elm_lang$core$Maybe$Just(_p13);
								}
							}()
						}));
			case 'SetImpl':
				return _elm_lang$virtual_dom$Main$noCmd(
					_elm_lang$core$Native_Utils.update(
						state,
						{impl: _p11._0}));
			case 'SetCount':
				var _p14 = _p11._0;
				return _elm_lang$virtual_dom$Main$noCmd(
					_elm_lang$core$Native_Utils.update(
						state,
						{
							count: _p14,
							actions: _elm_lang$virtual_dom$Main$makeActions(_p14)
						}));
			case 'StartTest':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						state,
						{
							open: _elm_lang$core$Maybe$Nothing,
							times: {ctor: '[]'},
							isRunning: true,
							frameCount: 0
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				return _elm_lang$virtual_dom$Main$noCmd(
					_elm_lang$core$Native_Utils.update(
						state,
						{
							times: {ctor: '::', _0: _p11._0, _1: state.times},
							frameCount: state.frameCount + 1,
							isRunning: _elm_lang$core$Native_Utils.cmp(state.frameCount, _elm_lang$virtual_dom$Main$testCount) < 0,
							open: _elm_lang$core$Maybe$Just(
								A2(_elm_lang$core$Basics_ops['%'], state.frameCount, state.count))
						}));
		}
	});
var _elm_lang$virtual_dom$Main$main = _elm_lang$html$Html$program(
	{init: _elm_lang$virtual_dom$Main$init, update: _elm_lang$virtual_dom$Main$update, view: _elm_lang$virtual_dom$Main$view, subscriptions: _elm_lang$virtual_dom$Main$subscriptions})();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _elm_lang$virtual_dom$Main$main !== 'undefined') {
    _elm_lang$virtual_dom$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);


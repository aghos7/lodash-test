(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Hash(e){var h=-1,a=e?e.length:0;for(this.clear();++h<a;){var s=e[h];this.set(s[0],s[1])}}var hashClear=require("./_hashClear"),hashDelete=require("./_hashDelete"),hashGet=require("./_hashGet"),hashHas=require("./_hashHas"),hashSet=require("./_hashSet");Hash.prototype.clear=hashClear,Hash.prototype["delete"]=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,module.exports=Hash;

},{"./_hashClear":22,"./_hashDelete":23,"./_hashGet":24,"./_hashHas":25,"./_hashSet":26}],2:[function(require,module,exports){
function ListCache(e){var t=-1,a=e?e.length:0;for(this.clear();++t<a;){var s=e[t];this.set(s[0],s[1])}}var listCacheClear=require("./_listCacheClear"),listCacheDelete=require("./_listCacheDelete"),listCacheGet=require("./_listCacheGet"),listCacheHas=require("./_listCacheHas"),listCacheSet=require("./_listCacheSet");ListCache.prototype.clear=listCacheClear,ListCache.prototype["delete"]=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,module.exports=ListCache;

},{"./_listCacheClear":31,"./_listCacheDelete":32,"./_listCacheGet":33,"./_listCacheHas":34,"./_listCacheSet":35}],3:[function(require,module,exports){
var getNative=require("./_getNative"),root=require("./_root"),Map=getNative(root,"Map");module.exports=Map;

},{"./_getNative":21,"./_root":42}],4:[function(require,module,exports){
function MapCache(e){var a=-1,p=e?e.length:0;for(this.clear();++a<p;){var t=e[a];this.set(t[0],t[1])}}var mapCacheClear=require("./_mapCacheClear"),mapCacheDelete=require("./_mapCacheDelete"),mapCacheGet=require("./_mapCacheGet"),mapCacheHas=require("./_mapCacheHas"),mapCacheSet=require("./_mapCacheSet");MapCache.prototype.clear=mapCacheClear,MapCache.prototype["delete"]=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet,module.exports=MapCache;

},{"./_mapCacheClear":36,"./_mapCacheDelete":37,"./_mapCacheGet":38,"./_mapCacheHas":39,"./_mapCacheSet":40}],5:[function(require,module,exports){
var getNative=require("./_getNative"),root=require("./_root"),Set=getNative(root,"Set");module.exports=Set;

},{"./_getNative":21,"./_root":42}],6:[function(require,module,exports){
function SetCache(e){var a=-1,t=e?e.length:0;for(this.__data__=new MapCache;++a<t;)this.add(e[a])}var MapCache=require("./_MapCache"),setCacheAdd=require("./_setCacheAdd"),setCacheHas=require("./_setCacheHas");SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas,module.exports=SetCache;

},{"./_MapCache":4,"./_setCacheAdd":43,"./_setCacheHas":44}],7:[function(require,module,exports){
function apply(l,a,e){var r=e.length;switch(r){case 0:return l.call(a);case 1:return l.call(a,e[0]);case 2:return l.call(a,e[0],e[1]);case 3:return l.call(a,e[0],e[1],e[2])}return l.apply(a,e)}module.exports=apply;

},{}],8:[function(require,module,exports){
function arrayIncludes(e,r){return!!e.length&&baseIndexOf(e,r,0)>-1}var baseIndexOf=require("./_baseIndexOf");module.exports=arrayIncludes;

},{"./_baseIndexOf":13}],9:[function(require,module,exports){
function arrayIncludesWith(r,e,n){for(var t=-1,u=r.length;++t<u;)if(n(e,r[t]))return!0;return!1}module.exports=arrayIncludesWith;

},{}],10:[function(require,module,exports){
function arrayPush(r,a){for(var e=-1,n=a.length,t=r.length;++e<n;)r[t+e]=a[e];return r}module.exports=arrayPush;

},{}],11:[function(require,module,exports){
function assocIndexOf(e,r){for(var n=e.length;n--;)if(eq(e[n][0],r))return n;return-1}var eq=require("./eq");module.exports=assocIndexOf;

},{"./eq":47}],12:[function(require,module,exports){
function baseFlatten(a,e,r,t,l){var n=-1,s=a.length;for(r||(r=isFlattenable),l||(l=[]);++n<s;){var u=a[n];e>0&&r(u)?e>1?baseFlatten(u,e-1,r,t,l):arrayPush(l,u):t||(l[l.length]=u)}return l}var arrayPush=require("./_arrayPush"),isFlattenable=require("./_isFlattenable");module.exports=baseFlatten;

},{"./_arrayPush":10,"./_isFlattenable":28}],13:[function(require,module,exports){
function baseIndexOf(e,r,n){if(r!==r)return indexOfNaN(e,n);for(var f=n-1,a=e.length;++f<a;)if(e[f]===r)return f;return-1}var indexOfNaN=require("./_indexOfNaN");module.exports=baseIndexOf;

},{"./_indexOfNaN":27}],14:[function(require,module,exports){
function baseProperty(r){return function(e){return null==e?void 0:e[r]}}module.exports=baseProperty;

},{}],15:[function(require,module,exports){
function baseUniq(e,r,a){var s=-1,t=arrayIncludes,u=e.length,c=!0,i=[],n=i;if(a)c=!1,t=arrayIncludesWith;else if(u>=LARGE_ARRAY_SIZE){var h=r?null:createSet(e);if(h)return setToArray(h);c=!1,t=cacheHas,n=new SetCache}else n=r?[]:i;e:for(;++s<u;){var l=e[s],_=r?r(l):l;if(l=a||0!==l?l:0,c&&_===_){for(var o=n.length;o--;)if(n[o]===_)continue e;r&&n.push(_),i.push(l)}else t(n,_,a)||(n!==i&&n.push(_),i.push(l))}return i}var SetCache=require("./_SetCache"),arrayIncludes=require("./_arrayIncludes"),arrayIncludesWith=require("./_arrayIncludesWith"),cacheHas=require("./_cacheHas"),createSet=require("./_createSet"),setToArray=require("./_setToArray"),LARGE_ARRAY_SIZE=200;module.exports=baseUniq;

},{"./_SetCache":6,"./_arrayIncludes":8,"./_arrayIncludesWith":9,"./_cacheHas":16,"./_createSet":18,"./_setToArray":45}],16:[function(require,module,exports){
function cacheHas(a,c){return a.has(c)}module.exports=cacheHas;

},{}],17:[function(require,module,exports){
function checkGlobal(c){return c&&c.Object===Object?c:null}module.exports=checkGlobal;

},{}],18:[function(require,module,exports){
var Set=require("./_Set"),noop=require("./noop"),setToArray=require("./_setToArray"),INFINITY=1/0,createSet=Set&&1/setToArray(new Set([,-0]))[1]==INFINITY?function(e){return new Set(e)}:noop;module.exports=createSet;

},{"./_Set":5,"./_setToArray":45,"./noop":58}],19:[function(require,module,exports){
var baseProperty=require("./_baseProperty"),getLength=baseProperty("length");module.exports=getLength;

},{"./_baseProperty":14}],20:[function(require,module,exports){
function getMapData(a,e){var t=a.__data__;return isKeyable(e)?t["string"==typeof e?"string":"hash"]:t.map}var isKeyable=require("./_isKeyable");module.exports=getMapData;

},{"./_isKeyable":30}],21:[function(require,module,exports){
function getNative(e,i){var t=e[i];return isNative(t)?t:void 0}var isNative=require("./isNative");module.exports=getNative;

},{"./isNative":54}],22:[function(require,module,exports){
function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{}}var nativeCreate=require("./_nativeCreate");module.exports=hashClear;

},{"./_nativeCreate":41}],23:[function(require,module,exports){
function hashDelete(e){return this.has(e)&&delete this.__data__[e]}module.exports=hashDelete;

},{}],24:[function(require,module,exports){
function hashGet(e){var t=this.__data__;if(nativeCreate){var r=t[e];return r===HASH_UNDEFINED?void 0:r}return hasOwnProperty.call(t,e)?t[e]:void 0}var nativeCreate=require("./_nativeCreate"),HASH_UNDEFINED="__lodash_hash_undefined__",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=hashGet;

},{"./_nativeCreate":41}],25:[function(require,module,exports){
function hashHas(e){var t=this.__data__;return nativeCreate?void 0!==t[e]:hasOwnProperty.call(t,e)}var nativeCreate=require("./_nativeCreate"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=hashHas;

},{"./_nativeCreate":41}],26:[function(require,module,exports){
function hashSet(e,a){var t=this.__data__;return t[e]=nativeCreate&&void 0===a?HASH_UNDEFINED:a,this}var nativeCreate=require("./_nativeCreate"),HASH_UNDEFINED="__lodash_hash_undefined__";module.exports=hashSet;

},{"./_nativeCreate":41}],27:[function(require,module,exports){
function indexOfNaN(r,e,n){for(var f=r.length,t=e+(n?0:-1);n?t--:++t<f;){var a=r[t];if(a!==a)return t}return-1}module.exports=indexOfNaN;

},{}],28:[function(require,module,exports){
function isFlattenable(r){return isArray(r)||isArguments(r)}var isArguments=require("./isArguments"),isArray=require("./isArray");module.exports=isFlattenable;

},{"./isArguments":48,"./isArray":49}],29:[function(require,module,exports){
function isHostObject(t){var o=!1;if(null!=t&&"function"!=typeof t.toString)try{o=!!(t+"")}catch(n){}return o}module.exports=isHostObject;

},{}],30:[function(require,module,exports){
function isKeyable(e){var o=typeof e;return"string"==o||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==e:null===e}module.exports=isKeyable;

},{}],31:[function(require,module,exports){
function listCacheClear(){this.__data__=[]}module.exports=listCacheClear;

},{}],32:[function(require,module,exports){
function listCacheDelete(e){var r=this.__data__,a=assocIndexOf(r,e);if(0>a)return!1;var t=r.length-1;return a==t?r.pop():splice.call(r,a,1),!0}var assocIndexOf=require("./_assocIndexOf"),arrayProto=Array.prototype,splice=arrayProto.splice;module.exports=listCacheDelete;

},{"./_assocIndexOf":11}],33:[function(require,module,exports){
function listCacheGet(e){var s=this.__data__,a=assocIndexOf(s,e);return 0>a?void 0:s[a][1]}var assocIndexOf=require("./_assocIndexOf");module.exports=listCacheGet;

},{"./_assocIndexOf":11}],34:[function(require,module,exports){
function listCacheHas(s){return assocIndexOf(this.__data__,s)>-1}var assocIndexOf=require("./_assocIndexOf");module.exports=listCacheHas;

},{"./_assocIndexOf":11}],35:[function(require,module,exports){
function listCacheSet(e,s){var t=this.__data__,a=assocIndexOf(t,e);return 0>a?t.push([e,s]):t[a][1]=s,this}var assocIndexOf=require("./_assocIndexOf");module.exports=listCacheSet;

},{"./_assocIndexOf":11}],36:[function(require,module,exports){
function mapCacheClear(){this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}var Hash=require("./_Hash"),ListCache=require("./_ListCache"),Map=require("./_Map");module.exports=mapCacheClear;

},{"./_Hash":1,"./_ListCache":2,"./_Map":3}],37:[function(require,module,exports){
function mapCacheDelete(e){return getMapData(this,e)["delete"](e)}var getMapData=require("./_getMapData");module.exports=mapCacheDelete;

},{"./_getMapData":20}],38:[function(require,module,exports){
function mapCacheGet(a){return getMapData(this,a).get(a)}var getMapData=require("./_getMapData");module.exports=mapCacheGet;

},{"./_getMapData":20}],39:[function(require,module,exports){
function mapCacheHas(a){return getMapData(this,a).has(a)}var getMapData=require("./_getMapData");module.exports=mapCacheHas;

},{"./_getMapData":20}],40:[function(require,module,exports){
function mapCacheSet(a,t){return getMapData(this,a).set(a,t),this}var getMapData=require("./_getMapData");module.exports=mapCacheSet;

},{"./_getMapData":20}],41:[function(require,module,exports){
var getNative=require("./_getNative"),nativeCreate=getNative(Object,"create");module.exports=nativeCreate;

},{"./_getNative":21}],42:[function(require,module,exports){
(function (global){
var checkGlobal=require("./_checkGlobal"),objectTypes={"function":!0,object:!0},freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType?exports:void 0,freeModule=objectTypes[typeof module]&&module&&!module.nodeType?module:void 0,freeGlobal=checkGlobal(freeExports&&freeModule&&"object"==typeof global&&global),freeSelf=checkGlobal(objectTypes[typeof self]&&self),freeWindow=checkGlobal(objectTypes[typeof window]&&window),thisGlobal=checkGlobal(objectTypes[typeof this]&&this),root=freeGlobal||freeWindow!==(thisGlobal&&thisGlobal.window)&&freeWindow||freeSelf||thisGlobal||Function("return this")();module.exports=root;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./_checkGlobal":17}],43:[function(require,module,exports){
function setCacheAdd(_){return this.__data__.set(_,HASH_UNDEFINED),this}var HASH_UNDEFINED="__lodash_hash_undefined__";module.exports=setCacheAdd;

},{}],44:[function(require,module,exports){
function setCacheHas(a){return this.__data__.has(a)}module.exports=setCacheHas;

},{}],45:[function(require,module,exports){
function setToArray(r){var o=-1,e=Array(r.size);return r.forEach(function(r){e[++o]=r}),e}module.exports=setToArray;

},{}],46:[function(require,module,exports){
function toSource(t){if(null!=t){try{return funcToString.call(t)}catch(r){}try{return t+""}catch(r){}}return""}var funcToString=Function.prototype.toString;module.exports=toSource;

},{}],47:[function(require,module,exports){
function eq(e,n){return e===n||e!==e&&n!==n}module.exports=eq;

},{}],48:[function(require,module,exports){
function isArguments(r){return isArrayLikeObject(r)&&hasOwnProperty.call(r,"callee")&&(!propertyIsEnumerable.call(r,"callee")||objectToString.call(r)==argsTag)}var isArrayLikeObject=require("./isArrayLikeObject"),argsTag="[object Arguments]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,propertyIsEnumerable=objectProto.propertyIsEnumerable;module.exports=isArguments;

},{"./isArrayLikeObject":51}],49:[function(require,module,exports){
var isArray=Array.isArray;module.exports=isArray;

},{}],50:[function(require,module,exports){
function isArrayLike(e){return null!=e&&isLength(getLength(e))&&!isFunction(e)}var getLength=require("./_getLength"),isFunction=require("./isFunction"),isLength=require("./isLength");module.exports=isArrayLike;

},{"./_getLength":19,"./isFunction":52,"./isLength":53}],51:[function(require,module,exports){
function isArrayLikeObject(e){return isObjectLike(e)&&isArrayLike(e)}var isArrayLike=require("./isArrayLike"),isObjectLike=require("./isObjectLike");module.exports=isArrayLikeObject;

},{"./isArrayLike":50,"./isObjectLike":56}],52:[function(require,module,exports){
function isFunction(t){var o=isObject(t)?objectToString.call(t):"";return o==funcTag||o==genTag}var isObject=require("./isObject"),funcTag="[object Function]",genTag="[object GeneratorFunction]",objectProto=Object.prototype,objectToString=objectProto.toString;module.exports=isFunction;

},{"./isObject":55}],53:[function(require,module,exports){
function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&MAX_SAFE_INTEGER>=e}var MAX_SAFE_INTEGER=9007199254740991;module.exports=isLength;

},{}],54:[function(require,module,exports){
function isNative(t){if(!isObject(t))return!1;var e=isFunction(t)||isHostObject(t)?reIsNative:reIsHostCtor;return e.test(toSource(t))}var isFunction=require("./isFunction"),isHostObject=require("./_isHostObject"),isObject=require("./isObject"),toSource=require("./_toSource"),reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,objectProto=Object.prototype,funcToString=Function.prototype.toString,hasOwnProperty=objectProto.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");module.exports=isNative;

},{"./_isHostObject":29,"./_toSource":46,"./isFunction":52,"./isObject":55}],55:[function(require,module,exports){
function isObject(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}module.exports=isObject;

},{}],56:[function(require,module,exports){
function isObjectLike(e){return!!e&&"object"==typeof e}module.exports=isObjectLike;

},{}],57:[function(require,module,exports){
function isSymbol(o){return"symbol"==typeof o||isObjectLike(o)&&objectToString.call(o)==symbolTag}var isObjectLike=require("./isObjectLike"),symbolTag="[object Symbol]",objectProto=Object.prototype,objectToString=objectProto.toString;module.exports=isSymbol;

},{"./isObjectLike":56}],58:[function(require,module,exports){
function noop(){}module.exports=noop;

},{}],59:[function(require,module,exports){
function rest(r,e){if("function"!=typeof r)throw new TypeError(FUNC_ERROR_TEXT);return e=nativeMax(void 0===e?r.length-1:toInteger(e),0),function(){for(var t=arguments,a=-1,n=nativeMax(t.length-e,0),i=Array(n);++a<n;)i[a]=t[e+a];switch(e){case 0:return r.call(this,i);case 1:return r.call(this,t[0],i);case 2:return r.call(this,t[0],t[1],i)}var o=Array(e+1);for(a=-1;++a<e;)o[a]=t[a];return o[e]=i,apply(r,this,o)}}var apply=require("./_apply"),toInteger=require("./toInteger"),FUNC_ERROR_TEXT="Expected a function",nativeMax=Math.max;module.exports=rest;

},{"./_apply":7,"./toInteger":61}],60:[function(require,module,exports){
function toFinite(r){if(!r)return 0===r?r:0;if(r=toNumber(r),r===INFINITY||r===-INFINITY){var e=0>r?-1:1;return e*MAX_INTEGER}return r===r?r:0}var toNumber=require("./toNumber"),INFINITY=1/0,MAX_INTEGER=1.7976931348623157e308;module.exports=toFinite;

},{"./toNumber":62}],61:[function(require,module,exports){
function toInteger(t){var e=toFinite(t),r=e%1;return e===e?r?e-r:e:0}var toFinite=require("./toFinite");module.exports=toInteger;

},{"./toFinite":60}],62:[function(require,module,exports){
function toNumber(e){if("number"==typeof e)return e;if(isSymbol(e))return NAN;if(isObject(e)){var r=isFunction(e.valueOf)?e.valueOf():e;e=isObject(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var i=reIsBinary.test(e);return i||reIsOctal.test(e)?freeParseInt(e.slice(2),i?2:8):reIsBadHex.test(e)?NAN:+e}var isFunction=require("./isFunction"),isObject=require("./isObject"),isSymbol=require("./isSymbol"),NAN=NaN,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=toNumber;

},{"./isFunction":52,"./isObject":55,"./isSymbol":57}],63:[function(require,module,exports){
var baseFlatten=require("./_baseFlatten"),baseUniq=require("./_baseUniq"),isArrayLikeObject=require("./isArrayLikeObject"),rest=require("./rest"),union=rest(function(e){return baseUniq(baseFlatten(e,1,isArrayLikeObject,!0))});module.exports=union;

},{"./_baseFlatten":12,"./_baseUniq":15,"./isArrayLikeObject":51,"./rest":59}],64:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _union2=require("lodash/union"),_union3=_interopRequireDefault(_union2),foo=[1,2,3,4,5],bar=[2,3,4,9,10],cats=[{name:"domino",size:"medium"},{name:"lily",size:"big"},{name:"jones",size:"big"},{name:"felix",size:"small"},{name:"bob",size:"xl"}];(0,_union3["default"])(foo,bar);

},{"lodash/union":63}]},{},[64]);

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-tree/dist/csstree.min.js":
/*!*******************************************************!*\
  !*** ../../node_modules/css-tree/dist/csstree.min.js ***!
  \*******************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";function e(e){return{prev:null,next:null,data:e}}function t(e,t,n){var i;return null!==r?(i=r,r=r.cursor,i.prev=t,i.next=n,i.cursor=e.cursor):i={prev:t,next:n,cursor:e.cursor},e.cursor=i,i}function n(e){var t=e.cursor;e.cursor=t.cursor,t.prev=null,t.next=null,t.cursor=r,r=t}var r=null,i=function(){this.cursor=null,this.head=null,this.tail=null};i.createItem=e,i.prototype.createItem=e,i.prototype.updateCursors=function(e,t,n,r){for(var i=this.cursor;null!==i;)i.prev===e&&(i.prev=t),i.next===n&&(i.next=r),i=i.cursor},i.prototype.getSize=function(){for(var e=0,t=this.head;t;)e++,t=t.next;return e},i.prototype.fromArray=function(t){var n=null;this.head=null;for(var r=0;r<t.length;r++){var i=e(t[r]);null!==n?n.next=i:this.head=i,i.prev=n,n=i}return this.tail=n,this},i.prototype.toArray=function(){for(var e=this.head,t=[];e;)t.push(e.data),e=e.next;return t},i.prototype.toJSON=i.prototype.toArray,i.prototype.isEmpty=function(){return null===this.head},i.prototype.first=function(){return this.head&&this.head.data},i.prototype.last=function(){return this.tail&&this.tail.data},i.prototype.each=function(e,r){var i;void 0===r&&(r=this);for(var a=t(this,null,this.head);null!==a.next;)i=a.next,a.next=i.next,e.call(r,i.data,i,this);n(this)},i.prototype.forEach=i.prototype.each,i.prototype.eachRight=function(e,r){var i;void 0===r&&(r=this);for(var a=t(this,this.tail,null);null!==a.prev;)i=a.prev,a.prev=i.prev,e.call(r,i.data,i,this);n(this)},i.prototype.forEachRight=i.prototype.eachRight,i.prototype.reduce=function(e,r,i){var a;void 0===i&&(i=this);for(var o=t(this,null,this.head),s=r;null!==o.next;)a=o.next,o.next=a.next,s=e.call(i,s,a.data,a,this);return n(this),s},i.prototype.reduceRight=function(e,r,i){var a;void 0===i&&(i=this);for(var o=t(this,this.tail,null),s=r;null!==o.prev;)a=o.prev,o.prev=a.prev,s=e.call(i,s,a.data,a,this);return n(this),s},i.prototype.nextUntil=function(e,r,i){if(null!==e){var a;void 0===i&&(i=this);for(var o=t(this,null,e);null!==o.next&&(a=o.next,o.next=a.next,!r.call(i,a.data,a,this)););n(this)}},i.prototype.prevUntil=function(e,r,i){if(null!==e){var a;void 0===i&&(i=this);for(var o=t(this,e,null);null!==o.prev&&(a=o.prev,o.prev=a.prev,!r.call(i,a.data,a,this)););n(this)}},i.prototype.some=function(e,t){var n=this.head;for(void 0===t&&(t=this);null!==n;){if(e.call(t,n.data,n,this))return!0;n=n.next}return!1},i.prototype.map=function(e,t){var n=new i,r=this.head;for(void 0===t&&(t=this);null!==r;)n.appendData(e.call(t,r.data,r,this)),r=r.next;return n},i.prototype.filter=function(e,t){var n=new i,r=this.head;for(void 0===t&&(t=this);null!==r;)e.call(t,r.data,r,this)&&n.appendData(r.data),r=r.next;return n},i.prototype.clear=function(){this.head=null,this.tail=null},i.prototype.copy=function(){for(var t=new i,n=this.head;null!==n;)t.insert(e(n.data)),n=n.next;return t},i.prototype.prepend=function(e){return this.updateCursors(null,e,this.head,e),null!==this.head?(this.head.prev=e,e.next=this.head):this.tail=e,this.head=e,this},i.prototype.prependData=function(t){return this.prepend(e(t))},i.prototype.append=function(e){return this.insert(e)},i.prototype.appendData=function(t){return this.insert(e(t))},i.prototype.insert=function(e,t){if(null!=t)if(this.updateCursors(t.prev,e,t,e),null===t.prev){if(this.head!==t)throw new Error("before doesn't belong to list");this.head=e,t.prev=e,e.next=t,this.updateCursors(null,e)}else t.prev.next=e,e.prev=t.prev,t.prev=e,e.next=t;else this.updateCursors(this.tail,e,null,e),null!==this.tail?(this.tail.next=e,e.prev=this.tail):this.head=e,this.tail=e;return this},i.prototype.insertData=function(t,n){return this.insert(e(t),n)},i.prototype.remove=function(e){if(this.updateCursors(e,e.prev,e,e.next),null!==e.prev)e.prev.next=e.next;else{if(this.head!==e)throw new Error("item doesn't belong to list");this.head=e.next}if(null!==e.next)e.next.prev=e.prev;else{if(this.tail!==e)throw new Error("item doesn't belong to list");this.tail=e.prev}return e.prev=null,e.next=null,e},i.prototype.push=function(t){this.insert(e(t))},i.prototype.pop=function(){if(null!==this.tail)return this.remove(this.tail)},i.prototype.unshift=function(t){this.prepend(e(t))},i.prototype.shift=function(){if(null!==this.head)return this.remove(this.head)},i.prototype.prependList=function(e){return this.insertList(e,this.head)},i.prototype.appendList=function(e){return this.insertList(e)},i.prototype.insertList=function(e,t){return null===e.head||(null!=t?(this.updateCursors(t.prev,e.tail,t,e.head),null!==t.prev?(t.prev.next=e.head,e.head.prev=t.prev):this.head=e.head,t.prev=e.tail,e.tail.next=t):(this.updateCursors(this.tail,e.tail,null,e.head),null!==this.tail?(this.tail.next=e.head,e.head.prev=this.tail):this.head=e.head,this.tail=e.tail),e.head=null,e.tail=null),this},i.prototype.replace=function(e,t){"head"in t?this.insertList(t,e):this.insert(t,e),this.remove(e)};var a=i,o=function(e,t){var n=Object.create(SyntaxError.prototype),r=new Error;return n.name=e,n.message=t,Object.defineProperty(n,"stack",{get:function(){return(r.stack||"").replace(/^(.+\n){1,3}/,e+": "+t+"\n")}}),n};function s(e,t){function n(e,t){return r.slice(e,t).map((function(t,n){for(var r=String(e+n+1);r.length<l;)r=" "+r;return r+" |"+t})).join("\n")}var r=e.source.split(/\r\n?|\n|\f/),i=e.line,a=e.column,o=Math.max(1,i-t)-1,s=Math.min(i+t,r.length+1),l=Math.max(4,String(s).length)+1,c=0;(a+=("    ".length-1)*(r[i-1].substr(0,a-1).match(/\t/g)||[]).length)>100&&(c=a-60+3,a=58);for(var u=o;u<=s;u++)u>=0&&u<r.length&&(r[u]=r[u].replace(/\t/g,"    "),r[u]=(c>0&&r[u].length>c?"…":"")+r[u].substr(c,98)+(r[u].length>c+100-1?"…":""));return[n(o,i),new Array(a+l+2).join("-")+"^",n(i,s)].filter(Boolean).join("\n")}var l=function(e,t,n,r,i){var a=o("SyntaxError",e);return a.source=t,a.offset=n,a.line=r,a.column=i,a.sourceFragment=function(e){return s(a,isNaN(e)?0:e)},Object.defineProperty(a,"formattedMessage",{get:function(){return"Parse error: "+a.message+"\n"+s(a,2)}}),a.parseError={offset:n,line:r,column:i},a},c={EOF:0,Ident:1,Function:2,AtKeyword:3,Hash:4,String:5,BadString:6,Url:7,BadUrl:8,Delim:9,Number:10,Percentage:11,Dimension:12,WhiteSpace:13,CDO:14,CDC:15,Colon:16,Semicolon:17,Comma:18,LeftSquareBracket:19,RightSquareBracket:20,LeftParenthesis:21,RightParenthesis:22,LeftCurlyBracket:23,RightCurlyBracket:24,Comment:25},u=Object.keys(c).reduce((function(e,t){return e[c[t]]=t,e}),{}),h={TYPE:c,NAME:u};function p(e){return e>=48&&e<=57}function d(e){return e>=65&&e<=90}function m(e){return e>=97&&e<=122}function g(e){return d(e)||m(e)}function f(e){return e>=128}function b(e){return g(e)||f(e)||95===e}function y(e){return e>=0&&e<=8||11===e||e>=14&&e<=31||127===e}function k(e){return 10===e||13===e||12===e}function v(e){return k(e)||32===e||9===e}function x(e,t){return 92===e&&(!k(t)&&0!==t)}var w=new Array(128);C.Eof=128,C.WhiteSpace=130,C.Digit=131,C.NameStart=132,C.NonPrintable=133;for(var S=0;S<w.length;S++)switch(!0){case v(S):w[S]=C.WhiteSpace;break;case p(S):w[S]=C.Digit;break;case b(S):w[S]=C.NameStart;break;case y(S):w[S]=C.NonPrintable;break;default:w[S]=S||C.Eof}function C(e){return e<128?w[e]:C.NameStart}var z={isDigit:p,isHexDigit:function(e){return p(e)||e>=65&&e<=70||e>=97&&e<=102},isUppercaseLetter:d,isLowercaseLetter:m,isLetter:g,isNonAscii:f,isNameStart:b,isName:function(e){return b(e)||p(e)||45===e},isNonPrintable:y,isNewline:k,isWhiteSpace:v,isValidEscape:x,isIdentifierStart:function(e,t,n){return 45===e?b(t)||45===t||x(t,n):!!b(e)||92===e&&x(e,t)},isNumberStart:function(e,t,n){return 43===e||45===e?p(t)?2:46===t&&p(n)?3:0:46===e?p(t)?2:0:p(e)?1:0},isBOM:function(e){return 65279===e||65534===e?1:0},charCodeCategory:C},A=z.isDigit,P=z.isHexDigit,T=z.isUppercaseLetter,L=z.isName,E=z.isWhiteSpace,D=z.isValidEscape;function O(e,t){return t<e.length?e.charCodeAt(t):0}function B(e,t,n){return 13===n&&10===O(e,t+1)?2:1}function I(e,t,n){var r=e.charCodeAt(t);return T(r)&&(r|=32),r===n}function N(e,t){for(;t<e.length&&A(e.charCodeAt(t));t++);return t}function R(e,t){if(P(O(e,(t+=2)-1))){for(var n=Math.min(e.length,t+5);t<n&&P(O(e,t));t++);var r=O(e,t);E(r)&&(t+=B(e,t,r))}return t}var M={consumeEscaped:R,consumeName:function(e,t){for(;t<e.length;t++){var n=e.charCodeAt(t);if(!L(n)){if(!D(n,O(e,t+1)))break;t=R(e,t)-1}}return t},consumeNumber:function(e,t){var n=e.charCodeAt(t);if(43!==n&&45!==n||(n=e.charCodeAt(t+=1)),A(n)&&(t=N(e,t+1),n=e.charCodeAt(t)),46===n&&A(e.charCodeAt(t+1))&&(n=e.charCodeAt(t+=2),t=N(e,t)),I(e,t,101)){var r=0;45!==(n=e.charCodeAt(t+1))&&43!==n||(r=1,n=e.charCodeAt(t+2)),A(n)&&(t=N(e,t+1+r+1))}return t},consumeBadUrlRemnants:function(e,t){for(;t<e.length;t++){var n=e.charCodeAt(t);if(41===n){t++;break}D(n,O(e,t+1))&&(t=R(e,t))}return t},cmpChar:I,cmpStr:function(e,t,n,r){if(n-t!==r.length)return!1;if(t<0||n>e.length)return!1;for(var i=t;i<n;i++){var a=e.charCodeAt(i),o=r.charCodeAt(i-t);if(T(a)&&(a|=32),a!==o)return!1}return!0},getNewlineLength:B,findWhiteSpaceStart:function(e,t){for(;t>=0&&E(e.charCodeAt(t));t--);return t+1},findWhiteSpaceEnd:function(e,t){for(;t<e.length&&E(e.charCodeAt(t));t++);return t}},j=h.TYPE,_=h.NAME,F=M.cmpStr,W=j.EOF,q=j.WhiteSpace,Y=j.Comment,U=function(){this.offsetAndType=null,this.balance=null,this.reset()};U.prototype={reset:function(){this.eof=!1,this.tokenIndex=-1,this.tokenType=0,this.tokenStart=this.firstCharOffset,this.tokenEnd=this.firstCharOffset},lookupType:function(e){return(e+=this.tokenIndex)<this.tokenCount?this.offsetAndType[e]>>24:W},lookupOffset:function(e){return(e+=this.tokenIndex)<this.tokenCount?16777215&this.offsetAndType[e-1]:this.source.length},lookupValue:function(e,t){return(e+=this.tokenIndex)<this.tokenCount&&F(this.source,16777215&this.offsetAndType[e-1],16777215&this.offsetAndType[e],t)},getTokenStart:function(e){return e===this.tokenIndex?this.tokenStart:e>0?e<this.tokenCount?16777215&this.offsetAndType[e-1]:16777215&this.offsetAndType[this.tokenCount]:this.firstCharOffset},getRawLength:function(e,t){var n,r=e,i=16777215&this.offsetAndType[Math.max(r-1,0)];e:for(;r<this.tokenCount&&!((n=this.balance[r])<e);r++)switch(t(this.offsetAndType[r]>>24,this.source,i)){case 1:break e;case 2:r++;break e;default:i=16777215&this.offsetAndType[r],this.balance[n]===r&&(r=n)}return r-this.tokenIndex},isBalanceEdge:function(e){return this.balance[this.tokenIndex]<e},isDelim:function(e,t){return t?this.lookupType(t)===j.Delim&&this.source.charCodeAt(this.lookupOffset(t))===e:this.tokenType===j.Delim&&this.source.charCodeAt(this.tokenStart)===e},getTokenValue:function(){return this.source.substring(this.tokenStart,this.tokenEnd)},getTokenLength:function(){return this.tokenEnd-this.tokenStart},substrToCursor:function(e){return this.source.substring(e,this.tokenStart)},skipWS:function(){for(var e=this.tokenIndex,t=0;e<this.tokenCount&&this.offsetAndType[e]>>24===q;e++,t++);t>0&&this.skip(t)},skipSC:function(){for(;this.tokenType===q||this.tokenType===Y;)this.next()},skip:function(e){var t=this.tokenIndex+e;t<this.tokenCount?(this.tokenIndex=t,this.tokenStart=16777215&this.offsetAndType[t-1],t=this.offsetAndType[t],this.tokenType=t>>24,this.tokenEnd=16777215&t):(this.tokenIndex=this.tokenCount,this.next())},next:function(){var e=this.tokenIndex+1;e<this.tokenCount?(this.tokenIndex=e,this.tokenStart=this.tokenEnd,e=this.offsetAndType[e],this.tokenType=e>>24,this.tokenEnd=16777215&e):(this.tokenIndex=this.tokenCount,this.eof=!0,this.tokenType=W,this.tokenStart=this.tokenEnd=this.source.length)},forEachToken(e){for(var t=0,n=this.firstCharOffset;t<this.tokenCount;t++){var r=n,i=this.offsetAndType[t],a=16777215&i;n=a,e(i>>24,r,a,t)}},dump(){var e=new Array(this.tokenCount);return this.forEachToken((t,n,r,i)=>{e[i]={idx:i,type:_[t],chunk:this.source.substring(n,r),balance:this.balance[i]}}),e}};var H=U;function V(e){return e}function K(e,t,n,r){var i,a;switch(e.type){case"Group":i=function(e,t,n,r){var i=" "===e.combinator||r?e.combinator:" "+e.combinator+" ",a=e.terms.map((function(e){return K(e,t,n,r)})).join(i);return(e.explicit||n)&&(a=(r||","===a[0]?"[":"[ ")+a+(r?"]":" ]")),a}(e,t,n,r)+(e.disallowEmpty?"!":"");break;case"Multiplier":return K(e.term,t,n,r)+t(0===(a=e).min&&0===a.max?"*":0===a.min&&1===a.max?"?":1===a.min&&0===a.max?a.comma?"#":"+":1===a.min&&1===a.max?"":(a.comma?"#":"")+(a.min===a.max?"{"+a.min+"}":"{"+a.min+","+(0!==a.max?a.max:"")+"}"),e);case"Type":i="<"+e.name+(e.opts?t(function(e){switch(e.type){case"Range":return" ["+(null===e.min?"-∞":e.min)+","+(null===e.max?"∞":e.max)+"]";default:throw new Error("Unknown node type `"+e.type+"`")}}(e.opts),e.opts):"")+">";break;case"Property":i="<'"+e.name+"'>";break;case"Keyword":i=e.name;break;case"AtKeyword":i="@"+e.name;break;case"Function":i=e.name+"(";break;case"String":case"Token":i=e.value;break;case"Comma":i=",";break;default:throw new Error("Unknown node type `"+e.type+"`")}return t(i,e)}var G=function(e,t){var n=V,r=!1,i=!1;return"function"==typeof t?n=t:t&&(r=Boolean(t.forceBraces),i=Boolean(t.compact),"function"==typeof t.decorate&&(n=t.decorate)),K(e,n,r,i)};const Q={offset:0,line:1,column:1};function X(e,t){const n=e&&e.loc&&e.loc[t];return n?"line"in n?Z(n):n:null}function Z({offset:e,line:t,column:n},r){const i={offset:e,line:t,column:n};if(r){const e=r.split(/\n|\r\n?|\f/);i.offset+=r.length,i.line+=e.length-1,i.column=1===e.length?i.column+r.length:e.pop().length+1}return i}var $=function(e,t){const n=o("SyntaxReferenceError",e+(t?" `"+t+"`":""));return n.reference=t,n},J=function(e,t,n,r){const i=o("SyntaxMatchError",e),{css:a,mismatchOffset:s,mismatchLength:l,start:c,end:u}=function(e,t){const n=e.tokens,r=e.longestMatch,i=r<n.length&&n[r].node||null,a=i!==t?i:null;let o,s,l=0,c=0,u=0,h="";for(let e=0;e<n.length;e++){const t=n[e].value;e===r&&(c=t.length,l=h.length),null!==a&&n[e].node===a&&(e<=r?u++:u=0),h+=t}return r===n.length||u>1?(o=X(a||t,"end")||Z(Q,h),s=Z(o)):(o=X(a,"start")||Z(X(t,"start")||Q,h.slice(0,l)),s=X(a,"end")||Z(o,h.substr(l,c))),{css:h,mismatchOffset:l,mismatchLength:c,start:o,end:s}}(r,n);return i.rawMessage=e,i.syntax=t?G(t):"<generic>",i.css=a,i.mismatchOffset=s,i.mismatchLength=l,i.message=e+"\n  syntax: "+i.syntax+"\n   value: "+(a||"<empty string>")+"\n  --------"+new Array(i.mismatchOffset+1).join("-")+"^",Object.assign(i,c),i.loc={source:n&&n.loc&&n.loc.source||"<unknown>",start:c,end:u},i},ee=Object.prototype.hasOwnProperty,te=Object.create(null),ne=Object.create(null);function re(e,t){return t=t||0,e.length-t>=2&&45===e.charCodeAt(t)&&45===e.charCodeAt(t+1)}function ie(e,t){if(t=t||0,e.length-t>=3&&45===e.charCodeAt(t)&&45!==e.charCodeAt(t+1)){var n=e.indexOf("-",t+2);if(-1!==n)return e.substring(t,n+1)}return""}var ae={keyword:function(e){if(ee.call(te,e))return te[e];var t=e.toLowerCase();if(ee.call(te,t))return te[e]=te[t];var n=re(t,0),r=n?"":ie(t,0);return te[e]=Object.freeze({basename:t.substr(r.length),name:t,vendor:r,prefix:r,custom:n})},property:function(e){if(ee.call(ne,e))return ne[e];var t=e,n=e[0];"/"===n?n="/"===e[1]?"//":"/":"_"!==n&&"*"!==n&&"$"!==n&&"#"!==n&&"+"!==n&&"&"!==n&&(n="");var r=re(t,n.length);if(!r&&(t=t.toLowerCase(),ee.call(ne,t)))return ne[e]=ne[t];var i=r?"":ie(t,n.length),a=t.substr(0,n.length+i.length);return ne[e]=Object.freeze({basename:t.substr(a.length),name:t.substr(n.length),hack:n,vendor:i,prefix:a,custom:r})},isCustomProperty:re,vendorPrefix:ie},oe="undefined"!=typeof Uint32Array?Uint32Array:Array,se=function(e,t){return null===e||e.length<t?new oe(Math.max(t+1024,16384)):e},le=h.TYPE,ce=z.isNewline,ue=z.isName,he=z.isValidEscape,pe=z.isNumberStart,de=z.isIdentifierStart,me=z.charCodeCategory,ge=z.isBOM,fe=M.cmpStr,be=M.getNewlineLength,ye=M.findWhiteSpaceEnd,ke=M.consumeEscaped,ve=M.consumeName,xe=M.consumeNumber,we=M.consumeBadUrlRemnants;function Se(e,t){function n(t){return t<o?e.charCodeAt(t):0}function r(){return h=xe(e,h),de(n(h),n(h+1),n(h+2))?(f=le.Dimension,void(h=ve(e,h))):37===n(h)?(f=le.Percentage,void h++):void(f=le.Number)}function i(){const t=h;return h=ve(e,h),fe(e,t,h,"url")&&40===n(h)?34===n(h=ye(e,h+1))||39===n(h)?(f=le.Function,void(h=t+4)):void function(){for(f=le.Url,h=ye(e,h);h<e.length;h++){var t=e.charCodeAt(h);switch(me(t)){case 41:return void h++;case me.Eof:return;case me.WhiteSpace:return 41===n(h=ye(e,h))||h>=e.length?void(h<e.length&&h++):(h=we(e,h),void(f=le.BadUrl));case 34:case 39:case 40:case me.NonPrintable:return h=we(e,h),void(f=le.BadUrl);case 92:if(he(t,n(h+1))){h=ke(e,h)-1;break}return h=we(e,h),void(f=le.BadUrl)}}}():40===n(h)?(f=le.Function,void h++):void(f=le.Ident)}function a(t){for(t||(t=n(h++)),f=le.String;h<e.length;h++){var r=e.charCodeAt(h);switch(me(r)){case t:return void h++;case me.Eof:return;case me.WhiteSpace:if(ce(r))return h+=be(e,h,r),void(f=le.BadString);break;case 92:if(h===e.length-1)break;var i=n(h+1);ce(i)?h+=be(e,h+1,i):he(r,i)&&(h=ke(e,h)-1)}}}t||(t=new H);for(var o=(e=String(e||"")).length,s=se(t.offsetAndType,o+1),l=se(t.balance,o+1),c=0,u=ge(n(0)),h=u,p=0,d=0,m=0;h<o;){var g=e.charCodeAt(h),f=0;switch(l[c]=o,me(g)){case me.WhiteSpace:f=le.WhiteSpace,h=ye(e,h+1);break;case 34:a();break;case 35:ue(n(h+1))||he(n(h+1),n(h+2))?(f=le.Hash,h=ve(e,h+1)):(f=le.Delim,h++);break;case 39:a();break;case 40:f=le.LeftParenthesis,h++;break;case 41:f=le.RightParenthesis,h++;break;case 43:pe(g,n(h+1),n(h+2))?r():(f=le.Delim,h++);break;case 44:f=le.Comma,h++;break;case 45:pe(g,n(h+1),n(h+2))?r():45===n(h+1)&&62===n(h+2)?(f=le.CDC,h+=3):de(g,n(h+1),n(h+2))?i():(f=le.Delim,h++);break;case 46:pe(g,n(h+1),n(h+2))?r():(f=le.Delim,h++);break;case 47:42===n(h+1)?(f=le.Comment,1===(h=e.indexOf("*/",h+2)+2)&&(h=e.length)):(f=le.Delim,h++);break;case 58:f=le.Colon,h++;break;case 59:f=le.Semicolon,h++;break;case 60:33===n(h+1)&&45===n(h+2)&&45===n(h+3)?(f=le.CDO,h+=4):(f=le.Delim,h++);break;case 64:de(n(h+1),n(h+2),n(h+3))?(f=le.AtKeyword,h=ve(e,h+1)):(f=le.Delim,h++);break;case 91:f=le.LeftSquareBracket,h++;break;case 92:he(g,n(h+1))?i():(f=le.Delim,h++);break;case 93:f=le.RightSquareBracket,h++;break;case 123:f=le.LeftCurlyBracket,h++;break;case 125:f=le.RightCurlyBracket,h++;break;case me.Digit:r();break;case me.NameStart:i();break;case me.Eof:break;default:f=le.Delim,h++}switch(f){case p:for(p=(d=l[m=16777215&d])>>24,l[c]=m,l[m++]=c;m<c;m++)l[m]===o&&(l[m]=c);break;case le.LeftParenthesis:case le.Function:l[c]=d,d=(p=le.RightParenthesis)<<24|c;break;case le.LeftSquareBracket:l[c]=d,d=(p=le.RightSquareBracket)<<24|c;break;case le.LeftCurlyBracket:l[c]=d,d=(p=le.RightCurlyBracket)<<24|c}s[c++]=f<<24|h}for(s[c]=le.EOF<<24|h,l[c]=o,l[o]=o;0!==d;)d=l[m=16777215&d],l[m]=o;return t.source=e,t.firstCharOffset=u,t.offsetAndType=s,t.tokenCount=c,t.balance=l,t.reset(),t.next(),t}Object.keys(h).forEach((function(e){Se[e]=h[e]})),Object.keys(z).forEach((function(e){Se[e]=z[e]})),Object.keys(M).forEach((function(e){Se[e]=M[e]}));var Ce=Se,ze=Ce.isDigit,Ae=Ce.cmpChar,Pe=Ce.TYPE,Te=Pe.Delim,Le=Pe.WhiteSpace,Ee=Pe.Comment,De=Pe.Ident,Oe=Pe.Number,Be=Pe.Dimension;function Ie(e,t){return null!==e&&e.type===Te&&e.value.charCodeAt(0)===t}function Ne(e,t,n){for(;null!==e&&(e.type===Le||e.type===Ee);)e=n(++t);return t}function Re(e,t,n,r){if(!e)return 0;var i=e.value.charCodeAt(t);if(43===i||45===i){if(n)return 0;t++}for(;t<e.value.length;t++)if(!ze(e.value.charCodeAt(t)))return 0;return r+1}function Me(e,t,n){var r=!1,i=Ne(e,t,n);if(null===(e=n(i)))return t;if(e.type!==Oe){if(!Ie(e,43)&&!Ie(e,45))return t;if(r=!0,i=Ne(n(++i),i,n),null===(e=n(i))&&e.type!==Oe)return 0}if(!r){var a=e.value.charCodeAt(0);if(43!==a&&45!==a)return 0}return Re(e,r?0:1,r,i)}var je=Ce.isHexDigit,_e=Ce.cmpChar,Fe=Ce.TYPE,We=Fe.Ident,qe=Fe.Delim,Ye=Fe.Number,Ue=Fe.Dimension;function He(e,t){return null!==e&&e.type===qe&&e.value.charCodeAt(0)===t}function Ve(e,t){return e.value.charCodeAt(0)===t}function Ke(e,t,n){for(var r=t,i=0;r<e.value.length;r++){var a=e.value.charCodeAt(r);if(45===a&&n&&0!==i)return Ke(e,t+i+1,!1)>0?6:0;if(!je(a))return 0;if(++i>6)return 0}return i}function Ge(e,t,n){if(!e)return 0;for(;He(n(t),63);){if(++e>6)return 0;t++}return t}var Qe=Ce.isIdentifierStart,Xe=Ce.isHexDigit,Ze=Ce.isDigit,$e=Ce.cmpStr,Je=Ce.consumeNumber,et=Ce.TYPE,tt=["unset","initial","inherit"],nt=["calc(","-moz-calc(","-webkit-calc("];function rt(e,t){return t<e.length?e.charCodeAt(t):0}function it(e,t){return $e(e,0,e.length,t)}function at(e,t){for(var n=0;n<t.length;n++)if(it(e,t[n]))return!0;return!1}function ot(e,t){return t===e.length-2&&(92===e.charCodeAt(t)&&Ze(e.charCodeAt(t+1)))}function st(e,t,n){if(e&&"Range"===e.type){var r=Number(void 0!==n&&n!==t.length?t.substr(0,n):t);if(isNaN(r))return!0;if(null!==e.min&&r<e.min)return!0;if(null!==e.max&&r>e.max)return!0}return!1}function lt(e,t){var n=e.index,r=0;do{if(r++,e.balance<=n)break}while(e=t(r));return r}function ct(e){return function(t,n,r){return null===t?0:t.type===et.Function&&at(t.value,nt)?lt(t,n):e(t,n,r)}}function ut(e){return function(t){return null===t||t.type!==e?0:1}}function ht(e){return function(t,n,r){if(null===t||t.type!==et.Dimension)return 0;var i=Je(t.value,0);if(null!==e){var a=t.value.indexOf("\\",i),o=-1!==a&&ot(t.value,a)?t.value.substring(i,a):t.value.substr(i);if(!1===e.hasOwnProperty(o.toLowerCase()))return 0}return st(r,t.value,i)?0:1}}function pt(e){return"function"!=typeof e&&(e=function(){return 0}),function(t,n,r){return null!==t&&t.type===et.Number&&0===Number(t.value)?1:e(t,n,r)}}var dt,mt={"ident-token":ut(et.Ident),"function-token":ut(et.Function),"at-keyword-token":ut(et.AtKeyword),"hash-token":ut(et.Hash),"string-token":ut(et.String),"bad-string-token":ut(et.BadString),"url-token":ut(et.Url),"bad-url-token":ut(et.BadUrl),"delim-token":ut(et.Delim),"number-token":ut(et.Number),"percentage-token":ut(et.Percentage),"dimension-token":ut(et.Dimension),"whitespace-token":ut(et.WhiteSpace),"CDO-token":ut(et.CDO),"CDC-token":ut(et.CDC),"colon-token":ut(et.Colon),"semicolon-token":ut(et.Semicolon),"comma-token":ut(et.Comma),"[-token":ut(et.LeftSquareBracket),"]-token":ut(et.RightSquareBracket),"(-token":ut(et.LeftParenthesis),")-token":ut(et.RightParenthesis),"{-token":ut(et.LeftCurlyBracket),"}-token":ut(et.RightCurlyBracket),string:ut(et.String),ident:ut(et.Ident),"custom-ident":function(e){if(null===e||e.type!==et.Ident)return 0;var t=e.value.toLowerCase();return at(t,tt)||it(t,"default")?0:1},"custom-property-name":function(e){return null===e||e.type!==et.Ident||45!==rt(e.value,0)||45!==rt(e.value,1)?0:1},"hex-color":function(e){if(null===e||e.type!==et.Hash)return 0;var t=e.value.length;if(4!==t&&5!==t&&7!==t&&9!==t)return 0;for(var n=1;n<t;n++)if(!Xe(e.value.charCodeAt(n)))return 0;return 1},"id-selector":function(e){return null===e||e.type!==et.Hash?0:Qe(rt(e.value,1),rt(e.value,2),rt(e.value,3))?1:0},"an-plus-b":function(e,t){var n=0;if(!e)return 0;if(e.type===Oe)return Re(e,0,!1,n);if(e.type===De&&45===e.value.charCodeAt(0)){if(!Ae(e.value,1,110))return 0;switch(e.value.length){case 2:return Me(t(++n),n,t);case 3:return 45!==e.value.charCodeAt(2)?0:(n=Ne(t(++n),n,t),Re(e=t(n),0,!0,n));default:return 45!==e.value.charCodeAt(2)?0:Re(e,3,!0,n)}}else if(e.type===De||Ie(e,43)&&t(n+1).type===De){if(e.type!==De&&(e=t(++n)),null===e||!Ae(e.value,0,110))return 0;switch(e.value.length){case 1:return Me(t(++n),n,t);case 2:return 45!==e.value.charCodeAt(1)?0:(n=Ne(t(++n),n,t),Re(e=t(n),0,!0,n));default:return 45!==e.value.charCodeAt(1)?0:Re(e,2,!0,n)}}else if(e.type===Be){for(var r=e.value.charCodeAt(0),i=43===r||45===r?1:0,a=i;a<e.value.length&&ze(e.value.charCodeAt(a));a++);return a===i?0:Ae(e.value,a,110)?a+1===e.value.length?Me(t(++n),n,t):45!==e.value.charCodeAt(a+1)?0:a+2===e.value.length?(n=Ne(t(++n),n,t),Re(e=t(n),0,!0,n)):Re(e,a+2,!0,n):0}return 0},urange:function(e,t){var n=0;if(null===e||e.type!==We||!_e(e.value,0,117))return 0;if(null===(e=t(++n)))return 0;if(He(e,43))return null===(e=t(++n))?0:e.type===We?Ge(Ke(e,0,!0),++n,t):He(e,63)?Ge(1,++n,t):0;if(e.type===Ye){if(!Ve(e,43))return 0;var r=Ke(e,1,!0);return 0===r?0:null===(e=t(++n))?n:e.type===Ue||e.type===Ye?Ve(e,45)&&Ke(e,1,!1)?n+1:0:Ge(r,n,t)}return e.type===Ue&&Ve(e,43)?Ge(Ke(e,1,!0),++n,t):0},"declaration-value":function(e,t){if(!e)return 0;var n=0,r=0,i=e.index;e:do{switch(e.type){case et.BadString:case et.BadUrl:break e;case et.RightCurlyBracket:case et.RightParenthesis:case et.RightSquareBracket:if(e.balance>e.index||e.balance<i)break e;r--;break;case et.Semicolon:if(0===r)break e;break;case et.Delim:if("!"===e.value&&0===r)break e;break;case et.Function:case et.LeftParenthesis:case et.LeftSquareBracket:case et.LeftCurlyBracket:r++}if(n++,e.balance<=i)break}while(e=t(n));return n},"any-value":function(e,t){if(!e)return 0;var n=e.index,r=0;e:do{switch(e.type){case et.BadString:case et.BadUrl:break e;case et.RightCurlyBracket:case et.RightParenthesis:case et.RightSquareBracket:if(e.balance>e.index||e.balance<n)break e}if(r++,e.balance<=n)break}while(e=t(r));return r},dimension:ct(ht(null)),angle:ct(ht({deg:!0,grad:!0,rad:!0,turn:!0})),decibel:ct(ht({db:!0})),frequency:ct(ht({hz:!0,khz:!0})),flex:ct(ht({fr:!0})),length:ct(pt(ht({px:!0,mm:!0,cm:!0,in:!0,pt:!0,pc:!0,q:!0,em:!0,ex:!0,ch:!0,rem:!0,vh:!0,vw:!0,vmin:!0,vmax:!0,vm:!0}))),resolution:ct(ht({dpi:!0,dpcm:!0,dppx:!0,x:!0})),semitones:ct(ht({st:!0})),time:ct(ht({s:!0,ms:!0})),percentage:ct((function(e,t,n){return null===e||e.type!==et.Percentage||st(n,e.value,e.value.length-1)?0:1})),zero:pt(),number:ct((function(e,t,n){if(null===e)return 0;var r=Je(e.value,0);return r===e.value.length||ot(e.value,r)?st(n,e.value,r)?0:1:0})),integer:ct((function(e,t,n){if(null===e||e.type!==et.Number)return 0;for(var r=43===e.value.charCodeAt(0)||45===e.value.charCodeAt(0)?1:0;r<e.value.length;r++)if(!Ze(e.value.charCodeAt(r)))return 0;return st(n,e.value,r)?0:1})),"-ms-legacy-expression":(dt="expression",dt+="(",function(e,t){return null!==e&&it(e.value,dt)?lt(e,t):0})},gt=function(e,t,n){var r=o("SyntaxError",e);return r.input=t,r.offset=n,r.rawMessage=e,r.message=r.rawMessage+"\n  "+r.input+"\n--"+new Array((r.offset||r.input.length)+1).join("-")+"^",r},ft=function(e){this.str=e,this.pos=0};ft.prototype={charCodeAt:function(e){return e<this.str.length?this.str.charCodeAt(e):0},charCode:function(){return this.charCodeAt(this.pos)},nextCharCode:function(){return this.charCodeAt(this.pos+1)},nextNonWsCode:function(e){return this.charCodeAt(this.findWsEnd(e))},findWsEnd:function(e){for(;e<this.str.length;e++){var t=this.str.charCodeAt(e);if(13!==t&&10!==t&&12!==t&&32!==t&&9!==t)break}return e},substringToPos:function(e){return this.str.substring(this.pos,this.pos=e)},eat:function(e){this.charCode()!==e&&this.error("Expect `"+String.fromCharCode(e)+"`"),this.pos++},peek:function(){return this.pos<this.str.length?this.str.charAt(this.pos++):""},error:function(e){throw new gt(e,this.str,this.pos)}};var bt=ft,yt=function(e){for(var t="function"==typeof Uint32Array?new Uint32Array(128):new Array(128),n=0;n<128;n++)t[n]=e(String.fromCharCode(n))?1:0;return t}((function(e){return/[a-zA-Z0-9\-]/.test(e)})),kt={" ":1,"&&":2,"||":3,"|":4};function vt(e){return e.substringToPos(e.findWsEnd(e.pos))}function xt(e){for(var t=e.pos;t<e.str.length;t++){var n=e.str.charCodeAt(t);if(n>=128||0===yt[n])break}return e.pos===t&&e.error("Expect a keyword"),e.substringToPos(t)}function wt(e){for(var t=e.pos;t<e.str.length;t++){var n=e.str.charCodeAt(t);if(n<48||n>57)break}return e.pos===t&&e.error("Expect a number"),e.substringToPos(t)}function St(e){var t=e.str.indexOf("'",e.pos+1);return-1===t&&(e.pos=e.str.length,e.error("Expect an apostrophe")),e.substringToPos(t+1)}function Ct(e){var t,n=null;return e.eat(123),t=wt(e),44===e.charCode()?(e.pos++,125!==e.charCode()&&(n=wt(e))):n=t,e.eat(125),{min:Number(t),max:n?Number(n):0}}function zt(e,t){var n=function(e){var t=null,n=!1;switch(e.charCode()){case 42:e.pos++,t={min:0,max:0};break;case 43:e.pos++,t={min:1,max:0};break;case 63:e.pos++,t={min:0,max:1};break;case 35:e.pos++,n=!0,t=123===e.charCode()?Ct(e):{min:1,max:0};break;case 123:t=Ct(e);break;default:return null}return{type:"Multiplier",comma:n,min:t.min,max:t.max,term:null}}(e);return null!==n?(n.term=t,n):t}function At(e){var t=e.peek();return""===t?null:{type:"Token",value:t}}function Pt(e){var t,n=null;return e.eat(60),t=xt(e),40===e.charCode()&&41===e.nextCharCode()&&(e.pos+=2,t+="()"),91===e.charCodeAt(e.findWsEnd(e.pos))&&(vt(e),n=function(e){var t=null,n=null,r=1;return e.eat(91),45===e.charCode()&&(e.peek(),r=-1),-1==r&&8734===e.charCode()?e.peek():t=r*Number(wt(e)),vt(e),e.eat(44),vt(e),8734===e.charCode()?e.peek():(r=1,45===e.charCode()&&(e.peek(),r=-1),n=r*Number(wt(e))),e.eat(93),null===t&&null===n?null:{type:"Range",min:t,max:n}}(e)),e.eat(62),zt(e,{type:"Type",name:t,opts:n})}function Tt(e,t){function n(e,t){return{type:"Group",terms:e,combinator:t,disallowEmpty:!1,explicit:!1}}for(t=Object.keys(t).sort((function(e,t){return kt[e]-kt[t]}));t.length>0;){for(var r=t.shift(),i=0,a=0;i<e.length;i++){var o=e[i];"Combinator"===o.type&&(o.value===r?(-1===a&&(a=i-1),e.splice(i,1),i--):(-1!==a&&i-a>1&&(e.splice(a,i-a,n(e.slice(a,i),r)),i=a+1),a=-1))}-1!==a&&t.length&&e.splice(a,i-a,n(e.slice(a,i),r))}return r}function Lt(e){for(var t,n=[],r={},i=null,a=e.pos;t=Et(e);)"Spaces"!==t.type&&("Combinator"===t.type?(null!==i&&"Combinator"!==i.type||(e.pos=a,e.error("Unexpected combinator")),r[t.value]=!0):null!==i&&"Combinator"!==i.type&&(r[" "]=!0,n.push({type:"Combinator",value:" "})),n.push(t),i=t,a=e.pos);return null!==i&&"Combinator"===i.type&&(e.pos-=a,e.error("Unexpected combinator")),{type:"Group",terms:n,combinator:Tt(n,r)||" ",disallowEmpty:!1,explicit:!1}}function Et(e){var t=e.charCode();if(t<128&&1===yt[t])return function(e){var t;return t=xt(e),40===e.charCode()?(e.pos++,{type:"Function",name:t}):zt(e,{type:"Keyword",name:t})}(e);switch(t){case 93:break;case 91:return zt(e,function(e){var t;return e.eat(91),t=Lt(e),e.eat(93),t.explicit=!0,33===e.charCode()&&(e.pos++,t.disallowEmpty=!0),t}(e));case 60:return 39===e.nextCharCode()?function(e){var t;return e.eat(60),e.eat(39),t=xt(e),e.eat(39),e.eat(62),zt(e,{type:"Property",name:t})}(e):Pt(e);case 124:return{type:"Combinator",value:e.substringToPos(124===e.nextCharCode()?e.pos+2:e.pos+1)};case 38:return e.pos++,e.eat(38),{type:"Combinator",value:"&&"};case 44:return e.pos++,{type:"Comma"};case 39:return zt(e,{type:"String",value:St(e)});case 32:case 9:case 10:case 13:case 12:return{type:"Spaces",value:vt(e)};case 64:return(t=e.nextCharCode())<128&&1===yt[t]?(e.pos++,{type:"AtKeyword",name:xt(e)}):At(e);case 42:case 43:case 63:case 35:case 33:break;case 123:if((t=e.nextCharCode())<48||t>57)return At(e);break;default:return At(e)}}function Dt(e){var t=new bt(e),n=Lt(t);return t.pos!==e.length&&t.error("Unexpected input"),1===n.terms.length&&"Group"===n.terms[0].type&&(n=n.terms[0]),n}Dt("[a&&<b>#|<'c'>*||e() f{2} /,(% g#{1,2} h{2,})]!");var Ot=Dt,Bt=function(){};function It(e){return"function"==typeof e?e:Bt}var Nt=function(e,t,n){var r=Bt,i=Bt;if("function"==typeof t?r=t:t&&(r=It(t.enter),i=It(t.leave)),r===Bt&&i===Bt)throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");!function e(t){switch(r.call(n,t),t.type){case"Group":t.terms.forEach(e);break;case"Multiplier":e(t.term);break;case"Type":case"Property":case"Keyword":case"AtKeyword":case"Function":case"String":case"Token":case"Comma":break;default:throw new Error("Unknown type: "+t.type)}i.call(n,t)}(e)},Rt=new H,Mt={decorator:function(e){var t=null,n={len:0,node:null},r=[n],i="";return{children:e.children,node:function(n){var r=t;t=n,e.node.call(this,n),t=r},chunk:function(e){i+=e,n.node!==t?r.push({len:e.length,node:t}):n.len+=e.length},result:function(){return jt(i,r)}}}};function jt(e,t){var n=[],r=0,i=0,a=t?t[i].node:null;for(Ce(e,Rt);!Rt.eof;){if(t)for(;i<t.length&&r+t[i].len<=Rt.tokenStart;)r+=t[i++].len,a=t[i].node;n.push({type:Rt.tokenType,value:Rt.getTokenValue(),index:Rt.tokenIndex,balance:Rt.balance[Rt.tokenIndex],node:a}),Rt.next()}return n}var _t={type:"Match"},Ft={type:"Mismatch"},Wt={type:"DisallowEmpty"};function qt(e,t,n){return t===_t&&n===Ft||e===_t&&t===_t&&n===_t?e:("If"===e.type&&e.else===Ft&&t===_t&&(t=e.then,e=e.match),{type:"If",match:e,then:t,else:n})}function Yt(e){return e.length>2&&40===e.charCodeAt(e.length-2)&&41===e.charCodeAt(e.length-1)}function Ut(e){return"Keyword"===e.type||"AtKeyword"===e.type||"Function"===e.type||"Type"===e.type&&Yt(e.name)}function Ht(e){if("function"==typeof e)return{type:"Generic",fn:e};switch(e.type){case"Group":var t=function e(t,n,r){switch(t){case" ":for(var i=_t,a=n.length-1;a>=0;a--){i=qt(l=n[a],i,Ft)}return i;case"|":i=Ft;var o=null;for(a=n.length-1;a>=0;a--){if(Ut(l=n[a])&&(null===o&&a>0&&Ut(n[a-1])&&(i=qt({type:"Enum",map:o=Object.create(null)},_t,i)),null!==o)){var s=(Yt(l.name)?l.name.slice(0,-1):l.name).toLowerCase();if(s in o==!1){o[s]=l;continue}}o=null,i=qt(l,_t,i)}return i;case"&&":if(n.length>5)return{type:"MatchOnce",terms:n,all:!0};for(i=Ft,a=n.length-1;a>=0;a--){var l=n[a];c=n.length>1?e(t,n.filter((function(e){return e!==l})),!1):_t,i=qt(l,c,i)}return i;case"||":if(n.length>5)return{type:"MatchOnce",terms:n,all:!1};for(i=r?_t:Ft,a=n.length-1;a>=0;a--){var c;l=n[a];c=n.length>1?e(t,n.filter((function(e){return e!==l})),!0):_t,i=qt(l,c,i)}return i}}(e.combinator,e.terms.map(Ht),!1);return e.disallowEmpty&&(t=qt(t,Wt,Ft)),t;case"Multiplier":return function(e){var t=_t,n=Ht(e.term);if(0===e.max)n=qt(n,Wt,Ft),(t=qt(n,null,Ft)).then=qt(_t,_t,t),e.comma&&(t.then.else=qt({type:"Comma",syntax:e},t,Ft));else for(var r=e.min||1;r<=e.max;r++)e.comma&&t!==_t&&(t=qt({type:"Comma",syntax:e},t,Ft)),t=qt(n,qt(_t,_t,t),Ft);if(0===e.min)t=qt(_t,_t,t);else for(r=0;r<e.min-1;r++)e.comma&&t!==_t&&(t=qt({type:"Comma",syntax:e},t,Ft)),t=qt(n,t,Ft);return t}(e);case"Type":case"Property":return{type:e.type,name:e.name,syntax:e};case"Keyword":return{type:e.type,name:e.name.toLowerCase(),syntax:e};case"AtKeyword":return{type:e.type,name:"@"+e.name.toLowerCase(),syntax:e};case"Function":return{type:e.type,name:e.name.toLowerCase()+"(",syntax:e};case"String":return 3===e.value.length?{type:"Token",value:e.value.charAt(1),syntax:e}:{type:e.type,value:e.value.substr(1,e.value.length-2).replace(/\\'/g,"'"),syntax:e};case"Token":return{type:e.type,value:e.value,syntax:e};case"Comma":return{type:e.type,syntax:e};default:throw new Error("Unknown node type:",e.type)}}var Vt=_t,Kt=Ft,Gt=Wt,Qt=function(e,t){return"string"==typeof e&&(e=Ot(e)),{type:"MatchGraph",match:Ht(e),syntax:t||null,source:e}},Xt=Object.prototype.hasOwnProperty,Zt=Vt,$t=Kt,Jt=Gt,en=h.TYPE;function tn(e){for(var t=null,n=null,r=e;null!==r;)n=r.prev,r.prev=t,t=r,r=n;return t}function nn(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r>=65&&r<=90&&(r|=32),r!==t.charCodeAt(n))return!1}return!0}function rn(e){return null===e||(e.type===en.Comma||e.type===en.Function||e.type===en.LeftParenthesis||e.type===en.LeftSquareBracket||e.type===en.LeftCurlyBracket||function(e){return e.type===en.Delim&&"?"!==e.value}(e))}function an(e){return null===e||(e.type===en.RightParenthesis||e.type===en.RightSquareBracket||e.type===en.RightCurlyBracket||e.type===en.Delim)}function on(e,t,n){function r(){do{b++,f=b<e.length?e[b]:null}while(null!==f&&(f.type===en.WhiteSpace||f.type===en.Comment))}function i(t){var n=b+t;return n<e.length?e[n]:null}function a(e,t){return{nextState:e,matchStack:k,syntaxStack:u,thenStack:h,tokenIndex:b,prev:t}}function o(e){h={nextState:e,matchStack:k,syntaxStack:u,prev:h}}function s(e){p=a(e,p)}function l(){k={type:1,syntax:t.syntax,token:f,prev:k},r(),d=null,b>y&&(y=b)}function c(){k=2===k.type?k.prev:{type:3,syntax:u.syntax,token:k.token,prev:k},u=u.prev}var u=null,h=null,p=null,d=null,m=0,g=null,f=null,b=-1,y=0,k={type:0,syntax:null,token:null,prev:null};for(r();null===g&&++m<15e3;)switch(t.type){case"Match":if(null===h){if(null!==f&&(b!==e.length-1||"\\0"!==f.value&&"\\9"!==f.value)){t=$t;break}g="Match";break}if((t=h.nextState)===Jt){if(h.matchStack===k){t=$t;break}t=Zt}for(;h.syntaxStack!==u;)c();h=h.prev;break;case"Mismatch":if(null!==d&&!1!==d)(null===p||b>p.tokenIndex)&&(p=d,d=!1);else if(null===p){g="Mismatch";break}t=p.nextState,h=p.thenStack,u=p.syntaxStack,k=p.matchStack,b=p.tokenIndex,f=b<e.length?e[b]:null,p=p.prev;break;case"MatchGraph":t=t.match;break;case"If":t.else!==$t&&s(t.else),t.then!==Zt&&o(t.then),t=t.match;break;case"MatchOnce":t={type:"MatchOnceBuffer",syntax:t,index:0,mask:0};break;case"MatchOnceBuffer":var v=t.syntax.terms;if(t.index===v.length){if(0===t.mask||t.syntax.all){t=$t;break}t=Zt;break}if(t.mask===(1<<v.length)-1){t=Zt;break}for(;t.index<v.length;t.index++){var x=1<<t.index;if(0==(t.mask&x)){s(t),o({type:"AddMatchOnce",syntax:t.syntax,mask:t.mask|x}),t=v[t.index++];break}}break;case"AddMatchOnce":t={type:"MatchOnceBuffer",syntax:t.syntax,index:0,mask:t.mask};break;case"Enum":if(null!==f)if(-1!==(A=f.value.toLowerCase()).indexOf("\\")&&(A=A.replace(/\\[09].*$/,"")),Xt.call(t.map,A)){t=t.map[A];break}t=$t;break;case"Generic":var w=null!==u?u.opts:null,S=b+Math.floor(t.fn(f,i,w));if(!isNaN(S)&&S>b){for(;b<S;)l();t=Zt}else t=$t;break;case"Type":case"Property":var C="Type"===t.type?"types":"properties",z=Xt.call(n,C)?n[C][t.name]:null;if(!z||!z.match)throw new Error("Bad syntax reference: "+("Type"===t.type?"<"+t.name+">":"<'"+t.name+"'>"));if(!1!==d&&null!==f&&"Type"===t.type)if("custom-ident"===t.name&&f.type===en.Ident||"length"===t.name&&"0"===f.value){null===d&&(d=a(t,p)),t=$t;break}u={syntax:t.syntax,opts:t.syntax.opts||null!==u&&u.opts||null,prev:u},k={type:2,syntax:t.syntax,token:k.token,prev:k},t=z.match;break;case"Keyword":var A=t.name;if(null!==f){var P=f.value;if(-1!==P.indexOf("\\")&&(P=P.replace(/\\[09].*$/,"")),nn(P,A)){l(),t=Zt;break}}t=$t;break;case"AtKeyword":case"Function":if(null!==f&&nn(f.value,t.name)){l(),t=Zt;break}t=$t;break;case"Token":if(null!==f&&f.value===t.value){l(),t=Zt;break}t=$t;break;case"Comma":null!==f&&f.type===en.Comma?rn(k.token)?t=$t:(l(),t=an(f)?$t:Zt):t=rn(k.token)||an(f)?Zt:$t;break;case"String":var T="";for(S=b;S<e.length&&T.length<t.value.length;S++)T+=e[S].value;if(nn(T,t.value)){for(;b<S;)l();t=Zt}else t=$t;break;default:throw new Error("Unknown node type: "+t.type)}switch(m,g){case null:console.warn("[csstree-match] BREAK after 15000 iterations"),g="Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)",k=null;break;case"Match":for(;null!==u;)c();break;default:k=null}return{tokens:e,reason:g,iterations:m,match:k,longestMatch:y}}var sn=function(e,t,n){var r=on(e,t,n||{});if(null===r.match)return r;var i=r.match,a=r.match={syntax:t.syntax||null,match:[]},o=[a];for(i=tn(i).prev;null!==i;){switch(i.type){case 2:a.match.push(a={syntax:i.syntax,match:[]}),o.push(a);break;case 3:o.pop(),a=o[o.length-1];break;default:a.match.push({syntax:i.syntax||null,token:i.token.value,node:i.token.node})}i=i.prev}return r};function ln(e){function t(e){return null!==e&&("Type"===e.type||"Property"===e.type||"Keyword"===e.type)}var n=null;return null!==this.matched&&function r(i){if(Array.isArray(i.match)){for(var a=0;a<i.match.length;a++)if(r(i.match[a]))return t(i.syntax)&&n.unshift(i.syntax),!0}else if(i.node===e)return n=t(i.syntax)?[i.syntax]:[],!0;return!1}(this.matched),n}function cn(e,t,n){var r=ln.call(e,t);return null!==r&&r.some(n)}var un={getTrace:ln,isType:function(e,t){return cn(this,e,(function(e){return"Type"===e.type&&e.name===t}))},isProperty:function(e,t){return cn(this,e,(function(e){return"Property"===e.type&&e.name===t}))},isKeyword:function(e){return cn(this,e,(function(e){return"Keyword"===e.type}))}};var hn={matchFragments:function(e,t,n,r,i){var o=[];return null!==n.matched&&function n(s){if(null!==s.syntax&&s.syntax.type===r&&s.syntax.name===i){var l=function e(t){return"node"in t?t.node:e(t.match[0])}(s),c=function e(t){return"node"in t?t.node:e(t.match[t.match.length-1])}(s);e.syntax.walk(t,(function(e,t,n){if(e===l){var r=new a;do{if(r.appendData(t.data),t.data===c)break;t=t.next}while(null!==t);o.push({parent:n,nodes:r})}}))}Array.isArray(s.match)&&s.match.forEach(n)}(n.matched),o}},pn=Object.prototype.hasOwnProperty;function dn(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&e>=0}function mn(e){return Boolean(e)&&dn(e.offset)&&dn(e.line)&&dn(e.column)}function gn(e,t){return function(n,r){if(!n||n.constructor!==Object)return r(n,"Type of node should be an Object");for(var i in n){var o=!0;if(!1!==pn.call(n,i)){if("type"===i)n.type!==e&&r(n,"Wrong node type `"+n.type+"`, expected `"+e+"`");else if("loc"===i){if(null===n.loc)continue;if(n.loc&&n.loc.constructor===Object)if("string"!=typeof n.loc.source)i+=".source";else if(mn(n.loc.start)){if(mn(n.loc.end))continue;i+=".end"}else i+=".start";o=!1}else if(t.hasOwnProperty(i)){var s=0;for(o=!1;!o&&s<t[i].length;s++){var l=t[i][s];switch(l){case String:o="string"==typeof n[i];break;case Boolean:o="boolean"==typeof n[i];break;case null:o=null===n[i];break;default:"string"==typeof l?o=n[i]&&n[i].type===l:Array.isArray(l)&&(o=n[i]instanceof a)}}}else r(n,"Unknown field `"+i+"` for "+e+" node type");o||r(n,"Bad value for `"+e+"."+i+"`")}}for(var i in t)pn.call(t,i)&&!1===pn.call(n,i)&&r(n,"Field `"+e+"."+i+"` is missed")}}function fn(e,t){var n=t.structure,r={type:String,loc:!0},i={type:'"'+e+'"'};for(var a in n)if(!1!==pn.call(n,a)){for(var o=[],s=r[a]=Array.isArray(n[a])?n[a].slice():[n[a]],l=0;l<s.length;l++){var c=s[l];if(c===String||c===Boolean)o.push(c.name);else if(null===c)o.push("null");else if("string"==typeof c)o.push("<"+c+">");else{if(!Array.isArray(c))throw new Error("Wrong value `"+c+"` in `"+e+"."+a+"` structure definition");o.push("List")}}i[a]=o.join(" | ")}return{docs:i,check:gn(e,r)}}var bn=$,yn=J,kn=Qt,vn=sn,xn=function(e){var t={};if(e.node)for(var n in e.node)if(pn.call(e.node,n)){var r=e.node[n];if(!r.structure)throw new Error("Missed `structure` field in `"+n+"` node type definition");t[n]=fn(n,r)}return t},wn=kn("inherit | initial | unset"),Sn=kn("inherit | initial | unset | <-ms-legacy-expression>");function Cn(e,t,n){var r={};for(var i in e)e[i].syntax&&(r[i]=n?e[i].syntax:G(e[i].syntax,{compact:t}));return r}function zn(e,t,n){const r={};for(const[i,a]of Object.entries(e))r[i]={prelude:a.prelude&&(n?a.prelude.syntax:G(a.prelude.syntax,{compact:t})),descriptors:a.descriptors&&Cn(a.descriptors,t,n)};return r}function An(e,t,n){return{matched:e,iterations:n,error:t,getTrace:un.getTrace,isType:un.isType,isProperty:un.isProperty,isKeyword:un.isKeyword}}function Pn(e,t,n,r){var i,a=function(e,t){return"string"==typeof e?jt(e,null):t.generate(e,Mt)}(n,e.syntax);return function(e){for(var t=0;t<e.length;t++)if("var("===e[t].value.toLowerCase())return!0;return!1}(a)?An(null,new Error("Matching for a tree with var() is not supported")):(r&&(i=vn(a,e.valueCommonSyntax,e)),r&&i.match||(i=vn(a,t.match,e)).match?An(i.match,null,i.iterations):An(null,new yn(i.reason,t.syntax,n,i),i.iterations))}var Tn=function(e,t,n){if(this.valueCommonSyntax=wn,this.syntax=t,this.generic=!1,this.atrules={},this.properties={},this.types={},this.structure=n||xn(e),e){if(e.types)for(var r in e.types)this.addType_(r,e.types[r]);if(e.generic)for(var r in this.generic=!0,mt)this.addType_(r,mt[r]);if(e.atrules)for(var r in e.atrules)this.addAtrule_(r,e.atrules[r]);if(e.properties)for(var r in e.properties)this.addProperty_(r,e.properties[r])}};Tn.prototype={structure:{},checkStructure:function(e){function t(e,t){r.push({node:e,message:t})}var n=this.structure,r=[];return this.syntax.walk(e,(function(e){n.hasOwnProperty(e.type)?n[e.type].check(e,t):t(e,"Unknown node type `"+e.type+"`")})),!!r.length&&r},createDescriptor:function(e,t,n,r=null){var i={type:t,name:n},a={type:t,name:n,parent:r,syntax:null,match:null};return"function"==typeof e?a.match=kn(e,i):("string"==typeof e?Object.defineProperty(a,"syntax",{get:function(){return Object.defineProperty(a,"syntax",{value:Ot(e)}),a.syntax}}):a.syntax=e,Object.defineProperty(a,"match",{get:function(){return Object.defineProperty(a,"match",{value:kn(a.syntax,i)}),a.match}})),a},addAtrule_:function(e,t){t&&(this.atrules[e]={type:"Atrule",name:e,prelude:t.prelude?this.createDescriptor(t.prelude,"AtrulePrelude",e):null,descriptors:t.descriptors?Object.keys(t.descriptors).reduce((n,r)=>(n[r]=this.createDescriptor(t.descriptors[r],"AtruleDescriptor",r,e),n),{}):null})},addProperty_:function(e,t){t&&(this.properties[e]=this.createDescriptor(t,"Property",e))},addType_:function(e,t){t&&(this.types[e]=this.createDescriptor(t,"Type",e),t===mt["-ms-legacy-expression"]&&(this.valueCommonSyntax=Sn))},checkAtruleName:function(e){if(!this.getAtrule(e))return new bn("Unknown at-rule","@"+e)},checkAtrulePrelude:function(e,t){let n=this.checkAtruleName(e);if(n)return n;var r=this.getAtrule(e);return!r.prelude&&t?new SyntaxError("At-rule `@"+e+"` should not contain a prelude"):r.prelude&&!t?new SyntaxError("At-rule `@"+e+"` should contain a prelude"):void 0},checkAtruleDescriptorName:function(e,t){let n=this.checkAtruleName(e);if(n)return n;var r=this.getAtrule(e),i=ae.keyword(t);return r.descriptors?r.descriptors[i.name]||r.descriptors[i.basename]?void 0:new bn("Unknown at-rule descriptor",t):new SyntaxError("At-rule `@"+e+"` has no known descriptors")},checkPropertyName:function(e){return ae.property(e).custom?new Error("Lexer matching doesn't applicable for custom properties"):this.getProperty(e)?void 0:new bn("Unknown property",e)},matchAtrulePrelude:function(e,t){var n=this.checkAtrulePrelude(e,t);return n?An(null,n):t?Pn(this,this.getAtrule(e).prelude,t,!0):An(null,null)},matchAtruleDescriptor:function(e,t,n){var r=this.checkAtruleDescriptorName(e,t);if(r)return An(null,r);var i=this.getAtrule(e),a=ae.keyword(t);return Pn(this,i.descriptors[a.name]||i.descriptors[a.basename],n,!0)},matchDeclaration:function(e){return"Declaration"!==e.type?An(null,new Error("Not a Declaration node")):this.matchProperty(e.property,e.value)},matchProperty:function(e,t){var n=this.checkPropertyName(e);return n?An(null,n):Pn(this,this.getProperty(e),t,!0)},matchType:function(e,t){var n=this.getType(e);return n?Pn(this,n,t,!1):An(null,new bn("Unknown type",e))},match:function(e,t){return"string"==typeof e||e&&e.type?("string"!=typeof e&&e.match||(e=this.createDescriptor(e,"Type","anonymous")),Pn(this,e,t,!1)):An(null,new bn("Bad syntax"))},findValueFragments:function(e,t,n,r){return hn.matchFragments(this,t,this.matchProperty(e,t),n,r)},findDeclarationValueFragments:function(e,t,n){return hn.matchFragments(this,e.value,this.matchDeclaration(e),t,n)},findAllFragments:function(e,t,n){var r=[];return this.syntax.walk(e,{visit:"Declaration",enter:function(e){r.push.apply(r,this.findDeclarationValueFragments(e,t,n))}.bind(this)}),r},getAtrule:function(e,t=!0){var n=ae.keyword(e);return(n.vendor&&t?this.atrules[n.name]||this.atrules[n.basename]:this.atrules[n.name])||null},getAtrulePrelude:function(e,t=!0){const n=this.getAtrule(e,t);return n&&n.prelude||null},getAtruleDescriptor:function(e,t){return this.atrules.hasOwnProperty(e)&&this.atrules.declarators&&this.atrules[e].declarators[t]||null},getProperty:function(e,t=!0){var n=ae.property(e);return(n.vendor&&t?this.properties[n.name]||this.properties[n.basename]:this.properties[n.name])||null},getType:function(e){return this.types.hasOwnProperty(e)?this.types[e]:null},validate:function(){function e(r,i,a,o){if(a.hasOwnProperty(i))return a[i];a[i]=!1,null!==o.syntax&&Nt(o.syntax,(function(o){if("Type"===o.type||"Property"===o.type){var s="Type"===o.type?r.types:r.properties,l="Type"===o.type?t:n;s.hasOwnProperty(o.name)&&!e(r,o.name,l,s[o.name])||(a[i]=!0)}}),this)}var t={},n={};for(var r in this.types)e(this,r,t,this.types[r]);for(var r in this.properties)e(this,r,n,this.properties[r]);return t=Object.keys(t).filter((function(e){return t[e]})),n=Object.keys(n).filter((function(e){return n[e]})),t.length||n.length?{types:t,properties:n}:null},dump:function(e,t){return{generic:this.generic,types:Cn(this.types,!t,e),properties:Cn(this.properties,!t,e),atrules:zn(this.atrules,!t,e)}},toString:function(){return JSON.stringify(this.dump())}};var Ln=Tn,En={SyntaxError:gt,parse:Ot,generate:G,walk:Nt},Dn=Ce.isBOM;var On=function(){this.lines=null,this.columns=null,this.linesAndColumnsComputed=!1};On.prototype={setSource:function(e,t,n,r){this.source=e,this.startOffset=void 0===t?0:t,this.startLine=void 0===n?1:n,this.startColumn=void 0===r?1:r,this.linesAndColumnsComputed=!1},ensureLinesAndColumnsComputed:function(){this.linesAndColumnsComputed||(!function(e,t){for(var n=t.length,r=se(e.lines,n),i=e.startLine,a=se(e.columns,n),o=e.startColumn,s=t.length>0?Dn(t.charCodeAt(0)):0;s<n;s++){var l=t.charCodeAt(s);r[s]=i,a[s]=o++,10!==l&&13!==l&&12!==l||(13===l&&s+1<n&&10===t.charCodeAt(s+1)&&(r[++s]=i,a[s]=o),i++,o=1)}r[s]=i,a[s]=o,e.lines=r,e.columns=a}(this,this.source),this.linesAndColumnsComputed=!0)},getLocation:function(e,t){return this.ensureLinesAndColumnsComputed(),{source:t,offset:this.startOffset+e,line:this.lines[e],column:this.columns[e]}},getLocationRange:function(e,t,n){return this.ensureLinesAndColumnsComputed(),{source:n,start:{offset:this.startOffset+e,line:this.lines[e],column:this.columns[e]},end:{offset:this.startOffset+t,line:this.lines[t],column:this.columns[t]}}}};var Bn=On,In=Ce.TYPE,Nn=In.WhiteSpace,Rn=In.Comment,Mn=function(e){var t=this.createList(),n=null,r={recognizer:e,space:null,ignoreWS:!1,ignoreWSAfter:!1};for(this.scanner.skipSC();!this.scanner.eof;){switch(this.scanner.tokenType){case Rn:this.scanner.next();continue;case Nn:r.ignoreWS?this.scanner.next():r.space=this.WhiteSpace();continue}if(void 0===(n=e.getNode.call(this,r)))break;null!==r.space&&(t.push(r.space),r.space=null),t.push(n),r.ignoreWSAfter?(r.ignoreWSAfter=!1,r.ignoreWS=!0):r.ignoreWS=!1}return t},{findWhiteSpaceStart:jn,cmpStr:_n}=M,Fn=function(){},Wn=h.TYPE,qn=h.NAME,Yn=Wn.WhiteSpace,Un=Wn.Comment,Hn=Wn.Ident,Vn=Wn.Function,Kn=Wn.Url,Gn=Wn.Hash,Qn=Wn.Percentage,Xn=Wn.Number;function Zn(e){return function(){return this[e]()}}var $n=function(e){var t={scanner:new H,locationMap:new Bn,filename:"<unknown>",needPositions:!1,onParseError:Fn,onParseErrorThrow:!1,parseAtrulePrelude:!0,parseRulePrelude:!0,parseValue:!0,parseCustomProperty:!1,readSequence:Mn,createList:function(){return new a},createSingleNodeList:function(e){return(new a).appendData(e)},getFirstListNode:function(e){return e&&e.first()},getLastListNode:function(e){return e.last()},parseWithFallback:function(e,t){var n=this.scanner.tokenIndex;try{return e.call(this)}catch(e){if(this.onParseErrorThrow)throw e;var r=t.call(this,n);return this.onParseErrorThrow=!0,this.onParseError(e,r),this.onParseErrorThrow=!1,r}},lookupNonWSType:function(e){do{var t=this.scanner.lookupType(e++);if(t!==Yn)return t}while(0!==t);return 0},eat:function(e){if(this.scanner.tokenType!==e){var t=this.scanner.tokenStart,n=qn[e]+" is expected";switch(e){case Hn:this.scanner.tokenType===Vn||this.scanner.tokenType===Kn?(t=this.scanner.tokenEnd-1,n="Identifier is expected but function found"):n="Identifier is expected";break;case Gn:this.scanner.isDelim(35)&&(this.scanner.next(),t++,n="Name is expected");break;case Qn:this.scanner.tokenType===Xn&&(t=this.scanner.tokenEnd,n="Percent sign is expected");break;default:this.scanner.source.charCodeAt(this.scanner.tokenStart)===e&&(t+=1)}this.error(n,t)}this.scanner.next()},consume:function(e){var t=this.scanner.getTokenValue();return this.eat(e),t},consumeFunctionName:function(){var e=this.scanner.source.substring(this.scanner.tokenStart,this.scanner.tokenEnd-1);return this.eat(Vn),e},getLocation:function(e,t){return this.needPositions?this.locationMap.getLocationRange(e,t,this.filename):null},getLocationFromList:function(e){if(this.needPositions){var t=this.getFirstListNode(e),n=this.getLastListNode(e);return this.locationMap.getLocationRange(null!==t?t.loc.start.offset-this.locationMap.startOffset:this.scanner.tokenStart,null!==n?n.loc.end.offset-this.locationMap.startOffset:this.scanner.tokenStart,this.filename)}return null},error:function(e,t){var n=void 0!==t&&t<this.scanner.source.length?this.locationMap.getLocation(t):this.scanner.eof?this.locationMap.getLocation(jn(this.scanner.source,this.scanner.source.length-1)):this.locationMap.getLocation(this.scanner.tokenStart);throw new l(e||"Unexpected input",this.scanner.source,n.offset,n.line,n.column)}};for(var n in e=function(e){var t={context:{},scope:{},atrule:{},pseudo:{}};if(e.parseContext)for(var n in e.parseContext)switch(typeof e.parseContext[n]){case"function":t.context[n]=e.parseContext[n];break;case"string":t.context[n]=Zn(e.parseContext[n])}if(e.scope)for(var n in e.scope)t.scope[n]=e.scope[n];if(e.atrule)for(var n in e.atrule){var r=e.atrule[n];r.parse&&(t.atrule[n]=r.parse)}if(e.pseudo)for(var n in e.pseudo){var i=e.pseudo[n];i.parse&&(t.pseudo[n]=i.parse)}if(e.node)for(var n in e.node)t[n]=e.node[n].parse;return t}(e||{}))t[n]=e[n];return function(e,n){var r,i=(n=n||{}).context||"default",a=n.onComment;if(Ce(e,t.scanner),t.locationMap.setSource(e,n.offset,n.line,n.column),t.filename=n.filename||"<unknown>",t.needPositions=Boolean(n.positions),t.onParseError="function"==typeof n.onParseError?n.onParseError:Fn,t.onParseErrorThrow=!1,t.parseAtrulePrelude=!("parseAtrulePrelude"in n)||Boolean(n.parseAtrulePrelude),t.parseRulePrelude=!("parseRulePrelude"in n)||Boolean(n.parseRulePrelude),t.parseValue=!("parseValue"in n)||Boolean(n.parseValue),t.parseCustomProperty="parseCustomProperty"in n&&Boolean(n.parseCustomProperty),!t.context.hasOwnProperty(i))throw new Error("Unknown context `"+i+"`");return"function"==typeof a&&t.scanner.forEachToken((n,r,i)=>{if(n===Un){const n=t.getLocation(r,i),o=_n(e,i-2,i,"*/")?e.slice(r+2,i-2):e.slice(r+2,i);a(o,n)}}),r=t.context[i].call(t,n),t.scanner.eof||t.error(),r}},Jn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),er=function(e){if(0<=e&&e<Jn.length)return Jn[e];throw new TypeError("Must be between 0 and 63: "+e)};var tr=function(e){var t,n="",r=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e);do{t=31&r,(r>>>=5)>0&&(t|=32),n+=er(t)}while(r>0);return n};var nr=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){t.getArg=function(e,t,n){if(t in e)return e[t];if(3===arguments.length)return n;throw new Error('"'+t+'" is a required argument.')};var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,r=/^data:.+\,.+$/;function i(e){var t=e.match(n);return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}function a(e){var t="";return e.scheme&&(t+=e.scheme+":"),t+="//",e.auth&&(t+=e.auth+"@"),e.host&&(t+=e.host),e.port&&(t+=":"+e.port),e.path&&(t+=e.path),t}function o(e){var n=e,r=i(e);if(r){if(!r.path)return e;n=r.path}for(var o,s=t.isAbsolute(n),l=n.split(/\/+/),c=0,u=l.length-1;u>=0;u--)"."===(o=l[u])?l.splice(u,1):".."===o?c++:c>0&&(""===o?(l.splice(u+1,c),c=0):(l.splice(u,2),c--));return""===(n=l.join("/"))&&(n=s?"/":"."),r?(r.path=n,a(r)):n}function s(e,t){""===e&&(e="."),""===t&&(t=".");var n=i(t),s=i(e);if(s&&(e=s.path||"/"),n&&!n.scheme)return s&&(n.scheme=s.scheme),a(n);if(n||t.match(r))return t;if(s&&!s.host&&!s.path)return s.host=t,a(s);var l="/"===t.charAt(0)?t:o(e.replace(/\/+$/,"")+"/"+t);return s?(s.path=l,a(s)):l}t.urlParse=i,t.urlGenerate=a,t.normalize=o,t.join=s,t.isAbsolute=function(e){return"/"===e.charAt(0)||n.test(e)},t.relative=function(e,t){""===e&&(e="."),e=e.replace(/\/$/,"");for(var n=0;0!==t.indexOf(e+"/");){var r=e.lastIndexOf("/");if(r<0)return t;if((e=e.slice(0,r)).match(/^([^\/]+:\/)?\/*$/))return t;++n}return Array(n+1).join("../")+t.substr(e.length+1)};var l=!("__proto__"in Object.create(null));function c(e){return e}function u(e){if(!e)return!1;var t=e.length;if(t<9)return!1;if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1;for(var n=t-10;n>=0;n--)if(36!==e.charCodeAt(n))return!1;return!0}function h(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}t.toSetString=l?c:function(e){return u(e)?"$"+e:e},t.fromSetString=l?c:function(e){return u(e)?e.slice(1):e},t.compareByOriginalPositions=function(e,t,n){var r=h(e.source,t.source);return 0!==r||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)||n||0!==(r=e.generatedColumn-t.generatedColumn)||0!==(r=e.generatedLine-t.generatedLine)?r:h(e.name,t.name)},t.compareByGeneratedPositionsDeflated=function(e,t,n){var r=e.generatedLine-t.generatedLine;return 0!==r||0!==(r=e.generatedColumn-t.generatedColumn)||n||0!==(r=h(e.source,t.source))||0!==(r=e.originalLine-t.originalLine)||0!==(r=e.originalColumn-t.originalColumn)?r:h(e.name,t.name)},t.compareByGeneratedPositionsInflated=function(e,t){var n=e.generatedLine-t.generatedLine;return 0!==n||0!==(n=e.generatedColumn-t.generatedColumn)||0!==(n=h(e.source,t.source))||0!==(n=e.originalLine-t.originalLine)||0!==(n=e.originalColumn-t.originalColumn)?n:h(e.name,t.name)},t.parseSourceMapInput=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))},t.computeSourceURL=function(e,t,n){if(t=t||"",e&&("/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/"),t=e+t),n){var r=i(n);if(!r)throw new Error("sourceMapURL could not be parsed");if(r.path){var l=r.path.lastIndexOf("/");l>=0&&(r.path=r.path.substring(0,l+1))}t=s(a(r),t)}return o(t)}})),rr=(nr.getArg,nr.urlParse,nr.urlGenerate,nr.normalize,nr.join,nr.isAbsolute,nr.relative,nr.toSetString,nr.fromSetString,nr.compareByOriginalPositions,nr.compareByGeneratedPositionsDeflated,nr.compareByGeneratedPositionsInflated,nr.parseSourceMapInput,nr.computeSourceURL,Object.prototype.hasOwnProperty),ir="undefined"!=typeof Map;function ar(){this._array=[],this._set=ir?new Map:Object.create(null)}ar.fromArray=function(e,t){for(var n=new ar,r=0,i=e.length;r<i;r++)n.add(e[r],t);return n},ar.prototype.size=function(){return ir?this._set.size:Object.getOwnPropertyNames(this._set).length},ar.prototype.add=function(e,t){var n=ir?e:nr.toSetString(e),r=ir?this.has(e):rr.call(this._set,n),i=this._array.length;r&&!t||this._array.push(e),r||(ir?this._set.set(e,i):this._set[n]=i)},ar.prototype.has=function(e){if(ir)return this._set.has(e);var t=nr.toSetString(e);return rr.call(this._set,t)},ar.prototype.indexOf=function(e){if(ir){var t=this._set.get(e);if(t>=0)return t}else{var n=nr.toSetString(e);if(rr.call(this._set,n))return this._set[n]}throw new Error('"'+e+'" is not in the set.')},ar.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e];throw new Error("No element indexed by "+e)},ar.prototype.toArray=function(){return this._array.slice()};var or={ArraySet:ar};function sr(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}sr.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},sr.prototype.add=function(e){var t,n,r,i,a,o;t=this._last,n=e,r=t.generatedLine,i=n.generatedLine,a=t.generatedColumn,o=n.generatedColumn,i>r||i==r&&o>=a||nr.compareByGeneratedPositionsInflated(t,n)<=0?(this._last=e,this._array.push(e)):(this._sorted=!1,this._array.push(e))},sr.prototype.toArray=function(){return this._sorted||(this._array.sort(nr.compareByGeneratedPositionsInflated),this._sorted=!0),this._array};var lr=or.ArraySet,cr={MappingList:sr}.MappingList;function ur(e){e||(e={}),this._file=nr.getArg(e,"file",null),this._sourceRoot=nr.getArg(e,"sourceRoot",null),this._skipValidation=nr.getArg(e,"skipValidation",!1),this._sources=new lr,this._names=new lr,this._mappings=new cr,this._sourcesContents=null}ur.prototype._version=3,ur.fromSourceMap=function(e){var t=e.sourceRoot,n=new ur({file:e.file,sourceRoot:t});return e.eachMapping((function(e){var r={generated:{line:e.generatedLine,column:e.generatedColumn}};null!=e.source&&(r.source=e.source,null!=t&&(r.source=nr.relative(t,r.source)),r.original={line:e.originalLine,column:e.originalColumn},null!=e.name&&(r.name=e.name)),n.addMapping(r)})),e.sources.forEach((function(r){var i=r;null!==t&&(i=nr.relative(t,r)),n._sources.has(i)||n._sources.add(i);var a=e.sourceContentFor(r);null!=a&&n.setSourceContent(r,a)})),n},ur.prototype.addMapping=function(e){var t=nr.getArg(e,"generated"),n=nr.getArg(e,"original",null),r=nr.getArg(e,"source",null),i=nr.getArg(e,"name",null);this._skipValidation||this._validateMapping(t,n,r,i),null!=r&&(r=String(r),this._sources.has(r)||this._sources.add(r)),null!=i&&(i=String(i),this._names.has(i)||this._names.add(i)),this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=n&&n.line,originalColumn:null!=n&&n.column,source:r,name:i})},ur.prototype.setSourceContent=function(e,t){var n=e;null!=this._sourceRoot&&(n=nr.relative(this._sourceRoot,n)),null!=t?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[nr.toSetString(n)]=t):this._sourcesContents&&(delete this._sourcesContents[nr.toSetString(n)],0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null))},ur.prototype.applySourceMap=function(e,t,n){var r=t;if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');r=e.file}var i=this._sourceRoot;null!=i&&(r=nr.relative(i,r));var a=new lr,o=new lr;this._mappings.unsortedForEach((function(t){if(t.source===r&&null!=t.originalLine){var s=e.originalPositionFor({line:t.originalLine,column:t.originalColumn});null!=s.source&&(t.source=s.source,null!=n&&(t.source=nr.join(n,t.source)),null!=i&&(t.source=nr.relative(i,t.source)),t.originalLine=s.line,t.originalColumn=s.column,null!=s.name&&(t.name=s.name))}var l=t.source;null==l||a.has(l)||a.add(l);var c=t.name;null==c||o.has(c)||o.add(c)}),this),this._sources=a,this._names=o,e.sources.forEach((function(t){var r=e.sourceContentFor(t);null!=r&&(null!=n&&(t=nr.join(n,t)),null!=i&&(t=nr.relative(i,t)),this.setSourceContent(t,r))}),this)},ur.prototype._validateMapping=function(e,t,n,r){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||n||r)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&n))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:t,name:r}))},ur.prototype._serializeMappings=function(){for(var e,t,n,r,i=0,a=1,o=0,s=0,l=0,c=0,u="",h=this._mappings.toArray(),p=0,d=h.length;p<d;p++){if(e="",(t=h[p]).generatedLine!==a)for(i=0;t.generatedLine!==a;)e+=";",a++;else if(p>0){if(!nr.compareByGeneratedPositionsInflated(t,h[p-1]))continue;e+=","}e+=tr(t.generatedColumn-i),i=t.generatedColumn,null!=t.source&&(r=this._sources.indexOf(t.source),e+=tr(r-c),c=r,e+=tr(t.originalLine-1-s),s=t.originalLine-1,e+=tr(t.originalColumn-o),o=t.originalColumn,null!=t.name&&(n=this._names.indexOf(t.name),e+=tr(n-l),l=n)),u+=e}return u},ur.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null;null!=t&&(e=nr.relative(t,e));var n=nr.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)},ur.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return null!=this._file&&(e.file=this._file),null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot),this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)),e},ur.prototype.toString=function(){return JSON.stringify(this.toJSON())};var hr={SourceMapGenerator:ur}.SourceMapGenerator,pr={Atrule:!0,Selector:!0,Declaration:!0},dr=Object.prototype.hasOwnProperty;function mr(e,t){var n=e.children,r=null;"function"!=typeof t?n.forEach(this.node,this):n.forEach((function(e){null!==r&&t.call(this,r),this.node(e),r=e}),this)}var gr=function(e){function t(e){if(!dr.call(n,e.type))throw new Error("Unknown node type: "+e.type);n[e.type].call(this,e)}var n={};if(e.node)for(var r in e.node)n[r]=e.node[r].generate;return function(e,n){var r="",i={children:mr,node:t,chunk:function(e){r+=e},result:function(){return r}};return n&&("function"==typeof n.decorator&&(i=n.decorator(i)),n.sourceMap&&(i=function(e){var t=new hr,n=1,r=0,i={line:1,column:0},a={line:0,column:0},o=!1,s={line:1,column:0},l={generated:s},c=e.node;e.node=function(e){if(e.loc&&e.loc.start&&pr.hasOwnProperty(e.type)){var u=e.loc.start.line,h=e.loc.start.column-1;a.line===u&&a.column===h||(a.line=u,a.column=h,i.line=n,i.column=r,o&&(o=!1,i.line===s.line&&i.column===s.column||t.addMapping(l)),o=!0,t.addMapping({source:e.loc.source,original:a,generated:i}))}c.call(this,e),o&&pr.hasOwnProperty(e.type)&&(s.line=n,s.column=r)};var u=e.chunk;e.chunk=function(e){for(var t=0;t<e.length;t++)10===e.charCodeAt(t)?(n++,r=0):r++;u(e)};var h=e.result;return e.result=function(){return o&&t.addMapping(l),{css:h(),map:t}},e}(i))),i.node(e),i.result()}},fr=Object.prototype.hasOwnProperty,br=function(){};function yr(e){return"function"==typeof e?e:br}function kr(e,t){return function(n,r,i){n.type===t&&e.call(this,n,r,i)}}function vr(e,t){var n=t.structure,r=[];for(var i in n)if(!1!==fr.call(n,i)){var a=n[i],o={name:i,type:!1,nullable:!1};Array.isArray(n[i])||(a=[n[i]]);for(var s=0;s<a.length;s++){var l=a[s];null===l?o.nullable=!0:"string"==typeof l?o.type="node":Array.isArray(l)&&(o.type="list")}o.type&&r.push(o)}return r.length?{context:t.walkContext,fields:r}:null}function xr(e,t){var n=e.fields.slice(),r=e.context,i="string"==typeof r;return t&&n.reverse(),function(e,a,o,s){var l;i&&(l=a[r],a[r]=e);for(var c=0;c<n.length;c++){var u=n[c],h=e[u.name];if(!u.nullable||h)if("list"===u.type){if(t?h.reduceRight(s,!1):h.reduce(s,!1))return!0}else if(o(h))return!0}i&&(a[r]=l)}}function wr(e){return{Atrule:{StyleSheet:e.StyleSheet,Atrule:e.Atrule,Rule:e.Rule,Block:e.Block},Rule:{StyleSheet:e.StyleSheet,Atrule:e.Atrule,Rule:e.Rule,Block:e.Block},Declaration:{StyleSheet:e.StyleSheet,Atrule:e.Atrule,Rule:e.Rule,Block:e.Block,DeclarationList:e.DeclarationList}}}var Sr=function(e){var t=function(e){var t={};for(var n in e.node)if(fr.call(e.node,n)){var r=e.node[n];if(!r.structure)throw new Error("Missed `structure` field in `"+n+"` node type definition");t[n]=vr(0,r)}return t}(e),n={},r={},i=Symbol("break-walk"),a=Symbol("skip-node");for(var o in t)fr.call(t,o)&&null!==t[o]&&(n[o]=xr(t[o],!1),r[o]=xr(t[o],!0));var s=wr(n),l=wr(r),c=function(e,o){function c(e,t,n){var r=h.call(m,e,t,n);return r===i||r!==a&&(!(!d.hasOwnProperty(e.type)||!d[e.type](e,m,c,u))||p.call(m,e,t,n)===i)}var u=(e,t,n,r)=>e||c(t,n,r),h=br,p=br,d=n,m={break:i,skip:a,root:e,stylesheet:null,atrule:null,atrulePrelude:null,rule:null,selector:null,block:null,declaration:null,function:null};if("function"==typeof o)h=o;else if(o&&(h=yr(o.enter),p=yr(o.leave),o.reverse&&(d=r),o.visit)){if(s.hasOwnProperty(o.visit))d=o.reverse?l[o.visit]:s[o.visit];else if(!t.hasOwnProperty(o.visit))throw new Error("Bad value `"+o.visit+"` for `visit` option (should be: "+Object.keys(t).join(", ")+")");h=kr(h,o.visit),p=kr(p,o.visit)}if(h===br&&p===br)throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");c(e)};return c.break=i,c.skip=a,c.find=function(e,t){var n=null;return c(e,(function(e,r,a){if(t.call(this,e,r,a))return n=e,i})),n},c.findLast=function(e,t){var n=null;return c(e,{reverse:!0,enter:function(e,r,a){if(t.call(this,e,r,a))return n=e,i}}),n},c.findAll=function(e,t){var n=[];return c(e,(function(e,r,i){t.call(this,e,r,i)&&n.push(e)})),n},c},Cr=function e(t){var n={};for(var r in t){var i=t[r];i&&(Array.isArray(i)||i instanceof a?i=i.map(e):i.constructor===Object&&(i=e(i))),n[r]=i}return n};const zr=Object.prototype.hasOwnProperty,Ar={generic:!0,types:Er,atrules:{prelude:Dr,descriptors:Dr},properties:Er,parseContext:function(e,t){return Object.assign(e,t)},scope:function e(t,n){for(const r in n)zr.call(n,r)&&(Pr(t[r])?e(t[r],Tr(n[r])):t[r]=Tr(n[r]));return t},atrule:["parse"],pseudo:["parse"],node:["name","structure","parse","generate","walkContext"]};function Pr(e){return e&&e.constructor===Object}function Tr(e){return Pr(e)?Object.assign({},e):e}function Lr(e,t){return"string"==typeof t&&/^\s*\|/.test(t)?"string"==typeof e?e+t:t.replace(/^\s*\|\s*/,""):t||null}function Er(e,t){if("string"==typeof t)return Lr(e,t);const n=Object.assign({},e);for(let r in t)zr.call(t,r)&&(n[r]=Lr(zr.call(e,r)?e[r]:void 0,t[r]));return n}function Dr(e,t){const n=Er(e,t);return!Pr(n)||Object.keys(n).length?n:null}var Or=(e,t)=>function e(t,n,r){for(const i in r)if(!1!==zr.call(r,i))if(!0===r[i])i in n&&zr.call(n,i)&&(t[i]=Tr(n[i]));else if(r[i])if("function"==typeof r[i]){const e=r[i];t[i]=e({},t[i]),t[i]=e(t[i]||{},n[i])}else if(Pr(r[i])){const a={};for(let n in t[i])a[n]=e({},t[i][n],r[i]);for(let t in n[i])a[t]=e(a[t]||{},n[i][t],r[i]);t[i]=a}else if(Array.isArray(r[i])){const a={},o=r[i].reduce((function(e,t){return e[t]=!0,e}),{});for(const[n,r]of Object.entries(t[i]||{}))a[n]={},r&&e(a[n],r,o);for(const t in n[i])zr.call(n[i],t)&&(a[t]||(a[t]={}),n[i]&&n[i][t]&&e(a[t],n[i][t],o));t[i]=a}return t}(e,t,Ar);function Br(e){var t=$n(e),n=Sr(e),r=gr(e),i=function(e){return{fromPlainObject:function(t){return e(t,{enter:function(e){e.children&&e.children instanceof a==!1&&(e.children=(new a).fromArray(e.children))}}),t},toPlainObject:function(t){return e(t,{leave:function(e){e.children&&e.children instanceof a&&(e.children=e.children.toArray())}}),t}}}(n),o={List:a,SyntaxError:l,TokenStream:H,Lexer:Ln,vendorPrefix:ae.vendorPrefix,keyword:ae.keyword,property:ae.property,isCustomProperty:ae.isCustomProperty,definitionSyntax:En,lexer:null,createLexer:function(e){return new Ln(e,o,o.lexer.structure)},tokenize:Ce,parse:t,walk:n,generate:r,find:n.find,findLast:n.findLast,findAll:n.findAll,clone:Cr,fromPlainObject:i.fromPlainObject,toPlainObject:i.toPlainObject,createSyntax:function(e){return Br(Or({},e))},fork:function(t){var n=Or({},e);return Br("function"==typeof t?t(n,Object.assign):Or(n,t))}};return o.lexer=new Ln({generic:!0,types:e.types,atrules:e.atrules,properties:e.properties,node:e.node},o),o}var Ir=function(e){return Br(Or({},e))},Nr={generic:!0,types:{"absolute-size":"xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large","alpha-value":"<number>|<percentage>","angle-percentage":"<angle>|<percentage>","angular-color-hint":"<angle-percentage>","angular-color-stop":"<color>&&<color-stop-angle>?","angular-color-stop-list":"[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>","animateable-feature":"scroll-position|contents|<custom-ident>",attachment:"scroll|fixed|local","attr()":"attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )","attr-matcher":"['~'|'|'|'^'|'$'|'*']? '='","attr-modifier":"i|s","attribute-selector":"'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'","auto-repeat":"repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )","auto-track-list":"[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?","baseline-position":"[first|last]? baseline","basic-shape":"<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>","bg-image":"none|<image>","bg-layer":"<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>","bg-position":"[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]","bg-size":"[<length-percentage>|auto]{1,2}|cover|contain","blur()":"blur( <length> )","blend-mode":"normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",box:"border-box|padding-box|content-box","brightness()":"brightness( <number-percentage> )","calc()":"calc( <calc-sum> )","calc-sum":"<calc-product> [['+'|'-'] <calc-product>]*","calc-product":"<calc-value> ['*' <calc-value>|'/' <number>]*","calc-value":"<number>|<dimension>|<percentage>|( <calc-sum> )","cf-final-image":"<image>|<color>","cf-mixing-image":"<percentage>?&&<image>","circle()":"circle( [<shape-radius>]? [at <position>]? )","clamp()":"clamp( <calc-sum>#{3} )","class-selector":"'.' <ident-token>","clip-source":"<url>",color:"<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>","color-stop":"<color-stop-length>|<color-stop-angle>","color-stop-angle":"<angle-percentage>{1,2}","color-stop-length":"<length-percentage>{1,2}","color-stop-list":"[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",combinator:"'>'|'+'|'~'|['||']","common-lig-values":"[common-ligatures|no-common-ligatures]","compat-auto":"searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button","composite-style":"clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor","compositing-operator":"add|subtract|intersect|exclude","compound-selector":"[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!","compound-selector-list":"<compound-selector>#","complex-selector":"<compound-selector> [<combinator>? <compound-selector>]*","complex-selector-list":"<complex-selector>#","conic-gradient()":"conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )","contextual-alt-values":"[contextual|no-contextual]","content-distribution":"space-between|space-around|space-evenly|stretch","content-list":"[<string>|contents|<image>|<quote>|<target>|<leader()>|<attr()>|counter( <ident> , <'list-style-type'>? )]+","content-position":"center|start|end|flex-start|flex-end","content-replacement":"<image>","contrast()":"contrast( [<number-percentage>] )","counter()":"counter( <custom-ident> , <counter-style>? )","counter-style":"<counter-style-name>|symbols( )","counter-style-name":"<custom-ident>","counters()":"counters( <custom-ident> , <string> , <counter-style>? )","cross-fade()":"cross-fade( <cf-mixing-image> , <cf-final-image>? )","cubic-bezier-timing-function":"ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )","deprecated-system-color":"ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText","discretionary-lig-values":"[discretionary-ligatures|no-discretionary-ligatures]","display-box":"contents|none","display-inside":"flow|flow-root|table|flex|grid|ruby","display-internal":"table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container","display-legacy":"inline-block|inline-list-item|inline-table|inline-flex|inline-grid","display-listitem":"<display-outside>?&&[flow|flow-root]?&&list-item","display-outside":"block|inline|run-in","drop-shadow()":"drop-shadow( <length>{2,3} <color>? )","east-asian-variant-values":"[jis78|jis83|jis90|jis04|simplified|traditional]","east-asian-width-values":"[full-width|proportional-width]","element()":"element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )","ellipse()":"ellipse( [<shape-radius>{2}]? [at <position>]? )","ending-shape":"circle|ellipse","env()":"env( <custom-ident> , <declaration-value>? )","explicit-track-list":"[<line-names>? <track-size>]+ <line-names>?","family-name":"<string>|<custom-ident>+","feature-tag-value":"<string> [<integer>|on|off]?","feature-type":"@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation","feature-value-block":"<feature-type> '{' <feature-value-declaration-list> '}'","feature-value-block-list":"<feature-value-block>+","feature-value-declaration":"<custom-ident> : <integer>+ ;","feature-value-declaration-list":"<feature-value-declaration>","feature-value-name":"<custom-ident>","fill-rule":"nonzero|evenodd","filter-function":"<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>","filter-function-list":"[<filter-function>|<url>]+","final-bg-layer":"<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>","fit-content()":"fit-content( [<length>|<percentage>] )","fixed-breadth":"<length-percentage>","fixed-repeat":"repeat( [<positive-integer>] , [<line-names>? <fixed-size>]+ <line-names>? )","fixed-size":"<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )","font-stretch-absolute":"normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>","font-variant-css21":"[normal|small-caps]","font-weight-absolute":"normal|bold|<number [1,1000]>","frequency-percentage":"<frequency>|<percentage>","general-enclosed":"[<function-token> <any-value> )]|( <ident> <any-value> )","generic-family":"serif|sans-serif|cursive|fantasy|monospace|-apple-system","generic-name":"serif|sans-serif|cursive|fantasy|monospace","geometry-box":"<shape-box>|fill-box|stroke-box|view-box",gradient:"<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<-legacy-gradient>","grayscale()":"grayscale( <number-percentage> )","grid-line":"auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]","historical-lig-values":"[historical-ligatures|no-historical-ligatures]","hsl()":"hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )","hsla()":"hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",hue:"<number>|<angle>","hue-rotate()":"hue-rotate( <angle> )",image:"<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>","image()":"image( <image-tags>? [<image-src>? , <color>?]! )","image-set()":"image-set( <image-set-option># )","image-set-option":"[<image>|<string>] <resolution>","image-src":"<url>|<string>","image-tags":"ltr|rtl","inflexible-breadth":"<length>|<percentage>|min-content|max-content|auto","inset()":"inset( <length-percentage>{1,4} [round <'border-radius'>]? )","invert()":"invert( <number-percentage> )","keyframes-name":"<custom-ident>|<string>","keyframe-block":"<keyframe-selector># { <declaration-list> }","keyframe-block-list":"<keyframe-block>+","keyframe-selector":"from|to|<percentage>","leader()":"leader( <leader-type> )","leader-type":"dotted|solid|space|<string>","length-percentage":"<length>|<percentage>","line-names":"'[' <custom-ident>* ']'","line-name-list":"[<line-names>|<name-repeat>]+","line-style":"none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset","line-width":"<length>|thin|medium|thick","linear-color-hint":"<length-percentage>","linear-color-stop":"<color> <color-stop-length>?","linear-gradient()":"linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )","mask-layer":"<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>","mask-position":"[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?","mask-reference":"none|<image>|<mask-source>","mask-source":"<url>","masking-mode":"alpha|luminance|match-source","matrix()":"matrix( <number>#{6} )","matrix3d()":"matrix3d( <number>#{16} )","max()":"max( <calc-sum># )","media-and":"<media-in-parens> [and <media-in-parens>]+","media-condition":"<media-not>|<media-and>|<media-or>|<media-in-parens>","media-condition-without-or":"<media-not>|<media-and>|<media-in-parens>","media-feature":"( [<mf-plain>|<mf-boolean>|<mf-range>] )","media-in-parens":"( <media-condition> )|<media-feature>|<general-enclosed>","media-not":"not <media-in-parens>","media-or":"<media-in-parens> [or <media-in-parens>]+","media-query":"<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?","media-query-list":"<media-query>#","media-type":"<ident>","mf-boolean":"<mf-name>","mf-name":"<ident>","mf-plain":"<mf-name> : <mf-value>","mf-range":"<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>","mf-value":"<number>|<dimension>|<ident>|<ratio>","min()":"min( <calc-sum># )","minmax()":"minmax( [<length>|<percentage>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )","named-color":"transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>","namespace-prefix":"<ident>","ns-prefix":"[<ident-token>|'*']? '|'","number-percentage":"<number>|<percentage>","numeric-figure-values":"[lining-nums|oldstyle-nums]","numeric-fraction-values":"[diagonal-fractions|stacked-fractions]","numeric-spacing-values":"[proportional-nums|tabular-nums]",nth:"<an-plus-b>|even|odd","opacity()":"opacity( [<number-percentage>] )","overflow-position":"unsafe|safe","outline-radius":"<length>|<percentage>","page-body":"<declaration>? [; <page-body>]?|<page-margin-box> <page-body>","page-margin-box":"<page-margin-box-type> '{' <declaration-list> '}'","page-margin-box-type":"@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom","page-selector-list":"[<page-selector>#]?","page-selector":"<pseudo-page>+|<ident> <pseudo-page>*","path()":"path( [<fill-rule> ,]? <string> )","paint()":"paint( <ident> , <declaration-value>? )","perspective()":"perspective( <length> )","polygon()":"polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",position:"[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]","pseudo-class-selector":"':' <ident-token>|':' <function-token> <any-value> ')'","pseudo-element-selector":"':' <pseudo-class-selector>","pseudo-page":": [left|right|first|blank]",quote:"open-quote|close-quote|no-open-quote|no-close-quote","radial-gradient()":"radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )","relative-selector":"<combinator>? <complex-selector>","relative-selector-list":"<relative-selector>#","relative-size":"larger|smaller","repeat-style":"repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}","repeating-linear-gradient()":"repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )","repeating-radial-gradient()":"repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )","rgb()":"rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )","rgba()":"rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )","rotate()":"rotate( [<angle>|<zero>] )","rotate3d()":"rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )","rotateX()":"rotateX( [<angle>|<zero>] )","rotateY()":"rotateY( [<angle>|<zero>] )","rotateZ()":"rotateZ( [<angle>|<zero>] )","saturate()":"saturate( <number-percentage> )","scale()":"scale( <number> , <number>? )","scale3d()":"scale3d( <number> , <number> , <number> )","scaleX()":"scaleX( <number> )","scaleY()":"scaleY( <number> )","scaleZ()":"scaleZ( <number> )","self-position":"center|start|end|self-start|self-end|flex-start|flex-end","shape-radius":"<length-percentage>|closest-side|farthest-side","skew()":"skew( [<angle>|<zero>] , [<angle>|<zero>]? )","skewX()":"skewX( [<angle>|<zero>] )","skewY()":"skewY( [<angle>|<zero>] )","sepia()":"sepia( <number-percentage> )",shadow:"inset?&&<length>{2,4}&&<color>?","shadow-t":"[<length>{2,3}&&<color>?]",shape:"rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )","shape-box":"<box>|margin-box","side-or-corner":"[left|right]||[top|bottom]","single-animation":"<time>||<timing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]","single-animation-direction":"normal|reverse|alternate|alternate-reverse","single-animation-fill-mode":"none|forwards|backwards|both","single-animation-iteration-count":"infinite|<number>","single-animation-play-state":"running|paused","single-transition":"[none|<single-transition-property>]||<time>||<timing-function>||<time>","single-transition-property":"all|<custom-ident>",size:"closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}","step-position":"jump-start|jump-end|jump-none|jump-both|start|end","step-timing-function":"step-start|step-end|steps( <integer> [, <step-position>]? )","subclass-selector":"<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>","supports-condition":"not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*","supports-in-parens":"( <supports-condition> )|<supports-feature>|<general-enclosed>","supports-feature":"<supports-decl>|<supports-selector-fn>","supports-decl":"( <declaration> )","supports-selector-fn":"selector( <complex-selector> )",symbol:"<string>|<image>|<custom-ident>",target:"<target-counter()>|<target-counters()>|<target-text()>","target-counter()":"target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )","target-counters()":"target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )","target-text()":"target-text( [<string>|<url>] , [content|before|after|first-letter]? )","time-percentage":"<time>|<percentage>","timing-function":"linear|<cubic-bezier-timing-function>|<step-timing-function>","track-breadth":"<length-percentage>|<flex>|min-content|max-content|auto","track-list":"[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?","track-repeat":"repeat( [<positive-integer>] , [<line-names>? <track-size>]+ <line-names>? )","track-size":"<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )","transform-function":"<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>","transform-list":"<transform-function>+","translate()":"translate( <length-percentage> , <length-percentage>? )","translate3d()":"translate3d( <length-percentage> , <length-percentage> , <length> )","translateX()":"translateX( <length-percentage> )","translateY()":"translateY( <length-percentage> )","translateZ()":"translateZ( <length> )","type-or-unit":"string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%","type-selector":"<wq-name>|<ns-prefix>? '*'","var()":"var( <custom-property-name> , <declaration-value>? )","viewport-length":"auto|<length-percentage>","wq-name":"<ns-prefix>? <ident-token>","-legacy-gradient":"<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>","-legacy-linear-gradient":"-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-repeating-linear-gradient":"-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-linear-gradient-arguments":"[<angle>|<side-or-corner>]? , <color-stop-list>","-legacy-radial-gradient":"-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-repeating-radial-gradient":"-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-radial-gradient-arguments":"[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>","-legacy-radial-gradient-size":"closest-side|closest-corner|farthest-side|farthest-corner|contain|cover","-legacy-radial-gradient-shape":"circle|ellipse","-non-standard-font":"-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body","-non-standard-color":"-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text","-non-standard-image-rendering":"optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast","-non-standard-overflow":"-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable","-non-standard-width":"fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content","-webkit-gradient()":"-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )","-webkit-gradient-color-stop":"from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )","-webkit-gradient-point":"[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]","-webkit-gradient-radius":"<length>|<percentage>","-webkit-gradient-type":"linear|radial","-webkit-mask-box-repeat":"repeat|stretch|round","-webkit-mask-clip-style":"border|border-box|padding|padding-box|content|content-box|text","-ms-filter-function-list":"<-ms-filter-function>+","-ms-filter-function":"<-ms-filter-function-progid>|<-ms-filter-function-legacy>","-ms-filter-function-progid":"'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]","-ms-filter-function-legacy":"<ident-token>|<function-token> <any-value>? )","-ms-filter":"<string>",age:"child|young|old","attr-name":"<wq-name>","attr-fallback":"<any-value>","border-radius":"<length-percentage>{1,2}",bottom:"<length>|auto","generic-voice":"[<age>? <gender> <integer>?]",gender:"male|female|neutral",left:"<length>|auto","mask-image":"<mask-reference>#","name-repeat":"repeat( [<positive-integer>|auto-fill] , <line-names>+ )",paint:"none|<color>|<url> [none|<color>]?|context-fill|context-stroke","page-size":"A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",ratio:"<integer> / <integer>",right:"<length>|auto","svg-length":"<percentage>|<length>|<number>","svg-writing-mode":"lr-tb|rl-tb|tb-rl|lr|rl|tb",top:"<length>|auto","track-group":"'(' [<string>* <track-minmax> <string>*]+ ')' ['[' <positive-integer> ']']?|<track-minmax>","track-list-v0":"[<string>* <track-group> <string>*]+|none","track-minmax":"minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content",x:"<number>",y:"<number>",declaration:"<ident-token> : <declaration-value>? ['!' important]?","declaration-list":"[<declaration>? ';']* <declaration>?",url:"url( <string> <url-modifier>* )|<url-token>","url-modifier":"<ident>|<function-token> <any-value> )","number-zero-one":"<number [0,1]>","number-one-or-greater":"<number [1,∞]>","positive-integer":"<integer [0,∞]>","-non-standard-display":"-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"},properties:{"--*":"<declaration-value>","-ms-accelerator":"false|true","-ms-block-progression":"tb|rl|bt|lr","-ms-content-zoom-chaining":"none|chained","-ms-content-zooming":"none|zoom","-ms-content-zoom-limit":"<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>","-ms-content-zoom-limit-max":"<percentage>","-ms-content-zoom-limit-min":"<percentage>","-ms-content-zoom-snap":"<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>","-ms-content-zoom-snap-points":"snapInterval( <percentage> , <percentage> )|snapList( <percentage># )","-ms-content-zoom-snap-type":"none|proximity|mandatory","-ms-filter":"<string>","-ms-flow-from":"[none|<custom-ident>]#","-ms-flow-into":"[none|<custom-ident>]#","-ms-grid-columns":"none|<track-list>|<auto-track-list>","-ms-grid-rows":"none|<track-list>|<auto-track-list>","-ms-high-contrast-adjust":"auto|none","-ms-hyphenate-limit-chars":"auto|<integer>{1,3}","-ms-hyphenate-limit-lines":"no-limit|<integer>","-ms-hyphenate-limit-zone":"<percentage>|<length>","-ms-ime-align":"auto|after","-ms-overflow-style":"auto|none|scrollbar|-ms-autohiding-scrollbar","-ms-scrollbar-3dlight-color":"<color>","-ms-scrollbar-arrow-color":"<color>","-ms-scrollbar-base-color":"<color>","-ms-scrollbar-darkshadow-color":"<color>","-ms-scrollbar-face-color":"<color>","-ms-scrollbar-highlight-color":"<color>","-ms-scrollbar-shadow-color":"<color>","-ms-scrollbar-track-color":"<color>","-ms-scroll-chaining":"chained|none","-ms-scroll-limit":"<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>","-ms-scroll-limit-x-max":"auto|<length>","-ms-scroll-limit-x-min":"<length>","-ms-scroll-limit-y-max":"auto|<length>","-ms-scroll-limit-y-min":"<length>","-ms-scroll-rails":"none|railed","-ms-scroll-snap-points-x":"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )","-ms-scroll-snap-points-y":"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )","-ms-scroll-snap-type":"none|proximity|mandatory","-ms-scroll-snap-x":"<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>","-ms-scroll-snap-y":"<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>","-ms-scroll-translation":"none|vertical-to-horizontal","-ms-text-autospace":"none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space","-ms-touch-select":"grippers|none","-ms-user-select":"none|element|text","-ms-wrap-flow":"auto|both|start|end|maximum|clear","-ms-wrap-margin":"<length>","-ms-wrap-through":"wrap|none","-moz-appearance":"none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized","-moz-binding":"<url>|none","-moz-border-bottom-colors":"<color>+|none","-moz-border-left-colors":"<color>+|none","-moz-border-right-colors":"<color>+|none","-moz-border-top-colors":"<color>+|none","-moz-context-properties":"none|[fill|fill-opacity|stroke|stroke-opacity]#","-moz-float-edge":"border-box|content-box|margin-box|padding-box","-moz-force-broken-image-icon":"<integer [0,1]>","-moz-image-region":"<shape>|auto","-moz-orient":"inline|block|horizontal|vertical","-moz-outline-radius":"<outline-radius>{1,4} [/ <outline-radius>{1,4}]?","-moz-outline-radius-bottomleft":"<outline-radius>","-moz-outline-radius-bottomright":"<outline-radius>","-moz-outline-radius-topleft":"<outline-radius>","-moz-outline-radius-topright":"<outline-radius>","-moz-stack-sizing":"ignore|stretch-to-fit","-moz-text-blink":"none|blink","-moz-user-focus":"ignore|normal|select-after|select-before|select-menu|select-same|select-all|none","-moz-user-input":"auto|none|enabled|disabled","-moz-user-modify":"read-only|read-write|write-only","-moz-window-dragging":"drag|no-drag","-moz-window-shadow":"default|menu|tooltip|sheet|none","-webkit-appearance":"none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button","-webkit-border-before":"<'border-width'>||<'border-style'>||<'color'>","-webkit-border-before-color":"<'color'>","-webkit-border-before-style":"<'border-style'>","-webkit-border-before-width":"<'border-width'>","-webkit-box-reflect":"[above|below|right|left]? <length>? <image>?","-webkit-line-clamp":"none|<integer>","-webkit-mask":"[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#","-webkit-mask-attachment":"<attachment>#","-webkit-mask-clip":"[<box>|border|padding|content|text]#","-webkit-mask-composite":"<composite-style>#","-webkit-mask-image":"<mask-reference>#","-webkit-mask-origin":"[<box>|border|padding|content]#","-webkit-mask-position":"<position>#","-webkit-mask-position-x":"[<length-percentage>|left|center|right]#","-webkit-mask-position-y":"[<length-percentage>|top|center|bottom]#","-webkit-mask-repeat":"<repeat-style>#","-webkit-mask-repeat-x":"repeat|no-repeat|space|round","-webkit-mask-repeat-y":"repeat|no-repeat|space|round","-webkit-mask-size":"<bg-size>#","-webkit-overflow-scrolling":"auto|touch","-webkit-tap-highlight-color":"<color>","-webkit-text-fill-color":"<color>","-webkit-text-stroke":"<length>||<color>","-webkit-text-stroke-color":"<color>","-webkit-text-stroke-width":"<length>","-webkit-touch-callout":"default|none","-webkit-user-modify":"read-only|read-write|read-write-plaintext-only","align-content":"normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>","align-items":"normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]","align-self":"auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>","align-tracks":"[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",all:"initial|inherit|unset|revert",animation:"<single-animation>#","animation-delay":"<time>#","animation-direction":"<single-animation-direction>#","animation-duration":"<time>#","animation-fill-mode":"<single-animation-fill-mode>#","animation-iteration-count":"<single-animation-iteration-count>#","animation-name":"[none|<keyframes-name>]#","animation-play-state":"<single-animation-play-state>#","animation-timing-function":"<timing-function>#",appearance:"none|auto|textfield|menulist-button|<compat-auto>","aspect-ratio":"auto|<ratio>",azimuth:"<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards","backdrop-filter":"none|<filter-function-list>","backface-visibility":"visible|hidden",background:"[<bg-layer> ,]* <final-bg-layer>","background-attachment":"<attachment>#","background-blend-mode":"<blend-mode>#","background-clip":"<box>#","background-color":"<color>","background-image":"<bg-image>#","background-origin":"<box>#","background-position":"<bg-position>#","background-position-x":"[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#","background-position-y":"[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#","background-repeat":"<repeat-style>#","background-size":"<bg-size>#","block-overflow":"clip|ellipsis|<string>","block-size":"<'width'>",border:"<line-width>||<line-style>||<color>","border-block":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-block-color":"<'border-top-color'>{1,2}","border-block-style":"<'border-top-style'>","border-block-width":"<'border-top-width'>","border-block-end":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-block-end-color":"<'border-top-color'>","border-block-end-style":"<'border-top-style'>","border-block-end-width":"<'border-top-width'>","border-block-start":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-block-start-color":"<'border-top-color'>","border-block-start-style":"<'border-top-style'>","border-block-start-width":"<'border-top-width'>","border-bottom":"<line-width>||<line-style>||<color>","border-bottom-color":"<'border-top-color'>","border-bottom-left-radius":"<length-percentage>{1,2}","border-bottom-right-radius":"<length-percentage>{1,2}","border-bottom-style":"<line-style>","border-bottom-width":"<line-width>","border-collapse":"collapse|separate","border-color":"<color>{1,4}","border-end-end-radius":"<length-percentage>{1,2}","border-end-start-radius":"<length-percentage>{1,2}","border-image":"<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>","border-image-outset":"[<length>|<number>]{1,4}","border-image-repeat":"[stretch|repeat|round|space]{1,2}","border-image-slice":"<number-percentage>{1,4}&&fill?","border-image-source":"none|<image>","border-image-width":"[<length-percentage>|<number>|auto]{1,4}","border-inline":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-inline-end":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-inline-color":"<'border-top-color'>{1,2}","border-inline-style":"<'border-top-style'>","border-inline-width":"<'border-top-width'>","border-inline-end-color":"<'border-top-color'>","border-inline-end-style":"<'border-top-style'>","border-inline-end-width":"<'border-top-width'>","border-inline-start":"<'border-top-width'>||<'border-top-style'>||<'color'>","border-inline-start-color":"<'border-top-color'>","border-inline-start-style":"<'border-top-style'>","border-inline-start-width":"<'border-top-width'>","border-left":"<line-width>||<line-style>||<color>","border-left-color":"<color>","border-left-style":"<line-style>","border-left-width":"<line-width>","border-radius":"<length-percentage>{1,4} [/ <length-percentage>{1,4}]?","border-right":"<line-width>||<line-style>||<color>","border-right-color":"<color>","border-right-style":"<line-style>","border-right-width":"<line-width>","border-spacing":"<length> <length>?","border-start-end-radius":"<length-percentage>{1,2}","border-start-start-radius":"<length-percentage>{1,2}","border-style":"<line-style>{1,4}","border-top":"<line-width>||<line-style>||<color>","border-top-color":"<color>","border-top-left-radius":"<length-percentage>{1,2}","border-top-right-radius":"<length-percentage>{1,2}","border-top-style":"<line-style>","border-top-width":"<line-width>","border-width":"<line-width>{1,4}",bottom:"<length>|<percentage>|auto","box-align":"start|center|end|baseline|stretch","box-decoration-break":"slice|clone","box-direction":"normal|reverse|inherit","box-flex":"<number>","box-flex-group":"<integer>","box-lines":"single|multiple","box-ordinal-group":"<integer>","box-orient":"horizontal|vertical|inline-axis|block-axis|inherit","box-pack":"start|center|end|justify","box-shadow":"none|<shadow>#","box-sizing":"content-box|border-box","break-after":"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region","break-before":"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region","break-inside":"auto|avoid|avoid-page|avoid-column|avoid-region","caption-side":"top|bottom|block-start|block-end|inline-start|inline-end","caret-color":"auto|<color>",clear:"none|left|right|both|inline-start|inline-end",clip:"<shape>|auto","clip-path":"<clip-source>|[<basic-shape>||<geometry-box>]|none",color:"<color>","color-adjust":"economy|exact","column-count":"<integer>|auto","column-fill":"auto|balance|balance-all","column-gap":"normal|<length-percentage>","column-rule":"<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>","column-rule-color":"<color>","column-rule-style":"<'border-style'>","column-rule-width":"<'border-width'>","column-span":"none|all","column-width":"<length>|auto",columns:"<'column-width'>||<'column-count'>",contain:"none|strict|content|[size||layout||style||paint]",content:"normal|none|[<content-replacement>|<content-list>] [/ <string>]?","counter-increment":"[<custom-ident> <integer>?]+|none","counter-reset":"[<custom-ident> <integer>?]+|none","counter-set":"[<custom-ident> <integer>?]+|none",cursor:"[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",direction:"ltr|rtl",display:"[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>","empty-cells":"show|hide",filter:"none|<filter-function-list>|<-ms-filter-function-list>",flex:"none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]","flex-basis":"content|<'width'>","flex-direction":"row|row-reverse|column|column-reverse","flex-flow":"<'flex-direction'>||<'flex-wrap'>","flex-grow":"<number>","flex-shrink":"<number>","flex-wrap":"nowrap|wrap|wrap-reverse",float:"left|right|none|inline-start|inline-end",font:"[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar","font-family":"[<family-name>|<generic-family>]#","font-feature-settings":"normal|<feature-tag-value>#","font-kerning":"auto|normal|none","font-language-override":"normal|<string>","font-optical-sizing":"auto|none","font-variation-settings":"normal|[<string> <number>]#","font-size":"<absolute-size>|<relative-size>|<length-percentage>","font-size-adjust":"none|<number>","font-smooth":"auto|never|always|<absolute-size>|<length>","font-stretch":"<font-stretch-absolute>","font-style":"normal|italic|oblique <angle>?","font-synthesis":"none|[weight||style]","font-variant":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]","font-variant-alternates":"normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]","font-variant-caps":"normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps","font-variant-east-asian":"normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]","font-variant-ligatures":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]","font-variant-numeric":"normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]","font-variant-position":"normal|sub|super","font-weight":"<font-weight-absolute>|bolder|lighter",gap:"<'row-gap'> <'column-gap'>?",grid:"<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>","grid-area":"<grid-line> [/ <grid-line>]{0,3}","grid-auto-columns":"<track-size>+","grid-auto-flow":"[row|column]||dense","grid-auto-rows":"<track-size>+","grid-column":"<grid-line> [/ <grid-line>]?","grid-column-end":"<grid-line>","grid-column-gap":"<length-percentage>","grid-column-start":"<grid-line>","grid-gap":"<'grid-row-gap'> <'grid-column-gap'>?","grid-row":"<grid-line> [/ <grid-line>]?","grid-row-end":"<grid-line>","grid-row-gap":"<length-percentage>","grid-row-start":"<grid-line>","grid-template":"none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?","grid-template-areas":"none|<string>+","grid-template-columns":"none|<track-list>|<auto-track-list>|subgrid <line-name-list>?","grid-template-rows":"none|<track-list>|<auto-track-list>|subgrid <line-name-list>?","hanging-punctuation":"none|[first||[force-end|allow-end]||last]",height:"auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )",hyphens:"none|manual|auto","image-orientation":"from-image|<angle>|[<angle>? flip]","image-rendering":"auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>","image-resolution":"[from-image||<resolution>]&&snap?","ime-mode":"auto|normal|active|inactive|disabled","initial-letter":"normal|[<number> <integer>?]","initial-letter-align":"[auto|alphabetic|hanging|ideographic]","inline-size":"<'width'>",inset:"<'top'>{1,4}","inset-block":"<'top'>{1,2}","inset-block-end":"<'top'>","inset-block-start":"<'top'>","inset-inline":"<'top'>{1,2}","inset-inline-end":"<'top'>","inset-inline-start":"<'top'>",isolation:"auto|isolate","justify-content":"normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]","justify-items":"normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]","justify-self":"auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]","justify-tracks":"[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",left:"<length>|<percentage>|auto","letter-spacing":"normal|<length-percentage>","line-break":"auto|loose|normal|strict|anywhere","line-clamp":"none|<integer>","line-height":"normal|<number>|<length>|<percentage>","line-height-step":"<length>","list-style":"<'list-style-type'>||<'list-style-position'>||<'list-style-image'>","list-style-image":"<url>|none","list-style-position":"inside|outside","list-style-type":"<counter-style>|<string>|none",margin:"[<length>|<percentage>|auto]{1,4}","margin-block":"<'margin-left'>{1,2}","margin-block-end":"<'margin-left'>","margin-block-start":"<'margin-left'>","margin-bottom":"<length>|<percentage>|auto","margin-inline":"<'margin-left'>{1,2}","margin-inline-end":"<'margin-left'>","margin-inline-start":"<'margin-left'>","margin-left":"<length>|<percentage>|auto","margin-right":"<length>|<percentage>|auto","margin-top":"<length>|<percentage>|auto","margin-trim":"none|in-flow|all",mask:"<mask-layer>#","mask-border":"<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>","mask-border-mode":"luminance|alpha","mask-border-outset":"[<length>|<number>]{1,4}","mask-border-repeat":"[stretch|repeat|round|space]{1,2}","mask-border-slice":"<number-percentage>{1,4} fill?","mask-border-source":"none|<image>","mask-border-width":"[<length-percentage>|<number>|auto]{1,4}","mask-clip":"[<geometry-box>|no-clip]#","mask-composite":"<compositing-operator>#","mask-image":"<mask-reference>#","mask-mode":"<masking-mode>#","mask-origin":"<geometry-box>#","mask-position":"<position>#","mask-repeat":"<repeat-style>#","mask-size":"<bg-size>#","mask-type":"luminance|alpha","masonry-auto-flow":"[pack|next]||[definite-first|ordered]","math-style":"normal|compact","max-block-size":"<'max-width'>","max-height":"none|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )","max-inline-size":"<'max-width'>","max-lines":"none|<integer>","max-width":"none|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )|<-non-standard-width>","min-block-size":"<'min-width'>","min-height":"auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )","min-inline-size":"<'min-width'>","min-width":"auto|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )|<-non-standard-width>","mix-blend-mode":"<blend-mode>","object-fit":"fill|contain|cover|none|scale-down","object-position":"<position>",offset:"[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?","offset-anchor":"auto|<position>","offset-distance":"<length-percentage>","offset-path":"none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]","offset-position":"auto|<position>","offset-rotate":"[auto|reverse]||<angle>",opacity:"<alpha-value>",order:"<integer>",orphans:"<integer>",outline:"[<'outline-color'>||<'outline-style'>||<'outline-width'>]","outline-color":"<color>|invert","outline-offset":"<length>","outline-style":"auto|<'border-style'>","outline-width":"<line-width>",overflow:"[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>","overflow-anchor":"auto|none","overflow-block":"visible|hidden|clip|scroll|auto","overflow-clip-box":"padding-box|content-box","overflow-inline":"visible|hidden|clip|scroll|auto","overflow-wrap":"normal|break-word|anywhere","overflow-x":"visible|hidden|clip|scroll|auto","overflow-y":"visible|hidden|clip|scroll|auto","overscroll-behavior":"[contain|none|auto]{1,2}","overscroll-behavior-block":"contain|none|auto","overscroll-behavior-inline":"contain|none|auto","overscroll-behavior-x":"contain|none|auto","overscroll-behavior-y":"contain|none|auto",padding:"[<length>|<percentage>]{1,4}","padding-block":"<'padding-left'>{1,2}","padding-block-end":"<'padding-left'>","padding-block-start":"<'padding-left'>","padding-bottom":"<length>|<percentage>","padding-inline":"<'padding-left'>{1,2}","padding-inline-end":"<'padding-left'>","padding-inline-start":"<'padding-left'>","padding-left":"<length>|<percentage>","padding-right":"<length>|<percentage>","padding-top":"<length>|<percentage>","page-break-after":"auto|always|avoid|left|right|recto|verso","page-break-before":"auto|always|avoid|left|right|recto|verso","page-break-inside":"auto|avoid","paint-order":"normal|[fill||stroke||markers]",perspective:"none|<length>","perspective-origin":"<position>","place-content":"<'align-content'> <'justify-content'>?","place-items":"<'align-items'> <'justify-items'>?","place-self":"<'align-self'> <'justify-self'>?","pointer-events":"auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",position:"static|relative|absolute|sticky|fixed|-webkit-sticky",quotes:"none|auto|[<string> <string>]+",resize:"none|both|horizontal|vertical|block|inline",right:"<length>|<percentage>|auto",rotate:"none|<angle>|[x|y|z|<number>{3}]&&<angle>","row-gap":"normal|<length-percentage>","ruby-align":"start|center|space-between|space-around","ruby-merge":"separate|collapse|auto","ruby-position":"over|under|inter-character",scale:"none|<number>{1,3}","scrollbar-color":"auto|dark|light|<color>{2}","scrollbar-gutter":"auto|[stable|always]&&both?&&force?","scrollbar-width":"auto|thin|none","scroll-behavior":"auto|smooth","scroll-margin":"<length>{1,4}","scroll-margin-block":"<length>{1,2}","scroll-margin-block-start":"<length>","scroll-margin-block-end":"<length>","scroll-margin-bottom":"<length>","scroll-margin-inline":"<length>{1,2}","scroll-margin-inline-start":"<length>","scroll-margin-inline-end":"<length>","scroll-margin-left":"<length>","scroll-margin-right":"<length>","scroll-margin-top":"<length>","scroll-padding":"[auto|<length-percentage>]{1,4}","scroll-padding-block":"[auto|<length-percentage>]{1,2}","scroll-padding-block-start":"auto|<length-percentage>","scroll-padding-block-end":"auto|<length-percentage>","scroll-padding-bottom":"auto|<length-percentage>","scroll-padding-inline":"[auto|<length-percentage>]{1,2}","scroll-padding-inline-start":"auto|<length-percentage>","scroll-padding-inline-end":"auto|<length-percentage>","scroll-padding-left":"auto|<length-percentage>","scroll-padding-right":"auto|<length-percentage>","scroll-padding-top":"auto|<length-percentage>","scroll-snap-align":"[none|start|end|center]{1,2}","scroll-snap-coordinate":"none|<position>#","scroll-snap-destination":"<position>","scroll-snap-points-x":"none|repeat( <length-percentage> )","scroll-snap-points-y":"none|repeat( <length-percentage> )","scroll-snap-stop":"normal|always","scroll-snap-type":"none|[x|y|block|inline|both] [mandatory|proximity]?","scroll-snap-type-x":"none|mandatory|proximity","scroll-snap-type-y":"none|mandatory|proximity","shape-image-threshold":"<alpha-value>","shape-margin":"<length-percentage>","shape-outside":"none|<shape-box>||<basic-shape>|<image>","tab-size":"<integer>|<length>","table-layout":"auto|fixed","text-align":"start|end|left|right|center|justify|match-parent","text-align-last":"auto|start|end|left|right|center|justify","text-combine-upright":"none|all|[digits <integer>?]","text-decoration":"<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>","text-decoration-color":"<color>","text-decoration-line":"none|[underline||overline||line-through||blink]|spelling-error|grammar-error","text-decoration-skip":"none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]","text-decoration-skip-ink":"auto|all|none","text-decoration-style":"solid|double|dotted|dashed|wavy","text-decoration-thickness":"auto|from-font|<length>|<percentage>","text-emphasis":"<'text-emphasis-style'>||<'text-emphasis-color'>","text-emphasis-color":"<color>","text-emphasis-position":"[over|under]&&[right|left]","text-emphasis-style":"none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>","text-indent":"<length-percentage>&&hanging?&&each-line?","text-justify":"auto|inter-character|inter-word|none","text-orientation":"mixed|upright|sideways","text-overflow":"[clip|ellipsis|<string>]{1,2}","text-rendering":"auto|optimizeSpeed|optimizeLegibility|geometricPrecision","text-shadow":"none|<shadow-t>#","text-size-adjust":"none|auto|<percentage>","text-transform":"none|capitalize|uppercase|lowercase|full-width|full-size-kana","text-underline-offset":"auto|<length>|<percentage>","text-underline-position":"auto|from-font|[under||[left|right]]",top:"<length>|<percentage>|auto","touch-action":"auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",transform:"none|<transform-list>","transform-box":"content-box|border-box|fill-box|stroke-box|view-box","transform-origin":"[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?","transform-style":"flat|preserve-3d",transition:"<single-transition>#","transition-delay":"<time>#","transition-duration":"<time>#","transition-property":"none|<single-transition-property>#","transition-timing-function":"<timing-function>#",translate:"none|<length-percentage> [<length-percentage> <length>?]?","unicode-bidi":"normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext","user-select":"auto|text|none|contain|all","vertical-align":"baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",visibility:"visible|hidden|collapse","white-space":"normal|pre|nowrap|pre-wrap|pre-line|break-spaces",widows:"<integer>",width:"auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )","will-change":"auto|<animateable-feature>#","word-break":"normal|break-all|keep-all|break-word","word-spacing":"normal|<length-percentage>","word-wrap":"normal|break-word","writing-mode":"horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>","z-index":"auto|<integer>",zoom:"normal|reset|<number>|<percentage>","-moz-background-clip":"padding|border","-moz-border-radius-bottomleft":"<'border-bottom-left-radius'>","-moz-border-radius-bottomright":"<'border-bottom-right-radius'>","-moz-border-radius-topleft":"<'border-top-left-radius'>","-moz-border-radius-topright":"<'border-bottom-right-radius'>","-moz-control-character-visibility":"visible|hidden","-moz-osx-font-smoothing":"auto|grayscale","-moz-user-select":"none|text|all|-moz-none","-ms-flex-align":"start|end|center|baseline|stretch","-ms-flex-item-align":"auto|start|end|center|baseline|stretch","-ms-flex-line-pack":"start|end|center|justify|distribute|stretch","-ms-flex-negative":"<'flex-shrink'>","-ms-flex-pack":"start|end|center|justify|distribute","-ms-flex-order":"<integer>","-ms-flex-positive":"<'flex-grow'>","-ms-flex-preferred-size":"<'flex-basis'>","-ms-interpolation-mode":"nearest-neighbor|bicubic","-ms-grid-column-align":"start|end|center|stretch","-ms-grid-row-align":"start|end|center|stretch","-ms-hyphenate-limit-last":"none|always|column|page|spread","-webkit-background-clip":"[<box>|border|padding|content|text]#","-webkit-column-break-after":"always|auto|avoid","-webkit-column-break-before":"always|auto|avoid","-webkit-column-break-inside":"always|auto|avoid","-webkit-font-smoothing":"auto|none|antialiased|subpixel-antialiased","-webkit-mask-box-image":"[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?","-webkit-print-color-adjust":"economy|exact","-webkit-text-security":"none|circle|disc|square","-webkit-user-drag":"none|element|auto","-webkit-user-select":"auto|none|text|all","alignment-baseline":"auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical","baseline-shift":"baseline|sub|super|<svg-length>",behavior:"<url>+","clip-rule":"nonzero|evenodd",cue:"<'cue-before'> <'cue-after'>?","cue-after":"<url> <decibel>?|none","cue-before":"<url> <decibel>?|none","dominant-baseline":"auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",fill:"<paint>","fill-opacity":"<number-zero-one>","fill-rule":"nonzero|evenodd","glyph-orientation-horizontal":"<angle>","glyph-orientation-vertical":"<angle>",kerning:"auto|<svg-length>",marker:"none|<url>","marker-end":"none|<url>","marker-mid":"none|<url>","marker-start":"none|<url>",pause:"<'pause-before'> <'pause-after'>?","pause-after":"<time>|none|x-weak|weak|medium|strong|x-strong","pause-before":"<time>|none|x-weak|weak|medium|strong|x-strong",rest:"<'rest-before'> <'rest-after'>?","rest-after":"<time>|none|x-weak|weak|medium|strong|x-strong","rest-before":"<time>|none|x-weak|weak|medium|strong|x-strong","shape-rendering":"auto|optimizeSpeed|crispEdges|geometricPrecision",src:"[<url> [format( <string># )]?|local( <family-name> )]#",speak:"auto|none|normal","speak-as":"normal|spell-out||digits||[literal-punctuation|no-punctuation]",stroke:"<paint>","stroke-dasharray":"none|[<svg-length>+]#","stroke-dashoffset":"<svg-length>","stroke-linecap":"butt|round|square","stroke-linejoin":"miter|round|bevel","stroke-miterlimit":"<number-one-or-greater>","stroke-opacity":"<number-zero-one>","stroke-width":"<svg-length>","text-anchor":"start|middle|end","unicode-range":"<urange>#","voice-balance":"<number>|left|center|right|leftwards|rightwards","voice-duration":"auto|<time>","voice-family":"[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve","voice-pitch":"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]","voice-range":"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]","voice-rate":"[normal|x-slow|slow|medium|fast|x-fast]||<percentage>","voice-stress":"normal|strong|moderate|none|reduced","voice-volume":"silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"},atrules:{charset:{prelude:"<string>",descriptors:null},"counter-style":{prelude:"<counter-style-name>",descriptors:{"additive-symbols":"[<integer>&&<symbol>]#",fallback:"<counter-style-name>",negative:"<symbol> <symbol>?",pad:"<integer>&&<symbol>",prefix:"<symbol>",range:"[[<integer>|infinite]{2}]#|auto","speak-as":"auto|bullets|numbers|words|spell-out|<counter-style-name>",suffix:"<symbol>",symbols:"<symbol>+",system:"cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"}},document:{prelude:"[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",descriptors:null},"font-face":{prelude:null,descriptors:{"font-display":"[auto|block|swap|fallback|optional]","font-family":"<family-name>","font-feature-settings":"normal|<feature-tag-value>#","font-variation-settings":"normal|[<string> <number>]#","font-stretch":"<font-stretch-absolute>{1,2}","font-style":"normal|italic|oblique <angle>{0,2}","font-weight":"<font-weight-absolute>{1,2}","font-variant":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",src:"[<url> [format( <string># )]?|local( <family-name> )]#","unicode-range":"<urange>#"}},"font-feature-values":{prelude:"<family-name>#",descriptors:null},import:{prelude:"[<string>|<url>] [<media-query-list>]?",descriptors:null},keyframes:{prelude:"<keyframes-name>",descriptors:null},media:{prelude:"<media-query-list>",descriptors:null},namespace:{prelude:"<namespace-prefix>? [<string>|<url>]",descriptors:null},page:{prelude:"<page-selector-list>",descriptors:{bleed:"auto|<length>",marks:"none|[crop||cross]",size:"<length>{1,2}|auto|[<page-size>||[portrait|landscape]]"}},property:{prelude:"<custom-property-name>",descriptors:{syntax:"<string>",inherits:"true|false","initial-value":"<string>"}},supports:{prelude:"<supports-condition>",descriptors:null},viewport:{prelude:null,descriptors:{height:"<viewport-length>{1,2}","max-height":"<viewport-length>","max-width":"<viewport-length>","max-zoom":"auto|<number>|<percentage>","min-height":"<viewport-length>","min-width":"<viewport-length>","min-zoom":"auto|<number>|<percentage>",orientation:"auto|portrait|landscape","user-zoom":"zoom|fixed","viewport-fit":"auto|contain|cover",width:"<viewport-length>{1,2}",zoom:"auto|<number>|<percentage>"}}}},Rr=Ce.cmpChar,Mr=Ce.isDigit,jr=Ce.TYPE,_r=jr.WhiteSpace,Fr=jr.Comment,Wr=jr.Ident,qr=jr.Number,Yr=jr.Dimension;function Ur(e,t){var n=this.scanner.tokenStart+e,r=this.scanner.source.charCodeAt(n);for(43!==r&&45!==r||(t&&this.error("Number sign is not allowed"),n++);n<this.scanner.tokenEnd;n++)Mr(this.scanner.source.charCodeAt(n))||this.error("Integer is expected",n)}function Hr(e){return Ur.call(this,0,e)}function Vr(e,t){if(!Rr(this.scanner.source,this.scanner.tokenStart+e,t)){var n="";switch(t){case 110:n="N is expected";break;case 45:n="HyphenMinus is expected"}this.error(n,this.scanner.tokenStart+e)}}function Kr(){for(var e=0,t=0,n=this.scanner.tokenType;n===_r||n===Fr;)n=this.scanner.lookupType(++e);if(n!==qr){if(!this.scanner.isDelim(43,e)&&!this.scanner.isDelim(45,e))return null;t=this.scanner.isDelim(43,e)?43:45;do{n=this.scanner.lookupType(++e)}while(n===_r||n===Fr);n!==qr&&(this.scanner.skip(e),Hr.call(this,!0))}return e>0&&this.scanner.skip(e),0===t&&43!==(n=this.scanner.source.charCodeAt(this.scanner.tokenStart))&&45!==n&&this.error("Number sign is expected"),Hr.call(this,0!==t),45===t?"-"+this.consume(qr):this.consume(qr)}var Gr={name:"AnPlusB",structure:{a:[String,null],b:[String,null]},parse:function(){var e=this.scanner.tokenStart,t=null,n=null;if(this.scanner.tokenType===qr)Hr.call(this,!1),n=this.consume(qr);else if(this.scanner.tokenType===Wr&&Rr(this.scanner.source,this.scanner.tokenStart,45))switch(t="-1",Vr.call(this,1,110),this.scanner.getTokenLength()){case 2:this.scanner.next(),n=Kr.call(this);break;case 3:Vr.call(this,2,45),this.scanner.next(),this.scanner.skipSC(),Hr.call(this,!0),n="-"+this.consume(qr);break;default:Vr.call(this,2,45),Ur.call(this,3,!0),this.scanner.next(),n=this.scanner.substrToCursor(e+2)}else if(this.scanner.tokenType===Wr||this.scanner.isDelim(43)&&this.scanner.lookupType(1)===Wr){var r=0;switch(t="1",this.scanner.isDelim(43)&&(r=1,this.scanner.next()),Vr.call(this,0,110),this.scanner.getTokenLength()){case 1:this.scanner.next(),n=Kr.call(this);break;case 2:Vr.call(this,1,45),this.scanner.next(),this.scanner.skipSC(),Hr.call(this,!0),n="-"+this.consume(qr);break;default:Vr.call(this,1,45),Ur.call(this,2,!0),this.scanner.next(),n=this.scanner.substrToCursor(e+r+1)}}else if(this.scanner.tokenType===Yr){for(var i=this.scanner.source.charCodeAt(this.scanner.tokenStart),a=(r=43===i||45===i,this.scanner.tokenStart+r);a<this.scanner.tokenEnd&&Mr(this.scanner.source.charCodeAt(a));a++);a===this.scanner.tokenStart+r&&this.error("Integer is expected",this.scanner.tokenStart+r),Vr.call(this,a-this.scanner.tokenStart,110),t=this.scanner.source.substring(e,a),a+1===this.scanner.tokenEnd?(this.scanner.next(),n=Kr.call(this)):(Vr.call(this,a-this.scanner.tokenStart+1,45),a+2===this.scanner.tokenEnd?(this.scanner.next(),this.scanner.skipSC(),Hr.call(this,!0),n="-"+this.consume(qr)):(Ur.call(this,a-this.scanner.tokenStart+2,!0),this.scanner.next(),n=this.scanner.substrToCursor(a+1)))}else this.error();return null!==t&&43===t.charCodeAt(0)&&(t=t.substr(1)),null!==n&&43===n.charCodeAt(0)&&(n=n.substr(1)),{type:"AnPlusB",loc:this.getLocation(e,this.scanner.tokenStart),a:t,b:n}},generate:function(e){var t=null!==e.a&&void 0!==e.a,n=null!==e.b&&void 0!==e.b;t?(this.chunk("+1"===e.a?"+n":"1"===e.a?"n":"-1"===e.a?"-n":e.a+"n"),n&&("-"===(n=String(e.b)).charAt(0)||"+"===n.charAt(0)?(this.chunk(n.charAt(0)),this.chunk(n.substr(1))):(this.chunk("+"),this.chunk(n)))):this.chunk(String(e.b))}},Qr=Ce.TYPE,Xr=Qr.WhiteSpace,Zr=Qr.Semicolon,$r=Qr.LeftCurlyBracket,Jr=Qr.Delim;function ei(){return this.scanner.tokenIndex>0&&this.scanner.lookupType(-1)===Xr?this.scanner.tokenIndex>1?this.scanner.getTokenStart(this.scanner.tokenIndex-1):this.scanner.firstCharOffset:this.scanner.tokenStart}function ti(){return 0}var ni={name:"Raw",structure:{value:String},parse:function(e,t,n){var r,i=this.scanner.getTokenStart(e);return this.scanner.skip(this.scanner.getRawLength(e,t||ti)),r=n&&this.scanner.tokenStart>i?ei.call(this):this.scanner.tokenStart,{type:"Raw",loc:this.getLocation(i,r),value:this.scanner.source.substring(i,r)}},generate:function(e){this.chunk(e.value)},mode:{default:ti,leftCurlyBracket:function(e){return e===$r?1:0},leftCurlyBracketOrSemicolon:function(e){return e===$r||e===Zr?1:0},exclamationMarkOrSemicolon:function(e,t,n){return e===Jr&&33===t.charCodeAt(n)||e===Zr?1:0},semicolonIncluded:function(e){return e===Zr?2:0}}},ri=Ce.TYPE,ii=ni.mode,ai=ri.AtKeyword,oi=ri.Semicolon,si=ri.LeftCurlyBracket,li=ri.RightCurlyBracket;function ci(e){return this.Raw(e,ii.leftCurlyBracketOrSemicolon,!0)}function ui(){for(var e,t=1;e=this.scanner.lookupType(t);t++){if(e===li)return!0;if(e===si||e===ai)return!1}return!1}var hi={name:"Atrule",structure:{name:String,prelude:["AtrulePrelude","Raw",null],block:["Block",null]},parse:function(){var e,t,n=this.scanner.tokenStart,r=null,i=null;switch(this.eat(ai),t=(e=this.scanner.substrToCursor(n+1)).toLowerCase(),this.scanner.skipSC(),!1===this.scanner.eof&&this.scanner.tokenType!==si&&this.scanner.tokenType!==oi&&(this.parseAtrulePrelude?"AtrulePrelude"===(r=this.parseWithFallback(this.AtrulePrelude.bind(this,e),ci)).type&&null===r.children.head&&(r=null):r=ci.call(this,this.scanner.tokenIndex),this.scanner.skipSC()),this.scanner.tokenType){case oi:this.scanner.next();break;case si:i=this.atrule.hasOwnProperty(t)&&"function"==typeof this.atrule[t].block?this.atrule[t].block.call(this):this.Block(ui.call(this))}return{type:"Atrule",loc:this.getLocation(n,this.scanner.tokenStart),name:e,prelude:r,block:i}},generate:function(e){this.chunk("@"),this.chunk(e.name),null!==e.prelude&&(this.chunk(" "),this.node(e.prelude)),e.block?this.node(e.block):this.chunk(";")},walkContext:"atrule"},pi=Ce.TYPE,di=pi.Semicolon,mi=pi.LeftCurlyBracket,gi={name:"AtrulePrelude",structure:{children:[[]]},parse:function(e){var t=null;return null!==e&&(e=e.toLowerCase()),this.scanner.skipSC(),t=this.atrule.hasOwnProperty(e)&&"function"==typeof this.atrule[e].prelude?this.atrule[e].prelude.call(this):this.readSequence(this.scope.AtrulePrelude),this.scanner.skipSC(),!0!==this.scanner.eof&&this.scanner.tokenType!==mi&&this.scanner.tokenType!==di&&this.error("Semicolon or block is expected"),null===t&&(t=this.createList()),{type:"AtrulePrelude",loc:this.getLocationFromList(t),children:t}},generate:function(e){this.children(e)},walkContext:"atrulePrelude"},fi=Ce.TYPE,bi=fi.Ident,yi=fi.String,ki=fi.Colon,vi=fi.LeftSquareBracket,xi=fi.RightSquareBracket;function wi(){this.scanner.eof&&this.error("Unexpected end of input");var e=this.scanner.tokenStart,t=!1,n=!0;return this.scanner.isDelim(42)?(t=!0,n=!1,this.scanner.next()):this.scanner.isDelim(124)||this.eat(bi),this.scanner.isDelim(124)?61!==this.scanner.source.charCodeAt(this.scanner.tokenStart+1)?(this.scanner.next(),this.eat(bi)):t&&this.error("Identifier is expected",this.scanner.tokenEnd):t&&this.error("Vertical line is expected"),n&&this.scanner.tokenType===ki&&(this.scanner.next(),this.eat(bi)),{type:"Identifier",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e)}}function Si(){var e=this.scanner.tokenStart,t=this.scanner.source.charCodeAt(e);return 61!==t&&126!==t&&94!==t&&36!==t&&42!==t&&124!==t&&this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"),this.scanner.next(),61!==t&&(this.scanner.isDelim(61)||this.error("Equal sign is expected"),this.scanner.next()),this.scanner.substrToCursor(e)}var Ci={name:"AttributeSelector",structure:{name:"Identifier",matcher:[String,null],value:["String","Identifier",null],flags:[String,null]},parse:function(){var e,t=this.scanner.tokenStart,n=null,r=null,i=null;return this.eat(vi),this.scanner.skipSC(),e=wi.call(this),this.scanner.skipSC(),this.scanner.tokenType!==xi&&(this.scanner.tokenType!==bi&&(n=Si.call(this),this.scanner.skipSC(),r=this.scanner.tokenType===yi?this.String():this.Identifier(),this.scanner.skipSC()),this.scanner.tokenType===bi&&(i=this.scanner.getTokenValue(),this.scanner.next(),this.scanner.skipSC())),this.eat(xi),{type:"AttributeSelector",loc:this.getLocation(t,this.scanner.tokenStart),name:e,matcher:n,value:r,flags:i}},generate:function(e){var t=" ";this.chunk("["),this.node(e.name),null!==e.matcher&&(this.chunk(e.matcher),null!==e.value&&(this.node(e.value),"String"===e.value.type&&(t=""))),null!==e.flags&&(this.chunk(t),this.chunk(e.flags)),this.chunk("]")}},zi=Ce.TYPE,Ai=ni.mode,Pi=zi.WhiteSpace,Ti=zi.Comment,Li=zi.Semicolon,Ei=zi.AtKeyword,Di=zi.LeftCurlyBracket,Oi=zi.RightCurlyBracket;function Bi(e){return this.Raw(e,null,!0)}function Ii(){return this.parseWithFallback(this.Rule,Bi)}function Ni(e){return this.Raw(e,Ai.semicolonIncluded,!0)}function Ri(){if(this.scanner.tokenType===Li)return Ni.call(this,this.scanner.tokenIndex);var e=this.parseWithFallback(this.Declaration,Ni);return this.scanner.tokenType===Li&&this.scanner.next(),e}var Mi={name:"Block",structure:{children:[["Atrule","Rule","Declaration"]]},parse:function(e){var t=e?Ri:Ii,n=this.scanner.tokenStart,r=this.createList();this.eat(Di);e:for(;!this.scanner.eof;)switch(this.scanner.tokenType){case Oi:break e;case Pi:case Ti:this.scanner.next();break;case Ei:r.push(this.parseWithFallback(this.Atrule,Bi));break;default:r.push(t.call(this))}return this.scanner.eof||this.eat(Oi),{type:"Block",loc:this.getLocation(n,this.scanner.tokenStart),children:r}},generate:function(e){this.chunk("{"),this.children(e,(function(e){"Declaration"===e.type&&this.chunk(";")})),this.chunk("}")},walkContext:"block"},ji=Ce.TYPE,_i=ji.LeftSquareBracket,Fi=ji.RightSquareBracket,Wi={name:"Brackets",structure:{children:[[]]},parse:function(e,t){var n,r=this.scanner.tokenStart;return this.eat(_i),n=e.call(this,t),this.scanner.eof||this.eat(Fi),{type:"Brackets",loc:this.getLocation(r,this.scanner.tokenStart),children:n}},generate:function(e){this.chunk("["),this.children(e),this.chunk("]")}},qi=Ce.TYPE.CDC,Yi={name:"CDC",structure:[],parse:function(){var e=this.scanner.tokenStart;return this.eat(qi),{type:"CDC",loc:this.getLocation(e,this.scanner.tokenStart)}},generate:function(){this.chunk("--\x3e")}},Ui=Ce.TYPE.CDO,Hi={name:"CDO",structure:[],parse:function(){var e=this.scanner.tokenStart;return this.eat(Ui),{type:"CDO",loc:this.getLocation(e,this.scanner.tokenStart)}},generate:function(){this.chunk("\x3c!--")}},Vi=Ce.TYPE.Ident,Ki={name:"ClassSelector",structure:{name:String},parse:function(){return this.scanner.isDelim(46)||this.error("Full stop is expected"),this.scanner.next(),{type:"ClassSelector",loc:this.getLocation(this.scanner.tokenStart-1,this.scanner.tokenEnd),name:this.consume(Vi)}},generate:function(e){this.chunk("."),this.chunk(e.name)}},Gi=Ce.TYPE.Ident,Qi={name:"Combinator",structure:{name:String},parse:function(){var e=this.scanner.tokenStart;switch(this.scanner.source.charCodeAt(this.scanner.tokenStart)){case 62:case 43:case 126:this.scanner.next();break;case 47:this.scanner.next(),this.scanner.tokenType===Gi&&!1!==this.scanner.lookupValue(0,"deep")||this.error("Identifier `deep` is expected"),this.scanner.next(),this.scanner.isDelim(47)||this.error("Solidus is expected"),this.scanner.next();break;default:this.error("Combinator is expected")}return{type:"Combinator",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.name)}},Xi=Ce.TYPE.Comment,Zi={name:"Comment",structure:{value:String},parse:function(){var e=this.scanner.tokenStart,t=this.scanner.tokenEnd;return this.eat(Xi),t-e+2>=2&&42===this.scanner.source.charCodeAt(t-2)&&47===this.scanner.source.charCodeAt(t-1)&&(t-=2),{type:"Comment",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.source.substring(e+2,t)}},generate:function(e){this.chunk("/*"),this.chunk(e.value),this.chunk("*/")}},$i=ae.isCustomProperty,Ji=Ce.TYPE,ea=ni.mode,ta=Ji.Ident,na=Ji.Hash,ra=Ji.Colon,ia=Ji.Semicolon,aa=Ji.Delim,oa=Ji.WhiteSpace;function sa(e){return this.Raw(e,ea.exclamationMarkOrSemicolon,!0)}function la(e){return this.Raw(e,ea.exclamationMarkOrSemicolon,!1)}function ca(){var e=this.scanner.tokenIndex,t=this.Value();return"Raw"!==t.type&&!1===this.scanner.eof&&this.scanner.tokenType!==ia&&!1===this.scanner.isDelim(33)&&!1===this.scanner.isBalanceEdge(e)&&this.error(),t}var ua={name:"Declaration",structure:{important:[Boolean,String],property:String,value:["Value","Raw"]},parse:function(){var e,t=this.scanner.tokenStart,n=this.scanner.tokenIndex,r=ha.call(this),i=$i(r),a=i?this.parseCustomProperty:this.parseValue,o=i?la:sa,s=!1;this.scanner.skipSC(),this.eat(ra);const l=this.scanner.tokenIndex;if(i||this.scanner.skipSC(),e=a?this.parseWithFallback(ca,o):o.call(this,this.scanner.tokenIndex),i&&"Value"===e.type&&e.children.isEmpty())for(let t=l-this.scanner.tokenIndex;t<=0;t++)if(this.scanner.lookupType(t)===oa){e.children.appendData({type:"WhiteSpace",loc:null,value:" "});break}return this.scanner.isDelim(33)&&(s=pa.call(this),this.scanner.skipSC()),!1===this.scanner.eof&&this.scanner.tokenType!==ia&&!1===this.scanner.isBalanceEdge(n)&&this.error(),{type:"Declaration",loc:this.getLocation(t,this.scanner.tokenStart),important:s,property:r,value:e}},generate:function(e){this.chunk(e.property),this.chunk(":"),this.node(e.value),e.important&&this.chunk(!0===e.important?"!important":"!"+e.important)},walkContext:"declaration"};function ha(){var e=this.scanner.tokenStart;if(this.scanner.tokenType===aa)switch(this.scanner.source.charCodeAt(this.scanner.tokenStart)){case 42:case 36:case 43:case 35:case 38:this.scanner.next();break;case 47:this.scanner.next(),this.scanner.isDelim(47)&&this.scanner.next()}return this.scanner.tokenType===na?this.eat(na):this.eat(ta),this.scanner.substrToCursor(e)}function pa(){this.eat(aa),this.scanner.skipSC();var e=this.consume(ta);return"important"===e||e}var da=Ce.TYPE,ma=ni.mode,ga=da.WhiteSpace,fa=da.Comment,ba=da.Semicolon;function ya(e){return this.Raw(e,ma.semicolonIncluded,!0)}var ka={name:"DeclarationList",structure:{children:[["Declaration"]]},parse:function(){for(var e=this.createList();!this.scanner.eof;)switch(this.scanner.tokenType){case ga:case fa:case ba:this.scanner.next();break;default:e.push(this.parseWithFallback(this.Declaration,ya))}return{type:"DeclarationList",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e,(function(e){"Declaration"===e.type&&this.chunk(";")}))}},va=M.consumeNumber,xa=Ce.TYPE.Dimension,wa={name:"Dimension",structure:{value:String,unit:String},parse:function(){var e=this.scanner.tokenStart,t=va(this.scanner.source,e);return this.eat(xa),{type:"Dimension",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.source.substring(e,t),unit:this.scanner.source.substring(t,this.scanner.tokenStart)}},generate:function(e){this.chunk(e.value),this.chunk(e.unit)}},Sa=Ce.TYPE.RightParenthesis,Ca={name:"Function",structure:{name:String,children:[[]]},parse:function(e,t){var n,r=this.scanner.tokenStart,i=this.consumeFunctionName(),a=i.toLowerCase();return n=t.hasOwnProperty(a)?t[a].call(this,t):e.call(this,t),this.scanner.eof||this.eat(Sa),{type:"Function",loc:this.getLocation(r,this.scanner.tokenStart),name:i,children:n}},generate:function(e){this.chunk(e.name),this.chunk("("),this.children(e),this.chunk(")")},walkContext:"function"},za=Ce.TYPE.Hash,Aa={name:"Hash",structure:{value:String},parse:function(){var e=this.scanner.tokenStart;return this.eat(za),{type:"Hash",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.substrToCursor(e+1)}},generate:function(e){this.chunk("#"),this.chunk(e.value)}},Pa=Ce.TYPE.Ident,Ta={name:"Identifier",structure:{name:String},parse:function(){return{type:"Identifier",loc:this.getLocation(this.scanner.tokenStart,this.scanner.tokenEnd),name:this.consume(Pa)}},generate:function(e){this.chunk(e.name)}},La=Ce.TYPE.Hash,Ea={name:"IdSelector",structure:{name:String},parse:function(){var e=this.scanner.tokenStart;return this.eat(La),{type:"IdSelector",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e+1)}},generate:function(e){this.chunk("#"),this.chunk(e.name)}},Da=Ce.TYPE,Oa=Da.Ident,Ba=Da.Number,Ia=Da.Dimension,Na=Da.LeftParenthesis,Ra=Da.RightParenthesis,Ma=Da.Colon,ja=Da.Delim,_a={name:"MediaFeature",structure:{name:String,value:["Identifier","Number","Dimension","Ratio",null]},parse:function(){var e,t=this.scanner.tokenStart,n=null;if(this.eat(Na),this.scanner.skipSC(),e=this.consume(Oa),this.scanner.skipSC(),this.scanner.tokenType!==Ra){switch(this.eat(Ma),this.scanner.skipSC(),this.scanner.tokenType){case Ba:n=this.lookupNonWSType(1)===ja?this.Ratio():this.Number();break;case Ia:n=this.Dimension();break;case Oa:n=this.Identifier();break;default:this.error("Number, dimension, ratio or identifier is expected")}this.scanner.skipSC()}return this.eat(Ra),{type:"MediaFeature",loc:this.getLocation(t,this.scanner.tokenStart),name:e,value:n}},generate:function(e){this.chunk("("),this.chunk(e.name),null!==e.value&&(this.chunk(":"),this.node(e.value)),this.chunk(")")}},Fa=Ce.TYPE,Wa=Fa.WhiteSpace,qa=Fa.Comment,Ya=Fa.Ident,Ua=Fa.LeftParenthesis,Ha={name:"MediaQuery",structure:{children:[["Identifier","MediaFeature","WhiteSpace"]]},parse:function(){this.scanner.skipSC();var e=this.createList(),t=null,n=null;e:for(;!this.scanner.eof;){switch(this.scanner.tokenType){case qa:this.scanner.next();continue;case Wa:n=this.WhiteSpace();continue;case Ya:t=this.Identifier();break;case Ua:t=this.MediaFeature();break;default:break e}null!==n&&(e.push(n),n=null),e.push(t)}return null===t&&this.error("Identifier or parenthesis is expected"),{type:"MediaQuery",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e)}},Va=Ce.TYPE.Comma,Ka={name:"MediaQueryList",structure:{children:[["MediaQuery"]]},parse:function(e){var t=this.createList();for(this.scanner.skipSC();!this.scanner.eof&&(t.push(this.MediaQuery(e)),this.scanner.tokenType===Va);)this.scanner.next();return{type:"MediaQueryList",loc:this.getLocationFromList(t),children:t}},generate:function(e){this.children(e,(function(){this.chunk(",")}))}},Ga=Ce.TYPE.Number,Qa={name:"Number",structure:{value:String},parse:function(){return{type:"Number",loc:this.getLocation(this.scanner.tokenStart,this.scanner.tokenEnd),value:this.consume(Ga)}},generate:function(e){this.chunk(e.value)}},Xa={name:"Operator",structure:{value:String},parse:function(){var e=this.scanner.tokenStart;return this.scanner.next(),{type:"Operator",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.value)}},Za=Ce.TYPE,$a=Za.LeftParenthesis,Ja=Za.RightParenthesis,eo={name:"Parentheses",structure:{children:[[]]},parse:function(e,t){var n,r=this.scanner.tokenStart;return this.eat($a),n=e.call(this,t),this.scanner.eof||this.eat(Ja),{type:"Parentheses",loc:this.getLocation(r,this.scanner.tokenStart),children:n}},generate:function(e){this.chunk("("),this.children(e),this.chunk(")")}},to=M.consumeNumber,no=Ce.TYPE.Percentage,ro={name:"Percentage",structure:{value:String},parse:function(){var e=this.scanner.tokenStart,t=to(this.scanner.source,e);return this.eat(no),{type:"Percentage",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.source.substring(e,t)}},generate:function(e){this.chunk(e.value),this.chunk("%")}},io=Ce.TYPE,ao=io.Ident,oo=io.Function,so=io.Colon,lo=io.RightParenthesis,co={name:"PseudoClassSelector",structure:{name:String,children:[["Raw"],null]},parse:function(){var e,t,n=this.scanner.tokenStart,r=null;return this.eat(so),this.scanner.tokenType===oo?(t=(e=this.consumeFunctionName()).toLowerCase(),this.pseudo.hasOwnProperty(t)?(this.scanner.skipSC(),r=this.pseudo[t].call(this),this.scanner.skipSC()):(r=this.createList()).push(this.Raw(this.scanner.tokenIndex,null,!1)),this.eat(lo)):e=this.consume(ao),{type:"PseudoClassSelector",loc:this.getLocation(n,this.scanner.tokenStart),name:e,children:r}},generate:function(e){this.chunk(":"),this.chunk(e.name),null!==e.children&&(this.chunk("("),this.children(e),this.chunk(")"))},walkContext:"function"},uo=Ce.TYPE,ho=uo.Ident,po=uo.Function,mo=uo.Colon,go=uo.RightParenthesis,fo={name:"PseudoElementSelector",structure:{name:String,children:[["Raw"],null]},parse:function(){var e,t,n=this.scanner.tokenStart,r=null;return this.eat(mo),this.eat(mo),this.scanner.tokenType===po?(t=(e=this.consumeFunctionName()).toLowerCase(),this.pseudo.hasOwnProperty(t)?(this.scanner.skipSC(),r=this.pseudo[t].call(this),this.scanner.skipSC()):(r=this.createList()).push(this.Raw(this.scanner.tokenIndex,null,!1)),this.eat(go)):e=this.consume(ho),{type:"PseudoElementSelector",loc:this.getLocation(n,this.scanner.tokenStart),name:e,children:r}},generate:function(e){this.chunk("::"),this.chunk(e.name),null!==e.children&&(this.chunk("("),this.children(e),this.chunk(")"))},walkContext:"function"},bo=Ce.isDigit,yo=Ce.TYPE,ko=yo.Number,vo=yo.Delim;function xo(){this.scanner.skipWS();for(var e=this.consume(ko),t=0;t<e.length;t++){var n=e.charCodeAt(t);bo(n)||46===n||this.error("Unsigned number is expected",this.scanner.tokenStart-e.length+t)}return 0===Number(e)&&this.error("Zero number is not allowed",this.scanner.tokenStart-e.length),e}var wo={name:"Ratio",structure:{left:String,right:String},parse:function(){var e,t=this.scanner.tokenStart,n=xo.call(this);return this.scanner.skipWS(),this.scanner.isDelim(47)||this.error("Solidus is expected"),this.eat(vo),e=xo.call(this),{type:"Ratio",loc:this.getLocation(t,this.scanner.tokenStart),left:n,right:e}},generate:function(e){this.chunk(e.left),this.chunk("/"),this.chunk(e.right)}},So=Ce.TYPE,Co=ni.mode,zo=So.LeftCurlyBracket;function Ao(e){return this.Raw(e,Co.leftCurlyBracket,!0)}function Po(){var e=this.SelectorList();return"Raw"!==e.type&&!1===this.scanner.eof&&this.scanner.tokenType!==zo&&this.error(),e}var To={name:"Rule",structure:{prelude:["SelectorList","Raw"],block:["Block"]},parse:function(){var e,t,n=this.scanner.tokenIndex,r=this.scanner.tokenStart;return e=this.parseRulePrelude?this.parseWithFallback(Po,Ao):Ao.call(this,n),t=this.Block(!0),{type:"Rule",loc:this.getLocation(r,this.scanner.tokenStart),prelude:e,block:t}},generate:function(e){this.node(e.prelude),this.node(e.block)},walkContext:"rule"},Lo=Ce.TYPE.Comma,Eo={name:"SelectorList",structure:{children:[["Selector","Raw"]]},parse:function(){for(var e=this.createList();!this.scanner.eof&&(e.push(this.Selector()),this.scanner.tokenType===Lo);)this.scanner.next();return{type:"SelectorList",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e,(function(){this.chunk(",")}))},walkContext:"selector"},Do=Ce.TYPE.String,Oo={name:"String",structure:{value:String},parse:function(){return{type:"String",loc:this.getLocation(this.scanner.tokenStart,this.scanner.tokenEnd),value:this.consume(Do)}},generate:function(e){this.chunk(e.value)}},Bo=Ce.TYPE,Io=Bo.WhiteSpace,No=Bo.Comment,Ro=Bo.AtKeyword,Mo=Bo.CDO,jo=Bo.CDC;function _o(e){return this.Raw(e,null,!1)}var Fo={name:"StyleSheet",structure:{children:[["Comment","CDO","CDC","Atrule","Rule","Raw"]]},parse:function(){for(var e,t=this.scanner.tokenStart,n=this.createList();!this.scanner.eof;){switch(this.scanner.tokenType){case Io:this.scanner.next();continue;case No:if(33!==this.scanner.source.charCodeAt(this.scanner.tokenStart+2)){this.scanner.next();continue}e=this.Comment();break;case Mo:e=this.CDO();break;case jo:e=this.CDC();break;case Ro:e=this.parseWithFallback(this.Atrule,_o);break;default:e=this.parseWithFallback(this.Rule,_o)}n.push(e)}return{type:"StyleSheet",loc:this.getLocation(t,this.scanner.tokenStart),children:n}},generate:function(e){this.children(e)},walkContext:"stylesheet"},Wo=Ce.TYPE.Ident;function qo(){this.scanner.tokenType!==Wo&&!1===this.scanner.isDelim(42)&&this.error("Identifier or asterisk is expected"),this.scanner.next()}var Yo={name:"TypeSelector",structure:{name:String},parse:function(){var e=this.scanner.tokenStart;return this.scanner.isDelim(124)?(this.scanner.next(),qo.call(this)):(qo.call(this),this.scanner.isDelim(124)&&(this.scanner.next(),qo.call(this))),{type:"TypeSelector",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.name)}},Uo=Ce.isHexDigit,Ho=Ce.cmpChar,Vo=Ce.TYPE,Ko=Ce.NAME,Go=Vo.Ident,Qo=Vo.Number,Xo=Vo.Dimension;function Zo(e,t){for(var n=this.scanner.tokenStart+e,r=0;n<this.scanner.tokenEnd;n++){var i=this.scanner.source.charCodeAt(n);if(45===i&&t&&0!==r)return 0===Zo.call(this,e+r+1,!1)&&this.error(),-1;Uo(i)||this.error(t&&0!==r?"HyphenMinus"+(r<6?" or hex digit":"")+" is expected":r<6?"Hex digit is expected":"Unexpected input",n),++r>6&&this.error("Too many hex digits",n)}return this.scanner.next(),r}function $o(e){for(var t=0;this.scanner.isDelim(63);)++t>e&&this.error("Too many question marks"),this.scanner.next()}function Jo(e){this.scanner.source.charCodeAt(this.scanner.tokenStart)!==e&&this.error(Ko[e]+" is expected")}function es(){var e=0;return this.scanner.isDelim(43)?(this.scanner.next(),this.scanner.tokenType===Go?void((e=Zo.call(this,0,!0))>0&&$o.call(this,6-e)):this.scanner.isDelim(63)?(this.scanner.next(),void $o.call(this,5)):void this.error("Hex digit or question mark is expected")):this.scanner.tokenType===Qo?(Jo.call(this,43),e=Zo.call(this,1,!0),this.scanner.isDelim(63)?void $o.call(this,6-e):this.scanner.tokenType===Xo||this.scanner.tokenType===Qo?(Jo.call(this,45),void Zo.call(this,1,!1)):void 0):this.scanner.tokenType===Xo?(Jo.call(this,43),void((e=Zo.call(this,1,!0))>0&&$o.call(this,6-e))):void this.error()}var ts={name:"UnicodeRange",structure:{value:String},parse:function(){var e=this.scanner.tokenStart;return Ho(this.scanner.source,e,117)||this.error("U is expected"),Ho(this.scanner.source,e+1,43)||this.error("Plus sign is expected"),this.scanner.next(),es.call(this),{type:"UnicodeRange",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.value)}},ns=Ce.isWhiteSpace,rs=Ce.cmpStr,is=Ce.TYPE,as=is.Function,os=is.Url,ss=is.RightParenthesis,ls={name:"Url",structure:{value:["String","Raw"]},parse:function(){var e,t=this.scanner.tokenStart;switch(this.scanner.tokenType){case os:for(var n=t+4,r=this.scanner.tokenEnd-1;n<r&&ns(this.scanner.source.charCodeAt(n));)n++;for(;n<r&&ns(this.scanner.source.charCodeAt(r-1));)r--;e={type:"Raw",loc:this.getLocation(n,r),value:this.scanner.source.substring(n,r)},this.eat(os);break;case as:rs(this.scanner.source,this.scanner.tokenStart,this.scanner.tokenEnd,"url(")||this.error("Function name must be `url`"),this.eat(as),this.scanner.skipSC(),e=this.String(),this.scanner.skipSC(),this.eat(ss);break;default:this.error("Url or Function is expected")}return{type:"Url",loc:this.getLocation(t,this.scanner.tokenStart),value:e}},generate:function(e){this.chunk("url"),this.chunk("("),this.node(e.value),this.chunk(")")}},cs=Ce.TYPE.WhiteSpace,us=Object.freeze({type:"WhiteSpace",loc:null,value:" "}),hs={AnPlusB:Gr,Atrule:hi,AtrulePrelude:gi,AttributeSelector:Ci,Block:Mi,Brackets:Wi,CDC:Yi,CDO:Hi,ClassSelector:Ki,Combinator:Qi,Comment:Zi,Declaration:ua,DeclarationList:ka,Dimension:wa,Function:Ca,Hash:Aa,Identifier:Ta,IdSelector:Ea,MediaFeature:_a,MediaQuery:Ha,MediaQueryList:Ka,Nth:{name:"Nth",structure:{nth:["AnPlusB","Identifier"],selector:["SelectorList",null]},parse:function(e){this.scanner.skipSC();var t,n=this.scanner.tokenStart,r=n,i=null;return t=this.scanner.lookupValue(0,"odd")||this.scanner.lookupValue(0,"even")?this.Identifier():this.AnPlusB(),this.scanner.skipSC(),e&&this.scanner.lookupValue(0,"of")?(this.scanner.next(),i=this.SelectorList(),this.needPositions&&(r=this.getLastListNode(i.children).loc.end.offset)):this.needPositions&&(r=t.loc.end.offset),{type:"Nth",loc:this.getLocation(n,r),nth:t,selector:i}},generate:function(e){this.node(e.nth),null!==e.selector&&(this.chunk(" of "),this.node(e.selector))}},Number:Qa,Operator:Xa,Parentheses:eo,Percentage:ro,PseudoClassSelector:co,PseudoElementSelector:fo,Ratio:wo,Raw:ni,Rule:To,Selector:{name:"Selector",structure:{children:[["TypeSelector","IdSelector","ClassSelector","AttributeSelector","PseudoClassSelector","PseudoElementSelector","Combinator","WhiteSpace"]]},parse:function(){var e=this.readSequence(this.scope.Selector);return null===this.getFirstListNode(e)&&this.error("Selector is expected"),{type:"Selector",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e)}},SelectorList:Eo,String:Oo,StyleSheet:Fo,TypeSelector:Yo,UnicodeRange:ts,Url:ls,Value:{name:"Value",structure:{children:[[]]},parse:function(){var e=this.scanner.tokenStart,t=this.readSequence(this.scope.Value);return{type:"Value",loc:this.getLocation(e,this.scanner.tokenStart),children:t}},generate:function(e){this.children(e)}},WhiteSpace:{name:"WhiteSpace",structure:{value:String},parse:function(){return this.eat(cs),us},generate:function(e){this.chunk(e.value)}}},ps={generic:!0,types:Nr.types,atrules:Nr.atrules,properties:Nr.properties,node:hs},ds=Ce.cmpChar,ms=Ce.cmpStr,gs=Ce.TYPE,fs=gs.Ident,bs=gs.String,ys=gs.Number,ks=gs.Function,vs=gs.Url,xs=gs.Hash,ws=gs.Dimension,Ss=gs.Percentage,Cs=gs.LeftParenthesis,zs=gs.LeftSquareBracket,As=gs.Comma,Ps=gs.Delim,Ts=function(e){switch(this.scanner.tokenType){case xs:return this.Hash();case As:return e.space=null,e.ignoreWSAfter=!0,this.Operator();case Cs:return this.Parentheses(this.readSequence,e.recognizer);case zs:return this.Brackets(this.readSequence,e.recognizer);case bs:return this.String();case ws:return this.Dimension();case Ss:return this.Percentage();case ys:return this.Number();case ks:return ms(this.scanner.source,this.scanner.tokenStart,this.scanner.tokenEnd,"url(")?this.Url():this.Function(this.readSequence,e.recognizer);case vs:return this.Url();case fs:return ds(this.scanner.source,this.scanner.tokenStart,117)&&ds(this.scanner.source,this.scanner.tokenStart+1,43)?this.UnicodeRange():this.Identifier();case Ps:var t=this.scanner.source.charCodeAt(this.scanner.tokenStart);if(47===t||42===t||43===t||45===t)return this.Operator();35===t&&this.error("Hex or identifier is expected",this.scanner.tokenStart+1)}},Ls={getNode:Ts},Es=Ce.TYPE,Ds=Es.Delim,Os=Es.Ident,Bs=Es.Dimension,Is=Es.Percentage,Ns=Es.Number,Rs=Es.Hash,Ms=Es.Colon,js=Es.LeftSquareBracket;var _s={getNode:function(e){switch(this.scanner.tokenType){case js:return this.AttributeSelector();case Rs:return this.IdSelector();case Ms:return this.scanner.lookupType(1)===Ms?this.PseudoElementSelector():this.PseudoClassSelector();case Os:return this.TypeSelector();case Ns:case Is:return this.Percentage();case Bs:46===this.scanner.source.charCodeAt(this.scanner.tokenStart)&&this.error("Identifier is expected",this.scanner.tokenStart+1);break;case Ds:switch(this.scanner.source.charCodeAt(this.scanner.tokenStart)){case 43:case 62:case 126:return e.space=null,e.ignoreWSAfter=!0,this.Combinator();case 47:return this.Combinator();case 46:return this.ClassSelector();case 42:case 124:return this.TypeSelector();case 35:return this.IdSelector()}}}},Fs=Ce.TYPE,Ws=ni.mode,qs=Fs.Comma,Ys=Fs.WhiteSpace,Us={AtrulePrelude:Ls,Selector:_s,Value:{getNode:Ts,expression:function(){return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex,null,!1))},var:function(){var e=this.createList();if(this.scanner.skipSC(),e.push(this.Identifier()),this.scanner.skipSC(),this.scanner.tokenType===qs){e.push(this.Operator());const t=this.scanner.tokenIndex,n=this.parseCustomProperty?this.Value(null):this.Raw(this.scanner.tokenIndex,Ws.exclamationMarkOrSemicolon,!1);if("Value"===n.type&&n.children.isEmpty())for(let e=t-this.scanner.tokenIndex;e<=0;e++)if(this.scanner.lookupType(e)===Ys){n.children.appendData({type:"WhiteSpace",loc:null,value:" "});break}e.push(n)}return e}}},Hs=Ce.TYPE,Vs=Hs.String,Ks=Hs.Ident,Gs=Hs.Url,Qs=Hs.Function,Xs=Hs.LeftParenthesis,Zs={parse:{prelude:function(){var e=this.createList();switch(this.scanner.skipSC(),this.scanner.tokenType){case Vs:e.push(this.String());break;case Gs:case Qs:e.push(this.Url());break;default:this.error("String or url() is expected")}return this.lookupNonWSType(0)!==Ks&&this.lookupNonWSType(0)!==Xs||(e.push(this.WhiteSpace()),e.push(this.MediaQueryList())),e},block:null}},$s=Ce.TYPE,Js=$s.WhiteSpace,el=$s.Comment,tl=$s.Ident,nl=$s.Function,rl=$s.Colon,il=$s.LeftParenthesis;function al(){return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex,null,!1))}function ol(){return this.scanner.skipSC(),this.scanner.tokenType===tl&&this.lookupNonWSType(1)===rl?this.createSingleNodeList(this.Declaration()):sl.call(this)}function sl(){var e,t=this.createList(),n=null;this.scanner.skipSC();e:for(;!this.scanner.eof;){switch(this.scanner.tokenType){case Js:n=this.WhiteSpace();continue;case el:this.scanner.next();continue;case nl:e=this.Function(al,this.scope.AtrulePrelude);break;case tl:e=this.Identifier();break;case il:e=this.Parentheses(ol,this.scope.AtrulePrelude);break;default:break e}null!==n&&(t.push(n),n=null),t.push(e)}return t}var ll,cl={parse:function(){return this.createSingleNodeList(this.SelectorList())}},ul={parse:function(){return this.createSingleNodeList(this.Nth(!0))}},hl={parse:function(){return this.createSingleNodeList(this.Nth(!1))}},pl={parseContext:{default:"StyleSheet",stylesheet:"StyleSheet",atrule:"Atrule",atrulePrelude:function(e){return this.AtrulePrelude(e.atrule?String(e.atrule):null)},mediaQueryList:"MediaQueryList",mediaQuery:"MediaQuery",rule:"Rule",selectorList:"SelectorList",selector:"Selector",block:function(){return this.Block(!0)},declarationList:"DeclarationList",declaration:"Declaration",value:"Value"},scope:Us,atrule:{"font-face":{parse:{prelude:null,block:function(){return this.Block(!0)}}},import:Zs,media:{parse:{prelude:function(){return this.createSingleNodeList(this.MediaQueryList())},block:function(){return this.Block(!1)}}},page:{parse:{prelude:function(){return this.createSingleNodeList(this.SelectorList())},block:function(){return this.Block(!0)}}},supports:{parse:{prelude:function(){var e=sl.call(this);return null===this.getFirstListNode(e)&&this.error("Condition is expected"),e},block:function(){return this.Block(!1)}}}},pseudo:{dir:{parse:function(){return this.createSingleNodeList(this.Identifier())}},has:{parse:function(){return this.createSingleNodeList(this.SelectorList())}},lang:{parse:function(){return this.createSingleNodeList(this.Identifier())}},matches:cl,not:cl,"nth-child":ul,"nth-last-child":ul,"nth-last-of-type":hl,"nth-of-type":hl,slotted:{parse:function(){return this.createSingleNodeList(this.Selector())}}},node:hs},dl={node:hs},ml={version:"1.1.2"},gl=(ll=Object.freeze({__proto__:null,version:"1.1.2",default:ml}))&&ll.default||ll;var fl=Ir(function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}(ps,pl,dl)),bl=gl.version;return fl.version=bl,fl}));


/***/ }),

/***/ "../../node_modules/csso/lib/clean/Atrule.js":
/*!***************************************************!*\
  !*** ../../node_modules/csso/lib/clean/Atrule.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var resolveKeyword = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").keyword;
var { hasNoChildren } = __webpack_require__(/*! ./utils */ "../../node_modules/csso/lib/clean/utils.js");

module.exports = function cleanAtrule(node, item, list) {
    if (node.block) {
        // otherwise removed at-rule don't prevent @import for removal
        if (this.stylesheet !== null) {
            this.stylesheet.firstAtrulesAllowed = false;
        }

        if (hasNoChildren(node.block)) {
            list.remove(item);
            return;
        }
    }

    switch (node.name) {
        case 'charset':
            if (hasNoChildren(node.prelude)) {
                list.remove(item);
                return;
            }

            // if there is any rule before @charset -> remove it
            if (item.prev) {
                list.remove(item);
                return;
            }

            break;

        case 'import':
            if (this.stylesheet === null || !this.stylesheet.firstAtrulesAllowed) {
                list.remove(item);
                return;
            }

            // if there are some rules that not an @import or @charset before @import
            // remove it
            list.prevUntil(item.prev, function(rule) {
                if (rule.type === 'Atrule') {
                    if (rule.name === 'import' || rule.name === 'charset') {
                        return;
                    }
                }

                this.root.firstAtrulesAllowed = false;
                list.remove(item);
                return true;
            }, this);

            break;

        default:
            var name = resolveKeyword(node.name).basename;
            if (name === 'keyframes' ||
                name === 'media' ||
                name === 'supports') {

                // drop at-rule with no prelude
                if (hasNoChildren(node.prelude) || hasNoChildren(node.block)) {
                    list.remove(item);
                }
            }
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/clean/Comment.js":
/*!****************************************************!*\
  !*** ../../node_modules/csso/lib/clean/Comment.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function cleanComment(data, item, list) {
    list.remove(item);
};


/***/ }),

/***/ "../../node_modules/csso/lib/clean/Declaration.js":
/*!********************************************************!*\
  !*** ../../node_modules/csso/lib/clean/Declaration.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var property = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").property;

module.exports = function cleanDeclartion(node, item, list) {
    if (node.value.children && node.value.children.isEmpty()) {
        list.remove(item);
        return;
    }

    if (property(node.property).custom) {
        if (/\S/.test(node.value.value)) {
            node.value.value = node.value.value.trim();
        }
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/clean/Raw.js":
/*!************************************************!*\
  !*** ../../node_modules/csso/lib/clean/Raw.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var { isNodeChildrenList } = __webpack_require__(/*! ./utils */ "../../node_modules/csso/lib/clean/utils.js");

module.exports = function cleanRaw(node, item, list) {
    // raw in stylesheet or block children
    if (isNodeChildrenList(this.stylesheet, list) ||
        isNodeChildrenList(this.block, list)) {
        list.remove(item);
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/clean/Rule.js":
/*!*************************************************!*\
  !*** ../../node_modules/csso/lib/clean/Rule.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwnProperty = Object.prototype.hasOwnProperty;
var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;
var { hasNoChildren } = __webpack_require__(/*! ./utils */ "../../node_modules/csso/lib/clean/utils.js");

function cleanUnused(selectorList, usageData) {
    selectorList.children.each(function(selector, item, list) {
        var shouldRemove = false;

        walk(selector, function(node) {
            // ignore nodes in nested selectors
            if (this.selector === null || this.selector === selectorList) {
                switch (node.type) {
                    case 'SelectorList':
                        // TODO: remove toLowerCase when pseudo selectors will be normalized
                        // ignore selectors inside :not()
                        if (this.function === null || this.function.name.toLowerCase() !== 'not') {
                            if (cleanUnused(node, usageData)) {
                                shouldRemove = true;
                            }
                        }
                        break;

                    case 'ClassSelector':
                        if (usageData.whitelist !== null &&
                            usageData.whitelist.classes !== null &&
                            !hasOwnProperty.call(usageData.whitelist.classes, node.name)) {
                            shouldRemove = true;
                        }
                        if (usageData.blacklist !== null &&
                            usageData.blacklist.classes !== null &&
                            hasOwnProperty.call(usageData.blacklist.classes, node.name)) {
                            shouldRemove = true;
                        }
                        break;

                    case 'IdSelector':
                        if (usageData.whitelist !== null &&
                            usageData.whitelist.ids !== null &&
                            !hasOwnProperty.call(usageData.whitelist.ids, node.name)) {
                            shouldRemove = true;
                        }
                        if (usageData.blacklist !== null &&
                            usageData.blacklist.ids !== null &&
                            hasOwnProperty.call(usageData.blacklist.ids, node.name)) {
                            shouldRemove = true;
                        }
                        break;

                    case 'TypeSelector':
                        // TODO: remove toLowerCase when type selectors will be normalized
                        // ignore universal selectors
                        if (node.name.charAt(node.name.length - 1) !== '*') {
                            if (usageData.whitelist !== null &&
                                usageData.whitelist.tags !== null &&
                                !hasOwnProperty.call(usageData.whitelist.tags, node.name.toLowerCase())) {
                                shouldRemove = true;
                            }
                            if (usageData.blacklist !== null &&
                                usageData.blacklist.tags !== null &&
                                hasOwnProperty.call(usageData.blacklist.tags, node.name.toLowerCase())) {
                                shouldRemove = true;
                            }
                        }
                        break;
                }
            }
        });

        if (shouldRemove) {
            list.remove(item);
        }
    });

    return selectorList.children.isEmpty();
}

module.exports = function cleanRule(node, item, list, options) {
    if (hasNoChildren(node.prelude) || hasNoChildren(node.block)) {
        list.remove(item);
        return;
    }

    var usageData = options.usage;

    if (usageData && (usageData.whitelist !== null || usageData.blacklist !== null)) {
        cleanUnused(node.prelude, usageData);

        if (hasNoChildren(node.prelude)) {
            list.remove(item);
            return;
        }
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/clean/TypeSelector.js":
/*!*********************************************************!*\
  !*** ../../node_modules/csso/lib/clean/TypeSelector.js ***!
  \*********************************************************/
/***/ ((module) => {

// remove useless universal selector
module.exports = function cleanTypeSelector(node, item, list) {
    var name = item.data.name;

    // check it's a non-namespaced universal selector
    if (name !== '*') {
        return;
    }

    // remove when universal selector before other selectors
    var nextType = item.next && item.next.data.type;
    if (nextType === 'IdSelector' ||
        nextType === 'ClassSelector' ||
        nextType === 'AttributeSelector' ||
        nextType === 'PseudoClassSelector' ||
        nextType === 'PseudoElementSelector') {
        list.remove(item);
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/clean/WhiteSpace.js":
/*!*******************************************************!*\
  !*** ../../node_modules/csso/lib/clean/WhiteSpace.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var { isNodeChildrenList } = __webpack_require__(/*! ./utils */ "../../node_modules/csso/lib/clean/utils.js");

function isSafeOperator(node) {
    return node.type === 'Operator' && node.value !== '+' && node.value !== '-';
}

module.exports = function cleanWhitespace(node, item, list) {
    // remove when first or last item in sequence
    if (item.next === null || item.prev === null) {
        list.remove(item);
        return;
    }

    // white space in stylesheet or block children
    if (isNodeChildrenList(this.stylesheet, list) ||
        isNodeChildrenList(this.block, list)) {
        list.remove(item);
        return;
    }

    if (item.next.data.type === 'WhiteSpace') {
        list.remove(item);
        return;
    }

    if (isSafeOperator(item.prev.data) || isSafeOperator(item.next.data)) {
        list.remove(item);
        return;
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/clean/index.js":
/*!**************************************************!*\
  !*** ../../node_modules/csso/lib/clean/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;
var handlers = {
    Atrule: __webpack_require__(/*! ./Atrule */ "../../node_modules/csso/lib/clean/Atrule.js"),
    Comment: __webpack_require__(/*! ./Comment */ "../../node_modules/csso/lib/clean/Comment.js"),
    Declaration: __webpack_require__(/*! ./Declaration */ "../../node_modules/csso/lib/clean/Declaration.js"),
    Raw: __webpack_require__(/*! ./Raw */ "../../node_modules/csso/lib/clean/Raw.js"),
    Rule: __webpack_require__(/*! ./Rule */ "../../node_modules/csso/lib/clean/Rule.js"),
    TypeSelector: __webpack_require__(/*! ./TypeSelector */ "../../node_modules/csso/lib/clean/TypeSelector.js"),
    WhiteSpace: __webpack_require__(/*! ./WhiteSpace */ "../../node_modules/csso/lib/clean/WhiteSpace.js")
};

module.exports = function(ast, options) {
    walk(ast, {
        leave: function(node, item, list) {
            if (handlers.hasOwnProperty(node.type)) {
                handlers[node.type].call(this, node, item, list, options);
            }
        }
    });
};


/***/ }),

/***/ "../../node_modules/csso/lib/clean/utils.js":
/*!**************************************************!*\
  !*** ../../node_modules/csso/lib/clean/utils.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = {
    hasNoChildren: function(node) {
        return !node || !node.children || node.children.isEmpty();
    },
    isNodeChildrenList: function(node, list) {
        return node !== null && node.children === list;
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/compress.js":
/*!***********************************************!*\
  !*** ../../node_modules/csso/lib/compress.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var List = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").List;
var clone = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").clone;
var usageUtils = __webpack_require__(/*! ./usage */ "../../node_modules/csso/lib/usage.js");
var clean = __webpack_require__(/*! ./clean */ "../../node_modules/csso/lib/clean/index.js");
var replace = __webpack_require__(/*! ./replace */ "../../node_modules/csso/lib/replace/index.js");
var restructure = __webpack_require__(/*! ./restructure */ "../../node_modules/csso/lib/restructure/index.js");
var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;

function readChunk(children, specialComments) {
    var buffer = new List();
    var nonSpaceTokenInBuffer = false;
    var protectedComment;

    children.nextUntil(children.head, function(node, item, list) {
        if (node.type === 'Comment') {
            if (!specialComments || node.value.charAt(0) !== '!') {
                list.remove(item);
                return;
            }

            if (nonSpaceTokenInBuffer || protectedComment) {
                return true;
            }

            list.remove(item);
            protectedComment = node;
            return;
        }

        if (node.type !== 'WhiteSpace') {
            nonSpaceTokenInBuffer = true;
        }

        buffer.insert(list.remove(item));
    });

    return {
        comment: protectedComment,
        stylesheet: {
            type: 'StyleSheet',
            loc: null,
            children: buffer
        }
    };
}

function compressChunk(ast, firstAtrulesAllowed, num, options) {
    options.logger('Compress block #' + num, null, true);

    var seed = 1;

    if (ast.type === 'StyleSheet') {
        ast.firstAtrulesAllowed = firstAtrulesAllowed;
        ast.id = seed++;
    }

    walk(ast, {
        visit: 'Atrule',
        enter: function markScopes(node) {
            if (node.block !== null) {
                node.block.id = seed++;
            }
        }
    });
    options.logger('init', ast);

    // remove redundant
    clean(ast, options);
    options.logger('clean', ast);

    // replace nodes for shortened forms
    replace(ast, options);
    options.logger('replace', ast);

    // structure optimisations
    if (options.restructuring) {
        restructure(ast, options);
    }

    return ast;
}

function getCommentsOption(options) {
    var comments = 'comments' in options ? options.comments : 'exclamation';

    if (typeof comments === 'boolean') {
        comments = comments ? 'exclamation' : false;
    } else if (comments !== 'exclamation' && comments !== 'first-exclamation') {
        comments = false;
    }

    return comments;
}

function getRestructureOption(options) {
    if ('restructure' in options) {
        return options.restructure;
    }

    return 'restructuring' in options ? options.restructuring : true;
}

function wrapBlock(block) {
    return new List().appendData({
        type: 'Rule',
        loc: null,
        prelude: {
            type: 'SelectorList',
            loc: null,
            children: new List().appendData({
                type: 'Selector',
                loc: null,
                children: new List().appendData({
                    type: 'TypeSelector',
                    loc: null,
                    name: 'x'
                })
            })
        },
        block: block
    });
}

module.exports = function compress(ast, options) {
    ast = ast || { type: 'StyleSheet', loc: null, children: new List() };
    options = options || {};

    var compressOptions = {
        logger: typeof options.logger === 'function' ? options.logger : function() {},
        restructuring: getRestructureOption(options),
        forceMediaMerge: Boolean(options.forceMediaMerge),
        usage: options.usage ? usageUtils.buildIndex(options.usage) : false
    };
    var specialComments = getCommentsOption(options);
    var firstAtrulesAllowed = true;
    var input;
    var output = new List();
    var chunk;
    var chunkNum = 1;
    var chunkChildren;

    if (options.clone) {
        ast = clone(ast);
    }

    if (ast.type === 'StyleSheet') {
        input = ast.children;
        ast.children = output;
    } else {
        input = wrapBlock(ast);
    }

    do {
        chunk = readChunk(input, Boolean(specialComments));
        compressChunk(chunk.stylesheet, firstAtrulesAllowed, chunkNum++, compressOptions);
        chunkChildren = chunk.stylesheet.children;

        if (chunk.comment) {
            // add \n before comment if there is another content in output
            if (!output.isEmpty()) {
                output.insert(List.createItem({
                    type: 'Raw',
                    value: '\n'
                }));
            }

            output.insert(List.createItem(chunk.comment));

            // add \n after comment if chunk is not empty
            if (!chunkChildren.isEmpty()) {
                output.insert(List.createItem({
                    type: 'Raw',
                    value: '\n'
                }));
            }
        }

        if (firstAtrulesAllowed && !chunkChildren.isEmpty()) {
            var lastRule = chunkChildren.last();

            if (lastRule.type !== 'Atrule' ||
               (lastRule.name !== 'import' && lastRule.name !== 'charset')) {
                firstAtrulesAllowed = false;
            }
        }

        if (specialComments !== 'exclamation') {
            specialComments = false;
        }

        output.appendList(chunkChildren);
    } while (!input.isEmpty());

    return {
        ast: ast
    };
};


/***/ }),

/***/ "../../node_modules/csso/lib/index.js":
/*!********************************************!*\
  !*** ../../node_modules/csso/lib/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var csstree = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js");
var parse = csstree.parse;
var compress = __webpack_require__(/*! ./compress */ "../../node_modules/csso/lib/compress.js");
var generate = csstree.generate;

function debugOutput(name, options, startTime, data) {
    if (options.debug) {
        console.error('## ' + name + ' done in %d ms\n', Date.now() - startTime);
    }

    return data;
}

function createDefaultLogger(level) {
    var lastDebug;

    return function logger(title, ast) {
        var line = title;

        if (ast) {
            line = '[' + ((Date.now() - lastDebug) / 1000).toFixed(3) + 's] ' + line;
        }

        if (level > 1 && ast) {
            var css = generate(ast);

            // when level 2, limit css to 256 symbols
            if (level === 2 && css.length > 256) {
                css = css.substr(0, 256) + '...';
            }

            line += '\n  ' + css + '\n';
        }

        console.error(line);
        lastDebug = Date.now();
    };
}

function copy(obj) {
    var result = {};

    for (var key in obj) {
        result[key] = obj[key];
    }

    return result;
}

function buildCompressOptions(options) {
    options = copy(options);

    if (typeof options.logger !== 'function' && options.debug) {
        options.logger = createDefaultLogger(options.debug);
    }

    return options;
}

function runHandler(ast, options, handlers) {
    if (!Array.isArray(handlers)) {
        handlers = [handlers];
    }

    handlers.forEach(function(fn) {
        fn(ast, options);
    });
}

function minify(context, source, options) {
    options = options || {};

    var filename = options.filename || '<unknown>';
    var result;

    // parse
    var ast = debugOutput('parsing', options, Date.now(),
        parse(source, {
            context: context,
            filename: filename,
            positions: Boolean(options.sourceMap)
        })
    );

    // before compress handlers
    if (options.beforeCompress) {
        debugOutput('beforeCompress', options, Date.now(),
            runHandler(ast, options, options.beforeCompress)
        );
    }

    // compress
    var compressResult = debugOutput('compress', options, Date.now(),
        compress(ast, buildCompressOptions(options))
    );

    // after compress handlers
    if (options.afterCompress) {
        debugOutput('afterCompress', options, Date.now(),
            runHandler(compressResult, options, options.afterCompress)
        );
    }

    // generate
    if (options.sourceMap) {
        result = debugOutput('generate(sourceMap: true)', options, Date.now(), (function() {
            var tmp = generate(compressResult.ast, { sourceMap: true });
            tmp.map._file = filename; // since other tools can relay on file in source map transform chain
            tmp.map.setSourceContent(filename, source);
            return tmp;
        }()));
    } else {
        result = debugOutput('generate', options, Date.now(), {
            css: generate(compressResult.ast),
            map: null
        });
    }

    return result;
}

function minifyStylesheet(source, options) {
    return minify('stylesheet', source, options);
}

function minifyBlock(source, options) {
    return minify('declarationList', source, options);
}

module.exports = {
    version: __webpack_require__(/*! ../package.json */ "../../node_modules/csso/package.json").version,

    // main methods
    minify: minifyStylesheet,
    minifyBlock: minifyBlock,

    // css syntax parser/walkers/generator/etc
    syntax: Object.assign({
        compress: compress
    }, csstree)
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/Atrule.js":
/*!*****************************************************!*\
  !*** ../../node_modules/csso/lib/replace/Atrule.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var resolveKeyword = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").keyword;
var compressKeyframes = __webpack_require__(/*! ./atrule/keyframes */ "../../node_modules/csso/lib/replace/atrule/keyframes.js");

module.exports = function(node) {
    // compress @keyframe selectors
    if (resolveKeyword(node.name).basename === 'keyframes') {
        compressKeyframes(node);
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/AttributeSelector.js":
/*!****************************************************************!*\
  !*** ../../node_modules/csso/lib/replace/AttributeSelector.js ***!
  \****************************************************************/
/***/ ((module) => {

// Can unquote attribute detection
// Adopted implementation of Mathias Bynens
// https://github.com/mathiasbynens/mothereff.in/blob/master/unquoted-attributes/eff.js
var escapesRx = /\\([0-9A-Fa-f]{1,6})(\r\n|[ \t\n\f\r])?|\\./g;
var blockUnquoteRx = /^(-?\d|--)|[\u0000-\u002c\u002e\u002f\u003A-\u0040\u005B-\u005E\u0060\u007B-\u009f]/;

function canUnquote(value) {
    if (value === '' || value === '-') {
        return;
    }

    // Escapes are valid, so replace them with a valid non-empty string
    value = value.replace(escapesRx, 'a');

    return !blockUnquoteRx.test(value);
}

module.exports = function(node) {
    var attrValue = node.value;

    if (!attrValue || attrValue.type !== 'String') {
        return;
    }

    var unquotedValue = attrValue.value.replace(/^(.)(.*)\1$/, '$2');
    if (canUnquote(unquotedValue)) {
        node.value = {
            type: 'Identifier',
            loc: attrValue.loc,
            name: unquotedValue
        };
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/Dimension.js":
/*!********************************************************!*\
  !*** ../../node_modules/csso/lib/replace/Dimension.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var packNumber = __webpack_require__(/*! ./Number */ "../../node_modules/csso/lib/replace/Number.js").pack;
var MATH_FUNCTIONS = {
    'calc': true,
    'min': true,
    'max': true,
    'clamp': true
};
var LENGTH_UNIT = {
    // absolute length units
    'px': true,
    'mm': true,
    'cm': true,
    'in': true,
    'pt': true,
    'pc': true,

    // relative length units
    'em': true,
    'ex': true,
    'ch': true,
    'rem': true,

    // viewport-percentage lengths
    'vh': true,
    'vw': true,
    'vmin': true,
    'vmax': true,
    'vm': true
};

module.exports = function compressDimension(node, item) {
    var value = packNumber(node.value, item);

    node.value = value;

    if (value === '0' && this.declaration !== null && this.atrulePrelude === null) {
        var unit = node.unit.toLowerCase();

        // only length values can be compressed
        if (!LENGTH_UNIT.hasOwnProperty(unit)) {
            return;
        }

        // issue #362: shouldn't remove unit in -ms-flex since it breaks flex in IE10/11
        // issue #200: shouldn't remove unit in flex since it breaks flex in IE10/11
        if (this.declaration.property === '-ms-flex' ||
            this.declaration.property === 'flex') {
            return;
        }

        // issue #222: don't remove units inside calc
        if (this.function && MATH_FUNCTIONS.hasOwnProperty(this.function.name)) {
            return;
        }

        item.data = {
            type: 'Number',
            loc: node.loc,
            value: value
        };
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/Number.js":
/*!*****************************************************!*\
  !*** ../../node_modules/csso/lib/replace/Number.js ***!
  \*****************************************************/
/***/ ((module) => {

var OMIT_PLUSSIGN = /^(?:\+|(-))?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/;
var KEEP_PLUSSIGN = /^([\+\-])?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/;
var unsafeToRemovePlusSignAfter = {
    Dimension: true,
    Hash: true,
    Identifier: true,
    Number: true,
    Raw: true,
    UnicodeRange: true
};

function packNumber(value, item) {
    // omit plus sign only if no prev or prev is safe type
    var regexp = item && item.prev !== null && unsafeToRemovePlusSignAfter.hasOwnProperty(item.prev.data.type)
        ? KEEP_PLUSSIGN
        : OMIT_PLUSSIGN;

    // 100 -> '100'
    // 00100 -> '100'
    // +100 -> '100' (only when safe, e.g. omitting plus sign for 1px+1px leads to single dimension instead of two)
    // -100 -> '-100'
    // 0.123 -> '.123'
    // 0.12300 -> '.123'
    // 0.0 -> ''
    // 0 -> ''
    // -0 -> '-'
    value = String(value).replace(regexp, '$1$2$3');

    if (value === '' || value === '-') {
        value = '0';
    }

    return value;
}

module.exports = function(node, item) {
    node.value = packNumber(node.value, item);
};
module.exports.pack = packNumber;


/***/ }),

/***/ "../../node_modules/csso/lib/replace/Percentage.js":
/*!*********************************************************!*\
  !*** ../../node_modules/csso/lib/replace/Percentage.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var lexer = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").lexer;
var packNumber = __webpack_require__(/*! ./Number */ "../../node_modules/csso/lib/replace/Number.js").pack;
var blacklist = new Set([
    // see https://github.com/jakubpawlowicz/clean-css/issues/957
    'width',
    'min-width',
    'max-width',
    'height',
    'min-height',
    'max-height',

    // issue #410: Don’t remove units in flex-basis value for (-ms-)flex shorthand
    // issue #362: shouldn't remove unit in -ms-flex since it breaks flex in IE10/11
    // issue #200: shouldn't remove unit in flex since it breaks flex in IE10/11
    'flex',
    '-ms-flex'
]);

module.exports = function compressPercentage(node, item) {
    node.value = packNumber(node.value, item);

    if (node.value === '0' && this.declaration && !blacklist.has(this.declaration.property)) {
        // try to convert a number
        item.data = {
            type: 'Number',
            loc: node.loc,
            value: node.value
        };

        // that's ok only when new value matches on length
        if (!lexer.matchDeclaration(this.declaration).isType(item.data, 'length')) {
            // otherwise rollback changes
            item.data = node;
        }
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/String.js":
/*!*****************************************************!*\
  !*** ../../node_modules/csso/lib/replace/String.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function(node) {
    var value = node.value;

    // remove escaped newlines, i.e.
    // .a { content: "foo\
    // bar"}
    // ->
    // .a { content: "foobar" }
    value = value.replace(/\\(\r\n|\r|\n|\f)/g, '');

    node.value = value;
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/Url.js":
/*!**************************************************!*\
  !*** ../../node_modules/csso/lib/replace/Url.js ***!
  \**************************************************/
/***/ ((module) => {

var UNICODE = '\\\\[0-9a-f]{1,6}(\\r\\n|[ \\n\\r\\t\\f])?';
var ESCAPE = '(' + UNICODE + '|\\\\[^\\n\\r\\f0-9a-fA-F])';
var NONPRINTABLE = '\u0000\u0008\u000b\u000e-\u001f\u007f';
var SAFE_URL = new RegExp('^(' + ESCAPE + '|[^\"\'\\(\\)\\\\\\s' + NONPRINTABLE + '])*$', 'i');

module.exports = function(node) {
    var value = node.value;

    if (value.type !== 'String') {
        return;
    }

    var quote = value.value[0];
    var url = value.value.substr(1, value.value.length - 2);

    // convert `\\` to `/`
    url = url.replace(/\\\\/g, '/');

    // remove quotes when safe
    // https://www.w3.org/TR/css-syntax-3/#url-unquoted-diagram
    if (SAFE_URL.test(url)) {
        node.value = {
            type: 'Raw',
            loc: node.value.loc,
            value: url
        };
    } else {
        // use double quotes if string has no double quotes
        // otherwise use original quotes
        // TODO: make better quote type selection
        node.value.value = url.indexOf('"') === -1 ? '"' + url + '"' : quote + url + quote;
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/Value.js":
/*!****************************************************!*\
  !*** ../../node_modules/csso/lib/replace/Value.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var resolveName = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").property;
var handlers = {
    'font': __webpack_require__(/*! ./property/font */ "../../node_modules/csso/lib/replace/property/font.js"),
    'font-weight': __webpack_require__(/*! ./property/font-weight */ "../../node_modules/csso/lib/replace/property/font-weight.js"),
    'background': __webpack_require__(/*! ./property/background */ "../../node_modules/csso/lib/replace/property/background.js"),
    'border': __webpack_require__(/*! ./property/border */ "../../node_modules/csso/lib/replace/property/border.js"),
    'outline': __webpack_require__(/*! ./property/border */ "../../node_modules/csso/lib/replace/property/border.js")
};

module.exports = function compressValue(node) {
    if (!this.declaration) {
        return;
    }

    var property = resolveName(this.declaration.property);

    if (handlers.hasOwnProperty(property.basename)) {
        handlers[property.basename](node);
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/atrule/keyframes.js":
/*!***************************************************************!*\
  !*** ../../node_modules/csso/lib/replace/atrule/keyframes.js ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = function(node) {
    node.block.children.each(function(rule) {
        rule.prelude.children.each(function(simpleselector) {
            simpleselector.children.each(function(data, item) {
                if (data.type === 'Percentage' && data.value === '100') {
                    item.data = {
                        type: 'TypeSelector',
                        loc: data.loc,
                        name: 'to'
                    };
                } else if (data.type === 'TypeSelector' && data.name === 'from') {
                    item.data = {
                        type: 'Percentage',
                        loc: data.loc,
                        value: '0'
                    };
                }
            });
        });
    });
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/color.js":
/*!****************************************************!*\
  !*** ../../node_modules/csso/lib/replace/color.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var lexer = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").lexer;
var packNumber = __webpack_require__(/*! ./Number */ "../../node_modules/csso/lib/replace/Number.js").pack;

// http://www.w3.org/TR/css3-color/#svg-color
var NAME_TO_HEX = {
    'aliceblue': 'f0f8ff',
    'antiquewhite': 'faebd7',
    'aqua': '0ff',
    'aquamarine': '7fffd4',
    'azure': 'f0ffff',
    'beige': 'f5f5dc',
    'bisque': 'ffe4c4',
    'black': '000',
    'blanchedalmond': 'ffebcd',
    'blue': '00f',
    'blueviolet': '8a2be2',
    'brown': 'a52a2a',
    'burlywood': 'deb887',
    'cadetblue': '5f9ea0',
    'chartreuse': '7fff00',
    'chocolate': 'd2691e',
    'coral': 'ff7f50',
    'cornflowerblue': '6495ed',
    'cornsilk': 'fff8dc',
    'crimson': 'dc143c',
    'cyan': '0ff',
    'darkblue': '00008b',
    'darkcyan': '008b8b',
    'darkgoldenrod': 'b8860b',
    'darkgray': 'a9a9a9',
    'darkgrey': 'a9a9a9',
    'darkgreen': '006400',
    'darkkhaki': 'bdb76b',
    'darkmagenta': '8b008b',
    'darkolivegreen': '556b2f',
    'darkorange': 'ff8c00',
    'darkorchid': '9932cc',
    'darkred': '8b0000',
    'darksalmon': 'e9967a',
    'darkseagreen': '8fbc8f',
    'darkslateblue': '483d8b',
    'darkslategray': '2f4f4f',
    'darkslategrey': '2f4f4f',
    'darkturquoise': '00ced1',
    'darkviolet': '9400d3',
    'deeppink': 'ff1493',
    'deepskyblue': '00bfff',
    'dimgray': '696969',
    'dimgrey': '696969',
    'dodgerblue': '1e90ff',
    'firebrick': 'b22222',
    'floralwhite': 'fffaf0',
    'forestgreen': '228b22',
    'fuchsia': 'f0f',
    'gainsboro': 'dcdcdc',
    'ghostwhite': 'f8f8ff',
    'gold': 'ffd700',
    'goldenrod': 'daa520',
    'gray': '808080',
    'grey': '808080',
    'green': '008000',
    'greenyellow': 'adff2f',
    'honeydew': 'f0fff0',
    'hotpink': 'ff69b4',
    'indianred': 'cd5c5c',
    'indigo': '4b0082',
    'ivory': 'fffff0',
    'khaki': 'f0e68c',
    'lavender': 'e6e6fa',
    'lavenderblush': 'fff0f5',
    'lawngreen': '7cfc00',
    'lemonchiffon': 'fffacd',
    'lightblue': 'add8e6',
    'lightcoral': 'f08080',
    'lightcyan': 'e0ffff',
    'lightgoldenrodyellow': 'fafad2',
    'lightgray': 'd3d3d3',
    'lightgrey': 'd3d3d3',
    'lightgreen': '90ee90',
    'lightpink': 'ffb6c1',
    'lightsalmon': 'ffa07a',
    'lightseagreen': '20b2aa',
    'lightskyblue': '87cefa',
    'lightslategray': '789',
    'lightslategrey': '789',
    'lightsteelblue': 'b0c4de',
    'lightyellow': 'ffffe0',
    'lime': '0f0',
    'limegreen': '32cd32',
    'linen': 'faf0e6',
    'magenta': 'f0f',
    'maroon': '800000',
    'mediumaquamarine': '66cdaa',
    'mediumblue': '0000cd',
    'mediumorchid': 'ba55d3',
    'mediumpurple': '9370db',
    'mediumseagreen': '3cb371',
    'mediumslateblue': '7b68ee',
    'mediumspringgreen': '00fa9a',
    'mediumturquoise': '48d1cc',
    'mediumvioletred': 'c71585',
    'midnightblue': '191970',
    'mintcream': 'f5fffa',
    'mistyrose': 'ffe4e1',
    'moccasin': 'ffe4b5',
    'navajowhite': 'ffdead',
    'navy': '000080',
    'oldlace': 'fdf5e6',
    'olive': '808000',
    'olivedrab': '6b8e23',
    'orange': 'ffa500',
    'orangered': 'ff4500',
    'orchid': 'da70d6',
    'palegoldenrod': 'eee8aa',
    'palegreen': '98fb98',
    'paleturquoise': 'afeeee',
    'palevioletred': 'db7093',
    'papayawhip': 'ffefd5',
    'peachpuff': 'ffdab9',
    'peru': 'cd853f',
    'pink': 'ffc0cb',
    'plum': 'dda0dd',
    'powderblue': 'b0e0e6',
    'purple': '800080',
    'rebeccapurple': '639',
    'red': 'f00',
    'rosybrown': 'bc8f8f',
    'royalblue': '4169e1',
    'saddlebrown': '8b4513',
    'salmon': 'fa8072',
    'sandybrown': 'f4a460',
    'seagreen': '2e8b57',
    'seashell': 'fff5ee',
    'sienna': 'a0522d',
    'silver': 'c0c0c0',
    'skyblue': '87ceeb',
    'slateblue': '6a5acd',
    'slategray': '708090',
    'slategrey': '708090',
    'snow': 'fffafa',
    'springgreen': '00ff7f',
    'steelblue': '4682b4',
    'tan': 'd2b48c',
    'teal': '008080',
    'thistle': 'd8bfd8',
    'tomato': 'ff6347',
    'turquoise': '40e0d0',
    'violet': 'ee82ee',
    'wheat': 'f5deb3',
    'white': 'fff',
    'whitesmoke': 'f5f5f5',
    'yellow': 'ff0',
    'yellowgreen': '9acd32'
};

var HEX_TO_NAME = {
    '800000': 'maroon',
    '800080': 'purple',
    '808000': 'olive',
    '808080': 'gray',
    '00ffff': 'cyan',
    'f0ffff': 'azure',
    'f5f5dc': 'beige',
    'ffe4c4': 'bisque',
    '000000': 'black',
    '0000ff': 'blue',
    'a52a2a': 'brown',
    'ff7f50': 'coral',
    'ffd700': 'gold',
    '008000': 'green',
    '4b0082': 'indigo',
    'fffff0': 'ivory',
    'f0e68c': 'khaki',
    '00ff00': 'lime',
    'faf0e6': 'linen',
    '000080': 'navy',
    'ffa500': 'orange',
    'da70d6': 'orchid',
    'cd853f': 'peru',
    'ffc0cb': 'pink',
    'dda0dd': 'plum',
    'f00': 'red',
    'ff0000': 'red',
    'fa8072': 'salmon',
    'a0522d': 'sienna',
    'c0c0c0': 'silver',
    'fffafa': 'snow',
    'd2b48c': 'tan',
    '008080': 'teal',
    'ff6347': 'tomato',
    'ee82ee': 'violet',
    'f5deb3': 'wheat',
    'ffffff': 'white',
    'ffff00': 'yellow'
};

function hueToRgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}

function hslToRgb(h, s, l, a) {
    var r;
    var g;
    var b;

    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hueToRgb(p, q, h + 1 / 3);
        g = hueToRgb(p, q, h);
        b = hueToRgb(p, q, h - 1 / 3);
    }

    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255),
        a
    ];
}

function toHex(value) {
    value = value.toString(16);
    return value.length === 1 ? '0' + value : value;
}

function parseFunctionArgs(functionArgs, count, rgb) {
    var cursor = functionArgs.head;
    var args = [];
    var wasValue = false;

    while (cursor !== null) {
        var node = cursor.data;
        var type = node.type;

        switch (type) {
            case 'Number':
            case 'Percentage':
                if (wasValue) {
                    return;
                }

                wasValue = true;
                args.push({
                    type: type,
                    value: Number(node.value)
                });
                break;

            case 'Operator':
                if (node.value === ',') {
                    if (!wasValue) {
                        return;
                    }
                    wasValue = false;
                } else if (wasValue || node.value !== '+') {
                    return;
                }
                break;

            default:
                // something we couldn't understand
                return;
        }

        cursor = cursor.next;
    }

    if (args.length !== count) {
        // invalid arguments count
        // TODO: remove those tokens
        return;
    }

    if (args.length === 4) {
        if (args[3].type !== 'Number') {
            // 4th argument should be a number
            // TODO: remove those tokens
            return;
        }

        args[3].type = 'Alpha';
    }

    if (rgb) {
        if (args[0].type !== args[1].type || args[0].type !== args[2].type) {
            // invalid color, numbers and percentage shouldn't be mixed
            // TODO: remove those tokens
            return;
        }
    } else {
        if (args[0].type !== 'Number' ||
            args[1].type !== 'Percentage' ||
            args[2].type !== 'Percentage') {
            // invalid color, for hsl values should be: number, percentage, percentage
            // TODO: remove those tokens
            return;
        }

        args[0].type = 'Angle';
    }

    return args.map(function(arg) {
        var value = Math.max(0, arg.value);

        switch (arg.type) {
            case 'Number':
                // fit value to [0..255] range
                value = Math.min(value, 255);
                break;

            case 'Percentage':
                // convert 0..100% to value in [0..255] range
                value = Math.min(value, 100) / 100;

                if (!rgb) {
                    return value;
                }

                value = 255 * value;
                break;

            case 'Angle':
                // fit value to (-360..360) range
                return (((value % 360) + 360) % 360) / 360;

            case 'Alpha':
                // fit value to [0..1] range
                return Math.min(value, 1);
        }

        return Math.round(value);
    });
}

function compressFunction(node, item, list) {
    var functionName = node.name;
    var args;

    if (functionName === 'rgba' || functionName === 'hsla') {
        args = parseFunctionArgs(node.children, 4, functionName === 'rgba');

        if (!args) {
            // something went wrong
            return;
        }

        if (functionName === 'hsla') {
            args = hslToRgb.apply(null, args);
            node.name = 'rgba';
        }

        if (args[3] === 0) {
            // try to replace `rgba(x, x, x, 0)` to `transparent`
            // always replace `rgba(0, 0, 0, 0)` to `transparent`
            // otherwise avoid replacement in gradients since it may break color transition
            // http://stackoverflow.com/questions/11829410/css3-gradient-rendering-issues-from-transparent-to-white
            var scopeFunctionName = this.function && this.function.name;
            if ((args[0] === 0 && args[1] === 0 && args[2] === 0) ||
                !/^(?:to|from|color-stop)$|gradient$/i.test(scopeFunctionName)) {

                item.data = {
                    type: 'Identifier',
                    loc: node.loc,
                    name: 'transparent'
                };

                return;
            }
        }

        if (args[3] !== 1) {
            // replace argument values for normalized/interpolated
            node.children.each(function(node, item, list) {
                if (node.type === 'Operator') {
                    if (node.value !== ',') {
                        list.remove(item);
                    }
                    return;
                }

                item.data = {
                    type: 'Number',
                    loc: node.loc,
                    value: packNumber(args.shift(), null)
                };
            });

            return;
        }

        // otherwise convert to rgb, i.e. rgba(255, 0, 0, 1) -> rgb(255, 0, 0)
        functionName = 'rgb';
    }

    if (functionName === 'hsl') {
        args = args || parseFunctionArgs(node.children, 3, false);

        if (!args) {
            // something went wrong
            return;
        }

        // convert to rgb
        args = hslToRgb.apply(null, args);
        functionName = 'rgb';
    }

    if (functionName === 'rgb') {
        args = args || parseFunctionArgs(node.children, 3, true);

        if (!args) {
            // something went wrong
            return;
        }

        // check if color is not at the end and not followed by space
        var next = item.next;
        if (next && next.data.type !== 'WhiteSpace') {
            list.insert(list.createItem({
                type: 'WhiteSpace',
                value: ' '
            }), next);
        }

        item.data = {
            type: 'Hash',
            loc: node.loc,
            value: toHex(args[0]) + toHex(args[1]) + toHex(args[2])
        };

        compressHex(item.data, item);
    }
}

function compressIdent(node, item) {
    if (this.declaration === null) {
        return;
    }

    var color = node.name.toLowerCase();

    if (NAME_TO_HEX.hasOwnProperty(color) &&
        lexer.matchDeclaration(this.declaration).isType(node, 'color')) {
        var hex = NAME_TO_HEX[color];

        if (hex.length + 1 <= color.length) {
            // replace for shorter hex value
            item.data = {
                type: 'Hash',
                loc: node.loc,
                value: hex
            };
        } else {
            // special case for consistent colors
            if (color === 'grey') {
                color = 'gray';
            }

            // just replace value for lower cased name
            node.name = color;
        }
    }
}

function compressHex(node, item) {
    var color = node.value.toLowerCase();

    // #112233 -> #123
    if (color.length === 6 &&
        color[0] === color[1] &&
        color[2] === color[3] &&
        color[4] === color[5]) {
        color = color[0] + color[2] + color[4];
    }

    if (HEX_TO_NAME[color]) {
        item.data = {
            type: 'Identifier',
            loc: node.loc,
            name: HEX_TO_NAME[color]
        };
    } else {
        node.value = color;
    }
}

module.exports = {
    compressFunction: compressFunction,
    compressIdent: compressIdent,
    compressHex: compressHex
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/index.js":
/*!****************************************************!*\
  !*** ../../node_modules/csso/lib/replace/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;
var handlers = {
    Atrule: __webpack_require__(/*! ./Atrule */ "../../node_modules/csso/lib/replace/Atrule.js"),
    AttributeSelector: __webpack_require__(/*! ./AttributeSelector */ "../../node_modules/csso/lib/replace/AttributeSelector.js"),
    Value: __webpack_require__(/*! ./Value */ "../../node_modules/csso/lib/replace/Value.js"),
    Dimension: __webpack_require__(/*! ./Dimension */ "../../node_modules/csso/lib/replace/Dimension.js"),
    Percentage: __webpack_require__(/*! ./Percentage */ "../../node_modules/csso/lib/replace/Percentage.js"),
    Number: __webpack_require__(/*! ./Number */ "../../node_modules/csso/lib/replace/Number.js"),
    String: __webpack_require__(/*! ./String */ "../../node_modules/csso/lib/replace/String.js"),
    Url: __webpack_require__(/*! ./Url */ "../../node_modules/csso/lib/replace/Url.js"),
    Hash: __webpack_require__(/*! ./color */ "../../node_modules/csso/lib/replace/color.js").compressHex,
    Identifier: __webpack_require__(/*! ./color */ "../../node_modules/csso/lib/replace/color.js").compressIdent,
    Function: __webpack_require__(/*! ./color */ "../../node_modules/csso/lib/replace/color.js").compressFunction
};

module.exports = function(ast) {
    walk(ast, {
        leave: function(node, item, list) {
            if (handlers.hasOwnProperty(node.type)) {
                handlers[node.type].call(this, node, item, list);
            }
        }
    });
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/property/background.js":
/*!******************************************************************!*\
  !*** ../../node_modules/csso/lib/replace/property/background.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var List = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").List;

module.exports = function compressBackground(node) {
    function lastType() {
        if (buffer.length) {
            return buffer[buffer.length - 1].type;
        }
    }

    function flush() {
        if (lastType() === 'WhiteSpace') {
            buffer.pop();
        }

        if (!buffer.length) {
            buffer.unshift(
                {
                    type: 'Number',
                    loc: null,
                    value: '0'
                },
                {
                    type: 'WhiteSpace',
                    value: ' '
                },
                {
                    type: 'Number',
                    loc: null,
                    value: '0'
                }
            );
        }

        newValue.push.apply(newValue, buffer);

        buffer = [];
    }

    var newValue = [];
    var buffer = [];

    node.children.each(function(node) {
        if (node.type === 'Operator' && node.value === ',') {
            flush();
            newValue.push(node);
            return;
        }

        // remove defaults
        if (node.type === 'Identifier') {
            if (node.name === 'transparent' ||
                node.name === 'none' ||
                node.name === 'repeat' ||
                node.name === 'scroll') {
                return;
            }
        }

        // don't add redundant spaces
        if (node.type === 'WhiteSpace' && (!buffer.length || lastType() === 'WhiteSpace')) {
            return;
        }

        buffer.push(node);
    });

    flush();
    node.children = new List().fromArray(newValue);
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/property/border.js":
/*!**************************************************************!*\
  !*** ../../node_modules/csso/lib/replace/property/border.js ***!
  \**************************************************************/
/***/ ((module) => {

function removeItemAndRedundantWhiteSpace(list, item) {
    var prev = item.prev;
    var next = item.next;

    if (next !== null) {
        if (next.data.type === 'WhiteSpace' && (prev === null || prev.data.type === 'WhiteSpace')) {
            list.remove(next);
        }
    } else if (prev !== null && prev.data.type === 'WhiteSpace') {
        list.remove(prev);
    }

    list.remove(item);
}

module.exports = function compressBorder(node) {
    node.children.each(function(node, item, list) {
        if (node.type === 'Identifier' && node.name.toLowerCase() === 'none') {
            if (list.head === list.tail) {
                // replace `none` for zero when `none` is a single term
                item.data = {
                    type: 'Number',
                    loc: node.loc,
                    value: '0'
                };
            } else {
                removeItemAndRedundantWhiteSpace(list, item);
            }
        }
    });
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/property/font-weight.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/csso/lib/replace/property/font-weight.js ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = function compressFontWeight(node) {
    var value = node.children.head.data;

    if (value.type === 'Identifier') {
        switch (value.name) {
            case 'normal':
                node.children.head.data = {
                    type: 'Number',
                    loc: value.loc,
                    value: '400'
                };
                break;
            case 'bold':
                node.children.head.data = {
                    type: 'Number',
                    loc: value.loc,
                    value: '700'
                };
                break;
        }
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/replace/property/font.js":
/*!************************************************************!*\
  !*** ../../node_modules/csso/lib/replace/property/font.js ***!
  \************************************************************/
/***/ ((module) => {

module.exports = function compressFont(node) {
    var list = node.children;

    list.eachRight(function(node, item) {
        if (node.type === 'Identifier') {
            if (node.name === 'bold') {
                item.data = {
                    type: 'Number',
                    loc: node.loc,
                    value: '700'
                };
            } else if (node.name === 'normal') {
                var prev = item.prev;

                if (prev && prev.data.type === 'Operator' && prev.data.value === '/') {
                    this.remove(prev);
                }

                this.remove(item);
            } else if (node.name === 'medium') {
                var next = item.next;

                if (!next || next.data.type !== 'Operator') {
                    this.remove(item);
                }
            }
        }
    });

    // remove redundant spaces
    list.each(function(node, item) {
        if (node.type === 'WhiteSpace') {
            if (!item.prev || !item.next || item.next.data.type === 'WhiteSpace') {
                this.remove(item);
            }
        }
    });

    if (list.isEmpty()) {
        list.insert(list.createItem({
            type: 'Identifier',
            name: 'normal'
        }));
    }
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/1-mergeAtrule.js":
/*!****************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/1-mergeAtrule.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var List = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").List;
var resolveKeyword = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").keyword;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;

function addRuleToMap(map, item, list, single) {
    var node = item.data;
    var name = resolveKeyword(node.name).basename;
    var id = node.name.toLowerCase() + '/' + (node.prelude ? node.prelude.id : null);

    if (!hasOwnProperty.call(map, name)) {
        map[name] = Object.create(null);
    }

    if (single) {
        delete map[name][id];
    }

    if (!hasOwnProperty.call(map[name], id)) {
        map[name][id] = new List();
    }

    map[name][id].append(list.remove(item));
}

function relocateAtrules(ast, options) {
    var collected = Object.create(null);
    var topInjectPoint = null;

    ast.children.each(function(node, item, list) {
        if (node.type === 'Atrule') {
            var name = resolveKeyword(node.name).basename;

            switch (name) {
                case 'keyframes':
                    addRuleToMap(collected, item, list, true);
                    return;

                case 'media':
                    if (options.forceMediaMerge) {
                        addRuleToMap(collected, item, list, false);
                        return;
                    }
                    break;
            }

            if (topInjectPoint === null &&
                name !== 'charset' &&
                name !== 'import') {
                topInjectPoint = item;
            }
        } else {
            if (topInjectPoint === null) {
                topInjectPoint = item;
            }
        }
    });

    for (var atrule in collected) {
        for (var id in collected[atrule]) {
            ast.children.insertList(
                collected[atrule][id],
                atrule === 'media' ? null : topInjectPoint
            );
        }
    }
};

function isMediaRule(node) {
    return node.type === 'Atrule' && node.name === 'media';
}

function processAtrule(node, item, list) {
    if (!isMediaRule(node)) {
        return;
    }

    var prev = item.prev && item.prev.data;

    if (!prev || !isMediaRule(prev)) {
        return;
    }

    // merge @media with same query
    if (node.prelude &&
        prev.prelude &&
        node.prelude.id === prev.prelude.id) {
        prev.block.children.appendList(node.block.children);
        list.remove(item);

        // TODO: use it when we can refer to several points in source
        // prev.loc = {
        //     primary: prev.loc,
        //     merged: node.loc
        // };
    }
}

module.exports = function rejoinAtrule(ast, options) {
    relocateAtrules(ast, options);

    walk(ast, {
        visit: 'Atrule',
        reverse: true,
        enter: processAtrule
    });
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/2-initialMergeRuleset.js":
/*!************************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/2-initialMergeRuleset.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;
var utils = __webpack_require__(/*! ./utils */ "../../node_modules/csso/lib/restructure/utils.js");

function processRule(node, item, list) {
    var selectors = node.prelude.children;
    var declarations = node.block.children;

    list.prevUntil(item.prev, function(prev) {
        // skip non-ruleset node if safe
        if (prev.type !== 'Rule') {
            return utils.unsafeToSkipNode.call(selectors, prev);
        }

        var prevSelectors = prev.prelude.children;
        var prevDeclarations = prev.block.children;

        // try to join rulesets with equal pseudo signature
        if (node.pseudoSignature === prev.pseudoSignature) {
            // try to join by selectors
            if (utils.isEqualSelectors(prevSelectors, selectors)) {
                prevDeclarations.appendList(declarations);
                list.remove(item);
                return true;
            }

            // try to join by declarations
            if (utils.isEqualDeclarations(declarations, prevDeclarations)) {
                utils.addSelectors(prevSelectors, selectors);
                list.remove(item);
                return true;
            }
        }

        // go to prev ruleset if has no selector similarities
        return utils.hasSimilarSelectors(selectors, prevSelectors);
    });
}

// NOTE: direction should be left to right, since rulesets merge to left
// ruleset. When direction right to left unmerged rulesets may prevent lookup
// TODO: remove initial merge
module.exports = function initialMergeRule(ast) {
    walk(ast, {
        visit: 'Rule',
        enter: processRule
    });
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/3-disjoinRuleset.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/3-disjoinRuleset.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var List = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").List;
var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;

function processRule(node, item, list) {
    var selectors = node.prelude.children;

    // generate new rule sets:
    // .a, .b { color: red; }
    // ->
    // .a { color: red; }
    // .b { color: red; }

    // while there are more than 1 simple selector split for rulesets
    while (selectors.head !== selectors.tail) {
        var newSelectors = new List();
        newSelectors.insert(selectors.remove(selectors.head));

        list.insert(list.createItem({
            type: 'Rule',
            loc: node.loc,
            prelude: {
                type: 'SelectorList',
                loc: node.prelude.loc,
                children: newSelectors
            },
            block: {
                type: 'Block',
                loc: node.block.loc,
                children: node.block.children.copy()
            },
            pseudoSignature: node.pseudoSignature
        }), item);
    }
}

module.exports = function disjoinRule(ast) {
    walk(ast, {
        visit: 'Rule',
        reverse: true,
        enter: processRule
    });
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/4-restructShorthand.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/4-restructShorthand.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var List = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").List;
var generate = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").generate;
var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;

var REPLACE = 1;
var REMOVE = 2;
var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;
var SIDES = ['top', 'right', 'bottom', 'left'];
var SIDE = {
    'margin-top': 'top',
    'margin-right': 'right',
    'margin-bottom': 'bottom',
    'margin-left': 'left',

    'padding-top': 'top',
    'padding-right': 'right',
    'padding-bottom': 'bottom',
    'padding-left': 'left',

    'border-top-color': 'top',
    'border-right-color': 'right',
    'border-bottom-color': 'bottom',
    'border-left-color': 'left',
    'border-top-width': 'top',
    'border-right-width': 'right',
    'border-bottom-width': 'bottom',
    'border-left-width': 'left',
    'border-top-style': 'top',
    'border-right-style': 'right',
    'border-bottom-style': 'bottom',
    'border-left-style': 'left'
};
var MAIN_PROPERTY = {
    'margin': 'margin',
    'margin-top': 'margin',
    'margin-right': 'margin',
    'margin-bottom': 'margin',
    'margin-left': 'margin',

    'padding': 'padding',
    'padding-top': 'padding',
    'padding-right': 'padding',
    'padding-bottom': 'padding',
    'padding-left': 'padding',

    'border-color': 'border-color',
    'border-top-color': 'border-color',
    'border-right-color': 'border-color',
    'border-bottom-color': 'border-color',
    'border-left-color': 'border-color',
    'border-width': 'border-width',
    'border-top-width': 'border-width',
    'border-right-width': 'border-width',
    'border-bottom-width': 'border-width',
    'border-left-width': 'border-width',
    'border-style': 'border-style',
    'border-top-style': 'border-style',
    'border-right-style': 'border-style',
    'border-bottom-style': 'border-style',
    'border-left-style': 'border-style'
};

function TRBL(name) {
    this.name = name;
    this.loc = null;
    this.iehack = undefined;
    this.sides = {
        'top': null,
        'right': null,
        'bottom': null,
        'left': null
    };
}

TRBL.prototype.getValueSequence = function(declaration, count) {
    var values = [];
    var iehack = '';
    var hasBadValues = declaration.value.type !== 'Value' || declaration.value.children.some(function(child) {
        var special = false;

        switch (child.type) {
            case 'Identifier':
                switch (child.name) {
                    case '\\0':
                    case '\\9':
                        iehack = child.name;
                        return;

                    case 'inherit':
                    case 'initial':
                    case 'unset':
                    case 'revert':
                        special = child.name;
                        break;
                }
                break;

            case 'Dimension':
                switch (child.unit) {
                    // is not supported until IE11
                    case 'rem':

                    // v* units is too buggy across browsers and better
                    // don't merge values with those units
                    case 'vw':
                    case 'vh':
                    case 'vmin':
                    case 'vmax':
                    case 'vm': // IE9 supporting "vm" instead of "vmin".
                        special = child.unit;
                        break;
                }
                break;

            case 'Hash': // color
            case 'Number':
            case 'Percentage':
                break;

            case 'Function':
                if (child.name === 'var') {
                    return true;
                }

                special = child.name;
                break;

            case 'WhiteSpace':
                return false; // ignore space

            default:
                return true;  // bad value
        }

        values.push({
            node: child,
            special: special,
            important: declaration.important
        });
    });

    if (hasBadValues || values.length > count) {
        return false;
    }

    if (typeof this.iehack === 'string' && this.iehack !== iehack) {
        return false;
    }

    this.iehack = iehack; // move outside

    return values;
};

TRBL.prototype.canOverride = function(side, value) {
    var currentValue = this.sides[side];

    return !currentValue || (value.important && !currentValue.important);
};

TRBL.prototype.add = function(name, declaration) {
    function attemptToAdd() {
        var sides = this.sides;
        var side = SIDE[name];

        if (side) {
            if (side in sides === false) {
                return false;
            }

            var values = this.getValueSequence(declaration, 1);

            if (!values || !values.length) {
                return false;
            }

            // can mix only if specials are equal
            for (var key in sides) {
                if (sides[key] !== null && sides[key].special !== values[0].special) {
                    return false;
                }
            }

            if (!this.canOverride(side, values[0])) {
                return true;
            }

            sides[side] = values[0];
            return true;
        } else if (name === this.name) {
            var values = this.getValueSequence(declaration, 4);

            if (!values || !values.length) {
                return false;
            }

            switch (values.length) {
                case 1:
                    values[RIGHT] = values[TOP];
                    values[BOTTOM] = values[TOP];
                    values[LEFT] = values[TOP];
                    break;

                case 2:
                    values[BOTTOM] = values[TOP];
                    values[LEFT] = values[RIGHT];
                    break;

                case 3:
                    values[LEFT] = values[RIGHT];
                    break;
            }

            // can mix only if specials are equal
            for (var i = 0; i < 4; i++) {
                for (var key in sides) {
                    if (sides[key] !== null && sides[key].special !== values[i].special) {
                        return false;
                    }
                }
            }

            for (var i = 0; i < 4; i++) {
                if (this.canOverride(SIDES[i], values[i])) {
                    sides[SIDES[i]] = values[i];
                }
            }

            return true;
        }
    }

    if (!attemptToAdd.call(this)) {
        return false;
    }

    // TODO: use it when we can refer to several points in source
    // if (this.loc) {
    //     this.loc = {
    //         primary: this.loc,
    //         merged: declaration.loc
    //     };
    // } else {
    //     this.loc = declaration.loc;
    // }
    if (!this.loc) {
        this.loc = declaration.loc;
    }

    return true;
};

TRBL.prototype.isOkToMinimize = function() {
    var top = this.sides.top;
    var right = this.sides.right;
    var bottom = this.sides.bottom;
    var left = this.sides.left;

    if (top && right && bottom && left) {
        var important =
            top.important +
            right.important +
            bottom.important +
            left.important;

        return important === 0 || important === 4;
    }

    return false;
};

TRBL.prototype.getValue = function() {
    var result = new List();
    var sides = this.sides;
    var values = [
        sides.top,
        sides.right,
        sides.bottom,
        sides.left
    ];
    var stringValues = [
        generate(sides.top.node),
        generate(sides.right.node),
        generate(sides.bottom.node),
        generate(sides.left.node)
    ];

    if (stringValues[LEFT] === stringValues[RIGHT]) {
        values.pop();
        if (stringValues[BOTTOM] === stringValues[TOP]) {
            values.pop();
            if (stringValues[RIGHT] === stringValues[TOP]) {
                values.pop();
            }
        }
    }

    for (var i = 0; i < values.length; i++) {
        if (i) {
            result.appendData({ type: 'WhiteSpace', value: ' ' });
        }

        result.appendData(values[i].node);
    }

    if (this.iehack) {
        result.appendData({ type: 'WhiteSpace', value: ' ' });
        result.appendData({
            type: 'Identifier',
            loc: null,
            name: this.iehack
        });
    }

    return {
        type: 'Value',
        loc: null,
        children: result
    };
};

TRBL.prototype.getDeclaration = function() {
    return {
        type: 'Declaration',
        loc: this.loc,
        important: this.sides.top.important,
        property: this.name,
        value: this.getValue()
    };
};

function processRule(rule, shorts, shortDeclarations, lastShortSelector) {
    var declarations = rule.block.children;
    var selector = rule.prelude.children.first().id;

    rule.block.children.eachRight(function(declaration, item) {
        var property = declaration.property;

        if (!MAIN_PROPERTY.hasOwnProperty(property)) {
            return;
        }

        var key = MAIN_PROPERTY[property];
        var shorthand;
        var operation;

        if (!lastShortSelector || selector === lastShortSelector) {
            if (key in shorts) {
                operation = REMOVE;
                shorthand = shorts[key];
            }
        }

        if (!shorthand || !shorthand.add(property, declaration)) {
            operation = REPLACE;
            shorthand = new TRBL(key);

            // if can't parse value ignore it and break shorthand children
            if (!shorthand.add(property, declaration)) {
                lastShortSelector = null;
                return;
            }
        }

        shorts[key] = shorthand;
        shortDeclarations.push({
            operation: operation,
            block: declarations,
            item: item,
            shorthand: shorthand
        });

        lastShortSelector = selector;
    });

    return lastShortSelector;
}

function processShorthands(shortDeclarations, markDeclaration) {
    shortDeclarations.forEach(function(item) {
        var shorthand = item.shorthand;

        if (!shorthand.isOkToMinimize()) {
            return;
        }

        if (item.operation === REPLACE) {
            item.item.data = markDeclaration(shorthand.getDeclaration());
        } else {
            item.block.remove(item.item);
        }
    });
}

module.exports = function restructBlock(ast, indexer) {
    var stylesheetMap = {};
    var shortDeclarations = [];

    walk(ast, {
        visit: 'Rule',
        reverse: true,
        enter: function(node) {
            var stylesheet = this.block || this.stylesheet;
            var ruleId = (node.pseudoSignature || '') + '|' + node.prelude.children.first().id;
            var ruleMap;
            var shorts;

            if (!stylesheetMap.hasOwnProperty(stylesheet.id)) {
                ruleMap = {
                    lastShortSelector: null
                };
                stylesheetMap[stylesheet.id] = ruleMap;
            } else {
                ruleMap = stylesheetMap[stylesheet.id];
            }

            if (ruleMap.hasOwnProperty(ruleId)) {
                shorts = ruleMap[ruleId];
            } else {
                shorts = {};
                ruleMap[ruleId] = shorts;
            }

            ruleMap.lastShortSelector = processRule.call(this, node, shorts, shortDeclarations, ruleMap.lastShortSelector);
        }
    });

    processShorthands(shortDeclarations, indexer.declaration);
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/6-restructBlock.js":
/*!******************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/6-restructBlock.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var resolveProperty = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").property;
var resolveKeyword = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").keyword;
var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;
var generate = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").generate;
var fingerprintId = 1;
var dontRestructure = {
    'src': 1 // https://github.com/afelix/csso/issues/50
};

var DONT_MIX_VALUE = {
    // https://developer.mozilla.org/en-US/docs/Web/CSS/display#Browser_compatibility
    'display': /table|ruby|flex|-(flex)?box$|grid|contents|run-in/i,
    // https://developer.mozilla.org/en/docs/Web/CSS/text-align
    'text-align': /^(start|end|match-parent|justify-all)$/i
};

var SAFE_VALUES = {
    cursor: [
        'auto', 'crosshair', 'default', 'move', 'text', 'wait', 'help',
        'n-resize', 'e-resize', 's-resize', 'w-resize',
        'ne-resize', 'nw-resize', 'se-resize', 'sw-resize',
        'pointer', 'progress', 'not-allowed', 'no-drop', 'vertical-text', 'all-scroll',
        'col-resize', 'row-resize'
    ],
    overflow: [
        'hidden', 'visible', 'scroll', 'auto'
    ],
    position: [
        'static', 'relative', 'absolute', 'fixed'
    ]
};

var NEEDLESS_TABLE = {
    'border-width': ['border'],
    'border-style': ['border'],
    'border-color': ['border'],
    'border-top': ['border'],
    'border-right': ['border'],
    'border-bottom': ['border'],
    'border-left': ['border'],
    'border-top-width': ['border-top', 'border-width', 'border'],
    'border-right-width': ['border-right', 'border-width', 'border'],
    'border-bottom-width': ['border-bottom', 'border-width', 'border'],
    'border-left-width': ['border-left', 'border-width', 'border'],
    'border-top-style': ['border-top', 'border-style', 'border'],
    'border-right-style': ['border-right', 'border-style', 'border'],
    'border-bottom-style': ['border-bottom', 'border-style', 'border'],
    'border-left-style': ['border-left', 'border-style', 'border'],
    'border-top-color': ['border-top', 'border-color', 'border'],
    'border-right-color': ['border-right', 'border-color', 'border'],
    'border-bottom-color': ['border-bottom', 'border-color', 'border'],
    'border-left-color': ['border-left', 'border-color', 'border'],
    'margin-top': ['margin'],
    'margin-right': ['margin'],
    'margin-bottom': ['margin'],
    'margin-left': ['margin'],
    'padding-top': ['padding'],
    'padding-right': ['padding'],
    'padding-bottom': ['padding'],
    'padding-left': ['padding'],
    'font-style': ['font'],
    'font-variant': ['font'],
    'font-weight': ['font'],
    'font-size': ['font'],
    'font-family': ['font'],
    'list-style-type': ['list-style'],
    'list-style-position': ['list-style'],
    'list-style-image': ['list-style']
};

function getPropertyFingerprint(propertyName, declaration, fingerprints) {
    var realName = resolveProperty(propertyName).basename;

    if (realName === 'background') {
        return propertyName + ':' + generate(declaration.value);
    }

    var declarationId = declaration.id;
    var fingerprint = fingerprints[declarationId];

    if (!fingerprint) {
        switch (declaration.value.type) {
            case 'Value':
                var vendorId = '';
                var iehack = '';
                var special = {};
                var raw = false;

                declaration.value.children.each(function walk(node) {
                    switch (node.type) {
                        case 'Value':
                        case 'Brackets':
                        case 'Parentheses':
                            node.children.each(walk);
                            break;

                        case 'Raw':
                            raw = true;
                            break;

                        case 'Identifier':
                            var name = node.name;

                            if (!vendorId) {
                                vendorId = resolveKeyword(name).vendor;
                            }

                            if (/\\[09]/.test(name)) {
                                iehack = RegExp.lastMatch;
                            }

                            if (SAFE_VALUES.hasOwnProperty(realName)) {
                                if (SAFE_VALUES[realName].indexOf(name) === -1) {
                                    special[name] = true;
                                }
                            } else if (DONT_MIX_VALUE.hasOwnProperty(realName)) {
                                if (DONT_MIX_VALUE[realName].test(name)) {
                                    special[name] = true;
                                }
                            }

                            break;

                        case 'Function':
                            var name = node.name;

                            if (!vendorId) {
                                vendorId = resolveKeyword(name).vendor;
                            }

                            if (name === 'rect') {
                                // there are 2 forms of rect:
                                //   rect(<top>, <right>, <bottom>, <left>) - standart
                                //   rect(<top> <right> <bottom> <left>) – backwards compatible syntax
                                // only the same form values can be merged
                                var hasComma = node.children.some(function(node) {
                                    return node.type === 'Operator' && node.value === ',';
                                });
                                if (!hasComma) {
                                    name = 'rect-backward';
                                }
                            }

                            special[name + '()'] = true;

                            // check nested tokens too
                            node.children.each(walk);

                            break;

                        case 'Dimension':
                            var unit = node.unit;

                            if (/\\[09]/.test(unit)) {
                                iehack = RegExp.lastMatch;
                            }

                            switch (unit) {
                                // is not supported until IE11
                                case 'rem':

                                // v* units is too buggy across browsers and better
                                // don't merge values with those units
                                case 'vw':
                                case 'vh':
                                case 'vmin':
                                case 'vmax':
                                case 'vm': // IE9 supporting "vm" instead of "vmin".
                                    special[unit] = true;
                                    break;
                            }
                            break;
                    }
                });

                fingerprint = raw
                    ? '!' + fingerprintId++
                    : '!' + Object.keys(special).sort() + '|' + iehack + vendorId;
                break;

            case 'Raw':
                fingerprint = '!' + declaration.value.value;
                break;

            default:
                fingerprint = generate(declaration.value);
        }

        fingerprints[declarationId] = fingerprint;
    }

    return propertyName + fingerprint;
}

function needless(props, declaration, fingerprints) {
    var property = resolveProperty(declaration.property);

    if (NEEDLESS_TABLE.hasOwnProperty(property.basename)) {
        var table = NEEDLESS_TABLE[property.basename];

        for (var i = 0; i < table.length; i++) {
            var ppre = getPropertyFingerprint(property.prefix + table[i], declaration, fingerprints);
            var prev = props.hasOwnProperty(ppre) ? props[ppre] : null;

            if (prev && (!declaration.important || prev.item.data.important)) {
                return prev;
            }
        }
    }
}

function processRule(rule, item, list, props, fingerprints) {
    var declarations = rule.block.children;

    declarations.eachRight(function(declaration, declarationItem) {
        var property = declaration.property;
        var fingerprint = getPropertyFingerprint(property, declaration, fingerprints);
        var prev = props[fingerprint];

        if (prev && !dontRestructure.hasOwnProperty(property)) {
            if (declaration.important && !prev.item.data.important) {
                props[fingerprint] = {
                    block: declarations,
                    item: declarationItem
                };

                prev.block.remove(prev.item);

                // TODO: use it when we can refer to several points in source
                // declaration.loc = {
                //     primary: declaration.loc,
                //     merged: prev.item.data.loc
                // };
            } else {
                declarations.remove(declarationItem);

                // TODO: use it when we can refer to several points in source
                // prev.item.data.loc = {
                //     primary: prev.item.data.loc,
                //     merged: declaration.loc
                // };
            }
        } else {
            var prev = needless(props, declaration, fingerprints);

            if (prev) {
                declarations.remove(declarationItem);

                // TODO: use it when we can refer to several points in source
                // prev.item.data.loc = {
                //     primary: prev.item.data.loc,
                //     merged: declaration.loc
                // };
            } else {
                declaration.fingerprint = fingerprint;

                props[fingerprint] = {
                    block: declarations,
                    item: declarationItem
                };
            }
        }
    });

    if (declarations.isEmpty()) {
        list.remove(item);
    }
}

module.exports = function restructBlock(ast) {
    var stylesheetMap = {};
    var fingerprints = Object.create(null);

    walk(ast, {
        visit: 'Rule',
        reverse: true,
        enter: function(node, item, list) {
            var stylesheet = this.block || this.stylesheet;
            var ruleId = (node.pseudoSignature || '') + '|' + node.prelude.children.first().id;
            var ruleMap;
            var props;

            if (!stylesheetMap.hasOwnProperty(stylesheet.id)) {
                ruleMap = {};
                stylesheetMap[stylesheet.id] = ruleMap;
            } else {
                ruleMap = stylesheetMap[stylesheet.id];
            }

            if (ruleMap.hasOwnProperty(ruleId)) {
                props = ruleMap[ruleId];
            } else {
                props = {};
                ruleMap[ruleId] = props;
            }

            processRule.call(this, node, item, list, props, fingerprints);
        }
    });
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/7-mergeRuleset.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/7-mergeRuleset.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;
var utils = __webpack_require__(/*! ./utils */ "../../node_modules/csso/lib/restructure/utils.js");

/*
    At this step all rules has single simple selector. We try to join by equal
    declaration blocks to first rule, e.g.

    .a { color: red }
    b { ... }
    .b { color: red }
    ->
    .a, .b { color: red }
    b { ... }
*/

function processRule(node, item, list) {
    var selectors = node.prelude.children;
    var declarations = node.block.children;
    var nodeCompareMarker = selectors.first().compareMarker;
    var skippedCompareMarkers = {};

    list.nextUntil(item.next, function(next, nextItem) {
        // skip non-ruleset node if safe
        if (next.type !== 'Rule') {
            return utils.unsafeToSkipNode.call(selectors, next);
        }

        if (node.pseudoSignature !== next.pseudoSignature) {
            return true;
        }

        var nextFirstSelector = next.prelude.children.head;
        var nextDeclarations = next.block.children;
        var nextCompareMarker = nextFirstSelector.data.compareMarker;

        // if next ruleset has same marked as one of skipped then stop joining
        if (nextCompareMarker in skippedCompareMarkers) {
            return true;
        }

        // try to join by selectors
        if (selectors.head === selectors.tail) {
            if (selectors.first().id === nextFirstSelector.data.id) {
                declarations.appendList(nextDeclarations);
                list.remove(nextItem);
                return;
            }
        }

        // try to join by properties
        if (utils.isEqualDeclarations(declarations, nextDeclarations)) {
            var nextStr = nextFirstSelector.data.id;

            selectors.some(function(data, item) {
                var curStr = data.id;

                if (nextStr < curStr) {
                    selectors.insert(nextFirstSelector, item);
                    return true;
                }

                if (!item.next) {
                    selectors.insert(nextFirstSelector);
                    return true;
                }
            });

            list.remove(nextItem);
            return;
        }

        // go to next ruleset if current one can be skipped (has no equal specificity nor element selector)
        if (nextCompareMarker === nodeCompareMarker) {
            return true;
        }

        skippedCompareMarkers[nextCompareMarker] = true;
    });
}

module.exports = function mergeRule(ast) {
    walk(ast, {
        visit: 'Rule',
        enter: processRule
    });
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/8-restructRuleset.js":
/*!********************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/8-restructRuleset.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var List = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").List;
var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;
var utils = __webpack_require__(/*! ./utils */ "../../node_modules/csso/lib/restructure/utils.js");

function calcSelectorLength(list) {
    var length = 0;

    list.each(function(data) {
        length += data.id.length + 1;
    });

    return length - 1;
}

function calcDeclarationsLength(tokens) {
    var length = 0;

    for (var i = 0; i < tokens.length; i++) {
        length += tokens[i].length;
    }

    return (
        length +          // declarations
        tokens.length - 1 // delimeters
    );
}

function processRule(node, item, list) {
    var avoidRulesMerge = this.block !== null ? this.block.avoidRulesMerge : false;
    var selectors = node.prelude.children;
    var block = node.block;
    var disallowDownMarkers = Object.create(null);
    var allowMergeUp = true;
    var allowMergeDown = true;

    list.prevUntil(item.prev, function(prev, prevItem) {
        var prevBlock = prev.block;
        var prevType = prev.type;

        if (prevType !== 'Rule') {
            var unsafe = utils.unsafeToSkipNode.call(selectors, prev);

            if (!unsafe && prevType === 'Atrule' && prevBlock) {
                walk(prevBlock, {
                    visit: 'Rule',
                    enter: function(node) {
                        node.prelude.children.each(function(data) {
                            disallowDownMarkers[data.compareMarker] = true;
                        });
                    }
                });
            }

            return unsafe;
        }

        var prevSelectors = prev.prelude.children;

        if (node.pseudoSignature !== prev.pseudoSignature) {
            return true;
        }

        allowMergeDown = !prevSelectors.some(function(selector) {
            return selector.compareMarker in disallowDownMarkers;
        });

        // try prev ruleset if simpleselectors has no equal specifity and element selector
        if (!allowMergeDown && !allowMergeUp) {
            return true;
        }

        // try to join by selectors
        if (allowMergeUp && utils.isEqualSelectors(prevSelectors, selectors)) {
            prevBlock.children.appendList(block.children);
            list.remove(item);
            return true;
        }

        // try to join by properties
        var diff = utils.compareDeclarations(block.children, prevBlock.children);

        // console.log(diff.eq, diff.ne1, diff.ne2);

        if (diff.eq.length) {
            if (!diff.ne1.length && !diff.ne2.length) {
                // equal blocks
                if (allowMergeDown) {
                    utils.addSelectors(selectors, prevSelectors);
                    list.remove(prevItem);
                }

                return true;
            } else if (!avoidRulesMerge) { /* probably we don't need to prevent those merges for @keyframes
                                              TODO: need to be checked */

                if (diff.ne1.length && !diff.ne2.length) {
                    // prevBlock is subset block
                    var selectorLength = calcSelectorLength(selectors);
                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

                    if (allowMergeUp && selectorLength < blockLength) {
                        utils.addSelectors(prevSelectors, selectors);
                        block.children = new List().fromArray(diff.ne1);
                    }
                } else if (!diff.ne1.length && diff.ne2.length) {
                    // node is subset of prevBlock
                    var selectorLength = calcSelectorLength(prevSelectors);
                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

                    if (allowMergeDown && selectorLength < blockLength) {
                        utils.addSelectors(selectors, prevSelectors);
                        prevBlock.children = new List().fromArray(diff.ne2);
                    }
                } else {
                    // diff.ne1.length && diff.ne2.length
                    // extract equal block
                    var newSelector = {
                        type: 'SelectorList',
                        loc: null,
                        children: utils.addSelectors(prevSelectors.copy(), selectors)
                    };
                    var newBlockLength = calcSelectorLength(newSelector.children) + 2; // selectors length + curly braces length
                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

                    // create new ruleset if declarations length greater than
                    // ruleset description overhead
                    if (blockLength >= newBlockLength) {
                        var newItem = list.createItem({
                            type: 'Rule',
                            loc: null,
                            prelude: newSelector,
                            block: {
                                type: 'Block',
                                loc: null,
                                children: new List().fromArray(diff.eq)
                            },
                            pseudoSignature: node.pseudoSignature
                        });

                        block.children = new List().fromArray(diff.ne1);
                        prevBlock.children = new List().fromArray(diff.ne2overrided);

                        if (allowMergeUp) {
                            list.insert(newItem, prevItem);
                        } else {
                            list.insert(newItem, item);
                        }

                        return true;
                    }
                }
            }
        }

        if (allowMergeUp) {
            // TODO: disallow up merge only if any property interception only (i.e. diff.ne2overrided.length > 0);
            // await property families to find property interception correctly
            allowMergeUp = !prevSelectors.some(function(prevSelector) {
                return selectors.some(function(selector) {
                    return selector.compareMarker === prevSelector.compareMarker;
                });
            });
        }

        prevSelectors.each(function(data) {
            disallowDownMarkers[data.compareMarker] = true;
        });
    });
}

module.exports = function restructRule(ast) {
    walk(ast, {
        visit: 'Rule',
        reverse: true,
        enter: processRule
    });
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/index.js":
/*!********************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var prepare = __webpack_require__(/*! ./prepare/index */ "../../node_modules/csso/lib/restructure/prepare/index.js");
var mergeAtrule = __webpack_require__(/*! ./1-mergeAtrule */ "../../node_modules/csso/lib/restructure/1-mergeAtrule.js");
var initialMergeRuleset = __webpack_require__(/*! ./2-initialMergeRuleset */ "../../node_modules/csso/lib/restructure/2-initialMergeRuleset.js");
var disjoinRuleset = __webpack_require__(/*! ./3-disjoinRuleset */ "../../node_modules/csso/lib/restructure/3-disjoinRuleset.js");
var restructShorthand = __webpack_require__(/*! ./4-restructShorthand */ "../../node_modules/csso/lib/restructure/4-restructShorthand.js");
var restructBlock = __webpack_require__(/*! ./6-restructBlock */ "../../node_modules/csso/lib/restructure/6-restructBlock.js");
var mergeRuleset = __webpack_require__(/*! ./7-mergeRuleset */ "../../node_modules/csso/lib/restructure/7-mergeRuleset.js");
var restructRuleset = __webpack_require__(/*! ./8-restructRuleset */ "../../node_modules/csso/lib/restructure/8-restructRuleset.js");

module.exports = function(ast, options) {
    // prepare ast for restructing
    var indexer = prepare(ast, options);
    options.logger('prepare', ast);

    mergeAtrule(ast, options);
    options.logger('mergeAtrule', ast);

    initialMergeRuleset(ast);
    options.logger('initialMergeRuleset', ast);

    disjoinRuleset(ast);
    options.logger('disjoinRuleset', ast);

    restructShorthand(ast, indexer);
    options.logger('restructShorthand', ast);

    restructBlock(ast);
    options.logger('restructBlock', ast);

    mergeRuleset(ast);
    options.logger('mergeRuleset', ast);

    restructRuleset(ast);
    options.logger('restructRuleset', ast);
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/prepare/createDeclarationIndexer.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/prepare/createDeclarationIndexer.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var generate = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").generate;

function Index() {
    this.seed = 0;
    this.map = Object.create(null);
}

Index.prototype.resolve = function(str) {
    var index = this.map[str];

    if (!index) {
        index = ++this.seed;
        this.map[str] = index;
    }

    return index;
};

module.exports = function createDeclarationIndexer() {
    var ids = new Index();

    return function markDeclaration(node) {
        var id = generate(node);

        node.id = ids.resolve(id);
        node.length = id.length;
        node.fingerprint = null;

        return node;
    };
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/prepare/index.js":
/*!****************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/prepare/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var resolveKeyword = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").keyword;
var walk = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").walk;
var generate = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").generate;
var createDeclarationIndexer = __webpack_require__(/*! ./createDeclarationIndexer */ "../../node_modules/csso/lib/restructure/prepare/createDeclarationIndexer.js");
var processSelector = __webpack_require__(/*! ./processSelector */ "../../node_modules/csso/lib/restructure/prepare/processSelector.js");

module.exports = function prepare(ast, options) {
    var markDeclaration = createDeclarationIndexer();

    walk(ast, {
        visit: 'Rule',
        enter: function processRule(node) {
            node.block.children.each(markDeclaration);
            processSelector(node, options.usage);
        }
    });

    walk(ast, {
        visit: 'Atrule',
        enter: function(node) {
            if (node.prelude) {
                node.prelude.id = null; // pre-init property to avoid multiple hidden class for generate
                node.prelude.id = generate(node.prelude);
            }

            // compare keyframe selectors by its values
            // NOTE: still no clarification about problems with keyframes selector grouping (issue #197)
            if (resolveKeyword(node.name).basename === 'keyframes') {
                node.block.avoidRulesMerge = true;  /* probably we don't need to prevent those merges for @keyframes
                                                       TODO: need to be checked */
                node.block.children.each(function(rule) {
                    rule.prelude.children.each(function(simpleselector) {
                        simpleselector.compareMarker = simpleselector.id;
                    });
                });
            }
        }
    });

    return {
        declaration: markDeclaration
    };
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/prepare/processSelector.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/prepare/processSelector.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var generate = __webpack_require__(/*! css-tree */ "../../node_modules/css-tree/dist/csstree.min.js").generate;
var specificity = __webpack_require__(/*! ./specificity */ "../../node_modules/csso/lib/restructure/prepare/specificity.js");

var nonFreezePseudoElements = {
    'first-letter': true,
    'first-line': true,
    'after': true,
    'before': true
};
var nonFreezePseudoClasses = {
    'link': true,
    'visited': true,
    'hover': true,
    'active': true,
    'first-letter': true,
    'first-line': true,
    'after': true,
    'before': true
};

module.exports = function freeze(node, usageData) {
    var pseudos = Object.create(null);
    var hasPseudo = false;

    node.prelude.children.each(function(simpleSelector) {
        var tagName = '*';
        var scope = 0;

        simpleSelector.children.each(function(node) {
            switch (node.type) {
                case 'ClassSelector':
                    if (usageData && usageData.scopes) {
                        var classScope = usageData.scopes[node.name] || 0;

                        if (scope !== 0 && classScope !== scope) {
                            throw new Error('Selector can\'t has classes from different scopes: ' + generate(simpleSelector));
                        }

                        scope = classScope;
                    }
                    break;

                case 'PseudoClassSelector':
                    var name = node.name.toLowerCase();

                    if (!nonFreezePseudoClasses.hasOwnProperty(name)) {
                        pseudos[':' + name] = true;
                        hasPseudo = true;
                    }
                    break;

                case 'PseudoElementSelector':
                    var name = node.name.toLowerCase();

                    if (!nonFreezePseudoElements.hasOwnProperty(name)) {
                        pseudos['::' + name] = true;
                        hasPseudo = true;
                    }
                    break;

                case 'TypeSelector':
                    tagName = node.name.toLowerCase();
                    break;

                case 'AttributeSelector':
                    if (node.flags) {
                        pseudos['[' + node.flags.toLowerCase() + ']'] = true;
                        hasPseudo = true;
                    }
                    break;

                case 'WhiteSpace':
                case 'Combinator':
                    tagName = '*';
                    break;
            }
        });

        simpleSelector.compareMarker = specificity(simpleSelector).toString();
        simpleSelector.id = null; // pre-init property to avoid multiple hidden class
        simpleSelector.id = generate(simpleSelector);

        if (scope) {
            simpleSelector.compareMarker += ':' + scope;
        }

        if (tagName !== '*') {
            simpleSelector.compareMarker += ',' + tagName;
        }
    });

    // add property to all rule nodes to avoid multiple hidden class
    node.pseudoSignature = hasPseudo && Object.keys(pseudos).sort().join(',');
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/prepare/specificity.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/prepare/specificity.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = function specificity(simpleSelector) {
    var A = 0;
    var B = 0;
    var C = 0;

    simpleSelector.children.each(function walk(node) {
        switch (node.type) {
            case 'SelectorList':
            case 'Selector':
                node.children.each(walk);
                break;

            case 'IdSelector':
                A++;
                break;

            case 'ClassSelector':
            case 'AttributeSelector':
                B++;
                break;

            case 'PseudoClassSelector':
                switch (node.name.toLowerCase()) {
                    case 'not':
                        node.children.each(walk);
                        break;

                    case 'before':
                    case 'after':
                    case 'first-line':
                    case 'first-letter':
                        C++;
                        break;

                    // TODO: support for :nth-*(.. of <SelectorList>), :matches(), :has()
                    default:
                        B++;
                }
                break;

            case 'PseudoElementSelector':
                C++;
                break;

            case 'TypeSelector':
                // ignore universal selector
                if (node.name.charAt(node.name.length - 1) !== '*') {
                    C++;
                }
                break;

        }
    });

    return [A, B, C];
};


/***/ }),

/***/ "../../node_modules/csso/lib/restructure/utils.js":
/*!********************************************************!*\
  !*** ../../node_modules/csso/lib/restructure/utils.js ***!
  \********************************************************/
/***/ ((module) => {

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEqualSelectors(a, b) {
    var cursor1 = a.head;
    var cursor2 = b.head;

    while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
        cursor1 = cursor1.next;
        cursor2 = cursor2.next;
    }

    return cursor1 === null && cursor2 === null;
}

function isEqualDeclarations(a, b) {
    var cursor1 = a.head;
    var cursor2 = b.head;

    while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
        cursor1 = cursor1.next;
        cursor2 = cursor2.next;
    }

    return cursor1 === null && cursor2 === null;
}

function compareDeclarations(declarations1, declarations2) {
    var result = {
        eq: [],
        ne1: [],
        ne2: [],
        ne2overrided: []
    };

    var fingerprints = Object.create(null);
    var declarations2hash = Object.create(null);

    for (var cursor = declarations2.head; cursor; cursor = cursor.next)  {
        declarations2hash[cursor.data.id] = true;
    }

    for (var cursor = declarations1.head; cursor; cursor = cursor.next)  {
        var data = cursor.data;

        if (data.fingerprint) {
            fingerprints[data.fingerprint] = data.important;
        }

        if (declarations2hash[data.id]) {
            declarations2hash[data.id] = false;
            result.eq.push(data);
        } else {
            result.ne1.push(data);
        }
    }

    for (var cursor = declarations2.head; cursor; cursor = cursor.next)  {
        var data = cursor.data;

        if (declarations2hash[data.id]) {
            // when declarations1 has an overriding declaration, this is not a difference
            // unless no !important is used on prev and !important is used on the following
            if (!hasOwnProperty.call(fingerprints, data.fingerprint) ||
                (!fingerprints[data.fingerprint] && data.important)) {
                result.ne2.push(data);
            }

            result.ne2overrided.push(data);
        }
    }

    return result;
}

function addSelectors(dest, source) {
    source.each(function(sourceData) {
        var newStr = sourceData.id;
        var cursor = dest.head;

        while (cursor) {
            var nextStr = cursor.data.id;

            if (nextStr === newStr) {
                return;
            }

            if (nextStr > newStr) {
                break;
            }

            cursor = cursor.next;
        }

        dest.insert(dest.createItem(sourceData), cursor);
    });

    return dest;
}

// check if simpleselectors has no equal specificity and element selector
function hasSimilarSelectors(selectors1, selectors2) {
    var cursor1 = selectors1.head;

    while (cursor1 !== null) {
        var cursor2 = selectors2.head;

        while (cursor2 !== null) {
            if (cursor1.data.compareMarker === cursor2.data.compareMarker) {
                return true;
            }

            cursor2 = cursor2.next;
        }

        cursor1 = cursor1.next;
    }

    return false;
}

// test node can't to be skipped
function unsafeToSkipNode(node) {
    switch (node.type) {
        case 'Rule':
            // unsafe skip ruleset with selector similarities
            return hasSimilarSelectors(node.prelude.children, this);

        case 'Atrule':
            // can skip at-rules with blocks
            if (node.block) {
                // unsafe skip at-rule if block contains something unsafe to skip
                return node.block.children.some(unsafeToSkipNode, this);
            }
            break;

        case 'Declaration':
            return false;
    }

    // unsafe by default
    return true;
}

module.exports = {
    isEqualSelectors: isEqualSelectors,
    isEqualDeclarations: isEqualDeclarations,
    compareDeclarations: compareDeclarations,
    addSelectors: addSelectors,
    hasSimilarSelectors: hasSimilarSelectors,
    unsafeToSkipNode: unsafeToSkipNode
};


/***/ }),

/***/ "../../node_modules/csso/lib/usage.js":
/*!********************************************!*\
  !*** ../../node_modules/csso/lib/usage.js ***!
  \********************************************/
/***/ ((module) => {

var hasOwnProperty = Object.prototype.hasOwnProperty;

function buildMap(list, caseInsensitive) {
    var map = Object.create(null);

    if (!Array.isArray(list)) {
        return null;
    }

    for (var i = 0; i < list.length; i++) {
        var name = list[i];

        if (caseInsensitive) {
            name = name.toLowerCase();
        }

        map[name] = true;
    }

    return map;
}

function buildList(data) {
    if (!data) {
        return null;
    }

    var tags = buildMap(data.tags, true);
    var ids = buildMap(data.ids);
    var classes = buildMap(data.classes);

    if (tags === null &&
        ids === null &&
        classes === null) {
        return null;
    }

    return {
        tags: tags,
        ids: ids,
        classes: classes
    };
}

function buildIndex(data) {
    var scopes = false;

    if (data.scopes && Array.isArray(data.scopes)) {
        scopes = Object.create(null);

        for (var i = 0; i < data.scopes.length; i++) {
            var list = data.scopes[i];

            if (!list || !Array.isArray(list)) {
                throw new Error('Wrong usage format');
            }

            for (var j = 0; j < list.length; j++) {
                var name = list[j];

                if (hasOwnProperty.call(scopes, name)) {
                    throw new Error('Class can\'t be used for several scopes: ' + name);
                }

                scopes[name] = i + 1;
            }
        }
    }

    return {
        whitelist: buildList(data),
        blacklist: buildList(data.blacklist),
        scopes: scopes
    };
}

module.exports = {
    buildIndex: buildIndex
};


/***/ }),

/***/ "../../node_modules/csso/package.json":
/*!********************************************!*\
  !*** ../../node_modules/csso/package.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"name\":\"csso\",\"version\":\"4.2.0\",\"description\":\"CSS minifier with structural optimisations\",\"homepage\":\"https://github.com/css/csso\",\"author\":\"Sergey Kryzhanovsky <skryzhanovsky@ya.ru> (https://github.com/afelix)\",\"maintainers\":[{\"name\":\"Roman Dvornov\",\"email\":\"rdvornov@gmail.com\",\"github-username\":\"lahmatiy\"}],\"license\":\"MIT\",\"repository\":\"css/csso\",\"bugs\":{\"url\":\"https://github.com/css/csso/issues\"},\"keywords\":[\"css\",\"compress\",\"minifier\",\"minify\",\"optimise\",\"optimisation\",\"csstree\"],\"main\":\"./lib/index\",\"scripts\":{\"test\":\"mocha --reporter dot\",\"lint\":\"eslint lib test\",\"lint-and-test\":\"npm run lint && npm test\",\"build\":\"rollup --config && terser dist/csso.js --compress --mangle -o dist/csso.min.js\",\"coverage\":\"nyc npm test\",\"coveralls\":\"nyc report --reporter=text-lcov | coveralls\",\"travis\":\"nyc npm run lint-and-test && npm run coveralls\",\"hydrogen\":\"node --trace-hydrogen --trace-phase=Z --trace-deopt --code-comments --hydrogen-track-positions --redirect-code-traces --redirect-code-traces-to=code.asm --trace_hydrogen_file=code.cfg --print-opt-code bin/csso --stat -o /dev/null\",\"prepublishOnly\":\"npm run build\"},\"dependencies\":{\"css-tree\":\"^1.1.2\"},\"browser\":{\"css-tree\":\"css-tree/dist/csstree.min.js\"},\"devDependencies\":{\"@rollup/plugin-commonjs\":\"^11.0.1\",\"@rollup/plugin-json\":\"^4.0.1\",\"@rollup/plugin-node-resolve\":\"^7.0.0\",\"coveralls\":\"^3.0.11\",\"eslint\":\"^6.8.0\",\"mocha\":\"^7.1.1\",\"nyc\":\"^15.0.0\",\"rollup\":\"^1.29.0\",\"source-map\":\"^0.6.1\",\"terser\":\"^4.6.3\"},\"engines\":{\"node\":\">=8.0.0\"},\"files\":[\"dist\",\"lib\"]}");

/***/ }),

/***/ "../../node_modules/dat.gui/build/dat.gui.module.js":
/*!**********************************************************!*\
  !*** ../../node_modules/dat.gui/build/dat.gui.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "color": () => (/* binding */ color),
/* harmony export */   "controllers": () => (/* binding */ controllers),
/* harmony export */   "dom": () => (/* binding */ dom$1),
/* harmony export */   "gui": () => (/* binding */ gui),
/* harmony export */   "GUI": () => (/* binding */ GUI$1),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function colorToString (color, forceCSSHex) {
  var colorFormat = color.__state.conversionName.toString();
  var r = Math.round(color.r);
  var g = Math.round(color.g);
  var b = Math.round(color.b);
  var a = color.a;
  var h = Math.round(color.h);
  var s = color.s.toFixed(1);
  var v = color.v.toFixed(1);
  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
    var str = color.hex.toString(16);
    while (str.length < 6) {
      str = '0' + str;
    }
    return '#' + str;
  } else if (colorFormat === 'CSS_RGB') {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else if (colorFormat === 'CSS_RGBA') {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  } else if (colorFormat === 'HEX') {
    return '0x' + color.hex.toString(16);
  } else if (colorFormat === 'RGB_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ']';
  } else if (colorFormat === 'RGBA_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
  } else if (colorFormat === 'RGB_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
  } else if (colorFormat === 'RGBA_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
  } else if (colorFormat === 'HSV_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
  } else if (colorFormat === 'HSVA_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
  }
  return 'unknown format';
}

var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
  BREAK: {},
  extend: function extend(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (!this.isUndefined(obj[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  defaults: function defaults(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (this.isUndefined(target[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  compose: function compose() {
    var toCall = ARR_SLICE.call(arguments);
    return function () {
      var args = ARR_SLICE.call(arguments);
      for (var i = toCall.length - 1; i >= 0; i--) {
        args = [toCall[i].apply(this, args)];
      }
      return args[0];
    };
  },
  each: function each(obj, itr, scope) {
    if (!obj) {
      return;
    }
    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
      obj.forEach(itr, scope);
    } else if (obj.length === obj.length + 0) {
      var key = void 0;
      var l = void 0;
      for (key = 0, l = obj.length; key < l; key++) {
        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
          return;
        }
      }
    } else {
      for (var _key in obj) {
        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
          return;
        }
      }
    }
  },
  defer: function defer(fnc) {
    setTimeout(fnc, 0);
  },
  debounce: function debounce(func, threshold, callImmediately) {
    var timeout = void 0;
    return function () {
      var obj = this;
      var args = arguments;
      function delayed() {
        timeout = null;
        if (!callImmediately) func.apply(obj, args);
      }
      var callNow = callImmediately || !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(delayed, threshold);
      if (callNow) {
        func.apply(obj, args);
      }
    };
  },
  toArray: function toArray(obj) {
    if (obj.toArray) return obj.toArray();
    return ARR_SLICE.call(obj);
  },
  isUndefined: function isUndefined(obj) {
    return obj === undefined;
  },
  isNull: function isNull(obj) {
    return obj === null;
  },
  isNaN: function (_isNaN) {
    function isNaN(_x) {
      return _isNaN.apply(this, arguments);
    }
    isNaN.toString = function () {
      return _isNaN.toString();
    };
    return isNaN;
  }(function (obj) {
    return isNaN(obj);
  }),
  isArray: Array.isArray || function (obj) {
    return obj.constructor === Array;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },
  isNumber: function isNumber(obj) {
    return obj === obj + 0;
  },
  isString: function isString(obj) {
    return obj === obj + '';
  },
  isBoolean: function isBoolean(obj) {
    return obj === false || obj === true;
  },
  isFunction: function isFunction(obj) {
    return obj instanceof Function;
  }
};

var INTERPRETATIONS = [
{
  litmus: Common.isString,
  conversions: {
    THREE_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
        };
      },
      write: colorToString
    },
    SIX_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9]{6})$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString(), 0)
        };
      },
      write: colorToString
    },
    CSS_RGB: {
      read: function read(original) {
        var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3])
        };
      },
      write: colorToString
    },
    CSS_RGBA: {
      read: function read(original) {
        var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3]),
          a: parseFloat(test[4])
        };
      },
      write: colorToString
    }
  }
},
{
  litmus: Common.isNumber,
  conversions: {
    HEX: {
      read: function read(original) {
        return {
          space: 'HEX',
          hex: original,
          conversionName: 'HEX'
        };
      },
      write: function write(color) {
        return color.hex;
      }
    }
  }
},
{
  litmus: Common.isArray,
  conversions: {
    RGB_ARRAY: {
      read: function read(original) {
        if (original.length !== 3) {
          return false;
        }
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b];
      }
    },
    RGBA_ARRAY: {
      read: function read(original) {
        if (original.length !== 4) return false;
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2],
          a: original[3]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b, color.a];
      }
    }
  }
},
{
  litmus: Common.isObject,
  conversions: {
    RGBA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        };
      }
    },
    RGB_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    },
    HSVA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v,
          a: color.a
        };
      }
    },
    HSV_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v
        };
      }
    }
  }
}];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
  toReturn = false;
  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
  Common.each(INTERPRETATIONS, function (family) {
    if (family.litmus(original)) {
      Common.each(family.conversions, function (conversion, conversionName) {
        result = conversion.read(original);
        if (toReturn === false && result !== false) {
          toReturn = result;
          result.conversionName = conversionName;
          result.conversion = conversion;
          return Common.BREAK;
        }
      });
      return Common.BREAK;
    }
  });
  return toReturn;
};

var tmpComponent = void 0;
var ColorMath = {
  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
    var hi = Math.floor(h / 60) % 6;
    var f = h / 60 - Math.floor(h / 60);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - (1.0 - f) * s);
    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
    return {
      r: c[0] * 255,
      g: c[1] * 255,
      b: c[2] * 255
    };
  },
  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h = void 0;
    var s = void 0;
    if (max !== 0) {
      s = delta / max;
    } else {
      return {
        h: NaN,
        s: 0,
        v: 0
      };
    }
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h /= 6;
    if (h < 0) {
      h += 1;
    }
    return {
      h: h * 360,
      s: s,
      v: max / 255
    };
  },
  rgb_to_hex: function rgb_to_hex(r, g, b) {
    var hex = this.hex_with_component(0, 2, r);
    hex = this.hex_with_component(hex, 1, g);
    hex = this.hex_with_component(hex, 0, b);
    return hex;
  },
  component_from_hex: function component_from_hex(hex, componentIndex) {
    return hex >> componentIndex * 8 & 0xFF;
  },
  hex_with_component: function hex_with_component(hex, componentIndex, value) {
    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Color = function () {
  function Color() {
    classCallCheck(this, Color);
    this.__state = interpret.apply(this, arguments);
    if (this.__state === false) {
      throw new Error('Failed to interpret color arguments');
    }
    this.__state.a = this.__state.a || 1;
  }
  createClass(Color, [{
    key: 'toString',
    value: function toString() {
      return colorToString(this);
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      return colorToString(this, true);
    }
  }, {
    key: 'toOriginal',
    value: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  }]);
  return Color;
}();
function defineRGBComponent(target, component, componentHexIndex) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'RGB') {
        return this.__state[component];
      }
      Color.recalculateRGB(this, component, componentHexIndex);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'RGB') {
        Color.recalculateRGB(this, component, componentHexIndex);
        this.__state.space = 'RGB';
      }
      this.__state[component] = v;
    }
  });
}
function defineHSVComponent(target, component) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'HSV') {
        return this.__state[component];
      }
      Color.recalculateHSV(this);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'HSV') {
        Color.recalculateHSV(this);
        this.__state.space = 'HSV';
      }
      this.__state[component] = v;
    }
  });
}
Color.recalculateRGB = function (color, component, componentHexIndex) {
  if (color.__state.space === 'HEX') {
    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
  } else if (color.__state.space === 'HSV') {
    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
  } else {
    throw new Error('Corrupted color state');
  }
};
Color.recalculateHSV = function (color) {
  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
  Common.extend(color.__state, {
    s: result.s,
    v: result.v
  });
  if (!Common.isNaN(result.h)) {
    color.__state.h = result.h;
  } else if (Common.isUndefined(color.__state.h)) {
    color.__state.h = 0;
  }
};
Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
defineRGBComponent(Color.prototype, 'r', 2);
defineRGBComponent(Color.prototype, 'g', 1);
defineRGBComponent(Color.prototype, 'b', 0);
defineHSVComponent(Color.prototype, 'h');
defineHSVComponent(Color.prototype, 's');
defineHSVComponent(Color.prototype, 'v');
Object.defineProperty(Color.prototype, 'a', {
  get: function get$$1() {
    return this.__state.a;
  },
  set: function set$$1(v) {
    this.__state.a = v;
  }
});
Object.defineProperty(Color.prototype, 'hex', {
  get: function get$$1() {
    if (this.__state.space !== 'HEX') {
      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
      this.__state.space = 'HEX';
    }
    return this.__state.hex;
  },
  set: function set$$1(v) {
    this.__state.space = 'HEX';
    this.__state.hex = v;
  }
});

var Controller = function () {
  function Controller(object, property) {
    classCallCheck(this, Controller);
    this.initialValue = object[property];
    this.domElement = document.createElement('div');
    this.object = object;
    this.property = property;
    this.__onChange = undefined;
    this.__onFinishChange = undefined;
  }
  createClass(Controller, [{
    key: 'onChange',
    value: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    }
  }, {
    key: 'onFinishChange',
    value: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.object[this.property] = newValue;
      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }
      this.updateDisplay();
      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.object[this.property];
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      return this;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return this.initialValue !== this.getValue();
    }
  }]);
  return Controller;
}();

var EVENT_MAP = {
  HTMLEvents: ['change'],
  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
  KeyboardEvents: ['keydown']
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function (v, k) {
  Common.each(v, function (e) {
    EVENT_MAP_INV[e] = k;
  });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
  if (val === '0' || Common.isUndefined(val)) {
    return 0;
  }
  var match = val.match(CSS_VALUE_PIXELS);
  if (!Common.isNull(match)) {
    return parseFloat(match[1]);
  }
  return 0;
}
var dom = {
  makeSelectable: function makeSelectable(elem, selectable) {
    if (elem === undefined || elem.style === undefined) return;
    elem.onselectstart = selectable ? function () {
      return false;
    } : function () {};
    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
    elem.unselectable = selectable ? 'on' : 'off';
  },
  makeFullscreen: function makeFullscreen(elem, hor, vert) {
    var vertical = vert;
    var horizontal = hor;
    if (Common.isUndefined(horizontal)) {
      horizontal = true;
    }
    if (Common.isUndefined(vertical)) {
      vertical = true;
    }
    elem.style.position = 'absolute';
    if (horizontal) {
      elem.style.left = 0;
      elem.style.right = 0;
    }
    if (vertical) {
      elem.style.top = 0;
      elem.style.bottom = 0;
    }
  },
  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
    var params = pars || {};
    var className = EVENT_MAP_INV[eventType];
    if (!className) {
      throw new Error('Event type ' + eventType + ' not supported.');
    }
    var evt = document.createEvent(className);
    switch (className) {
      case 'MouseEvents':
        {
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
          0,
          clientX,
          clientY,
          false, false, false, false, 0, null);
          break;
        }
      case 'KeyboardEvents':
        {
          var init = evt.initKeyboardEvent || evt.initKeyEvent;
          Common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;
        }
      default:
        {
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
        }
    }
    Common.defaults(evt, aux);
    elem.dispatchEvent(evt);
  },
  bind: function bind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },
  unbind: function unbind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },
  addClass: function addClass(elem, className) {
    if (elem.className === undefined) {
      elem.className = className;
    } else if (elem.className !== className) {
      var classes = elem.className.split(/ +/);
      if (classes.indexOf(className) === -1) {
        classes.push(className);
        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
      }
    }
    return dom;
  },
  removeClass: function removeClass(elem, className) {
    if (className) {
      if (elem.className === className) {
        elem.removeAttribute('class');
      } else {
        var classes = elem.className.split(/ +/);
        var index = classes.indexOf(className);
        if (index !== -1) {
          classes.splice(index, 1);
          elem.className = classes.join(' ');
        }
      }
    } else {
      elem.className = undefined;
    }
    return dom;
  },
  hasClass: function hasClass(elem, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
  },
  getWidth: function getWidth(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
  },
  getHeight: function getHeight(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
  },
  getOffset: function getOffset(el) {
    var elem = el;
    var offset = { left: 0, top: 0 };
    if (elem.offsetParent) {
      do {
        offset.left += elem.offsetLeft;
        offset.top += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return offset;
  },
  isActive: function isActive(elem) {
    return elem === document.activeElement && (elem.type || elem.href);
  }
};

var BooleanController = function (_Controller) {
  inherits(BooleanController, _Controller);
  function BooleanController(object, property) {
    classCallCheck(this, BooleanController);
    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
    var _this = _this2;
    _this2.__prev = _this2.getValue();
    _this2.__checkbox = document.createElement('input');
    _this2.__checkbox.setAttribute('type', 'checkbox');
    function onChange() {
      _this.setValue(!_this.__prev);
    }
    dom.bind(_this2.__checkbox, 'change', onChange, false);
    _this2.domElement.appendChild(_this2.__checkbox);
    _this2.updateDisplay();
    return _this2;
  }
  createClass(BooleanController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      this.__prev = this.getValue();
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');
        this.__checkbox.checked = true;
        this.__prev = true;
      } else {
        this.__checkbox.checked = false;
        this.__prev = false;
      }
      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return BooleanController;
}(Controller);

var OptionController = function (_Controller) {
  inherits(OptionController, _Controller);
  function OptionController(object, property, opts) {
    classCallCheck(this, OptionController);
    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
    var options = opts;
    var _this = _this2;
    _this2.__select = document.createElement('select');
    if (Common.isArray(options)) {
      var map = {};
      Common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }
    Common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);
    });
    _this2.updateDisplay();
    dom.bind(_this2.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });
    _this2.domElement.appendChild(_this2.__select);
    return _this2;
  }
  createClass(OptionController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (dom.isActive(this.__select)) return this;
      this.__select.value = this.getValue();
      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return OptionController;
}(Controller);

var StringController = function (_Controller) {
  inherits(StringController, _Controller);
  function StringController(object, property) {
    classCallCheck(this, StringController);
    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
    var _this = _this2;
    function onChange() {
      _this.setValue(_this.__input.value);
    }
    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'keyup', onChange);
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(StringController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }
      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return StringController;
}(Controller);

function numDecimals(x) {
  var _x = x.toString();
  if (_x.indexOf('.') > -1) {
    return _x.length - _x.indexOf('.') - 1;
  }
  return 0;
}
var NumberController = function (_Controller) {
  inherits(NumberController, _Controller);
  function NumberController(object, property, params) {
    classCallCheck(this, NumberController);
    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
    var _params = params || {};
    _this.__min = _params.min;
    _this.__max = _params.max;
    _this.__step = _params.step;
    if (Common.isUndefined(_this.__step)) {
      if (_this.initialValue === 0) {
        _this.__impliedStep = 1;
      } else {
        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      _this.__impliedStep = _this.__step;
    }
    _this.__precision = numDecimals(_this.__impliedStep);
    return _this;
  }
  createClass(NumberController, [{
    key: 'setValue',
    value: function setValue(v) {
      var _v = v;
      if (this.__min !== undefined && _v < this.__min) {
        _v = this.__min;
      } else if (this.__max !== undefined && _v > this.__max) {
        _v = this.__max;
      }
      if (this.__step !== undefined && _v % this.__step !== 0) {
        _v = Math.round(_v / this.__step) * this.__step;
      }
      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
    }
  }, {
    key: 'min',
    value: function min(minValue) {
      this.__min = minValue;
      return this;
    }
  }, {
    key: 'max',
    value: function max(maxValue) {
      this.__max = maxValue;
      return this;
    }
  }, {
    key: 'step',
    value: function step(stepValue) {
      this.__step = stepValue;
      this.__impliedStep = stepValue;
      this.__precision = numDecimals(stepValue);
      return this;
    }
  }]);
  return NumberController;
}(Controller);

function roundToDecimal(value, decimals) {
  var tenTo = Math.pow(10, decimals);
  return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function (_NumberController) {
  inherits(NumberControllerBox, _NumberController);
  function NumberControllerBox(object, property, params) {
    classCallCheck(this, NumberControllerBox);
    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
    _this2.__truncationSuspended = false;
    var _this = _this2;
    var prevY = void 0;
    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!Common.isNaN(attempted)) {
        _this.setValue(attempted);
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onBlur() {
      onFinish();
    }
    function onMouseDrag(e) {
      var diff = prevY - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
      prevY = e.clientY;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      onFinish();
    }
    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prevY = e.clientY;
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'mousedown', onMouseDown);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
        onFinish();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(NumberControllerBox, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerBox;
}(NumberController);

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function (_NumberController) {
  inherits(NumberControllerSlider, _NumberController);
  function NumberControllerSlider(object, property, min, max, step) {
    classCallCheck(this, NumberControllerSlider);
    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
    var _this = _this2;
    _this2.__background = document.createElement('div');
    _this2.__foreground = document.createElement('div');
    dom.bind(_this2.__background, 'mousedown', onMouseDown);
    dom.bind(_this2.__background, 'touchstart', onTouchStart);
    dom.addClass(_this2.__background, 'slider');
    dom.addClass(_this2.__foreground, 'slider-fg');
    function onMouseDown(e) {
      document.activeElement.blur();
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }
    function onMouseDrag(e) {
      e.preventDefault();
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      return false;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) {
        return;
      }
      dom.bind(window, 'touchmove', onTouchMove);
      dom.bind(window, 'touchend', onTouchEnd);
      onTouchMove(e);
    }
    function onTouchMove(e) {
      var clientX = e.touches[0].clientX;
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
    }
    function onTouchEnd() {
      dom.unbind(window, 'touchmove', onTouchMove);
      dom.unbind(window, 'touchend', onTouchEnd);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.updateDisplay();
    _this2.__background.appendChild(_this2.__foreground);
    _this2.domElement.appendChild(_this2.__background);
    return _this2;
  }
  createClass(NumberControllerSlider, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
      this.__foreground.style.width = pct * 100 + '%';
      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerSlider;
}(NumberController);

var FunctionController = function (_Controller) {
  inherits(FunctionController, _Controller);
  function FunctionController(object, property, text) {
    classCallCheck(this, FunctionController);
    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
    var _this = _this2;
    _this2.__button = document.createElement('div');
    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(_this2.__button, 'click', function (e) {
      e.preventDefault();
      _this.fire();
      return false;
    });
    dom.addClass(_this2.__button, 'button');
    _this2.domElement.appendChild(_this2.__button);
    return _this2;
  }
  createClass(FunctionController, [{
    key: 'fire',
    value: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }
      this.getValue().call(this.object);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
    }
  }]);
  return FunctionController;
}(Controller);

var ColorController = function (_Controller) {
  inherits(ColorController, _Controller);
  function ColorController(object, property) {
    classCallCheck(this, ColorController);
    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
    _this2.__color = new Color(_this2.getValue());
    _this2.__temp = new Color(0);
    var _this = _this2;
    _this2.domElement = document.createElement('div');
    dom.makeSelectable(_this2.domElement, false);
    _this2.__selector = document.createElement('div');
    _this2.__selector.className = 'selector';
    _this2.__saturation_field = document.createElement('div');
    _this2.__saturation_field.className = 'saturation-field';
    _this2.__field_knob = document.createElement('div');
    _this2.__field_knob.className = 'field-knob';
    _this2.__field_knob_border = '2px solid ';
    _this2.__hue_knob = document.createElement('div');
    _this2.__hue_knob.className = 'hue-knob';
    _this2.__hue_field = document.createElement('div');
    _this2.__hue_field.className = 'hue-field';
    _this2.__input = document.createElement('input');
    _this2.__input.type = 'text';
    _this2.__input_textShadow = '0 1px 1px ';
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        onBlur.call(this);
      }
    });
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__selector, 'mousedown', function ()        {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function ()        {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    dom.bind(_this2.__selector, 'touchstart', function ()        {
      dom.addClass(this, 'drag').bind(window, 'touchend', function ()        {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var valueField = document.createElement('div');
    Common.extend(_this2.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    Common.extend(_this2.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    Common.extend(_this2.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    Common.extend(_this2.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    Common.extend(valueField.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
    Common.extend(_this2.__hue_field.style, {
      width: '15px',
      height: '100px',
      border: '1px solid #555',
      cursor: 'ns-resize',
      position: 'absolute',
      top: '3px',
      right: '3px'
    });
    hueGradient(_this2.__hue_field);
    Common.extend(_this2.__input.style, {
      outline: 'none',
      textAlign: 'center',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
    function fieldDown(e) {
      setSV(e);
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'touchmove', setSV);
      dom.bind(window, 'mouseup', fieldUpSV);
      dom.bind(window, 'touchend', fieldUpSV);
    }
    function fieldDownH(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'touchmove', setH);
      dom.bind(window, 'mouseup', fieldUpH);
      dom.bind(window, 'touchend', fieldUpH);
    }
    function fieldUpSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'touchmove', setSV);
      dom.unbind(window, 'mouseup', fieldUpSV);
      dom.unbind(window, 'touchend', fieldUpSV);
      onFinish();
    }
    function fieldUpH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'touchmove', setH);
      dom.unbind(window, 'mouseup', fieldUpH);
      dom.unbind(window, 'touchend', fieldUpH);
      onFinish();
    }
    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
      }
    }
    _this2.__saturation_field.appendChild(valueField);
    _this2.__selector.appendChild(_this2.__field_knob);
    _this2.__selector.appendChild(_this2.__saturation_field);
    _this2.__selector.appendChild(_this2.__hue_field);
    _this2.__hue_field.appendChild(_this2.__hue_knob);
    _this2.domElement.appendChild(_this2.__input);
    _this2.domElement.appendChild(_this2.__selector);
    _this2.updateDisplay();
    function setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__saturation_field.getBoundingClientRect();
      var _ref = e.touches && e.touches[0] || e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;
      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (v > 1) {
        v = 1;
      } else if (v < 0) {
        v = 0;
      }
      if (s > 1) {
        s = 1;
      } else if (s < 0) {
        s = 0;
      }
      _this.__color.v = v;
      _this.__color.s = s;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    function setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__hue_field.getBoundingClientRect();
      var _ref2 = e.touches && e.touches[0] || e,
          clientY = _ref2.clientY;
      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (h > 1) {
        h = 1;
      } else if (h < 0) {
        h = 0;
      }
      _this.__color.h = h * 360;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    return _this2;
  }
  createClass(ColorController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var i = interpret(this.getValue());
      if (i !== false) {
        var mismatch = false;
        Common.each(Color.COMPONENTS, function (component) {
          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {};
          }
        }, this);
        if (mismatch) {
          Common.extend(this.__color.__state, i);
        }
      }
      Common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
      var _flip = 255 - flip;
      Common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toHexString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
      this.__input.value = this.__color.toString();
      Common.extend(this.__input.style, {
        backgroundColor: this.__color.toHexString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  }]);
  return ColorController;
}(Controller);
var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function linearGradient(elem, x, a, b) {
  elem.style.background = '';
  Common.each(vendors, function (vendor) {
    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
  });
}
function hueGradient(elem) {
  elem.style.background = '';
  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
}

var css = {
  load: function load(url, indoc) {
    var doc = indoc || document;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    doc.getElementsByTagName('head')[0].appendChild(link);
  },
  inject: function inject(cssContent, indoc) {
    var doc = indoc || document;
    var injected = document.createElement('style');
    injected.type = 'text/css';
    injected.innerHTML = cssContent;
    var head = doc.getElementsByTagName('head')[0];
    try {
      head.appendChild(injected);
    } catch (e) {
    }
  }
};

var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

var ControllerFactory = function ControllerFactory(object, property) {
  var initialValue = object[property];
  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
    return new OptionController(object, property, arguments[2]);
  }
  if (Common.isNumber(initialValue)) {
    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
      if (Common.isNumber(arguments[4])) {
        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
      }
      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
    }
    if (Common.isNumber(arguments[4])) {
      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
    }
    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
  }
  if (Common.isString(initialValue)) {
    return new StringController(object, property);
  }
  if (Common.isFunction(initialValue)) {
    return new FunctionController(object, property, '');
  }
  if (Common.isBoolean(initialValue)) {
    return new BooleanController(object, property);
  }
  return null;
};

function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;

var CenteredDiv = function () {
  function CenteredDiv() {
    classCallCheck(this, CenteredDiv);
    this.backgroundElement = document.createElement('div');
    Common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear',
      transition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    Common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);
    var _this = this;
    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  }
  createClass(CenteredDiv, [{
    key: 'show',
    value: function show() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      Common.defer(function () {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;
      var hide = function hide() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    }
  }]);
  return CenteredDiv;
}();

var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

css.inject(styleSheet);
var CSS_NAMESPACE = 'dg';
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
var SUPPORTS_LOCAL_STORAGE = function () {
  try {
    return !!window.localStorage;
  } catch (e) {
    return false;
  }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI(pars) {
  var _this = this;
  var params = pars || {};
  this.domElement = document.createElement('div');
  this.__ul = document.createElement('ul');
  this.domElement.appendChild(this.__ul);
  dom.addClass(this.domElement, CSS_NAMESPACE);
  this.__folders = {};
  this.__controllers = [];
  this.__rememberedObjects = [];
  this.__rememberedObjectIndecesToControllers = [];
  this.__listening = [];
  params = Common.defaults(params, {
    closeOnTop: false,
    autoPlace: true,
    width: GUI.DEFAULT_WIDTH
  });
  params = Common.defaults(params, {
    resizable: params.autoPlace,
    hideable: params.autoPlace
  });
  if (!Common.isUndefined(params.load)) {
    if (params.preset) {
      params.load.preset = params.preset;
    }
  } else {
    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
  }
  if (Common.isUndefined(params.parent) && params.hideable) {
    hideableGuis.push(this);
  }
  params.resizable = Common.isUndefined(params.parent) && params.resizable;
  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
    params.scrollable = true;
  }
  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
  var saveToLocalStorage = void 0;
  var titleRow = void 0;
  Object.defineProperties(this,
  {
    parent: {
      get: function get$$1() {
        return params.parent;
      }
    },
    scrollable: {
      get: function get$$1() {
        return params.scrollable;
      }
    },
    autoPlace: {
      get: function get$$1() {
        return params.autoPlace;
      }
    },
    closeOnTop: {
      get: function get$$1() {
        return params.closeOnTop;
      }
    },
    preset: {
      get: function get$$1() {
        if (_this.parent) {
          return _this.getRoot().preset;
        }
        return params.load.preset;
      },
      set: function set$$1(v) {
        if (_this.parent) {
          _this.getRoot().preset = v;
        } else {
          params.load.preset = v;
        }
        setPresetSelectIndex(this);
        _this.revert();
      }
    },
    width: {
      get: function get$$1() {
        return params.width;
      },
      set: function set$$1(v) {
        params.width = v;
        setWidth(_this, v);
      }
    },
    name: {
      get: function get$$1() {
        return params.name;
      },
      set: function set$$1(v) {
        params.name = v;
        if (titleRow) {
          titleRow.innerHTML = params.name;
        }
      }
    },
    closed: {
      get: function get$$1() {
        return params.closed;
      },
      set: function set$$1(v) {
        params.closed = v;
        if (params.closed) {
          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
        } else {
          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
        }
        this.onResize();
        if (_this.__closeButton) {
          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
        }
      }
    },
    load: {
      get: function get$$1() {
        return params.load;
      }
    },
    useLocalStorage: {
      get: function get$$1() {
        return useLocalStorage;
      },
      set: function set$$1(bool) {
        if (SUPPORTS_LOCAL_STORAGE) {
          useLocalStorage = bool;
          if (bool) {
            dom.bind(window, 'unload', saveToLocalStorage);
          } else {
            dom.unbind(window, 'unload', saveToLocalStorage);
          }
          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
        }
      }
    }
  });
  if (Common.isUndefined(params.parent)) {
    this.closed = params.closed || false;
    dom.addClass(this.domElement, GUI.CLASS_MAIN);
    dom.makeSelectable(this.domElement, false);
    if (SUPPORTS_LOCAL_STORAGE) {
      if (useLocalStorage) {
        _this.useLocalStorage = true;
        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
        if (savedGui) {
          params.load = JSON.parse(savedGui);
        }
      }
    }
    this.__closeButton = document.createElement('div');
    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
    if (params.closeOnTop) {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
    } else {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
      this.domElement.appendChild(this.__closeButton);
    }
    dom.bind(this.__closeButton, 'click', function () {
      _this.closed = !_this.closed;
    });
  } else {
    if (params.closed === undefined) {
      params.closed = true;
    }
    var titleRowName = document.createTextNode(params.name);
    dom.addClass(titleRowName, 'controller-name');
    titleRow = addRow(_this, titleRowName);
    var onClickTitle = function onClickTitle(e) {
      e.preventDefault();
      _this.closed = !_this.closed;
      return false;
    };
    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
    dom.addClass(titleRow, 'title');
    dom.bind(titleRow, 'click', onClickTitle);
    if (!params.closed) {
      this.closed = false;
    }
  }
  if (params.autoPlace) {
    if (Common.isUndefined(params.parent)) {
      if (autoPlaceVirgin) {
        autoPlaceContainer = document.createElement('div');
        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
        document.body.appendChild(autoPlaceContainer);
        autoPlaceVirgin = false;
      }
      autoPlaceContainer.appendChild(this.domElement);
      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
    }
    if (!this.parent) {
      setWidth(_this, params.width);
    }
  }
  this.__resizeHandler = function () {
    _this.onResizeDebounced();
  };
  dom.bind(window, 'resize', this.__resizeHandler);
  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
  this.onResize();
  if (params.resizable) {
    addResizeHandle(this);
  }
  saveToLocalStorage = function saveToLocalStorage() {
    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }
  };
  this.saveToLocalStorageIfPossible = saveToLocalStorage;
  function resetWidth() {
    var root = _this.getRoot();
    root.width += 1;
    Common.defer(function () {
      root.width -= 1;
    });
  }
  if (!params.parent) {
    resetWidth();
  }
};
GUI.toggleHide = function () {
  hide = !hide;
  Common.each(hideableGuis, function (gui) {
    gui.domElement.style.display = hide ? 'none' : '';
  });
};
GUI.CLASS_AUTO_PLACE = 'a';
GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
GUI.CLASS_MAIN = 'main';
GUI.CLASS_CONTROLLER_ROW = 'cr';
GUI.CLASS_TOO_TALL = 'taller-than-window';
GUI.CLASS_CLOSED = 'closed';
GUI.CLASS_CLOSE_BUTTON = 'close-button';
GUI.CLASS_CLOSE_TOP = 'close-top';
GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
GUI.CLASS_DRAG = 'drag';
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = 'Close Controls';
GUI.TEXT_OPEN = 'Open Controls';
GUI._keydownHandler = function (e) {
  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
    GUI.toggleHide();
  }
};
dom.bind(window, 'keydown', GUI._keydownHandler, false);
Common.extend(GUI.prototype,
{
  add: function add(object, property) {
    return _add(this, object, property, {
      factoryArgs: Array.prototype.slice.call(arguments, 2)
    });
  },
  addColor: function addColor(object, property) {
    return _add(this, object, property, {
      color: true
    });
  },
  remove: function remove(controller) {
    this.__ul.removeChild(controller.__li);
    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
    var _this = this;
    Common.defer(function () {
      _this.onResize();
    });
  },
  destroy: function destroy() {
    if (this.parent) {
      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
    }
    if (this.autoPlace) {
      autoPlaceContainer.removeChild(this.domElement);
    }
    var _this = this;
    Common.each(this.__folders, function (subfolder) {
      _this.removeFolder(subfolder);
    });
    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
    removeListeners(this);
  },
  addFolder: function addFolder(name) {
    if (this.__folders[name] !== undefined) {
      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
    }
    var newGuiParams = { name: name, parent: this };
    newGuiParams.autoPlace = this.autoPlace;
    if (this.load &&
    this.load.folders &&
    this.load.folders[name]) {
      newGuiParams.closed = this.load.folders[name].closed;
      newGuiParams.load = this.load.folders[name];
    }
    var gui = new GUI(newGuiParams);
    this.__folders[name] = gui;
    var li = addRow(this, gui.domElement);
    dom.addClass(li, 'folder');
    return gui;
  },
  removeFolder: function removeFolder(folder) {
    this.__ul.removeChild(folder.domElement.parentElement);
    delete this.__folders[folder.name];
    if (this.load &&
    this.load.folders &&
    this.load.folders[folder.name]) {
      delete this.load.folders[folder.name];
    }
    removeListeners(folder);
    var _this = this;
    Common.each(folder.__folders, function (subfolder) {
      folder.removeFolder(subfolder);
    });
    Common.defer(function () {
      _this.onResize();
    });
  },
  open: function open() {
    this.closed = false;
  },
  close: function close() {
    this.closed = true;
  },
  hide: function hide() {
    this.domElement.style.display = 'none';
  },
  show: function show() {
    this.domElement.style.display = '';
  },
  onResize: function onResize() {
    var root = this.getRoot();
    if (root.scrollable) {
      var top = dom.getOffset(root.__ul).top;
      var h = 0;
      Common.each(root.__ul.childNodes, function (node) {
        if (!(root.autoPlace && node === root.__save_row)) {
          h += dom.getHeight(node);
        }
      });
      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
      } else {
        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = 'auto';
      }
    }
    if (root.__resize_handle) {
      Common.defer(function () {
        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
      });
    }
    if (root.__closeButton) {
      root.__closeButton.style.width = root.width + 'px';
    }
  },
  onResizeDebounced: Common.debounce(function () {
    this.onResize();
  }, 50),
  remember: function remember() {
    if (Common.isUndefined(SAVE_DIALOGUE)) {
      SAVE_DIALOGUE = new CenteredDiv();
      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
    }
    if (this.parent) {
      throw new Error('You can only call remember on a top level GUI.');
    }
    var _this = this;
    Common.each(Array.prototype.slice.call(arguments), function (object) {
      if (_this.__rememberedObjects.length === 0) {
        addSaveMenu(_this);
      }
      if (_this.__rememberedObjects.indexOf(object) === -1) {
        _this.__rememberedObjects.push(object);
      }
    });
    if (this.autoPlace) {
      setWidth(this, this.width);
    }
  },
  getRoot: function getRoot() {
    var gui = this;
    while (gui.parent) {
      gui = gui.parent;
    }
    return gui;
  },
  getSaveObject: function getSaveObject() {
    var toReturn = this.load;
    toReturn.closed = this.closed;
    if (this.__rememberedObjects.length > 0) {
      toReturn.preset = this.preset;
      if (!toReturn.remembered) {
        toReturn.remembered = {};
      }
      toReturn.remembered[this.preset] = getCurrentPreset(this);
    }
    toReturn.folders = {};
    Common.each(this.__folders, function (element, key) {
      toReturn.folders[key] = element.getSaveObject();
    });
    return toReturn;
  },
  save: function save() {
    if (!this.load.remembered) {
      this.load.remembered = {};
    }
    this.load.remembered[this.preset] = getCurrentPreset(this);
    markPresetModified(this, false);
    this.saveToLocalStorageIfPossible();
  },
  saveAs: function saveAs(presetName) {
    if (!this.load.remembered) {
      this.load.remembered = {};
      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
    }
    this.load.remembered[presetName] = getCurrentPreset(this);
    this.preset = presetName;
    addPresetOption(this, presetName, true);
    this.saveToLocalStorageIfPossible();
  },
  revert: function revert(gui) {
    Common.each(this.__controllers, function (controller) {
      if (!this.getRoot().load.remembered) {
        controller.setValue(controller.initialValue);
      } else {
        recallSavedValue(gui || this.getRoot(), controller);
      }
      if (controller.__onFinishChange) {
        controller.__onFinishChange.call(controller, controller.getValue());
      }
    }, this);
    Common.each(this.__folders, function (folder) {
      folder.revert(folder);
    });
    if (!gui) {
      markPresetModified(this.getRoot(), false);
    }
  },
  listen: function listen(controller) {
    var init = this.__listening.length === 0;
    this.__listening.push(controller);
    if (init) {
      updateDisplays(this.__listening);
    }
  },
  updateDisplay: function updateDisplay() {
    Common.each(this.__controllers, function (controller) {
      controller.updateDisplay();
    });
    Common.each(this.__folders, function (folder) {
      folder.updateDisplay();
    });
  }
});
function addRow(gui, newDom, liBefore) {
  var li = document.createElement('li');
  if (newDom) {
    li.appendChild(newDom);
  }
  if (liBefore) {
    gui.__ul.insertBefore(li, liBefore);
  } else {
    gui.__ul.appendChild(li);
  }
  gui.onResize();
  return li;
}
function removeListeners(gui) {
  dom.unbind(window, 'resize', gui.__resizeHandler);
  if (gui.saveToLocalStorageIfPossible) {
    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
  }
}
function markPresetModified(gui, modified) {
  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
  if (modified) {
    opt.innerHTML = opt.value + '*';
  } else {
    opt.innerHTML = opt.value;
  }
}
function augmentController(gui, li, controller) {
  controller.__li = li;
  controller.__gui = gui;
  Common.extend(controller,                                   {
    options: function options(_options) {
      if (arguments.length > 1) {
        var nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: nextSibling,
          factoryArgs: [Common.toArray(arguments)]
        });
      }
      if (Common.isArray(_options) || Common.isObject(_options)) {
        var _nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: _nextSibling,
          factoryArgs: [_options]
        });
      }
    },
    name: function name(_name) {
      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
      return controller;
    },
    listen: function listen() {
      controller.__gui.listen(controller);
      return controller;
    },
    remove: function remove() {
      controller.__gui.remove(controller);
      return controller;
    }
  });
  if (controller instanceof NumberControllerSlider) {
    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
      var pc = controller[method];
      var pb = box[method];
      controller[method] = box[method] = function () {
        var args = Array.prototype.slice.call(arguments);
        pb.apply(box, args);
        return pc.apply(controller, args);
      };
    });
    dom.addClass(li, 'has-slider');
    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
  } else if (controller instanceof NumberControllerBox) {
    var r = function r(returned) {
      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
        controller.remove();
        var newController = _add(gui, controller.object, controller.property, {
          before: controller.__li.nextElementSibling,
          factoryArgs: [controller.__min, controller.__max, controller.__step]
        });
        newController.name(oldName);
        if (wasListening) newController.listen();
        return newController;
      }
      return returned;
    };
    controller.min = Common.compose(r, controller.min);
    controller.max = Common.compose(r, controller.max);
  } else if (controller instanceof BooleanController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__checkbox, 'click');
    });
    dom.bind(controller.__checkbox, 'click', function (e) {
      e.stopPropagation();
    });
  } else if (controller instanceof FunctionController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__button, 'click');
    });
    dom.bind(li, 'mouseover', function () {
      dom.addClass(controller.__button, 'hover');
    });
    dom.bind(li, 'mouseout', function () {
      dom.removeClass(controller.__button, 'hover');
    });
  } else if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
    controller.updateDisplay = Common.compose(function (val) {
      li.style.borderLeftColor = controller.__color.toString();
      return val;
    }, controller.updateDisplay);
    controller.updateDisplay();
  }
  controller.setValue = Common.compose(function (val) {
    if (gui.getRoot().__preset_select && controller.isModified()) {
      markPresetModified(gui.getRoot(), true);
    }
    return val;
  }, controller.setValue);
}
function recallSavedValue(gui, controller) {
  var root = gui.getRoot();
  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
  if (matchedIndex !== -1) {
    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
    if (controllerMap === undefined) {
      controllerMap = {};
      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
    }
    controllerMap[controller.property] = controller;
    if (root.load && root.load.remembered) {
      var presetMap = root.load.remembered;
      var preset = void 0;
      if (presetMap[gui.preset]) {
        preset = presetMap[gui.preset];
      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
      } else {
        return;
      }
      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
        var value = preset[matchedIndex][controller.property];
        controller.initialValue = value;
        controller.setValue(value);
      }
    }
  }
}
function _add(gui, object, property, params) {
  if (object[property] === undefined) {
    throw new Error('Object "' + object + '" has no property "' + property + '"');
  }
  var controller = void 0;
  if (params.color) {
    controller = new ColorController(object, property);
  } else {
    var factoryArgs = [object, property].concat(params.factoryArgs);
    controller = ControllerFactory.apply(gui, factoryArgs);
  }
  if (params.before instanceof Controller) {
    params.before = params.before.__li;
  }
  recallSavedValue(gui, controller);
  dom.addClass(controller.domElement, 'c');
  var name = document.createElement('span');
  dom.addClass(name, 'property-name');
  name.innerHTML = controller.property;
  var container = document.createElement('div');
  container.appendChild(name);
  container.appendChild(controller.domElement);
  var li = addRow(gui, container, params.before);
  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
  if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
  } else {
    dom.addClass(li, _typeof(controller.getValue()));
  }
  augmentController(gui, li, controller);
  gui.__controllers.push(controller);
  return controller;
}
function getLocalStorageHash(gui, key) {
  return document.location.href + '.' + key;
}
function addPresetOption(gui, name, setSelected) {
  var opt = document.createElement('option');
  opt.innerHTML = name;
  opt.value = name;
  gui.__preset_select.appendChild(opt);
  if (setSelected) {
    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
  }
}
function showHideExplain(gui, explain) {
  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
}
function addSaveMenu(gui) {
  var div = gui.__save_row = document.createElement('li');
  dom.addClass(gui.domElement, 'has-save');
  gui.__ul.insertBefore(div, gui.__ul.firstChild);
  dom.addClass(div, 'save-row');
  var gears = document.createElement('span');
  gears.innerHTML = '&nbsp;';
  dom.addClass(gears, 'button gears');
  var button = document.createElement('span');
  button.innerHTML = 'Save';
  dom.addClass(button, 'button');
  dom.addClass(button, 'save');
  var button2 = document.createElement('span');
  button2.innerHTML = 'New';
  dom.addClass(button2, 'button');
  dom.addClass(button2, 'save-as');
  var button3 = document.createElement('span');
  button3.innerHTML = 'Revert';
  dom.addClass(button3, 'button');
  dom.addClass(button3, 'revert');
  var select = gui.__preset_select = document.createElement('select');
  if (gui.load && gui.load.remembered) {
    Common.each(gui.load.remembered, function (value, key) {
      addPresetOption(gui, key, key === gui.preset);
    });
  } else {
    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
  }
  dom.bind(select, 'change', function () {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
    }
    gui.preset = this.value;
  });
  div.appendChild(select);
  div.appendChild(gears);
  div.appendChild(button);
  div.appendChild(button2);
  div.appendChild(button3);
  if (SUPPORTS_LOCAL_STORAGE) {
    var explain = document.getElementById('dg-local-explain');
    var localStorageCheckBox = document.getElementById('dg-local-storage');
    var saveLocally = document.getElementById('dg-save-locally');
    saveLocally.style.display = 'block';
    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
      localStorageCheckBox.setAttribute('checked', 'checked');
    }
    showHideExplain(gui, explain);
    dom.bind(localStorageCheckBox, 'change', function () {
      gui.useLocalStorage = !gui.useLocalStorage;
      showHideExplain(gui, explain);
    });
  }
  var newConstructorTextArea = document.getElementById('dg-new-constructor');
  dom.bind(newConstructorTextArea, 'keydown', function (e) {
    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
      SAVE_DIALOGUE.hide();
    }
  });
  dom.bind(gears, 'click', function () {
    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
    SAVE_DIALOGUE.show();
    newConstructorTextArea.focus();
    newConstructorTextArea.select();
  });
  dom.bind(button, 'click', function () {
    gui.save();
  });
  dom.bind(button2, 'click', function () {
    var presetName = prompt('Enter a new preset name.');
    if (presetName) {
      gui.saveAs(presetName);
    }
  });
  dom.bind(button3, 'click', function () {
    gui.revert();
  });
}
function addResizeHandle(gui) {
  var pmouseX = void 0;
  gui.__resize_handle = document.createElement('div');
  Common.extend(gui.__resize_handle.style, {
    width: '6px',
    marginLeft: '-3px',
    height: '200px',
    cursor: 'ew-resize',
    position: 'absolute'
  });
  function drag(e) {
    e.preventDefault();
    gui.width += pmouseX - e.clientX;
    gui.onResize();
    pmouseX = e.clientX;
    return false;
  }
  function dragStop() {
    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.unbind(window, 'mousemove', drag);
    dom.unbind(window, 'mouseup', dragStop);
  }
  function dragStart(e) {
    e.preventDefault();
    pmouseX = e.clientX;
    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.bind(window, 'mousemove', drag);
    dom.bind(window, 'mouseup', dragStop);
    return false;
  }
  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
  dom.bind(gui.__closeButton, 'mousedown', dragStart);
  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
}
function setWidth(gui, w) {
  gui.domElement.style.width = w + 'px';
  if (gui.__save_row && gui.autoPlace) {
    gui.__save_row.style.width = w + 'px';
  }
  if (gui.__closeButton) {
    gui.__closeButton.style.width = w + 'px';
  }
}
function getCurrentPreset(gui, useInitialValues) {
  var toReturn = {};
  Common.each(gui.__rememberedObjects, function (val, index) {
    var savedValues = {};
    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
    Common.each(controllerMap, function (controller, property) {
      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
    });
    toReturn[index] = savedValues;
  });
  return toReturn;
}
function setPresetSelectIndex(gui) {
  for (var index = 0; index < gui.__preset_select.length; index++) {
    if (gui.__preset_select[index].value === gui.preset) {
      gui.__preset_select.selectedIndex = index;
    }
  }
}
function updateDisplays(controllerArray) {
  if (controllerArray.length !== 0) {
    requestAnimationFrame$1.call(window, function () {
      updateDisplays(controllerArray);
    });
  }
  Common.each(controllerArray, function (c) {
    c.updateDisplay();
  });
}

var color = {
  Color: Color,
  math: ColorMath,
  interpret: interpret
};
var controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController
};
var dom$1 = { dom: dom };
var gui = { GUI: GUI };
var GUI$1 = GUI;
var index = {
  color: color,
  controllers: controllers,
  dom: dom$1,
  gui: gui,
  GUI: GUI$1
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
//# sourceMappingURL=dat.gui.module.js.map


/***/ }),

/***/ "../../node_modules/park-miller/index.js":
/*!***********************************************!*\
  !*** ../../node_modules/park-miller/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";

const MAX_INT32 = 2147483647;
const MINSTD = 16807;

class ParkMiller {
	constructor(seed) {
		if (!Number.isInteger(seed)) {
			throw new TypeError('Expected `seed` to be a `integer`');
		}

		this._seed = seed % MAX_INT32;

		if (this._seed <= 0) {
			this._seed += (MAX_INT32 - 1);
		}
	}

	integer() {
		this._seed *= MINSTD;
		this._seed %= MAX_INT32;
		return this._seed;
	}

	integerInRange(min, max) {
		return Math.round(this.floatInRange(min, max));
	}

	float() {
		return (this.integer() - 1) / (MAX_INT32 - 1);
	}

	floatInRange(min, max) {
		return min + ((max - min) * this.float());
	}

	boolean() {
		return this.integer() % 2 === 0;
	}
}

module.exports = ParkMiller;


/***/ }),

/***/ "./canvas.ts":
/*!*******************!*\
  !*** ./canvas.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawOptions": () => (/* binding */ drawOptions),
/* harmony export */   "createCanvas": () => (/* binding */ createCanvas)
/* harmony export */ });
/* harmony import */ var _snk_draw_drawWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/draw/drawWorld */ "../draw/drawWorld.ts");

const drawOptions = {
    sizeBorderRadius: 2,
    sizeCell: 16,
    sizeDot: 12,
    colorBorder: "#1b1f230a",
    colorDots: {
        1: "#9be9a8",
        2: "#40c463",
        3: "#30a14e",
        4: "#216e39",
    },
    colorEmpty: "#ebedf0",
    colorSnake: "purple",
    dark: {
        colorEmpty: "#161b22",
        colorDots: { 1: "#01311f", 2: "#034525", 3: "#0f6d31", 4: "#00c647" },
    },
};
const getPointedCell = (canvas) => ({ pageX, pageY, }) => {
    const { left, top } = canvas.getBoundingClientRect();
    const x = Math.floor((pageX - left) / drawOptions.sizeCell) - 1;
    const y = Math.floor((pageY - top) / drawOptions.sizeCell) - 2;
    return { x, y };
};
const createCanvas = ({ width, height, }) => {
    const canvas = document.createElement("canvas");
    const upscale = 2;
    const w = drawOptions.sizeCell * (width + 4);
    const h = drawOptions.sizeCell * (height + 4) + 200;
    canvas.width = w * upscale;
    canvas.height = h * upscale;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.style.display = "block";
    // canvas.style.pointerEvents = "none";
    const cellInfo = document.createElement("div");
    cellInfo.style.height = "20px";
    document.body.appendChild(cellInfo);
    document.body.appendChild(canvas);
    canvas.addEventListener("mousemove", (e) => {
        const { x, y } = getPointedCell(canvas)(e);
        cellInfo.innerText = [x, y]
            .map((u) => u.toString().padStart(2, " "))
            .join(" / ");
    });
    const ctx = canvas.getContext("2d");
    ctx.scale(upscale, upscale);
    const draw = (grid, snake, stack) => {
        ctx.clearRect(0, 0, 9999, 9999);
        (0,_snk_draw_drawWorld__WEBPACK_IMPORTED_MODULE_0__.drawWorld)(ctx, grid, snake, stack, drawOptions);
    };
    const drawLerp = (grid, snake0, snake1, stack, k) => {
        ctx.clearRect(0, 0, 9999, 9999);
        (0,_snk_draw_drawWorld__WEBPACK_IMPORTED_MODULE_0__.drawLerpWorld)(ctx, grid, snake0, snake1, stack, k, drawOptions);
    };
    const highlightCell = (x, y, color = "orange") => {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.fillRect((1 + x + 0.5) * 16 - 2, (2 + y + 0.5) * 16 - 2, 4, 4);
    };
    return {
        draw,
        drawLerp,
        highlightCell,
        canvas,
        getPointedCell: getPointedCell(canvas),
        ctx,
    };
};


/***/ }),

/***/ "./demo.svg.ts":
/*!*********************!*\
  !*** ./demo.svg.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./menu.ts");
/* harmony import */ var _snk_solver_getBestRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/solver/getBestRoute */ "../solver/getBestRoute.ts");
/* harmony import */ var _svg_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg-creator */ "../svg-creator/index.ts");
/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample */ "./sample.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canvas */ "./canvas.ts");
/* harmony import */ var _snk_solver_getPathToPose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @snk/solver/getPathToPose */ "../solver/getPathToPose.ts");






const chain = (0,_snk_solver_getBestRoute__WEBPACK_IMPORTED_MODULE_1__.getBestRoute)(_sample__WEBPACK_IMPORTED_MODULE_3__.grid, _sample__WEBPACK_IMPORTED_MODULE_3__.snake);
chain.push(...(0,_snk_solver_getPathToPose__WEBPACK_IMPORTED_MODULE_5__.getPathToPose)(chain.slice(-1)[0], _sample__WEBPACK_IMPORTED_MODULE_3__.snake));
(async () => {
    const svg = await (0,_svg_creator__WEBPACK_IMPORTED_MODULE_2__.createSvg)(_sample__WEBPACK_IMPORTED_MODULE_3__.grid, chain, _canvas__WEBPACK_IMPORTED_MODULE_4__.drawOptions, { frameDuration: 200 });
    const container = document.createElement("div");
    container.innerHTML = svg;
    document.body.appendChild(container);
})();


/***/ }),

/***/ "./menu.ts":
/*!*****************!*\
  !*** ./menu.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gui": () => (/* binding */ gui)
/* harmony export */ });
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "../../node_modules/dat.gui/build/dat.gui.module.js");
/* harmony import */ var _snk_types_fixtures_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/__fixtures__/grid */ "../types/__fixtures__/grid.ts");
/* harmony import */ var _snk_types_fixtures_snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @snk/types/__fixtures__/snake */ "../types/__fixtures__/snake.ts");
/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample */ "./sample.ts");




const demos = __webpack_require__(/*! ./demo.json */ "./demo.json");
const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI();
const config = {
    snake: Object.entries(_snk_types_fixtures_snake__WEBPACK_IMPORTED_MODULE_2__).find(([_, s]) => s === _sample__WEBPACK_IMPORTED_MODULE_3__.snake)[0],
    grid: Object.entries(_snk_types_fixtures_grid__WEBPACK_IMPORTED_MODULE_1__).find(([_, s]) => s === _sample__WEBPACK_IMPORTED_MODULE_3__.grid)[0],
    demo: demos[0],
};
{
    const d = window.location.pathname.match(/(\w+)\.html/);
    if (d && demos.includes(d[1]))
        config.demo = d[1];
}
const onChange = () => {
    const search = new URLSearchParams({
        snake: config.snake,
        grid: config.grid,
    }).toString();
    const url = new URL(config.demo + ".html?" + search, window.location.href).toString();
    window.location.href = url;
};
gui.add(config, "demo", demos).onChange(onChange);
gui.add(config, "grid", Object.keys(_snk_types_fixtures_grid__WEBPACK_IMPORTED_MODULE_1__)).onChange(onChange);
gui.add(config, "snake", Object.keys(_snk_types_fixtures_snake__WEBPACK_IMPORTED_MODULE_2__)).onChange(onChange);


/***/ }),

/***/ "./sample.ts":
/*!*******************!*\
  !*** ./sample.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grid": () => (/* binding */ grid),
/* harmony export */   "snake": () => (/* binding */ snake)
/* harmony export */ });
/* harmony import */ var _snk_types_fixtures_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/__fixtures__/grid */ "../types/__fixtures__/grid.ts");
/* harmony import */ var _snk_types_fixtures_snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/__fixtures__/snake */ "../types/__fixtures__/snake.ts");


const sp = new URLSearchParams(window.location.search);
const gLabel = sp.get("grid") || "simple";
const sLabel = sp.get("snake") || "snake3";
//@ts-ignore
const grid = _snk_types_fixtures_grid__WEBPACK_IMPORTED_MODULE_0__[gLabel] || _snk_types_fixtures_grid__WEBPACK_IMPORTED_MODULE_0__.simple;
//@ts-ignore
const snake = _snk_types_fixtures_snake__WEBPACK_IMPORTED_MODULE_1__[sLabel] || _snk_types_fixtures_snake__WEBPACK_IMPORTED_MODULE_1__.snake3;


/***/ }),

/***/ "../draw/drawGrid.ts":
/*!***************************!*\
  !*** ../draw/drawGrid.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawGrid": () => (/* binding */ drawGrid)
/* harmony export */ });
/* harmony import */ var _snk_types_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/grid */ "../types/grid.ts");
/* harmony import */ var _pathRoundedRect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathRoundedRect */ "../draw/pathRoundedRect.ts");


const drawGrid = (ctx, grid, o) => {
    for (let x = grid.width; x--;)
        for (let y = grid.height; y--;) {
            if (!o.cells || o.cells.some((c) => c.x === x && c.y === y)) {
                const c = (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, x, y);
                // @ts-ignore
                const color = !c ? o.colorEmpty : o.colorDots[c];
                ctx.save();
                ctx.translate(x * o.sizeCell + (o.sizeCell - o.sizeDot) / 2, y * o.sizeCell + (o.sizeCell - o.sizeDot) / 2);
                ctx.fillStyle = color;
                ctx.strokeStyle = o.colorBorder;
                ctx.lineWidth = 1;
                ctx.beginPath();
                (0,_pathRoundedRect__WEBPACK_IMPORTED_MODULE_1__.pathRoundedRect)(ctx, o.sizeDot, o.sizeDot, o.sizeBorderRadius);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            }
        }
};


/***/ }),

/***/ "../draw/drawSnake.ts":
/*!****************************!*\
  !*** ../draw/drawSnake.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawSnake": () => (/* binding */ drawSnake),
/* harmony export */   "drawSnakeLerp": () => (/* binding */ drawSnakeLerp)
/* harmony export */ });
/* harmony import */ var _pathRoundedRect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathRoundedRect */ "../draw/pathRoundedRect.ts");
/* harmony import */ var _snk_types_snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/snake */ "../types/snake.ts");


const drawSnake = (ctx, snake, o) => {
    const cells = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.snakeToCells)(snake);
    for (let i = 0; i < cells.length; i++) {
        const u = (i + 1) * 0.6;
        ctx.save();
        ctx.fillStyle = o.colorSnake;
        ctx.translate(cells[i].x * o.sizeCell + u, cells[i].y * o.sizeCell + u);
        ctx.beginPath();
        (0,_pathRoundedRect__WEBPACK_IMPORTED_MODULE_0__.pathRoundedRect)(ctx, o.sizeCell - u * 2, o.sizeCell - u * 2, (o.sizeCell - u * 2) * 0.25);
        ctx.fill();
        ctx.restore();
    }
};
const lerp = (k, a, b) => (1 - k) * a + k * b;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const drawSnakeLerp = (ctx, snake0, snake1, k, o) => {
    const m = 0.8;
    const n = snake0.length / 2;
    for (let i = 0; i < n; i++) {
        const u = (i + 1) * 0.6 * (o.sizeCell / 16);
        const a = (1 - m) * (i / Math.max(n - 1, 1));
        const ki = clamp((k - a) / m, 0, 1);
        const x = lerp(ki, snake0[i * 2 + 0], snake1[i * 2 + 0]) - 2;
        const y = lerp(ki, snake0[i * 2 + 1], snake1[i * 2 + 1]) - 2;
        ctx.save();
        ctx.fillStyle = o.colorSnake;
        ctx.translate(x * o.sizeCell + u, y * o.sizeCell + u);
        ctx.beginPath();
        (0,_pathRoundedRect__WEBPACK_IMPORTED_MODULE_0__.pathRoundedRect)(ctx, o.sizeCell - u * 2, o.sizeCell - u * 2, (o.sizeCell - u * 2) * 0.25);
        ctx.fill();
        ctx.restore();
    }
};


/***/ }),

/***/ "../draw/drawWorld.ts":
/*!****************************!*\
  !*** ../draw/drawWorld.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawStack": () => (/* binding */ drawStack),
/* harmony export */   "drawWorld": () => (/* binding */ drawWorld),
/* harmony export */   "drawLerpWorld": () => (/* binding */ drawLerpWorld),
/* harmony export */   "getCanvasWorldSize": () => (/* binding */ getCanvasWorldSize)
/* harmony export */ });
/* harmony import */ var _drawGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawGrid */ "../draw/drawGrid.ts");
/* harmony import */ var _drawSnake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawSnake */ "../draw/drawSnake.ts");


const drawStack = (ctx, stack, max, width, o) => {
    ctx.save();
    const m = width / max;
    for (let i = 0; i < stack.length; i++) {
        // @ts-ignore
        ctx.fillStyle = o.colorDots[stack[i]];
        ctx.fillRect(i * m, 0, m + width * 0.005, 10);
    }
    ctx.restore();
};
const drawWorld = (ctx, grid, snake, stack, o) => {
    ctx.save();
    ctx.translate(1 * o.sizeCell, 2 * o.sizeCell);
    (0,_drawGrid__WEBPACK_IMPORTED_MODULE_0__.drawGrid)(ctx, grid, o);
    (0,_drawSnake__WEBPACK_IMPORTED_MODULE_1__.drawSnake)(ctx, snake, o);
    ctx.restore();
    ctx.save();
    ctx.translate(o.sizeCell, (grid.height + 4) * o.sizeCell);
    const max = grid.data.reduce((sum, x) => sum + +!!x, stack.length);
    drawStack(ctx, stack, max, grid.width * o.sizeCell, o);
    ctx.restore();
    // ctx.save();
    // ctx.translate(o.sizeCell + 100, (grid.height + 4) * o.sizeCell + 100);
    // ctx.scale(0.6, 0.6);
    // drawCircleStack(ctx, stack, o);
    // ctx.restore();
};
const drawLerpWorld = (ctx, grid, snake0, snake1, stack, k, o) => {
    ctx.save();
    ctx.translate(1 * o.sizeCell, 2 * o.sizeCell);
    (0,_drawGrid__WEBPACK_IMPORTED_MODULE_0__.drawGrid)(ctx, grid, o);
    (0,_drawSnake__WEBPACK_IMPORTED_MODULE_1__.drawSnakeLerp)(ctx, snake0, snake1, k, o);
    ctx.translate(0, (grid.height + 2) * o.sizeCell);
    const max = grid.data.reduce((sum, x) => sum + +!!x, stack.length);
    drawStack(ctx, stack, max, grid.width * o.sizeCell, o);
    ctx.restore();
};
const getCanvasWorldSize = (grid, o) => {
    const width = o.sizeCell * (grid.width + 2);
    const height = o.sizeCell * (grid.height + 4) + 30;
    return { width, height };
};


/***/ }),

/***/ "../draw/pathRoundedRect.ts":
/*!**********************************!*\
  !*** ../draw/pathRoundedRect.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pathRoundedRect": () => (/* binding */ pathRoundedRect)
/* harmony export */ });
const pathRoundedRect = (ctx, width, height, borderRadius) => {
    ctx.moveTo(borderRadius, 0);
    ctx.arcTo(width, 0, width, height, borderRadius);
    ctx.arcTo(width, height, 0, height, borderRadius);
    ctx.arcTo(0, height, 0, 0, borderRadius);
    ctx.arcTo(0, 0, width, 0, borderRadius);
};


/***/ }),

/***/ "../solver/clearCleanColoredLayer.ts":
/*!*******************************************!*\
  !*** ../solver/clearCleanColoredLayer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearCleanColoredLayer": () => (/* binding */ clearCleanColoredLayer),
/* harmony export */   "getTunnellablePoints": () => (/* binding */ getTunnellablePoints)
/* harmony export */ });
/* harmony import */ var _snk_types_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/grid */ "../types/grid.ts");
/* harmony import */ var _snk_types_snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/snake */ "../types/snake.ts");
/* harmony import */ var _snk_types_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @snk/types/point */ "../types/point.ts");
/* harmony import */ var _getBestTunnel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBestTunnel */ "../solver/getBestTunnel.ts");
/* harmony import */ var _outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./outside */ "../solver/outside.ts");





const clearCleanColoredLayer = (grid, outside, snake0, color) => {
    const snakeN = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getSnakeLength)(snake0);
    const points = getTunnellablePoints(grid, outside, snakeN, color);
    const chain = [snake0];
    while (points.length) {
        const path = getPathToNextPoint(grid, chain[0], color, points);
        path.pop();
        for (const snake of path)
            setEmptySafe(grid, (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getHeadX)(snake), (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getHeadY)(snake));
        chain.unshift(...path);
    }
    (0,_outside__WEBPACK_IMPORTED_MODULE_4__.fillOutside)(outside, grid);
    chain.pop();
    return chain;
};
const unwrap = (m) => !m ? [] : [m.snake, ...unwrap(m.parent)];
const getPathToNextPoint = (grid, snake0, color, points) => {
    const closeList = [];
    const openList = [{ snake: snake0 }];
    while (openList.length) {
        const o = openList.shift();
        const x = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getHeadX)(o.snake);
        const y = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getHeadY)(o.snake);
        const i = points.findIndex((p) => p.x === x && p.y === y);
        if (i >= 0) {
            points.splice(i, 1);
            return unwrap(o);
        }
        for (const { x: dx, y: dy } of _snk_types_point__WEBPACK_IMPORTED_MODULE_2__.around4) {
            if ((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInsideLarge)(grid, 2, x + dx, y + dy) &&
                !(0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.snakeWillSelfCollide)(o.snake, dx, dy) &&
                getColorSafe(grid, x + dx, y + dy) <= color) {
                const snake = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.nextSnake)(o.snake, dx, dy);
                if (!closeList.some((s0) => (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.snakeEquals)(s0, snake))) {
                    closeList.push(snake);
                    openList.push({ snake, parent: o });
                }
            }
        }
    }
};
/**
 * get all cells that are tunnellable
 */
const getTunnellablePoints = (grid, outside, snakeN, color) => {
    const points = [];
    for (let x = grid.width; x--;)
        for (let y = grid.height; y--;) {
            const c = (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, x, y);
            if (!(0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(c) &&
                c <= color &&
                !points.some((p) => p.x === x && p.y === y)) {
                const tunnel = (0,_getBestTunnel__WEBPACK_IMPORTED_MODULE_3__.getBestTunnel)(grid, outside, x, y, color, snakeN);
                if (tunnel)
                    for (const p of tunnel)
                        if (!isEmptySafe(grid, p.x, p.y))
                            points.push(p);
            }
        }
    return points;
};
const getColorSafe = (grid, x, y) => (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(grid, x, y) ? (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, x, y) : 0;
const setEmptySafe = (grid, x, y) => {
    if ((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(grid, x, y))
        (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.setColorEmpty)(grid, x, y);
};
const isEmptySafe = (grid, x, y) => !(0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(grid, x, y) && (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, x, y));


/***/ }),

/***/ "../solver/clearResidualColoredLayer.ts":
/*!**********************************************!*\
  !*** ../solver/clearResidualColoredLayer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearResidualColoredLayer": () => (/* binding */ clearResidualColoredLayer),
/* harmony export */   "getTunnellablePoints": () => (/* binding */ getTunnellablePoints),
/* harmony export */   "getPriority": () => (/* binding */ getPriority)
/* harmony export */ });
/* harmony import */ var _snk_types_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/grid */ "../types/grid.ts");
/* harmony import */ var _snk_types_snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/snake */ "../types/snake.ts");
/* harmony import */ var _getBestTunnel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getBestTunnel */ "../solver/getBestTunnel.ts");
/* harmony import */ var _outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outside */ "../solver/outside.ts");
/* harmony import */ var _tunnel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tunnel */ "../solver/tunnel.ts");
/* harmony import */ var _getPathTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getPathTo */ "../solver/getPathTo.ts");






const clearResidualColoredLayer = (grid, outside, snake0, color) => {
    const snakeN = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getSnakeLength)(snake0);
    const tunnels = getTunnellablePoints(grid, outside, snakeN, color);
    // sort
    tunnels.sort((a, b) => b.priority - a.priority);
    const chain = [snake0];
    while (tunnels.length) {
        // get the best next tunnel
        let t = getNextTunnel(tunnels, chain[0]);
        // goes to the start of the tunnel
        chain.unshift(...(0,_getPathTo__WEBPACK_IMPORTED_MODULE_5__.getPathTo)(grid, chain[0], t[0].x, t[0].y));
        // goes to the end of the tunnel
        chain.unshift(...(0,_tunnel__WEBPACK_IMPORTED_MODULE_4__.getTunnelPath)(chain[0], t));
        // update grid
        for (const { x, y } of t)
            setEmptySafe(grid, x, y);
        // update outside
        (0,_outside__WEBPACK_IMPORTED_MODULE_3__.fillOutside)(outside, grid);
        // update tunnels
        for (let i = tunnels.length; i--;)
            if ((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, tunnels[i].x, tunnels[i].y)))
                tunnels.splice(i, 1);
            else {
                const t = tunnels[i];
                const tunnel = (0,_getBestTunnel__WEBPACK_IMPORTED_MODULE_2__.getBestTunnel)(grid, outside, t.x, t.y, color, snakeN);
                if (!tunnel)
                    tunnels.splice(i, 1);
                else {
                    t.tunnel = tunnel;
                    t.priority = getPriority(grid, color, tunnel);
                }
            }
        // re-sort
        tunnels.sort((a, b) => b.priority - a.priority);
    }
    chain.pop();
    return chain;
};
const getNextTunnel = (ts, snake) => {
    let minDistance = Infinity;
    let closestTunnel = null;
    const x = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getHeadX)(snake);
    const y = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getHeadY)(snake);
    const priority = ts[0].priority;
    for (let i = 0; ts[i] && ts[i].priority === priority; i++) {
        const t = ts[i].tunnel;
        const d = distanceSq(t[0].x, t[0].y, x, y);
        if (d < minDistance) {
            minDistance = d;
            closestTunnel = t;
        }
    }
    return closestTunnel;
};
/**
 * get all the tunnels for all the cells accessible
 */
const getTunnellablePoints = (grid, outside, snakeN, color) => {
    const points = [];
    for (let x = grid.width; x--;)
        for (let y = grid.height; y--;) {
            const c = (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, x, y);
            if (!(0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(c) && c < color) {
                const tunnel = (0,_getBestTunnel__WEBPACK_IMPORTED_MODULE_2__.getBestTunnel)(grid, outside, x, y, color, snakeN);
                if (tunnel) {
                    const priority = getPriority(grid, color, tunnel);
                    points.push({ x, y, priority, tunnel });
                }
            }
        }
    return points;
};
/**
 * get the score of the tunnel
 * prioritize tunnel with maximum color smaller than <color> and with minimum <color>
 * with some tweaks
 */
const getPriority = (grid, color, tunnel) => {
    let nColor = 0;
    let nLess = 0;
    for (let i = 0; i < tunnel.length; i++) {
        const { x, y } = tunnel[i];
        const c = getColorSafe(grid, x, y);
        if (!(0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(c) && i === tunnel.findIndex((p) => p.x === x && p.y === y)) {
            if (c === color)
                nColor += 1;
            else
                nLess += color - c;
        }
    }
    if (nColor === 0)
        return 99999;
    return nLess / nColor;
};
const distanceSq = (ax, ay, bx, by) => (ax - bx) ** 2 + (ay - by) ** 2;
const getColorSafe = (grid, x, y) => (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(grid, x, y) ? (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, x, y) : 0;
const setEmptySafe = (grid, x, y) => {
    if ((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(grid, x, y))
        (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.setColorEmpty)(grid, x, y);
};


/***/ }),

/***/ "../solver/getBestRoute.ts":
/*!*********************************!*\
  !*** ../solver/getBestRoute.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBestRoute": () => (/* binding */ getBestRoute)
/* harmony export */ });
/* harmony import */ var _snk_types_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/grid */ "../types/grid.ts");
/* harmony import */ var _outside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outside */ "../solver/outside.ts");
/* harmony import */ var _clearResidualColoredLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearResidualColoredLayer */ "../solver/clearResidualColoredLayer.ts");
/* harmony import */ var _clearCleanColoredLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearCleanColoredLayer */ "../solver/clearCleanColoredLayer.ts");




const getBestRoute = (grid0, snake0) => {
    const grid = (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.copyGrid)(grid0);
    const outside = (0,_outside__WEBPACK_IMPORTED_MODULE_1__.createOutside)(grid);
    const chain = [snake0];
    for (const color of extractColors(grid)) {
        if (color > 1)
            chain.unshift(...(0,_clearResidualColoredLayer__WEBPACK_IMPORTED_MODULE_2__.clearResidualColoredLayer)(grid, outside, chain[0], color));
        chain.unshift(...(0,_clearCleanColoredLayer__WEBPACK_IMPORTED_MODULE_3__.clearCleanColoredLayer)(grid, outside, chain[0], color));
    }
    return chain.reverse();
};
const extractColors = (grid) => {
    // @ts-ignore
    let maxColor = Math.max(...grid.data);
    return Array.from({ length: maxColor }, (_, i) => (i + 1));
};


/***/ }),

/***/ "../solver/getBestTunnel.ts":
/*!**********************************!*\
  !*** ../solver/getBestTunnel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBestTunnel": () => (/* binding */ getBestTunnel)
/* harmony export */ });
/* harmony import */ var _snk_types_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/grid */ "../types/grid.ts");
/* harmony import */ var _snk_types_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/point */ "../types/point.ts");
/* harmony import */ var _utils_sortPush__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/sortPush */ "../solver/utils/sortPush.ts");
/* harmony import */ var _snk_types_snake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @snk/types/snake */ "../types/snake.ts");
/* harmony import */ var _outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./outside */ "../solver/outside.ts");
/* harmony import */ var _tunnel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tunnel */ "../solver/tunnel.ts");






const getColorSafe = (grid, x, y) => (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(grid, x, y) ? (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, x, y) : 0;
const setEmptySafe = (grid, x, y) => {
    if ((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(grid, x, y))
        (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.setColorEmpty)(grid, x, y);
};
const unwrap = (m) => !m
    ? []
    : [...unwrap(m.parent), { x: (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_3__.getHeadX)(m.snake), y: (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_3__.getHeadY)(m.snake) }];
/**
 * returns the path to reach the outside which contains the least color cell
 */
const getSnakeEscapePath = (grid, outside, snake0, color) => {
    const openList = [{ snake: snake0, w: 0 }];
    const closeList = [];
    while (openList[0]) {
        const o = openList.shift();
        const x = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_3__.getHeadX)(o.snake);
        const y = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_3__.getHeadY)(o.snake);
        if ((0,_outside__WEBPACK_IMPORTED_MODULE_4__.isOutside)(outside, x, y))
            return unwrap(o);
        for (const a of _snk_types_point__WEBPACK_IMPORTED_MODULE_1__.around4) {
            const c = getColorSafe(grid, x + a.x, y + a.y);
            if (c <= color && !(0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_3__.snakeWillSelfCollide)(o.snake, a.x, a.y)) {
                const snake = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_3__.nextSnake)(o.snake, a.x, a.y);
                if (!closeList.some((s0) => (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_3__.snakeEquals)(s0, snake))) {
                    const w = o.w + 1 + +(c === color) * 1000;
                    (0,_utils_sortPush__WEBPACK_IMPORTED_MODULE_2__.sortPush)(openList, { snake, w, parent: o }, (a, b) => a.w - b.w);
                    closeList.push(snake);
                }
            }
        }
    }
    return null;
};
/**
 * compute the best tunnel to get to the cell and back to the outside ( best = less usage of <color> )
 *
 * notice that it's one of the best tunnels, more with the same score could exist
 */
const getBestTunnel = (grid, outside, x, y, color, snakeN) => {
    const c = { x, y };
    const snake0 = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_3__.createSnakeFromCells)(Array.from({ length: snakeN }, () => c));
    const one = getSnakeEscapePath(grid, outside, snake0, color);
    if (!one)
        return null;
    // get the position of the snake if it was going to leave the x,y cell
    const snakeICells = one.slice(0, snakeN);
    while (snakeICells.length < snakeN)
        snakeICells.push(snakeICells[snakeICells.length - 1]);
    const snakeI = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_3__.createSnakeFromCells)(snakeICells);
    // remove from the grid the colors that one eat
    const gridI = (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.copyGrid)(grid);
    for (const { x, y } of one)
        setEmptySafe(gridI, x, y);
    const two = getSnakeEscapePath(gridI, outside, snakeI, color);
    if (!two)
        return null;
    one.shift();
    one.reverse();
    one.push(...two);
    (0,_tunnel__WEBPACK_IMPORTED_MODULE_5__.trimTunnelStart)(grid, one);
    (0,_tunnel__WEBPACK_IMPORTED_MODULE_5__.trimTunnelEnd)(grid, one);
    return one;
};


/***/ }),

/***/ "../solver/getPathTo.ts":
/*!******************************!*\
  !*** ../solver/getPathTo.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPathTo": () => (/* binding */ getPathTo)
/* harmony export */ });
/* harmony import */ var _snk_types_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/grid */ "../types/grid.ts");
/* harmony import */ var _snk_types_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/point */ "../types/point.ts");
/* harmony import */ var _snk_types_snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @snk/types/snake */ "../types/snake.ts");
/* harmony import */ var _utils_sortPush__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/sortPush */ "../solver/utils/sortPush.ts");




/**
 * starting from snake0, get to the cell x,y
 * return the snake chain (reversed)
 */
const getPathTo = (grid, snake0, x, y) => {
    const openList = [{ snake: snake0, w: 0 }];
    const closeList = [];
    while (openList.length) {
        const c = openList.shift();
        const cx = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_2__.getHeadX)(c.snake);
        const cy = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_2__.getHeadY)(c.snake);
        for (let i = 0; i < _snk_types_point__WEBPACK_IMPORTED_MODULE_1__.around4.length; i++) {
            const { x: dx, y: dy } = _snk_types_point__WEBPACK_IMPORTED_MODULE_1__.around4[i];
            const nx = cx + dx;
            const ny = cy + dy;
            if (nx === x && ny === y) {
                // unwrap
                const path = [(0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_2__.nextSnake)(c.snake, dx, dy)];
                let e = c;
                while (e.parent) {
                    path.push(e.snake);
                    e = e.parent;
                }
                return path;
            }
            if ((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInsideLarge)(grid, 2, nx, ny) &&
                !(0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_2__.snakeWillSelfCollide)(c.snake, dx, dy) &&
                (!(0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(grid, nx, ny) || (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, nx, ny)))) {
                const nsnake = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_2__.nextSnake)(c.snake, dx, dy);
                if (!closeList.some((s) => (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_2__.snakeEquals)(nsnake, s))) {
                    const w = c.w + 1;
                    const h = Math.abs(nx - x) + Math.abs(ny - y);
                    const f = w + h;
                    const o = { snake: nsnake, parent: c, w, h, f };
                    (0,_utils_sortPush__WEBPACK_IMPORTED_MODULE_3__.sortPush)(openList, o, (a, b) => a.f - b.f);
                    closeList.push(nsnake);
                }
            }
        }
    }
};


/***/ }),

/***/ "../solver/getPathToPose.ts":
/*!**********************************!*\
  !*** ../solver/getPathToPose.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPathToPose": () => (/* binding */ getPathToPose)
/* harmony export */ });
/* harmony import */ var _snk_types_snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/snake */ "../types/snake.ts");
/* harmony import */ var _snk_types_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/grid */ "../types/grid.ts");
/* harmony import */ var _tunnel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tunnel */ "../solver/tunnel.ts");
/* harmony import */ var _snk_types_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @snk/types/point */ "../types/point.ts");
/* harmony import */ var _utils_sortPush__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/sortPush */ "../solver/utils/sortPush.ts");





const isEmptySafe = (grid, x, y) => !(0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_1__.isInside)(grid, x, y) || (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_1__.isEmpty)((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_1__.getColor)(grid, x, y));
const getPathToPose = (snake0, target, grid) => {
    if ((0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.snakeEquals)(snake0, target))
        return [];
    const targetCells = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.snakeToCells)(target).reverse();
    const snakeN = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getSnakeLength)(snake0);
    const box = {
        min: {
            x: Math.min((0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getHeadX)(snake0), (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getHeadX)(target)) - snakeN - 1,
            y: Math.min((0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getHeadY)(snake0), (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getHeadY)(target)) - snakeN - 1,
        },
        max: {
            x: Math.max((0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getHeadX)(snake0), (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getHeadX)(target)) + snakeN + 1,
            y: Math.max((0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getHeadY)(snake0), (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getHeadY)(target)) + snakeN + 1,
        },
    };
    const [t0, ...forbidden] = targetCells;
    forbidden.slice(0, 3);
    const openList = [{ snake: snake0, w: 0 }];
    const closeList = [];
    while (openList.length) {
        const o = openList.shift();
        const x = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getHeadX)(o.snake);
        const y = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getHeadY)(o.snake);
        if (x === t0.x && y === t0.y) {
            const path = [];
            let e = o;
            while (e) {
                path.push(e.snake);
                e = e.parent;
            }
            path.unshift(...(0,_tunnel__WEBPACK_IMPORTED_MODULE_2__.getTunnelPath)(path[0], targetCells));
            path.pop();
            path.reverse();
            return path;
        }
        for (let i = 0; i < _snk_types_point__WEBPACK_IMPORTED_MODULE_3__.around4.length; i++) {
            const { x: dx, y: dy } = _snk_types_point__WEBPACK_IMPORTED_MODULE_3__.around4[i];
            const nx = x + dx;
            const ny = y + dy;
            if (!(0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.snakeWillSelfCollide)(o.snake, dx, dy) &&
                (!grid || isEmptySafe(grid, nx, ny)) &&
                (grid
                    ? (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_1__.isInsideLarge)(grid, 2, nx, ny)
                    : box.min.x <= nx &&
                        nx <= box.max.x &&
                        box.min.y <= ny &&
                        ny <= box.max.y) &&
                !forbidden.some((p) => p.x === nx && p.y === ny)) {
                const snake = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.nextSnake)(o.snake, dx, dy);
                if (!closeList.some((s) => (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.snakeEquals)(snake, s))) {
                    const w = o.w + 1;
                    const h = Math.abs(nx - x) + Math.abs(ny - y);
                    const f = w + h;
                    (0,_utils_sortPush__WEBPACK_IMPORTED_MODULE_4__.sortPush)(openList, { f, w, snake, parent: o }, (a, b) => a.f - b.f);
                    closeList.push(snake);
                }
            }
        }
    }
};


/***/ }),

/***/ "../solver/outside.ts":
/*!****************************!*\
  !*** ../solver/outside.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOutside": () => (/* binding */ createOutside),
/* harmony export */   "fillOutside": () => (/* binding */ fillOutside),
/* harmony export */   "isOutside": () => (/* binding */ isOutside)
/* harmony export */ });
/* harmony import */ var _snk_types_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/grid */ "../types/grid.ts");
/* harmony import */ var _snk_types_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/point */ "../types/point.ts");


const createOutside = (grid, color = 0) => {
    const outside = (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.createEmptyGrid)(grid.width, grid.height);
    for (let x = outside.width; x--;)
        for (let y = outside.height; y--;)
            (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.setColor)(outside, x, y, 1);
    fillOutside(outside, grid, color);
    return outside;
};
const fillOutside = (outside, grid, color = 0) => {
    let changed = true;
    while (changed) {
        changed = false;
        for (let x = outside.width; x--;)
            for (let y = outside.height; y--;)
                if ((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, x, y) <= color &&
                    !isOutside(outside, x, y) &&
                    _snk_types_point__WEBPACK_IMPORTED_MODULE_1__.around4.some((a) => isOutside(outside, x + a.x, y + a.y))) {
                    changed = true;
                    (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.setColorEmpty)(outside, x, y);
                }
    }
    return outside;
};
const isOutside = (outside, x, y) => !(0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(outside, x, y) || (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(outside, x, y));


/***/ }),

/***/ "../solver/tunnel.ts":
/*!***************************!*\
  !*** ../solver/tunnel.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTunnelPath": () => (/* binding */ getTunnelPath),
/* harmony export */   "updateTunnel": () => (/* binding */ updateTunnel),
/* harmony export */   "trimTunnelStart": () => (/* binding */ trimTunnelStart),
/* harmony export */   "trimTunnelEnd": () => (/* binding */ trimTunnelEnd)
/* harmony export */ });
/* harmony import */ var _snk_types_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/grid */ "../types/grid.ts");
/* harmony import */ var _snk_types_snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/snake */ "../types/snake.ts");


/**
 * get the sequence of snake to cross the tunnel
 */
const getTunnelPath = (snake0, tunnel) => {
    const chain = [];
    let snake = snake0;
    for (let i = 1; i < tunnel.length; i++) {
        const dx = tunnel[i].x - (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getHeadX)(snake);
        const dy = tunnel[i].y - (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getHeadY)(snake);
        snake = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.nextSnake)(snake, dx, dy);
        chain.unshift(snake);
    }
    return chain;
};
/**
 * assuming the grid change and the colors got deleted, update the tunnel
 */
const updateTunnel = (grid, tunnel, toDelete) => {
    while (tunnel.length) {
        const { x, y } = tunnel[0];
        if (isEmptySafe(grid, x, y) ||
            toDelete.some((p) => p.x === x && p.y === y)) {
            tunnel.shift();
        }
        else
            break;
    }
    while (tunnel.length) {
        const { x, y } = tunnel[tunnel.length - 1];
        if (isEmptySafe(grid, x, y) ||
            toDelete.some((p) => p.x === x && p.y === y)) {
            tunnel.pop();
        }
        else
            break;
    }
};
const isEmptySafe = (grid, x, y) => !(0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(grid, x, y) || (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, x, y));
/**
 * remove empty cell from start
 */
const trimTunnelStart = (grid, tunnel) => {
    while (tunnel.length) {
        const { x, y } = tunnel[0];
        if (isEmptySafe(grid, x, y))
            tunnel.shift();
        else
            break;
    }
};
/**
 * remove empty cell from end
 */
const trimTunnelEnd = (grid, tunnel) => {
    while (tunnel.length) {
        const i = tunnel.length - 1;
        const { x, y } = tunnel[i];
        if (isEmptySafe(grid, x, y) ||
            tunnel.findIndex((p) => p.x === x && p.y === y) < i)
            tunnel.pop();
        else
            break;
    }
};


/***/ }),

/***/ "../solver/utils/sortPush.ts":
/*!***********************************!*\
  !*** ../solver/utils/sortPush.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortPush": () => (/* binding */ sortPush)
/* harmony export */ });
const sortPush = (arr, x, sortFn) => {
    let a = 0;
    let b = arr.length;
    if (arr.length === 0 || sortFn(x, arr[a]) <= 0) {
        arr.unshift(x);
        return;
    }
    while (b - a > 1) {
        const e = Math.ceil((a + b) / 2);
        const s = sortFn(x, arr[e]);
        if (s === 0)
            a = b = e;
        else if (s > 0)
            a = e;
        else
            b = e;
    }
    const e = Math.ceil((a + b) / 2);
    arr.splice(e, 0, x);
};


/***/ }),

/***/ "../svg-creator/grid.ts":
/*!******************************!*\
  !*** ../svg-creator/grid.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGrid": () => (/* binding */ createGrid)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../svg-creator/utils.ts");

const percent = (x) => (x * 100).toFixed(2);
const createGrid = (cells, { sizeBorderRadius, sizeDot, sizeCell }, duration) => {
    const svgElements = [];
    const styles = [
        `.c{
      shape-rendering: geometricPrecision;
      rx: ${sizeBorderRadius};
      ry: ${sizeBorderRadius};
      fill: var(--ce);
      stroke-width: 1px;
      stroke: var(--cb);
      animation: none ${duration}ms linear infinite;
    }`,
    ];
    let i = 0;
    for (const { x, y, color, t } of cells) {
        const id = t && "c" + (i++).toString(36);
        const s = sizeCell;
        const d = sizeDot;
        const m = (s - d) / 2;
        if (t !== null) {
            const animationName = id;
            styles.push(`@keyframes ${animationName} {` +
                `${percent(t - 0.0001)}%{fill:var(--c${color})}` +
                `${percent(t + 0.0001)}%,100%{fill:var(--ce)}` +
                "}", `.c.${id}{fill: var(--c${color}); animation-name: ${animationName}}`);
        }
        svgElements.push((0,_utils__WEBPACK_IMPORTED_MODULE_0__.h)("rect", {
            class: ["c", id].filter(Boolean).join(" "),
            x: x * s + m,
            y: y * s + m,
            width: d,
            height: d,
        }));
    }
    return { svgElements, styles };
};


/***/ }),

/***/ "../svg-creator/index.ts":
/*!*******************************!*\
  !*** ../svg-creator/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSvg": () => (/* binding */ createSvg)
/* harmony export */ });
/* harmony import */ var _snk_types_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/grid */ "../types/grid.ts");
/* harmony import */ var _snk_types_snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @snk/types/snake */ "../types/snake.ts");
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snake */ "../svg-creator/snake.ts");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid */ "../svg-creator/grid.ts");
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stack */ "../svg-creator/stack.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "../svg-creator/utils.ts");
/* harmony import */ var csso__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! csso */ "../../node_modules/csso/lib/index.js");
/* harmony import */ var csso__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(csso__WEBPACK_IMPORTED_MODULE_6__);







const getCellsFromGrid = ({ width, height }) => Array.from({ length: width }, (_, x) => Array.from({ length: height }, (_, y) => ({ x, y }))).flat();
const createLivingCells = (grid0, chain, drawOptions) => {
    var _a;
    const cells = ((_a = drawOptions.cells) !== null && _a !== void 0 ? _a : getCellsFromGrid(grid0)).map(({ x, y }) => ({
        x,
        y,
        t: null,
        color: (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid0, x, y),
    }));
    const grid = (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.copyGrid)(grid0);
    for (let i = 0; i < chain.length; i++) {
        const snake = chain[i];
        const x = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getHeadX)(snake);
        const y = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_1__.getHeadY)(snake);
        if ((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isInside)(grid, x, y) && !(0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.isEmpty)((0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.getColor)(grid, x, y))) {
            (0,_snk_types_grid__WEBPACK_IMPORTED_MODULE_0__.setColorEmpty)(grid, x, y);
            const cell = cells.find((c) => c.x === x && c.y === y);
            cell.t = i / chain.length;
        }
    }
    return cells;
};
const createSvg = (grid, chain, drawOptions, gifOptions) => {
    const width = (grid.width + 2) * drawOptions.sizeCell;
    const height = (grid.height + 5) * drawOptions.sizeCell;
    const duration = gifOptions.frameDuration * chain.length;
    const cells = createLivingCells(grid, chain, drawOptions);
    const elements = [
        (0,_grid__WEBPACK_IMPORTED_MODULE_3__.createGrid)(cells, drawOptions, duration),
        (0,_stack__WEBPACK_IMPORTED_MODULE_4__.createStack)(cells, drawOptions, grid.width * drawOptions.sizeCell, (grid.height + 2) * drawOptions.sizeCell, duration),
        (0,_snake__WEBPACK_IMPORTED_MODULE_2__.createSnake)(chain, drawOptions, duration),
    ];
    const viewBox = [
        -drawOptions.sizeCell,
        -drawOptions.sizeCell * 2,
        width,
        height,
    ].join(" ");
    const style = generateColorVar(drawOptions) +
        elements
            .map((e) => e.styles)
            .flat()
            .join("\n");
    const svg = [
        (0,_utils__WEBPACK_IMPORTED_MODULE_5__.h)("svg", {
            viewBox,
            width,
            height,
            xmlns: "http://www.w3.org/2000/svg",
        }).replace("/>", ">"),
        "<style>",
        optimizeCss(style),
        "</style>",
        ...elements.map((e) => e.svgElements).flat(),
        "</svg>",
    ].join("");
    return optimizeSvg(svg);
};
const optimizeCss = (css) => csso__WEBPACK_IMPORTED_MODULE_6___default().minify(css).css;
const optimizeSvg = (svg) => svg;
const generateColorVar = (drawOptions) => `
    :root {
    --cb: ${drawOptions.colorBorder};
    --cs: ${drawOptions.colorSnake};
    --ce: ${drawOptions.colorEmpty};
    ${Object.entries(drawOptions.colorDots)
    .map(([i, color]) => `--c${i}:${color};`)
    .join("")}
    }
    ` +
    (drawOptions.dark
        ? `
    @media (prefers-color-scheme: dark) {
      :root {
        --cb: ${drawOptions.dark.colorBorder || drawOptions.colorBorder};
        --cs: ${drawOptions.dark.colorSnake || drawOptions.colorSnake};
        --ce: ${drawOptions.dark.colorEmpty};
        ${Object.entries(drawOptions.dark.colorDots)
            .map(([i, color]) => `--c${i}:${color};`)
            .join("")}
      }
    }
`
        : "");


/***/ }),

/***/ "../svg-creator/snake.ts":
/*!*******************************!*\
  !*** ../svg-creator/snake.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSnake": () => (/* binding */ createSnake)
/* harmony export */ });
/* harmony import */ var _snk_types_snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @snk/types/snake */ "../types/snake.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../svg-creator/utils.ts");


const percent = (x) => (x * 100).toFixed(2);
const lerp = (k, a, b) => (1 - k) * a + k * b;
const createSnake = (chain, { sizeCell, sizeDot }, duration) => {
    const snakeN = chain[0] ? (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.getSnakeLength)(chain[0]) : 0;
    const snakeParts = Array.from({ length: snakeN }, () => []);
    for (const snake of chain) {
        const cells = (0,_snk_types_snake__WEBPACK_IMPORTED_MODULE_0__.snakeToCells)(snake);
        for (let i = cells.length; i--;)
            snakeParts[i].push(cells[i]);
    }
    const svgElements = snakeParts.map((_, i, { length }) => {
        // compute snake part size
        const dMin = sizeDot * 0.8;
        const dMax = sizeCell * 0.9;
        const iMax = Math.min(4, length);
        const u = (1 - Math.min(i, iMax) / iMax) ** 2;
        const s = lerp(u, dMin, dMax);
        const m = (sizeCell - s) / 2;
        const r = Math.min(4.5, (4 * s) / sizeDot);
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.h)("rect", {
            class: `s s${i}`,
            x: m.toFixed(1),
            y: m.toFixed(1),
            width: s.toFixed(1),
            height: s.toFixed(1),
            rx: r.toFixed(1),
            ry: r.toFixed(1),
        });
    });
    const transform = ({ x, y }) => `transform:translate(${x * sizeCell}px,${y * sizeCell}px)`;
    const styles = [
        `.s{ 
      shape-rendering:geometricPrecision;
      fill:var(--cs);
      animation: none linear ${duration}ms infinite
    }`,
        ...snakeParts.map((positions, i) => {
            const id = `s${i}`;
            const animationName = id;
            return [
                `@keyframes ${animationName} {` +
                    removeInterpolatedPositions(positions.map((tr, i, { length }) => ({ ...tr, t: i / length })))
                        .map((p) => `${percent(p.t)}%{${transform(p)}}`)
                        .join("") +
                    "}",
                `.s.${id}{${transform(positions[0])};animation-name: ${animationName}}`,
            ];
        }),
    ].flat();
    return { svgElements, styles };
};
const removeInterpolatedPositions = (arr) => arr.filter((u, i, arr) => {
    if (i - 1 < 0 || i + 1 >= arr.length)
        return true;
    const a = arr[i - 1];
    const b = arr[i + 1];
    const ex = (a.x + b.x) / 2;
    const ey = (a.y + b.y) / 2;
    // return true;
    return !(Math.abs(ex - u.x) < 0.01 && Math.abs(ey - u.y) < 0.01);
});


/***/ }),

/***/ "../svg-creator/stack.ts":
/*!*******************************!*\
  !*** ../svg-creator/stack.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStack": () => (/* binding */ createStack)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../svg-creator/utils.ts");

const percent = (x) => (x * 100).toFixed(2);
const createStack = (cells, { sizeDot }, width, y, duration) => {
    const svgElements = [];
    const styles = [
        `.u{ 
      transform-origin: 0 0;
      transform: scale(0,1);
      animation: none linear ${duration}ms infinite;
    }`,
    ];
    const stack = cells
        .slice()
        .filter((a) => a.t !== null)
        .sort((a, b) => a.t - b.t);
    const blocks = [];
    stack.forEach(({ color, t }) => {
        const latest = blocks[blocks.length - 1];
        if ((latest === null || latest === void 0 ? void 0 : latest.color) === color)
            latest.ts.push(t);
        else
            blocks.push({ color, ts: [t] });
    });
    const m = width / stack.length;
    let i = 0;
    let nx = 0;
    for (const { color, ts } of blocks) {
        const id = "u" + (i++).toString(36);
        const animationName = id;
        const x = (nx * m).toFixed(1);
        nx += ts.length;
        svgElements.push((0,_utils__WEBPACK_IMPORTED_MODULE_0__.h)("rect", {
            class: `u ${id}`,
            height: sizeDot,
            width: (ts.length * m + 0.6).toFixed(1),
            x,
            y,
        }));
        styles.push(`@keyframes ${animationName} {` +
            [
                ...ts.map((t, i, { length }) => [
                    { scale: i / length, t: t - 0.0001 },
                    { scale: (i + 1) / length, t: t + 0.0001 },
                ]),
                [{ scale: 1, t: 1 }],
            ]
                .flat()
                .map(({ scale, t }) => `${percent(t)}%{transform:scale(${scale.toFixed(2)},1)}`)
                .join("\n") +
            "}", `.u.${id}{fill:var(--c${color});animation-name:${animationName};transform-origin:${x}px 0}`);
    }
    return { svgElements, styles };
};


/***/ }),

/***/ "../svg-creator/utils.ts":
/*!*******************************!*\
  !*** ../svg-creator/utils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "toAttribute": () => (/* binding */ toAttribute)
/* harmony export */ });
const h = (element, attributes) => `<${element} ${toAttribute(attributes)}/>`;
const toAttribute = (o) => Object.entries(o)
    .filter(([, value]) => value !== null)
    .map(([name, value]) => `${name}="${value}"`)
    .join(" ");


/***/ }),

/***/ "../types/__fixtures__/createFromAscii.ts":
/*!************************************************!*\
  !*** ../types/__fixtures__/createFromAscii.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFromAscii": () => (/* binding */ createFromAscii)
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "../types/grid.ts");

const createFromAscii = (ascii) => {
    const a = ascii.split("\n");
    if (a[0] === "")
        a.shift();
    const height = a.length;
    const width = Math.max(...a.map((r) => r.length));
    const grid = (0,_grid__WEBPACK_IMPORTED_MODULE_0__.createEmptyGrid)(width, height);
    for (let x = width; x--;)
        for (let y = height; y--;) {
            const c = a[y][x];
            const color = (c === "#" && 3) || (c === "@" && 2) || (c === "." && 1) || +c;
            if (c)
                (0,_grid__WEBPACK_IMPORTED_MODULE_0__.setColor)(grid, x, y, color);
        }
    return grid;
};


/***/ }),

/***/ "../types/__fixtures__/grid.ts":
/*!*************************************!*\
  !*** ../types/__fixtures__/grid.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "simple": () => (/* binding */ simple),
/* harmony export */   "corner": () => (/* binding */ corner),
/* harmony export */   "enclaveN": () => (/* binding */ enclaveN),
/* harmony export */   "enclaveBorder": () => (/* binding */ enclaveBorder),
/* harmony export */   "enclaveM": () => (/* binding */ enclaveM),
/* harmony export */   "enclaveK": () => (/* binding */ enclaveK),
/* harmony export */   "enclaveU": () => (/* binding */ enclaveU),
/* harmony export */   "closedP": () => (/* binding */ closedP),
/* harmony export */   "closedU": () => (/* binding */ closedU),
/* harmony export */   "closedO": () => (/* binding */ closedO),
/* harmony export */   "tunnels": () => (/* binding */ tunnels),
/* harmony export */   "small": () => (/* binding */ small),
/* harmony export */   "smallPacked": () => (/* binding */ smallPacked),
/* harmony export */   "smallFull": () => (/* binding */ smallFull),
/* harmony export */   "realistic": () => (/* binding */ realistic),
/* harmony export */   "realisticFull": () => (/* binding */ realisticFull)
/* harmony export */ });
/* harmony import */ var park_miller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! park-miller */ "../../node_modules/park-miller/index.js");
/* harmony import */ var park_miller__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(park_miller__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grid */ "../types/grid.ts");
/* harmony import */ var _randomlyFillGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../randomlyFillGrid */ "../types/randomlyFillGrid.ts");
/* harmony import */ var _createFromAscii__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createFromAscii */ "../types/__fixtures__/createFromAscii.ts");




const colors = [1, 2, 3];
// empty small grid
const empty = (0,_grid__WEBPACK_IMPORTED_MODULE_1__.createEmptyGrid)(5, 5);
// empty small grid with a unique color at the middle
const simple = (0,_grid__WEBPACK_IMPORTED_MODULE_1__.createEmptyGrid)(5, 5);
(0,_grid__WEBPACK_IMPORTED_MODULE_1__.setColor)(simple, 2, 2, 1);
// empty small grid with color at each corner
const corner = (0,_grid__WEBPACK_IMPORTED_MODULE_1__.createEmptyGrid)(5, 5);
(0,_grid__WEBPACK_IMPORTED_MODULE_1__.setColor)(corner, 0, 4, 1);
(0,_grid__WEBPACK_IMPORTED_MODULE_1__.setColor)(corner, 4, 0, 1);
(0,_grid__WEBPACK_IMPORTED_MODULE_1__.setColor)(corner, 4, 4, 1);
(0,_grid__WEBPACK_IMPORTED_MODULE_1__.setColor)(corner, 0, 0, 1);
const enclaveN = (0,_createFromAscii__WEBPACK_IMPORTED_MODULE_3__.createFromAscii)(`

  #.#  
   #

`);
const enclaveBorder = (0,_createFromAscii__WEBPACK_IMPORTED_MODULE_3__.createFromAscii)(`
  #.#  
   #

`);
const enclaveM = (0,_createFromAscii__WEBPACK_IMPORTED_MODULE_3__.createFromAscii)(`

   ###  
  #   #
  # . #
  #   #
   # #
`);
const enclaveK = (0,_createFromAscii__WEBPACK_IMPORTED_MODULE_3__.createFromAscii)(`

  ####  
  # .#
  #  #
   # #
   # #
`);
const enclaveU = (0,_createFromAscii__WEBPACK_IMPORTED_MODULE_3__.createFromAscii)(`

  ####  
  #..#
  #..#
   #.#
   # #          .
`);
const closedP = (0,_createFromAscii__WEBPACK_IMPORTED_MODULE_3__.createFromAscii)(`

   ### 
  ##.#
  ## #
   ##
`);
const closedU = (0,_createFromAscii__WEBPACK_IMPORTED_MODULE_3__.createFromAscii)(`

  ####  
  #..#
  #..#
   #.#
   ###
`);
const closedO = (0,_createFromAscii__WEBPACK_IMPORTED_MODULE_3__.createFromAscii)(`

  #######  
  #     #
  #  .  #
  #     #
  #######
`);
const tunnels = (0,_createFromAscii__WEBPACK_IMPORTED_MODULE_3__.createFromAscii)(`

  ###   ###   ###    
  #.#   #.#   #.#
  #.#   ###   # #
`);
const createRandom = (width, height, emptyP) => {
    const grid = (0,_grid__WEBPACK_IMPORTED_MODULE_1__.createEmptyGrid)(width, height);
    const pm = new (park_miller__WEBPACK_IMPORTED_MODULE_0___default())(10);
    const random = pm.integerInRange.bind(pm);
    (0,_randomlyFillGrid__WEBPACK_IMPORTED_MODULE_2__.randomlyFillGrid)(grid, { colors, emptyP }, random);
    return grid;
};
// small realistic
const small = createRandom(10, 7, 3);
const smallPacked = createRandom(10, 7, 1);
const smallFull = createRandom(10, 7, 0);
// small realistic
const realistic = createRandom(52, 7, 3);
const realisticFull = createRandom(52, 7, 0);


/***/ }),

/***/ "../types/__fixtures__/snake.ts":
/*!**************************************!*\
  !*** ../types/__fixtures__/snake.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "snake1": () => (/* binding */ snake1),
/* harmony export */   "snake3": () => (/* binding */ snake3),
/* harmony export */   "snake4": () => (/* binding */ snake4),
/* harmony export */   "snake5": () => (/* binding */ snake5),
/* harmony export */   "snake9": () => (/* binding */ snake9)
/* harmony export */ });
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snake */ "../types/snake.ts");

const create = (length) => (0,_snake__WEBPACK_IMPORTED_MODULE_0__.createSnakeFromCells)(Array.from({ length }, (_, i) => ({ x: i, y: -1 })));
const snake1 = create(1);
const snake3 = create(3);
const snake4 = create(4);
const snake5 = create(5);
const snake9 = create(9);


/***/ }),

/***/ "../types/grid.ts":
/*!************************!*\
  !*** ../types/grid.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInside": () => (/* binding */ isInside),
/* harmony export */   "isInsideLarge": () => (/* binding */ isInsideLarge),
/* harmony export */   "copyGrid": () => (/* binding */ copyGrid),
/* harmony export */   "getColor": () => (/* binding */ getColor),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "setColor": () => (/* binding */ setColor),
/* harmony export */   "setColorEmpty": () => (/* binding */ setColorEmpty),
/* harmony export */   "isGridEmpty": () => (/* binding */ isGridEmpty),
/* harmony export */   "gridEquals": () => (/* binding */ gridEquals),
/* harmony export */   "createEmptyGrid": () => (/* binding */ createEmptyGrid)
/* harmony export */ });
const isInside = (grid, x, y) => x >= 0 && y >= 0 && x < grid.width && y < grid.height;
const isInsideLarge = (grid, m, x, y) => x >= -m && y >= -m && x < grid.width + m && y < grid.height + m;
const copyGrid = ({ width, height, data }) => ({
    width,
    height,
    data: Uint8Array.from(data),
});
const getIndex = (grid, x, y) => x * grid.height + y;
const getColor = (grid, x, y) => grid.data[getIndex(grid, x, y)];
const isEmpty = (color) => color === 0;
const setColor = (grid, x, y, color) => {
    grid.data[getIndex(grid, x, y)] = color || 0;
};
const setColorEmpty = (grid, x, y) => {
    setColor(grid, x, y, 0);
};
/**
 * return true if the grid is empty
 */
const isGridEmpty = (grid) => grid.data.every((x) => x === 0);
const gridEquals = (a, b) => a.data.every((_, i) => a.data[i] === b.data[i]);
const createEmptyGrid = (width, height) => ({
    width,
    height,
    data: new Uint8Array(width * height),
});


/***/ }),

/***/ "../types/point.ts":
/*!*************************!*\
  !*** ../types/point.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "around4": () => (/* binding */ around4),
/* harmony export */   "pointEquals": () => (/* binding */ pointEquals)
/* harmony export */ });
const around4 = [
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
];
const pointEquals = (a, b) => a.x === b.x && a.y === b.y;


/***/ }),

/***/ "../types/randomlyFillGrid.ts":
/*!************************************!*\
  !*** ../types/randomlyFillGrid.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomlyFillGrid": () => (/* binding */ randomlyFillGrid)
/* harmony export */ });
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid */ "../types/grid.ts");

const defaultRand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const randomlyFillGrid = (grid, { colors = [1, 2, 3], emptyP = 2, } = {}, rand = defaultRand) => {
    for (let x = grid.width; x--;)
        for (let y = grid.height; y--;) {
            const k = rand(-emptyP, colors.length - 1);
            if (k >= 0)
                (0,_grid__WEBPACK_IMPORTED_MODULE_0__.setColor)(grid, x, y, colors[k]);
            else
                (0,_grid__WEBPACK_IMPORTED_MODULE_0__.setColorEmpty)(grid, x, y);
        }
};


/***/ }),

/***/ "../types/snake.ts":
/*!*************************!*\
  !*** ../types/snake.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeadX": () => (/* binding */ getHeadX),
/* harmony export */   "getHeadY": () => (/* binding */ getHeadY),
/* harmony export */   "getSnakeLength": () => (/* binding */ getSnakeLength),
/* harmony export */   "copySnake": () => (/* binding */ copySnake),
/* harmony export */   "snakeEquals": () => (/* binding */ snakeEquals),
/* harmony export */   "nextSnake": () => (/* binding */ nextSnake),
/* harmony export */   "snakeWillSelfCollide": () => (/* binding */ snakeWillSelfCollide),
/* harmony export */   "snakeToCells": () => (/* binding */ snakeToCells),
/* harmony export */   "createSnakeFromCells": () => (/* binding */ createSnakeFromCells)
/* harmony export */ });
const getHeadX = (snake) => snake[0] - 2;
const getHeadY = (snake) => snake[1] - 2;
const getSnakeLength = (snake) => snake.length / 2;
const copySnake = (snake) => snake.slice();
const snakeEquals = (a, b) => {
    for (let i = 0; i < a.length; i++)
        if (a[i] !== b[i])
            return false;
    return true;
};
/**
 * return a copy of the next snake, considering that dx, dy is the direction
 */
const nextSnake = (snake, dx, dy) => {
    const copy = new Uint8Array(snake.length);
    for (let i = 2; i < snake.length; i++)
        copy[i] = snake[i - 2];
    copy[0] = snake[0] + dx;
    copy[1] = snake[1] + dy;
    return copy;
};
/**
 * return true if the next snake will collide with itself
 */
const snakeWillSelfCollide = (snake, dx, dy) => {
    const nx = snake[0] + dx;
    const ny = snake[1] + dy;
    for (let i = 2; i < snake.length - 2; i += 2)
        if (snake[i + 0] === nx && snake[i + 1] === ny)
            return true;
    return false;
};
const snakeToCells = (snake) => Array.from({ length: snake.length / 2 }, (_, i) => ({
    x: snake[i * 2 + 0] - 2,
    y: snake[i * 2 + 1] - 2,
}));
const createSnakeFromCells = (points) => {
    const snake = new Uint8Array(points.length * 2);
    for (let i = points.length; i--;) {
        snake[i * 2 + 0] = points[i].x + 2;
        snake[i * 2 + 1] = points[i].y + 2;
    }
    return snake;
};


/***/ }),

/***/ "./demo.json":
/*!*******************!*\
  !*** ./demo.json ***!
  \*******************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("[\"interactive\",\"getBestRoute\",\"getBestTunnel\",\"outside\",\"getPathToPose\",\"getPathTo\",\"svg\"]");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./demo.svg.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
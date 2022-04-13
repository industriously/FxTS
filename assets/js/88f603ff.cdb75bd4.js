"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4755],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return b}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=u(n),b=l,d=s["".concat(i,".").concat(b)]||s[b]||p[b]||o;return n?r.createElement(d,a(a({ref:t},f),{},{components:n})):r.createElement(d,a({ref:t},f))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5937:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return f},default:function(){return s}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"lt"},i=void 0,u={unversionedId:"lt",id:"lt",isDocsHomePage:!1,title:"lt",description:"lt() function",source:"@site/docs/lt.md",sourceDirName:".",slug:"/lt",permalink:"/docs/lt",tags:[],version:"current",frontMatter:{id:"lt"}},f=[{value:"lt() function",id:"lt-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:f};function s(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"lt-function"},"lt() function"),(0,o.kt)("p",null,"Returns true if the first argument is less than the second; false otherwise."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function lt(a: Date, b: Date): boolean;\n\ndeclare function lt(a: Date): (b: Date) => boolean;\n\ndeclare function lt(a: string, b: string): boolean;\n\ndeclare function lt(a: number, b: number): boolean;\n\ndeclare function lt(a: string): (b: string) => boolean;\n\ndeclare function lt(a: number): (b: number) => boolean;\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'lt(5, 1) // expected false\nlt(1, 5) // expected true\nlt("a", "b") // expected true\nlt("b", "a") // expected false\n\nfilter(lt(5), [1, 2, 4, 5, 8, 9]) // Iterable<[8, 9]>\nfilter(lt(7), [5, 6, 7]) // Iterable<[]>\nfilter(lt("b"), ["a", "b", "c"]) // Iterable<["c"]>\nfilter(lt("e"), ["b", "c", "d"]) // Itreable<[]>\n')))}s.isMDXComponent=!0}}]);
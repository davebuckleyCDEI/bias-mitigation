(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6qSS":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y})),n.d(t,"query",(function(){return v}));var r=n("q1tI"),a=n.n(r),o=n("A2+M"),c=n("Bl7J"),i=n("Wbzz"),l=n("T78C"),u=n.n(l),s=function(e){var t=e.next,n=e.previous;return n||t?a.a.createElement("div",{className:u.a.navigation},n&&a.a.createElement("span",{className:u.a.button},a.a.createElement(i.Link,{to:n.fields.slug},a.a.createElement("span",{className:u.a.iconPrev},"←"),a.a.createElement("span",{className:u.a.buttonText},n.frontmatter.title))),t&&a.a.createElement("span",{className:u.a.button},a.a.createElement(i.Link,{to:t.fields.slug},a.a.createElement("span",{className:u.a.buttonText},t.frontmatter.title),a.a.createElement("span",{className:u.a.iconNext},"→")))):null},f=(n("Vd3H"),n("efaq")),m=n("R5JE"),d=n.n(m),p=function(e){var t=f.data.allMdx.edges.filter((function(t){return t.node.fields.collection===e.collection})).sort((function(e,t){return e.node.frontmatter.order-t.node.frontmatter.order}));return a.a.createElement("div",{className:d.a.toc},a.a.createElement("h3",null,"Contents"),a.a.createElement("ul",{style:{marginLeft:0}},t.map((function(e){return a.a.createElement("li",null,a.a.createElement(i.Link,{activeClassName:d.a.activeTocItem,className:d.a.tocItem,to:e.node.fields.slug},e.node.frontmatter.title))}))))};function y(e){var t=e.data,n=e.pageContext,r=t.mdx,i=n.next,l=n.previous;return a.a.createElement(c.a,null,a.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"250px 1fr"}},a.a.createElement("div",{style:{gridColumn:1}},a.a.createElement(p,{collection:r.fields.collection})),a.a.createElement("div",{style:{gridColumn:2,minWidth:0}},a.a.createElement("h1",null,r.frontmatter.title),a.a.createElement(o.MDXRenderer,null,r.body),a.a.createElement(s,{next:i,previous:l}))))}var v="2474079033"},"8ypT":function(e,t,n){},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bl7J:function(e,t,n){"use strict";var r=n("f98A"),a=n("q1tI"),o=n.n(a),c=n("Wbzz"),i=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};i.defaultProps={siteTitle:""};var l=i;n("8ypT"),t.a=function(e){var t=e.children,n=r.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},o.a.createElement("main",null,t)))}},I5cv:function(e,t,n){var r=n("XKFU"),a=n("Kuth"),o=n("2OiF"),c=n("y3w9"),i=n("0/R4"),l=n("eeVq"),u=n("8MEG"),s=(n("dyZX").Reflect||{}).construct,f=l((function(){function e(){}return!(s((function(){}),[],e)instanceof e)})),m=!l((function(){s((function(){}))}));r(r.S+r.F*(f||m),"Reflect",{construct:function(e,t){o(e),c(t);var n=arguments.length<3?e:o(arguments[2]);if(m&&!f)return s(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(u.apply(e,r))}var l=n.prototype,d=a(i(l)?l:Object.prototype),p=Function.apply.call(e,d,t);return i(p)?p:d}})},R5JE:function(e,t,n){e.exports={toc:"toc-module--toc--1rBCH",tocItem:"toc-module--tocItem--22nlG",activeTocItem:"toc-module--activeTocItem--3VMKc"}},T78C:function(e,t,n){e.exports={navigation:"navigation-module--navigation--_yI7y",button:"navigation-module--button--N8FV6",iconNext:"navigation-module--iconNext--27P5X",iconPrev:"navigation-module--iconPrev--17i6k"}},X8hv:function(e,t,n){function r(e,t,n){return(r=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&o(a,n.prototype),a}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var f=n("q1tI"),m=n("7ljp"),d=m.useMDXComponents,p=m.mdx,y=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,o=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["scope","components","children"]),i=d(n),l=y(t),s=f.useMemo((function(){if(!a)return null;var e=u({React:f,mdx:p},l),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(c(t),[""+a])).apply(void 0,[{}].concat(c(n)))}),[a,t]);return f.createElement(s,u({components:i},o))}},efaq:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"collection":"finance","slug":"/finance/biased-model/"},"frontmatter":{"order":3,"title":"Training a biased model"}}},{"node":{"fields":{"collection":"finance","slug":"/finance/data/"},"frontmatter":{"order":2,"title":"The Adult data set"}}},{"node":{"fields":{"collection":"finance","slug":"/finance/intro/"},"frontmatter":{"order":1,"title":"Introduction"}}},{"node":{"fields":{"collection":"recruiting","slug":"/recruiting/intro/"},"frontmatter":{"order":1,"title":"Introduction"}}}]}}}')},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"CDEI Bias Exploration"}}}}')}}]);
//# sourceMappingURL=component---src-templates-post-js-0c0087676d0435f0a161.js.map
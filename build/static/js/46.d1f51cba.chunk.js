"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[46],{7046:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return p}});var u=r(8152),a=r(1523),i=r(9271),s=r(2791),l=r(3708),f=r(184),p=function(){var e=(0,i.k6)(),t=(0,i.TH)(),r=(0,s.useState)(""),n=(0,u.Z)(r,2),c=n[0],p=n[1],h=(0,s.useState)([]),b=(0,u.Z)(h,2),j=b[0],y=b[1],O=t.search,m=new URLSearchParams(O).get("query");return(0,s.useEffect)((function(){m&&(l.Z.searchQuery=m,l.Z.fetchMovieByKeyWord().then(y))}),[m]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(r){r.preventDefault(),c&&(e.push(o(o({},t),{},{search:"query=".concat(c)})),p(""))},children:[(0,f.jsx)("input",{onChange:function(e){p(e.target.value)},value:c,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,f.jsx)("button",{type:"submit",children:(0,f.jsx)("span",{children:"Search"})})]}),(0,f.jsx)("ul",{children:!!j.length&&j.map((function(e){var t=e.id,r=e.title,n=e.original_title;return(0,f.jsx)("li",{children:(0,f.jsx)(a.rU,{to:"/movies/".concat(t),children:r||n})},t)}))})]})}}}]);
//# sourceMappingURL=46.d1f51cba.chunk.js.map
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[687],{8066:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(8683),o=r(8152),c=r(9271),a=r(2791),s="MoviesPage_section__sga1t",u="MoviesPage_form__DAJ-L",i="MoviesPage_input__LYbnb",l="MoviesPage_button__AoqFR",f=r(3708),p=r(3545),b=r(184),h=(0,a.lazy)((function(){return r.e(384).then(r.bind(r,7384))})),g=function(){var e=(0,c.k6)(),t=(0,c.TH)(),r=(0,a.useState)(""),g=(0,o.Z)(r,2),y=g[0],j=g[1],O=(0,a.useState)([]),d=(0,o.Z)(O,2),v=d[0],m=d[1],P=t.search,w=new URLSearchParams(P).get("query");console.log("\ud83d\ude80 ~ query",w);return(0,a.useEffect)((function(){w&&(f.Z.searchQuery=w,f.Z.fetchMovieByKeyWord().then(m))}),[w]),(0,b.jsxs)("section",{className:s,children:[(0,b.jsxs)("form",{className:u,onSubmit:function(r){r.preventDefault(),y&&(e.push((0,n.Z)((0,n.Z)({},t),{},{search:"query=".concat(y)})),j(""))},children:[(0,b.jsx)("input",{className:i,onChange:function(e){j(e.target.value)},value:y,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,b.jsx)("button",{type:"submit",className:l,children:(0,b.jsx)("span",{children:"Search"})})]}),!!v.length&&(0,b.jsx)(a.Suspense,{fallback:(0,b.jsx)(p.Bb,{height:"100",width:"100",color:"#465298",ariaLabel:"loading",wrapperClass:"loading"}),children:(0,b.jsx)(h,{movies:v})})]})}},8683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=movie-page.0dc21fa3.chunk.js.map
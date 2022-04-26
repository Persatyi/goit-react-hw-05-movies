"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[347],{470:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var n=a(8683),i=a(8152),s=a(1523),r=a(9271),o=a(2791),c=a(3708),l="MovieDetailsPage_section__JvHpv",d="MovieDetailsPage_backBtn__Qk7Ac",u="MovieDetailsPage_wrapper__f+Pg+",v="MovieDetailsPage_contentWrapper__X5ofB",p="MovieDetailsPage_mainTitle__uB8N+",h="MovieDetailsPage_rating__G-4J6",_="MovieDetailsPage_overview__lkFzk",f="MovieDetailsPage_genres__sazRd",g="MovieDetailsPage_addon__Y5G6O",j="MovieDetailsPage_addonInfoWrapper__0mmBt",m="MovieDetailsPage_cast__YzvqS",b="MovieDetailsPage_reviews__1IUpX MovieDetailsPage_cast__YzvqS",x="MovieDetailsPage_active__9aQT1",w=a(3829),P=a(3545),O=a(184),D=(0,o.lazy)((function(){return a.e(277).then(a.bind(a,8067))})),y=(0,o.lazy)((function(){return a.e(912).then(a.bind(a,2730))})),M=(0,o.lazy)((function(){return a.e(942).then(a.bind(a,3946))})),N=function(){var e=(0,r.$B)().url,t=(0,r.UO)().movieId,a=(0,r.TH)(),N=(0,r.k6)(),k=(0,o.useState)(null),B=(0,i.Z)(k,2),C=B[0],S=B[1];(0,o.useEffect)((function(){t&&c.Z.fetchMoviesById(t).then(S)}),[t]);return(0,O.jsxs)("section",{className:l,children:[(0,O.jsx)("button",{className:d,type:"button",onClick:function(){var e,t,n="/",i=null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.pathname,s=null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.search;i&&s?n="".concat(i).concat(s):i&&(n="".concat(i)),N.push(n)},children:"Back"}),C?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("div",{className:u,children:[(0,O.jsx)("img",{src:C.poster_path?"https://image.tmdb.org/t/p/w500".concat(C.poster_path):w,alt:C.original_title,width:"300px"}),(0,O.jsxs)("div",{className:v,children:[(0,O.jsxs)("h2",{className:p,children:[C.title||C.name||C.original_name||C.original_title,"(",new Date(C.release_date||C.first_air_date).getFullYear(),")"]}),(0,O.jsxs)("p",{className:h,children:["User Score: ",Math.round(C.vote_average/10*100),"%"]}),(0,O.jsx)("h2",{className:_,children:"Overview"}),(0,O.jsx)("p",{children:C.overview||"Data not found"}),(0,O.jsx)("h2",{className:f,children:"Genres"}),(0,O.jsx)("p",{children:C.genres.map((function(e){return e.name})).join(" ")||"Data not found"})]})]}),(0,O.jsx)("hr",{}),(0,O.jsx)("p",{className:g,children:"Additional information"}),(0,O.jsxs)("div",{className:j,children:[(0,O.jsx)(s.OL,{to:{pathname:"".concat(e,"/cast"),state:(0,n.Z)({},a.state)},className:m,activeClassName:x,children:"Cast"}),(0,O.jsx)(s.OL,{to:{pathname:"".concat(e,"/reviews"),state:(0,n.Z)({},a.state)},className:b,activeClassName:x,children:"Reviews"})]}),(0,O.jsx)("hr",{})]}):(0,O.jsx)(o.Suspense,{fallback:(0,O.jsx)(P.Bb,{height:"100",width:"100",color:"#465298",ariaLabel:"loading",wrapperClass:"loading"}),children:(0,O.jsx)(M,{})}),(0,O.jsxs)(o.Suspense,{fallback:(0,O.jsx)(P.Bb,{height:"100",width:"100",color:"#465298",ariaLabel:"loading",wrapperClass:"loading"}),children:[(0,O.jsx)(r.AW,{path:"/movies/:movieId/cast",children:(0,O.jsx)(D,{})}),(0,O.jsx)(r.AW,{path:"/movies/:movieId/reviews",children:(0,O.jsx)(y,{})})]})]})}},3829:function(e,t,a){e.exports=a.p+"static/media/not_found_ver.ab1fa65686d030bafacd.jpg"},8683:function(e,t,a){function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=movie-details-page.c0c98ca4.chunk.js.map
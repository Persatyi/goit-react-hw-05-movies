"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[912],{2730:function(e,s,t){t.r(s),t.d(s,{default:function(){return l}});var i=t(8152),n=t(9271),r=t(2791),a=t(3708),c="Reviews_list__y9bNJ",h="Reviews_item__uDrEs",o="Reviews_author__1KU0M",u=t(184),l=function(){var e=(0,n.UO)().movieId,s=(0,r.useState)([]),t=(0,i.Z)(s,2),l=t[0],v=t[1];return(0,r.useEffect)((function(){e&&(a.Z.movieId=e,a.Z.fetchMovieReviews("reviews").then(v))}),[e]),(0,u.jsx)("ul",{className:c,children:l.length?l.map((function(e){var s=e.author,t=e.content,i=e.author_details,n=e.id;return(0,u.jsxs)("li",{className:h,children:[(0,u.jsx)("h3",{className:o,children:s||i.name}),(0,u.jsx)("p",{children:t||"oops, there is no content from this author..."})]},n)})):(0,u.jsx)("li",{children:(0,u.jsx)("p",{children:"We don't have any reviews for this movie"})})})}}}]);
//# sourceMappingURL=reviews.a5dc335d.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[147],{5147:function(e,t,i){i.r(t),i.d(t,{default:function(){return x}});var n=i(8152),r=i(1523),s=i(9271),a=i(2791),c=i(3708),o=i(3829),h=i(184),l=function(){var e=(0,s.UO)().movieId,t=(0,a.useState)([]),i=(0,n.Z)(t,2),r=i[0],l=i[1];return(0,a.useEffect)((function(){c.Z.movieId=e,c.Z.fetchMovieCast("credits").then(l)}),[e]),(0,h.jsx)("ul",{children:r.length?r.map((function(e){var t=e.id,i=e.name,n=e.profile_path,r=e.original_name,s=e.character;return(0,h.jsxs)("li",{children:[(0,h.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500".concat(n):o,alt:i,width:"200px"}),(0,h.jsx)("p",{children:i||r}),(0,h.jsxs)("p",{children:["Character: ",s||"not found..."]})]},t)})):(0,h.jsx)("li",{children:(0,h.jsx)("p",{children:"We don't have any cast for this movie"})})})},d=function(){var e=(0,s.UO)().movieId,t=(0,a.useState)([]),i=(0,n.Z)(t,2),r=i[0],o=i[1];return(0,a.useEffect)((function(){c.Z.movieId=e,c.Z.fetchMovieReviews("reviews").then(o)}),[e]),(0,h.jsx)("ul",{children:r.length?r.map((function(e){var t=e.author,i=e.content,n=e.author_details,r=e.id;return(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:t||n.name}),(0,h.jsx)("p",{children:i||"oops, there is no content from this author..."})]},r)})):(0,h.jsx)("li",{children:(0,h.jsx)("p",{children:"We don't have any reviews for this movie"})})})},u="MovieDetailsPage_backBtn__MYMio",x=function(){var e=(0,s.$B)().url,t=(0,s.UO)().movieId,i=(0,s.k6)(),x=(0,a.useState)(null),j=(0,n.Z)(x,2),p=j[0],v=j[1];(0,a.useEffect)((function(){c.Z.fetchMoviesById(t).then(v)}),[t]);return(0,h.jsxs)("div",{children:[p&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:u,type:"button",onClick:function(){i.push("/")},children:"Back"}),(0,h.jsx)("img",{src:p.poster_path?"https://image.tmdb.org/t/p/w500".concat(p.poster_path):o,alt:p.original_title,width:"300px"}),(0,h.jsxs)("h2",{children:[p.title||p.name||p.original_name||p.original_title,"(",new Date(p.release_date||p.first_air_date).getFullYear(),")"]}),(0,h.jsxs)("p",{children:["User Score: ",Math.round(p.vote_average/10*100),"%"]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:p.overview}),(0,h.jsx)("h2",{children:"Genres"}),(0,h.jsx)("p",{children:p.genres.map((function(e){return e.name})).join(" ")})]}),(0,h.jsx)("hr",{}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("p",{children:"Additional information"})}),(0,h.jsx)("li",{children:(0,h.jsx)(r.OL,{to:"".concat(e,"/cast"),children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(r.OL,{to:"".concat(e,"/reviews"),children:"Reviews"})})]}),(0,h.jsx)("hr",{}),(0,h.jsx)(s.AW,{path:"/movies/:movieId/cast",children:(0,h.jsx)(l,{})}),(0,h.jsx)(s.AW,{path:"/movies/:movieId/reviews",children:(0,h.jsx)(d,{})})]})}},3829:function(e,t,i){e.exports=i.p+"static/media/not_found_ver.ab1fa65686d030bafacd.jpg"}}]);
//# sourceMappingURL=147.9c2069b7.chunk.js.map
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[277],{8067:function(a,e,s){s.r(e),s.d(e,{default:function(){return f}});var t=s(8152),c=s(9271),n=s(2791),r=s(3708),i="Cast_list__EHUum",l="Cast_item__--Xbk",h="Cast_img__fgPSU",m="Cast_name__myp80",_="Cast_character__gcBSC",u="Cast_characterWrap__WB4Fr",d=s(3829),o=s(184),f=function(){var a=(0,c.UO)().movieId,e=(0,n.useState)([]),s=(0,t.Z)(e,2),f=s[0],p=s[1];return(0,n.useEffect)((function(){r.Z.movieId=a,r.Z.fetchMovieCast("credits").then(p)}),[a]),(0,o.jsx)("ul",{className:i,children:f.length?f.map((function(a){var e=a.id,s=a.name,t=a.profile_path,c=a.original_name,n=a.character;return(0,o.jsxs)("li",{className:l,children:[(0,o.jsx)("img",{className:h,src:t?"https://image.tmdb.org/t/p/w500".concat(t):d,alt:s,width:"200px"}),(0,o.jsx)("p",{className:m,children:s||c}),(0,o.jsxs)("p",{className:u,children:[(0,o.jsx)("span",{className:_,children:"Character: "}),n||"not found..."]})]},e)})):(0,o.jsx)("li",{children:(0,o.jsx)("p",{children:"We don't have any cast for this movie"})})})}}}]);
//# sourceMappingURL=cast.7c8654fb.chunk.js.map
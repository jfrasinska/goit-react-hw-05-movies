"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[121],{242:function(r,t,e){e.d(t,{Df:function(){return s},TP:function(){return f},tx:function(){return l},z1:function(){return p},zv:function(){return v}});var n=e(861),c=e(757),a=e.n(c),u=e(340),o="95c03fa8f220c74a490bfd1f71b00bf8",i="https://api.themoviedb.org/3",s=function(){var r=(0,n.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.abrupt("return",{});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(a().mark((function r(t){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},121:function(r,t,e){e.r(t);var n=e(439),c=e(791),a=e(87),u=e(242),o=e(184);t.default=function(){var r=(0,c.useState)([]),t=(0,n.Z)(r,2),e=t[0],i=t[1];return(0,c.useEffect)((function(){(0,u.Df)().then((function(r){return i(r)}))}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Popular Movies Today"}),(0,o.jsx)("ul",{children:e.map((function(r){return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(r.id),children:r.title})},r.id)}))})]})}}}]);
//# sourceMappingURL=121.ee9b9b02.chunk.js.map
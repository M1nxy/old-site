(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{258:function(t,e,r){"use strict";var n=r(2),o=r(259);n({target:"String",proto:!0,forced:r(260)("link")},{link:function(t){return o(this,"a","href",t)}})},259:function(t,e,r){var n=r(5),o=r(23),l=r(13),c=/"/g,f=n("".replace);t.exports=function(t,e,r,n){var h=l(o(t)),v="<"+e;return""!==r&&(v+=" "+r+'="'+f(l(n),c,"&quot;")+'"'),v+">"+h+"</"+e+">"}},260:function(t,e,r){var n=r(3);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},265:function(t,e,r){"use strict";r.r(e);r(34),r(58),r(258);var n={name:"ProjectCard",props:["month","title","description","link"]},o=r(43),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full basis-1/1 grow lg:basis-1/3 shadow bg-base-100 rounded-lg p-10 flex flex-col justify-between"},[e("h2",{staticClass:"font-sm font-bold text-highlight"},[t._v(t._s(t.month))]),t._v(" "),e("h2",{staticClass:"text-3xl font-bold text-current",attrs:{id:"work"}},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"section-paragraph"},[t._v(t._s(t.description))]),t._v(" "),e("br"),t._v(" "),e("a",{staticClass:"text-gray-400 hover:text-selected-text after:content-['_↗']",attrs:{href:t.link,target:"_blank"}},[t._v("Visit the project")])])}),[],!1,null,"038bcfff",null);e.default=component.exports}}]);
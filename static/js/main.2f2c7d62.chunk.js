(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(34);a.a=function(e){return l.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},,,,,,,function(e,a,t){e.exports=t.p+"static/media/square1Image.912af16a.jpg"},function(e,a,t){e.exports=t.p+"static/media/square2Image.f358e586.jpg"},function(e,a,t){e.exports=t.p+"static/media/square3Image.012ed890.jpg"},,function(e,a,t){e.exports=t(47)},,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/resumeImage.85f85648.jpg"},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),o=(t(31),t(2)),i=t(7),m=t(19),s=t(15);t(35);var u=function(e){return l.a.createElement("div",{className:"cardLink"},l.a.createElement(s.a,{className:"homeCard"},l.a.createElement("a",{href:e.link,target:e.newTab,rel:"noopener noreferrer",download:e.download},l.a.createElement("div",{className:"homeCardTop"},l.a.createElement("img",{src:e.src,alt:"There is suppose to be something here"}),l.a.createElement("div",{className:"wordInImage"},e.title)),l.a.createElement("div",{className:"homeCardBottom"},l.a.createElement("p",null,e.description)))))},d=t(22),E=t.n(d),p=t(23),f=t.n(p),h=t(24),v=t.n(h),g="Home Header Name",w="Square 1",N="Square 1 Description",k="/",b="Square 2",y="Square 2 Description",C="/",I={title:"Square 3",description:"Square 3 Description",path:"/",isImageDownload:"no"};t(36);var S=function(){var e,a=g,n=w,r=N,c=k,o=b,i=y,m=C,s=I;try{e="yes"===s.isImageDownload?t(37):s.path||"/"}catch(d){console.log("isImageDownload property was set to yes. However, there was no image named 'resumeImage.jpg' to download in the images folder. Please your config input in homeConfig")}return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"homeHeader"},l.a.createElement("h1",null,a)),l.a.createElement("div",{className:"homeMain"},l.a.createElement("div",{className:"homeMainLeft"},l.a.createElement(u,{src:E.a,title:n,description:r,link:c})),l.a.createElement("div",{className:"homeMainCenter"},l.a.createElement(u,{src:f.a,title:o,description:i,link:m,download:!1})),l.a.createElement("div",{className:"homeMainRight"},l.a.createElement(u,{src:v.a,title:s.title,description:s.description,link:e,download:"yes"===s.isImageDownload.toLowerCase()}))))},_=t(14),q=(t(38),function(e){return l.a.createElement("header",{className:"main-header"},e.children)});t(39);var x=function(e){return l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement(i.c,{to:"/",exact:!0},"Home")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/contact"},"Contact")))};t(42);var j=function(e){var a=l.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children);return c.a.createPortal(a,document.getElementById("drawer-hook"))},D=(t(43),function(e){return c.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),B=(t(44),"Sample Site"),H=function(e){var a=B,t=Object(n.useState)(!1),r=Object(_.a)(t,2),c=r[0],o=r[1],m=function(){o(!1)};return l.a.createElement(l.a.Fragment,null,c&&l.a.createElement(D,{onClick:m}),c&&l.a.createElement(j,{onClick:m},l.a.createElement("nav",{className:"main-navigation__drawer-nav"},l.a.createElement(x,null))),l.a.createElement(q,null,l.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){o(!0)}},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("h1",{className:"main-navigation__title"},l.a.createElement(i.b,{to:"/"},a)),l.a.createElement("nav",{className:"main-navigation__header-nav"},l.a.createElement(x,null))))},M=(t(45),function(e){return l.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},l.a.createElement("div",{className:"lds-dual-ring"}))}),P=(t(46),"Title"),T=l.a.lazy((function(){return t.e(5).then(t.bind(null,87))})),F=l.a.lazy((function(){return Promise.all([t.e(2),t.e(4)]).then(t.bind(null,86))}));var L=function(){var e=P,a=l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",exact:!0},l.a.createElement(S,null)),l.a.createElement(o.b,{path:"/about",exact:!0},l.a.createElement(T,null)),l.a.createElement(o.b,{path:"/contact",exact:!0},l.a.createElement(F,null)),l.a.createElement(o.a,{to:"/"}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement("title",null,e)),l.a.createElement(i.a,null,l.a.createElement(H,null),l.a.createElement("main",null,l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",{className:"center"},l.a.createElement(M,null))},a))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,3]]]);
//# sourceMappingURL=main.2f2c7d62.chunk.js.map
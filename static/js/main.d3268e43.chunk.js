(this["webpackJsonpapi-fun"]=this["webpackJsonpapi-fun"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(4),s=n.n(c),a=(n(14),n(3)),i=n.n(a),o=n(5),u=n(6),l=n(7),h=n(9),j=n(8),d=n(0),p=function(e){var t=e.name,n=e.gender,r=e.birthYear,c=e.url;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{children:["Name: ",t]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["Gender: ",n]}),Object(d.jsxs)("h3",{children:["Birth Year: ",r]})]}),Object(d.jsxs)("p",{children:["details: ",Object(d.jsx)("a",{href:c,children:c})]})]})},b=function(e){var t=e.array;return Object(d.jsxs)(d.Fragment,{children:[console.log(t),t.map((function(e,n){return Object(d.jsx)(p,{name:t[n].name,gender:t[n].gender,birthYear:t[n].birth_year,url:t[n].url},n)}))]})},f=(n(17),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={characters:[]},console.log(e.state),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){function e(){return(e=Object(o.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://swapi.dev/api/people/");case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,console.log(r),t.setState({characters:r.results}),console.log("done!"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("Unsuccessful at getData",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(this)}},{key:"render",value:function(){var e=this.state.characters;return console.log(this.state),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Hello"}),Object(d.jsx)(b,{array:e})]})}}]),n}(r.Component)),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};s.a.render(Object(d.jsx)(f,{}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.d3268e43.chunk.js.map
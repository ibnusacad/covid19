(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{1:function(e,t,a){e.exports={container:"Cards_container__rICdi",card:"Cards_card__vgFOt",title:"Cards_title__qGkiD",countUp:"Cards_countUp__3aX-A",date:"Cards_date__1Uhhk",infected:"Cards_infected__3YOR1",recovered:"Cards_recovered__2JcRm",deaths:"Cards_deaths__33Vnt",active:"Cards_active__tbEDC"}},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(59),o=a.n(c),s=a(2),u=a.n(s),i=a(5),l=a(60),d=a(61),p=a(67),m=a(68),v=a(13),f=a.n(v),h=a(1),_=a.n(h),E=a(14),b=a.n(E),g=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:_.a.container},r.a.createElement("div",{className:b()(_.a.card,_.a.infected)},r.a.createElement("div",{className:_.a.title},"Infected Cases"),r.a.createElement("div",{className:_.a.countUp},r.a.createElement(f.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement("p",{className:_.a.date},new Date(o).toDateString())),r.a.createElement("div",{className:b()(_.a.card,_.a.active)},r.a.createElement("div",{className:_.a.title},"Active Cases"),r.a.createElement("div",{className:_.a.countUp},r.a.createElement(f.a,{start:0,end:a.value-(c.value+n.value),duration:2.5,separator:","})),r.a.createElement("p",{className:_.a.date},new Date(o).toDateString())),r.a.createElement("div",{className:b()(_.a.card,_.a.recovered)},r.a.createElement("div",{className:_.a.title},"Recovered Cases"),r.a.createElement("div",{className:_.a.countUp},r.a.createElement(f.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement("p",{className:_.a.date},new Date(o).toDateString())),r.a.createElement("div",{className:b()(_.a.card,_.a.deaths)},r.a.createElement("div",{className:_.a.title},"Deaths Cases"),r.a.createElement("div",{className:_.a.countUp},r.a.createElement(f.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement("p",{className:_.a.date},new Date(o).toDateString()))):r.a.createElement("h1",null,"Loading")},C=a(21),y=a(22),x=a.n(y),N="https://covid19.mathdro.id/api",w=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,x.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,l={confirmed:c,recovered:o,deaths:s,lastUpdate:i},e.abrupt("return",l);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),j=a(32),D=a(63),S=a.n(D),U=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,l=Object(n.useState)([]),d=Object(C.a)(l,2),p=d[0],m=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,k();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=p.length?r.a.createElement(j.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,f=a?r.a.createElement(j.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgb(0,0,249)","rgb(0,249,0)","rgb(249,0,0)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:S.a.container},s?f:v)},I=a(64),A=a.n(I),J=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(C.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement("div",{className:A.a.container},r.a.createElement("select",{onClick:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{type:"button",key:t,value:e},e)}))))},R=a(65),G=a.n(R),q=a(33),B=a.n(q),H=a(66),L=a.n(H),M=function(){return r.a.createElement("div",{className:B.a.header},r.a.createElement("img",{className:B.a.image,src:L.a,alt:"covoravirus"}))},P=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:G.a.container},r.a.createElement(M,null),r.a.createElement("div",null,r.a.createElement("h2",null,"Select a country "),r.a.createElement(J,{handleCountryChange:this.handleCountryChange})),r.a.createElement(g,{data:t}),r.a.createElement(U,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))},33:function(e,t,a){e.exports={header:"Header_header__11zI9",image:"Header_image__Ja4jc"}},63:function(e,t,a){e.exports={container:"Chart_container__m4fDu"}},64:function(e,t,a){e.exports={container:"CountryPicker_container__2cBqL"}},65:function(e,t,a){e.exports={container:"App_container__21_Ga",section:"App_section__2YS25"}},66:function(e,t,a){e.exports=a.p+"static/media/coronavirus.34967c3b.png"},69:function(e,t,a){e.exports=a(187)}},[[69,1,2]]]);
//# sourceMappingURL=main.bfd4f974.chunk.js.map
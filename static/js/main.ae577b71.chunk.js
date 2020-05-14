(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{192:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(24),l=t.n(s),c=(t(79),t(80),t(197));var i=function(e){return r.a.createElement(c.a,{bg:"dark",variant:"dark"},r.a.createElement(c.a.Brand,{href:"#"},"COVID 19 Tracker - India"))},d=t(6),o=t.n(d),m=t(10),g=t(65),u=t(66),p=t(70),b=t(72),h=t(194),f=t(67),v=t.n(f),E=t(195),w=t(196);var N=function(e){return r.a.createElement(h.a,{style:{fontSize:"150%",fontStyle:"bold",margin:"10px 0px 10px 0px",background:"#FFFFFF"}},r.a.createElement(E.a,null,r.a.createElement(w.a,null,"Total : ",e.summary.total),r.a.createElement(w.a,null,"Indians : ",e.summary.confirmedCasesIndian),r.a.createElement(w.a,null,"Foreign : ",e.summary.confirmedCasesForeign),r.a.createElement(w.a,null,"Discharged : ",e.summary.discharged),r.a.createElement(w.a,null,"Deaths : ",e.summary.deaths)))};var y=function(e){var a=e.states.length>0?e.states.map((function(a){return r.a.createElement("div",{className:"card m-2",key:a.loc,style:{width:"300px"}},!0===a.high?r.a.createElement("h5",{className:"card-header btn bg-danger text-white",onClick:function(){return!a.fav&&e.addToFav(a.loc)}},a.loc):!0===a.medium?r.a.createElement("h5",{className:"card-header btn bg-warning",onClick:function(){return!a.fav&&e.addToFav(a.loc)}},a.loc):r.a.createElement("h5",{className:"card-header btn bg-primary",onClick:function(){return!a.fav&&e.addToFav(a.loc)}},a.loc),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Total",!0===a.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},a.total):!0===a.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},a.total):r.a.createElement("span",{className:"badge badge-primary badge-pill"},a.total)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Confirmed Cases Indian",!0===a.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},a.confirmedCasesIndian):!0===a.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},a.confirmedCasesIndian):r.a.createElement("span",{className:"badge badge-primary badge-pill"},a.confirmedCasesIndian)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Confirmed Cases Foreign",!0===a.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},a.confirmedCasesForeign):!0===a.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},a.confirmedCasesForeign):r.a.createElement("span",{className:"badge badge-primary badge-pill"},a.confirmedCasesForeign)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Discharged",!0===a.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},a.discharged):!0===a.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},a.discharged):r.a.createElement("span",{className:"badge badge-primary badge-pill"},a.discharged)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Deaths",!0===a.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},a.deaths):!0===a.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},a.deaths):r.a.createElement("span",{className:"badge badge-primary badge-pill"},a.deaths)))))})):"";return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row w-100 mt-2"},a))};var k=function(e){var a=e.states.length>0?e.states.map((function(e){return r.a.createElement("div",{className:"card m-2",key:e.loc,style:{width:"300px"}},!0===e.high?r.a.createElement("h5",{className:"card-header btn bg-danger text-white"},r.a.createElement("i",{className:"fa fa-star"}),e.loc):!0===e.meduim?r.a.createElement("h5",{className:"card-header btn bg-warning"},r.a.createElement("i",{className:"fa fa-star"}),e.loc):r.a.createElement("h5",{className:"card-header btn bg-primary"},r.a.createElement("i",{className:"fa fa-star"}),e.loc),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Total",!0===e.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},e.total):!0===e.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},e.total):r.a.createElement("span",{className:"badge badge-primary badge-pill"},e.total)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Confirmed Cases Indian",!0===e.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},e.confirmedCasesIndian):!0===e.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},e.confirmedCasesIndian):r.a.createElement("span",{className:"badge badge-primary badge-pill"},e.confirmedCasesIndian)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Confirmed Cases Foreign",!0===e.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},e.confirmedCasesForeign):!0===e.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},e.confirmedCasesForeign):r.a.createElement("span",{className:"badge badge-primary badge-pill"},e.confirmedCasesForeign)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Discharged",!0===e.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},e.discharged):!0===e.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},e.discharged):r.a.createElement("span",{className:"badge badge-primary badge-pill"},e.discharged)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Deaths",!0===e.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},e.deaths):!0===e.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},e.deaths):r.a.createElement("span",{className:"badge badge-primary badge-pill"},e.deaths)))))})):"";return 0!==e.states.length&&r.a.createElement("div",{className:"container mb-lg-5"},r.a.createElement("div",{className:"row w-100 mt-2"},a))},x=t(68);var C=function(e){return r.a.createElement(x.a,{data:e.chartData})},F=function(e){Object(b.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={summary:Object,states:[],favstates:[],chartData:{labels:[],datasets:[{data:[],label:"",backgroundColor:[]}]}},e}return Object(u.a)(t,[{key:"getRandomColor",value:function(){var e=Object(m.a)(o.a.mark((function e(){var a,t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Math.round(16777215*Math.random()),t=a>>16,n=a>>8&255,r=255&a,console.log("'rgba("+t+", "+n+", "+r+", 0.6)'"),e.abrupt("return","rgba("+t+", "+n+", "+r+", 0.6)");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.addToFav.bind(this),this.getData()}},{key:"addTotalAndFav",value:function(){var e=Object(m.a)(o.a.mark((function e(a){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.chartData.datasets[0].label="State",e.next=3,a.map(function(){var e=Object(m.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.fav=void 0!==t.state.fav.find((function(e){return e===a.loc})),a.total=a.confirmedCasesIndian+a.confirmedCasesForeign,t.state.chartData.labels.push(a.loc),t.state.chartData.datasets[0].data.push(a.total),e.t0=t.state.chartData.datasets[0].backgroundColor,e.next=7,t.getRandomColor();case 7:return e.t1=e.sent,e.t0.push.call(e.t0,e.t1),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"checkHighLow",value:function(){var e=Object(m.a)(o.a.mark((function e(a){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,a.map((function(e){return t<e.total&&(t=e.total),e})),n=t-(t-1)/3,r=t-(t-1)/3*2,a.map((function(e){return e.total>=n?e.high=!0:e.total>r&&(e.medium=!0),e})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"manipulateData",value:function(){var e=Object(m.a)(o.a.mark((function e(a){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.addTotalAndFav(a);case 3:return e.t1=e.sent,e.next=6,e.t0.checkHighLow.call(e.t0,e.t1);case 6:for(a=e.sent,t=this.state.states,n=this.state.favstates,r=0;r<a.length;r++)a[r].fav?n.push(a[r]):t.push(a[r]);this.setState({states:t,favstates:n});case 11:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=Object(m.a)(o.a.mark((function e(){var a,t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,window.localStorage.getItem("covidstatesfav");case 3:return e.t1=e.sent,void 0===(a=e.t0.parse.call(e.t0,e.t1))||null===a?this.setState({fav:[]}):this.setState({fav:a}),e.next=8,v.a.get("https://api.rootnet.in/covid19-in/stats/latest").then((function(e){return e.data.data})).then((function(e){t.setState({summary:e.summary}),t.manipulateData(e.regional)}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addToFav",value:function(){var e=Object(m.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.fav.push(a),window.localStorage.setItem("covidstatesfav",JSON.stringify(this.state.fav)),window.location.reload();case 3:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(N,{summary:this.state.summary}),r.a.createElement(C,{chartData:this.state.chartData}),r.a.createElement(k,{states:this.state.favstates,getData:this.getData}),r.a.createElement(y,{states:this.state.states,getData:this.getData,addToFav:this.addToFav.bind(this)}))}}]),t}(n.Component);var D=function(e){return r.a.createElement("div",{className:"footer-copyright bg-dark text-white text-center py-3"},"@ Rishabh Anand")};var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(F,null),r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,a,t){e.exports=t(192)},79:function(e,a,t){},80:function(e,a,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.ae577b71.chunk.js.map
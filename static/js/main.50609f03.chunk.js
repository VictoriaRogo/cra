(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),r=n.n(c),i=(n(13),n(6)),l=n(7);n(4);var u=function(e){return o.a.createElement("div",{className:"Form"},o.a.createElement("form",{onSubmit:e.addItem},o.a.createElement("input",null),o.a.createElement("button",{type:"Submit"},"Add")))};var d=function(e){return o.a.createElement("div",{className:"List"},e.todoItems.map((function(t,n){return o.a.createElement("div",{key:t.title+n},o.a.createElement("input",{type:"checkbox",className:"check",checked:t.done,onChange:function(){return e.toggle(n)}}),o.a.createElement("input",{defaultValue:t.title,className:t.done?"done inlineEdit":"inlineEdit",onBlur:function(t){return e.updateTitle(n,t.target.value)}}),o.a.createElement("button",{onClick:function(){return e.deleteItem(n)}},"\xd7"),0!==n&&o.a.createElement("button",{onClick:function(){return e.swap(n,n-1)}},"\u2191"),n!==e.todoItems.length-1&&o.a.createElement("button",{onClick:function(){return e.swap(n,n+1)}},"\u2193"))})))},s=[{title:"First",done:!1},{title:"Second",done:!1},{title:"Third",done:!1}];var m=function(){var e=Object(a.useState)(s),t=Object(l.a)(e,2),n=t[0],c=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement(u,{addItem:function(e){e.preventDefault();var t={title:e.target[0].value,done:!1};e.target[0].value="",c([].concat(Object(i.a)(n),[t]))}}),o.a.createElement(d,{todoItems:n,toggle:function(e){n[e].done=!n[e].done,c(n.slice())},updateTitle:function(e,t){n[e].title=t,c(n.slice())},deleteItem:function(e){c(n.filter((function(t,n){return n!==e})))},swap:function(e,t){var a=n.slice();a[e]=n[t],a[t]=n[e],c(a)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("--ReactDOM.render start"),r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),console.log("--ReactDOM.render end"),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.50609f03.chunk.js.map
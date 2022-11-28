(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(4),r=c(2),l=c(3),o=c.n(l),i=c(1),d=(c(13),c(14),c(6)),j=c.n(d),u=c(0),b=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:t}),Object(u.jsx)("td",{className:"is-vcentered"}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:j()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("far",{"fa-eye":c!==e,"fa-eye-slash":c===e})})})})})]},t)})}))})]})},h=function(e){var t=e.query,c=e.setQuery,s=e.todosStatus,a=e.setTodosStatus;return Object(u.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},m=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){return x("/users/".concat(e))},f=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=e.setHasLoadingError,a=t.id,l=t.completed,d=t.userId,j=t.title,b=Object(i.useState)(),h=Object(r.a)(b,2),x=h[0],f=h[1];return Object(i.useEffect)((function(){var e=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(d);case 3:t=e.sent,f(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),x?Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:j}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[l?Object(u.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(u.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(x.email),children:x.name})]})]})]}):Object(u.jsx)(m,{})]})},p=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)("all"),l=Object(r.a)(a,2),d=l[0],j=l[1],O=Object(i.useState)(""),p=Object(r.a)(O,2),v=p[0],N=p[1],y=Object(i.useState)(null),g=Object(r.a)(y,2),S=g[0],w=g[1],k=Object(i.useState)(!1),T=Object(r.a)(k,2),C=T[0],L=T[1];Object(i.useEffect)((function(){var e=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/todos");case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),L(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var E=c.filter((function(e){switch(d){case"active":return!e.completed&&e.title.toLowerCase().includes(v.toLowerCase());case"completed":return e.completed&&e.title.toLowerCase().includes(v.toLowerCase());default:return e.title.toLowerCase().includes(v.toLowerCase())}}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(h,{query:v,setQuery:N,todosStatus:d,setTodosStatus:j})}),Object(u.jsx)("div",{className:"block",children:c.length>0?Object(u.jsx)(b,{todos:E,selectedTodo:S,setSelectedTodo:w}):Object(u.jsx)(m,{})})]})})}),S&&Object(u.jsx)(f,{selectedTodo:S,setSelectedTodo:w,setHasLoadingError:L}),C&&Object(u.jsx)("div",{className:"notification is-danger is-light",children:"Loading error"})]})};a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9eb365ac.chunk.js.map
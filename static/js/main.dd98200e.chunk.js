(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(0),r=n.n(o),a=n(6),i=n.n(a),s=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),r(t),a(t)}))},l=n(2),u=n(3),d=n(9),b=n(4),j="ADD_TODO",O="REMOVE_TODO",m="TOGGLE_MODAL",f=function(t){return{type:m,payload:t}},x=n(15),h=n.n(x),p=n(8),_={key:"root",storage:h.a},v=Object(p.a)(_,(function(t,e){var n=e.type,c=e.payload;switch(n){case j:return Object(b.a)(Object(b.a)({},t),{},{todos:[c].concat(Object(d.a)(t.todos))});case O:var o=t.todos.filter((function(t){return t.id!==c}));return Object(b.a)(Object(b.a)({},t),{},{todos:o});case m:return Object(b.a)(Object(b.a)({},t),{},{modal:{context:c.context,isVisible:c.isVisible}});default:return Object(b.a)({},t)}})),N=Object(u.c)(v,{todos:[],modal:{context:null,isVisible:!1}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),y=Object(p.b)(N),S=Object(o.forwardRef)((function(t,e){var n=t.type,o=t.placeholder,r=t.className;return Object(c.jsx)("input",{type:n,placeholder:o,ref:e,className:r})}));var g=function(t){var e=t.type,n=t.text,o=t.className,r=t.onButtonClick,a=void 0===r?null:r;return Object(c.jsx)("button",{type:e,onClick:a,className:o,children:n})};function k(){var t="abcdefghijklmnopqrstuvwxyz",e="0123456789";return Object(d.a)(new Array(10)).map((function(t,e){return Math.ceil(Math.random()*e)>1?0:1})).sort((function(t){return.5-Math.random()})).map((function(n,c){return 1===n?t[Math.ceil(Math.random()*t.length-1)]:e[Math.ceil(Math.random()*e.length-1)]})).join("")}function M(){var t=["\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443","\u041f\u043e\u0438\u0433\u0440\u0430\u0442\u044c \u043d\u0430 \u0433\u0438\u0442\u0430\u0440\u0435","\u0421\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d","\u041f\u0440\u043e\u0433\u0443\u043b\u044f\u0442\u044c\u0441\u044f","\u0412\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044c\u0441\u044f \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438"];return t[Math.floor(Math.random()*(t.length-1))]}var V=function(t){var e=t.children,n=t.onSubmitEvent,o=t.className;return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),n()},className:o,children:e})};var w=function(){var t=Object(l.c)(),e=Object(o.useRef)();return Object(c.jsxs)(V,{onSubmitEvent:function(n){if(""===e.current.value)return!1;var c={title:e.current.value,id:k(),counter:0};t({type:j,payload:c}),e.current.value="",e.current.placeholder=M()},className:"todo__form",children:[Object(c.jsx)(S,{ref:e,type:"text",placeholder:M(),className:"input todo__form-input"}),Object(c.jsx)(g,{type:"submit",text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"button button--teal"})]})},E=n(17);function D(t){var e=t.id,n=t.title,r=(t.counter,Object(o.useRef)()),a=Object(o.useRef)(),i=Object(o.useRef)(),s=Object(o.useRef)(0),u=Object(o.useState)(!0),d=Object(E.a)(u,2),b=d[0],j=d[1],O=Object(l.c)(),m=Object(l.d)(),x=function(t){if(void 0!==r.current){if(m.getState().modal.isVisible){var n={id:e,timer:r.current};O(f({context:n,isVisible:!1}))}clearInterval(r.current)}j(!0)};return Object(c.jsxs)("li",{className:"todo__list-item",children:[Object(c.jsx)("p",{className:"text text--header todo__list-block todo__list-block--header todo__list-text todo__list-text--header",children:n}),Object(c.jsxs)("p",{className:"text text--header todo__list-block todo__list-block--timer todo__list-text todo__list-text--header",children:[Object(c.jsx)("span",{ref:a,children:"00:00:00:00"}),b?Object(c.jsx)(g,{type:"button",className:"button button--icon button--play",onButtonClick:function(t){var n,c,o,l,u,d,b,x;if(i.current=Date.now()-s.current,r.current=setInterval((function(t){s.current=Date.now()-i.current,l=Math.floor(s.current/864e5),o=Math.floor(s.current%864e5/36e5),c=Math.floor(s.current%36e5/6e4),n=Math.floor(s.current%6e4/1e3),u=n.toString().padStart(2,"0"),d=c.toString().padStart(2,"0"),b=o.toString().padStart(2,"0"),x=l.toString().padStart(2,"0"),a.current.innerHTML="".concat(x,":").concat(b,":").concat(d,":").concat(u)}),1e3),m.getState().modal.isVisible){var h={id:e,timer:r.current};O(f({context:h,isVisible:!1}))}j(!1)}}):Object(c.jsx)(g,{type:"button",className:"button button--icon button--pause",onButtonClick:x})]}),Object(c.jsx)("div",{className:"todo__list-block todo__list-block--delete",children:Object(c.jsx)(g,{className:"button button--icon button--delete",type:"button",onButtonClick:function(t){x();var n={id:e,timer:r.current};O(f({context:n,isVisible:!0}))}})})]})}var C=Object(l.b)((function(t){return{todos:t.todos}}))((function(t){var e=t.todos;return Object(c.jsx)("ul",{className:"list todo__list",children:e.map((function(t){return Object(c.jsx)(D,{title:t.title,id:t.id},t.id)}))})}));function T(t){var e=t.header,n=t.children;return Object(c.jsxs)("div",{className:"modal",children:[Object(c.jsx)("div",{className:"modal__bg"}),Object(c.jsxs)("div",{className:"modal__window",children:[Object(c.jsx)("h1",{className:"text text--header modal__text--header",children:e}),n]})]})}var R=Object(l.b)((function(t){return{modal:t.modal}}))((function(t){var e=t.modal,n=Object(l.c)();return!1===e.isVisible?null:Object(c.jsxs)(T,{header:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",type:"default",children:[Object(c.jsx)("p",{className:"text text--regular modal__text--caption",children:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u043e"}),Object(c.jsxs)("div",{className:"modal__buttons",children:[Object(c.jsx)(g,{type:"button",text:"\u0414\u0430",className:"button button--flat button--flat-red",onButtonClick:function(t){if(!e.isVisible)return!1;var c;void 0!==e.context.timer&&clearInterval(e.context.timer),n((c=e.context.id,{type:O,payload:c})),n(f({context:null,isVisible:!1}))}}),Object(c.jsx)(g,{type:"button",text:"\u041d\u0435\u0442",className:"button button--flat button--flat-blue",onButtonClick:function(t){if(!e.isVisible)return!1;n(f({context:e.context,isVisible:!1}))}})]})]})})),B=(n(33),n(16));i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(l.a,{store:N,children:Object(c.jsxs)("main",{className:"main",children:[Object(c.jsx)(w,{}),Object(c.jsxs)(B.a,{persistor:y,children:[Object(c.jsx)(C,{}),Object(c.jsx)(R,{})]})]})})}),document.getElementById("root")),s()}},[[34,1,2]]]);
//# sourceMappingURL=main.dd98200e.chunk.js.map
(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,function(e,t,n){e.exports={button:"Affairs_button__2G62_","button-active":"Affairs_button-active__uUvDk",affair:"Affairs_affair__1KlWY",item:"Affairs_item__3VxxS",high:"Affairs_high__WUNEV",middle:"Affairs_middle__1bVOX",low:"Affairs_low__2aHuC"}},,,,,,function(e,t,n){e.exports={App:"App_App__3y1MX",links:"App_links__3MHpk",inner:"App_inner__l_4fL"}},function(e,t,n){e.exports={wrap:"Message_wrap__36vVl",message:"Message_message__1aZGK",tail:"Message_tail__4DlIb",msg:"Message_msg__onV2g",name:"Message_name__2xWZE",time:"Message_time__1lOc3"}},,,,function(e,t,n){e.exports={error:"Greeting_error__32-9W",span:"Greeting_span__38Je5",div:"Greeting_div__3jiZQ"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3tcXq",errorInput:"SuperInputText_errorInput__3_Ewv",error:"SuperInputText_error__1Av9X"}},function(e,t,n){e.exports={buttons:"HW8_buttons__2LS_t",people:"HW8_people__oFq3s"}},,function(e,t,n){e.exports={default:"SuperButton_default__ZmPoK","background-color":"SuperButton_background-color__O767O","border-white":"SuperButton_border-white__1B5Yh",red:"SuperButton_red__Fhbtt","background-color-red":"SuperButton_background-color-red__13187","border-red-white":"SuperButton_border-red-white__1ieeh"}},,,function(e,t,n){e.exports={blue:"HW4_blue__1NqIN",column:"HW4_column__3Gci7",testSpanError:"HW4_testSpanError__T470N"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1i8Eq",spanClassName:"SuperCheckbox_spanClassName__Oos9V"}},function(e,t,n){e.exports={radio:"SuperRadio_radio__1rlKn",elem:"SuperRadio_elem__1LU02"}},,,,,function(e,t,n){e.exports={span:"SuperEditableSpan_span__1fQie"}},function(e,t,n){e.exports={select:"SuperSelect_select__2zqkm"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(28),s=n.n(c),i=(n(37),n(10)),o=n.n(i),j=n(0);var l=function(){return Object(j.jsx)("div",{})},u=n(2),b=n(11),d=n.n(b);var h=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:d.a.wrap,children:[Object(j.jsx)("img",{src:e.avatar,alt:"avatar"}),Object(j.jsx)("div",{className:d.a.tail}),Object(j.jsxs)("div",{className:d.a.message,children:[Object(j.jsx)("div",{className:d.a.name,children:e.name}),Object(j.jsx)("div",{className:d.a.msg,children:e.message}),Object(j.jsx)("div",{className:d.a.time,children:e.time})]})]})})},O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Some Name",p="some text",m="22:00";var f=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 1",Object(j.jsx)(h,{avatar:O,name:x,message:p,time:m}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},_=n(3),v=n(4),g=n.n(v);var k=function(e){var t=g.a.item+" "+g.a[e.affair.priority];return Object(j.jsxs)("div",{className:g.a.affair,children:[Object(j.jsx)("div",{className:g.a.item,children:e.affair.name}),Object(j.jsx)("div",{className:t,children:[e.affair.priority]}),Object(j.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:g.a.item+" "+g.a.button,children:"X"})]})};function N(e){var t=e.data.map((function(t){return Object(j.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=g.a.button+" "+("all"===e.filter?g.a.active:""),a=g.a.button+" "+("high"===e.filter?g.a.active:""),r=g.a.button+" "+("middle"===e.filter?g.a.active:""),c=g.a.button+" "+("low"===e.filter?g.a.active:"");return Object(j.jsxs)("div",{children:[t,Object(j.jsx)("button",{onClick:function(){e.setFilter("all")},className:n,children:"All"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("high")},className:a,children:"High"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("middle")},className:r,children:"Middle"}),Object(j.jsx)("button",{onClick:function(){e.setFilter("low")},className:c,children:"Low"})]})}var C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(C),t=Object(_.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(_.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 2",Object(j.jsx)(N,{data:l,setFilter:o,deleteAffairCallback:function(e){r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},w=n(12),y=n(15),A=n.n(y),E=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.onPressHandler,c=e.error,s=e.totalUsers,i=c?A.a.error:"";return Object(j.jsxs)("div",{className:A.a.div,children:[Object(j.jsx)("input",{value:t,onChange:n,onKeyPress:r,className:i}),Object(j.jsxs)("span",{className:A.a.span,children:[" ",c&&"   name is required   ","  "]}),Object(j.jsx)("button",{onClick:a,children:"   add   "}),Object(j.jsx)("span",{className:A.a.span,children:s})]})},I=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(_.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(!0),l=Object(_.a)(o,2),u=l[0],b=l[1],d=function(){!u&&n(s),!u&&alert("Hello ".concat(s," !")),i(""),b(!0)},h=t.length;return Object(j.jsx)(E,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b(!1)):(i(""),b(!0))},onPressHandler:function(e){"Enter"===e.key&&d()},addUser:d,error:u,totalUsers:h})},T=n(46);var F=function(){var e=Object(a.useState)([]),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 3",Object(j.jsx)(I,{users:n,addUserCallback:function(e){var t={_id:Object(T.a)(),name:e};r([].concat(Object(w.a)(n),[t]))}}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},B=n(7),H=n(6),P=n(16),U=n.n(P),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(U.a.error," ").concat(i||""),u="".concat(U.a.superInput," ").concat(c?U.a.errorInput:U.a.superInput," ").concat(s);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(B.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:u},o)),c&&Object(j.jsx)("span",{className:l,children:c})]})},J=n(22),M=n.n(J),K=n(19),q=n.n(K),D=function(e){var t=e.red,n=e.className,a=Object(H.a)(e,["red","className"]),r="".concat(t?q.a.red:q.a.default," ").concat(n);return Object(j.jsx)("div",{className:q.a.wrapper,children:Object(j.jsx)("button",Object(B.a)({className:r},a))})},G=n(23),L=n.n(G),V=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(L.a.checkbox," ").concat(a||"s.spanClassName");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(B.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(j.jsx)("span",{className:L.a.spanClassName,children:r})]})};var X=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(_.a)(i,2),l=o[0],u=o[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 4",Object(j.jsxs)("div",{className:M.a.column,children:[Object(j.jsx)(W,{value:n,onChangeText:r,onEnter:s,error:c}),Object(j.jsx)(W,{className:M.a.blue}),Object(j.jsx)(D,{children:"default"}),Object(j.jsx)(D,{red:!0,onClick:s,children:"delete "}),Object(j.jsx)(D,{disabled:!0,children:"disabled"}),Object(j.jsx)(V,{checked:l,onChangeChecked:u,children:"some text "}),Object(j.jsx)(V,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},Z=n(29),R=n.n(Z),Y=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(H.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(_.a)(s,2),o=i[0],l=i[1],u=r||{},b=u.children,d=u.onDoubleClick,h=u.className,O=Object(H.a)(u,["children","onDoubleClick","className"]),x="".concat(R.a.span," ").concat(h);return Object(j.jsx)(j.Fragment,{children:o?Object(j.jsx)(W,Object(B.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(j.jsx)("span",Object(B.a)(Object(B.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:x},O),{},{children:b||c.value}))})};var z=function(){var e=Object(a.useState)(""),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 6",Object(j.jsx)("div",{children:Object(j.jsx)(Y,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(j.jsx)(D,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("editable-span-value",n)},children:"save"}),Object(j.jsx)(D,{onClick:function(){r(function(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}("editable-span-value",n))},children:"restore"}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})};var Q=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsx)(S,{}),Object(j.jsx)(F,{}),Object(j.jsx)(X,{}),Object(j.jsx)(z,{})]})},$={display:"flex",justifyContent:"center",backgroundColor:"black"};var ee=function(){return Object(j.jsx)("div",{style:$,children:Object(j.jsx)("img",{src:"https://image.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg",alt:"Nothing here"})})},te=n(30),ne=n.n(te),ae=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(H.a)(e,["options","onChange","onChangeOption"]),c=null===t||void 0===t?void 0:t.map((function(e,t){return Object(j.jsx)("option",{children:e},t)}));return Object(j.jsx)("select",Object(B.a)(Object(B.a)({className:ne.a.select,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},re=n(24),ce=n.n(re),se=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(H.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:ce.a.elem,type:"radio",name:t,checked:a===e,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:ce.a.radio,children:i})})},ie=["x","y","z"];var oe=function(){var e=Object(a.useState)(ie[1]),t=Object(_.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 7",Object(j.jsx)("div",{children:Object(j.jsx)(ae,{options:ie,value:n,onChangeOption:r})}),Object(j.jsx)("div",{children:Object(j.jsx)(se,{name:"radio",options:ie,value:n,onChangeOption:r})}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},je=function(e,t){switch(t.type){case"sortUp":return Object(w.a)(e).sort((function(e,t){return e.name>t.name?1:-1}));case"sortDown":return Object(w.a)(e).sort((function(e,t){return e.name<t.name?1:-1}));case"check":return Object(w.a)(e).filter((function(e){return e.age>18}));default:return e}},le=n(17),ue=n.n(le),be=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(a.useState)(be),t=Object(_.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:ue.a.people,children:[Object(j.jsx)("p",{className:ue.a.left,children:e.name}),Object(j.jsx)("p",{className:ue.a.right,children:e.age})]})},e._id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),"homeworks 8",c,Object(j.jsxs)("div",{className:ue.a.buttons,children:[Object(j.jsx)(D,{onClick:function(){return r(je(be,{type:"sortUp"}))},children:"sort up"}),Object(j.jsx)(D,{onClick:function(){return r(je(be,{type:"sortDown"}))},children:"sort down"}),Object(j.jsx)(D,{onClick:function(){r(je(be,{type:"check"}))},children:"check 18"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("hr",{})]})},he=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(oe,{}),Object(j.jsx)(de,{})]})},Oe=function(){return Object(j.jsx)("div",{children:"Sorry,nothing here,JUNIOR_PLUS"})},xe="/pre-junior",pe="/junior",me="/junior-plus";var fe=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(Q,{})}}),Object(j.jsx)(u.a,{exact:!0,path:xe,render:function(){return Object(j.jsx)(Q,{})}}),Object(j.jsx)(u.a,{exact:!0,path:pe,render:function(){return Object(j.jsx)(he,{})}}),Object(j.jsx)(u.a,{exact:!0,path:me,render:function(){return Object(j.jsx)(Oe,{})}}),Object(j.jsx)(u.a,{path:"*",render:function(){return Object(j.jsx)(ee,{})}})]})})},_e=n(9);var ve=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(_e.a,{basename:"HomeTasks",children:[Object(j.jsx)(l,{}),Object(j.jsx)(fe,{})]})})};var ge=function(){return Object(j.jsx)(_e.a,{children:Object(j.jsxs)("div",{className:o.a.App,children:[Object(j.jsx)("div",{children:"react homeworks:"}),Object(j.jsxs)("div",{className:o.a.links,children:[Object(j.jsx)("div",{className:o.a.inner,children:Object(j.jsx)(_e.b,{to:xe,children:"PreJunior"})}),Object(j.jsx)("div",{className:o.a.inner,children:Object(j.jsx)(_e.b,{to:pe,children:"Junior"})}),Object(j.jsx)("div",{className:o.a.inner,children:Object(j.jsx)(_e.b,{to:me,children:"Junior+"})}),Object(j.jsx)("div",{className:o.a.inner,children:"Links"})]}),Object(j.jsx)(ve,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(ge,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.b0db552d.chunk.js.map
(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),o=n.n(s),r=(n(14),n(9)),i=n(2),u=n.p+"static/media/logo.bbe2a6ea.svg",l=n(0);var p=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:u,alt:"\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"})})},d=Object(c.createContext)();var b=function(e){var t=Object(c.useContext)(d),n=e.card.owner._id===t._id,a="element__btn-delete btn ".concat(n?"element__btn-delete_visible":"element__btn-delete_hidden"),s=e.card.likes.some((function(e){return e._id===t._id})),o="element__btn-like btn ".concat(s&&"element__btn-like_active");return Object(l.jsxs)("li",{className:"element",children:[Object(l.jsx)("div",{className:"element__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),Object(l.jsx)("button",{type:"button",className:a,onClick:function(){e.onCardDelete(e.card)}}),Object(l.jsxs)("div",{className:"element__container",children:[Object(l.jsx)("h2",{className:"element__location",children:e.card.name}),Object(l.jsxs)("div",{className:"element__like-container",children:[Object(l.jsx)("button",{type:"button",className:o,onClick:function(){e.onCardLike(e.card)}}),Object(l.jsx)("span",{className:"element__like-counter",children:e.card.likes.length})]})]})]})};var h=function(e){var t=Object(c.useContext)(d);return Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")},onClick:e.onEditAvatar}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__info-container",children:[Object(l.jsx)("h1",{className:"profile__full-name",children:t.name}),Object(l.jsx)("button",{type:"button",className:"profile__btn-edit btn",onClick:e.onEditProfile})]}),Object(l.jsx)("p",{className:"profile__description",children:t.about})]}),Object(l.jsx)("button",{type:"button",className:"profile__btn-add btn",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"elements",children:Object(l.jsx)("ul",{className:"elements__container",children:e.cards.map((function(t){return Object(l.jsx)(b,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var j=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var m=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"popup popup_overlay_form popup_type_".concat(e.name).concat(e.isOpen?" popup_opened":""),children:[Object(l.jsx)("div",{className:"popup__container",children:Object(l.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),onSubmit:e.onSubmit,children:[Object(l.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(l.jsx)("button",{type:"submit",className:"popup__button btn",children:e.submit})]})}),Object(l.jsx)("button",{type:"button",className:"popup__btn-close btn",onClick:e.onClose})]})})};var _=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),u=r[0],p=r[1],b=Object(c.useContext)(d);return Object(c.useEffect)((function(){s(b.name),p(b.about)}),[b]),Object(l.jsxs)(m,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:u}),e.onClose(),s(""),p("")},children:[Object(l.jsx)("input",{type:"text",name:"name",className:"popup__input",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",value:a||"",onChange:function(e){s(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error"}),Object(l.jsx)("input",{type:"text",name:"about",className:"popup__input",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",value:u||"",onChange:function(e){p(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error"})]})};var f=function(e){var t=Object(c.useRef)();return Object(l.jsxs)(m,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),e.onClose(),n.target.reset()},children:[Object(l.jsx)("input",{type:"url",name:"avatar",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0,autoComplete:"off",ref:t}),Object(l.jsx)("span",{className:"popup__input-error"})]})};var O=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)(""),r=Object(i.a)(o,2),u=r[0],p=r[1];return Object(l.jsxs)(m,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submit:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u}),e.onClose(),s(""),p("")},children:[Object(l.jsx)("input",{type:"text",name:"name",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",autoComplete:"off",value:a||"",onChange:function(e){s(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error"}),Object(l.jsx)("input",{type:"url",name:"link",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0,autoComplete:"off",value:u||"",onChange:function(e){p(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error"})]})};var v=function(e){return Object(l.jsxs)("div",{className:"popup popup_overlay_image".concat(e.card?" popup_opened":""),children:[Object(l.jsxs)("div",{className:"popup__container popup__container_image",children:[Object(l.jsx)("img",{className:"popup__image",src:e.card?e.card.link:"",alt:e.card?e.card.name:""}),Object(l.jsx)("p",{className:"popup__description",children:e.card?e.card.name:""})]}),Object(l.jsx)("button",{type:"button",className:"popup__btn-close btn",onClick:e.onClose})]})};var x=function(e){return Object(l.jsx)(m,{name:"delete ",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submit:"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onDeleteCard(e.isOpen),e.onClose()}})},C=n(7),k=n(8),g=new(function(){function e(t){var n=t.baseUrl,c=t.headers;Object(C.a)(this,e),this._baseUrl=n,this._headers=c}return Object(k.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"like",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20",headers:{authorization:"5e9e6ed0-2e3b-49ef-bceb-982a1b5626d9","Content-Type":"application/json"}});var N=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),o=Object(i.a)(s,2),u=o[0],b=o[1],m=Object(c.useState)(!1),C=Object(i.a)(m,2),k=C[0],N=C[1],y=Object(c.useState)(null),U=Object(i.a)(y,2),S=U[0],E=U[1],L=Object(c.useState)(null),P=Object(i.a)(L,2),D=P[0],A=P[1],R=Object(c.useState)(!1),T=Object(i.a)(R,2),I=T[0],q=T[1],F=Object(c.useState)([]),J=Object(i.a)(F,2),w=J[0],B=J[1];function G(){a(!1),b(!1),N(!1),E(!1),A(!1)}return Object(c.useEffect)((function(){return g.getUserInfo().then((function(e){return q(e)})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){return g.getInitialCards().then((function(e){return B(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)(d.Provider,{value:I,children:[Object(l.jsx)(p,{}),Object(l.jsx)(h,{cards:w,onEditProfile:function(){a(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){N(!0)},onCardDelete:function(e){E(e)},onCardClick:A,onCardLike:function(e){e.likes.some((function(e){return e._id===I._id}))?g.dislike(e._id).then((function(t){return B((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)})):g.like(e._id).then((function(t){return B((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(j,{}),Object(l.jsx)(_,{isOpen:n,onClose:G,onUpdateUser:function(e){g.setUserInfo(e).then((function(e){return q(e)})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(O,{isOpen:u,onClose:G,onAddPlace:function(e){g.postCard(e).then((function(e){return B([e].concat(Object(r.a)(w)))})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(f,{isOpen:k,onClose:G,onUpdateAvatar:function(e){g.setUserAvatar(e).then((function(e){return q(e)})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(x,{isOpen:S,onClose:G,onDeleteCard:function(e){g.deleteCard(e._id).then((function(){return B(w.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(v,{card:D,onClose:G})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.33c96c7e.chunk.js.map
(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(6),s=n.n(o),r=(n(14),n(9)),i=n(2),u=n.p+"static/media/logo.bbe2a6ea.svg",l=n(0);var p=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:u,alt:"\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"})})},d=Object(c.createContext)();var b=function(e){var t=Object(c.useContext)(d),n=e.card.owner._id===t._id,a="element__btn-delete btn ".concat(n?"element__btn-delete_visible":"element__btn-delete_hidden"),o=e.card.likes.some((function(e){return e._id===t._id})),s="element__btn-like btn ".concat(o&&"element__btn-like_active");return Object(l.jsxs)("li",{className:"element",children:[Object(l.jsx)("div",{className:"element__image",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),Object(l.jsx)("button",{type:"button",className:a,onClick:function(){e.onCardDelete(e.card)}}),Object(l.jsxs)("div",{className:"element__container",children:[Object(l.jsx)("h2",{className:"element__location",children:e.card.name}),Object(l.jsxs)("div",{className:"element__like-container",children:[Object(l.jsx)("button",{type:"button",className:s,onClick:function(){e.onCardLike(e.card)}}),Object(l.jsx)("span",{className:"element__like-counter",children:e.card.likes.length})]})]})]})};var _=function(e){var t=Object(c.useContext)(d);return Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")},onClick:e.onEditAvatar}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__info-container",children:[Object(l.jsx)("h1",{className:"profile__full-name",children:t.name}),Object(l.jsx)("button",{type:"button",className:"profile__btn-edit btn",onClick:e.onEditProfile})]}),Object(l.jsx)("p",{className:"profile__description",children:t.about})]}),Object(l.jsx)("button",{type:"button",className:"profile__btn-add btn",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"elements",children:Object(l.jsx)("ul",{className:"elements__container",children:e.cards.map((function(t){return Object(l.jsx)(b,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var h=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var j=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"popup popup_overlay_form popup_type_".concat(e.name).concat(e.isOpen?" popup_opened":""),children:[Object(l.jsx)("div",{className:"popup__container",children:Object(l.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),onSubmit:e.onSubmit,noValidate:!0,children:[Object(l.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(l.jsx)("button",{type:"submit",className:"popup__button btn",children:e.submit})]})}),Object(l.jsx)("button",{type:"button",className:"popup__btn-close btn",onClick:e.onClose})]})})};var m=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),u=r[0],p=r[1],b=Object(c.useContext)(d);return Object(c.useEffect)((function(){o(b.name),p(b.about)}),[b]),Object(l.jsxs)(j,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:u}),e.onClose()},children:[Object(l.jsx)("input",{type:"text",id:"name-input",name:"name",className:"popup__input popup__input_type_name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",autoComplete:"off",value:a||"",onChange:function(e){o(e.target.value)}}),Object(l.jsx)("span",{className:"name-input-error popup__input-error"}),Object(l.jsx)("input",{type:"text",id:"desc-input",name:"about",className:"popup__input popup__input_type_desc",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",autoComplete:"off",value:u||"",onChange:function(e){p(e.target.value)}}),Object(l.jsx)("span",{className:"desc-input-error popup__input-error"})]})};var f=function(e){var t=Object(c.useRef)();return Object(l.jsxs)(j,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),e.onClose()},children:[Object(l.jsx)("input",{type:"url",id:"avatar-input",name:"avatar",className:"popup__input popup__input_type_avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0,autoComplete:"off",ref:t}),Object(l.jsx)("span",{className:"avatar-input-error popup__input-error"})]})};var O=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),u=r[0],p=r[1];return Object(l.jsxs)(j,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submit:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u}),e.onClose()},children:[Object(l.jsx)("input",{type:"text",id:"title-input",name:"name",className:"popup__input popup__input_type_title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",autoComplete:"off",value:a||"",onChange:function(e){o(e.target.value)}}),Object(l.jsx)("span",{className:"title-input-error popup__input-error"}),Object(l.jsx)("input",{type:"url",id:"link-input",name:"link",className:"popup__input popup__input_type_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0,autoComplete:"off",value:u||"",onChange:function(e){p(e.target.value)}}),Object(l.jsx)("span",{className:"link-input-error popup__input-error"})]})};var v=function(e){return Object(l.jsxs)("div",{className:"popup popup_overlay_image".concat(e.card?" popup_opened":""),children:[Object(l.jsxs)("div",{className:"popup__container popup__container_image",children:[Object(l.jsx)("img",{className:"popup__image",src:e.card?e.card.link:"",alt:e.card?e.card.name:""}),Object(l.jsx)("p",{className:"popup__description",children:e.card?e.card.name:""})]}),Object(l.jsx)("button",{type:"button",className:"popup__btn-close btn",onClick:e.onClose})]})},x=n(7),C=n(8),k=new(function(){function e(t){var n=t.baseUrl,c=t.headers;Object(x.a)(this,e),this._baseUrl=n,this._headers=c}return Object(C.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"like",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20",headers:{authorization:"5e9e6ed0-2e3b-49ef-bceb-982a1b5626d9","Content-Type":"application/json"}});var g=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(!1),s=Object(i.a)(o,2),u=s[0],b=s[1],j=Object(c.useState)(!1),x=Object(i.a)(j,2),C=x[0],g=x[1],N=Object(c.useState)(null),y=Object(i.a)(N,2),U=y[0],S=y[1],E=Object(c.useState)(!1),L=Object(i.a)(E,2),P=L[0],A=L[1],R=Object(c.useState)([]),T=Object(i.a)(R,2),D=T[0],I=T[1];function q(){a(!1),b(!1),g(!1),S(!1)}return Object(c.useEffect)((function(){return k.getUserInfo().then((function(e){return A(e)})).catch((function(e){return console.log(e)}))}),[]),Object(c.useEffect)((function(){return k.getInitialCards().then((function(e){return I(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)(d.Provider,{value:P,children:[Object(l.jsx)(p,{}),Object(l.jsx)(_,{cards:D,onEditProfile:function(){a(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){g(!0)},onCardClick:S,onCardLike:function(e){e.likes.some((function(e){return e._id===P._id}))?k.dislike(e._id).then((function(t){return I((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)})):k.like(e._id).then((function(t){return I((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){k.deleteCard(e._id).then((function(){return I(D.filter((function(t){return t._id!==e._id})))})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(h,{}),Object(l.jsx)(m,{isOpen:n,onClose:q,onUpdateUser:function(e){k.setUserInfo(e).then((function(e){return A(e)})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(O,{isOpen:u,onClose:q,onAddPlace:function(e){k.postCard(e).then((function(e){return I([e].concat(Object(r.a)(D)))})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(f,{isOpen:C,onClose:q,onUpdateAvatar:function(e){k.setUserAvatar(e).then((function(e){return A(e)})).catch((function(e){return console.log(e)}))}}),Object(l.jsx)(v,{card:U,onClose:q})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),N()}},[[16,1,2]]]);
//# sourceMappingURL=main.2447950c.chunk.js.map
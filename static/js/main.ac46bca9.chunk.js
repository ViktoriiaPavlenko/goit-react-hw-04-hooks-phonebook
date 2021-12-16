(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),s=n.n(o),r=(n(16),n(10)),i=n(4),u=n(11),l=n(3),b=n.n(l),j=n(0);function m(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],s=c[1],r=Object(a.useState)(""),u=Object(i.a)(r,2),l=u[0],m=u[1],d=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":m(a);break;default:return}},h=function(){s(""),m("")};return Object(j.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault(),e(o,l),h()},children:[Object(j.jsxs)("label",{className:b.a.label,children:["Name",Object(j.jsx)("input",{className:b.a.input,type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d})]}),Object(j.jsxs)("label",{className:b.a.label,children:["Number",Object(j.jsx)("input",{className:b.a.input,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d})]}),Object(j.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})}var d=n(2),h=n.n(d),f=function(t){var e=t.contact,n=t.onDeleteContact;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("span",{className:h.a.info,children:[e.name,": ",e.number]}),Object(j.jsx)("button",{className:h.a.button,type:"button",onClick:function(){return n(e.id)},children:"Delete"})]})},p=function(t){var e=t.contacts,n=t.onDeleteContact;return 0===e.length?Object(j.jsx)("div",{className:h.a.warning,children:"You have no contacts!"}):Object(j.jsx)("ul",{className:h.a.list,children:e.map((function(t){return Object(j.jsx)("li",{className:h.a.item,children:Object(j.jsx)(f,{contact:t,onDeleteContact:n})},t.id)}))})},O=n(8),_=n.n(O),x=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:_.a.label,children:["Find contacts",Object(j.jsx)("input",{className:_.a.input,type:"text",value:e,onChange:n})]})};function C(){var t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:[]})),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),l=s[0],b=s[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(m,{onSubmit:function(t,e){var a={id:Object(u.a)(),name:t,number:e};n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts")):n.find((function(t){return t.number===e}))?alert("".concat(e," is already in contacts")):c((function(t){return[a].concat(Object(r.a)(t))}))}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(x,{value:l,onChange:function(t){return b(t.target.value)}}),Object(j.jsx)(p,{contacts:n.filter((function(t){return t.name.toLowerCase().includes(l.toLowerCase())})),onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}n(18);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={list:"ContactsList_list__2sHLo",item:"ContactsList_item__38d2j",info:"ContactsList_info__2gwiJ",button:"ContactsList_button__2C2HX",warning:"ContactsList_warning__2KqhV"}},3:function(t,e,n){t.exports={form:"ContactsForm_form__3B0us",label:"ContactsForm_label__2sbu3",input:"ContactsForm_input__3TWfx",button:"ContactsForm_button__3jpbi"}},8:function(t,e,n){t.exports={label:"Filter_label__2GZ29",input:"Filter_input__37I7h"}}},[[19,1,2]]]);
//# sourceMappingURL=main.ac46bca9.chunk.js.map
(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{18:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),c=e.n(a),o=e(9),u=e.n(o),i=(e(18),e(4)),s=e(2),l=e(3);function j(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 22px;\n    padding: 20px;\n\n    @media (max-width: 767px) {\n        font-size: 18px;\n        flex-wrap: wrap;\n    }\n"]);return j=function(){return n},n}var f=l.a.label(j()),d=function(n){var t=n.name,e=n.body;return Object(r.jsxs)(f,{children:[t,e]})},x=[{short:"USD",name:"U.S. Dollar",rate:3.76},{short:"EUR",name:"Euro",rate:4.54},{short:"GBP",name:"British Pound",rate:5.11}];function b(){var n=Object(s.a)(["\n    width: 50%;\n    padding: 10px;\n\n    @media (max-width: 767px) {\n        flex-basis: 100%;\n        margin-top: 10px;\n    }\n\n"]);return b=function(){return n},n}var m=l.a.select(b()),h=function(n){var t=n.currency,e=n.setCurrency;return Object(r.jsx)(m,{value:t,onChange:function(n){var t=n.target;return e(t.value)},children:x.map((function(n){return Object(r.jsx)("option",{value:n.short,children:n.name},n.short)}))})};function p(){var n=Object(s.a)(["\n    width: 50%;\n    padding: 10px;\n\n    @media (max-width: 767px) {\n        flex-basis: 100%;\n        margin-top: 10px;\n    }\n"]);return p=function(){return n},n}var v=l.a.input(p()),O=function(n){var t=n.amount,e=n.setAmount;return Object(r.jsx)(v,{value:t,onChange:function(n){var t=n.target;return e(t.value)},step:"any",min:"0",placeholder:"Enter the amount",type:"number",required:!0})};function g(){var n=Object(s.a)(["\n    color: white;\n    background-color: teal;\n    width: 50%;\n    font-size: 18px;\n    padding: 10px;\n    border: none;\n    cursor: pointer;\n    transition: color 0.2s, transform 0.2s;\n\n    &:hover{\n        background-color: hsl(180, 100%, 27.5%);\n    }\n\n    &:active{\n        transform: scale(1.05);\n        background-color: hsl(180, 100%, 30%);\n    }\n"]);return g=function(){return n},n}var y=l.a.button(g()),w=function(n){var t=n.name;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(y,{children:t})})};function S(){var n=Object(s.a)(["\n    font-size: 38px;\n    color:teal;\n"]);return S=function(){return n},n}var C=l.a.h1(S()),A=function(n){var t=n.title;return Object(r.jsx)("header",{children:Object(r.jsx)(C,{children:t})})};function F(){var n=Object(s.a)(["\n    padding: 20px;\n    max-width: 800px;\n    margin: auto;\n    text-align: center;\n    box-shadow: 0 0 10px 0#ccc;\n"]);return F=function(){return n},n}var k=l.a.form(F()),z=function(n){var t=n.children,e=n.calculateResult,a=n.currency,c=n.amount;return Object(r.jsx)(k,{onSubmit:function(n){n.preventDefault(),e(a,c)},children:t})};function D(){var n=Object(s.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    font-size: 24px;\n    color: teal;\n"]);return D=function(){return n},n}var P=l.a.p(D()),B=function(n){var t=n.result;return Object(r.jsx)(P,{children:!!t&&Object(r.jsxs)(r.Fragment,{children:[t.sourceAmount.toFixed(2),"\xa0PLN\xa0=\xa0",Object(r.jsxs)("strong",{children:[t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})};function E(){var n=Object(s.a)(["\n    margin: 30px;\n\n    @media (max-width: 767px) {\n        font-size: 14px;\n    }\n"]);return E=function(){return n},n}var L=l.a.footer(E()),T=function(){return Object(r.jsx)(L,{children:"The rates are taken from the nbp.pl website from Table 010/A/NBP/2021 of 2021-01-17"})};function I(){var n=Object(s.a)(["\n    font-family: monospace;\n    text-align: right;\n    font-size: 14px;\n\n    @media (max-width: 767px) {\n        text-align: center;\n    }\n"]);return I=function(){return n},n}var U=l.a.p(I()),N=function(){var n=Object(a.useState)(new Date),t=Object(i.a)(n,2),e=t[0],c=t[1];Object(a.useEffect)((function(){var n=setInterval((function(){c((function(n){return new Date}))}),1e3);return function(){clearInterval(n)}}),[]);var o=e.toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"numeric",second:"numeric"});return Object(r.jsxs)(U,{children:["Today is ",o]})};var R=function(){var n=Object(a.useState)(),t=Object(i.a)(n,2),e=t[0],c=t[1],o=Object(a.useState)(x[0].short),u=Object(i.a)(o,2),s=u[0],l=u[1],j=Object(a.useState)(""),f=Object(i.a)(j,2),b=f[0],m=f[1];return Object(r.jsxs)(z,{calculateResult:function(n,t){var e=x.find((function(t){return t.short===n})).rate;c({sourceAmount:+t,targetAmount:t/e,currency:n})},amount:b,currency:s,children:[Object(r.jsx)(N,{}),Object(r.jsx)(A,{title:"Currency converter"}),Object(r.jsx)(d,{name:"Amount in PLN*:",body:Object(r.jsx)(O,{amount:b,setAmount:m})}),Object(r.jsx)(d,{name:"Valute:",body:Object(r.jsx)(h,{currency:s,setCurrency:l})}),Object(r.jsx)(w,{name:"Convert!"}),Object(r.jsx)(T,{}),Object(r.jsx)(B,{result:e})]})},J=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,22)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),r(n),a(n),c(n),o(n)}))};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),J()}},[[21,1,2]]]);
//# sourceMappingURL=main.3761526d.chunk.js.map
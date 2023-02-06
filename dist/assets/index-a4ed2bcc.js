import{j as oe,R as _e,r as p}from"./react-e3ff4c6a.js";import{c as gt}from"./react-dom-be217ea4.js";import{L as R,B as bt}from"./react-router-dom-8b8b7194.js";import{I as J,T as xt,R as ft,a as wt,F as vt,b as kt,c as yt,A as me,M as j,d as Et,e as At,f as Ct,g as Nt,h as Mt,C as jt}from"./react-icons-dd9958a9.js";import{u as ae}from"./react-popper-174108e9.js";import{s as c,C as F,U as M}from"./styled-components-795cdb89.js";import{i as It,G as et,g as St,o as Bt,a as Gt,s as Rt,b as Vt,c as zt,A as Ht,Q as he,T as ie,B as Tt}from"./@firebase-97f18a8d.js";import"./firebase-6799c86d.js";import{u as Pt}from"./react-hook-form-704829ce.js";import{a as Qt,d as Dt,e as pe}from"./react-router-23d65a1e.js";import"./hoist-non-react-statics-90cdd91e.js";import"./scheduler-a07ebc82.js";import"./@remix-run-d7cce7c6.js";import"./react-fast-compare-8dea2db9.js";import"./@popperjs-d2c33dca.js";import"./react-is-78c37727.js";import"./@emotion-3c1bd611.js";import"./tslib-4b8363ab.js";import"./idb-f62f60ab.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function u(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=u(n);fetch(n.href,i)}})();const N=oe.exports.Fragment,e=oe.exports.jsx,t=oe.exports.jsxs,Lt="bi",Ft="Editor",Yt={period:Lt,setPeriod:()=>{},inEditor:Ft,setInEditor:()=>{},inPersonalModel:!1,setInPersonalModel:()=>{},personalModelForInfo:{},setPersonalModelForInfo:()=>{},showLoginInToAccess:!1,setShowLoginInToAccess:()=>{}},tt=_e.createContext(Yt),qt=({children:r})=>{const[o,u]=p.exports.useState("bi"),[s,n]=p.exports.useState("Editor"),[i,d]=p.exports.useState(!1),[a,m]=p.exports.useState({}),[h,l]=p.exports.useState(!1);return e(tt.Provider,{value:{showLoginInToAccess:h,setShowLoginInToAccess:l,personalModelForInfo:a,setPersonalModelForInfo:m,inPersonalModel:i,setInPersonalModel:d,inEditor:s,setInEditor:n,period:o,setPeriod:u},children:r})};const E=()=>p.exports.useContext(tt),$=c.div`
  div:hover {
    transition: 0.5s;
  }
  div {
    transition: 0.5s;
  }
`,_=c.div`
  display: none;
  @media screen and (max-width: 785px) {
    display: flex;
  }
  button {
    border: none;
    background: local;
  }
`,ee=c.div`
  transition: 0.5s;
  @media screen and (max-width: 785px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  background: rgb(71, 71, 79);
  background: linear-gradient(
    306deg,
    rgba(71, 71, 79, 1) 0%,
    rgba(58, 58, 65, 1) 4%,
    rgba(35, 35, 39, 1) 94%,
    rgba(28, 28, 31, 1) 100%
  );
  border-radius: 10px;
  padding: 3rem 2rem 1rem 2rem;
  gap: 1rem;
  width: 25rem;
  text-align: center;

  svg {
    width: 3rem;
    height: 3rem;
    margin: 0 17rem 0 0;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`,te=c.div`
  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background: linear-gradient(
        0deg,
        rgba(236, 232, 232, 1) 0%,
        rgba(201, 198, 200, 1) 50%,
        rgba(77, 77, 86, 1) 100%
      );
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -25px;

      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -30px;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
  right: 17rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  border: 1px solid var(--text-color);
  background: rgb(44, 44, 49);
  background: linear-gradient(
    54deg,
    rgba(44, 44, 49, 1) 8%,
    rgba(32, 32, 36, 1) 51%,
    rgba(18, 18, 20, 1) 100%
  );
  border-radius: 10px;
  padding: 3rem 2rem 1rem 2rem;
  height: max-content;
  width: 25rem;
  text-align: center;

  svg {
    max-width: 3rem;
    max-height: 3rem;
    margin: 0 17rem 0 0;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`;function Y({text:r,inEditor:o}){const{inPersonalModel:u}=E(),[s,n]=p.exports.useState(!1),i=p.exports.useRef(null),d=p.exports.useRef(null),[a,m]=p.exports.useState(null),{styles:h,attributes:l}=ae(i.current,d.current,{modifiers:[{name:"arrow",options:{element:a}},{name:"offset",options:{offset:[0,10]}}]});return o?u?t($,{children:[t(_,{children:[s?t(te,{ref:d,style:h.popper,...l.popper,children:[e("div",{ref:m,style:h.arrow,id:"arrow"}),e("p",{children:"Calcule a nota necessária para atingir a média ou calcule sua nota final com base no modelo escolhido."}),t("svg",{width:"31",height:"28",viewBox:"0 0 31 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.2963 12.7107H15.2223V18.6116H16.1482",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z",fill:"#ECE8E8"})]})]}):null,e("button",{ref:i,onClick:()=>n(!s),children:e(J,{size:55})})]}),t(ee,{children:[e("p",{children:"Calcule a nota necessária para atingir a média ou calcule sua nota final com base no modelo escolhido."}),e("img",{src:"src\\assets\\Alert.svg",alt:"Ícone da mensagem de explicação"})]})]}):t($,{children:[t(_,{children:[s?t(te,{ref:d,style:h.popper,...l.popper,children:[e("div",{ref:m,style:h.arrow,id:"arrow"}),e("p",{children:"Crie seu próprio modelo de calculo, seja bimestral ou trimestral."}),t("svg",{width:"31",height:"28",viewBox:"0 0 31 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.2963 12.7107H15.2223V18.6116H16.1482",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z",fill:"#ECE8E8"})]})]}):null,e("button",{ref:i,onClick:()=>n(!s),children:e(J,{size:55})})]}),t(ee,{children:[t("p",{children:[" ","Crie seu próprio modelo de cálculo, sendo bimestral ou trimestral!"]}),t("svg",{width:"31",height:"28",viewBox:"0 0 31 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.2963 12.7107H15.2223V18.6116H16.1482",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z",fill:"#ECE8E8"})]})]})]}):t($,{children:[t(_,{children:[s?t(te,{ref:d,style:h.popper,...l.popper,children:[e("div",{ref:m,style:h.arrow,id:"arrow"}),e("p",{children:"Crie seu próprio modelo de calculo, seja bimestral ou trimestral."}),e("img",{src:"src\\assets\\Alert.svg",alt:"Ícone da mensagem de explicação"})]}):null,e("button",{ref:i,onClick:()=>n(!s),children:e(J,{size:55})})]}),t(ee,{children:[e("p",{children:r}),t("svg",{width:"31",height:"28",viewBox:"0 0 31 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.2963 12.7107H15.2223V18.6116H16.1482",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z",fill:"#ECE8E8"})]})]})]})}const Xt=c.button`
  @media screen and (max-width: 1065px) {
  }
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  background: rgb(66, 66, 71);
  background: radial-gradient(
    circle,
    rgba(66, 66, 71, 1) 16%,
    rgba(44, 44, 49, 1) 76%
  );
  width: 22rem;
  padding: 1.5rem 5rem;
  font-size: 1.6rem;
  font-weight: 500;

  border-radius: 4px;
  border: 1px solid #121214;
`,Ot={color:"#bfb0ed"};function w({type:r,title:o,onClick:u,id:s,className:n,icon:i}){return t(Xt,{type:r,className:n,id:s,onClick:u,children:[o,i===!0?e(xt,{style:Ot,size:25}):""]})}const Ut=c.div`
  width: 100%;
  border-radius: 4px;
  div.socialLinks {
    @media screen and (max-width: 1023px) {
      width: 30rem;
      height: 8rem;
    }
    @media screen and (max-width: 880px) {
      width: 28rem;
      height: 7rem;
    }
    @media screen and (max-width: 450px) {
      width: 25rem;
      height: 6rem;
    }
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background-color: var(--bg-cards);
    padding: 1rem;
    align-items: center;
  }
  a:hover {
    scale: 1.2;
    transition: 0.5s;
  }

  a {
    transition: 0.5s;
    svg {
      @media screen and (max-width: 1023px) {
        width: 40px;
        height: 40pxm;
      }
      @media screen and (max-width: 880px) {
        width: 35px;
        height: 35px;
      }
      @media screen and (max-width: 450px) {
        width: 30px;
        height: 30px;
      }
    }
    display: flex;
    align-items: center;
    justify-content: center;
    height: 33px;
    width: 32px;
  }
`;function rt(){return e(Ut,{children:t("div",{className:"socialLinks",children:[e("a",{target:"_blank",href:"https://www.instagram.com/gabriel_supz/",children:e(ft,{size:30,color:"#b45cb0"})}),t("a",{target:"_blank",href:"https://www.linkedin.com/in/gabriel-suptitz-51340124a/",children:[" ",e(wt,{size:30,color:"#8777cc"})]}),t("a",{href:"mailto:gabrielsuptitz@gmail.com",children:[" ",e(vt,{size:30,color:"var(--text-color)"})]}),t("a",{target:"_blank",href:"https://github.com/gabrielsupz",children:[" ",e(kt,{size:30,color:"#b3afc4"})]})]})})}const Kt={apiKey:"AIzaSyC0NN4MzL1cbcSl1eccQKx3HVg4Xyk-EGk",authDomain:"grade-calculator-24ed6.firebaseapp.com",projectId:"grade-calculator-24ed6",storageBucket:"grade-calculator-24ed6.appspot.com",messagingSenderId:"29173795505",appId:"1:29173795505:web:1033bf56cb09eed41a3090"},nt=It(Kt);new et;const re=St(nt),q=Bt(nt),it=p.exports.createContext(void 0),Wt=({children:r})=>{const[o,u]=p.exports.useState(null),[s,n]=p.exports.useState(),i=()=>{const a=new et;Rt(re,a)},d=()=>{Vt(re)};return p.exports.useEffect(()=>{const a=Gt(re,m=>{u(m),m!==null&&n(m.uid)});return()=>{a()}},[]),p.exports.useEffect(()=>{},[]),e(it.Provider,{value:{googleSignIn:i,logOut:d,user:o,uid:s},children:r})},V=()=>p.exports.useContext(it),Zt=c.div`
  display: none;

  img.userImage {
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 100%;
    border: 2px solid var(--text-color);
  }
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: end;
  }

  transition: 0.5s;
`,ge=c.div`
  transition: 0.8s;

  ${({isVisible:r})=>r?F`
          div {
            scale: 1;
            transition: all 0.5s;
          }

          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
          transform: translateY(0px);
        `:F`
          div {
            transition: all 0.5s;
            scale: 0.7;
          }

          opacity: 0;
          pointer-events: none;
          transform: translateX(-50px);
        `}

  backdrop-filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100vh;
  min-height: 768px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 5;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background: rgb(77, 77, 86);
  background: linear-gradient(
    0deg,
    rgba(77, 77, 86, 1) 0%,
    rgba(55, 55, 62, 1) 22%,
    rgba(47, 47, 53, 1) 30%,
    rgba(43, 43, 49, 1) 34%,
    rgba(37, 37, 42, 1) 53%,
    rgba(18, 18, 20, 1) 85%
  );

  background-size: cover;

  div.contentMenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  div {
    gap: 2rem;
  }

  button:hover {
    border: 1px solid var(--text-color);
    background-color: var(--bg-active-button);
    transition: 0.1s;
  }

  button {
    @media screen and (max-width: 1023px) {
      font-size: 2.2rem;
      width: 30rem;
      height: 8rem;
    }
    @media screen and (max-width: 880px) {
      font-size: 2.2rem;
      width: 28rem;
      height: 7rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 1.6rem;
      width: 25rem;
      height: 6rem;
    }
  }
  > svg.closeMenu:hover {
    transform: rotateY(90deg);
  }
  svg.closeMenu {
    position: absolute;
    top: 2rem;
    right: 2rem;

    transition: 0.7s;
  }
`,be=c.div`
  @media screen and (max-width: 1023px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 880px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
  max-width: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.6rem 2.7rem;
  font-size: 2rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  text-align: center;
  text-shadow: 1px 1px 2px red, 0 0 1em var(--body-bg-color);
`;function xe(){const{setShowLoginInToAccess:r,setInPersonalModel:o,setInEditor:u}=E(),{googleSignIn:s,user:n,logOut:i}=V(),[d,a]=p.exports.useState(),m=async()=>{try{await s()}catch(g){console.log(g)}},h=async()=>{try{await i(),alert("Deslogado com sucesso!")}catch(g){console.log(g)}};function l(){return n!=null?t(ge,{isVisible:d,children:[e(me,{className:"closeMenu",onClick:()=>a(!1),size:40,color:"#4d4d56"}),t("div",{className:"contentMenu",children:[e("img",{className:"userImage",src:n.photoURL,alt:"Foto do usuário"}),e(R,{to:"/",children:e(w,{title:"Início",onClick:()=>{o(!1),u("Editor"),a(!1)}})}),e(w,{title:"Sair",onClick:h}),e(R,{to:"/editor",children:e(w,{title:"Editor",onClick:()=>{a(!1),o(!1),u("Editor")}})})]}),t("div",{className:"contentMenu",children:[e(be,{children:"Redes sociais do criador"}),e(rt,{})]})]}):t(ge,{isVisible:d,children:[e(me,{className:"closeMenu",onClick:()=>a(!1),size:40}),e("div",{className:"contentMenu",children:e(w,{icon:!0,title:"Entrar",onClick:m})}),t("div",{className:"contentMenu",children:[e(be,{children:"Logue para mais funcionalidades:"}),e(w,{title:"Editor",onClick:()=>{a(!1),r(!0)}})," ",e(w,{title:"Modelos pesonalizados",onClick:()=>{a(!1),r(!0)}})]})]})}return t(Zt,{children:[e(yt,{onClick:()=>{window.scrollTo(0,0),a(!0)},size:55,color:"var(--text-color)"}),l()]})}const P=c.div`
  div:hover {
    transition: 0.5s;
  }
  div {
    transition: 0.5s;
  }
`,Q=c.div`
  @media screen and (max-width: 785px) {
    display: flex;
  }

  display: none;

  button {
    background: local;

    border: none;
  }
`,D=c.div`
  @media screen and (max-width: 785px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 1rem 2rem;
  background: rgb(71, 71, 79);
  background: linear-gradient(
    306deg,
    rgba(71, 71, 79, 1) 0%,
    rgba(58, 58, 65, 1) 4%,
    rgba(35, 35, 39, 1) 94%,
    rgba(28, 28, 31, 1) 100%
  );
  width: 22rem;
  border-radius: 10px;
  border: 2px solid var(--text-color);

  text-align: center;

  svg {
    max-width: 3rem;
    max-height: 3rem;
    margin: 0 0 0 15rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`,L=c.div`
  #arrow1 {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background: linear-gradient(
        0deg,
        rgba(236, 232, 232, 1) 0%,
        rgba(201, 198, 200, 1) 50%,
        rgba(77, 77, 86, 1) 100%
      );
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -25px;

      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow1 {
    bottom: -30px;
  }
  right: 17rem;
  z-index: 4;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 1rem 2rem;
  background: rgb(44, 44, 49);
  background: linear-gradient(
    54deg,
    rgba(44, 44, 49, 1) 8%,
    rgba(32, 32, 36, 1) 51%,
    rgba(18, 18, 20, 1) 100%
  );
  width: 22rem;
  border-radius: 10px;
  border: 1px solid var(--text-color);

  text-align: center;

  svg {
    max-width: 3rem;
    max-height: 3rem;
    margin: 0 0 0 15rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`,fe=c.div`
  div:hover {
    transition: 0.5s;
  }
  div {
    transition: 0.5s;
  }
  strong {
    color: rgb(108, 108, 111);
  }
`,we=c.div`
  display: none;
  @media screen and (max-width: 785px) {
    display: flex;
  }
  button {
    background: local;

    border: none;
  }
`,ve=c.div`
  @media screen and (max-width: 785px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 1rem 2rem;
  background: rgb(71, 71, 79);
  background: linear-gradient(
    306deg,
    rgba(71, 71, 79, 1) 0%,
    rgba(58, 58, 65, 1) 4%,
    rgba(35, 35, 39, 1) 94%,
    rgba(28, 28, 31, 1) 100%
  );
  width: 22rem;
  border-radius: 10px;
  border: 2px solid var(--text-color);

  text-align: center;

  img {
    margin: 0 0 0 15rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`,ke=c.div`
  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background: linear-gradient(
        0deg,
        rgba(236, 232, 232, 1) 0%,
        rgba(201, 198, 200, 1) 50%,
        rgba(77, 77, 86, 1) 100%
      );
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -25px;

      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -30px;
  }

  z-index: 4;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 1rem 2rem;
  background: rgb(44, 44, 49);
  background: linear-gradient(
    54deg,
    rgba(44, 44, 49, 1) 8%,
    rgba(32, 32, 36, 1) 51%,
    rgba(18, 18, 20, 1) 100%
  );
  width: 22rem;
  border-radius: 10px;
  border: 1px solid var(--text-color);

  text-align: center;

  img {
    margin: 0 0 0 15rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`;function Jt(){p.exports.useState(!1);const{personalModelForInfo:r}=E(),[o,u]=p.exports.useState(!1),s=p.exports.useRef(null),n=p.exports.useRef(null),[i,d]=p.exports.useState(null),{styles:a,attributes:m}=ae(s.current,n.current,{modifiers:[{name:"arrow",options:{element:i}},{name:"offset",options:{offset:[0,10]}}]});return r.modelType==="bimestre"?t(fe,{children:[" ",t(we,{children:[o?t(ke,{ref:n,style:a.popper,...m.popper,children:[e("div",{ref:d,style:a.arrow,id:"arrow"}),t("p",{children:["São contadas as notas dos 4 bimestres sendo a média",t("strong",{children:[" ",r.average]}),", a primeira nota tem seu valor multiplicado por",t("strong",{children:[" ",r.weight1]})," , a segunda por",t("strong",{children:[" ",r.weight2]})," , a terceira por",t("strong",{children:[" ",r.weight3]})," e a quarta por",t("strong",{children:[" ",r.weight4]}),"."]}),e("img",{src:"src\\assets\\Info.svg",alt:"ícone de informação"})]}):null,e("button",{ref:s,onClick:()=>u(!o),children:e(j,{size:55})})]}),t(ve,{children:[t("p",{children:["São contadas as notas dos 4 bimestres sendo a média",t("strong",{children:[" ",r.average]}),", a primeira nota tem seu valor multiplicado por",t("strong",{children:[" ",r.weight1]})," , a segunda por",t("strong",{children:[" ",r.weight2]})," , a terceira por",t("strong",{children:[" ",r.weight3]})," e a quarta por",t("strong",{children:[" ",r.weight4]}),"."]}),e("img",{src:"src\\assets\\Info.svg",alt:"ícone de informação"})]})]}):r.modelType==="trimestre"?t(fe,{children:[" ",t(we,{children:[o?t(ke,{ref:n,style:a.popper,...m.popper,children:[e("div",{ref:d,style:a.arrow,id:"arrow"}),t("p",{children:["São contadas as notas dos 3 trimestres com a média",t("strong",{children:[" ",r.average]})," , sendo que a primeira nota tem seu valor multiplicado por"," ",t("strong",{children:[" ",r.weight1]}),", a segunda por"," ",t("strong",{children:[" ",r.weight2]})," e a terceira por",t("strong",{children:[" ",r.weight2]}),"."]}),e("img",{src:"src\\assets\\Info.svg",alt:"ícone de informação"})]}):null,e("button",{ref:s,onClick:()=>u(!o),children:e(j,{size:55})})]}),t(ve,{children:[t("p",{children:["São contadas as notas dos 3 trimestres com a média",t("strong",{children:[" ",r.average]})," , sendo que a primeira nota tem seu valor multiplicado por"," ",t("strong",{children:[" ",r.weight1]}),", a segunda por"," ",t("strong",{children:[" ",r.weight2]})," e a terceira por",t("strong",{children:[" ",r.weight2]}),"."]}),e("img",{src:"src\\assets\\Info.svg",alt:"ícone de informação"})]})]}):e(N,{children:e("p",{children:"Ou"})})}function X({text:r,inEditor:o}){const{period:u,inPersonalModel:s}=E(),[n,i]=p.exports.useState(!1),d=p.exports.useRef(null),a=p.exports.useRef(null),[m,h]=p.exports.useState(null),{styles:l,attributes:g}=ae(d.current,a.current,{placement:"top",modifiers:[{name:"arrow",options:{element:m}},{name:"offset",options:{offset:[0,10]}}]});if(o===!0)return s===!0?e(Jt,{}):t(P,{children:[t(Q,{children:[n?t(L,{ref:a,style:l.popper,...g.popper,children:[e("div",{ref:h,style:l.arrow,id:"arrow1"}),e("p",{children:"A mensagem de informação será gerado automaticamente dependendo do modelo criado."}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]}):null,e("button",{ref:d,onClick:()=>i(!n),children:e(j,{size:55})})]}),t(D,{children:[e("p",{children:"A mensagem de informação será gerado automaticamente dependendo do modelo criado."}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]});if(r===void 0){if(u==="bi")return t(P,{children:[t(Q,{children:[n?t(L,{ref:a,style:l.popper,...g.popper,children:[e("div",{ref:h,style:l.arrow,id:"arrow1"}),e("p",{children:"São contadas as notas dos 4 bimestres, sendo que a ultima tem seu valor dobrado"}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]}):null,e("button",{ref:d,onClick:()=>i(!n),children:e(j,{size:55})})]}),t(D,{children:[e("p",{children:"São contadas as notas dos 4 bimestres, sendo que a ultima tem seu valor dobrado"}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]});if(u==="tri")return t(P,{children:[" ",t(Q,{children:[n?t(L,{ref:a,style:l.popper,...g.popper,children:[e("div",{ref:h,style:l.arrow,id:"arrow1"}),e("p",{children:"São contadas as notas dos 3 trimestres, sendo que a segunda nota tem seu valor dobrado e a terceira tem seu valor triplicado"}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]}):null,e("button",{ref:d,onClick:()=>i(!n),children:e(j,{size:55})})]}),t(D,{children:[e("p",{children:"São contadas as notas dos 3 trimestres, sendo que a segunda nota tem seu valor dobrado e a terceira tem seu valor triplicado"}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]})}return t(P,{children:[" ",t(Q,{children:[n?t(L,{ref:a,style:l.popper,...g.popper,children:[e("div",{ref:h,style:l.arrow,id:"arrow1"}),e("p",{children:"São contadas as notas dos 3 trimestres, sendo que a segunda nota tem seu valor dobrado e a terceira tem seu valor triplicado"}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]}):null,e("button",{ref:d,onClick:()=>i(!n),children:e(j,{size:55})})]}),t(D,{children:[e("p",{children:r}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]})}const ye=c.div`
  height: 100%;
  max-height: 67rem;
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`,Ee=c.div`
  height: 100vh;
  width: 100%;
  display: none;
  align-items: center;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: flex-end;
  }
  @media screen and (max-width: 600px) {
    flex-direction: row;
    height: max-content;
  }
`,Ae=c.aside`
  #fakeButton {
    background: var(--bg-cards);
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
  @media screen and (max-width: 1065px) {
    max-width: 20rem;
    height: 67rem;
  }
  @media screen and (max-width: 600px) {
    height: max-content;
    width: 100vw;
  }

  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 67rem;
  justify-content: space-between;

  div {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    max-width: 24rem;
    width: 100%;
    align-items: center;
  }
  button:hover {
    color: var(--response-color);
    border: 1px solid var(--response-color);
    background-color: var(--bg-cards);
    transition: 0.5s;

    svg {
      transition: 0.5s;
      stroke: var(--googleIcon-hover);
    }
  }

  button {
    width: 100%;
    transition: 0.5s;
    svg {
      transition: 0.5s;
    }
  }

  img.userImage:hover {
    border-color: var(--response-color);

    transition: 0.5s;
  }
  img.userImage {
    transition: 0.5s;
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 100%;
    border: 2px solid var(--text-color);
  }
  a {
    width: 100%;
  }
`,Ce=c.div`
  background-color: var(--bg-cards);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.6rem 2.7rem;
  font-size: 2rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  text-align: center;
  text-shadow: 1px 1px 2px red, 0 0 1em var(--body-bg-color);
`;function ot({inEditor:r}){const{setPeriod:o,setInEditor:u,setInPersonalModel:s,setShowLoginInToAccess:n}=E(),{googleSignIn:i,user:d,logOut:a}=V(),m=async()=>{try{await i()}catch(l){console.log(l)}},h=async()=>{try{s(!1),await a()}catch(l){console.log(l)}};return d!=null?t(ye,{children:[" ",t(Ee,{children:[e(xe,{}),e(Y,{text:"Calcule sua nota final ou a nota que precisa tirar para atingir a média, o peso define quantas vezes será contada a nota e o total da soma será dividido pela quantidade de notas somadas!",inEditor:r}),e(X,{inEditor:r})]}),t(Ae,{children:[t("div",{children:[e("img",{className:"userImage",src:d.photoURL,alt:"Imagem do usuário"}),e(R,{to:"/",children:e(w,{title:"Início",onClick:()=>{o("bi"),s(!1),u("Editor")}})}),e(w,{title:"Sair",onClick:h}),e(R,{to:"/editor",children:e(w,{title:"Editor",onClick:()=>{u("Editor"),s(!1)}})})]}),t("div",{children:[" ",e(Ce,{children:"Redes sociais do criador"}),e(rt,{})]})]})]}):t(ye,{children:[t(Ee,{children:[e(xe,{}),e(Y,{text:`Calcule a sua nota final ou a nota que precisa tirar para atingir a\r
média, o peso define quantas vezes será contada a nota e o total da soma será dividido pela quantidade de notas somadas`}),e(X,{})]}),t(Ae,{children:[e("div",{children:e(w,{icon:!0,title:"Entrar",onClick:m})}),t("div",{children:[e(Ce,{children:"Logue para mais funcionalidades:"}),e(w,{id:"fakeButton",title:"Editor",onClick:()=>n(!0)})," ",e(w,{id:"fakeButton",title:"Modelos pesonalizados",onClick:()=>n(!0)})]})]})]})}const Ne=c.div`
  ${({isVisible:r})=>r?F`
          div {
            transform: translateX(0);
            transform: translateY(0px);
          }

          display: flex;
          pointer-events: auto;
        `:F`
          display: none;
          pointer-events: none;

          div {
            transform: translateX(-50px);
            transform: translateY(-100px);
          }
        `}

  transition:  1s;
  @media screen and (max-width: 785px) {
    min-height: 75rem;
  }
  position: absolute;

  width: max-content;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(1.5px);

  .alertBox {
    transition: all 1s;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2.5rem;
    justify-content: center;
    width: 325px;
  }
  @media screen and (max-width: 600px) {
    .alertBox {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 333px) {
    .alertBox {
      width: 300px;
      max-height: 260px;
    }
    .background {
      width: 300px;
      max-height: 260px;
    }
    .absolute {
      max-width: 300px;
      max-height: 260px;
    }
  }

  .background {
    transition: all 1s;
    img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: 100%;
      height: 300px;
    }
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    #oops {
      transition: all 1s;

      height: 270px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      opacity: 1;
      z-index: 100;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      h2 {
        font-family: 'Roboto Mono', monospace;

        font-size: 3.4rem;
        font-weight: 400;
      }
    }

    .absolute {
      transition: all 1s;
      position: absolute;
      width: 325px;
      height: 270px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      background-color: #cf2929;
      opacity: 0.65;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .green {
      background-color: #80ac4b;
      height: 280px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 270px;
    justify-content: space-around;
    font-size: 2rem;
    font-weight: 400;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .message {
    transition: all 1s;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 5rem 3rem 3rem 3rem;

    background: rgb(44, 44, 49);
    background: radial-gradient(
      circle,
      rgba(44, 44, 49, 1) 0%,
      rgba(47, 47, 52, 1) 34%,
      rgba(51, 51, 56, 1) 67%,
      rgba(56, 56, 61, 1) 83%,
      rgba(68, 68, 74, 1) 100%
    );
    width: 100%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    Link {
      width: 100%;
    }
    button {
      width: 100%;
      transition: all 2s;
      font-size: 1.6rem;
      font-weight: 700;
      padding: 1.5rem 1rem;

      border-color: var(--text-color);
      border-radius: 40px;
      transition: all 1s;
      background: rgb(66, 66, 71);
      background: radial-gradient(
        circle,
        rgba(66, 66, 71, 1) 16%,
        rgba(44, 44, 49, 1) 76%
      );
      &.blue {
        color: rgb(71, 132, 221);
      }
      &.blue:hover {
        color: var(--text-color);

        background: rgb(86, 87, 209);
        background: linear-gradient(
          54deg,
          rgba(86, 87, 209, 1) 0%,
          rgba(0, 10, 115, 1) 100%
        );
        transition: all 0.5;
      }
      &.red {
        color: #f56a6a;
      }

      &.red:hover {
        color: var(--text-color);

        transition: 0.5s;
        background: rgb(221, 71, 71);
        background: linear-gradient(
          54deg,
          rgba(221, 71, 71, 1) 0%,
          rgba(213, 1, 1, 1) 100%
        );
        transition: all 0.5;
      }

      &.green {
      }
      &.green:hover {
        transition: all 0.5;
        background: rgb(128, 172, 75);
        background: linear-gradient(
          49deg,
          rgba(128, 172, 75, 1) 0%,
          rgba(83, 136, 19, 1) 100%
        );
      }
      &.editor {
      }
      &.editor:hover {
        transition: all 0.5;
        background: rgb(209, 28, 28);
        background: linear-gradient(
          49deg,
          rgba(209, 28, 28, 1) 0%,
          rgba(84, 75, 75, 1) 51%,
          rgba(125, 111, 111, 1) 100%
        );
      }
    }
    p {
      color: var(--text-color);
      font-size: 2rem;
      text-align: center;
    }
  }
  .messageSuccess {
    height: 250px;
    justify-content: space-around;
  }
`;function $t(){const{googleSignIn:r,user:o}=V(),{setShowLoginInToAccess:u,showLoginInToAccess:s,setInEditor:n}=E(),i=()=>{try{r()}catch(d){console.log(d)}};return o!=null?e(Ne,{isVisible:s,children:t("div",{className:"alertBox",children:[t("div",{className:"background",children:[e("img",{src:"https://user-images.githubusercontent.com/102992996/216957519-0ff6cd2c-6372-4057-a68c-c43dce035336.jpg",alt:"Imagem de criança comemorando o sucesso"}),e("div",{className:"absolute green"}),t("div",{id:"oops",children:[e(Et,{size:90}),e("h2",{children:"Sucesso"})]})]}),t("div",{className:"message messageSuccess",children:[e("p",{children:"Obrigado por logar!"}),e(R,{to:"/editor",children:e("button",{className:"button editor ",onClick:()=>{n("Editor"),u(!1)},children:"EDITOR"})}),e("button",{className:"button green ",onClick:()=>u(!1),children:"VOLTAR"})]})]})}):e(Ne,{isVisible:s,children:t("div",{className:"alertBox",children:[t("div",{className:"background",children:[e("img",{src:"data:image/jpeg;base64,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",alt:"Imagem de garota sorrindo e fogo ao fundo"}),e("div",{className:"absolute"}),t("div",{id:"oops",children:[e(At,{size:90}),e("h2",{children:"OOPS!"})]})]}),t("div",{className:"message",children:[e("p",{children:"Logue com o google para mais funcionalidades."}),e("button",{className:"button blue ",onClick:()=>i(),children:"LOGAR"}),e("button",{className:"button red ",onClick:()=>u(!1),children:"VOLTAR"})]})]})})}async function _t(r,o){o!=null&&r!=null&&await zt(Ht(q,`users/${r}/models`,o))}async function Me(r,{modelName:o,modelType:u,weight1:s,weight2:n,weight3:i,weight4:d,average:a}){if(d===void 0)try{const m=await he(ie(q,`users/${r}/models`),{modelName:o,modelType:u,weight1:s,weight2:n,weight3:i,average:a})}catch(m){alert(m)}else try{const m=await he(ie(q,`users/${r}/models`),{modelName:o,modelType:u,weight1:s,weight2:n,weight3:i,weight4:d,average:a})}catch(m){alert(m)}}const at=M`
from {
  opacity: 0;
  transform: translatex(-100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,je=c.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  max-height: 100%;
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  div {
    animation: ${at} 0.7s backwards;
  }
  div:nth-child(2) {
    animation-delay: 1.5s;
  }
`,Ie=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    animation: ${at} 0.7s backwards;
  }

  div:nth-child(5) {
    animation-delay: 0.2s;
  }

  div:nth-child(4) {
    animation-delay: 0.6s;
  }
  div:nth-child(3) {
    animation-delay: 0.9s;
  }
  div:nth-child(2) {
    animation-delay: 1.2s;
  }
`,Se=c.h3`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--response-color);
`,Be=c.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p.blue {
    color: var(--blue-response);
  }

  p.red {
    color: var(--red-response);
  }
`,er=c.div`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  input {
    font-size: 2rem;
    width: 4.5rem;
    height: 3.5rem;
    border-radius: 4px;
    background: rgb(44, 44, 49);
    background: linear-gradient(
      54deg,
      rgba(44, 44, 49, 1) 0%,
      rgba(72, 72, 76, 1) 38%,
      rgba(108, 108, 111, 1) 100%
    );
    text-align: center;
    align-items: center;
    margin: auto;
  }
  label {
    font-size: 2rem;
    font-weight: 400;
  }
`;function f({returnValue:r,numberGrade:o}){const[n,i]=p.exports.useState(""),d=a=>{const m=Math.max(0,Math.min(100,Number(a.target.value)));i(m),r(m)};return t(er,{children:[" ",t("label",{htmlFor:"number"+o,children:["Nota ",o,": "]}),e("input",{placeholder:"0",onChange:d,value:n===0?"":n,id:"number"+o,type:"number"})]})}const tr=c.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  min-width: 4.5rem;
  min-height: 3.5rem;
  max-width: max-content;
  padding: 1rem;
  background: rgb(44, 44, 49);
  background: linear-gradient(
    54deg,
    rgba(44, 44, 49, 1) 8%,
    rgba(32, 32, 36, 1) 51%,
    rgba(18, 18, 20, 1) 100%
  );
  border-radius: 4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;function Ge({v1:r,v2:o,v3:u,v4:s,weight1:n,weight2:i,weight3:d,weight4:a}){if(a!=null&&s!=null)var m=(r*n+o*i+u*d+s*a)/(n+i+d+a),h=m>0?m:0,l=Number.isInteger(h)?h:h.toFixed(1);else if(d!=null){const g=r*n,y=o*i,b=u*d;var m=(g+y+b)/(n+i+d),h=m>0?m:0,l=Number.isInteger(h)?h:h.toFixed(2)}else l=0;return e(tr,{id:"response",children:l})}function rr(r){const[o,u]=p.exports.useState(),[s,n]=p.exports.useState(),[i,d]=p.exports.useState(),[a,m]=p.exports.useState();function h(b){u(b)}function l(b){n(b)}function g(b){d(b)}function y(b){m(b)}return r.modelType==="bimestre"?t(je,{children:[" ",t(Ie,{children:[e("h3",{children:"Nota Final "}),e(f,{returnValue:h,numberGrade:"1"}),e(f,{returnValue:l,numberGrade:"2"}),e(f,{returnValue:g,numberGrade:"3"}),e(f,{returnValue:y,numberGrade:"4"})]}),t(Be,{children:[e(Se,{children:"Resultado:"}),e(Ge,{v1:Number(o),v2:Number(s),v3:Number(i),v4:Number(a),weight1:Number(r.weight1),weight2:Number(r.weight2),weight3:Number(r.weight3),weight4:Number(r.weight4)})]})]}):r.modelType==="trimestre"?t(je,{children:[" ",t(Ie,{children:[e("h3",{children:"Nota Final "}),e(f,{returnValue:h,numberGrade:"1"}),e(f,{returnValue:l,numberGrade:"2"}),e(f,{returnValue:g,numberGrade:"3"})]}),t(Be,{children:[e(Se,{children:"Resultado:"}),e(Ge,{v1:Number(o),v2:Number(s),v3:Number(i),weight1:Number(r.weight1),weight2:Number(r.weight2),weight3:Number(r.weight3)})]})]}):e(N,{})}const nr=c.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  min-width: 4.5rem;
  min-height: 3.5rem;
  max-width: max-content;
  padding: 1rem;
  background: rgb(44, 44, 49);
  background: linear-gradient(
    54deg,
    rgba(44, 44, 49, 1) 8%,
    rgba(32, 32, 36, 1) 51%,
    rgba(18, 18, 20, 1) 100%
  );
  border-radius: 4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;function Re({v1:r,v2:o,v3:u,weight1:s,weight2:n,weight3:i,weight4:d,average:a}){if(u!=null&&d!=null){const y=r*s+o*n+u*i;var m=a*s+a*n+a*i+a*d-y,h=m/d,l=h>0?h:0,g=Number.isInteger(l)?l:l.toFixed(1)}else{const y=r*s+o*n;var m=a*s+a*n+a*i-y,h=m/i,l=h>0?h:0,g=Number.isInteger(l)?l:l.toFixed(1)}return e(nr,{children:g>100?"Impossível":g})}const st=M`
from {
  opacity: 0;
  transform: translatex(100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,Ve=c.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  h2.h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  div {
    animation: ${st} 0.7s backwards;
  }
  div:nth-child(2) {
    animation-delay: 1.5s;
  }
`,ze=c.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  div {
    animation: ${st} 0.7s backwards;
  }

  div:nth-child(4) {
    animation-delay: 0.6s;
  }
  div:nth-child(3) {
    animation-delay: 0.9s;
  }
  div:nth-child(2) {
    animation-delay: 1.2s;
  }
`,He=c.h3`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--response-color);
`,Te=c.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;function ir(r){const[o,u]=p.exports.useState(),[s,n]=p.exports.useState(),[i,d]=p.exports.useState();function a(l){u(l)}function m(l){n(l)}function h(l){d(l)}return r.modelType==="bimestre"?t(Ve,{children:[" ",t(ze,{children:[e("h3",{className:"h2",children:"Nota necessária "}),e(f,{returnValue:a,numberGrade:"1"}),e(f,{returnValue:m,numberGrade:"2"}),e(f,{returnValue:h,numberGrade:"3"})]}),t(Te,{children:[e(He,{children:"Precisa de:"}),e(Re,{v1:Number(o),v2:Number(s),v3:Number(i),weight1:Number(r.weight1),weight2:Number(r.weight2),weight3:Number(r.weight3),weight4:Number(r.weight4),average:Number(r.average)})]})]}):r.modelType==="trimestre"?t(Ve,{children:[" ",t(ze,{children:[e("h3",{className:"h2",children:"Nota necessária "}),e(f,{returnValue:a,numberGrade:"1"}),e(f,{returnValue:m,numberGrade:"2"})]}),t(Te,{children:[e(He,{children:"Precisa de:"}),e(Re,{v1:Number(o),v2:Number(s),weight1:Number(r.weight1),weight2:Number(r.weight2),weight3:Number(r.weight3),average:Number(r.average)})]})]}):e(N,{})}const or=c.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 1rem;
`;function ar({average:r,modelName:o,modelType:u,weight1:s,weight2:n,weight3:i,weight4:d}){return t(or,{children:[e(rr,{modelName:o,modelType:u,weight1:s,weight2:n,weight3:i,weight4:d,average:r}),e(ir,{modelName:o,modelType:u,weight1:s,weight2:n,weight3:i,weight4:d,average:r})]})}const A=M`
from {
  opacity: 0;
  transform: translatex(-100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,sr=M`
from {
  opacity: 0;
  transform: translatey(50px);
}
to {
  opacity: 1;
  transform: translatey(0);
}
`,se=M`
from {
  opacity: 0;
  transform: translatex(100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,ne=c.div`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  width: 100%;
  gap: 1rem;
  border: none;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  align-items: center;

  ul {
    p {
      display: flex;
      background-image: linear-gradient(
        320deg,
        rgba(148, 129, 141, 1) 8%,
        rgba(227, 126, 135, 1) 50%,
        rgba(221, 86, 93, 1) 82%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: black;
      width: 100%;
      font-size: 1.6rem;
      text-align: center;
      justify-content: center;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
    width: 100%;
    height: 100%;
    div button:nth-child(1) {
      animation-delay: 0.1s;
    }
    div:nth-child(2) {
      animation-delay: 0.2s;
    }
    div:nth-child(3) {
      animation-delay: 0.3s;
    }
    div:nth-child(4) {
      animation-delay: 0.4s;
    }
    div:nth-child(5) {
      animation-delay: 0.5s;
    }
    div:nth-child(6) {
      animation-delay: 0.6s;
    }
  }

  li {
    list-style: none;
  }

  div.pessoalModelInputs {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  h3 {
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;

    justify-content: center;
  }
  h3.closeAndNamePersonalModel {
    display: flex;
    background-image: linear-gradient(
      320deg,
      rgba(75, 75, 84, 1) 0%,
      rgba(114, 97, 104, 1) 0%,
      rgba(126, 104, 110, 1) 33%,
      rgba(145, 116, 120, 1) 44%,
      rgba(165, 128, 130, 1) 73%,
      rgba(194, 145, 145, 1) 100%
    );

    background-clip: text;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;

    color: black;
    justify-content: space-around;
    width: 100%;
  }
  svg {
    color: var(--text-color);
  }

  #submitModelButton {
    transition: 0.3s;
    color: var(--response-color);
    background: rgb(44, 44, 49);
    background: linear-gradient(
      54deg,
      rgba(44, 44, 49, 1) 8%,
      rgba(32, 32, 36, 1) 51%,
      rgba(18, 18, 20, 1) 100%
    );
    border-color: var(--response-color);
    transition: 0.2s;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
    animation: ${sr} 0.7s backwards;
    animation-delay: 1.4s;
  }
  #submitModelButton:active {
    transition: 0.3s;
    color: var(--text-color);
    border-color: var(--text-color);
    background: var(--bg-active-button);
    position: bottom;
  }
`,C=c.label`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    font-size: 2rem;
    width: 4rem;
    height: 3.5rem;
    border-radius: 10px;
    background: rgb(44, 44, 49);
    background: linear-gradient(
      54deg,
      rgba(44, 44, 49, 1) 0%,
      rgba(72, 72, 76, 1) 38%,
      rgba(108, 108, 111, 1) 100%
    );
    text-align: center;
    align-items: center;
    margin: auto;
  }

  font-size: 1.8rem;
  font-weight: 400;
`,dr=c.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,Pe=c.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 23.3rem;
  animation: ${A} 0.7s backwards;
  justify-content: center;
`,lr=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  animation: ${se} 0.7s backwards;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
    }
  }
`,cr=c.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  fieldset {
    width: 100%;
    height: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  legend {
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--text-color);
    text-align: center;
    width: 100%;
  }

  label {
    font-size: 1.8rem;
    font-weight: 400;
  }
  width: 100%;

  select {
    background: rgb(44, 44, 49);
    background: linear-gradient(
      317deg,
      rgba(44, 44, 49, 1) 0%,
      rgba(98, 46, 48, 1) 21%,
      rgba(119, 51, 51, 1) 100%
    );
    background-color: rgb(44, 44, 49);
    border-radius: 4px;
    border: 1.5px solid var(--body-bg-color);
    padding-left: 1rem;
    font-size: 1.6rem;
  }

  h3:nth-child(1) {
    animation: ${A} 0.7s backwards;
    animation-delay: 0.2s;
  }

  label:nth-child(5) {
    animation: ${A} 0.7s backwards;
    animation-delay: 0.4s;
  }
  label:nth-child(4) {
    animation: ${A} 0.7s backwards;
    animation-delay: 0.6s;
  }
  label:nth-child(3) {
    animation: ${A} 0.7s backwards;
    animation-delay: 0.8s;
  }
  label:nth-child(2) {
    animation: ${A} 0.7s backwards;
    animation-delay: 1s;
  }
  label:nth-child(1) {
    animation: ${A} 0.7s backwards;
    animation-delay: 1.2s;
  }
`,ur=c.input`
  border: 1px solid black;
  box-shadow: none;
  -webkit-box-shadow: 0 0 0px 1000px var(--bg-input) inset;
  -webkit-text-fill-color: var(--text-color);
  transition: background-color 5000s ease-in-out 0s;
  border-radius: 4px;
  width: 17rem;
  font-size: 1.6rem;
  color: var(--text-color);
  text-align: center;
  text-shadow: -1px -1px 0px black, -1px 1px 0px black, 1px -1px 0px black,
    1px 0px 0px black;
  background-color: var(--bg-input);
  padding: 0.8rem 2rem;
  animation: ${se} 0.7s backwards;
`;c.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;const mr=c.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  transition: 0.5s;

  svg {
    transition: 0.5s;
    animation: ${se} 0.7s backwards;
    color: var(--text-color);

    background: rgb(26, 26, 29);
    background: linear-gradient(
      320deg,
      rgba(26, 26, 29, 1) 0%,
      rgba(64, 57, 62, 1) 33%,
      rgba(77, 68, 74, 1) 44%,
      rgba(88, 77, 84, 1) 54%,
      rgba(107, 93, 101, 1) 63%,
      rgba(127, 105, 111, 1) 69%,
      rgba(131, 107, 113, 1) 85%,
      rgba(165, 128, 130, 1) 99%
    );
    border-radius: 100%;
  }
  animation: ${A} 0.7s backwards;
  #selectPersonalModel {
    transition: 0.5s;

    gap: 1rem;
    justify-content: center;
    background: rgb(75, 75, 84);
    background: linear-gradient(
      320deg,
      rgba(75, 75, 84, 1) 3%,
      rgba(75, 75, 84, 1) 4%,
      rgba(58, 58, 65, 1) 11%,
      rgba(45, 45, 51, 1) 18%,
      rgba(40, 40, 46, 1) 24%,
      rgba(40, 40, 46, 1) 28%,
      rgba(41, 41, 47, 1) 37%,
      rgba(41, 41, 47, 1) 76%,
      rgba(63, 48, 48, 1) 91%,
      rgba(77, 52, 52, 1) 100%
    );
    width: 100%;
    padding: 1.2rem;
    font-size: 1.6rem;
    font-weight: 500;

    border-radius: 4px;
    border: 1px solid rgb(75, 75, 84);
  }
`;function hr(){const{setInEditor:r,inEditor:o,setInPersonalModel:u,setPersonalModelForInfo:s,inPersonalModel:n}=E(),[i,d]=p.exports.useState({}),{register:a,handleSubmit:m}=Pt(),h=0,l=9,[g,y]=p.exports.useState(""),[b,de]=p.exports.useState(""),[z,ut]=p.exports.useState(""),[le,mt]=p.exports.useState(""),[I,O]=p.exports.useState("bimestre"),[U,ht]=p.exports.useState([{}]),[ce,ue]=p.exports.useState(!0),[pt,K]=p.exports.useState(!0),{uid:H}=V();if(p.exports.useEffect(()=>{async function S(B){return new Promise((v,W)=>{const Z=ie(q,`users/${B}/models`);Tt(Z).then(G=>{let T=[];return G.forEach(x=>{let k={id:x.id,...x.data()};return T.push(k)}),T}).then(G=>{ht(G)})})}S(H)},[o,ce]),o==="Editor"){let S=function(){return I==="bimestre"?t(Pe,{children:[e("h3",{children:"Peso das notas"}),t(C,{children:["Nota :1",e("input",{placeholder:"0",...a("weight1"),onChange:B,value:g===0?"":g,type:"number",required:!0})]}),t(C,{children:["Nota: 2",e("input",{placeholder:"0",...a("weight2"),onChange:v,value:b===0?"":b,type:"number",required:!0})]}),t(C,{children:["Nota: 3",e("input",{placeholder:"0",...a("weight3"),onChange:W,value:z===0?"":z,type:"number",required:!0})]}),t(C,{children:["Nota: 4",e("input",{placeholder:"0",...a("weight4"),onChange:Z,value:le===0?"":le,type:"number",required:!0})]})]}):I==="trimestre"?t(Pe,{children:[e("h3",{children:"Peso das notas"}),t(C,{children:["Nota :1",e("input",{placeholder:"0",...a("weight1"),onChange:B,value:g===0?"":g,type:"number",required:!0})]}),t(C,{children:["Nota: 2",e("input",{placeholder:"0",...a("weight2"),onChange:v,value:b===0?"":b,type:"number",required:!0})]}),t(C,{children:["Nota: 3",e("input",{placeholder:"0",...a("weight3"),onChange:W,value:z===0?"":z,type:"number",required:!0})]})]}):e(N,{})};const B=x=>{const k=Math.max(h,Math.min(l,Number(x.target.value)));y(k)},v=x=>{const k=Math.max(h,Math.min(l,Number(x.target.value)));de(k)},W=x=>{const k=Math.max(h,Math.min(l,Number(x.target.value)));ut(k)},Z=x=>{const k=Math.max(h,Math.min(l,Number(x.target.value)));mt(k)},G=async x=>{if(pt)if(U[5]!=null)alert("O máximo de modelos por usuário foi atingido!");else{if(K(!1),I==="bimestre")try{await Me(H,{modelName:x.modelName,modelType:"bimestre",weight1:x.weight1,weight2:x.weight2,weight3:x.weight3,weight4:x.weight4,average:x.average}).then(()=>r("Modelos")).then(()=>K(!0))}catch(k){console.error("Error:",k)}if(I==="trimestre")try{await Me(H,{modelName:x.modelName,modelType:"trimestre",weight1:x.weight1,weight2:x.weight2,weight3:x.weight3,average:x.average}).then(()=>r("Modelos")).then(()=>K(!0))}catch(k){console.error("Error:",k)}}},T=x=>{const k=x.currentTarget.value;k==="bimestre"&&O("bimestre"),k==="trimestre"&&O("trimestre")};return e(ne,{children:e(cr,{onSubmit:m(G),children:t("fieldset",{children:[e("legend",{children:"Crie seu modelo"}),t(dr,{children:[S(),t(lr,{children:[t("div",{children:[e("h3",{children:"Modelo"}),t("select",{onChange:T,id:"modelSelect",children:[e("option",{value:"bimestre",children:"Bimestre"}),e("option",{value:"trimestre",children:"Trimestre"})]})]}),t("div",{children:[e("h3",{children:"Média"}),t("select",{...a("average"),children:[e("option",{value:"50",children:"50"}),e("option",{value:"60",children:"60"}),e("option",{value:"70",children:"70"})]})]}),t("div",{children:[e("h3",{children:"Nome do modelo"}),e(ur,{...a("modelName"),type:"text",placeholder:"Nome do modelo",required:!0,maxLength:17})]})]})]}),e(w,{id:"submitModelButton",type:"submit",title:"Salvar"})]})})})}if(o==="Modelos"){if(I==="trimestre"&&O("bimestre"),n)return t(ne,{children:[t("h3",{className:"closeAndNamePersonalModel",children:[e("strong",{children:i.modelName})," ",e(Ct,{size:30,onClick:()=>{u(!1)}})]}),e("div",{className:"pessoalModelInputs",children:e(ar,{average:i.average,modelName:i.modelName,modelType:i.modelType,weight1:i.weight1,weight2:i.weight2,weight3:i.weight3,weight4:i.weight4})})]});if(n===!1){let S=function(v){d(v),s(v),u(!0)};return t(ne,{children:[t("h2",{children:["Meus Modelos ",e(Nt,{color:"var(--text-color)"})]}),e("div",{className:"pessoalModelInputs",children:e("ul",{children:function(){return U[0]===void 0?e("p",{children:"Ainda não há modelos criados "}):U.map(v=>t(mr,{children:[e(w,{id:"selectPersonalModel",onClick:async()=>{S({average:v.average,modelName:v.modelName,weight1:v.weight1,modelType:v.modelType,weight2:v.weight2,weight3:v.weight3,weight4:v.weight4})},title:v.modelName}),e(Mt,{size:25,onClick:async()=>{await _t(H,v.id).then(()=>{ue(ce===!1)})}})]},v.id))}()})})]})}}return e(N,{})}const pr=c.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  min-width: 4.5rem;
  min-height: 3.5rem;
  max-width: max-content;
  padding: 1rem;
  background: rgb(44, 44, 49);
  background: linear-gradient(
    54deg,
    rgba(44, 44, 49, 1) 8%,
    rgba(32, 32, 36, 1) 51%,
    rgba(18, 18, 20, 1) 100%
  );
  border-radius: 4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;function Qe({v1:r,v2:o,v3:u,v4:s}){var a,m,h,l;if(s!=null){var n=(r+o+u+2*s)/5,i=n>0?n:0,d=Number.isInteger(i)?i:i.toFixed(1);d>59?((a=document.getElementById("response"))==null||a.classList.remove("red"),(m=document.getElementById("response"))==null||m.classList.add("blue")):((h=document.getElementById("response"))==null||h.classList.remove("blue"),(l=document.getElementById("response"))==null||l.classList.add("red"))}else var n=(r+o*2+u*3)/6,i=n>0?n:0,d=Number.isInteger(i)?i:i.toFixed(1);return e(pr,{id:"response",children:d})}const dt=M`
from {
  opacity: 0;
  transform: translatex(-100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,De=c.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;

  height: 100%;
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
  }

  div {
    animation: ${dt} 0.7s backwards;
  }
  div:nth-child(2) {
    animation-delay: 1.5s;
  }
`,Le=c.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  div {
    animation: ${dt} 0.7s backwards;
  }

  div:nth-child(5) {
    animation-delay: 0.2s;
  }

  div:nth-child(4) {
    animation-delay: 0.6s;
  }
  div:nth-child(3) {
    animation-delay: 0.9s;
  }
  div:nth-child(2) {
    animation-delay: 1.2s;
  }
`,Fe=c.h3`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--response-color);
`,Ye=c.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p.blue {
    color: var(--blue-response);
  }

  p.red {
    color: var(--red-response);
  }
`;function gr({PeriodOfTime:r}){const[o,u]=p.exports.useState(),[s,n]=p.exports.useState(),[i,d]=p.exports.useState(),[a,m]=p.exports.useState();function h(b){u(b)}function l(b){n(b)}function g(b){d(b)}function y(b){m(b)}return r==="bi"?t(De,{children:[" ",t(Le,{children:[e("h2",{children:"Nota Final "}),e(f,{returnValue:h,numberGrade:"1"}),e(f,{returnValue:l,numberGrade:"2"}),e(f,{returnValue:g,numberGrade:"3"}),e(f,{returnValue:y,numberGrade:"4"})]}),t(Ye,{children:[e(Fe,{children:"Resultado:"}),e(Qe,{v1:Number(o),v2:Number(s),v3:Number(i),v4:Number(a)})]})]}):r==="tri"?t(De,{children:[" ",t(Le,{children:[e("h2",{children:"Nota Final "}),e(f,{returnValue:h,numberGrade:"1"}),e(f,{returnValue:l,numberGrade:"2"}),e(f,{returnValue:g,numberGrade:"3"})]}),t(Ye,{children:[e(Fe,{children:"Resultado:"}),e(Qe,{v1:Number(o),v2:Number(s),v3:Number(i)})]})]}):e(N,{})}const br=c.header`
  background: rgb(44, 44, 49);
  background: radial-gradient(
    circle,
    rgba(44, 44, 49, 1) 7%,
    rgba(31, 31, 34, 1) 96%
  );
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2.6rem 3.8rem;
  align-items: center;
  border-radius: 4px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;function qe(){return t(br,{children:[e("h1",{id:"top",children:"Calculadora de Notas"}),e(jt,{size:90,color:"var(--text-color)"})]})}const Xe=c.div`
  @media screen and (max-width: 320px) {
    max-width: 31rem;
  }
  display: flex;
  width: 100%;

  justify-content: space-between;

  button.active {
    border: 1px solid var(--text-color);

    background: rgb(66, 66, 71);
    background: radial-gradient(
      circle,
      rgba(66, 66, 71, 1) 16%,
      rgba(44, 44, 49, 1) 76%
    );
    transition: 0.7s;
  }
  button {
    background: rgb(44, 44, 49);
    background: radial-gradient(
      circle,
      rgba(44, 44, 49, 1) 7%,
      rgba(31, 31, 34, 1) 96%
    );
    @media screen and (max-width: 320px) {
      width: 15rem;
      padding: 1.5rem 1rem;
    }
    @media screen and (max-width: 450px) {
      width: 20rem;
      padding: 1.5rem 1rem;
    }
    @media screen and (max-width: 425px) {
      width: 18rem;
      padding: 1.5rem 2rem;
    }

    @media screen and (max-width: 375px) {
      width: 16rem;
      padding: 1.5rem 2rem;
    }
    @media screen and (max-width: 325px) {
      width: 15rem;
      padding: 1.5rem 2rem;
    }
  }
`;function Oe({inWorkshop:r}){var d,a,m,h,l,g,y,b;const{period:o,setPeriod:u,inEditor:s,setInEditor:n,setInPersonalModel:i}=E();return r?(s==="Editor"&&((d=document.getElementById("button1"))==null||d.classList.add("active"),(a=document.getElementById("button2"))==null||a.classList.remove("active")),s==="Modelos"&&((m=document.getElementById("button2"))==null||m.classList.add("active"),(h=document.getElementById("button1"))==null||h.classList.remove("active")),t(Xe,{children:[e(w,{className:"active",id:"button1",onClick:()=>{n("Editor"),i(!1)},title:"Editor"}),e(w,{id:"button2",onClick:()=>n("Modelos"),title:"Meus Modelos"})]})):(o==="bi"&&((l=document.getElementById("button1"))==null||l.classList.add("active"),(g=document.getElementById("button2"))==null||g.classList.remove("active")),o==="tri"&&((y=document.getElementById("button2"))==null||y.classList.add("active"),(b=document.getElementById("button1"))==null||b.classList.remove("active")),t(Xe,{children:[e(w,{className:"active",id:"button1",onClick:()=>u("bi"),title:"Bimestre"}),e(w,{id:"button2",onClick:()=>u("tri"),title:"Trimestre"})]}))}const lt=M`
from {
  opacity: 0;
  transform: translatex(100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,Ue=c.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  h2 {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
  }
  div {
    animation: ${lt} 0.7s backwards;
  }
  div:nth-child(2) {
    animation-delay: 1.5s;
  }
`,Ke=c.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  div {
    animation: ${lt} 0.7s backwards;
  }

  div:nth-child(4) {
    animation-delay: 0.6s;
  }
  div:nth-child(3) {
    animation-delay: 0.9s;
  }
  div:nth-child(2) {
    animation-delay: 1.2s;
  }
`,We=c.h3`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--response-color);
`,Ze=c.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,xr=c.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  min-width: 4.5rem;
  min-height: 3.5rem;
  max-width: max-content;
  padding: 1rem;
  background: rgb(44, 44, 49);
  background: linear-gradient(
    54deg,
    rgba(44, 44, 49, 1) 8%,
    rgba(32, 32, 36, 1) 51%,
    rgba(18, 18, 20, 1) 100%
  );
  border-radius: 4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;function Je({v1:r,v2:o,v3:u}){if(u!=null)var s=300-(r+o+u),n=s/2,i=n>0?n:0,d=Number.isInteger(i)?i:i.toFixed(1);else var s=360-(r+o*2),n=s/3,i=n>0?n:0,d=Number.isInteger(i)?i:i.toFixed(1);return e(xr,{children:d>100?"Impossível":d})}function fr({PeriodOfTime:r}){const[o,u]=p.exports.useState(),[s,n]=p.exports.useState(),[i,d]=p.exports.useState();function a(l){u(l)}function m(l){n(l)}function h(l){d(l)}return r==="bi"?t(Ue,{children:[" ",t(Ke,{children:[e("h2",{children:"Nota necessária "}),e(f,{returnValue:a,numberGrade:"1"}),e(f,{returnValue:m,numberGrade:"2"}),e(f,{returnValue:h,numberGrade:"3"})]}),t(Ze,{children:[e(We,{children:"Precisa de:"}),e(Je,{v1:Number(o),v2:Number(s),v3:Number(i)})]})]}):r==="tri"?t(Ue,{children:[" ",t(Ke,{children:[e("h2",{children:"Nota necessária "}),e(f,{returnValue:a,numberGrade:"1"}),e(f,{returnValue:m,numberGrade:"2"})]}),t(Ze,{children:[e(We,{children:"Precisa de:"}),e(Je,{v1:Number(o),v2:Number(s)})]})]}):e(N,{})}const $e=c.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  max-height: 67rem;

  h1 {
    font-size: 3.4rem;
    font-weight: 700;
  }

  @media screen and (max-width: 1065px) {
    height: 67rem;
  }

  @media screen and (max-width: 500px) {
    max-width: 45rem;
  }
  @media screen and (max-width: 425px) {
    max-width: 40rem;
  }
  @media screen and (max-width: 400px) {
    max-width: 37rem;
  }
  @media screen and (max-width: 375px) {
    max-width: 35rem;
  }
  @media screen and (max-width: 350px) {
    max-width: 31rem;
  }

  div.divWithBackground {
    @media screen and (max-width: 375px) {
      padding: 5rem 1.5rem 2rem 1.5rem;
    }

    background: rgb(44, 44, 49);
    background: radial-gradient(
      circle,
      rgba(44, 44, 49, 1) 7%,
      rgba(31, 31, 34, 1) 96%
    );
    height: 100%;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5rem 4.5rem 2rem 4.5rem;
  }
`;c.div`
  input {
    width: 3rem;
  }
`;function ct({inWorkshop:r}){const{period:o}=E();return r===!0?t($e,{children:[e(qe,{}),e(Oe,{inWorkshop:!0}),e("div",{className:"divWithBackground",children:e(hr,{})})]}):t($e,{children:[e(qe,{}),e(Oe,{}),t("div",{className:"divWithBackground",children:[e(gr,{PeriodOfTime:o}),e(fr,{PeriodOfTime:o})]})]})}const wr=c.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 13%;
  max-width: 100%;
  height: 100vh;
  padding: 2.6rem 2.6rem;

  @media screen and (max-width: 1245px) {
    gap: 7%;
  }
  @media screen and (max-width: 1150px) {
    gap: 5%;
  }
  @media screen and (max-width: 1065px) {
    height: 100%;
  }
  @media screen and (max-width: 785px) {
    min-height: 67rem;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 0;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
  }
`,vr=c.div`
  @media screen and (max-width: 1023px) {
    display: none;
  }
  min-height: 40rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-width: 25rem;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
`;function kr(){const{period:r}=E();return t(wr,{children:[t(vr,{children:[e(X,{period:r}),e(Y,{text:`Calcule a sua nota final ou a nota que precisa tirar para atingir a
        média, o peso define quantas vezes será contada a nota e o total da soma será dividido pela quantidade de notas somadas`})]}),e($t,{}),e(ct,{}),e(ot,{})]})}const yr=c.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 13%;
  max-width: 100%;
  height: 100vh;
  padding: 2.6rem 2.6rem;

  @media screen and (max-width: 1245px) {
    gap: 7%;
  }
  @media screen and (max-width: 1150px) {
    gap: 5%;
  }
  @media screen and (max-width: 1065px) {
    height: 100%;
  }
  @media screen and (max-width: 785px) {
    min-height: 67rem;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 0;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
  }
`,Er=c.div`
  @media screen and (max-width: 1023px) {
    display: none;
  }
  min-height: 40rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-width: 25rem;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
`;function Ar(){E();const{user:r}=V(),o=Qt();return p.exports.useEffect(()=>{r===null&&o("/")},[r]),t(yr,{children:[t(Er,{children:[e(X,{inEditor:!0}),e(Y,{inEditor:!0})]}),e(ct,{inWorkshop:!0}),e(ot,{inEditor:!0})]})}function Cr(){return e(bt,{children:t(Dt,{children:[e(pe,{path:"*",element:e(kr,{})}),e(pe,{path:"/editor",element:e(Ar,{})})]})})}gt.createRoot(document.getElementById("root")).render(e(_e.StrictMode,{children:e(Wt,{children:e(qt,{children:e(Cr,{})})})}));

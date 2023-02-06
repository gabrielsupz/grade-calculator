import{j as le,R as rt,r as p}from"./react-e3ff4c6a.js";import{c as gt}from"./react-dom-be217ea4.js";import{L as T,B as bt}from"./react-router-dom-8b8b7194.js";import{I as te,T as xt,R as ft,a as wt,F as vt,b as kt,c as yt,A as ge,M as S,d as Et,e as Ct,f as At,g as Mt,h as jt,C as Nt}from"./react-icons-dd9958a9.js";import{u as ce}from"./react-popper-174108e9.js";import{s as c,C as K,U as B}from"./styled-components-795cdb89.js";import{i as It,G as nt,g as Bt,o as St,a as Gt,s as Rt,b as Vt,c as Ht,A as zt,Q as be,T as de,B as Lt}from"./@firebase-97f18a8d.js";import"./firebase-6799c86d.js";import{u as Tt}from"./react-hook-form-704829ce.js";import{a as Pt,d as Qt,e as xe}from"./react-router-23d65a1e.js";import"./hoist-non-react-statics-90cdd91e.js";import"./scheduler-a07ebc82.js";import"./@remix-run-d7cce7c6.js";import"./react-fast-compare-8dea2db9.js";import"./@popperjs-d2c33dca.js";import"./react-is-78c37727.js";import"./@emotion-3c1bd611.js";import"./tslib-4b8363ab.js";import"./idb-f62f60ab.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function u(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=u(n);fetch(n.href,o)}})();const I=le.exports.Fragment,e=le.exports.jsx,t=le.exports.jsxs,Dt="bi",Ft="Editor",Yt={period:Dt,setPeriod:()=>{},inEditor:Ft,setInEditor:()=>{},inPersonalModel:!1,setInPersonalModel:()=>{},personalModelForInfo:{},setPersonalModelForInfo:()=>{},showLoginInToAccess:!1,setShowLoginInToAccess:()=>{}},ot=rt.createContext(Yt),qt=({children:r})=>{const[i,u]=p.exports.useState("bi"),[s,n]=p.exports.useState("Editor"),[o,d]=p.exports.useState(!1),[a,h]=p.exports.useState({}),[m,l]=p.exports.useState(!1);return e(ot.Provider,{value:{showLoginInToAccess:m,setShowLoginInToAccess:l,personalModelForInfo:a,setPersonalModelForInfo:h,inPersonalModel:o,setInPersonalModel:d,inEditor:s,setInEditor:n,period:i,setPeriod:u},children:r})};const E=()=>p.exports.useContext(ot),re=c.div`
  div:hover {
    transition: 0.5s;
  }
  div {
    transition: 0.5s;
  }
`,ne=c.div`
  display: none;
  @media screen and (max-width: 785px) {
    display: flex;
  }
  button {
    border: none;
    background: local;
  }
`,oe=c.div`
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
`,ie=c.div`
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
`;function Z({text:r,inEditor:i}){const{inPersonalModel:u}=E(),[s,n]=p.exports.useState(!1),o=p.exports.useRef(null),d=p.exports.useRef(null),[a,h]=p.exports.useState(null),{styles:m,attributes:l}=ce(o.current,d.current,{modifiers:[{name:"arrow",options:{element:a}},{name:"offset",options:{offset:[0,10]}}]});return i?u?t(re,{children:[t(ne,{children:[s?t(ie,{ref:d,style:m.popper,...l.popper,children:[e("div",{ref:h,style:m.arrow,id:"arrow"}),e("p",{children:"Calcule a nota necessária para atingir a média ou calcule sua nota final com base no modelo escolhido."}),t("svg",{width:"31",height:"28",viewBox:"0 0 31 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.2963 12.7107H15.2223V18.6116H16.1482",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z",fill:"#ECE8E8"})]})]}):null,e("button",{ref:o,onClick:()=>n(!s),children:e(te,{size:55})})]}),t(oe,{children:[e("p",{children:"Calcule a nota necessária para atingir a média ou calcule sua nota final com base no modelo escolhido."}),t("svg",{width:"31",height:"28",viewBox:"0 0 31 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.2963 12.7107H15.2223V18.6116H16.1482",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z",fill:"#ECE8E8"})]})]})]}):t(re,{children:[t(ne,{children:[s?t(ie,{ref:d,style:m.popper,...l.popper,children:[e("div",{ref:h,style:m.arrow,id:"arrow"}),e("p",{children:"Crie seu próprio modelo de calculo, seja bimestral ou trimestral."}),t("svg",{width:"31",height:"28",viewBox:"0 0 31 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.2963 12.7107H15.2223V18.6116H16.1482",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z",fill:"#ECE8E8"})]})]}):null,e("button",{ref:o,onClick:()=>n(!s),children:e(te,{size:55})})]}),t(oe,{children:[t("p",{children:[" ","Crie seu próprio modelo de cálculo, sendo bimestral ou trimestral!"]}),t("svg",{width:"31",height:"28",viewBox:"0 0 31 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.2963 12.7107H15.2223V18.6116H16.1482",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z",fill:"#ECE8E8"})]})]})]}):t(re,{children:[t(ne,{children:[s?t(ie,{ref:d,style:m.popper,...l.popper,children:[e("div",{ref:h,style:m.arrow,id:"arrow"}),e("p",{children:"Calcule a nota que precisa tirar para atingir a media (60) ou calcule sua nota final."}),t("svg",{width:"31",height:"28",viewBox:"0 0 31 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.2963 12.7107H15.2223V18.6116H16.1482",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z",fill:"#ECE8E8"})]})]}):null,e("button",{ref:o,onClick:()=>n(!s),children:e(te,{size:55})})]}),t(oe,{children:[e("p",{children:r}),t("svg",{width:"31",height:"28",viewBox:"0 0 31 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M15.2222 23.6694C21.3587 23.6694 26.3333 19.1405 26.3333 13.5537C26.3333 7.96697 21.3587 3.43802 15.2222 3.43802C9.0857 3.43802 4.11108 7.96697 4.11108 13.5537C4.11108 19.1405 9.0857 23.6694 15.2222 23.6694Z",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.2963 12.7107H15.2223V18.6116H16.1482",stroke:"#ECE8E8","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.9908 10.1818C15.7578 10.1818 16.3796 9.6157 16.3796 8.91736C16.3796 8.21901 15.7578 7.65289 14.9908 7.65289C14.2237 7.65289 13.6019 8.21901 13.6019 8.91736C13.6019 9.6157 14.2237 10.1818 14.9908 10.1818Z",fill:"#ECE8E8"})]})]})]})}const Xt=c.button`
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
`,Ot={color:"#bfb0ed"};function v({type:r,title:i,onClick:u,id:s,className:n,icon:o}){return t(Xt,{type:r,className:n,id:s,onClick:u,children:[i,o===!0?e(xt,{style:Ot,size:25}):""]})}const Ut=c.div`
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
`;function it(){return e(Ut,{children:t("div",{className:"socialLinks",children:[e("a",{target:"_blank",href:"https://www.instagram.com/gabriel_supz/",children:e(ft,{size:30,color:"#b45cb0"})}),t("a",{target:"_blank",href:"https://www.linkedin.com/in/gabriel-suptitz-51340124a/",children:[" ",e(wt,{size:30,color:"#8777cc"})]}),t("a",{href:"mailto:gabrielsuptitz@gmail.com",children:[" ",e(vt,{size:30,color:"var(--text-color)"})]}),t("a",{target:"_blank",href:"https://github.com/gabrielsupz",children:[" ",e(kt,{size:30,color:"#b3afc4"})]})]})})}const Kt={apiKey:"AIzaSyC0NN4MzL1cbcSl1eccQKx3HVg4Xyk-EGk",authDomain:"grade-calculator-24ed6.firebaseapp.com",projectId:"grade-calculator-24ed6",storageBucket:"grade-calculator-24ed6.appspot.com",messagingSenderId:"29173795505",appId:"1:29173795505:web:1033bf56cb09eed41a3090"},at=It(Kt);new nt;const ae=Bt(at),W=St(at),st=p.exports.createContext(void 0),Zt=({children:r})=>{const[i,u]=p.exports.useState(null),[s,n]=p.exports.useState(),o=()=>{const a=new nt;Rt(ae,a)},d=()=>{Vt(ae)};return p.exports.useEffect(()=>{const a=Gt(ae,h=>{u(h),h!==null&&n(h.uid)});return()=>{a()}},[]),p.exports.useEffect(()=>{},[]),e(st.Provider,{value:{googleSignIn:o,logOut:d,user:i,uid:s},children:r})},P=()=>p.exports.useContext(st),Wt=c.div`
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
`,fe=c.div`
  transition: 0.8s;

  ${({isVisible:r})=>r?K`
          div {
            scale: 1;
            transition: all 0.5s;
          }

          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
          transform: translateY(0px);
        `:K`
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
`,we=c.div`
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
`;function ve(){const{setShowLoginInToAccess:r,setInPersonalModel:i,setInEditor:u}=E(),{googleSignIn:s,user:n,logOut:o}=P(),[d,a]=p.exports.useState(),h=async()=>{try{await s()}catch(g){console.log(g)}},m=async()=>{try{await o(),alert("Deslogado com sucesso!")}catch(g){console.log(g)}};function l(){return n!=null?t(fe,{isVisible:d,children:[e(ge,{className:"closeMenu",onClick:()=>a(!1),size:40,color:"#4d4d56"}),t("div",{className:"contentMenu",children:[e("img",{className:"userImage",src:n.photoURL,alt:"Foto do usuário"}),e(T,{to:"/",children:e(v,{title:"Início",onClick:()=>{i(!1),u("Editor"),a(!1)}})}),e(v,{title:"Sair",onClick:m}),e(T,{to:"/editor",children:e(v,{title:"Editor",onClick:()=>{a(!1),i(!1),u("Editor")}})})]}),t("div",{className:"contentMenu",children:[e(we,{children:"Redes sociais do criador"}),e(it,{})]})]}):t(fe,{isVisible:d,children:[e(ge,{className:"closeMenu",onClick:()=>a(!1),size:40}),e("div",{className:"contentMenu",children:e(v,{icon:!0,title:"Entrar",onClick:h})}),t("div",{className:"contentMenu",children:[e(we,{children:"Logue para mais funcionalidades:"}),e(v,{title:"Editor",onClick:()=>{a(!1),r(!0)}})," ",e(v,{title:"Modelos pesonalizados",onClick:()=>{a(!1),r(!0)}})]})]})}return t(Wt,{children:[e(yt,{onClick:()=>{window.scrollTo(0,0),a(!0)},size:55,color:"var(--text-color)"}),l()]})}const q=c.div`
  div:hover {
    transition: 0.5s;
  }
  div {
    transition: 0.5s;
  }
`,X=c.div`
  @media screen and (max-width: 785px) {
    display: flex;
  }

  display: none;

  button {
    background: local;

    border: none;
  }
`,O=c.div`
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
`,U=c.div`
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
`,ke=c.div`
  div:hover {
    transition: 0.5s;
  }
  div {
    transition: 0.5s;
  }
  strong {
    color: rgb(108, 108, 111);
  }
`,ye=c.div`
  display: none;
  @media screen and (max-width: 785px) {
    display: flex;
  }
  button {
    background: local;

    border: none;
  }
`,Ee=c.div`
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
  width: 25rem;
  border-radius: 10px;
  border: 2px solid var(--text-color);

  text-align: center;

  svg {
    margin: 0 0 0 15rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`,Ce=c.div`
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

  svg {
    margin: 0 0 0 15rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`;function Jt(){p.exports.useState(!1);const{personalModelForInfo:r}=E(),[i,u]=p.exports.useState(!1),s=p.exports.useRef(null),n=p.exports.useRef(null),[o,d]=p.exports.useState(null),{styles:a,attributes:h}=ce(s.current,n.current,{modifiers:[{name:"arrow",options:{element:o}},{name:"offset",options:{offset:[0,10]}}]});return r.modelType==="bimestre"?t(ke,{children:[" ",t(ye,{children:[i?t(Ce,{ref:n,style:a.popper,...h.popper,children:[e("div",{ref:d,style:a.arrow,id:"arrow"}),t("p",{children:["São contadas as notas dos 4 bimestres sendo a média",t("strong",{children:[" ",r.average]}),", a primeira nota tem seu valor multiplicado por",t("strong",{children:[" ",r.weight1]})," , a segunda por",t("strong",{children:[" ",r.weight2]})," , a terceira por",t("strong",{children:[" ",r.weight3]})," e a quarta por",t("strong",{children:[" ",r.weight4]}),"."]}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]}):null,e("button",{ref:s,onClick:()=>u(!i),children:e(S,{size:55})})]}),t(Ee,{children:[t("p",{children:["São contadas as notas dos 4 bimestres sendo a média",t("strong",{children:[" ",r.average]}),", a primeira nota tem seu valor multiplicado por",t("strong",{children:[" ",r.weight1]})," , a segunda por",t("strong",{children:[" ",r.weight2]})," , a terceira por",t("strong",{children:[" ",r.weight3]})," e a quarta por",t("strong",{children:[" ",r.weight4]}),"."]}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]}):r.modelType==="trimestre"?t(ke,{children:[" ",t(ye,{children:[i?t(Ce,{ref:n,style:a.popper,...h.popper,children:[e("div",{ref:d,style:a.arrow,id:"arrow"}),t("p",{children:["São contadas as notas dos 3 trimestres com a média",t("strong",{children:[" ",r.average]})," , sendo que a primeira nota tem seu valor multiplicado por"," ",t("strong",{children:[" ",r.weight1]}),", a segunda por"," ",t("strong",{children:[" ",r.weight2]})," e a terceira por",t("strong",{children:[" ",r.weight2]}),"."]}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]}):null,e("button",{ref:s,onClick:()=>u(!i),children:e(S,{size:55})})]}),t(Ee,{children:[t("p",{children:["São contadas as notas dos 3 trimestres com a média",t("strong",{children:[" ",r.average]})," , sendo que a primeira nota tem seu valor multiplicado por"," ",t("strong",{children:[" ",r.weight1]}),", a segunda por"," ",t("strong",{children:[" ",r.weight2]})," e a terceira por",t("strong",{children:[" ",r.weight2]}),"."]}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]}):e(I,{children:e("p",{children:"Ou"})})}function J({text:r,inEditor:i}){const{period:u,inPersonalModel:s}=E(),[n,o]=p.exports.useState(!1),d=p.exports.useRef(null),a=p.exports.useRef(null),[h,m]=p.exports.useState(null),{styles:l,attributes:g}=ce(d.current,a.current,{placement:"top",modifiers:[{name:"arrow",options:{element:h}},{name:"offset",options:{offset:[0,10]}}]});if(i===!0)return s===!0?e(Jt,{}):t(q,{children:[t(X,{children:[n?t(U,{ref:a,style:l.popper,...g.popper,children:[e("div",{ref:m,style:l.arrow,id:"arrow1"}),e("p",{children:"A mensagem de informação será gerado automaticamente dependendo do modelo criado."}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]}):null,e("button",{ref:d,onClick:()=>o(!n),children:e(S,{size:55})})]}),t(O,{children:[e("p",{children:"A mensagem de informação será gerado automaticamente dependendo do modelo criado."}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]});if(r===void 0){if(u==="bi")return t(q,{children:[t(X,{children:[n?t(U,{ref:a,style:l.popper,...g.popper,children:[e("div",{ref:m,style:l.arrow,id:"arrow1"}),e("p",{children:"São contadas as notas dos 4 bimestres, sendo que a ultima tem seu valor dobrado"}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]}):null,e("button",{ref:d,onClick:()=>o(!n),children:e(S,{size:55})})]}),t(O,{children:[e("p",{children:"São contadas as notas dos 4 bimestres, sendo que a ultima tem seu valor dobrado"}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]});if(u==="tri")return t(q,{children:[" ",t(X,{children:[n?t(U,{ref:a,style:l.popper,...g.popper,children:[e("div",{ref:m,style:l.arrow,id:"arrow1"}),e("p",{children:"São contadas as notas dos 3 trimestres, sendo que a segunda nota tem seu valor dobrado e a terceira tem seu valor triplicado"}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]}):null,e("button",{ref:d,onClick:()=>o(!n),children:e(S,{size:55})})]}),t(O,{children:[e("p",{children:"São contadas as notas dos 3 trimestres, sendo que a segunda nota tem seu valor dobrado e a terceira tem seu valor triplicado"}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]})}return t(q,{children:[" ",t(X,{children:[n?t(U,{ref:a,style:l.popper,...g.popper,children:[e("div",{ref:m,style:l.arrow,id:"arrow1"}),e("p",{children:"São contadas as notas dos 3 trimestres, sendo que a segunda nota tem seu valor dobrado e a terceira tem seu valor triplicado"}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]}):null,e("button",{ref:d,onClick:()=>o(!n),children:e(S,{size:55})})]}),t(O,{children:[e("p",{children:r}),t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M27 6H5C4.44772 6 4 6.44772 4 7V25C4 25.5523 4.44772 26 5 26H27C27.5523 26 28 25.5523 28 25V7C28 6.44772 27.5523 6 27 6Z",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 12H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 16H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.5 20H22.5",stroke:"#E8E8EC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]})}const Ae=c.div`
  height: 100%;
  max-height: 67rem;
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`,Me=c.div`
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
`,je=c.aside`
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
`,Ne=c.div`
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
`;function dt({inEditor:r}){const{setPeriod:i,setInEditor:u,setInPersonalModel:s,setShowLoginInToAccess:n}=E(),{googleSignIn:o,user:d,logOut:a}=P(),h=async()=>{try{await o()}catch(l){console.log(l)}},m=async()=>{try{s(!1),await a()}catch(l){console.log(l)}};return d!=null?t(Ae,{children:[" ",t(Me,{children:[e(ve,{}),e(Z,{text:"Calcule sua nota final ou a nota que precisa tirar para atingir a média, o peso define quantas vezes será contada a nota e o total da soma será dividido pela quantidade de notas somadas!",inEditor:r}),e(J,{inEditor:r})]}),t(je,{children:[t("div",{children:[e("img",{className:"userImage",src:d.photoURL,alt:"Imagem do usuário"}),e(T,{to:"/",children:e(v,{title:"Início",onClick:()=>{i("bi"),s(!1),u("Editor")}})}),e(v,{title:"Sair",onClick:m}),e(T,{to:"/editor",children:e(v,{title:"Editor",onClick:()=>{u("Editor"),s(!1)}})})]}),t("div",{children:[" ",e(Ne,{children:"Redes sociais do criador"}),e(it,{})]})]})]}):t(Ae,{children:[t(Me,{children:[e(ve,{}),e(Z,{text:`Calcule a sua nota final ou a nota que precisa tirar para atingir a\r
média, o peso define quantas vezes será contada a nota e o total da soma será dividido pela quantidade de notas somadas`}),e(J,{})]}),t(je,{children:[e("div",{children:e(v,{icon:!0,title:"Entrar",onClick:h})}),t("div",{children:[e(Ne,{children:"Logue para mais funcionalidades:"}),e(v,{id:"fakeButton",title:"Editor",onClick:()=>n(!0)})," ",e(v,{id:"fakeButton",title:"Modelos pesonalizados",onClick:()=>n(!0)})]})]})]})}const Ie=c.div`
  ${({isVisible:r})=>r?K`
          div {
            transform: translateX(0);
            transform: translateY(0px);
          }

          display: flex;
          pointer-events: auto;
        `:K`
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
`;function $t(){const{googleSignIn:r,user:i}=P(),{setShowLoginInToAccess:u,showLoginInToAccess:s,setInEditor:n}=E(),o=()=>{try{r()}catch(d){console.log(d)}};return i!=null?e(Ie,{isVisible:s,children:t("div",{className:"alertBox",children:[t("div",{className:"background",children:[e("img",{src:"https://user-images.githubusercontent.com/102992996/216957519-0ff6cd2c-6372-4057-a68c-c43dce035336.jpg",alt:"Imagem de criança comemorando o sucesso"}),e("div",{className:"absolute green"}),t("div",{id:"oops",children:[e(Et,{size:90}),e("h2",{children:"Sucesso"})]})]}),t("div",{className:"message messageSuccess",children:[e("p",{children:"Obrigado por logar!"}),e(T,{to:"/editor",children:e("button",{className:"button editor ",onClick:()=>{n("Editor"),u(!1)},children:"EDITOR"})}),e("button",{className:"button green ",onClick:()=>u(!1),children:"VOLTAR"})]})]})}):e(Ie,{isVisible:s,children:t("div",{className:"alertBox",children:[t("div",{className:"background",children:[e("img",{src:"data:image/jpeg;base64,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",alt:"Imagem de garota sorrindo e fogo ao fundo"}),e("div",{className:"absolute"}),t("div",{id:"oops",children:[e(Ct,{size:90}),e("h2",{children:"OOPS!"})]})]}),t("div",{className:"message",children:[e("p",{children:"Logue com o google para mais funcionalidades."}),e("button",{className:"button blue ",onClick:()=>o(),children:"LOGAR"}),e("button",{className:"button red ",onClick:()=>u(!1),children:"VOLTAR"})]})]})})}async function _t(r,i){i!=null&&r!=null&&await Ht(zt(W,`users/${r}/models`,i))}async function Be(r,{modelName:i,modelType:u,weight1:s,weight2:n,weight3:o,weight4:d,average:a}){if(d===void 0)try{const h=await be(de(W,`users/${r}/models`),{modelName:i,modelType:u,weight1:s,weight2:n,weight3:o,average:a})}catch(h){alert(h)}else try{const h=await be(de(W,`users/${r}/models`),{modelName:i,modelType:u,weight1:s,weight2:n,weight3:o,weight4:d,average:a})}catch(h){alert(h)}}const lt=B`
from {
  opacity: 0;
  transform: translatex(-100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,Se=c.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  div {
    animation: ${lt} 0.7s backwards;
  }
  div:nth-child(2) {
    animation-delay: 1.5s;
  }
`,Ge=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    animation: ${lt} 0.7s backwards;
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
`,Re=c.h3`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--response-color);
`,Ve=c.div`
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
`;function f({returnValue:r,numberGrade:i}){const[n,o]=p.exports.useState(""),d=a=>{const h=Math.max(0,Math.min(100,Number(a.target.value)));o(h),r(h)};return t(er,{children:[" ",t("label",{htmlFor:"number"+i,children:["Nota ",i,": "]}),e("input",{placeholder:"0",onChange:d,value:n===0?"":n,id:"number"+i,type:"number"})]})}const tr=c.p`
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
`;function He({v1:r,v2:i,v3:u,v4:s,weight1:n,weight2:o,weight3:d,weight4:a}){var g,w,b,j,C,Q,G,D;if(a!=null&&s!=null){var h=(r*n+i*o+u*d+s*a)/(n+o+d+a),m=h>0?h:0,l=Number.isInteger(m)?m:m.toFixed(1);l>59.9?((g=document.getElementById("response"))==null||g.classList.remove("red"),(w=document.getElementById("response"))==null||w.classList.add("blue")):((b=document.getElementById("response"))==null||b.classList.remove("blue"),(j=document.getElementById("response"))==null||j.classList.add("red"))}else if(d!=null){const A=r*n,R=i*o,V=u*d;var h=(A+R+V)/(n+o+d),m=h>0?h:0,l=Number.isInteger(m)?m:m.toFixed(2);l>59.9?((C=document.getElementById("response"))==null||C.classList.remove("red"),(Q=document.getElementById("response"))==null||Q.classList.add("blue")):((G=document.getElementById("response"))==null||G.classList.remove("blue"),(D=document.getElementById("response"))==null||D.classList.add("red"))}else l=0;return e(tr,{id:"response",children:l})}function rr(r){const[i,u]=p.exports.useState(),[s,n]=p.exports.useState(),[o,d]=p.exports.useState(),[a,h]=p.exports.useState();function m(b){u(b)}function l(b){n(b)}function g(b){d(b)}function w(b){h(b)}return r.modelType==="bimestre"?t(Se,{children:[" ",t(Ge,{children:[e("h3",{children:"Nota Final "}),e(f,{returnValue:m,numberGrade:"1"}),e(f,{returnValue:l,numberGrade:"2"}),e(f,{returnValue:g,numberGrade:"3"}),e(f,{returnValue:w,numberGrade:"4"})]}),t(Ve,{children:[e(Re,{children:"Resultado:"}),e(He,{v1:Number(i),v2:Number(s),v3:Number(o),v4:Number(a),weight1:Number(r.weight1),weight2:Number(r.weight2),weight3:Number(r.weight3),weight4:Number(r.weight4)})]})]}):r.modelType==="trimestre"?t(Se,{children:[" ",t(Ge,{children:[e("h3",{children:"Nota Final "}),e(f,{returnValue:m,numberGrade:"1"}),e(f,{returnValue:l,numberGrade:"2"}),e(f,{returnValue:g,numberGrade:"3"})]}),t(Ve,{children:[e(Re,{children:"Resultado:"}),e(He,{v1:Number(i),v2:Number(s),v3:Number(o),weight1:Number(r.weight1),weight2:Number(r.weight2),weight3:Number(r.weight3)})]})]}):e(I,{})}const nr=c.p`
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
`;function ze({v1:r,v2:i,v3:u,weight1:s,weight2:n,weight3:o,weight4:d,average:a}){if(u!=null&&d!=null){const w=r*s+i*n+u*o;var h=a*s+a*n+a*o+a*d-w,m=h/d,l=m>0?m:0,g=Number.isInteger(l)?l:l.toFixed(1)}else{const w=r*s+i*n;var h=a*s+a*n+a*o-w,m=h/o,l=m>0?m:0,g=Number.isInteger(l)?l:l.toFixed(1)}return e(nr,{children:g>100?"Impossível":g})}const ct=B`
from {
  opacity: 0;
  transform: translatex(100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,Le=c.section`
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
    animation: ${ct} 0.7s backwards;
  }
  div:nth-child(2) {
    animation-delay: 1.5s;
  }
`,Te=c.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  div {
    animation: ${ct} 0.7s backwards;
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
`,Pe=c.h3`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--response-color);
`,Qe=c.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;function or(r){const[i,u]=p.exports.useState(),[s,n]=p.exports.useState(),[o,d]=p.exports.useState();function a(l){u(l)}function h(l){n(l)}function m(l){d(l)}return r.modelType==="bimestre"?t(Le,{children:[" ",t(Te,{children:[e("h3",{className:"h2",children:"Nota necessária "}),e(f,{returnValue:a,numberGrade:"1"}),e(f,{returnValue:h,numberGrade:"2"}),e(f,{returnValue:m,numberGrade:"3"})]}),t(Qe,{children:[e(Pe,{children:"Precisa de:"}),e(ze,{v1:Number(i),v2:Number(s),v3:Number(o),weight1:Number(r.weight1),weight2:Number(r.weight2),weight3:Number(r.weight3),weight4:Number(r.weight4),average:Number(r.average)})]})]}):r.modelType==="trimestre"?t(Le,{children:[" ",t(Te,{children:[e("h3",{className:"h2",children:"Nota necessária "}),e(f,{returnValue:a,numberGrade:"1"}),e(f,{returnValue:h,numberGrade:"2"})]}),t(Qe,{children:[e(Pe,{children:"Precisa de:"}),e(ze,{v1:Number(i),v2:Number(s),weight1:Number(r.weight1),weight2:Number(r.weight2),weight3:Number(r.weight3),average:Number(r.average)})]})]}):e(I,{})}const ir=c.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;

  height: 31.5rem;
`;function ar({average:r,modelName:i,modelType:u,weight1:s,weight2:n,weight3:o,weight4:d}){return t(ir,{children:[e(rr,{modelName:i,modelType:u,weight1:s,weight2:n,weight3:o,weight4:d,average:r}),e(or,{modelName:i,modelType:u,weight1:s,weight2:n,weight3:o,weight4:d,average:r})]})}const M=B`
from {
  opacity: 0;
  transform: translatex(-100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,sr=B`
from {
  opacity: 0;
  transform: translatey(50px);
}
to {
  opacity: 1;
  transform: translatey(0);
}
`,ue=B`
from {
  opacity: 0;
  transform: translatex(100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,se=c.div`
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
`,N=c.label`
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
`,De=c.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 23.3rem;
  animation: ${M} 0.7s backwards;
  justify-content: center;
`,lr=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  animation: ${ue} 0.7s backwards;
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
    animation: ${M} 0.7s backwards;
    animation-delay: 0.2s;
  }

  label:nth-child(5) {
    animation: ${M} 0.7s backwards;
    animation-delay: 0.4s;
  }
  label:nth-child(4) {
    animation: ${M} 0.7s backwards;
    animation-delay: 0.6s;
  }
  label:nth-child(3) {
    animation: ${M} 0.7s backwards;
    animation-delay: 0.8s;
  }
  label:nth-child(2) {
    animation: ${M} 0.7s backwards;
    animation-delay: 1s;
  }
  label:nth-child(1) {
    animation: ${M} 0.7s backwards;
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
  animation: ${ue} 0.7s backwards;
`;c.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;const hr=c.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  transition: 0.5s;

  svg {
    transition: 0.5s;
    animation: ${ue} 0.7s backwards;
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
  animation: ${M} 0.7s backwards;
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
`;function mr(){const{setInEditor:r,inEditor:i,setInPersonalModel:u,setPersonalModelForInfo:s,inPersonalModel:n}=E(),[o,d]=p.exports.useState({}),{register:a,handleSubmit:h}=Tt(),m=0,l=9,[g,w]=p.exports.useState(""),[b,j]=p.exports.useState(""),[C,Q]=p.exports.useState(""),[G,D]=p.exports.useState(""),[A,R]=p.exports.useState("bimestre"),[V,he]=p.exports.useState([{}]),[me,pe]=p.exports.useState(!0),[pt,$]=p.exports.useState(!0),{uid:F}=P();if(p.exports.useEffect(()=>{async function H(z){return new Promise((k,_)=>{const ee=de(W,`users/${z}/models`);Lt(ee).then(L=>{let Y=[];return L.forEach(x=>{let y={id:x.id,...x.data()};return Y.push(y)}),Y}).then(L=>{he(L)})})}H(F)},[i,me]),i==="Editor"){let H=function(){return A==="bimestre"?t(De,{children:[e("h3",{children:"Peso das notas"}),t(N,{children:["Nota :1",e("input",{placeholder:"0",...a("weight1"),onChange:z,value:g===0?"":g,type:"number",required:!0})]}),t(N,{children:["Nota: 2",e("input",{placeholder:"0",...a("weight2"),onChange:k,value:b===0?"":b,type:"number",required:!0})]}),t(N,{children:["Nota: 3",e("input",{placeholder:"0",...a("weight3"),onChange:_,value:C===0?"":C,type:"number",required:!0})]}),t(N,{children:["Nota: 4",e("input",{placeholder:"0",...a("weight4"),onChange:ee,value:G===0?"":G,type:"number",required:!0})]})]}):A==="trimestre"?t(De,{children:[e("h3",{children:"Peso das notas"}),t(N,{children:["Nota :1",e("input",{placeholder:"0",...a("weight1"),onChange:z,value:g===0?"":g,type:"number",required:!0})]}),t(N,{children:["Nota: 2",e("input",{placeholder:"0",...a("weight2"),onChange:k,value:b===0?"":b,type:"number",required:!0})]}),t(N,{children:["Nota: 3",e("input",{placeholder:"0",...a("weight3"),onChange:_,value:C===0?"":C,type:"number",required:!0})]})]}):e(I,{})};const z=x=>{const y=Math.max(m,Math.min(l,Number(x.target.value)));w(y)},k=x=>{const y=Math.max(m,Math.min(l,Number(x.target.value)));j(y)},_=x=>{const y=Math.max(m,Math.min(l,Number(x.target.value)));Q(y)},ee=x=>{const y=Math.max(m,Math.min(l,Number(x.target.value)));D(y)},L=async x=>{if(pt)if(V[5]!=null)alert("O máximo de modelos por usuário foi atingido!");else{if($(!1),A==="bimestre")try{await Be(F,{modelName:x.modelName,modelType:"bimestre",weight1:x.weight1,weight2:x.weight2,weight3:x.weight3,weight4:x.weight4,average:x.average}).then(()=>r("Modelos")).then(()=>$(!0))}catch(y){console.error("Error:",y)}if(A==="trimestre")try{await Be(F,{modelName:x.modelName,modelType:"trimestre",weight1:x.weight1,weight2:x.weight2,weight3:x.weight3,average:x.average}).then(()=>r("Modelos")).then(()=>$(!0))}catch(y){console.error("Error:",y)}}},Y=x=>{const y=x.currentTarget.value;y==="bimestre"&&R("bimestre"),y==="trimestre"&&R("trimestre")};return e(se,{children:e(cr,{onSubmit:h(L),children:t("fieldset",{children:[e("legend",{children:"Crie seu modelo"}),t(dr,{children:[H(),t(lr,{children:[t("div",{children:[e("h3",{children:"Modelo"}),t("select",{onChange:Y,id:"modelSelect",children:[e("option",{value:"bimestre",children:"Bimestre"}),e("option",{value:"trimestre",children:"Trimestre"})]})]}),t("div",{children:[e("h3",{children:"Média"}),t("select",{...a("average"),children:[e("option",{value:"50",children:"50"}),e("option",{value:"60",children:"60"}),e("option",{value:"70",children:"70"})]})]}),t("div",{children:[e("h3",{children:"Nome do modelo"}),e(ur,{...a("modelName"),type:"text",placeholder:"Nome do modelo",required:!0,maxLength:17})]})]})]}),e(v,{id:"submitModelButton",type:"submit",title:"Salvar"})]})})})}if(i==="Modelos"){if(A==="trimestre"&&R("bimestre"),n)return t(se,{children:[t("h3",{className:"closeAndNamePersonalModel",children:[e("strong",{children:o.modelName})," ",e(At,{size:30,onClick:()=>{u(!1)}})]}),e("div",{className:"pessoalModelInputs",children:e(ar,{average:o.average,modelName:o.modelName,modelType:o.modelType,weight1:o.weight1,weight2:o.weight2,weight3:o.weight3,weight4:o.weight4})})]});if(n===!1){let H=function(k){d(k),s(k),u(!0)};return t(se,{children:[t("h2",{children:["Meus Modelos ",e(Mt,{color:"var(--text-color)"})]}),e("div",{className:"pessoalModelInputs",children:e("ul",{children:function(){return V[0]===void 0?e("p",{children:"Ainda não há modelos criados "}):V.map(k=>t(hr,{children:[e(v,{id:"selectPersonalModel",onClick:async()=>{H({average:k.average,modelName:k.modelName,weight1:k.weight1,modelType:k.modelType,weight2:k.weight2,weight3:k.weight3,weight4:k.weight4})},title:k.modelName}),e(jt,{size:25,onClick:async()=>{await _t(F,k.id).then(()=>{pe(me===!1)})}})]},k.id))}()})})]})}}return e(I,{})}const pr=c.p`
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
`;function Fe({v1:r,v2:i,v3:u,v4:s}){var a,h,m,l,g,w,b,j;if(s!=null){var n=(r+i+u+2*s)/5,o=n>0?n:0,d=Number.isInteger(o)?o:o.toFixed(1);d>59.9?((a=document.getElementById("response"))==null||a.classList.remove("red"),(h=document.getElementById("response"))==null||h.classList.add("blue")):((m=document.getElementById("response"))==null||m.classList.remove("blue"),(l=document.getElementById("response"))==null||l.classList.add("red"))}else{var n=(r+i*2+u*3)/6,o=n>0?n:0,d=Number.isInteger(o)?o:o.toFixed(1);d>59.9?((g=document.getElementById("response"))==null||g.classList.remove("red"),(w=document.getElementById("response"))==null||w.classList.add("blue")):((b=document.getElementById("response"))==null||b.classList.remove("blue"),(j=document.getElementById("response"))==null||j.classList.add("red"))}return e(pr,{id:"response",children:d})}const ut=B`
from {
  opacity: 0;
  transform: translatex(-100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,Ye=c.section`
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
    animation: ${ut} 0.7s backwards;
  }
  div:nth-child(2) {
    animation-delay: 1.5s;
  }
`,qe=c.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  div {
    animation: ${ut} 0.7s backwards;
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
`,Xe=c.h3`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--response-color);
`,Oe=c.div`
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
`;function gr({PeriodOfTime:r}){const[i,u]=p.exports.useState(),[s,n]=p.exports.useState(),[o,d]=p.exports.useState(),[a,h]=p.exports.useState();function m(b){u(b)}function l(b){n(b)}function g(b){d(b)}function w(b){h(b)}return r==="bi"?t(Ye,{children:[" ",t(qe,{children:[e("h2",{children:"Nota Final "}),e(f,{returnValue:m,numberGrade:"1"}),e(f,{returnValue:l,numberGrade:"2"}),e(f,{returnValue:g,numberGrade:"3"}),e(f,{returnValue:w,numberGrade:"4"})]}),t(Oe,{children:[e(Xe,{children:"Resultado:"}),e(Fe,{v1:Number(i),v2:Number(s),v3:Number(o),v4:Number(a)})]})]}):r==="tri"?t(Ye,{children:[" ",t(qe,{children:[e("h2",{children:"Nota Final "}),e(f,{returnValue:m,numberGrade:"1"}),e(f,{returnValue:l,numberGrade:"2"}),e(f,{returnValue:g,numberGrade:"3"})]}),t(Oe,{children:[e(Xe,{children:"Resultado:"}),e(Fe,{v1:Number(i),v2:Number(s),v3:Number(o)})]})]}):e(I,{})}const br=c.header`
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
`;function Ue(){return t(br,{children:[e("h1",{id:"top",children:"Calculadora de Notas"}),e(Nt,{size:90,color:"var(--text-color)"})]})}const Ke=c.div`
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
`;function Ze({inWorkshop:r}){var d,a,h,m,l,g,w,b;const{period:i,setPeriod:u,inEditor:s,setInEditor:n,setInPersonalModel:o}=E();return r?(s==="Editor"&&((d=document.getElementById("button1"))==null||d.classList.add("active"),(a=document.getElementById("button2"))==null||a.classList.remove("active")),s==="Modelos"&&((h=document.getElementById("button2"))==null||h.classList.add("active"),(m=document.getElementById("button1"))==null||m.classList.remove("active")),t(Ke,{children:[e(v,{className:"active",id:"button1",onClick:()=>{n("Editor"),o(!1)},title:"Editor"}),e(v,{id:"button2",onClick:()=>n("Modelos"),title:"Meus Modelos"})]})):(i==="bi"&&((l=document.getElementById("button1"))==null||l.classList.add("active"),(g=document.getElementById("button2"))==null||g.classList.remove("active")),i==="tri"&&((w=document.getElementById("button2"))==null||w.classList.add("active"),(b=document.getElementById("button1"))==null||b.classList.remove("active")),t(Ke,{children:[e(v,{className:"active",id:"button1",onClick:()=>u("bi"),title:"Bimestre"}),e(v,{id:"button2",onClick:()=>u("tri"),title:"Trimestre"})]}))}const ht=B`
from {
  opacity: 0;
  transform: translatex(100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`,We=c.section`
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
    animation: ${ht} 0.7s backwards;
  }
  div:nth-child(2) {
    animation-delay: 1.5s;
  }
`,Je=c.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  div {
    animation: ${ht} 0.7s backwards;
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
`,$e=c.h3`
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--response-color);
`,_e=c.div`
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
`;function et({v1:r,v2:i,v3:u}){if(u!=null)var s=300-(r+i+u),n=s/2,o=n>0?n:0,d=Number.isInteger(o)?o:o.toFixed(1);else var s=360-(r+i*2),n=s/3,o=n>0?n:0,d=Number.isInteger(o)?o:o.toFixed(1);return e(xr,{children:d>100?"Impossível":d})}function fr({PeriodOfTime:r}){const[i,u]=p.exports.useState(),[s,n]=p.exports.useState(),[o,d]=p.exports.useState();function a(l){u(l)}function h(l){n(l)}function m(l){d(l)}return r==="bi"?t(We,{children:[" ",t(Je,{children:[e("h2",{children:"Nota necessária "}),e(f,{returnValue:a,numberGrade:"1"}),e(f,{returnValue:h,numberGrade:"2"}),e(f,{returnValue:m,numberGrade:"3"})]}),t(_e,{children:[e($e,{children:"Precisa de:"}),e(et,{v1:Number(i),v2:Number(s),v3:Number(o)})]})]}):r==="tri"?t(We,{children:[" ",t(Je,{children:[e("h2",{children:"Nota necessária "}),e(f,{returnValue:a,numberGrade:"1"}),e(f,{returnValue:h,numberGrade:"2"})]}),t(_e,{children:[e($e,{children:"Precisa de:"}),e(et,{v1:Number(i),v2:Number(s)})]})]}):e(I,{})}const tt=c.section`
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
`;function mt({inWorkshop:r}){const{period:i}=E();return r===!0?t(tt,{children:[e(Ue,{}),e(Ze,{inWorkshop:!0}),e("div",{className:"divWithBackground",children:e(mr,{})})]}):t(tt,{children:[e(Ue,{}),e(Ze,{}),t("div",{className:"divWithBackground",children:[e(gr,{PeriodOfTime:i}),e(fr,{PeriodOfTime:i})]})]})}const wr=c.div`
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
`;function kr(){const{period:r}=E();return t(wr,{children:[t(vr,{children:[e(J,{period:r}),e(Z,{text:`Calcule a sua nota final ou a nota que precisa tirar para atingir a
        média, o peso define quantas vezes será contada a nota e o total da soma será dividido pela quantidade de notas somadas`})]}),e($t,{}),e(mt,{}),e(dt,{})]})}const yr=c.div`
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
`;function Cr(){E();const{user:r}=P(),i=Pt();return p.exports.useEffect(()=>{r===null&&i("/")},[r]),t(yr,{children:[t(Er,{children:[e(J,{inEditor:!0}),e(Z,{inEditor:!0})]}),e(mt,{inWorkshop:!0}),e(dt,{inEditor:!0})]})}function Ar(){return e(bt,{children:t(Qt,{children:[e(xe,{path:"*",element:e(kr,{})}),e(xe,{path:"/editor",element:e(Cr,{})})]})})}gt.createRoot(document.getElementById("root")).render(e(rt.StrictMode,{children:e(Zt,{children:e(qt,{children:e(Ar,{})})})}));

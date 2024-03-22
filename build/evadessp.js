// ==UserScript==
// @name         Evades-SP
// @version      exp-7
// @description  Evades Scripts Paradise, common script that links other scripts
// @author       EtherCD
// @match        https://*.evades.io/*
// @downloadURL  https://raw.githubusercontent.com/EtherCD/EvadesSP/main/build/evadessp.js
// @updateURL    https://raw.githubusercontent.com/EtherCD/EvadesSP/main/build/evadessp.js
// @icon         https://raw.githubusercontent.com/EtherCD/EvadesSP/main/repo/favicon.svg
// @license      MIT License
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(()=>{"use strict";var e={851:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=s(25);t.default=class{constructor(){this.settings=new r.default}push(){this.settings.push()}}},25:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=s(800),n=s(418),p=s(500);t.default=class{constructor(){this.elements=[],this.elements.push(n.ButtonMarking.makeButton(),p.ScriptsMenuMarking.makeScriptsMenu()),window.observerSubs.push(this.ping)}ping(e){"menu"!==e.currentPage&&"server-list"!==e.currentPage?(document.getElementById("esp-scripts-button").style.display="none",document.getElementById("esp-scripts-menu").style.display="none"):document.getElementById("esp-scripts-button").style.display=""}push(){(0,r.pushStylesToDom)(),this.elements.forEach((e=>document.body.appendChild(e)))}}},418:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonMarking=void 0;const r=s(800);var n;!function(e){e.makeButton=()=>{s();const e=document.createElement("div");return e.classList.add("esp-scripts-button"),e.setAttribute("id","esp-scripts-button"),e.appendChild(t()),e.onclick=()=>{const e=document.getElementById("esp-scripts-menu");e.style.display="none"===e.style.display?"":"none"},e};const t=()=>{const e=document.createElement("img");return e.src="https://raw.githubusercontent.com/EtherCD/EvadesSP/main/repo/settings.svg",e.classList.add("esp-scripts-button-icon"),e},s=()=>{(0,r.addStyle)(".esp-scripts-button {cursor: pointer;position: absolute;bottom: 10px;right: 10px;}.esp-scripts-button-icon {width: 36px;height: 36px;}")}}(n||(t.ButtonMarking=n={}))},500:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScriptsMenuMarking=void 0;const r=s(800);var n;!function(e){e.makeScriptsMenu=()=>(n(),t());const t=()=>{const e=document.createElement("div");e.classList.add("esp-scripts-menu"),e.style.display="none",e.setAttribute("id","esp-scripts-menu");const t=document.createElement("div");t.classList.add("esp-scripts-container");const r=document.createElement("span");r.innerHTML="Scripts",r.classList.add("esp-scripts-title"),t.appendChild(r);const n=document.createElement("input");n.type="button",n.value="x",n.onclick=()=>document.getElementById("esp-scripts-menu").style.display="none",n.classList.add("esp-scripts-close-btn"),t.appendChild(n);const p=document.createElement("div");return p.classList.add("esp-scripts-list"),window.scripts.forEach((e=>{p.appendChild(s(e))})),t.appendChild(p),e.appendChild(t),e},s=e=>{const t=document.createElement("label");t.classList.add("esp-script-lable");const s=document.createElement("div");s.classList.add("esp-script-container");const r=document.createElement("img");r.classList.add("esp-script-icon"),r.src=e.icon,s.appendChild(r);const n=document.createElement("span");n.classList.add("esp-script-name"),n.innerHTML=e.name,s.appendChild(n);const p=document.createElement("span");p.classList.add("esp-script-description");const o=document.createElement("p");o.innerHTML=e.description,p.appendChild(o),s.appendChild(p);const a=document.createElement("div");return a.classList.add("checkbox-wrapper-12"),a.innerHTML='<div class="cbx"><input id="cbx-12" type="checkbox"/><label for="cbx-12"></label><svg width="15" height="14" viewbox="0 0 15 14" fill="none"><path d="M2 8.36364L6.23077 12L13 2"></path></svg></div>\x3c!-- Gooey--\x3e<svg xmlns="http://www.w3.org/2000/svg" version="1.1"><defs><filter id="goo-12"><fegaussianblur in="SourceGraphic" stddeviation="4" result="blur"></fegaussianblur><fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></fecolormatrix><feblend in="SourceGraphic" in2="goo-12"></feblend></filter></defs></svg>',s.appendChild(a),t.appendChild(s),t},n=()=>{(0,r.addStyle)(":root {\n--mainFont: Montserrat;\n}"),(0,r.addStyle)(".esp-scripts-menu{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);flex-direction:column;color:#fff}.esp-scripts-container{width:450px;background-color:rgba(0,0,0,.9);display:flex;border-radius:12px;padding:30px 10px 0}.esp-scripts-title{margin-top:-23px;position:absolute;letter-spacing:.02em}.esp-scripts-close-btn{position:absolute;margin-top:-32px;margin-left:428px;font-weight:700;font-size:25px;font-family:var(--mainFont);border:none;background-color:transparent;color:red;cursor:pointer}.esp-script-icon{height:36px;width:36px;margin-top:10px;margin-left:10px}.esp-script-name{font-size:16px;margin-top:10px;position:absolute;margin-left:10px;letter-spacing:.02em}.esp-script-description p{text-align:left;max-width:320px;letter-spacing:.02em;margin-top:-15px;margin-left:55px}.cbx{margin-top:-33px}.checkbox-wrapper-12{position:absolute;margin-left:410px;margin-top:-44px}.checkbox-wrapper-12>svg{position:absolute;top:-130%;left:-170%;width:110px;pointer-events:none}.checkbox-wrapper-12 *{box-sizing:border-box}.checkbox-wrapper-12 input[type=checkbox]{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent;cursor:pointer;margin:0}.checkbox-wrapper-12 input[type=checkbox]:focus{outline:0}.checkbox-wrapper-12 .cbx{width:24px;height:24px;top:calc(50vh - 12px);left:calc(50vw - 12px)}.checkbox-wrapper-12 .cbx input{position:absolute;top:0;left:0;width:24px;height:24px;border:2px solid #bfbfc0;border-radius:50%}.checkbox-wrapper-12 .cbx label{width:24px;height:24px;background:0 0;border-radius:50%;position:absolute;top:0;left:0;-webkit-filter:url('#goo-12');filter:url('#goo-12');transform:trasnlate3d(0,0,0);pointer-events:none}.checkbox-wrapper-12 .cbx svg{position:absolute;top:5px;left:4px;z-index:1;pointer-events:none}.checkbox-wrapper-12 .cbx svg path{stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:19;stroke-dashoffset:19;transition:stroke-dashoffset .3s 0.2s}.checkbox-wrapper-12 .cbx input:checked+label{animation:.6s forwards splash-12}.checkbox-wrapper-12 .cbx input:checked+label+svg path{stroke-dashoffset:0}@-moz-keyframes splash-12{40%{background:#866efb;box-shadow:0 -18px 0 -8px #866efb,16px -8px 0 -8px #866efb,16px 8px 0 -8px #866efb,0 18px 0 -8px #866efb,-16px 8px 0 -8px #866efb,-16px -8px 0 -8px #866efb}100%{background:#866efb;box-shadow:0 -36px 0 -10px transparent,32px -16px 0 -10px transparent,32px 16px 0 -10px transparent,0 36px 0 -10px transparent,-32px 16px 0 -10px transparent,-32px -16px 0 -10px transparent}}@-webkit-keyframes splash-12{40%{background:#866efb;box-shadow:0 -18px 0 -8px #866efb,16px -8px 0 -8px #866efb,16px 8px 0 -8px #866efb,0 18px 0 -8px #866efb,-16px 8px 0 -8px #866efb,-16px -8px 0 -8px #866efb}100%{background:#866efb;box-shadow:0 -36px 0 -10px transparent,32px -16px 0 -10px transparent,32px 16px 0 -10px transparent,0 36px 0 -10px transparent,-32px 16px 0 -10px transparent,-32px -16px 0 -10px transparent}}@-o-keyframes splash-12{40%{background:#866efb;box-shadow:0 -18px 0 -8px #866efb,16px -8px 0 -8px #866efb,16px 8px 0 -8px #866efb,0 18px 0 -8px #866efb,-16px 8px 0 -8px #866efb,-16px -8px 0 -8px #866efb}100%{background:#866efb;box-shadow:0 -36px 0 -10px transparent,32px -16px 0 -10px transparent,32px 16px 0 -10px transparent,0 36px 0 -10px transparent,-32px 16px 0 -10px transparent,-32px -16px 0 -10px transparent}}@keyframes splash-12{40%{background:#866efb;box-shadow:0 -18px 0 -8px #866efb,16px -8px 0 -8px #866efb,16px 8px 0 -8px #866efb,0 18px 0 -8px #866efb,-16px 8px 0 -8px #866efb,-16px -8px 0 -8px #866efb}100%{background:#866efb;box-shadow:0 -36px 0 -10px transparent,32px -16px 0 -10px transparent,32px 16px 0 -10px transparent,0 36px 0 -10px transparent,-32px 16px 0 -10px transparent,-32px -16px 0 -10px transparent}}")}}(n||(t.ScriptsMenuMarking=n={}))},287:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.updateState=t.submitChanges=t.checkChanges=t.isPage=void 0,t.isPage=(e,t)=>!!e.target.classList&&e.target.classList.contains(t),t.checkChanges=()=>window.observerState.cur.currentPage!==window.observerState.old.currentPage&&(window.observerState.old=JSON.parse(JSON.stringify(window.observerState.cur)),!0),t.submitChanges=()=>{(0,t.checkChanges)()&&window.observerSubs.forEach((e=>e(window.observerState.cur)))},t.updateState=e=>{if(!e.target.classList||0===e.target.classList.length)return;let s=window.observerState.cur;(0,t.isPage)(e,"menu")&&(s.currentPage="menu"),(0,t.isPage)(e,"server-browser-box")&&(s.currentPage="server-list"),(0,t.isPage)(e,"leaderboard-title-break")&&(s.currentPage="game"),(0,t.isPage)(e,"hero-select")&&(s.currentPage="hero-select"),(0,t.isPage)(e,"results")&&(s.currentPage="game-end"),window.observerState.cur=s,(0,t.submitChanges)()}},31:function(e,t,s){var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s);var n=Object.getOwnPropertyDescriptor(t,s);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(e,r,n)}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),n=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||r(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0}),t.observerRegister=void 0;const p=s(287);t.observerRegister=()=>{window.observerState={cur:{currentPage:"menu"},old:{currentPage:"menu"}},window.observerSubs=[],document.body.addEventListener("DOMNodeInserted",(e=>(0,p.updateState)(e)),!1)},n(s(287),t),n(s(466),t)},466:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},290:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.replaces=[],this.vars={},this.name=e.name,this.icon=e.icon??"https://raw.githubusercontent.com/EtherCD/EvadesSP/main/repo/empty-script.svg",this.version=e.version??"none",this.description=e.description??"Description is not added",this.enabled=!0}addReplace(e,t){this.replaces.push([e,this.formatReplace(t)])}addReplaces(...e){for(const t in e)this.addReplace(e[t][0],e[t][1])}formatReplace(e){return e.replace(/#\{([^\}]+)\}/g,((e,t)=>`window.scripts.get("${this.name}").getVar("${t}")`))}addVar(e,t){this.vars[e]=t}getVar(e){return this.vars[e]}patch(e){for(const t in this.replaces)e=e.replace(this.replaces[t][0],this.replaces[t][1]);return console.log(this.name+" was loaded!"),e}}},272:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=s(290);t.default=class{constructor(){this.list=[]}add(e){this.list.push(new r.default(e))}create(e){const t=new r.default(e);return this.list.push(t),t}get(e){for(const t in this.list)if(this.list[t].name===e)return this.list[t];console.log(e),console.warn(`Loading Script Error: Trying get not exists script, name: ${e}`)}forEach(e){for(const t in this.list)e(this.list[t])}init(){let e=Array.from(document.querySelectorAll("script")).filter((e=>"module"===e.type&&e.src.match(/\/index\.[0-9a-f]{8}\.js/)))[0];if(!e)return;navigator.userAgent.includes("Firefox")||e.remove();let t=e.src,s=new XMLHttpRequest;s.open("GET",t,!1),s.send();let r=s.response;for(const e in this.list)r=this.list[e].patch(r);let n=document.createElement("script");n.setAttribute("type","module"),n.innerHTML=r,document.body.appendChild(n),console.log("All Scripts was loaded!")}}},800:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.pushStylesToDom=t.addStyle=void 0;let s=[];t.addStyle=function(e){s.push(e)},t.pushStylesToDom=function(){const e=document.createElement("style");e.innerHTML=s.join(" "),e.id="esp-styles",document.head.appendChild(e)}}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var p=t[r]={exports:{}};return e[r].call(p.exports,p,p.exports,s),p.exports}(()=>{const e=s(851),t=s(31),r=s(272);window.scripts=new r.default,(0,t.observerRegister)(),document.addEventListener("readystatechange",(()=>{-1===window.location.href.search(/\/profile/g)&&-1===window.location.href.search(/\/account/g)&&window.scripts.init(),(new e.default).push()}))})()})();
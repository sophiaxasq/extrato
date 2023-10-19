const express = require('express');
const axios = require('axios');
const app = express();

const headers = {
    'authority': 'www.mercadopago.com.br',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'cookie': '_ga=GA1.1.13381505.1691940344; _d2id=f87a8a16-4a3b-43e2-ba02-4d1662cccd36; ftid=tvY6KvNuRWQvB3r5mJtKJgO3XFB9uya2-1691940779242; orguserid=90H0tdhdhdT4d; ssid=ghy-081311-uUkYuNJecLpQRqKExeTPsWxwwsPSTy-__-1367070490-__-1786635259584--RRR_0-RRR_0; orguseridp=1367070490; orgnickp=SILVAROSELI20230504151337; dxDevPanelOnboarding=true; _mp_ga=GA1.3.573620295.1691940781; _gcl_au=1.1.1317245937.1692110709; _fbp=fb.2.1692110709182.1127717833; dsid=754e019f-550c-4059-abb3-e7e336781214-1692110710979; _hjSessionUser_492923=eyJpZCI6Ijc0NmM1ZjFkLTZiZWYtNTdjMy04MTA5LWI3OWFmN2E1ZDM3MCIsImNyZWF0ZWQiOjE2OTIxMTA3MDkyMzgsImV4aXN0aW5nIjp0cnVlfQ==; _hjSessionUser_585655=eyJpZCI6IjAzY2Y2YTI4LTZhN2QtNWZlZC04ZjVlLTJiZjAwN2JhOGQ1YSIsImNyZWF0ZWQiOjE2OTIxMTA3NDU3NDMsImV4aXN0aW5nIjp0cnVlfQ==; p_dsid=74d878d8-3555-4a8d-b72b-9b92f57c87ac-1693928082802; QSI_SI_cDgJbLqs7Lb08Hs_intercept=true; QSI_SI_cYoAhbmPMT60Z14_intercept=true; dx-test-users-onboarding-=true; _ga_XJRJL56B0Z=GS1.1.1695448191.5.1.1695449760.0.0.0; mp_spending-tracking_budget-pill=2023-09-23T16:26:34.663-03:00; _gcl_aw=GCL.1695581531.Cj0KCQjwvL-oBhCxARIsAHkOiu1FLl8EgVowemq0hMSsIssBsZOwP-KguYrL25P57jxWUHka_GWeVeoaAhM_EALw_wcB; cookiesPreferencesLoggedFallback=%7B%22userId%22%3A1367070490%2C%22categories%22%3A%7B%22advertising%22%3Atrue%2C%22functionality%22%3Anull%2C%22performance%22%3Anull%2C%22traceability%22%3Atrue%7D%7D; QSI_SI_23SnzFDvtxRGSZ8_intercept=true; _csrf=vh3jkc15zbQIP5oNVCx4NNPb; cookiesPreferencesLogged=%7B%22userId%22%3A1367070490%2C%22categories%22%3A%7B%22advertising%22%3Atrue%2C%22functionality%22%3Anull%2C%22performance%22%3Anull%2C%22traceability%22%3Atrue%7D%7D; _mldataSessionId=66bcdd55-54e2-4589-bb48-055ca13b4e99; completeness_is_collapsed=false; edsid=5347cb78-12d4-3326-b403-6bddedced44f-1697687155857; p_edsid=dcd3c064-9b87-3632-bbcd-19e8fe62a4f1-1697687155870; _mp_ga_gid=GA1.3.781492846.1697687156; _mp_ci=573620295.1691940781; _mp_dc=1; _hjIncludedInSessionSample_492923=1; _hjSession_492923=eyJpZCI6IjAzYzQzMTA5LTViZjItNDVmYy1hYTQzLTM0MjM0MmI1Yjc2MiIsImNyZWF0ZWQiOjE2OTc2ODcxNTkwMDIsImluU2FtcGxlIjp0cnVlLCJzZXNzaW9uaXplckJldGFFbmFibGVkIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=1; cto_bundle=Usu4vV9HSWpUU05FazlFYkdEdThRR2xWMVMybFk4VThwJTJCemduREVMQUpwWUFRY2I5UU5jWHFQY2lBNXhKcGVnbUxZR0JOZExYWk1zbjlzYnBWNFBuY0laQVMxYVM5VCUyQkF1c1Y1TlREd0xCcUl4anU0SHolMkZTMnNreEkwZHBoRTRZeGYwbFBPMjg2Vlp1MGZaZG1uYlFLNjElMkJzJTJGeWhzbXVpUzBKWjdhYnU2MXphYnNadzFRTUlXOERjdDJMZEJEVlNEdzJnYXhKdGp6M0pWWjQ2ZXFCNW5WUkViQSUzRCUzRA', // insira o cookie completo aqui
    'device-memory': '4',
    'downlink': '1.35',
    'dpr': '1',
    'ect': '3g',
    'referer': 'https://www.mercadopago.com.br/activities/1?type=transfer_received',
    'rtt': '550',
    'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'viewport-width': '806',
    'x-csrf-token': 'svcYGe6V-GXC5hXCvXWBSn69BgieWvJjVly0',
    'x-newrelic-id': 'XQ4OVF5VGwYFXVNUAwMH'
};

app.get('/', (req, res) => {
    axios.get('https://www.mercadopago.com.br/activities/api/activities/list?page=1&type=transfer_received&listing=activities', { headers })
        .then(response => {
            const results = response.data.results;
            let html = `
            <html lang="pt-BR">
            <head>
               <link rel="preconnect" href="https://www.google-analytics.com">
               <link rel="preconnect" href="https://www.google.com">
               <link rel="preconnect" href="https://data.mercadolibre.com">
               <link rel="preconnect" href="https://http2.mlstatic.com">
               <link rel="preconnect" href="https://stats.g.doubleclick.net">
               <link rel="preconnect" href="https://www.google.com.br">
               <iframe src="about:srcdoc" srcdoc="<script  src='https://http2.mlstatic.com/analytics/ga/mlb-mp-analytics.min.js'></script>" id="GoogleAnalyticsIframe" style="width: 0px; height: 0px; border: 0px; position: absolute;"></iframe><iframe src="about:srcdoc" srcdoc="<script  src='https://http2.mlstatic.com/storage/melidata-js-sdk/js/3/0.4.3/melidata.min.js'></script>" id="MelidataIframe" style="width: 0px; height: 0px; border: 0px; position: absolute;"></iframe><script type="text/javascript" async="" src="https://static.hotjar.com/c/hotjar-492923.js?sv=7"></script><script src="https://connect.facebook.net/signals/config/709251044353716?v=2.9.134&amp;r=stable&amp;domain=www.mercadopago.com.br" async=""></script><script src="https://connect.facebook.net/signals/config/3111280472519655?v=2.9.134&amp;r=stable&amp;domain=www.mercadopago.com.br" async=""></script><script src="https://connect.facebook.net/signals/config/625080041002577?v=2.9.134&amp;r=stable&amp;domain=www.mercadopago.com.br" async=""></script><script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script><script type="text/javascript" async="" src="https://static.hotjar.com/c/hotjar-492923.js?sv=7"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-NRDZZ97"></script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info = {"agent":"","beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"NRBR-766f4fb616d3a2368ce","applicationID":"55926420","agentToken":null,"applicationTime":391.792459,"transactionName":"YlZQYEVZC0QEV0BZV1scd0xHSgBEFl5HH39wZx0bVlsRXhNdQFldRhwIRFZfAB85UB8ZBw==","queueTime":0,"ttGuid":"abbe40b0ed5f20d8"}; (window.NREUM||(NREUM={})).init={ajax:{deny_list:["bam.nr-data.net"]}};(window.NREUM||(NREUM={})).loader_config={xpid:"XQ4OVF5VGwYFXVNUAwMH",licenseKey:"NRBR-766f4fb616d3a2368ce",applicationID:"55926420"};;/*! For license information please see nr-loader-full-1.244.0.min.js.LICENSE.txt */
                  (()=>{"use strict";var e,t,r={234:(e,t,r)=>{r.d(t,{P_:()=>g,Mt:()=>v,C5:()=>s,DL:()=>x,OP:()=>j,lF:()=>C,Yu:()=>A,Dg:()=>m,CX:()=>c,GE:()=>w,sU:()=>S});var n=r(8632),i=r(9567);const a={beacon:n.ce.beacon,errorBeacon:n.ce.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0},o={};function s(e){if(!e)throw new Error("All info objects require an agent identifier!");if(!o[e])throw new Error("Info for ".concat(e," was never set"));return o[e]}function c(e,t){if(!e)throw new Error("All info objects require an agent identifier!");o[e]=(0,i.D)(t,a),(0,n.Qy)(e,o[e],"info")}const d=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var u=r(7056),l=r(50);const f=()=>{const e={mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{proxy:{assets:void 0,beacon:void 0},privacy:{cookies_enabled:!0},ajax:{deny_list:void 0,block_internal:!0,enabled:!0,harvestTimeSeconds:10,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},session:{domain:void 0,expiresMs:u.oD,inactiveMs:u.Hb},ssl:void 0,obfuscate:void 0,jserrors:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},metrics:{enabled:!0,autoStart:!0},page_action:{enabled:!0,harvestTimeSeconds:30,autoStart:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,harvestTimeSeconds:30,long_task:!1,autoStart:!0},session_trace:{enabled:!0,harvestTimeSeconds:10,autoStart:!0},harvest:{tooManyRequestsDelay:60},session_replay:{autoStart:!0,enabled:!1,harvestTimeSeconds:60,sampling_rate:50,error_sampling_rate:50,collect_fonts:!1,inline_images:!1,inline_stylesheet:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){d(t)?e.mask_selector=t+",[data-nr-mask]":null===t?e.mask_selector=t:(0,l.Z)("An invalid session_replay.mask_selector was provided and will not be used",t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){d(t)?e.block_selector+=",".concat(t):""!==t&&(0,l.Z)("An invalid session_replay.block_selector was provided and will not be used",t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,l.Z)("An invalid session_replay.mask_input_option was provided and will not be used",t)}},spa:{enabled:!0,harvestTimeSeconds:10,autoStart:!0}}},h={},p="All configuration objects require an agent identifier!";function g(e){if(!e)throw new Error(p);if(!h[e])throw new Error("Configuration for ".concat(e," was never set"));return h[e]}function m(e,t){if(!e)throw new Error(p);h[e]=(0,i.D)(t,f()),(0,n.Qy)(e,h[e],"config")}function v(e,t){if(!e)throw new Error(p);var r=g(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}const b={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},y={};function x(e){if(!e)throw new Error("All loader-config objects require an agent identifier!");if(!y[e])throw new Error("LoaderConfig for ".concat(e," was never set"));return y[e]}function w(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");y[e]=(0,i.D)(t,b),(0,n.Qy)(e,y[e],"loader_config")}const A=(0,n.mF)().o;var _=r(385),E=r(6818);const T={buildEnv:E.Re,customTransaction:void 0,disabled:!1,distMethod:E.gF,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,offset:Math.floor(_._A?.performance?.timeOrigin||_._A?.performance?.timing?.navigationStart||Date.now()),onerror:void 0,origin:""+_._A.location,ptid:void 0,releaseIds:{},session:void 0,xhrWrappable:"function"==typeof _._A.XMLHttpRequest?.prototype?.addEventListener,version:E.q4,denyList:void 0},D={};function j(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!D[e])throw new Error("Runtime for ".concat(e," was never set"));return D[e]}function S(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");D[e]=(0,i.D)(t,T),(0,n.Qy)(e,D[e],"runtime")}function C(e){return function(e){try{const t=s(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}(e)}},9567:(e,t,r)=>{r.d(t,{D:()=>i});var n=r(50);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.Z)("Setting a Configurable requires an object as input");if(!t||"object"!=typeof t)return(0,n.Z)("Setting a Configurable requires a model to set its initial properties");const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),a=0===Object.keys(r).length?e:r;for(let o in a)if(void 0!==e[o])try{"object"==typeof e[o]&&"object"==typeof t[o]?r[o]=i(e[o],t[o]):r[o]=e[o]}catch(e){(0,n.Z)("An error occurred while setting a property of a Configurable",e)}return r}catch(e){(0,n.Z)("An error occured while setting a Configurable",e)}}},6818:(e,t,r)=>{r.d(t,{Re:()=>i,gF:()=>a,lF:()=>o,q4:()=>n});const n="1.244.0",i="PROD",a="CDN",o="2.0.0-alpha.11"},385:(e,t,r)=>{r.d(t,{FN:()=>s,IF:()=>u,Nk:()=>f,Tt:()=>c,_A:()=>a,cv:()=>h,iS:()=>o,il:()=>n,ux:()=>d,v6:()=>i,w1:()=>l});const n="undefined"!=typeof window&&!!window.document,i="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),a=n?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),o=Boolean("hidden"===a?.document?.visibilityState),s=""+a?.location,c=/iPad|iPhone|iPod/.test(a.navigator?.userAgent),d=c&&"undefined"==typeof SharedWorker,u=(()=>{const e=a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);return Array.isArray(e)&&e.length>=2?+e[1]:0})(),l=Boolean(n&&window.document.documentMode),f=!!a.navigator?.sendBeacon,h=Math.floor(a?.performance?.timeOrigin||a?.performance?.timing?.navigationStart||Date.now())},1117:(e,t,r)=>{r.d(t,{w:()=>a});var n=r(50);const i={agentIdentifier:"",ee:void 0};class a{constructor(e){try{if("object"!=typeof e)return(0,n.Z)("shared context requires an object as input");this.sharedContext={},Object.assign(this.sharedContext,i),Object.entries(e).forEach((e=>{let[t,r]=e;Object.keys(i).includes(t)&&(this.sharedContext[t]=r)}))}catch(e){(0,n.Z)("An error occured while setting SharedContext",e)}}}},8e3:(e,t,r)=>{r.d(t,{L:()=>u,R:()=>c});var n=r(8325),i=r(1284),a=r(4322),o=r(3325);const s={};function c(e,t){const r={staged:!1,priority:o.p[t]||0};d(e),s[e].get(t)||s[e].set(t,r)}function d(e){e&&(s[e]||(s[e]=new Map))}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feature";if(d(e),!e||!s[e].get(t))return o(t);s[e].get(t).staged=!0;const r=[...s[e]];function o(t){const r=e?n.ee.get(e):n.ee,o=a.X.handlers;if(r.backlog&&o){var s=r.backlog[t],c=o[t];if(c){for(var d=0;s&&d<s.length;++d)l(s[d],c);(0,i.D)(c,(function(e,t){(0,i.D)(t,(function(t,r){r[0].on(e,r[1])}))}))}delete o[t],r.backlog[t]=null,r.emit("drain-"+t,[])}}r.every((e=>{let[t,r]=e;return r.staged}))&&(r.sort(((e,t)=>e[1].priority-t[1].priority)),r.forEach((t=>{let[r]=t;s[e].delete(r),o(r)})))}function l(e,t){var r=e[1];(0,i.D)(t[r],(function(t,r){var n=e[0];if(r[0]===n){var i=r[1],a=e[3],o=e[2];i.apply(a,o)}}))}},8325:(e,t,r)=>{r.d(t,{A:()=>c,ee:()=>d});var n=r(8632),i=r(2210),a=r(234);class o{constructor(e){this.contextId=e}}var s=r(3117);const c="nr@context:".concat(s.a),d=function e(t,r){var n={},s={},u={},f=!1;try{f=16===r.length&&(0,a.OP)(r).isolatedBacklog}catch(e){}var h={on:g,addEventListener:g,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,a){!1!==a&&(a=!0);if(d.aborted&&!i)return;t&&a&&t.emit(e,r,n);for(var o=p(n),c=m(e),u=c.length,l=0;l<u;l++)c[l].apply(o,r);var f=b()[s[e]];f&&f.push([h,e,r,o]);return o},get:v,listeners:m,context:p,buffer:function(e,t){const r=b();if(t=t||"feature",h.aborted)return;Object.entries(e||{}).forEach((e=>{let[n,i]=e;s[i]=t,t in r||(r[t]=[])}))},abort:l,aborted:!1,isBuffering:function(e){return!!b()[s[e]]},debugId:r,backlog:f?{}:t&&"object"==typeof t.backlog?t.backlog:{}};return h;function p(e){return e&&e instanceof o?e:e?(0,i.X)(e,c,(()=>new o(c))):new o(c)}function g(e,t){n[e]=m(e).concat(t)}function m(e){return n[e]||[]}function v(t){return u[t]=u[t]||e(h,t)}function b(){return h.backlog}}(void 0,"globalEE"),u=(0,n.fP)();function l(){d.aborted=!0,d.backlog={}}u.ee||(u.ee=d)},5546:(e,t,r)=>{r.d(t,{E:()=>n,p:()=>i});var n=r(8325).ee.get("handle");function i(e,t,r,i,a){a?(a.buffer([e],i),a.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},4322:(e,t,r)=>{r.d(t,{X:()=>a});var n=r(5546);a.on=o;var i=a.handlers={};function a(e,t,r,a){o(a||n.E,i,e,t,r)}function o(e,t,r,i,a){a||(a="feature"),e||(e=n.E);var o=t[a]=t[a]||{};(o[r]=o[r]||[]).push([e,i])}},3239:(e,t,r)=>{r.d(t,{bP:()=>s,iz:()=>c,m$:()=>o});var n=r(385);let i=!1,a=!1;try{const e={get passive(){return i=!0,!1},get signal(){return a=!0,!1}};n._A.addEventListener("test",null,e),n._A.removeEventListener("test",null,e)}catch(e){}function o(e,t){return i||a?{capture:!!e,passive:i,signal:t}:!!e}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;window.addEventListener(e,t,o(r,n))}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;document.addEventListener(e,t,o(r,n))}},3117:(e,t,r)=>{r.d(t,{a:()=>n});const n=(0,r(4402).Rl)()},4402:(e,t,r)=>{r.d(t,{Ht:()=>d,M:()=>c,Rl:()=>o,ky:()=>s});var n=r(385);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function a(e,t){return e?15&e[t]:16*Math.random()|0}function o(){const e=n._A?.crypto||n._A?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(31))),i.split("").map((e=>"x"===e?a(t,++r).toString(16):"y"===e?(3&a()|8).toString(16):e)).join("")}function s(e){const t=n._A?.crypto||n._A?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(31)));const o=[];for(var s=0;s<e;s++)o.push(a(r,++i).toString(16));return o.join("")}function c(){return s(16)}function d(){return s(32)}},7056:(e,t,r)=>{r.d(t,{Bq:()=>n,Hb:()=>a,oD:()=>i});const n="NRBA",i=144e5,a=18e5},7894:(e,t,r)=>{function n(){return Math.round(performance.now())}r.d(t,{z:()=>n})},7243:(e,t,r)=>{r.d(t,{e:()=>a});var n=r(385),i={};function a(e){if(e in i)return i[e];if(0===(e||"").indexOf("data:"))return{protocol:"data"};let t;var r=n._A?.location,a={};if(n.il)t=document.createElement("a"),t.href=e;else try{t=new URL(e,r.href)}catch(e){return a}a.port=t.port;var o=t.href.split("://");!a.port&&o[1]&&(a.port=o[1].split("/")[0].split("@").pop().split(":")[1]),a.port&&"0"!==a.port||(a.port="https"===o[0]?"443":"80"),a.hostname=t.hostname||r.hostname,a.pathname=t.pathname,a.protocol=o[0],"/"!==a.pathname.charAt(0)&&(a.pathname="/"+a.pathname);var s=!t.protocol||":"===t.protocol||t.protocol===r.protocol,c=t.hostname===r.hostname&&t.port===r.port;return a.sameOrigin=s&&(!t.hostname||c),"/"===a.pathname&&(i[e]=a),a}},50:(e,t,r)=>{function n(e,t){"function"==typeof console.warn&&(console.warn("New Relic: ".concat(e)),t&&console.warn(t))}r.d(t,{Z:()=>n})},2587:(e,t,r)=>{r.d(t,{N:()=>c,T:()=>d});var n=r(8325),i=r(5546),a=r(3325);const o={stn:[a.D.sessionTrace],err:[a.D.jserrors,a.D.metrics],ins:[a.D.pageAction],spa:[a.D.spa],sr:[a.D.sessionReplay,a.D.sessionTrace]},s=new Set;function c(e,t){const r=n.ee.get(t);e&&"object"==typeof e&&(s.has(t)||Object.entries(e).forEach((e=>{let[t,n]=e;o[t]?o[t].forEach((e=>{n?(0,i.p)("feat-"+t,[],void 0,e,r):(0,i.p)("block-"+t,[],void 0,e,r),(0,i.p)("rumresp-"+t,[Boolean(n)],void 0,e,r)})):n&&(0,i.p)("feat-"+t,[],void 0,void 0,r),d[t]=Boolean(n)})),Object.keys(o).forEach((e=>{void 0===d[e]&&(o[e]?.forEach((t=>(0,i.p)("rumresp-"+e,[!1],void 0,t,r))),d[e]=!1)})),s.add(t))}const d={}},2210:(e,t,r)=>{r.d(t,{X:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},1284:(e,t,r)=>{r.d(t,{D:()=>n});const n=(e,t)=>Object.entries(e||{}).map((e=>{let[r,n]=e;return t(r,n)}))},4351:(e,t,r)=>{r.d(t,{P:()=>a});var n=r(8325);const i=()=>{const e=new WeakSet;return(t,r)=>{if("object"==typeof r&&null!==r){if(e.has(r))return;e.add(r)}return r}};function a(e){try{return JSON.stringify(e,i())}catch(e){try{n.ee.emit("internal-error",[e])}catch(e){}}}},3960:(e,t,r)=>{r.d(t,{K:()=>o,b:()=>a});var n=r(3239);function i(){return"undefined"==typeof document||"complete"===document.readyState}function a(e,t){if(i())return e();(0,n.bP)("load",e,t)}function o(e){if(i())return e();(0,n.iz)("DOMContentLoaded",e)}},8632:(e,t,r)=>{r.d(t,{EZ:()=>d,Qy:()=>c,ce:()=>a,fP:()=>o,gG:()=>u,mF:()=>s});var n=r(7894),i=r(385);const a={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function o(){return i._A.NREUM||(i._A.NREUM={}),void 0===i._A.newrelic&&(i._A.newrelic=i._A.NREUM),i._A.NREUM}function s(){let e=o();return e.o||(e.o={ST:i._A.setTimeout,SI:i._A.setImmediate,CT:i._A.clearTimeout,XHR:i._A.XMLHttpRequest,REQ:i._A.Request,EV:i._A.Event,PR:i._A.Promise,MO:i._A.MutationObserver,FETCH:i._A.fetch}),e}function c(e,t,r){let i=o();const a=i.initializedAgents||{},s=a[e]||{};return Object.keys(s).length||(s.initializedAt={ms:(0,n.z)(),date:new Date}),i.initializedAgents={...a,[e]:{...s,[r]:t}},i}function d(e,t){o()[e]=t}function u(){return function(){let e=o();const t=e.info||{};e.info={beacon:a.beacon,errorBeacon:a.errorBeacon,...t}}(),function(){let e=o();const t=e.init||{};e.init={...t}}(),s(),function(){let e=o();const t=e.loader_config||{};e.loader_config={...t}}(),o()}},7956:(e,t,r)=>{r.d(t,{N:()=>i});var n=r(3239);function i(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,n.iz)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,i)}},1214:(e,t,r)=>{r.d(t,{em:()=>b,u5:()=>j,QU:()=>P,Kf:()=>I});var n=r(8325),i=r(3117);const a="nr@original:".concat(i.a);var o=Object.prototype.hasOwnProperty,s=!1;function c(e,t){return e||(e=n.ee),r.inPlace=function(e,t,n,i,a){n||(n="");const o="-"===n.charAt(0);for(let s=0;s<t.length;s++){const c=t[s],d=e[c];u(d)||(e[c]=r(d,o?c+n:n,i,c,a))}},r.flag=a,r;function r(t,r,n,s,c){return u(t)?t:(r||(r=""),nrWrapper[a]=t,function(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})})),t}catch(e){d([e],r)}for(var n in e)o.call(e,n)&&(t[n]=e[n])}(t,nrWrapper,e),nrWrapper);function nrWrapper(){var a,o,u,l;try{o=this,a=[...arguments],u="function"==typeof n?n(a,o):n||{}}catch(t){d([t,"",[a,o,s],u],e)}i(r+"start",[a,o,s],u,c);try{return l=t.apply(o,a)}catch(e){throw i(r+"err",[a,o,e],u,c),e}finally{i(r+"end",[a,o,l],u,c)}}}function i(r,n,i,a){if(!s||t){var o=s;s=!0;try{e.emit(r,n,i,t,a)}catch(t){d([t,r,n,i],e)}s=o}}}function d(e,t){t||(t=n.ee);try{t.emit("internal-error",e)}catch(e){}}function u(e){return!(e&&"function"==typeof e&&e.apply&&!e[a])}var l=r(2210),f=r(385);const h={},p=f._A.XMLHttpRequest,g="addEventListener",m="removeEventListener",v="nr@wrapped:".concat(n.A);function b(e){var t=function(e){return(e||n.ee).get("events")}(e);if(h[t.debugId]++)return t;h[t.debugId]=1;var r=c(t,!0);function i(e){r.inPlace(e,[g,m],"-",a)}function a(e,t){return e[1]}return"getPrototypeOf"in Object&&(f.il&&y(document,i),y(f._A,i),y(p.prototype,i)),t.on(g+"-start",(function(e,t){var n=e[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var i=(0,l.X)(n,v,(function(){var e={object:function(){if("function"!=typeof n.handleEvent)return;return n.handleEvent.apply(n,arguments)},function:n}[typeof n];return e?r(e,"fn-",null,e.name||"anonymous"):n}));this.wrapped=e[1]=i}})),t.on(m+"-start",(function(e){e[1]=this.wrapped||e[1]})),t}function y(e,t){let r=e;for(;"object"==typeof r&&!Object.prototype.hasOwnProperty.call(r,g);)r=Object.getPrototypeOf(r);for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];r&&t(r,...i)}var x="fetch-",w=x+"body-",A=["arrayBuffer","blob","json","text","formData"],_=f._A.Request,E=f._A.Response,T="prototype";const D={};function j(e){const t=function(e){return(e||n.ee).get("fetch")}(e);if(!(_&&E&&f._A.fetch))return t;if(D[t.debugId]++)return t;function r(e,r,i){var a=e[r];"function"==typeof a&&(e[r]=function(){var e,r=[...arguments],o={};t.emit(i+"before-start",[r],o),o[n.A]&&o[n.A].dt&&(e=o[n.A].dt);var s=a.apply(this,r);return t.emit(i+"start",[r,e],s),s.then((function(e){return t.emit(i+"end",[null,e],s),e}),(function(e){throw t.emit(i+"end",[e],s),e}))})}return D[t.debugId]=1,A.forEach((e=>{r(_[T],e,w),r(E[T],e,w)})),r(f._A,"fetch",x),t.on(x+"end",(function(e,r){var n=this;if(r){var i=r.headers.get("content-length");null!==i&&(n.rxSize=i),t.emit(x+"done",[null,r],n)}else t.emit(x+"done",[e],n)})),t}const S={},C=["pushState","replaceState"];function P(e){const t=function(e){return(e||n.ee).get("history")}(e);return!f.il||S[t.debugId]++||(S[t.debugId]=1,c(t).inPlace(window.history,C,"-")),t}var R=r(3239);var O=r(50);const k={},N=["open","send"];function I(e){var t=e||n.ee;const r=function(e){return(e||n.ee).get("xhr")}(t);if(k[r.debugId]++)return r;k[r.debugId]=1,b(t);var i=c(r),a=f._A.XMLHttpRequest,o=f._A.MutationObserver,s=f._A.Promise,d=f._A.setInterval,u="readystatechange",l=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],h=[],p=f._A.XMLHttpRequest=function(e){const t=new a(e),n=r.context(t);try{r.emit("new-xhr",[t],n),t.addEventListener(u,(o=n,function(){var e=this;e.readyState>3&&!o.resolved&&(o.resolved=!0,r.emit("xhr-resolved",[],e)),i.inPlace(e,l,"fn-",w)}),(0,R.m$)(!1))}catch(e){(0,O.Z)("An error occurred while intercepting XHR",e);try{r.emit("internal-error",[e])}catch(e){}}var o;return t};function g(e,t){i.inPlace(t,["onreadystatechange"],"fn-",w)}if(function(e,t){for(var r in e)t[r]=e[r]}(a,p),p.prototype=a.prototype,i.inPlace(p.prototype,N,"-xhr-",w),r.on("send-xhr-start",(function(e,t){g(e,t),function(e){h.push(e),o&&(m?m.then(x):d?d(x):(v=-v,y.data=v))}(t)})),r.on("open-xhr-start",g),o){var m=s&&s.resolve();if(!d&&!s){var v=1,y=document.createTextNode(v);new o(x).observe(y,{characterData:!0})}}else t.on("fn-end",(function(e){e[0]&&e[0].type===u||x()}));function x(){for(var e=0;e<h.length;e++)g(0,h[e]);h.length&&(h=[])}function w(e,t){return t}return r}},7825:(e,t,r)=>{r.d(t,{t:()=>n});const n=r(3325).D.ajax},6660:(e,t,r)=>{r.d(t,{t:()=>n});const n=r(3325).D.jserrors},3081:(e,t,r)=>{r.d(t,{gF:()=>a,mY:()=>i,t9:()=>n,vz:()=>s,xS:()=>o});const n=r(3325).D.metrics,i="sm",a="cm",o="storeSupportabilityMetrics",s="storeEventMetrics"},4649:(e,t,r)=>{r.d(t,{t:()=>n});const n=r(3325).D.pageAction},7633:(e,t,r)=>{r.d(t,{t:()=>n});const n=r(3325).D.pageViewEvent},9251:(e,t,r)=>{r.d(t,{t:()=>n});const n=r(3325).D.pageViewTiming},7144:(e,t,r)=>{r.d(t,{t:()=>n});const n=r(3325).D.sessionReplay},3614:(e,t,r)=>{r.d(t,{BST_RESOURCE:()=>i,END:()=>s,FEATURE_NAME:()=>n,FN_END:()=>d,FN_START:()=>c,PUSH_STATE:()=>u,RESOURCE:()=>a,START:()=>o});const n=r(3325).D.sessionTrace,i="bstResource",a="resource",o="-start",s="-end",c="fn"+o,d="fn"+s,u="pushState"},5938:(e,t,r)=>{r.d(t,{W:()=>i});var n=r(8325);class i{constructor(e,t,r){this.agentIdentifier=e,this.aggregator=t,this.ee=n.ee.get(e),this.featureName=r,this.blocked=!1}}},7530:(e,t,r)=>{r.d(t,{j:()=>b});var n=r(3325),i=r(234),a=r(5546),o=r(8325),s=r(7894),c=r(8e3),d=r(3960),u=r(385),l=r(50),f=r(3081),h=r(8632);function p(){const e=(0,h.gG)();["setErrorHandler","finished","addToTrace","addRelease","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start"].forEach((t=>{e[t]=function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];let a=[];return Object.values(e.initializedAgents).forEach((e=>{e.exposed&&e.api[t]&&a.push(e.api[t](...n))})),a.length>1?a:a[0]}(t,...n)}}))}var g=r(2587);const m=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let v=!1;function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},b=arguments.length>2?arguments[2]:void 0,y=arguments.length>3?arguments[3]:void 0,{init:x,info:w,loader_config:A,runtime:_={loaderType:b},exposed:E=!0}=t;const T=(0,h.gG)();w||(x=T.init,w=T.info,A=T.loader_config),(0,i.Dg)(e,x||{}),(0,i.GE)(e,A||{}),w.jsAttributes??={},u.v6&&(w.jsAttributes.isWorker=!0),(0,i.CX)(e,w);const D=(0,i.P_)(e),j=[w.beacon,w.errorBeacon];v||(v=!0,D.proxy.assets&&(m(D.proxy.assets),j.push(D.proxy.assets)),D.proxy.beacon&&j.push(D.proxy.beacon)),_.denyList=[...D.ajax.deny_list||[],...D.ajax.block_internal?j:[]],(0,i.sU)(e,_),p();const S=function(e,t){t||(0,c.R)(e,"api");const h={};var p=o.ee.get(e),g=p.get("tracer"),m="api-",v=m+"ixn-";function b(t,r,n,a){const o=(0,i.C5)(e);return null===r?delete o.jsAttributes[t]:(0,i.CX)(e,{...o,jsAttributes:{...o.jsAttributes,[t]:r}}),w(m,n,!0,a||null===r?"session":void 0)(t,r)}function y(){}["setErrorHandler","finished","addToTrace","addRelease"].forEach((e=>{h[e]=w(m,e,!0,"api")})),h.addPageAction=w(m,"addPageAction",!0,n.D.pageAction),h.setCurrentRouteName=w(m,"routeName",!0,n.D.spa),h.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,i.OP)(e).customTransaction=(r||"http://custom.transaction")+t,w(m,"setPageViewName",!0)()},h.setCustomAttribute=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e){if(["string","number"].includes(typeof t)||null===t)return b(e,t,"setCustomAttribute",r);(0,l.Z)("Failed to execute setCustomAttribute.\nNon-null value must be a string or number type, but a type of <".concat(typeof t,"> was provided."))}else(0,l.Z)("Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(typeof e,"> was provided."))},h.setUserId=function(e){if("string"==typeof e||null===e)return b("enduser.id",e,"setUserId",!0);(0,l.Z)("Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(typeof e,"> was provided."))},h.setApplicationVersion=function(e){if("string"==typeof e||null===e)return b("application.version",e,"setApplicationVersion",!1);(0,l.Z)("Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(typeof e,">."))},h.start=e=>{try{const t=e?"defined":"undefined";(0,a.p)(f.xS,["API/start/".concat(t,"/called")],void 0,n.D.metrics,p);const r=Object.values(n.D);if(void 0===e)e=r;else{if((e=Array.isArray(e)&&e.length?e:[e]).some((e=>!r.includes(e))))return(0,l.Z)("Invalid feature name supplied. Acceptable feature names are: ".concat(r));e.includes(n.D.pageViewEvent)||e.push(n.D.pageViewEvent)}e.forEach((e=>{p.emit("".concat(e,"-opt-in"))}))}catch(e){(0,l.Z)("An unexpected issue occurred",e)}},h.interaction=function(){return(new y).get()};var x=y.prototype={createTracer:function(e,t){var r={},i=this,o="function"==typeof t;return(0,a.p)(v+"tracer",[(0,s.z)(),e,r],i,n.D.spa,p),function(){if(g.emit((o?"":"no-")+"fn-start",[(0,s.z)(),i,o],r),o)try{return t.apply(this,arguments)}catch(e){throw g.emit("fn-err",[arguments,this,e],r),e}finally{g.emit("fn-end",[(0,s.z)()],r)}}}};function w(e,t,r,i){return function(){return(0,a.p)(f.xS,["API/"+t+"/called"],void 0,n.D.metrics,p),i&&(0,a.p)(e+t,[(0,s.z)(),...arguments],r?null:this,i,p),r?void 0:this}}function A(){r.e(63).then(r.bind(r,7438)).then((t=>{let{setAPI:r}=t;r(e),(0,c.L)(e,"api")})).catch((()=>(0,l.Z)("Downloading runtime APIs failed...")))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{x[e]=w(v,e,void 0,n.D.spa)})),h.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),(0,a.p)(f.xS,["API/noticeError/called"],void 0,n.D.metrics,p),(0,a.p)("err",[e,(0,s.z)(),!1,t],void 0,n.D.jserrors,p)},u.il?(0,d.b)((()=>A()),!0):A(),h}(e,y);return(0,h.Qy)(e,S,"api"),(0,h.Qy)(e,E,"exposed"),(0,h.EZ)("activatedFeatures",g.T),S}},3325:(e,t,r)=>{r.d(t,{D:()=>n,p:()=>i});const n={ajax:"ajax",jserrors:"jserrors",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",spa:"spa"},i={[n.pageViewEvent]:1,[n.pageViewTiming]:2,[n.metrics]:3,[n.jserrors]:4,[n.ajax]:5,[n.sessionTrace]:6,[n.pageAction]:7,[n.spa]:8,[n.sessionReplay]:9}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,i),a.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>({63:"nr-full",110:"nr-full-compressor",379:"nr-full-recorder"}[e]+"-1.244.0.min.js"),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.244.0.PROD:",i.l=(r,n,a,o)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var f=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={29:0,789:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=a);var o=i.p+i.u(t),s=new Error;i.l(o,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[o,s,c]=r,d=0;if(o.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);d<o.length;d++)a=o[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self["webpackChunk:NRBA-1.244.0.PROD"]=self["webpackChunk:NRBA-1.244.0.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{var e=i(50);class t{addPageAction(t,r){(0,e.Z)("Call to agent api addPageAction failed. The page action feature is not currently initialized.")}setPageViewName(t,r){(0,e.Z)("Call to agent api setPageViewName failed. The page view feature is not currently initialized.")}setCustomAttribute(t,r,n){(0,e.Z)("Call to agent api setCustomAttribute failed. The js errors feature is not currently initialized.")}noticeError(t,r){(0,e.Z)("Call to agent api noticeError failed. The js errors feature is not currently initialized.")}setUserId(t){(0,e.Z)("Call to agent api setUserId failed. The js errors feature is not currently initialized.")}setApplicationVersion(t){(0,e.Z)("Call to agent api setApplicationVersion failed. The agent is not currently initialized.")}setErrorHandler(t){(0,e.Z)("Call to agent api setErrorHandler failed. The js errors feature is not currently initialized.")}finished(t){(0,e.Z)("Call to agent api finished failed. The page action feature is not currently initialized.")}addRelease(t,r){(0,e.Z)("Call to agent api addRelease failed. The js errors feature is not currently initialized.")}start(t){(0,e.Z)("Call to agent api addRelease failed. The agent is not currently initialized.")}}var r=i(3325),n=i(234);const a=Object.values(r.D);function o(e){const t={};return a.forEach((r=>{t[r]=function(e,t){return!1!==(0,n.Mt)(t,"".concat(e,".enabled"))}(r,e)})),t}var s=i(7530);var c=i(8e3),d=i(5938),u=i(3960),l=i(385);class f extends d.W{constructor(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];super(e,t,r),this.auto=i,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===(0,n.Mt)(this.agentIdentifier,"".concat(this.featureName,".autoStart"))&&(this.auto=!1),this.auto&&(0,c.R)(e,r)}importAggregator(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.featAggregate)return;if(!this.auto)return void this.ee.on("".concat(this.featureName,"-opt-in"),(()=>{(0,c.R)(this.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator()}));const r=l.il&&!0===(0,n.Mt)(this.agentIdentifier,"privacy.cookies_enabled");let a;this.onAggregateImported=new Promise((e=>{a=e}));const o=async()=>{let n;try{if(r){const{setupAgentSession:e}=await i.e(63).then(i.bind(i,3228));n=e(this.agentIdentifier)}}catch(t){(0,e.Z)("A problem occurred when starting up session manager. This page will not start or extend any session.",t)}try{if(!this.shouldImportAgg(this.featureName,n))return(0,c.L)(this.agentIdentifier,this.featureName),void a(!1);const{lazyFeatureLoader:e}=await i.e(63).then(i.bind(i,8582)),{Aggregate:r}=await e(this.featureName,"aggregate");this.featAggregate=new r(this.agentIdentifier,this.aggregator,t),a(!0)}catch(t){(0,e.Z)("Downloading and initializing ".concat(this.featureName," failed..."),t),this.abortHandler?.(),(0,c.L)(this.agentIdentifier,this.featureName),a(!1)}};l.il?(0,u.b)((()=>o()),!0):o()}shouldImportAgg(e,t){return e!==r.D.sessionReplay||!!n.Yu.MO&&(!1!==(0,n.Mt)(this.agentIdentifier,"session_trace.enabled")&&(!!t?.isNew||!!t?.state.sessionReplay))}}var h=i(7633);class p extends f{static featureName=h.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,h.t,r),this.importAggregator()}}var g=i(1117),m=i(1284);class v extends g.w{constructor(e){super(e),this.aggregatedData={}}store(e,t,r,n,i){var a=this.getBucket(e,t,r,i);return a.metrics=function(e,t){t||(t={count:0});return t.count+=1,(0,m.D)(e,(function(e,r){t[e]=b(r,t[e])})),t}(n,a.metrics),a}merge(e,t,r,n,i){var a=this.getBucket(e,t,n,i);if(a.metrics){var o=a.metrics;o.count+=r.count,(0,m.D)(r,(function(e,t){if("count"!==e){var n=o[e],i=r[e];i&&!i.c?o[e]=b(i.t,n):o[e]=function(e,t){if(!t)return e;t.c||(t=y(t.t));return t.min=Math.min(e.min,t.min),t.max=Math.max(e.max,t.max),t.t+=e.t,t.sos+=e.sos,t.c+=e.c,t}(i,o[e])}}))}else a.metrics=r}storeMetric(e,t,r,n){var i=this.getBucket(e,t,r);return i.stats=b(n,i.stats),i}getBucket(e,t,r,n){this.aggregatedData[e]||(this.aggregatedData[e]={});var i=this.aggregatedData[e][t];return i||(i=this.aggregatedData[e][t]={params:r||{}},n&&(i.custom=n)),i}get(e,t){return t?this.aggregatedData[e]&&this.aggregatedData[e][t]:this.aggregatedData[e]}take(e){for(var t={},r="",n=!1,i=0;i<e.length;i++)t[r=e[i]]=x(this.aggregatedData[r]),t[r].length&&(n=!0),delete this.aggregatedData[r];return n?t:null}}function b(e,t){return null==e?function(e){e?e.c++:e={c:1};return e}(t):t?(t.c||(t=y(t.t)),t.c+=1,t.t+=e,t.sos+=e*e,e>t.max&&(t.max=e),e<t.min&&(t.min=e),t):{t:e}}function y(e){return{t:e,min:e,max:e,sos:e*e,c:1}}function x(e){return"object"!=typeof e?[]:(0,m.D)(e,w)}function w(e,t){return t}var A=i(8632),_=i(4402),E=i(4351);var T=i(5546),D=i(7956),j=i(3239),S=i(7894),C=i(9251);class P extends f{static featureName=C.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,C.t,r),l.il&&((0,D.N)((()=>(0,T.p)("docHidden",[(0,S.z)()],void 0,C.t,this.ee)),!0),(0,j.bP)("pagehide",(()=>(0,T.p)("winPagehide",[(0,S.z)()],void 0,C.t,this.ee))),this.importAggregator())}}var R=i(3081);class O extends f{static featureName=R.t9;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,R.t9,r),this.importAggregator()}}var k=i(6660);class N{constructor(e,t,r,n){this.name="UncaughtError",this.message=e,this.sourceURL=t,this.line=r,this.column=n}}class I extends f{static featureName=k.t;#e=new Set;constructor(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,k.t,n);try{this.removeOnAbort=new AbortController}catch(e){}this.ee.on("fn-err",((e,t,n)=>{this.abortHandler&&!this.#e.has(n)&&(this.#e.add(n),(0,T.p)("err",[this.#t(n),(0,S.z)()],void 0,r.D.jserrors,this.ee))})),this.ee.on("internal-error",(e=>{this.abortHandler&&(0,T.p)("ierr",[this.#t(e),(0,S.z)(),!0],void 0,r.D.jserrors,this.ee)})),l._A.addEventListener("unhandledrejection",(e=>{this.abortHandler&&(0,T.p)("err",[this.#r(e),(0,S.z)(),!1,{unhandledPromiseRejection:1}],void 0,r.D.jserrors,this.ee)}),(0,j.m$)(!1,this.removeOnAbort?.signal)),l._A.addEventListener("error",(e=>{this.abortHandler&&(this.#e.has(e.error)?this.#e.delete(e.error):(0,T.p)("err",[this.#n(e),(0,S.z)()],void 0,r.D.jserrors,this.ee))}),(0,j.m$)(!1,this.removeOnAbort?.signal)),this.abortHandler=this.#i,this.importAggregator()}#i(){this.removeOnAbort?.abort(),this.#e.clear(),this.abortHandler=void 0}#t(e){return e instanceof Error?e:void 0!==e?.message?new N(e.message,e.filename||e.sourceURL,e.lineno||e.line,e.colno||e.col):new N("string"==typeof e?e:(0,E.P)(e))}#r(e){let t="Unhandled Promise Rejection: ";if(e?.reason instanceof Error)try{return e.reason.message=t+e.reason.message,e.reason}catch(t){return e.reason}if(void 0===e.reason)return new N(t);const r=this.#t(e.reason);return r.message=t+r.message,r}#n(e){return e.error instanceof Error?e.error:new N(e.message,e.filename,e.lineno,e.colno)}}var z=i(2210);let H=1;const L="nr@id";function M(e){const t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===l._A?0:(0,z.X)(e,L,(function(){return H++}))}function Z(e){if("string"==typeof e&&e.length)return e.length;if("object"==typeof e){if("undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer&&e.byteLength)return e.byteLength;if("undefined"!=typeof Blob&&e instanceof Blob&&e.size)return e.size;if(!("undefined"!=typeof FormData&&e instanceof FormData))try{return(0,E.P)(e).length}catch(e){return}}}var F=i(1214),B=i(7243);class U{constructor(e){this.agentIdentifier=e}generateTracePayload(e){if(!this.shouldGenerateTrace(e))return null;var t=(0,n.DL)(this.agentIdentifier);if(!t)return null;var r=(t.accountID||"").toString()||null,i=(t.agentID||"").toString()||null,a=(t.trustKey||"").toString()||null;if(!r||!i)return null;var o=(0,_.M)(),s=(0,_.Ht)(),c=Date.now(),d={spanId:o,traceId:s,timestamp:c};return(e.sameOrigin||this.isAllowedOrigin(e)&&this.useTraceContextHeadersForCors())&&(d.traceContextParentHeader=this.generateTraceContextParentHeader(o,s),d.traceContextStateHeader=this.generateTraceContextStateHeader(o,c,r,i,a)),(e.sameOrigin&&!this.excludeNewrelicHeader()||!e.sameOrigin&&this.isAllowedOrigin(e)&&this.useNewrelicHeaderForCors())&&(d.newrelicHeader=this.generateTraceHeader(o,s,c,r,i,a)),d}generateTraceContextParentHeader(e,t){return"00-"+t+"-"+e+"-01"}generateTraceContextStateHeader(e,t,r,n,i){return i+"@nr=0-1-"+r+"-"+n+"-"+e+"----"+t}generateTraceHeader(e,t,r,n,i,a){if(!("function"==typeof l._A?.btoa))return null;var o={v:[0,1],d:{ty:"Browser",ac:n,ap:i,id:e,tr:t,ti:r}};return a&&n!==a&&(o.d.tk=a),btoa((0,E.P)(o))}shouldGenerateTrace(e){return this.isDtEnabled()&&this.isAllowedOrigin(e)}isAllowedOrigin(e){var t=!1,r={};if((0,n.Mt)(this.agentIdentifier,"distributed_tracing")&&(r=(0,n.P_)(this.agentIdentifier).distributed_tracing),e.sameOrigin)t=!0;else if(r.allowed_origins instanceof Array)for(var i=0;i<r.allowed_origins.length;i++){var a=(0,B.e)(r.allowed_origins[i]);if(e.hostname===a.hostname&&e.protocol===a.protocol&&e.port===a.port){t=!0;break}}return t}isDtEnabled(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.enabled}excludeNewrelicHeader(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.exclude_newrelic_header}useNewrelicHeaderForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!1!==e.cors_use_newrelic_header}useTraceContextHeadersForCors(){var e=(0,n.Mt)(this.agentIdentifier,"distributed_tracing");return!!e&&!!e.cors_use_tracecontext_headers}}var q=i(7825),V=["load","error","abort","timeout"],G=V.length,W=n.Yu.REQ,X=n.Yu.XHR;class Q extends f{static featureName=q.t;constructor(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(super(e,t,q.t,i),(0,n.OP)(e).xhrWrappable){this.dt=new U(e),this.handler=(e,t,r,n)=>(0,T.p)(e,t,r,n,this.ee);try{const e={xmlhttprequest:"xhr",fetch:"fetch",beacon:"beacon"};l._A?.performance?.getEntriesByType("resource").forEach((t=>{if(t.initiatorType in e&&0!==t.responseStatus){const n={status:t.responseStatus},i={rxSize:t.transferSize,duration:Math.floor(t.duration),cbTime:0};K(n,t.name),this.handler("xhr",[n,i,t.startTime,t.responseEnd,e[t.initiatorType]],void 0,r.D.ajax)}}))}catch(e){}(0,F.u5)(this.ee),(0,F.Kf)(this.ee),function(e,t,i,a){function o(e){var t=this;t.totalCbs=0,t.called=0,t.cbTime=0,t.end=A,t.ended=!1,t.xhrGuids={},t.lastSize=null,t.loadCaptureCalled=!1,t.params=this.params||{},t.metrics=this.metrics||{},e.addEventListener("load",(function(r){_(t,e)}),(0,j.m$)(!1)),l.IF||e.addEventListener("progress",(function(e){t.lastSize=e.loaded}),(0,j.m$)(!1))}function s(e){this.params={method:e[0]},K(this,e[1]),this.metrics={}}function c(t,r){var i=(0,n.DL)(e);i.xpid&&this.sameOrigin&&r.setRequestHeader("X-NewRelic-ID",i.xpid);var o=a.generateTracePayload(this.parsedOrigin);if(o){var s=!1;o.newrelicHeader&&(r.setRequestHeader("newrelic",o.newrelicHeader),s=!0),o.traceContextParentHeader&&(r.setRequestHeader("traceparent",o.traceContextParentHeader),o.traceContextStateHeader&&r.setRequestHeader("tracestate",o.traceContextStateHeader),s=!0),s&&(this.dt=o)}}function d(e,r){var n=this.metrics,i=e[0],a=this;if(n&&i){var o=Z(i);o&&(n.txSize=o)}this.startTime=(0,S.z)(),this.listener=function(e){try{"abort"!==e.type||a.loadCaptureCalled||(a.params.aborted=!0),("load"!==e.type||a.called===a.totalCbs&&(a.onloadCalled||"function"!=typeof r.onload)&&"function"==typeof a.end)&&a.end(r)}catch(e){try{t.emit("internal-error",[e])}catch(e){}}};for(var s=0;s<G;s++)r.addEventListener(V[s],this.listener,(0,j.m$)(!1))}function u(e,t,r){this.cbTime+=e,t?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof r.onload||"function"!=typeof this.end||this.end(r)}function f(e,t){var r=""+M(e)+!!t;this.xhrGuids&&!this.xhrGuids[r]&&(this.xhrGuids[r]=!0,this.totalCbs+=1)}function h(e,t){var r=""+M(e)+!!t;this.xhrGuids&&this.xhrGuids[r]&&(delete this.xhrGuids[r],this.totalCbs-=1)}function p(){this.endTime=(0,S.z)()}function g(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-added",[e[1],e[2]],r)}function m(e,r){r instanceof X&&"load"===e[0]&&t.emit("xhr-load-removed",[e[1],e[2]],r)}function v(e,t,r){t instanceof X&&("onload"===r&&(this.onload=!0),("load"===(e[0]&&e[0].type)||this.onload)&&(this.xhrCbStart=(0,S.z)()))}function b(e,r){this.xhrCbStart&&t.emit("xhr-cb-time",[(0,S.z)()-this.xhrCbStart,this.onload,r],r)}function y(e){var t,r=e[1]||{};if("string"==typeof e[0]?0===(t=e[0]).length&&l.il&&(t=""+l._A.location.href):e[0]&&e[0].url?t=e[0].url:l._A?.URL&&e[0]&&e[0]instanceof URL?t=e[0].href:"function"==typeof e[0].toString&&(t=e[0].toString()),"string"==typeof t&&0!==t.length){t&&(this.parsedOrigin=(0,B.e)(t),this.sameOrigin=this.parsedOrigin.sameOrigin);var n=a.generateTracePayload(this.parsedOrigin);if(n&&(n.newrelicHeader||n.traceContextParentHeader))if(e[0]&&e[0].headers)s(e[0].headers,n)&&(this.dt=n);else{var i={};for(var o in r)i[o]=r[o];i.headers=new Headers(r.headers||{}),s(i.headers,n)&&(this.dt=n),e.length>1?e[1]=i:e.push(i)}}function s(e,t){var r=!1;return t.newrelicHeader&&(e.set("newrelic",t.newrelicHeader),r=!0),t.traceContextParentHeader&&(e.set("traceparent",t.traceContextParentHeader),t.traceContextStateHeader&&e.set("tracestate",t.traceContextStateHeader),r=!0),r}}function x(e,t){this.params={},this.metrics={},this.startTime=(0,S.z)(),this.dt=t,e.length>=1&&(this.target=e[0]),e.length>=2&&(this.opts=e[1]);var r,n=this.opts||{},i=this.target;"string"==typeof i?r=i:"object"==typeof i&&i instanceof W?r=i.url:l._A?.URL&&"object"==typeof i&&i instanceof URL&&(r=i.href),K(this,r);var a=(""+(i&&i instanceof W&&i.method||n.method||"GET")).toUpperCase();this.params.method=a,this.txSize=Z(n.body)||0}function w(e,t){var n;this.endTime=(0,S.z)(),this.params||(this.params={}),this.params.status=t?t.status:0,"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var a={txSize:this.txSize,rxSize:n,duration:(0,S.z)()-this.startTime};i("xhr",[this.params,a,this.startTime,this.endTime,"fetch"],this,r.D.ajax)}function A(e){var t=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var a=0;a<G;a++)e.removeEventListener(V[a],this.listener,!1);t.aborted||(n.duration=(0,S.z)()-this.startTime,this.loadCaptureCalled||4!==e.readyState?null==t.status&&(t.status=0):_(this,e),n.cbTime=this.cbTime,i("xhr",[t,n,this.startTime,this.endTime,"xhr"],this,r.D.ajax))}}function _(e,t){e.params.status=t.status;var r=function(e,t){var r=e.responseType;return"json"===r&&null!==t?t:"arraybuffer"===r||"blob"===r||"json"===r?Z(e.response):"text"===r||""===r||void 0===r?Z(e.responseText):void 0}(t,e.lastSize);if(r&&(e.metrics.rxSize=r),e.sameOrigin){var n=t.getResponseHeader("X-NewRelic-App-Data");n&&(e.params.cat=n.split(", ").pop())}e.loadCaptureCalled=!0}t.on("new-xhr",o),t.on("open-xhr-start",s),t.on("open-xhr-end",c),t.on("send-xhr-start",d),t.on("xhr-cb-time",u),t.on("xhr-load-added",f),t.on("xhr-load-removed",h),t.on("xhr-resolved",p),t.on("addEventListener-end",g),t.on("removeEventListener-end",m),t.on("fn-end",b),t.on("fetch-before-start",y),t.on("fetch-start",x),t.on("fn-start",v),t.on("fetch-done",w)}(e,this.ee,this.handler,this.dt),this.importAggregator()}}}function K(e,t){var r=(0,B.e)(t),n=e.params||e;n.hostname=r.hostname,n.port=r.port,n.protocol=r.protocol,n.host=r.hostname+":"+r.port,n.pathname=r.pathname,e.parsedOrigin=r,e.sameOrigin=r.sameOrigin}var Y=i(3614);const{BST_RESOURCE:J,RESOURCE:ee,START:te,END:re,FEATURE_NAME:ne,FN_END:ie,FN_START:ae,PUSH_STATE:oe}=Y;var se=i(7144);class ce extends f{static featureName=se.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,se.t,r),this.importAggregator()}}var de=i(4649);class ue extends f{static featureName=de.t;constructor(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];super(e,t,de.t,r),this.importAggregator()}}new class extends t{constructor(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,_.ky)(16);super(),l._A?(this.agentIdentifier=r,this.sharedAggregator=new v({agentIdentifier:this.agentIdentifier}),this.features={},this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(p),Object.assign(this,(0,s.j)(this.agentIdentifier,t,t.loaderType||"agent")),this.run()):(0,e.Z)("Failed to initial the agent. Could not determine the runtime environment.")}get config(){return{info:(0,n.C5)(this.agentIdentifier),init:(0,n.P_)(this.agentIdentifier),loader_config:(0,n.DL)(this.agentIdentifier),runtime:(0,n.OP)(this.agentIdentifier)}}run(){const t="features";try{const n=o(this.agentIdentifier),i=[...this.desiredFeatures];i.sort(((e,t)=>r.p[e.featureName]-r.p[t.featureName])),i.forEach((t=>{if(n[t.featureName]||t.featureName===r.D.pageViewEvent){const i=function(e){switch(e){case r.D.ajax:return[r.D.jserrors];case r.D.sessionTrace:return[r.D.ajax,r.D.pageViewEvent];case r.D.sessionReplay:return[r.D.sessionTrace];case r.D.pageViewTiming:return[r.D.pageViewEvent];default:return[]}}(t.featureName);i.every((e=>n[e]))||(0,e.Z)("".concat(t.featureName," is enabled but one or more dependent features has been disabled (").concat((0,E.P)(i),"). This may cause unintended consequences or missing data...")),this.features[t.featureName]=new t(this.agentIdentifier,this.sharedAggregator)}})),(0,A.Qy)(this.agentIdentifier,this.features,t)}catch(r){(0,e.Z)("Failed to initialize all enabled instrument classes (agent aborted) -",r);for(const e in this.features)this.features[e].abortHandler?.();const n=(0,A.fP)();return delete n.initializedAgents[this.agentIdentifier]?.api,delete n.initializedAgents[this.agentIdentifier]?.[t],delete this.sharedAggregator,n.ee?.abort(),delete n.ee?.get(this.agentIdentifier),!1}}addToTrace(t){(0,e.Z)("Call to agent api addToTrace failed. The session trace feature is not currently initialized.")}setCurrentRouteName(t){(0,e.Z)("Call to agent api setCurrentRouteName failed. The spa feature is not currently initialized.")}interaction(){(0,e.Z)("Call to agent api interaction failed. The spa feature is not currently initialized.")}}({features:[p,P,class extends f{static featureName=ne;constructor(e,t){if(super(e,t,ne,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]),!l.il)return;const n=this.ee;let i;(0,F.QU)(n),this.eventsEE=(0,F.em)(n),this.eventsEE.on(ae,(function(e,t){this.bstStart=(0,S.z)()})),this.eventsEE.on(ie,(function(e,t){(0,T.p)("bst",[e[0],t,this.bstStart,(0,S.z)()],void 0,r.D.sessionTrace,n)})),n.on(oe+te,(function(e){this.time=(0,S.z)(),this.startPath=location.pathname+location.hash})),n.on(oe+re,(function(e){(0,T.p)("bstHist",[location.pathname+location.hash,this.startPath,this.time],void 0,r.D.sessionTrace,n)}));try{i=new PerformanceObserver((e=>{const t=e.getEntries();(0,T.p)(J,[t],void 0,r.D.sessionTrace,n)})),i.observe({type:ee,buffered:!0})}catch(e){}this.importAggregator({resourceObserver:i})}},ce,Q,O,ue,I],loaderType:"pro"})})()})();
               </script>
               <meta charset="utf-8">
               <meta http-equiv="X-UA-Compatible" content="IE=edge">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <meta name="HandheldFriendly" content="True">
               <meta http-equiv="cleartype" content="on">
               <meta name="browser-support" content="samesite=true">
               <meta name="csrf-token" content="svcYGe6V-GXC5hXCvXWBSn69BgieWvJjVly0">
               <link rel="icon" href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.35.6/mercadopago/favicon.svg" data-head-react="true">
               <link rel="preload" href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-light.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-head-react="true">
               <link rel="preload" href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-head-react="true">
               <link rel="preload" href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-head-react="true">
               <style data-head-react="true">@font-face{font-family:"Proxima Nova";font-weight:300;font-style:normal;src:url(https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-light.woff2) format("woff2"),url(https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-light.woff) format("woff"),url(https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-light.ttf) format("truetype")}@font-face{font-family:"Proxima Nova";font-weight:400;font-style:normal;src:url(https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-regular.woff2) format("woff2"),url(https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-regular.woff) format("woff"),url(https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-regular.ttf) format("truetype")}@font-face{font-family:"Proxima Nova";font-weight:600;font-style:normal;src:url(https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.woff2) format("woff2"),url(https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.woff) format("woff"),url(https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.ttf) format("truetype")}</style>
               <title>A sua atividade no Mercado Pago</title>
               <link href="https://http2.mlstatic.com/frontend-assets/nav-widget-ml-modeless-box/v3.12.3/modeless-box.css" rel="stylesheet" type="text/css" onerror="(window['_pfl'] = window['_pfl'] || []).push(['css', this.href])">
               <link href="https://http2.mlstatic.com/frontend-assets/activities-frontend/appDesktop.9643adb7.css" rel="stylesheet" type="text/css" onerror="(window['_pfl'] = window['_pfl'] || []).push(['css', this.href])">
               <style>
                  *:focus {
                  box-shadow: 0 0 0 2px #fff, 0 0 0 3px #007EB5, 0 0 0 5px rgba(71, 154, 209, 0.3);
                  outline: none;
                  }
                  *:focus-visible {
                  box-shadow: 0 0 0 2px #fff, 0 0 0 3px #007EB5, 0 0 0 5px rgba(71, 154, 209, 0.3);
                  outline: none;
                  }
                  *:focus:not(:focus-visible) {
                  box-shadow: none;
                  outline: none;
                  }
               </style>
               <div class="l-container">
               <section class="merch-realestate-alert merch-realestate-alert--desktop"></section>
               <section id="activities-controls" class="activities-controls u-clearfix">
                  <div class="activities-controls__col activities-controls__col--margin-right">
                     <div class="search">
                        <div class="search__input-wrapper">
                           <div class="search__input-wrapper-controls">
                              <span class="search__input-addon--left">
                                 <svg width="16" height="16">
                                    <path d="M16 15.017l-4.88-4.878a6.219 6.219 0 0 0 1.368-3.895C12.488 2.802 9.688 0 6.244 0A6.251 6.251 0 0 0 0 6.245a6.25 6.25 0 0 0 6.244 6.245 6.216 6.216 0 0 0 3.895-1.368L15.017 16l.982-.983zM1.39 6.245c0-2.677 2.177-4.856 4.854-4.856S11.1 3.567 11.1 6.244a4.863 4.863 0 0 1-4.856 4.857 4.862 4.862 0 0 1-4.855-4.857z" fill="#999"></path>
                                 </svg>
                              </span>
                              <input role="combobox" aria-autocomplete="list" aria-expanded="false" autocomplete="off" aria-label="Dropdown Selecione uma opção" id="search__input" type="text" class="search__input" placeholder="Buscar" inputvalue="" value="">
                           </div>
                           <div>
                              <div class="andes-tooltip__trigger">
                                 <span class="search__input-tooltip-icon" aria-describedby="informative-tippy-4">
                                    <svg width="16" height="16" viewBox="0 0 16 16">
                                       <g fill="none" fill-opacity=".45" fill-rule="evenodd">
                                          <g fill="#000" fill-rule="nonzero">
                                             <g>
                                                <g>
                                                   <path d="M8 15.8c4.308 0 7.8-3.492 7.8-7.8S12.308.2 8 .2.2 3.692.2 8s3.492 7.8 7.8 7.8zm0-1.2c-3.645 0-6.6-2.955-6.6-6.6 0-3.645 2.955-6.6 6.6-6.6 3.645 0 6.6 2.955 6.6 6.6 0 3.645-2.955 6.6-6.6 6.6zm2.395-2.455v-1H8.864V6.427H6.295v1h1.11v3.718H5.937v1h4.458zM8.02 5.44c.475 0 .86-.385.86-.86s-.385-.86-.86-.86c-.476 0-.86.385-.86.86s.384.86.86.86z" transform="translate(-415 -468) translate(135 456) translate(280 12)"></path>
                                                </g>
                                             </g>
                                          </g>
                                       </g>
                                    </svg>
                                 </span>
                              </div>
                              <span class="andes-visually-hidden" id="informative-tippy-4" aria-hidden="true">
                                 Ache rápido as suas operações 
                                 <p><strong>Encontre tudo com apenas um dado</strong>, como: o nome do produto, número da operação, e-mail, banco e muito mais.</p>
                                 <p>Também poderá usar <strong>palavras-chave</strong>, como <em>Reclamações, Operações contestadas </em>entre outras.</p>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="activities-controls__col activities-controls__col--align-right">
                     <div class="refresh-btn">
                        <button type="button" class="refresh-btn__button" aria-label="refrescar">
                           <svg width="24" height="24" viewBox="0 0 24 24">
                              <g fill="none" fill-opacity=".8" fill-rule="evenodd">
                                 <g fill="#000" fill-rule="nonzero">
                                    <g>
                                       <g>
                                          <path d="M21.75 2.25v8.25h-8.246V9h5.613C17.903 5.744 15.319 3.75 12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c4.044 0 7.408-2.91 8.114-6.749h1.521c-.722 4.672-4.76 8.249-9.635 8.249-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25c3.745 0 6.725 2.132 8.25 5.56V2.25h1.5z" transform="translate(-1083 -464) translate(933 464) translate(150)"></path>
                                       </g>
                                    </g>
                                 </g>
                              </g>
                           </svg>
                        </button>
                     </div>
                  </div>
               </section>
               <section class="filters-desktop filters-desktop--1">
                  <div class="filters-list">
                     <div class="filters-desktop__col">
                        <div class="activity-filter__period">
                           <div class="andes-dropdown andes-dropdown--standalone">
                              <button type="button" class="andes-dropdown__trigger">
                                 <span class="">Período</span>
                                 <div class="andes-badge andes-badge--pill andes-badge--accent dropdown__badge--hidden andes-badge--small andes-badge--accent--quiet andes-badge--rounded-top-left andes-badge--rounded-top-right andes-badge--rounded-bottom-left andes-badge--rounded-bottom-right" id="react-aria-115">
                                    <p class="andes-badge__content">0</p>
                                 </div>
                                 <svg class="andes-dropdown__standalone-arrow" width="12" height="12" viewBox="0 0 12 12">
                                    <path fill-opacity=".45" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path>
                                 </svg>
                              </button>
                              <div class="andes-dropdown__popover">
                                 <div class="andes-dropdown__popover-list andes-dropdown__popover-list--period">
                                    <div class="activity-filter__period--dropdown">
                                       <ul class="andes-list side-right andes-list--default" id="react-aria-116">
                                          <div class="andes-radio-button-list__list-item" role="presentation" id="react-aria-116-0">
                                             <li class="andes-list__item andes-radio-list__item andes-list__item--size-medium" id="today">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Hoje</span></div>
                                                </div>
                                             </li>
                                             <div class="andes-radio andes-radio--inverted">
                                                <div class="andes-radio-element">
                                                   <input type="radio" class="andes-radio__input" id="radio-today" name="radio-today" value="today">
                                                   <div class="andes-radio__background">
                                                      <div class="andes-radio__outer-circle"></div>
                                                      <div class="andes-radio__inner-circle"></div>
                                                   </div>
                                                </div>
                                                <label class="andes-radio__label" for="radio-today"><span></span></label>
                                             </div>
                                          </div>
                                          <div class="andes-radio-button-list__list-item" role="presentation" id="react-aria-116-1">
                                             <li class="andes-list__item andes-radio-list__item andes-list__item--size-medium" id="yesterday">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Ontem</span></div>
                                                </div>
                                             </li>
                                             <div class="andes-radio andes-radio--inverted">
                                                <div class="andes-radio-element">
                                                   <input type="radio" class="andes-radio__input" id="radio-yesterday" name="radio-yesterday" value="yesterday">
                                                   <div class="andes-radio__background">
                                                      <div class="andes-radio__outer-circle"></div>
                                                      <div class="andes-radio__inner-circle"></div>
                                                   </div>
                                                </div>
                                                <label class="andes-radio__label" for="radio-yesterday"><span></span></label>
                                             </div>
                                          </div>
                                          <div class="andes-radio-button-list__list-item" role="presentation" id="react-aria-116-2">
                                             <li class="andes-list__item andes-radio-list__item andes-list__item--size-medium" id="last_week">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Últimos 7 dias</span></div>
                                                </div>
                                             </li>
                                             <div class="andes-radio andes-radio--inverted">
                                                <div class="andes-radio-element">
                                                   <input type="radio" class="andes-radio__input" id="radio-last_week" name="radio-last_week" value="last_week">
                                                   <div class="andes-radio__background">
                                                      <div class="andes-radio__outer-circle"></div>
                                                      <div class="andes-radio__inner-circle"></div>
                                                   </div>
                                                </div>
                                                <label class="andes-radio__label" for="radio-last_week"><span></span></label>
                                             </div>
                                          </div>
                                          <div class="andes-radio-button-list__list-item" role="presentation" id="react-aria-116-3">
                                             <li class="andes-list__item andes-radio-list__item andes-list__item--size-medium" id="last_two_weeks">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Últimos 15 dias</span></div>
                                                </div>
                                             </li>
                                             <div class="andes-radio andes-radio--inverted">
                                                <div class="andes-radio-element">
                                                   <input type="radio" class="andes-radio__input" id="radio-last_two_weeks" name="radio-last_two_weeks" value="last_two_weeks">
                                                   <div class="andes-radio__background">
                                                      <div class="andes-radio__outer-circle"></div>
                                                      <div class="andes-radio__inner-circle"></div>
                                                   </div>
                                                </div>
                                                <label class="andes-radio__label" for="radio-last_two_weeks"><span></span></label>
                                             </div>
                                          </div>
                                          <div class="andes-radio-button-list__list-item" role="presentation" id="react-aria-116-4">
                                             <li class="andes-list__item andes-radio-list__item andes-list__item--size-medium" id="month">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Último mês</span></div>
                                                </div>
                                             </li>
                                             <div class="andes-radio andes-radio--inverted">
                                                <div class="andes-radio-element">
                                                   <input type="radio" class="andes-radio__input" id="radio-month" name="radio-month" value="month">
                                                   <div class="andes-radio__background">
                                                      <div class="andes-radio__outer-circle"></div>
                                                      <div class="andes-radio__inner-circle"></div>
                                                   </div>
                                                </div>
                                                <label class="andes-radio__label" for="radio-month"><span></span></label>
                                             </div>
                                          </div>
                                          <div class="andes-radio-button-list__list-item" role="presentation" id="react-aria-116-5">
                                             <li class="andes-list__item andes-radio-list__item andes-list__item--selected andes-list__item--size-medium" id="">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Último ano</span></div>
                                                </div>
                                             </li>
                                             <div class="andes-radio andes-radio--inverted">
                                                <div class="andes-radio-element">
                                                   <input type="radio" class="andes-radio__input" id="radio-" name="radio-" value="" checked="">
                                                   <div class="andes-radio__background">
                                                      <div class="andes-radio__outer-circle"></div>
                                                      <div class="andes-radio__inner-circle"></div>
                                                   </div>
                                                </div>
                                                <label class="andes-radio__label" for="radio-"><span></span></label>
                                             </div>
                                          </div>
                                       </ul>
                                       <li class="andes-list__item activity-filter__period--picker-option andes-list__item--size-small">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Outro período</span></div>
                                             </div>
                                             <div class="period__filter--other">
                                                <svg width="13" height="8" viewBox="0 0 9 6">
                                                   <path d="M9 1L4.995 5 1 1" stroke="#999" fill="none" fill-rule="evenodd"></path>
                                                </svg>
                                             </div>
                                          </button>
                                       </li>
                                    </div>
                                 </div>
                                 <div class="filters-buttons"><button disabled="" type="button" class="andes-button andes-button--small andes-button--transparent andes-button--disabled" id="react-aria-117"><span class="andes-button__content">Excluir</span></button><button disabled="" type="button" class="andes-button andes-button--small andes-button--loud andes-button--disabled" id="react-aria-118"><span class="andes-button__content">Aplicar</span></button></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="filters-desktop__col">
                        <div class="andes-dropdown andes-dropdown--standalone andes-dropdown--multiple">
                           <button type="button" class="andes-dropdown__trigger">
                              <span class="dropdown-button--selected">Operações</span>
                              <div class="andes-badge andes-badge--pill andes-badge--accent andes-badge--small andes-badge--accent--quiet andes-badge--rounded-top-left andes-badge--rounded-top-right andes-badge--rounded-bottom-left andes-badge--rounded-bottom-right" id="react-aria-119">
                                 <p class="andes-badge__content">1</p>
                              </div>
                              <svg class="andes-dropdown__standalone-arrow" width="12" height="12" viewBox="0 0 12 12">
                                 <path fill-opacity=".45" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path>
                              </svg>
                           </button>
                           <div class="andes-dropdown__popover andes-dropdown__popover--scrollable">
                              <div class="andes-dropdown__popover-list andes-dropdown__popover-list--type andes-dropdown__popover-list--scroll">
                                 <ul class="andes-list andes-list--default andes-list--selectable" id="react-aria-120">
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-120-0">
                                       <li class="andes-list__item andes-list__item--first andes-checkbox-list__item andes-list__item--size-medium" id="" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Todas as transações</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="" checked=""><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                       <hr class="checkbox--separator">
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="button" tabindex="0">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="pagamentos_id">
                                          <div class="andes-list__item-first-column">
                                             <div class="andes-list__item-text"><span class="andes-list__item-primary">Pagamentos</span></div>
                                          </div>
                                          <svg class="list__item-arrow-group list-group-pagamentos__standalone-arrow" width="16" height="16" viewBox="0 0 12 12">
                                             <path fill-opacity=".45" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path>
                                          </svg>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-group list-group-pagamentos collapsed">
                                       <div class="andes-checkbox-list__list-item andes-checkbox-list__list-group-pagamentos" role="presentation">
                                          <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="payment_all" name="DropdownItem">
                                             <button class="andes-list__item-action">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Todos os pagamentos</span></div>
                                                </div>
                                                <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="payment_all"><span class="andes-checkbox__background"></span></div>
                                             </button>
                                          </li>
                                       </div>
                                       <div class="andes-checkbox-list__list-item andes-checkbox-list__list-group-pagamentos" role="presentation">
                                          <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="payment_purchase" name="DropdownItem">
                                             <button class="andes-list__item-action">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Compras</span></div>
                                                </div>
                                                <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="payment_purchase"><span class="andes-checkbox__background"></span></div>
                                             </button>
                                          </li>
                                       </div>
                                       <div class="andes-checkbox-list__list-item andes-checkbox-list__list-group-pagamentos" role="presentation">
                                          <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="payment_recurring" name="DropdownItem">
                                             <button class="andes-list__item-action">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Assinaturas</span></div>
                                                </div>
                                                <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="payment_recurring"><span class="andes-checkbox__background"></span></div>
                                             </button>
                                          </li>
                                       </div>
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="button" tabindex="0">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="vendas_id">
                                          <div class="andes-list__item-first-column">
                                             <div class="andes-list__item-text"><span class="andes-list__item-primary">Vendas</span></div>
                                          </div>
                                          <svg class="list__item-arrow-group list-group-vendas__standalone-arrow" width="16" height="16" viewBox="0 0 12 12">
                                             <path fill-opacity=".45" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path>
                                          </svg>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-group list-group-vendas collapsed">
                                       <div class="andes-checkbox-list__list-item andes-checkbox-list__list-group-vendas" role="presentation">
                                          <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="collection_all" name="DropdownItem">
                                             <button class="andes-list__item-action">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Todos os pagamentos</span></div>
                                                </div>
                                                <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="collection_all"><span class="andes-checkbox__background"></span></div>
                                             </button>
                                          </li>
                                       </div>
                                       <div class="andes-checkbox-list__list-item andes-checkbox-list__list-group-vendas" role="presentation">
                                          <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="collection_sale" name="DropdownItem">
                                             <button class="andes-list__item-action">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Vendas</span></div>
                                                </div>
                                                <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="collection_sale"><span class="andes-checkbox__background"></span></div>
                                             </button>
                                          </li>
                                       </div>
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="button" tabindex="0">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="transferências_id">
                                          <div class="andes-list__item-first-column">
                                             <div class="andes-list__item-text"><span class="andes-list__item-primary">Transferências</span></div>
                                          </div>
                                          <svg class="list__item-arrow-group list-group-transferências__standalone-arrow" width="16" height="16" viewBox="0 0 12 12">
                                             <path fill-opacity=".45" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path>
                                          </svg>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-group list-group-transferências collapsed">
                                       <div class="andes-checkbox-list__list-item andes-checkbox-list__list-group-transferências" role="presentation">
                                          <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="transfer_all" name="DropdownItem">
                                             <button class="andes-list__item-action">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Todas as transferências</span></div>
                                                </div>
                                                <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="transfer_all"><span class="andes-checkbox__background"></span></div>
                                             </button>
                                          </li>
                                       </div>
                                       <div class="andes-checkbox-list__list-item andes-checkbox-list__list-group-transferências" role="presentation">
                                          <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="transfer_sent" name="DropdownItem">
                                             <button class="andes-list__item-action">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Transferências realizadas</span></div>
                                                </div>
                                                <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="transfer_sent"><span class="andes-checkbox__background"></span></div>
                                             </button>
                                          </li>
                                       </div>
                                       <div class="andes-checkbox-list__list-item andes-checkbox-list__list-group-transferências" role="presentation">
                                          <li class="andes-list__item andes-list__item--selected andes-checkbox-list__item andes-list__item--size-medium" id="transfer_received" name="DropdownItem">
                                             <button class="andes-list__item-action">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Transferências recebidas </span></div>
                                                </div>
                                                <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="transfer_received" checked=""><span class="andes-checkbox__background"></span></div>
                                             </button>
                                          </li>
                                       </div>
                                    </div>
                                 </ul>
                              </div>
                              <div class="filters-buttons"><button type="button" class="andes-button andes-button--small andes-button--transparent" id="react-aria-121"><span class="andes-button__content">Excluir</span></button><button disabled="" type="button" class="andes-button andes-button--small andes-button--loud andes-button--disabled" id="react-aria-122"><span class="andes-button__content">Aplicar</span></button></div>
                           </div>
                        </div>
                     </div>
                     <div class="filters-desktop__col">
                        <div class="andes-dropdown andes-dropdown--standalone andes-dropdown--multiple">
                           <button type="button" class="andes-dropdown__trigger">
                              <span class="">Status</span>
                              <div class="andes-badge andes-badge--pill andes-badge--accent dropdown__badge--hidden andes-badge--small andes-badge--accent--quiet andes-badge--rounded-top-left andes-badge--rounded-top-right andes-badge--rounded-bottom-left andes-badge--rounded-bottom-right" id="react-aria-123">
                                 <p class="andes-badge__content">1</p>
                              </div>
                              <svg class="andes-dropdown__standalone-arrow" width="12" height="12" viewBox="0 0 12 12">
                                 <path fill-opacity=".45" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path>
                              </svg>
                           </button>
                           <div class="andes-dropdown__popover">
                              <div class="andes-dropdown__popover-list andes-dropdown__popover-list--status">
                                 <ul class="andes-list andes-list--default andes-list--selectable" id="react-aria-124">
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-124-0">
                                       <li class="andes-list__item andes-list__item--first andes-list__item--selected andes-checkbox-list__item andes-list__item--size-medium" id="" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Todos os status</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="" checked=""><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                       <hr class="checkbox--separator">
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-124-1">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="approved" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Aprovados</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="approved"><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-124-2">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="rejected" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Recusados</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="rejected"><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-124-3">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="cancelled" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Cancelados</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="cancelled"><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-124-4">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="refunded" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Devolvidos</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="refunded"><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                    </div>
                                 </ul>
                              </div>
                              <div class="filters-buttons"><button disabled="" type="button" class="andes-button andes-button--small andes-button--transparent andes-button--disabled" id="react-aria-125"><span class="andes-button__content">Excluir</span></button><button disabled="" type="button" class="andes-button andes-button--small andes-button--loud andes-button--disabled" id="react-aria-126"><span class="andes-button__content">Aplicar</span></button></div>
                           </div>
                        </div>
                     </div>
                     <div class="filters-desktop__col">
                        <div class="andes-dropdown andes-dropdown--standalone andes-dropdown--multiple">
                           <button type="button" class="andes-dropdown__trigger">
                              <span class="">Meios de pagamento</span>
                              <div class="andes-badge andes-badge--pill andes-badge--accent dropdown__badge--hidden andes-badge--small andes-badge--accent--quiet andes-badge--rounded-top-left andes-badge--rounded-top-right andes-badge--rounded-bottom-left andes-badge--rounded-bottom-right" id="react-aria-127">
                                 <p class="andes-badge__content">1</p>
                              </div>
                              <svg class="andes-dropdown__standalone-arrow" width="12" height="12" viewBox="0 0 12 12">
                                 <path fill-opacity=".45" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path>
                              </svg>
                           </button>
                           <div class="andes-dropdown__popover">
                              <div class="andes-dropdown__popover-list andes-dropdown__popover-list--appliance">
                                 <ul class="andes-list andes-list--default andes-list--selectable" id="react-aria-128">
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-128-0">
                                       <li class="andes-list__item andes-list__item--first andes-list__item--selected andes-checkbox-list__item andes-list__item--size-medium" id="" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Todos os meios de pagamento</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="" checked=""><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                       <hr class="checkbox--separator">
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="button" tabindex="0">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="cartão mercado pago_id">
                                          <div class="andes-list__item-first-column">
                                             <div class="andes-list__item-text"><span class="andes-list__item-primary">Cartão Mercado Pago</span></div>
                                          </div>
                                          <svg class="list__item-arrow-group list-group-cartãomercadopago__standalone-arrow" width="16" height="16" viewBox="0 0 12 12">
                                             <path fill-opacity=".45" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path>
                                          </svg>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-group list-group-cartãomercadopago collapsed">
                                       <div class="andes-checkbox-list__list-item andes-checkbox-list__list-group-cartãomercadopago" role="presentation">
                                          <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="mixed_mp_credit" name="DropdownItem">
                                             <button class="andes-list__item-action">
                                                <div class="andes-list__item-first-column">
                                                   <div class="andes-list__item-text"><span class="andes-list__item-primary">Função crédito</span></div>
                                                </div>
                                                <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="mixed_mp_credit"><span class="andes-checkbox__background"></span></div>
                                             </button>
                                          </li>
                                       </div>
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-128-2">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="mixed_non_mp_debit" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Cartões de débito</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="mixed_non_mp_debit"><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-128-3">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="mixed_non_mp_credit" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Cartões de crédito</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="mixed_non_mp_credit"><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-128-4">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="payment_source_account_money" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Saldo no Mercado Pago</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="payment_source_account_money"><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-128-5">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="payment_source_credits" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Mercado Crédito</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="payment_source_credits"><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-128-6">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="payment_source_pix" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Pix</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="payment_source_pix"><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                    </div>
                                 </ul>
                              </div>
                              <div class="filters-buttons"><button disabled="" type="button" class="andes-button andes-button--small andes-button--transparent andes-button--disabled" id="react-aria-129"><span class="andes-button__content">Excluir</span></button><button disabled="" type="button" class="andes-button andes-button--small andes-button--loud andes-button--disabled" id="react-aria-130"><span class="andes-button__content">Aplicar</span></button></div>
                           </div>
                        </div>
                     </div>
                     <div class="filters-desktop__col">
                        <div class="andes-dropdown andes-dropdown--standalone andes-dropdown--multiple">
                           <button type="button" class="andes-dropdown__trigger">
                              <span class="">Canais</span>
                              <div class="andes-badge andes-badge--pill andes-badge--accent dropdown__badge--hidden andes-badge--small andes-badge--accent--quiet andes-badge--rounded-top-left andes-badge--rounded-top-right andes-badge--rounded-bottom-left andes-badge--rounded-bottom-right" id="react-aria-131">
                                 <p class="andes-badge__content">1</p>
                              </div>
                              <svg class="andes-dropdown__standalone-arrow" width="12" height="12" viewBox="0 0 12 12">
                                 <path fill-opacity=".45" d="M6 7.057L9.352 3.705 10.148 4.5 6 8.648 1.852 4.5 2.648 3.705z"></path>
                              </svg>
                           </button>
                           <div class="andes-dropdown__popover">
                              <div class="andes-dropdown__popover-list andes-dropdown__popover-list--channel">
                                 <ul class="andes-list andes-list--default andes-list--selectable" id="react-aria-132">
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-132-0">
                                       <li class="andes-list__item andes-list__item--first andes-list__item--selected andes-checkbox-list__item andes-list__item--size-medium" id="" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">Todos os canais</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="" checked=""><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                       <hr class="checkbox--separator">
                                    </div>
                                    <div class="andes-checkbox-list__list-item" role="presentation" id="react-aria-132-1">
                                       <li class="andes-list__item andes-checkbox-list__item andes-list__item--size-medium" id="off" name="DropdownItem">
                                          <button class="andes-list__item-action">
                                             <div class="andes-list__item-first-column">
                                                <div class="andes-list__item-text"><span class="andes-list__item-primary">On-line</span></div>
                                             </div>
                                             <div class="andes-checkbox andes-checkbox--label-left"><input class="andes-checkbox__input" id="checkbox-undefined" type="checkbox" value="off"><span class="andes-checkbox__background"></span></div>
                                          </button>
                                       </li>
                                    </div>
                                 </ul>
                              </div>
                              <div class="filters-buttons"><button disabled="" type="button" class="andes-button andes-button--small andes-button--transparent andes-button--disabled" id="react-aria-133"><span class="andes-button__content">Excluir</span></button><button disabled="" type="button" class="andes-button andes-button--small andes-button--loud andes-button--disabled" id="react-aria-134"><span class="andes-button__content">Aplicar</span></button></div>
                           </div>
                        </div>
                     </div>
                     <div class="filters-desktop__col"></div>
                     <div class="filters-desktop__col"></div>
                     <div class="filters-desktop__col"></div>
                  </div>
                  <div class="filters-reset"><button type="button" class="filters-desktop__reset-btn">Apagar filtros</button></div>
               </section>
               <div class="activities-list">
               <div class="ui-list c-activity-list ">
               <div class="ui-list__head u-clearfix">
                  <div class="ui-list__title"><span class="c-activity-list__title">Seu extrato:</span></div>
                  <div class="ui-list__actions"></div>
               </div>
               <ul class="ui-list__content">
            `;
            results.forEach(result => {
                const formattedDate = new Date(result.creationDate).toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
                html += `
            <a class="ui-row__link">
              <div class="ui-row__col ui-row__col--heading">
                <div class="ui-avatar c-activity-avatar">
                  <img decoding="async" src="https://http2.mlstatic.com/storage/activities-middle-end/activities-assets/avatars-v2/svg/ic_account_fund.svg" class="ui-avatar__icon ui-avatar__icon--ic_account_fund" data-src-fallback="https://http2.mlstatic.com/storage/activities-middle-end/activities-assets/avatars-v2/svg/ic_user_picture.svg">
                </div>
              </div>
              <div class="ui-row__col ui-row__col--content">
                <div class="ui-action-row__content">
                  <div class="ui-action-row__title u-truncate">Pix Recebido!</div>
                  <div class="ui-action-row__description">
                    <div class="c-description-classic">
                      <span class="c-description-classic__status u-truncate c-description-classic__status--no-feedback">${result.description}<span class="c-description-classic__email"></span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ui-row__col ui-row__col--actions">
                <div class="ui-action-row__actions">
                  <div class="ui-action-row__extra-actions">
                    <div class="c-activity-row__extra-action c-activity-row__extra-action--margin">
                      <span class="andes-money-amount c-activity-row__price--classic c-activity-row__price--green andes-money-amount--cents-comma" style="font-size: 16px;">
                        <span class="andes-visually-hidden">${result.amount.symbol} ${result.amount.fraction}</span>
                        <span class="andes-money-amount__currency-symbol" aria-hidden="true">${result.amount.symbol}</span>
                        <span class="andes-money-amount__fraction" aria-hidden="true">${result.amount.fraction}</span>
                      </span>
                      <time class="c-activity-row__time">${formattedDate}</time>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          `;
            });

            html += `
            </div></div><nav aria-label="Paginação"><ul class="andes-pagination andes-pagination--large"><li class="andes-pagination__button andes-pagination__button--back andes-pagination__button--disabled"><a href="/activities/0" class="andes-pagination__link" title="Anterior"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="rgba(0, 0, 0, 0.9)"><path d="M12.6287 5.19496L7.83304 9.99059L12.6337 14.7912L11.7851 15.6397L6.13599 9.99059L11.7801 4.34644L12.6287 5.19496Z" fill="rgba(0, 0, 0, 0.9)"></path></svg><span class="andes-pagination__arrow-title">Anterior</span></a></li><li class="andes-pagination__button andes-pagination__button--current"><a class="andes-pagination__link" href="/activities/1" aria-current="page" aria-label="Vá para a página 1">1</a></li><li class="andes-pagination__button"><a class="andes-pagination__link" href="/activities/2" aria-label="Vá para a página 2">2</a></li><li class="andes-pagination__button"><a class="andes-pagination__link" href="/activities/3" aria-label="Vá para a página 3">3</a></li><li class="andes-pagination__button"><a class="andes-pagination__link" href="/activities/4" aria-label="Vá para a página 4">4</a></li><li class="andes-pagination__button"><a class="andes-pagination__link" href="/activities/5" aria-label="Vá para a página 5">5</a></li><li class="andes-pagination__button"><a class="andes-pagination__link" href="/activities/6" aria-label="Vá para a página 6">6</a></li><li class="andes-pagination__button"><a class="andes-pagination__link" href="/activities/7" aria-label="Vá para a página 7">7</a></li><li class="andes-pagination__button"><a class="andes-pagination__link" href="/activities/8" aria-label="Vá para a página 8">8</a></li><li class="andes-pagination__button"><a class="andes-pagination__link" href="/activities/9" aria-label="Vá para a página 9">9</a></li><li aria-hidden="true" class="andes-pagination__button andes-pagination__dots"><i class="andes-pagination__dot"></i><i class="andes-pagination__dot"></i><i class="andes-pagination__dot"></i></li><li class="andes-pagination__button"><a class="andes-pagination__link" href="/activities/37" aria-label="Vá para a página 37">37</a></li><li class="andes-pagination__button andes-pagination__button--next"><a href="/activities/2" class="andes-pagination__link" title="Seguinte"><span class="andes-pagination__arrow-title">Seguinte</span><svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="rgba(0, 0, 0, 0.9)"><path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z" fill="rgba(0, 0, 0, 0.9)"></path></svg></a></li></ul></nav></div>
    
          </div></body>
          </html>
        `;
            res.send(html);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Ocorreu um erro ao obter os dados da API.');
        });
});

  
  

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
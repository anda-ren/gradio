import{S as L,e as M,s as O,a9 as Q,m as B,o as V,g as o,Y as F,h as W,j as C,p as f,q as m,af as b,ab as X,ac as Z,ad as x,w as $,u as ee,k as ae,B as le,C as te,E as y,N as ie}from"./index-c347e3dc.js";import{b as ne}from"./ModifyUpload.svelte_svelte_type_style_lang-14b768c9.js";function re(l){let a,n,r,c,g,s,i,k,p;const w=l[15].default,d=Q(w,l,l[14],null);return{c(){a=B("div"),d&&d.c(),n=V(),r=B("input"),o(r,"type","file"),o(r,"accept",l[0]),r.multiple=c=l[4]==="multiple"||void 0,o(r,"webkitdirectory",g=l[4]==="directory"||void 0),o(r,"mozdirectory",s=l[4]==="directory"||void 0),o(r,"class","svelte-116rqfv"),o(a,"class","svelte-116rqfv"),F(a,"center",l[2]),F(a,"boundedheight",l[1]),F(a,"flex",l[3])},m(t,u){W(t,a,u),d&&d.m(a,null),C(a,n),C(a,r),l[23](r),i=!0,k||(p=[f(r,"change",l[8]),f(a,"drag",m(b(l[16]))),f(a,"dragstart",m(b(l[17]))),f(a,"dragend",m(b(l[18]))),f(a,"dragover",m(b(l[19]))),f(a,"dragenter",m(b(l[20]))),f(a,"dragleave",m(b(l[21]))),f(a,"drop",m(b(l[22]))),f(a,"click",l[7]),f(a,"drop",l[9]),f(a,"dragenter",l[6]),f(a,"dragleave",l[6])],k=!0)},p(t,[u]){d&&d.p&&(!i||u&16384)&&X(d,w,t,t[14],i?x(w,t[14],u,null):Z(t[14]),null),(!i||u&1)&&o(r,"accept",t[0]),(!i||u&16&&c!==(c=t[4]==="multiple"||void 0))&&(r.multiple=c),(!i||u&16&&g!==(g=t[4]==="directory"||void 0))&&o(r,"webkitdirectory",g),(!i||u&16&&s!==(s=t[4]==="directory"||void 0))&&o(r,"mozdirectory",s),(!i||u&4)&&F(a,"center",t[2]),(!i||u&2)&&F(a,"boundedheight",t[1]),(!i||u&8)&&F(a,"flex",t[3])},i(t){i||($(d,t),i=!0)},o(t){ee(d,t),i=!1},d(t){t&&ae(a),d&&d.d(t),l[23](null),k=!1,le(p)}}}function de(l,a,n){let{$$slots:r={},$$scope:c}=a,{filetype:g=null}=a,{include_file_metadata:s=!0}=a,{dragging:i=!1}=a,{boundedheight:k=!0}=a,{center:p=!0}=a,{flex:w=!0}=a,{file_count:d="single"}=a,{disable_click:t=!1}=a,{parse_to_data_url:u=!0}=a,v;const E=te();function S(){n(10,i=!i)}function j(){t||(n(5,v.value="",v),v.click())}async function D(e){let h=Array.from(e);if(!(!e.length||!window.FileReader)){if(d==="single"&&(h=[e[0]]),s)var T=h.map(_=>({name:_.name,size:_.size}));var z=[],q=[];u?q=await Promise.all(h.map(_=>ne(_))):q=h,s?u?z=q.map((_,U)=>({data:_,...T[U]})):z=q.map((_,U)=>({data:"",blob:_,...T[U]})):z=q,E("load",d==="single"?z[0]:z)}}async function A(e){const h=e.target;h.files&&await D(h.files)}async function N(e){n(10,i=!1),e.dataTransfer?.files&&await D(e.dataTransfer.files)}function P(e){y.call(this,l,e)}function R(e){y.call(this,l,e)}function Y(e){y.call(this,l,e)}function G(e){y.call(this,l,e)}function H(e){y.call(this,l,e)}function I(e){y.call(this,l,e)}function J(e){y.call(this,l,e)}function K(e){ie[e?"unshift":"push"](()=>{v=e,n(5,v)})}return l.$$set=e=>{"filetype"in e&&n(0,g=e.filetype),"include_file_metadata"in e&&n(11,s=e.include_file_metadata),"dragging"in e&&n(10,i=e.dragging),"boundedheight"in e&&n(1,k=e.boundedheight),"center"in e&&n(2,p=e.center),"flex"in e&&n(3,w=e.flex),"file_count"in e&&n(4,d=e.file_count),"disable_click"in e&&n(12,t=e.disable_click),"parse_to_data_url"in e&&n(13,u=e.parse_to_data_url),"$$scope"in e&&n(14,c=e.$$scope)},[g,k,p,w,d,v,S,j,A,N,i,s,t,u,c,r,P,R,Y,G,H,I,J,K]}class se extends L{constructor(a){super(),M(this,a,de,re,O,{filetype:0,include_file_metadata:11,dragging:10,boundedheight:1,center:2,flex:3,file_count:4,disable_click:12,parse_to_data_url:13})}}export{se as U};
//# sourceMappingURL=Upload-14be67de.js.map

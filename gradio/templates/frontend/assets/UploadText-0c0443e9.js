import{S,e as U,s as j,m as g,t as c,o as h,g as b,h as q,j as o,x as m,n as y,k as w,a1 as C}from"./index-c347e3dc.js";import{X as T}from"./Button-7362703c.js";function X(t){let e,i=t[1](t[2][t[0]])+"",l,r,s,n,f=t[1]("or")+"",d,v,k,_=t[1]("interface.click_to_upload")+"",u;return{c(){e=g("div"),l=c(i),r=h(),s=g("span"),n=c("- "),d=c(f),v=c(" -"),k=h(),u=c(_),b(s,"class","or svelte-1ck5uk8"),b(e,"class","wrap svelte-1ck5uk8")},m(a,p){q(a,e,p),o(e,l),o(e,r),o(e,s),o(s,n),o(s,d),o(s,v),o(e,k),o(e,u)},p(a,[p]){p&3&&i!==(i=a[1](a[2][a[0]])+"")&&m(l,i),p&2&&f!==(f=a[1]("or")+"")&&m(d,f),p&2&&_!==(_=a[1]("interface.click_to_upload")+"")&&m(u,_)},i:y,o:y,d(a){a&&w(e)}}}function z(t,e,i){let l;C(t,T,n=>i(1,l=n));let{type:r="file"}=e;const s={image:"interface.drop_image",video:"interface.drop_video",audio:"interface.drop_audio",file:"interface.drop_file",csv:"interface.drop_csv"};return t.$$set=n=>{"type"in n&&i(0,r=n.type)},[r,l,s]}class D extends S{constructor(e){super(),U(this,e,z,X,j,{type:0})}}export{D as U};
//# sourceMappingURL=UploadText-0c0443e9.js.map

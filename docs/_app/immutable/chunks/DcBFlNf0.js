import{ai as ge,b as fe,a0 as M,h as I,af as oe,Z as X,Q as j,aA as Ee,_ as we,$,a1 as B,f as N,ar as ye,a2 as le,d as F,a3 as Ae,aB as V,av as ve,a6 as Ie,x as ee,aC as J,aD as Q,aE as ue,aF as Te,aG as be,au as Ne,aH as Re,e as de,aI as Le,ao as ce,Y as Ce,as as He,aq as Oe,aJ as Se,X as ke,aK as xe,p as _e,g as he,i as C,L as G,r as H,t as De,aL as Me,u as ae,n as Ye}from"./CyWpwy_g.js";import{i as re,m as qe,s as ie}from"./Cp6up60Y.js";import{b as ne,e as Be,t as R,a as b}from"./CSbGE7fz.js";import{i as D,p as x,b as Ve}from"./S6dNldgb.js";import{s as Ge}from"./DjCbke-s.js";function sa(i,e){return e}function Ke(i,e,r,s){for(var f=[],v=e.length,l=0;l<v;l++)be(e[l].e,f,!0);var u=v>0&&f.length===0&&r!==null;if(u){var _=r.parentNode;Ne(_),_.append(r),s.clear(),T(i,e[0].prev,e[v-1].next)}Re(f,()=>{for(var p=0;p<v;p++){var d=e[p];u||(s.delete(d.k),T(i,d.prev,d.next)),de(d.e,!u)}})}function ta(i,e,r,s,f,v=null){var l=i,u={flags:e,items:new Map,first:null},_=(e&ue)!==0;if(_){var p=i;l=I?M(oe(p)):p.appendChild(ge())}I&&X();var d=null,w=!1,t=Ee(()=>{var n=r();return Ce(n)?n:n==null?[]:ve(n)});fe(()=>{var n=j(t),a=n.length;if(w&&a===0)return;w=a===0;let g=!1;if(I){var y=l.data===we;y!==(a===0)&&(l=$(),M(l),B(!1),g=!0)}if(I){for(var h=null,E,m=0;m<a;m++){if(N.nodeType===8&&N.data===ye){l=N,g=!0,B(!1);break}var o=n[m],c=s(o,m);E=pe(N,u,h,null,o,c,m,f,e,r),u.items.set(c,E),h=E}a>0&&M($())}I||Xe(n,u,l,f,e,s,r),v!==null&&(a===0?d?le(d):d=F(()=>v(l)):d!==null&&Ae(d,()=>{d=null})),g&&B(!0),j(t)}),I&&(l=N)}function Xe(i,e,r,s,f,v,l){var U,W,Z,z;var u=(f&Te)!==0,_=(f&(J|Q))!==0,p=i.length,d=e.items,w=e.first,t=w,n,a=null,g,y=[],h=[],E,m,o,c;if(u)for(c=0;c<p;c+=1)E=i[c],m=v(E,c),o=d.get(m),o!==void 0&&((U=o.a)==null||U.measure(),(g??(g=new Set)).add(o));for(c=0;c<p;c+=1){if(E=i[c],m=v(E,c),o=d.get(m),o===void 0){var Y=t?t.e.nodes_start:r;a=pe(Y,e,a,a===null?e.first:a.next,E,m,c,s,f,l),d.set(m,a),y=[],h=[],t=a.next;continue}if(_&&Fe(o,E,c,f),(o.e.f&V)!==0&&(le(o.e),u&&((W=o.a)==null||W.unfix(),(g??(g=new Set)).delete(o))),o!==t){if(n!==void 0&&n.has(o)){if(y.length<h.length){var L=h[0],A;a=L.prev;var O=y[0],S=y[y.length-1];for(A=0;A<y.length;A+=1)se(y[A],L,r);for(A=0;A<h.length;A+=1)n.delete(h[A]);T(e,O.prev,S.next),T(e,a,O),T(e,S,L),t=L,a=S,c-=1,y=[],h=[]}else n.delete(o),se(o,t,r),T(e,o.prev,o.next),T(e,o,a===null?e.first:a.next),T(e,a,o),a=o;continue}for(y=[],h=[];t!==null&&t.k!==m;)(t.e.f&V)===0&&(n??(n=new Set)).add(t),h.push(t),t=t.next;if(t===null)continue;o=t}y.push(o),a=o,t=o.next}if(t!==null||n!==void 0){for(var k=n===void 0?[]:ve(n);t!==null;)(t.e.f&V)===0&&k.push(t),t=t.next;var q=k.length;if(q>0){var me=(f&ue)!==0&&p===0?r:null;if(u){for(c=0;c<q;c+=1)(Z=k[c].a)==null||Z.measure();for(c=0;c<q;c+=1)(z=k[c].a)==null||z.fix()}Ke(e,k,me,d)}}u&&Ie(()=>{var P;if(g!==void 0)for(o of g)(P=o.a)==null||P.apply()}),ee.first=e.first&&e.first.e,ee.last=a&&a.e}function Fe(i,e,r,s){(s&J)!==0&&re(i.v,e),(s&Q)!==0?re(i.i,r):i.i=r}function pe(i,e,r,s,f,v,l,u,_,p){var d=(_&J)!==0,w=(_&Le)===0,t=d?w?qe(f):ie(f):f,n=(_&Q)===0?l:ie(l),a={i:n,v:t,k:v,a:null,e:null,prev:r,next:s};try{return a.e=F(()=>u(i,t,n,p),I),a.e.prev=r&&r.e,a.e.next=s&&s.e,r===null?e.first=a:(r.next=a,r.e.next=a.e),s!==null&&(s.prev=a,s.e.prev=a.e),a}finally{}}function se(i,e,r){for(var s=i.next?i.next.e.nodes_start:r,f=e?e.e.nodes_start:r,v=i.e.nodes_start;v!==s;){var l=ce(v);f.before(v),v=l}}function T(i,e,r){e===null?i.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function K(i,e,r,s,f){var v=i,l="",u;fe(()=>{if(l===(l=e()??"")){I&&X();return}u!==void 0&&(de(u),u=void 0),l!==""&&(u=F(()=>{if(I){N.data;for(var _=X(),p=_;_!==null&&(_.nodeType!==8||_.data!=="");)p=_,_=ce(_);if(_===null)throw He(),Oe;ne(N,p),v=M(_);return}var d=l+"",w=Be(d);ne(oe(w),w.lastChild),v.before(w)}))})}function Je(i,e,r,s){var f=i.__attributes??(i.__attributes={});I&&(f[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||f[e]!==(f[e]=r)&&(e==="style"&&"__styles"in i&&(i.__styles={}),e==="loading"&&(i[Se]=r),r==null?i.removeAttribute(e):typeof r!="string"&&Qe(i).includes(e)?i[e]=r:i.setAttribute(e,r))}var te=new Map;function Qe(i){var e=te.get(i.nodeName);if(e)return e;te.set(i.nodeName,e=[]);for(var r,s=i,f=Element.prototype;f!==s;){r=xe(s);for(var v in r)r[v].set&&e.push(v);s=ke(s)}return e}function fa(i,e,r){if(r){if(i.classList.contains(e))return;i.classList.add(e)}else{if(!i.classList.contains(e))return;i.classList.remove(e)}}var Ue=R('<video autoplay loop playsinline="" class="svelte-7wvy9s"></video>',2),We=R('<img <img="" src="/project/hero.png" alt="immigrant workers" class="svelte-7wvy9s"> />',1),Ze=R("<h1><!></h1>"),ze=R("<h2><!></h2>"),Pe=R("<p><!></p>"),je=R('<div class="hero svelte-7wvy9s"><!> <div class="text svelte-7wvy9s"><!> <!> <!></div></div>');function oa(i,e){_e(e,!0);var r=je(),s=C(r);{var f=n=>{var a=Ue();a.muted=!0,De(()=>Je(a,"src",e.src)),b(n,a)},v=n=>{var a=We();Me(),b(n,a)};D(s,n=>{e.src.endsWith(".mp4")?n(f):n(v,!1)})}var l=G(s,2),u=C(l);{var _=n=>{var a=Ze(),g=C(a);K(g,()=>e.hed),H(a),b(n,a)};D(u,n=>{e.hed&&n(_)})}var p=G(u,2);{var d=n=>{var a=ze(),g=C(a);K(g,()=>e.dek),H(a),b(n,a)};D(p,n=>{e.dek&&n(d)})}var w=G(p,2);{var t=n=>{var a=Pe(),g=C(a);K(g,()=>e.byline),H(a),b(n,a)};D(w,n=>{e.byline&&n(t)})}H(l),H(r),b(i,r),he()}var $e=R("<div><!></div>");function la(i,e){_e(e,!0);let r=x(e,"root",3,null),s=x(e,"top",3,0),f=x(e,"bottom",3,0),v=x(e,"increments",3,100),l=x(e,"value",15,void 0),u=[],_=[],p=[],d=[],w;function t(){let h=0,E=0;for(let m=0;m<u.length;m++)u[m]>h&&(h=u[m],E=m);h>0?l(E):l(void 0)}function n(h,E){const m=O=>{O[0].isIntersecting;const S=O[0].intersectionRatio;u[E]=S,t()},o=s()?s()*-1:0,c=f()?f()*-1:0,Y=`${o}px 0px ${c}px 0px`,L={root:r(),rootMargin:Y,threshold:_};d[E]&&d[E].disconnect();const A=new IntersectionObserver(m,L);A.observe(h),d[E]=A}function a(){p.length&&p.forEach(n)}ae(()=>{for(let h=0;h<v()+1;h++)_.push(h/v());p=w.querySelectorAll(":scope > *:not(iframe)"),a()}),ae(()=>{s(),f(),a()});var g=$e(),y=C(g);Ge(y,()=>e.children??Ye),H(g),Ve(g,h=>w=h,()=>w),b(i,g),he()}export{oa as H,la as S,ta as e,K as h,sa as i,Je as s,fa as t};

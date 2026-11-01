(()=>{var k_=Object.defineProperty;var z_=(i,t,e)=>t in i?k_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Bt=(i,t,e)=>z_(i,typeof t!="symbol"?t+"":t,e);function ds(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Np(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},la={duration:.5,overwrite:!1,delay:0},qu,yn,Ue,Ti=1e8,Ce=1/Ti,Ou=Math.PI*2,H_=Ou/4,G_=0,Up=Math.sqrt,V_=Math.cos,W_=Math.sin,cn=function(t){return typeof t=="string"},Xe=function(t){return typeof t=="function"},ms=function(t){return typeof t=="number"},Hl=function(t){return typeof t>"u"},Yi=function(t){return typeof t=="object"},ei=function(t){return t!==!1},Yu=function(){return typeof window<"u"},Ll=function(t){return Xe(t)||cn(t)},Op=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,X_=/random\([^)]+\)/g,q_=/,\s*/g,Ep=/(?:-?\.?\d|\.)+/gi,$u=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_r=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ru=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zu=/[+-]=-?[.\d]+/,Y_=/[^,'"\[\]\s]+/gi,$_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ke,Xi,Fu,Ju,ci={},Ol={},Fp,Bp=function(t){return(Ol=Kr(t,ci))&&In},Gl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ca=function(t,e){return!e&&console.warn(t)},kp=function(t,e){return t&&(ci[t]=e)&&Ol&&(Ol[t]=e)||ci},ha=function(){return 0},Z_={suppressEvents:!0,isStart:!0,kill:!1},Dl={suppressEvents:!0,kill:!1},J_={suppressEvents:!0},Ku={},zs=[],Bu={},zp,jn={},Pu={},Ap=30,Nl=[],Qu="",ju=function(t){var e=t[0],n,s;if(Yi(e)||Xe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(s=Nl.length;s--&&!Nl[s].targetTest(e););n=Nl[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new sf(t[s],n)))||t.splice(s,1);return t},Hs=function(t){return t._gsap||ju(wi(t))[0]._gsap},tf=function(t,e,n){return(n=t[e])&&Xe(n)?t[e]():Hl(n)&&t.getAttribute&&t.getAttribute(e)||n},Hn=function(t,e){return(t=t.split(",")).forEach(e)||t},qe=function(t){return Math.round(t*1e5)/1e5||0},Be=function(t){return Math.round(t*1e7)/1e7||0},xr=function(t,e){var n=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+s:n==="-"?t-s:n==="*"?t*s:t/s},K_=function(t,e){for(var n=e.length,s=0;t.indexOf(e[s])<0&&++s<n;);return s<n},Fl=function(){var t=zs.length,e=zs.slice(0),n,s;for(Bu={},zs.length=0,n=0;n<t;n++)s=e[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},ef=function(t){return!!(t._initted||t._startAt||t.add)},Hp=function(t,e,n,s){zs.length&&!yn&&Fl(),t.render(e,n,s||!!(yn&&e<0&&ef(t))),zs.length&&!yn&&Fl()},Gp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Y_).length<2?e:cn(t)?t.trim():t},Vp=function(t){return t},hi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Q_=function(t){return function(e,n){for(var s in n)s in e||s==="duration"&&t||s==="ease"||(e[s]=n[s])}},Kr=function(t,e){for(var n in e)t[n]=e[n];return t},Cp=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yi(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Bl=function(t,e){var n={},s;for(s in t)s in e||(n[s]=t[s]);return n},ra=function(t){var e=t.parent||ke,n=t.keyframes?Q_(Pn(t.keyframes)):hi;if(ei(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},j_=function(t,e){for(var n=t.length,s=n===e.length;s&&n--&&t[n]===e[n];);return n<0},Wp=function(t,e,n,s,r){n===void 0&&(n="_first"),s===void 0&&(s="_last");var o=t[s],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[s]=e,e._prev=o,e.parent=e._dp=t,e},Vl=function(t,e,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[s]===e&&(t[s]=r),e._next=e._prev=e.parent=null},Gs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},pr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},tx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ku=function(t,e,n,s){return t._startAt&&(yn?t._startAt.revert(Dl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},ex=function i(t){return!t||t._ts&&i(t.parent)},Rp=function(t){return t._repeat?Qr(t._tTime,t=t.duration()+t._rDelay)*t:0},Qr=function(t,e){var n=Math.floor(t=Be(t/e));return t&&n===t?n-1:n},kl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Wl=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ce)||0))},Xl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Wl(t),n._dirty||pr(n,t)),t},Xp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=kl(t.rawTime(),e),(!e._dur||da(0,e.totalDuration(),n)-e._tTime>Ce)&&e.render(n,!0)),pr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ce}},qi=function(t,e,n,s){return e.parent&&Gs(e),e._start=Be((ms(n)?n:n||t!==ke?bi(t,n,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Wp(t,e,"_first","_last",t._sort?"_start":0),zu(e)||(t._recent=e),s||Xp(t,e),t._ts<0&&Xl(t,t._tTime),t},qp=function(t,e){return(ci.ScrollTrigger||Gl("scrollTrigger",e))&&ci.ScrollTrigger.create(e,t)},Yp=function(t,e,n,s,r){if(af(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!yn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&zp!==ti.frame)return zs.push(t),t._lazy=[r,s],1},nx=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},zu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ix=function(t,e,n,s){var r=t.ratio,o=e<0||!e&&(!t._start&&nx(t)&&!(!t._initted&&zu(t))||(t._ts<0||t._dp._ts<0)&&!zu(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=da(0,t._tDur,e),h=Qr(l,a),t._yoyo&&h&1&&(o=1-o),h!==Qr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||yn||s||t._zTime===Ce||!e&&t._zTime){if(!t._initted&&Yp(t,e,s,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ce:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ku(t,e,n,!0),t._onUpdate&&!n&&li(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&li(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Gs(t,1),!n&&!yn&&(li(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},sx=function(t,e,n){var s;if(n>e)for(s=t._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},jr=function(t,e,n,s){var r=t._repeat,o=Be(e)||0,a=t._tTime/t._tDur;return a&&!s&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Be(o*(r+1)+t._rDelay*r):o,a>0&&!s&&Xl(t,t._tTime=t._tDur*a),t.parent&&Wl(t),n||pr(t.parent,t),t},Pp=function(t){return t instanceof Rn?pr(t):jr(t,t._dur)},rx={_start:0,endTime:ha,totalDuration:ha},bi=function i(t,e,n){var s=t.labels,r=t._recent||rx,o=t.duration()>=Ti?r.endTime(!1):t._dur,a,l,c;return cn(e)&&(isNaN(e)||e in s)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in s||(s[e]=o),s[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},oa=function(t,e,n){var s=ms(e[1]),r=(s?2:1)+(t<2?0:1),o=e[r],a,l;if(s&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ei(l.vars.inherit)&&l.parent;o.immediateRender=ei(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Je(e[0],o,e[r+1])},Vs=function(t,e){return t||t===0?e(t):e},da=function(t,e,n){return n<t?t:n>e?e:n},Sn=function(t,e){return!cn(t)||!(e=$_.exec(t))?"":e[1]},ox=function(t,e,n){return Vs(n,function(s){return da(t,e,s)})},Hu=[].slice,$p=function(t,e){return t&&Yi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yi(t[0]))&&!t.nodeType&&t!==Xi},ax=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(s){var r;return cn(s)&&!e||$p(s,1)?(r=n).push.apply(r,wi(s)):n.push(s)})||n},wi=function(t,e,n){return Ue&&!e&&Ue.selector?Ue.selector(t):cn(t)&&!n&&(Fu||!to())?Hu.call((e||Ju).querySelectorAll(t),0):Pn(t)?ax(t,n):$p(t)?Hu.call(t,0):t?[t]:[]},Gu=function(t){return t=wi(t)[0]||ca("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return wi(e,n.querySelectorAll?n:n===t?ca("Invalid scope")||Ju.createElement("div"):t)}},Zp=function(t){return t.sort(function(){return .5-Math.random()})},Jp=function(t){if(Xe(t))return t;var e=Yi(t)?t:{each:t},n=mr(e.ease),s=e.from||0,r=parseFloat(e.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,c=e.axis,h=s,d=s;return cn(s)?h=d={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(h=s[0],d=s[1]),function(f,u,m){var _=(m||e).length,p=o[_],g,v,w,y,T,E,x,b,C;if(!p){if(C=e.grid==="auto"?0:(e.grid||[1,Ti])[1],!C){for(x=-Ti;x<(x=m[C++].getBoundingClientRect().left)&&C<_;);C<_&&C--}for(p=o[_]=[],g=l?Math.min(C,_)*h-.5:s%C,v=C===Ti?0:l?_*d/C-.5:s/C|0,x=0,b=Ti,E=0;E<_;E++)w=E%C-g,y=v-(E/C|0),p[E]=T=c?Math.abs(c==="y"?y:w):Up(w*w+y*y),T>x&&(x=T),T<b&&(b=T);s==="random"&&Zp(p),p.max=x-b,p.min=b,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(C>_?_-1:c?c==="y"?_/C:C:Math.max(C,_/C))||0)*(s==="edges"?-1:1),p.b=_<0?r-_:r,p.u=Sn(e.amount||e.each)||0,n=n&&_<0?yx(n):n}return _=(p[f]-p.min)/p.max||0,Be(p.b+(n?n(_):_)*p.v)+p.u}},Vu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var s=Be(Math.round(parseFloat(n)/t)*t*e);return(s-s%1)/e+(ms(n)?0:Sn(n))}},Kp=function(t,e){var n=Pn(t),s,r;return!n&&Yi(t)&&(s=n=t.radius||Ti,t.values?(t=wi(t.values),(r=!ms(t[0]))&&(s*=s)):t=Vu(t.increment)),Vs(e,n?Xe(t)?function(o){return r=t(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Ti,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!s||c<=s?t[h]:o,r||h===o||ms(o)?h:h+Sn(o)}:Vu(t))},Qp=function(t,e,n,s){return Vs(Pn(t)?!e:n===!0?!!(n=0):!s,function(){return Pn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*s)/s})},lx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(s){return e.reduce(function(r,o){return o(r)},s)}},cx=function(t,e){return function(n){return t(parseFloat(n))+(e||Sn(n))}},hx=function(t,e,n){return tm(t,e,0,1,n)},jp=function(t,e,n){return Vs(n,function(s){return t[~~e(s)]})},ux=function i(t,e,n){var s=e-t;return Pn(t)?jp(t,i(0,t.length),e):Vs(n,function(r){return(s+(r-t)%s)%s+t})},fx=function i(t,e,n){var s=e-t,r=s*2;return Pn(t)?jp(t,i(0,t.length-1),e):Vs(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>s?r-o:o)})},eo=function(t){return t.replace(X_,function(e){var n=e.indexOf("[")+1,s=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(q_);return Qp(n?s:+s[0],n?0:+s[1],+s[2]||1e-5)})},tm=function(t,e,n,s,r){var o=e-t,a=s-n;return Vs(r,function(l){return n+((l-t)/o*a||0)})},dx=function i(t,e,n,s){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=cn(t),a={},l,c,h,d,f;if(n===!0&&(s=1)&&(n=null),o)t={p:t},e={p:e};else if(Pn(t)&&!Pn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(i(t[c-1],t[c]));d--,r=function(m){m*=d;var _=Math.min(f,~~m);return h[_](m-_)},n=e}else s||(t=Kr(Pn(t)?[]:{},t));if(!h){for(l in e)rf.call(a,t,l,"get",e[l]);r=function(m){return hf(m,a)||(o?t.p:t)}}}return Vs(n,r)},Ip=function(t,e,n){var s=t.labels,r=Ti,o,a,l;for(o in s)a=s[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},li=function(t,e,n){var s=t.vars,r=s[e],o=Ue,a=t._ctx,l,c,h;if(r)return l=s[e+"Params"],c=s.callbackScope||t,n&&zs.length&&Fl(),a&&(Ue=a),h=l?r.apply(c,l):r.call(c),Ue=o,h},ia=function(t){return Gs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!yn),t.progress()<1&&li(t,"onInterrupt"),t},Jr,em=[],nm=function(t){if(t)if(t=!t.name&&t.default||t,Yu()||t.headless){var e=t.name,n=Xe(t),s=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ha,render:hf,add:rf,kill:Px,modifier:Rx,rawVars:0},o={targetTest:0,get:0,getSetter:ql,aliases:{},register:0};if(to(),t!==s){if(jn[e])return;hi(s,hi(Bl(t,r),o)),Kr(s.prototype,Kr(r,Bl(t,o))),jn[s.prop=e]=s,t.targetTest&&(Nl.push(s),Ku[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}kp(e,s),t.register&&t.register(In,s,Gn)}else em.push(t)},Ae=255,sa={aqua:[0,Ae,Ae],lime:[0,Ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ae],navy:[0,0,128],white:[Ae,Ae,Ae],olive:[128,128,0],yellow:[Ae,Ae,0],orange:[Ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ae,0,0],pink:[Ae,192,203],cyan:[0,Ae,Ae],transparent:[Ae,Ae,Ae,0]},Iu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ae+.5|0},im=function(t,e,n){var s=t?ms(t)?[t>>16,t>>8&Ae,t&Ae]:0:sa.black,r,o,a,l,c,h,d,f,u,m;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),sa[t])s=sa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ae,s&Ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ae,t&Ae]}else if(t.substr(0,3)==="hsl"){if(s=m=t.match(Ep),!e)l=+s[0]%360/360,c=+s[1]/100,h=+s[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,s.length>3&&(s[3]*=1),s[0]=Iu(l+1/3,r,o),s[1]=Iu(l,r,o),s[2]=Iu(l-1/3,r,o);else if(~t.indexOf("="))return s=t.match($u),n&&s.length<4&&(s[3]=1),s}else s=t.match(Ep)||sa.transparent;s=s.map(Number)}return e&&!m&&(r=s[0]/Ae,o=s[1]/Ae,a=s[2]/Ae,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(h*100+.5)),n&&s.length<4&&(s[3]=1),s},sm=function(t){var e=[],n=[],s=-1;return t.split(ps).forEach(function(r){var o=r.match(_r)||[];e.push.apply(e,o),n.push(s+=o.length+1)}),e.c=n,e},Lp=function(t,e,n){var s="",r=(t+s).match(ps),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=im(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=sm(t),l=n.c,l.join(s)!==h.c.join(s)))for(c=t.replace(ps,"1").split(_r),d=c.length-1;a<d;a++)s+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ps),d=c.length-1;a<d;a++)s+=c[a]+r[a];return s+c[d]},ps=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in sa)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),px=/hsl[a]?\(/,nf=function(t){var e=t.join(" "),n;if(ps.lastIndex=0,ps.test(e))return n=px.test(e),t[1]=Lp(t[1],n),t[0]=Lp(t[0],n,sm(t[1])),!0},ua,ti=(function(){var i=Date.now,t=500,e=33,n=i(),s=n,r=1e3/240,o=r,a=[],l,c,h,d,f,u,m=function _(p){var g=i()-s,v=p===!0,w,y,T,E;if((g>t||g<0)&&(n+=g-e),s+=g,T=s-n,w=T-o,(w>0||v)&&(E=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,o+=w+(w>=r?4:r-w),y=1),v||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](T,f,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Fp&&(!Fu&&Yu()&&(Xi=Fu=window,Ju=Xi.document||{},ci.gsap=In,(Xi.gsapVersions||(Xi.gsapVersions=[])).push(In.version),Bp(Ol||Xi.GreenSockGlobals||!Xi.gsap&&Xi||{}),em.forEach(nm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},ua=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ua=0,c=ha},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,g,v){var w=g?function(y,T,E,x){p(y,T,E,x),d.remove(w)}:p;return d.remove(p),a[v?"unshift":"push"](w),to(),w},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&u>=g&&u--},_listeners:a},d})(),to=function(){return!ua&&ti.wake()},ce={},mx=/^[\d.\-M][\d.\-,\s]/,gx=/["']/g,_x=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[s]=isNaN(c)?c.replace(gx,"").trim():+c,s=l.substr(a+1).trim();return e},xx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<n?t.indexOf(")",n+1):n)},vx=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[_x(e[1])]:xx(t).split(",").map(Gp)):ce._CE&&mx.test(t)?ce._CE("",t):n},yx=function(t){return function(e){return 1-t(1-e)}},mr=function(t,e){return t&&(Xe(t)?t:ce[t]||vx(t))||e},vr=function(t,e,n,s){n===void 0&&(n=function(l){return 1-e(1-l)}),s===void 0&&(s=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:s},o;return Hn(t,function(a){ce[a]=ci[a]=r,ce[o=a.toLowerCase()]=n;for(var l in r)ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[a+"."+l]=r[l]}),r},rm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Lu=function i(t,e,n){var s=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Ou*(Math.asin(1/s)||0),a=function(h){return h===1?1:s*Math.pow(2,-10*h)*W_((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:rm(a);return r=Ou/r,l.config=function(c,h){return i(t,c,h)},l},Du=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},s=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:rm(n);return s.config=function(r){return i(t,r)},s};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;vr(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;vr("Elastic",Lu("in"),Lu("out"),Lu());(function(i,t){var e=1/t,n=2*e,s=2.5*e,r=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<s?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};vr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);vr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});vr("Circ",function(i){return-(Up(1-i*i)-1)});vr("Sine",function(i){return i===1?1:-V_(i*H_)+1});vr("Back",Du("in"),Du("out"),Du());ce.SteppedEase=ce.steps=ci.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,s=t+(e?0:1),r=e?1:0,o=1-Ce;return function(a){return((s*da(0,o,a)|0)+r)*n}}};la.ease=ce["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Qu+=i+","+i+"Params,"});var sf=function(t,e){this.id=G_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:tf,this.set=e?e.getSetter:ql},fa=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,jr(this,+e.duration,1,1),this.data=e.data,Ue&&(this._ctx=Ue,Ue.data.push(this)),ua||ti.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,jr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,s){if(to(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Xl(this,n),!r._dp||r.parent||Xp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ce||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hp(this,n,s)),this},t.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Rp(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},t.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Rp(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?Qr(this._tTime,r)+1:1},t.timeScale=function(n,s){if(!arguments.length)return this._rts===-Ce?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?kl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ce?0:this._rts,this.totalTime(da(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),Wl(this),tx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(to(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ce&&(this._tTime-=Ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Be(n);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&qi(s,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kl(s.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=J_);var s=yn;return yn=n,ef(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),yn=s,this},t.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Pp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,Pp(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,s){return this.totalTime(bi(this,n),ei(s))},t.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,ei(s)),this._dur||(this._zTime=-Ce),this},t.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},t.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ce,this},t.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-Ce)},t.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},t.then=function(n){var s=this,r=s._prom;return new Promise(function(o){var a=Xe(n)?n:Vp,l=function(){var h=s.then;s.then=null,r&&r(),Xe(a)&&(a=a(s))&&(a.then||a===s)&&(s.then=h),o(a),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){ia(this)},i})();hi(fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ce,_prom:0,_ps:!1,_rts:1});var Rn=(function(i){Np(t,i);function t(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ei(n.sortChildren),ke&&qi(n.parent||ke,ds(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&qp(ds(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(s,r,o){return oa(0,arguments,this),this},e.from=function(s,r,o){return oa(1,arguments,this),this},e.fromTo=function(s,r,o,a){return oa(2,arguments,this),this},e.set=function(s,r,o){return r.duration=0,r.parent=this,ra(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Je(s,r,bi(this,o),1),this},e.call=function(s,r,o){return qi(this,Je.delayedCall(0,s,r),o)},e.staggerTo=function(s,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Je(s,o,bi(this,l)),this},e.staggerFrom=function(s,r,o,a,l,c,h){return o.runBackwards=1,ra(o).immediateRender=ei(o.immediateRender),this.staggerTo(s,r,o,a,l,c,h)},e.staggerFromTo=function(s,r,o,a,l,c,h,d){return a.startAt=o,ra(a).immediateRender=ei(a.immediateRender),this.staggerTo(s,r,a,l,c,h,d)},e.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=s<=0?0:Be(s),d=this._zTime<0!=s<0&&(this._initted||!c),f,u,m,_,p,g,v,w,y,T,E,x;if(this!==ke&&h>l&&s>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,s+=this._time-a),f=h,y=this._start,w=this._ts,g=!w,d&&(c||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(p*100+s,r,o);if(f=Be(h%p),h===l?(_=this._repeat,f=c):(T=Be(h/p),_=~~T,_&&_===T&&(f=c,_--),f>c&&(f=c)),T=Qr(this._tTime,p),!a&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),E&&_&1&&(f=c-f,x=1),_!==T&&!this._lock){var b=E&&T&1,C=b===(E&&_&1);if(_<T&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Be(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,C&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=sx(this,Be(a),Be(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&h&&c&&!r&&!T&&(li(this,"onStart"),this._tTime!==h))return this;if(f>=a&&s>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(s,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-Ce);break}}u=m}else{u=this._last;for(var P=s<0?s:f;u;){if(m=u._prev,(u._act||P<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(s,r,o);if(u.render(u._ts>0?(P-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(P-u._start)*u._ts,r,o||yn&&ef(u)),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=P?-Ce:Ce);break}}u=m}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-Ce)._zTime=f>=a?1:-1,this._ts))return this._start=y,Wl(this),this.render(s,r,o);this._onUpdate&&!r&&li(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Gs(this,1),!r&&!(s<0&&!a)&&(h||a||!l)&&(li(this,h===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,r){var o=this;if(ms(r)||(r=bi(this,r,s)),!(s instanceof fa)){if(Pn(s))return s.forEach(function(a){return o.add(a,r)}),this;if(cn(s))return this.addLabel(s,r);if(Xe(s))s=Je.delayedCall(0,s);else return this}return this!==s?qi(this,s,r):this},e.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Je?r&&l.push(c):(o&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},e.remove=function(s){return cn(s)?this.removeLabel(s):Xe(s)?this.killTweensOf(s):(s.parent===this&&Vl(this,s),s===this._recent&&(this._recent=this._last),pr(this))},e.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be(ti.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},e.addLabel=function(s,r){return this.labels[s]=bi(this,r),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,r,o){var a=Je.delayedCall(0,r||ha,o);return a.data="isPause",this._hasPause=1,qi(this,a,bi(this,s))},e.removePause=function(s){var r=this._first;for(s=bi(this,s);r;)r._start===s&&r.data==="isPause"&&Gs(r),r=r._next},e.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)ks!==a[l]&&a[l].kill(s,r);return this},e.getTweensOf=function(s,r){for(var o=[],a=wi(s),l=this._first,c=ms(r),h;l;)l instanceof Je?K_(l._targets,a)&&(c?(!ks||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(s,r){r=r||{};var o=this,a=bi(o,s),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=Je.to(o,hi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ce,onStart:function(){if(o.pause(),!u){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&jr(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},r));return f?m.render(0):m},e.tweenFromTo=function(s,r,o){return this.tweenTo(r,hi({startAt:{time:bi(this,s)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),Ip(this,bi(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),Ip(this,bi(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ce)},e.shiftChildren=function(s,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(s=Be(s);a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=s);return pr(this)},e.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),pr(this)},e.totalDuration=function(s){var r=0,o=this,a=o._last,l=Ti,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,qi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Be(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;jr(o,o===ke&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(s){if(ke._ts&&(Hp(ke,kl(s,ke)),zp=ti.frame),ti.frame>=Ap){Ap+=ni.autoSleep||120;var r=ke._first;if((!r||!r._ts)&&ni.autoSleep&&ti._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ti.sleep()}}},t})(fa);hi(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sx=function(t,e,n,s,r,o,a){var l=new Gn(this._pt,t,e,0,1,cf,null,r),c=0,h=0,d,f,u,m,_,p,g,v;for(l.b=n,l.e=s,n+="",s+="",(g=~s.indexOf("random("))&&(s=eo(s)),o&&(v=[n,s],o(v,t,e),n=v[0],s=v[1]),f=n.match(Ru)||[];d=Ru.exec(s);)m=d[0],_=s.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?xr(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=Ru.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=a,(Zu.test(s)||g)&&(l.e=0),this._pt=l,l},rf=function(t,e,n,s,r,o,a,l,c,h){Xe(s)&&(s=s(r||0,t,o));var d=t[e],f=n!=="get"?n:Xe(d)?c?t[e.indexOf("set")||!Xe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Xe(d)?c?Ex:lm:lf,m;if(cn(s)&&(~s.indexOf("random(")&&(s=eo(s)),s.charAt(1)==="="&&(m=xr(f,s)+(Sn(f)||0),(m||m===0)&&(s=m))),!h||f!==s||Wu)return!isNaN(f*s)&&s!==""?(m=new Gn(this._pt,t,e,+f||0,s-(f||0),typeof d=="boolean"?Cx:cm,0,u),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&Gl(e,s),Sx.call(this,t,e,f,s,u,l||ni.stringFilter,c))},Mx=function(t,e,n,s,r){if(Xe(t)&&(t=aa(t,r,e,n,s)),!Yi(t)||t.style&&t.nodeType||Pn(t)||Op(t))return cn(t)?aa(t,r,e,n,s):t;var o={},a;for(a in t)o[a]=aa(t[a],r,e,n,s);return o},of=function(t,e,n,s,r,o){var a,l,c,h;if(jn[t]&&(a=new jn[t]).init(r,a.rawVars?e[t]:Mx(e[t],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new Gn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Jr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ks,Wu,af=function i(t,e,n){var s=t.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,c=s.onUpdate,h=s.runBackwards,d=s.yoyoEase,f=s.keyframes,u=s.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:p,w=t._overwrite==="auto"&&!qu,y=t.timeline,T=s.easeReverse||d,E,x,b,C,P,N,D,G,I,z,X,F,tt;if(y&&(!f||!r)&&(r="none"),t._ease=mr(r,la.ease),t._rEase=T&&(mr(T)||t._ease),t._from=!y&&!!s.runBackwards,t._from&&(t.ratio=1),!y||f&&!s.stagger){if(G=p[0]?Hs(p[0]).harness:0,F=G&&s[G.prop],E=Bl(s,Ku),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&m?Dl:Z_),_._lazy=0),o){if(Gs(t._startAt=Je.set(p,hi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&ei(l),startAt:null,delay:0,onUpdate:c&&function(){return li(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yn||!a&&!u)&&t._startAt.revert(Dl),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),b=hi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ei(l),immediateRender:a,stagger:0,parent:g},E),F&&(b[G.prop]=F),Gs(t._startAt=Je.set(p,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(yn?t._startAt.revert(Dl):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Ce,Ce);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&ei(l)||l&&!m,x=0;x<p.length;x++){if(P=p[x],D=P._gsap||ju(p)[x]._gsap,t._ptLookup[x]=z={},Bu[D.id]&&zs.length&&Fl(),X=v===p?x:v.indexOf(P),G&&(I=new G).init(P,F||E,t,X,v)!==!1&&(t._pt=C=new Gn(t._pt,P,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){z[W]=C}),I.priority&&(N=1)),!G||F)for(b in E)jn[b]&&(I=of(b,E,t,X,P,v))?I.priority&&(N=1):z[b]=C=rf.call(t,P,b,"get",E[b],X,v,0,s.stringFilter);t._op&&t._op[x]&&t.kill(P,t._op[x]),w&&t._pt&&(ks=t,ke.killTweensOf(P,z,t.globalTime(e)),tt=!t.parent,ks=0),t._pt&&l&&(Bu[D.id]=1)}N&&uf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,f&&e<=0&&y.render(Ti,!0,!0)},bx=function(t,e,n,s,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Wu=1,t.vars[e]="+=0",af(t,a),Wu=0,l?ca(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(s||s===0)&&!r?s:h.s+(s||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=qe(n)+Sn(d.e)),d.b&&(d.b=h.s+Sn(d.b))},Tx=function(t,e){var n=t[0]?Hs(t[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return e;r=Kr({},e);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},wx=function(t,e,n,s){var r=e.ease||s||"power1.inOut",o,a;if(Pn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},aa=function(t,e,n,s,r){return Xe(t)?t.call(e,n,s,r):cn(t)&&~t.indexOf("random(")?eo(t):t},om=Qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",am={};Hn(om+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return am[i]=1});var Je=(function(i){Np(t,i);function t(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=i.call(this,o?s:ra(s))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=s.parent||ke,v=(Pn(n)||Op(n)?ms(n[0]):"length"in s)?[n]:wi(n),w,y,T,E,x,b,C,P;if(a._targets=v.length?ju(v):ca("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,m||f||Ll(c)||Ll(h)){s=a.vars;var N=s.easeReverse||s.yoyoEase;if(w=a.timeline=new Rn({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),w.kill(),w.parent=w._dp=ds(a),w._start=0,f||Ll(c)||Ll(h)){if(E=v.length,C=f&&Jp(f),Yi(f))for(x in f)~om.indexOf(x)&&(P||(P={}),P[x]=f[x]);for(y=0;y<E;y++)T=Bl(s,am),T.stagger=0,N&&(T.easeReverse=N),P&&Kr(T,P),b=v[y],T.duration=+aa(c,ds(a),y,b,v),T.delay=(+aa(h,ds(a),y,b,v)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),w.to(b,T,C?C(y,b,v):0),w._ease=ce.none;w.duration()?c=h=0:a.timeline=0}else if(m){ra(hi(w.vars.defaults,{ease:"none"})),w._ease=mr(m.ease||s.ease||"none");var D=0,G,I,z;if(Pn(m))m.forEach(function(X){return w.to(v,X,">")}),w.duration();else{T={};for(x in m)x==="ease"||x==="easeEach"||wx(x,m[x],T,m.easeEach);for(x in T)for(G=T[x].sort(function(X,F){return X.t-F.t}),D=0,y=0;y<G.length;y++)I=G[y],z={ease:I.e,duration:(I.t-(y?G[y-1].t:0))/100*c},z[x]=I.v,w.to(v,z,D),D+=z.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return u===!0&&!qu&&(ks=ds(a),ke.killTweensOf(v),ks=0),qi(g,ds(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(d||!c&&!m&&a._start===Be(g._time)&&ei(d)&&ex(ds(a))&&g.data!=="nested")&&(a._tTime=-Ce,a.render(Math.max(0,-h)||0)),p&&qp(ds(a),p),a}var e=t.prototype;return e.render=function(s,r,o){var a=this._time,l=this._tDur,c=this._dur,h=s<0,d=s>l-Ce&&!h?l:s<Ce?0:s,f,u,m,_,p,g,v,w;if(!c)ix(this,s,r,o);else if(d!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+s,r,o);if(f=Be(d%_),d===l?(m=this._repeat,f=c):(p=Be(d/_),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=Qr(this._tTime,_),f===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Be(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(Yp(this,h?s:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(s,r,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var T=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!p&&(li(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;w&&w.render(s<0?s:w._dur*w._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(h&&ku(this,s,r,o),li(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!r&&this.parent&&li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&ku(this,s,!0,!0),(s||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Gs(this,1),!r&&!(h&&!a)&&(d||a||g)&&(li(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},e.resetTo=function(s,r,o,a,l){ua||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||af(this,c),h=this._ease(c/this._dur),bx(this,s,r,o,a,h,c,l)?this.resetTo(s,r,o,a,1):(Xl(this,0),this.parent||Wp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,ks&&ks.vars.overwrite!==!0)._first||ia(this),this.parent&&o!==this.timeline.totalDuration()&&jr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?wi(s):a,c=this._ptLookup,h=this._pt,d,f,u,m,_,p,g;if((!r||r==="all")&&j_(a,l))return r==="all"&&(this._pt=0),ia(this);for(d=this._op=this._op||[],r!=="all"&&(cn(r)&&(_={},Hn(r,function(v){return _[v]=1}),r=_),r=Tx(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(d[g]=r,m=f,u={}):(u=d[g]=d[g]||{},m=r);for(_ in m)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Vl(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&ia(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return oa(1,arguments)},t.delayedCall=function(s,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(s,r,o){return oa(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,o){return ke.killTweensOf(s,r,o)},t})(fa);hi(Je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(i){Je[i]=function(){var t=new Rn,e=Hu.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var lf=function(t,e,n){return t[e]=n},lm=function(t,e,n){return t[e](n)},Ex=function(t,e,n,s){return t[e](s.fp,n)},Ax=function(t,e,n){return t.setAttribute(e,n)},ql=function(t,e){return Xe(t[e])?lm:Hl(t[e])&&t.setAttribute?Ax:lf},cm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Cx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},cf=function(t,e){var n=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+s,n=n._next;s+=e.c}e.set(e.t,e.p,s,e)},hf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Rx=function(t,e,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(t,e,n),r=o},Px=function(t){for(var e=this._pt,n,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?Vl(this,e,"_pt"):e.dep||(n=1),e=s;return!n},Ix=function(t,e,n,s){s.mSet(t,e,s.m.call(s.tween,n,s.mt),s)},uf=function(t){for(var e=t._pt,n,s,r,o;e;){for(n=e._next,s=r;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:o)?e._prev._next=e:r=e,(e._next=s)?s._prev=e:o=e,e=n}t._pt=r},Gn=(function(){function i(e,n,s,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||cm,this.d=l||this,this.set=c||lf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=Ix,this.m=n,this.mt=r,this.tween=s},i})();Hn(Qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Ku[i]=1});ci.TweenMax=ci.TweenLite=Je;ci.TimelineLite=ci.TimelineMax=Rn;ke=new Rn({sortChildren:!1,defaults:la,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=nf;var gr=[],Ul={},Lx=[],Dp=0,Dx=0,Nu=function(t){return(Ul[t]||Lx).map(function(e){return e()})},Xu=function(){var t=Date.now(),e=[];t-Dp>2&&(Nu("matchMediaInit"),gr.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,c;for(a in s)o=Xi.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Nu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Dp=t,Nu("matchMedia"))},hm=(function(){function i(e,n){this.selector=n&&Gu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Dx++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,s,r){Xe(n)&&(r=s,s=n,n=Xe);var o=this,a=function(){var c=Ue,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Gu(r)),Ue=o,d=s.apply(o,arguments),Xe(d)&&o._r.push(d),Ue=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Xe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var s=Ue;Ue=null,n(this),Ue=s},t.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof Je&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,s){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Je)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),s)for(var o=gr.length;o--;)gr[o].id===this.id&&gr.splice(o,1)},t.revert=function(n){this.kill(n||{})},i})(),Nx=(function(){function i(e){this.contexts=[],this.scope=e,Ue&&Ue.data.push(this)}var t=i.prototype;return t.add=function(n,s,r){Yi(n)||(n={matches:n});var o=new hm(0,r||this.scope),a=o.conditions={},l,c,h;Ue&&!o.selector&&(o.selector=Ue.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(c in n)c==="all"?h=1:(l=Xi.matchMedia(n[c]),l&&(gr.indexOf(o)<0&&gr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Xu):l.addEventListener("change",Xu)));return h&&s(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i})(),zl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(s){return nm(s)})},timeline:function(t){return new Rn(t)},getTweensOf:function(t,e){return ke.getTweensOf(t,e)},getProperty:function(t,e,n,s){cn(t)&&(t=wi(t)[0]);var r=Hs(t||{}).get,o=n?Vp:Gp;return n==="native"&&(n=""),t&&(e?o((jn[e]&&jn[e].get||r)(t,e,n,s)):function(a,l,c){return o((jn[a]&&jn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=wi(t),t.length>1){var s=t.map(function(h){return In.quickSetter(h,e,n)}),r=s.length;return function(h){for(var d=r;d--;)s[d](h)}}t=t[0]||{};var o=jn[e],a=Hs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Jr._pt=0,d.init(t,n?h+n:h,Jr,0,[t]),d.render(1,d),Jr._pt&&hf(1,Jr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var s,r=In.to(t,hi((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=mr(t.ease,la.ease)),Cp(la,t||{})},config:function(t){return Cp(ni,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,s=t.plugins,r=t.defaults,o=t.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!jn[a]&&!ci[a]&&ca(e+" effect requires "+a+" plugin.")}),Pu[e]=function(a,l,c){return n(wi(a),hi(l||{},r),c)},o&&(Rn.prototype[e]=function(a,l,c){return this.add(Pu[e](a,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=mr(e)},parseEase:function(t,e){return arguments.length?mr(t,e):ce},getById:function(t){return ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Rn(t),s,r;for(n.smoothChildTiming=ei(t.smoothChildTiming),ke.remove(n),n._dp=0,n._time=n._tTime=ke._time,s=ke._first;s;)r=s._next,(e||!(!s._dur&&s instanceof Je&&s.vars.onComplete===s._targets[0]))&&qi(n,s,s._start-s._delay),s=r;return qi(ke,n,0),n},context:function(t,e){return t?new hm(t,e):Ue},matchMedia:function(t){return new Nx(t)},matchMediaRefresh:function(){return gr.forEach(function(t){var e=t.conditions,n,s;for(s in e)e[s]&&(e[s]=!1,n=1);n&&t.revert()})||Xu()},addEventListener:function(t,e){var n=Ul[t]||(Ul[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ul[t],s=n&&n.indexOf(e);s>=0&&n.splice(s,1)},utils:{wrap:ux,wrapYoyo:fx,distribute:Jp,random:Qp,snap:Kp,normalize:hx,getUnit:Sn,clamp:ox,splitColor:im,toArray:wi,selector:Gu,mapRange:tm,pipe:lx,unitize:cx,interpolate:dx,shuffle:Zp},install:Bp,effects:Pu,ticker:ti,updateRoot:Rn.updateRoot,plugins:jn,globalTimeline:ke,core:{PropTween:Gn,globals:kp,Tween:Je,Timeline:Rn,Animation:fa,getCache:Hs,_removeLinkedListItem:Vl,reverting:function(){return yn},context:function(t){return t&&Ue&&(Ue.data.push(t),t._ctx=Ue),Ue},suppressOverwrites:function(t){return qu=t}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return zl[i]=Je[i]});ti.add(Rn.updateRoot);Jr=zl.to({},{duration:0});var Ux=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Ox=function(t,e){var n=t._targets,s,r,o;for(s in e)for(r=n.length;r--;)o=t._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=Ux(o,s)),o&&o.modifier&&o.modifier(e[s],t,n[r],s))},Uu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,c;if(cn(r)&&(l={},Hn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Ox(a,r)}}}},In=zl.registerPlugin({name:"attr",init:function(t,e,n,s,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)yn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Uu("roundProps",Vu),Uu("modifiers"),Uu("snap",Kp))||zl;Je.version=Rn.version=In.version="3.15.0";Fp=1;Yu()&&to();var Fx=ce.Power0,Bx=ce.Power1,kx=ce.Power2,zx=ce.Power3,Hx=ce.Power4,Gx=ce.Linear,Vx=ce.Quad,Wx=ce.Cubic,Xx=ce.Quart,qx=ce.Quint,Yx=ce.Strong,$x=ce.Elastic,Zx=ce.Back,Jx=ce.SteppedEase,Kx=ce.Bounce,Qx=ce.Sine,jx=ce.Expo,tv=ce.Circ;var um,Ws,io,_f,br,ev,fm,xf,nv=function(){return typeof window<"u"},_s={},Mr=180/Math.PI,so=Math.PI/180,no=Math.atan2,dm=1e8,vf=/([A-Z])/g,iv=/(left|right|width|margin|padding|x)/i,sv=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},df=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},rv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ov=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},av=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},lv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Sm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Mm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},cv=function(t,e,n){return t.style[e]=n},hv=function(t,e,n){return t.style.setProperty(e,n)},uv=function(t,e,n){return t._gsap[e]=n},fv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},dv=function(t,e,n,s,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},pv=function(t,e,n,s,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ze="transform",ii=ze+"Origin",mv=function i(t,e){var n=this,s=this.target,r=s.style,o=s._gsap;if(t in _s&&r){if(this.tfm=this.tfm||{},t!=="transform")t=$i[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=gs(s,a)}):this.tfm[t]=o.x?o[t]:gs(s,t),t===ii&&(this.tfm.zOrigin=o.zOrigin);else return $i.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ii,e,"")),t=ze}(r||e)&&this.props.push(t,e,r[t])},bm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},gv=function(){var t=this.props,e=this.target,n=e.style,s=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(vf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=xf(),(!r||!r.isStart)&&!n[ze]&&(bm(n),s.zOrigin&&n[ii]&&(n[ii]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Tm=function(t,e){var n={target:t,props:[],revert:gv,save:mv};return t._gsap||In.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return n.save(s)}),n},wm,pf=function(t,e){var n=Ws.createElementNS?Ws.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ws.createElement(t);return n&&n.style?n:Ws.createElement(t)},ui=function i(t,e,n){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(vf,"-$1").toLowerCase())||s.getPropertyValue(e)||!n&&i(t,ro(e)||e,1)||""},pm="O,Moz,ms,Ms,Webkit".split(","),ro=function(t,e,n){var s=e||br,r=s.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(pm[o]+t in r););return o<0?null:(o===3?"ms":o>=0?pm[o]:"")+t},mf=function(){nv()&&window.document&&(um=window,Ws=um.document,io=Ws.documentElement,br=pf("div")||{style:{}},ev=pf("div"),ze=ro(ze),ii=ze+"Origin",br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wm=!!ro("perspective"),xf=In.core.reverting,_f=1)},mm=function(t){var e=t.ownerSVGElement,n=pf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),r;s.style.display="block",n.appendChild(s),io.appendChild(n);try{r=s.getBBox()}catch{}return n.removeChild(s),io.removeChild(n),r},gm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Em=function(t){var e,n;try{e=t.getBBox()}catch{e=mm(t),n=1}return e&&(e.width||e.height)||n||(e=mm(t)),e&&!e.width&&!e.x&&!e.y?{x:+gm(t,["x","cx","x1"])||0,y:+gm(t,["y","cy","y1"])||0,width:0,height:0}:e},Am=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Em(t))},qs=function(t,e){if(e){var n=t.style,s;e in _s&&e!==ii&&(e=ze),n.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(s==="--"?e:e.replace(vf,"-$1").toLowerCase())):n.removeAttribute(e)}},Xs=function(t,e,n,s,r,o){var a=new Gn(t._pt,e,n,0,1,o?Mm:Sm);return t._pt=a,a.b=s,a.e=r,t._props.push(n),a},_m={deg:1,rad:1,turn:1},_v={grid:1,flex:1},Ys=function i(t,e,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=br.style,l=iv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=s==="px",u=s==="%",m,_,p,g;if(s===o||!r||_m[s]||_m[o])return r;if(o!=="px"&&!f&&(r=i(t,e,n,"px")),g=t.getCTM&&Am(t),(u||o==="%")&&(_s[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],qe(u?r/m*d:r/100*m);if(a[l?"width":"height"]=d+(f?o:s),_=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ws||!_.appendChild)&&(_=Ws.body),p=_._gsap,p&&u&&p.width&&l&&p.time===ti.time&&!p.uncache)return qe(r/p.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+s,m=t[h],v?t.style[e]=v:qs(t,e)}else(u||o==="%")&&!_v[ui(_,"display")]&&(a.position=ui(t,"position")),_===t&&(a.position="static"),_.appendChild(br),m=br[h],_.removeChild(br),a.position="absolute";return l&&u&&(p=Hs(_),p.time=ti.time,p.width=_[h]),qe(f?m*r/d:m&&r?d/m*r:0)},gs=function(t,e,n,s){var r;return _f||mf(),e in $i&&e!=="transform"&&(e=$i[e],~e.indexOf(",")&&(e=e.split(",")[0])),_s[e]&&e!=="transform"?(r=ga(t,s),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:$l(ui(t,ii))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Yl[e]&&Yl[e](t,e,n)||ui(t,e)||tf(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ys(t,e,r,n)+n:r},xv=function(t,e,n,s){if(!n||n==="none"){var r=ro(e,t,1),o=r&&ui(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ui(t,"borderTopColor"))}var a=new Gn(this._pt,t.style,e,0,1,cf),l=0,c=0,h,d,f,u,m,_,p,g,v,w,y,T;if(a.b=n,a.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=ui(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(_=t.style[e],t.style[e]=s,s=ui(t,e)||s,_?t.style[e]=_:qs(t,e)),h=[n,s],nf(h),n=h[0],s=h[1],f=n.match(_r)||[],T=s.match(_r)||[],T.length){for(;d=_r.exec(s);)p=d[0],v=s.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),p.charAt(1)==="="&&(p=xr(u,p)+y),g=parseFloat(p),w=p.substr((g+"").length),l=_r.lastIndex-w.length,w||(w=w||ni.units[e]||y,l===s.length&&(s+=w,a.e+=w)),y!==w&&(u=Ys(t,e,_,w)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:g-u,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=e==="display"&&s==="none"?Mm:Sm;return Zu.test(s)&&(a.e=0),this._pt=a,a},xm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vv=function(t){var e=t.split(" "),n=e[0],s=e[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(t=n,n=s,s=t),e[0]=xm[n]||n,e[1]=xm[s]||s,e.join(" ")},yv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,s=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],_s[a]&&(l=1,a=a==="transformOrigin"?ii:ze),qs(n,a);l&&(qs(n,ze),o&&(o.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ga(n,1),o.uncache=1,bm(s)))}},Yl={clearProps:function(t,e,n,s,r){if(r.data!=="isFromStart"){var o=t._pt=new Gn(t._pt,e,n,0,0,yv);return o.u=s,o.pr=-10,o.tween=r,t._props.push(n),1}}},ma=[1,0,0,1,0,0],Cm={},Rm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},vm=function(t){var e=ui(t,ze);return Rm(e)?ma:e.substr(7).match($u).map(qe)},yf=function(t,e){var n=t._gsap||Hs(t),s=t.style,r=vm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ma:r):(r===ma&&!t.offsetParent&&t!==io&&!n.svg&&(l=s.display,s.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,io.appendChild(t)),r=vm(t),l?s.display=l:qs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):io.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},gf=function(t,e,n,s,r,o){var a=t._gsap,l=r||yf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],m=l[1],_=l[2],p=l[3],g=l[4],v=l[5],w=e.split(" "),y=parseFloat(w[0])||0,T=parseFloat(w[1])||0,E,x,b,C;n?l!==ma&&(x=u*p-m*_)&&(b=y*(p/x)+T*(-_/x)+(_*v-p*g)/x,C=y*(-m/x)+T*(u/x)-(u*v-m*g)/x,y=b,T=C):(E=Em(t),y=E.x+(~w[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(w[1]||w[0]).indexOf("%")?T/100*E.height:T)),s||s!==!1&&a.smooth?(g=y-c,v=T-h,a.xOffset=d+(g*u+v*_)-g,a.yOffset=f+(g*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!s,a.origin=e,a.originIsAbsolute=!!n,t.style[ii]="0px 0px",o&&(Xs(o,a,"xOrigin",c,y),Xs(o,a,"yOrigin",h,T),Xs(o,a,"xOffset",d,a.xOffset),Xs(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},ga=function(t,e){var n=t._gsap||new sf(t);if("x"in n&&!e&&!n.uncache)return n;var s=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ui(t,ii)||"0",h,d,f,u,m,_,p,g,v,w,y,T,E,x,b,C,P,N,D,G,I,z,X,F,tt,W,A,H,lt,Pt,Y,rt;return h=d=f=_=p=g=v=w=y=0,u=m=1,n.svg=!!(t.getCTM&&Am(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),s.scale=s.rotate=s.translate="none"),x=yf(t,n.svg),n.svg&&(n.uncache?(tt=t.getBBox(),c=n.xOrigin-tt.x+"px "+(n.yOrigin-tt.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),gf(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,E=n.yOrigin||0,x!==ma&&(N=x[0],D=x[1],G=x[2],I=x[3],h=z=x[4],d=X=x[5],x.length===6?(u=Math.sqrt(N*N+D*D),m=Math.sqrt(I*I+G*G),_=N||D?no(D,N)*Mr:0,v=G||I?no(G,I)*Mr+_:0,v&&(m*=Math.abs(Math.cos(v*so))),n.svg&&(h-=T-(T*N+E*G),d-=E-(T*D+E*I))):(rt=x[6],Pt=x[7],A=x[8],H=x[9],lt=x[10],Y=x[11],h=x[12],d=x[13],f=x[14],b=no(rt,lt),p=b*Mr,b&&(C=Math.cos(-b),P=Math.sin(-b),F=z*C+A*P,tt=X*C+H*P,W=rt*C+lt*P,A=z*-P+A*C,H=X*-P+H*C,lt=rt*-P+lt*C,Y=Pt*-P+Y*C,z=F,X=tt,rt=W),b=no(-G,lt),g=b*Mr,b&&(C=Math.cos(-b),P=Math.sin(-b),F=N*C-A*P,tt=D*C-H*P,W=G*C-lt*P,Y=I*P+Y*C,N=F,D=tt,G=W),b=no(D,N),_=b*Mr,b&&(C=Math.cos(b),P=Math.sin(b),F=N*C+D*P,tt=z*C+X*P,D=D*C-N*P,X=X*C-z*P,N=F,z=tt),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),u=qe(Math.sqrt(N*N+D*D+G*G)),m=qe(Math.sqrt(X*X+rt*rt)),b=no(z,X),v=Math.abs(b)>2e-4?b*Mr:0,y=Y?1/(Y<0?-Y:Y):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Rm(ui(t,ze)),F&&t.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=qe(u),n.scaleY=qe(m),n.rotation=qe(_)+a,n.rotationX=qe(p)+a,n.rotationY=qe(g)+a,n.skewX=v+a,n.skewY=w+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(s[ii]=$l(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?Mv:wm?Pm:Sv,n.uncache=0,n},$l=function(t){return(t=t.split(" "))[0]+" "+t[1]},ff=function(t,e,n){var s=Sn(e);return qe(parseFloat(e)+parseFloat(Ys(t,"x",n+"px",s)))+s},Sv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Pm(t,e)},yr="0deg",pa="0px",Sr=") ",Pm=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,w=n.zOrigin,y="",T=g==="auto"&&t&&t!==1||g===!0;if(w&&(d!==yr||h!==yr)){var E=parseFloat(h)*so,x=Math.sin(E),b=Math.cos(E),C;E=parseFloat(d)*so,C=Math.cos(E),o=ff(v,o,x*C*-w),a=ff(v,a,-Math.sin(E)*-w),l=ff(v,l,b*C*-w+w)}p!==pa&&(y+="perspective("+p+Sr),(s||r)&&(y+="translate("+s+"%, "+r+"%) "),(T||o!==pa||a!==pa||l!==pa)&&(y+=l!==pa||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Sr),c!==yr&&(y+="rotate("+c+Sr),h!==yr&&(y+="rotateY("+h+Sr),d!==yr&&(y+="rotateX("+d+Sr),(f!==yr||u!==yr)&&(y+="skew("+f+", "+u+Sr),(m!==1||_!==1)&&(y+="scale("+m+", "+_+Sr),v.style[ze]=y||"translate(0, 0)"},Mv=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,w=parseFloat(o),y=parseFloat(a),T,E,x,b,C;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=so,c*=so,T=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(h*=so,C=Math.tan(c-h),C=Math.sqrt(1+C*C),x*=C,b*=C,h&&(C=Math.tan(h),C=Math.sqrt(1+C*C),T*=C,E*=C)),T=qe(T),E=qe(E),x=qe(x),b=qe(b)):(T=d,b=f,E=x=0),(w&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(w=Ys(u,"x",o,"px"),y=Ys(u,"y",a,"px")),(m||_||p||g)&&(w=qe(w+m-(m*T+_*x)+p),y=qe(y+_-(m*E+_*b)+g)),(s||r)&&(C=u.getBBox(),w=qe(w+s/100*C.width),y=qe(y+r/100*C.height)),C="matrix("+T+","+E+","+x+","+b+","+w+","+y+")",u.setAttribute("transform",C),v&&(u.style[ze]=C)},bv=function(t,e,n,s,r){var o=360,a=cn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Mr:1),c=l-s,h=s+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*dm)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*dm)%o-~~(c/o)*o)),t._pt=f=new Gn(t._pt,e,n,s,c,rv),f.e=h,f.u="deg",t._props.push(n),f},ym=function(t,e){for(var n in e)t[n]=e[n];return t},Tv=function(t,e,n){var s=ym({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,m;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=ga(n,1),qs(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=ga(n,1),o[ze]=c);for(l in _s)c=s[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=Sn(c),m=Sn(h),d=u!==m?Ys(n,l,c,m):parseFloat(c),f=parseFloat(h),t._pt=new Gn(t._pt,a,l,d,f-d,df),t._pt.u=m||0,t._props.push(l));ym(a,s)};Hn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",s="Bottom",r="Left",o=(t<3?[e,n,s,r]:[e+r,e+n,s+n,s+r]).map(function(a){return t<2?i+a:"border"+a+i});Yl[t>1?"border"+i:i]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(m){return gs(a,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(m,_){return u[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,u,d)}});var Sf={name:"css",register:mf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,s,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,u,m,_,p,g,v,w,y,T,E,x,b,C;_f||mf(),this.styles=this.styles||Tm(t),b=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(jn[_]&&of(_,e,n,s,t,r)))){if(u=typeof h,m=Yl[_],u==="function"&&(h=h.call(n,s,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=eo(h)),m)m(this,t,_,h,n)&&(x=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ps.lastIndex=0,ps.test(c)||(p=Sn(c),g=Sn(h),g?p!==g&&(c=Ys(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,s,r,0,0,_),o.push(_),b.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,s,t,r):l[_],cn(c)&&~c.indexOf("random(")&&(c=eo(c)),Sn(c+"")||c==="auto"||(c+=ni.units[_]||Sn(gs(t,_))||""),(c+"").charAt(1)==="="&&(c=gs(t,_))):c=gs(t,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in $i&&(_==="autoAlpha"&&(f===1&&gs(t,"visibility")==="hidden"&&d&&(f=0),b.push("visibility",0,a.visibility),Xs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=$i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in _s,w){if(this.styles.save(_),C=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=ui(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var P=t.style.perspective;t.style.perspective=h,h=ui(t,"perspective"),P?t.style.perspective=P:qs(t,"perspective")}d=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||ga(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new Gn(this._pt,a,ze,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new Gn(this._pt,T,"scaleY",T.scaleY,(v?xr(T.scaleY,v+d):d)-T.scaleY||0,df),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(ii,0,a[ii]),h=vv(h),T.svg?gf(t,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&Xs(this,T,"zOrigin",T.zOrigin,g),Xs(this,a,_,$l(c),$l(h)));continue}else if(_==="svgOrigin"){gf(t,h,1,E,0,this);continue}else if(_ in Cm){bv(this,T,_,f,v?xr(f,v+h):h);continue}else if(_==="smoothOrigin"){Xs(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Tv(this,h,t);continue}}else _ in a||(_=ro(_)||_);if(w||(d||d===0)&&(f||f===0)&&!sv.test(h)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),g=Sn(h)||(_ in ni.units?ni.units[_]:p),p!==g&&(f=Ys(t,_,c,g)),this._pt=new Gn(this._pt,w?T:a,_,f,(v?xr(f,v+d):d)-f,!w&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?lv:df),this._pt.u=g||0,w&&C!==h?(this._pt.b=c,this._pt.e=C,this._pt.r=av):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=ov);else if(_ in a)xv.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,s,r);else if(_!=="parseTransform"){Gl(_,h);continue}w||(_ in a?b.push(_,0,a[_]):typeof t[_]=="function"?b.push(_,2,t[_]()):b.push(_,1,c||t[_])),o.push(_)}}x&&uf(this)},render:function(t,e){if(e.tween._time||!xf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:gs,aliases:$i,getSetter:function(t,e,n){var s=$i[e];return s&&s.indexOf(",")<0&&(e=s),e in _s&&e!==ii&&(t._gsap.x||gs(t,"x"))?n&&fm===n?e==="scale"?fv:uv:(fm=n||{})&&(e==="scale"?dv:pv):t.style&&!Hl(t.style[e])?cv:~e.indexOf("-")?hv:ql(t,e)},core:{_removeProperty:qs,_getMatrix:yf}};In.utils.checkPrefix=ro;In.core.getStyleSaver=Tm;(function(i,t,e,n){var s=Hn(i+","+t+","+e,function(r){_s[r]=1});Hn(t,function(r){ni.units[r]="deg",Cm[r]=1}),$i[s[13]]=i+","+t,Hn(n,function(r){var o=r.split(":");$i[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ni.units[i]="px"});In.registerPlugin(Sf);var Re=In.registerPlugin(Sf)||In,aw=Re.core.Tween;function Im(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function wv(i,t,e){return t&&Im(i.prototype,t),e&&Im(i,e),i}var Mn,Kl,Ev,fi,$s,Zs,ao,Dm,Tr,lo,Nm,xs,Ui,Um,Om=function(){return Mn||typeof window<"u"&&(Mn=window.gsap)&&Mn.registerPlugin&&Mn},Fm=1,oo=[],Qt=[],Oi=[],xa=Date.now,Mf=function(t,e){return e},Av=function(){var t=lo.core,e=t.bridge||{},n=t._scrollers,s=t._proxies;n.push.apply(n,Qt),s.push.apply(s,Oi),Qt=n,Oi=s,Mf=function(o,a){return e[o](a)}},ys=function(t,e){return~Oi.indexOf(t)&&Oi[Oi.indexOf(t)+1][e]},va=function(t){return!!~Nm.indexOf(t)},Wn=function(t,e,n,s,r){return t.addEventListener(e,n,{passive:s!==!1,capture:!!r})},Vn=function(t,e,n,s){return t.removeEventListener(e,n,!!s)},Zl="scrollLeft",Jl="scrollTop",bf=function(){return xs&&xs.isPressed||Qt.cache++},Ql=function(t,e){var n=function s(r){if(r||r===0){Fm&&(fi.history.scrollRestoration="manual");var o=xs&&xs.isPressed;r=s.v=Math.round(r)||(xs&&xs.iOS?1:0),t(r),s.cacheID=Qt.cache,o&&Mf("ss",r)}else(e||Qt.cache!==s.cacheID||Mf("ref"))&&(s.cacheID=Qt.cache,s.v=t());return s.v+s.offset};return n.offset=0,t&&n},Ln={s:Zl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ql(function(i){return arguments.length?fi.scrollTo(i,nn.sc()):fi.pageXOffset||$s[Zl]||Zs[Zl]||ao[Zl]||0})},nn={s:Jl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ln,sc:Ql(function(i){return arguments.length?fi.scrollTo(Ln.sc(),i):fi.pageYOffset||$s[Jl]||Zs[Jl]||ao[Jl]||0})},Xn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Mn.utils.toArray)(t)[0]||(typeof t=="string"&&Mn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Cv=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},vs=function(t,e){var n=e.s,s=e.sc;va(t)&&(t=$s.scrollingElement||Zs);var r=Qt.indexOf(t),o=s===nn.sc?1:2;!~r&&(r=Qt.push(t)-1),Qt[r+o]||Wn(t,"scroll",bf);var a=Qt[r+o],l=a||(Qt[r+o]=Ql(ys(t,n),!0)||(va(t)?s:Ql(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Mn.getProperty(t,"scrollBehavior")==="smooth"),l},jl=function(t,e,n){var s=t,r=t,o=xa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=xa();_||p-o>l?(r=s,s=m,a=o,o=p):n?s+=m:s=r+(m-r)/(p-a)*(o-a)},d=function(){r=s=n?0:s,a=o=0},f=function(m){var _=a,p=r,g=xa();return(m||m===0)&&m!==s&&h(m),o===a||g-a>c?0:(s+(n?p:-p))/((n?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:f}},_a=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Lm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Bm=function(){lo=Mn.core.globals().ScrollTrigger,lo&&lo.core&&Av()},km=function(t){return Mn=t||Om(),!Kl&&Mn&&typeof document<"u"&&document.body&&(fi=window,$s=document,Zs=$s.documentElement,ao=$s.body,Nm=[fi,$s,Zs,ao],Ev=Mn.utils.clamp,Um=Mn.core.context||function(){},Tr="onpointerenter"in ao?"pointer":"mouse",Dm=Ye.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ui=Ye.eventTypes=("ontouchstart"in Zs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Zs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Fm=0},500),Kl=1),lo||Bm(),Kl};Ln.op=nn;Qt.cache=0;var Ye=(function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){Kl||km(Mn)||console.warn("Please gsap.registerPlugin(Observer)"),lo||Bm();var s=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,_=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,w=n.onPress,y=n.onRelease,T=n.onRight,E=n.onLeft,x=n.onUp,b=n.onDown,C=n.onChangeX,P=n.onChangeY,N=n.onChange,D=n.onToggleX,G=n.onToggleY,I=n.onHover,z=n.onHoverEnd,X=n.onMove,F=n.ignoreCheck,tt=n.isNormalizer,W=n.onGestureStart,A=n.onGestureEnd,H=n.onWheel,lt=n.onEnable,Pt=n.onDisable,Y=n.onClick,rt=n.scrollSpeed,St=n.capture,Tt=n.allowClicks,pt=n.lockAxis,Ot=n.onLockAxis;this.target=a=Xn(a)||Zs,this.vars=n,u&&(u=Mn.utils.toArray(u)),s=s||1e-9,r=r||0,m=m||1,rt=rt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(fi.getComputedStyle(ao).lineHeight)||22);var ye,Ct,qt,Nt,kt,de,he,J=this,ne=0,Qe=0,be=n.passive||!h&&n.passive!==!1,le=vs(a,Ln),Ge=vs(a,nn),Ze=le(),O=Ge(),me=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ui[0]==="pointerdown",ue=va(a),Wt=a.ownerDocument||$s,mt=[0,0,0],pe=[0,0,0],Ut=0,zt=function(){return Ut=xa()},R=function(xt,st){return(J.event=xt)&&u&&Cv(xt.target,u)||st&&me&&xt.pointerType!=="touch"||F&&F(xt,st)},S=function(){J._vx.reset(),J._vy.reset(),Ct.pause(),d&&d(J)},k=function(){var xt=J.deltaX=Lm(mt),st=J.deltaY=Lm(pe),et=Math.abs(xt)>=s,yt=Math.abs(st)>=s;N&&(et||yt)&&N(J,xt,st,mt,pe),et&&(T&&J.deltaX>0&&T(J),E&&J.deltaX<0&&E(J),C&&C(J),D&&J.deltaX<0!=ne<0&&D(J),ne=J.deltaX,mt[0]=mt[1]=mt[2]=0),yt&&(b&&J.deltaY>0&&b(J),x&&J.deltaY<0&&x(J),P&&P(J),G&&J.deltaY<0!=Qe<0&&G(J),Qe=J.deltaY,pe[0]=pe[1]=pe[2]=0),(Nt||qt)&&(X&&X(J),qt&&(p&&qt===1&&p(J),v&&v(J),qt=0),Nt=!1),de&&!(de=!1)&&Ot&&Ot(J),kt&&(H(J),kt=!1),ye=0},ot=function(xt,st,et){mt[et]+=xt,pe[et]+=st,J._vx.update(xt),J._vy.update(st),c?ye||(ye=requestAnimationFrame(k)):k()},it=function(xt,st){pt&&!he&&(J.axis=he=Math.abs(xt)>Math.abs(st)?"x":"y",de=!0),he!=="y"&&(mt[2]+=xt,J._vx.update(xt,!0)),he!=="x"&&(pe[2]+=st,J._vy.update(st,!0)),c?ye||(ye=requestAnimationFrame(k)):k()},dt=function(xt){if(!R(xt,1)){xt=_a(xt,h);var st=xt.clientX,et=xt.clientY,yt=st-J.x,nt=et-J.y,Et=J.isDragging;J.x=st,J.y=et,(Et||(yt||nt)&&(Math.abs(J.startX-st)>=r||Math.abs(J.startY-et)>=r))&&(qt||(qt=Et?2:1),Et||(J.isDragging=!0),it(yt,nt))}},vt=J.onPress=function(at){R(at,1)||at&&at.button||(J.axis=he=null,Ct.pause(),J.isPressed=!0,at=_a(at),ne=Qe=0,J.startX=J.x=at.clientX,J.startY=J.y=at.clientY,J._vx.reset(),J._vy.reset(),Wn(tt?a:Wt,Ui[1],dt,be,!0),J.deltaX=J.deltaY=0,w&&w(J))},V=J.onRelease=function(at){if(!R(at,1)){Vn(tt?a:Wt,Ui[1],dt,!0);var xt=!isNaN(J.y-J.startY),st=J.isDragging,et=st&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),yt=_a(at);!et&&xt&&(J._vx.reset(),J._vy.reset(),h&&Tt&&Mn.delayedCall(.08,function(){if(xa()-Ut>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Wt.createEvent){var nt=Wt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,fi,1,yt.screenX,yt.screenY,yt.clientX,yt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(nt)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,d&&st&&!tt&&Ct.restart(!0),qt&&k(),g&&st&&g(J),y&&y(J,et)}},j=function(xt){return xt.touches&&xt.touches.length>1&&(J.isGesturing=!0)&&W(xt,J.isDragging)},ft=function(){return(J.isGesturing=!1)||A(J)},L=function(xt){if(!R(xt)){var st=le(),et=Ge();ot((st-Ze)*rt,(et-O)*rt,1),Ze=st,O=et,d&&Ct.restart(!0)}},Q=function(xt){if(!R(xt)){xt=_a(xt,h),H&&(kt=!0);var st=(xt.deltaMode===1?l:xt.deltaMode===2?fi.innerHeight:1)*m;ot(xt.deltaX*st,xt.deltaY*st,0),d&&!tt&&Ct.restart(!0)}},K=function(xt){if(!R(xt)){var st=xt.clientX,et=xt.clientY,yt=st-J.x,nt=et-J.y;J.x=st,J.y=et,Nt=!0,d&&Ct.restart(!0),(yt||nt)&&it(yt,nt)}},gt=function(xt){J.event=xt,I(J)},ct=function(xt){J.event=xt,z(J)},_t=function(xt){return R(xt)||_a(xt,h)&&Y(J)};Ct=J._dc=Mn.delayedCall(f||.25,S).pause(),J.deltaX=J.deltaY=0,J._vx=jl(0,50,!0),J._vy=jl(0,50,!0),J.scrollX=le,J.scrollY=Ge,J.isDragging=J.isGesturing=J.isPressed=!1,Um(this),J.enable=function(at){return J.isEnabled||(Wn(ue?Wt:a,"scroll",bf),o.indexOf("scroll")>=0&&Wn(ue?Wt:a,"scroll",L,be,St),o.indexOf("wheel")>=0&&Wn(a,"wheel",Q,be,St),(o.indexOf("touch")>=0&&Dm||o.indexOf("pointer")>=0)&&(Wn(a,Ui[0],vt,be,St),Wn(Wt,Ui[2],V),Wn(Wt,Ui[3],V),Tt&&Wn(a,"click",zt,!0,!0),Y&&Wn(a,"click",_t),W&&Wn(Wt,"gesturestart",j),A&&Wn(Wt,"gestureend",ft),I&&Wn(a,Tr+"enter",gt),z&&Wn(a,Tr+"leave",ct),X&&Wn(a,Tr+"move",K)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Nt=qt=!1,J._vx.reset(),J._vy.reset(),Ze=le(),O=Ge(),at&&at.type&&vt(at),lt&&lt(J)),J},J.disable=function(){J.isEnabled&&(oo.filter(function(at){return at!==J&&va(at.target)}).length||Vn(ue?Wt:a,"scroll",bf),J.isPressed&&(J._vx.reset(),J._vy.reset(),Vn(tt?a:Wt,Ui[1],dt,!0)),Vn(ue?Wt:a,"scroll",L,St),Vn(a,"wheel",Q,St),Vn(a,Ui[0],vt,St),Vn(Wt,Ui[2],V),Vn(Wt,Ui[3],V),Vn(a,"click",zt,!0),Vn(a,"click",_t),Vn(Wt,"gesturestart",j),Vn(Wt,"gestureend",ft),Vn(a,Tr+"enter",gt),Vn(a,Tr+"leave",ct),Vn(a,Tr+"move",K),J.isEnabled=J.isPressed=J.isDragging=!1,Pt&&Pt(J))},J.kill=J.revert=function(){J.disable();var at=oo.indexOf(J);at>=0&&oo.splice(at,1),xs===J&&(xs=0)},oo.push(J),tt&&va(a)&&(xs=J),J.enable(_)},wv(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Ye.version="3.15.0";Ye.create=function(i){return new Ye(i)};Ye.register=km;Ye.getAll=function(){return oo.slice()};Ye.getById=function(i){return oo.filter(function(t){return t.vars.id===i})[0]};Om()&&Mn.registerPlugin(Ye);var Rt,fo,ee,Se,mi,xe,Ff,mc,Da,Ea,Sa,tc,Dn,xc,Pf,Yn,zm,Hm,po,ig,Tf,sg,qn,If,rg,og,Js,Lf,Bf,mo,kf,Aa,Df,wf,ec=1,Nn=Date.now,Ef=Nn(),Ci=0,Ma=0,Gm=function(t,e,n){var s=pi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=s,s?t.substr(6,t.length-7):t},Vm=function(t,e){return e&&(!pi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Rv=function i(){return Ma&&requestAnimationFrame(i)},Wm=function(){return xc=1},Xm=function(){return xc=0},Zi=function(t){return t},ba=function(t){return Math.round(t*1e5)/1e5||0},ag=function(){return typeof window<"u"},lg=function(){return Rt||ag()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},Pr=function(t){return!!~Ff.indexOf(t)},cg=function(t){return(t==="Height"?kf:ee["inner"+t])||mi["client"+t]||xe["client"+t]},hg=function(t){return ys(t,"getBoundingClientRect")||(Pr(t)?function(){return pc.width=ee.innerWidth,pc.height=kf,pc}:function(){return Ss(t)})},Pv=function(t,e,n){var s=n.d,r=n.d2,o=n.a;return(o=ys(t,"getBoundingClientRect"))?function(){return o()[s]}:function(){return(e?cg(r):t["client"+r])||0}},Iv=function(t,e){return!e||~Oi.indexOf(t)?hg(t):function(){return pc}},Ji=function(t,e){var n=e.s,s=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+s)&&(o=ys(t,n))?o()-hg(t)()[r]:Pr(t)?(mi[n]||xe[n])-cg(s):t[n]-t["offset"+s])},nc=function(t,e){for(var n=0;n<po.length;n+=3)(!e||~e.indexOf(po[n+1]))&&t(po[n],po[n+1],po[n+2])},pi=function(t){return typeof t=="string"},Un=function(t){return typeof t=="function"},Ta=function(t){return typeof t=="number"},wr=function(t){return typeof t=="object"},ya=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},co=function(t,e,n){if(t.enabled){var s=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);s&&s.totalTime&&(t.callbackAnimation=s)}},ho=Math.abs,ug="left",fg="top",zf="right",Hf="bottom",Ar="width",Cr="height",Ca="Right",Ra="Left",Pa="Top",Ia="Bottom",sn="padding",Ei="margin",_o="Width",Gf="Height",hn="px",Ai=function(t){return ee.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Lv=function(t){var e=Ai(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},qm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ss=function(t,e){var n=e&&Ai(t)[Pf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),s=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),s},gc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},dg=function(t){var e=[],n=t.labels,s=t.duration(),r;for(r in n)e.push(n[r]/s);return e},Dv=function(t){return function(e){return Rt.utils.snap(dg(t),e)}},Vf=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(s,r){return s-r});return n?function(s,r,o){o===void 0&&(o=.001);var a;if(!r)return e(s);if(r>0){for(s-=o,a=0;a<n.length;a++)if(n[a]>=s)return n[a];return n[a-1]}else for(a=n.length,s+=o;a--;)if(n[a]<=s)return n[a];return n[0]}:function(s,r,o){o===void 0&&(o=.001);var a=e(s);return!r||Math.abs(a-s)<o||a-s<0==r<0?a:e(r<0?s-t:s+t)}},Nv=function(t){return function(e,n){return Vf(dg(t))(e,n.direction)}},ic=function(t,e,n,s){return n.split(",").forEach(function(r){return t(e,r,s)})},mn=function(t,e,n,s,r){return t.addEventListener(e,n,{passive:!s,capture:!!r})},pn=function(t,e,n,s){return t.removeEventListener(e,n,!!s)},sc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Ym={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rc={toggleActions:"play",anticipatePin:0},_c={top:0,left:0,center:.5,bottom:1,right:1},hc=function(t,e){if(pi(t)){var n=t.indexOf("="),s=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(s*=e/100),t=t.substr(0,n-1)),t=s+(t in _c?_c[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},oc=function(t,e,n,s,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,m=Se.createElement("div"),_=Pr(n)||ys(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?xe:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,w=v?c:h,y="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(s===nn?zf:Hf)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+s.op.d2],uc(m,0,s,v),m},uc=function(t,e,n,s){var r={display:"block"},o=n[s?"os2":"p2"],a=n[s?"p2":"os2"];t._isFlipped=s,r[n.a+"Percent"]=s?-100:0,r[n.a]=s?"1px":0,r["border"+o+_o]=1,r["border"+a+_o]=0,r[n.p]=e+"px",Rt.set(t,r)},jt=[],Nf={},Na,$m=function(){return Nn()-Ci>34&&(Na||(Na=requestAnimationFrame(Ms)))},uo=function(){(!qn||!qn.isPressed||qn.startX>xe.clientWidth)&&(Qt.cache++,qn?Na||(Na=requestAnimationFrame(Ms)):Ms(),Ci||Lr("scrollStart"),Ci=Nn())},Af=function(){og=ee.innerWidth,rg=ee.innerHeight},wa=function(t){Qt.cache++,(t===!0||!Dn&&!sg&&!Se.fullscreenElement&&!Se.webkitFullscreenElement&&(!If||og!==ee.innerWidth||Math.abs(ee.innerHeight-rg)>ee.innerHeight*.25))&&mc.restart(!0)},Ir={},Uv=[],pg=function i(){return pn(Gt,"scrollEnd",i)||Er(!0)},Lr=function(t){return Ir[t]&&Ir[t].map(function(e){return e()})||Uv},di=[],mg=function(t){for(var e=0;e<di.length;e+=5)(!t||di[e+4]&&di[e+4].query===t)&&(di[e].style.cssText=di[e+1],di[e].getBBox&&di[e].setAttribute("transform",di[e+2]||""),di[e+3].uncache=1)},gg=function(){return Qt.forEach(function(t){return Un(t)&&++t.cacheID&&(t.rec=t())})},Wf=function(t,e){var n;for(Yn=0;Yn<jt.length;Yn++)n=jt[Yn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Aa=!0,e&&mg(e),e||Lr("revert")},_g=function(t,e){Qt.cache++,(e||!$n)&&Qt.forEach(function(n){return Un(n)&&n.cacheID++&&(n.rec=0)}),pi(t)&&(ee.history.scrollRestoration=Bf=t)},$n,Rr=0,Zm,Ov=function(){if(Zm!==Rr){var t=Zm=Rr;requestAnimationFrame(function(){return t===Rr&&Er(!0)})}},xg=function(){xe.appendChild(mo),kf=!qn&&mo.offsetHeight||ee.innerHeight,xe.removeChild(mo)},Jm=function(t){return Da(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Er=function(t,e){if(mi=Se.documentElement,xe=Se.body,Ff=[ee,Se,mi,xe],Ci&&!t&&!Aa){mn(Gt,"scrollEnd",pg);return}xg(),$n=Gt.isRefreshing=!0,Aa||gg();var n=Lr("refreshInit");ig&&Gt.sort(),e||Wf(),Qt.forEach(function(s){Un(s)&&(s.smooth&&(s.target.style.scrollBehavior="auto"),s(0))}),jt.slice(0).forEach(function(s){return s.refresh()}),Aa=!1,jt.forEach(function(s){if(s._subPinOffset&&s.pin){var r=s.vars.horizontal?"offsetWidth":"offsetHeight",o=s.pin[r];s.revert(!0,1),s.adjustPinSpacing(s.pin[r]-o),s.refresh()}}),Df=1,Jm(!0),jt.forEach(function(s){var r=Ji(s.scroller,s._dir),o=s.vars.end==="max"||s._endClamp&&s.end>r,a=s._startClamp&&s.start>=r;(o||a)&&s.setPositions(a?r-1:s.start,o?Math.max(a?r:s.start+1,r):s.end,!0)}),Jm(!1),Df=0,n.forEach(function(s){return s&&s.render&&s.render(-1)}),Qt.forEach(function(s){Un(s)&&(s.smooth&&requestAnimationFrame(function(){return s.target.style.scrollBehavior="smooth"}),s.rec&&s(s.rec))}),_g(Bf,1),mc.pause(),Rr++,$n=2,Ms(2),jt.forEach(function(s){return Un(s.vars.onRefresh)&&s.vars.onRefresh(s)}),$n=Gt.isRefreshing=!1,Lr("refresh")},Uf=0,fc=1,La,Ms=function(t){if(t===2||!$n&&!Aa){Gt.isUpdating=!0,La&&La.update(0);var e=jt.length,n=Nn(),s=n-Ef>=50,r=e&&jt[0].scroll();if(fc=Uf>r?-1:1,$n||(Uf=r),s&&(Ci&&!xc&&n-Ci>200&&(Ci=0,Lr("scrollEnd")),Sa=Ef,Ef=n),fc<0){for(Yn=e;Yn-- >0;)jt[Yn]&&jt[Yn].update(0,s);fc=1}else for(Yn=0;Yn<e;Yn++)jt[Yn]&&jt[Yn].update(0,s);Gt.isUpdating=!1}Na=0},Of=[ug,fg,Hf,zf,Ei+Ia,Ei+Ca,Ei+Pa,Ei+Ra,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],dc=Of.concat([Ar,Cr,"boxSizing","max"+_o,"max"+Gf,"position",Ei,sn,sn+Pa,sn+Ca,sn+Ia,sn+Ra]),Fv=function(t,e,n){go(n);var s=t._gsap;if(s.spacerIsNative)go(s.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Cf=function(t,e,n,s){if(!t._gsap.swappedIn){for(var r=Of.length,o=e.style,a=t.style,l;r--;)l=Of[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Hf]=a[zf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ar]=gc(t,Ln)+hn,o[Cr]=gc(t,nn)+hn,o[sn]=a[Ei]=a[fg]=a[ug]="0",go(s),a[Ar]=a["max"+_o]=n[Ar],a[Cr]=a["max"+Gf]=n[Cr],a[sn]=n[sn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Bv=/([A-Z])/g,go=function(t){if(t){var e=t.t.style,n=t.length,s=0,r,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;s<n;s+=2)o=t[s+1],r=t[s],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Bv,"-$1").toLowerCase())}},ac=function(t){for(var e=dc.length,n=t.style,s=[],r=0;r<e;r++)s.push(dc[r],n[dc[r]]);return s.t=t,s},kv=function(t,e,n){for(var s=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],s.push(a,a in e?e[a]:t[o+1]);return s.t=t.t,s},pc={left:0,top:0},Km=function(t,e,n,s,r,o,a,l,c,h,d,f,u,m){Un(t)&&(t=t(l)),pi(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?hc("0"+t.substr(3),n):0));var _=u?u.time():0,p,g,v;if(u&&u.seek(0),isNaN(t)||(t=+t),Ta(t))u&&(t=Rt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&uc(a,n,s,!0);else{Un(e)&&(e=e(l));var w=(t||"0").split(" "),y,T,E,x;v=Xn(e,l)||xe,y=Ss(v)||{},(!y||!y.left&&!y.top)&&Ai(v).display==="none"&&(x=v.style.display,v.style.display="block",y=Ss(v),x?v.style.display=x:v.style.removeProperty("display")),T=hc(w[0],y[s.d]),E=hc(w[1]||"0",n),t=y[s.p]-c[s.p]-h+T+r-E,a&&uc(a,E,s,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var b=t+n,C=o._isStart;p="scroll"+s.d2,uc(o,b,s,C&&b>20||!C&&(d?Math.max(xe[p],mi[p]):o.parentNode[p])<=b+1),d&&(c=Ss(a),d&&(o.style[s.op.p]=c[s.op.p]-s.op.m-o._offset+hn))}return u&&v&&(p=Ss(v),u.seek(f),g=Ss(v),u._caScrollDist=p[s.p]-g[s.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},zv=/(webkit|moz|length|cssText|inset)/i,Qm=function(t,e,n,s){if(t.parentNode!==e){var r=t.style,o,a;if(e===xe){t._stOrig=r.cssText,a=Ai(t);for(o in a)!+o&&!zv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=s}else r.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},vg=function(t,e,n){var s=e,r=s;return function(o){var a=Math.round(t());return a!==s&&a!==r&&Math.abs(a-s)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=s,s=Math.round(o),s}},lc=function(t,e,n){var s={};s[e.p]="+="+n,Rt.set(t,s)},jm=function(t,e){var n=vs(t,e),s="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,m={};c=c||n();var _=vg(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[s]=a,l.inherit=!1,l.modifiers=m,m[s]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Qt.cache++,o.tween&&Ms()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Rt.to(t,l),f};return t[s]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},mn(t,"wheel",n.wheelHandler),Gt.isTouch&&mn(t,"touchmove",n.wheelHandler),r},Gt=(function(){function i(e,n){fo||i.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Lf(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,s){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ma){this.update=this.refresh=this.kill=Zi;return}n=qm(pi(n)||Ta(n)||n.nodeType?{trigger:n}:n,rc);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,m=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,g=r.onScrubComplete,v=r.onSnapComplete,w=r.once,y=r.snap,T=r.pinReparent,E=r.pinSpacer,x=r.containerAnimation,b=r.fastScrollEnd,C=r.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ln:nn,N=!d&&d!==0,D=Xn(n.scroller||ee),G=Rt.core.getCache(D),I=Pr(D),z=("pinType"in n?n.pinType:ys(D,"pinType")||I&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=N&&n.toggleActions.split(" "),tt="markers"in n?n.markers:rc.markers,W=I?0:parseFloat(Ai(D)["border"+P.p2+_o])||0,A=this,H=n.onRefreshInit&&function(){return n.onRefreshInit(A)},lt=Pv(D,I,P),Pt=Iv(D,I),Y=0,rt=0,St=0,Tt=vs(D,P),pt,Ot,ye,Ct,qt,Nt,kt,de,he,J,ne,Qe,be,le,Ge,Ze,O,me,ue,Wt,mt,pe,Ut,zt,R,S,k,ot,it,dt,vt,V,j,ft,L,Q,K,gt,ct;if(A._startClamp=A._endClamp=!1,A._dir=P,p*=45,A.scroller=D,A.scroll=x?x.time.bind(x):Tt,Ct=Tt(),A.vars=n,s=s||n.animation,"refreshPriority"in n&&(ig=1,n.refreshPriority===-9999&&(La=A)),G.tweenScroll=G.tweenScroll||{top:jm(D,nn),left:jm(D,Ln)},A.tweenTo=pt=G.tweenScroll[P.p],A.scrubDuration=function(et){j=Ta(et)&&et,j?V?V.duration(et):V=Rt.to(s,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return g&&g(A)}}):(V&&V.progress(1).kill(),V=0)},s&&(s.vars.lazy=!1,s._initted&&!A.isReverted||s.vars.immediateRender!==!1&&n.immediateRender!==!1&&s.duration()&&s.render(0,!0,!0),A.animation=s.pause(),s.scrollTrigger=A,A.scrubDuration(d),dt=0,l||(l=s.vars.id)),y&&((!wr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xe.style&&Rt.set(I?[xe,mi]:D,{scrollBehavior:"auto"}),Qt.forEach(function(et){return Un(et)&&et.target===(I?Se.scrollingElement||mi:D)&&(et.smooth=!1)}),ye=Un(y.snapTo)?y.snapTo:y.snapTo==="labels"?Dv(s):y.snapTo==="labelsDirectional"?Nv(s):y.directional!==!1?function(et,yt){return Vf(y.snapTo)(et,Nn()-rt<500?0:yt.direction)}:Rt.utils.snap(y.snapTo),ft=y.duration||{min:.1,max:2},ft=wr(ft)?Ea(ft.min,ft.max):Ea(ft,ft),L=Rt.delayedCall(y.delay||j/2||.1,function(){var et=Tt(),yt=Nn()-rt<500,nt=pt.tween;if((yt||Math.abs(A.getVelocity())<10)&&!nt&&!xc&&Y!==et){var Et=(et-Nt)/le,ie=s&&!N?s.totalProgress():Et,Zt=yt?0:(ie-vt)/(Nn()-Sa)*1e3||0,De=Rt.utils.clamp(-Et,1-Et,ho(Zt/2)*Zt/.185),je=Et+(y.inertia===!1?0:De),Ne,Te,_e=y,on=_e.onStart,we=_e.onInterrupt,En=_e.onComplete;if(Ne=ye(je,A),Ta(Ne)||(Ne=je),Te=Math.max(0,Math.round(Nt+Ne*le)),et<=kt&&et>=Nt&&Te!==et){if(nt&&!nt._initted&&nt.data<=ho(Te-et))return;y.inertia===!1&&(De=Ne-Et),pt(Te,{duration:ft(ho(Math.max(ho(je-ie),ho(Ne-ie))*.185/Zt/.05||0)),ease:y.ease||"power3",data:ho(Te-et),onInterrupt:function(){return L.restart(!0)&&we&&co(A,we)},onComplete:function(){A.update(),Y=Tt(),s&&!N&&(V?V.resetTo("totalProgress",Ne,s._tTime/s._tDur):s.progress(Ne)),dt=vt=s&&!N?s.totalProgress():A.progress,v&&v(A),En&&co(A,En)}},et,De*le,Te-et-De*le),on&&co(A,on,pt.tween)}}else A.isActive&&Y!==et&&L.restart(!0)}).pause()),l&&(Nf[l]=A),f=A.trigger=Xn(f||u!==!0&&u),ct=f&&f._gsap&&f._gsap.stRevert,ct&&(ct=ct(A)),u=u===!0?f:Xn(u),pi(a)&&(a={targets:f,className:a}),u&&(m===!1||m===Ei||(m=!m&&u.parentNode&&u.parentNode.style&&Ai(u.parentNode).display==="flex"?!1:sn),A.pin=u,Ot=Rt.core.getCache(u),Ot.spacer?Ge=Ot.pinState:(E&&(E=Xn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ot.spacerIsNative=!!E,E&&(Ot.spacerState=ac(E))),Ot.spacer=me=E||Se.createElement("div"),me.classList.add("pin-spacer"),l&&me.classList.add("pin-spacer-"+l),Ot.pinState=Ge=ac(u)),n.force3D!==!1&&Rt.set(u,{force3D:!0}),A.spacer=me=Ot.spacer,it=Ai(u),zt=it[m+P.os2],Wt=Rt.getProperty(u),mt=Rt.quickSetter(u,P.a,hn),Cf(u,me,it),O=ac(u)),tt){Qe=wr(tt)?qm(tt,Ym):Ym,J=oc("scroller-start",l,D,P,Qe,0),ne=oc("scroller-end",l,D,P,Qe,0,J),ue=J["offset"+P.op.d2];var _t=Xn(ys(D,"content")||D);de=this.markerStart=oc("start",l,_t,P,Qe,ue,0,x),he=this.markerEnd=oc("end",l,_t,P,Qe,ue,0,x),x&&(gt=Rt.quickSetter([de,he],P.a,hn)),!z&&!(Oi.length&&ys(D,"fixedMarkers")===!0)&&(Lv(I?xe:D),Rt.set([J,ne],{force3D:!0}),S=Rt.quickSetter(J,P.a,hn),ot=Rt.quickSetter(ne,P.a,hn))}if(x){var at=x.vars.onUpdate,xt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){A.update(0,0,1),at&&at.apply(x,xt||[])})}if(A.previous=function(){return jt[jt.indexOf(A)-1]},A.next=function(){return jt[jt.indexOf(A)+1]},A.revert=function(et,yt){if(!yt)return A.kill(!0);var nt=et!==!1||!A.enabled,Et=Dn;nt!==A.isReverted&&(nt&&(Q=Math.max(Tt(),A.scroll.rec||0),St=A.progress,K=s&&s.progress()),de&&[de,he,J,ne].forEach(function(ie){return ie.style.display=nt?"none":"block"}),nt&&(Dn=A,A.update(nt)),u&&(!T||!A.isActive)&&(nt?Fv(u,me,Ge):Cf(u,me,Ai(u),R)),nt||A.update(nt),Dn=Et,A.isReverted=nt)},A.refresh=function(et,yt,nt,Et){if(!((Dn||!A.enabled)&&!yt)){if(u&&et&&Ci){mn(i,"scrollEnd",pg);return}!$n&&H&&H(A),Dn=A,pt.tween&&!nt&&(pt.tween.kill(),pt.tween=0),V&&V.pause(),_&&s&&(s.revert({kill:!1}).invalidate(),s.getChildren?s.getChildren(!0,!0,!1).forEach(function(B){return B.vars.immediateRender&&B.render(0,!0,!0)}):s.vars.immediateRender&&s.render(0,!0,!0)),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var ie=lt(),Zt=Pt(),De=x?x.duration():Ji(D,P),je=le<=.01||!le,Ne=0,Te=Et||0,_e=wr(nt)?nt.end:n.end,on=n.endTrigger||f,we=wr(nt)?nt.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),En=A.pinnedContainer=n.pinnedContainer&&Xn(n.pinnedContainer,A),oi=f&&Math.max(0,jt.indexOf(A))||0,Ve=oi,tn,an,ai,Zr,ln,We,Mi,na,Pl,Fs,M,U,Z;for(tt&&wr(nt)&&(U=Rt.getProperty(J,P.p),Z=Rt.getProperty(ne,P.p));Ve-- >0;)We=jt[Ve],We.end||We.refresh(0,1)||(Dn=A),Mi=We.pin,Mi&&(Mi===f||Mi===u||Mi===En)&&!We.isReverted&&(Fs||(Fs=[]),Fs.unshift(We),We.revert(!0,!0)),We!==jt[Ve]&&(oi--,Ve--);for(Un(we)&&(we=we(A)),we=Gm(we,"start",A),Nt=Km(we,f,ie,P,Tt(),de,J,A,Zt,W,z,De,x,A._startClamp&&"_startClamp")||(u?-.001:0),Un(_e)&&(_e=_e(A)),pi(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(pi(we)?we.split(" ")[0]:"")+_e:(Ne=hc(_e.substr(2),ie),_e=pi(we)?we:(x?Rt.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Nt):Nt)+Ne,on=f)),_e=Gm(_e,"end",A),kt=Math.max(Nt,Km(_e||(on?"100% 0":De),on,ie,P,Tt()+Ne,he,ne,A,Zt,W,z,De,x,A._endClamp&&"_endClamp"))||-.001,Ne=0,Ve=oi;Ve--;)We=jt[Ve]||{},Mi=We.pin,Mi&&We.start-We._pinPush<=Nt&&!x&&We.end>0&&(tn=We.end-(A._startClamp?Math.max(0,We.start):We.start),(Mi===f&&We.start-We._pinPush<Nt||Mi===En)&&isNaN(we)&&(Ne+=tn*(1-We.progress)),Mi===u&&(Te+=tn));if(Nt+=Ne,kt+=Ne,A._startClamp&&(A._startClamp+=Ne),A._endClamp&&!$n&&(A._endClamp=kt||-.001,kt=Math.min(kt,Ji(D,P))),le=kt-Nt||(Nt-=.01)&&.001,je&&(St=Rt.utils.clamp(0,1,Rt.utils.normalize(Nt,kt,Q))),A._pinPush=Te,de&&Ne&&(tn={},tn[P.a]="+="+Ne,En&&(tn[P.p]="-="+Tt()),Rt.set([de,he],tn)),u&&!(Df&&A.end>=Ji(D,P)))tn=Ai(u),Zr=P===nn,ai=Tt(),pe=parseFloat(Wt(P.a))+Te,!De&&kt>1&&(M=(I?Se.scrollingElement||mi:D).style,M={style:M,value:M["overflow"+P.a.toUpperCase()]},I&&Ai(xe)["overflow"+P.a.toUpperCase()]!=="scroll"&&(M.style["overflow"+P.a.toUpperCase()]="scroll")),Cf(u,me,tn),O=ac(u),an=Ss(u,!0),na=z&&vs(D,Zr?Ln:nn)(),m?(R=[m+P.os2,le+Te+hn],R.t=me,Ve=m===sn?gc(u,P)+le+Te:0,Ve&&(R.push(P.d,Ve+hn),me.style.flexBasis!=="auto"&&(me.style.flexBasis=Ve+hn)),go(R),En&&jt.forEach(function(B){B.pin===En&&B.vars.pinSpacing!==!1&&(B._subPinOffset=!0)}),z&&Tt(Q)):(Ve=gc(u,P),Ve&&me.style.flexBasis!=="auto"&&(me.style.flexBasis=Ve+hn)),z&&(ln={top:an.top+(Zr?ai-Nt:na)+hn,left:an.left+(Zr?na:ai-Nt)+hn,boxSizing:"border-box",position:"fixed"},ln[Ar]=ln["max"+_o]=Math.ceil(an.width)+hn,ln[Cr]=ln["max"+Gf]=Math.ceil(an.height)+hn,ln[Ei]=ln[Ei+Pa]=ln[Ei+Ca]=ln[Ei+Ia]=ln[Ei+Ra]="0",ln[sn]=tn[sn],ln[sn+Pa]=tn[sn+Pa],ln[sn+Ca]=tn[sn+Ca],ln[sn+Ia]=tn[sn+Ia],ln[sn+Ra]=tn[sn+Ra],Ze=kv(Ge,ln,T),$n&&Tt(0)),s?(Pl=s._initted,Tf(1),s.render(s.duration(),!0,!0),Ut=Wt(P.a)-pe+le+Te,k=Math.abs(le-Ut)>1,z&&k&&Ze.splice(Ze.length-2,2),s.render(0,!0,!0),Pl||s.invalidate(!0),s.parent||s.totalTime(s.totalTime()),Tf(0)):Ut=le,M&&(M.value?M.style["overflow"+P.a.toUpperCase()]=M.value:M.style.removeProperty("overflow-"+P.a));else if(f&&Tt()&&!x)for(an=f.parentNode;an&&an!==xe;)an._pinOffset&&(Nt-=an._pinOffset,kt-=an._pinOffset),an=an.parentNode;Fs&&Fs.forEach(function(B){return B.revert(!1,!0)}),A.start=Nt,A.end=kt,Ct=qt=$n?Q:Tt(),!x&&!$n&&(Ct<Q&&Tt(Q),A.scroll.rec=0),A.revert(!1,!0),rt=Nn(),L&&(Y=-1,L.restart(!0)),Dn=0,s&&N&&(s._initted||K)&&s.progress()!==K&&s.progress(K||0,!0).render(s.time(),!0,!0),(je||St!==A.progress||x||_||s&&!s._initted)&&(s&&!N&&(s._initted||St||s.vars.immediateRender!==!1)&&s.totalProgress(x&&Nt<-.001&&!St?Rt.utils.normalize(Nt,kt,0):St,!0),A.progress=je||(Ct-Nt)/le===St?0:St),u&&m&&(me._pinOffset=Math.round(A.progress*Ut)),V&&V.invalidate(),isNaN(U)||(U-=Rt.getProperty(J,P.p),Z-=Rt.getProperty(ne,P.p),lc(J,P,U),lc(de,P,U-(Et||0)),lc(ne,P,Z),lc(he,P,Z-(Et||0))),je&&!$n&&A.update(),h&&!$n&&!be&&(be=!0,h(A),be=!1)}},A.getVelocity=function(){return(Tt()-qt)/(Nn()-Sa)*1e3||0},A.endAnimation=function(){ya(A.callbackAnimation),s&&(V?V.progress(1):s.paused()?N||ya(s,A.direction<0,1):ya(s,s.reversed()))},A.labelToScroll=function(et){return s&&s.labels&&(Nt||A.refresh()||Nt)+s.labels[et]/s.duration()*le||0},A.getTrailing=function(et){var yt=jt.indexOf(A),nt=A.direction>0?jt.slice(0,yt).reverse():jt.slice(yt+1);return(pi(et)?nt.filter(function(Et){return Et.vars.preventOverlaps===et}):nt).filter(function(Et){return A.direction>0?Et.end<=Nt:Et.start>=kt})},A.update=function(et,yt,nt){if(!(x&&!nt&&!et)){var Et=$n===!0?Q:A.scroll(),ie=et?0:(Et-Nt)/le,Zt=ie<0?0:ie>1?1:ie||0,De=A.progress,je,Ne,Te,_e,on,we,En,oi;if(yt&&(qt=Ct,Ct=x?Tt():Et,y&&(vt=dt,dt=s&&!N?s.totalProgress():Zt)),p&&u&&!Dn&&!ec&&Ci&&(!Zt&&Nt<Et+(Et-qt)/(Nn()-Sa)*p?Zt=1e-4:Zt===1&&kt>Et+(Et-qt)/(Nn()-Sa)*p&&(Zt=.9999)),Zt!==De&&A.enabled){if(je=A.isActive=!!Zt&&Zt<1,Ne=!!De&&De<1,we=je!==Ne,on=we||!!Zt!=!!De,A.direction=Zt>De?1:-1,A.progress=Zt,on&&!Dn&&(Te=Zt&&!De?0:Zt===1?1:De===1?2:3,N&&(_e=!we&&F[Te+1]!=="none"&&F[Te+1]||F[Te],oi=s&&(_e==="complete"||_e==="reset"||_e in s))),C&&(we||oi)&&(oi||d||!s)&&(Un(C)?C(A):A.getTrailing(C).forEach(function(ai){return ai.endAnimation()})),N||(V&&!Dn&&!ec?(V._dp._time-V._start!==V._time&&V.render(V._dp._time-V._start),V.resetTo?V.resetTo("totalProgress",Zt,s._tTime/s._tDur):(V.vars.totalProgress=Zt,V.invalidate().restart())):s&&s.totalProgress(Zt,!!(Dn&&(rt||et)))),u){if(et&&m&&(me.style[m+P.os2]=zt),!z)mt(ba(pe+Ut*Zt));else if(on){if(En=!et&&Zt>De&&kt+1>Et&&Et+1>=Ji(D,P),T)if(!et&&(je||En)){var Ve=Ss(u,!0),tn=Et-Nt;Qm(u,xe,Ve.top+(P===nn?tn:0)+hn,Ve.left+(P===nn?0:tn)+hn)}else Qm(u,me);go(je||En?Ze:O),k&&Zt<1&&je||mt(pe+(Zt===1&&!En?Ut:0))}}y&&!pt.tween&&!Dn&&!ec&&L.restart(!0),a&&(we||w&&Zt&&(Zt<1||!wf))&&Da(a.targets).forEach(function(ai){return ai.classList[je||w?"add":"remove"](a.className)}),o&&!N&&!et&&o(A),on&&!Dn?(N&&(oi&&(_e==="complete"?s.pause().totalProgress(1):_e==="reset"?s.restart(!0).pause():_e==="restart"?s.restart(!0):s[_e]()),o&&o(A)),(we||!wf)&&(c&&we&&co(A,c),X[Te]&&co(A,X[Te]),w&&(Zt===1?A.kill(!1,1):X[Te]=0),we||(Te=Zt===1?1:3,X[Te]&&co(A,X[Te]))),b&&!je&&Math.abs(A.getVelocity())>(Ta(b)?b:2500)&&(ya(A.callbackAnimation),V?V.progress(1):ya(s,_e==="reverse"?1:!Zt,1))):N&&o&&!Dn&&o(A)}if(ot){var an=x?Et/x.duration()*(x._caScrollDist||0):Et;S(an+(J._isFlipped?1:0)),ot(an)}gt&&gt(-Et/x.duration()*(x._caScrollDist||0))}},A.enable=function(et,yt){A.enabled||(A.enabled=!0,mn(D,"resize",wa),I||mn(D,"scroll",uo),H&&mn(i,"refreshInit",H),et!==!1&&(A.progress=St=0,Ct=qt=Y=Tt()),yt!==!1&&A.refresh())},A.getTween=function(et){return et&&pt?pt.tween:V},A.setPositions=function(et,yt,nt,Et){if(x){var ie=x.scrollTrigger,Zt=x.duration(),De=ie.end-ie.start;et=ie.start+De*et/Zt,yt=ie.start+De*yt/Zt}A.refresh(!1,!1,{start:Vm(et,nt&&!!A._startClamp),end:Vm(yt,nt&&!!A._endClamp)},Et),A.update()},A.adjustPinSpacing=function(et){if(R&&et){var yt=R.indexOf(P.d)+1;R[yt]=parseFloat(R[yt])+et+hn,R[1]=parseFloat(R[1])+et+hn,go(R)}},A.disable=function(et,yt){if(et!==!1&&A.revert(!0,!0),A.enabled&&(A.enabled=A.isActive=!1,yt||V&&V.pause(),Q=0,Ot&&(Ot.uncache=1),H&&pn(i,"refreshInit",H),L&&(L.pause(),pt.tween&&pt.tween.kill()&&(pt.tween=0)),!I)){for(var nt=jt.length;nt--;)if(jt[nt].scroller===D&&jt[nt]!==A)return;pn(D,"resize",wa),I||pn(D,"scroll",uo)}},A.kill=function(et,yt){A.disable(et,yt),V&&!yt&&V.kill(),l&&delete Nf[l];var nt=jt.indexOf(A);nt>=0&&jt.splice(nt,1),nt===Yn&&fc>0&&Yn--,nt=0,jt.forEach(function(Et){return Et.scroller===A.scroller&&(nt=1)}),nt||$n||(A.scroll.rec=0),s&&(s.scrollTrigger=null,et&&s.revert({kill:!1}),yt||s.kill()),de&&[de,he,J,ne].forEach(function(Et){return Et.parentNode&&Et.parentNode.removeChild(Et)}),La===A&&(La=0),u&&(Ot&&(Ot.uncache=1),nt=0,jt.forEach(function(Et){return Et.pin===u&&nt++}),nt||(Ot.spacer=0)),n.onKill&&n.onKill(A)},jt.push(A),A.enable(!1,!1),ct&&ct(A),s&&s.add&&!le){var st=A.update;A.update=function(){A.update=st,Qt.cache++,Nt||kt||A.refresh()},Rt.delayedCall(.01,A.update),le=.01,Nt=kt=0}else A.refresh();u&&Ov()},i.register=function(n){return fo||(Rt=n||lg(),ag()&&window.document&&i.enable(),fo=Ma),fo},i.defaults=function(n){if(n)for(var s in n)rc[s]=n[s];return rc},i.disable=function(n,s){Ma=0,jt.forEach(function(o){return o[s?"kill":"disable"](n)}),pn(ee,"wheel",uo),pn(Se,"scroll",uo),clearInterval(tc),pn(Se,"touchcancel",Zi),pn(xe,"touchstart",Zi),ic(pn,Se,"pointerdown,touchstart,mousedown",Wm),ic(pn,Se,"pointerup,touchend,mouseup",Xm),mc.kill(),nc(pn);for(var r=0;r<Qt.length;r+=3)sc(pn,Qt[r],Qt[r+1]),sc(pn,Qt[r],Qt[r+2])},i.enable=function(){if(ee=window,Se=document,mi=Se.documentElement,xe=Se.body,Rt){if(Da=Rt.utils.toArray,Ea=Rt.utils.clamp,Lf=Rt.core.context||Zi,Tf=Rt.core.suppressOverwrites||Zi,Bf=ee.history.scrollRestoration||"auto",Uf=ee.pageYOffset||0,Rt.core.globals("ScrollTrigger",i),xe){Ma=1,mo=document.createElement("div"),mo.style.height="100vh",mo.style.position="absolute",xg(),Rv(),Ye.register(Rt),i.isTouch=Ye.isTouch,Js=Ye.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),If=Ye.isTouch===1,mn(ee,"wheel",uo),Ff=[ee,Se,mi,xe],Rt.matchMedia?(i.matchMedia=function(h){var d=Rt.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Rt.addEventListener("matchMediaInit",function(){gg(),Wf()}),Rt.addEventListener("matchMediaRevert",function(){return mg()}),Rt.addEventListener("matchMedia",function(){Er(0,1),Lr("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return Af(),Af})):console.warn("Requires GSAP 3.11.0 or later"),Af(),mn(Se,"scroll",uo);var n=xe.hasAttribute("style"),s=xe.style,r=s.borderTopStyle,o=Rt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),s.borderTopStyle="solid",a=Ss(xe),nn.m=Math.round(a.top+nn.sc())||0,Ln.m=Math.round(a.left+Ln.sc())||0,r?s.borderTopStyle=r:s.removeProperty("border-top-style"),n||(xe.setAttribute("style",""),xe.removeAttribute("style")),tc=setInterval($m,250),Rt.delayedCall(.5,function(){return ec=0}),mn(Se,"touchcancel",Zi),mn(xe,"touchstart",Zi),ic(mn,Se,"pointerdown,touchstart,mousedown",Wm),ic(mn,Se,"pointerup,touchend,mouseup",Xm),Pf=Rt.utils.checkPrefix("transform"),dc.push(Pf),fo=Nn(),mc=Rt.delayedCall(.2,Er).pause(),po=[Se,"visibilitychange",function(){var h=ee.innerWidth,d=ee.innerHeight;Se.hidden?(zm=h,Hm=d):(zm!==h||Hm!==d)&&wa()},Se,"DOMContentLoaded",Er,ee,"load",Er,ee,"resize",wa],nc(mn),jt.forEach(function(h){return h.enable(0,1)}),l=0;l<Qt.length;l+=3)sc(pn,Qt[l],Qt[l+1]),sc(pn,Qt[l],Qt[l+2])}else if(Se){var c=function h(){i.enable(),Se.removeEventListener("DOMContentLoaded",h)};Se.addEventListener("DOMContentLoaded",c)}}},i.config=function(n){"limitCallbacks"in n&&(wf=!!n.limitCallbacks);var s=n.syncInterval;s&&clearInterval(tc)||(tc=s)&&setInterval($m,s),"ignoreMobileResize"in n&&(If=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(nc(pn)||nc(mn,n.autoRefreshEvents||"none"),sg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,s){var r=Xn(n),o=Qt.indexOf(r),a=Pr(r);~o&&Qt.splice(o,a?6:2),s&&(a?Oi.unshift(ee,s,xe,s,mi,s):Oi.unshift(r,s))},i.clearMatchMedia=function(n){jt.forEach(function(s){return s._ctx&&s._ctx.query===n&&s._ctx.kill(!0,!0)})},i.isInViewport=function(n,s,r){var o=(pi(n)?Xn(n):n).getBoundingClientRect(),a=o[r?Ar:Cr]*s||0;return r?o.right-a>0&&o.left+a<ee.innerWidth:o.bottom-a>0&&o.top+a<ee.innerHeight},i.positionInViewport=function(n,s,r){pi(n)&&(n=Xn(n));var o=n.getBoundingClientRect(),a=o[r?Ar:Cr],l=s==null?a/2:s in _c?_c[s]*a:~s.indexOf("%")?parseFloat(s)*a/100:parseFloat(s)||0;return r?(o.left+l)/ee.innerWidth:(o.top+l)/ee.innerHeight},i.killAll=function(n){if(jt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var s=Ir.killAll||[];Ir={},s.forEach(function(r){return r()})}},i})();Gt.version="3.15.0";Gt.saveStyles=function(i){return i?Da(i).forEach(function(t){if(t&&t.style){var e=di.indexOf(t);e>=0&&di.splice(e,5),di.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),Lf())}}):di};Gt.revert=function(i,t){return Wf(!i,t)};Gt.create=function(i,t){return new Gt(i,t)};Gt.refresh=function(i){return i?wa(!0):(fo||Gt.register())&&Er(!0)};Gt.update=function(i){return++Qt.cache&&Ms(i===!0?2:0)};Gt.clearScrollMemory=_g;Gt.maxScroll=function(i,t){return Ji(i,t?Ln:nn)};Gt.getScrollFunc=function(i,t){return vs(Xn(i),t?Ln:nn)};Gt.getById=function(i){return Nf[i]};Gt.getAll=function(){return jt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Gt.isScrolling=function(){return!!Ci};Gt.snapDirectional=Vf;Gt.addEventListener=function(i,t){var e=Ir[i]||(Ir[i]=[]);~e.indexOf(t)||e.push(t)};Gt.removeEventListener=function(i,t){var e=Ir[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Gt.batch=function(i,t){var e=[],n={},s=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=Rt.delayedCall(s,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),r<=d.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Un(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Un(r)&&(r=r(),mn(Gt,"refresh",function(){return r=t.batchMax()})),Da(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Gt.create(c))}),e};var tg=function(t,e,n,s){return e>s?t(s):e<0&&t(0),n>s?(s-e)/(n-e):n<0?e/(e-n):1},Rf=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ye.isTouch?" pinch-zoom":""):"none",t===mi&&i(xe,e)},cc={auto:1,scroll:1},Hv=function(t){var e=t.event,n=t.target,s=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Rt.core.getCache(r),a=Nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xe&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(cc[(l=Ai(r)).overflowY]||cc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Pr(r)&&(cc[(l=Ai(r)).overflowY]||cc[l.overflowX]),o._isScrollT=a}(o._isScroll||s==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},yg=function(t,e,n,s){return Ye.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:s=s&&Hv,onPress:s,onDrag:s,onScroll:s,onEnable:function(){return n&&mn(Se,Ye.eventTypes[0],ng,!1,!0)},onDisable:function(){return pn(Se,Ye.eventTypes[0],ng,!0)}})},Gv=/(input|label|select|textarea)/i,eg,ng=function(t){var e=Gv.test(t.target.tagName);(e||eg)&&(t._gsapAllow=!0,eg=e)},Vv=function(t){wr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,s=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Xn(t.target)||mi,h=Rt.core.globals().ScrollSmoother,d=h&&h.get(),f=Js&&(t.content&&Xn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=vs(c,nn),m=vs(c,Ln),_=1,p=(Ye.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,g=0,v=Un(s)?function(){return s(a)}:function(){return s||2.8},w,y,T=yg(c,t.type,!0,r),E=function(){return y=!1},x=Zi,b=Zi,C=function(){l=Ji(c,nn),b=Ea(Js?1:0,l),n&&(x=Ea(0,Ji(c,Ln))),w=Rr},P=function(){f._gsap.y=ba(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},N=function(){if(y){requestAnimationFrame(E);var tt=ba(a.deltaY/2),W=b(u.v-tt);if(f&&W!==u.v+u.offset){u.offset=W-u.v;var A=ba((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",f._gsap.y=A+"px",u.cacheID=Qt.cache,Ms()}return!0}u.offset&&P(),y=!0},D,G,I,z,X=function(){C(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return f&&Rt.set(f,{y:"+=0"}),t.ignoreCheck=function(F){return Js&&F.type==="touchmove"&&N(F)||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){y=!1;var F=_;_=ba((ee.visualViewport&&ee.visualViewport.scale||1)/p),D.pause(),F!==_&&Rf(c,_>1.01?!0:n?!1:"x"),G=m(),I=u(),C(),w=Rr},t.onRelease=t.onGestureStart=function(F,tt){if(u.offset&&P(),!tt)z.restart(!0);else{Qt.cache++;var W=v(),A,H;n&&(A=m(),H=A+W*.05*-F.velocityX/.227,W*=tg(m,A,H,Ji(c,Ln)),D.vars.scrollX=x(H)),A=u(),H=A+W*.05*-F.velocityY/.227,W*=tg(u,A,H,Ji(c,nn)),D.vars.scrollY=b(H),D.invalidate().duration(W).play(.01),(Js&&D.vars.scrollY>=l||A>=l-1)&&Rt.to({},{onUpdate:X,duration:W})}o&&o(F)},t.onWheel=function(){D._ts&&D.pause(),Nn()-g>1e3&&(w=0,g=Nn())},t.onChange=function(F,tt,W,A,H){if(Rr!==w&&C(),tt&&n&&m(x(A[2]===tt?G+(F.startX-F.x):m()+tt-A[1])),W){u.offset&&P();var lt=H[2]===W,Pt=lt?I+F.startY-F.y:u()+W-H[1],Y=b(Pt);lt&&Pt!==Y&&(I+=Y-Pt),u(Y)}(W||tt)&&Ms()},t.onEnable=function(){Rf(c,n?!1:"x"),Gt.addEventListener("refresh",X),mn(ee,"resize",X),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),T.enable()},t.onDisable=function(){Rf(c,!0),pn(ee,"resize",X),Gt.removeEventListener("refresh",X),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ye(t),a.iOS=Js,Js&&!u()&&u(1),Js&&Rt.ticker.add(Zi),z=a._dc,D=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:vg(u,u(),function(){return D.pause()})},onUpdate:Ms,onComplete:z.vars.onComplete}),a};Gt.sort=function(i){if(Un(i))return jt.sort(i);var t=ee.pageYOffset||0;return Gt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ee.innerHeight}),jt.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Gt.observe=function(i){return new Ye(i)};Gt.normalizeScroll=function(i){if(typeof i>"u")return qn;if(i===!0&&qn)return qn.enable();if(i===!1){qn&&qn.kill(),qn=i;return}var t=i instanceof Ye?i:Vv(i);return qn&&qn.target===t.target&&qn.kill(),Pr(t.target)&&(qn=t),t};Gt.core={_getVelocityProp:jl,_inputObserver:yg,_scrollers:Qt,_proxies:Oi,bridge:{ss:function(){Ci||Lr("scrollStart"),Ci=Nn()},ref:function(){return Dn}}};lg()&&Rt.registerPlugin(Gt);var Sg="1.3.27";function Tg(i,t,e){return Math.max(i,Math.min(t,e))}function Wv(i,t,e){return(1-e)*i+e*t}function Xv(i,t,e,n){return Wv(i,t,1-Math.exp(-e*n))}function qv(i,t){return(i%t+t)%t}var Yv=class{constructor(){Bt(this,"isRunning",!1);Bt(this,"value",0);Bt(this,"from",0);Bt(this,"to",0);Bt(this,"currentTime",0);Bt(this,"lerp");Bt(this,"duration");Bt(this,"easing");Bt(this,"onUpdate")}advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;let e=Tg(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Xv(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:s,onStart:r,onUpdate:o}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function $v(i,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(this,n)},t)}}var Zv=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){Bt(this,"width",0);Bt(this,"height",0);Bt(this,"scrollHeight",0);Bt(this,"scrollWidth",0);Bt(this,"debouncedResize");Bt(this,"wrapperResizeObserver");Bt(this,"contentResizeObserver");Bt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Bt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Bt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=t,e&&(this.debouncedResize=$v(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},wg=class{constructor(){Bt(this,"events",{})}emit(i,...t){let e=this.events[i]||[];for(let n=0,s=e.length;n<s;n++)e[n]?.(...t)}on(i,t){return this.events[i]?this.events[i].push(t):this.events[i]=[t],()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},Jv=100/6,Ks={passive:!1};function Mg(i,t){return i===1?Jv:i===2?t:1}var Kv=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){Bt(this,"touchStart",{x:0,y:0});Bt(this,"lastDelta",{x:0,y:0});Bt(this,"window",{width:0,height:0});Bt(this,"emitter",new wg);Bt(this,"onTouchStart",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Bt(this,"onTouchMove",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:i})});Bt(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Bt(this,"onWheel",i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i,s=Mg(n,this.window.width),r=Mg(n,this.window.height);t*=s,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})});Bt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ks),this.element.addEventListener("touchstart",this.onTouchStart,Ks),this.element.addEventListener("touchmove",this.onTouchMove,Ks),this.element.addEventListener("touchend",this.onTouchEnd,Ks)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ks),this.element.removeEventListener("touchstart",this.onTouchStart,Ks),this.element.removeEventListener("touchmove",this.onTouchMove,Ks),this.element.removeEventListener("touchend",this.onTouchEnd,Ks)}},bg=i=>Math.min(1,1.001-2**(-10*i)),Eg=class{constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:v=!0,autoRaf:w=!1,anchors:y=!1,autoToggle:T=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:b=x,stopInertiaOnNavigate:C=!1,respectReducedMotion:P=!0}={}){Bt(this,"_isScrolling",!1);Bt(this,"_isStopped",!1);Bt(this,"_isLocked",!1);Bt(this,"_preventNextNativeScrollEvent",!1);Bt(this,"_resetVelocityTimeout",null);Bt(this,"_rafId",null);Bt(this,"_isDraggingSelection",!1);Bt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Bt(this,"isTouching");Bt(this,"isIos");Bt(this,"time",0);Bt(this,"userData",{});Bt(this,"lastVelocity",0);Bt(this,"velocity",0);Bt(this,"direction",0);Bt(this,"options");Bt(this,"targetScroll");Bt(this,"animatedScroll");Bt(this,"animate",new Yv);Bt(this,"emitter",new wg);Bt(this,"dimensions");Bt(this,"virtualScroll");Bt(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Bt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Bt(this,"onTransitionEnd",i=>{i.propertyName?.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});Bt(this,"onClick",i=>{let t=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(s=>e.host===s.host&&e.pathname===s.pathname&&s.hash);if(n){let s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,s);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Bt(this,"onPointerDown",i=>{i.button===1&&this.reset()});Bt(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let s=n.type.includes("touch"),r=n.type.includes("wheel");if(s&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&s&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||s&&m.hasAttribute?.("data-lenis-prevent-touch")||r&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=s&&this.options.syncTouch,u=s&&n.type==="touchend";u&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Bt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Bt(this,"raf",i=>{let t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Sg,window.lenis||(window.lenis={}),window.lenis.version=Sg,d==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=bg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:s,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:u,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:v,autoRaf:w,anchors:y,autoToggle:T,allowNestedScroll:E,naiveDimensions:b,stopInertiaOnNavigate:C,respectReducedMotion:P},this.dimensions=new Zv(i,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Kv(e,{touchMultiplier:u,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}get overflow(){let i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=i.targetTouches[0]??i.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let s=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-s.left,e.clientY-s.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:s=!0,lerp:r=s?this.options.lerp:void 0,duration:o=s?this.options.duration:void 0,easing:a=s?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(s?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=i,u=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let m=null;if(typeof f=="string"?(m=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),m||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(m=f),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();u-=this.isHorizontal?y.left:y.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),v=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(w)?0:w)}}if(typeof f=="number"){if(f+=u,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;let m=f-this.animatedScroll;m>this.limit/2?f-=this.limit:m<-this.limit/2&&(f+=this.limit)}}else f=Tg(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=bg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),s&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:t,deltaY:e}){let n=Date.now();i._lenis||(i._lenis={});let s=i._lenis,r,o,a,l,c,h,d,f,u,m;if(n-(s.time??0)>2e3){s.time=Date.now();let E=window.getComputedStyle(i);if(s.computedStyle=E,r=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),h=["auto"].includes(E.overscrollBehaviorY),s.hasOverflowX=r,s.hasOverflowY=o,!(r||o))return!1;d=i.scrollWidth,f=i.scrollHeight,u=i.clientWidth,m=i.clientHeight,a=d>u,l=f>m,s.isScrollableX=a,s.isScrollableY=l,s.scrollWidth=d,s.scrollHeight=f,s.clientWidth=u,s.clientHeight=m,s.hasOverscrollBehaviorX=c,s.hasOverscrollBehaviorY=h}else a=s.isScrollableX,l=s.isScrollableY,r=s.hasOverflowX,o=s.hasOverflowY,d=s.scrollWidth,f=s.scrollHeight,u=s.clientWidth,m=s.clientHeight,c=s.hasOverscrollBehaviorX,h=s.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,v,w,y,T;if(_==="horizontal")p=Math.round(i.scrollLeft),g=d-u,v=t,w=r,y=a,T=c;else if(_==="vertical")p=Math.round(i.scrollTop),g=f-m,v=e,w=o,y=l,T=h;else return!1;return!T&&(p>=g||p<=0)?!0:(v>0?p<g:p>0)&&w&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?qv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(let i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};var n0=0,bd=1,i0=2;var hl=1,s0=2,Xo=3,lr=0,bn=1,as=2,Vr=0,qo=1,Td=2,wd=3,Ed=4,r0=5;var Wr=100,o0=101,a0=102,l0=103,c0=104,h0=200,u0=201,f0=202,d0=203,Ad=204,Cd=205,p0=206,m0=207,g0=208,_0=209,x0=210,v0=211,y0=212,S0=213,M0=214,Wc=0,Xc=1,qc=2,Do=3,Yc=4,$c=5,Zc=6,Jc=7,yh=0,b0=1,T0=2,ls=0,Rd=1,Pd=2,Id=3,ul=4,Ld=5,Dd=6,Nd=7;var Ud=300,Xr=301,Yo=302,Sh=303,Mh=304,Kc=1e3,Qi=1001,Qc=1002,_n=1003,w0=1004;var fl=1005;var Jn=1006,bh=1007;var Ls=1008;var si=1009,Od=1010,Fd=1011,$o=1012,Th=1013,Gi=1014,Li=1015,Vi=1016,wh=1017,Eh=1018,qr=1020,Bd=35902,kd=35899,zd=1021,Hd=1022,Wi=1023,Rs=1026,Ds=1027,Ah=1028,Ch=1029,cr=1030,Rh=1031;var Ph=1033,dl=33776,pl=33777,ml=33778,gl=33779,Ih=35840,Lh=35841,Dh=35842,Nh=35843,Uh=36196,Oh=37492,Fh=37496,Bh=37488,kh=37489,_l=37490,zh=37491,Hh=37808,Gh=37809,Vh=37810,Wh=37811,Xh=37812,qh=37813,Yh=37814,$h=37815,Zh=37816,Jh=37817,Kh=37818,Qh=37819,jh=37820,tu=37821,eu=36492,nu=36494,iu=36495,su=36283,ru=36284,xl=36285,ou=36286;var Ha=2300,jc=2301,Gc=2302,dd=2303,pd=2400,md=2401,gd=2402;var E0=3200;var vl=0,A0=1,Ns="",Zn="srgb",Ga="srgb-linear",Va="linear",ve="srgb";var Vc=7680;var C0=519,R0=512,P0=513,I0=514,Gd=515,L0=516,D0=517,Vd=518,Wd=519,N0=35044;var Xd="300 es",Pi=2e3,No=2001;function Qv(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function U0(){let i=Wa("canvas");return i.style.display="block",i}var Ag={},Uo=null;function qd(...i){let t="THREE."+i.shift();Uo?Uo("log",t,...i):console.log(t,...i)}function O0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=O0(i);let t="THREE."+i.shift();if(Uo)Uo("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=O0(i);let t="THREE."+i.shift();if(Uo)Uo("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Fr(...i){let t=i.join(" ");t in Ag||(Ag[t]=!0,Ht(...i))}function F0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var B0={[Wc]:Wc,[qc]:Zc,[Yc]:Yc,[Do]:$c,[Xc]:Xc,[Zc]:qc,[Jc]:Jc,[$c]:Do},ts=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xf=Math.PI/180,th=180/Math.PI;function yl(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[e&63|128]+On[e>>8&255]+"-"+On[e>>16&255]+On[e>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function ty(i,t){return(i%t+t)%t}function qf(i,t,e){return(1-e)*i+e*t}function k0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yd(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ey(i,t){if(t.constructor===Float32Array)return i;let e=Yd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function ny(i,t){if(t.constructor===Float32Array)return i;let e=Yd(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Qd=class Qd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qd.prototype.isVector2=!0;var te=Qd,es=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],u=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*_;p<0&&(f=-f,u=-u,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let v=Math.acos(p),w=Math.sin(v);g=Math.sin(g*v)/w,a=Math.sin(a*v)/w,l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+m*a,d=d*g+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*u-c*f,t[e+1]=l*m+h*f+c*d-a*u,t[e+2]=c*m+h*u+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),u=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jd=class jd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yf.copy(this).projectOnVector(t),this.sub(Yf)}reflect(t){return this.sub(Yf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jd.prototype.isVector3=!0;var $=jd,Yf=new $,Cg=new es,tp=class tp{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],_=s[0],p=s[3],g=s[6],v=s[1],w=s[4],y=s[7],T=s[2],E=s[5],x=s[8];return r[0]=o*_+a*v+l*T,r[3]=o*p+a*w+l*E,r[6]=o*g+a*y+l*x,r[1]=c*_+h*v+d*T,r[4]=c*p+h*w+d*E,r[7]=c*g+h*y+d*x,r[2]=f*_+u*v+m*T,r[5]=f*p+u*w+m*E,r[8]=f*g+u*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,m=e*d+n*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($f.makeScale(t,e)),this}rotate(t){return Fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($f.makeRotation(-t)),this}translate(t,e){return Fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($f.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tp.prototype.isMatrix3=!0;var Xt=tp,$f=new Xt,Rg=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pg=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iy(){let i={enabled:!0,workingColorSpace:Ga,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=Lo(s.r),s.g=Lo(s.g),s.b=Lo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ns?Va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ga]:{primaries:t,whitePoint:n,transfer:Va,toXYZ:Rg,fromXYZ:Pg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Rg,fromXYZ:Pg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),i}var oe=iy();function Cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xo,eh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xo===void 0&&(xo=Wa("canvas")),xo.width=t.width,xo.height=t.height;let s=xo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cs(e[n]/255)*255):e[n]=Cs(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sy=0,Oo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=yl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zf(s[o].image)):r.push(Zf(s[o]))}else r=Zf(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var ry=0,Jf=new $,Kn=class i extends ts{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Qi,s=Qi,r=Jn,o=Ls,a=Wi,l=si,c=i.DEFAULT_ANISOTROPY,h=Ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=yl(),this.name="",this.source=new Oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Jf).x}get height(){return this.source.getSize(Jf).y}get depth(){return this.source.getSize(Jf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kc:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case Qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kc:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case Qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=Ud;Kn.DEFAULT_ANISOTROPY=1;var ep=class ep{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(u+1)/2,T=(g+1)/2,E=(h+f)/4,x=(d+_)/4,b=(m+p)/4;return w>y&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=x/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ep.prototype.isVector4=!0;var Oe=ep,nh=class extends ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Kn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Oo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends nh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xa=class extends Kn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ih=class extends Kn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var vh=class vh{constructor(t,e,n,s,r,o,a,l,c,h,d,f,u,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,u,m,_,p)}set(t,e,n,s,r,o,a,l,c,h,d,f,u,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/vo.setFromMatrixColumn(t,0).length(),r=1/vo.setFromMatrixColumn(t,1).length(),o=1/vo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f+_*a,e[4]=m*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,m=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=m*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+m,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,u=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-m,e[2]=m*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oy,t,ay)}lookAt(t,e,n){let s=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Qs.crossVectors(n,gi),Qs.lengthSq()===0&&(Math.abs(n.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Qs.crossVectors(n,gi)),Qs.normalize(),vc.crossVectors(gi,Qs),s[0]=Qs.x,s[4]=vc.x,s[8]=gi.x,s[1]=Qs.y,s[5]=vc.y,s[9]=gi.y,s[2]=Qs.z,s[6]=vc.z,s[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],_=n[6],p=n[10],g=n[14],v=n[3],w=n[7],y=n[11],T=n[15],E=s[0],x=s[4],b=s[8],C=s[12],P=s[1],N=s[5],D=s[9],G=s[13],I=s[2],z=s[6],X=s[10],F=s[14],tt=s[3],W=s[7],A=s[11],H=s[15];return r[0]=o*E+a*P+l*I+c*tt,r[4]=o*x+a*N+l*z+c*W,r[8]=o*b+a*D+l*X+c*A,r[12]=o*C+a*G+l*F+c*H,r[1]=h*E+d*P+f*I+u*tt,r[5]=h*x+d*N+f*z+u*W,r[9]=h*b+d*D+f*X+u*A,r[13]=h*C+d*G+f*F+u*H,r[2]=m*E+_*P+p*I+g*tt,r[6]=m*x+_*N+p*z+g*W,r[10]=m*b+_*D+p*X+g*A,r[14]=m*C+_*G+p*F+g*H,r[3]=v*E+w*P+y*I+T*tt,r[7]=v*x+w*N+y*z+T*W,r[11]=v*b+w*D+y*X+T*A,r[15]=v*C+w*G+y*F+T*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],_=t[7],p=t[11],g=t[15],v=l*u-c*f,w=a*u-c*d,y=a*f-l*d,T=o*u-c*h,E=o*f-l*h,x=o*d-a*h;return e*(_*v-p*w+g*y)-n*(m*v-p*T+g*E)+s*(m*w-_*T+g*x)-r*(m*y-_*E+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],_=t[13],p=t[14],g=t[15],v=e*a-n*o,w=e*l-s*o,y=e*c-r*o,T=n*l-s*a,E=n*c-r*a,x=s*c-r*l,b=h*_-d*m,C=h*p-f*m,P=h*g-u*m,N=d*p-f*_,D=d*g-u*_,G=f*g-u*p,I=v*G-w*D+y*N+T*P-E*C+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(a*G-l*D+c*N)*z,t[1]=(s*D-n*G-r*N)*z,t[2]=(_*x-p*E+g*T)*z,t[3]=(f*E-d*x-u*T)*z,t[4]=(l*P-o*G-c*C)*z,t[5]=(e*G-s*P+r*C)*z,t[6]=(p*y-m*x-g*w)*z,t[7]=(h*x-f*y+u*w)*z,t[8]=(o*D-a*P+c*b)*z,t[9]=(n*P-e*D-r*b)*z,t[10]=(m*E-_*y+g*v)*z,t[11]=(d*y-h*E-u*v)*z,t[12]=(a*C-o*N-l*b)*z,t[13]=(e*N-n*C+s*b)*z,t[14]=(_*w-m*T-p*v)*z,t[15]=(h*T-d*w+f*v)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,m=r*d,_=o*h,p=o*d,g=a*d,v=l*c,w=l*h,y=l*d,T=n.x,E=n.y,x=n.z;return s[0]=(1-(_+g))*T,s[1]=(u+y)*T,s[2]=(m-w)*T,s[3]=0,s[4]=(u-y)*E,s[5]=(1-(f+g))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(m+w)*x,s[9]=(p-v)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=vo.set(s[0],s[1],s[2]).length(),a=vo.set(s[4],s[5],s[6]).length(),l=vo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Fi.copy(this);let c=1/o,h=1/a,d=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=d,Fi.elements[9]*=d,Fi.elements[10]*=d,e.setFromRotationMatrix(Fi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Pi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Pi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===No)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Pi)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===No)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};vh.prototype.isMatrix4=!0;var Me=vh,vo=new $,Fi=new Me,oy=new $(0,0,0),ay=new $(1,1,1),Qs=new $,vc=new $,gi=new $,Ig=new Me,Lg=new es,ns=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ig.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ig,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lg.setFromEuler(this),this.setFromQuaternion(Lg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ns.DEFAULT_ORDER="XYZ";var Fo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ly=0,Dg=new $,yo=new es,bs=new Me,yc=new $,Ua=new $,cy=new $,hy=new es,Ng=new $(1,0,0),Ug=new $(0,1,0),Og=new $(0,0,1),Fg={type:"added"},uy={type:"removed"},So={type:"childadded",child:null},Kf={type:"childremoved",child:null},xn=class i extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,e=new ns,n=new es,s=new $(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new Xt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yo.setFromAxisAngle(t,e),this.quaternion.multiply(yo),this}rotateOnWorldAxis(t,e){return yo.setFromAxisAngle(t,e),this.quaternion.premultiply(yo),this}rotateX(t){return this.rotateOnAxis(Ng,t)}rotateY(t){return this.rotateOnAxis(Ug,t)}rotateZ(t){return this.rotateOnAxis(Og,t)}translateOnAxis(t,e){return Dg.copy(t).applyQuaternion(this.quaternion),this.position.add(Dg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ng,t)}translateY(t){return this.translateOnAxis(Ug,t)}translateZ(t){return this.translateOnAxis(Og,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yc.copy(t):yc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(Ua,yc,this.up):bs.lookAt(yc,Ua,this.up),this.quaternion.setFromRotationMatrix(bs),s&&(bs.extractRotation(s.matrixWorld),yo.setFromRotationMatrix(bs),this.quaternion.premultiply(yo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fg),So.child=t,this.dispatchEvent(So),So.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uy),Kf.child=t,this.dispatchEvent(Kf),Kf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bs.multiply(t.parent.matrixWorld)),t.applyMatrix4(bs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fg),So.child=t,this.dispatchEvent(So),So.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,t,cy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,hy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xn.DEFAULT_UP=new $(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ji=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},fy={type:"move"},Bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Qf(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=ty(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qf(o,r,t+1/3),this.g=Qf(o,r,t),this.b=Qf(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Zn){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Zn){let n=z0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}copyLinearToSRGB(t){return this.r=Lo(t.r),this.g=Lo(t.g),this.b=Lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return oe.workingToColorSpace(Fn.copy(this),t),Math.round(ae(Fn.r*255,0,255))*65536+Math.round(ae(Fn.g*255,0,255))*256+Math.round(ae(Fn.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Fn.copy(this),e);let n=Fn.r,s=Fn.g,r=Fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Fn.copy(this),e),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Zn){oe.workingToColorSpace(Fn.copy(this),t);let e=Fn.r,n=Fn.g,s=Fn.b;return t!==Zn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(js),this.setHSL(js.h+t,js.s+e,js.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(js),t.getHSL(Sc);let n=qf(js.h,Sc.h,e),s=qf(js.s,Sc.s,e),r=qf(js.l,Sc.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new Yt;Yt.NAMES=z0;var Br=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bi=new $,Ts=new $,jf=new $,ws=new $,Mo=new $,bo=new $,Bg=new $,td=new $,ed=new $,nd=new $,id=new Oe,sd=new Oe,rd=new Oe,ir=class i{constructor(t=new $,e=new $,n=new $){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bi.subVectors(t,e),s.cross(Bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bi.subVectors(s,e),Ts.subVectors(n,e),jf.subVectors(t,e);let o=Bi.dot(Bi),a=Bi.dot(Ts),l=Bi.dot(jf),c=Ts.dot(Ts),h=Ts.dot(jf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ws)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ws.x),l.addScaledVector(o,ws.y),l.addScaledVector(a,ws.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return id.setScalar(0),sd.setScalar(0),rd.setScalar(0),id.fromBufferAttribute(t,e),sd.fromBufferAttribute(t,n),rd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(id,r.x),o.addScaledVector(sd,r.y),o.addScaledVector(rd,r.z),o}static isFrontFacing(t,e,n,s){return Bi.subVectors(n,e),Ts.subVectors(t,e),Bi.cross(Ts).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ts.subVectors(this.a,this.b),Bi.cross(Ts).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Mo.subVectors(s,n),bo.subVectors(r,n),td.subVectors(t,n);let l=Mo.dot(td),c=bo.dot(td);if(l<=0&&c<=0)return e.copy(n);ed.subVectors(t,s);let h=Mo.dot(ed),d=bo.dot(ed);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Mo,o);nd.subVectors(t,r);let u=Mo.dot(nd),m=bo.dot(nd);if(m>=0&&u<=m)return e.copy(r);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(bo,a);let p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return Bg.subVectors(r,s),a=(d-h)/(d-h+(u-m)),e.copy(s).addScaledVector(Bg,a);let g=1/(p+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(Mo,o).addScaledVector(bo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},is=class{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ki):ki.fromBufferAttribute(r,o),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mc.copy(n.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oa),bc.subVectors(this.max,Oa),To.subVectors(t.a,Oa),wo.subVectors(t.b,Oa),Eo.subVectors(t.c,Oa),tr.subVectors(wo,To),er.subVectors(Eo,wo),Dr.subVectors(To,Eo);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Dr.z,Dr.y,tr.z,0,-tr.x,er.z,0,-er.x,Dr.z,0,-Dr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Dr.y,Dr.x,0];return!od(e,To,wo,Eo,bc)||(e=[1,0,0,0,1,0,0,0,1],!od(e,To,wo,Eo,bc))?!1:(Tc.crossVectors(tr,er),e=[Tc.x,Tc.y,Tc.z],od(e,To,wo,Eo,bc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Es=[new $,new $,new $,new $,new $,new $,new $,new $],ki=new $,Mc=new is,To=new $,wo=new $,Eo=new $,tr=new $,er=new $,Dr=new $,Oa=new $,bc=new $,Tc=new $,Nr=new $;function od(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Nr.fromArray(i,r);let a=s.x*Math.abs(Nr.x)+s.y*Math.abs(Nr.y)+s.z*Math.abs(Nr.z),l=t.dot(Nr),c=e.dot(Nr),h=n.dot(Nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var rn=new $,wc=new te,dy=0,xi=class extends ts{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=N0,this.updateRanges=[],this.gpuType=Li,this.version=0,this._normalizationScale=t!==void 0?Yd(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wc.fromBufferAttribute(this,e),wc.applyMatrix3(t),this.setXY(e,wc.x,wc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ey(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ny(t,this.array)}};var qa=class extends xi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ya=class extends xi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ii=class extends xi{constructor(t,e,n){super(new Float32Array(t),e,n)}},py=new is,Fa=new $,ad=new $,Ps=class{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):py.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fa.subVectors(t,this.center);let e=Fa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fa.copy(t.center).add(ad)),this.expandByPoint(Fa.copy(t.center).sub(ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},my=0,Ri=new Me,ld=new xn,Ao=new $,_i=new is,Ba=new is,gn=new $,Hi=class i extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qv(t)?Ya:qa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,e,n){return Ri.makeTranslation(t,e,n),this.applyMatrix4(Ri),this}scale(t,e,n){return Ri.makeScale(t,e,n),this.applyMatrix4(Ri),this}lookAt(t){return ld.lookAt(t),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ii(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_i.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){let n=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ba.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(_i.min,Ba.min),_i.expandByPoint(gn),gn.addVectors(_i.max,Ba.max),_i.expandByPoint(gn)):(_i.expandByPoint(Ba.min),_i.expandByPoint(Ba.max))}_i.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)gn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(Ao.fromBufferAttribute(t,c),gn.add(Ao)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new xi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new $,l[C]=new $;let h=new $,d=new $,f=new $,u=new te,m=new te,_=new te,p=new $,g=new $;function v(C,P,N){c[C]=c[P]=c[N]=1,h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,P),f.fromBufferAttribute(n,N),u.fromBufferAttribute(r,C),m.fromBufferAttribute(r,P),_.fromBufferAttribute(r,N),d.sub(h),f.sub(h),m.sub(u),_.sub(u);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(D),a[C].add(p),a[P].add(p),a[N].add(p),l[C].add(g),l[P].add(g),l[N].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let C=0,P=w.length;C<P;++C){let N=w[C],D=N.start,G=N.count;for(let I=D,z=D+G;I<z;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new $,T=new $,E=new $,x=new $;function b(C){E.fromBufferAttribute(s,C),x.copy(E);let P=a[C];y.copy(P),y.sub(E.multiplyScalar(E.dot(P))).normalize(),T.crossVectors(x,P);let D=T.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,P=n.count;C<P;++C)c[C]&&b(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new $,r=new $,o=new $,a=new $,l=new $,c=new $,h=new $,d=new $;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new xi(f,h,d)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var cd=new $,gy=new $,_y=new Xt,zi=class{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=cd.subVectors(n,e).cross(gy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(cd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_y.getNormalMatrix(t),s=this.coplanarPoint(cd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},xy=0,ss=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=qo,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vc,this.stencilZFail=Vc,this.stencilZPass=Vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new te().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var As=new $,hd=new $,Ec=new $,Ac=new $,ko=class{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,As)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=As.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(As.copy(this.origin).addScaledVector(this.direction,e),As.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hd.copy(t).add(e).multiplyScalar(.5),Ec.copy(e).sub(t).normalize(),Ac.copy(this.origin).sub(hd);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ec),a=Ac.dot(this.direction),l=-Ac.dot(Ec),c=Ac.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hd).addScaledVector(Ec,f),u}intersectSphere(t,e){if(t.radius<0)return null;As.subVectors(t.center,this.origin);let n=As.dot(this.direction),s=As.dot(As)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,As)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=n.x-o.x,v=n.y-o.y,w=n.z-o.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,b,C,P,N,D,G,I,z,X,F,tt;if(y>=T&&y>=E?(C=l,D=d,z=m,tt=g,l>=0?(x=c,b=h,P=f,N=u,G=_,I=p,X=v,F=w):(x=h,b=c,P=u,N=f,G=p,I=_,X=w,F=v)):T>=E?(C=c,D=f,z=_,tt=v,c>=0?(x=h,b=l,P=u,N=d,G=p,I=m,X=w,F=g):(x=l,b=h,P=d,N=u,G=m,I=p,X=g,F=w)):(C=h,D=u,z=p,tt=w,h>=0?(x=l,b=c,P=d,N=f,G=m,I=_,X=g,F=v):(x=c,b=l,P=f,N=d,G=_,I=m,X=v,F=g)),C===0)return null;let W=x/C,A=b/C,H=1/C,lt=P-W*D,Pt=N-A*D,Y=G-W*z,rt=I-A*z,St=X-W*tt,Tt=F-A*tt,pt=St*rt-Tt*Y,Ot=lt*Tt-Pt*St,ye=Y*Pt-rt*lt;if(s){if(pt<0||Ot<0||ye<0)return null}else if((pt<0||Ot<0||ye<0)&&(pt>0||Ot>0||ye>0))return null;let Ct=pt+Ot+ye;if(Ct===0)return null;let qt=H*(pt*D+Ot*z+ye*tt);return(Ct>0?qt<0:qt>0)?null:this.at(qt/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zo=class extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=yh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kg=new Me,Ur=new ko,Cc=new Ps,zg=new $,Rc=new $,Pc=new $,Ic=new $,ud=new $,Lc=new $,Hg=new $,Dc=new $,He=class extends xn{constructor(t=new Hi,e=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ud.fromBufferAttribute(d,t),o?Lc.addScaledVector(ud,h):Lc.addScaledVector(ud.sub(e),h))}e.add(Lc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(r),Ur.copy(t.ray).recast(t.near),!(Cc.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Cc,zg)===null||Ur.origin.distanceToSquared(zg)>(t.far-t.near)**2))&&(kg.copy(r).invert(),Ur.copy(t.ray).applyMatrix4(kg),!(n.boundingBox!==null&&Ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ur)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,u.start),w=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=w;y<T;y+=3){let E=a.getX(y),x=a.getX(y+1),b=a.getX(y+2);s=Nc(this,g,t,n,c,h,d,E,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=a.getX(p),w=a.getX(p+1),y=a.getX(p+2);s=Nc(this,o,t,n,c,h,d,v,w,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let p=f[m],g=o[p.materialIndex],v=Math.max(p.start,u.start),w=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=w;y<T;y+=3){let E=y,x=y+1,b=y+2;s=Nc(this,g,t,n,c,h,d,E,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=m,g=_;p<g;p+=3){let v=p,w=p+1,y=p+2;s=Nc(this,o,t,n,c,h,d,v,w,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function vy(i,t,e,n,s,r,o,a){let l;if(t.side===bn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===lr,a),l===null)return null;Dc.copy(a),Dc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Dc);return c<e.near||c>e.far?null:{distance:c,point:Dc.clone(),object:i}}function Nc(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Rc),i.getVertexPosition(l,Pc),i.getVertexPosition(c,Ic);let h=vy(i,t,e,n,Rc,Pc,Ic,Hg);if(h){let d=new $;ir.getBarycoord(Hg,Rc,Pc,Ic,d),s&&(h.uv=ir.getInterpolatedAttribute(s,a,l,c,d,new te)),r&&(h.uv1=ir.getInterpolatedAttribute(r,a,l,c,d,new te)),o&&(h.normal=ir.getInterpolatedAttribute(o,a,l,c,d,new $),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new $,materialIndex:0};ir.getNormal(Rc,Pc,Ic,f.normal),h.face=f,h.barycoord=d}return h}var $a=class extends Kn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=_n,h=_n,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Za=class extends xi{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Co=new Me,Gg=new Me,Uc=[],Vg=new is,yy=new Me,ka=new He,za=new Ps,Ja=class extends He{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Za(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new is),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Co),Vg.copy(t.boundingBox).applyMatrix4(Co),this.boundingBox.union(Vg)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Co),za.copy(t.boundingSphere).applyMatrix4(Co),this.boundingSphere.union(za)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ka.geometry=this.geometry,ka.material=this.material,ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(n),t.ray.intersectsSphere(za)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Co),Gg.multiplyMatrices(n,Co),ka.matrixWorld=Gg,ka.raycast(t,Uc);for(let o=0,a=Uc.length;o<a;o++){let l=Uc[o];l.instanceId=r,l.object=this,e.push(l)}Uc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Za(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $a(new Float32Array(s*this.count),s,this.count,Ah,Li));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Or=new Ps,Sy=new te(.5,.5),Oc=new $,sr=class{constructor(t=new zi,e=new zi,n=new zi,s=new zi,r=new zi,o=new zi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],_=r[9],p=r[10],g=r[11],v=r[12],w=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,u-h,g-m,T-v).normalize(),s[1].setComponents(c+o,u+h,g+m,T+v).normalize(),s[2].setComponents(c+a,u+d,g+_,T+w).normalize(),s[3].setComponents(c-a,u-d,g-_,T-w).normalize(),n)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,u-f,g-p,T-y).normalize();else if(s[4].setComponents(c-l,u-f,g-p,T-y).normalize(),e===Pi)s[5].setComponents(c+l,u+f,g+p,T+y).normalize();else if(e===No)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(t){Or.center.set(0,0,0);let e=Sy.distanceTo(t.center);return Or.radius=.7071067811865476+e,Or.applyMatrix4(t.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oc.x=s.normal.x>0?t.max.x:t.min.x,Oc.y=s.normal.y>0?t.max.y:t.min.y,Oc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Wg=new Me,sh=class i{constructor(){this.coordinateSystem=Pi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Wg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new sr),n[s].setFromProjectionMatrix(Wg,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new sr),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ho=class extends ss{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xg=new Me,_d=new ko,Fc=new Ps,Bc=new $,Ka=class extends xn{constructor(t=new Hi,e=new Ho){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(s),Fc.radius+=r,t.ray.intersectsSphere(Fc)===!1)return;Xg.copy(s).invert(),_d.copy(t.ray).applyMatrix4(Xg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let m=f,_=u;m<_;m++){let p=c.getX(m);Bc.fromBufferAttribute(d,p),qg(Bc,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let m=f,_=u;m<_;m++)Bc.fromBufferAttribute(d,m),qg(Bc,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qg(i,t,e,n,s,r,o){let a=_d.distanceSqToPoint(i);if(a<e){let l=new $;_d.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qa=class extends Kn{constructor(t=[],e=Xr,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},kr=class extends Kn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Is=class extends Kn{constructor(t,e,n=Gi,s,r,o,a=_n,l=_n,c,h=Rs,d=1){if(h!==Rs&&h!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Oo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ja=class extends Is{constructor(t,e=Gi,n=Xr,s,r,o=_n,a=_n,l,c=Rs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},tl=class extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},rs=class i extends Hi{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(h,3)),this.setAttribute("uv",new Ii(d,2));function m(_,p,g,v,w,y,T,E,x,b,C){let P=y/x,N=T/b,D=y/2,G=T/2,I=E/2,z=x+1,X=b+1,F=0,tt=0,W=new $;for(let A=0;A<X;A++){let H=A*N-G;for(let lt=0;lt<z;lt++){let Pt=lt*P-D;W[_]=Pt*v,W[p]=H*w,W[g]=I,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[g]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(lt/x),d.push(1-A/b),F+=1}}for(let A=0;A<b;A++)for(let H=0;H<x;H++){let lt=f+H+z*A,Pt=f+H+z*(A+1),Y=f+(H+1)+z*(A+1),rt=f+(H+1)+z*A;l.push(lt,Pt,rt),l.push(Pt,Y,rt),tt+=6}a.addGroup(u,tt,C),u+=tt,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zr=class i extends Hi{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,u=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let v=g*f-o;for(let w=0;w<c;w++){let y=w*d-r;m.push(y,-v,0),_.push(0,0,1),p.push(w/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let w=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),E=v+1+c*g;u.push(w,y,E),u.push(y,T,E)}this.setIndex(u),this.setAttribute("position",new Ii(m,3)),this.setAttribute("normal",new Ii(_,3)),this.setAttribute("uv",new Ii(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Yr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Yg(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Yg(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function kn(i){let t={};for(let e=0;e<i.length;e++){let n=Yr(i[e]);for(let s in n)t[s]=n[s]}return t}function Yg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function My(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $d(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var H0={clone:Yr,merge:kn},by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,os=class extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=My(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new $().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},rh=class extends os{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hr=class extends ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gr=class extends Hr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Fr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Fr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var el=class extends ss{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=yh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},oh=class extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ah=class extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ro(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function kc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var rr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lh=class extends rr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pd,endingEnd:pd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case md:r=t,a=2*e-n;break;case gd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case md:o=t,l=2*n-e;break;case gd:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-e)/(s-e),_=m*m,p=_*m,g=-f*p+2*f*_-f*m,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*m+1,w=(-1-u)*p+(1.5+u)*_+.5*m,y=u*p-u*_;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[c+T]+w*o[l+T]+y*o[d+T];return r}},ch=class extends rr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},hh=class extends rr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},uh=class extends rr{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*_+o[l+p]*m;return r}let f=a*2,u=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=u*f+m*2,v=d[g],w=d[g+1],y=t*f+m*2,T=h[y],E=h[y+1],x=Ey(n,e,v,T,s);r[m]=G0(x,_,w,E,p)}return r}};function G0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function wy(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ey(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=G0(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=wy(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var yi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ro(e,this.TimeBufferType),this.values=Ro(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ro(t.times,Array),values:Ro(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),kc(t.settings)&&(n.settings={inTangents:Ro(t.settings.inTangents,Array),outTangents:Ro(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ch(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new uh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ha:e=this.InterpolantFactoryMethodDiscrete;break;case jc:e=this.InterpolantFactoryMethodLinear;break;case Gc:e=this.InterpolantFactoryMethodSmooth;break;case dd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ha;case this.InterpolantFactoryMethodLinear:return jc;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return dd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;kc(this.settings)&&($g(this.settings.inTangents,t),$g(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;kc(this.settings)&&(Zg(this.settings.inTangents,t),Zg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Vt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&jv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[f+m]||_!==e[u+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,kc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $g(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Zg(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yi.prototype.ValueTypeName="";yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=jc;var or=class extends yi{constructor(t,e,n){super(t,e,n)}};or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Ha;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var fh=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}};fh.prototype.ValueTypeName="color";var dh=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}};dh.prototype.ValueTypeName="number";var ph=class extends rr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)es.slerpFlat(r,0,o,c-a,o,c,l);return r}},nl=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ph(this.times,this.values,this.getValueSize(),t)}};nl.prototype.ValueTypeName="quaternion";nl.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends yi{constructor(t,e,n){super(t,e,n)}};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Ha;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var mh=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}};mh.prototype.ValueTypeName="vector";var gh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},V0=new gh,_h=class{constructor(t){this.manager=t!==void 0?t:V0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};_h.DEFAULT_MATERIAL_NAME="__DEFAULT";var Go=class extends xn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var fd=new Me,Jg=new $,Kg=new $,il=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jg.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jg),Kg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kg),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===No||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},zc=new $,Hc=new es,Ki=new $,sl=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zc,Hc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Hc,Ki.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(zc,Hc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Hc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},nr=new $,Qg=new te,jg=new te,Bn=class extends sl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=th*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return th*2*Math.atan(Math.tan(Xf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,e){return this.getViewBounds(t,Qg,jg),e.subVectors(jg,Qg)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xf*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xd=class extends il{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0}},rl=class extends Go{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ol=class extends sl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vd=class extends il{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vo=class extends Go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new vd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},al=class extends Go{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Po=-90,Io=1,Wo=class extends xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bn(Po,Io,t,e);s.layers=this.layers,this.add(s);let r=new Bn(Po,Io,t,e);r.layers=this.layers,this.add(r);let o=new Bn(Po,Io,t,e);o.layers=this.layers,this.add(o);let a=new Bn(Po,Io,t,e);a.layers=this.layers,this.add(a);let l=new Bn(Po,Io,t,e);l.layers=this.layers,this.add(l);let c=new Bn(Po,Io,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xh=class extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Zd="\\[\\]\\.:\\/",Ay=new RegExp("["+Zd+"]","g"),Jd="[^"+Zd+"]",Cy="[^"+Zd.replace("\\.","")+"]",Ry=/((?:WC+[\/:])*)/.source.replace("WC",Jd),Py=/(WCOD+)?/.source.replace("WCOD",Cy),Iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jd),Ly=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jd),Dy=new RegExp("^"+Ry+Py+Iy+Ly+"$"),Ny=["material","materials","bones","map"],yd=class{constructor(t,e,n){let s=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ay,"")}static parseTrackName(t){let e=Dy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ny.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=yd;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vw=new Float32Array(1);var t0=new Me,ll=class{constructor(t,e,n=0,s=1/0){this.ray=new ko(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return t0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(t0),this}intersectObject(t,e=!0,n=[]){return Sd(t,this,n,e),n.sort(e0),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Sd(t[s],this,n,e);return n.sort(e0),n}};function e0(i,t){return i.distance-t.distance}function Sd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Sd(r[o],t,e,!0)}}var cl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ht("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var np=class np{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};np.prototype.isMatrix2=!0;var Md=np;function Kd(i,t,e,n){let s=Uy(n);switch(e){case zd:return i*t;case Ah:return i*t/s.components*s.byteLength;case Ch:return i*t/s.components*s.byteLength;case cr:return i*t*2/s.components*s.byteLength;case Rh:return i*t*2/s.components*s.byteLength;case Hd:return i*t*3/s.components*s.byteLength;case Wi:return i*t*4/s.components*s.byteLength;case Ph:return i*t*4/s.components*s.byteLength;case dl:case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ml:case gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lh:case Nh:return Math.max(i,16)*Math.max(t,8)/4;case Ih:case Dh:return Math.max(i,8)*Math.max(t,8)/2;case Uh:case Oh:case Bh:case kh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fh:case _l:case zh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $h:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case eu:case nu:case iu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case su:case ru:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xl:case ou:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uy(i){switch(i){case si:case Od:return{byteLength:1,components:1};case $o:case Fd:case Vi:return{byteLength:2,components:1};case wh:case Eh:return{byteLength:2,components:4};case Gi:case Th:case Li:return{byteLength:4,components:1};case Bd:case kd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function u_(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fy(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let _=d[u];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ky=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ky=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,aS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,cS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dS="gl_FragColor = linearToOutputTexel( gl_FragColor );",pS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ES=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,RS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,PS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,US=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,YS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$S=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,SM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,MM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$M=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:By,alphahash_pars_fragment:ky,alphamap_fragment:zy,alphamap_pars_fragment:Hy,alphatest_fragment:Gy,alphatest_pars_fragment:Vy,aomap_fragment:Wy,aomap_pars_fragment:Xy,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:$y,beginnormal_vertex:Zy,bsdfs:Jy,iridescence_fragment:Ky,bumpmap_pars_fragment:Qy,clipping_planes_fragment:jy,clipping_planes_pars_fragment:tS,clipping_planes_pars_vertex:eS,clipping_planes_vertex:nS,color_fragment:iS,color_pars_fragment:sS,color_pars_vertex:rS,color_vertex:oS,common:aS,defaultnormal_vertex:lS,displacementmap_pars_vertex:cS,displacementmap_vertex:hS,emissivemap_fragment:uS,emissivemap_pars_fragment:fS,colorspace_fragment:dS,colorspace_pars_fragment:pS,envmap_fragment:mS,envmap_common_pars_fragment:gS,envmap_pars_fragment:_S,envmap_pars_vertex:xS,envmap_physical_pars_fragment:RS,envmap_vertex:vS,fog_vertex:yS,fog_pars_vertex:SS,fog_fragment:MS,fog_pars_fragment:bS,gradientmap_pars_fragment:TS,lightmap_pars_fragment:wS,lights_lambert_fragment:ES,lights_lambert_pars_fragment:AS,lights_pars_begin:CS,lights_toon_fragment:PS,lights_toon_pars_fragment:IS,lights_phong_fragment:LS,lights_phong_pars_fragment:DS,lights_physical_fragment:NS,lights_physical_pars_fragment:US,lights_fragment_begin:OS,lights_fragment_maps:FS,lights_fragment_end:BS,lightprobes_pars_fragment:kS,logdepthbuf_fragment:zS,logdepthbuf_pars_fragment:HS,logdepthbuf_pars_vertex:GS,logdepthbuf_vertex:VS,map_fragment:WS,map_pars_fragment:XS,map_particle_fragment:qS,map_particle_pars_fragment:YS,metalnessmap_fragment:$S,metalnessmap_pars_fragment:ZS,morphinstance_vertex:JS,morphcolor_vertex:KS,morphnormal_vertex:QS,morphtarget_pars_vertex:jS,morphtarget_vertex:tM,normal_fragment_begin:eM,normal_fragment_maps:nM,normal_pars_fragment:iM,normal_pars_vertex:sM,normal_vertex:rM,normalmap_pars_fragment:oM,clearcoat_normal_fragment_begin:aM,clearcoat_normal_fragment_maps:lM,clearcoat_pars_fragment:cM,iridescence_pars_fragment:hM,opaque_fragment:uM,packing:fM,premultiplied_alpha_fragment:dM,project_vertex:pM,dithering_fragment:mM,dithering_pars_fragment:gM,roughnessmap_fragment:_M,roughnessmap_pars_fragment:xM,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:yM,shadowmap_vertex:SM,shadowmask_pars_fragment:MM,skinbase_vertex:bM,skinning_pars_vertex:TM,skinning_vertex:wM,skinnormal_vertex:EM,specularmap_fragment:AM,specularmap_pars_fragment:CM,tonemapping_fragment:RM,tonemapping_pars_fragment:PM,transmission_fragment:IM,transmission_pars_fragment:LM,uv_pars_fragment:DM,uv_pars_vertex:NM,uv_vertex:UM,worldpos_vertex:OM,background_vert:FM,background_frag:BM,backgroundCube_vert:kM,backgroundCube_frag:zM,cube_vert:HM,cube_frag:GM,depth_vert:VM,depth_frag:WM,distance_vert:XM,distance_frag:qM,equirect_vert:YM,equirect_frag:$M,linedashed_vert:ZM,linedashed_frag:JM,meshbasic_vert:KM,meshbasic_frag:QM,meshlambert_vert:jM,meshlambert_frag:tb,meshmatcap_vert:eb,meshmatcap_frag:nb,meshnormal_vert:ib,meshnormal_frag:sb,meshphong_vert:rb,meshphong_frag:ob,meshphysical_vert:ab,meshphysical_frag:lb,meshtoon_vert:cb,meshtoon_frag:hb,points_vert:ub,points_frag:fb,shadow_vert:db,shadow_frag:pb,sprite_vert:mb,sprite_frag:gb},wt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},hs={basic:{uniforms:kn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:kn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:kn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:kn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:kn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:kn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:kn([wt.points,wt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:kn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:kn([wt.common,wt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:kn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:kn([wt.sprite,wt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:kn([wt.common,wt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:kn([wt.lights,wt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};hs.physical={uniforms:kn([hs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var au={r:0,b:0,g:0},_b=new Me,f_=new Xt;f_.set(-1,0,0,0,1,0,0,0,1);function xb(i,t,e,n,s,r){let o=new Yt(0),a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function m(v){let w=!1,y=u(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),w=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,w){let y=u(w);y&&y.isCubeTexture?(c===void 0&&(c=new He(new rs(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:Yr(hs.backgroundCube.uniforms),vertexShader:hs.backgroundCube.vertexShader,fragmentShader:hs.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_b.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(f_),c.material.toneMapped=oe.getTransfer(y.colorSpace)!==ve,(h!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new He(new zr(2,2),new os({name:"BackgroundMaterial",uniforms:Yr(hs.background.uniforms),vertexShader:hs.background.vertexShader,fragmentShader:hs.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=oe.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,w){v.getRGB(au,$d(i)),e.buffers.color.setClear(au.r,au.g,au.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:_,dispose:g}}function vb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(N,D,G,I,z){let X=!1,F=d(N,I,G,D);r!==F&&(r=F,c(r.object)),X=u(N,I,G,z),X&&m(N,I,G,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(N,D,G,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,D,G,I){let z=I.wireframe===!0,X=n[D.id];X===void 0&&(X={},n[D.id]=X);let F=N.isInstancedMesh===!0?N.id:0,tt=X[F];tt===void 0&&(tt={},X[F]=tt);let W=tt[G.id];W===void 0&&(W={},tt[G.id]=W);let A=W[z];return A===void 0&&(A=f(l()),W[z]=A),A}function f(N){let D=[],G=[],I=[];for(let z=0;z<e;z++)D[z]=0,G[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:I,object:N,attributes:{},index:null}}function u(N,D,G,I){let z=r.attributes,X=D.attributes,F=0,tt=G.getAttributes();for(let W in tt)if(tt[W].location>=0){let H=z[W],lt=X[W];if(lt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(lt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(lt=N.instanceColor)),H===void 0||H.attribute!==lt||lt&&H.data!==lt.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function m(N,D,G,I){let z={},X=D.attributes,F=0,tt=G.getAttributes();for(let W in tt)if(tt[W].location>=0){let H=X[W];H===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(H=N.instanceColor));let lt={};lt.attribute=H,H&&H.data&&(lt.data=H.data),z[W]=lt,F++}r.attributes=z,r.attributesNum=F,r.index=I}function _(){let N=r.newAttributes;for(let D=0,G=N.length;D<G;D++)N[D]=0}function p(N){g(N,0)}function g(N,D){let G=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;G[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),z[N]!==D&&(i.vertexAttribDivisor(N,D),z[N]=D)}function v(){let N=r.newAttributes,D=r.enabledAttributes;for(let G=0,I=D.length;G<I;G++)D[G]!==N[G]&&(i.disableVertexAttribArray(G),D[G]=0)}function w(N,D,G,I,z,X,F){F===!0?i.vertexAttribIPointer(N,D,G,z,X):i.vertexAttribPointer(N,D,G,I,z,X)}function y(N,D,G,I){_();let z=I.attributes,X=G.getAttributes(),F=D.defaultAttributeValues;for(let tt in X){let W=X[tt];if(W.location>=0){let A=z[tt];if(A===void 0&&(tt==="instanceMatrix"&&N.instanceMatrix&&(A=N.instanceMatrix),tt==="instanceColor"&&N.instanceColor&&(A=N.instanceColor)),A!==void 0){let H=A.normalized,lt=A.itemSize,Pt=t.get(A);if(Pt===void 0)continue;let Y=Pt.buffer,rt=Pt.type,St=Pt.bytesPerElement,Tt=rt===i.INT||rt===i.UNSIGNED_INT||A.gpuType===Th;if(A.isInterleavedBufferAttribute){let pt=A.data,Ot=pt.isInterleavedBuffer===!0?pt.stride:pt.itemSize,ye=A.offset;if(pt.isInstancedInterleavedBuffer||pt.isInstancedBufferAttribute){for(let Ct=0;Ct<W.locationSize;Ct++)g(W.location+Ct,pt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)p(W.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Ct=0;Ct<W.locationSize;Ct++)w(W.location+Ct,lt/W.locationSize,rt,H,Ot*St,(ye+lt/W.locationSize*Ct)*St,Tt)}else{if(A.isInstancedBufferAttribute){for(let pt=0;pt<W.locationSize;pt++)g(W.location+pt,A.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let pt=0;pt<W.locationSize;pt++)p(W.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let pt=0;pt<W.locationSize;pt++)w(W.location+pt,lt/W.locationSize,rt,H,lt*St,lt/W.locationSize*pt*St,Tt)}}else if(F!==void 0){let H=F[tt];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(W.location,H);break;case 3:i.vertexAttrib3fv(W.location,H);break;case 4:i.vertexAttrib4fv(W.location,H);break;default:i.vertexAttrib1fv(W.location,H)}}}}v()}function T(){C();for(let N in n){let D=n[N];for(let G in D){let I=D[G];for(let z in I){let X=I[z];for(let F in X)h(X[F].object),delete X[F];delete I[z]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let G in D){let I=D[G];for(let z in I){let X=I[z];for(let F in X)h(X[F].object),delete X[F];delete I[z]}}delete n[N.id]}function x(N){for(let D in n){let G=n[D];for(let I in G){let z=G[I];if(z[N.id]===void 0)continue;let X=z[N.id];for(let F in X)h(X[F].object),delete X[F];delete z[N.id]}}}function b(N){for(let D in n){let G=n[D],I=N.isInstancedMesh===!0?N.id:0,z=G[I];if(z!==void 0){for(let X in z){let F=z[X];for(let tt in F)h(F[tt].object),delete F[tt];delete z[X]}delete G[I],Object.keys(G).length===0&&delete n[D]}}}function C(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function yb(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Wi&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==si&&x!==Li&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:E}}function Mb(i){let t=this,e=null,n=0,s=!1,r=!1,o=new zi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,w=v*4,y=g.clippingState||null;l.value=y,y=h(m,f,w,u);for(let T=0;T!==w;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,y=u;w!==_;++w,y+=4)o.copy(d[w]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var bl=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rs(5,5,5),r=new os({name:"CubemapFromEquirect",uniforms:Yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Vr});r.uniforms.tEquirect.value=e;let o=new He(s,r),a=e.minFilter;return e.minFilter===Ls&&(e.minFilter=Jn),new Wo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},W0=256,bb=3,Tb=20,d_=256,p_=16,wb=3,Eb=new $,Ab=new Yt,Jo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wo(1,10,null),this._boxMesh=new He(new rs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Eb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Ab));let p=new Wo(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(W0,k0(t))}_fromTexture(t,e){t.mapping===Xr||t.mapping===Yo?this._setSize(t.image.length===0?W0:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=X0(t,!1,!1),n=Math.log2(t)-bb;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=X0(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Xr||t.mapping===Yo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y0()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=q0()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Cb(),this._integrationMaterial=Rb());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/p_);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-wb)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(d_*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Pb());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function X0(i,t,e){return new bl(i,{minFilter:Ls,generateMipmaps:t,type:Vi,colorSpace:Ga,depthBuffer:e})}function Tl(i,t,e){return new os({name:i,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:bn,blending:Vr,depthTest:!1,depthWrite:!1})}function Cb(){return Tl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${d_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rb(){return Tl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:p_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Pb(){return Tl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Tb}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function q0(){return Tl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Y0(){return Tl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ib(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Sh||u===Mh)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new bl(m.height);return _.fromEquirectangularTexture(i,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===Sh||u===Mh,_=u===Xr||u===Yo;if(m||_){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Jo(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Jo(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,u){return u===Sh?f.mapping=Xr:u===Mh&&(f.mapping=Yo),f}function l(f){let u=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Lb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fr("WebGLRenderer: "+n+" extension not supported."),s}}}function Db(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],i.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,w=p.count>=65535?Ya:qa,y=new w(Math.ceil(v/3)*6,1),T=y.array;if(_!==null){let x=_.array;g=_.version;for(let b=0,C=0;b<v;b+=3){let P=x[b+0],N=x[b+1],D=x[b+2];T[C++]=P,T[C++]=N,T[C++]=N,T[C++]=D,T[C++]=D,T[C++]=P}}else{g=p.version;for(let x=0,b=0;x<v;x+=3){let C=x+0,P=x+1,N=x+2;T[b++]=C,T[b++]=P,T[b++]=P,T[b++]=N,T[b++]=N,T[b++]=C}}y.version=g;let E=r.get(m);E&&t.remove(E),r.set(m,y)}function f(m){let _=r.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return r.get(m)}function u(){for(let m in s){let _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Nb(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,d*o,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let p=0;p<u;p++)_+=f[p];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ub(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ob(i,t,e){let n=new WeakMap,s=new Oe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let C=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;u===!0&&(w=1),m===!0&&(w=2),_===!0&&(w=3);let y=a.attributes.position.count*w,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*d),x=new Xa(E,y,T,d);x.type=Li,x.needsUpdate=!0;let b=w*4;for(let P=0;P<d;P++){let N=p[P],D=g[P],G=v[P],I=y*T*4*P;for(let z=0;z<N.count;z++){let X=z*b;u===!0&&(s.fromBufferAttribute(N,z),E[I+X+0]=s.x,E[I+X+1]=s.y,E[I+X+2]=s.z,E[I+X+3]=0),m===!0&&(s.fromBufferAttribute(D,z),E[I+X+4]=s.x,E[I+X+5]=s.y,E[I+X+6]=s.z,E[I+X+7]=0),_===!0&&(s.fromBufferAttribute(G,z),E[I+X+8]=s.x,E[I+X+9]=s.y,E[I+X+10]=s.z,E[I+X+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:x,size:new te(y,T)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Fb(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Bb={[Rd]:"LINEAR_TONE_MAPPING",[Pd]:"REINHARD_TONE_MAPPING",[Id]:"CINEON_TONE_MAPPING",[ul]:"ACES_FILMIC_TONE_MAPPING",[Dd]:"AGX_TONE_MAPPING",[Nd]:"NEUTRAL_TONE_MAPPING",[Ld]:"CUSTOM_TONE_MAPPING"};function kb(i,t,e,n,s,r){let o=new vi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Hi;h.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ii([0,2,0,0,2,0],2));let d=new rh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new He(h,d),u=new ol(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,v=null,w=[],y=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<w.length;x++){let b=w[x];b.setSize&&b.setSize(T,E)}},this.setEffects=function(T){w=T,y=w.length>0&&w[0].isRenderPass===!0;let E=o.width,x=o.height;w.length>0&&a===null&&(a=new vi(E,x,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),l=new vi(E,x,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(C=>C.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Is(E,x),r===!0&&(c.format=Ds,c.type=qr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let C=0;C<w.length;C++){let P=w[C];P.setSize&&P.setSize(E,x),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===ls&&w.length===0)return!1;if(v=E,E!==null){let x=E.width,b=E.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return y===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=ls,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=g,p=!0;let x=o,b=a;for(let C=0;C<w.length;C++){let P=w[C];P.enabled!==!1&&(P.render(T,b,x,E),P.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(m!==T.outputColorSpace||_!==T.toneMapping){m=T.outputColorSpace,_=T.toneMapping,d.defines={},oe.getTransfer(m)===ve&&(d.defines.SRGB_TRANSFER="");let C=Bb[_];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var m_=new Kn,g_=new Is(1,1),__=new ja(1),x_=new Xa,v_=new ih,y_=new Qa,$0=[],Z0=[],J0=new Float32Array(16),K0=new Float32Array(9),Q0=new Float32Array(4);function Ko(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$0[s];if(r===void 0&&(r=new Float32Array(s),$0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function un(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hu(i,t){let e=Z0[t];e===void 0&&(e=new Int32Array(t),Z0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2fv(this.addr,t),fn(e,t)}}function Gb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;i.uniform3fv(this.addr,t),fn(e,t)}}function Vb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4fv(this.addr,t),fn(e,t)}}function Wb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;Q0.set(n),i.uniformMatrix2fv(this.addr,!1,Q0),fn(e,n)}}function Xb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;K0.set(n),i.uniformMatrix3fv(this.addr,!1,K0),fn(e,n)}}function qb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(un(e,n))return;J0.set(n),i.uniformMatrix4fv(this.addr,!1,J0),fn(e,n)}}function Yb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $b(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2iv(this.addr,t),fn(e,t)}}function Zb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;i.uniform3iv(this.addr,t),fn(e,t)}}function Jb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4iv(this.addr,t),fn(e,t)}}function Kb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2uiv(this.addr,t),fn(e,t)}}function jb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;i.uniform3uiv(this.addr,t),fn(e,t)}}function tT(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4uiv(this.addr,t),fn(e,t)}}function uu(i){return i.version===0&&(i.compareFunction=Wd,i.needsUpdate=!0),i}function eT(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=uu(g_):r=m_,e.setTexture2D(t||r,s)}function nT(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||v_,s)}function iT(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=uu(__):r=y_,e.setTextureCube(t||r,s)}function sT(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||x_,s)}function rT(i){switch(i){case 5126:return zb;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return Wb;case 35675:return Xb;case 35676:return qb;case 5124:case 35670:return Yb;case 35667:case 35671:return $b;case 35668:case 35672:return Zb;case 35669:case 35673:return Jb;case 5125:return Kb;case 36294:return Qb;case 36295:return jb;case 36296:return tT;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return sT}}function oT(i,t){i.uniform1fv(this.addr,t)}function aT(i,t){let e=Ko(t,this.size,2);i.uniform2fv(this.addr,e)}function lT(i,t){let e=Ko(t,this.size,3);i.uniform3fv(this.addr,e)}function cT(i,t){let e=Ko(t,this.size,4);i.uniform4fv(this.addr,e)}function hT(i,t){let e=Ko(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function uT(i,t){let e=Ko(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fT(i,t){let e=Ko(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dT(i,t){i.uniform1iv(this.addr,t)}function pT(i,t){i.uniform2iv(this.addr,t)}function mT(i,t){i.uniform3iv(this.addr,t)}function gT(i,t){i.uniform4iv(this.addr,t)}function _T(i,t){i.uniform1uiv(this.addr,t)}function xT(i,t){i.uniform2uiv(this.addr,t)}function vT(i,t){i.uniform3uiv(this.addr,t)}function yT(i,t){i.uniform4uiv(this.addr,t)}function ST(i,t,e){let n=this.cache,s=t.length,r=hu(e,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=uu(g_):o=m_;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function MT(i,t,e){let n=this.cache,s=t.length,r=hu(e,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||v_,r[o])}function bT(i,t,e){let n=this.cache,s=t.length,r=hu(e,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=uu(__):o=y_;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function TT(i,t,e){let n=this.cache,s=t.length,r=hu(e,s);un(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||x_,r[o])}function wT(i){switch(i){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return hT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return xT;case 36295:return vT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return TT}}var rp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rT(e.type)}},op=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wT(e.type)}},ap=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ip=/(\w+)(\])?(\[|\.)?/g;function j0(i,t){i.seq.push(t),i.map[t.id]=t}function ET(i,t,e){let n=i.name,s=n.length;for(ip.lastIndex=0;;){let r=ip.exec(n),o=ip.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){j0(e,c===void 0?new rp(a,i,t):new op(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ap(a),j0(e,d)),e=d}}}var Zo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ET(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function t_(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var AT=37297,CT=0;function RT(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var e_=new Xt;function PT(i){oe._getMatrix(e_,oe.workingColorSpace,i);let t=`mat3( ${e_.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Va:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function n_(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+RT(i.getShaderSource(t),a)}else return r}function IT(i,t){let e=PT(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var LT={[Rd]:"Linear",[Pd]:"Reinhard",[Id]:"Cineon",[ul]:"ACESFilmic",[Dd]:"AgX",[Nd]:"Neutral",[Ld]:"Custom"};function DT(i,t){let e=LT[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var lu=new $;function NT(){oe.getLuminanceCoefficients(lu);let i=lu.x.toFixed(4),t=lu.y.toFixed(4),e=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ml).join(`
`)}function OT(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function FT(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ml(i){return i!==""}function i_(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function s_(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(i){return i.replace(BT,kT)}function kT(i,t){let e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return lp(e)}var zT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r_(i){return i.replace(zT,HT)}function HT(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function o_(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var GT={[hl]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function VT(i){return GT[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var WT={[Yo]:"ENVMAP_MODE_REFRACTION"};function XT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":WT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qT={[yh]:"ENVMAP_BLENDING_MULTIPLY",[b0]:"ENVMAP_BLENDING_MIX",[T0]:"ENVMAP_BLENDING_ADD"};function YT(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qT[i.combine]||"ENVMAP_BLENDING_NONE"}function $T(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=VT(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=XT(e),d=YT(e),f=UT(e),u=OT(r),m=s.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ml).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ml).join(`
`),p.length>0&&(p+=`
`)):(_=[o_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ml).join(`
`),p=[o_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ls?"#define TONE_MAPPING":"",e.toneMapping!==ls?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ls?DT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,IT("linearToOutputTexel",e.outputColorSpace),NT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ml).join(`
`)),o=lp(o),o=i_(o,e),o=s_(o,e),a=lp(a),a=i_(a,e),a=s_(a,e),o=r_(o),a=r_(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+_+o,w=g+p+a,y=t_(s,s.VERTEX_SHADER,v),T=t_(s,s.FRAGMENT_SHADER,w);s.attachShader(m,y),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(y)||"",G=s.getShaderInfoLog(T)||"",I=N.trim(),z=D.trim(),X=G.trim(),F=!0,tt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,T);else{let W=n_(s,y,"vertex"),A=n_(s,T,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+W+`
`+A)}else I!==""?Ht("WebGLProgram: Program Info Log:",I):(z===""||X==="")&&(tt=!1);tt&&(P.diagnostics={runnable:F,programLog:I,vertexShader:{log:z,prefix:_},fragmentShader:{log:X,prefix:p}})}s.deleteShader(y),s.deleteShader(T),x=new Zo(s,m),b=FT(s,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(m,AT)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=CT++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}var ZT=0,cp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hp(t),e.set(t,n)),n}},hp=class{constructor(t){this.id=ZT++,this.code=t,this.usedTimes=0}};function JT(i){return i===cr||i===_l||i===xl}function KT(i,t,e,n,s,r){let o=new Fo,a=new cp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,C,P,N,D){let G=P.fog,I=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||z,X),tt=f[x.type],W=n.precision;x.precision!==null&&(W=n.getMaxPrecision(x.precision),W!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let A=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,H=A!==void 0?A.length:0,lt=0;I.morphAttributes.position!==void 0&&(lt=1),I.morphAttributes.normal!==void 0&&(lt=2),I.morphAttributes.color!==void 0&&(lt=3);let Pt,Y,rt,St;if(tt){let nt=hs[tt];Pt=nt.vertexShader,Y=nt.fragmentShader}else{Pt=x.vertexShader,Y=x.fragmentShader;let nt=a.getVertexShaderStage(x),Et=a.getFragmentShaderStage(x);a.update(x,nt,Et),rt=nt.id,St=Et.id}let Tt=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Ot=N.isInstancedMesh===!0,ye=N.isBatchedMesh===!0,Ct=!!x.map,qt=!!x.matcap,Nt=!!F,kt=Nt&&F.isPMREMTexture===!0,de=!!x.aoMap,he=!!x.lightMap,J=!!x.bumpMap&&x.wireframe===!1,ne=!!x.normalMap,Qe=!!x.displacementMap,be=!!x.emissiveMap,le=!!x.metalnessMap,Ge=!!x.roughnessMap,Ze=x.anisotropy>0,O=x.clearcoat>0,me=x.diffuseRoughness>0,ue=x.dispersion>0,Wt=x.retroreflectivity>0,mt=x.iridescence>0,pe=x.sheen>0,Ut=x.transmission>0,zt=Ze&&!!x.anisotropyMap,R=O&&!!x.clearcoatMap,S=O&&!!x.clearcoatNormalMap,k=O&&!!x.clearcoatRoughnessMap,ot=me&&!!x.diffuseRoughnessMap,it=mt&&!!x.iridescenceMap,dt=mt&&!!x.iridescenceThicknessMap,vt=pe&&!!x.sheenColorMap,V=pe&&!!x.sheenRoughnessMap,j=!!x.specularMap,ft=!!x.specularColorMap,L=!!x.specularIntensityMap,Q=Ut&&!!x.transmissionMap,K=Ut&&!!x.thicknessMap,gt=!!x.gradientMap,ct=!!x.alphaMap,_t=x.alphaTest>0,at=!!x.alphaHash,xt=!!x.extensions,st=ls;x.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(st=i.toneMapping);let et=kt?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,yt={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:Pt,fragmentShader:Y,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:St,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:ye,batchingColor:ye&&N._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&N.instanceColor!==null,instancingMorph:Ot&&N.morphTexture!==null,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ct,matcap:qt,envMap:Nt,envMapMode:Nt&&F.mapping,envMapPMREM:kt,envMapMaxLod:kt?et.length-1:null,envMapSize:kt?et[0].width:null,aoMap:de,lightMap:he,bumpMap:J,normalMap:ne,displacementMap:Qe,emissiveMap:be,normalMapObjectSpace:ne&&x.normalMapType===A0,normalMapTangentSpace:ne&&x.normalMapType===vl,packedNormalMap:ne&&x.normalMapType===vl&&JT(x.normalMap.format),metalnessMap:le,roughnessMap:Ge,anisotropy:Ze,anisotropyMap:zt,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:k,diffuseRoughness:me,diffuseRoughnessMap:ot,dispersion:ue,retroreflection:Wt,iridescence:mt,iridescenceMap:it,iridescenceThicknessMap:dt,sheen:pe,sheenColorMap:vt,sheenRoughnessMap:V,specularMap:j,specularColorMap:ft,specularIntensityMap:L,transmission:Ut,transmissionMap:Q,thicknessMap:K,gradientMap:gt,opaque:x.transparent===!1&&x.blending===qo&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:_t,alphaHash:at,combine:x.combine,mapUv:Ct&&u(x.map.channel),aoMapUv:de&&u(x.aoMap.channel),lightMapUv:he&&u(x.lightMap.channel),bumpMapUv:J&&u(x.bumpMap.channel),normalMapUv:ne&&u(x.normalMap.channel),displacementMapUv:Qe&&u(x.displacementMap.channel),emissiveMapUv:be&&u(x.emissiveMap.channel),metalnessMapUv:le&&u(x.metalnessMap.channel),roughnessMapUv:Ge&&u(x.roughnessMap.channel),anisotropyMapUv:zt&&u(x.anisotropyMap.channel),clearcoatMapUv:R&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:it&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:V&&u(x.sheenRoughnessMap.channel),specularMapUv:j&&u(x.specularMap.channel),specularColorMapUv:ft&&u(x.specularColorMap.channel),specularIntensityMapUv:L&&u(x.specularIntensityMap.channel),transmissionMapUv:Q&&u(x.transmissionMap.channel),thicknessMapUv:K&&u(x.thicknessMap.channel),alphaMapUv:ct&&u(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ne||Ze),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Ct||ct),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&ne===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:lt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.filter(nt=>nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&oe.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:be&&x.emissiveMap.isVideoTexture===!0&&oe.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===as,flipSided:x.side===bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&x.extensions.multiDraw===!0||ye)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let b=f[x.type],C;if(b){let P=hs[b];C=H0.clone(P.uniforms)}else C=x.uniforms;return C}function w(x,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new $T(i,b,x,s),c.push(C),h.set(b,C)),C}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function QT(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function jT(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function a_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function l_(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,m,_,p,g){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:p,group:g},i[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=p,v.group=g),t++,v}function l(f,u,m,_,p,g,v){v.reversedDepth===!0&&(p=-p);let w=a(f,u,m,_,p,g);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):e.push(w)}function c(f,u,m,_,p,g){let v=a(f,u,m,_,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||jT),n.length>1&&n.sort(u||a_),s.length>1&&s.sort(u||a_)}function d(){for(let f=t,u=i.length;f<u;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function t1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new l_,i.set(n,[o])):s>=r.length?(o=new l_,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function e1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new $,color:new Yt};break;case"SpotLight":e={position:new $,direction:new $,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[t.id]=e,e}}}function n1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i1=0;function s1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r1(i){let t=new e1,e=n1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);let s=new $,r=new Me,o=new Me;function a(c){let h=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,m=0,_=0,p=0,g=0,v=0,w=0,y=0,T=0,E=0,x=0,b=0,C=0,P=0;c.sort(s1);for(let D=0,G=c.length;D<G;D++){let I=c[D],z=I.color,X=I.intensity,F=I.distance,tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===cr?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*X,d+=z.g*X,f+=z.b*X;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],X);P++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let A=I.shadow,H=e.get(I);H.shadowIntensity=A.intensity,H.shadowBias=A.bias,H.shadowNormalBias=A.normalBias,H.shadowRadius=A.radius,H.shadowMapSize.copy(A.mapSize).multiply(A.getFrameExtents()),n.sunShadow[m]=H,n.sunShadowMap[m]=tt;let lt=A.getViewportCount();for(let Pt=0;Pt<lt;Pt++)n.sunShadowMatrix[_+Pt]=A.getMatrix(Pt),n.sunShadowCascade[_+Pt]=A._cascadeData[Pt];_+=lt,m++}n.sun[u]=W,u++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let A=I.shadow,H=e.get(I);H.shadowIntensity=A.intensity,H.shadowBias=A.bias,H.shadowNormalBias=A.normalBias,H.shadowRadius=A.radius,H.shadowMapSize=A.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(X),W.distance=F,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;let A=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,A.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[v]=A.matrix,I.castShadow){let H=e.get(I);H.shadowIntensity=A.intensity,H.shadowBias=A.bias,H.shadowNormalBias=A.normalBias,H.shadowRadius=A.radius,H.shadowMapSize=A.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=tt,x++}v++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(z).multiplyScalar(X),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=W,w++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let A=I.shadow,H=e.get(I);H.shadowIntensity=A.intensity,H.shadowBias=A.bias,H.shadowNormalBias=A.normalBias,H.shadowRadius=A.radius,H.shadowMapSize=A.mapSize,H.shadowCameraNear=A.camera.near,H.shadowCameraFar=A.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(X),W.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[y]=W,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==u||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==b||N.numLightProbes!==P)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=w,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-C,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,N.sunLength=u,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=b,N.numLightProbes=P,n.version=i1++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let y=c[v];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),f++}else if(y.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function c_(i){let t=new r1(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new c_(i),t.set(s,[a])):r>=o.length?(a=new c_(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var a1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c1=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],h1=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],h_=new Me,Sl=new $,sp=new $;function u1(i,t,e){let n=new sr,s=new te,r=new te,o=new Oe,a=new oh,l=new ah,c={},h=e.maxTextureSize,d={[lr]:bn,[bn]:lr,[as]:as},f=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:a1,fragmentShader:l1}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new Hi;m.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let g=this.type;this.render=function(E,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===s0&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hl);let C=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Vr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let G=g!==this.type;G&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=E.length;I<z;I++){let X=E[I],F=X.shadow;if(F===void 0){Ht("WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let tt=F.getFrameExtents();s.multiply(tt),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,F.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=W,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Xo){if(X.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new vi(s.x,s.y,{format:cr,type:Vi,minFilter:Jn,magFilter:Jn,generateMipmaps:!1}),F.map.texture.name=X.name+".shadowMap",F.map.depthTexture=new Is(s.x,s.y,Li),F.map.depthTexture.name=X.name+".shadowMapDepth",F.map.depthTexture.format=Rs,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=_n,F.map.depthTexture.magFilter=_n}else X.isPointLight?(F.map=new bl(s.x),F.map.depthTexture=new ja(s.x,Gi)):(F.map=new vi(s.x,s.y),F.map.depthTexture=new Is(s.x,s.y,Gi)),F.map.depthTexture.name=X.name+".shadowMap",F.map.depthTexture.format=Rs,this.type===hl?(F.map.depthTexture.compareFunction=W?Vd:Gd,F.map.depthTexture.minFilter=Jn,F.map.depthTexture.magFilter=Jn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=_n,F.map.depthTexture.magFilter=_n);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let A=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();X.isPointLight!==!0&&F.updateMatrices(X,b);let H=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let lt=0;lt<A;lt++){let Pt=F.getCamera(lt);if(X.isPointLight){let Y=F.camera,rt=F.matrix,St=X.distance||Y.far;St!==Y.far&&(Y.far=St,Y.updateProjectionMatrix()),Sl.setFromMatrixPosition(X.matrixWorld),Y.position.copy(Sl),sp.copy(Y.position),sp.add(c1[lt]),Y.up.copy(h1[lt]),Y.lookAt(sp),Y.updateMatrixWorld(),rt.makeTranslation(-Sl.x,-Sl.y,-Sl.z),h_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),F._frustum.setFromProjectionMatrix(h_,Y.coordinateSystem,Y.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(F.map),i.clear());let Y=F.getViewport(lt);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),D.viewport(o)}n=F.getFrustum(lt),y(x,b,Pt,X,H,this.type)}F.isPointLightShadow!==!0&&this.type===Xo&&v(F,b),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(C,P,N)};function v(E,x){let b=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new vi(s.x,s.y,{format:cr,type:Vi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,b,f,_,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,b,u,_,null)}function w(E,x,b,C){let P=null,N=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)P=N;else if(P=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=P.uuid,G=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let z=I[G];z===void 0&&(z=P.clone(),I[G]=z,x.addEventListener("dispose",T)),P=z}if(P.visible=x.visible,P.wireframe=x.wireframe,C===Xo?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:d[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let D=i.properties.get(P);D.light=b}return P}function y(E,x,b,C,P,N){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Xo)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let I=t.update(E),z=E.material;if(Array.isArray(z)){let X=I.groups;for(let F=0,tt=X.length;F<tt;F++){let W=X[F],A=z[W.materialIndex];if(A&&A.visible){let H=w(E,A,C,N);E.onBeforeShadow(i,E,x,b,I,H,W),i.renderBufferDirect(b,null,I,H,E,W),E.onAfterShadow(i,E,x,b,I,H,W)}}}else if(z.visible){let X=w(E,z,C,N);E.onBeforeShadow(i,E,x,b,I,X,null),i.renderBufferDirect(b,null,I,X,E,null),E.onAfterShadow(i,E,x,b,I,X,null)}}let G=E.children;for(let I=0,z=G.length;I<z;I++)y(G[I],x,b,C,P,N)}function T(E){E.target.removeEventListener("dispose",T);for(let b in c){let C=c[b],P=E.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function f1(i,t){function e(){let L=!1,Q=new Oe,K=null,gt=new Oe(0,0,0,0);return{setMask:function(ct){K!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),K=ct)},setLocked:function(ct){L=ct},setClear:function(ct,_t,at,xt,st){st===!0&&(ct*=xt,_t*=xt,at*=xt),Q.set(ct,_t,at,xt),gt.equals(Q)===!1&&(i.clearColor(ct,_t,at,xt),gt.copy(Q))},reset:function(){L=!1,K=null,gt.set(-1,0,0,0)}}}function n(){let L=!1,Q=!1,K=null,gt=null,ct=null;return{setReversed:function(_t){if(Q!==_t){let at=t.get("EXT_clip_control");_t?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Q=_t;let xt=ct;ct=null,this.setClear(xt)}},getReversed:function(){return Q},setTest:function(_t){_t?pt(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(_t){K!==_t&&!L&&(i.depthMask(_t),K=_t)},setFunc:function(_t){if(Q&&(_t=B0[_t]),gt!==_t){switch(_t){case Wc:i.depthFunc(i.NEVER);break;case Xc:i.depthFunc(i.ALWAYS);break;case qc:i.depthFunc(i.LESS);break;case Do:i.depthFunc(i.LEQUAL);break;case Yc:i.depthFunc(i.EQUAL);break;case $c:i.depthFunc(i.GEQUAL);break;case Zc:i.depthFunc(i.GREATER);break;case Jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=_t}},setLocked:function(_t){L=_t},setClear:function(_t){ct!==_t&&(ct=_t,Q&&(_t=1-_t),i.clearDepth(_t))},reset:function(){L=!1,K=null,gt=null,ct=null,Q=!1}}}function s(){let L=!1,Q=null,K=null,gt=null,ct=null,_t=null,at=null,xt=null,st=null;return{setTest:function(et){L||(et?pt(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(et){Q!==et&&!L&&(i.stencilMask(et),Q=et)},setFunc:function(et,yt,nt){(K!==et||gt!==yt||ct!==nt)&&(i.stencilFunc(et,yt,nt),K=et,gt=yt,ct=nt)},setOp:function(et,yt,nt){(_t!==et||at!==yt||xt!==nt)&&(i.stencilOp(et,yt,nt),_t=et,at=yt,xt=nt)},setLocked:function(et){L=et},setClear:function(et){st!==et&&(i.clearStencil(et),st=et)},reset:function(){L=!1,Q=null,K=null,gt=null,ct=null,_t=null,at=null,xt=null,st=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,w=null,y=null,T=null,E=null,x=null,b=new Yt(0,0,0),C=0,P=!1,N=null,D=null,G=null,I=null,z=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,tt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=tt>=2);let A=null,H={},lt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Y=new Oe().fromArray(lt),rt=new Oe().fromArray(Pt);function St(L,Q,K,gt){let ct=new Uint8Array(4),_t=i.createTexture();i.bindTexture(L,_t),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<K;at++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(Q+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return _t}let Tt={};Tt[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(Do),J(!1),ne(bd),pt(i.CULL_FACE),de(Vr);function pt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ot(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function ye(L,Q){return f[L]!==Q?(i.bindFramebuffer(L,Q),f[L]=Q,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Q),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ct(L,Q){let K=m,gt=!1;if(L){K=u.get(Q),K===void 0&&(K=[],u.set(Q,K));let ct=L.textures;if(K.length!==ct.length||K[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,at=ct.length;_t<at;_t++)K[_t]=i.COLOR_ATTACHMENT0+_t;K.length=ct.length,gt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,gt=!0);gt&&i.drawBuffers(K)}function qt(L){return _!==L?(i.useProgram(L),_=L,!0):!1}let Nt={[Wr]:i.FUNC_ADD,[o0]:i.FUNC_SUBTRACT,[a0]:i.FUNC_REVERSE_SUBTRACT};Nt[l0]=i.MIN,Nt[c0]=i.MAX;let kt={[h0]:i.ZERO,[u0]:i.ONE,[f0]:i.SRC_COLOR,[Ad]:i.SRC_ALPHA,[x0]:i.SRC_ALPHA_SATURATE,[g0]:i.DST_COLOR,[p0]:i.DST_ALPHA,[d0]:i.ONE_MINUS_SRC_COLOR,[Cd]:i.ONE_MINUS_SRC_ALPHA,[_0]:i.ONE_MINUS_DST_COLOR,[m0]:i.ONE_MINUS_DST_ALPHA,[v0]:i.CONSTANT_COLOR,[y0]:i.ONE_MINUS_CONSTANT_COLOR,[S0]:i.CONSTANT_ALPHA,[M0]:i.ONE_MINUS_CONSTANT_ALPHA};function de(L,Q,K,gt,ct,_t,at,xt,st,et){if(L===Vr){p===!0&&(Ot(i.BLEND),p=!1);return}if(p===!1&&(pt(i.BLEND),p=!0),L!==r0){if(L!==g||et!==P){if((v!==Wr||T!==Wr)&&(i.blendEquation(i.FUNC_ADD),v=Wr,T=Wr),et)switch(L){case qo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Td:i.blendFunc(i.ONE,i.ONE);break;case wd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ed:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",L);break}else switch(L){case qo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Td:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wd:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ed:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",L);break}w=null,y=null,E=null,x=null,b.set(0,0,0),C=0,g=L,P=et}return}ct=ct||Q,_t=_t||K,at=at||gt,(Q!==v||ct!==T)&&(i.blendEquationSeparate(Nt[Q],Nt[ct]),v=Q,T=ct),(K!==w||gt!==y||_t!==E||at!==x)&&(i.blendFuncSeparate(kt[K],kt[gt],kt[_t],kt[at]),w=K,y=gt,E=_t,x=at),(xt.equals(b)===!1||st!==C)&&(i.blendColor(xt.r,xt.g,xt.b,st),b.copy(xt),C=st),g=L,P=!1}function he(L,Q){L.side===as?Ot(i.CULL_FACE):pt(i.CULL_FACE);let K=L.side===bn;Q&&(K=!K),J(K),L.blending===qo&&L.transparent===!1?de(Vr):de(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let gt=L.stencilWrite;a.setTest(gt),gt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(L){N!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),N=L)}function ne(L){L!==n0?(pt(i.CULL_FACE),L!==D&&(L===bd?i.cullFace(i.BACK):L===i0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),D=L}function Qe(L){L!==G&&(F&&i.lineWidth(L),G=L)}function be(L,Q,K){L?(pt(i.POLYGON_OFFSET_FILL),(I!==Q||z!==K)&&(I=Q,z=K,o.getReversed()&&(Q=-Q,K=-K),i.polygonOffset(Q,K))):Ot(i.POLYGON_OFFSET_FILL)}function le(L){L?pt(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function Ge(L){L===void 0&&(L=i.TEXTURE0+X-1),A!==L&&(i.activeTexture(L),A=L)}function Ze(L,Q,K){K===void 0&&(A===null?K=i.TEXTURE0+X-1:K=A);let gt=H[K];gt===void 0&&(gt={type:void 0,texture:void 0},H[K]=gt),(gt.type!==L||gt.texture!==Q)&&(A!==K&&(i.activeTexture(K),A=K),i.bindTexture(L,Q||Tt[L]),gt.type=L,gt.texture=Q)}function O(){let L=H[A];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(L){Vt("WebGLState:",L)}}function ue(){try{i.compressedTexImage3D(...arguments)}catch(L){Vt("WebGLState:",L)}}function Wt(){try{i.texSubImage2D(...arguments)}catch(L){Vt("WebGLState:",L)}}function mt(){try{i.texSubImage3D(...arguments)}catch(L){Vt("WebGLState:",L)}}function pe(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Vt("WebGLState:",L)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Vt("WebGLState:",L)}}function zt(){try{i.texStorage2D(...arguments)}catch(L){Vt("WebGLState:",L)}}function R(){try{i.texStorage3D(...arguments)}catch(L){Vt("WebGLState:",L)}}function S(){try{i.texImage2D(...arguments)}catch(L){Vt("WebGLState:",L)}}function k(){try{i.texImage3D(...arguments)}catch(L){Vt("WebGLState:",L)}}function ot(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function it(L,Q){d[L]!==Q&&(i.pixelStorei(L,Q),d[L]=Q)}function dt(L){Y.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Y.copy(L))}function vt(L){rt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function V(L,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let gt=K.get(L);gt===void 0&&(gt=i.getUniformBlockIndex(Q,L.name),i.uniformBlockBinding(Q,gt,gt),K.set(L,gt))}function j(L,Q,K){let ct=c.get(Q).get(L);l[ct]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,ct,K),l[ct]=K)}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},A=null,H={},f={},l={},u=new WeakMap,m=[],_=null,p=!1,g=null,v=null,w=null,y=null,T=null,E=null,x=null,b=new Yt(0,0,0),C=0,P=!1,N=null,D=null,G=null,I=null,z=null,Y.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Ot,bindFramebuffer:ye,drawBuffers:Ct,useProgram:qt,setBlending:de,setMaterial:he,setFlipSided:J,setCullFace:ne,setLineWidth:Qe,setPolygonOffset:be,setScissorTest:le,activeTexture:Ge,bindTexture:Ze,unbindTexture:O,compressedTexImage2D:me,compressedTexImage3D:ue,texImage2D:S,texImage3D:k,pixelStorei:it,getParameter:ot,updateUBOMapping:V,uniformBlockBinding:j,texStorage2D:zt,texStorage3D:R,texSubImage2D:Wt,texSubImage3D:mt,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ut,scissor:dt,viewport:vt,reset:ft}}function d1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,_=new FinalizationRegistry(R=>m.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):Wa("canvas")}function v(R,S,k){let ot=1,it=zt(R);if((it.width>k||it.height>k)&&(ot=k/Math.max(it.width,it.height)),ot<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let dt=Math.floor(ot*it.width),vt=Math.floor(ot*it.height);f===void 0&&(f=g(dt,vt));let V=S?g(dt,vt):f;return V.width=dt,V.height=vt,V.getContext("2d").drawImage(R,0,0,dt,vt),Ht("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+dt+"x"+vt+")."),V}else return"data"in R&&Ht("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function w(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,S,k,ot,it,dt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let vt;ot&&(vt=t.get("EXT_texture_norm16"),vt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=S;if(S===i.RED&&(k===i.FLOAT&&(V=i.R32F),k===i.HALF_FLOAT&&(V=i.R16F),k===i.UNSIGNED_BYTE&&(V=i.R8),k===i.UNSIGNED_SHORT&&vt&&(V=vt.R16_EXT),k===i.SHORT&&vt&&(V=vt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.R8UI),k===i.UNSIGNED_SHORT&&(V=i.R16UI),k===i.UNSIGNED_INT&&(V=i.R32UI),k===i.BYTE&&(V=i.R8I),k===i.SHORT&&(V=i.R16I),k===i.INT&&(V=i.R32I)),S===i.RG&&(k===i.FLOAT&&(V=i.RG32F),k===i.HALF_FLOAT&&(V=i.RG16F),k===i.UNSIGNED_BYTE&&(V=i.RG8),k===i.UNSIGNED_SHORT&&vt&&(V=vt.RG16_EXT),k===i.SHORT&&vt&&(V=vt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.RG8UI),k===i.UNSIGNED_SHORT&&(V=i.RG16UI),k===i.UNSIGNED_INT&&(V=i.RG32UI),k===i.BYTE&&(V=i.RG8I),k===i.SHORT&&(V=i.RG16I),k===i.INT&&(V=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.RGB8UI),k===i.UNSIGNED_SHORT&&(V=i.RGB16UI),k===i.UNSIGNED_INT&&(V=i.RGB32UI),k===i.BYTE&&(V=i.RGB8I),k===i.SHORT&&(V=i.RGB16I),k===i.INT&&(V=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),k===i.UNSIGNED_INT&&(V=i.RGBA32UI),k===i.BYTE&&(V=i.RGBA8I),k===i.SHORT&&(V=i.RGBA16I),k===i.INT&&(V=i.RGBA32I)),S===i.RGB&&(k===i.UNSIGNED_SHORT&&vt&&(V=vt.RGB16_EXT),k===i.SHORT&&vt&&(V=vt.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),S===i.RGBA){let j=dt?Va:oe.getTransfer(it);k===i.FLOAT&&(V=i.RGBA32F),k===i.HALF_FLOAT&&(V=i.RGBA16F),k===i.UNSIGNED_BYTE&&(V=j===ve?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&vt&&(V=vt.RGBA16_EXT),k===i.SHORT&&vt&&(V=vt.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function x(R,S){let k;return R?S===null||S===Gi||S===qr?k=i.DEPTH24_STENCIL8:S===Li?k=i.DEPTH32F_STENCIL8:S===$o&&(k=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===qr?k=i.DEPTH_COMPONENT24:S===Li?k=i.DEPTH_COMPONENT32F:S===$o&&(k=i.DEPTH_COMPONENT16),k}function b(R,S){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==Jn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){let S=new WeakRef(R);n.get(R).__ref=S,m.add(S),_.register(R,S,S)}function P(R){let S=n.get(R).__ref;S!==void 0&&(m.delete(S),_.unregister(S))}function N(R){G(R.target)}function D(R){I(R.target)}function G(R){R.removeEventListener("dispose",N),P(R),X(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",D),P(R),tt(R)}function z(){for(let R of m){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):G(S))}m.clear(),d.clear()}function X(R){let S=n.get(R);if(S.__webglInit===void 0)return;let k=R.source,ot=u.get(k);if(ot){let it=ot[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&F(R),Object.keys(ot).length===0&&u.delete(k)}n.remove(R)}function F(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let k=R.source,ot=u.get(k);delete ot[S.__cacheKey],o.memory.textures--}function tt(R){let S=n.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let k=R.depthTexture;if(k&&k.renderTarget===R&&G(k),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let dt=0;dt<S.__webglFramebuffer[it].length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[it][dt]);else i.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)i.deleteFramebuffer(S.__webglFramebuffer[it]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ot=R.textures;for(let it=0,dt=ot.length;it<dt;it++){let vt=n.get(ot[it]);vt.__webglTexture&&(i.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(ot[it])}n.remove(R)}let W=0;function A(){W=0}function H(){return W}function lt(R){W=R}function Pt(){let R=W;return R>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,R}function Y(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function rt(R,S){let k=n.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let ot=R.image;if(ot===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{he(k,R,S);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function St(R,S){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){he(k,R,S);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function Tt(R,S){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){he(k,R,S);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function pt(R,S){let k=n.get(R);if(R.version>0&&k.__version!==R.version){J(k,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}let Ot={[Kc]:i.REPEAT,[Qi]:i.CLAMP_TO_EDGE,[Qc]:i.MIRRORED_REPEAT},ye={[_n]:i.NEAREST,[w0]:i.NEAREST_MIPMAP_NEAREST,[fl]:i.NEAREST_MIPMAP_LINEAR,[Jn]:i.LINEAR,[bh]:i.LINEAR_MIPMAP_NEAREST,[Ls]:i.LINEAR_MIPMAP_LINEAR},Ct={[R0]:i.NEVER,[Wd]:i.ALWAYS,[P0]:i.LESS,[Gd]:i.LEQUAL,[I0]:i.EQUAL,[Vd]:i.GEQUAL,[L0]:i.GREATER,[D0]:i.NOTEQUAL};function qt(R,S){if(S.type===Li&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Jn||S.magFilter===bh||S.magFilter===fl||S.magFilter===Ls||S.minFilter===Jn||S.minFilter===bh||S.minFilter===fl||S.minFilter===Ls)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ot[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ot[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ot[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ye[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ye[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_n||S.minFilter!==fl&&S.minFilter!==Ls||S.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Nt(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",N),C(S));let ot=S.source,it=u.get(ot);it===void 0&&(it={},u.set(ot,it));let dt=Y(S);if(dt!==R.__cacheKey){it[dt]===void 0&&(it[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[dt].usedTimes++;let vt=it[R.__cacheKey];vt!==void 0&&(it[R.__cacheKey].usedTimes--,vt.usedTimes===0&&F(S)),R.__cacheKey=dt,R.__webglTexture=it[dt].texture}return k}function kt(R,S,k){return Math.floor(Math.floor(R/k)/S)}function de(R,S,k,ot){let dt=R.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,k,ot,S.data);else{dt.sort((L,Q)=>L.start-Q.start);let vt=0;for(let L=1;L<dt.length;L++){let Q=dt[vt],K=dt[L],gt=Q.start+Q.count,ct=kt(K.start,S.width,4),_t=kt(Q.start,S.width,4);K.start<=gt+1&&ct===_t&&kt(K.start+K.count-1,S.width,4)===ct?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++vt,dt[vt]=K)}dt.length=vt+1;let V=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let L=0,Q=dt.length;L<Q;L++){let K=dt[L],gt=Math.floor(K.start/4),ct=Math.ceil(K.count/4),_t=gt%S.width,at=Math.floor(gt/S.width),xt=ct,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,at),e.texSubImage2D(i.TEXTURE_2D,0,_t,at,xt,st,k,ot,S.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,V),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function he(R,S,k){let ot=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ot=i.TEXTURE_3D);let it=Nt(R,S),dt=S.source;e.bindTexture(ot,R.__webglTexture,i.TEXTURE0+k);let vt=n.get(dt);if(dt.version!==vt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let st=oe.getPrimaries(oe.workingColorSpace),et=S.colorSpace===Ns?null:oe.getPrimaries(S.colorSpace),yt=S.colorSpace===Ns||st===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let j=v(S.image,!1,s.maxTextureSize);j=Ut(S,j);let ft=r.convert(S.format,S.colorSpace),L=r.convert(S.type),Q=E(S.internalFormat,ft,L,S.normalized,S.colorSpace,S.isVideoTexture);qt(ot,S);let K,gt=S.mipmaps,ct=S.isVideoTexture!==!0,_t=vt.__version===void 0||it===!0,at=dt.dataReady,xt=b(S,j);if(S.isDepthTexture)Q=x(S.format===Ds,S.type),_t&&(ct?e.texStorage2D(i.TEXTURE_2D,1,Q,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,ft,L,null));else if(S.isDataTexture)if(gt.length>0){ct&&_t&&e.texStorage2D(i.TEXTURE_2D,xt,Q,gt[0].width,gt[0].height);for(let st=0,et=gt.length;st<et;st++)K=gt[st],ct?at&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,K.width,K.height,ft,L,K.data):e.texImage2D(i.TEXTURE_2D,st,Q,K.width,K.height,0,ft,L,K.data);S.generateMipmaps=!1}else ct?(_t&&e.texStorage2D(i.TEXTURE_2D,xt,Q,j.width,j.height),at&&de(S,j,ft,L)):e.texImage2D(i.TEXTURE_2D,0,Q,j.width,j.height,0,ft,L,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ct&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Q,gt[0].width,gt[0].height,j.depth);for(let st=0,et=gt.length;st<et;st++)if(K=gt[st],S.format!==Wi)if(ft!==null)if(ct){if(at)if(S.layerUpdates.size>0){let yt=Kd(K.width,K.height,S.format,S.type);for(let nt of S.layerUpdates){let Et=K.data.subarray(nt*yt/K.data.BYTES_PER_ELEMENT,(nt+1)*yt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,nt,K.width,K.height,1,ft,Et)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,j.depth,ft,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Q,K.width,K.height,j.depth,0,K.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,K.width,K.height,j.depth,ft,L,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Q,K.width,K.height,j.depth,0,ft,L,K.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ct&&_t&&e.texStorage2D(i.TEXTURE_2D,xt,Q,gt[0].width,gt[0].height);for(let st=0,et=gt.length;st<et;st++)K=gt[st],S.format!==Wi?ft!==null?ct?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,K.width,K.height,ft,K.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Q,K.width,K.height,0,K.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?at&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,K.width,K.height,ft,L,K.data):e.texImage2D(i.TEXTURE_2D,st,Q,K.width,K.height,0,ft,L,K.data)}else if(S.isDataArrayTexture)if(ct){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Q,j.width,j.height,j.depth),at)if(S.layerUpdates.size>0){let st=Kd(j.width,j.height,S.format,S.type);for(let et of S.layerUpdates){let yt=j.data.subarray(et*st/j.data.BYTES_PER_ELEMENT,(et+1)*st/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,j.width,j.height,1,ft,L,yt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ft,L,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,ft,L,j.data);else if(S.isData3DTexture)ct?(_t&&e.texStorage3D(i.TEXTURE_3D,xt,Q,j.width,j.height,j.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ft,L,j.data)):e.texImage3D(i.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,ft,L,j.data);else if(S.isFramebufferTexture){if(_t)if(ct)e.texStorage2D(i.TEXTURE_2D,xt,Q,j.width,j.height);else{let st=j.width,et=j.height;for(let yt=0;yt<xt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Q,st,et,0,ft,L,null),st>>=1,et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),j.parentNode!==st){st.appendChild(j),d.add(S),st.onpaint=et=>{let yt=et.changedElements;for(let nt of d)yt.includes(nt.image)&&(nt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let yt=i.RGBA,nt=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,nt,Et,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ct&&_t){let st=zt(gt[0]);e.texStorage2D(i.TEXTURE_2D,xt,Q,st.width,st.height)}for(let st=0,et=gt.length;st<et;st++)K=gt[st],ct?at&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft,L,K):e.texImage2D(i.TEXTURE_2D,st,Q,ft,L,K);S.generateMipmaps=!1}else if(ct){if(_t){let st=zt(j);e.texStorage2D(i.TEXTURE_2D,xt,Q,st.width,st.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,L,j)}else e.texImage2D(i.TEXTURE_2D,0,Q,ft,L,j);w(S)&&S.mipmapsAutoUpdate===!0&&y(ot),vt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,k){if(S.image.length!==6)return;let ot=Nt(R,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let dt=n.get(it);if(it.version!==dt.__version||ot===!0){e.activeTexture(i.TEXTURE0+k);let vt=oe.getPrimaries(oe.workingColorSpace),V=S.colorSpace===Ns?null:oe.getPrimaries(S.colorSpace),j=S.colorSpace===Ns||vt===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ft=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let nt=0;nt<6;nt++)!ft&&!L?Q[nt]=v(S.image[nt],!0,s.maxCubemapSize):Q[nt]=L?S.image[nt].image:S.image[nt],Q[nt]=Ut(S,Q[nt]);let K=Q[0],gt=r.convert(S.format,S.colorSpace),ct=r.convert(S.type),_t=E(S.internalFormat,gt,ct,S.normalized,S.colorSpace),at=S.isVideoTexture!==!0,xt=dt.__version===void 0||ot===!0,st=it.dataReady,et=b(S,K);qt(i.TEXTURE_CUBE_MAP,S);let yt;if(S.isDepthTexture){if(_t=x(S.format===Ds,S.type),xt)if(at)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,_t,K.width,K.height);else for(let nt=0;nt<6;nt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,_t,K.width,K.height,0,gt,ct,null)}else if(ft){at&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,et,_t,K.width,K.height);for(let nt=0;nt<6;nt++){yt=Q[nt].mipmaps;for(let Et=0;Et<yt.length;Et++){let ie=yt[Et];S.format!==Wi?gt!==null?at?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,ie.width,ie.height,gt,ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,_t,ie.width,ie.height,0,ie.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,ie.width,ie.height,gt,ct,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,_t,ie.width,ie.height,0,gt,ct,ie.data)}}}else{if(yt=S.mipmaps,at&&xt){yt.length>0&&et++;let nt=zt(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,et,_t,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(L){at?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Q[nt].width,Q[nt].height,gt,ct,Q[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,_t,Q[nt].width,Q[nt].height,0,gt,ct,Q[nt].data);for(let Et=0;Et<yt.length;Et++){let Zt=yt[Et].image[nt].image;at?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,Zt.width,Zt.height,gt,ct,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,_t,Zt.width,Zt.height,0,gt,ct,Zt.data)}}else{at?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,gt,ct,Q[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,_t,gt,ct,Q[nt]);for(let Et=0;Et<yt.length;Et++){let ie=yt[Et];at?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,gt,ct,ie.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,_t,gt,ct,ie.image[nt])}}}w(S)&&S.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),dt.__version=it.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ne(R,S,k,ot,it,dt){let vt=r.convert(k.format,k.colorSpace),V=r.convert(k.type),j=E(k.internalFormat,vt,V,k.normalized,k.colorSpace),ft=n.get(S),L=n.get(k);if(L.__renderTarget=S,!ft.__hasExternalTextures){let Q=Math.max(1,S.width>>dt),K=Math.max(1,S.height>>dt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,dt,j,Q,K,S.depth,0,vt,V,null):e.texImage2D(it,dt,j,Q,K,0,vt,V,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,it,L.__webglTexture,0,Wt(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,it,L.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(R,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){let ot=S.depthTexture,it=ot&&ot.isDepthTexture?ot.type:null,dt=x(S.stencilBuffer,it),vt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(S),dt,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(S),dt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,dt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,R)}else{let ot=S.textures;for(let it=0;it<ot.length;it++){let dt=ot[it],vt=r.convert(dt.format,dt.colorSpace),V=r.convert(dt.type),j=E(dt.internalFormat,vt,V,dt.normalized,dt.colorSpace);mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(S),j,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(S),j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(R,S,k){let ot=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(S.depthTexture);it.__renderTarget=S;let dt=ot?S.depthTexture.image[0]:S.depthTexture.image;(!it.__webglTexture||dt.width!==S.width||dt.height!==S.height)&&(dt.width=S.width,dt.height=S.height,S.depthTexture.needsUpdate=!0),ot?pt(S.depthTexture,0):rt(S.depthTexture,0);let vt=it.__webglTexture,V=Wt(S),j=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ft=S.depthTexture.format===Ds?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Rs)mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,j,vt,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,ft,j,vt,0);else if(S.depthTexture.format===Ds)mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,j,vt,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,ft,j,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(R){let S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ot=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ot){let it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ot.removeEventListener("dispose",it)};ot.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=ot}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let ot=0;ot<6;ot++)be(S.__webglFramebuffer[ot],R,ot);else R.texture.mipmaps.length>0?be(S.__webglFramebuffer[0],R,0):be(S.__webglFramebuffer,R,0);else if(k){S.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ot]),S.__webglDepthbuffer[ot]===void 0)S.__webglDepthbuffer[ot]=i.createRenderbuffer(),Qe(S.__webglDepthbuffer[ot],R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,dt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Qe(S.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(R,S,k){let ot=n.get(R);S!==void 0&&ne(ot.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&le(R)}function Ze(R){let S=R.texture,k=n.get(R),ot=n.get(S);R.addEventListener("dispose",D),C(R);let it=R.textures,dt=R.isWebGLCubeRenderTarget===!0,vt=it.length>1;if(vt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=S.version,o.memory.textures++),dt){k.__webglFramebuffer=[];for(let V=0;V<6;V++)if(S.mipmaps.length>0){k.__webglFramebuffer[V]=[];for(let j=0;j<S.mipmaps.length;j++)k.__webglFramebuffer[V][j]=i.createFramebuffer()}else k.__webglFramebuffer[V]=i.createFramebuffer()}else{if(S.mipmaps.length>0){k.__webglFramebuffer=[];for(let V=0;V<S.mipmaps.length;V++)k.__webglFramebuffer[V]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(vt)for(let V=0,j=it.length;V<j;V++){let ft=n.get(it[V]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&mt(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let V=0;V<it.length;V++){let j=it[V];k.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[V]);let ft=r.convert(j.format,j.colorSpace),L=r.convert(j.type),Q=E(j.internalFormat,ft,L,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),K=Wt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Q,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,k.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Qe(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),qt(i.TEXTURE_CUBE_MAP,S);for(let V=0;V<6;V++)if(S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)ne(k.__webglFramebuffer[V][j],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,j);else ne(k.__webglFramebuffer[V],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);w(S)?y(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(vt){for(let V=0,j=it.length;V<j;V++){let ft=it[V],L=n.get(ft),Q=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),qt(Q,ft),ne(k.__webglFramebuffer,R,ft,i.COLOR_ATTACHMENT0+V,Q,0),w(ft)&&y(Q)}e.unbindTexture()}else{let V=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(V=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,ot.__webglTexture),qt(V,S),S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)ne(k.__webglFramebuffer[j],R,S,i.COLOR_ATTACHMENT0,V,j);else ne(k.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,V,0);w(S)?y(V):S.mipmaps.length>0&&i.texParameteri(V,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&le(R)}function O(R){let S=R.textures;for(let k=0,ot=S.length;k<ot;k++){let it=S[k];if(w(it)&&it.mipmapsAutoUpdate===!0){let dt=T(R),vt=n.get(it).__webglTexture;e.bindTexture(dt,vt),y(dt),e.unbindTexture()}}}let me=[];function ue(R){if(R.samples>0){if(mt(R)===!1){let S=R.textures,k=R.width,ot=R.height,it=i.COLOR_BUFFER_BIT,dt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(R),V=S.length>1;if(V)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);let L=n.get(S[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,k,ot,0,0,k,ot,it,i.NEAREST),l===!0&&(me.length=0,me.push(i.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&me.push(dt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);let L=n.get(S[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,L,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Wt(R){return Math.min(s.maxSamples,R.samples)}function mt(R){let S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ut(R,S){let k=R.colorSpace,ot=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ga&&k!==Ns&&(oe.getTransfer(k)===ve?(ot!==Wi||it!==si)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",k)),S}function zt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Pt,this.resetTextureUnits=A,this.getTextureUnits=H,this.setTextureUnits=lt,this.setTexture2D=rt,this.setTexture2DArray=St,this.setTexture3D=Tt,this.setTextureCube=pt,this.rebindTextures=Ge,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=mt,this.dispose=z}function p1(i,t){function e(n,s=Ns){let r,o=oe.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===wh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Od)return i.BYTE;if(n===Fd)return i.SHORT;if(n===$o)return i.UNSIGNED_SHORT;if(n===Th)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===Li)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===zd)return i.ALPHA;if(n===Hd)return i.RGB;if(n===Wi)return i.RGBA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===Ah)return i.RED;if(n===Ch)return i.RED_INTEGER;if(n===cr)return i.RG;if(n===Rh)return i.RG_INTEGER;if(n===Ph)return i.RGBA_INTEGER;if(n===dl||n===pl||n===ml||n===gl)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ih||n===Lh||n===Dh||n===Nh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uh||n===Oh||n===Fh||n===Bh||n===kh||n===_l||n===zh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uh||n===Oh)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bh)return r.COMPRESSED_R11_EAC;if(n===kh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_l)return r.COMPRESSED_RG11_EAC;if(n===zh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hh||n===Gh||n===Vh||n===Wh||n===Xh||n===qh||n===Yh||n===$h||n===Zh||n===Jh||n===Kh||n===Qh||n===jh||n===tu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$h)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tu)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eu||n===nu||n===iu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===eu)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===iu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===su||n===ru||n===xl||n===ou)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===su)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ou)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var m1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,up=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new tl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new os({vertexShader:m1,fragmentShader:g1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fp=class extends ts{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,_=typeof XRWebGLBinding<"u",p=new up,g={},v=e.getContextAttributes(),w=null,y=null,T=[],E=[],x=new te,b=null,C=null,P=new Bn;P.viewport=new Oe;let N=new Bn;N.viewport=new Oe;let D=[P,N],G=new xh,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=T[Y];return rt===void 0&&(rt=new Bo,T[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=T[Y];return rt===void 0&&(rt=new Bo,T[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=T[Y];return rt===void 0&&(rt=new Bo,T[Y]=rt),rt.getHandSpace()};function X(Y){let rt=E.indexOf(Y.inputSource);if(rt===-1)return;let St=T[rt];St!==void 0&&(St.update(Y.inputSource,Y.frame,c||o),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",tt);for(let Y=0;Y<T.length;Y++){let rt=E[Y];rt!==null&&(E[Y]=null,T[Y].disconnect(rt))}I=null,z=null,p.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(w),u=null,f=null,d=null,s=null,y=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),C!==null){let Y=C.camera;Y.fov=C.fov,Y.zoom=C.zoom,Y.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",F),s.addEventListener("inputsourceschange",tt),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Tt=null,pt=null;v.depth&&(pt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=v.stencil?Ds:Rs,Tt=v.stencil?qr:Gi);let Ot={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new vi(f.textureWidth,f.textureHeight,{format:Wi,type:si,depthTexture:new Is(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let St={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new vi(u.framebufferWidth,u.framebufferHeight,{format:Wi,type:si,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function tt(Y){for(let rt=0;rt<Y.removed.length;rt++){let St=Y.removed[rt],Tt=E.indexOf(St);Tt>=0&&(E[Tt]=null,T[Tt].disconnect(St))}for(let rt=0;rt<Y.added.length;rt++){let St=Y.added[rt],Tt=E.indexOf(St);if(Tt===-1){for(let Ot=0;Ot<T.length;Ot++)if(Ot>=E.length){E.push(St),Tt=Ot;break}else if(E[Ot]===null){E[Ot]=St,Tt=Ot;break}if(Tt===-1)break}let pt=T[Tt];pt&&pt.connect(St)}}function W(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let rt=Y.near,St=Y.far;p.texture!==null&&(p.depthNear>0&&(rt=p.depthNear),p.depthFar>0&&(St=p.depthFar)),G.near=N.near=P.near=rt,G.far=N.far=P.far=St,(I!==G.near||z!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,z=G.far),G.layers.mask=Y.layers.mask|6,P.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let Tt=Y.parent,pt=G.cameras;W(G,Tt);for(let Ot=0;Ot<pt.length;Ot++)W(pt[Ot],Tt);G.projectionMatrix.copy(P.projectionMatrix),G.projectionMatrixInverse.copy(P.projectionMatrixInverse),C===null&&Y.isPerspectiveCamera&&(C={camera:Y,fov:Y.fov,zoom:Y.zoom}),A(Y,G,Tt)};function A(Y,rt,St){St===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=th*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(Y){return g[Y]};let H=null;function lt(Y,rt){if(h=rt.getViewerPose(c||o),m=rt,h!==null){let St=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Tt=!1;St.length!==G.cameras.length&&(G.cameras.length=0,Tt=!0);for(let Ct=0;Ct<St.length;Ct++){let qt=St[Ct],Nt=null;if(u!==null)Nt=u.getViewport(qt);else{let de=d.getViewSubImage(f,qt);Nt=de.viewport,Ct===0&&(t.setRenderTargetTextures(y,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(y))}let kt=D[Ct];kt===void 0&&(kt=new Bn,kt.layers.enable(Ct),kt.viewport=new Oe,D[Ct]=kt),kt.matrix.fromArray(qt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(qt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Ct===0&&(G.matrix.copy(kt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Tt===!0&&G.cameras.push(kt)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Ct=d.getDepthInformation(St[0]);Ct&&Ct.isValid&&Ct.texture&&p.init(Ct,s.renderState)}if(pt&&pt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Ct=0;Ct<St.length;Ct++){let qt=St[Ct].camera;if(qt){let Nt=g[qt];Nt||(Nt=new tl,g[qt]=Nt);let kt=d.getCameraImage(qt);Nt.sourceTexture=kt}}}}for(let St=0;St<T.length;St++){let Tt=E[St],pt=T[St];Tt!==null&&pt!==void 0&&pt.update(Tt,rt,c||o)}H&&H(Y,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let Pt=new u_;Pt.setAnimationLoop(lt),this.setAnimationLoop=function(Y){H=Y},this.dispose=function(){}}},_1=new Me,S_=new Xt;S_.set(-1,0,0,0,1,0,0,0,1);function x1(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,$d(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,v,w,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,v,w):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===bn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===bn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=t.get(g),w=v.envMap,y=v.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(S_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=w*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===bn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let v=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v1(i,t,e,n){let s={},r={};function o(v,w){let y=w.program;n.uniformBlockBinding(v,y,s[v.id])}function a(v,w){let y=s[v.id];y===void 0&&(m(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",p));let T=w.program;n.updateUBOMapping(v,T);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let w=i.createBuffer(),y=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,x=y.length;E<x;E++){let b=y[E];if(Array.isArray(b))for(let C=0,P=b.length;C<P;C++)h(b[C],E,C,T);else h(b,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,w,y,T){if(f(v,w,y,T)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let C=0;C<x.length;C++){let P=x[C],N=_(P,!0);d(P,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,v.__data)}}function d(v,w,y){typeof v=="number"||typeof v=="boolean"?w[y]=v:v.isMatrix3?(w[y]=v.elements[0],w[y+1]=v.elements[1],w[y+2]=v.elements[2],w[y+3]=0,w[y+4]=v.elements[3],w[y+5]=v.elements[4],w[y+6]=v.elements[5],w[y+7]=0,w[y+8]=v.elements[6],w[y+9]=v.elements[7],w[y+10]=v.elements[8],w[y+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-y),y):v.toArray(w,y)}function f(v,w,y,T){let E=v.value,x=w+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let b=T[x],C=!1;for(let P=0;P<E.length;P++)u(E[P],b,P)===!0&&(C=!0);return C}return u(E,T,x)}function u(v,w,y){if(w[y]===void 0)return typeof v=="number"||typeof v=="boolean"?w[y]=v:ArrayBuffer.isView(v)?w[y]=v.slice():w[y]=v.clone(),!0;{let T=w[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return w[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let w=v.uniforms,y=0,T=16;for(let x=0,b=w.length;x<b;x++){let C=Array.isArray(w[x])?w[x]:[w[x]];for(let P=0,N=C.length;P<N;P++){let D=C[P],G=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(w[x])||Array.isArray(D.value),z=y;for(let F=0,tt=G.length;F<tt;F++){let W=G[F],A=_(W,I),H=y%T,lt=H%A.boundary,Pt=H+lt;y+=lt,Pt!==0&&T-Pt<A.storage&&(y+=T-Pt),F===0&&(z=y),y+=A.storage}let X=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new X((y-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function _(v,w){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let w=v.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}var y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function S1(){return cs===null&&(cs=new $a(y1,16,16,cr,Vi),cs.name="DFG_LUT",cs.minFilter=Jn,cs.magFilter=Jn,cs.wrapS=Qi,cs.wrapT=Qi,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var cu=class{constructor(t={}){let{canvas:e=U0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=si}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=u,p=new Set([Ph,Rh,Ch]),g=new Set([si,Gi,$o,qr,wh,Eh]),v=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],b=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,D=null,G=null,I=null,z=null;this._outputColorSpace=Zn;let X=0,F=0,tt=null,W=-1,A=null,H=new Oe,lt=new Oe,Pt=null,Y=new Yt(0),rt=0,St=e.width,Tt=e.height,pt=1,Ot=null,ye=null,Ct=new Oe(0,0,St,Tt),qt=new Oe(0,0,St,Tt),Nt=!1,kt=new sr,de=new sh,he=!1,J=!1,ne=new Me,Qe=new $,be=new Oe,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function Ze(){return tt===null?pt:1}let O=n;function me(M,U){return e.getContext(M,U)}let ue,Wt,mt,pe,Ut,zt,R,S,k,ot,it,dt,vt,V,j,ft,L,Q,K,gt,ct,_t,at;try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),O===null){let U="webgl2";if(O=me(U,M),O===null)throw me(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xt()}catch(M){throw e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Vt("WebGLRenderer: "+M.message),M}function xt(){ue=new Lb(O),ue.init(),ct=new p1(O,ue),Wt=new Sb(O,ue,t,ct),mt=new f1(O,ue),Wt.reversedDepthBuffer&&f&&mt.buffers.depth.setReversed(!0),G=O.createFramebuffer(),I=O.createFramebuffer(),z=O.createFramebuffer(),pe=new Ub(O),Ut=new QT,zt=new d1(O,ue,mt,Ut,Wt,ct,pe),R=new Ib(P),S=new Fy(O),_t=new vb(O,S),k=new Db(O,S,pe,_t),ot=new Fb(O,k,S,_t,pe),Q=new Ob(O,Wt,zt),j=new Mb(Ut),it=new KT(P,R,ue,Wt,_t,j),dt=new x1(P,Ut),vt=new t1,V=new o1(ue),L=new xb(P,R,mt,ot,m,l),ft=new u1(P,ot,Wt),at=new v1(O,pe,Wt,mt),K=new yb(O,ue,pe),gt=new Nb(O,ue,pe),pe.programs=it.programs,P.capabilities=Wt,P.extensions=ue,P.properties=Ut,P.renderLists=vt,P.shadowMap=ft,P.state=mt,P.info=pe}_!==si&&(C=new kb(_,e.width,e.height,a,s,r));let st=new fp(P,O);this.xr=st,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(M){M!==void 0&&(pt=M,this.setSize(St,Tt,!1))},this.getSize=function(M){return M.set(St,Tt)},this.setSize=function(M,U,Z=!0){if(st.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}St=M,Tt=U,e.width=Math.floor(M*pt),e.height=Math.floor(U*pt),Z===!0&&(e.style.width=M+"px",e.style.height=U+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(St*pt,Tt*pt).floor()},this.setDrawingBufferSize=function(M,U,Z){St=M,Tt=U,pt=Z,e.width=Math.floor(M*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===si){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(H)},this.getViewport=function(M){return M.copy(Ct)},this.setViewport=function(M,U,Z,B){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,U,Z,B),mt.viewport(H.copy(Ct).multiplyScalar(Ze()).round())},this.getScissor=function(M){return M.copy(qt)},this.setScissor=function(M,U,Z,B){M.isVector4?qt.set(M.x,M.y,M.z,M.w):qt.set(M,U,Z,B),mt.scissor(lt.copy(qt).multiplyScalar(Ze()).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(M){mt.setScissorTest(Nt=M)},this.setOpaqueSort=function(M){Ot=M},this.setTransparentSort=function(M){ye=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Z=!0){let B=0;if(M){let q=!1;if(tt!==null){let bt=tt.texture.format;q=p.has(bt)}if(q){let bt=tt.texture.type,It=g.has(bt),Mt=L.getClearColor(),At=L.getClearAlpha(),Ft=Mt.r,Jt=Mt.g,se=Mt.b;It?(v[0]=Ft,v[1]=Jt,v[2]=se,v[3]=At,O.clearBufferuiv(O.COLOR,0,v)):(w[0]=Ft,w[1]=Jt,w[2]=se,w[3]=At,O.clearBufferiv(O.COLOR,0,w))}else B|=O.COLOR_BUFFER_BIT}U&&(B|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),L.dispose(),vt.dispose(),V.dispose(),zt.dispose(),Ut.dispose(),R.dispose(),ot.dispose(),k.dispose(),_t.dispose(),at.dispose(),it.dispose(),st.dispose(),st.removeEventListener("sessionstart",Te),st.removeEventListener("sessionend",_e),on.stop()};function et(M){M.preventDefault(),qd("WebGLRenderer: Context Lost."),N=!0}function yt(){qd("WebGLRenderer: Context Restored."),N=!1;let M=pe.autoReset,U=ft.enabled,Z=ft.autoUpdate,B=ft.needsUpdate,q=ft.type;xt(),pe.autoReset=M,ft.enabled=U,ft.autoUpdate=Z,ft.needsUpdate=B,ft.type=q}function nt(M){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Et(M){let U=M.target;U.removeEventListener("dispose",Et),ie(U)}function ie(M){Zt(M),Ut.remove(M)}function Zt(M){let U=Ut.get(M).programs;U!==void 0&&(U.forEach(function(Z){it.releaseProgram(Z)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,Z,B,q,bt){U===null&&(U=le);let It=q.isMesh&&q.matrixWorld.determinantAffine()<0,Mt=Mi(M,U,Z,B,q);mt.setMaterial(B,It);let At=Z.index,Ft=1;if(B.wireframe===!0){if(At=k.getWireframeAttribute(Z),At===void 0)return;Ft=2}let Jt=Z.drawRange,se=Z.attributes.position,Lt=Jt.start*Ft,re=(Jt.start+Jt.count)*Ft;bt!==null&&(Lt=Math.max(Lt,bt.start*Ft),re=Math.min(re,(bt.start+bt.count)*Ft)),At!==null?(Lt=Math.max(Lt,0),re=Math.min(re,At.count)):se!=null&&(Lt=Math.max(Lt,0),re=Math.min(re,se.count));let en=re-Lt;if(en<0||en===1/0)return;_t.setup(q,B,Mt,Z,At);let Ie,Ee=K;if(At!==null&&(Ie=S.get(At),Ee=gt,Ee.setIndex(Ie)),q.isMesh)B.wireframe===!0?(mt.setLineWidth(B.wireframeLinewidth*Ze()),Ee.setMode(O.LINES)):Ee.setMode(O.TRIANGLES);else if(q.isLine){let An=B.linewidth;An===void 0&&(An=1),mt.setLineWidth(An*Ze()),q.isLineSegments?Ee.setMode(O.LINES):q.isLineLoop?Ee.setMode(O.LINE_LOOP):Ee.setMode(O.LINE_STRIP)}else q.isPoints?Ee.setMode(O.POINTS):q.isSprite&&Ee.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Ee.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let An=q._multiDrawStarts,Dt=q._multiDrawCounts,zn=q._multiDrawCount,ge=At?S.get(At).bytesPerElement:1,fr=Ut.get(B).currentProgram.getUniforms();for(let Cn=0;Cn<zn;Cn++)fr.setValue(O,"_gl_DrawID",Cn),Ee.render(An[Cn]/ge,Dt[Cn])}else if(q.isInstancedMesh)Ee.renderInstances(Lt,en,q.count);else if(Z.isInstancedBufferGeometry){let An=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Dt=Math.min(Z.instanceCount,An);Ee.renderInstances(Lt,en,Dt)}else Ee.render(Lt,en)};function De(M,U,Z,B){D!==null&&M.isNodeMaterial&&D.setObject(B,M),he===!0&&j.setState(M,Z,!1),M.transparent===!0&&M.side===as&&M.forceSinglePass===!1?(M.side=bn,M.needsUpdate=!0,ai(M,U,B),M.side=lr,M.needsUpdate=!0,ai(M,U,B),M.side=as):ai(M,U,B)}this.compile=function(M,U,Z=null){Z===null&&(Z=M),D!==null&&D.renderStart(M,U,Z),E=V.get(Z),E.init(U),b.push(E),Z.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),M!==Z&&M.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),J=this.localClippingEnabled,he=j.init(this.clippingPlanes,J),he===!0&&j.setGlobalState(this.clippingPlanes,U),D!==null&&ft.render(E.state.shadowsArray,Z,U);let B=new Set;return M.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let bt=q.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){let Mt=bt[It];De(Mt,Z,U,q),B.add(Mt)}else De(bt,Z,U,q),B.add(bt)}),E=b.pop(),D!==null&&D.renderEnd(),B},this.compileAsync=function(M,U,Z=null){let B=this.compile(M,U,Z);return new Promise(q=>{function bt(){if(B.forEach(function(It){let At=Ut.get(It).currentProgram;(At===void 0||At.isReady())&&B.delete(It)}),B.size===0){q(M);return}setTimeout(bt,10)}ue.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let je=null;function Ne(M){je&&je(M)}function Te(){on.stop()}function _e(){on.start()}let on=new u_;on.setAnimationLoop(Ne),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(M){je=M,st.setAnimationLoop(M),M===null?on.stop():on.start()},st.addEventListener("sessionstart",Te),st.addEventListener("sessionend",_e),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(M,U);let Z=st.enabled===!0&&st.isPresenting===!0,B=C!==null&&(tt===null||Z)&&C.begin(P,tt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,U,tt),E=V.get(M,b.length),E.init(U),E.state.textureUnits=zt.getTextureUnits(),b.push(E),ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?de.setFromArrayCamera(U):kt.setFromProjectionMatrix(ne,Pi,U.reversedDepth),J=this.localClippingEnabled,he=j.init(this.clippingPlanes,J),T=vt.get(M,x.length),T.init(),x.push(T),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let It=P.xr.getDepthSensingMesh();It!==null&&we(It,U,-1/0,P.sortObjects)}we(M,U,0,P.sortObjects),T.finish(),D!==null&&D.updateLights(E.state.lightsArray),P.sortObjects===!0&&T.sort(Ot,ye),Ge=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ge&&L.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),he===!0&&j.beginShadows();let q=E.state.shadowsArray;if(ft.render(q,M,U),he===!0&&j.endShadows(),(B&&C.hasRenderPass())===!1){let It=T.opaque,Mt=T.transmissive;if(E.setupLights(),U.isArrayCamera){let At=U.cameras;if(Mt.length>0)for(let Ft=0,Jt=At.length;Ft<Jt;Ft++){let se=At[Ft];oi(It,Mt,M,se)}Ge&&L.render(M);for(let Ft=0,Jt=At.length;Ft<Jt;Ft++){let se=At[Ft];En(T,M,se,se.viewport)}}else Mt.length>0&&oi(It,Mt,M,U),Ge&&L.render(M),En(T,M,U)}tt!==null&&F===0&&(zt.updateMultisampleRenderTarget(tt),zt.updateRenderTargetMipmap(tt)),B&&C.end(P),M.isScene===!0&&M.onAfterRender(P,M,U),_t.resetDefaultState(),W=-1,A=null,b.pop(),b.length>0?(E=b[b.length-1],zt.setTextureUnits(E.state.textureUnits),he===!0&&j.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,D!==null&&D.renderEnd()};function we(M,U,Z,B){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let It=U.isArrayCamera?de:kt;if(!M.frustumCulled||M.intersectsFrustum(It)){B&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);let Mt=ot.update(M),At=M.material;At.visible&&T.push(M,Mt,At,Z,be.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let It=U.isArrayCamera?de:kt;if(!M.frustumCulled||M.intersectsFrustum(It)){let Mt=ot.update(M),At=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),be.copy(M.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),be.copy(Mt.boundingSphere.center)),be.applyMatrix4(M.matrixWorld).applyMatrix4(ne)),Array.isArray(At)){let Ft=Mt.groups;for(let Jt=0,se=Ft.length;Jt<se;Jt++){let Lt=Ft[Jt],re=At[Lt.materialIndex];re&&re.visible&&T.push(M,Mt,re,Z,be.z,Lt,U)}}else At.visible&&T.push(M,Mt,At,Z,be.z,null,U)}}}let bt=M.children;for(let It=0,Mt=bt.length;It<Mt;It++)we(bt[It],U,Z,B)}function En(M,U,Z,B){let{opaque:q,transmissive:bt,transparent:It}=M;E.setupLightsView(Z),he===!0&&j.setGlobalState(P.clippingPlanes,Z),B&&mt.viewport(H.copy(B)),q.length>0&&Ve(q,U,Z),bt.length>0&&Ve(bt,U,Z),It.length>0&&Ve(It,U,Z),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function oi(M,U,Z,B){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Lt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new vi(1,1,{generateMipmaps:!0,type:Lt?Vi:si,minFilter:Ls,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let bt=E.state.transmissionRenderTarget[B.id],It=B.viewport||H;bt.setSize(It.z*P.transmissionResolutionScale,It.w*P.transmissionResolutionScale);let Mt=P.getRenderTarget(),At=P.getActiveCubeFace(),Ft=P.getActiveMipmapLevel();P.setRenderTarget(bt),P.getClearColor(Y),rt=P.getClearAlpha(),rt<1&&P.setClearColor(16777215,.5),P.clear(),Ge&&L.render(Z);let Jt=P.toneMapping;P.toneMapping=ls;let se=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),he===!0&&j.setGlobalState(P.clippingPlanes,B),Ve(M,Z,B),zt.updateMultisampleRenderTarget(bt),zt.updateRenderTargetMipmap(bt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let re=0,en=U.length;re<en;re++){let Ie=U[re],{object:Ee,geometry:An,material:Dt,group:zn}=Ie;if(Dt.side===as&&Ee.layers.test(B.layers)){let ge=Dt.side;Dt.side=bn,Dt.needsUpdate=!0,tn(Ee,Z,B,An,Dt,zn),Dt.side=ge,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(zt.updateMultisampleRenderTarget(bt),zt.updateRenderTargetMipmap(bt))}P.setRenderTarget(Mt,At,Ft),P.setClearColor(Y,rt),se!==void 0&&(B.viewport=se),P.toneMapping=Jt}function Ve(M,U,Z){let B=U.isScene===!0?U.overrideMaterial:null;for(let q=0,bt=M.length;q<bt;q++){let It=M[q],{object:Mt,geometry:At,group:Ft}=It,Jt=It.material;Jt.allowOverride===!0&&B!==null&&(Jt=B),Mt.layers.test(Z.layers)&&tn(Mt,U,Z,At,Jt,Ft)}}function tn(M,U,Z,B,q,bt){D!==null&&q.isNodeMaterial&&D.setObject(M,q),M.onBeforeRender(P,U,Z,B,q,bt),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(P,U,Z,B,M,bt),q.transparent===!0&&q.side===as&&q.forceSinglePass===!1?(q.side=bn,q.needsUpdate=!0,P.renderBufferDirect(Z,U,B,q,M,bt),q.side=lr,q.needsUpdate=!0,P.renderBufferDirect(Z,U,B,q,M,bt),q.side=as):P.renderBufferDirect(Z,U,B,q,M,bt),M.onAfterRender(P,U,Z,B,q,bt)}function an(M){let U=0;for(let Z of M)Z.texture!==null&&U++;return U}function ai(M,U,Z){U.isScene!==!0&&(U=le);let B=Ut.get(M),q=E.state.lights,bt=E.state.shadowsArray,It=q.state.version,Mt=it.getParameters(M,q.state,bt,U,Z,E.state.lightProbeGridArray),At=it.getProgramCacheKey(Mt),Ft=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;let Jt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=R.get(M.envMap||B.environment,Jt),B.envMapRotation=B.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",Et),Ft=new Map,B.programs=Ft,B.programVariants=new Map);let se=Ft.get(At);if(se!==void 0){if(B.currentProgram===se&&B.lightsStateVersion===It)return We(M,Mt),se}else Mt.uniforms=it.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,Z,Mt),M.onBeforeCompile(Mt,P),se=it.acquireProgram(Mt,At),Ft.set(At,se),B.uniforms=Mt.uniforms;let Lt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=j.uniform),We(M,Mt),B.needsLights=Pl(M),B.lightsStateVersion=It,B.needsLights&&(Lt.ambientLightColor.value=q.state.ambient,Lt.lightProbe.value=q.state.probe,Lt.sunLights.value=q.state.sun,Lt.sunLightShadows.value=q.state.sunShadow,Lt.directionalLights.value=q.state.directional,Lt.directionalLightShadows.value=q.state.directionalShadow,Lt.spotLights.value=q.state.spot,Lt.spotLightShadows.value=q.state.spotShadow,Lt.rectAreaLights.value=q.state.rectArea,Lt.ltc_1.value=q.state.rectAreaLTC1,Lt.ltc_2.value=q.state.rectAreaLTC2,Lt.pointLights.value=q.state.point,Lt.pointLightShadows.value=q.state.pointShadow,Lt.hemisphereLights.value=q.state.hemi,Lt.sunShadowMatrix.value=q.state.sunShadowMatrix,Lt.sunShadowCascade.value=q.state.sunShadowCascade,Lt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Lt.spotLightMatrix.value=q.state.spotLightMatrix,Lt.spotLightMap.value=q.state.spotLightMap,Lt.pointShadowMatrix.value=q.state.pointShadowMatrix),B.numLightProbeGrids=an(E.state.lightProbeGridArray),B.currentProgram=se,B.uniformsList=null,se}function Zr(M,U,Z,B,q){let bt=Ut.get(M),It=bt.currentProgram.id+","+B+","+q,Mt=bt.programVariants.get(It);return Mt===void 0?(Mt=ai(M,U,Z),bt.programVariants.set(It,Mt)):(bt.currentProgram=Mt,bt.uniformsList=null,bt.outputColorSpace=B,bt.toneMapping=q),Mt}function ln(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Zo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function We(M,U){let Z=Ut.get(M);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Mi(M,U,Z,B,q){U.isScene!==!0&&(U=le),zt.resetTextureUnits();let bt=U.fog,It=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,Mt=tt===null?P.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:oe.workingColorSpace,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ft=R.get(B.envMap||It,At),Jt=B.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,se=!!Z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Lt=!!Z.morphAttributes.position,re=!!Z.morphAttributes.normal,en=!!Z.morphAttributes.color,Ie=ls;B.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ie=P.toneMapping);let Ee=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,An=Ee!==void 0?Ee.length:0,Dt=Ut.get(B),zn=E.state.lights;if(he===!0&&(J===!0||M!==A)){let Fe=M===A&&B.id===W;j.setState(B,M,Fe)}let ge=!1,fr=!1;B.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==zn.state.version||q.isBatchedMesh&&Dt.batching===!1||!q.isBatchedMesh&&Dt.batching===!0||q.isBatchedMesh&&Dt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Dt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Dt.instancing===!1||!q.isInstancedMesh&&Dt.instancing===!0||q.isSkinnedMesh&&Dt.skinning===!1||!q.isSkinnedMesh&&Dt.skinning===!0||q.isInstancedMesh&&Dt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Dt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Dt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Dt.instancingMorph===!1&&q.morphTexture!==null||Dt.envMap!==Ft||B.fog===!0&&Dt.fog!==bt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==j.numPlanes||Dt.numIntersection!==j.numIntersection)||Dt.vertexAlphas!==Jt||Dt.vertexTangents!==se||Dt.morphTargets!==Lt||Dt.morphNormals!==re||Dt.morphColors!==en||Dt.morphTargetsCount!==An||Dt.numLightProbeGrids!==an(E.state.lightProbeGridArray)?ge=!0:(Dt.outputColorSpace!==Mt||Dt.toneMapping!==Ie)&&(fr=!0):(ge=!0,Dt.__version=B.version);let Cn=Dt.currentProgram;(ge===!0||fr===!0)&&(Cn=fr===!0?Zr(B,U,q,Mt,Ie):ai(B,U,q),D&&B.isNodeMaterial&&D.onUpdateProgram(B,Cn,Dt));let Il=!1,Bs=!1,dr=!1,fe=Cn.getUniforms(),vn=Dt.uniforms;if(mt.useProgram(Cn.program)&&(Il=!0,Bs=!0,dr=!0),B.id!==W&&(W=B.id,Bs=!0),Il||A!==M){mt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),fe.setValue(O,"projectionMatrix",M.projectionMatrix),fe.setValue(O,"viewMatrix",M.matrixWorldInverse);let dn=fe.map.cameraPosition;dn!==void 0&&dn.setValue(O,Qe.setFromMatrixPosition(M.matrixWorld)),Wt.logarithmicDepthBuffer&&fe.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&fe.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),A!==M&&(A=M,Bs=!0,dr=!0)}if(Dt.needsLights&&(zn.state.sunShadowMap.length>0&&fe.setValue(O,"sunShadowMap",zn.state.sunShadowMap,zt),zn.state.directionalShadowMap.length>0&&fe.setValue(O,"directionalShadowMap",zn.state.directionalShadowMap,zt),zn.state.spotShadowMap.length>0&&fe.setValue(O,"spotShadowMap",zn.state.spotShadowMap,zt),zn.state.pointShadowMap.length>0&&fe.setValue(O,"pointShadowMap",zn.state.pointShadowMap,zt)),q.isSkinnedMesh){fe.setOptional(O,q,"bindMatrix"),fe.setOptional(O,q,"bindMatrixInverse");let Fe=q.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),fe.setValue(O,"boneTexture",Fe.boneTexture,zt))}q.isBatchedMesh&&(fe.setOptional(O,q,"batchingTexture"),fe.setValue(O,"batchingTexture",q._matricesTexture,zt),fe.setOptional(O,q,"batchingIdTexture"),fe.setValue(O,"batchingIdTexture",q._indirectTexture,zt),fe.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&fe.setValue(O,"batchingColorTexture",q._colorsTexture,zt));let Ni=Z.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&Q.update(q,Z,Cn),(Bs||Dt.receiveShadow!==q.receiveShadow)&&(Dt.receiveShadow=q.receiveShadow,fe.setValue(O,"receiveShadow",q.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(vn.envMapIntensity.value=U.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=S1()),Bs){if(fe.setValue(O,"toneMappingExposure",P.toneMappingExposure),Dt.needsLights&&na(vn,dr),bt&&B.fog===!0&&dt.refreshFogUniforms(vn,bt),dt.refreshMaterialUniforms(vn,B,pt,Tt,E.state.transmissionRenderTarget[M.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let Fe=y,dn=0;for(let fs of E.state.lightProbeGridArray)fs.texture!==null&&(Fe.textures[dn]=fs.texture,Fe.min[dn]=fs.boundingBox.min,Fe.max[dn]=fs.boundingBox.max,Fe.resolution[dn]=fs.resolution,dn++);for(let fs in Fe)Fe[fs].length=dn;vn.probesSH.value=Fe.textures,vn.probesMin.value=Fe.min,vn.probesMax.value=Fe.max,vn.probesResolution.value=Fe.resolution}Zo.upload(O,ln(Dt),vn,zt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Zo.upload(O,ln(Dt),vn,zt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&fe.setValue(O,"center",q.center),fe.setValue(O,"modelViewMatrix",q.modelViewMatrix),fe.setValue(O,"normalMatrix",q.normalMatrix),fe.setValue(O,"modelMatrix",q.matrixWorld),B.uniformsGroups!==void 0){let Fe=B.uniformsGroups;for(let dn=0,fs=Fe.length;dn<fs;dn++){let wp=Fe[dn];at.update(wp,Cn),at.bind(wp,Cn)}}return Cn}function na(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Pl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(M,U,Z){let B=Ut.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ut.get(M.texture).__webglTexture=U,Ut.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:Z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let Z=Ut.get(M);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Z=0){tt=M,X=U,F=Z;let B=null,q=!1,bt=!1;if(M){let Mt=Ut.get(M);if(Mt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(O.FRAMEBUFFER,Mt.__webglFramebuffer),H.copy(M.viewport),lt.copy(M.scissor),Pt=M.scissorTest,mt.viewport(H),mt.scissor(lt),mt.setScissorTest(Pt),W=-1;return}else if(Mt.__webglFramebuffer===void 0)zt.setupRenderTarget(M);else if(Mt.__hasExternalTextures)zt.rebindTextures(M,Ut.get(M.texture).__webglTexture,Ut.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Jt=M.depthTexture;if(Mt.__boundDepthTexture!==Jt){if(Jt!==null&&Ut.has(Jt)&&(M.width!==Jt.image.width||M.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(M)}}let At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(bt=!0);let Ft=Ut.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?B=Ft[U][Z]:B=Ft[U],q=!0):M.samples>0&&zt.useMultisampledRTT(M)===!1?B=Ut.get(M).__webglMultisampledFramebuffer:Array.isArray(Ft)?B=Ft[Z]:B=Ft,H.copy(M.viewport),lt.copy(M.scissor),Pt=M.scissorTest}else H.copy(Ct).multiplyScalar(pt).floor(),lt.copy(qt).multiplyScalar(pt).floor(),Pt=Nt;if(Z!==0&&(B=G),mt.bindFramebuffer(O.FRAMEBUFFER,B)&&mt.drawBuffers(M,B),mt.viewport(H),mt.scissor(lt),mt.setScissorTest(Pt),q){let Mt=Ut.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,Z)}else if(bt){let Mt=U;for(let At=0;At<M.textures.length;At++){let Ft=Ut.get(M.textures[At]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+At,Ft.__webglTexture,Z,Mt)}}else if(M!==null&&Z!==0){let Mt=Ut.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,Z)}W=-1};function Fs(M){let U=Ut.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=Wt.textureFormatReadable(M.format),U.__typeReadable=Wt.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,Z,B,q,bt,It,Mt=0){if(!(M&&M.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Ut.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(At=At[It],Array.isArray(At)&&(At=At[0])),At){mt.bindFramebuffer(O.FRAMEBUFFER,At);try{let Ft=M.textures[Mt],Jt=Ft.format,se=Ft.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let Lt=Fs(Ft);if(Lt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-B&&Z>=0&&Z<=M.height-q&&O.readPixels(U,Z,B,q,ct.convert(Jt),ct.convert(se),bt)}finally{let Ft=tt!==null?Ut.get(tt).__webglFramebuffer:null;mt.bindFramebuffer(O.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(M,U,Z,B,q,bt,It,Mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Ut.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(At=At[It],Array.isArray(At)&&(At=At[0])),At)if(U>=0&&U<=M.width-B&&Z>=0&&Z<=M.height-q){mt.bindFramebuffer(O.FRAMEBUFFER,At);let Ft=M.textures[Mt],Jt=Ft.format,se=Ft.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Mt);let Lt=Fs(Ft);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,re),O.bufferData(O.PIXEL_PACK_BUFFER,bt.byteLength,O.STREAM_READ),O.readPixels(U,Z,B,q,ct.convert(Jt),ct.convert(se),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let en=tt!==null?Ut.get(tt).__webglFramebuffer:null;mt.bindFramebuffer(O.FRAMEBUFFER,en);let Ie=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await F0(O,Ie,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,bt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(re),O.deleteSync(Ie),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Z=0){let B=Math.pow(2,-Z),q=Math.floor(M.image.width*B),bt=Math.floor(M.image.height*B),It=U!==null?U.x:0,Mt=U!==null?U.y:0;zt.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,It,Mt,q,bt),mt.unbindTexture()},this.copyTextureToTexture=function(M,U,Z=null,B=null,q=0,bt=0){let It,Mt,At,Ft,Jt,se,Lt,re,en,Ie=M.isCompressedTexture?M.mipmaps[bt]:M.image;if(Z!==null)It=Z.max.x-Z.min.x,Mt=Z.max.y-Z.min.y,At=Z.isBox3?Z.max.z-Z.min.z:1,Ft=Z.min.x,Jt=Z.min.y,se=Z.isBox3?Z.min.z:0;else{let fe=Math.pow(2,-q);It=Math.floor(Ie.width*fe),Mt=Math.floor(Ie.height*fe),M.isDataArrayTexture?At=Ie.depth:M.isData3DTexture?At=Math.floor(Ie.depth*fe):At=1,Ft=0,Jt=0,se=0}B!==null?(Lt=B.x,re=B.y,en=B.z):(Lt=0,re=0,en=0);let Ee=ct.convert(U.format),An=ct.convert(U.type),Dt;U.isData3DTexture?(zt.setTexture3D(U,0),Dt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(zt.setTexture2DArray(U,0),Dt=O.TEXTURE_2D_ARRAY):(zt.setTexture2D(U,0),Dt=O.TEXTURE_2D),mt.activeTexture(O.TEXTURE0),mt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),mt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),mt.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let zn=mt.getParameter(O.UNPACK_ROW_LENGTH),ge=mt.getParameter(O.UNPACK_IMAGE_HEIGHT),fr=mt.getParameter(O.UNPACK_SKIP_PIXELS),Cn=mt.getParameter(O.UNPACK_SKIP_ROWS),Il=mt.getParameter(O.UNPACK_SKIP_IMAGES);mt.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),mt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),mt.pixelStorei(O.UNPACK_SKIP_PIXELS,Ft),mt.pixelStorei(O.UNPACK_SKIP_ROWS,Jt),mt.pixelStorei(O.UNPACK_SKIP_IMAGES,se);let Bs=M.isDataArrayTexture||M.isData3DTexture,dr=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let fe=Ut.get(M),vn=Ut.get(U),Ni=Ut.get(fe.__renderTarget),Fe=Ut.get(vn.__renderTarget);mt.bindFramebuffer(O.READ_FRAMEBUFFER,Ni.__webglFramebuffer),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let dn=0;dn<At;dn++)Bs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.get(M).__webglTexture,q,se+dn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.get(U).__webglTexture,bt,en+dn)),O.blitFramebuffer(Ft,Jt,Ft+It,Jt+Mt,Lt,re,Lt+It,re+Mt,O.DEPTH_BUFFER_BIT,O.NEAREST);mt.bindFramebuffer(O.READ_FRAMEBUFFER,null),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||M.isRenderTargetTexture||Ut.has(M)){let fe=Ut.get(M),vn=Ut.get(U);mt.bindFramebuffer(O.READ_FRAMEBUFFER,I),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let Ni=0;Ni<At;Ni++)Bs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,fe.__webglTexture,q,se+Ni):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,q),dr?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,vn.__webglTexture,bt,en+Ni):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vn.__webglTexture,bt),q!==0?O.blitFramebuffer(Ft,Jt,Ft+It,Jt+Mt,Lt,re,Lt+It,re+Mt,O.COLOR_BUFFER_BIT,O.NEAREST):dr?O.copyTexSubImage3D(Dt,bt,Lt,re,en+Ni,Ft,Jt,It,Mt):O.copyTexSubImage2D(Dt,bt,Lt,re,Ft,Jt,It,Mt);mt.bindFramebuffer(O.READ_FRAMEBUFFER,null),mt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else dr?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Dt,bt,Lt,re,en,It,Mt,At,Ee,An,Ie.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Dt,bt,Lt,re,en,It,Mt,At,Ee,Ie.data):O.texSubImage3D(Dt,bt,Lt,re,en,It,Mt,At,Ee,An,Ie):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,bt,Lt,re,It,Mt,Ee,An,Ie.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,bt,Lt,re,Ie.width,Ie.height,Ee,Ie.data):O.texSubImage2D(O.TEXTURE_2D,bt,Lt,re,It,Mt,Ee,An,Ie);mt.pixelStorei(O.UNPACK_ROW_LENGTH,zn),mt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge),mt.pixelStorei(O.UNPACK_SKIP_PIXELS,fr),mt.pixelStorei(O.UNPACK_SKIP_ROWS,Cn),mt.pixelStorei(O.UNPACK_SKIP_IMAGES,Il),bt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Dt),mt.unbindTexture()},this.initRenderTarget=function(M){Ut.get(M).__webglFramebuffer===void 0&&zt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?zt.setTextureCube(M,0):M.isData3DTexture?zt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?zt.setTexture2DArray(M,0):zt.setTexture2D(M,0),mt.unbindTexture()},this.resetState=function(){X=0,F=0,tt=null,mt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var fu=class extends Br{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new rs;t.deleteAttribute("uv");let e=new Hr({side:bn}),n=new Hr,s=new rl(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new He(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ja(t,n,6),a=new xn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new He(t,Qo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new He(t,Qo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new He(t,Qo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new He(t,Qo(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new He(t,Qo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new He(t,Qo(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Qo(i){return new el({color:0,emissive:16777215,emissiveIntensity:i})}var wl=new $;function Di(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;wl.copy(t),wl[n]=0,wl.normalize();let c=.5*o/(o+a),h=1-wl.angleTo(i)/l;return Math.sign(wl[e])===1?h*c:a/(o+a)+c+c*(1-h)}var du=class i extends rs{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new $,c=new $,h=new $(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,m=d.length/6,_=new $,p=.5/o;for(let g=0,v=0;g<d.length;g+=3,v+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*r,d[g+1]=h.y*Math.sign(l.y)+c.y*r,d[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/m)){case 0:_.set(1,0,0),u[v+0]=Di(_,c,"z","y",r,n),u[v+1]=1-Di(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),u[v+0]=1-Di(_,c,"z","y",r,n),u[v+1]=1-Di(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),u[v+0]=1-Di(_,c,"x","z",r,t),u[v+1]=Di(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),u[v+0]=1-Di(_,c,"x","z",r,t),u[v+1]=1-Di(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),u[v+0]=1-Di(_,c,"x","y",r,t),u[v+1]=1-Di(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),u[v+0]=Di(_,c,"x","y",r,t),u[v+1]=1-Di(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var ht={paper:"#F2ECE1",paperHi:"#FBF7F0",paperLo:"#E7DDCC",edge:"#D8CBB5",ink:"#17120D",ink2:"#3B332A",ink4:"#9A8D7E",clay:"#C0543A",clayHi:"#DC6A4B",clayLo:"#96402C",forest:"#27392C",forestHi:"#3A5340",sand:"#D2A24C",sandHi:"#E8BE6D",dark:"#191410"},$t=768,Pe=1024,Tn='"Fraunces", Georgia, serif',$e='"Hanken Grotesk", system-ui, sans-serif',b1='"Noto Sans Kannada", system-ui, sans-serif';function mu(i,t,e,n,s,r){i.beginPath(),i.roundRect(t,e,n,s,r)}function Si(i,t,e,n,s,r,o){mu(i,t,e,n,s,r),i.fillStyle=o,i.fill()}function pu(i,t,e,n,s,r){let o=i.createLinearGradient(t,e,n,s);return r.forEach((a,l)=>o.addColorStop(l/(r.length-1),a)),o}function hr(i,t,e,n,s,r,o=s/2){Si(i,t,e,n,s,o,r)}function El(i,t=.035){i.save(),i.globalAlpha=t;for(let e=0;e<2600;e++)i.fillStyle=e%2?"#000":"#fff",i.fillRect(Math.random()*$t,Math.random()*Pe,1.6,1.6);i.restore()}var T1={website(i){i.fillStyle=ht.paperHi,i.fillRect(0,0,$t,Pe),i.fillStyle=ht.paperLo,i.fillRect(0,0,$t,78),["#D8695A","#D9AA55","#7F9C72"].forEach((e,n)=>{i.fillStyle=e,i.beginPath(),i.arc(44+n*30,39,9,0,7),i.fill()}),Si(i,170,20,440,38,19,ht.paperHi),i.fillStyle=ht.ink4,i.font=`500 19px ${$e}`,i.textAlign="center",i.fillText("yourbusiness.in",390,46),i.textAlign="left",i.fillStyle=ht.clay,i.font=`600 17px ${$e}`,i.fillText("F R E S H   D A I L Y",56,168),i.fillStyle=ht.ink,i.font=`400 86px ${Tn}`,i.fillText("Fresh from",52,262),i.font=`italic 400 86px ${Tn}`,i.fillStyle=ht.clay,i.fillText("our oven.",52,352),i.fillStyle=ht.ink2,i.font=`400 24px ${$e}`,i.fillText("Cakes, bakes and coffee \u2014",56,404),i.fillText("delivered across Bengaluru.",56,438),Si(i,54,476,228,64,32,ht.ink),i.fillStyle=ht.paperHi,i.font=`600 22px ${$e}`,i.textAlign="center",i.fillText("Order now",168,516),i.textAlign="left",i.strokeStyle=ht.edge,i.lineWidth=2,mu(i,298,476,180,64,32),i.stroke(),i.fillStyle=ht.ink2,i.font=`500 21px ${$e}`,i.textAlign="center",i.fillText("Our menu",388,515),i.textAlign="left";let t=i.createRadialGradient(600,300,20,600,300,230);t.addColorStop(0,ht.sandHi),t.addColorStop(.55,"#C9803F"),t.addColorStop(1,"#8A4B25"),Si(i,490,150,230,330,26,t),i.fillStyle="rgba(251,247,240,.28)",i.beginPath(),i.ellipse(568,232,44,26,-.5,0,7),i.fill();for(let e=0;e<3;e++){let n=54+e*226;Si(i,n,596,206,212,20,ht.paper),Si(i,n+18,616,170,110,14,pu(i,n,616,n+170,726,[[ht.sandHi,ht.clay],[ht.paperLo,ht.edge],["#C9D8BE",ht.forestHi]][e])),hr(i,n+18,744,118,11,ht.ink),hr(i,n+18,768,78,9,ht.ink4)}i.fillStyle=ht.forest,i.fillRect(0,856,$t,168),i.fillStyle=ht.paperHi,i.font=`italic 400 44px ${Tn}`,i.fillText("Kavya Bakes",54,930),i.fillStyle="rgba(251,247,240,.6)",i.font=`400 20px ${$e}`,i.fillText("Jayanagar  \xB7  Open 8am \u2013 9pm",54,968),El(i)},invitation(i){i.fillStyle="#FDF8EE",i.fillRect(0,0,$t,Pe);let t=i.createLinearGradient(0,0,$t,Pe);t.addColorStop(0,"rgba(232,190,109,.18)"),t.addColorStop(1,"rgba(192,84,58,.1)"),i.fillStyle=t,i.fillRect(0,0,$t,Pe),i.strokeStyle=ht.sand,i.lineWidth=3,i.strokeRect(46,46,$t-92,Pe-92),i.strokeStyle="rgba(210,162,76,.45)",i.lineWidth=1.4,i.strokeRect(62,62,$t-124,Pe-124),i.textAlign="center",i.fillStyle="#8A6B43",i.font=`500 19px ${$e}`,i.fillText("T O G E T H E R   W I T H   T H E I R   F A M I L I E S",$t/2,190),i.fillStyle="#7A2E2A",i.font=`italic 400 112px ${Tn}`,i.fillText("Arjun",$t/2,348),i.fillStyle=ht.sand,i.font=`italic 400 62px ${Tn}`,i.fillText("&",$t/2,428),i.fillStyle="#7A2E2A",i.font=`italic 400 112px ${Tn}`,i.fillText("Meera",$t/2,532),i.fillStyle="#8A6B43",i.font=`400 20px ${$e}`,i.fillText("request the pleasure of your company",$t/2,590),i.fillStyle=ht.sand,i.fillRect($t/2-58,630,116,2),i.beginPath(),i.arc($t/2,631,6,0,7),i.fill(),i.fillStyle="#7A2E2A",i.font=`400 40px ${Tn}`,i.fillText("Sunday, 14 February",$t/2,702),i.fillStyle="#8A6B43",i.font=`400 21px ${$e}`,i.fillText("Palace Grounds, Bengaluru",$t/2,742),i.fillStyle="#7A2E2A",i.font=`500 34px ${b1}`,i.fillText("\u0CB6\u0CC1\u0CAD \u0CB5\u0CBF\u0CB5\u0CBE\u0CB9",$t/2,838),[[120,120,1],[$t-120,120,-1],[120,Pe-120,1],[$t-120,Pe-120,-1]].forEach(([e,n,s])=>{for(let r=0;r<7;r++)i.fillStyle=r%2?"rgba(210,162,76,.75)":"rgba(180,80,90,.5)",i.beginPath(),i.ellipse(e+Math.cos(r*1.1)*22*s,n+Math.sin(r*1.1)*22,16,7,r*1.1,0,7),i.fill();i.fillStyle=ht.sand,i.beginPath(),i.arc(e,n,6,0,7),i.fill()}),i.textAlign="left",El(i,.025)},brochure(i){i.fillStyle=ht.paperLo,i.fillRect(0,0,$t,Pe);let t=$t/3;i.fillStyle=ht.paperHi,i.fillRect(0,0,t-2,Pe),i.fillStyle=ht.ink,i.font=`400 42px ${Tn}`,i.fillText("Our",26,90),i.fillText("services",26,138);for(let e=0;e<5;e++)hr(i,26,180+e*28,180-e*22,10,ht.edge);Si(i,26,352,t-54,230,16,pu(i,26,352,t,582,[ht.sandHi,ht.clay]));for(let e=0;e<4;e++)hr(i,26,626+e*26,150-e*18,9,ht.edge);i.fillStyle=ht.clay,i.font=`600 15px ${$e}`,i.fillText("MAYASTUDIO.IN",26,Pe-42),i.fillStyle=ht.forest,i.fillRect(t,0,t-2,Pe),i.save(),i.translate(t+t/2,0),i.fillStyle=ht.sand,i.beginPath(),i.arc(0,270,62,0,7),i.fill(),i.fillStyle=ht.forest,i.font=`400 70px ${Tn}`,i.textAlign="center",i.fillText("M",0,296),i.fillStyle=ht.paperHi,i.font=`400 56px ${Tn}`,i.fillText("Maya",0,420),i.font=`italic 400 44px ${Tn}`,i.fillStyle=ht.sandHi,i.fillText("Studio",0,476),i.fillStyle="rgba(251,247,240,.55)",i.font=`400 18px ${$e}`,i.fillText("Design that gets",0,540),i.fillText("remembered.",0,566),i.strokeStyle="rgba(251,247,240,.3)",i.lineWidth=1.5,i.beginPath(),i.moveTo(-50,616),i.lineTo(50,616),i.stroke(),i.fillStyle="rgba(251,247,240,.45)",i.font=`500 15px ${$e}`,i.fillText("B E N G A L U R U",0,662),i.textAlign="left",i.restore(),i.fillStyle=ht.paperHi,i.fillRect(t*2,0,t,Pe);for(let e=0;e<4;e++){let n=44+e*232;Si(i,t*2+26,n,t-52,200,16,ht.paper),Si(i,t*2+44,n+20,54,54,14,[ht.clay,ht.forest,ht.sand,ht.clayLo][e]),hr(i,t*2+44,n+96,140,11,ht.ink),hr(i,t*2+44,n+122,174,8,ht.edge),hr(i,t*2+44,n+142,120,8,ht.edge)}[t,t*2].forEach(e=>{let n=i.createLinearGradient(e-16,0,e+16,0);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.5,"rgba(0,0,0,.14)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(e-16,0,32,Pe)}),El(i)},reel(i){i.fillStyle=ht.dark,i.fillRect(0,0,$t,Pe);let t=pu(i,0,0,$t,Pe,["#E0A34A","#C0543A","#6E2F38","#241A18"]);i.fillStyle=t,i.fillRect(0,0,$t,Pe),[[200,260,190,"rgba(232,190,109,.42)"],[560,640,230,"rgba(192,84,58,.4)"]].forEach(([e,n,s,r])=>{let o=i.createRadialGradient(e,n,0,e,n,s);o.addColorStop(0,r),o.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=o,i.fillRect(e-s,n-s,s*2,s*2)}),i.fillStyle="rgba(251,247,240,.92)",i.beginPath(),i.arc(58,60,24,0,7),i.fill(),i.fillStyle=ht.clay,i.font=`700 20px ${$e}`,i.textAlign="center",i.fillText("M",58,68),i.textAlign="left",i.fillStyle="#fff",i.font=`600 21px ${$e}`,i.fillText("maya.studio",94,56),i.fillStyle="rgba(255,255,255,.72)",i.font=`400 17px ${$e}`,i.fillText("Original audio",94,80),i.fillStyle="rgba(255,255,255,.18)",i.beginPath(),i.arc($t/2,Pe/2-40,64,0,7),i.fill(),i.strokeStyle="rgba(255,255,255,.5)",i.lineWidth=2,i.stroke(),i.fillStyle="#fff",i.beginPath(),i.moveTo($t/2-20,Pe/2-74),i.lineTo($t/2+30,Pe/2-40),i.lineTo($t/2-20,Pe/2-6),i.closePath(),i.fill(),i.fillStyle="#fff",i.font=`400 46px ${Tn}`,i.fillText("Aarav & Diya",48,790),i.font=`italic 400 34px ${Tn}`,i.fillStyle="rgba(255,255,255,.82)",i.fillText("the highlight film",48,836),i.fillStyle="rgba(255,255,255,.62)",i.font=`400 18px ${$e}`,i.fillText("#wedding  #bengaluru  #mayastudio",48,876),i.fillStyle="rgba(255,255,255,.3)",mu(i,48,930,$t-96,5,3),i.fill(),i.fillStyle="#fff",mu(i,48,930,($t-96)*.44,5,3),i.fill(),i.beginPath(),i.arc(48+($t-96)*.44,932,9,0,7),i.fill(),i.fillStyle="rgba(255,255,255,.7)",i.font=`500 16px ${$e}`,i.fillText("0:18",48,972),i.textAlign="right",i.fillText("0:41",$t-48,972),i.textAlign="left"},logo(i){i.fillStyle=ht.paperHi,i.fillRect(0,0,$t,Pe);let t=$t/2,e=Pe/2.4;i.fillStyle=ht.forest,i.fillRect(0,0,t-2,e-2),i.strokeStyle=ht.paperHi,i.lineWidth=14,i.beginPath(),i.arc(t/2,e/2,74,0,7),i.stroke(),i.fillStyle=ht.sand,i.beginPath(),i.arc(t/2,e/2,24,0,7),i.fill(),i.fillStyle=ht.sand,i.fillRect(t,0,t,e-2),i.fillStyle=ht.forest,i.beginPath(),i.moveTo(t+t/2-72,e/2+62),i.lineTo(t+t/2,e/2-68),i.lineTo(t+t/2+72,e/2+62),i.closePath(),i.fill(),i.fillStyle=ht.paperLo,i.fillRect(0,e,t-2,e-2),i.fillStyle=ht.ink,i.font=`italic 400 62px ${Tn}`,i.textAlign="center",i.fillText("Kavya",t/2,e+e/2+6),i.fillStyle=ht.ink4,i.font=`500 15px ${$e}`,i.fillText("B A K E H O U S E",t/2,e+e/2+44),i.textAlign="left",i.fillStyle=ht.clay,i.fillRect(t,e,t,e-2),[ht.paperHi,ht.sandHi,ht.forest,ht.dark].forEach((r,o)=>{Si(i,t+t/2-78+o%2*82,e+e/2-78+(o/2|0)*82,70,70,16,r)});let s=e*2;i.fillStyle=ht.paperHi,i.fillRect(0,s,$t,Pe-s),i.fillStyle=ht.clay,i.font=`600 16px ${$e}`,i.fillText("B R A N D   K I T",44,s+54),i.fillStyle=ht.ink,i.font=`400 40px ${Tn}`,i.fillText("Aa Bb Cc",44,s+116),i.font=`italic 400 34px ${Tn}`,i.fillStyle=ht.ink2,i.fillText("Fraunces  \xB7  Hanken Grotesk",44,s+164),[ht.clay,ht.sand,ht.forest,ht.ink,ht.paperLo].forEach((r,o)=>{i.fillStyle=r,i.beginPath(),i.arc(64+o*62,s+222,24,0,7),i.fill(),r===ht.paperLo&&(i.strokeStyle=ht.edge,i.lineWidth=1.5,i.stroke())}),El(i)},store(i){i.fillStyle=ht.paper,i.fillRect(0,0,$t,Pe),i.fillStyle=ht.paperHi,i.fillRect(0,0,$t,112),i.fillStyle=ht.ink,i.font=`italic 400 40px ${Tn}`,i.fillText("Maya",44,70),Si(i,$t-196,34,152,46,23,ht.forest),i.fillStyle=ht.paperHi,i.font=`600 18px ${$e}`,i.textAlign="center",i.fillText("Cart \xB7 2",$t-120,64),i.textAlign="left",i.fillStyle=ht.edge,i.fillRect(0,111,$t,1.5),i.fillStyle=ht.clay,i.fillRect(0,112,$t,60),i.fillStyle=ht.paperHi,i.font=`500 19px ${$e}`,i.textAlign="center",i.fillText("Free delivery on orders above \u20B9999",$t/2,150),i.textAlign="left";let t=[[ht.sandHi,"#C9803F"],["#C9D8BE",ht.forestHi],["#EFB9A4",ht.clayLo],[ht.edge,"#A08A68"],[ht.sandHi,ht.clay],["#D6C7AE",ht.forest]],e=["\u20B92,499","\u20B91,899","\u20B93,250","\u20B9999","\u20B91,450","\u20B92,100"];for(let n=0;n<6;n++){let s=n%2,r=n/2|0,o=36+s*356,a=206+r*262;Si(i,o,a,332,240,20,ht.paperHi),Si(i,o+16,a+16,300,148,14,pu(i,o,a,o+300,a+148,t[n])),hr(i,o+16,a+182,148,11,ht.ink),i.fillStyle=ht.ink,i.font=`600 22px ${$e}`,i.fillText(e[n],o+16,a+226),i.fillStyle=ht.sand;for(let l=0;l<5;l++)i.beginPath(),i.arc(o+200+l*22,a+218,6,0,7),i.fill()}El(i)}};function M_(i){let t=document.createElement("canvas");t.width=$t,t.height=Pe;let e=t.getContext("2d");return T1[i](e),t}var dp=[{key:"website",label:"Websites",service:"website",tip:"Business websites"},{key:"invitation",label:"Invitations",service:"invitation",tip:"Wedding invitations"},{key:"brochure",label:"Brochures",service:"brochure",tip:"Brochures & menus"},{key:"reel",label:"Video",service:"video",tip:"Reels & highlight films"},{key:"logo",label:"Logos",service:"logo",tip:"Logos & brand kits"},{key:"store",label:"Stores",service:"website",tip:"Online stores"}];var w1=2.25,b_=3,jo=3.05;function T_({canvas:i,tipEl:t,reduce:e,onPick:n}){let s=new cu({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,2)),s.toneMapping=ul,s.toneMappingExposure=1.08;let r=new Br,o=new Bn(38,1,.1,100);o.position.set(0,.1,9.2);let a=new Jo(s);r.environment=a.fromScene(new fu,.04).texture;let l=new Vo(16773596,1.5);l.position.set(3.4,4.2,5.2),r.add(l);let c=new Vo(13804108,.55);c.position.set(-4,1.4,-3),r.add(c),r.add(new al(16777215,.3));let h=new ji,d=new ji;h.add(d),r.add(h);let f=new du(w1,b_,.1,6,.055),u=new Gr({color:new Yt(ht.paperLo),roughness:.78,metalness:0}),m=new Gr({color:new Yt(ht.paper),roughness:.82,metalness:0}),_=dp.map((A,H)=>{let lt=new kr(M_(A.key));lt.colorSpace=Zn,lt.anisotropy=Math.min(8,s.capabilities.getMaxAnisotropy());let Pt=new Gr({map:lt,roughness:.46,metalness:0,clearcoat:.5,clearcoatRoughness:.34}),Y=new He(f,[u,u,u,u,Pt,m]),rt=H/dp.length*Math.PI*2;return Y.position.set(Math.sin(rt)*jo,0,Math.cos(rt)*jo),Y.rotation.y=rt,Y.userData={def:A,a:rt,seed:H*1.37,hover:0},d.add(Y),Y}),p=(()=>{let A=document.createElement("canvas");A.width=A.height=256;let H=A.getContext("2d").createRadialGradient(128,128,0,128,128,128);H.addColorStop(0,"rgba(90,60,35,.5)"),H.addColorStop(.55,"rgba(90,60,35,.16)"),H.addColorStop(1,"rgba(90,60,35,0)");let lt=A.getContext("2d");return lt.fillStyle=H,lt.fillRect(0,0,256,256),new kr(A)})(),g=new He(new zr(jo*3.2,jo*3.2),new zo({map:p,transparent:!0,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.position.y=-b_/2-.42,h.add(g);let v=70,w=new Float32Array(v*3);for(let A=0;A<v;A++){let H=4.2+Math.random()*3.4,lt=Math.random()*Math.PI*2;w.set([Math.cos(lt)*H,(Math.random()-.5)*6,Math.sin(lt)*H-1],A*3)}let y=new Hi;y.setAttribute("position",new xi(w,3));let T=(()=>{let A=document.createElement("canvas");A.width=A.height=64;let H=A.getContext("2d"),lt=H.createRadialGradient(32,32,0,32,32,32);return lt.addColorStop(0,"rgba(255,255,255,1)"),lt.addColorStop(.35,"rgba(232,190,109,.75)"),lt.addColorStop(1,"rgba(232,190,109,0)"),H.fillStyle=lt,H.fillRect(0,0,64,64),new kr(A)})(),E=new Ka(y,new Ho({size:.1,map:T,transparent:!0,depthWrite:!1,opacity:.75,color:13804108}));r.add(E);let x={x:0,y:0,s:1};function b(){let A=innerWidth,H=innerHeight;o.aspect=A/H,o.updateProjectionMatrix(),s.setSize(A,H,!1),A>1440?(x.x=2.95,x.y=-.15,x.s=.86):A>1280?(x.x=2.75,x.y=-.15,x.s=.8):A>1024?(x.x=2.45,x.y=-.12,x.s=.7):A>820?(x.x=2.1,x.y=-.1,x.s=.6):A>600?(x.x=0,x.y=2.05,x.s=.5):(x.x=0,x.y=2.35,x.s=.42)}b(),addEventListener("resize",b);let C={spin:0,vel:0,auto:e?0:.0016,drag:null,px:0,py:0,tx:0,ty:0,hovered:null,progress:0,intro:e?1:0,active:!0},P=new ll,N=new te,D=!1;function G(A){document.body.style.cursor=A;let H=document.getElementById("cursor");H&&H.classList.toggle("is-drag",A==="grabbing")}i.addEventListener("pointerdown",A=>{C.progress>.5||(C.drag={x:A.clientX,spin:C.spin,moved:0},i.setPointerCapture(A.pointerId),G("grabbing"))}),i.addEventListener("pointermove",A=>{if(C.tx=A.clientX/innerWidth*2-1,C.ty=A.clientY/innerHeight*2-1,N.x=C.tx,N.y=-C.ty,D=!0,C.drag){let H=A.clientX-C.drag.x;C.drag.moved=Math.max(C.drag.moved,Math.abs(H));let lt=C.drag.spin+H*.0062;C.vel=lt-C.spin,C.spin=lt}});function I(A){if(!C.drag)return;let H=C.drag.moved<5;C.drag=null,G(C.hovered?"pointer":""),H&&C.hovered&&n(C.hovered.userData.def)}i.addEventListener("pointerup",I),i.addEventListener("pointercancel",I),i.addEventListener("pointerleave",()=>{D=!1,C.hovered=null,t.classList.remove("is-on"),G("")});function z(){if(!D||C.drag||C.progress>.35)return null;P.setFromCamera(N,o);let A=P.intersectObjects(_,!1)[0];return A?A.object:null}let X=new $;function F(A){if(!A){t.classList.remove("is-on");return}let H=A.getWorldPosition(X).project(o);t.style.left=`${(H.x*.5+.5)*innerWidth}px`,t.style.top=`${(-H.y*.5+.5)*innerHeight-70}px`,t.innerHTML=`${A.userData.def.tip} <b>\xB7 book a call</b>`,t.classList.add("is-on")}let tt=new cl;function W(){if(!C.active)return;let A=tt.getElapsedTime();C.px+=(C.tx-C.px)*.055,C.py+=(C.ty-C.py)*.055;let H=z();H!==C.hovered&&(C.hovered=H,C.drag||G(H?"pointer":"")),F(C.hovered),C.drag||(C.spin+=C.vel,C.vel*=.94,C.spin+=C.auto*(C.hovered?.18:1)),d.rotation.y=C.spin+C.px*.3;let lt=C.intro,Pt=C.progress;h.position.set(x.x,x.y+Pt*2.3,0),h.scale.setScalar(x.s*(.72+.28*lt)*(1-Pt*.12)),h.rotation.x=-.075+C.py*.1+Pt*.22,_.forEach(Y=>{let rt=Y.userData,St=Y===C.hovered?1:0;rt.hover+=(St-rt.hover)*.14;let Tt=1+rt.hover*.1,pt=Math.sin(A*.7+rt.seed)*.07*(1-rt.hover);Y.position.set(Math.sin(rt.a)*jo*Tt,pt+rt.hover*.18,Math.cos(rt.a)*jo*Tt),Y.rotation.z=Math.sin(A*.5+rt.seed)*.016,Y.scale.setScalar(1+rt.hover*.045)}),g.material.opacity=.85*lt*(1-Pt),E.rotation.y=A*.014,E.material.opacity=.7*lt*(1-Pt*1.4),o.position.z=9.2-lt*.35,s.render(r,o)}return{render:W,state:C,setProgress(A){C.progress=A;let H=A<.98;H!==C.active&&(C.active=H,i.style.visibility=H?"":"hidden"),i.style.pointerEvents=A>.5?"none":""},introTo(A){C.intro=A},dispose(){_.forEach(A=>A.material.forEach(H=>{H.map&&H.map.dispose(),H.dispose()})),f.dispose(),s.dispose(),a.dispose()}}}var E_="Asia/Kolkata";var gp=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ta=["January","February","March","April","May","June","July","August","September","October","November","December"],E1=i=>`${i.getUTCFullYear()}-${String(i.getUTCMonth()+1).padStart(2,"0")}-${String(i.getUTCDate()).padStart(2,"0")}`,Us=i=>{let[t,e,n]=i.split("-").map(Number);return new Date(Date.UTC(t,e-1,n,12))},_u=(i,t)=>{let e=Us(i);return e.setUTCDate(e.getUTCDate()+t),E1(e)},A1=i=>Us(i).getUTCDay(),A_=i=>A1(i)===0;function xu(){return new Intl.DateTimeFormat("en-CA",{timeZone:E_,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date)}var C_=(i,t)=>new Date(`${i}T${t}:00+05:30`);function pp(){let i=[];for(let t=540;t<1080;t+=30)i.push(`${String(t/60|0).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`);return i}function vu(i){let[t,e]=i.split(":").map(Number),n=t>=12?"pm":"am";return`${t%12===0?12:t%12}:${String(e).padStart(2,"0")} ${n}`}function gu(i){let t=Us(i);return`${gp[t.getUTCDay()]}, ${t.getUTCDate()} ${ta[t.getUTCMonth()]}`}function Su(i,t){let e=Us(i);return`${gp[e.getUTCDay()]} ${e.getUTCDate()} ${ta[e.getUTCMonth()]}, ${vu(t)} IST`}function yu(i,t){return C_(i,t).getTime()<Date.now()+60*6e4}function C1(){let i=xu();for(let t=0;t<14;t++){if(!A_(i)&&pp().some(e=>!yu(i,e)))return i;i=_u(i,1)}return i}var Al=new Map,w_="unknown";async function R1(i){if(Al.has(i))return Al.get(i);let t=(async()=>{try{let e=await fetch(`/api/slots?date=${encodeURIComponent(i)}`,{headers:{accept:"application/json"}});if(!e.ok)throw new Error("bad status "+e.status);let n=await e.json();return w_=n.mode||"live",Array.isArray(n.taken)?n.taken:[]}catch{return w_="offline",[]}})();return Al.set(i,t),t}var _p=i=>i?Al.delete(i):Al.clear(),us={date:null,time:null},mp=new Set,xp=i=>(mp.add(i),()=>mp.delete(i));function P1(){mp.forEach(i=>i(us))}function I1(i,t){us.date=i,us.time=t,P1()}function vp({monthEl:i,daysEl:t,slotsEl:e,prevEl:n,nextEl:s,labelEl:r}){let o=0,a=us.date||C1(),l=0;function c(){let u=_u(xu(),o);return Array.from({length:14},(m,_)=>_u(u,_))}function h(u){let m=Us(u[0]),_=Us(u[u.length-1]);i.textContent=m.getUTCMonth()===_.getUTCMonth()?`${ta[m.getUTCMonth()]} ${m.getUTCFullYear()}`:`${ta[m.getUTCMonth()]} \u2013 ${ta[_.getUTCMonth()]} ${_.getUTCFullYear()}`}function d(){let u=c();h(u);let m=xu(),_=_u(m,56);t.innerHTML="",u.forEach(p=>{let g=Us(p),v=A_(p),w=p>_,y=!v&&!pp().some(x=>!yu(p,x)),T=v||w||y,E=document.createElement("button");E.type="button",E.className="bk-day"+(p===a?" is-sel":"")+(v?" is-closed":""),E.disabled=T,E.dataset.date=p,E.setAttribute("aria-pressed",String(p===a)),E.setAttribute("aria-label",v?`${gu(p)} \u2014 closed`:gu(p)),E.innerHTML=`<small>${gp[g.getUTCDay()]}</small><b>${g.getUTCDate()}</b><i>${v?"closed":p===m?"today":ta[g.getUTCMonth()].slice(0,3)}</i>`,T||E.addEventListener("click",()=>{a=p,d(),f()}),t.appendChild(E)}),n.disabled=o===0,s.disabled=o+14>56}async function f(){let u=++l,m=a;r&&(r.textContent=`Available on ${gu(m)}`),e.innerHTML='<div class="bk-loading"><span class="spin"></span>Checking the calendar\u2026</div>';let _=await R1(m);if(u!==l)return;let p=pp();if(!p.filter(v=>!yu(m,v)&&!_.includes(v)).length){e.innerHTML=`<div class="bk-empty">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>
        Nothing free on ${gu(m)}. Try the next day.</div>`;return}e.innerHTML="",p.forEach(v=>{let w=yu(m,v)||_.includes(v),y=document.createElement("button");y.type="button",y.className="bk-slot"+(us.date===m&&us.time===v?" is-sel":""),y.disabled=w,y.textContent=vu(v),y.setAttribute("aria-pressed",String(us.date===m&&us.time===v)),w&&y.setAttribute("aria-label",`${vu(v)} \u2014 already booked`),w||y.addEventListener("click",()=>I1(m,v)),e.appendChild(y)})}return n.addEventListener("click",()=>{o=Math.max(0,o-7),d()}),s.addEventListener("click",()=>{o=Math.min(49,o+7),d()}),xp(u=>{if(u.date&&u.date!==a){a=u.date;let m=xu(),_=Math.round((Us(u.date)-Us(m))/864e5);(_<o||_>=o+14)&&(o=Math.max(0,_-2)),d(),f();return}e.querySelectorAll(".bk-slot").forEach(m=>{let _=u.date===a&&vu(u.time||"")===m.textContent;m.classList.toggle("is-sel",_),m.setAttribute("aria-pressed",String(_))})}),d(),f(),{refresh(){_p(a),d(),f()},get date(){return a}}}async function R_(i){let t=await fetch("/api/book",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i)}),e=null;try{e=await t.json()}catch{}if(!t.ok||!e||!e.ok){let n=e&&e.error||`We couldn't reach the booking service (${t.status}).`;throw new Error(n)}return e}function P_({date:i,time:t,meetLink:e,name:n}){let s=C_(i,t),r=new Date(s.getTime()+30*6e4),o=l=>l.toISOString().replace(/[-:]|\.\d{3}/g,""),a=new URLSearchParams({action:"TEMPLATE",text:"Maya Studio \u2014 intro call",dates:`${o(s)}/${o(r)}`,details:`A 30-minute call with Maya Studio.${e?`

Google Meet: ${e}`:""}`,location:e||"Google Meet",ctz:E_});return n&&a.set("text",`Maya Studio \xD7 ${n} \u2014 intro call`),`https://calendar.google.com/calendar/render?${a}`}var N_={phone:"917204215343",phoneDisplay:"+91 72042 15343",email:"anupamgowda1999@gmail.com",liveCounterEveryMs:7e3,nudgeAfterMs:45e3};Re.registerPlugin(Gt);var ut=(i,t=document)=>t.querySelector(i),Ke=(i,t=document)=>[...t.querySelectorAll(i)],Qn=matchMedia("(prefers-reduced-motion: reduce)").matches,D1=matchMedia("(hover: hover) and (pointer: fine)").matches,Mu=i=>String(i??"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),I_={get(i){try{return sessionStorage.getItem(i)}catch{return null}},set(i,t){try{sessionStorage.setItem(i,t)}catch{}}},wn=null;Qn||(wn=new Eg({lerp:.1,wheelMultiplier:1}),wn.on("scroll",Gt.update),Re.ticker.add(i=>wn.raf(i*1e3)),Re.ticker.lagSmoothing(0),wn.stop());function N1(i){i&&(wn?wn.scrollTo(i,{offset:-72,duration:1.4}):i.scrollIntoView({behavior:Qn?"auto":"smooth"}))}Ke('a[href^="#"]').forEach(i=>i.addEventListener("click",t=>{let e=i.getAttribute("href");if(e.length<2)return;let n=ut(e);n&&(t.preventDefault(),G1(),N1(n))}));var Tu=i=>`https://wa.me/${N_.phone}?text=${encodeURIComponent(i)}`;ut("#fab").href=Tu("Hi Maya! I'd like to talk about a project.");ut("#waDirect").href=Tu("Hi Maya! I'd like to talk about a project.");ut("#year").textContent=new Date().getFullYear();var $r=null;function U1(){try{$r=T_({canvas:ut("#webgl"),tipEl:ut("#sceneTip"),reduce:Qn,onPick:i=>Tp(i.service)}),Re.ticker.add($r.render),Qn?$r.introTo(1):Re.to($r.state,{intro:1,duration:2.1,ease:"expo.out"})}catch(i){console.warn("3D hero unavailable:",i),ut("#webgl").style.display="none";let t=ut(".scene-hint");t&&t.remove(),$r=null}}var O1=document.fonts?Promise.race([document.fonts.ready,new Promise(i=>setTimeout(i,1200))]).catch(()=>{}):Promise.resolve(),F1=new Promise(i=>setTimeout(i,Qn?150:1150));Promise.all([O1,F1]).then(()=>{let i=ut("#loader");i.classList.add("is-gone"),document.body.classList.remove("is-loading"),wn&&wn.start(),setTimeout(()=>{i.style.display="none"},560),Qn||(Re.from(".hero-title .line-in",{yPercent:115,duration:1.1,stagger:.08,ease:"expo.out",delay:.12}),Re.from(".reveal-load",{y:20,opacity:0,duration:.85,stagger:.06,ease:"expo.out",delay:.22}),Re.from(".nav",{y:-26,opacity:0,duration:.85,ease:"expo.out",delay:.22})),k1(),requestAnimationFrame(()=>requestAnimationFrame(U1))});function B1(i){let t=e=>{[...e.childNodes].forEach(n=>{if(n.nodeType===3){if(!n.textContent.trim())return;let s=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(r=>{if(r)if(/^\s+$/.test(r))s.appendChild(document.createTextNode(r));else{let o=document.createElement("span");o.className="wrd",o.textContent=r,s.appendChild(o)}}),n.replaceWith(s)}else n.nodeType===1&&t(n)})};return t(i),Ke(".wrd",i)}function k1(){Gt.create({trigger:"#hero",start:"top top",end:"bottom top",scrub:!0,onUpdate(e){let n=e.progress;$r&&$r.setProgress(n),ut("#webgl").style.opacity=1-Re.utils.clamp(0,1,(n-.5)/.45)}}),Qn||Re.to(".hero-inner",{yPercent:-10,opacity:0,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:!0}});let i=0;if(Gt.create({start:0,end:"max",onUpdate(e){let n=e.scroll(),s=ut("#nav");s.classList.toggle("is-scrolled",n>40),innerWidth>920&&!s.classList.contains("menu-open")?(s.classList.toggle("is-hidden",n>620&&n>i+2),n<i-2&&s.classList.remove("is-hidden")):s.classList.remove("is-hidden"),i=n,e.progress>.42&&L_()}}),Ke(".nav-links a").forEach(e=>{let n=ut(e.getAttribute("href"));n&&Gt.create({trigger:n,start:"top 50%",end:"bottom 50%",onToggle:s=>e.classList.toggle("is-active",s.isActive)})}),Ke("[data-words]").forEach(e=>{let n=B1(e);if(Qn){n.forEach(s=>s.classList.add("is-on"));return}Gt.create({trigger:e,start:"top 88%",end:"top 42%",scrub:.6,onUpdate(s){let r=Math.round(s.progress*n.length);n.forEach((o,a)=>o.classList.toggle("is-on",a<r))},onLeave(){n.forEach(s=>s.classList.add("is-on"))}})}),Ke(".hl").forEach(e=>{Gt.create({trigger:e,start:"top 72%",once:!0,onEnter:()=>e.classList.add("is-on")})}),Ke(".odo").forEach(z1),Gt.create({trigger:"#numbers",start:"top 82%",once:!0,onEnter(){Ke(".odo").forEach((e,n)=>setTimeout(()=>H1(e),n*140))}}),!Qn){let e=ut("#marquee");e.innerHTML+=e.innerHTML;let n=e.scrollWidth/2;Re.to(e,{x:-n,duration:36,ease:"none",repeat:-1})}let t=Re.matchMedia();t.add("(min-width: 1101px)",()=>{if(Qn)return;Re.fromTo("#videoFrame",{rotateY:-17,rotateX:11,scale:.9},{rotateY:0,rotateX:0,scale:1,ease:"none",scrollTrigger:{trigger:".story-pin",start:"top 80%",end:"top 18%",scrub:.8}}),Re.from(".story-copy > *",{y:34,opacity:0,duration:.9,stagger:.09,ease:"expo.out",scrollTrigger:{trigger:"#story",start:"top 68%"}});let e=ut("#workTrack"),n=()=>Math.max(0,e.scrollWidth-innerWidth+40);Re.to(e,{x:()=>-n(),ease:"none",scrollTrigger:{trigger:".work-pin",start:"top top",end:()=>"+="+n(),scrub:1,pin:!0,invalidateOnRefresh:!0,onUpdate:s=>{ut("#workRail").style.width=18+s.progress*82+"%"}}})}),t.add("(max-width: 1100px)",()=>{let e=ut("#workScroll"),n=ut("#workRail"),s=()=>{let r=e.scrollWidth-e.clientWidth;n.style.width=18+(r>0?e.scrollLeft/r:0)*82+"%"};return e.addEventListener("scroll",s,{passive:!0}),s(),Qn?()=>e.removeEventListener("scroll",s):(Re.fromTo("#videoFrame",{rotateX:14,scale:.93},{rotateX:0,scale:1,ease:"none",scrollTrigger:{trigger:"#videoFrame",start:"top 95%",end:"top 40%",scrub:!0}}),()=>e.removeEventListener("scroll",s))}),Re.to("#stepsFill",{scaleY:1,ease:"none",scrollTrigger:{trigger:"#steps",start:"top 62%",end:"bottom 62%",scrub:!0}}),Ke(".step").forEach(e=>Gt.create({trigger:e,start:"top 68%",onEnter:()=>e.classList.add("is-on"),onLeaveBack:()=>e.classList.remove("is-on")})),Qn||([[".svc","#svcList"],[".why-item",".why-grid"],[".person",".team-grid"],[".book-trust span",".book-trust"]].forEach(([e,n])=>Re.from(e,{y:26,opacity:0,duration:.85,stagger:.07,ease:"expo.out",scrollTrigger:{trigger:n,start:"top 86%"}})),Re.from(".book-panel",{y:40,opacity:0,duration:1,ease:"expo.out",scrollTrigger:{trigger:".book-panel",start:"top 88%"}}),Re.from(".footer-word",{yPercent:36,opacity:0,ease:"none",scrollTrigger:{trigger:".footer",start:"top bottom",end:"bottom bottom",scrub:!0}})),setTimeout(L_,N_.nudgeAfterMs),Gt.refresh()}function z1(i){let t=String(i.dataset.target).split("");i.innerHTML=t.map(()=>`<span class="dg">${Array.from({length:20},(e,n)=>`<b>${n%10}</b>`).join("")}</span>`).join(""),i.setAttribute("aria-label",i.dataset.target+" plus")}function H1(i,t){let e=String(i.dataset.target).split("").map(Number);Ke(".dg",i).forEach((n,s)=>{let r=t?n.dataset.f=n.dataset.f==="1"?"0":"1":"0",o=e[s]+(r==="1"?10:0);n.style.transitionDelay=(t?s*.08:s*.12)+"s",n.style.transform=`translateY(${-o}em)`})}(()=>{let i=ut("#storyVideo"),t=ut("#vPlay"),e=ut("#vSound"),n=ut("#vProgress"),s=ut("#vBar"),r=ut("#vTime"),o=Ke("#chapters li"),a=!1,l=c=>`${c/60|0}:${String(Math.floor(c%60)).padStart(2,"0")}`;new IntersectionObserver(([c])=>{c.isIntersecting&&!a?i.play().catch(()=>{}):c.isIntersecting||i.pause()},{threshold:.3}).observe(i),i.addEventListener("play",()=>{t.classList.remove("is-paused"),t.setAttribute("aria-label","Pause video")}),i.addEventListener("pause",()=>{t.classList.add("is-paused"),t.setAttribute("aria-label","Play video")}),t.addEventListener("click",()=>{i.paused?(a=!1,i.play()):(a=!0,i.pause())}),e.addEventListener("click",()=>{i.muted=!i.muted,e.classList.toggle("is-on",!i.muted),e.setAttribute("aria-label",i.muted?"Turn sound on":"Turn sound off"),i.paused&&(a=!1,i.play().catch(()=>{}))}),s.addEventListener("click",c=>{let h=s.getBoundingClientRect();i.currentTime=(c.clientX-h.left)/h.width*(i.duration||40)}),i.addEventListener("timeupdate",()=>{let c=i.currentTime,h=i.duration||40;n.style.width=c/h*100+"%",r.textContent=`${l(c)} / ${l(h)}`;let d=0;o.forEach((f,u)=>{c>=+f.dataset.t&&(d=u)}),o.forEach((f,u)=>f.classList.toggle("is-active",u===d))}),o[0].classList.add("is-active"),o.forEach(c=>{c.tabIndex=0,c.setAttribute("role","button");let h=()=>{i.currentTime=+c.dataset.t+.15,a=!1,i.play().catch(()=>{})};c.addEventListener("click",h),c.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),h())})})})();Ke(".svc").forEach((i,t)=>{let e=ut(".svc-row",i);e.addEventListener("click",()=>{let n=!i.classList.contains("is-open");Ke(".svc.is-open").forEach(s=>{s.classList.remove("is-open"),ut(".svc-row",s).setAttribute("aria-expanded","false")}),i.classList.toggle("is-open",n),e.setAttribute("aria-expanded",String(n)),setTimeout(()=>Gt.refresh(),680)}),t===0&&(i.classList.add("is-open"),e.setAttribute("aria-expanded","true"))});Ke(".faq-list details").forEach(i=>{let t=ut("div",i);i.addEventListener("toggle",()=>{Qn||(i.open&&Re.fromTo(t,{height:0,opacity:0},{height:"auto",opacity:1,duration:.5,ease:"power2.out"}),Gt.refresh())})});if(D1&&!Qn){Ke(".tilt, .tilt-soft").forEach(n=>{let s=n.classList.contains("tilt-soft")?5:11;n.addEventListener("pointermove",r=>{let o=n.getBoundingClientRect(),a=(r.clientX-o.left)/o.width-.5,l=(r.clientY-o.top)/o.height-.5;n.style.transform=`perspective(900px) rotateY(${a*s}deg) rotateX(${-l*s}deg) scale(1.02)`}),n.addEventListener("pointerleave",()=>{n.style.transform=""})}),Ke(".magnetic").forEach(n=>{let s=Re.quickTo(n,"x",{duration:.6,ease:"elastic.out(1,0.4)"}),r=Re.quickTo(n,"y",{duration:.6,ease:"elastic.out(1,0.4)"});n.addEventListener("pointermove",o=>{let a=n.getBoundingClientRect();s((o.clientX-a.left-a.width/2)*.28),r((o.clientY-a.top-a.height/2)*.38)}),n.addEventListener("pointerleave",()=>{s(0),r(0)})});let i=ut("#cursor"),t=Re.quickTo(i,"x",{duration:.25,ease:"power3"}),e=Re.quickTo(i,"y",{duration:.25,ease:"power3"});addEventListener("pointermove",n=>{t(n.clientX),e(n.clientY)}),document.addEventListener("pointerover",n=>{i.classList.toggle("is-hover",!!n.target.closest("a, button, .chip, summary, .chapters li, select, input, textarea, .bk-day, .bk-slot"))})}var yp=ut("#navToggle");function G1(){ut("#nav").classList.remove("menu-open"),yp.setAttribute("aria-expanded","false"),wn&&!Rl&&wn.start()}yp.addEventListener("click",()=>{let i=!ut("#nav").classList.contains("menu-open");ut("#nav").classList.toggle("menu-open",i),yp.setAttribute("aria-expanded",String(i)),wn&&(i?wn.stop():wn.start())});var Sp=!1;function L_(){if(Sp||Rl||I_.get("maya_nudge"))return;Sp=!0,I_.set("maya_nudge","1");let i=ut("#nudge");i.classList.add("is-in"),i.setAttribute("aria-hidden","false")}function U_(){let i=ut("#nudge");i.classList.remove("is-in"),i.setAttribute("aria-hidden","true")}ut("#nudgeClose").addEventListener("click",U_);var V1=vp({monthEl:ut("#bkMonth"),daysEl:ut("#bkDays"),slotsEl:ut("#bkSlots"),prevEl:ut("#bkPrev"),nextEl:ut("#bkNext"),labelEl:ut("#bkSlotsFor")}),D_=ut("#bkPick"),O_=ut("#bkConfirm");xp(i=>{let t=!!(i.date&&i.time);O_.disabled=!t,D_.classList.toggle("is-empty",!t),D_.innerHTML=t?`${Mu(Su(i.date,i.time))}<em>30 minutes \xB7 Google Meet</em>`:"Choose a day and a time to continue."});O_.addEventListener("click",()=>Tp());var wu=ut("#inquiry"),ri=ut("#inqForm"),Mp=Ke(".inq-step",ri),F_=ut("#inqBar"),Eu=ut("#inqBack"),ur=ut("#inqNext"),W1=ut("#inqCount"),X1=ut("#inqNav"),Cl=4,Rl=!1,Os=1,bu=null,Au=null,bp=!1;function Tp(i){if(U_(),Sp=!0,bu=document.activeElement,Rl=!0,wu.classList.add("is-open"),wu.setAttribute("aria-hidden","false"),document.body.classList.add("is-locked"),wn&&wn.stop(),Os===5&&K1(),i){let t=ut(`input[name=service][value="${i}"]`,ri);t&&(t.checked=!0)}Au||(Au=vp({monthEl:ut("#mkMonth"),daysEl:ut("#mkDays"),slotsEl:ut("#mkSlots"),prevEl:ut("#mkPrev"),nextEl:ut("#mkNext")})),setTimeout(()=>{(ut("input, button",Mp[Os-1])||ur).focus()},340)}function B_(){Rl=!1,wu.classList.remove("is-open"),wu.setAttribute("aria-hidden","true"),document.body.classList.remove("is-locked"),wn&&wn.start(),bu&&bu.focus&&bu.focus()}document.addEventListener("click",i=>{let t=i.target.closest("[data-open-inquiry]");t&&(i.preventDefault(),Tp(t.dataset.openInquiry)),i.target.closest("[data-close]")&&B_()});document.addEventListener("keydown",i=>{if(!Rl)return;if(i.key==="Escape"){B_();return}if(i.key!=="Tab")return;let t=Ke("button, a[href], input, select, textarea",ut(".modal-panel")).filter(s=>s.offsetParent!==null&&!s.disabled);if(!t.length)return;let e=t[0],n=t[t.length-1];i.shiftKey&&document.activeElement===e?(i.preventDefault(),n.focus()):!i.shiftKey&&document.activeElement===n&&(i.preventDefault(),e.focus())});var Cu=()=>Ke("input[name=service]:checked",ri).map(i=>i.value);function ea(i){if(Os=i,Mp.forEach(t=>t.classList.toggle("is-active",+t.dataset.step===i)),F_.style.width=Math.min(i,Cl)/Cl*100+"%",Eu.disabled=i===1,ur.textContent=i===Cl?"Confirm booking":"Continue",W1.textContent=`Step ${i} of ${Cl}`,X1.style.display=i===5?"none":"",i===2&&Ke(".dyn",ri).forEach(t=>t.classList.toggle("is-on",Cu().includes(t.dataset.for))),ut(".modal-panel").scrollTop=0,i===2||i===3){let t=ut("input:not([type=checkbox]):not([type=radio]), select",Mp[i-1]);t&&setTimeout(()=>t.focus(),120)}}ur.addEventListener("click",()=>{if(!bp)if(Os===1){if(!Cu().length){ut("#err1").textContent="Choose at least one so we know what to prepare.";return}ut("#err1").textContent="",ea(2)}else Os===2?ea(3):Os===3?Y1()&&ea(4):Os===Cl&&J1()});Eu.addEventListener("click",()=>{Os>1&&ea(Os-1)});ri.addEventListener("submit",i=>i.preventDefault());ri.addEventListener("change",i=>{i.target.name==="service"&&(ut("#err1").textContent="")});var q1=/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;function Y1(){let i=new FormData(ri),t=(i.get("name")||"").trim(),e=(i.get("email")||"").trim(),n=(i.get("phone")||"").replace(/[^\d+]/g,""),s=ut("[name=name]",ri),r=ut("[name=email]",ri),o=ut("[name=phone]",ri);[s,r,o].forEach(l=>l.removeAttribute("aria-invalid"));let a=(l,c)=>(l.setAttribute("aria-invalid","true"),ut("#err3").textContent=c,l.focus(),!1);return t?q1.test(e)?n.replace(/\D/g,"").length<10?a(o,"Enter a 10-digit phone number so we can call you."):(ut("#err3").textContent="",!0):a(r,"We need a valid email \u2014 that is where your Google Meet link goes."):a(s,"Add your name so we know who we are talking to.")}var $1={website:"Website / online store",invitation:"Invitation",brochure:"Brochure",video:"Video editing",logo:"Logo design",advice:"Not sure yet \u2014 advice"};function Z1(i){let t=Cu(),e=[["Services",t.map(n=>$1[n]).join(", ")]];return t.includes("website")&&e.push(["Website",`${i.get("web_type")} (assets: ${i.get("web_assets")})`]),t.includes("invitation")&&e.push(["Invitation",`${i.get("inv_type")}, ${i.get("inv_lang")}, ${i.get("inv_format")}${i.get("inv_date")?", on "+i.get("inv_date"):""}`]),t.includes("brochure")&&e.push(["Brochure",`${i.get("br_type")}, ${i.get("br_pages")}`]),t.includes("video")&&e.push(["Video",`${i.get("vid_type")}, ${i.get("vid_len")}`]),t.includes("logo")&&e.push(["Logo",`${i.get("logo_name")||"Name TBD"}, ${i.get("logo_style")}`]),e.push(["Budget",i.get("budget")],["Timeline",i.get("timeline")]),(i.get("message")||"").trim()&&e.push(["Idea",i.get("message").trim()]),i.get("city")&&e.push(["City",i.get("city")]),e.push(["Prefers",i.get("pref")]),e}async function J1(){let i=us;if(!i.date||!i.time){ut("#err4").textContent="Pick a day and a time to finish.";return}ut("#err4").textContent="";let t=new FormData(ri),e=t.get("name").trim(),n=t.get("email").trim(),s=t.get("phone").replace(/[^\d+]/g,""),r=Z1(t);bp=!0;let o=ur.innerHTML;ur.innerHTML='<span class="sending"><span class="spin"></span>Booking\u2026</span>',ur.disabled=!0,Eu.disabled=!0;try{let a=await R_({name:e,email:n,phone:s,city:t.get("city")||"",pref:t.get("pref"),services:Cu(),summary:r.map(([p,g])=>`${p}: ${g}`).join(`
`),message:(t.get("message")||"").trim(),date:i.date,time:i.time});ut("#doneName").textContent=e.split(" ")[0],ut("#doneWhen").textContent=Su(i.date,i.time),ut("#doneEmail").textContent=n,ut("#donePhone").textContent=s;let l=a.joinLink||a.meetLink||"",c=ut("#doneMeet");c.textContent=l||"No link yet \u2014 email is not connected",c.href=l||"#";let h=ut("#rowGate");a.mode==="live"&&l?(h.hidden=!1,ut("#rowGateText").innerHTML=`This link <b>unlocks ${a.opensBeforeMin||10} minutes before</b> your call \u2014 open it any time and it will show you when to come back`+(a.reminderScheduled?`. We'll also email you <b>${a.remindBeforeMin||15} minutes ahead</b>.`:`. The calendar invite in your email reminds you <b>${a.remindBeforeMin||15} minutes ahead</b>.`)):h.hidden=!0,ut("#doneCopy").style.display=l?"":"none",ut("#doneCal").style.display=l?"":"none";let d=ut("#sendWa");d.classList.toggle("btn-primary",a.mode!=="live"),d.classList.toggle("btn-ghost",a.mode==="live"),d.textContent=a.mode==="live"?"Message us on WhatsApp":"Send these details on WhatsApp",ut("#doneLead").textContent=a.mode==="live"?"We've sent the Google Meet link to your email, and we'll call you within the hour.":"One more tap: send these details to us on WhatsApp and we will confirm your slot and send the Meet link.",ut("#doneCal").href=P_({date:i.date,time:i.time,meetLink:l,name:e});let f=a.emailed||{};[[ut("#rowClient"),f.client,"Thank-you email with the Meet link sent to","Could not email"],[ut("#rowOwner"),f.owner,"The same details sent to","Could not email"]].forEach(([p,g,v,w])=>{if(!p)return;p.classList.toggle("is-fail",a.mode==="live"&&!g),p.classList.toggle("is-pending",a.mode!=="live");let y=p.querySelector("span"),T=y.querySelector("b"),E=T?T.outerHTML:"";a.mode!=="live"?y.innerHTML=`Would be emailed to ${E}`:y.innerHTML=`${g?v:w} ${E}`});let m=ut("#doneDemoRow"),_=ut("#doneDemoText");a.mode==="demo"?(m.hidden=!1,_.innerHTML="<b>Preview mode:</b> email is not connected yet, so nothing was sent and no Meet link was created. See the README to connect it.",ut("#doneNote").textContent=a.note||""):(m.hidden=!0,ut("#doneNote").textContent=a.note||"Check your inbox \u2014 if it is not there in a few minutes, look in the spam folder."),ut("#sendWa").href=Tu(`Hi Maya! I just booked a call for ${Su(i.date,i.time)}.

`+r.map(([p,g])=>`${p}: ${g}`).join(`
`)),ut("#doneSummary").innerHTML=r.map(([p,g])=>`<div><b>${Mu(p)}:</b> ${Mu(g)}</div>`).join(""),_p(i.date),V1.refresh(),Au&&Au.refresh(),ea(5),F_.style.width="100%",Q1()}catch(a){ut("#err4").innerHTML=`${Mu(a.message)} You can still <a href="${Tu("Hi Maya! I tried to book a call on the site and it did not go through.")}" target="_blank" rel="noopener" style="color:var(--clay);text-decoration:underline">message us on WhatsApp</a>.`}finally{bp=!1,ur.innerHTML=o,ur.disabled=!1,Eu.disabled=!1}}ut("#doneCopy").addEventListener("click",async()=>{let i=ut("#doneCopy");try{await navigator.clipboard.writeText(ut("#doneMeet").textContent),i.textContent="Copied",setTimeout(()=>i.textContent="Copy",1800)}catch{i.textContent="Select it",setTimeout(()=>i.textContent="Copy",1800)}});function K1(){ri.reset(),Ke(".dyn",ri).forEach(i=>i.classList.remove("is-on")),Ke("[aria-invalid]",ri).forEach(i=>i.removeAttribute("aria-invalid")),ut("#err1").textContent="",ut("#err3").textContent="",ut("#err4").textContent="",ea(1)}function Q1(){if(Qn)return;let i=ut("#confetti"),t=i.getContext("2d"),e=i.getBoundingClientRect();i.width=e.width*devicePixelRatio,i.height=e.height*devicePixelRatio,t.scale(devicePixelRatio,devicePixelRatio);let n=["#C0543A","#D2A24C","#27392C","#E8BE6D","#F2ECE1"],s=Array.from({length:130},()=>({x:e.width/2,y:e.height*.3,vx:(Math.random()-.5)*13,vy:-Math.random()*11-4,s:4+Math.random()*6,a:Math.random()*6,va:(Math.random()-.5)*.4,c:n[Math.random()*n.length|0]})),r=0;(function o(){t.clearRect(0,0,e.width,e.height),s.forEach(a=>{a.vy+=.3,a.vx*=.986,a.x+=a.vx,a.y+=a.vy,a.a+=a.va,t.save(),t.translate(a.x,a.y),t.rotate(a.a),t.globalAlpha=Math.max(0,1-r/135),t.fillStyle=a.c,t.fillRect(-a.s/2,-a.s/4,a.s,a.s/2),t.restore()}),++r<135?requestAnimationFrame(o):t.clearRect(0,0,e.width,e.height)})()}})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

(function(){try{var k=void 0,l=!0,n=null,o=!1,p=this,q=function(a,b,d){a=a.split(".");d=d||p;!(a[0]in d)&&d.execScript&&d.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)!a.length&&b!==k?d[c]=b:d=d[c]?d[c]:d[c]={}};window.gbar.tev&&window.gbar.tev(3,"gl");window.gapi=window.gapi||{};
var r=/^(https?:)?\/\/([^/:@]*)(:[0-9]+)?(\/[\w.,:!=/-]*)(\?[^#]*)?(#.*)?$/,s=/^[?#]([^&]*&)*jsh=([^&]*)/,u=function(a){var b=window.console;b&&b.warn("gapi.load: "+a)},v=function(a){var b=window.location.search,d=window.location.hash,a=a.h;if(b=b&&s.exec(b)||d&&s.exec(d))try{a=decodeURIComponent(b[2])}catch(c){u("Invalid hint "+b[2])}return a},w=function(a){a.sort();for(var b=0;b<a.length;)!a[b]||b&&a[b]==a[b-1]?a.splice(b,1):++b},x=function(a,b){for(var d={},c=0;c<b.length;c++)d[b[c]]=l;for(c=0;c<
a.length;c++)if(!d.hasOwnProperty(a[c]))return o;return l},y=function(a){if("loading"!=document.readyState)return o;if("undefined"!=typeof window.___gapisync)return window.___gapisync;if(a&&(a=a.sync,"undefined"!=typeof a))return a;for(var a=document.getElementsByTagName("meta"),b=0,d;d=a[b];++b)if("generator"==d.getAttribute("name")&&"blogger"==d.getAttribute("content"))return l;return o},z=function(a,b){if(y(a))document.write('<script src="'+encodeURI(b)+'"><\/script>');else{var d=document.createElement("script");
d.setAttribute("src",b);d.async=l;var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(d,c)}},A=function(a,b,d,c,e,f){var g=d.shift(),h;h="r"==g?"https://ssl.gstatic.com":"m"==g?c.ms||"https://apis.google.com":(h=d.shift())&&h.replace(/\/+$/,"");var j;"r"==g?(j=d.shift(),j=(j.indexOf("/webclient/jsx/")?"/webclient/js/":"")+j):j=d.shift();var i="d"==g,m=i&&d.shift()||"gcjs-3p",d=i&&d.shift();if("d"==g)e="/"+a.join(":")+(b.length?"!"+b.join(":"):"")+".js?container="+m+"&c=2&jsload=0",
j&&(e+="&r="+j),"d"==d&&(e+="&debug=1");else if("r"==g||"f"==g)e=(j.indexOf("/")?"/":"")+j+"/"+a.join("__")+(b.length?"--"+b.join("__"):"")+".js";else if("m"==g||"n"==g)a=a.join(",").replace(/\./g,"_").replace(/-/g,"_"),a=(j||"").replace("__features__",a),a=e.nodep?a.replace(/\/d=1(\/|$)/,"/d=0/"):a,f&&(a.match(/\/$/)||(a+="/"),a+="cb=gapi."+encodeURIComponent(f)),e=a;else return u("Unknown hint type "+g),"";if(!h)return"";e=h+"/"+e.replace(/^\//,"");f=r.exec(e);if(!(h=!f))if(!(h=!!/\.\.|\/\//.test(f[4]))){a:if(f=
f[2],"r"==g)c="https://ssl.gstatic.com"==e.substr(0,23);else if("m"==g)c=c.ms||"https://apis.google.com",c=e.substr(0,c.length)==c;else{c=c.m;if(f&&c){if(!/^[0-9a-zA-Z.-]+$/.test(f)){c=o;break a}c=c.split(",");g=0;for(h=c.length;g<h;++g)if(a=c[g],b=f.lastIndexOf(a),0<=b&&(0==b||"."==a.charAt(0)||"."==f.charAt(b-1))&&f.length-a.length==b){c=l;break a}}c=o}h=!c}if(h)throw"gapi.load: Invalid URI"+(e&&" "+e);return e},B=function(a,b,d){d&&(a[b]=a[b]||[]).push(d)},D=function(a){a.q&&0<a.q.length&&(window.gapi.load||
C).apply(n,a.q.shift())},E=function(a){if(a)try{a()}catch(b){return b}return n},F=window.gapi,G=function(){if(F._)return F._;var a;if((a=Object.create)&&/\[native code\]/.test(a))a=a(n);else{a={};for(var b in a)a[b]=k}return F._=a},H=function(a,b,d,c,e){var f=e.Q=e.Q||[],g=e.lc=e.lc||{};f.push([a,b,c]);F[d]=function(b){F[d]=k;if(!g[a]){g[a]=b;for(var c;f[0]&&g[f[0][0]];)b=f.shift(),g[b[0]].call(window,G()),g[b[0]]=l,(b=E(b[1]))&&!c&&(c=b);e.p=k;D(e);if(c)throw c;}}},I=function(a,b){B(b,"ci",a._ci);
var d=a.config;F.config?F.config.update(d):B(b,"cu",d)},J=function(a){a.I||(a.I=0);return"loaded"+a.I++},C=function(a,b){var d,c={};"function"!==typeof b?(c=b||{},d=c.callback):d=b;var e=window.___jsl=window.___jsl||{},f=v(e),g=f&&!!f.match(/\/gapi\/|ms=gapi/);if(e.p)B(e,"q",[a,b]);else{if(!f)throw"gapi.load: No hint present";var h=f.split(";"),j="m"==h[0]||"n"==h[0],f=[],i=[];I(c,e);e.il&&"function"===typeof e.il?(f=e.il(a),c.nodep=1):(f=a.split(":"),c.nodep||w(f),i=e.l=e.l||[],w(i));if(g){if(!x(f,
i)&&(g=J(e),h=A(f,i,h,e,c,g))){e.p=f;H(h,d,g,c,e);i.push.apply(i,f);z(c,h);return}if(d)var m=E(d)}else{if(!x(f,i)){var t=j?"cm":"c";if(h=A(f,i,h,e,c,n)){e.p=f;e.o=1;e[t]=function(){e.p=k;e[t]=k;var a=E(d);D(e);if(a)throw a;};i.push.apply(i,f);z(c,h);return}}m=E(d)}D(e);if(m)throw m;}};window.gapi.load=C;var K=window.gbar;var L={a:1,j:2,g:3,c:4,b:5,e:6,d:7,f:8};var M=[],N=n,O=function(a,b){var d=n;b&&(d={m:b});K.tev&&K.tev(a,"gl",d)};q("gbar.mddn",function(){for(var a=[],b=0,d;d=M[b];++b)a.push(d[0]);return a.join(",")},k);M.push(["gl",{init:function(a){var b=window.gapi.load;q("dgl",b,K);try{var d={isPlusUser:a.isPlusUser||a.pu},c=a.socialhost||a.sh;c&&(d.iframes={":socialhost:":c});b&&b("",{config:d})}catch(e){window.gbar.logger.ml(e,{_sn:"gl.gl.init"})}}}]);O(L.f);
(function(){O(L.c);var a,b;for(a=0;(b=K.bnc[a])&&!("gl"==b[0]);++a);b&&!b[1].l&&(a=function(){for(var a=K.mdc,c=K.mdi||{},e=0,f;f=M[e];++e){var g=f[0],h=a[g],j=c[g],i;if(i=h){if(j=!j){var m;a:{j=g;if(i=K.mdd)try{if(!N){N={};var t=i.split(/;/);for(i=0;i<t.length;++i)N[t[i]]=l}m=N[j];break a}catch(P){K.logger&&K.logger.ml(P)}m=o}j=!m}i=j}if(i){O(L.e,g);try{f[1].init(h),c[g]=l}catch(Q){K.logger&&K.logger.ml(Q)}O(L.d,g)}}if(a=K.qd.gl){K.qd.gl=[];for(c=0;e=a[c];++c)try{e()}catch(R){K.logger&&K.logger.ml(R)}}b[1].l=l;
O(L.b);a:{for(a=0;c=K.bnc[a];++a)if((c[1].auto||"m"==c[0])&&!c[1].l){a=o;break a}a=l}a&&O(L.a)},!b[1].libs||K.agl&&K.agl(b[1].libs)?a():b[1].i=a)})();}catch(e){window.gbar&&gbar.logger&&gbar.logger.ml(e,{"_sn":"gl.init","_mddn":(gbar.mddn?gbar.mddn():"0")});}})();
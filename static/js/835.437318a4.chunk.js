(self.webpackChunktemachtiani=self.webpackChunktemachtiani||[]).push([[835],{27619:function(e,t,n){"use strict";n.d(t,{Qo:function(){return x},if:function(){return p},oN:function(){return w}});var a=n(74165),r=n(15861),c=n(31243),i=n(49813),s=n(89704),o=n.n(s),u="https://api.revistatemachtiani.net",f="C4CF1629D81577CF",p=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/api/registers?filters[email][$eq]=").concat(t)).then((function(e){if(0!=e.data.data.length){(0,i.Wi)("Email valido");var c=function(){var c=(0,r.Z)((0,a.Z)().mark((function r(){var c;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v(t);case 2:if(!a.sent){a.next=6;break}m(e.data.data,t,n,e.data.data[0].id),a.next=8;break;case 6:c=d(),l(t,c,n,e.data.data[0].id);case 8:case"end":return a.stop()}}),r)})));return function(){return c.apply(this,arguments)}}();c()}else(0,i.zR)("Email invalido")})).catch((function(){(0,i.zR)("Email invalido")}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){return Math.floor(9e4*Math.random())+1e4},l=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n,r,i){var s,o,f,p,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(t);case 2:return s=e.sent,o={data:{email:t,code:n}},e.next=6,c.Z.post("".concat(u,"/api/verify-codes"),o);case 6:h(t,"Este es un c\xf3digo de verificaci\xf3n de temachtiani",n),f=x(n),p=x(i),d=x(s),f=f.replace(/\//g,"_"),p=p.replace(/\//g,"_"),d=d.replace(/\//g,"_"),r("/verification-code/".concat(f,"/").concat(p,"/").concat(d));case 14:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(u,"/api/verify-codes?filters[email][$eq]=").concat(t));case 3:if(0==e.sent.data.data.length){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n,r){var i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof r){e.next=7;break}return i=r.toString(),s={to:t,subject:n,text:i},e.next=5,c.Z.post("".concat(u,"/api/email"),s).then((function(e){})).catch((function(e){}));case 5:e.next=7;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n,r,i){var s,o,f,p,l,v,m;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/api/verify-codes?filters[email][$eq]=").concat(n));case 2:return s=e.sent,e.next=5,Z(n);case 5:return o=e.sent,f=d(),p={data:{code:f}},e.next=10,c.Z.put("".concat(u,"/api/verify-codes/").concat(s.data.data[0].id),p);case 10:h(n,"Este es un c\xf3digo de verificaci\xf3n de temachtiani",f),l=(l=x(f)).replace(/\//g,"_"),v=(v=x(i)).replace(/\//g,"_"),m=(m=x(o)).replace(/\//g,"_"),r("/verification-code/".concat(l,"/").concat(v,"/").concat(m));case 18:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),x=function(e){return o().AES.encrypt(e.toString(),f).toString()},w=function(e){return o().AES.decrypt(e,f,{iv:o().enc.Hex.parse("a0d5ebe6a0d5ebe6a0d5ebe6a0d5ebe6")}).toString(o().enc.Utf8)},Z=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(u,"/api/users?filters[email][$eq]=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data[0].id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},71189:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var a=n(29439),r=n(72791),c=(n(5876),n(19952)),i=n(97329),s=n(57689),o=n(39304),u=n(49813),f=n(74165),p=n(15861),d=n(31243),l=n(27619),v="https://api.revistatemachtiani.net",h=function(){var e=(0,p.Z)((0,f.Z)().mark((function e(t,n,a,r){var c,i,s,o;return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(c=t).replace(/_/g,"/"),c=(0,l.oN)(c),i=(i=a).replace(/_/g,"/"),i=(0,l.oN)(i),s={data:{password:n.password.value}},o={password:n.password.value},e.next=10,d.Z.put("".concat(v,"/api/registers/").concat(c),s).then((function(e){})).catch((function(){}));case 10:return e.next=12,d.Z.put("".concat(v,"/api/users/").concat(i),o).then((function(e){(0,u.Wi)("Credenciales actualizadas"),r("/")})).catch((function(){(0,u.zR)("Credenciales incorrectas")}));case 12:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),m=n(80184),x=function(e){e.setAuth;var t=(0,s.s0)(),n=(0,s.UO)(),f=n.id,p=n.idUser,d=(0,r.useState)({password:{value:null,validationType:"email"},confirmPassword:{value:null,validationType:"email"}}),l=(0,a.Z)(d,2),v=l[0],x=l[1];(0,r.useEffect)((function(){for(var e in v)document.getElementById(e)&&(0,o.yt)(e,v)}),[v]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"NewPassword",children:(0,m.jsxs)(c.Z,{title:"Actualiza tus accesos",subTitle:"Ingresa la nueva contrase\xf1a",logo:!0,children:[(0,m.jsxs)("div",{className:"inputs-container",children:[(0,m.jsx)(i.CM,{title:"Contrase\xf1a",placeholder:"Contrase\xf1a",id:"password",onChange:function(e){(0,o.yS)(e,"password",v,x)}}),(0,m.jsx)(i.CM,{title:"Confirmar contrase\xf1a",placeholder:"Confirmar contrase\xf1a",id:"confirmPassword",onChange:function(e){(0,o.yS)(e,"confirmPassword",v,x)}})]}),(0,m.jsx)(i.zx,{className:"btn_primary",title:"Iniciar sesi\xf3n",onClick:function(){(0,o.DD)(v,x),v.password.value==v.confirmPassword.value&&v.password.value?(0,o.JG)(v.confirmPassword.value)?h(f,v,p,t):(0,u.zR)("La contrase\xf1a debe contener al menos un d\xedgito, una letra may\xfascula y un car\xe1cter especial, y tener al menos 8 caracteres.",!0):(0,u.zR)("Las contrase\xf1as no coinciden",!0)}})]})})})}},42480:function(){}}]);
//# sourceMappingURL=835.437318a4.chunk.js.map
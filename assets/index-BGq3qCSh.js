var ru=Object.defineProperty;var ba=o=>{throw TypeError(o)};var su=(o,t,e)=>t in o?ru(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var Xt=(o,t,e)=>su(o,typeof t!="symbol"?t+"":t,e),Ra=(o,t,e)=>t.has(o)||ba("Cannot "+e);var to=(o,t,e)=>(Ra(o,t,"read from private field"),e?e.call(o):t.get(o)),eo=(o,t,e)=>t.has(o)?ba("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),no=(o,t,e,n)=>(Ra(o,t,"write to private field"),n?n.call(o,e):t.set(o,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ra="164",ou=0,Ca=1,au=2,kc=1,Gc=2,zn=3,Gn=0,nn=1,_n=2,si=0,nr=1,Pa=2,La=3,Ia=4,lu=5,Mi=100,cu=101,hu=102,uu=103,du=104,fu=200,pu=201,mu=202,vu=203,qo=204,Yo=205,gu=206,_u=207,yu=208,xu=209,Mu=210,Su=211,Eu=212,wu=213,Tu=214,Au=0,bu=1,Ru=2,Fs=3,Cu=4,Pu=5,Lu=6,Iu=7,sa=0,Nu=1,Du=2,oi=0,Uu=1,Fu=2,Bu=3,Ou=4,zu=5,Vu=6,Hu=7,Na="attached",ku="detached",Wc=300,or=301,ar=302,jo=303,Ko=304,Ys=306,lr=1e3,ni=1001,Bs=1002,ke=1003,Xc=1004,Ur=1005,an=1006,Ds=1007,Vn=1008,li=1009,Gu=1010,Wu=1011,qc=1012,Yc=1013,cr=1014,Rn=1015,js=1016,jc=1017,Kc=1018,jr=1020,Xu=35902,qu=1021,Yu=1022,Mn=1023,ju=1024,Ku=1025,ir=1026,Hr=1027,Zc=1028,$c=1029,Zu=1030,Qc=1031,Jc=1033,io=33776,ro=33777,so=33778,oo=33779,Da=35840,Ua=35841,Fa=35842,Ba=35843,Oa=36196,za=37492,Va=37496,Ha=37808,ka=37809,Ga=37810,Wa=37811,Xa=37812,qa=37813,Ya=37814,ja=37815,Ka=37816,Za=37817,$a=37818,Qa=37819,Ja=37820,tl=37821,ao=36492,el=36494,nl=36495,$u=36283,il=36284,rl=36285,sl=36286,kr=2300,hr=2301,lo=2302,ol=2400,al=2401,ll=2402,Qu=2500,Ju=0,th=1,Zo=2,td=3200,ed=3201,oa=0,nd=1,ti="",Ye="srgb",We="srgb-linear",aa="display-p3",Ks="display-p3-linear",Os="linear",we="srgb",zs="rec709",Vs="p3",Pi=7680,cl=519,id=512,rd=513,sd=514,eh=515,od=516,ad=517,ld=518,cd=519,$o=35044,hl="300 es",Hn=2e3,Hs=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const Br=Math.PI/180,ur=180/Math.PI;function Sn(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[o&255]+Xe[o>>8&255]+Xe[o>>16&255]+Xe[o>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function je(o,t,e){return Math.max(t,Math.min(e,o))}function la(o,t){return(o%t+t)%t}function hd(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function ud(o,t,e){return o!==t?(e-o)/(t-o):0}function Or(o,t,e){return(1-e)*o+e*t}function dd(o,t,e,n){return Or(o,t,1-Math.exp(-e*n))}function fd(o,t=1){return t-Math.abs(la(o,t*2)-t)}function pd(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function md(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function vd(o,t){return o+Math.floor(Math.random()*(t-o+1))}function gd(o,t){return o+Math.random()*(t-o)}function _d(o){return o*(.5-Math.random())}function yd(o){o!==void 0&&(ul=o);let t=ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xd(o){return o*Br}function Md(o){return o*ur}function Sd(o){return(o&o-1)===0&&o!==0}function Ed(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function wd(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Td(o,t,e,n,i){const r=Math.cos,s=Math.sin,a=r(e/2),l=s(e/2),h=r((t+n)/2),u=s((t+n)/2),c=r((t-n)/2),d=s((t-n)/2),f=r((n-t)/2),v=s((n-t)/2);switch(i){case"XYX":o.set(a*u,l*c,l*d,a*h);break;case"YZY":o.set(l*d,a*u,l*c,a*h);break;case"ZXZ":o.set(l*c,l*d,a*u,a*h);break;case"XZX":o.set(a*u,l*v,l*f,a*h);break;case"YXY":o.set(l*f,a*u,l*v,a*h);break;case"ZYZ":o.set(l*v,l*f,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ge(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ad={DEG2RAD:Br,RAD2DEG:ur,generateUUID:Sn,clamp:je,euclideanModulo:la,mapLinear:hd,inverseLerp:ud,lerp:Or,damp:dd,pingpong:fd,smoothstep:pd,smootherstep:md,randInt:vd,randFloat:gd,randFloatSpread:_d,seededRandom:yd,degToRad:xd,radToDeg:Md,isPowerOfTwo:Sd,ceilPowerOfTwo:Ed,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Td,normalize:ge,denormalize:yn};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,i,r,s,a,l,h){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,l,h)}set(t,e,n,i,r,s,a,l,h){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],v=n[8],g=i[0],p=i[3],m=i[6],_=i[1],x=i[4],y=i[7],T=i[2],C=i[5],L=i[8];return r[0]=s*g+a*_+l*T,r[3]=s*p+a*x+l*C,r[6]=s*m+a*y+l*L,r[1]=h*g+u*_+c*T,r[4]=h*p+u*x+c*C,r[7]=h*m+u*y+c*L,r[2]=d*g+f*_+v*T,r[5]=d*p+f*x+v*C,r[8]=d*m+f*y+v*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*s*u-e*a*h-n*r*u+n*a*l+i*r*h-i*s*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=u*s-a*h,d=a*l-u*r,f=h*r-s*l,v=e*c+n*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=c*g,t[1]=(i*h-u*n)*g,t[2]=(a*n-i*s)*g,t[3]=d*g,t[4]=(u*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*l-h*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*s+h*a)+s+t,-i*h,i*l,-i*(-h*s+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const co=new oe;function nh(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Gr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bd(){const o=Gr("canvas");return o.style.display="block",o}const dl={};function ih(o){o in dl||(dl[o]=!0,console.warn(o))}const fl=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pl=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[We]:{transfer:Os,primaries:zs,toReference:o=>o,fromReference:o=>o},[Ye]:{transfer:we,primaries:zs,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ks]:{transfer:Os,primaries:Vs,toReference:o=>o.applyMatrix3(pl),fromReference:o=>o.applyMatrix3(fl)},[aa]:{transfer:we,primaries:Vs,toReference:o=>o.convertSRGBToLinear().applyMatrix3(pl),fromReference:o=>o.applyMatrix3(fl).convertLinearToSRGB()}},Rd=new Set([We,Ks]),fe={enabled:!0,_workingColorSpace:We,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Rd.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;const n=$r[t].toReference,i=$r[e].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return $r[o].primaries},getTransfer:function(o){return o===ti?Os:$r[o].transfer}};function rr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Li;class Cd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Gr("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=rr(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rr(e[n]/255)*255):e[n]=rr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pd=0;class rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(uo(i[s].image)):r.push(uo(i[s]))}else r=uo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function uo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Cd.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ld=0;class Oe extends vr{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=ni,i=ni,r=an,s=Vn,a=Mn,l=li,h=Oe.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Sn(),this.name="",this.source=new rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lr:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Bs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lr:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Bs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Wc;Oe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],v=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,y=(f+1)/2,T=(m+1)/2,C=(u+d)/4,L=(c+g)/4,D=(v+p)/4;return x>y&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=L/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=C/i,r=D/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=L/r,i=D/r),this.set(n,i,r,e),this}let _=Math.sqrt((p-v)*(p-v)+(c-g)*(c-g)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(c-g)/_,this.z=(d-u)/_,this.w=Math.acos((h+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Id extends vr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Id{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class sh extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nd extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3];const d=r[s+0],f=r[s+1],v=r[s+2],g=r[s+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(c!==g||l!==d||h!==f||u!==v){let p=1-a;const m=l*d+h*f+u*v+c*g,_=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const T=Math.sqrt(x),C=Math.atan2(T,m*_);p=Math.sin(p*C)/T,a=Math.sin(a*C)/T}const y=a*_;if(l=l*p+d*y,h=h*p+f*y,u=u*p+v*y,c=c*p+g*y,p===1-a){const T=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=T,h*=T,u*=T,c*=T}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=r[s],d=r[s+1],f=r[s+2],v=r[s+3];return t[e]=a*v+u*c+l*f-h*d,t[e+1]=l*v+u*d+h*c-a*f,t[e+2]=h*v+u*f+a*d-l*c,t[e+3]=u*v-a*c-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(i/2),c=a(r/2),d=l(n/2),f=l(i/2),v=l(r/2);switch(s){case"XYZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"YXZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"ZXY":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"ZYX":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"YZX":this._x=d*u*c+h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c-d*f*v;break;case"XZY":this._x=d*u*c-h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],h=e[2],u=e[6],c=e[10],d=n+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-h)*f,this._z=(s-i)*f}else if(n>a&&n>c){const f=2*Math.sqrt(1+n-a-c);this._w=(u-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+h)/f}else if(a>c){const f=2*Math.sqrt(1+a-n-c);this._w=(r-h)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-a);this._w=(s-i)/f,this._x=(r+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+s*a+i*h-r*l,this._y=i*u+s*l+r*a-n*h,this._z=r*u+s*h+n*l-i*a,this._w=s*u-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*s+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),c=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=s*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,l=t.w,h=2*(s*i-a*n),u=2*(a*e-r*i),c=2*(r*n-s*e);return this.x=e+l*h+s*c-a*u,this.y=n+l*u+a*h-r*c,this.z=i+l*c+r*u-s*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new G,ml=new En;class Wn{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,pn):pn.fromBufferAttribute(r,s),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),Jr.subVectors(this.max,Mr),Ii.subVectors(t.a,Mr),Ni.subVectors(t.b,Mr),Di.subVectors(t.c,Mr),Xn.subVectors(Ni,Ii),qn.subVectors(Di,Ni),hi.subVectors(Ii,Di);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-hi.z,hi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,hi.z,0,-hi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-hi.y,hi.x,0];return!po(e,Ii,Ni,Di,Jr)||(e=[1,0,0,0,1,0,0,0,1],!po(e,Ii,Ni,Di,Jr))?!1:(ts.crossVectors(Xn,qn),e=[ts.x,ts.y,ts.z],po(e,Ii,Ni,Di,Jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new G,new G,new G,new G,new G,new G,new G,new G],pn=new G,Qr=new Wn,Ii=new G,Ni=new G,Di=new G,Xn=new G,qn=new G,hi=new G,Mr=new G,Jr=new G,ts=new G,ui=new G;function po(o,t,e,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){ui.fromArray(o,r);const a=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=t.dot(ui),h=e.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const Dd=new Wn,Sr=new G,mo=new G;class Cn{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Sr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(mo)),this.expandByPoint(Sr.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new G,vo=new G,es=new G,Yn=new G,go=new G,ns=new G,_o=new G;class Zs{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){vo.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(vo);const r=t.distanceTo(e)*.5,s=-this.direction.dot(es),a=Yn.dot(this.direction),l=-Yn.dot(es),h=Yn.lengthSq(),u=Math.abs(1-s*s);let c,d,f,v;if(u>0)if(c=s*l-a,d=s*a-l,v=r*u,c>=0)if(d>=-v)if(d<=v){const g=1/u;c*=g,d*=g,f=c*(c+s*d+2*a)+d*(s*c+d+2*l)+h}else d=r,c=Math.max(0,-(s*d+a)),f=-c*c+d*(d+2*l)+h;else d=-r,c=Math.max(0,-(s*d+a)),f=-c*c+d*(d+2*l)+h;else d<=-v?(c=Math.max(0,-(-s*r+a)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h):d<=v?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(c=Math.max(0,-(s*r+a)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h);else d=s>0?-r:r,c=Math.max(0,-(s*d+a)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(vo).addScaledVector(es,d),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,s=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,s=(t.min.y-d.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),c>=0?(a=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,r){go.subVectors(e,t),ns.subVectors(n,t),_o.crossVectors(go,ns);let s=this.direction.dot(_o),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(ns.crossVectors(Yn,ns));if(l<0)return null;const h=a*this.direction.dot(go.cross(Yn));if(h<0||l+h>s)return null;const u=-a*Yn.dot(_o);return u<0?null:this.at(u/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,r,s,a,l,h,u,c,d,f,v,g,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,l,h,u,c,d,f,v,g,p)}set(t,e,n,i,r,s,a,l,h,u,c,d,f,v,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=s,m[9]=a,m[13]=l,m[2]=h,m[6]=u,m[10]=c,m[14]=d,m[3]=f,m[7]=v,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),s=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const d=s*u,f=s*c,v=a*u,g=a*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=f+v*h,e[5]=d-g*h,e[9]=-a*l,e[2]=g-d*h,e[6]=v+f*h,e[10]=s*l}else if(t.order==="YXZ"){const d=l*u,f=l*c,v=h*u,g=h*c;e[0]=d+g*a,e[4]=v*a-f,e[8]=s*h,e[1]=s*c,e[5]=s*u,e[9]=-a,e[2]=f*a-v,e[6]=g+d*a,e[10]=s*l}else if(t.order==="ZXY"){const d=l*u,f=l*c,v=h*u,g=h*c;e[0]=d-g*a,e[4]=-s*c,e[8]=v+f*a,e[1]=f+v*a,e[5]=s*u,e[9]=g-d*a,e[2]=-s*h,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){const d=s*u,f=s*c,v=a*u,g=a*c;e[0]=l*u,e[4]=v*h-f,e[8]=d*h+g,e[1]=l*c,e[5]=g*h+d,e[9]=f*h-v,e[2]=-h,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){const d=s*l,f=s*h,v=a*l,g=a*h;e[0]=l*u,e[4]=g-d*c,e[8]=v*c+f,e[1]=c,e[5]=s*u,e[9]=-a*u,e[2]=-h*u,e[6]=f*c+v,e[10]=d-g*c}else if(t.order==="XZY"){const d=s*l,f=s*h,v=a*l,g=a*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=d*c+g,e[5]=s*u,e[9]=f*c-v,e[2]=v*c-f,e[6]=a*u,e[10]=g*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ud,t,Fd)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),jn.crossVectors(n,rn),jn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),jn.crossVectors(n,rn)),jn.normalize(),is.crossVectors(rn,jn),i[0]=jn.x,i[4]=is.x,i[8]=rn.x,i[1]=jn.y,i[5]=is.y,i[9]=rn.y,i[2]=jn.z,i[6]=is.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],v=n[2],g=n[6],p=n[10],m=n[14],_=n[3],x=n[7],y=n[11],T=n[15],C=i[0],L=i[4],D=i[8],E=i[12],M=i[1],R=i[5],B=i[9],P=i[13],q=i[2],W=i[6],ot=i[10],V=i[14],I=i[3],Q=i[7],Y=i[11],O=i[15];return r[0]=s*C+a*M+l*q+h*I,r[4]=s*L+a*R+l*W+h*Q,r[8]=s*D+a*B+l*ot+h*Y,r[12]=s*E+a*P+l*V+h*O,r[1]=u*C+c*M+d*q+f*I,r[5]=u*L+c*R+d*W+f*Q,r[9]=u*D+c*B+d*ot+f*Y,r[13]=u*E+c*P+d*V+f*O,r[2]=v*C+g*M+p*q+m*I,r[6]=v*L+g*R+p*W+m*Q,r[10]=v*D+g*B+p*ot+m*Y,r[14]=v*E+g*P+p*V+m*O,r[3]=_*C+x*M+y*q+T*I,r[7]=_*L+x*R+y*W+T*Q,r[11]=_*D+x*B+y*ot+T*Y,r[15]=_*E+x*P+y*V+T*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],l=t[9],h=t[13],u=t[2],c=t[6],d=t[10],f=t[14],v=t[3],g=t[7],p=t[11],m=t[15];return v*(+r*l*c-i*h*c-r*a*d+n*h*d+i*a*f-n*l*f)+g*(+e*l*f-e*h*d+r*s*d-i*s*f+i*h*u-r*l*u)+p*(+e*h*c-e*a*f-r*s*c+n*s*f+r*a*u-n*h*u)+m*(-i*a*u-e*l*c+e*a*d+i*s*c-n*s*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],f=t[11],v=t[12],g=t[13],p=t[14],m=t[15],_=c*p*h-g*d*h+g*l*f-a*p*f-c*l*m+a*d*m,x=v*d*h-u*p*h-v*l*f+s*p*f+u*l*m-s*d*m,y=u*g*h-v*c*h+v*a*f-s*g*f-u*a*m+s*c*m,T=v*c*l-u*g*l-v*a*d+s*g*d+u*a*p-s*c*p,C=e*_+n*x+i*y+r*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=_*L,t[1]=(g*d*r-c*p*r-g*i*f+n*p*f+c*i*m-n*d*m)*L,t[2]=(a*p*r-g*l*r+g*i*h-n*p*h-a*i*m+n*l*m)*L,t[3]=(c*l*r-a*d*r-c*i*h+n*d*h+a*i*f-n*l*f)*L,t[4]=x*L,t[5]=(u*p*r-v*d*r+v*i*f-e*p*f-u*i*m+e*d*m)*L,t[6]=(v*l*r-s*p*r-v*i*h+e*p*h+s*i*m-e*l*m)*L,t[7]=(s*d*r-u*l*r+u*i*h-e*d*h-s*i*f+e*l*f)*L,t[8]=y*L,t[9]=(v*c*r-u*g*r-v*n*f+e*g*f+u*n*m-e*c*m)*L,t[10]=(s*g*r-v*a*r+v*n*h-e*g*h-s*n*m+e*a*m)*L,t[11]=(u*a*r-s*c*r-u*n*h+e*c*h+s*n*f-e*a*f)*L,t[12]=T*L,t[13]=(u*g*i-v*c*i+v*n*d-e*g*d-u*n*p+e*c*p)*L,t[14]=(v*a*i-s*g*i-v*n*l+e*g*l+s*n*p-e*a*p)*L,t[15]=(s*c*i-u*a*i+u*n*l-e*c*l-s*n*d+e*a*d)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,l=t.z,h=r*s,u=r*a;return this.set(h*s+n,h*a-i*l,h*l+i*a,0,h*a+i*l,u*a+n,u*l-i*s,0,h*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,a=e._z,l=e._w,h=r+r,u=s+s,c=a+a,d=r*h,f=r*u,v=r*c,g=s*u,p=s*c,m=a*c,_=l*h,x=l*u,y=l*c,T=n.x,C=n.y,L=n.z;return i[0]=(1-(g+m))*T,i[1]=(f+y)*T,i[2]=(v-x)*T,i[3]=0,i[4]=(f-y)*C,i[5]=(1-(d+m))*C,i[6]=(p+_)*C,i[7]=0,i[8]=(v+x)*L,i[9]=(p-_)*L,i[10]=(1-(d+g))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ui.set(i[0],i[1],i[2]).length();const s=Ui.set(i[4],i[5],i[6]).length(),a=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],mn.copy(this);const h=1/r,u=1/s,c=1/a;return mn.elements[0]*=h,mn.elements[1]*=h,mn.elements[2]*=h,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=c,mn.elements[9]*=c,mn.elements[10]*=c,e.setFromRotationMatrix(mn),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=Hn){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),c=(e+t)/(e-t),d=(n+i)/(n-i);let f,v;if(a===Hn)f=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(a===Hs)f=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=Hn){const l=this.elements,h=1/(e-t),u=1/(n-i),c=1/(s-r),d=(e+t)*h,f=(n+i)*u;let v,g;if(a===Hn)v=(s+r)*c,g=-2*c;else if(a===Hs)v=r*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new G,mn=new ie,Ud=new G(0,0,0),Fd=new G(1,1,1),jn=new G,is=new G,rn=new G,vl=new ie,gl=new En;class dn{constructor(t=0,e=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],l=i[1],h=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bd=0;const _l=new G,Fi=new En,Un=new ie,rs=new G,Er=new G,Od=new G,zd=new En,yl=new G(1,0,0),xl=new G(0,1,0),Ml=new G(0,0,1),Sl={type:"added"},Vd={type:"removed"},Bi={type:"childadded",child:null},yo={type:"childremoved",child:null};class Ee extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new G,e=new dn,n=new En,i=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new oe}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(yl,t)}rotateY(t){return this.rotateOnAxis(xl,t)}rotateZ(t){return this.rotateOnAxis(Ml,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yl,t)}translateY(t){return this.translateOnAxis(xl,t)}translateZ(t){return this.translateOnAxis(Ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Er,rs,this.up):Un.lookAt(rs,Er,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Un),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=s(t.geometries),l=s(t.materials),h=s(t.textures),u=s(t.images),c=s(t.shapes),d=s(t.skeletons),f=s(t.animations),v=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function s(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new G(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new G,Fn=new G,xo=new G,Bn=new G,Oi=new G,zi=new G,El=new G,Mo=new G,So=new G,Eo=new G;class xn{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vn.subVectors(i,e),Fn.subVectors(n,e),xo.subVectors(t,e);const s=vn.dot(vn),a=vn.dot(Fn),l=vn.dot(xo),h=Fn.dot(Fn),u=Fn.dot(xo),c=s*h-a*a;if(c===0)return r.set(0,0,0),null;const d=1/c,f=(h*l-a*u)*d,v=(s*u-a*l)*d;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,i,r,s,a,l){return this.getBarycoord(t,e,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(s,Bn.y),l.addScaledVector(a,Bn.z),l)}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Fn.subVectors(t,e),vn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),vn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let s,a;Oi.subVectors(i,n),zi.subVectors(r,n),Mo.subVectors(t,n);const l=Oi.dot(Mo),h=zi.dot(Mo);if(l<=0&&h<=0)return e.copy(n);So.subVectors(t,i);const u=Oi.dot(So),c=zi.dot(So);if(u>=0&&c<=u)return e.copy(i);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),e.copy(n).addScaledVector(Oi,s);Eo.subVectors(t,r);const f=Oi.dot(Eo),v=zi.dot(Eo);if(v>=0&&f<=v)return e.copy(r);const g=f*h-l*v;if(g<=0&&h>=0&&v<=0)return a=h/(h-v),e.copy(n).addScaledVector(zi,a);const p=u*v-f*c;if(p<=0&&c-u>=0&&f-v>=0)return El.subVectors(r,i),a=(c-u)/(c-u+(f-v)),e.copy(i).addScaledVector(El,a);const m=1/(p+g+d);return s=g*m,a=d*m,e.copy(n).addScaledVector(Oi,s).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function wo(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=la(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=wo(s,r,t+1/3),this.g=wo(s,r,t),this.b=wo(s,r,t-1/3)}return fe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return fe.fromWorkingColorSpace(qe.copy(this),t),Math.round(je(qe.r*255,0,255))*65536+Math.round(je(qe.g*255,0,255))*256+Math.round(je(qe.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,i=qe.g,r=qe.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,h;const u=(a+s)/2;if(a===s)l=0,h=0;else{const c=s-a;switch(h=u<=.5?c/(s+a):c/(2-s-a),s){case n:l=(i-r)/c+(i<r?6:0);break;case i:l=(r-n)/c+2;break;case r:l=(n-i)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ye){fe.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,i=qe.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(ss);const n=Or(Kn.h,ss.h,e),i=Or(Kn.s,ss.s,e),r=Or(Kn.l,ss.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Kt;Kt.NAMES=ah;let Hd=0;class hn extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=nr,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ii extends hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new G,os=new te;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ih("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.applyMatrix3(t),this.setXY(e,os.x,os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$o&&(t.usage=this.usage),t}}class lh extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ch extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class un extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kd=0;const ln=new ie,To=new Ee,Vi=new G,sn=new Wn,wr=new Wn,Be=new G;class fn extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nh(t)?ch:lh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return To.lookAt(t),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new un(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(sn.min,wr.min),sn.expandByPoint(Be),Be.addVectors(sn.max,wr.max),sn.expandByPoint(Be)):(sn.expandByPoint(wr.min),sn.expandByPoint(wr.max))}sn.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Be.fromBufferAttribute(a,h),l&&(Vi.fromBufferAttribute(t,h),Be.add(Vi)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new G,l[D]=new G;const h=new G,u=new G,c=new G,d=new te,f=new te,v=new te,g=new G,p=new G;function m(D,E,M){h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),c.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),v.fromBufferAttribute(r,M),u.sub(h),c.sub(h),f.sub(d),v.sub(d);const R=1/(f.x*v.y-v.x*f.y);isFinite(R)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(c,-f.y).multiplyScalar(R),p.copy(c).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(R),a[D].add(g),a[E].add(g),a[M].add(g),l[D].add(p),l[E].add(p),l[M].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,E=_.length;D<E;++D){const M=_[D],R=M.start,B=M.count;for(let P=R,q=R+B;P<q;P+=3)m(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const x=new G,y=new G,T=new G,C=new G;function L(D){T.fromBufferAttribute(i,D),C.copy(T);const E=a[D];x.copy(E),x.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(C,E);const R=y.dot(l[D])<0?-1:1;s.setXYZW(D,x.x,x.y,x.z,R)}for(let D=0,E=_.length;D<E;++D){const M=_[D],R=M.start,B=M.count;for(let P=R,q=R+B;P<q;P+=3)L(t.getX(P+0)),L(t.getX(P+1)),L(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new G,r=new G,s=new G,a=new G,l=new G,h=new G,u=new G,c=new G;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),u.subVectors(s,r),c.subVectors(i,r),u.cross(c),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,p),a.add(u),l.add(u),h.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),u.subVectors(s,r),c.subVectors(i,r),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const h=a.array,u=a.itemSize,c=a.normalized,d=new h.constructor(l.length*u);let f=0,v=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let m=0;m<u;m++)d[v++]=h[f++]}return new tn(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const h=s[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],c=r[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let h=0,u=s.length;h<u;h++){const c=s[h];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new ie,di=new Zs,as=new Cn,Tl=new G,Hi=new G,ki=new G,Gi=new G,Ao=new G,ls=new G,cs=new te,hs=new te,us=new te,Al=new G,bl=new G,Rl=new G,ds=new G,fs=new G;class Ge extends Ee{constructor(t=new fn,e=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ls.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=a[l],c=r[l];u!==0&&(Ao.fromBufferAttribute(c,t),s?ls.addScaledVector(Ao,u):ls.addScaledVector(Ao.sub(e),u))}e.add(ls)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(as.containsPoint(di.origin)===!1&&(di.intersectSphere(as,Tl)===null||di.origin.distanceToSquared(Tl)>(t.far-t.near)**2))&&(wl.copy(r).invert(),di.copy(t.ray).applyMatrix4(wl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=s[p.materialIndex],_=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,T=x;y<T;y+=3){const C=a.getX(y),L=a.getX(y+1),D=a.getX(y+2);i=ps(this,m,t,n,h,u,c,C,L,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const _=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=ps(this,s,t,n,h,u,c,_,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const p=d[v],m=s[p.materialIndex],_=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,T=x;y<T;y+=3){const C=y,L=y+1,D=y+2;i=ps(this,m,t,n,h,u,c,C,L,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=v,m=g;p<m;p+=3){const _=p,x=p+1,y=p+2;i=ps(this,s,t,n,h,u,c,_,x,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Gd(o,t,e,n,i,r,s,a){let l;if(t.side===nn?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,t.side===Gn,a),l===null)return null;fs.copy(a),fs.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(fs);return h<e.near||h>e.far?null:{distance:h,point:fs.clone(),object:o}}function ps(o,t,e,n,i,r,s,a,l,h){o.getVertexPosition(a,Hi),o.getVertexPosition(l,ki),o.getVertexPosition(h,Gi);const u=Gd(o,t,e,n,Hi,ki,Gi,ds);if(u){i&&(cs.fromBufferAttribute(i,a),hs.fromBufferAttribute(i,l),us.fromBufferAttribute(i,h),u.uv=xn.getInterpolation(ds,Hi,ki,Gi,cs,hs,us,new te)),r&&(cs.fromBufferAttribute(r,a),hs.fromBufferAttribute(r,l),us.fromBufferAttribute(r,h),u.uv1=xn.getInterpolation(ds,Hi,ki,Gi,cs,hs,us,new te)),s&&(Al.fromBufferAttribute(s,a),bl.fromBufferAttribute(s,l),Rl.fromBufferAttribute(s,h),u.normal=xn.getInterpolation(ds,Hi,ki,Gi,Al,bl,Rl,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a,b:l,c:h,normal:new G,materialIndex:0};xn.getNormal(Hi,ki,Gi,c.normal),u.face=c}return u}class Ri extends fn{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],h=[],u=[],c=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,s,r,0),v("z","y","x",1,-1,n,e,-t,s,r,1),v("x","z","y",1,1,t,n,e,i,s,2),v("x","z","y",1,-1,t,n,-e,i,s,3),v("x","y","z",1,-1,t,e,n,i,r,4),v("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new un(h,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(c,2));function v(g,p,m,_,x,y,T,C,L,D,E){const M=y/L,R=T/D,B=y/2,P=T/2,q=C/2,W=L+1,ot=D+1;let V=0,I=0;const Q=new G;for(let Y=0;Y<ot;Y++){const O=Y*R-P;for(let J=0;J<W;J++){const z=J*M-B;Q[g]=z*_,Q[p]=O*x,Q[m]=q,h.push(Q.x,Q.y,Q.z),Q[g]=0,Q[p]=0,Q[m]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),c.push(J/L),c.push(1-Y/D),V+=1}}for(let Y=0;Y<D;Y++)for(let O=0;O<L;O++){const J=d+O+W*Y,z=d+O+W*(Y+1),A=d+(O+1)+W*(Y+1),b=d+(O+1)+W*Y;l.push(J,z,b),l.push(z,A,b),I+=6}a.addGroup(f,I,E),f+=I,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function dr(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function $e(o){const t={};for(let e=0;e<o.length;e++){const n=dr(o[e]);for(const i in n)t[i]=n[i]}return t}function Wd(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function hh(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const Xd={clone:dr,merge:$e};var qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class uh extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new G,Cl=new te,Pl=new te;class Qe extends uh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Cl,Pl),e.subVectors(Pl,Cl)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Br*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,h=s.fullHeight;r+=s.offsetX*i/l,e-=s.offsetY*n/h,i*=s.width/l,n*=s.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class jd extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qe(Wi,Xi,t,e);i.layers=this.layers,this.add(i);const r=new Qe(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const s=new Qe(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const a=new Qe(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const h=new Qe(Wi,Xi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,l]=e;for(const h of e)this.remove(h);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,l,h,u]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(c,d,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class dh extends Oe{constructor(t,e,n,i,r,s,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,n,i,r,s,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kd extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new dh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ri(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:si});r.uniforms.tEquirect.value=e;const s=new Ge(i,r),a=e.minFilter;return e.minFilter===Vn&&(e.minFilter=an),new jd(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}}const bo=new G,Zd=new G,$d=new oe;class _i{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=bo.subVectors(n,e).cross(Zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(bo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$d.getNormalMatrix(t),i=this.coplanarPoint(bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Cn,ms=new G;class ca{constructor(t=new _i,e=new _i,n=new _i,i=new _i,r=new _i,s=new _i){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,r=i[0],s=i[1],a=i[2],l=i[3],h=i[4],u=i[5],c=i[6],d=i[7],f=i[8],v=i[9],g=i[10],p=i[11],m=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,d-h,p-f,y-m).normalize(),n[1].setComponents(l+r,d+h,p+f,y+m).normalize(),n[2].setComponents(l+s,d+u,p+v,y+_).normalize(),n[3].setComponents(l-s,d-u,p-v,y-_).normalize(),n[4].setComponents(l-a,d-c,p-g,y-x).normalize(),e===Hn)n[5].setComponents(l+a,d+c,p+g,y+x).normalize();else if(e===Hs)n[5].setComponents(a,c,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fh(){let o=null,t=!1,e=null,n=null;function i(r,s){e(r,s),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function Qd(o){const t=new WeakMap;function e(a,l){const h=a.array,u=a.usage,c=h.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,h,u),a.onUploadCallback();let f;if(h instanceof Float32Array)f=o.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=o.SHORT;else if(h instanceof Uint32Array)f=o.UNSIGNED_INT;else if(h instanceof Int32Array)f=o.INT;else if(h instanceof Int8Array)f=o.BYTE;else if(h instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,l,h){const u=l.array,c=l._updateRange,d=l.updateRanges;if(o.bindBuffer(h,a),c.count===-1&&d.length===0&&o.bufferSubData(h,0,u),d.length!==0){for(let f=0,v=d.length;f<v;f++){const g=d[f];o.bufferSubData(h,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}c.count!==-1&&(o.bufferSubData(h,c.offset*u.BYTES_PER_ELEMENT,u,c.offset,c.count),c.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(o.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:r,update:s}}class $s extends fn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(n),l=Math.floor(i),h=a+1,u=l+1,c=t/a,d=e/l,f=[],v=[],g=[],p=[];for(let m=0;m<u;m++){const _=m*d-s;for(let x=0;x<h;x++){const y=x*c-r;v.push(y,-_,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const x=_+h*m,y=_+h*(m+1),T=_+1+h*(m+1),C=_+1+h*m;f.push(x,y,C),f.push(y,T,C)}this.setIndex(f),this.setAttribute("position",new un(v,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
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
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
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
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ff=`#ifdef USE_IRIDESCENCE
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
#endif`,pf=`#ifdef USE_BUMPMAP
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
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ef=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
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
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,qf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$f=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jf=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cp=`#if defined( USE_POINTS_UV )
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
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Op=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,om=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,am=`#define DISTANCE
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
}`,lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`uniform float scale;
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#define LAMBERT
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
}`,vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,gm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,ym=`#define NORMAL
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
}`,xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mm=`#define PHONG
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
}`,Sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Em=`#define STANDARD
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
}`,wm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Tm=`#define TOON
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
}`,Am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bm=`uniform float size;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Lm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Im=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Jd,alphahash_pars_fragment:tf,alphamap_fragment:ef,alphamap_pars_fragment:nf,alphatest_fragment:rf,alphatest_pars_fragment:sf,aomap_fragment:of,aomap_pars_fragment:af,batching_pars_vertex:lf,batching_vertex:cf,begin_vertex:hf,beginnormal_vertex:uf,bsdfs:df,iridescence_fragment:ff,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:_f,color_fragment:yf,color_pars_fragment:xf,color_pars_vertex:Mf,color_vertex:Sf,common:Ef,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Af,displacementmap_vertex:bf,emissivemap_fragment:Rf,emissivemap_pars_fragment:Cf,colorspace_fragment:Pf,colorspace_pars_fragment:Lf,envmap_fragment:If,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Df,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:qf,envmap_vertex:Ff,fog_vertex:Bf,fog_pars_vertex:Of,fog_fragment:zf,fog_pars_fragment:Vf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:kf,lights_lambert_fragment:Gf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:Yf,lights_toon_pars_fragment:jf,lights_phong_fragment:Kf,lights_phong_pars_fragment:Zf,lights_physical_fragment:$f,lights_physical_pars_fragment:Qf,lights_fragment_begin:Jf,lights_fragment_maps:tp,lights_fragment_end:ep,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:sp,map_fragment:op,map_pars_fragment:ap,map_particle_fragment:lp,map_particle_pars_fragment:cp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:up,morphinstance_vertex:dp,morphcolor_vertex:fp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:vp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:yp,normal_pars_vertex:xp,normal_vertex:Mp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Ap,opaque_fragment:bp,packing:Rp,premultiplied_alpha_fragment:Cp,project_vertex:Pp,dithering_fragment:Lp,dithering_pars_fragment:Ip,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Fp,shadowmap_vertex:Bp,shadowmask_pars_fragment:Op,skinbase_vertex:zp,skinning_pars_vertex:Vp,skinning_vertex:Hp,skinnormal_vertex:kp,specularmap_fragment:Gp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:qp,transmission_fragment:Yp,transmission_pars_fragment:jp,uv_pars_fragment:Kp,uv_pars_vertex:Zp,uv_vertex:$p,worldpos_vertex:Qp,background_vert:Jp,background_frag:tm,backgroundCube_vert:em,backgroundCube_frag:nm,cube_vert:im,cube_frag:rm,depth_vert:sm,depth_frag:om,distanceRGBA_vert:am,distanceRGBA_frag:lm,equirect_vert:cm,equirect_frag:hm,linedashed_vert:um,linedashed_frag:dm,meshbasic_vert:fm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:vm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:ym,meshnormal_frag:xm,meshphong_vert:Mm,meshphong_frag:Sm,meshphysical_vert:Em,meshphysical_frag:wm,meshtoon_vert:Tm,meshtoon_frag:Am,points_vert:bm,points_frag:Rm,shadow_vert:Cm,shadow_frag:Pm,sprite_vert:Lm,sprite_frag:Im},Bt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},bn={basic:{uniforms:$e([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:$e([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:$e([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:$e([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:$e([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:$e([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:$e([Bt.points,Bt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:$e([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:$e([Bt.common,Bt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:$e([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:$e([Bt.sprite,Bt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:$e([Bt.common,Bt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:$e([Bt.lights,Bt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};bn.physical={uniforms:$e([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const vs={r:0,b:0,g:0},pi=new dn,Nm=new ie;function Dm(o,t,e,n,i,r,s){const a=new Kt(0);let l=r===!0?0:1,h,u,c=null,d=0,f=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function g(_){let x=!1;const y=v(_);y===null?m(a,l):y&&y.isColor&&(m(y,1),x=!0);const T=o.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil)}function p(_,x){const y=v(x);y&&(y.isCubeTexture||y.mapping===Ys)?(u===void 0&&(u=new Ge(new Ri(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:dr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),pi.copy(x.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(pi)),u.material.toneMapped=fe.getTransfer(y.colorSpace)!==we,(c!==y||d!==y.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=o.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Ge(new $s(2,2),new ci({name:"BackgroundMaterial",uniforms:dr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=fe.getTransfer(y.colorSpace)!==we,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,f=o.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null))}function m(_,x){_.getRGB(vs,hh(o)),n.buffers.color.setClear(vs.r,vs.g,vs.b,x,s)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:g,addToRenderList:p}}function Um(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,s=!1;function a(M,R,B,P,q){let W=!1;const ot=c(P,B,R);r!==ot&&(r=ot,h(r.object)),W=f(M,P,B,q),W&&v(M,P,B,q),q!==null&&t.update(q,o.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,y(M,R,B,P),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return o.createVertexArray()}function h(M){return o.bindVertexArray(M)}function u(M){return o.deleteVertexArray(M)}function c(M,R,B){const P=B.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let W=q[R.id];W===void 0&&(W={},q[R.id]=W);let ot=W[P];return ot===void 0&&(ot=d(l()),W[P]=ot),ot}function d(M){const R=[],B=[],P=[];for(let q=0;q<e;q++)R[q]=0,B[q]=0,P[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:P,object:M,attributes:{},index:null}}function f(M,R,B,P){const q=r.attributes,W=R.attributes;let ot=0;const V=B.getAttributes();for(const I in V)if(V[I].location>=0){const Y=q[I];let O=W[I];if(O===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(O=M.instanceColor)),Y===void 0||Y.attribute!==O||O&&Y.data!==O.data)return!0;ot++}return r.attributesNum!==ot||r.index!==P}function v(M,R,B,P){const q={},W=R.attributes;let ot=0;const V=B.getAttributes();for(const I in V)if(V[I].location>=0){let Y=W[I];Y===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const O={};O.attribute=Y,Y&&Y.data&&(O.data=Y.data),q[I]=O,ot++}r.attributes=q,r.attributesNum=ot,r.index=P}function g(){const M=r.newAttributes;for(let R=0,B=M.length;R<B;R++)M[R]=0}function p(M){m(M,0)}function m(M,R){const B=r.newAttributes,P=r.enabledAttributes,q=r.attributeDivisors;B[M]=1,P[M]===0&&(o.enableVertexAttribArray(M),P[M]=1),q[M]!==R&&(o.vertexAttribDivisor(M,R),q[M]=R)}function _(){const M=r.newAttributes,R=r.enabledAttributes;for(let B=0,P=R.length;B<P;B++)R[B]!==M[B]&&(o.disableVertexAttribArray(B),R[B]=0)}function x(M,R,B,P,q,W,ot){ot===!0?o.vertexAttribIPointer(M,R,B,q,W):o.vertexAttribPointer(M,R,B,P,q,W)}function y(M,R,B,P){g();const q=P.attributes,W=B.getAttributes(),ot=R.defaultAttributeValues;for(const V in W){const I=W[V];if(I.location>=0){let Q=q[V];if(Q===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const Y=Q.normalized,O=Q.itemSize,J=t.get(Q);if(J===void 0)continue;const z=J.buffer,A=J.type,b=J.bytesPerElement,k=A===o.INT||A===o.UNSIGNED_INT||Q.gpuType===Yc;if(Q.isInterleavedBufferAttribute){const $=Q.data,it=$.stride,K=Q.offset;if($.isInstancedInterleavedBuffer){for(let N=0;N<I.locationSize;N++)m(I.location+N,$.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let N=0;N<I.locationSize;N++)p(I.location+N);o.bindBuffer(o.ARRAY_BUFFER,z);for(let N=0;N<I.locationSize;N++)x(I.location+N,O/I.locationSize,A,Y,it*b,(K+O/I.locationSize*N)*b,k)}else{if(Q.isInstancedBufferAttribute){for(let $=0;$<I.locationSize;$++)m(I.location+$,Q.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let $=0;$<I.locationSize;$++)p(I.location+$);o.bindBuffer(o.ARRAY_BUFFER,z);for(let $=0;$<I.locationSize;$++)x(I.location+$,O/I.locationSize,A,Y,O*b,O/I.locationSize*$*b,k)}}else if(ot!==void 0){const Y=ot[V];if(Y!==void 0)switch(Y.length){case 2:o.vertexAttrib2fv(I.location,Y);break;case 3:o.vertexAttrib3fv(I.location,Y);break;case 4:o.vertexAttrib4fv(I.location,Y);break;default:o.vertexAttrib1fv(I.location,Y)}}}}_()}function T(){D();for(const M in n){const R=n[M];for(const B in R){const P=R[B];for(const q in P)u(P[q].object),delete P[q];delete R[B]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const B in R){const P=R[B];for(const q in P)u(P[q].object),delete P[q];delete R[B]}delete n[M.id]}function L(M){for(const R in n){const B=n[R];if(B[M.id]===void 0)continue;const P=B[M.id];for(const q in P)u(P[q].object),delete P[q];delete B[M.id]}}function D(){E(),s=!0,r!==i&&(r=i,h(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:p,disableUnusedAttributes:_}}function Fm(o,t,e){let n;function i(h){n=h}function r(h,u){o.drawArrays(n,h,u),e.update(u,n,1)}function s(h,u,c){c!==0&&(o.drawArraysInstanced(n,h,u,c),e.update(u,n,c))}function a(h,u,c){if(c===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<c;f++)this.render(h[f],u[f]);else{d.multiDrawArraysWEBGL(n,h,0,u,0,c);let f=0;for(let v=0;v<c;v++)f+=u[v];e.update(f,n,1)}}function l(h,u,c,d){if(c===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<h.length;v++)s(h[v],u[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,c);let v=0;for(let g=0;g<c;g++)v+=u[g];for(let g=0;g<d.length;g++)e.update(v,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bm(o,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){return!(C!==Mn&&n.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==li&&n.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rn&&!L)}function l(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const c=e.logarithmicDepthBuffer===!0,d=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),m=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),x=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,T=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:T}}function Om(o){const t=this;let e=null,n=0,i=!1,r=!1;const s=new _i,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){e=u(c,d,0)},this.setState=function(c,d,f){const v=c.clippingPlanes,g=c.clipIntersection,p=c.clipShadows,m=o.get(c);if(!i||v===null||v.length===0||r&&!p)r?u(null):h();else{const _=r?0:n,x=_*4;let y=m.clippingState||null;l.value=y,y=u(v,d,x,f);for(let T=0;T!==x;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,d,f,v){const g=c!==null?c.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const m=f+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=f;x!==g;++x,y+=4)s.copy(c[x]).applyMatrix4(_,a),s.normal.toArray(p,y),p[y+3]=s.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function zm(o){let t=new WeakMap;function e(s,a){return a===jo?s.mapping=or:a===Ko&&(s.mapping=ar),s}function n(s){if(s&&s.isTexture){const a=s.mapping;if(a===jo||a===Ko)if(t.has(s)){const l=t.get(s).texture;return e(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const h=new Kd(l.height);return h.fromEquirectangularTexture(o,s),t.set(s,h),s.addEventListener("dispose",i),e(h.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ha extends uh{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,s=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const tr=4,Ll=[.125,.215,.35,.446,.526,.582],Si=20,Ro=new ha,Il=new Kt;let Co=null,Po=0,Lo=0,Io=!1;const yi=(1+Math.sqrt(5))/2,qi=1/yi,Nl=[new G(-yi,qi,0),new G(yi,qi,0),new G(-qi,0,yi),new G(qi,0,yi),new G(0,yi,-qi),new G(0,yi,qi),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Co,Po,Lo),this._renderer.xr.enabled=Io,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Co=this._renderer.getRenderTarget(),Po=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Io=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:js,format:Mn,colorSpace:We,depthBuffer:!1},i=Ul(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ul(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vm(r)),this._blurMaterial=Hm(r,t,e)}return i}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,Ro)}_sceneToCubeUV(t,e,n,i){const a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(Il),u.toneMapping=oi,u.autoClear=!1;const f=new ii({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new Ge(new Ri,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(Il),g=!0);for(let m=0;m<6;m++){const _=m%3;_===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):_===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));const x=this._cubeSize;gs(i,_*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=c,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===or||t.mapping===ar;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,Ro)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nl[(i-r-1)%Nl.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const l=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Ge(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),g=r/v,p=isFinite(r)?1+Math.floor(u*g):Si;p>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const m=[];let _=0;for(let L=0;L<Si;++L){const D=L/g,E=Math.exp(-D*D/2);m.push(E),L===0?_+=E:L<p&&(_+=2*E)}for(let L=0;L<m.length;L++)m[L]=m[L]/_;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const y=this._sizeLods[i],T=3*y*(i>x-tr?i-x+tr:0),C=4*(this._cubeSize-y);gs(e,T,C,3*y,2*y),l.setRenderTarget(e),l.render(c,Ro)}}function Vm(o){const t=[],e=[],n=[];let i=o;const r=o-tr+1+Ll.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let l=1/a;s>o-tr?l=Ll[s-o+tr-1]:s===0&&(l=0),n.push(l);const h=1/(a-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,v=6,g=3,p=2,m=1,_=new Float32Array(g*v*f),x=new Float32Array(p*v*f),y=new Float32Array(m*v*f);for(let C=0;C<f;C++){const L=C%3*2/3-1,D=C>2?0:-1,E=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];_.set(E,g*v*C),x.set(d,p*v*C);const M=[C,C,C,C,C,C];y.set(M,m*v*C)}const T=new fn;T.setAttribute("position",new tn(_,g)),T.setAttribute("uv",new tn(x,p)),T.setAttribute("faceIndex",new tn(y,m)),t.push(T),i>tr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ul(o,t,e){const n=new Ai(o,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Hm(o,t,e){const n=new Float32Array(Si),i=new G(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Fl(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Bl(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function km(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===jo||l===Ko,u=l===or||l===ar;if(h||u){let c=t.get(a);const d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Dl(o)),c=h?e.fromEquirectangular(a,c):e.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),c.texture;if(c!==void 0)return c.texture;{const f=a.image;return h&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Dl(o)),c=h?e.fromEquirectangular(a):e.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),a.addEventListener("dispose",r),c.texture):null}}}return a}function i(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Gm(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wm(o,t,e,n){const i={},r=new WeakMap;function s(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)t.update(d[v],o.ARRAY_BUFFER);const f=c.morphAttributes;for(const v in f){const g=f[v];for(let p=0,m=g.length;p<m;p++)t.update(g[p],o.ARRAY_BUFFER)}}function h(c){const d=[],f=c.index,v=c.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let x=0,y=_.length;x<y;x+=3){const T=_[x+0],C=_[x+1],L=_[x+2];d.push(T,C,C,L,L,T)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const T=x+0,C=x+1,L=x+2;d.push(T,C,C,L,L,T)}}else return;const p=new(nh(d)?ch:lh)(d,1);p.version=g;const m=r.get(c);m&&t.remove(m),r.set(c,p)}function u(c){const d=r.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return r.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function Xm(o,t,e){let n;function i(d){n=d}let r,s;function a(d){r=d.type,s=d.bytesPerElement}function l(d,f){o.drawElements(n,f,r,d*s),e.update(f,n,1)}function h(d,f,v){v!==0&&(o.drawElementsInstanced(n,f,r,d*s,v),e.update(f,n,v))}function u(d,f,v){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(d[p]/s,f[p]);else{g.multiDrawElementsWEBGL(n,f,0,r,d,0,v);let p=0;for(let m=0;m<v;m++)p+=f[m];e.update(p,n,1)}}function c(d,f,v,g){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)h(d[m]/s,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,v);let m=0;for(let _=0;_<v;_++)m+=f[_];for(let _=0;_<g.length;_++)e.update(m,n,g[_])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function qm(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(e.calls++,s){case o.TRIANGLES:e.triangles+=a*(r/3);break;case o.LINES:e.lines+=a*(r/2);break;case o.LINE_STRIP:e.lines+=a*(r-1);break;case o.LINE_LOOP:e.lines+=a*r;break;case o.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ym(o,t,e){const n=new WeakMap,i=new xe;function r(s,a,l){const h=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==c){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let T=a.attributes.position.count*y,C=1;T>t.maxTextureSize&&(C=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const L=new Float32Array(T*C*4*c),D=new sh(L,T,C,c);D.type=Rn,D.needsUpdate=!0;const E=y*4;for(let R=0;R<c;R++){const B=m[R],P=_[R],q=x[R],W=T*C*4*R;for(let ot=0;ot<B.count;ot++){const V=ot*E;v===!0&&(i.fromBufferAttribute(B,ot),L[W+V+0]=i.x,L[W+V+1]=i.y,L[W+V+2]=i.z,L[W+V+3]=0),g===!0&&(i.fromBufferAttribute(P,ot),L[W+V+4]=i.x,L[W+V+5]=i.y,L[W+V+6]=i.z,L[W+V+7]=0),p===!0&&(i.fromBufferAttribute(q,ot),L[W+V+8]=i.x,L[W+V+9]=i.y,L[W+V+10]=i.z,L[W+V+11]=q.itemSize===4?i.w:1)}}d={count:c,texture:D,size:new te(T,C)},n.set(a,d),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",s.morphTexture,e);else{let v=0;for(let p=0;p<h.length;p++)v+=h[p];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(o,"morphTargetBaseInfluence",g),l.getUniforms().setValue(o,"morphTargetInfluences",h)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:r}}function jm(o,t,e,n){let i=new WeakMap;function r(l){const h=n.render.frame,u=l.geometry,c=t.get(l,u);if(i.get(c)!==h&&(t.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(e.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return c}function s(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:s}}class ph extends Oe{constructor(t,e,n,i,r,s,a,l,h,u){if(u=u!==void 0?u:ir,u!==ir&&u!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=cr),n===void 0&&u===Hr&&(n=jr),super(null,i,r,s,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mh=new Oe,vh=new ph(1,1);vh.compareFunction=eh;const gh=new sh,_h=new Nd,yh=new dh,Ol=[],zl=[],Vl=new Float32Array(16),Hl=new Float32Array(9),kl=new Float32Array(4);function gr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=Ol[i];if(r===void 0&&(r=new Float32Array(i),Ol[i]=r),t!==0){n.toArray(r,0);for(let s=1,a=0;s!==t;++s)a+=e,o[s].toArray(r,a)}return r}function De(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function Ue(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Qs(o,t){let e=zl[t];e===void 0&&(e=new Int32Array(t),zl[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Km(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Zm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;o.uniform2fv(this.addr,t),Ue(e,t)}}function $m(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;o.uniform3fv(this.addr,t),Ue(e,t)}}function Qm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;o.uniform4fv(this.addr,t),Ue(e,t)}}function Jm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;kl.set(n),o.uniformMatrix2fv(this.addr,!1,kl),Ue(e,n)}}function tv(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Hl.set(n),o.uniformMatrix3fv(this.addr,!1,Hl),Ue(e,n)}}function ev(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Vl.set(n),o.uniformMatrix4fv(this.addr,!1,Vl),Ue(e,n)}}function nv(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function iv(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;o.uniform2iv(this.addr,t),Ue(e,t)}}function rv(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;o.uniform3iv(this.addr,t),Ue(e,t)}}function sv(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;o.uniform4iv(this.addr,t),Ue(e,t)}}function ov(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function av(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;o.uniform2uiv(this.addr,t),Ue(e,t)}}function lv(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;o.uniform3uiv(this.addr,t),Ue(e,t)}}function cv(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;o.uniform4uiv(this.addr,t),Ue(e,t)}}function hv(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const r=this.type===o.SAMPLER_2D_SHADOW?vh:mh;e.setTexture2D(t||r,i)}function uv(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_h,i)}function dv(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yh,i)}function fv(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gh,i)}function pv(o){switch(o){case 5126:return Km;case 35664:return Zm;case 35665:return $m;case 35666:return Qm;case 35674:return Jm;case 35675:return tv;case 35676:return ev;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return sv;case 5125:return ov;case 36294:return av;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return fv}}function mv(o,t){o.uniform1fv(this.addr,t)}function vv(o,t){const e=gr(t,this.size,2);o.uniform2fv(this.addr,e)}function gv(o,t){const e=gr(t,this.size,3);o.uniform3fv(this.addr,e)}function _v(o,t){const e=gr(t,this.size,4);o.uniform4fv(this.addr,e)}function yv(o,t){const e=gr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function xv(o,t){const e=gr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Mv(o,t){const e=gr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Sv(o,t){o.uniform1iv(this.addr,t)}function Ev(o,t){o.uniform2iv(this.addr,t)}function wv(o,t){o.uniform3iv(this.addr,t)}function Tv(o,t){o.uniform4iv(this.addr,t)}function Av(o,t){o.uniform1uiv(this.addr,t)}function bv(o,t){o.uniform2uiv(this.addr,t)}function Rv(o,t){o.uniform3uiv(this.addr,t)}function Cv(o,t){o.uniform4uiv(this.addr,t)}function Pv(o,t,e){const n=this.cache,i=t.length,r=Qs(e,i);De(n,r)||(o.uniform1iv(this.addr,r),Ue(n,r));for(let s=0;s!==i;++s)e.setTexture2D(t[s]||mh,r[s])}function Lv(o,t,e){const n=this.cache,i=t.length,r=Qs(e,i);De(n,r)||(o.uniform1iv(this.addr,r),Ue(n,r));for(let s=0;s!==i;++s)e.setTexture3D(t[s]||_h,r[s])}function Iv(o,t,e){const n=this.cache,i=t.length,r=Qs(e,i);De(n,r)||(o.uniform1iv(this.addr,r),Ue(n,r));for(let s=0;s!==i;++s)e.setTextureCube(t[s]||yh,r[s])}function Nv(o,t,e){const n=this.cache,i=t.length,r=Qs(e,i);De(n,r)||(o.uniform1iv(this.addr,r),Ue(n,r));for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||gh,r[s])}function Dv(o){switch(o){case 5126:return mv;case 35664:return vv;case 35665:return gv;case 35666:return _v;case 35674:return yv;case 35675:return xv;case 35676:return Mv;case 5124:case 35670:return Sv;case 35667:case 35671:return Ev;case 35668:case 35672:return wv;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return bv;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Lv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Nv}}class Uv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pv(e.type)}}class Fv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dv(e.type)}}class Bv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const No=/(\w+)(\])?(\[|\.)?/g;function Gl(o,t){o.seq.push(t),o.map[t.id]=t}function Ov(o,t,e){const n=o.name,i=n.length;for(No.lastIndex=0;;){const r=No.exec(n),s=No.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&s+2===i){Gl(e,h===void 0?new Uv(a,o,t):new Fv(a,o,t));break}else{let c=e.map[a];c===void 0&&(c=new Bv(a),Gl(e,c)),e=c}}}class Us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);Ov(r,s,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}}function Wl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}const zv=37297;let Vv=0;function Hv(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}function kv(o){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(o);let n;switch(t===e?n="":t===Vs&&e===zs?n="LinearDisplayP3ToLinearSRGB":t===zs&&e===Vs&&(n="LinearSRGBToLinearDisplayP3"),o){case We:case Ks:return[n,"LinearTransferOETF"];case Ye:case aa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function Xl(o,t,e){const n=o.getShaderParameter(t,o.COMPILE_STATUS),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Hv(o.getShaderSource(t),s)}else return i}function Gv(o,t){const e=kv(t);return`vec4 ${o}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Wv(o,t){let e;switch(t){case Uu:e="Linear";break;case Fu:e="Reinhard";break;case Bu:e="OptimizedCineon";break;case Ou:e="ACESFilmic";break;case Vu:e="AgX";break;case Hu:e="Neutral";break;case zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Xv(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function qv(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yv(o,t){const e={},n=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),s=r.name;let a=1;r.type===o.FLOAT_MAT2&&(a=2),r.type===o.FLOAT_MAT3&&(a=3),r.type===o.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:o.getAttribLocation(t,s),locationSize:a}}return e}function Fr(o){return o!==""}function ql(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(o){return o.replace(jv,Zv)}const Kv=new Map;function Zv(o,t){let e=se[t];if(e===void 0){const n=Kv.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qo(e)}const $v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(o){return o.replace($v,Qv)}function Qv(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kl(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jv(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Gc?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function tg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function ng(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case sa:t="ENVMAP_BLENDING_MULTIPLY";break;case Nu:t="ENVMAP_BLENDING_MIX";break;case Du:t="ENVMAP_BLENDING_ADD";break}return t}function ig(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rg(o,t,e,n){const i=o.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const l=Jv(e),h=tg(e),u=eg(e),c=ng(e),d=ig(e),f=Xv(e),v=qv(r),g=i.createProgram();let p,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Fr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Fr).join(`
`),m.length>0&&(m+=`
`)):(p=[Kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),m=[Kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?se.tonemapping_pars_fragment:"",e.toneMapping!==oi?Wv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Gv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),s=Qo(s),s=ql(s,e),s=Yl(s,e),a=Qo(a),a=ql(a,e),a=Yl(a,e),s=jl(s),a=jl(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=_+p+s,y=_+m+a,T=Wl(i,i.VERTEX_SHADER,x),C=Wl(i,i.FRAGMENT_SHADER,y);i.attachShader(g,T),i.attachShader(g,C),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function L(R){if(o.debug.checkShaderErrors){const B=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(T).trim(),q=i.getShaderInfoLog(C).trim();let W=!0,ot=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,T,C);else{const V=Xl(i,T,"vertex"),I=Xl(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+V+`
`+I)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(P===""||q==="")&&(ot=!1);ot&&(R.diagnostics={runnable:W,programLog:B,vertexShader:{log:P,prefix:p},fragmentShader:{log:q,prefix:m}})}i.deleteShader(T),i.deleteShader(C),D=new Us(i,g),E=Yv(i,g)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,zv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=C,this}let sg=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ag(t),e.set(t,n)),n}}class ag{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}}function lg(o,t,e,n,i,r,s){const a=new oh,l=new og,h=new Set,u=[],c=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return h.add(E),E===0?"uv":`uv${E}`}function p(E,M,R,B,P){const q=B.fog,W=P.geometry,ot=E.isMeshStandardMaterial?B.environment:null,V=(E.isMeshStandardMaterial?e:t).get(E.envMap||ot),I=V&&V.mapping===Ys?V.image.height:null,Q=v[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Y=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,O=Y!==void 0?Y.length:0;let J=0;W.morphAttributes.position!==void 0&&(J=1),W.morphAttributes.normal!==void 0&&(J=2),W.morphAttributes.color!==void 0&&(J=3);let z,A,b,k;if(Q){const le=bn[Q];z=le.vertexShader,A=le.fragmentShader}else z=E.vertexShader,A=E.fragmentShader,l.update(E),b=l.getVertexShaderID(E),k=l.getFragmentShaderID(E);const $=o.getRenderTarget(),it=P.isInstancedMesh===!0,K=P.isBatchedMesh===!0,N=!!E.map,ut=!!E.matcap,vt=!!V,Mt=!!E.aoMap,dt=!!E.lightMap,rt=!!E.bumpMap,lt=!!E.normalMap,Vt=!!E.displacementMap,Ot=!!E.emissiveMap,U=!!E.metalnessMap,S=!!E.roughnessMap,et=E.anisotropy>0,at=E.clearcoat>0,ct=E.dispersion>0,pt=E.iridescence>0,Rt=E.sheen>0,St=E.transmission>0,gt=et&&!!E.anisotropyMap,Wt=at&&!!E.clearcoatMap,wt=at&&!!E.clearcoatNormalMap,Gt=at&&!!E.clearcoatRoughnessMap,ne=pt&&!!E.iridescenceMap,qt=pt&&!!E.iridescenceThicknessMap,Ut=Rt&&!!E.sheenColorMap,jt=Rt&&!!E.sheenRoughnessMap,ee=!!E.specularMap,ue=!!E.specularColorMap,Zt=!!E.specularIntensityMap,Z=St&&!!E.transmissionMap,mt=St&&!!E.thicknessMap,ht=!!E.gradientMap,Ct=!!E.alphaMap,Pt=E.alphaTest>0,re=!!E.alphaHash,ce=!!E.extensions;let de=oi;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(de=o.toneMapping);const Ae={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:A,defines:E.defines,customVertexShaderID:b,customFragmentShaderID:k,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:K,instancing:it,instancingColor:it&&P.instanceColor!==null,instancingMorph:it&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?o.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:We,alphaToCoverage:!!E.alphaToCoverage,map:N,matcap:ut,envMap:vt,envMapMode:vt&&V.mapping,envMapCubeUVHeight:I,aoMap:Mt,lightMap:dt,bumpMap:rt,normalMap:lt,displacementMap:d&&Vt,emissiveMap:Ot,normalMapObjectSpace:lt&&E.normalMapType===nd,normalMapTangentSpace:lt&&E.normalMapType===oa,metalnessMap:U,roughnessMap:S,anisotropy:et,anisotropyMap:gt,clearcoat:at,clearcoatMap:Wt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Gt,dispersion:ct,iridescence:pt,iridescenceMap:ne,iridescenceThicknessMap:qt,sheen:Rt,sheenColorMap:Ut,sheenRoughnessMap:jt,specularMap:ee,specularColorMap:ue,specularIntensityMap:Zt,transmission:St,transmissionMap:Z,thicknessMap:mt,gradientMap:ht,opaque:E.transparent===!1&&E.blending===nr&&E.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Pt,alphaHash:re,combine:E.combine,mapUv:N&&g(E.map.channel),aoMapUv:Mt&&g(E.aoMap.channel),lightMapUv:dt&&g(E.lightMap.channel),bumpMapUv:rt&&g(E.bumpMap.channel),normalMapUv:lt&&g(E.normalMap.channel),displacementMapUv:Vt&&g(E.displacementMap.channel),emissiveMapUv:Ot&&g(E.emissiveMap.channel),metalnessMapUv:U&&g(E.metalnessMap.channel),roughnessMapUv:S&&g(E.roughnessMap.channel),anisotropyMapUv:gt&&g(E.anisotropyMap.channel),clearcoatMapUv:Wt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:jt&&g(E.sheenRoughnessMap.channel),specularMapUv:ee&&g(E.specularMap.channel),specularColorMapUv:ue&&g(E.specularColorMap.channel),specularIntensityMapUv:Zt&&g(E.specularIntensityMap.channel),transmissionMapUv:Z&&g(E.transmissionMap.channel),thicknessMapUv:mt&&g(E.thicknessMap.channel),alphaMapUv:Ct&&g(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(lt||et),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!W.attributes.uv&&(N||Ct),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:P.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&R.length>0,shadowMapType:o.shadowMap.type,toneMapping:de,useLegacyLights:o._useLegacyLights,decodeVideoTexture:N&&E.map.isVideoTexture===!0&&fe.getTransfer(E.map.colorSpace)===we,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_n,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ce&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ae.vertexUv1s=h.has(1),Ae.vertexUv2s=h.has(2),Ae.vertexUv3s=h.has(3),h.clear(),Ae}function m(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)M.push(R),M.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(_(M,E),x(M,E),M.push(o.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),E.push(a.mask)}function y(E){const M=v[E.type];let R;if(M){const B=bn[M];R=Xd.clone(B.uniforms)}else R=E.uniforms;return R}function T(E,M){let R;for(let B=0,P=u.length;B<P;B++){const q=u[B];if(q.cacheKey===M){R=q,++R.usedTimes;break}}return R===void 0&&(R=new rg(o,M,E,r),u.push(R)),R}function C(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function L(E){l.remove(E)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:T,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:D}}function cg(){let o=new WeakMap;function t(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function e(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function hg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Zl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function $l(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function s(c,d,f,v,g,p){let m=o[t];return m===void 0?(m={id:c.id,object:c,geometry:d,material:f,groupOrder:v,renderOrder:c.renderOrder,z:g,group:p},o[t]=m):(m.id=c.id,m.object=c,m.geometry=d,m.material=f,m.groupOrder=v,m.renderOrder=c.renderOrder,m.z=g,m.group=p),t++,m}function a(c,d,f,v,g,p){const m=s(c,d,f,v,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(c,d,f,v,g,p){const m=s(c,d,f,v,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function h(c,d){e.length>1&&e.sort(c||hg),n.length>1&&n.sort(d||Zl),i.length>1&&i.sort(d||Zl)}function u(){for(let c=t,d=o.length;c<d;c++){const f=o[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:h}}function ug(){let o=new WeakMap;function t(n,i){const r=o.get(n);let s;return r===void 0?(s=new $l,o.set(n,[s])):i>=r.length?(s=new $l,r.push(s)):s=r[i],s}function e(){o=new WeakMap}return{get:t,dispose:e}}function dg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Kt};break;case"SpotLight":e={position:new G,direction:new G,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new G,halfWidth:new G,halfHeight:new G};break}return o[t.id]=e,e}}}function fg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let pg=0;function mg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function vg(o){const t=new dg,e=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new G);const i=new G,r=new ie,s=new ie;function a(h,u){let c=0,d=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let v=0,g=0,p=0,m=0,_=0,x=0,y=0,T=0,C=0,L=0,D=0;h.sort(mg);const E=u===!0?Math.PI:1;for(let R=0,B=h.length;R<B;R++){const P=h[R],q=P.color,W=P.intensity,ot=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=q.r*W*E,d+=q.g*W*E,f+=q.b*W*E;else if(P.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(P.sh.coefficients[I],W);D++}else if(P.isDirectionalLight){const I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const Q=P.shadow,Y=e.get(P);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.directionalShadow[v]=Y,n.directionalShadowMap[v]=V,n.directionalShadowMatrix[v]=P.shadow.matrix,x++}n.directional[v]=I,v++}else if(P.isSpotLight){const I=t.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(q).multiplyScalar(W*E),I.distance=ot,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,n.spot[p]=I;const Q=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Q.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[p]=Q.matrix,P.castShadow){const Y=e.get(P);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.spotShadow[p]=Y,n.spotShadowMap[p]=V,T++}p++}else if(P.isRectAreaLight){const I=t.get(P);I.color.copy(q).multiplyScalar(W),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=I,m++}else if(P.isPointLight){const I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity*E),I.distance=P.distance,I.decay=P.decay,P.castShadow){const Q=P.shadow,Y=e.get(P);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=I,g++}else if(P.isHemisphereLight){const I=t.get(P);I.skyColor.copy(P.color).multiplyScalar(W*E),I.groundColor.copy(P.groundColor).multiplyScalar(W*E),n.hemi[_]=I,_++}}m>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==v||M.pointLength!==g||M.spotLength!==p||M.rectAreaLength!==m||M.hemiLength!==_||M.numDirectionalShadows!==x||M.numPointShadows!==y||M.numSpotShadows!==T||M.numSpotMaps!==C||M.numLightProbes!==D)&&(n.directional.length=v,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=T+C-L,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=D,M.directionalLength=v,M.pointLength=g,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=_,M.numDirectionalShadows=x,M.numPointShadows=y,M.numSpotShadows=T,M.numSpotMaps=C,M.numLightProbes=D,n.version=pg++)}function l(h,u){let c=0,d=0,f=0,v=0,g=0;const p=u.matrixWorldInverse;for(let m=0,_=h.length;m<_;m++){const x=h[m];if(x.isDirectionalLight){const y=n.directional[c];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),c++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),s.identity(),r.copy(x.matrixWorld),r.premultiply(p),s.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Ql(o){const t=new vg(o),e=[],n=[];function i(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function s(u){n.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:s}}function gg(o){let t=new WeakMap;function e(i,r=0){const s=t.get(i);let a;return s===void 0?(a=new Ql(o),t.set(i,[a])):r>=s.length?(a=new Ql(o),s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class _g extends hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yg extends hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sg(o,t,e){let n=new ca;const i=new te,r=new te,s=new xe,a=new _g({depthPacking:ed}),l=new yg,h={},u=e.maxTextureSize,c={[Gn]:nn,[nn]:Gn,[_n]:_n},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:xg,fragmentShader:Mg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new fn;v.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ge(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let m=this.type;this.render=function(C,L,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const E=o.getRenderTarget(),M=o.getActiveCubeFace(),R=o.getActiveMipmapLevel(),B=o.state;B.setBlending(si),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const P=m!==zn&&this.type===zn,q=m===zn&&this.type!==zn;for(let W=0,ot=C.length;W<ot;W++){const V=C[W],I=V.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const Q=I.getFrameExtents();if(i.multiply(Q),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,I.mapSize.y=r.y)),I.map===null||P===!0||q===!0){const O=this.type!==zn?{minFilter:ke,magFilter:ke}:{};I.map!==null&&I.map.dispose(),I.map=new Ai(i.x,i.y,O),I.map.texture.name=V.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const Y=I.getViewportCount();for(let O=0;O<Y;O++){const J=I.getViewport(O);s.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),B.viewport(s),I.updateMatrices(V,O),n=I.getFrustum(),y(L,D,I.camera,V,this.type)}I.isPointLightShadow!==!0&&this.type===zn&&_(I,D),I.needsUpdate=!1}m=this.type,p.needsUpdate=!1,o.setRenderTarget(E,M,R)};function _(C,L){const D=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ai(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,o.setRenderTarget(C.mapPass),o.clear(),o.renderBufferDirect(L,null,D,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,o.setRenderTarget(C.map),o.clear(),o.renderBufferDirect(L,null,D,f,g,null)}function x(C,L,D,E){let M=null;const R=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=D.isPointLight===!0?l:a,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const B=M.uuid,P=L.uuid;let q=h[B];q===void 0&&(q={},h[B]=q);let W=q[P];W===void 0&&(W=M.clone(),q[P]=W,L.addEventListener("dispose",T)),M=W}if(M.visible=L.visible,M.wireframe=L.wireframe,E===zn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:c[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=o.properties.get(M);B.light=D}return M}function y(C,L,D,E,M){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===zn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const P=t.update(C),q=C.material;if(Array.isArray(q)){const W=P.groups;for(let ot=0,V=W.length;ot<V;ot++){const I=W[ot],Q=q[I.materialIndex];if(Q&&Q.visible){const Y=x(C,Q,E,M);C.onBeforeShadow(o,C,L,D,P,Y,I),o.renderBufferDirect(D,null,P,Y,C,I),C.onAfterShadow(o,C,L,D,P,Y,I)}}}else if(q.visible){const W=x(C,q,E,M);C.onBeforeShadow(o,C,L,D,P,W,null),o.renderBufferDirect(D,null,P,W,C,null),C.onAfterShadow(o,C,L,D,P,W,null)}}const B=C.children;for(let P=0,q=B.length;P<q;P++)y(B[P],L,D,E,M)}function T(C){C.target.removeEventListener("dispose",T);for(const D in h){const E=h[D],M=C.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Eg(o){function t(){let Z=!1;const mt=new xe;let ht=null;const Ct=new xe(0,0,0,0);return{setMask:function(Pt){ht!==Pt&&!Z&&(o.colorMask(Pt,Pt,Pt,Pt),ht=Pt)},setLocked:function(Pt){Z=Pt},setClear:function(Pt,re,ce,de,Ae){Ae===!0&&(Pt*=de,re*=de,ce*=de),mt.set(Pt,re,ce,de),Ct.equals(mt)===!1&&(o.clearColor(Pt,re,ce,de),Ct.copy(mt))},reset:function(){Z=!1,ht=null,Ct.set(-1,0,0,0)}}}function e(){let Z=!1,mt=null,ht=null,Ct=null;return{setTest:function(Pt){Pt?k(o.DEPTH_TEST):$(o.DEPTH_TEST)},setMask:function(Pt){mt!==Pt&&!Z&&(o.depthMask(Pt),mt=Pt)},setFunc:function(Pt){if(ht!==Pt){switch(Pt){case Au:o.depthFunc(o.NEVER);break;case bu:o.depthFunc(o.ALWAYS);break;case Ru:o.depthFunc(o.LESS);break;case Fs:o.depthFunc(o.LEQUAL);break;case Cu:o.depthFunc(o.EQUAL);break;case Pu:o.depthFunc(o.GEQUAL);break;case Lu:o.depthFunc(o.GREATER);break;case Iu:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ht=Pt}},setLocked:function(Pt){Z=Pt},setClear:function(Pt){Ct!==Pt&&(o.clearDepth(Pt),Ct=Pt)},reset:function(){Z=!1,mt=null,ht=null,Ct=null}}}function n(){let Z=!1,mt=null,ht=null,Ct=null,Pt=null,re=null,ce=null,de=null,Ae=null;return{setTest:function(le){Z||(le?k(o.STENCIL_TEST):$(o.STENCIL_TEST))},setMask:function(le){mt!==le&&!Z&&(o.stencilMask(le),mt=le)},setFunc:function(le,pe,st){(ht!==le||Ct!==pe||Pt!==st)&&(o.stencilFunc(le,pe,st),ht=le,Ct=pe,Pt=st)},setOp:function(le,pe,st){(re!==le||ce!==pe||de!==st)&&(o.stencilOp(le,pe,st),re=le,ce=pe,de=st)},setLocked:function(le){Z=le},setClear:function(le){Ae!==le&&(o.clearStencil(le),Ae=le)},reset:function(){Z=!1,mt=null,ht=null,Ct=null,Pt=null,re=null,ce=null,de=null,Ae=null}}}const i=new t,r=new e,s=new n,a=new WeakMap,l=new WeakMap;let h={},u={},c=new WeakMap,d=[],f=null,v=!1,g=null,p=null,m=null,_=null,x=null,y=null,T=null,C=new Kt(0,0,0),L=0,D=!1,E=null,M=null,R=null,B=null,P=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ot=0;const V=o.getParameter(o.VERSION);V.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ot>=1):V.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ot>=2);let I=null,Q={};const Y=o.getParameter(o.SCISSOR_BOX),O=o.getParameter(o.VIEWPORT),J=new xe().fromArray(Y),z=new xe().fromArray(O);function A(Z,mt,ht,Ct){const Pt=new Uint8Array(4),re=o.createTexture();o.bindTexture(Z,re),o.texParameteri(Z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ce=0;ce<ht;ce++)Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?o.texImage3D(mt,0,o.RGBA,1,1,Ct,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(mt+ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return re}const b={};b[o.TEXTURE_2D]=A(o.TEXTURE_2D,o.TEXTURE_2D,1),b[o.TEXTURE_CUBE_MAP]=A(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),b[o.TEXTURE_2D_ARRAY]=A(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),b[o.TEXTURE_3D]=A(o.TEXTURE_3D,o.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),s.setClear(0),k(o.DEPTH_TEST),r.setFunc(Fs),rt(!1),lt(Ca),k(o.CULL_FACE),Mt(si);function k(Z){h[Z]!==!0&&(o.enable(Z),h[Z]=!0)}function $(Z){h[Z]!==!1&&(o.disable(Z),h[Z]=!1)}function it(Z,mt){return u[Z]!==mt?(o.bindFramebuffer(Z,mt),u[Z]=mt,Z===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=mt),Z===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=mt),!0):!1}function K(Z,mt){let ht=d,Ct=!1;if(Z){ht=c.get(mt),ht===void 0&&(ht=[],c.set(mt,ht));const Pt=Z.textures;if(ht.length!==Pt.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let re=0,ce=Pt.length;re<ce;re++)ht[re]=o.COLOR_ATTACHMENT0+re;ht.length=Pt.length,Ct=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,Ct=!0);Ct&&o.drawBuffers(ht)}function N(Z){return f!==Z?(o.useProgram(Z),f=Z,!0):!1}const ut={[Mi]:o.FUNC_ADD,[cu]:o.FUNC_SUBTRACT,[hu]:o.FUNC_REVERSE_SUBTRACT};ut[uu]=o.MIN,ut[du]=o.MAX;const vt={[fu]:o.ZERO,[pu]:o.ONE,[mu]:o.SRC_COLOR,[qo]:o.SRC_ALPHA,[Mu]:o.SRC_ALPHA_SATURATE,[yu]:o.DST_COLOR,[gu]:o.DST_ALPHA,[vu]:o.ONE_MINUS_SRC_COLOR,[Yo]:o.ONE_MINUS_SRC_ALPHA,[xu]:o.ONE_MINUS_DST_COLOR,[_u]:o.ONE_MINUS_DST_ALPHA,[Su]:o.CONSTANT_COLOR,[Eu]:o.ONE_MINUS_CONSTANT_COLOR,[wu]:o.CONSTANT_ALPHA,[Tu]:o.ONE_MINUS_CONSTANT_ALPHA};function Mt(Z,mt,ht,Ct,Pt,re,ce,de,Ae,le){if(Z===si){v===!0&&($(o.BLEND),v=!1);return}if(v===!1&&(k(o.BLEND),v=!0),Z!==lu){if(Z!==g||le!==D){if((p!==Mi||x!==Mi)&&(o.blendEquation(o.FUNC_ADD),p=Mi,x=Mi),le)switch(Z){case nr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pa:o.blendFunc(o.ONE,o.ONE);break;case La:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ia:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case nr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pa:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case La:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ia:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}m=null,_=null,y=null,T=null,C.set(0,0,0),L=0,g=Z,D=le}return}Pt=Pt||mt,re=re||ht,ce=ce||Ct,(mt!==p||Pt!==x)&&(o.blendEquationSeparate(ut[mt],ut[Pt]),p=mt,x=Pt),(ht!==m||Ct!==_||re!==y||ce!==T)&&(o.blendFuncSeparate(vt[ht],vt[Ct],vt[re],vt[ce]),m=ht,_=Ct,y=re,T=ce),(de.equals(C)===!1||Ae!==L)&&(o.blendColor(de.r,de.g,de.b,Ae),C.copy(de),L=Ae),g=Z,D=!1}function dt(Z,mt){Z.side===_n?$(o.CULL_FACE):k(o.CULL_FACE);let ht=Z.side===nn;mt&&(ht=!ht),rt(ht),Z.blending===nr&&Z.transparent===!1?Mt(si):Mt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),r.setFunc(Z.depthFunc),r.setTest(Z.depthTest),r.setMask(Z.depthWrite),i.setMask(Z.colorWrite);const Ct=Z.stencilWrite;s.setTest(Ct),Ct&&(s.setMask(Z.stencilWriteMask),s.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),s.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Ot(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?k(o.SAMPLE_ALPHA_TO_COVERAGE):$(o.SAMPLE_ALPHA_TO_COVERAGE)}function rt(Z){E!==Z&&(Z?o.frontFace(o.CW):o.frontFace(o.CCW),E=Z)}function lt(Z){Z!==ou?(k(o.CULL_FACE),Z!==M&&(Z===Ca?o.cullFace(o.BACK):Z===au?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):$(o.CULL_FACE),M=Z}function Vt(Z){Z!==R&&(W&&o.lineWidth(Z),R=Z)}function Ot(Z,mt,ht){Z?(k(o.POLYGON_OFFSET_FILL),(B!==mt||P!==ht)&&(o.polygonOffset(mt,ht),B=mt,P=ht)):$(o.POLYGON_OFFSET_FILL)}function U(Z){Z?k(o.SCISSOR_TEST):$(o.SCISSOR_TEST)}function S(Z){Z===void 0&&(Z=o.TEXTURE0+q-1),I!==Z&&(o.activeTexture(Z),I=Z)}function et(Z,mt,ht){ht===void 0&&(I===null?ht=o.TEXTURE0+q-1:ht=I);let Ct=Q[ht];Ct===void 0&&(Ct={type:void 0,texture:void 0},Q[ht]=Ct),(Ct.type!==Z||Ct.texture!==mt)&&(I!==ht&&(o.activeTexture(ht),I=ht),o.bindTexture(Z,mt||b[Z]),Ct.type=Z,Ct.texture=mt)}function at(){const Z=Q[I];Z!==void 0&&Z.type!==void 0&&(o.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ct(){try{o.compressedTexImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Rt(){try{o.texSubImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function St(){try{o.texSubImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function gt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Wt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function wt(){try{o.texStorage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Gt(){try{o.texStorage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ne(){try{o.texImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ut(Z){J.equals(Z)===!1&&(o.scissor(Z.x,Z.y,Z.z,Z.w),J.copy(Z))}function jt(Z){z.equals(Z)===!1&&(o.viewport(Z.x,Z.y,Z.z,Z.w),z.copy(Z))}function ee(Z,mt){let ht=l.get(mt);ht===void 0&&(ht=new WeakMap,l.set(mt,ht));let Ct=ht.get(Z);Ct===void 0&&(Ct=o.getUniformBlockIndex(mt,Z.name),ht.set(Z,Ct))}function ue(Z,mt){const Ct=l.get(mt).get(Z);a.get(mt)!==Ct&&(o.uniformBlockBinding(mt,Ct,Z.__bindingPointIndex),a.set(mt,Ct))}function Zt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},I=null,Q={},u={},c=new WeakMap,d=[],f=null,v=!1,g=null,p=null,m=null,_=null,x=null,y=null,T=null,C=new Kt(0,0,0),L=0,D=!1,E=null,M=null,R=null,B=null,P=null,J.set(0,0,o.canvas.width,o.canvas.height),z.set(0,0,o.canvas.width,o.canvas.height),i.reset(),r.reset(),s.reset()}return{buffers:{color:i,depth:r,stencil:s},enable:k,disable:$,bindFramebuffer:it,drawBuffers:K,useProgram:N,setBlending:Mt,setMaterial:dt,setFlipSided:rt,setCullFace:lt,setLineWidth:Vt,setPolygonOffset:Ot,setScissorTest:U,activeTexture:S,bindTexture:et,unbindTexture:at,compressedTexImage2D:ct,compressedTexImage3D:pt,texImage2D:ne,texImage3D:qt,updateUBOMapping:ee,uniformBlockBinding:ue,texStorage2D:wt,texStorage3D:Gt,texSubImage2D:Rt,texSubImage3D:St,compressedTexSubImage2D:gt,compressedTexSubImage3D:Wt,scissor:Ut,viewport:jt,reset:Zt}}function wg(o,t,e,n,i,r,s){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new te,u=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,S){return f?new OffscreenCanvas(U,S):Gr("canvas")}function g(U,S,et){let at=1;const ct=Ot(U);if((ct.width>et||ct.height>et)&&(at=et/Math.max(ct.width,ct.height)),at<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pt=Math.floor(at*ct.width),Rt=Math.floor(at*ct.height);c===void 0&&(c=v(pt,Rt));const St=S?v(pt,Rt):c;return St.width=pt,St.height=Rt,St.getContext("2d").drawImage(U,0,0,pt,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+pt+"x"+Rt+")."),St}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),U;return U}function p(U){return U.generateMipmaps&&U.minFilter!==ke&&U.minFilter!==an}function m(U){o.generateMipmap(U)}function _(U,S,et,at,ct=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=S;if(S===o.RED&&(et===o.FLOAT&&(pt=o.R32F),et===o.HALF_FLOAT&&(pt=o.R16F),et===o.UNSIGNED_BYTE&&(pt=o.R8)),S===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.R8UI),et===o.UNSIGNED_SHORT&&(pt=o.R16UI),et===o.UNSIGNED_INT&&(pt=o.R32UI),et===o.BYTE&&(pt=o.R8I),et===o.SHORT&&(pt=o.R16I),et===o.INT&&(pt=o.R32I)),S===o.RG&&(et===o.FLOAT&&(pt=o.RG32F),et===o.HALF_FLOAT&&(pt=o.RG16F),et===o.UNSIGNED_BYTE&&(pt=o.RG8)),S===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.RG8UI),et===o.UNSIGNED_SHORT&&(pt=o.RG16UI),et===o.UNSIGNED_INT&&(pt=o.RG32UI),et===o.BYTE&&(pt=o.RG8I),et===o.SHORT&&(pt=o.RG16I),et===o.INT&&(pt=o.RG32I)),S===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),S===o.RGBA){const Rt=ct?Os:fe.getTransfer(at);et===o.FLOAT&&(pt=o.RGBA32F),et===o.HALF_FLOAT&&(pt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(pt=Rt===we?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function x(U,S){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==ke&&U.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function y(U){const S=U.target;S.removeEventListener("dispose",y),C(S),S.isVideoTexture&&u.delete(S)}function T(U){const S=U.target;S.removeEventListener("dispose",T),D(S)}function C(U){const S=n.get(U);if(S.__webglInit===void 0)return;const et=U.source,at=d.get(et);if(at){const ct=at[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&L(U),Object.keys(at).length===0&&d.delete(et)}n.remove(U)}function L(U){const S=n.get(U);o.deleteTexture(S.__webglTexture);const et=U.source,at=d.get(et);delete at[S.__cacheKey],s.memory.textures--}function D(U){const S=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(S.__webglFramebuffer[at]))for(let ct=0;ct<S.__webglFramebuffer[at].length;ct++)o.deleteFramebuffer(S.__webglFramebuffer[at][ct]);else o.deleteFramebuffer(S.__webglFramebuffer[at]);S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer[at])}else{if(Array.isArray(S.__webglFramebuffer))for(let at=0;at<S.__webglFramebuffer.length;at++)o.deleteFramebuffer(S.__webglFramebuffer[at]);else o.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&o.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let at=0;at<S.__webglColorRenderbuffer.length;at++)S.__webglColorRenderbuffer[at]&&o.deleteRenderbuffer(S.__webglColorRenderbuffer[at]);S.__webglDepthRenderbuffer&&o.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const et=U.textures;for(let at=0,ct=et.length;at<ct;at++){const pt=n.get(et[at]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),s.memory.textures--),n.remove(et[at])}n.remove(U)}let E=0;function M(){E=0}function R(){const U=E;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),E+=1,U}function B(U){const S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function P(U,S){const et=n.get(U);if(U.isVideoTexture&&lt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const at=U.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(et,U,S);return}}e.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+S)}function q(U,S){const et=n.get(U);if(U.version>0&&et.__version!==U.version){J(et,U,S);return}e.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+S)}function W(U,S){const et=n.get(U);if(U.version>0&&et.__version!==U.version){J(et,U,S);return}e.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+S)}function ot(U,S){const et=n.get(U);if(U.version>0&&et.__version!==U.version){z(et,U,S);return}e.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+S)}const V={[lr]:o.REPEAT,[ni]:o.CLAMP_TO_EDGE,[Bs]:o.MIRRORED_REPEAT},I={[ke]:o.NEAREST,[Xc]:o.NEAREST_MIPMAP_NEAREST,[Ur]:o.NEAREST_MIPMAP_LINEAR,[an]:o.LINEAR,[Ds]:o.LINEAR_MIPMAP_NEAREST,[Vn]:o.LINEAR_MIPMAP_LINEAR},Q={[id]:o.NEVER,[cd]:o.ALWAYS,[rd]:o.LESS,[eh]:o.LEQUAL,[sd]:o.EQUAL,[ld]:o.GEQUAL,[od]:o.GREATER,[ad]:o.NOTEQUAL};function Y(U,S){if(S.type===Rn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===Ds||S.magFilter===Ur||S.magFilter===Vn||S.minFilter===an||S.minFilter===Ds||S.minFilter===Ur||S.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,V[S.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,V[S.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,V[S.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,I[S.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,I[S.minFilter]),S.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ke||S.minFilter!==Ur&&S.minFilter!==Vn||S.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function O(U,S){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",y));const at=S.source;let ct=d.get(at);ct===void 0&&(ct={},d.set(at,ct));const pt=B(S);if(pt!==U.__cacheKey){ct[pt]===void 0&&(ct[pt]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,et=!0),ct[pt].usedTimes++;const Rt=ct[U.__cacheKey];Rt!==void 0&&(ct[U.__cacheKey].usedTimes--,Rt.usedTimes===0&&L(S)),U.__cacheKey=pt,U.__webglTexture=ct[pt].texture}return et}function J(U,S,et){let at=o.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=o.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=o.TEXTURE_3D);const ct=O(U,S),pt=S.source;e.bindTexture(at,U.__webglTexture,o.TEXTURE0+et);const Rt=n.get(pt);if(pt.version!==Rt.__version||ct===!0){e.activeTexture(o.TEXTURE0+et);const St=fe.getPrimaries(fe.workingColorSpace),gt=S.colorSpace===ti?null:fe.getPrimaries(S.colorSpace),Wt=S.colorSpace===ti||St===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let wt=g(S.image,!1,i.maxTextureSize);wt=Vt(S,wt);const Gt=r.convert(S.format,S.colorSpace),ne=r.convert(S.type);let qt=_(S.internalFormat,Gt,ne,S.colorSpace,S.isVideoTexture);Y(at,S);let Ut;const jt=S.mipmaps,ee=S.isVideoTexture!==!0,ue=Rt.__version===void 0||ct===!0,Zt=pt.dataReady,Z=x(S,wt);if(S.isDepthTexture)qt=o.DEPTH_COMPONENT16,S.type===Rn?qt=o.DEPTH_COMPONENT32F:S.type===cr?qt=o.DEPTH_COMPONENT24:S.type===jr&&(qt=o.DEPTH24_STENCIL8),ue&&(ee?e.texStorage2D(o.TEXTURE_2D,1,qt,wt.width,wt.height):e.texImage2D(o.TEXTURE_2D,0,qt,wt.width,wt.height,0,Gt,ne,null));else if(S.isDataTexture)if(jt.length>0){ee&&ue&&e.texStorage2D(o.TEXTURE_2D,Z,qt,jt[0].width,jt[0].height);for(let mt=0,ht=jt.length;mt<ht;mt++)Ut=jt[mt],ee?Zt&&e.texSubImage2D(o.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,Gt,ne,Ut.data):e.texImage2D(o.TEXTURE_2D,mt,qt,Ut.width,Ut.height,0,Gt,ne,Ut.data);S.generateMipmaps=!1}else ee?(ue&&e.texStorage2D(o.TEXTURE_2D,Z,qt,wt.width,wt.height),Zt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,wt.width,wt.height,Gt,ne,wt.data)):e.texImage2D(o.TEXTURE_2D,0,qt,wt.width,wt.height,0,Gt,ne,wt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ee&&ue&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Z,qt,jt[0].width,jt[0].height,wt.depth);for(let mt=0,ht=jt.length;mt<ht;mt++)Ut=jt[mt],S.format!==Mn?Gt!==null?ee?Zt&&e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,0,Ut.width,Ut.height,wt.depth,Gt,Ut.data,0,0):e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,mt,qt,Ut.width,Ut.height,wt.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?Zt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,0,Ut.width,Ut.height,wt.depth,Gt,ne,Ut.data):e.texImage3D(o.TEXTURE_2D_ARRAY,mt,qt,Ut.width,Ut.height,wt.depth,0,Gt,ne,Ut.data)}else{ee&&ue&&e.texStorage2D(o.TEXTURE_2D,Z,qt,jt[0].width,jt[0].height);for(let mt=0,ht=jt.length;mt<ht;mt++)Ut=jt[mt],S.format!==Mn?Gt!==null?ee?Zt&&e.compressedTexSubImage2D(o.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,Gt,Ut.data):e.compressedTexImage2D(o.TEXTURE_2D,mt,qt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?Zt&&e.texSubImage2D(o.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,Gt,ne,Ut.data):e.texImage2D(o.TEXTURE_2D,mt,qt,Ut.width,Ut.height,0,Gt,ne,Ut.data)}else if(S.isDataArrayTexture)ee?(ue&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Z,qt,wt.width,wt.height,wt.depth),Zt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Gt,ne,wt.data)):e.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,wt.width,wt.height,wt.depth,0,Gt,ne,wt.data);else if(S.isData3DTexture)ee?(ue&&e.texStorage3D(o.TEXTURE_3D,Z,qt,wt.width,wt.height,wt.depth),Zt&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Gt,ne,wt.data)):e.texImage3D(o.TEXTURE_3D,0,qt,wt.width,wt.height,wt.depth,0,Gt,ne,wt.data);else if(S.isFramebufferTexture){if(ue)if(ee)e.texStorage2D(o.TEXTURE_2D,Z,qt,wt.width,wt.height);else{let mt=wt.width,ht=wt.height;for(let Ct=0;Ct<Z;Ct++)e.texImage2D(o.TEXTURE_2D,Ct,qt,mt,ht,0,Gt,ne,null),mt>>=1,ht>>=1}}else if(jt.length>0){if(ee&&ue){const mt=Ot(jt[0]);e.texStorage2D(o.TEXTURE_2D,Z,qt,mt.width,mt.height)}for(let mt=0,ht=jt.length;mt<ht;mt++)Ut=jt[mt],ee?Zt&&e.texSubImage2D(o.TEXTURE_2D,mt,0,0,Gt,ne,Ut):e.texImage2D(o.TEXTURE_2D,mt,qt,Gt,ne,Ut);S.generateMipmaps=!1}else if(ee){if(ue){const mt=Ot(wt);e.texStorage2D(o.TEXTURE_2D,Z,qt,mt.width,mt.height)}Zt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,ne,wt)}else e.texImage2D(o.TEXTURE_2D,0,qt,Gt,ne,wt);p(S)&&m(at),Rt.__version=pt.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function z(U,S,et){if(S.image.length!==6)return;const at=O(U,S),ct=S.source;e.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const pt=n.get(ct);if(ct.version!==pt.__version||at===!0){e.activeTexture(o.TEXTURE0+et);const Rt=fe.getPrimaries(fe.workingColorSpace),St=S.colorSpace===ti?null:fe.getPrimaries(S.colorSpace),gt=S.colorSpace===ti||Rt===St?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,wt=S.image[0]&&S.image[0].isDataTexture,Gt=[];for(let ht=0;ht<6;ht++)!Wt&&!wt?Gt[ht]=g(S.image[ht],!0,i.maxCubemapSize):Gt[ht]=wt?S.image[ht].image:S.image[ht],Gt[ht]=Vt(S,Gt[ht]);const ne=Gt[0],qt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type),jt=_(S.internalFormat,qt,Ut,S.colorSpace),ee=S.isVideoTexture!==!0,ue=pt.__version===void 0||at===!0,Zt=ct.dataReady;let Z=x(S,ne);Y(o.TEXTURE_CUBE_MAP,S);let mt;if(Wt){ee&&ue&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Z,jt,ne.width,ne.height);for(let ht=0;ht<6;ht++){mt=Gt[ht].mipmaps;for(let Ct=0;Ct<mt.length;Ct++){const Pt=mt[Ct];S.format!==Mn?qt!==null?ee?Zt&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,0,0,Pt.width,Pt.height,qt,Pt.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,jt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?Zt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,0,0,Pt.width,Pt.height,qt,Ut,Pt.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,jt,Pt.width,Pt.height,0,qt,Ut,Pt.data)}}}else{if(mt=S.mipmaps,ee&&ue){mt.length>0&&Z++;const ht=Ot(Gt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,Z,jt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(wt){ee?Zt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Gt[ht].width,Gt[ht].height,qt,Ut,Gt[ht].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,jt,Gt[ht].width,Gt[ht].height,0,qt,Ut,Gt[ht].data);for(let Ct=0;Ct<mt.length;Ct++){const re=mt[Ct].image[ht].image;ee?Zt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,0,0,re.width,re.height,qt,Ut,re.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,jt,re.width,re.height,0,qt,Ut,re.data)}}else{ee?Zt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,qt,Ut,Gt[ht]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,jt,qt,Ut,Gt[ht]);for(let Ct=0;Ct<mt.length;Ct++){const Pt=mt[Ct];ee?Zt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,0,0,qt,Ut,Pt.image[ht]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,jt,qt,Ut,Pt.image[ht])}}}p(S)&&m(o.TEXTURE_CUBE_MAP),pt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function A(U,S,et,at,ct,pt){const Rt=r.convert(et.format,et.colorSpace),St=r.convert(et.type),gt=_(et.internalFormat,Rt,St,et.colorSpace);if(!n.get(S).__hasExternalTextures){const wt=Math.max(1,S.width>>pt),Gt=Math.max(1,S.height>>pt);ct===o.TEXTURE_3D||ct===o.TEXTURE_2D_ARRAY?e.texImage3D(ct,pt,gt,wt,Gt,S.depth,0,Rt,St,null):e.texImage2D(ct,pt,gt,wt,Gt,0,Rt,St,null)}e.bindFramebuffer(o.FRAMEBUFFER,U),rt(S)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,at,ct,n.get(et).__webglTexture,0,dt(S)):(ct===o.TEXTURE_2D||ct>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,at,ct,n.get(et).__webglTexture,pt),e.bindFramebuffer(o.FRAMEBUFFER,null)}function b(U,S,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),S.depthBuffer&&!S.stencilBuffer){let at=o.DEPTH_COMPONENT24;if(et||rt(S)){const ct=S.depthTexture;ct&&ct.isDepthTexture&&(ct.type===Rn?at=o.DEPTH_COMPONENT32F:ct.type===cr&&(at=o.DEPTH_COMPONENT24));const pt=dt(S);rt(S)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt,at,S.width,S.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,pt,at,S.width,S.height)}else o.renderbufferStorage(o.RENDERBUFFER,at,S.width,S.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(S.depthBuffer&&S.stencilBuffer){const at=dt(S);et&&rt(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,at,o.DEPTH24_STENCIL8,S.width,S.height):rt(S)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,at,o.DEPTH24_STENCIL8,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,S.width,S.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const at=S.textures;for(let ct=0;ct<at.length;ct++){const pt=at[ct],Rt=r.convert(pt.format,pt.colorSpace),St=r.convert(pt.type),gt=_(pt.internalFormat,Rt,St,pt.colorSpace),Wt=dt(S);et&&rt(S)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,gt,S.width,S.height):rt(S)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,gt,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,gt,S.width,S.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function k(U,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);const at=n.get(S.depthTexture).__webglTexture,ct=dt(S);if(S.depthTexture.format===ir)rt(S)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,at,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,at,0);else if(S.depthTexture.format===Hr)rt(S)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,at,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function $(U){const S=n.get(U),et=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!S.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");k(S.__webglFramebuffer,U)}else if(et){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]=o.createRenderbuffer(),b(S.__webglDepthbuffer[at],U,!1)}else e.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),b(S.__webglDepthbuffer,U,!1);e.bindFramebuffer(o.FRAMEBUFFER,null)}function it(U,S,et){const at=n.get(U);S!==void 0&&A(at.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&$(U)}function K(U){const S=U.texture,et=n.get(U),at=n.get(S);U.addEventListener("dispose",T);const ct=U.textures,pt=U.isWebGLCubeRenderTarget===!0,Rt=ct.length>1;if(Rt||(at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture()),at.__version=S.version,s.memory.textures++),pt){et.__webglFramebuffer=[];for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0){et.__webglFramebuffer[St]=[];for(let gt=0;gt<S.mipmaps.length;gt++)et.__webglFramebuffer[St][gt]=o.createFramebuffer()}else et.__webglFramebuffer[St]=o.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){et.__webglFramebuffer=[];for(let St=0;St<S.mipmaps.length;St++)et.__webglFramebuffer[St]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Rt)for(let St=0,gt=ct.length;St<gt;St++){const Wt=n.get(ct[St]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),s.memory.textures++)}if(U.samples>0&&rt(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let St=0;St<ct.length;St++){const gt=ct[St];et.__webglColorRenderbuffer[St]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[St]);const Wt=r.convert(gt.format,gt.colorSpace),wt=r.convert(gt.type),Gt=_(gt.internalFormat,Wt,wt,gt.colorSpace,U.isXRRenderTarget===!0),ne=dt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Gt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,et.__webglColorRenderbuffer[St])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),b(et.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){e.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture),Y(o.TEXTURE_CUBE_MAP,S);for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)A(et.__webglFramebuffer[St][gt],U,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,gt);else A(et.__webglFramebuffer[St],U,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);p(S)&&m(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let St=0,gt=ct.length;St<gt;St++){const Wt=ct[St],wt=n.get(Wt);e.bindTexture(o.TEXTURE_2D,wt.__webglTexture),Y(o.TEXTURE_2D,Wt),A(et.__webglFramebuffer,U,Wt,o.COLOR_ATTACHMENT0+St,o.TEXTURE_2D,0),p(Wt)&&m(o.TEXTURE_2D)}e.unbindTexture()}else{let St=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(St=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(St,at.__webglTexture),Y(St,S),S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)A(et.__webglFramebuffer[gt],U,S,o.COLOR_ATTACHMENT0,St,gt);else A(et.__webglFramebuffer,U,S,o.COLOR_ATTACHMENT0,St,0);p(S)&&m(St),e.unbindTexture()}U.depthBuffer&&$(U)}function N(U){const S=U.textures;for(let et=0,at=S.length;et<at;et++){const ct=S[et];if(p(ct)){const pt=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Rt=n.get(ct).__webglTexture;e.bindTexture(pt,Rt),m(pt),e.unbindTexture()}}}const ut=[],vt=[];function Mt(U){if(U.samples>0){if(rt(U)===!1){const S=U.textures,et=U.width,at=U.height;let ct=o.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=n.get(U),St=S.length>1;if(St)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ct|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ct|=o.STENCIL_BUFFER_BIT)),St){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Rt.__webglColorRenderbuffer[gt]);const Wt=n.get(S[gt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Wt,0)}o.blitFramebuffer(0,0,et,at,0,0,et,at,ct,o.NEAREST),l===!0&&(ut.length=0,vt.length=0,ut.push(o.COLOR_ATTACHMENT0+gt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ut.push(pt),vt.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,vt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),St)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,Rt.__webglColorRenderbuffer[gt]);const Wt=n.get(S[gt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.TEXTURE_2D,Wt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const S=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[S])}}}function dt(U){return Math.min(i.maxSamples,U.samples)}function rt(U){const S=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(U){const S=s.render.frame;u.get(U)!==S&&(u.set(U,S),U.update())}function Vt(U,S){const et=U.colorSpace,at=U.format,ct=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==We&&et!==ti&&(fe.getTransfer(et)===we?(at!==Mn||ct!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),S}function Ot(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=R,this.resetTextureUnits=M,this.setTexture2D=P,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=ot,this.rebindTextures=it,this.setupRenderTarget=K,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=A,this.useMultisampledRTT=rt}function Tg(o,t){function e(n,i=ti){let r;const s=fe.getTransfer(i);if(n===li)return o.UNSIGNED_BYTE;if(n===jc)return o.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return o.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return o.BYTE;if(n===Wu)return o.SHORT;if(n===qc)return o.UNSIGNED_SHORT;if(n===Yc)return o.INT;if(n===cr)return o.UNSIGNED_INT;if(n===Rn)return o.FLOAT;if(n===js)return o.HALF_FLOAT;if(n===qu)return o.ALPHA;if(n===Yu)return o.RGB;if(n===Mn)return o.RGBA;if(n===ju)return o.LUMINANCE;if(n===Ku)return o.LUMINANCE_ALPHA;if(n===ir)return o.DEPTH_COMPONENT;if(n===Hr)return o.DEPTH_STENCIL;if(n===Zc)return o.RED;if(n===$c)return o.RED_INTEGER;if(n===Zu)return o.RG;if(n===Qc)return o.RG_INTEGER;if(n===Jc)return o.RGBA_INTEGER;if(n===io||n===ro||n===so||n===oo)if(s===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ua||n===Fa||n===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===za||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===za)return s===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===ka||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka||n===Za||n===$a||n===Qa||n===Ja||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return s===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===el||n===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ao)return s===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$u||n===il||n===rl||n===sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:e}}class Ag extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ei extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bg={type:"move"};class Do{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){s=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(h,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,v=.005;h.inputState.pinching&&d>f+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Oe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new ci({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ge(new $s(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Lg extends vr{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,v=null;const g=new Pg,p=e.getContextAttributes();let m=null,_=null;const x=[],y=[],T=new te;let C=null;const L=new Qe;L.layers.enable(1),L.viewport=new xe;const D=new Qe;D.layers.enable(2),D.viewport=new xe;const E=[L,D],M=new Ag;M.layers.enable(1),M.layers.enable(2);let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let b=x[A];return b===void 0&&(b=new Do,x[A]=b),b.getTargetRaySpace()},this.getControllerGrip=function(A){let b=x[A];return b===void 0&&(b=new Do,x[A]=b),b.getGripSpace()},this.getHand=function(A){let b=x[A];return b===void 0&&(b=new Do,x[A]=b),b.getHandSpace()};function P(A){const b=y.indexOf(A.inputSource);if(b===-1)return;const k=x[b];k!==void 0&&(k.update(A.inputSource,A.frame,h||s),k.dispatchEvent({type:A.type,data:A.inputSource}))}function q(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",W);for(let A=0;A<x.length;A++){const b=y[A];b!==null&&(y[A]=null,x[A].disconnect(b))}R=null,B=null,g.reset(),t.setRenderTarget(m),f=null,d=null,c=null,i=null,_=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){r=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){a=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(A){h=A},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(A){if(i=A,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",q),i.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){const b={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,b),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ai(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let b=null,k=null,$=null;p.depth&&($=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,b=p.stencil?Hr:ir,k=p.stencil?jr:cr);const it={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};c=new XRWebGLBinding(i,e),d=c.createProjectionLayer(it),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Ai(d.textureWidth,d.textureHeight,{format:Mn,type:li,depthTexture:new ph(d.textureWidth,d.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,b),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,s=await i.requestReferenceSpace(a),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function W(A){for(let b=0;b<A.removed.length;b++){const k=A.removed[b],$=y.indexOf(k);$>=0&&(y[$]=null,x[$].disconnect(k))}for(let b=0;b<A.added.length;b++){const k=A.added[b];let $=y.indexOf(k);if($===-1){for(let K=0;K<x.length;K++)if(K>=y.length){y.push(k),$=K;break}else if(y[K]===null){y[K]=k,$=K;break}if($===-1)break}const it=x[$];it&&it.connect(k)}}const ot=new G,V=new G;function I(A,b,k){ot.setFromMatrixPosition(b.matrixWorld),V.setFromMatrixPosition(k.matrixWorld);const $=ot.distanceTo(V),it=b.projectionMatrix.elements,K=k.projectionMatrix.elements,N=it[14]/(it[10]-1),ut=it[14]/(it[10]+1),vt=(it[9]+1)/it[5],Mt=(it[9]-1)/it[5],dt=(it[8]-1)/it[0],rt=(K[8]+1)/K[0],lt=N*dt,Vt=N*rt,Ot=$/(-dt+rt),U=Ot*-dt;b.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(U),A.translateZ(Ot),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const S=N+Ot,et=ut+Ot,at=lt-U,ct=Vt+($-U),pt=vt*ut/et*S,Rt=Mt*ut/et*S;A.projectionMatrix.makePerspective(at,ct,pt,Rt,S,et),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function Q(A,b){b===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(b.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(i===null)return;g.texture!==null&&(A.near=g.depthNear,A.far=g.depthFar),M.near=D.near=L.near=A.near,M.far=D.far=L.far=A.far,(R!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,B=M.far,L.near=R,L.far=B,D.near=R,D.far=B,L.updateProjectionMatrix(),D.updateProjectionMatrix(),A.updateProjectionMatrix());const b=A.parent,k=M.cameras;Q(M,b);for(let $=0;$<k.length;$++)Q(k[$],b);k.length===2?I(M,L,D):M.projectionMatrix.copy(L.projectionMatrix),Y(A,M,b)};function Y(A,b,k){k===null?A.matrix.copy(b.matrixWorld):(A.matrix.copy(k.matrixWorld),A.matrix.invert(),A.matrix.multiply(b.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(b.projectionMatrix),A.projectionMatrixInverse.copy(b.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=ur*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(A){l=A,d!==null&&(d.fixedFoveation=A),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=A)},this.hasDepthSensing=function(){return g.texture!==null};let O=null;function J(A,b){if(u=b.getViewerPose(h||s),v=b,u!==null){const k=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let $=!1;k.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let K=0;K<k.length;K++){const N=k[K];let ut=null;if(f!==null)ut=f.getViewport(N);else{const Mt=c.getViewSubImage(d,N);ut=Mt.viewport,K===0&&(t.setRenderTargetTextures(_,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(_))}let vt=E[K];vt===void 0&&(vt=new Qe,vt.layers.enable(K),vt.viewport=new xe,E[K]=vt),vt.matrix.fromArray(N.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(N.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(ut.x,ut.y,ut.width,ut.height),K===0&&(M.matrix.copy(vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(vt)}const it=i.enabledFeatures;if(it&&it.includes("depth-sensing")){const K=c.getDepthInformation(k[0]);K&&K.isValid&&K.texture&&g.init(t,K,i.renderState)}}for(let k=0;k<x.length;k++){const $=y[k],it=x[k];$!==null&&it!==void 0&&it.update($,b,h||s)}g.render(t,M),O&&O(A,b),b.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:b}),v=null}const z=new fh;z.setAnimationLoop(J),this.setAnimationLoop=function(A){O=A},this.dispose=function(){}}}const mi=new dn,Ig=new ie;function Ng(o,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,hh(o)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,_,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),c(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),v(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,x):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=t.get(m),x=_.envMap,y=_.envMapRotation;if(x&&(p.envMap.value=x,mi.copy(y),mi.x*=-1,mi.y*=-1,mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),p.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(mi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const T=o._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*T,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function c(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dg(o,t,e,n){let i={},r={},s=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function h(_,x){let y=i[_.id];y===void 0&&(v(_),y=u(_),i[_.id]=y,_.addEventListener("dispose",p));const T=x.program;n.updateUBOMapping(_,T);const C=t.render.frame;r[_.id]!==C&&(d(_),r[_.id]=C)}function u(_){const x=c();_.__bindingPointIndex=x;const y=o.createBuffer(),T=_.__size,C=_.usage;return o.bindBuffer(o.UNIFORM_BUFFER,y),o.bufferData(o.UNIFORM_BUFFER,T,C),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,x,y),y}function c(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=i[_.id],y=_.uniforms,T=_.__cache;o.bindBuffer(o.UNIFORM_BUFFER,x);for(let C=0,L=y.length;C<L;C++){const D=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,M=D.length;E<M;E++){const R=D[E];if(f(R,C,E,T)===!0){const B=R.__offset,P=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let W=0;W<P.length;W++){const ot=P[W],V=g(ot);typeof ot=="number"||typeof ot=="boolean"?(R.__data[0]=ot,o.bufferSubData(o.UNIFORM_BUFFER,B+q,R.__data)):ot.isMatrix3?(R.__data[0]=ot.elements[0],R.__data[1]=ot.elements[1],R.__data[2]=ot.elements[2],R.__data[3]=0,R.__data[4]=ot.elements[3],R.__data[5]=ot.elements[4],R.__data[6]=ot.elements[5],R.__data[7]=0,R.__data[8]=ot.elements[6],R.__data[9]=ot.elements[7],R.__data[10]=ot.elements[8],R.__data[11]=0):(ot.toArray(R.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,B,R.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(_,x,y,T){const C=_.value,L=x+"_"+y;if(T[L]===void 0)return typeof C=="number"||typeof C=="boolean"?T[L]=C:T[L]=C.clone(),!0;{const D=T[L];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return T[L]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function v(_){const x=_.uniforms;let y=0;const T=16;for(let L=0,D=x.length;L<D;L++){const E=Array.isArray(x[L])?x[L]:[x[L]];for(let M=0,R=E.length;M<R;M++){const B=E[M],P=Array.isArray(B.value)?B.value:[B.value];for(let q=0,W=P.length;q<W;q++){const ot=P[q],V=g(ot),I=y%T;I!==0&&T-I<V.boundary&&(y+=T-I),B.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=V.storage}}}const C=y%T;return C>0&&(y+=T-C),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function p(_){const x=_.target;x.removeEventListener("dispose",p);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const _ in i)o.deleteBuffer(i[_]);s=[],i={},r={}}return{bind:l,update:h,dispose:m}}class Ug{constructor(t={}){const{canvas:e=bd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=s;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const x=this;let y=!1,T=0,C=0,L=null,D=-1,E=null;const M=new xe,R=new xe;let B=null;const P=new Kt(0);let q=0,W=e.width,ot=e.height,V=1,I=null,Q=null;const Y=new xe(0,0,W,ot),O=new xe(0,0,W,ot);let J=!1;const z=new ca;let A=!1,b=!1;const k=new ie,$=new G,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function K(){return L===null?V:1}let N=n;function ut(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ra}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){const F="webgl2";if(N=ut(F,w),N===null)throw ut(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let vt,Mt,dt,rt,lt,Vt,Ot,U,S,et,at,ct,pt,Rt,St,gt,Wt,wt,Gt,ne,qt,Ut,jt,ee;function ue(){vt=new Gm(N),vt.init(),Ut=new Tg(N,vt),Mt=new Bm(N,vt,t,Ut),dt=new Eg(N),rt=new qm(N),lt=new cg,Vt=new wg(N,vt,dt,lt,Mt,Ut,rt),Ot=new zm(x),U=new km(x),S=new Qd(N),jt=new Um(N,S),et=new Wm(N,S,rt,jt),at=new jm(N,et,S,rt),Gt=new Ym(N,Mt,Vt),gt=new Om(lt),ct=new lg(x,Ot,U,vt,Mt,jt,gt),pt=new Ng(x,lt),Rt=new ug,St=new gg(vt),wt=new Dm(x,Ot,U,dt,at,d,l),Wt=new Sg(x,at,Mt),ee=new Dg(N,rt,Mt,dt),ne=new Fm(N,vt,rt),qt=new Xm(N,vt,rt),rt.programs=ct.programs,x.capabilities=Mt,x.extensions=vt,x.properties=lt,x.renderLists=Rt,x.shadowMap=Wt,x.state=dt,x.info=rt}ue();const Zt=new Lg(x,N);this.xr=Zt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(W,ot,!1))},this.getSize=function(w){return w.set(W,ot)},this.setSize=function(w,F,H=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,ot=F,e.width=Math.floor(w*V),e.height=Math.floor(F*V),H===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(W*V,ot*V).floor()},this.setDrawingBufferSize=function(w,F,H){W=w,ot=F,V=H,e.width=Math.floor(w*H),e.height=Math.floor(F*H),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,F,H,X){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,F,H,X),dt.viewport(M.copy(Y).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(O)},this.setScissor=function(w,F,H,X){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,F,H,X),dt.scissor(R.copy(O).multiplyScalar(V).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(w){dt.setScissorTest(J=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(w=!0,F=!0,H=!0){let X=0;if(w){let j=!1;if(L!==null){const tt=L.texture.format;j=tt===Jc||tt===Qc||tt===$c}if(j){const tt=L.texture.type,xt=tt===li||tt===cr||tt===qc||tt===jr||tt===jc||tt===Kc,Et=wt.getClearColor(),zt=wt.getClearAlpha(),Lt=Et.r,Ft=Et.g,At=Et.b;xt?(f[0]=Lt,f[1]=Ft,f[2]=At,f[3]=zt,N.clearBufferuiv(N.COLOR,0,f)):(v[0]=Lt,v[1]=Ft,v[2]=At,v[3]=zt,N.clearBufferiv(N.COLOR,0,v))}else X|=N.COLOR_BUFFER_BIT}F&&(X|=N.DEPTH_BUFFER_BIT),H&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Rt.dispose(),St.dispose(),lt.dispose(),Ot.dispose(),U.dispose(),at.dispose(),jt.dispose(),ee.dispose(),ct.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",le),Zt.removeEventListener("sessionend",pe),st.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=rt.autoReset,F=Wt.enabled,H=Wt.autoUpdate,X=Wt.needsUpdate,j=Wt.type;ue(),rt.autoReset=w,Wt.enabled=F,Wt.autoUpdate=H,Wt.needsUpdate=X,Wt.type=j}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ct(w){const F=w.target;F.removeEventListener("dispose",Ct),Pt(F)}function Pt(w){re(w),lt.remove(w)}function re(w){const F=lt.get(w).programs;F!==void 0&&(F.forEach(function(H){ct.releaseProgram(H)}),w.isShaderMaterial&&ct.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,H,X,j,tt){F===null&&(F=it);const xt=j.isMesh&&j.matrixWorld.determinant()<0,Et=bt(w,F,H,X,j);dt.setMaterial(X,xt);let zt=H.index,Lt=1;if(X.wireframe===!0){if(zt=et.getWireframeAttribute(H),zt===void 0)return;Lt=2}const Ft=H.drawRange,At=H.attributes.position;let he=Ft.start*Lt,me=(Ft.start+Ft.count)*Lt;tt!==null&&(he=Math.max(he,tt.start*Lt),me=Math.min(me,(tt.start+tt.count)*Lt)),zt!==null?(he=Math.max(he,0),me=Math.min(me,zt.count)):At!=null&&(he=Math.max(he,0),me=Math.min(me,At.count));const ye=me-he;if(ye<0||ye===1/0)return;jt.setup(j,X,Et,H,zt);let Le,Jt=ne;if(zt!==null&&(Le=S.get(zt),Jt=qt,Jt.setIndex(Le)),j.isMesh)X.wireframe===!0?(dt.setLineWidth(X.wireframeLinewidth*K()),Jt.setMode(N.LINES)):Jt.setMode(N.TRIANGLES);else if(j.isLine){let Ht=X.linewidth;Ht===void 0&&(Ht=1),dt.setLineWidth(Ht*K()),j.isLineSegments?Jt.setMode(N.LINES):j.isLineLoop?Jt.setMode(N.LINE_LOOP):Jt.setMode(N.LINE_STRIP)}else j.isPoints?Jt.setMode(N.POINTS):j.isSprite&&Jt.setMode(N.TRIANGLES);if(j.isBatchedMesh)j._multiDrawInstances!==null?Jt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances):Jt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Jt.renderInstances(he,ye,j.count);else if(H.isInstancedBufferGeometry){const Ht=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ke=Math.min(H.instanceCount,Ht);Jt.renderInstances(he,ye,Ke)}else Jt.render(he,ye)};function ce(w,F,H){w.transparent===!0&&w.side===_n&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,Tt(w,F,H),w.side=Gn,w.needsUpdate=!0,Tt(w,F,H),w.side=_n):Tt(w,F,H)}this.compile=function(w,F,H=null){H===null&&(H=w),p=St.get(H),p.init(F),_.push(p),H.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),w!==H&&w.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(x._useLegacyLights);const X=new Set;return w.traverse(function(j){const tt=j.material;if(tt)if(Array.isArray(tt))for(let xt=0;xt<tt.length;xt++){const Et=tt[xt];ce(Et,H,j),X.add(Et)}else ce(tt,H,j),X.add(tt)}),_.pop(),p=null,X},this.compileAsync=function(w,F,H=null){const X=this.compile(w,F,H);return new Promise(j=>{function tt(){if(X.forEach(function(xt){lt.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){j(w);return}setTimeout(tt,10)}vt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let de=null;function Ae(w){de&&de(w)}function le(){st.stop()}function pe(){st.start()}const st=new fh;st.setAnimationLoop(Ae),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(w){de=w,Zt.setAnimationLoop(w),w===null?st.stop():st.start()},Zt.addEventListener("sessionstart",le),Zt.addEventListener("sessionend",pe),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(F),F=Zt.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,L),p=St.get(w,_.length),p.init(F),_.push(p),k.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),z.setFromProjectionMatrix(k),b=this.localClippingEnabled,A=gt.init(this.clippingPlanes,b),g=Rt.get(w,m.length),g.init(),m.push(g),ft(w,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(I,Q);const H=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1;H&&wt.addToRenderList(g,w),this.info.render.frame++,A===!0&&gt.beginShadows();const X=p.state.shadowsArray;Wt.render(X,w,F),A===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,tt=g.transmissive;if(p.setupLights(x._useLegacyLights),F.isArrayCamera){const xt=F.cameras;if(tt.length>0)for(let Et=0,zt=xt.length;Et<zt;Et++){const Lt=xt[Et];yt(j,tt,w,Lt)}H&&wt.render(w);for(let Et=0,zt=xt.length;Et<zt;Et++){const Lt=xt[Et];_t(g,w,Lt,Lt.viewport)}}else tt.length>0&&yt(j,tt,w,F),H&&wt.render(w),_t(g,w,F);L!==null&&(Vt.updateMultisampleRenderTarget(L),Vt.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,F),jt.resetDefaultState(),D=-1,E=null,_.pop(),_.length>0?(p=_[_.length-1],A===!0&&gt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function ft(w,F,H,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||z.intersectsSprite(w)){X&&$.setFromMatrixPosition(w.matrixWorld).applyMatrix4(k);const xt=at.update(w),Et=w.material;Et.visible&&g.push(w,xt,Et,H,$.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||z.intersectsObject(w))){const xt=at.update(w),Et=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$.copy(w.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),$.copy(xt.boundingSphere.center)),$.applyMatrix4(w.matrixWorld).applyMatrix4(k)),Array.isArray(Et)){const zt=xt.groups;for(let Lt=0,Ft=zt.length;Lt<Ft;Lt++){const At=zt[Lt],he=Et[At.materialIndex];he&&he.visible&&g.push(w,xt,he,H,$.z,At)}}else Et.visible&&g.push(w,xt,Et,H,$.z,null)}}const tt=w.children;for(let xt=0,Et=tt.length;xt<Et;xt++)ft(tt[xt],F,H,X)}function _t(w,F,H,X){const j=w.opaque,tt=w.transmissive,xt=w.transparent;p.setupLightsView(H),A===!0&&gt.setGlobalState(x.clippingPlanes,H),X&&dt.viewport(M.copy(X)),j.length>0&&Yt(j,F,H),tt.length>0&&Yt(tt,F,H),xt.length>0&&Yt(xt,F,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function yt(w,F,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ai(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?js:li,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const tt=p.state.transmissionRenderTarget[X.id],xt=X.viewport||M;tt.setSize(xt.z,xt.w);const Et=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(P),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear();const zt=x.toneMapping;x.toneMapping=oi;const Lt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),A===!0&&gt.setGlobalState(x.clippingPlanes,X),Yt(w,H,X),Vt.updateMultisampleRenderTarget(tt),Vt.updateRenderTargetMipmap(tt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let At=0,he=F.length;At<he;At++){const me=F[At],ye=me.object,Le=me.geometry,Jt=me.material,Ht=me.group;if(Jt.side===_n&&ye.layers.test(X.layers)){const Ke=Jt.side;Jt.side=nn,Jt.needsUpdate=!0,Dt(ye,H,X,Le,Jt,Ht),Jt.side=Ke,Jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(Vt.updateMultisampleRenderTarget(tt),Vt.updateRenderTargetMipmap(tt))}x.setRenderTarget(Et),x.setClearColor(P,q),Lt!==void 0&&(X.viewport=Lt),x.toneMapping=zt}function Yt(w,F,H){const X=F.isScene===!0?F.overrideMaterial:null;for(let j=0,tt=w.length;j<tt;j++){const xt=w[j],Et=xt.object,zt=xt.geometry,Lt=X===null?xt.material:X,Ft=xt.group;Et.layers.test(H.layers)&&Dt(Et,F,H,zt,Lt,Ft)}}function Dt(w,F,H,X,j,tt){w.onBeforeRender(x,F,H,X,j,tt),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(x,F,H,X,w,tt),j.transparent===!0&&j.side===_n&&j.forceSinglePass===!1?(j.side=nn,j.needsUpdate=!0,x.renderBufferDirect(H,F,X,j,w,tt),j.side=Gn,j.needsUpdate=!0,x.renderBufferDirect(H,F,X,j,w,tt),j.side=_n):x.renderBufferDirect(H,F,X,j,w,tt),w.onAfterRender(x,F,H,X,j,tt)}function Tt(w,F,H){F.isScene!==!0&&(F=it);const X=lt.get(w),j=p.state.lights,tt=p.state.shadowsArray,xt=j.state.version,Et=ct.getParameters(w,j.state,tt,F,H),zt=ct.getProgramCacheKey(Et);let Lt=X.programs;X.environment=w.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(w.isMeshStandardMaterial?U:Ot).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Ct),Lt=new Map,X.programs=Lt);let Ft=Lt.get(zt);if(Ft!==void 0){if(X.currentProgram===Ft&&X.lightsStateVersion===xt)return nt(w,Et),Ft}else Et.uniforms=ct.getUniforms(w),w.onBuild(H,Et,x),w.onBeforeCompile(Et,x),Ft=ct.acquireProgram(Et,zt),Lt.set(zt,Ft),X.uniforms=Et.uniforms;const At=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=gt.uniform),nt(w,Et),X.needsLights=kt(w),X.lightsStateVersion=xt,X.needsLights&&(At.ambientLightColor.value=j.state.ambient,At.lightProbe.value=j.state.probe,At.directionalLights.value=j.state.directional,At.directionalLightShadows.value=j.state.directionalShadow,At.spotLights.value=j.state.spot,At.spotLightShadows.value=j.state.spotShadow,At.rectAreaLights.value=j.state.rectArea,At.ltc_1.value=j.state.rectAreaLTC1,At.ltc_2.value=j.state.rectAreaLTC2,At.pointLights.value=j.state.point,At.pointLightShadows.value=j.state.pointShadow,At.hemisphereLights.value=j.state.hemi,At.directionalShadowMap.value=j.state.directionalShadowMap,At.directionalShadowMatrix.value=j.state.directionalShadowMatrix,At.spotShadowMap.value=j.state.spotShadowMap,At.spotLightMatrix.value=j.state.spotLightMatrix,At.spotLightMap.value=j.state.spotLightMap,At.pointShadowMap.value=j.state.pointShadowMap,At.pointShadowMatrix.value=j.state.pointShadowMatrix),X.currentProgram=Ft,X.uniformsList=null,Ft}function It(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Us.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function nt(w,F){const H=lt.get(w);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function bt(w,F,H,X,j){F.isScene!==!0&&(F=it),Vt.resetTextureUnits();const tt=F.fog,xt=X.isMeshStandardMaterial?F.environment:null,Et=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:We,zt=(X.isMeshStandardMaterial?U:Ot).get(X.envMap||xt),Lt=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ft=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),At=!!H.morphAttributes.position,he=!!H.morphAttributes.normal,me=!!H.morphAttributes.color;let ye=oi;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ye=x.toneMapping);const Le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Jt=Le!==void 0?Le.length:0,Ht=lt.get(X),Ke=p.state.lights;if(A===!0&&(b===!0||w!==E)){const Se=w===E&&X.id===D;gt.setState(X,w,Se)}let $t=!1;X.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ke.state.version||Ht.outputColorSpace!==Et||j.isBatchedMesh&&Ht.batching===!1||!j.isBatchedMesh&&Ht.batching===!0||j.isInstancedMesh&&Ht.instancing===!1||!j.isInstancedMesh&&Ht.instancing===!0||j.isSkinnedMesh&&Ht.skinning===!1||!j.isSkinnedMesh&&Ht.skinning===!0||j.isInstancedMesh&&Ht.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ht.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ht.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ht.instancingMorph===!1&&j.morphTexture!==null||Ht.envMap!==zt||X.fog===!0&&Ht.fog!==tt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==gt.numPlanes||Ht.numIntersection!==gt.numIntersection)||Ht.vertexAlphas!==Lt||Ht.vertexTangents!==Ft||Ht.morphTargets!==At||Ht.morphNormals!==he||Ht.morphColors!==me||Ht.toneMapping!==ye||Ht.morphTargetsCount!==Jt)&&($t=!0):($t=!0,Ht.__version=X.version);let ze=Ht.currentProgram;$t===!0&&(ze=Tt(X,F,j));let Ve=!1,be=!1,Ce=!1;const ve=ze.getUniforms(),Fe=Ht.uniforms;if(dt.useProgram(ze.program)&&(Ve=!0,be=!0,Ce=!0),X.id!==D&&(D=X.id,be=!0),Ve||E!==w){ve.setValue(N,"projectionMatrix",w.projectionMatrix),ve.setValue(N,"viewMatrix",w.matrixWorldInverse);const Se=ve.map.cameraPosition;Se!==void 0&&Se.setValue(N,$.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&ve.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ve.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,be=!0,Ce=!0)}if(j.isSkinnedMesh){ve.setOptional(N,j,"bindMatrix"),ve.setOptional(N,j,"bindMatrixInverse");const Se=j.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ve.setValue(N,"boneTexture",Se.boneTexture,Vt))}j.isBatchedMesh&&(ve.setOptional(N,j,"batchingTexture"),ve.setValue(N,"batchingTexture",j._matricesTexture,Vt));const Qt=H.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Gt.update(j,H,ze),(be||Ht.receiveShadow!==j.receiveShadow)&&(Ht.receiveShadow=j.receiveShadow,ve.setValue(N,"receiveShadow",j.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Fe.envMap.value=zt,Fe.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Fe.envMapIntensity.value=F.environmentIntensity),be&&(ve.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&Nt(Fe,Ce),tt&&X.fog===!0&&pt.refreshFogUniforms(Fe,tt),pt.refreshMaterialUniforms(Fe,X,V,ot,p.state.transmissionRenderTarget[w.id]),Us.upload(N,It(Ht),Fe,Vt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Us.upload(N,It(Ht),Fe,Vt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ve.setValue(N,"center",j.center),ve.setValue(N,"modelViewMatrix",j.modelViewMatrix),ve.setValue(N,"normalMatrix",j.normalMatrix),ve.setValue(N,"modelMatrix",j.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Se=X.uniformsGroups;for(let Re=0,In=Se.length;Re<In;Re++){const wn=Se[Re];ee.update(wn,ze),ee.bind(wn,ze)}}return ze}function Nt(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function kt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,F,H){lt.get(w.texture).__webglTexture=F,lt.get(w.depthTexture).__webglTexture=H;const X=lt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const H=lt.get(w);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,H=0){L=w,T=F,C=H;let X=!0,j=null,tt=!1,xt=!1;if(w){const zt=lt.get(w);zt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(N.FRAMEBUFFER,null),X=!1):zt.__webglFramebuffer===void 0?Vt.setupRenderTarget(w):zt.__hasExternalTextures&&Vt.rebindTextures(w,lt.get(w.texture).__webglTexture,lt.get(w.depthTexture).__webglTexture);const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(xt=!0);const Ft=lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?j=Ft[F][H]:j=Ft[F],tt=!0):w.samples>0&&Vt.useMultisampledRTT(w)===!1?j=lt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?j=Ft[H]:j=Ft,M.copy(w.viewport),R.copy(w.scissor),B=w.scissorTest}else M.copy(Y).multiplyScalar(V).floor(),R.copy(O).multiplyScalar(V).floor(),B=J;if(dt.bindFramebuffer(N.FRAMEBUFFER,j)&&X&&dt.drawBuffers(w,j),dt.viewport(M),dt.scissor(R),dt.setScissorTest(B),tt){const zt=lt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,zt.__webglTexture,H)}else if(xt){const zt=lt.get(w.texture),Lt=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.__webglTexture,H||0,Lt)}D=-1},this.readRenderTargetPixels=function(w,F,H,X,j,tt,xt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){dt.bindFramebuffer(N.FRAMEBUFFER,Et);try{const zt=w.texture,Lt=zt.format,Ft=zt.type;if(!Mt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&H>=0&&H<=w.height-j&&N.readPixels(F,H,X,j,Ut.convert(Lt),Ut.convert(Ft),tt)}finally{const zt=L!==null?lt.get(L).__webglFramebuffer:null;dt.bindFramebuffer(N.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(w,F,H=0){const X=Math.pow(2,-H),j=Math.floor(F.image.width*X),tt=Math.floor(F.image.height*X);Vt.setTexture2D(F,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,w.x,w.y,j,tt),dt.unbindTexture()},this.copyTextureToTexture=function(w,F,H,X=0){const j=F.image.width,tt=F.image.height,xt=Ut.convert(H.format),Et=Ut.convert(H.type);Vt.setTexture2D(H,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment),F.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,w.x,w.y,j,tt,xt,Et,F.image.data):F.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,xt,F.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,X,w.x,w.y,xt,Et,F.image),X===0&&H.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,H,X,j=0){const tt=w.max.x-w.min.x,xt=w.max.y-w.min.y,Et=w.max.z-w.min.z,zt=Ut.convert(X.format),Lt=Ut.convert(X.type);let Ft;if(X.isData3DTexture)Vt.setTexture3D(X,0),Ft=N.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Vt.setTexture2DArray(X,0),Ft=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const At=N.getParameter(N.UNPACK_ROW_LENGTH),he=N.getParameter(N.UNPACK_IMAGE_HEIGHT),me=N.getParameter(N.UNPACK_SKIP_PIXELS),ye=N.getParameter(N.UNPACK_SKIP_ROWS),Le=N.getParameter(N.UNPACK_SKIP_IMAGES),Jt=H.isCompressedTexture?H.mipmaps[j]:H.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Jt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,w.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,w.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,w.min.z),H.isDataTexture||H.isData3DTexture?N.texSubImage3D(Ft,j,F.x,F.y,F.z,tt,xt,Et,zt,Lt,Jt.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(Ft,j,F.x,F.y,F.z,tt,xt,Et,zt,Jt.data):N.texSubImage3D(Ft,j,F.x,F.y,F.z,tt,xt,Et,zt,Lt,Jt),N.pixelStorei(N.UNPACK_ROW_LENGTH,At),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he),N.pixelStorei(N.UNPACK_SKIP_PIXELS,me),N.pixelStorei(N.UNPACK_SKIP_ROWS,ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le),j===0&&X.generateMipmaps&&N.generateMipmap(Ft),dt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Vt.setTextureCube(w,0):w.isData3DTexture?Vt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Vt.setTexture2DArray(w,0):Vt.setTexture2D(w,0),dt.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,dt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===aa?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Ks?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class da{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new da(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fg extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class xh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ih("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new G;class Wr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fa extends hn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const Tr=new G,ji=new G,Ki=new G,Zi=new te,Ar=new te,Mh=new ie,_s=new G,br=new G,ys=new G,Jl=new te,Uo=new te,tc=new te;class Sh extends Ee{constructor(t=new fa){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new fn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xh(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new Wr(n,3,0,!1)),Yi.setAttribute("uv",new Wr(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new te(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Mh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ki.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;xs(_s.set(-.5,-.5,0),Ki,s,ji,i,r),xs(br.set(.5,-.5,0),Ki,s,ji,i,r),xs(ys.set(.5,.5,0),Ki,s,ji,i,r),Jl.set(0,0),Uo.set(1,0),tc.set(1,1);let a=t.ray.intersectTriangle(_s,br,ys,!1,Tr);if(a===null&&(xs(br.set(-.5,.5,0),Ki,s,ji,i,r),Uo.set(0,1),a=t.ray.intersectTriangle(_s,ys,br,!1,Tr),a===null))return;const l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:xn.getInterpolation(Tr,_s,br,ys,Jl,Uo,tc,new te),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xs(o,t,e,n,i,r){Zi.subVectors(o,e).addScalar(.5).multiply(n),i!==void 0?(Ar.x=r*Zi.x-i*Zi.y,Ar.y=i*Zi.x+r*Zi.y):Ar.copy(Zi),o.copy(t),o.x+=Ar.x,o.y+=Ar.y,o.applyMatrix4(Mh)}const ec=new G,nc=new xe,ic=new xe,Bg=new G,rc=new ie,Ms=new G,Fo=new Cn,sc=new ie,Bo=new Zs;class Og extends Ge{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Na,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ms),this.boundingBox.expandByPoint(Ms)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ms),this.boundingSphere.expandByPoint(Ms)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(i),t.ray.intersectsSphere(Fo)!==!1&&(sc.copy(i).invert(),Bo.copy(t.ray).applyMatrix4(sc),!(this.boundingBox!==null&&Bo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Bo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Na?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ku?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;nc.fromBufferAttribute(i.attributes.skinIndex,t),ic.fromBufferAttribute(i.attributes.skinWeight,t),ec.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=ic.getComponent(r);if(s!==0){const a=nc.getComponent(r);rc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Bg.copy(ec).applyMatrix4(rc),s)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Eh extends Ee{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wh extends Oe{constructor(t=null,e=1,n=1,i,r,s,a,l,h=ke,u=ke,c,d){super(null,s,a,l,h,u,i,r,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oc=new ie,zg=new ie;class pa{constructor(t=[],e=[]){this.uuid=Sn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){const a=t[r]?t[r].matrixWorld:zg;oc.multiplyMatrices(a,e[r]),oc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new pa(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new wh(e,t,t,Mn,Rn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Eh),this.bones.push(s),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const s=e[i];t.bones.push(s.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Jo extends tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new ie,ac=new ie,Ss=[],lc=new Wn,Vg=new ie,Rr=new Ge,Cr=new Cn;class Th extends Ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),lc.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(lc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Cr.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$i),ac.multiplyMatrices(n,$i),Rr.matrixWorld=ac,Rr.raycast(t,Ss);for(let s=0,a=Ss.length;s<a;s++){const l=Ss[s];l.instanceId=r,l.object=this,e.push(l)}Ss.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wh(new Float32Array(i*this.count),i,this.count,Zc,Rn));const r=this.morphTexture.source.data.data;let s=0;for(let h=0;h<n.length;h++)s+=n[h];const a=this.geometry.morphTargetsRelative?1:1-s,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ma extends hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ks=new G,Gs=new G,cc=new ie,Pr=new Zs,Es=new Cn,Oo=new G,hc=new G;class va extends Ee{constructor(t=new fn,e=new ma){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ks.fromBufferAttribute(e,i-1),Gs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ks.distanceTo(Gs);t.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=r,t.ray.intersectsSphere(Es)===!1)return;cc.copy(i).invert(),Pr.copy(t.ray).applyMatrix4(cc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,s.start),v=Math.min(u.count,s.start+s.count);for(let g=f,p=v-1;g<p;g+=h){const m=u.getX(g),_=u.getX(g+1),x=ws(this,t,Pr,l,m,_);x&&e.push(x)}if(this.isLineLoop){const g=u.getX(v-1),p=u.getX(f),m=ws(this,t,Pr,l,g,p);m&&e.push(m)}}else{const f=Math.max(0,s.start),v=Math.min(d.count,s.start+s.count);for(let g=f,p=v-1;g<p;g+=h){const m=ws(this,t,Pr,l,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=ws(this,t,Pr,l,v-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ws(o,t,e,n,i,r){const s=o.geometry.attributes.position;if(ks.fromBufferAttribute(s,i),Gs.fromBufferAttribute(s,r),e.distanceSqToSegment(ks,Gs,Oo,hc)>n)return;Oo.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(Oo);if(!(l<t.near||l>t.far))return{distance:l,point:hc.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,object:o}}const uc=new G,dc=new G;class Hg extends va{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)uc.fromBufferAttribute(e,i),dc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uc.distanceTo(dc);t.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kg extends va{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ah extends hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fc=new ie,ta=new Zs,Ts=new Cn,As=new G;class Gg extends Ee{constructor(t=new fn,e=new Ah){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=r,t.ray.intersectsSphere(Ts)===!1)return;fc.copy(i).invert(),ta.copy(t.ray).applyMatrix4(fc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let v=d,g=f;v<g;v++){const p=h.getX(v);As.fromBufferAttribute(c,p),pc(As,p,l,i,t,e,this)}}else{const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let v=d,g=f;v<g;v++)As.fromBufferAttribute(c,v),pc(As,v,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pc(o,t,e,n,i,r,s){const a=ta.distanceSqToPoint(o);if(a<e){const l=new G;ta.closestPointToPoint(o,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:s})}}class ga extends fn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(s+a,Math.PI);let h=0;const u=[],c=new G,d=new G,f=[],v=[],g=[],p=[];for(let m=0;m<=n;m++){const _=[],x=m/n;let y=0;m===0&&s===0?y=.5/e:m===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const C=T/e;c.x=-t*Math.cos(i+C*r)*Math.sin(s+x*a),c.y=t*Math.cos(s+x*a),c.z=t*Math.sin(i+C*r)*Math.sin(s+x*a),v.push(c.x,c.y,c.z),d.copy(c).normalize(),g.push(d.x,d.y,d.z),p.push(C+y,1-x),_.push(h++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const x=u[m][_+1],y=u[m][_],T=u[m+1][_],C=u[m+1][_+1];(m!==0||s>0)&&f.push(x,y,C),(m!==n-1||l<Math.PI)&&f.push(y,T,C)}this.setIndex(f),this.setAttribute("position",new un(v,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xr extends hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pn extends Xr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class _a extends hn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function bs(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function Wg(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Xg(o){function t(i,r){return o[i]-o[r]}const e=o.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function mc(o,t,e){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[s++]=o[a+l]}return i}function bh(o,t,e,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(t.push(r.time),e.push.apply(e,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(t.push(r.time),s.toArray(e,e.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(t.push(r.time),e.push(s)),r=o[i++];while(r!==void 0)}class Kr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let s;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break e}break n}for(;n<s;){const a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qg extends Kr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case al:r=t,a=2*e-n;break;case ll:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case al:s=t,l=2*n-e;break;case ll:s=1,l=n+i[1]-i[0];break;default:s=t-1,l=e}const h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-e)/(i-e),g=v*v,p=g*v,m=-d*p+2*d*g-d*v,_=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*v+1,x=(-1-f)*p+(1.5+f)*g+.5*v,y=f*p-f*g;for(let T=0;T!==a;++T)r[T]=m*s[u+T]+_*s[h+T]+x*s[l+T]+y*s[c+T];return r}}class Yg extends Kr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(n-e)/(i-e),c=1-u;for(let d=0;d!==a;++d)r[d]=s[h+d]*c+s[l+d]*u;return r}}class jg extends Kr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ln{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bs(e,this.TimeBufferType),this.values=bs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:bs(t.times,Array),values:bs(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new jg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case kr:e=this.InterpolantFactoryMethodDiscrete;break;case hr:e=this.InterpolantFactoryMethodLinear;break;case lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),t=!1;break}s=l}if(i!==void 0&&Wg(i))for(let a=0,l=i.length;a!==l;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lo,r=t.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(i)l=!0;else{const c=a*n,d=c-n,f=c+n;for(let v=0;v!==n;++v){const g=e[c+v];if(g!==e[d+v]||g!==e[f+v]){l=!0;break}}}if(l){if(a!==s){t[s]=t[a];const c=a*n,d=s*n;for(let f=0;f!==n;++f)e[d+f]=e[c+f]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,l=s*n,h=0;h!==n;++h)e[l+h]=e[a+h];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=hr;class _r extends Ln{}_r.prototype.ValueTypeName="bool";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=kr;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class Rh extends Ln{}Rh.prototype.ValueTypeName="color";class fr extends Ln{}fr.prototype.ValueTypeName="number";class Kg extends Kr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let h=t*a;for(let u=h+a;h!==u;h+=4)En.slerpFlat(r,0,s,h-a,s,h,l);return r}}class bi extends Ln{InterpolantFactoryMethodLinear(t){return new Kg(this.times,this.values,this.getValueSize(),t)}}bi.prototype.ValueTypeName="quaternion";bi.prototype.DefaultInterpolation=hr;bi.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends Ln{}yr.prototype.ValueTypeName="string";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=kr;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends Ln{}pr.prototype.ValueTypeName="vector";class Zg{constructor(t="",e=-1,n=[],i=Qu){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,a=n.length;s!==a;++s)e.push(Qg(n[s]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(Ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,s=[];for(let a=0;a<r;a++){let l=[],h=[];l.push((a+r-1)%r,a,(a+1)%r),h.push(0,1,0);const u=Xg(l);l=mc(l,1,u),h=mc(h,1,u),!i&&l[0]===0&&(l.push(r),h.push(h[0])),s.push(new fr(".morphTargetInfluences["+e[a].name+"]",l,h).scale(1/n))}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const h=t[a],u=h.name.match(r);if(u&&u.length>1){const c=u[1];let d=i[c];d||(i[c]=d=[]),d.push(h)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return s}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,v,g){if(f.length!==0){const p=[],m=[];bh(f,p,m,v),p.length!==0&&g.push(new c(d,p,m))}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode;let l=t.length||-1;const h=t.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)f[d[v].morphTargets[g]]=-1;for(const g in f){const p=[],m=[];for(let _=0;_!==d[v].morphTargets.length;++_){const x=d[v];p.push(x.time),m.push(x.morphTarget===g?1:0)}i.push(new fr(".morphTargetInfluence["+g+"]",p,m))}l=f.length*s}else{const f=".bones["+e[c].name+"]";n(pr,f+".position",d,"pos",i),n(bi,f+".quaternion",d,"rot",i),n(pr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $g(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fr;case"vector":case"vector2":case"vector3":case"vector4":return pr;case"color":return Rh;case"quaternion":return bi;case"bool":case"boolean":return _r;case"string":return yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Qg(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=$g(o.type);if(o.times===void 0){const e=[],n=[];bh(o.keys,e,n,"value"),o.times=e,o.values=n}return t.parse!==void 0?t.parse(o):new t(o.name,o.times,o.values,o.interpolation)}const ri={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Jg{constructor(t,e,n){const i=this;let r=!1,s=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],v=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}}const t0=new Jg;class xr{constructor(t){this.manager=t!==void 0?t:t0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xr.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class e0 extends Error{constructor(t,e){super(t),this.response=e}}class Ch extends xr{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ri.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(On[t]!==void 0){On[t].push({onLoad:e,onProgress:n,onError:i});return}On[t]=[],On[t].push({onLoad:e,onProgress:n,onError:i});const s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(s).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=On[t],c=h.body.getReader(),d=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=d?parseInt(d):0,v=f!==0;let g=0;const p=new ReadableStream({start(m){_();function _(){c.read().then(({done:x,value:y})=>{if(x)m.close();else{g+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let C=0,L=u.length;C<L;C++){const D=u[C];D.onProgress&&D.onProgress(T)}m.enqueue(y),_()}})}}});return new Response(p)}else throw new e0(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(v=>f.decode(v))}}}).then(h=>{ri.add(t,h);const u=On[t];delete On[t];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=On[t];if(u===void 0)throw this.manager.itemError(t),h;delete On[t];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class n0 extends xr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ri.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const a=Gr("img");function l(){u(),ri.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(c){u(),i&&i(c),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class ya extends xr{constructor(t){super(t)}load(t,e,n,i){const r=new Oe,s=new n0(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Js extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const zo=new ie,vc=new G,gc=new G;class xa{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gc),e.updateMatrixWorld(),zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class i0 extends xa{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ur*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class r0 extends Js{constructor(t,e,n=0,i=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new i0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const _c=new ie,Lr=new G,Vo=new G;class s0 extends xa{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Lr),Vo.copy(n.position),Vo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vo),n.updateMatrixWorld(),i.makeTranslation(-Lr.x,-Lr.y,-Lr.z),_c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c)}}class o0 extends Js{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new s0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class a0 extends xa{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ph extends Js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new a0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class l0 extends Js{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zr{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class c0 extends xr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=ri.get(t);if(s!==void 0){if(r.manager.itemStart(t),s.then){s.then(h=>{e&&e(h),r.manager.itemEnd(t)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return ri.add(t,h),e&&e(h),r.manager.itemEnd(t),h}).catch(function(h){i&&i(h),ri.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ri.add(t,l),r.manager.itemStart(t)}}const Ma="\\[\\]\\.:\\/",h0=new RegExp("["+Ma+"]","g"),Sa="[^"+Ma+"]",u0="[^"+Ma.replace("\\.","")+"]",d0=/((?:WC+[\/:])*)/.source.replace("WC",Sa),f0=/(WCOD+)?/.source.replace("WCOD",u0),p0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sa),m0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sa),v0=new RegExp("^"+d0+f0+p0+m0+"$"),g0=["material","materials","bones","map"];class _0{constructor(t,e,n){const i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class _e{constructor(t,e,n){this.path=e,this.parsedPath=n||_e.parseTrackName(e),this.node=_e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new _e.Composite(t,e,n):new _e(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(h0,"")}static parseTrackName(t){const e=v0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);g0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=_e.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const s=t[i];if(s===void 0){const h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_e.Composite=_0;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);var y0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function Rs(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Lh={exports:{}};(function(o,t){(function(e){o.exports=e()})(function(){return function e(n,i,r){function s(h,u){if(!i[h]){if(!n[h]){var c=typeof Rs=="function"&&Rs;if(!u&&c)return c(h,!0);if(a)return a(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=i[h]={exports:{}};n[h][0].call(d.exports,function(f){var v=n[h][1][f];return s(v||f)},d,d.exports,e,n,i,r)}return i[h].exports}for(var a=typeof Rs=="function"&&Rs,l=0;l<r.length;l++)s(r[l]);return s}({1:[function(e,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,i){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,i){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(h){h=h||{},this.lowerBound=new r,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new r,h.upperBound&&this.upperBound.copy(h.upperBound)}var a=new r;s.prototype.setFromPoints=function(h,u,c,d){var f=this.lowerBound,v=this.upperBound,g=c;f.copy(h[0]),g&&g.vmult(f,f),v.copy(f);for(var p=1;p<h.length;p++){var m=h[p];g&&(g.vmult(m,a),m=a),m.x>v.x&&(v.x=m.x),m.x<f.x&&(f.x=m.x),m.y>v.y&&(v.y=m.y),m.y<f.y&&(f.y=m.y),m.z>v.z&&(v.z=m.z),m.z<f.z&&(f.z=m.z)}return u&&(u.vadd(f,f),u.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},s.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var c=h.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var c=h.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var c=h.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},s.prototype.overlaps=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=c.x&&c.x<=f.x||u.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||u.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||u.z<=f.z&&f.z<=c.z)},s.prototype.contains=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return u.x<=d.x&&c.x>=f.x&&u.y<=d.y&&c.y>=f.y&&u.z<=d.z&&c.z>=f.z},s.prototype.getCorners=function(h,u,c,d,f,v,g,p){var m=this.lowerBound,_=this.upperBound;h.copy(m),u.set(_.x,m.y,m.z),c.set(_.x,_.y,m.z),d.set(m.x,_.y,_.z),f.set(_.x,m.y,m.z),v.set(m.x,_.y,m.z),g.set(m.x,m.y,_.z),p.copy(_)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=c[5],_=c[6],x=c[7];this.getCorners(d,f,v,g,p,m,_,x);for(var y=0;y!==8;y++){var T=c[y];h.pointToLocal(T,T)}return u.setFromPoints(c)},s.prototype.toWorldFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=c[5],_=c[6],x=c[7];this.getCorners(d,f,v,g,p,m,_,x);for(var y=0;y!==8;y++){var T=c[y];h.pointToWorld(T,T)}return u.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,a){if(s=s.index,a=a.index,a>s){var l=a;a=s,s=l}return this.matrix[(s*(s+1)>>1)+a-1]},r.prototype.set=function(s,a,l){if(s=s.index,a=a.index,a>s){var h=a;a=s,s=h}this.matrix[(s*(s+1)>>1)+a-1]=l?1:0},r.prototype.reset=function(){for(var s=0,a=this.matrix.length;s!==a;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,i){var r=e("../objects/Body"),s=e("../math/Vec3"),a=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,p,m){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,p){return!(!(g.collisionFilterGroup&p.collisionFilterMask)||!(p.collisionFilterGroup&g.collisionFilterMask)||(g.type&h||g.sleepState===r.SLEEPING)&&(p.type&h||p.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,p,m,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,p,m,_):this.doBoundingSphereBroadphase(g,p,m,_)};var u=new s;new s,new a,new s,l.prototype.doBoundingSphereBroadphase=function(g,p,m,_){var x=u;p.position.vsub(g.position,x);var y=Math.pow(g.boundingRadius+p.boundingRadius,2),T=x.norm2();T<y&&(m.push(g),_.push(p))},l.prototype.doBoundingBoxBroadphase=function(g,p,m,_){g.aabbNeedsUpdate&&g.computeAABB(),p.aabbNeedsUpdate&&p.computeAABB(),g.aabb.overlaps(p.aabb)&&(m.push(g),_.push(p))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,p){for(var m=c,_=d,x=f,y=g.length,T=0;T!==y;T++)_[T]=g[T],x[T]=p[T];g.length=0,p.length=0;for(var T=0;T!==y;T++){var C=_[T].id,L=x[T].id,D=C<L?C+","+L:L+","+C;m[D]=T,m.keys.push(D)}for(var T=0;T!==m.keys.length;T++){var D=m.keys.pop(),E=m[D];g.push(_[E]),p.push(x[E]),delete m[D]}},l.prototype.setWorld=function(g){};var v=new s;l.boundingSphereCheck=function(g,p){var m=v;return g.position.vsub(p.position,m),Math.pow(g.shape.boundingSphereRadius+p.shape.boundingSphereRadius,2)>m.norm2()},l.prototype.aabbQuery=function(g,p,m){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,i){n.exports=l;var r=e("./Broadphase"),s=e("../math/Vec3"),a=e("../shapes/Shape");function l(u,c,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=u||new s(100,100,100),this.aabbMax=c||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var p=0;p<g;p++)this.bins[p]=[],this.binLengths[p]=0}l.prototype=new r,l.prototype.constructor=l;var h=new s;new s,l.prototype.collisionPairs=function(u,c,d){var f=u.numObjects(),v=u.bodies,$=this.aabbMax,k=this.aabbMin,g=this.nx,p=this.ny,m=this.nz,_=p*m,x=m,y=1,T=$.x,C=$.y,L=$.z,D=k.x,E=k.y,M=k.z,R=g/(T-D),B=p/(C-E),P=m/(L-M),q=(T-D)/g,W=(C-E)/p,ot=(L-M)/m,V=Math.sqrt(q*q+W*W+ot*ot)*.5,I=a.types,Q=I.SPHERE,Y=I.PLANE;I.BOX,I.COMPOUND,I.CONVEXPOLYHEDRON;for(var O=this.bins,J=this.binLengths,z=this.bins.length,A=0;A!==z;A++)J[A]=0;var b=Math.ceil,k=Math.min,$=Math.max;function it(Gt,ne,qt,Ut,jt,ee,ue){var Zt=(Gt-D)*R|0,Z=(ne-E)*B|0,mt=(qt-M)*P|0,ht=b((Ut-D)*R),Ct=b((jt-E)*B),Pt=b((ee-M)*P);Zt<0?Zt=0:Zt>=g&&(Zt=g-1),Z<0?Z=0:Z>=p&&(Z=p-1),mt<0?mt=0:mt>=m&&(mt=m-1),ht<0?ht=0:ht>=g&&(ht=g-1),Ct<0?Ct=0:Ct>=p&&(Ct=p-1),Pt<0?Pt=0:Pt>=m&&(Pt=m-1),Zt*=_,Z*=x,mt*=y,ht*=_,Ct*=x,Pt*=y;for(var re=Zt;re<=ht;re+=_)for(var ce=Z;ce<=Ct;ce+=x)for(var de=mt;de<=Pt;de+=y){var Ae=re+ce+de;O[Ae][J[Ae]++]=ue}}for(var A=0;A!==f;A++){var K=v[A],N=K.shape;switch(N.type){case Q:var ut=K.position.x,vt=K.position.y,Mt=K.position.z,dt=N.radius;it(ut-dt,vt-dt,Mt-dt,ut+dt,vt+dt,Mt+dt,K);break;case Y:N.worldNormalNeedsUpdate&&N.computeWorldNormal(K.quaternion);var rt=N.worldNormal,lt=D+q*.5-K.position.x,Vt=E+W*.5-K.position.y,Ot=M+ot*.5-K.position.z,U=h;U.set(lt,Vt,Ot);for(var S=0,et=0;S!==g;S++,et+=_,U.y=Vt,U.x+=q)for(var at=0,ct=0;at!==p;at++,ct+=x,U.z=Ot,U.y+=W)for(var pt=0,Rt=0;pt!==m;pt++,Rt+=y,U.z+=ot)if(U.dot(rt)<V){var St=et+ct+Rt;O[St][J[St]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),it(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var A=0;A!==z;A++){var gt=J[A];if(gt>1)for(var Wt=O[A],S=0;S!==gt;S++)for(var K=Wt[S],at=0;at!==S;at++){var wt=Wt[at];this.needBroadphaseCollision(K,wt)&&this.intersectionTest(K,wt,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,i){n.exports=a;var r=e("./Broadphase"),s=e("./AABB");function a(){r.apply(this)}a.prototype=new r,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,h,u){var c=l.bodies,d=c.length,f,v,g,p;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=c[f],p=c[v],this.needBroadphaseCollision(g,p)&&this.intersectionTest(g,p,h,u)},new s,a.prototype.aabbQuery=function(l,h,u){u=u||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,a){if(s=s.id,a=a.id,a>s){var l=a;a=s,s=l}return s+"-"+a in this.matrix},r.prototype.set=function(s,a,l){if(s=s.id,a=a.id,a>s){var h=a;a=s,s=h}l?this.matrix[s+"-"+a]=!0:delete this.matrix[s+"-"+a]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,i){n.exports=c;var r=e("../math/Vec3"),s=e("../math/Quaternion"),a=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),h=e("../shapes/Shape"),u=e("../collision/AABB");function c(z,A){this.from=z?z.clone():new r,this.to=A?A.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(b){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new u,f=[];c.prototype.intersectWorld=function(z,A){return this.mode=A.mode||c.ANY,this.result=A.result||new l,this.skipBackfaces=!!A.skipBackfaces,this.collisionFilterMask=typeof A.collisionFilterMask<"u"?A.collisionFilterMask:-1,this.collisionFilterGroup=typeof A.collisionFilterGroup<"u"?A.collisionFilterGroup:-1,A.from&&this.from.copy(A.from),A.to&&this.to.copy(A.to),this.callback=A.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,z.broadphase.aabbQuery(z,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;c.pointInTriangle=p;function p(z,A,b,k){k.vsub(A,Y),b.vsub(A,v),z.vsub(A,g);var $=Y.dot(Y),it=Y.dot(v),K=Y.dot(g),N=v.dot(v),ut=v.dot(g),vt,Mt;return(vt=N*K-it*ut)>=0&&(Mt=$*ut-it*K)>=0&&vt+Mt<$*N-it*it}var m=new r,_=new s;c.prototype.intersectBody=function(z,A){A&&(this.result=A,this._updateDirection());var b=this.checkCollisionResponse;if(!(b&&!z.collisionResponse)&&!(!(this.collisionFilterGroup&z.collisionFilterMask)||!(z.collisionFilterGroup&this.collisionFilterMask)))for(var k=m,$=_,it=0,K=z.shapes.length;it<K;it++){var N=z.shapes[it];if(!(b&&!N.collisionResponse)&&(z.quaternion.mult(z.shapeOrientations[it],$),z.quaternion.vmult(z.shapeOffsets[it],k),k.vadd(z.position,k),this.intersectShape(N,$,k,z),this.result._shouldStop))break}},c.prototype.intersectBodies=function(z,A){A&&(this.result=A,this._updateDirection());for(var b=0,k=z.length;!this.result._shouldStop&&b<k;b++)this.intersectBody(z[b])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(z,A,b,k){var $=this.from,it=J($,this._direction,b);if(!(it>z.boundingSphereRadius)){var K=this[z.type];K&&K.call(this,z,A,b,k)}},new r,new r;var x=new r,y=new r,T=new r,C=new r;new r,new l,c.prototype.intersectBox=function(z,A,b,k){return this.intersectConvex(z.convexPolyhedronRepresentation,A,b,k)},c.prototype[h.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(z,A,b,k){var $=this.from,it=this.to,K=this._direction,N=new r(0,0,1);A.vmult(N,N);var ut=new r;$.vsub(b,ut);var vt=ut.dot(N);it.vsub(b,ut);var Mt=ut.dot(N);if(!(vt*Mt>0)&&!($.distanceTo(it)<vt)){var dt=N.dot(K);if(!(Math.abs(dt)<this.precision)){var rt=new r,lt=new r,Vt=new r;$.vsub(b,rt);var Ot=-N.dot(rt)/dt;K.scale(Ot,lt),$.vadd(lt,Vt),this.reportIntersection(N,Vt,z,k,-1)}}},c.prototype[h.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(z){var A=this.to,b=this.from;z.lowerBound.x=Math.min(A.x,b.x),z.lowerBound.y=Math.min(A.y,b.y),z.lowerBound.z=Math.min(A.z,b.z),z.upperBound.x=Math.max(A.x,b.x),z.upperBound.y=Math.max(A.y,b.y),z.upperBound.z=Math.max(A.z,b.z)};var L={faceList:[0]};c.prototype.intersectHeightfield=function(z,A,b,k){z.data,z.elementSize;var $=new r,it=new c(this.from,this.to);a.pointToLocalFrame(b,A,it.from,it.from),a.pointToLocalFrame(b,A,it.to,it.to);var K=[],N=null,ut=null,vt=null,Mt=null,dt=z.getIndexOfPosition(it.from.x,it.from.y,K,!1);if(dt&&(N=K[0],ut=K[1],vt=K[0],Mt=K[1]),dt=z.getIndexOfPosition(it.to.x,it.to.y,K,!1),dt&&((N===null||K[0]<N)&&(N=K[0]),(vt===null||K[0]>vt)&&(vt=K[0]),(ut===null||K[1]<ut)&&(ut=K[1]),(Mt===null||K[1]>Mt)&&(Mt=K[1])),N!==null){var rt=[];z.getRectMinMax(N,ut,vt,Mt,rt),rt[0],rt[1];for(var lt=N;lt<=vt;lt++)for(var Vt=ut;Vt<=Mt;Vt++){if(this.result._shouldStop||(z.getConvexTrianglePillar(lt,Vt,!1),a.pointToWorldFrame(b,A,z.pillarOffset,$),this.intersectConvex(z.pillarConvex,A,$,k,L),this.result._shouldStop))return;z.getConvexTrianglePillar(lt,Vt,!0),a.pointToWorldFrame(b,A,z.pillarOffset,$),this.intersectConvex(z.pillarConvex,A,$,k,L)}}},c.prototype[h.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var D=new r,E=new r;c.prototype.intersectSphere=function(z,A,b,k){var $=this.from,it=this.to,K=z.radius,N=Math.pow(it.x-$.x,2)+Math.pow(it.y-$.y,2)+Math.pow(it.z-$.z,2),ut=2*((it.x-$.x)*($.x-b.x)+(it.y-$.y)*($.y-b.y)+(it.z-$.z)*($.z-b.z)),vt=Math.pow($.x-b.x,2)+Math.pow($.y-b.y,2)+Math.pow($.z-b.z,2)-Math.pow(K,2),Mt=Math.pow(ut,2)-4*N*vt,dt=D,rt=E;if(!(Mt<0))if(Mt===0)$.lerp(it,Mt,dt),dt.vsub(b,rt),rt.normalize(),this.reportIntersection(rt,dt,z,k,-1);else{var lt=(-ut-Math.sqrt(Mt))/(2*N),Vt=(-ut+Math.sqrt(Mt))/(2*N);if(lt>=0&&lt<=1&&($.lerp(it,lt,dt),dt.vsub(b,rt),rt.normalize(),this.reportIntersection(rt,dt,z,k,-1)),this.result._shouldStop)return;Vt>=0&&Vt<=1&&($.lerp(it,Vt,dt),dt.vsub(b,rt),rt.normalize(),this.reportIntersection(rt,dt,z,k,-1))}},c.prototype[h.types.SPHERE]=c.prototype.intersectSphere;var M=new r;new r,new r;var R=new r;c.prototype.intersectConvex=function(A,b,k,$,it){for(var K=M,N=R,ut=it&&it.faceList||null,vt=A.faces,Mt=A.vertices,dt=A.faceNormals,rt=this._direction,lt=this.from,Vt=this.to,Ot=lt.distanceTo(Vt),U=ut?ut.length:vt.length,S=this.result,et=0;!S._shouldStop&&et<U;et++){var at=ut?ut[et]:et,ct=vt[at],pt=dt[at],Rt=b,St=k;N.copy(Mt[ct[0]]),Rt.vmult(N,N),N.vadd(St,N),N.vsub(lt,N),Rt.vmult(pt,K);var gt=rt.dot(K);if(!(Math.abs(gt)<this.precision)){var Wt=K.dot(N)/gt;if(!(Wt<0)){rt.mult(Wt,x),x.vadd(lt,x),y.copy(Mt[ct[0]]),Rt.vmult(y,y),St.vadd(y,y);for(var wt=1;!S._shouldStop&&wt<ct.length-1;wt++){T.copy(Mt[ct[wt]]),C.copy(Mt[ct[wt+1]]),Rt.vmult(T,T),Rt.vmult(C,C),St.vadd(T,T),St.vadd(C,C);var Gt=x.distanceTo(lt);!(p(x,y,T,C)||p(x,T,y,C))||Gt>Ot||this.reportIntersection(K,x,A,$,at)}}}}},c.prototype[h.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var B=new r,P=new r,q=new r,W=new r,ot=new r,V=new r;new u;var I=[],Q=new a;c.prototype.intersectTrimesh=function(A,b,k,$,it){var K=B,N=I,ut=Q,vt=R,Mt=P,dt=q,rt=W,lt=V,Vt=ot;it&&it.faceList;var Ot=A.indices;A.vertices,A.faceNormals;var U=this.from,S=this.to,et=this._direction;ut.position.copy(k),ut.quaternion.copy(b),a.vectorToLocalFrame(k,b,et,Mt),a.pointToLocalFrame(k,b,U,dt),a.pointToLocalFrame(k,b,S,rt);var at=dt.distanceSquared(rt);A.tree.rayQuery(this,ut,N);for(var ct=0,pt=N.length;!this.result._shouldStop&&ct!==pt;ct++){var Rt=N[ct];A.getNormal(Rt,K),A.getVertex(Ot[Rt*3],y),y.vsub(dt,vt);var St=Mt.dot(K),gt=K.dot(vt)/St;if(!(gt<0)){Mt.scale(gt,x),x.vadd(dt,x),A.getVertex(Ot[Rt*3+1],T),A.getVertex(Ot[Rt*3+2],C);var Wt=x.distanceSquared(dt);!(p(x,T,y,C)||p(x,y,T,C))||Wt>at||(a.vectorToWorldFrame(b,K,Vt),a.pointToWorldFrame(k,b,x,lt),this.reportIntersection(Vt,lt,A,$,Rt))}}N.length=0},c.prototype[h.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(z,A,b,k,$){var it=this.from,K=this.to,N=it.distanceTo(A),ut=this.result;if(!(this.skipBackfaces&&z.dot(this._direction)>0))switch(ut.hitFaceIndex=typeof $<"u"?$:-1,this.mode){case c.ALL:this.hasHit=!0,ut.set(it,K,z,A,b,k,N),ut.hasHit=!0,this.callback(ut);break;case c.CLOSEST:(N<ut.distance||!ut.hasHit)&&(this.hasHit=!0,ut.hasHit=!0,ut.set(it,K,z,A,b,k,N));break;case c.ANY:this.hasHit=!0,ut.hasHit=!0,ut.set(it,K,z,A,b,k,N),ut._shouldStop=!0;break}};var Y=new r,O=new r;function J(z,A,b){b.vsub(z,Y);var k=Y.dot(A);A.mult(k,O),O.vadd(z,O);var $=b.distanceTo(O);return $}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,i){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(a,l,h,u,c,d,f){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,i){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(a){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var u=l.indexOf(h.body);u!==-1&&l.splice(u,1)},a&&this.setWorld(a)}s.prototype=new r,s.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},s.insertionSortX=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.x<=u.aabb.lowerBound.x);c--)a[c+1]=a[c];a[c+1]=u}return a},s.insertionSortY=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.y<=u.aabb.lowerBound.y);c--)a[c+1]=a[c];a[c+1]=u}return a},s.insertionSortZ=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.z<=u.aabb.lowerBound.z);c--)a[c+1]=a[c];a[c+1]=u}return a},s.prototype.collisionPairs=function(a,l,h){var u=this.axisList,c=u.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=u[f];for(v=f+1;v<c;v++){var p=u[v];if(this.needBroadphaseCollision(g,p)){if(!s.checkBounds(g,p,d))break;this.intersectionTest(g,p,l,h)}}}},s.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,h=a.length,u=0;u!==h;u++){var c=a[u];c.aabbNeedsUpdate&&c.computeAABB()}l===0?s.insertionSortX(a):l===1?s.insertionSortY(a):l===2&&s.insertionSortZ(a)},s.checkBounds=function(a,l,h){var u,c;h===0?(u=a.position.x,c=l.position.x):h===1?(u=a.position.y,c=l.position.y):h===2&&(u=a.position.z,c=l.position.z);var d=a.boundingRadius,f=l.boundingRadius,v=u+d,g=c-f;return g<v},s.prototype.autoDetectAxis=function(){for(var a=0,l=0,h=0,u=0,c=0,d=0,f=this.axisList,v=f.length,g=1/v,p=0;p!==v;p++){var m=f[p],_=m.position.x;a+=_,l+=_*_;var x=m.position.y;h+=x,u+=x*x;var y=m.position.z;c+=y,d+=y*y}var T=l-a*a*g,C=u-h*h*g,L=d-c*c*g;T>C?T>L?this.axisIndex=0:this.axisIndex=2:C>L?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(a,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,c="x";u===1&&(c="y"),u===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&h.push(v)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,i){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),a=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function h(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,u,v,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var p=this.coneEquation=new s(u,c,d),m=this.twistEquation=new a(u,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,p.maxForce=0,p.minForce=-f,m.maxForce=0,m.minForce=-f,this.equations.push(p,m)}h.prototype=new r,h.constructor=h,new l,new l,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,i){n.exports=s;var r=e("../utils/Utils");function s(a,l,h){h=r.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=s.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},s.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,i){n.exports=a;var r=e("./Constraint"),s=e("../equations/ContactEquation");function a(l,h,u,c){r.call(this,l,h),typeof u>"u"&&(u=l.position.distanceTo(h.position)),typeof c>"u"&&(c=1e6),this.distance=u;var d=this.distanceEquation=new s(l,h);this.equations.push(d),d.minForce=-c,d.maxForce=c}a.prototype=new r,a.prototype.update=function(){var l=this.bodyA,h=this.bodyB,u=this.distanceEquation,c=this.distance*.5,d=u.ni;h.position.vsub(l.position,d),d.normalize(),d.mult(c,u.ri),d.mult(-c,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,i){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),a=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function h(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,p=v.pivotA?v.pivotA.clone():new l,m=v.pivotB?v.pivotB.clone():new l;r.call(this,d,p,f,m,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);x.normalize();var y=this.rotationalEquation1=new s(d,f,v),T=this.rotationalEquation2=new s(d,f,v),C=this.motorEquation=new a(d,f,g);C.enabled=!1,this.equations.push(y,T,C)}h.prototype=new r,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,c=new l;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,p=this.rotationalEquation2,m=u,_=c,x=this.axisA,y=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(x,m),f.quaternion.vmult(y,_),m.tangents(g.axisA,p.axisA),g.axisB.copy(_),p.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,i){n.exports=l,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var a=e("../math/Vec3");function l(h,u,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new a,v=new a,g=new a;h.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),h.pointToLocalFrame(g,f),r.call(this,h,f,u,v,d);var p=this.rotationalEquation1=new s(h,u,c),m=this.rotationalEquation2=new s(h,u,c),_=this.rotationalEquation3=new s(h,u,c);this.equations.push(p,m,_)}l.prototype=new r,l.constructor=l,new a,new a,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),h.vectorToWorldFrame(a.UNIT_X,c.axisA),u.vectorToWorldFrame(a.UNIT_Y,c.axisB),h.vectorToWorldFrame(a.UNIT_Y,d.axisA),u.vectorToWorldFrame(a.UNIT_Z,d.axisB),h.vectorToWorldFrame(a.UNIT_Z,f.axisA),u.vectorToWorldFrame(a.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,i){n.exports=l;var r=e("./Constraint"),s=e("../equations/ContactEquation"),a=e("../math/Vec3");function l(h,u,c,d,f){r.call(this,h,c),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new a,this.pivotB=d?d.clone():new a;var v=this.equationX=new s(h,c),g=this.equationY=new s(h,c),p=this.equationZ=new s(h,c);this.equations.push(v,g,p),v.minForce=g.minForce=p.minForce=-f,v.maxForce=g.maxForce=p.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),p.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,c.ri),u.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function a(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}a.prototype=new s,a.prototype.constructor=a;var l=new r,h=new r;a.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,p=h,m=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,p),m.rotational.copy(p),_.rotational.copy(g);var x=Math.cos(this.angle)-f.dot(v),y=this.computeGW(),T=this.computeGiMf(),C=-x*c-y*d-u*T;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,i){n.exports=a;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function a(p,m,_){_=typeof _<"u"?_:1e6,r.call(this,p,m,0,_),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}a.prototype=new r,a.prototype.constructor=a;var l=new s,h=new s,u=new s;a.prototype.computeB=function(p){var m=this.a,_=this.b,x=this.bi,y=this.bj,T=this.ri,C=this.rj,L=l,D=h,E=x.velocity,M=x.angularVelocity;x.force,x.torque;var R=y.velocity,B=y.angularVelocity;y.force,y.torque;var P=u,q=this.jacobianElementA,W=this.jacobianElementB,ot=this.ni;T.cross(ot,L),C.cross(ot,D),ot.negate(q.spatial),L.negate(q.rotational),W.spatial.copy(ot),W.rotational.copy(D),P.copy(y.position),P.vadd(C,P),P.vsub(x.position,P),P.vsub(T,P);var V=ot.dot(P),I=this.restitution+1,Q=I*R.dot(ot)-I*E.dot(ot)+B.dot(D)-M.dot(L),Y=this.computeGiMf(),O=-V*m-Q*_-p*Y;return O};var c=new s,d=new s,f=new s,v=new s,g=new s;a.prototype.getImpactVelocityAlongNormal=function(){var p=c,m=d,_=f,x=v,y=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(_,p),this.bj.getVelocityAtWorldPoint(x,m),p.vsub(m,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,i){n.exports=a;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function a(g,p,m,_){this.id=a.id++,this.minForce=typeof m>"u"?-1e6:m,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=p,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(g,p,m){var _=p,x=g,y=m;this.a=4/(y*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(y*y*x*(1+4*_))},a.prototype.computeB=function(g,p,m){var _=this.computeGW(),x=this.computeGq(),y=this.computeGiMf();return-x*g-_*p-y*m},a.prototype.computeGq=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,x=m.position,y=_.position;return g.spatial.dot(x)+p.spatial.dot(y)};var l=new s;a.prototype.computeGW=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,x=m.velocity,y=_.velocity,T=m.angularVelocity||l,C=_.angularVelocity||l;return g.multiplyVectors(x,T)+p.multiplyVectors(y,C)},a.prototype.computeGWlambda=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,x=m.vlambda,y=_.vlambda,T=m.wlambda||l,C=_.wlambda||l;return g.multiplyVectors(x,T)+p.multiplyVectors(y,C)};var h=new s,u=new s,c=new s,d=new s;a.prototype.computeGiMf=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,x=m.force,y=m.torque,T=_.force,C=_.torque,L=m.invMassSolve,D=_.invMassSolve;return m.invInertiaWorldSolve?m.invInertiaWorldSolve.vmult(y,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(C,d):d.set(0,0,0),x.mult(L,h),T.mult(D,u),g.multiplyVectors(h,c)+p.multiplyVectors(u,d)};var f=new s;a.prototype.computeGiMGt=function(){var g=this.jacobianElementA,p=this.jacobianElementB,m=this.bi,_=this.bj,x=m.invMassSolve,y=_.invMassSolve,T=m.invInertiaWorldSolve,C=_.invInertiaWorldSolve,L=x+y;return T&&(T.vmult(g.rotational,f),L+=f.dot(g.rotational)),C&&(C.vmult(p.rotational,f),L+=f.dot(p.rotational)),L};var v=new s;new s,new s,new s,new s,new s,a.prototype.addToWlambda=function(g){var p=this.jacobianElementA,m=this.jacobianElementB,_=this.bi,x=this.bj,y=v;p.spatial.mult(_.invMassSolve*g,y),_.vlambda.vadd(y,_.vlambda),m.spatial.mult(x.invMassSolve*g,y),x.vlambda.vadd(y,x.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(p.rotational,y),y.mult(g,y),_.wlambda.vadd(y,_.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,y),y.mult(g,y),x.wlambda.vadd(y,x.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,i){n.exports=a;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function a(u,c,d){r.call(this,u,c,-d,d),this.ri=new s,this.rj=new s,this.t=new s}a.prototype=new r,a.prototype.constructor=a;var l=new s,h=new s;a.prototype.computeB=function(u){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=h,p=this.t;d.cross(p,v),f.cross(p,g);var m=this.jacobianElementA,_=this.jacobianElementB;p.negate(m.spatial),v.negate(m.rotational),_.spatial.copy(p),_.rotational.copy(g);var x=this.computeGW(),y=this.computeGiMf(),T=-x*c-u*y;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function a(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;s.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new s,a.prototype.constructor=a;var l=new r,h=new r;a.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,p=h,m=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,p),m.rotational.copy(p),_.rotational.copy(g);var x=Math.cos(this.maxAngle)-f.dot(v),y=this.computeGW(),T=this.computeGiMf(),C=-x*c-y*d-u*T;return C}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function a(l,h,u){u=typeof u<"u"?u:1e6,s.call(this,l,h,-u,u),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}a.prototype=new s,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),c.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),p=-v*h-l*g;return p}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,i){var r=e("../utils/Utils");n.exports=s;function s(a,l,h){h=r.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[a,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,i){n.exports=r;function r(s){var a="";s=s||{},typeof s=="string"?(a=s,s={}):typeof s=="object"&&(a=""),this.name=a,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},s.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},s.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},s.prototype.getTrace=function(l){var l=l||new r,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},s.prototype.vmult=function(a,l){l=l||new r;var h=this.elements,u=a.x,c=a.y,d=a.z;return l.x=h[0]*u+h[1]*c+h[2]*d,l.y=h[3]*u+h[4]*c+h[5]*d,l.z=h[6]*u+h[7]*c+h[8]*d,l},s.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},s.prototype.mmult=function(a,l){for(var h=l||new s,u=0;u<3;u++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=a.elements[u+f*3]*this.elements[f+c*3];h.elements[u+c*3]=d}return h},s.prototype.scale=function(a,l){l=l||new s;for(var h=this.elements,u=l.elements,c=0;c!==3;c++)u[3*c+0]=a.x*h[3*c+0],u[3*c+1]=a.y*h[3*c+1],u[3*c+2]=a.z*h[3*c+2];return l},s.prototype.solve=function(a,l){l=l||new r;for(var h=3,u=4,c=[],d=0;d<h*u;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+u*f]=this.elements[d+3*f];c[3+4*0]=a.x,c[3+4*1]=a.y,c[3+4*2]=a.z;var v=3,g=v,p,m=4,_;do{if(d=g-v,c[d+u*d]===0){for(f=d+1;f<g;f++)if(c[d+u*f]!==0){p=m;do _=m-p,c[_+u*d]+=c[_+u*f];while(--p);break}}if(c[d+u*d]!==0)for(f=d+1;f<g;f++){var x=c[d+u*f]/c[d+u*d];p=m;do _=m-p,c[_+u*f]=_<=d?0:c[_+u*f]-c[_+u*d]*x;while(--p)}}while(--v);if(l.z=c[2*u+3]/c[2*u+2],l.y=(c[1*u+3]-c[1*u+2]*l.z)/c[1*u+1],l.x=(c[0*u+3]-c[0*u+2]*l.z-c[0*u+1]*l.y)/c[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},s.prototype.e=function(a,l,h){if(h===void 0)return this.elements[l+3*a];this.elements[l+3*a]=h},s.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},s.prototype.toString=function(){for(var a="",l=",",h=0;h<9;h++)a+=this.elements[h]+l;return a},s.prototype.reverse=function(a){a=a||new s;for(var l=3,h=6,u=[],c=0;c<l*h;c++)u.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)u[c+h*d]=this.elements[c+3*d];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var f=3,v=f,g,p=h,m;do{if(c=v-f,u[c+h*c]===0){for(d=c+1;d<v;d++)if(u[c+h*d]!==0){g=p;do m=p-g,u[m+h*c]+=u[m+h*d];while(--g);break}}if(u[c+h*c]!==0)for(d=c+1;d<v;d++){var _=u[c+h*d]/u[c+h*c];g=p;do m=p-g,u[m+h*d]=m<=c?0:u[m+h*d]-u[m+h*c]*_;while(--g)}}while(--f);c=2;do{d=c-1;do{var _=u[c+h*d]/u[c+h*c];g=h;do m=h-g,u[m+h*d]=u[m+h*d]-u[m+h*c]*_;while(--g)}while(d--)}while(--c);c=2;do{var _=1/u[c+h*c];g=h;do m=h-g,u[m+h*c]=u[m+h*c]*_;while(--g)}while(c--);c=2;do{d=2;do{if(m=u[l+d+h*c],isNaN(m)||m===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(c,d,m)}while(d--)}while(c--);return a},s.prototype.setRotationFromQuaternion=function(a){var l=a.x,h=a.y,u=a.z,c=a.w,d=l+l,f=h+h,v=u+u,g=l*d,p=l*f,m=l*v,_=h*f,x=h*v,y=u*v,T=c*d,C=c*f,L=c*v,D=this.elements;return D[3*0+0]=1-(_+y),D[3*0+1]=p-L,D[3*0+2]=m+C,D[3*1+0]=p+L,D[3*1+1]=1-(g+y),D[3*1+2]=x-T,D[3*2+0]=m-C,D[3*2+1]=x+T,D[3*2+2]=1-(g+_),this},s.prototype.transpose=function(a){a=a||new s;for(var l=a.elements,h=this.elements,u=0;u!==3;u++)for(var c=0;c!==3;c++)l[3*u+c]=h[3*c+u];return a}},{"./Vec3":30}],28:[function(e,n,i){n.exports=s;var r=e("./Vec3");function s(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},s.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var a=new r,l=new r;s.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=a,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var p=d.cross(f);this.x=p.x,this.y=p.y,this.z=p.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new r,u=new r,c=new r;s.prototype.mult=function(d,f){f=f||new s;var v=this.w,g=h,p=u,m=c;return g.set(this.x,this.y,this.z),p.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(p),g.cross(p,m),f.x=v*p.x+d.w*g.x+m.x,f.y=v*p.y+d.w*g.y+m.y,f.z=v*p.z+d.w*g.z+m.z,f},s.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,p=this.w;d=d||new s,this.conjugate(d);var m=1/(f*f+v*v+g*g+p*p);return d.x*=m,d.y*=m,d.z*=m,d.w*=m,d},s.prototype.conjugate=function(d){return d=d||new s,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},s.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},s.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,p=d.z,m=this.x,_=this.y,x=this.z,y=this.w,T=y*v+_*p-x*g,C=y*g+x*v-m*p,L=y*p+m*g-_*v,D=-m*v-_*g-x*p;return f.x=T*y+D*-m+C*-x-L*-_,f.y=C*y+D*-_+L*-m-T*-x,f.z=L*y+D*-x+T*-_-C*-m,f},s.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},s.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,p,m=this.x,_=this.y,x=this.z,y=this.w;switch(f){case"YZX":var T=m*_+x*y;if(T>.499&&(v=2*Math.atan2(m,y),g=Math.PI/2,p=0),T<-.499&&(v=-2*Math.atan2(m,y),g=-Math.PI/2,p=0),isNaN(v)){var C=m*m,L=_*_,D=x*x;v=Math.atan2(2*_*y-2*m*x,1-2*L-2*D),g=Math.asin(2*T),p=Math.atan2(2*m*y-2*_*x,1-2*C-2*D)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=p},s.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var p=Math.cos(d/2),m=Math.cos(f/2),_=Math.cos(v/2),x=Math.sin(d/2),y=Math.sin(f/2),T=Math.sin(v/2);return g==="XYZ"?(this.x=x*m*_+p*y*T,this.y=p*y*_-x*m*T,this.z=p*m*T+x*y*_,this.w=p*m*_-x*y*T):g==="YXZ"?(this.x=x*m*_+p*y*T,this.y=p*y*_-x*m*T,this.z=p*m*T-x*y*_,this.w=p*m*_+x*y*T):g==="ZXY"?(this.x=x*m*_-p*y*T,this.y=p*y*_+x*m*T,this.z=p*m*T+x*y*_,this.w=p*m*_-x*y*T):g==="ZYX"?(this.x=x*m*_-p*y*T,this.y=p*y*_+x*m*T,this.z=p*m*T-x*y*_,this.w=p*m*_+x*y*T):g==="YZX"?(this.x=x*m*_+p*y*T,this.y=p*y*_+x*m*T,this.z=p*m*T-x*y*_,this.w=p*m*_-x*y*T):g==="XZY"&&(this.x=x*m*_-p*y*T,this.y=p*y*_-x*m*T,this.z=p*m*T+x*y*_,this.w=p*m*_+x*y*T),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,i){var r=e("./Vec3"),s=e("./Quaternion");n.exports=a;function a(h){h=h||{},this.position=new r,h.position&&this.position.copy(h.position),this.quaternion=new s,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new s;a.pointToLocalFrame=function(h,u,c,f){var f=f||new r;return c.vsub(h,f),u.conjugate(l),l.vmult(f,f),f},a.prototype.pointToLocal=function(h,u){return a.pointToLocalFrame(this.position,this.quaternion,h,u)},a.pointToWorldFrame=function(h,u,c,f){var f=f||new r;return u.vmult(c,f),f.vadd(h,f),f},a.prototype.pointToWorld=function(h,u){return a.pointToWorldFrame(this.position,this.quaternion,h,u)},a.prototype.vectorToWorldFrame=function(h,c){var c=c||new r;return this.quaternion.vmult(h,c),c},a.vectorToWorldFrame=function(h,u,c){return h.vmult(u,c),c},a.vectorToLocalFrame=function(h,u,c,f){var f=f||new r;return u.w*=-1,u.vmult(c,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,i){n.exports=s;var r=e("./Mat3");function s(u,c,d){this.x=u||0,this.y=c||0,this.z=d||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(u,c){var d=u.x,f=u.y,v=u.z,g=this.x,p=this.y,m=this.z;return c=c||new s,c.x=p*v-m*f,c.y=m*d-g*v,c.z=g*f-p*d,c},s.prototype.set=function(u,c,d){return this.x=u,this.y=c,this.z=d,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(u,c){if(c)c.x=u.x+this.x,c.y=u.y+this.y,c.z=u.z+this.z;else return new s(this.x+u.x,this.y+u.y,this.z+u.z)},s.prototype.vsub=function(u,c){if(c)c.x=this.x-u.x,c.y=this.y-u.y,c.z=this.z-u.z;else return new s(this.x-u.x,this.y-u.y,this.z-u.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var u=this.x,c=this.y,d=this.z,f=Math.sqrt(u*u+c*c+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},s.prototype.unit=function(u){u=u||new s;var c=this.x,d=this.y,f=this.z,v=Math.sqrt(c*c+d*d+f*f);return v>0?(v=1/v,u.x=c*v,u.y=d*v,u.z=f*v):(u.x=1,u.y=0,u.z=0),u},s.prototype.norm=function(){var u=this.x,c=this.y,d=this.z;return Math.sqrt(u*u+c*c+d*d)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,p=u.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(p-f)*(p-f))},s.prototype.distanceSquared=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,p=u.z;return(v-c)*(v-c)+(g-d)*(g-d)+(p-f)*(p-f)},s.prototype.mult=function(u,c){c=c||new s;var d=this.x,f=this.y,v=this.z;return c.x=u*d,c.y=u*f,c.z=u*v,c},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var a=new s,l=new s;s.prototype.tangents=function(u,c){var d=this.norm();if(d>0){var f=a,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,u)):(g.set(0,1,0),f.cross(g,u)),f.cross(u,c)}else u.set(1,0,0),c.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},s.prototype.lerp=function(u,c,d){var f=this.x,v=this.y,g=this.z;d.x=f+(u.x-f)*c,d.y=v+(u.y-v)*c,d.z=g+(u.z-g)*c},s.prototype.almostEquals=function(u,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-u.x)>c||Math.abs(this.y-u.y)>c||Math.abs(this.z-u.z)>c)},s.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new s;s.prototype.isAntiparallelTo=function(u,c){return this.negate(h),h.almostEquals(u,c)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,i){n.exports=c;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),a=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var h=e("../collision/AABB"),u=e("../shapes/Box");function c(R){R=R||{},r.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof R.collisionFilterGroup=="number"?R.collisionFilterGroup:1,this.collisionFilterMask=typeof R.collisionFilterMask=="number"?R.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,R.position&&this.position.copy(R.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,R.velocity&&this.velocity.copy(R.velocity),this.initVelocity=new s,this.force=new s;var B=typeof R.mass=="number"?R.mass:0;this.mass=B,this.invMass=B>0?1/B:0,this.material=R.material||null,this.linearDamping=typeof R.linearDamping=="number"?R.linearDamping:.01,this.type=B<=0?c.STATIC:c.DYNAMIC,typeof R.type==typeof c.STATIC&&(this.type=R.type),this.allowSleep=typeof R.allowSleep<"u"?R.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof R.sleepSpeedLimit<"u"?R.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof R.sleepTimeLimit<"u"?R.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new l,R.quaternion&&this.quaternion.copy(R.quaternion),this.initQuaternion=new l,this.angularVelocity=new s,R.angularVelocity&&this.angularVelocity.copy(R.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof R.fixedRotation<"u"?R.fixedRotation:!1,this.angularDamping=typeof R.angularDamping<"u"?R.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new s,R.shape&&this.addShape(R.shape),this.updateMassProperties()}c.prototype=new r,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var R=this.sleepState;this.sleepState=0,R===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(R){if(this.allowSleep){var B=this.sleepState,P=this.velocity.norm2()+this.angularVelocity.norm2(),q=Math.pow(this.sleepSpeedLimit,2);B===c.AWAKE&&P<q?(this.sleepState=c.SLEEPY,this.timeLastSleepy=R,this.dispatchEvent(c.sleepyEvent)):B===c.SLEEPY&&P>q?this.wakeUp():B===c.SLEEPY&&R-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(R,P){var P=P||new s;return R.vsub(this.position,P),this.quaternion.conjugate().vmult(P,P),P},c.prototype.vectorToLocalFrame=function(R,P){var P=P||new s;return this.quaternion.conjugate().vmult(R,P),P},c.prototype.pointToWorldFrame=function(R,P){var P=P||new s;return this.quaternion.vmult(R,P),P.vadd(this.position,P),P},c.prototype.vectorToWorldFrame=function(R,P){var P=P||new s;return this.quaternion.vmult(R,P),P};var d=new s,f=new l;c.prototype.addShape=function(R,B,P){var q=new s,W=new l;return B&&q.copy(B),P&&W.copy(P),this.shapes.push(R),this.shapeOffsets.push(q),this.shapeOrientations.push(W),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var R=this.shapes,B=this.shapeOffsets,P=R.length,q=0,W=0;W!==P;W++){var ot=R[W];ot.updateBoundingSphereRadius();var V=B[W].norm(),I=ot.boundingSphereRadius;V+I>q&&(q=V+I)}this.boundingRadius=q};var v=new h;c.prototype.computeAABB=function(){for(var R=this.shapes,B=this.shapeOffsets,P=this.shapeOrientations,q=R.length,W=d,ot=f,V=this.quaternion,I=this.aabb,Q=v,Y=0;Y!==q;Y++){var O=R[Y];P[Y].mult(V,ot),ot.vmult(B[Y],W),W.vadd(this.position,W),O.calculateWorldAABB(W,ot,Q.lowerBound,Q.upperBound),Y===0?I.copy(Q):I.extend(Q)}this.aabbNeedsUpdate=!1};var g=new a,p=new a;new a,c.prototype.updateInertiaWorld=function(R){var B=this.invInertia;if(!(B.x===B.y&&B.y===B.z&&!R)){var P=g,q=p;P.setRotationFromQuaternion(this.quaternion),P.transpose(q),P.scale(B,P),P.mmult(q,this.invInertiaWorld)}};var m=new s,_=new s;c.prototype.applyForce=function(R,B){if(this.type===c.DYNAMIC){var P=m;B.vsub(this.position,P);var q=_;P.cross(R,q),this.force.vadd(R,this.force),this.torque.vadd(q,this.torque)}};var x=new s,y=new s;c.prototype.applyLocalForce=function(R,B){if(this.type===c.DYNAMIC){var P=x,q=y;this.vectorToWorldFrame(R,P),this.pointToWorldFrame(B,q),this.applyForce(P,q)}};var T=new s,C=new s,L=new s;c.prototype.applyImpulse=function(R,B){if(this.type===c.DYNAMIC){var P=T;B.vsub(this.position,P);var q=C;q.copy(R),q.mult(this.invMass,q),this.velocity.vadd(q,this.velocity);var W=L;P.cross(R,W),this.invInertiaWorld.vmult(W,W),this.angularVelocity.vadd(W,this.angularVelocity)}};var D=new s,E=new s;c.prototype.applyLocalImpulse=function(R,B){if(this.type===c.DYNAMIC){var P=D,q=E;this.vectorToWorldFrame(R,P),this.pointToWorldFrame(B,q),this.applyImpulse(P,q)}};var M=new s;c.prototype.updateMassProperties=function(){var R=M;this.invMass=this.mass>0?1/this.mass:0;var B=this.inertia,P=this.fixedRotation;this.computeAABB(),R.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(R,this.mass,B),this.invInertia.set(B.x>0&&!P?1/B.x:0,B.y>0&&!P?1/B.y:0,B.z>0&&!P?1/B.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(R,B){var P=new s;return R.vsub(this.position,P),this.angularVelocity.cross(P,B),this.velocity.vadd(B,B),B}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,i){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var a=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=h;function h(V){this.chassisBody=V.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof V.indexRightAxis<"u"?V.indexRightAxis:1,this.indexForwardAxis=typeof V.indexForwardAxis<"u"?V.indexForwardAxis:0,this.indexUpAxis=typeof V.indexUpAxis<"u"?V.indexUpAxis:2}new r,new r,new r;var u=new r,c=new r,d=new r;new a,h.prototype.addWheel=function(V){V=V||{};var I=new l(V),Q=this.wheelInfos.length;return this.wheelInfos.push(I),Q},h.prototype.setSteeringValue=function(V,I){var Q=this.wheelInfos[I];Q.steering=V},new r,h.prototype.applyEngineForce=function(V,I){this.wheelInfos[I].engineForce=V},h.prototype.setBrake=function(V,I){this.wheelInfos[I].brake=V},h.prototype.addToWorld=function(V){this.constraints,V.add(this.chassisBody);var I=this;this.preStepCallback=function(){I.updateVehicle(V.dt)},V.addEventListener("preStep",this.preStepCallback),this.world=V},h.prototype.getVehicleAxisWorld=function(V,I){I.set(V===0?1:0,V===1?1:0,V===2?1:0),this.chassisBody.vectorToWorldFrame(I,I)},h.prototype.updateVehicle=function(V){for(var I=this.wheelInfos,Q=I.length,Y=this.chassisBody,O=0;O<Q;O++)this.updateWheelTransform(O);this.currentVehicleSpeedKmHour=3.6*Y.velocity.norm();var J=new r;this.getVehicleAxisWorld(this.indexForwardAxis,J),J.dot(Y.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var O=0;O<Q;O++)this.castRay(I[O]);this.updateSuspension(V);for(var z=new r,A=new r,O=0;O<Q;O++){var b=I[O],k=b.suspensionForce;k>b.maxSuspensionForce&&(k=b.maxSuspensionForce),b.raycastResult.hitNormalWorld.scale(k*V,z),b.raycastResult.hitPointWorld.vsub(Y.position,A),Y.applyImpulse(z,b.raycastResult.hitPointWorld)}this.updateFriction(V);var $=new r,it=new r,K=new r;for(O=0;O<Q;O++){var b=I[O];Y.getVelocityAtWorldPoint(b.chassisConnectionPointWorld,K);var N=1;switch(this.indexUpAxis){case 1:N=-1;break}if(b.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,it);var ut=it.dot(b.raycastResult.hitNormalWorld);b.raycastResult.hitNormalWorld.scale(ut,$),it.vsub($,it);var vt=it.dot(K);b.deltaRotation=N*vt*V/b.radius}(b.sliding||!b.isInContact)&&b.engineForce!==0&&b.useCustomSlidingRotationalSpeed&&(b.deltaRotation=(b.engineForce>0?1:-1)*b.customSlidingRotationalSpeed*V),Math.abs(b.brake)>Math.abs(b.engineForce)&&(b.deltaRotation=0),b.rotation+=b.deltaRotation,b.deltaRotation*=.99}},h.prototype.updateSuspension=function(V){for(var I=this.chassisBody,Q=I.mass,Y=this.wheelInfos,O=Y.length,J=0;J<O;J++){var z=Y[J];if(z.isInContact){var A,b=z.suspensionRestLength,k=z.suspensionLength,$=b-k;A=z.suspensionStiffness*$*z.clippedInvContactDotSuspension;var it=z.suspensionRelativeVelocity,K;it<0?K=z.dampingCompression:K=z.dampingRelaxation,A-=K*it,z.suspensionForce=A*Q,z.suspensionForce<0&&(z.suspensionForce=0)}else z.suspensionForce=0}},h.prototype.removeFromWorld=function(V){this.constraints,V.remove(this.chassisBody),V.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;h.prototype.castRay=function(V){var I=f,Q=v;this.updateWheelTransformWorld(V);var Y=this.chassisBody,O=-1,J=V.suspensionRestLength+V.radius;V.directionWorld.scale(J,I);var z=V.chassisConnectionPointWorld;z.vadd(I,Q);var A=V.raycastResult;A.reset();var b=Y.collisionResponse;Y.collisionResponse=!1,this.world.rayTest(z,Q,A),Y.collisionResponse=b;var k=A.body;if(V.raycastResult.groundObject=0,k){O=A.distance,V.raycastResult.hitNormalWorld=A.hitNormalWorld,V.isInContact=!0;var $=A.distance;V.suspensionLength=$-V.radius;var it=V.suspensionRestLength-V.maxSuspensionTravel,K=V.suspensionRestLength+V.maxSuspensionTravel;V.suspensionLength<it&&(V.suspensionLength=it),V.suspensionLength>K&&(V.suspensionLength=K,V.raycastResult.reset());var N=V.raycastResult.hitNormalWorld.dot(V.directionWorld),ut=new r;Y.getVelocityAtWorldPoint(V.raycastResult.hitPointWorld,ut);var vt=V.raycastResult.hitNormalWorld.dot(ut);if(N>=-.1)V.suspensionRelativeVelocity=0,V.clippedInvContactDotSuspension=1/.1;else{var Mt=-1/N;V.suspensionRelativeVelocity=vt*Mt,V.clippedInvContactDotSuspension=Mt}}else V.suspensionLength=V.suspensionRestLength+0*V.maxSuspensionTravel,V.suspensionRelativeVelocity=0,V.directionWorld.scale(-1,V.raycastResult.hitNormalWorld),V.clippedInvContactDotSuspension=1;return O},h.prototype.updateWheelTransformWorld=function(V){V.isInContact=!1;var I=this.chassisBody;I.pointToWorldFrame(V.chassisConnectionPointLocal,V.chassisConnectionPointWorld),I.vectorToWorldFrame(V.directionLocal,V.directionWorld),I.vectorToWorldFrame(V.axleLocal,V.axleWorld)},h.prototype.updateWheelTransform=function(V){var I=u,Q=c,Y=d,O=this.wheelInfos[V];this.updateWheelTransformWorld(O),O.directionLocal.scale(-1,I),Q.copy(O.axleLocal),I.cross(Q,Y),Y.normalize(),Q.normalize();var J=O.steering,z=new s;z.setFromAxisAngle(I,J);var A=new s;A.setFromAxisAngle(Q,O.rotation);var b=O.worldTransform.quaternion;this.chassisBody.quaternion.mult(z,b),b.mult(A,b),b.normalize();var k=O.worldTransform.position;k.copy(O.directionWorld),k.scale(O.suspensionLength,k),k.vadd(O.chassisConnectionPointWorld,k)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];h.prototype.getWheelTransformWorld=function(V){return this.wheelInfos[V].worldTransform};var p=new r,m=[],_=[],x=1;h.prototype.updateFriction=function(V){for(var I=p,Q=this.wheelInfos,Y=Q.length,O=this.chassisBody,J=_,z=m,A=0;A<Y;A++){var b=Q[A],k=b.raycastResult.body;b.sideImpulse=0,b.forwardImpulse=0,J[A]||(J[A]=new r),z[A]||(z[A]=new r)}for(var A=0;A<Y;A++){var b=Q[A],k=b.raycastResult.body;if(k){var $=z[A],it=this.getWheelTransformWorld(A);it.vectorToWorldFrame(g[this.indexRightAxis],$);var K=b.raycastResult.hitNormalWorld,N=$.dot(K);K.scale(N,I),$.vsub(I,$),$.normalize(),K.cross($,J[A]),J[A].normalize(),b.sideImpulse=ot(O,b.raycastResult.hitPointWorld,k,b.raycastResult.hitPointWorld,$),b.sideImpulse*=x}}var ut=1,vt=.5;this.sliding=!1;for(var A=0;A<Y;A++){var b=Q[A],k=b.raycastResult.body,Mt=0;if(b.slipInfo=1,k){var dt=0,rt=b.brake?b.brake:dt;Mt=L(O,k,b.raycastResult.hitPointWorld,J[A],rt),Mt+=b.engineForce*V;var lt=rt/Mt;b.slipInfo*=lt}if(b.forwardImpulse=0,b.skidInfo=1,k){b.skidInfo=1;var Vt=b.suspensionForce*V*b.frictionSlip,Ot=Vt,U=Vt*Ot;b.forwardImpulse=Mt;var S=b.forwardImpulse*vt,et=b.sideImpulse*ut,at=S*S+et*et;if(b.sliding=!1,at>U){this.sliding=!0,b.sliding=!0;var lt=Vt/Math.sqrt(at);b.skidInfo*=lt}}}if(this.sliding)for(var A=0;A<Y;A++){var b=Q[A];b.sideImpulse!==0&&b.skidInfo<1&&(b.forwardImpulse*=b.skidInfo,b.sideImpulse*=b.skidInfo)}for(var A=0;A<Y;A++){var b=Q[A],ct=new r;if(ct.copy(b.raycastResult.hitPointWorld),b.forwardImpulse!==0){var pt=new r;J[A].scale(b.forwardImpulse,pt),O.applyImpulse(pt,ct)}if(b.sideImpulse!==0){var k=b.raycastResult.body,Rt=new r;Rt.copy(b.raycastResult.hitPointWorld);var St=new r;z[A].scale(b.sideImpulse,St),O.pointToLocalFrame(ct,ct),ct["xyz"[this.indexUpAxis]]*=b.rollInfluence,O.pointToWorldFrame(ct,ct),O.applyImpulse(St,ct),St.scale(-1,St),k.applyImpulse(St,Rt)}}};var y=new r,T=new r,C=new r;function L(V,I,Q,Y,O){var J=0,z=Q,A=y,b=T,k=C;V.getVelocityAtWorldPoint(z,A),I.getVelocityAtWorldPoint(z,b),A.vsub(b,k);var $=Y.dot(k),it=B(V,Q,Y),K=B(I,Q,Y),N=1,ut=N/(it+K);return J=-$*ut,O<J&&(J=O),J<-O&&(J=-O),J}var D=new r,E=new r,M=new r,R=new r;function B(V,I,Q){var Y=D,O=E,J=M,z=R;return I.vsub(V.position,Y),Y.cross(Q,O),V.invInertiaWorld.vmult(O,z),z.cross(Y,J),V.invMass+Q.dot(J)}var P=new r,q=new r,W=new r;function ot(V,I,Q,Y,O,N){var z=O.norm2();if(z>1.1)return 0;var A=P,b=q,k=W;V.getVelocityAtWorldPoint(I,A),Q.getVelocityAtWorldPoint(Y,b),A.vsub(b,k);var $=O.dot(k),it=.2,K=1/(V.invMass+Q.invMass),N=-it*$*K;return N}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,i){var r=e("./Body"),s=e("../shapes/Sphere"),a=e("../shapes/Box"),l=e("../math/Vec3"),h=e("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new a(new l(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,p=new l;this.chassisBody.pointToWorldFrame(g,p),v.position.set(p.x,p.y,p.z);var m=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(m);var _=new h(this.chassisBody,v,{pivotA:g,axisA:m,pivotB:l.ZERO,axisB:m,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],p=Math.cos(f),m=Math.sin(f),_=g.x,x=g.y;this.constraints[v].axisA.set(p*_-m*x,m*_+p*x,0)},u.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var c=new l;u.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},u.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],p=this.wheelBodies[v],m=p.torque;g.scale(f,c),p.vectorToWorldFrame(c,c),m.vadd(c,m)},u.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),p=0;p<g.length;p++)f.add(g[p]);for(var p=0;p<v.length;p++)f.addConstraint(v[p]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},u.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),p=0;p<g.length;p++)f.remove(g[p]);for(var p=0;p<v.length;p++)f.removeConstraint(v[p])};var d=new l;u.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],p=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),p.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,i){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new r;s.prototype.getNeighbors=function(v,g){for(var p=this.particles.length,m=v.id,_=this.smoothingRadius*this.smoothingRadius,x=a,y=0;y!==p;y++){var T=this.particles[y];T.position.vsub(v.position,x),m!==T.id&&x.norm2()<_&&g.push(T)}};var l=new r,h=new r,u=new r,c=new r,d=new r,f=new r;s.prototype.update=function(){for(var v=this.particles.length,g=l,p=this.speedOfSound,m=this.eps,_=0;_!==v;_++){var x=this.particles[_],y=this.neighbors[_];y.length=0,this.getNeighbors(x,y),y.push(this.particles[_]);for(var T=y.length,C=0,L=0;L!==T;L++){x.position.vsub(y[L].position,g);var D=g.norm(),E=this.w(D);C+=y[L].mass*E}this.densities[_]=C,this.pressures[_]=p*p*(this.densities[_]-this.density)}for(var M=h,R=u,B=c,P=d,q=f,_=0;_!==v;_++){var W=this.particles[_];M.set(0,0,0),R.set(0,0,0);for(var ot,V,y=this.neighbors[_],T=y.length,L=0;L!==T;L++){var I=y[L];W.position.vsub(I.position,P);var Q=P.norm();ot=-I.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+m)+this.pressures[L]/(this.densities[L]*this.densities[L]+m)),this.gradw(P,B),B.mult(ot,B),M.vadd(B,M),I.velocity.vsub(W.velocity,q),q.mult(1/(1e-4+this.densities[_]*this.densities[L])*this.viscosity*I.mass,q),V=this.nablaw(Q),q.mult(V,q),R.vadd(q,R)}R.mult(W.mass,R),M.mult(W.mass,M),W.force.vadd(R,W.force),W.force.vadd(M,W.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var p=v.norm(),m=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(m,9))*Math.pow(m*m-p*p,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,p=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return p}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,i){var r=e("../math/Vec3");n.exports=s;function s(_,x,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=_,this.bodyB=x,this.localAnchorA=new r,this.localAnchorB=new r,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}s.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},s.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},s.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},s.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var a=new r,l=new r,h=new r,u=new r,c=new r,d=new r,f=new r,v=new r,g=new r,p=new r,m=new r;s.prototype.applyForce=function(){var _=this.stiffness,x=this.damping,y=this.restLength,T=this.bodyA,C=this.bodyB,L=a,D=l,E=h,M=u,R=m,B=c,P=d,q=f,W=v,ot=g,V=p;this.getWorldAnchorA(B),this.getWorldAnchorB(P),B.vsub(T.position,q),P.vsub(C.position,W),P.vsub(B,L);var I=L.norm();D.copy(L),D.normalize(),C.velocity.vsub(T.velocity,E),C.angularVelocity.cross(W,R),E.vadd(R,E),T.angularVelocity.cross(q,R),E.vsub(R,E),D.mult(-_*(I-y)-x*E.dot(D),M),T.force.vsub(M,T.force),C.force.vadd(M,C.force),q.cross(M,ot),W.cross(M,V),T.torque.vsub(ot,T.torque),C.torque.vadd(V,C.torque)}},{"../math/Vec3":30}],36:[function(e,n,i){var r=e("../math/Vec3"),s=e("../math/Transform"),a=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=h;function h(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new s,this.isInContact=!1}var c=new r,u=new r,c=new r;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,c);var g=f.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var p=-1/v;this.suspensionRelativeVelocity=g*p,this.clippedInvContactDotSuspension=p}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3"),a=e("./ConvexPolyhedron");function l(c){r.call(this),this.type=r.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=s,g=[new v(-c,-d,-f),new v(c,-d,-f),new v(c,d,-f),new v(-c,d,-f),new v(-c,-d,f),new v(c,-d,f),new v(c,d,f),new v(-c,d,f)],p=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var m=new a(g,p);this.convexPolyhedronRepresentation=m,m.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new s,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var v=c;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var f=c,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new s;new s,l.prototype.forEachWorldCorner=function(c,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],p=0;p<g.length;p++)h.set(g[p][0],g[p][1],g[p][2]),d.vmult(h,h),c.vadd(h,h),f(h.x,h.y,h.z)};var u=[new s,new s,new s,new s,new s,new s,new s,new s];l.prototype.calculateWorldAABB=function(c,d,f,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var p=u[0];d.vmult(p,p),c.vadd(p,p),v.copy(p),f.copy(p);for(var m=1;m<8;m++){var p=u[m];d.vmult(p,p),c.vadd(p,p);var _=p.x,x=p.y,y=p.z;_>v.x&&(v.x=_),x>v.y&&(v.y=x),y>v.z&&(v.z=y),_<f.x&&(f.x=_),x<f.y&&(f.y=x),y<f.z&&(f.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform");function l(O,J,z){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=O||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=J||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=z?z.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var h=new s;l.prototype.computeEdges=function(){var O=this.faces,J=this.vertices;J.length;var z=this.uniqueEdges;z.length=0;for(var A=h,b=0;b!==O.length;b++)for(var k=O[b],$=k.length,it=0;it!==$;it++){var K=(it+1)%$;J[k[it]].vsub(J[k[K]],A),A.normalize();for(var N=!1,ut=0;ut!==z.length;ut++)if(z[ut].almostEquals(A)||z[ut].almostEquals(A)){N=!0;break}N||z.push(A.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var O=0;O<this.faces.length;O++){for(var J=0;J<this.faces[O].length;J++)if(!this.vertices[this.faces[O][J]])throw new Error("Vertex "+this.faces[O][J]+" not found!");var z=this.faceNormals[O]||new s;this.getFaceNormal(O,z),z.negate(z),this.faceNormals[O]=z;var A=this.vertices[this.faces[O][0]];if(z.dot(A)<0){console.error(".faceNormals["+O+"] = Vec3("+z.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var J=0;J<this.faces[O].length;J++)console.warn(".vertices["+this.faces[O][J]+"] = Vec3("+this.vertices[this.faces[O][J]].toString()+")")}}};var u=new s,c=new s;l.computeNormal=function(O,J,z,A){J.vsub(O,c),z.vsub(J,u),u.cross(c,A),A.isZero()||A.normalize()},l.prototype.getFaceNormal=function(O,J){var z=this.faces[O],A=this.vertices[z[0]],b=this.vertices[z[1]],k=this.vertices[z[2]];return l.computeNormal(A,b,k,J)};var d=new s;l.prototype.clipAgainstHull=function(O,J,z,A,b,k,$,it,K){for(var N=d,ut=-1,vt=-Number.MAX_VALUE,Mt=0;Mt<z.faces.length;Mt++){N.copy(z.faceNormals[Mt]),b.vmult(N,N);var dt=N.dot(k);dt>vt&&(vt=dt,ut=Mt)}for(var rt=[],lt=z.faces[ut],Vt=lt.length,Ot=0;Ot<Vt;Ot++){var U=z.vertices[lt[Ot]],S=new s;S.copy(U),b.vmult(S,S),A.vadd(S,S),rt.push(S)}ut>=0&&this.clipFaceAgainstHull(k,O,J,rt,$,it,K)};var f=new s,v=new s,g=new s,p=new s,m=new s,_=new s;l.prototype.findSeparatingAxis=function(O,J,z,A,b,k,$,it){var K=f,N=v,ut=g,vt=p,Mt=m,dt=_,rt=Number.MAX_VALUE,lt=this;if(lt.uniqueAxes)for(var Ot=0;Ot!==lt.uniqueAxes.length;Ot++){z.vmult(lt.uniqueAxes[Ot],K);var S=lt.testSepAxis(K,O,J,z,A,b);if(S===!1)return!1;S<rt&&(rt=S,k.copy(K))}else for(var Vt=$?$.length:lt.faces.length,Ot=0;Ot<Vt;Ot++){var U=$?$[Ot]:Ot;K.copy(lt.faceNormals[U]),z.vmult(K,K);var S=lt.testSepAxis(K,O,J,z,A,b);if(S===!1)return!1;S<rt&&(rt=S,k.copy(K))}if(O.uniqueAxes)for(var Ot=0;Ot!==O.uniqueAxes.length;Ot++){b.vmult(O.uniqueAxes[Ot],N);var S=lt.testSepAxis(N,O,J,z,A,b);if(S===!1)return!1;S<rt&&(rt=S,k.copy(N))}else for(var et=it?it.length:O.faces.length,Ot=0;Ot<et;Ot++){var U=it?it[Ot]:Ot;N.copy(O.faceNormals[U]),b.vmult(N,N);var S=lt.testSepAxis(N,O,J,z,A,b);if(S===!1)return!1;S<rt&&(rt=S,k.copy(N))}for(var at=0;at!==lt.uniqueEdges.length;at++){z.vmult(lt.uniqueEdges[at],vt);for(var ct=0;ct!==O.uniqueEdges.length;ct++)if(b.vmult(O.uniqueEdges[ct],Mt),vt.cross(Mt,dt),!dt.almostZero()){dt.normalize();var pt=lt.testSepAxis(dt,O,J,z,A,b);if(pt===!1)return!1;pt<rt&&(rt=pt,k.copy(dt))}}return A.vsub(J,ut),ut.dot(k)>0&&k.negate(k),!0};var x=[],y=[];l.prototype.testSepAxis=function(O,J,z,A,b,k){var $=this;l.project($,O,z,A,x),l.project(J,O,b,k,y);var it=x[0],K=x[1],N=y[0],ut=y[1],vt=it-ut,Mt=N-K,dt=vt<Mt?vt:Mt;return dt};var T=new s,C=new s;l.prototype.calculateLocalInertia=function(O,J){this.computeLocalAABB(T,C);var z=C.x-T.x,A=C.y-T.y,b=C.z-T.z;J.x=1/12*O*(2*A*2*A+2*b*2*b),J.y=1/12*O*(2*z*2*z+2*b*2*b),J.z=1/12*O*(2*A*2*A+2*z*2*z)},l.prototype.getPlaneConstantOfFace=function(O){var J=this.faces[O],z=this.faceNormals[O],A=this.vertices[J[0]],b=-z.dot(A);return b};var L=new s,D=new s,E=new s,M=new s,R=new s,B=new s,P=new s,q=new s;l.prototype.clipFaceAgainstHull=function(O,J,z,A,b,k,$){for(var it=L,K=D,N=E,ut=M,vt=R,Mt=B,dt=P,rt=q,lt=this,Vt=[],Ot=A,U=Vt,S=-1,et=Number.MAX_VALUE,at=0;at<lt.faces.length;at++){it.copy(lt.faceNormals[at]),z.vmult(it,it);var ct=it.dot(O);ct<et&&(et=ct,S=at)}if(!(S<0)){var pt=lt.faces[S];pt.connectedFaces=[];for(var Rt=0;Rt<lt.faces.length;Rt++)for(var St=0;St<lt.faces[Rt].length;St++)pt.indexOf(lt.faces[Rt][St])!==-1&&Rt!==S&&pt.connectedFaces.indexOf(Rt)===-1&&pt.connectedFaces.push(Rt);Ot.length;for(var gt=pt.length,Wt=0;Wt<gt;Wt++){var wt=lt.vertices[pt[Wt]],Gt=lt.vertices[pt[(Wt+1)%gt]];wt.vsub(Gt,K),N.copy(K),z.vmult(N,N),J.vadd(N,N),ut.copy(this.faceNormals[S]),z.vmult(ut,ut),J.vadd(ut,ut),N.cross(ut,vt),vt.negate(vt),Mt.copy(wt),z.vmult(Mt,Mt),J.vadd(Mt,Mt),-Mt.dot(vt);var Ut;{var ne=pt.connectedFaces[Wt];dt.copy(this.faceNormals[ne]);var qt=this.getPlaneConstantOfFace(ne);rt.copy(dt),z.vmult(rt,rt);var Ut=qt-rt.dot(J)}for(this.clipFaceAgainstPlane(Ot,U,rt,Ut);Ot.length;)Ot.shift();for(;U.length;)Ot.push(U.shift())}dt.copy(this.faceNormals[S]);var qt=this.getPlaneConstantOfFace(S);rt.copy(dt),z.vmult(rt,rt);for(var Ut=qt-rt.dot(J),Rt=0;Rt<Ot.length;Rt++){var jt=rt.dot(Ot[Rt])+Ut;if(jt<=b&&(console.log("clamped: depth="+jt+" to minDist="+(b+"")),jt=b),jt<=k){var ee=Ot[Rt];if(jt<=0){var ue={point:ee,normal:rt,depth:jt};$.push(ue)}}}}},l.prototype.clipFaceAgainstPlane=function(O,J,z,A){var b,k,$=O.length;if($<2)return J;var it=O[O.length-1],K=O[0];b=z.dot(it)+A;for(var N=0;N<$;N++){if(K=O[N],k=z.dot(K)+A,b<0)if(k<0){var ut=new s;ut.copy(K),J.push(ut)}else{var ut=new s;it.lerp(K,b/(b-k),ut),J.push(ut)}else if(k<0){var ut=new s;it.lerp(K,b/(b-k),ut),J.push(ut),J.push(K)}it=K,b=k}return J},l.prototype.computeWorldVertices=function(O,J){for(var z=this.vertices.length;this.worldVertices.length<z;)this.worldVertices.push(new s);for(var A=this.vertices,b=this.worldVertices,k=0;k!==z;k++)J.vmult(A[k],b[k]),O.vadd(b[k],b[k]);this.worldVerticesNeedsUpdate=!1},new s,l.prototype.computeLocalAABB=function(O,J){var z=this.vertices.length,A=this.vertices;O.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),J.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var b=0;b<z;b++){var k=A[b];k.x<O.x?O.x=k.x:k.x>J.x&&(J.x=k.x),k.y<O.y?O.y=k.y:k.y>J.y&&(J.y=k.y),k.z<O.z?O.z=k.z:k.z>J.z&&(J.z=k.z)}},l.prototype.computeWorldFaceNormals=function(O){for(var J=this.faceNormals.length;this.worldFaceNormals.length<J;)this.worldFaceNormals.push(new s);for(var z=this.faceNormals,A=this.worldFaceNormals,b=0;b!==J;b++)O.vmult(z[b],A[b]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var O=0,J=this.vertices,z=0,A=J.length;z!==A;z++){var b=J[z].norm2();b>O&&(O=b)}this.boundingSphereRadius=Math.sqrt(O)};var W=new s;l.prototype.calculateWorldAABB=function(O,J,z,A){for(var b=this.vertices.length,k=this.vertices,$,it,K,N,ut,vt,Mt=0;Mt<b;Mt++){W.copy(k[Mt]),J.vmult(W,W),O.vadd(W,W);var dt=W;dt.x<$||$===void 0?$=dt.x:(dt.x>N||N===void 0)&&(N=dt.x),dt.y<it||it===void 0?it=dt.y:(dt.y>ut||ut===void 0)&&(ut=dt.y),dt.z<K||K===void 0?K=dt.z:(dt.z>vt||vt===void 0)&&(vt=dt.z)}z.set($,it,K),A.set(N,ut,vt)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(O){O=O||new s;for(var J=this.vertices.length,z=this.vertices,A=0;A<J;A++)O.vadd(z[A],O);return O.mult(1/J,O),O},l.prototype.transformAllPoints=function(O,J){var z=this.vertices.length,A=this.vertices;if(J){for(var b=0;b<z;b++){var k=A[b];J.vmult(k,k)}for(var b=0;b<this.faceNormals.length;b++){var k=this.faceNormals[b];J.vmult(k,k)}}if(O)for(var b=0;b<z;b++){var k=A[b];k.vadd(O,k)}};var ot=new s,V=new s,I=new s;l.prototype.pointIsInside=function(O){var J=this.vertices.length,z=this.vertices,A=this.faces,b=this.faceNormals,k=null,$=this.faces.length,it=ot;this.getAveragePointLocal(it);for(var K=0;K<$;K++){this.faces[K].length;var J=b[K],N=z[A[K][0]],ut=V;O.vsub(N,ut);var vt=J.dot(ut),Mt=I;it.vsub(N,Mt);var dt=J.dot(Mt);if(vt<0&&dt>0||vt>0&&dt<0)return!1}return k?1:-1},new s;var Q=new s,Y=new s;l.project=function(O,J,z,A,b){var k=O.vertices.length,$=Q,it=0,K=0,N=Y,ut=O.vertices;N.setZero(),a.vectorToLocalFrame(z,A,J,$),a.pointToLocalFrame(z,A,N,N);var vt=N.dot($);K=it=ut[0].dot($);for(var Mt=1;Mt<k;Mt++){var dt=ut[Mt].dot($);dt>it&&(it=dt),dt<K&&(K=dt)}if(K-=vt,it-=vt,K>it){var rt=K;K=it,it=rt}b[0]=it,b[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,i){n.exports=l;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var a=e("./ConvexPolyhedron");function l(h,u,c,d){var f=d,v=[],g=[],p=[],m=[],_=[],x=Math.cos,y=Math.sin;v.push(new s(u*x(0),u*y(0),-c*.5)),m.push(0),v.push(new s(h*x(0),h*y(0),c*.5)),_.push(1);for(var T=0;T<f;T++){var C=2*Math.PI/f*(T+1),L=2*Math.PI/f*(T+.5);T<f-1?(v.push(new s(u*x(C),u*y(C),-c*.5)),m.push(2*T+2),v.push(new s(h*x(C),h*y(C),c*.5)),_.push(2*T+3),p.push([2*T+2,2*T+3,2*T+1,2*T])):p.push([0,1,2*T+1,2*T]),(f%2===1||T<f/2)&&g.push(new s(x(L),y(L),0))}p.push(_),g.push(new s(0,0,1));for(var D=[],T=0;T<m.length;T++)D.push(m[m.length-T-1]);p.push(D),this.type=r.types.CONVEXPOLYHEDRON,a.call(this,v,p,g)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,i){var r=e("./Shape"),s=e("./ConvexPolyhedron"),a=e("../math/Vec3"),l=e("../utils/Utils");n.exports=h;function h(u,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new a,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new r,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v<c&&(c=v)}this.minValue=c},h.prototype.updateMaxValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v>c&&(c=v)}this.maxValue=c},h.prototype.setHeightValueAtIndex=function(u,c,d){var f=this.data;f[u][c]=d,this.clearCachedConvexTrianglePillar(u,c,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,c,!0),this.clearCachedConvexTrianglePillar(u-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(u,c-1,!0),this.clearCachedConvexTrianglePillar(u,c-1,!1)),c>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,c-1,!0)},h.prototype.getRectMinMax=function(u,c,d,f,v){v=v||[];for(var g=this.data,p=this.minValue,m=u;m<=d;m++)for(var _=c;_<=f;_++){var x=g[m][_];x>p&&(p=x)}v[0]=this.minValue,v[1]=p},h.prototype.getIndexOfPosition=function(u,c,d,f){var v=this.elementSize,g=this.data,p=Math.floor(u/v),m=Math.floor(c/v);return d[0]=p,d[1]=m,f&&(p<0&&(p=0),m<0&&(m=0),p>=g.length-1&&(p=g.length-1),m>=g[0].length-1&&(m=g[0].length-1)),!(p<0||m<0||p>=g.length-1||m>=g[0].length-1)},h.prototype.getHeightAt=function(u,c,d){var f=[];this.getIndexOfPosition(u,c,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,c,d){return u+"_"+c+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.setCachedConvexTrianglePillar=function(u,c,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]={convex:f,offset:v}},h.prototype.clearCachedConvexTrianglePillar=function(u,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.getConvexTrianglePillar=function(u,c,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new s,v=new a,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,p=this.elementSize,m=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new a);m.length=5;for(var _=0;_<5;_++)m[_]||(m[_]=[]);var x=f.vertices,y=(Math.min(g[u][c],g[u+1][c],g[u][c+1],g[u+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((u+.75)*p,(c+.75)*p,y),x[0].set(.25*p,.25*p,g[u+1][c+1]-y),x[1].set(-.75*p,.25*p,g[u][c+1]-y),x[2].set(.25*p,-.75*p,g[u+1][c]-y),x[3].set(.25*p,.25*p,-y-1),x[4].set(-.75*p,.25*p,-y-1),x[5].set(.25*p,-.75*p,-y-1),m[0][0]=0,m[0][1]=1,m[0][2]=2,m[1][0]=5,m[1][1]=4,m[1][2]=3,m[2][0]=2,m[2][1]=5,m[2][2]=3,m[2][3]=0,m[3][0]=3,m[3][1]=4,m[3][2]=1,m[3][3]=0,m[4][0]=1,m[4][1]=4,m[4][2]=5,m[4][3]=2):(v.set((u+.25)*p,(c+.25)*p,y),x[0].set(-.25*p,-.25*p,g[u][c]-y),x[1].set(.75*p,-.25*p,g[u+1][c]-y),x[2].set(-.25*p,.75*p,g[u][c+1]-y),x[3].set(-.25*p,-.25*p,-y-1),x[4].set(.75*p,-.25*p,-y-1),x[5].set(-.25*p,.75*p,-y-1),m[0][0]=0,m[0][1]=1,m[0][2]=2,m[1][0]=5,m[1][1]=4,m[1][2]=3,m[2][0]=0,m[2][1]=2,m[2][2]=5,m[2][3]=3,m[3][0]=1,m[3][1]=0,m[3][2]=3,m[3][3]=4,m[4][0]=4,m[4][1]=5,m[4][2]=2,m[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,c,d,f,v)},h.prototype.calculateLocalInertia=function(u,c){return c=c||new a,c.set(0,0,0),c},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,c=this.elementSize;this.boundingSphereRadius=new a(u.length*c,u[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,i){n.exports=a;var r=e("./Shape"),s=e("../math/Vec3");function a(){r.call(this),this.type=r.types.PARTICLE}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,h){return h=h||new s,h.set(0,0,0),h},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,h,u,c){u.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,i){n.exports=a;var r=e("./Shape"),s=e("../math/Vec3");function a(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new r,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(h,u){return u=u||new s,u},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new s;a.prototype.calculateWorldAABB=function(h,u,c,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=h.x),l.y===1&&(d.y=h.y),l.z===1&&(d.z=h.z),l.x===-1&&(c.x=h.x),l.y===-1&&(c.y=h.y),l.z===-1&&(c.z=h.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,i){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,i){n.exports=a;var r=e("./Shape"),s=e("../math/Vec3");function a(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,h){h=h||new s;var u=2*l*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,h,u,c){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];u[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,i){n.exports=u;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform"),l=e("../collision/AABB"),h=e("../utils/Octree");function u(D,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(D),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new l,this.edges=null,this.scale=new s(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new r,u.prototype.constructor=u;var c=new s;u.prototype.updateTree=function(){var D=this.tree;D.reset(),D.aabb.copy(this.aabb);var E=this.scale;D.aabb.lowerBound.x*=1/E.x,D.aabb.lowerBound.y*=1/E.y,D.aabb.lowerBound.z*=1/E.z,D.aabb.upperBound.x*=1/E.x,D.aabb.upperBound.y*=1/E.y,D.aabb.upperBound.z*=1/E.z;for(var M=new l,R=new s,B=new s,P=new s,q=[R,B,P],W=0;W<this.indices.length/3;W++){var ot=W*3;this._getUnscaledVertex(this.indices[ot],R),this._getUnscaledVertex(this.indices[ot+1],B),this._getUnscaledVertex(this.indices[ot+2],P),M.setFromPoints(q),D.insert(M,W)}D.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(D,E){d.copy(D);var M=this.scale,R=M.x,B=M.y,P=M.z,q=d.lowerBound,W=d.upperBound;return q.x/=R,q.y/=B,q.z/=P,W.x/=R,W.y/=B,W.z/=P,this.tree.aabbQuery(d,E)},u.prototype.setScale=function(D){var E=this.scale.x===this.scale.y===this.scale.z,M=D.x===D.y===D.z;E&&M||this.updateNormals(),this.scale.copy(D),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var D=c,E=this.normals,M=0;M<this.indices.length/3;M++){var R=M*3,B=this.indices[R],P=this.indices[R+1],q=this.indices[R+2];this.getVertex(B,m),this.getVertex(P,_),this.getVertex(q,x),u.computeNormal(_,m,x,D),E[R]=D.x,E[R+1]=D.y,E[R+2]=D.z}},u.prototype.updateEdges=function(){for(var D={},E=function(ot,V){var I=B<P?B+"_"+P:P+"_"+B;D[I]=!0},M=0;M<this.indices.length/3;M++){var R=M*3,B=this.indices[R],P=this.indices[R+1];this.indices[R+2],E(),E(),E()}var q=Object.keys(D);this.edges=new Int16Array(q.length*2);for(var M=0;M<q.length;M++){var W=q[M].split("_");this.edges[2*M]=parseInt(W[0],10),this.edges[2*M+1]=parseInt(W[1],10)}},u.prototype.getEdgeVertex=function(D,E,M){var R=this.edges[D*2+(E?1:0)];this.getVertex(R,M)};var f=new s,v=new s;u.prototype.getEdgeVector=function(D,E){var M=f,R=v;this.getEdgeVertex(D,0,M),this.getEdgeVertex(D,1,R),R.vsub(M,E)};var g=new s,p=new s;u.computeNormal=function(D,E,M,R){E.vsub(D,p),M.vsub(E,g),g.cross(p,R),R.isZero()||R.normalize()};var m=new s,_=new s,x=new s;u.prototype.getVertex=function(D,E){var M=this.scale;return this._getUnscaledVertex(D,E),E.x*=M.x,E.y*=M.y,E.z*=M.z,E},u.prototype._getUnscaledVertex=function(D,E){var M=D*3,R=this.vertices;return E.set(R[M],R[M+1],R[M+2])},u.prototype.getWorldVertex=function(D,E,M,R){return this.getVertex(D,R),a.pointToWorldFrame(E,M,R,R),R},u.prototype.getTriangleVertices=function(D,E,M,R){var B=D*3;this.getVertex(this.indices[B],E),this.getVertex(this.indices[B+1],M),this.getVertex(this.indices[B+2],R)},u.prototype.getNormal=function(D,E){var M=D*3;return E.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var y=new l;u.prototype.calculateLocalInertia=function(D,E){this.computeLocalAABB(y);var M=y.upperBound.x-y.lowerBound.x,R=y.upperBound.y-y.lowerBound.y,B=y.upperBound.z-y.lowerBound.z;return E.set(1/12*D*(2*R*2*R+2*B*2*B),1/12*D*(2*M*2*M+2*B*2*B),1/12*D*(2*R*2*R+2*M*2*M))};var T=new s;u.prototype.computeLocalAABB=function(D){var E=D.lowerBound,M=D.upperBound,R=this.vertices.length;this.vertices;var B=T;this.getVertex(0,B),E.copy(B),M.copy(B);for(var P=0;P!==R;P++)this.getVertex(P,B),B.x<E.x?E.x=B.x:B.x>M.x&&(M.x=B.x),B.y<E.y?E.y=B.y:B.y>M.y&&(M.y=B.y),B.z<E.z?E.z=B.z:B.z>M.z&&(M.z=B.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var D=0,E=this.vertices,M=new s,R=0,B=E.length/3;R!==B;R++){this.getVertex(R,M);var P=M.norm2();P>D&&(D=P)}this.boundingSphereRadius=Math.sqrt(D)},new s;var C=new a,L=new l;u.prototype.calculateWorldAABB=function(D,E,M,R){var B=C,P=L;B.position=D,B.quaternion=E,this.aabb.toWorldFrame(B,P),M.copy(P.lowerBound),R.copy(P.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(D,E,M,R,B){D=D||1,E=E||.5,M=M||8,R=R||6,B=B||Math.PI*2;for(var P=[],q=[],W=0;W<=M;W++)for(var ot=0;ot<=R;ot++){var V=ot/R*B,I=W/M*Math.PI*2,Q=(D+E*Math.cos(I))*Math.cos(V),Y=(D+E*Math.cos(I))*Math.sin(V),O=E*Math.sin(I);P.push(Q,Y,O)}for(var W=1;W<=M;W++)for(var ot=1;ot<=R;ot++){var J=(R+1)*W+ot-1,z=(R+1)*(W-1)+ot-1,A=(R+1)*(W-1)+ot,b=(R+1)*W+ot;q.push(J,z,b),q.push(z,A,b)}return new u(P,q)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,i){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var a=[],l=[],h=[];s.prototype.solve=function(u,c){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,p=g.length,m=c.bodies,_=m.length,x=u,y,T,C,L,D,E;if(p!==0)for(var M=0;M!==_;M++)m[M].updateSolveMassProperties();var R=l,B=h,P=a;R.length=p,B.length=p,P.length=p;for(var M=0;M!==p;M++){var q=g[M];P[M]=0,B[M]=q.computeB(x),R[M]=1/q.computeC()}if(p!==0){for(var M=0;M!==_;M++){var W=m[M],ot=W.vlambda,V=W.wlambda;ot.set(0,0,0),V&&V.set(0,0,0)}for(d=0;d!==f;d++){L=0;for(var I=0;I!==p;I++){var q=g[I];y=B[I],T=R[I],E=P[I],D=q.computeGWlambda(),C=T*(y-D-q.eps*E),E+C<q.minForce?C=q.minForce-E:E+C>q.maxForce&&(C=q.maxForce-E),P[I]+=C,L+=C>0?C:-C,q.addToWlambda(C)}if(L*L<v)break}for(var M=0;M!==_;M++){var W=m[M],Q=W.velocity,Y=W.angularVelocity;Q.vadd(W.vlambda,Q),Y&&Y.vadd(W.wlambda,Y)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,a){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var a=this.equations,l=a.indexOf(s);l!==-1&&a.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,i){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function a(m){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=m,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new r;var l=[],h=[],u={bodies:[]},c=s.STATIC;function d(m){for(var _=m.length,x=0;x!==_;x++){var y=m[x];if(!y.visited&&!(y.body.type&c))return y}return!1}var f=[];function v(m,_,x,y){for(f.push(m),m.visited=!0,_(m,x,y);f.length;)for(var T=f.pop(),C;C=d(T.children);)C.visited=!0,_(C,x,y),f.push(C)}function g(m,_,x){_.push(m.body);for(var y=m.eqs.length,T=0;T!==y;T++){var C=m.eqs[T];x.indexOf(C)===-1&&x.push(C)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(m,_){for(var x=l,y=this.nodePool,T=_.bodies,C=this.equations,L=C.length,D=T.length,E=this.subsolver;y.length<D;)y.push(this.createNode());x.length=D;for(var M=0;M<D;M++)x[M]=y[M];for(var M=0;M!==D;M++){var R=x[M];R.body=T[M],R.children.length=0,R.eqs.length=0,R.visited=!1}for(var B=0;B!==L;B++){var P=C[B],M=T.indexOf(P.bi),q=T.indexOf(P.bj),W=x[M],ot=x[q];W.children.push(ot),W.eqs.push(P),ot.children.push(W),ot.eqs.push(P)}var V,I=0,Q=h;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var Y=u;V=d(x);){Q.length=0,Y.bodies.length=0,v(V,g,Y.bodies,Q);var O=Q.length;Q=Q.sort(p);for(var M=0;M!==O;M++)E.addEquation(Q[M]);E.solve(m,Y),E.removeAllEquations(),I++}return I};function p(m,_){return _.id-m.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[s]===void 0&&(l[s]=[]),l[s].indexOf(a)===-1&&l[s].push(a),this},hasEventListener:function(s,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[s]!==void 0&&l[s].indexOf(a)!==-1},removeEventListener:function(s,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[s]===void 0)return this;var h=l[s].indexOf(a);return h!==-1&&l[s].splice(h,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var a=this._listeners,l=a[s.type];if(l!==void 0){s.target=this;for(var h=0,u=l.length;h<u;h++)l[h].call(this,s)}return this}}},{}],50:[function(e,n,i){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=l;function a(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new r,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,a.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new a,a.prototype.reset=function(c,d){this.children.length=this.data.length=0},a.prototype.insert=function(c,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var p=!1;g.length||(this.subdivide(),p=!0);for(var m=0;m!==8;m++)if(g[m].insert(c,d,f+1))return!0;p&&(g.length=0)}return v.push(d),!0};var h=new s;a.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,v=this.children;v.push(new a({aabb:new r({lowerBound:new s(0,0,0)})}),new a({aabb:new r({lowerBound:new s(1,0,0)})}),new a({aabb:new r({lowerBound:new s(1,1,0)})}),new a({aabb:new r({lowerBound:new s(1,1,1)})}),new a({aabb:new r({lowerBound:new s(0,1,1)})}),new a({aabb:new r({lowerBound:new s(0,0,1)})}),new a({aabb:new r({lowerBound:new s(1,0,1)})}),new a({aabb:new r({lowerBound:new s(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var g=this.root||this,p=0;p!==8;p++){var m=v[p];m.root=g;var _=m.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(d,_),_.vadd(h,m.aabb.upperBound)}},a.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var u=new r;a.prototype.rayQuery=function(c,d,f){return c.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},a.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,a=0;a!==s;a++)this.objects.push(arguments[a])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,a){if(s>a){var l=a;a=s,s=l}return this.data[s+"-"+a]},r.prototype.set=function(s,a,l){if(s>a){var h=a;a=s,s=h}var u=s+"-"+a;this.get(s,a)||this.data.keys.push(u),this.data[u]=l},r.prototype.reset=function(){for(var s=this.data,a=s.keys;a.length>0;){var l=a.pop();delete s[l]}}},{}],53:[function(e,n,i){function r(){}n.exports=r,r.defaults=function(s,a){s=s||{};for(var l in a)l in s||(s[l]=a[l]);return s}},{}],54:[function(e,n,i){n.exports=a;var r=e("../math/Vec3"),s=e("./Pool");function a(){s.call(this),this.type=r}a.prototype=new s,a.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,i){n.exports=v;var r=e("../collision/AABB"),s=e("../shapes/Shape"),a=e("../collision/Ray"),l=e("../math/Vec3"),h=e("../math/Transform");e("../shapes/ConvexPolyhedron");var u=e("../math/Quaternion");e("../solver/Solver");var c=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(st){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=st,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(st,ft,_t,yt,Yt,Dt){var Tt;this.contactPointPool.length?(Tt=this.contactPointPool.pop(),Tt.bi=st,Tt.bj=ft):Tt=new d(st,ft),Tt.enabled=st.collisionResponse&&ft.collisionResponse&&_t.collisionResponse&&yt.collisionResponse;var It=this.currentContactMaterial;Tt.restitution=It.restitution,Tt.setSpookParams(It.contactEquationStiffness,It.contactEquationRelaxation,this.world.dt);var nt=_t.material||st.material,bt=yt.material||ft.material;return nt&&bt&&nt.restitution>=0&&bt.restitution>=0&&(Tt.restitution=nt.restitution*bt.restitution),Tt.si=Yt||_t,Tt.sj=Dt||yt,Tt},v.prototype.createFrictionEquationsFromContact=function(st,ft){var _t=st.bi,yt=st.bj,Yt=st.si,Dt=st.sj,Tt=this.world,It=this.currentContactMaterial,nt=It.friction,bt=Yt.material||_t.material,Nt=Dt.material||yt.material;if(bt&&Nt&&bt.friction>=0&&Nt.friction>=0&&(nt=bt.friction*Nt.friction),nt>0){var kt=nt*Tt.gravity.length(),w=_t.invMass+yt.invMass;w>0&&(w=1/w);var F=this.frictionEquationPool,H=F.length?F.pop():new f(_t,yt,kt*w),X=F.length?F.pop():new f(_t,yt,kt*w);return H.bi=X.bi=_t,H.bj=X.bj=yt,H.minForce=X.minForce=-kt*w,H.maxForce=X.maxForce=kt*w,H.ri.copy(st.ri),H.rj.copy(st.rj),X.ri.copy(st.ri),X.rj.copy(st.rj),st.ni.tangents(H.t,X.t),H.setSpookParams(It.frictionEquationStiffness,It.frictionEquationRelaxation,Tt.dt),X.setSpookParams(It.frictionEquationStiffness,It.frictionEquationRelaxation,Tt.dt),H.enabled=X.enabled=st.enabled,ft.push(H,X),!0}return!1};var g=new l,p=new l,m=new l;v.prototype.createFrictionFromAverage=function(st){var ft=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ft,this.frictionResult)||st===1)){var _t=this.frictionResult[this.frictionResult.length-2],yt=this.frictionResult[this.frictionResult.length-1];g.setZero(),p.setZero(),m.setZero();var Yt=ft.bi;ft.bj;for(var Dt=0;Dt!==st;Dt++)ft=this.result[this.result.length-1-Dt],ft.bodyA!==Yt?(g.vadd(ft.ni,g),p.vadd(ft.ri,p),m.vadd(ft.rj,m)):(g.vsub(ft.ni,g),p.vadd(ft.rj,p),m.vadd(ft.ri,m));var Tt=1/st;p.scale(Tt,_t.ri),m.scale(Tt,_t.rj),yt.ri.copy(_t.ri),yt.rj.copy(_t.rj),g.normalize(),g.tangents(_t.t,yt.t)}};var _=new l,x=new l,y=new u,T=new u;v.prototype.getContacts=function(st,ft,_t,yt,Yt,Dt,Tt){this.contactPointPool=Yt,this.frictionEquationPool=Tt,this.result=yt,this.frictionResult=Dt;for(var It=y,nt=T,bt=_,Nt=x,kt=0,w=st.length;kt!==w;kt++){var F=st[kt],H=ft[kt],X=null;F.material&&H.material&&(X=_t.getContactMaterial(F.material,H.material)||null);for(var j=0;j<F.shapes.length;j++){F.quaternion.mult(F.shapeOrientations[j],It),F.quaternion.vmult(F.shapeOffsets[j],bt),bt.vadd(F.position,bt);for(var tt=F.shapes[j],xt=0;xt<H.shapes.length;xt++){H.quaternion.mult(H.shapeOrientations[xt],nt),H.quaternion.vmult(H.shapeOffsets[xt],Nt),Nt.vadd(H.position,Nt);var Et=H.shapes[xt];if(!(bt.distanceTo(Nt)>tt.boundingSphereRadius+Et.boundingSphereRadius)){var zt=null;tt.material&&Et.material&&(zt=_t.getContactMaterial(tt.material,Et.material)||null),this.currentContactMaterial=zt||X||_t.defaultContactMaterial;var Lt=this[tt.type|Et.type];Lt&&(tt.type<Et.type?Lt.call(this,tt,Et,bt,Nt,It,nt,F,H,tt,Et):Lt.call(this,Et,tt,Nt,bt,nt,It,H,F,tt,Et))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(st,ft,_t,yt,Yt,Dt,Tt,It){st.convexPolyhedronRepresentation.material=st.material,ft.convexPolyhedronRepresentation.material=ft.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,ft.convexPolyhedronRepresentation,_t,yt,Yt,Dt,Tt,It,st,ft)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(st,ft,_t,yt,Yt,Dt,Tt,It){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,ft,_t,yt,Yt,Dt,Tt,It,st,ft)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(st,ft,_t,yt,Yt,Dt,Tt,It){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexParticle(st.convexPolyhedronRepresentation,ft,_t,yt,Yt,Dt,Tt,It,st,ft)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=this.createContactEquation(Tt,It,st,ft);yt.vsub(_t,nt.ni),nt.ni.normalize(),nt.ri.copy(nt.ni),nt.rj.copy(nt.ni),nt.ri.mult(st.radius,nt.ri),nt.rj.mult(-ft.radius,nt.rj),nt.ri.vadd(_t,nt.ri),nt.ri.vsub(Tt.position,nt.ri),nt.rj.vadd(yt,nt.rj),nt.rj.vsub(It.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)};var C=new l,L=new l,D=new l;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=new l,bt=C;bt.set(0,0,1),Yt.vmult(bt,bt);for(var Nt=0;Nt<ft.vertices.length/3;Nt++){ft.getVertex(Nt,nt);var kt=new l;kt.copy(nt),h.pointToWorldFrame(yt,Dt,kt,nt);var w=L;nt.vsub(_t,w);var F=bt.dot(w);if(F<=0){var H=this.createContactEquation(Tt,It,st,ft);H.ni.copy(bt);var X=D;bt.scale(w.dot(bt),X),nt.vsub(X,X),H.ri.copy(X),H.ri.vsub(Tt.position,H.ri),H.rj.copy(nt),H.rj.vsub(It.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}};var E=new l,M=new l;new l;var R=new l,B=new l,P=new l,q=new l,W=new l,ot=new l,V=new l,I=new l,Q=new l,Y=new l,O=new l,J=new r,z=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=P,bt=q,Nt=W,kt=ot,w=V,F=I,H=J,X=B,j=M,tt=z;h.pointToLocalFrame(yt,Dt,_t,w);var xt=st.radius;H.lowerBound.set(w.x-xt,w.y-xt,w.z-xt),H.upperBound.set(w.x+xt,w.y+xt,w.z+xt),ft.getTrianglesInAABB(H,tt);for(var Et=R,zt=st.radius*st.radius,Lt=0;Lt<tt.length;Lt++)for(var Ft=0;Ft<3;Ft++)if(ft.getVertex(ft.indices[tt[Lt]*3+Ft],Et),Et.vsub(w,j),j.norm2()<=zt){X.copy(Et),h.pointToWorldFrame(yt,Dt,X,Et),Et.vsub(_t,j);var At=this.createContactEquation(Tt,It,st,ft);At.ni.copy(j),At.ni.normalize(),At.ri.copy(At.ni),At.ri.scale(st.radius,At.ri),At.ri.vadd(_t,At.ri),At.ri.vsub(Tt.position,At.ri),At.rj.copy(Et),At.rj.vsub(It.position,At.rj),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}for(var Lt=0;Lt<tt.length;Lt++)for(var Ft=0;Ft<3;Ft++){ft.getVertex(ft.indices[tt[Lt]*3+Ft],nt),ft.getVertex(ft.indices[tt[Lt]*3+(Ft+1)%3],bt),bt.vsub(nt,Nt),w.vsub(bt,F);var he=F.dot(Nt);w.vsub(nt,F);var me=F.dot(Nt);if(me>0&&he<0){w.vsub(nt,F),kt.copy(Nt),kt.normalize(),me=F.dot(kt),kt.scale(me,F),F.vadd(nt,F);var ye=F.distanceTo(w);if(ye<st.radius){var At=this.createContactEquation(Tt,It,st,ft);F.vsub(w,At.ni),At.ni.normalize(),At.ni.scale(st.radius,At.ri),h.pointToWorldFrame(yt,Dt,F,F),F.vsub(It.position,At.rj),h.vectorToWorldFrame(Dt,At.ni,At.ni),h.vectorToWorldFrame(Dt,At.ri,At.ri),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}}}for(var Le=Q,Jt=Y,Ht=O,Ke=E,Lt=0,$t=tt.length;Lt!==$t;Lt++){ft.getTriangleVertices(tt[Lt],Le,Jt,Ht),ft.getNormal(tt[Lt],Ke),w.vsub(Le,F);var ye=F.dot(Ke);if(Ke.scale(ye,F),w.vsub(F,F),ye=F.distanceTo(w),a.pointInTriangle(F,Le,Jt,Ht)&&ye<st.radius){var At=this.createContactEquation(Tt,It,st,ft);F.vsub(w,At.ni),At.ni.normalize(),At.ni.scale(st.radius,At.ri),h.pointToWorldFrame(yt,Dt,F,F),F.vsub(It.position,At.rj),h.vectorToWorldFrame(Dt,At.ni,At.ni),h.vectorToWorldFrame(Dt,At.ri,At.ri),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}}tt.length=0};var A=new l,b=new l;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=this.createContactEquation(Tt,It,st,ft);if(nt.ni.set(0,0,1),Dt.vmult(nt.ni,nt.ni),nt.ni.negate(nt.ni),nt.ni.normalize(),nt.ni.mult(st.radius,nt.ri),_t.vsub(yt,A),nt.ni.mult(nt.ni.dot(A),b),A.vsub(b,nt.rj),-A.dot(nt.ni)<=st.radius){var bt=nt.ri,Nt=nt.rj;bt.vadd(_t,bt),bt.vsub(Tt.position,bt),Nt.vadd(yt,Nt),Nt.vsub(It.position,Nt),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}};var k=new l,$=new l,it=new l;function K(st,ft,_t){for(var yt=null,Yt=st.length,Dt=0;Dt!==Yt;Dt++){var Tt=st[Dt],It=k;st[(Dt+1)%Yt].vsub(Tt,It);var nt=$;It.cross(ft,nt);var bt=it;_t.vsub(Tt,bt);var Nt=nt.dot(bt);if(yt===null||Nt>0&&yt===!0||Nt<=0&&yt===!1){yt===null&&(yt=Nt>0);continue}else return!1}return!0}var N=new l,ut=new l,vt=new l,Mt=new l,dt=[new l,new l,new l,new l,new l,new l],rt=new l,lt=new l,Vt=new l,Ot=new l;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=this.v3pool,bt=dt;_t.vsub(yt,N),ft.getSideNormals(bt,Dt);for(var Nt=st.radius,kt=!1,w=lt,F=Vt,H=Ot,X=null,j=0,tt=0,xt=0,Et=null,zt=0,Lt=bt.length;zt!==Lt&&kt===!1;zt++){var Ft=ut;Ft.copy(bt[zt]);var At=Ft.norm();Ft.normalize();var he=N.dot(Ft);if(he<At+Nt&&he>0){var me=vt,ye=Mt;me.copy(bt[(zt+1)%3]),ye.copy(bt[(zt+2)%3]);var Le=me.norm(),Jt=ye.norm();me.normalize(),ye.normalize();var Ht=N.dot(me),Ke=N.dot(ye);if(Ht<Le&&Ht>-Le&&Ke<Jt&&Ke>-Jt){var Re=Math.abs(he-At-Nt);(Et===null||Re<Et)&&(Et=Re,tt=Ht,xt=Ke,X=At,w.copy(Ft),F.copy(me),H.copy(ye),j++)}}}if(j){kt=!0;var Qt=this.createContactEquation(Tt,It,st,ft);w.mult(-Nt,Qt.ri),Qt.ni.copy(w),Qt.ni.negate(Qt.ni),w.mult(X,w),F.mult(tt,F),w.vadd(F,w),H.mult(xt,H),w.vadd(H,Qt.rj),Qt.ri.vadd(_t,Qt.ri),Qt.ri.vsub(Tt.position,Qt.ri),Qt.rj.vadd(yt,Qt.rj),Qt.rj.vsub(It.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}for(var $t=nt.get(),ze=rt,Ve=0;Ve!==2&&!kt;Ve++)for(var be=0;be!==2&&!kt;be++)for(var Ce=0;Ce!==2&&!kt;Ce++)if($t.set(0,0,0),Ve?$t.vadd(bt[0],$t):$t.vsub(bt[0],$t),be?$t.vadd(bt[1],$t):$t.vsub(bt[1],$t),Ce?$t.vadd(bt[2],$t):$t.vsub(bt[2],$t),yt.vadd($t,ze),ze.vsub(_t,ze),ze.norm2()<Nt*Nt){kt=!0;var Qt=this.createContactEquation(Tt,It,st,ft);Qt.ri.copy(ze),Qt.ri.normalize(),Qt.ni.copy(Qt.ri),Qt.ri.mult(Nt,Qt.ri),Qt.rj.copy($t),Qt.ri.vadd(_t,Qt.ri),Qt.ri.vsub(Tt.position,Qt.ri),Qt.rj.vadd(yt,Qt.rj),Qt.rj.vsub(It.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}nt.release($t),$t=null;for(var ve=nt.get(),Fe=nt.get(),Qt=nt.get(),Se=nt.get(),Re=nt.get(),In=bt.length,Ve=0;Ve!==In&&!kt;Ve++)for(var be=0;be!==In&&!kt;be++)if(Ve%3!==be%3){bt[be].cross(bt[Ve],ve),ve.normalize(),bt[Ve].vadd(bt[be],Fe),Qt.copy(_t),Qt.vsub(Fe,Qt),Qt.vsub(yt,Qt);var wn=Qt.dot(ve);ve.mult(wn,Se);for(var Ce=0;Ce===Ve%3||Ce===be%3;)Ce++;Re.copy(_t),Re.vsub(Se,Re),Re.vsub(Fe,Re),Re.vsub(yt,Re);var nu=Math.abs(wn),iu=Re.norm();if(nu<bt[Ce].norm()&&iu<Nt){kt=!0;var Te=this.createContactEquation(Tt,It,st,ft);Fe.vadd(Se,Te.rj),Te.rj.copy(Te.rj),Re.negate(Te.ni),Te.ni.normalize(),Te.ri.copy(Te.rj),Te.ri.vadd(yt,Te.ri),Te.ri.vsub(_t,Te.ri),Te.ri.normalize(),Te.ri.mult(Nt,Te.ri),Te.ri.vadd(_t,Te.ri),Te.ri.vsub(Tt.position,Te.ri),Te.rj.vadd(yt,Te.rj),Te.rj.vsub(It.position,Te.rj),this.result.push(Te),this.createFrictionEquationsFromContact(Te,this.frictionResult)}}nt.release(ve,Fe,Qt,Se,Re)};var U=new l,S=new l,et=new l,at=new l,ct=new l,pt=new l,Rt=new l,St=new l,gt=new l,Wt=new l;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=this.v3pool;_t.vsub(yt,U);for(var bt=ft.faceNormals,Nt=ft.faces,kt=ft.vertices,w=st.radius,F=0;F!==kt.length;F++){var H=kt[F],X=ct;Dt.vmult(H,X),yt.vadd(X,X);var j=at;if(X.vsub(_t,j),j.norm2()<w*w){xt=!0;var tt=this.createContactEquation(Tt,It,st,ft);tt.ri.copy(j),tt.ri.normalize(),tt.ni.copy(tt.ri),tt.ri.mult(w,tt.ri),X.vsub(yt,tt.rj),tt.ri.vadd(_t,tt.ri),tt.ri.vsub(Tt.position,tt.ri),tt.rj.vadd(yt,tt.rj),tt.rj.vsub(It.position,tt.rj),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);return}}for(var xt=!1,F=0,Et=Nt.length;F!==Et&&xt===!1;F++){var zt=bt[F],Lt=Nt[F],Ft=pt;Dt.vmult(zt,Ft);var At=Rt;Dt.vmult(kt[Lt[0]],At),At.vadd(yt,At);var he=St;Ft.mult(-w,he),_t.vadd(he,he);var me=gt;he.vsub(At,me);var ye=me.dot(Ft),Le=Wt;if(_t.vsub(At,Le),ye<0&&Le.dot(Ft)>0){for(var Jt=[],Ht=0,Ke=Lt.length;Ht!==Ke;Ht++){var $t=nt.get();Dt.vmult(kt[Lt[Ht]],$t),yt.vadd($t,$t),Jt.push($t)}if(K(Jt,Ft,_t)){xt=!0;var tt=this.createContactEquation(Tt,It,st,ft);Ft.mult(-w,tt.ri),Ft.negate(tt.ni);var ze=nt.get();Ft.mult(-ye,ze);var Ve=nt.get();Ft.mult(-w,Ve),_t.vsub(yt,tt.rj),tt.rj.vadd(Ve,tt.rj),tt.rj.vadd(ze,tt.rj),tt.rj.vadd(yt,tt.rj),tt.rj.vsub(It.position,tt.rj),tt.ri.vadd(_t,tt.ri),tt.ri.vsub(Tt.position,tt.ri),nt.release(ze),nt.release(Ve),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);for(var Ht=0,be=Jt.length;Ht!==be;Ht++)nt.release(Jt[Ht]);return}else for(var Ht=0;Ht!==Lt.length;Ht++){var Ce=nt.get(),ve=nt.get();Dt.vmult(kt[Lt[(Ht+1)%Lt.length]],Ce),Dt.vmult(kt[Lt[(Ht+2)%Lt.length]],ve),yt.vadd(Ce,Ce),yt.vadd(ve,ve);var Fe=S;ve.vsub(Ce,Fe);var Qt=et;Fe.unit(Qt);var Se=nt.get(),Re=nt.get();_t.vsub(Ce,Re);var In=Re.dot(Qt);Qt.mult(In,Se),Se.vadd(Ce,Se);var wn=nt.get();if(Se.vsub(_t,wn),In>0&&In*In<Fe.norm2()&&wn.norm2()<w*w){var tt=this.createContactEquation(Tt,It,st,ft);Se.vsub(yt,tt.rj),Se.vsub(_t,tt.ni),tt.ni.normalize(),tt.ni.mult(w,tt.ri),tt.rj.vadd(yt,tt.rj),tt.rj.vsub(It.position,tt.rj),tt.ri.vadd(_t,tt.ri),tt.ri.vsub(Tt.position,tt.ri),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);for(var Ht=0,be=Jt.length;Ht!==be;Ht++)nt.release(Jt[Ht]);nt.release(Ce),nt.release(ve),nt.release(Se),nt.release(wn),nt.release(Re);return}nt.release(Ce),nt.release(ve),nt.release(Se),nt.release(wn),nt.release(Re)}for(var Ht=0,be=Jt.length;Ht!==be;Ht++)nt.release(Jt[Ht])}}},new l,new l,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(st,ft,_t,yt,Yt,Dt,Tt,It){ft.convexPolyhedronRepresentation.material=ft.material,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.planeConvex(st,ft.convexPolyhedronRepresentation,_t,yt,Yt,Dt,Tt,It)};var wt=new l,Gt=new l,ne=new l,qt=new l;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=wt,bt=Gt;bt.set(0,0,1),Yt.vmult(bt,bt);for(var Nt=0,kt=ne,w=0;w!==ft.vertices.length;w++){nt.copy(ft.vertices[w]),Dt.vmult(nt,nt),yt.vadd(nt,nt),nt.vsub(_t,kt);var F=bt.dot(kt);if(F<=0){var H=this.createContactEquation(Tt,It,st,ft),X=qt;bt.mult(bt.dot(kt),X),nt.vsub(X,X),X.vsub(_t,H.ri),H.ni.copy(bt),nt.vsub(yt,H.rj),H.ri.vadd(_t,H.ri),H.ri.vsub(Tt.position,H.ri),H.rj.vadd(yt,H.rj),H.rj.vsub(It.position,H.rj),this.result.push(H),Nt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(H,this.frictionResult)}}this.enableFrictionReduction&&Nt&&this.createFrictionFromAverage(Nt)};var Ut=new l,jt=new l;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(st,ft,_t,yt,Yt,Dt,Tt,It,nt,bt,Nt,kt){var w=Ut;if(!(_t.distanceTo(yt)>st.boundingSphereRadius+ft.boundingSphereRadius)&&st.findSeparatingAxis(ft,_t,Yt,yt,Dt,w,Nt,kt)){var F=[],H=jt;st.clipAgainstHull(_t,Yt,ft,yt,Dt,w,-100,100,F);for(var X=0,j=0;j!==F.length;j++){var tt=this.createContactEquation(Tt,It,st,ft,nt,bt),xt=tt.ri,Et=tt.rj;w.negate(tt.ni),F[j].normal.negate(H),H.mult(F[j].depth,H),F[j].point.vadd(H,xt),Et.copy(F[j].point),xt.vsub(_t,xt),Et.vsub(yt,Et),xt.vadd(_t,xt),xt.vsub(Tt.position,xt),Et.vadd(yt,Et),Et.vsub(It.position,Et),this.result.push(tt),X++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(tt,this.frictionResult)}this.enableFrictionReduction&&X&&this.createFrictionFromAverage(X)}};var ee=new l,ue=new l,Zt=new l;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=ee;nt.set(0,0,1),Tt.quaternion.vmult(nt,nt);var bt=ue;yt.vsub(Tt.position,bt);var Nt=nt.dot(bt);if(Nt<=0){var kt=this.createContactEquation(It,Tt,ft,st);kt.ni.copy(nt),kt.ni.negate(kt.ni),kt.ri.set(0,0,0);var w=Zt;nt.mult(nt.dot(yt),w),yt.vsub(w,w),kt.rj.copy(w),this.result.push(kt),this.createFrictionEquationsFromContact(kt,this.frictionResult)}};var Z=new l;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=Z;nt.set(0,0,1),yt.vsub(_t,nt);var bt=nt.norm2();if(bt<=st.radius*st.radius){var Nt=this.createContactEquation(It,Tt,ft,st);nt.normalize(),Nt.rj.copy(nt),Nt.rj.mult(st.radius,Nt.rj),Nt.ni.copy(nt),Nt.ni.negate(Nt.ni),Nt.ri.set(0,0,0),this.result.push(Nt),this.createFrictionEquationsFromContact(Nt,this.frictionResult)}};var mt=new u,ht=new l;new l;var Ct=new l,Pt=new l,re=new l;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=-1,bt=Ct,Nt=re,kt=null,w=ht;if(w.copy(yt),w.vsub(_t,w),Yt.conjugate(mt),mt.vmult(w,w),st.pointIsInside(w)){st.worldVerticesNeedsUpdate&&st.computeWorldVertices(_t,Yt),st.worldFaceNormalsNeedsUpdate&&st.computeWorldFaceNormals(Yt);for(var F=0,H=st.faces.length;F!==H;F++){var X=[st.worldVertices[st.faces[F][0]]],j=st.worldFaceNormals[F];yt.vsub(X[0],Pt);var tt=-j.dot(Pt);(kt===null||Math.abs(tt)<Math.abs(kt))&&(kt=tt,nt=F,bt.copy(j))}if(nt!==-1){var xt=this.createContactEquation(It,Tt,ft,st);bt.mult(kt,Nt),Nt.vadd(yt,Nt),Nt.vsub(_t,Nt),xt.rj.copy(Nt),bt.negate(xt.ni),xt.ri.set(0,0,0);var Et=xt.ri,zt=xt.rj;Et.vadd(yt,Et),Et.vsub(It.position,Et),zt.vadd(_t,zt),zt.vsub(Tt.position,zt),this.result.push(xt),this.createFrictionEquationsFromContact(xt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(st,ft,_t,yt,Yt,Dt,Tt,It){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexHeightfield(st.convexPolyhedronRepresentation,ft,_t,yt,Yt,Dt,Tt,It)};var ce=new l,de=new l,Ae=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=ft.data,bt=ft.elementSize,Nt=st.boundingSphereRadius,kt=de,w=Ae,F=ce;h.pointToLocalFrame(yt,Dt,_t,F);var H=Math.floor((F.x-Nt)/bt)-1,X=Math.ceil((F.x+Nt)/bt)+1,j=Math.floor((F.y-Nt)/bt)-1,tt=Math.ceil((F.y+Nt)/bt)+1;if(!(X<0||tt<0||H>nt.length||j>nt[0].length)){H<0&&(H=0),X<0&&(X=0),j<0&&(j=0),tt<0&&(tt=0),H>=nt.length&&(H=nt.length-1),X>=nt.length&&(X=nt.length-1),tt>=nt[0].length&&(tt=nt[0].length-1),j>=nt[0].length&&(j=nt[0].length-1);var xt=[];ft.getRectMinMax(H,j,X,tt,xt);var Et=xt[0],zt=xt[1];if(!(F.z-Nt>zt||F.z+Nt<Et))for(var Lt=H;Lt<X;Lt++)for(var Ft=j;Ft<tt;Ft++)ft.getConvexTrianglePillar(Lt,Ft,!1),h.pointToWorldFrame(yt,Dt,ft.pillarOffset,kt),_t.distanceTo(kt)<ft.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,ft.pillarConvex,_t,kt,Yt,Dt,Tt,It,null,null,w,null),ft.getConvexTrianglePillar(Lt,Ft,!0),h.pointToWorldFrame(yt,Dt,ft.pillarOffset,kt),_t.distanceTo(kt)<ft.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,ft.pillarConvex,_t,kt,Yt,Dt,Tt,It,null,null,w,null)}};var le=new l,pe=new l;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(st,ft,_t,yt,Yt,Dt,Tt,It){var nt=ft.data,bt=st.radius,Nt=ft.elementSize,kt=pe,w=le;h.pointToLocalFrame(yt,Dt,_t,w);var F=Math.floor((w.x-bt)/Nt)-1,H=Math.ceil((w.x+bt)/Nt)+1,X=Math.floor((w.y-bt)/Nt)-1,j=Math.ceil((w.y+bt)/Nt)+1;if(!(H<0||j<0||F>nt.length||j>nt[0].length)){F<0&&(F=0),H<0&&(H=0),X<0&&(X=0),j<0&&(j=0),F>=nt.length&&(F=nt.length-1),H>=nt.length&&(H=nt.length-1),j>=nt[0].length&&(j=nt[0].length-1),X>=nt[0].length&&(X=nt[0].length-1);var tt=[];ft.getRectMinMax(F,X,H,j,tt);var xt=tt[0],Et=tt[1];if(!(w.z-bt>Et||w.z+bt<xt))for(var zt=this.result,Lt=F;Lt<H;Lt++)for(var Ft=X;Ft<j;Ft++){var At=zt.length;ft.getConvexTrianglePillar(Lt,Ft,!1),h.pointToWorldFrame(yt,Dt,ft.pillarOffset,kt),_t.distanceTo(kt)<ft.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,ft.pillarConvex,_t,kt,Yt,Dt,Tt,It),ft.getConvexTrianglePillar(Lt,Ft,!0),h.pointToWorldFrame(yt,Dt,ft.pillarOffset,kt),_t.distanceTo(kt)<ft.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,ft.pillarConvex,_t,kt,Yt,Dt,Tt,It);var he=zt.length-At;if(he>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,i){n.exports=y;var r=e("../shapes/Shape"),s=e("../math/Vec3"),a=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var h=e("./Narrowphase"),u=e("../utils/EventTarget"),c=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),p=e("../collision/RaycastResult"),m=e("../collision/AABB"),_=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function y(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new x,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new u,new m;var T=new _;if(y.prototype.getContactMaterial=function(I,Q){return this.contactMaterialTable.get(I.id,Q.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var I=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=I,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(I){this.bodies.indexOf(I)===-1&&(I.index=this.bodies.length,this.bodies.push(I),I.world=this,I.initPosition.copy(I.position),I.initVelocity.copy(I.velocity),I.timeLastSleepy=this.time,I instanceof v&&(I.initAngularVelocity.copy(I.angularVelocity),I.initQuaternion.copy(I.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=I,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(I){this.constraints.push(I)},y.prototype.removeConstraint=function(I){var Q=this.constraints.indexOf(I);Q!==-1&&this.constraints.splice(Q,1)},y.prototype.rayTest=function(I,Q,Y){Y instanceof p?this.raycastClosest(I,Q,{skipBackfaces:!0},Y):this.raycastAll(I,Q,{skipBackfaces:!0},Y)},y.prototype.raycastAll=function(I,Q,Y,O){return Y.mode=_.ALL,Y.from=I,Y.to=Q,Y.callback=O,T.intersectWorld(this,Y)},y.prototype.raycastAny=function(I,Q,Y,O){return Y.mode=_.ANY,Y.from=I,Y.to=Q,Y.result=O,T.intersectWorld(this,Y)},y.prototype.raycastClosest=function(I,Q,Y,O){return Y.mode=_.CLOSEST,Y.from=I,Y.to=Q,Y.result=O,T.intersectWorld(this,Y)},y.prototype.remove=function(I){I.world=null;var Q=this.bodies.length-1,Y=this.bodies,O=Y.indexOf(I);if(O!==-1){Y.splice(O,1);for(var J=0;J!==Y.length;J++)Y[J].index=J;this.collisionMatrix.setNumObjects(Q),this.removeBodyEvent.body=I,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(I){this.materials.push(I)},y.prototype.addContactMaterial=function(I){this.contactmaterials.push(I),this.contactMaterialTable.set(I.materials[0].id,I.materials[1].id,I)},typeof performance>"u"&&(performance={}),!performance.now){var C=Date.now();performance.timing&&performance.timing.navigationStart&&(C=performance.timing.navigationStart),performance.now=function(){return Date.now()-C}}var L=new s;y.prototype.step=function(I,Q,Y){if(Y=Y||10,Q=Q||0,Q===0)this.internalStep(I),this.time+=I;else{var O=Math.floor((this.time+Q)/I)-Math.floor(this.time/I);O=Math.min(O,Y);for(var J=performance.now(),z=0;z!==O&&(this.internalStep(I),!(performance.now()-J>I*1e3));z++);this.time+=Q;for(var A=this.time%I,b=A/I,k=L,$=this.bodies,it=0;it!==$.length;it++){var K=$[it];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,k),k.scale(b,k),K.position.vadd(k,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var D={type:"postStep"},E={type:"preStep"},M={type:"collide",body:null,contact:null},R=[],B=[],P=[],q=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new a;var W=new a,ot=new a,V=new s;y.prototype.internalStep=function(I){this.dt=I;var Q=this.contacts,Y=P,O=q,J=this.numObjects(),z=this.bodies,A=this.solver,b=this.gravity,k=this.doProfiling,$=this.profile,it=v.DYNAMIC,K,N=this.constraints,ut=B;b.norm();var vt=b.x,Mt=b.y,dt=b.z,rt=0;for(k&&(K=performance.now()),rt=0;rt!==J;rt++){var lt=z[rt];if(lt.type&it){var Vt=lt.force,Ot=lt.mass;Vt.x+=Ot*vt,Vt.y+=Ot*Mt,Vt.z+=Ot*dt}}for(var rt=0,U=this.subsystems.length;rt!==U;rt++)this.subsystems[rt].update();k&&(K=performance.now()),Y.length=0,O.length=0,this.broadphase.collisionPairs(this,Y,O),k&&($.broadphase=performance.now()-K);var Ut=N.length;for(rt=0;rt!==Ut;rt++){var S=N[rt];if(!S.collideConnected)for(var et=Y.length-1;et>=0;et-=1)(S.bodyA===Y[et]&&S.bodyB===O[et]||S.bodyB===Y[et]&&S.bodyA===O[et])&&(Y.splice(et,1),O.splice(et,1))}this.collisionMatrixTick(),k&&(K=performance.now());var at=R,ct=Q.length;for(rt=0;rt!==ct;rt++)at.push(Q[rt]);Q.length=0;var pt=this.frictionEquations.length;for(rt=0;rt!==pt;rt++)ut.push(this.frictionEquations[rt]);this.frictionEquations.length=0,this.narrowphase.getContacts(Y,O,this,Q,at,this.frictionEquations,ut),k&&($.narrowphase=performance.now()-K),k&&(K=performance.now());for(var rt=0;rt<this.frictionEquations.length;rt++)A.addEquation(this.frictionEquations[rt]);for(var Rt=Q.length,St=0;St!==Rt;St++){var S=Q[St],lt=S.bi,gt=S.bj;S.si,S.sj;var Wt;if(lt.material&&gt.material?Wt=this.getContactMaterial(lt.material,gt.material)||this.defaultContactMaterial:Wt=this.defaultContactMaterial,Wt.friction,lt.material&&gt.material&&(lt.material.friction>=0&&gt.material.friction>=0&&lt.material.friction*gt.material.friction,lt.material.restitution>=0&&gt.material.restitution>=0&&(S.restitution=lt.material.restitution*gt.material.restitution)),A.addEquation(S),lt.allowSleep&&lt.type===v.DYNAMIC&&lt.sleepState===v.SLEEPING&&gt.sleepState===v.AWAKE&&gt.type!==v.STATIC){var wt=gt.velocity.norm2()+gt.angularVelocity.norm2(),Gt=Math.pow(gt.sleepSpeedLimit,2);wt>=Gt*2&&(lt._wakeUpAfterNarrowphase=!0)}if(gt.allowSleep&&gt.type===v.DYNAMIC&&gt.sleepState===v.SLEEPING&&lt.sleepState===v.AWAKE&&lt.type!==v.STATIC){var ne=lt.velocity.norm2()+lt.angularVelocity.norm2(),qt=Math.pow(lt.sleepSpeedLimit,2);ne>=qt*2&&(gt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(lt,gt,!0),this.collisionMatrixPrevious.get(lt,gt)||(M.body=gt,M.contact=S,lt.dispatchEvent(M),M.body=lt,gt.dispatchEvent(M))}for(k&&($.makeContactConstraints=performance.now()-K,K=performance.now()),rt=0;rt!==J;rt++){var lt=z[rt];lt._wakeUpAfterNarrowphase&&(lt.wakeUp(),lt._wakeUpAfterNarrowphase=!1)}var Ut=N.length;for(rt=0;rt!==Ut;rt++){var S=N[rt];S.update();for(var et=0,jt=S.equations.length;et!==jt;et++){var ee=S.equations[et];A.addEquation(ee)}}A.solve(I,this),k&&($.solve=performance.now()-K),A.removeAllEquations();var ue=Math.pow;for(rt=0;rt!==J;rt++){var lt=z[rt];if(lt.type&it){var Zt=ue(1-lt.linearDamping,I),Z=lt.velocity;Z.mult(Zt,Z);var mt=lt.angularVelocity;if(mt){var ht=ue(1-lt.angularDamping,I);mt.mult(ht,mt)}}}for(this.dispatchEvent(E),rt=0;rt!==J;rt++){var lt=z[rt];lt.preStep&&lt.preStep.call(lt)}k&&(K=performance.now());var Ct=W,Pt=ot,re=this.stepnumber,ce=v.DYNAMIC|v.KINEMATIC,de=re%(this.quatNormalizeSkip+1)===0,Ae=this.quatNormalizeFast,le=I*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,rt=0;rt!==J;rt++){var pe=z[rt],st=pe.force,ft=pe.torque;if(pe.type&ce&&pe.sleepState!==v.SLEEPING){var _t=pe.velocity,yt=pe.angularVelocity,Yt=pe.position,Dt=pe.quaternion,Tt=pe.invMass,It=pe.invInertiaWorld;_t.x+=st.x*Tt*I,_t.y+=st.y*Tt*I,_t.z+=st.z*Tt*I,pe.angularVelocity&&(It.vmult(ft,V),V.mult(I,V),V.vadd(yt,yt)),Yt.x+=_t.x*I,Yt.y+=_t.y*I,Yt.z+=_t.z*I,pe.angularVelocity&&(Ct.set(yt.x,yt.y,yt.z,0),Ct.mult(Dt,Pt),Dt.x+=le*Pt.x,Dt.y+=le*Pt.y,Dt.z+=le*Pt.z,Dt.w+=le*Pt.w,de&&(Ae?Dt.normalizeFast():Dt.normalize())),pe.aabb&&(pe.aabbNeedsUpdate=!0),pe.updateInertiaWorld&&pe.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,k&&($.integrate=performance.now()-K),this.time+=I,this.stepnumber+=1,this.dispatchEvent(D),rt=0;rt!==J;rt++){var lt=z[rt],nt=lt.postStep;nt&&nt.call(lt)}if(this.allowSleep)for(rt=0;rt!==J;rt++)z[rt].sleepTick(this.time)},y.prototype.clearForces=function(){for(var I=this.bodies,Q=I.length,Y=0;Y!==Q;Y++){var O=I[Y];O.force,O.torque,O.force.set(0,0,0),O.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Lh);var Ie=Lh.exports;const yc=105,Ih=1500,An=new G(3.875,.5,4),Qn=An.z/2*.9,M0=.825,S0=.2,Nh=.01,Dh=120,E0=500,w0=50,T0=3,A0=4.25,b0=5.88,R0=6.57*1.2,C0=.85,P0=1.2,L0=.5,I0=1.5,N0=.47,D0=.53,U0=1.95,F0=2.05,B0=63e-5,Uh=new Event("restartplay");function O0(o){const t=+this._x.call(null,o),e=+this._y.call(null,o);return Fh(this.cover(t,e),t,e,o)}function Fh(o,t,e,n){if(isNaN(t)||isNaN(e))return o;var i,r=o._root,s={data:n},a=o._x0,l=o._y0,h=o._x1,u=o._y1,c,d,f,v,g,p,m,_;if(!r)return o._root=s,o;for(;r.length;)if((g=t>=(c=(a+h)/2))?a=c:h=c,(p=e>=(d=(l+u)/2))?l=d:u=d,i=r,!(r=r[m=p<<1|g]))return i[m]=s,o;if(f=+o._x.call(null,r.data),v=+o._y.call(null,r.data),t===f&&e===v)return s.next=r,i?i[m]=s:o._root=s,o;do i=i?i[m]=new Array(4):o._root=new Array(4),(g=t>=(c=(a+h)/2))?a=c:h=c,(p=e>=(d=(l+u)/2))?l=d:u=d;while((m=p<<1|g)===(_=(v>=d)<<1|f>=c));return i[_]=r,i[m]=s,o}function z0(o){var t,e,n=o.length,i,r,s=new Array(n),a=new Array(n),l=1/0,h=1/0,u=-1/0,c=-1/0;for(e=0;e<n;++e)isNaN(i=+this._x.call(null,t=o[e]))||isNaN(r=+this._y.call(null,t))||(s[e]=i,a[e]=r,i<l&&(l=i),i>u&&(u=i),r<h&&(h=r),r>c&&(c=r));if(l>u||h>c)return this;for(this.cover(l,h).cover(u,c),e=0;e<n;++e)Fh(this,s[e],a[e],o[e]);return this}function V0(o,t){if(isNaN(o=+o)||isNaN(t=+t))return this;var e=this._x0,n=this._y0,i=this._x1,r=this._y1;if(isNaN(e))i=(e=Math.floor(o))+1,r=(n=Math.floor(t))+1;else{for(var s=i-e||1,a=this._root,l,h;e>o||o>=i||n>t||t>=r;)switch(h=(t<n)<<1|o<e,l=new Array(4),l[h]=a,a=l,s*=2,h){case 0:i=e+s,r=n+s;break;case 1:e=i-s,r=n+s;break;case 2:i=e+s,n=r-s;break;case 3:e=i-s,n=r-s;break}this._root&&this._root.length&&(this._root=a)}return this._x0=e,this._y0=n,this._x1=i,this._y1=r,this}function H0(){var o=[];return this.visit(function(t){if(!t.length)do o.push(t.data);while(t=t.next)}),o}function k0(o){return arguments.length?this.cover(+o[0][0],+o[0][1]).cover(+o[1][0],+o[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Je(o,t,e,n,i){this.node=o,this.x0=t,this.y0=e,this.x1=n,this.y1=i}function G0(o,t,e){var n,i=this._x0,r=this._y0,s,a,l,h,u=this._x1,c=this._y1,d=[],f=this._root,v,g;for(f&&d.push(new Je(f,i,r,u,c)),e==null?e=1/0:(i=o-e,r=t-e,u=o+e,c=t+e,e*=e);v=d.pop();)if(!(!(f=v.node)||(s=v.x0)>u||(a=v.y0)>c||(l=v.x1)<i||(h=v.y1)<r))if(f.length){var p=(s+l)/2,m=(a+h)/2;d.push(new Je(f[3],p,m,l,h),new Je(f[2],s,m,p,h),new Je(f[1],p,a,l,m),new Je(f[0],s,a,p,m)),(g=(t>=m)<<1|o>=p)&&(v=d[d.length-1],d[d.length-1]=d[d.length-1-g],d[d.length-1-g]=v)}else{var _=o-+this._x.call(null,f.data),x=t-+this._y.call(null,f.data),y=_*_+x*x;if(y<e){var T=Math.sqrt(e=y);i=o-T,r=t-T,u=o+T,c=t+T,n=f.data}}return n}function W0(o){if(isNaN(u=+this._x.call(null,o))||isNaN(c=+this._y.call(null,o)))return this;var t,e=this._root,n,i,r,s=this._x0,a=this._y0,l=this._x1,h=this._y1,u,c,d,f,v,g,p,m;if(!e)return this;if(e.length)for(;;){if((v=u>=(d=(s+l)/2))?s=d:l=d,(g=c>=(f=(a+h)/2))?a=f:h=f,t=e,!(e=e[p=g<<1|v]))return this;if(!e.length)break;(t[p+1&3]||t[p+2&3]||t[p+3&3])&&(n=t,m=p)}for(;e.data!==o;)if(i=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,i?(r?i.next=r:delete i.next,this):t?(r?t[p]=r:delete t[p],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(n?n[m]=e:this._root=e),this):(this._root=r,this)}function X0(o){for(var t=0,e=o.length;t<e;++t)this.remove(o[t]);return this}function q0(){return this._root}function Y0(){var o=0;return this.visit(function(t){if(!t.length)do++o;while(t=t.next)}),o}function j0(o){var t=[],e,n=this._root,i,r,s,a,l;for(n&&t.push(new Je(n,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!o(n=e.node,r=e.x0,s=e.y0,a=e.x1,l=e.y1)&&n.length){var h=(r+a)/2,u=(s+l)/2;(i=n[3])&&t.push(new Je(i,h,u,a,l)),(i=n[2])&&t.push(new Je(i,r,u,h,l)),(i=n[1])&&t.push(new Je(i,h,s,a,u)),(i=n[0])&&t.push(new Je(i,r,s,h,u))}return this}function K0(o){var t=[],e=[],n;for(this._root&&t.push(new Je(this._root,this._x0,this._y0,this._x1,this._y1));n=t.pop();){var i=n.node;if(i.length){var r,s=n.x0,a=n.y0,l=n.x1,h=n.y1,u=(s+l)/2,c=(a+h)/2;(r=i[0])&&t.push(new Je(r,s,a,u,c)),(r=i[1])&&t.push(new Je(r,u,a,l,c)),(r=i[2])&&t.push(new Je(r,s,c,u,h)),(r=i[3])&&t.push(new Je(r,u,c,l,h))}e.push(n)}for(;n=e.pop();)o(n.node,n.x0,n.y0,n.x1,n.y1);return this}function Z0(o){return o[0]}function $0(o){return arguments.length?(this._x=o,this):this._x}function Q0(o){return o[1]}function J0(o){return arguments.length?(this._y=o,this):this._y}function Bh(o,t,e){var n=new Ea(t??Z0,e??Q0,NaN,NaN,NaN,NaN);return o==null?n:n.addAll(o)}function Ea(o,t,e,n,i,r){this._x=o,this._y=t,this._x0=e,this._y0=n,this._x1=i,this._y1=r,this._root=void 0}function xc(o){for(var t={data:o.data},e=t;o=o.next;)e=e.next={data:o.data};return t}var en=Bh.prototype=Ea.prototype;en.copy=function(){var o=new Ea(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,n;if(!t)return o;if(!t.length)return o._root=xc(t),o;for(e=[{source:t,target:o._root=new Array(4)}];t=e.pop();)for(var i=0;i<4;++i)(n=t.source[i])&&(n.length?e.push({source:n,target:t.target[i]=new Array(4)}):t.target[i]=xc(n));return o};en.add=O0;en.addAll=z0;en.cover=V0;en.data=H0;en.extent=k0;en.find=G0;en.remove=W0;en.removeAll=X0;en.root=q0;en.size=Y0;en.visit=j0;en.visitAfter=K0;en.x=$0;en.y=J0;const Oh=Math.sqrt(3),t_=.5*(Oh-1),Ir=(3-Oh)/6,Mc=o=>Math.floor(o)|0,Sc=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function e_(o=Math.random){const t=n_(o),e=new Float64Array(t).map(i=>Sc[i%12*2]),n=new Float64Array(t).map(i=>Sc[i%12*2+1]);return function(r,s){let a=0,l=0,h=0;const u=(r+s)*t_,c=Mc(r+u),d=Mc(s+u),f=(c+d)*Ir,v=c-f,g=d-f,p=r-v,m=s-g;let _,x;p>m?(_=1,x=0):(_=0,x=1);const y=p-_+Ir,T=m-x+Ir,C=p-1+2*Ir,L=m-1+2*Ir,D=c&255,E=d&255;let M=.5-p*p-m*m;if(M>=0){const P=D+t[E],q=e[P],W=n[P];M*=M,a=M*M*(q*p+W*m)}let R=.5-y*y-T*T;if(R>=0){const P=D+_+t[E+x],q=e[P],W=n[P];R*=R,l=R*R*(q*y+W*T)}let B=.5-C*C-L*L;if(B>=0){const P=D+1+t[E+1],q=e[P],W=n[P];B*=B,h=B*B*(q*C+W*L)}return 70*(a+l+h)}}function n_(o){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(o()*(256-n)),r=e[n];e[n]=e[i],e[i]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}var zh={exports:{}};(function(o,t){(function(e,n){o.exports=n()})(y0,function(){return e.importState=function(i){var r=new e;return r.importState(i),r},e;function e(){return function(i){var r=0,s=0,a=0,l=1;i.length==0&&(i=[+new Date]);var h=n();r=h(" "),s=h(" "),a=h(" ");for(var u=0;u<i.length;u++)r-=h(i[u]),r<0&&(r+=1),s-=h(i[u]),s<0&&(s+=1),a-=h(i[u]),a<0&&(a+=1);h=null;var c=function(){var d=2091639*r+l*23283064365386963e-26;return r=s,s=a,a=d-(l=d|0)};return c.next=c,c.uint32=function(){return c()*4294967296},c.fract53=function(){return c()+(c()*2097152|0)*11102230246251565e-32},c.version="Alea 0.9",c.args=i,c.exportState=function(){return[r,s,a,l]},c.importState=function(d){r=+d[0]||0,s=+d[1]||0,a=+d[2]||0,l=+d[3]||0},c}(Array.prototype.slice.call(arguments))}function n(){var i=4022871197,r=function(s){s=s.toString();for(var a=0;a<s.length;a++){i+=s.charCodeAt(a);var l=.02519603282416938*i;i=l>>>0,l-=i,l*=i,i=l>>>0,l-=i,i+=l*4294967296}return(i>>>0)*23283064365386963e-26};return r.version="Mash 0.9",r}})})(zh);var i_=zh.exports;const kn=x0(i_),Tn=[{id:"6aeda305-3ccc-49c8-88d9-08a491d07b8f"},{id:"7f404916-ef74-4fca-892e-4e4cdc20c1b9"},{id:"d505ae4f-deb3-4ca0-a0df-e0143265f469"},{id:"4e4281b5-7d19-4658-8380-7721f93c8aa6"},{id:"c153d8c3-a448-44af-971c-c195c4670f01"},{id:"9abb4ef9-3274-434d-9f1e-4e4214e4eada"},{id:"e7174a3b-262f-4cc4-ba08-da919a030f65"},{id:"1d4eea48-6f44-4941-8635-28bae01f07e8"},{id:"11b813f5-4f57-42b8-affe-4203aae883ba"},{id:"fa3e1b2a-9a80-4396-b58d-1e7eadd4124f"},{id:"ad6b907c-6672-431d-bc28-9b3611b704f4"},{id:"8153abf8-ca2e-4f8a-8f02-6b301d49e440"},{id:"bee7195c-2603-4f32-8f9a-84cc9ed58e0d"},{id:"663c437d-3efe-4080-8e36-287d3a301733"},{id:"acadd25c-ce2d-4b4c-b2c8-2a171b52cdaa"},{id:"a9cd6e50-6d1c-4586-af6e-ab2682e3eb55"},{id:"c2f54730-b8e1-4087-b3cc-a80f49e16b38"},{id:"999bcf4e-3c2d-4c50-a4dc-df5e4e2d6d6d"},{id:"ff942509-db52-4d11-8127-b002eb593734"},{id:"995684e5-122a-4c74-959f-44058687ccf0"},{id:"46773150-ce22-4114-aefd-1e4ac9a1d65f"},{id:"37c31a0c-7904-4fca-8cee-02deb7e67db6"},{id:"790a7cd1-3524-4dcb-a813-38439be5c800"},{id:"ce64df0a-a178-47bc-908f-d037c4722830"},{id:"8eac66e4-0eea-479f-a78b-f6b7d670b622"},{id:"e78a689d-b3df-42c1-ba5c-9533bd3bd44a"},{id:"a7f0f0ac-b319-4edb-bc0a-1354c3b2e3d7"},{id:"d783574c-6327-4077-85dd-165584a0c01e"},{id:"14ac5fd9-2281-4d4d-8c83-24e4e4ed68e0"},{id:"9495a192-73a1-4e17-945e-b040155188c0"},{id:"b5c04318-25cb-4b4f-807b-99af8f5f9086"},{id:"18cfef7f-c7e2-4318-937c-7cdec9d97282"},{id:"35317548-b99e-4b60-94ce-15466b5b99c8"},{id:"5215e600-bda0-4bb8-aa22-74fe315476f0"},{id:"a864c3d5-fa26-4136-9b7c-2332d28cdf7b"},{id:"6dd8c446-d3da-40d8-9e15-d620ca5d7ea1"},{id:"de5cbfd2-863c-4f7a-adac-b731e870fc5b"},{id:"22461132-a2a0-4b07-b295-e4540280aaea"},{id:"7ea66bea-3d76-41dd-8a9e-ba5fcea8f095"},{id:"528bed4c-5c81-480c-8a35-b74e8e8efc23"},{id:"4d5e2bb6-dae4-46c7-9a21-5aba59aa817f"},{id:"bab24a7c-f93f-4384-9999-115a9a8460d2"},{id:"42a4dadb-b14e-4a5c-977a-7f8532d2effc"},{id:"71d13df3-679d-4e3a-be04-e65ebccdf081"},{id:"1ab29bce-90d5-4b88-a89b-16294b683661"},{id:"039ce56b-7704-407a-acfc-00b52f654668"},{id:"50ab1c77-b1c0-4daf-9573-e0307e3b7a54"},{id:"4e7dd5c0-2737-4b1f-865a-f8ed1a5086dd"},{id:"5b47d3ea-163a-4ee5-85a3-fe0db1c2231b"},{id:"251e0088-c278-4180-b01b-326929ee8026"}];console.log("Total levels:",Tn.length);let Ne=Tn[0];function r_(o){Ne=o}function s_(o){return new G(o.x,o.y,o.z)}function Qi(o){return new Ie.Vec3(o.x,o.y,o.z)}new ma({color:0});function Ws(o,t,e){return o+Math.floor(e()*(t-o+1))}function Xs(o,t,e){return o+e()*(t-o)}function Vh(o,t,e){const n=kn(e);return o+Math.floor(n()*(t-o+1))}function wi(o,t,e){const n=kn(e);return o+n()*(t-o)}function Hh(o){var t=Math.floor(o/60),e=o%60;return t+":"+(e<10?"0":"")+e.toFixed(2)}const kh=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);function o_(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}const a_=o_();class l_{constructor(t,e,n=42){Xt(this,"width");Xt(this,"height");Xt(this,"noise",[]);Xt(this,"heightmap");Xt(this,"octaves");Xt(this,"minValue",1/0);Xt(this,"avgDiff",0);Xt(this,"maxDiff",0);this.width=t,this.height=e,this.octaves=Vh(3,6,`octaves_${Ne.id}`),console.log("Octaves: ",this.octaves);for(let i=0;i<this.octaves;i++){const r=kn(`heightmap_${Ne.id}_${i}`);this.noise.push(e_(r))}this.heightmap=[]}generateHeightmap(t){let e=wi(C0,P0,`frequency_multiplier_${Ne.id}_1`);console.log("Frequency multiplier:",e);const n=wi(L0,I0,`heightmap_power_${Ne.id}_1`);console.log("Heightmap power:",n);const i=wi(N0,D0,`persistence_${Ne.id}`);console.log("Persistence:",i);const r=wi(U0,F0,`lacunarity_${Ne.id}`);console.log("Lacunarity:",r),this.avgDiff=0;let s=0;return this.heightmap=Array(this.height).fill(null).map((a,l)=>Array(this.width).fill(null).map((h,u)=>{let c=1,d=1*e,f=0;for(let g=0;g<this.octaves;g++){let p=this.noise[g]((u-this.width*.5)/30*d,l/30*d)*c;p=(p+1)/2,p=p**n,f+=p,c*=i,d*=r}let v=f;return v=v**n,this.minValue=Math.min(v,this.minValue),u>0&&(this.maxDiff=Math.max(this.maxDiff,Math.abs(v-s)),this.avgDiff+=(v-this.avgDiff)/((this.width-1)*this.height)),s=v,v})),this.heightmap}}const Ec=10;class wc{constructor(t,e,n){Xt(this,"body");Xt(this,"pos");Xt(this,"dim");Xt(this,"color");this.pos=t,this.dim=e,this.color=n}top(){return this.pos.y+this.dim.y/2}}var qr;class c_{constructor(){Xt(this,"squareDim");eo(this,qr);Xt(this,"terrainArr",[]);Xt(this,"minHeight");Xt(this,"maxZIndex");Xt(this,"finishZ");this.squareDim=wi(T0,A0,`square_dim_${Ne.id}`),console.log("Square dim:",this.squareDim);const t=this.getColorArr(),e=Math.floor(Dh/this.squareDim),n=Math.floor(E0/this.squareDim);this.maxZIndex=n-1,this.finishZ=-this.squareDim*n;const i=new l_(e,n),r=i.generateHeightmap(this.squareDim);let s=wi(b0,R0,`height_multiplier_${Ne.id}`);console.log("Height multiplier: ",s),s/=i.maxDiff,this.minHeight=i.minValue*s;const a=kn("colors2_"+Ne.id),l=this.terrainArr,h=new G(this.squareDim,Ec,this.squareDim);for(let v=0;v<n;v++){l.push([]);for(let g=0;g<e;g++){const p=new G((g-e/2)*this.squareDim,-Ec/2+.1+r[v][g]*s,-v*this.squareDim),m=Ws(0,t.length-1,a),_=t[m],x=new wc(p,h,_);l[l.length-1].push(x)}}const u=Math.ceil(w0/this.squareDim),c=l[l.length-1],d=new Kt(4473924),f=new Kt(16777215);for(let v=0;v<u;v++){l.push([]);for(let g=0;g<e;g++){const p=(g+v)%2===0?d:f,m=new G((g-e/2)*this.squareDim,c[g].pos.y,(-v-n)*this.squareDim),_=new wc(m,h,p);l[l.length-1].push(_)}}no(this,qr,Bh().x(v=>v.pos.x).y(v=>v.pos.z).addAll(l.flat())),this.raiseStartingPosition()}getColorArr(){const t=[],e=kn("colors_hue_"+Ne.id),n=6,i=kn("colors_value"+Ne.id);for(let r=0;r<256;r++){const s=Xs(60,85,i);let a=Gh()+Ws(-n,n,e);a=(a+360)%360,t.push(new Kt(`hsl(${a}, 30%, ${s}%)`))}return t}raiseStartingPosition(){const t=this.closestSquares(new G(0,0,0),this.squareDim*1.9),e=Math.max(...t.map(n=>n.pos.y));t.forEach(n=>{n.pos.y=e})}closestSquares(t,e=this.squareDim/2+Qn*1.1){return h_(to(this,qr),t.x-e,t.z-e,t.x+e,t.z+e)}}qr=new WeakMap;const Gh=()=>Vh(0,360,`colors_hue_middle_${Ne.id}_6`);function h_(o,t,e,n,i){const r=[];return o.visit((s,a,l,h,u)=>{if(!s.length)do{const c=s.data,d=c.pos.x,f=c.pos.z;d>=t&&d<n&&f>=e&&f<i&&r.push(c)}while(s=s.next);return a>=n||l>=i||h<t||u<e}),r}let Me;function u_(){Me=new c_}const qs=200,d_=new Ri(1,1,1);let vi;const f_=new _a({color:8947848}),Tc=new ie,p_=new En().setFromEuler(new dn(0,0,0));function m_(o){const t=Me.closestSquares(o,qs);vi&&vi.removeFromParent(),vi=new Th(d_,f_,t.length),vi.receiveShadow=!0;let e=0;for(let n of t)Tc.compose(n.pos,p_,n.dim),vi.setMatrixAt(e,Tc),vi.setColorAt(e,n.color),e++;gn.add(vi)}let Ho="hsl(209, 62.20%, 72.00%)";const ei=new Qe(69,wa(),2,qs+20),ai=new Ug({antialias:!0});ai.shadowMap.enabled=!0;ai.shadowMap.type=Gc;document.body.appendChild(ai.domElement);let gn,He;function Wh(){Ho=`hsl(${(209+wi(-10,10,`sky_color_hue_range_${Ne.id}_5`)+360)%360}, 62.20%, 72.00%)`,ai.setClearColor(Ho),gn=new Fg;const e=(Gh()+180)%360,n=new l0(new Kt(`hsl(${e}, 100%, 96%)`),3.3*1.175);gn.add(n),He=new Ph(16777215,8),He.position.set(-.38,3,.3),He.castShadow=!0,He.shadow.mapSize.width=512,He.shadow.mapSize.height=512,He.shadow.camera.near=.1,He.shadow.camera.far=100,He.shadow.radius=1;const i=7;He.shadow.camera.left=-i,He.shadow.camera.right=i,He.shadow.camera.top=i,He.shadow.camera.bottom=-i,gn.add(He),gn.add(He.target),gn.add(He),gn.fog=new da(Ho,qs-120,qs-1)}Xh();Wh();function wa(){return window.innerWidth/window.innerHeight}function v_(){return wa()>=1}function Xh(){v_()?kh?ei.fov=59:ei.fov=69:ei.fov=94,ei.aspect=wa(),ei.updateProjectionMatrix(),ai.setSize(window.innerWidth,window.innerHeight),ai.setPixelRatio(window.devicePixelRatio),window.innerWidth*window.devicePixelRatio>3800&&ai.setPixelRatio(window.devicePixelRatio*.75)}window.addEventListener("resize",Xh);var Vr=function(){var o=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(u){u.preventDefault(),n(++o%t.children.length)},!1);function e(u){return t.appendChild(u.dom),u}function n(u){for(var c=0;c<t.children.length;c++)t.children[c].style.display=c===u?"block":"none";o=u}var i=(performance||Date).now(),r=i,s=0,a=e(new Vr.Panel("FPS","#0ff","#002")),l=e(new Vr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=e(new Vr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){s++;var u=(performance||Date).now();if(l.update(u-i,200),u>=r+1e3&&(a.update(s*1e3/(u-r),100),r=u,s=0,h)){var c=performance.memory;h.update(c.usedJSHeapSize/1048576,c.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:t,setMode:n}};Vr.Panel=function(o,t,e){var n=1/0,i=0,r=Math.round,s=r(window.devicePixelRatio||1),a=80*s,l=48*s,h=3*s,u=2*s,c=3*s,d=15*s,f=74*s,v=30*s,g=document.createElement("canvas");g.width=a,g.height=l,g.style.cssText="width:80px;height:48px";var p=g.getContext("2d");return p.font="bold "+9*s+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=e,p.fillRect(0,0,a,l),p.fillStyle=t,p.fillText(o,h,u),p.fillRect(c,d,f,v),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(c,d,f,v),{dom:g,update:function(m,_){n=Math.min(n,m),i=Math.max(i,m),p.fillStyle=e,p.globalAlpha=1,p.fillRect(0,0,a,d),p.fillStyle=t,p.fillText(r(m)+" "+o+" ("+r(n)+"-"+r(i)+")",h,u),p.drawImage(g,c+s,d,f-s,v,c,d,f-s,v),p.fillRect(c+f-s,d,s,v),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(c+f-s,d,s,r((1-m/_)*v))}}};var Yr;class g_{constructor(){eo(this,Yr);no(this,Yr,document.querySelector("#debug-info"))}set(t){to(this,Yr).innerText=t.toString()}}Yr=new WeakMap;const Ac=new g_;class __{constructor(){Xt(this,"upDown",0);Xt(this,"leftRight",0);Xt(this,"jumpHoldStart",null);Xt(this,"prevGamepad",!1);document.addEventListener("keydown",this.keyDown.bind(this)),document.addEventListener("keyup",this.keyUp.bind(this)),this.initTouchTurning();const t=document.querySelector("#gas");t.addEventListener("touchstart",()=>{this.upDown=1}),t.addEventListener("touchend",()=>this.upDown=0);const e=document.querySelector("#reverse");e.addEventListener("touchstart",()=>{this.upDown=-1}),e.addEventListener("touchend",()=>this.upDown=0)}initTouchTurning(){const t=document.querySelector("#left"),e=document.querySelector("#right");let n=!1,i=0,r=0;t.addEventListener("touchstart",s=>{s.preventDefault(),this.leftRight=-1,i++,t.classList.add("active"),e.classList.remove("active")}),t.addEventListener("touchend",s=>{try{if(this.prevGamepad=!1,i--,this.leftRight===-1||n)if(!(n&&this.leftRight===-1)||i===0)this.leftRight=0,n=!1,e.classList.remove("active"),t.classList.remove("active"),r&&(this.leftRight=1,e.classList.add("active"));else{let a=e.getBoundingClientRect(),l=a.width;s.targetTouches[0].pageX-a.left>0&&(this.leftRight=1,t.classList.remove("active"),e.classList.add("active"))}s.targetTouches.length<=1&&(n=!1,this.leftRight=0,i=0,r=0)}catch{n=!1,this.leftRight=0,i=0,r=0}}),t.addEventListener("touchmove",s=>{try{if(this.prevGamepad=!1,r)return;let a=t.getBoundingClientRect(),l=a.width;s.targetTouches[0].pageX-a.left>l?n||(t.classList.remove("active"),e.classList.add("active"),this.leftRight=1,n=!0):(n=!1,e.classList.remove("active"),t.classList.add("active"),this.leftRight=-1)}catch{}}),e.addEventListener("touchstart",s=>{this.prevGamepad=!1,s.preventDefault(),r++,e.classList.add("active"),t.classList.remove("active"),this.leftRight=1}),e.addEventListener("touchend",s=>{try{if(this.prevGamepad=!1,r--,this.leftRight===1||n)if(!(n&&this.leftRight===1)||r===0)t.classList.remove("active"),e.classList.remove("active"),this.leftRight=0,n=!1,i&&(this.leftRight=-1,t.classList.add("active"),Ac.set(3));else{let a=t.getBoundingClientRect(),l=a.width;s.targetTouches[0].pageX-a.left<l&&(this.leftRight=-1,t.classList.add("active"),e.classList.remove("active"),Ac.set(2))}s.targetTouches.length<=1&&(n=!1,this.leftRight=0,i=0,r=0)}catch{n=!1,this.leftRight=0,i=0,r=0}}),e.addEventListener("touchmove",s=>{try{if(this.prevGamepad=!1,i)return;let a=e.getBoundingClientRect(),l=a.width;s.targetTouches[0].pageX-a.left<0?n||(e.classList.remove("active"),t.classList.add("active"),this.leftRight=-1,n=!0):(t.classList.remove("active"),e.classList.add("active"),this.leftRight=1,n=!1)}catch{}})}handleGamepads(){try{const t=navigator.getGamepads();if(!t)return;const e=t[0];if(!e||!e.buttons||e.buttons.length<1||(e.buttons.length>=8&&(e.buttons[0].pressed?(this.prevGamepad=!0,this.jumpHoldStart===null&&(this.jumpHoldStart=Date.now()/1e3)):this.prevGamepad&&(this.jumpHoldStart=null),e.buttons[6].value>.15?(this.prevGamepad=!0,this.upDown=-e.buttons[6].value):this.prevGamepad&&this.upDown<0&&(this.upDown=0,this.prevGamepad=!1),e.buttons[7].value>.15?(this.prevGamepad=!0,this.upDown=e.buttons[7].value):this.prevGamepad&&this.upDown>0&&(this.upDown=0,this.prevGamepad=!1)),!e.axes||e.axes.length<2))return;const n=e.axes[0];if(Math.abs(n)<.15){this.prevGamepad&&(this.leftRight=0);return}else this.prevGamepad=!0,this.leftRight=n}catch{}}keyDown(t){switch(this.prevGamepad=!1,t.code){case"KeyA":case"ArrowLeft":this.leftRight=-1;break;case"KeyD":case"ArrowRight":this.leftRight=1;break;case"KeyW":case"ArrowUp":this.upDown=1;break;case"KeyS":case"ArrowDown":this.upDown=-1;break;case"Space":this.jumpHoldStart===null&&(this.jumpHoldStart=Date.now()/1e3);break}}keyUp(t){switch(this.prevGamepad=!1,t.code){case"KeyA":case"ArrowLeft":this.leftRight===-1&&(this.leftRight=0);break;case"KeyD":case"ArrowRight":this.leftRight===1&&(this.leftRight=0);break;case"KeyS":case"ArrowDown":this.upDown===-1&&(this.upDown=0);break;case"KeyW":case"ArrowUp":this.upDown===1&&(this.upDown=0);break;case"Space":this.jumpHoldStart=null;break}}}const er=new __;let Ti;function y_(){return Ti=new Ie.World,Ti.gravity.set(0,-9.82,0),Ti}const x_=.4,M_=.2,S_=4e4,E_=.5,w_=.075,Cs=16,qh=3e4*2,Yh=6e3,T_=qh*2,A_=Yh*2*16*8;class b_{constructor(t,e,n,i){Xt(this,"obj3D",new Ee);Xt(this,"carBody");Xt(this,"frozen",!1);Xt(this,"oldForward",new G(0,0,-1));Xt(this,"closestBodies",[]);Xt(this,"oldCloseTerrain",[]);Xt(this,"oldVelocity",0);Xt(this,"rotation",0);this.carBody=n,i=i.clone(),i.rotation.z=Math.PI/2,i.scale.copy(new G(.5,.5,.5)),this.obj3D.attach(i),this.obj3D.position.copy(t),e.attach(this.obj3D)}fixedUpdate(t){if(this.frozen||t<=0)return;const e=this.getWorldPos(),n=this.getWorldVel(e);this.handleCloseTerrain(e),this.handleSteering(),this.obj3D.children.length&&(this.obj3D.children[0].position.y=0);const i=this.getSpokeHitResult(e,n);this.updateRotation(i.haveContact,n,t),this.handleGas(e,i),i.haveContact&&(this.handleBumping(n,e,i.totalOffsetVec),this.handelSupport(e,n,i),this.handleFriction(t,e,n))}handleCloseTerrain(t){this.oldCloseTerrain.forEach(n=>{n.body&&(Ti.removeBody(n.body),n.body=void 0)});const e=Me.closestSquares(t);this.closestBodies=[],this.oldCloseTerrain=e,e.forEach(n=>{if(n.body){this.closestBodies.push(n.body);return}const i=R_(n.dim,n.pos);n.body=i,Ti.addBody(i),this.closestBodies.push(i)})}updateRotation(t,e,n){const i=this.obj3D.children[0];if(!i)return;const r=this.oldVelocity;if(t){const h=this.getForwardDir(),u=s_(e);var s=Math.sign(u.dot(h));const c=s*e.norm();this.oldVelocity=c}const l=r*n/(Math.PI*Qn);this.rotation+=l,this.rotation=this.rotation%(Math.PI*2),i.rotation.x=-this.rotation*Math.PI}getSpokeHitResult(t,e){const n=[],i=this.getForwardDir();let r=this.getDir(Ps),s=r.clone();s.y=0,s.length()>.05&&(r=s.normalize());const a=new G;let l=i.clone().multiplyScalar(-1),h=i.clone();for(let c=0;c<Cs;c++){let d=c*Math.PI/Cs*2;const f=i.clone().applyAxisAngle(r,d),v=this.rayCast(t,Qi(f.clone().multiplyScalar(Qn)));if(v===-1)continue;f.dot(i)>l.dot(i)&&(l=f.clone()),f.dot(i)<h.dot(i)&&(h=f.clone());var u=Qn-v;const g=f.clone().multiplyScalar(-u);n.push(g),a.add(g)}return{offsetVecs:n,totalOffsetVec:a,mostForward:l,mostBackward:h,haveContact:!!n.length}}handleBumping(t,e,n){const i=n.clone();if(i.y=0,i.length()/Cs<.05)return;i.normalize();const r=i,s=Math.abs(r.dot(t));let a=Math.abs(n.dot(r))*T_-s*A_;a=Math.max(0,a)/Cs,this.carBody.applyForce(Qi(r).mult(a*1),e)}getForwardDir(){const t=this.getDir(Ps),e=new G(0,1,0).applyAxisAngle(t,-Math.PI/2);return e.y=0,e.length()<.05?this.oldForward.clone():(e.normalize(),this.oldForward=e,e)}getDir(t){const e=new En;this.obj3D.getWorldQuaternion(e);const n=t.clone();return n.applyQuaternion(e),n}handleFriction(t,e,n){const i=Qi(this.getDir(Ps));i.y=0,i.normalize();const a=-i.dot(n)*M_/t,l=Ih*.25*a,h=i.clone().mult(l),u=e.clone();u.y-=Qn*w_,this.carBody.applyForce(h,u)}handleSteering(){let t=1;this.obj3D.position.z<0&&(t=-1),this.obj3D.rotation.y=er.leftRight*x_*t}handleGas(t,e){if(e.haveContact){const n=this.getDir(Ps),i=er.upDown>=0?e.mostForward:e.mostBackward,r=i.clone().applyAxisAngle(n,Math.PI/2),s=Qi(r),a=S_*.25*er.upDown,l=s.clone().mult(a),h=t.vadd(Qi(i).mult(Qn*E_));this.carBody.applyForce(l,h)}else{const n=er.upDown*30;(Math.abs(n)>Math.abs(this.oldVelocity)||Math.sign(n*this.oldVelocity)==-1)&&(this.oldVelocity=n);return}}handelSupport(t,e,n){const i=this.getUpOffest(n);if(this.obj3D.children.length){const l=new G(0,1,0);this.obj3D.children[0].position.y=i,this.getDir(l).y<0&&(this.obj3D.children[0].position.y=-i)}const s=new Ie.Vec3(0,1,0).dot(e);let a=i*qh-s*Yh;a=Math.max(0,a),this.carBody.applyForce(new Ie.Vec3(0,a,0),t)}getUpOffest(t){let e=0;const n=new G(0,1,0);for(let i of t.offsetVecs)e+=n.dot(i);return e/=t.offsetVecs.length,e}getWorldPos(){const t=new G;return this.obj3D.getWorldPosition(t),Qi(t)}getWorldVel(t){const e=new Ie.Vec3;return this.carBody.getVelocityAtWorldPoint(t,e),e}rayCast(t,e){const n=t.clone().vadd(e),i=new Ie.Ray(t,n);i.checkCollisionResponse=!1,i.skipBackfaces=!0,i.mode=Ie.Ray.CLOSEST;const r=new Ie.RaycastResult;return i.intersectBodies(this.closestBodies,r),r.distance}rayCastDown(t){return this.rayCast(t,new Ie.Vec3(0,-Qn,0))}}const Ps=new G(1,0,0),bc=new Ie.Material("terr material");function R_(o,t){const e=new Ie.Box(new Ie.Vec3(o.x/2,o.y/2,o.z/2));bc.friction=Nh;const n=new Ie.Body({mass:0,type:Ie.Body.STATIC,shape:e,material:bc});return n.position.x=t.x,n.position.y=t.y,n.position.z=t.z,n}function Rc(o,t){if(t===Ju)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(t===Zo||t===th){let e=o.getIndex();if(e===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),e=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=e.count-2,i=[];if(t===Zo)for(let s=1;s<=n;s++)i.push(e.getX(0)),i.push(e.getX(s)),i.push(e.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(e.getX(s)),i.push(e.getX(s+1)),i.push(e.getX(s+2))):(i.push(e.getX(s+2)),i.push(e.getX(s+1)),i.push(e.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),o}class C_ extends xr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new D_(e)}),this.register(function(e){return new U_(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new X_(e)}),this.register(function(e){return new q_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new O_(e)}),this.register(function(e){return new z_(e)}),this.register(function(e){return new V_(e)}),this.register(function(e){return new N_(e)}),this.register(function(e){return new H_(e)}),this.register(function(e){return new F_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new k_(e)}),this.register(function(e){return new L_(e)}),this.register(function(e){return new Y_(e)}),this.register(function(e){return new j_(e)})}load(t,e,n,i){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const h=zr.extractUrlBase(t);s=zr.resolveURL(h,this.path)}else s=zr.extractUrlBase(t);this.manager.itemStart(t);const a=function(h){i?i(h):console.error(h),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Ch(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(h){try{r.parse(h,s,function(u){e(u),r.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const s={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===jh){try{s[ae.KHR_BINARY_GLTF]=new K_(t)}catch(c){i&&i(c);return}r=JSON.parse(s[ae.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new ly(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,s[c.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const c=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(c){case ae.KHR_MATERIALS_UNLIT:s[c]=new I_;break;case ae.KHR_DRACO_MESH_COMPRESSION:s[c]=new Z_(r,this.dracoLoader);break;case ae.KHR_TEXTURE_TRANSFORM:s[c]=new $_;break;case ae.KHR_MESH_QUANTIZATION:s[c]=new Q_;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(s),h.setPlugins(a),h.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function P_(){let o={};return{get:function(t){return o[t]},add:function(t,e){o[t]=e},remove:function(t){delete o[t]},removeAll:function(){o={}}}}const ae={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class L_{constructor(t){this.parser=t,this.name=ae.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let h;const u=new Kt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],We);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Ph(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new o0(u),h.distance=c;break;case"spot":h=new r0(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Jn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(h),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class I_{constructor(){this.name=ae.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(t,e,n){const i=[];t.color=new Kt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],We),t.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ye))}return Promise.all(i)}}class N_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class D_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(e.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new te(a,a)}return Promise.all(r)}}class U_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class F_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(e.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(e.iridescenceIOR=s.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class B_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Kt(0,0,0),e.sheenRoughness=0,e.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],We)}return s.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",s.sheenColorTexture,Ye)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class O_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(e.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class z_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];e.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",s.thicknessTexture)),e.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return e.attenuationColor=new Kt().setRGB(a[0],a[1],a[2],We),Promise.all(r)}}class V_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class H_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];e.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return e.specularColor=new Kt().setRGB(a[0],a[1],a[2],We),s.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",s.specularColorTexture,Ye)),Promise.all(r)}}class k_{constructor(t){this.parser=t,this.name=ae.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return e.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",s.bumpTexture)),Promise.all(r)}}class G_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(e.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(e.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class W_{constructor(t){this.parser=t,this.name=ae.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=e.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,s)}}class X_{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const s=r.extensions[e],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(t,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class q_{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const s=r.extensions[e],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(t,s.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Y_{constructor(t){this.name=ae.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,h=i.byteLength||0,u=i.count,c=i.byteStride,d=new Uint8Array(a,l,h);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,c,d,i.mode,i.filter).then(function(f){return f.buffer}):s.ready.then(function(){const f=new ArrayBuffer(u*c);return s.decodeGltfBuffer(new Uint8Array(f),u,c,d,i.mode,i.filter),f})})}else return null}}class j_{constructor(t){this.name=ae.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==cn.TRIANGLES&&h.mode!==cn.TRIANGLE_STRIP&&h.mode!==cn.TRIANGLE_FAN&&h.mode!==void 0)return null;const s=n.extensions[this.name].attributes,a=[],l={};for(const h in s)a.push(this.parser.getDependency("accessor",s[h]).then(u=>(l[h]=u,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const v of c){const g=new ie,p=new G,m=new En,_=new G(1,1,1),x=new Th(v.geometry,v.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,g.compose(p,m,_));for(const y in l)if(y==="_COLOR_0"){const T=l[y];x.instanceColor=new Jo(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&v.geometry.setAttribute(y,l[y]);Ee.prototype.copy.call(x,v),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const jh="glTF",Nr=12,Cc={JSON:1313821514,BIN:5130562};class K_{constructor(t){this.name=ae.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Nr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==jh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Nr,r=new DataView(t,Nr);let s=0;for(;s<i;){const a=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===Cc.JSON){const h=new Uint8Array(t,Nr+s,a);this.content=n.decode(h)}else if(l===Cc.BIN){const h=Nr+s;this.body=t.slice(h,h+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Z_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ae.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,a={},l={},h={};for(const u in s){const c=ea[u]||u.toLowerCase();a[c]=s[u]}for(const u in t.attributes){const c=ea[u]||u.toLowerCase();if(s[u]!==void 0){const d=n.accessors[t.attributes[u]],f=sr[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(c,d){i.decodeDracoFile(u,function(f){for(const v in f.attributes){const g=f.attributes[v],p=l[v];p!==void 0&&(g.normalized=p)}c(f)},a,h,We,d)})})}}class $_{constructor(){this.name=ae.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Q_{constructor(){this.name=ae.KHR_MESH_QUANTIZATION}}class Kh extends Kr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let s=0;s!==i;s++)e[s]=n[r+s];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,u=i-e,c=(n-e)/u,d=c*c,f=d*c,v=t*h,g=v-h,p=-2*f+3*d,m=f-d,_=1-p,x=m-d+c;for(let y=0;y!==a;y++){const T=s[g+y+a],C=s[g+y+l]*u,L=s[v+y+a],D=s[v+y]*u;r[y]=_*T+x*C+p*L+m*D}return r}}const J_=new En;class ty extends Kh{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return J_.fromArray(r).normalize().toArray(r),r}}const cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pc={9728:ke,9729:an,9984:Xc,9985:Ds,9986:Ur,9987:Vn},Lc={33071:ni,33648:Bs,10497:lr},ko={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ea={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ey={CUBICSPLINE:void 0,LINEAR:hr,STEP:kr},Go={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ny(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Xr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),o.DefaultMaterial}function gi(o,t,e){for(const n in e.extensions)o[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Jn(o,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(o.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function iy(o,t,e){let n=!1,i=!1,r=!1;for(let h=0,u=t.length;h<u;h++){const c=t[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(o);const s=[],a=[],l=[];for(let h=0,u=t.length;h<u;h++){const c=t[h];if(n){const d=c.POSITION!==void 0?e.getDependency("accessor",c.POSITION):o.attributes.position;s.push(d)}if(i){const d=c.NORMAL!==void 0?e.getDependency("accessor",c.NORMAL):o.attributes.normal;a.push(d)}if(r){const d=c.COLOR_0!==void 0?e.getDependency("accessor",c.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=c),r&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function ry(o,t){if(o.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)o.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(o.morphTargetInfluences.length===e.length){o.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)o.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sy(o){let t;const e=o.extensions&&o.extensions[ae.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Wo(e.attributes):t=o.indices+":"+Wo(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)t+=":"+Wo(o.targets[n]);return t}function Wo(o){let t="";const e=Object.keys(o).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+o[e[n]]+";";return t}function na(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oy(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ay=new ie;class ly{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new P_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new ya(this.options.manager):this.textureLoader=new c0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ch(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return gi(r,a,i),Jn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const s=e[i].joints;for(let a=0,l=s.length;a<l;a++)t[s[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const s=t[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[h,u]of s.children.entries())r(u,a.children[h])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,s){return n.getDependency(t,s)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ae.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(zr.resolveURL(e.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const s=ko[i.type],a=sr[i.componentType],l=i.normalized===!0,h=new a(i.count*s);return Promise.resolve(new tn(h,s,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=ko[i.type],h=sr[i.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,p;if(f&&f!==c){const m=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=e.cache.get(_);x||(g=new h(a,m*f,i.count*f/u),x=new xh(g,f/u),e.cache.add(_,x)),p=new Wr(x,l,d%f/u,v)}else a===null?g=new h(i.count*l):g=new h(a,d,i.count*l),p=new tn(g,l,v);if(i.sparse!==void 0){const m=ko.SCALAR,_=sr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new _(s[1],x,i.sparse.count*m),C=new h(s[2],y,i.sparse.count*l);a!==null&&(p=new tn(p.array.slice(),p.itemSize,p.normalized));for(let L=0,D=T.length;L<D;L++){const E=T[L];if(p.setX(E,C[L*l]),l>=2&&p.setY(E,C[L*l+1]),l>=3&&p.setZ(E,C[L*l+2]),l>=4&&p.setW(E,C[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,s=e.images[r];let a=this.textureLoader;if(s.uri){const l=n.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,s=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=s.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[s.sampler]||{};return u.magFilter=Pc[d.magFilter]||an,u.minFilter=Pc[d.minFilter]||Vn,u.wrapS=Lc[d.wrapS]||lr,u.wrapT=Lc[d.wrapT]||lr,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(c=>c.clone());const s=i.images[t],a=self.URL||self.webkitURL;let l=s.uri||"",h=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:s.mimeType});return l=a.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let v=d;e.isImageBitmapLoader===!0&&(v=function(g){const p=new Oe(g);p.needsUpdate=!0,d(p)}),e.load(zr.resolveURL(c,r.path),v,void 0,f)})}).then(function(c){return h===!0&&a.revokeObjectURL(l),c.userData.mimeType=s.mimeType||oy(s.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),r.extensions[ae.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ae.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(s);s=r.extensions[ae.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,l)}}return i!==void 0&&(s.colorSpace=i),t[e]=s,s})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,s=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ah,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ma,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Xr}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let s;const a={},l=r.extensions||{},h=[];if(l[ae.KHR_MATERIALS_UNLIT]){const c=i[ae.KHR_MATERIALS_UNLIT];s=c.getMaterialType(),h.push(c.extendParams(a,r,e))}else{const c=r.pbrMetallicRoughness||{};if(a.color=new Kt(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],We),a.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(e.assignTexture(a,"map",c.baseColorTexture,Ye)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(e.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),h.push(e.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=_n);const u=r.alphaMode||Go.OPAQUE;if(u===Go.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Go.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==ii&&(h.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){const c=r.normalTexture.scale;a.normalScale.set(c,c)}if(r.occlusionTexture!==void 0&&s!==ii&&(h.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==ii){const c=r.emissiveFactor;a.emissive=new Kt().setRGB(c[0],c[1],c[2],We)}return r.emissiveTexture!==void 0&&s!==ii&&h.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ye)),Promise.all(h).then(function(){const c=new s(a);return r.name&&(c.name=r.name),Jn(c,r),e.associations.set(c,{materials:t}),r.extensions&&gi(i,c,r),c})}createUniqueName(t){const e=_e.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ae.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Ic(l,a,e)})}const s=[];for(let a=0,l=t.length;a<l;a++){const h=t[a],u=sy(h),c=i[u];if(c)s.push(c.promise);else{let d;h.extensions&&h.extensions[ae.KHR_DRACO_MESH_COMPRESSION]?d=r(h):d=Ic(new fn,h,e),i[u]={primitive:h,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],s=r.primitives,a=[];for(let l=0,h=s.length;l<h;l++){const u=s[l].material===void 0?ny(this.cache):this.getDependency("material",s[l].material);a.push(u)}return a.push(e.loadGeometries(s)),Promise.all(a).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,v=u.length;f<v;f++){const g=u[f],p=s[f];let m;const _=h[f];if(p.mode===cn.TRIANGLES||p.mode===cn.TRIANGLE_STRIP||p.mode===cn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Og(g,_):new Ge(g,_),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===cn.TRIANGLE_STRIP?m.geometry=Rc(m.geometry,th):p.mode===cn.TRIANGLE_FAN&&(m.geometry=Rc(m.geometry,Zo));else if(p.mode===cn.LINES)m=new Hg(g,_);else if(p.mode===cn.LINE_STRIP)m=new va(g,_);else if(p.mode===cn.LINE_LOOP)m=new kg(g,_);else if(p.mode===cn.POINTS)m=new Gg(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&ry(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),Jn(m,r),p.extensions&&gi(i,m,p),e.assignFinalMaterial(m),c.push(m)}for(let f=0,v=c.length;f<v;f++)e.associations.set(c[f],{meshes:t,primitives:f});if(c.length===1)return r.extensions&&gi(i,c[0],r),c[0];const d=new Ei;r.extensions&&gi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,v=c.length;f<v;f++)d.add(c[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Qe(Ad.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ha(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Jn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),s=i,a=[],l=[];for(let h=0,u=s.length;h<u;h++){const c=s[h];if(c){a.push(c);const d=new ie;r!==null&&d.fromArray(r.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[h])}return new pa(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,s=[],a=[],l=[],h=[],u=[];for(let c=0,d=i.channels.length;c<d;c++){const f=i.channels[c],v=i.samplers[f.sampler],g=f.target,p=g.node,m=i.parameters!==void 0?i.parameters[v.input]:v.input,_=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(s.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",_)),h.push(v),u.push(g))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(c){const d=c[0],f=c[1],v=c[2],g=c[3],p=c[4],m=[];for(let _=0,x=d.length;_<x;_++){const y=d[_],T=f[_],C=v[_],L=g[_],D=p[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const E=n._createAnimationTracks(y,T,C,L,D);if(E)for(let M=0;M<E.length;M++)m.push(E[M])}return new Zg(r,void 0,m)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,h=i.weights.length;l<h;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),s=[],a=i.children||[];for(let h=0,u=a.length;h<u;h++)s.push(n.getDependency("node",a[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ay)});for(let f=0,v=c.length;f<v;f++)u.add(c[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],s=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){a.push(h)}),this.nodeCache[t]=Promise.all(a).then(function(h){let u;if(r.isBone===!0?u=new Eh:h.length>1?u=new Ei:h.length===1?u=h[0]:u=new Ee,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(r.name&&(u.userData.name=r.name,u.name=s),Jn(u,r),r.extensions&&gi(n,u,r),r.matrix!==void 0){const c=new ie;c.fromArray(r.matrix),u.applyMatrix4(c)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Ei;n.name&&(r.name=i.createUniqueName(n.name)),Jn(r,n),n.extensions&&gi(e,r,n);const s=n.nodes||[],a=[];for(let l=0,h=s.length;l<h;l++)a.push(i.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let u=0,c=l.length;u<c;u++)r.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of i.associations)(d instanceof hn||d instanceof Oe)&&c.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&c.set(d,f)}),c};return i.associations=h(r),r})}_createAnimationTracks(t,e,n,i,r){const s=[],a=t.name?t.name:t.uuid,l=[];$n[r.path]===$n.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let h;switch($n[r.path]){case $n.weights:h=fr;break;case $n.rotation:h=bi;break;case $n.position:case $n.scale:h=pr;break;default:switch(n.itemSize){case 1:h=fr;break;case 2:case 3:default:h=pr;break}break}const u=i.interpolation!==void 0?ey[i.interpolation]:hr,c=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const v=new h(l[d]+"."+$n[r.path],e.array,c,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),s.push(v)}return s}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=na(e.constructor),i=new Float32Array(e.length);for(let r=0,s=e.length;r<s;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof bi?ty:Kh;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cy(o,t,e){const n=t.attributes,i=new Wn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(i.set(new G(l[0],l[1],l[2]),new G(h[0],h[1],h[2])),a.normalized){const u=na(sr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new G,l=new G;for(let h=0,u=r.length;h<u;h++){const c=r[h];if(c.POSITION!==void 0){const d=e.json.accessors[c.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const g=na(sr[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new Cn;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function Ic(o,t,e){const n=t.attributes,i=[];function r(s,a){return e.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=ea[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(t.indices!==void 0&&!o.index){const s=e.getDependency("accessor",t.indices).then(function(a){o.setIndex(a)});i.push(s)}return fe.workingColorSpace!==We&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${fe.workingColorSpace}" not supported.`),Jn(o,t),cy(o,t,e),Promise.all(i).then(function(){return t.targets!==void 0?iy(o,t.targets,e):o})}const hy="/cubic-offroad-hosting/assets/truckWithoutWheels-DBph6hH8.glb",uy="/cubic-offroad-hosting/assets/wheel-BiNbC63B.glb",dy="/cubic-offroad-hosting/assets/Evacodemon_one_red-DjzKGJ3Z.png",Nc="FinishTimes";class fy{submit(t,e){const n=this.readTimes(),i=n[t]===void 0,r=e<n[t];if(i||r){n[t]=e;const s=JSON.stringify(n);localStorage.setItem(Nc,s)}}readTimes(){const t=localStorage.getItem(Nc);return t===null?{}:JSON.parse(t)}}const Zh=new fy;Array.prototype.findLastIndex||(Array.prototype.findLastIndex=function(o,t){for(let e=this.length-1;e>=0;e--)if(o.call(t,this[e],e,this))return e;return-1});const Dr=3;class py{constructor(){Xt(this,"screenDiv");Xt(this,"cardContainer");Xt(this,"cardTemplate");Xt(this,"active",!1);this.screenDiv=document.querySelector("#level-select-screen"),this.cardContainer=document.querySelector("#level-card-container"),this.cardTemplate=document.querySelector("#level-card-template")}activate(){this.active=!0,this.screenDiv.classList.add("visible"),this.cardContainer.innerHTML="";const t=Zh.readTimes();this.fillInTotals(t);let e=Tn.findLastIndex(r=>t[r.id]!==void 0),n=Dr-1;e!==-1&&(n=Math.ceil((e+1)/Dr)*Dr+Dr-1),n=Math.min(n,Tn.length-1);const i=Math.min(n+Dr,Tn.length-1);for(let r=0;r<=i;r++)this.addCard(r,t,r>n)}fillInTotals(t){const e=document.querySelector("#total-finished"),n=document.querySelector("#total-under-strive-time"),i=Tn.reduce((s,a)=>{let l=0;return t[a.id]!==void 0&&l++,s+l},0),r=Tn.reduce((s,a)=>{let l=0;return t[a.id]<yc&&l++,s+l},0);e.innerText=i.toString(),n.innerText=r.toString()}addCard(t,e,n){const i=this.cardTemplate.content.cloneNode(!0),r=i.querySelector(".level-index");let s=n?"🔒︎":(t+1).toString();r.innerText=s,this.fillInTime(Tn[t],i,e),e[Tn[t].id]!==void 0&&i.querySelector(".level-card").classList.add("completed"),this.cardContainer.appendChild(i),!n&&(this.cardContainer.lastElementChild.onclick=()=>{r_(Tn[t]),this.active=!1,this.screenDiv.classList.remove("visible"),window.dispatchEvent(Uh)})}fillInTime(t,e,n){const i=n[t.id];if(i===void 0)return;const r=e.querySelector(".level-time");r.innerText=Hh(i),i<yc&&e.querySelector(".under-1min").classList.add("visible")}}const Ci=new py;class my{constructor(){Xt(this,"containerDiv");Xt(this,"retryButton");Xt(this,"levelSelectButton");Xt(this,"active",!1);this.containerDiv=document.querySelector("#game-over-modal"),this.retryButton=document.querySelector("#retry-button"),this.retryButton.onclick=()=>{this.active=!1,this.containerDiv.style.display="none",window.dispatchEvent(Uh)},this.levelSelectButton=document.querySelector("#game-over-level-select-button"),this.levelSelectButton.onclick=()=>{Ci.activate(),this.active=!1,this.containerDiv.style.display="none"}}activate(t){console.log("Game Over: "+t),this.active=!0,this.containerDiv.style.display="grid"}}const Ta=new my,vy=5,Zr=Dh/2,gy=Zr**2,_y=3**2,yy=3,xy=4,Dc=.025;class My{constructor(t){Xt(this,"position");Xt(this,"sprite");Xt(this,"dead",!1);const e=new ya().load(dy),n=new fa({map:e});this.sprite=new Sh(n),e.magFilter=ke,this.sprite.scale.copy(new G(1,1,1).multiplyScalar(vy)),this.sprite.position.copy(t),gn.add(this.sprite),this.position=this.sprite.position,this.position.y=this.targetYPos()}fixedUpdate(t,e){if(this.dead)return;const n=e.clone().sub(this.position),i=n.lengthSq();if(i>gy||(i<_y&&Ta.activate("got by demon"),e.z<=this.position.z))return;let s=n.clone().normalize().clone().multiplyScalar(t*yy);s.length()>n.length()&&(s=n.clone()),this.position.add(s),this.position.y=this.position.y*(1-Dc)+this.targetYPos()*Dc}tryExplode(t,e){e=new G(e.x,0,e.z);const n=this.position.clone();n.y=0,n.sub(e).lengthSq()<t.EXPLOSION_RADIUS*t.EXPLOSION_RADIUS&&(this.dead=!0,this.sprite.removeFromParent())}targetYPos(){const t=Me.closestSquares(this.position,Me.squareDim/2*1.45);return t.length?t[0].top()+xy:this.position.y}}function Sy(o,t,e){return(1-e)*o+e*t}const Uc=1.125,Ey=1,wy=.75;class Ty{constructor(t){Xt(this,"startTime");Xt(this,"obj3D");Xt(this,"EXPLOSION_RADIUS");this.startTime=1/0,this.EXPLOSION_RADIUS=Zr+Me.squareDim/2*1.42*1.05;const e=new ga(1),n=new ii({transparent:!0,color:new Kt("yellow"),opacity:wy}),i=new Ge(e,n);i.scale.set(.001,.001,.001),t.attach(i),this.obj3D=i}restart(){this.startTime=Date.now()/1e3}visualUpdate(t){const e=Date.now()/1e3-this.startTime;let n=.001;e<Uc&&(n=Sy(Ey,this.EXPLOSION_RADIUS,e/Uc)),this.obj3D.scale.set(n,n,n)}}class Ay{constructor(t,e,n){Xt(this,"body");Xt(this,"obj3D");Xt(this,"wheels");Xt(this,"explosion");Xt(this,"frozen",!1);Xt(this,"timeStartedMovingSec");this.body=this.makeBody(t),this.obj3D=this.makeObj3D(e),this.wheels=this.makeWheels(n),this.explosion=new Ty(this.obj3D)}makeObj3D(t){const e=new _a({color:1118481}),n=new Ri(An.x-1.8,.1,An.z),i=-.125,r=new Ge(n,e);r.castShadow=!0,r.receiveShadow=!0;const s=new Ee;return r.position.y=-.05+i,s.attach(r),t.position.y=-.5+i,t.rotation.y=Math.PI,t.position.z=.2,s.attach(t),gn.add(s),s}fixedUpdate(t){this.frozen||(this.timeStartedMovingSec===void 0&&er.upDown!==0&&(this.timeStartedMovingSec=Date.now()/1e3),this.wheels.forEach(e=>e.fixedUpdate(t)),this.copyBodyPositionToObj3D(),this.explosion.visualUpdate(t))}makeWheels(t){const e=[[-1,1],[1,1],[-1,-1],[1,-1]],n=[];for(let i of e){const r=new G(i[0]*An.x/2,0,i[1]*An.z/2);n.push(new b_(r,this.obj3D,this.body,t))}return n}makeBody(t){const e=new Ie.Box(new Ie.Vec3(An.x/2,An.y/20,An.z/2+.1)),n=new Ie.Material("car body material");n.friction=Nh;const i=new Ie.Body({mass:Ih,material:n});return i.addShape(e),i.position.x=t.x,i.position.y=t.y+Qn+.1,i.position.z=t.z,Ti.addBody(i),i.angularDamping=M0,i.linearDamping=S0,i}copyBodyPositionToObj3D(){this.obj3D.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.obj3D.quaternion.set(this.body.quaternion.x,this.body.quaternion.y,this.body.quaternion.z,this.body.quaternion.w),this.obj3D.updateMatrixWorld()}}let Ls,Is;const Fc=new C_;async function by(o){if(!Ls){Ls=await Fc.loadAsync(hy);const t=new Xr({color:16777215,metalness:.1,roughness:.8,side:_n});Ls.scene.traverse(function(e){e instanceof Ge&&(t.map=e.material.map,e.material=t,e.castShadow=!0,e.receiveShadow=!0)})}if(!Is){Is=await Fc.loadAsync(uy);const t=new Xr({color:9474192,metalness:.4,roughness:.63});Is.scene.traverse(function(e){e instanceof Ge&&(e.castShadow=!0,e.receiveShadow=!0,e.name==="Cylinder001"?e.material=new _a({color:2631720}):e.material=t)})}return new Ay(o,Ls.scene.clone(),Is.scene.clone())}const Bc=.5;class Ry{constructor(){Xt(this,"div");Xt(this,"active",!1);this.div=document.querySelector("#wrong-way")}update(t){t.z>Bc&&!this.active?(this.active=!0,this.div.classList.add("visible")):t.z<=Bc&&this.active&&(this.active=!1,this.div.classList.remove("visible"))}}const Cy=new Ry;let xi;function Py(o){xi||(xi=zc(o));const t=zc(o),e=.1;xi=t.multiplyScalar(e).add(xi.multiplyScalar(1-e)).normalize();const n=-12.5,i=new G(0,6.5,0);ei.position.copy(o.obj3D.position.clone().add(xi.clone().multiplyScalar(n)).add(i));const r=o.obj3D.position.clone();r.y+=2,ei.lookAt(r),Cy.update(xi)}let Oc=new G(0,0,-1);function zc(o){const t=new G(1,0,0),e=new En;o.obj3D.getWorldQuaternion(e);const n=t.clone();n.applyQuaternion(e),n.y=0;const i=new G(0,1,0).applyAxisAngle(n,-Math.PI/2);return i.y=0,i.length()<.05?Oc.clone():(i.normalize(),Oc=i,i)}function Ly(){xi=void 0}const Iy="/cubic-offroad-hosting/assets/bomb_one-PsRsFKBg.png",Ny=4,Dy=1.95,Uy=An.z*1.77**2;class Fy{constructor(t){Xt(this,"position");Xt(this,"exploded",!1);Xt(this,"sprite");const e=new ya().load(Iy);e.colorSpace=Ye;const n=new fa({map:e});this.sprite=new Sh(n),e.magFilter=ke,this.sprite.scale.copy(new G(1,1,1).multiplyScalar(Ny)),this.sprite.position.copy(t),gn.add(this.sprite),this.position=this.sprite.position,this.position.y=this.targetYPos()}fixedUpdate(t,e,n){if(this.exploded)return;const i=e.x-this.position.x,r=e.z-this.position.z;i*i+r*r<=Uy&&(n.forEach(a=>a.tryExplode(t.explosion,this.position)),t.explosion.restart(),this.exploded=!0,this.sprite.removeFromParent())}targetYPos(){const t=Me.closestSquares(this.position,Me.squareDim/2*1.45);return t.length?t[0].top()+Dy:this.position.y}}const By=Zr*.5,Oy=Zr,Vc=Math.PI/3;function zy(){const o=Me.terrainArr,t=[],e=[];if(o.length===0)return{demons:t,bombs:e};const n=o.length*o[0].length,i=Math.round(Zr/Me.squareDim*1.25),r=Me.maxZIndex;if(i>r)return{demons:t,bombs:e};const s=kn("demon_density_"+Ne.id),a=Xs(0,B0*Me.squareDim**2,s),l=Math.round(n*a);console.log(`Num demons: ${l}`);const h=kn("demons_"+Ne.id),u=kn("bombs_"+Ne.id);for(let c=0;c<l;c++){const d=Ws(0,o[0].length-1,h),f=Ws(i,r,h),v=o[f][d].pos.clone(),g=new My(v);t.push(g);const p=Vy(d,f,u);e.push(p)}return{demons:t,bombs:e}}function Vy(o,t,e){const n=By/Me.squareDim,i=Oy/Me.squareDim,r=Xs(n,i,e),s=Xs(-Vc,Vc,e),a=Math.floor(r*Math.cos(s)),l=Math.floor(r*Math.sin(s)),h=Math.max(t-a,0);let u=o+l;return u>=Me.terrainArr[0].length&&(u=Me.terrainArr[0].length-1-l),u=Math.max(0,u),new Fy(Me.terrainArr[h][u].pos)}class Hy{constructor(){Xt(this,"modalDiv");Xt(this,"timeDiv");Xt(this,"levelSelectButton");Xt(this,"active",!1);this.modalDiv=document.querySelector("#finished-modal"),this.timeDiv=document.querySelector("#finished-time-value"),this.levelSelectButton=document.querySelector("#level-select-button"),this.levelSelectButton.onclick=()=>{this.modalDiv.style.display="none",Ci.activate(),this.active=!1}}activate(t){Zh.submit(Ne.id,t),this.active=!0,this.modalDiv.style.display="grid",this.timeDiv.innerText=Hh(t)}}const $h=new Hy;var Ji=1/60,Qh=3;let on,ia=[],Jh=[],tu;const Hc=document.querySelector("#spinner-wrapper");document.querySelector("#fullscreen-button").onclick=()=>{document.fullscreenElement===null?document.body.requestFullscreen():document.exitFullscreen()};async function Aa(){cancelAnimationFrame(tu),Ci.active||history.pushState({screen:"gameplay"},""),Hc.classList.remove("hidden"),console.log(`Starting level ${Ne.id}`),Wh(),y_(),u_(),{demons:ia,bombs:Jh}=zy(),await ky(),Ly(),Hc.classList.add("hidden"),requestAnimationFrame(eu)}async function ky(){const o=new Ie.Vec3(Me.squareDim/2,64,-An.z/2-.5),t=Me.closestSquares(new G(0,0,0),Me.squareDim/2*1.45);t.length&&(o.y=t[0].top()+.05),on=await by(o),on.fixedUpdate(0)}const mr=new Vr;mr.showPanel(0);document.body.appendChild(mr.dom);mr.dom.style.left="auto";mr.dom.style.right="0";let Ns,Xo=0;function eu(o){if(mr.begin(),Ci.active)return;if(tu=requestAnimationFrame(eu),Ns===void 0){Ns=o;return}let t=(o-Ns)/1e3;Ns=o,t=Math.min(t,Ji*Qh),!Ta.active&&!$h.active&&Gy(t),ai.render(gn,ei),mr.end()}function Gy(o){a_||er.handleGamepads(),Xo+=o;let t=0;for(;Xo>=Ji&&t<Qh;)on.fixedUpdate(Ji),Ti.step(Ji),Jh.forEach(e=>e.fixedUpdate(on,on.obj3D.position,ia)),ia.forEach(e=>e.fixedUpdate(Ji,on.obj3D.position)),Wy(),Xo-=Ji,t++;on.obj3D.position.y<Me.minHeight-10&&Ta.activate("fell outside map"),Py(on),He.target.position.copy(on.obj3D.position),He.position.copy(on.obj3D.position.clone().add(new G(-1,3,.25))),m_(on.obj3D.position)}function Wy(){const o=on.obj3D.position,t=Me.terrainArr[0][0].pos.x-Me.squareDim/2,e=Me.terrainArr[0][Me.terrainArr[0].length-1].pos.x+Me.squareDim/2;if(o.z<=Me.finishZ&&o.x>t&&o.x<e){let n=on.timeStartedMovingSec;n===void 0&&(n=-1/0),$h.activate(Date.now()/1e3-n)}}document.onkeydown=o=>{o.code==="Escape"&&Ci.activate(),o.code==="KeyR"&&Aa()};kh||(document.querySelector("#touch-controls").style.display="none");window.addEventListener("restartplay",()=>{Aa()});window.onpopstate=()=>{Ci.activate()};Ci.activate();Aa();

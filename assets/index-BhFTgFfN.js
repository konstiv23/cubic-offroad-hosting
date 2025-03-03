var nu=Object.defineProperty;var Ta=s=>{throw TypeError(s)};var iu=(s,t,e)=>t in s?nu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Xt=(s,t,e)=>iu(s,typeof t!="symbol"?t+"":t,e),Aa=(s,t,e)=>t.has(s)||Ta("Cannot "+e);var Js=(s,t,e)=>(Aa(s,t,"read from private field"),e?e.call(s):t.get(s)),to=(s,t,e)=>t.has(s)?Ta("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),eo=(s,t,e,n)=>(Aa(s,t,"write to private field"),n?n.call(s,e):t.set(s,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ia="164",ru=0,ba=1,su=2,Vc=1,Hc=2,zn=3,Gn=0,nn=1,_n=2,si=0,nr=1,Ra=2,Ca=3,Pa=4,ou=5,Mi=100,au=101,lu=102,cu=103,hu=104,uu=200,du=201,fu=202,pu=203,Xo=204,qo=205,mu=206,vu=207,gu=208,_u=209,yu=210,xu=211,Mu=212,Su=213,Eu=214,wu=0,Tu=1,Au=2,Ds=3,bu=4,Ru=5,Cu=6,Pu=7,ra=0,Lu=1,Iu=2,oi=0,Nu=1,Du=2,Uu=3,Fu=4,Bu=5,Ou=6,zu=7,La="attached",Vu="detached",kc=300,or=301,ar=302,Yo=303,jo=304,Xs=306,lr=1e3,ni=1001,Us=1002,ke=1003,Gc=1004,Dr=1005,an=1006,Is=1007,Vn=1008,li=1009,Hu=1010,ku=1011,Wc=1012,Xc=1013,cr=1014,Rn=1015,qs=1016,qc=1017,Yc=1018,qr=1020,Gu=35902,Wu=1021,Xu=1022,Mn=1023,qu=1024,Yu=1025,ir=1026,zr=1027,jc=1028,Kc=1029,ju=1030,Zc=1031,$c=1033,no=33776,io=33777,ro=33778,so=33779,Ia=35840,Na=35841,Da=35842,Ua=35843,Fa=36196,Ba=37492,Oa=37496,za=37808,Va=37809,Ha=37810,ka=37811,Ga=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,ja=37817,Ka=37818,Za=37819,$a=37820,Qa=37821,oo=36492,Ja=36494,tl=36495,Ku=36283,el=36284,nl=36285,il=36286,Vr=2300,hr=2301,ao=2302,rl=2400,sl=2401,ol=2402,Zu=2500,$u=0,Qc=1,Ko=2,Qu=3200,Ju=3201,sa=0,td=1,ti="",Ye="srgb",We="srgb-linear",oa="display-p3",Ys="display-p3-linear",Fs="linear",we="srgb",Bs="rec709",Os="p3",Pi=7680,al=519,ed=512,nd=513,id=514,Jc=515,rd=516,sd=517,od=518,ad=519,Zo=35044,ll="300 es",Hn=2e3,zs=2001;class mr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const Fr=Math.PI/180,ur=180/Math.PI;function Sn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function je(s,t,e){return Math.max(t,Math.min(e,s))}function aa(s,t){return(s%t+t)%t}function ld(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function cd(s,t,e){return s!==t?(e-s)/(t-s):0}function Br(s,t,e){return(1-e)*s+e*t}function hd(s,t,e,n){return Br(s,t,1-Math.exp(-e*n))}function ud(s,t=1){return t-Math.abs(aa(s,t*2)-t)}function dd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function fd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function pd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function md(s,t){return s+Math.random()*(t-s)}function vd(s){return s*(.5-Math.random())}function gd(s){s!==void 0&&(cl=s);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _d(s){return s*Fr}function yd(s){return s*ur}function xd(s){return(s&s-1)===0&&s!==0}function Md(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Sd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ed(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),u=o((t+n)/2),c=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),v=o((n-t)/2);switch(i){case"XYX":s.set(a*u,l*c,l*d,a*h);break;case"YZY":s.set(l*d,a*u,l*c,a*h);break;case"ZXZ":s.set(l*c,l*d,a*u,a*h);break;case"XZX":s.set(a*u,l*v,l*f,a*h);break;case"YXY":s.set(l*f,a*u,l*v,a*h);break;case"ZYZ":s.set(l*v,l*f,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wd={DEG2RAD:Fr,RAD2DEG:ur,generateUUID:Sn,clamp:je,euclideanModulo:aa,mapLinear:ld,inverseLerp:cd,lerp:Br,damp:hd,pingpong:ud,smoothstep:dd,smootherstep:fd,randInt:pd,randFloat:md,randFloatSpread:vd,seededRandom:gd,degToRad:_d,radToDeg:yd,isPowerOfTwo:xd,ceilPowerOfTwo:Md,floorPowerOfTwo:Sd,setQuaternionFromProperEuler:Ed,normalize:ge,denormalize:yn};class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,i,r,o,a,l,h){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h)}set(t,e,n,i,r,o,a,l,h){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],u=n[4],c=n[7],d=n[2],f=n[5],v=n[8],g=i[0],m=i[3],p=i[6],_=i[1],x=i[4],y=i[7],T=i[2],b=i[5],I=i[8];return r[0]=o*g+a*_+l*T,r[3]=o*m+a*x+l*b,r[6]=o*p+a*y+l*I,r[1]=h*g+u*_+c*T,r[4]=h*m+u*x+c*b,r[7]=h*p+u*y+c*I,r[2]=d*g+f*_+v*T,r[5]=d*m+f*x+v*b,r[8]=d*p+f*y+v*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-n*r*u+n*a*l+i*r*h-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=u*o-a*h,d=a*l-u*r,f=h*r-o*l,v=e*c+n*d+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=c*g,t[1]=(i*h-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(u*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*l-h*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-i*h,i*l,-i*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new oe;function th(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Td(){const s=Hr("canvas");return s.style.display="block",s}const hl={};function eh(s){s in hl||(hl[s]=!0,console.warn(s))}const ul=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dl=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Kr={[We]:{transfer:Fs,primaries:Bs,toReference:s=>s,fromReference:s=>s},[Ye]:{transfer:we,primaries:Bs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ys]:{transfer:Fs,primaries:Os,toReference:s=>s.applyMatrix3(dl),fromReference:s=>s.applyMatrix3(ul)},[oa]:{transfer:we,primaries:Os,toReference:s=>s.convertSRGBToLinear().applyMatrix3(dl),fromReference:s=>s.applyMatrix3(ul).convertLinearToSRGB()}},Ad=new Set([We,Ys]),fe={enabled:!0,_workingColorSpace:We,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ad.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Kr[t].toReference,i=Kr[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Kr[s].primaries},getTransfer:function(s){return s===ti?Fs:Kr[s].transfer}};function rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function co(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Li;class bd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Hr("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=rr(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rr(e[n]/255)*255):e[n]=rr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rd=0;class nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Sn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ho(i[o].image)):r.push(ho(i[o]))}else r=ho(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ho(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cd=0;class Oe extends mr{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=ni,i=ni,r=an,o=Vn,a=Mn,l=li,h=Oe.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Sn(),this.name="",this.source=new nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lr:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Us:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lr:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Us:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=kc;Oe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,h=l[0],u=l[4],c=l[8],d=l[1],f=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(c-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(c+g)<.1&&Math.abs(v+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,y=(f+1)/2,T=(p+1)/2,b=(u+d)/4,I=(c+g)/4,D=(v+m)/4;return x>y&&x>T?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=I/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=D/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=I/r,i=D/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(c-g)*(c-g)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(c-g)/_,this.z=(d-u)/_,this.w=Math.acos((h+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pd extends mr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends Pd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ih extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ld extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],h=n[i+1],u=n[i+2],c=n[i+3];const d=r[o+0],f=r[o+1],v=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(c!==g||l!==d||h!==f||u!==v){let m=1-a;const p=l*d+h*f+u*v+c*g,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),b=Math.atan2(T,p*_);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const y=a*_;if(l=l*m+d*y,h=h*m+f*y,u=u*m+v*y,c=c*m+g*y,m===1-a){const T=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=T,h*=T,u*=T,c*=T}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],h=n[i+2],u=n[i+3],c=r[o],d=r[o+1],f=r[o+2],v=r[o+3];return t[e]=a*v+u*c+l*f-h*d,t[e+1]=l*v+u*d+h*c-a*f,t[e+2]=h*v+u*f+a*d-l*c,t[e+3]=u*v-a*c-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),u=a(i/2),c=a(r/2),d=l(n/2),f=l(i/2),v=l(r/2);switch(o){case"XYZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"YXZ":this._x=d*u*c+h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"ZXY":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c-d*f*v;break;case"ZYX":this._x=d*u*c-h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c+d*f*v;break;case"YZX":this._x=d*u*c+h*f*v,this._y=h*f*c+d*u*v,this._z=h*u*v-d*f*c,this._w=h*u*c-d*f*v;break;case"XZY":this._x=d*u*c-h*f*v,this._y=h*f*c-d*u*v,this._z=h*u*v+d*f*c,this._w=h*u*c+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],c=e[10],d=n+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-h)*f,this._z=(o-i)*f}else if(n>a&&n>c){const f=2*Math.sqrt(1+n-a-c);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+h)/f}else if(a>c){const f=2*Math.sqrt(1+a-n-c);this._w=(r-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+c-n-a);this._w=(o-i)/f,this._x=(r+h)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=n*u+o*a+i*h-r*l,this._y=i*u+o*l+r*a-n*h,this._z=r*u+o*h+n*l-i*a,this._w=o*u-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),c=Math.sin((1-e)*u)/h,d=Math.sin(e*u)/h;return this._w=o*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*i-a*n),u=2*(a*e-r*i),c=2*(r*n-o*e);return this.x=e+l*h+o*c-a*u,this.y=n+l*u+a*h-r*c,this.z=i+l*c+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uo=new W,fl=new En;class Wn{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),$r.subVectors(this.max,xr),Ii.subVectors(t.a,xr),Ni.subVectors(t.b,xr),Di.subVectors(t.c,xr),Xn.subVectors(Ni,Ii),qn.subVectors(Di,Ni),hi.subVectors(Ii,Di);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-hi.z,hi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,hi.z,0,-hi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-hi.y,hi.x,0];return!fo(e,Ii,Ni,Di,$r)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Ii,Ni,Di,$r))?!1:(Qr.crossVectors(Xn,qn),e=[Qr.x,Qr.y,Qr.z],fo(e,Ii,Ni,Di,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new W,new W,new W,new W,new W,new W,new W,new W],pn=new W,Zr=new Wn,Ii=new W,Ni=new W,Di=new W,Xn=new W,qn=new W,hi=new W,xr=new W,$r=new W,Qr=new W,ui=new W;function fo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ui.fromArray(s,r);const a=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=t.dot(ui),h=e.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const Id=new Wn,Mr=new W,po=new W;class Cn{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Id.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);const e=Mr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Mr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(po)),this.expandByPoint(Mr.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new W,mo=new W,Jr=new W,Yn=new W,vo=new W,ts=new W,go=new W;class js{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mo.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(mo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Jr),a=Yn.dot(this.direction),l=-Yn.dot(Jr),h=Yn.lengthSq(),u=Math.abs(1-o*o);let c,d,f,v;if(u>0)if(c=o*l-a,d=o*a-l,v=r*u,c>=0)if(d>=-v)if(d<=v){const g=1/u;c*=g,d*=g,f=c*(c+o*d+2*a)+d*(o*c+d+2*l)+h}else d=r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;else d=-r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;else d<=-v?(c=Math.max(0,-(-o*r+a)),d=c>0?-r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h):d<=v?(c=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(c=Math.max(0,-(o*r+a)),d=c>0?r:Math.min(Math.max(-r,-l),r),f=-c*c+d*(d+2*l)+h);else d=o>0?-r:r,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(mo).addScaledVector(Jr,d),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),c>=0?(a=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,r){vo.subVectors(e,t),ts.subVectors(n,t),go.crossVectors(vo,ts);let o=this.direction.dot(go),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(ts.crossVectors(Yn,ts));if(l<0)return null;const h=a*this.direction.dot(vo.cross(Yn));if(h<0||l+h>o)return null;const u=-a*Yn.dot(go);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,r,o,a,l,h,u,c,d,f,v,g,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h,u,c,d,f,v,g,m)}set(t,e,n,i,r,o,a,l,h,u,c,d,f,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=u,p[10]=c,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),o=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*c,v=a*u,g=a*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=f+v*h,e[5]=d-g*h,e[9]=-a*l,e[2]=g-d*h,e[6]=v+f*h,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*c,v=h*u,g=h*c;e[0]=d+g*a,e[4]=v*a-f,e[8]=o*h,e[1]=o*c,e[5]=o*u,e[9]=-a,e[2]=f*a-v,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*c,v=h*u,g=h*c;e[0]=d-g*a,e[4]=-o*c,e[8]=v+f*a,e[1]=f+v*a,e[5]=o*u,e[9]=g-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*c,v=a*u,g=a*c;e[0]=l*u,e[4]=v*h-f,e[8]=d*h+g,e[1]=l*c,e[5]=g*h+d,e[9]=f*h-v,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*h,v=a*l,g=a*h;e[0]=l*u,e[4]=g-d*c,e[8]=v*c+f,e[1]=c,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=f*c+v,e[10]=d-g*c}else if(t.order==="XZY"){const d=o*l,f=o*h,v=a*l,g=a*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=d*c+g,e[5]=o*u,e[9]=f*c-v,e[2]=v*c-f,e[6]=a*u,e[10]=g*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Dd)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),jn.crossVectors(n,rn),jn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),jn.crossVectors(n,rn)),jn.normalize(),es.crossVectors(rn,jn),i[0]=jn.x,i[4]=es.x,i[8]=rn.x,i[1]=jn.y,i[5]=es.y,i[9]=rn.y,i[2]=jn.z,i[6]=es.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],u=n[1],c=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],_=n[3],x=n[7],y=n[11],T=n[15],b=i[0],I=i[4],D=i[8],E=i[12],M=i[1],C=i[5],O=i[9],P=i[13],k=i[2],q=i[6],rt=i[10],G=i[14],L=i[3],Q=i[7],Y=i[11],B=i[15];return r[0]=o*b+a*M+l*k+h*L,r[4]=o*I+a*C+l*q+h*Q,r[8]=o*D+a*O+l*rt+h*Y,r[12]=o*E+a*P+l*G+h*B,r[1]=u*b+c*M+d*k+f*L,r[5]=u*I+c*C+d*q+f*Q,r[9]=u*D+c*O+d*rt+f*Y,r[13]=u*E+c*P+d*G+f*B,r[2]=v*b+g*M+m*k+p*L,r[6]=v*I+g*C+m*q+p*Q,r[10]=v*D+g*O+m*rt+p*Y,r[14]=v*E+g*P+m*G+p*B,r[3]=_*b+x*M+y*k+T*L,r[7]=_*I+x*C+y*q+T*Q,r[11]=_*D+x*O+y*rt+T*Y,r[15]=_*E+x*P+y*G+T*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],c=t[6],d=t[10],f=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+r*l*c-i*h*c-r*a*d+n*h*d+i*a*f-n*l*f)+g*(+e*l*f-e*h*d+r*o*d-i*o*f+i*h*u-r*l*u)+m*(+e*h*c-e*a*f-r*o*c+n*o*f+r*a*u-n*h*u)+p*(-i*a*u-e*l*c+e*a*d+i*o*c-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=t[9],d=t[10],f=t[11],v=t[12],g=t[13],m=t[14],p=t[15],_=c*m*h-g*d*h+g*l*f-a*m*f-c*l*p+a*d*p,x=v*d*h-u*m*h-v*l*f+o*m*f+u*l*p-o*d*p,y=u*g*h-v*c*h+v*a*f-o*g*f-u*a*p+o*c*p,T=v*c*l-u*g*l-v*a*d+o*g*d+u*a*m-o*c*m,b=e*_+n*x+i*y+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/b;return t[0]=_*I,t[1]=(g*d*r-c*m*r-g*i*f+n*m*f+c*i*p-n*d*p)*I,t[2]=(a*m*r-g*l*r+g*i*h-n*m*h-a*i*p+n*l*p)*I,t[3]=(c*l*r-a*d*r-c*i*h+n*d*h+a*i*f-n*l*f)*I,t[4]=x*I,t[5]=(u*m*r-v*d*r+v*i*f-e*m*f-u*i*p+e*d*p)*I,t[6]=(v*l*r-o*m*r-v*i*h+e*m*h+o*i*p-e*l*p)*I,t[7]=(o*d*r-u*l*r+u*i*h-e*d*h-o*i*f+e*l*f)*I,t[8]=y*I,t[9]=(v*c*r-u*g*r-v*n*f+e*g*f+u*n*p-e*c*p)*I,t[10]=(o*g*r-v*a*r+v*n*h-e*g*h-o*n*p+e*a*p)*I,t[11]=(u*a*r-o*c*r-u*n*h+e*c*h+o*n*f-e*a*f)*I,t[12]=T*I,t[13]=(u*g*i-v*c*i+v*n*d-e*g*d-u*n*m+e*c*m)*I,t[14]=(v*a*i-o*g*i-v*n*l+e*g*l+o*n*m-e*a*m)*I,t[15]=(o*c*i-u*a*i+u*n*l-e*c*l-o*n*d+e*a*d)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,u*a+n,u*l-i*o,0,h*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,c=a+a,d=r*h,f=r*u,v=r*c,g=o*u,m=o*c,p=a*c,_=l*h,x=l*u,y=l*c,T=n.x,b=n.y,I=n.z;return i[0]=(1-(g+p))*T,i[1]=(f+y)*T,i[2]=(v-x)*T,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+p))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(v+x)*I,i[9]=(m-_)*I,i[10]=(1-(d+g))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ui.set(i[0],i[1],i[2]).length();const o=Ui.set(i[4],i[5],i[6]).length(),a=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],mn.copy(this);const h=1/r,u=1/o,c=1/a;return mn.elements[0]*=h,mn.elements[1]*=h,mn.elements[2]*=h,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=c,mn.elements[9]*=c,mn.elements[10]*=c,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Hn){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),c=(e+t)/(e-t),d=(n+i)/(n-i);let f,v;if(a===Hn)f=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===zs)f=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Hn){const l=this.elements,h=1/(e-t),u=1/(n-i),c=1/(o-r),d=(e+t)*h,f=(n+i)*u;let v,g;if(a===Hn)v=(o+r)*c,g=-2*c;else if(a===zs)v=r*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ui=new W,mn=new ie,Nd=new W(0,0,0),Dd=new W(1,1,1),jn=new W,es=new W,rn=new W,pl=new ie,ml=new En;class dn{constructor(t=0,e=0,n=0,i=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],h=i[5],u=i[9],c=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ud=0;const vl=new W,Fi=new En,Un=new ie,ns=new W,Sr=new W,Fd=new W,Bd=new En,gl=new W(1,0,0),_l=new W(0,1,0),yl=new W(0,0,1),xl={type:"added"},Od={type:"removed"},Bi={type:"childadded",child:null},_o={type:"childremoved",child:null};class Ee extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new W,e=new dn,n=new En,i=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new oe}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return vl.copy(t).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Sr,ns,this.up):Un.lookAt(ns,Sr,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Fi.setFromRotationMatrix(Un),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Od),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,Fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),c=o(t.shapes),d=o(t.skeletons),f=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new W(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new W,Fn=new W,yo=new W,Bn=new W,Oi=new W,zi=new W,Ml=new W,xo=new W,Mo=new W,So=new W;class xn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vn.subVectors(i,e),Fn.subVectors(n,e),yo.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(Fn),l=vn.dot(yo),h=Fn.dot(Fn),u=Fn.dot(yo),c=o*h-a*a;if(c===0)return r.set(0,0,0),null;const d=1/c,f=(h*l-a*u)*d,v=(o*u-a*l)*d;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Fn.subVectors(t,e),vn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),vn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Oi.subVectors(i,n),zi.subVectors(r,n),xo.subVectors(t,n);const l=Oi.dot(xo),h=zi.dot(xo);if(l<=0&&h<=0)return e.copy(n);Mo.subVectors(t,i);const u=Oi.dot(Mo),c=zi.dot(Mo);if(u>=0&&c<=u)return e.copy(i);const d=l*c-u*h;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Oi,o);So.subVectors(t,r);const f=Oi.dot(So),v=zi.dot(So);if(v>=0&&f<=v)return e.copy(r);const g=f*h-l*v;if(g<=0&&h>=0&&v<=0)return a=h/(h-v),e.copy(n).addScaledVector(zi,a);const m=u*v-f*c;if(m<=0&&c-u>=0&&f-v>=0)return Ml.subVectors(r,i),a=(c-u)/(c-u+(f-v)),e.copy(i).addScaledVector(Ml,a);const p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Oi,o).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},is={h:0,s:0,l:0};function Eo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fe.workingColorSpace){if(t=aa(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Eo(o,r,t+1/3),this.g=Eo(o,r,t),this.b=Eo(o,r,t-1/3)}return fe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}copyLinearToSRGB(t){return this.r=co(t.r),this.g=co(t.g),this.b=co(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return fe.fromWorkingColorSpace(qe.copy(this),t),Math.round(je(qe.r*255,0,255))*65536+Math.round(je(qe.g*255,0,255))*256+Math.round(je(qe.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,i=qe.g,r=qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,h;const u=(a+o)/2;if(a===o)l=0,h=0;else{const c=o-a;switch(h=u<=.5?c/(o+a):c/(2-o-a),o){case n:l=(i-r)/c+(i<r?6:0);break;case i:l=(r-n)/c+2;break;case r:l=(n-i)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ye){fe.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,i=qe.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(is);const n=Br(Kn.h,is.h,e),i=Br(Kn.s,is.s,e),r=Br(Kn.l,is.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Kt;Kt.NAMES=sh;let zd=0;class hn extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=nr,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ii extends hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new W,rs=new te;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return eh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rs.fromBufferAttribute(this,e),rs.applyMatrix3(t),this.setXY(e,rs.x,rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zo&&(t.usage=this.usage),t}}class oh extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ah extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class un extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vd=0;const ln=new ie,wo=new Ee,Vi=new W,sn=new Wn,Er=new Wn,Be=new W;class fn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(th(t)?ah:oh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new un(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(sn.min,Er.min),sn.expandByPoint(Be),Be.addVectors(sn.max,Er.max),sn.expandByPoint(Be)):(sn.expandByPoint(Er.min),sn.expandByPoint(Er.max))}sn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)Be.fromBufferAttribute(a,h),l&&(Vi.fromBufferAttribute(t,h),Be.add(Vi)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new W,l[D]=new W;const h=new W,u=new W,c=new W,d=new te,f=new te,v=new te,g=new W,m=new W;function p(D,E,M){h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),c.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),v.fromBufferAttribute(r,M),u.sub(h),c.sub(h),f.sub(d),v.sub(d);const C=1/(f.x*v.y-v.x*f.y);isFinite(C)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(c,-f.y).multiplyScalar(C),m.copy(c).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(C),a[D].add(g),a[E].add(g),a[M].add(g),l[D].add(m),l[E].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let D=0,E=_.length;D<E;++D){const M=_[D],C=M.start,O=M.count;for(let P=C,k=C+O;P<k;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const x=new W,y=new W,T=new W,b=new W;function I(D){T.fromBufferAttribute(i,D),b.copy(T);const E=a[D];x.copy(E),x.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(b,E);const C=y.dot(l[D])<0?-1:1;o.setXYZW(D,x.x,x.y,x.z,C)}for(let D=0,E=_.length;D<E;++D){const M=_[D],C=M.start,O=M.count;for(let P=C,k=C+O;P<k;P+=3)I(t.getX(P+0)),I(t.getX(P+1)),I(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new W,r=new W,o=new W,a=new W,l=new W,h=new W,u=new W,c=new W;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,r),c.subVectors(i,r),u.cross(c),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),a.add(u),l.add(u),h.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),c.subVectors(i,r),u.cross(c),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const h=a.array,u=a.itemSize,c=a.normalized,d=new h.constructor(l.length*u);let f=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)d[v++]=h[f++]}return new tn(d,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let u=0,c=h.length;u<c;u++){const d=h[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],c=r[h];for(let d=0,f=c.length;d<f;d++)u.push(c[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,u=o.length;h<u;h++){const c=o[h];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new ie,di=new js,ss=new Cn,El=new W,Hi=new W,ki=new W,Gi=new W,To=new W,os=new W,as=new te,ls=new te,cs=new te,wl=new W,Tl=new W,Al=new W,hs=new W,us=new W;class Ge extends Ee{constructor(t=new fn,e=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){os.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=a[l],c=r[l];u!==0&&(To.fromBufferAttribute(c,t),o?os.addScaledVector(To,u):os.addScaledVector(To.sub(e),u))}e.add(os)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(ss.containsPoint(di.origin)===!1&&(di.intersectSphere(ss,El)===null||di.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(Sl.copy(r).invert(),di.copy(t.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,T=x;y<T;y+=3){const b=a.getX(y),I=a.getX(y+1),D=a.getX(y+2);i=ds(this,p,t,n,h,u,c,b,I,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=ds(this,o,t,n,h,u,c,_,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,T=x;y<T;y+=3){const b=y,I=y+1,D=y+2;i=ds(this,p,t,n,h,u,c,b,I,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=m,x=m+1,y=m+2;i=ds(this,o,t,n,h,u,c,_,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Hd(s,t,e,n,i,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Gn,a),l===null)return null;us.copy(a),us.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(us);return h<e.near||h>e.far?null:{distance:h,point:us.clone(),object:s}}function ds(s,t,e,n,i,r,o,a,l,h){s.getVertexPosition(a,Hi),s.getVertexPosition(l,ki),s.getVertexPosition(h,Gi);const u=Hd(s,t,e,n,Hi,ki,Gi,hs);if(u){i&&(as.fromBufferAttribute(i,a),ls.fromBufferAttribute(i,l),cs.fromBufferAttribute(i,h),u.uv=xn.getInterpolation(hs,Hi,ki,Gi,as,ls,cs,new te)),r&&(as.fromBufferAttribute(r,a),ls.fromBufferAttribute(r,l),cs.fromBufferAttribute(r,h),u.uv1=xn.getInterpolation(hs,Hi,ki,Gi,as,ls,cs,new te)),o&&(wl.fromBufferAttribute(o,a),Tl.fromBufferAttribute(o,l),Al.fromBufferAttribute(o,h),u.normal=xn.getInterpolation(hs,Hi,ki,Gi,wl,Tl,Al,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a,b:l,c:h,normal:new W,materialIndex:0};xn.getNormal(Hi,ki,Gi,c.normal),u.face=c}return u}class Ri extends fn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],u=[],c=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,i,o,2),v("x","z","y",1,-1,t,n,-e,i,o,3),v("x","y","z",1,-1,t,e,n,i,r,4),v("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new un(h,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(c,2));function v(g,m,p,_,x,y,T,b,I,D,E){const M=y/I,C=T/D,O=y/2,P=T/2,k=b/2,q=I+1,rt=D+1;let G=0,L=0;const Q=new W;for(let Y=0;Y<rt;Y++){const B=Y*C-P;for(let J=0;J<q;J++){const z=J*M-O;Q[g]=z*_,Q[m]=B*x,Q[p]=k,h.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=b>0?1:-1,u.push(Q.x,Q.y,Q.z),c.push(J/I),c.push(1-Y/D),G+=1}}for(let Y=0;Y<D;Y++)for(let B=0;B<I;B++){const J=d+B+q*Y,z=d+B+q*(Y+1),A=d+(B+1)+q*(Y+1),R=d+(B+1)+q*Y;l.push(J,z,R),l.push(z,A,R),L+=6}a.addGroup(f,L,E),f+=L,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function dr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function $e(s){const t={};for(let e=0;e<s.length;e++){const n=dr(s[e]);for(const i in n)t[i]=n[i]}return t}function kd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function lh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const Gd={clone:dr,merge:$e};var Wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ch extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new W,bl=new te,Rl=new te;class Qe extends ch{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,bl,Rl),e.subVectors(Rl,bl)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class qd extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qe(Wi,Xi,t,e);i.layers=this.layers,this.add(i);const r=new Qe(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new Qe(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const h=new Qe(Wi,Xi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,u]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(c,d,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class hh extends Oe{constructor(t,e,n,i,r,o,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,n,i,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yd extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ri(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:si});r.uniforms.tEquirect.value=e;const o=new Ge(i,r),a=e.minFilter;return e.minFilter===Vn&&(e.minFilter=an),new qd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ao=new W,jd=new W,Kd=new oe;class _i{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ao.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kd.getNormalMatrix(t),i=this.coplanarPoint(Ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Cn,fs=new W;class la{constructor(t=new _i,e=new _i,n=new _i,i=new _i,r=new _i,o=new _i){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],h=i[4],u=i[5],c=i[6],d=i[7],f=i[8],v=i[9],g=i[10],m=i[11],p=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,d-h,m-f,y-p).normalize(),n[1].setComponents(l+r,d+h,m+f,y+p).normalize(),n[2].setComponents(l+o,d+u,m+v,y+_).normalize(),n[3].setComponents(l-o,d-u,m-v,y-_).normalize(),n[4].setComponents(l-a,d-c,m-g,y-x).normalize(),e===Hn)n[5].setComponents(l+a,d+c,m+g,y+x).normalize();else if(e===zs)n[5].setComponents(a,c,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fs.x=i.normal.x>0?t.max.x:t.min.x,fs.y=i.normal.y>0?t.max.y:t.min.y,fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Zd(s){const t=new WeakMap;function e(a,l){const h=a.array,u=a.usage,c=h.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,h,u),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,l,h){const u=l.array,c=l._updateRange,d=l.updateRanges;if(s.bindBuffer(h,a),c.count===-1&&d.length===0&&s.bufferSubData(h,0,u),d.length!==0){for(let f=0,v=d.length;f<v;f++){const g=d[f];s.bufferSubData(h,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}c.count!==-1&&(s.bufferSubData(h,c.offset*u.BYTES_PER_ELEMENT,u,c.offset,c.count),c.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:r,update:o}}class Ks extends fn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),h=a+1,u=l+1,c=t/a,d=e/l,f=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const _=p*d-o;for(let x=0;x<h;x++){const y=x*c-r;v.push(y,-_,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const x=_+h*p,y=_+h*(p+1),T=_+1+h*(p+1),b=_+1+h*p;f.push(x,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new un(v,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.widthSegments,t.heightSegments)}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rf=`#ifdef USE_AOMAP
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
#endif`,sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
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
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uf=`#ifdef USE_IRIDESCENCE
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
#endif`,df=`#ifdef USE_BUMPMAP
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mf=`#define PI 3.141592653589793
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
} // validated`,Sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ef=`vec3 transformedNormal = objectNormal;
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
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`
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
}`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ff=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
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
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
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
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
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
#endif`,Zf=`struct PhysicalMaterial {
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
}`,$f=`
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
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
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
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
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fp=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
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
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,sm=`#define DISTANCE
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
}`,om=`#define DISTANCE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#define LAMBERT
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define MATCAP
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
}`,vm=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,ym=`#define PHONG
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
}`,xm=`#define PHONG
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
}`,Em=`#define TOON
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
}`,wm=`#define TOON
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
}`,Tm=`uniform float size;
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
}`,Am=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Rm=`uniform vec3 color;
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
}`,Cm=`uniform float rotation;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:$d,alphahash_pars_fragment:Qd,alphamap_fragment:Jd,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:rf,aomap_pars_fragment:sf,batching_pars_vertex:of,batching_vertex:af,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:vf,color_fragment:gf,color_pars_fragment:_f,color_pars_vertex:yf,color_vertex:xf,common:Mf,cube_uv_reflection_fragment:Sf,defaultnormal_vertex:Ef,displacementmap_pars_vertex:wf,displacementmap_vertex:Tf,emissivemap_fragment:Af,emissivemap_pars_fragment:bf,colorspace_fragment:Rf,colorspace_pars_fragment:Cf,envmap_fragment:Pf,envmap_common_pars_fragment:Lf,envmap_pars_fragment:If,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Wf,envmap_vertex:Df,fog_vertex:Uf,fog_pars_vertex:Ff,fog_fragment:Bf,fog_pars_fragment:Of,gradientmap_pars_fragment:zf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:kf,lights_pars_begin:Gf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:Zf,lights_fragment_begin:$f,lights_fragment_maps:Qf,lights_fragment_end:Jf,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:rp,map_pars_fragment:sp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:hp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:fp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:vp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:yp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:wp,opaque_fragment:Tp,packing:Ap,premultiplied_alpha_fragment:bp,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Dp,shadowmap_vertex:Up,shadowmask_pars_fragment:Fp,skinbase_vertex:Bp,skinning_pars_vertex:Op,skinning_vertex:zp,skinnormal_vertex:Vp,specularmap_fragment:Hp,specularmap_pars_fragment:kp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:Yp,uv_pars_vertex:jp,uv_vertex:Kp,worldpos_vertex:Zp,background_vert:$p,background_frag:Qp,backgroundCube_vert:Jp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:rm,distanceRGBA_vert:sm,distanceRGBA_frag:om,equirect_vert:am,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:fm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:vm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:ym,meshphong_frag:xm,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:Em,meshtoon_frag:wm,points_vert:Tm,points_frag:Am,shadow_vert:bm,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},Bt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},bn={basic:{uniforms:$e([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:$e([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:$e([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:$e([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:$e([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:$e([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:$e([Bt.points,Bt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:$e([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:$e([Bt.common,Bt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:$e([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:$e([Bt.sprite,Bt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:$e([Bt.common,Bt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:$e([Bt.lights,Bt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};bn.physical={uniforms:$e([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const ps={r:0,b:0,g:0},pi=new dn,Lm=new ie;function Im(s,t,e,n,i,r,o){const a=new Kt(0);let l=r===!0?0:1,h,u,c=null,d=0,f=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function g(_){let x=!1;const y=v(_);y===null?p(a,l):y&&y.isColor&&(p(y,1),x=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function m(_,x){const y=v(x);y&&(y.isCubeTexture||y.mapping===Xs)?(u===void 0&&(u=new Ge(new Ri(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:dr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),pi.copy(x.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(pi)),u.material.toneMapped=fe.getTransfer(y.colorSpace)!==we,(c!==y||d!==y.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=s.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Ge(new Ks(2,2),new ci({name:"BackgroundMaterial",uniforms:dr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=fe.getTransfer(y.colorSpace)!==we,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null))}function p(_,x){_.getRGB(ps,lh(s)),n.buffers.color.setClear(ps.r,ps.g,ps.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:g,addToRenderList:m}}function Nm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,C,O,P,k){let q=!1;const rt=c(P,O,C);r!==rt&&(r=rt,h(r.object)),q=f(M,P,O,k),q&&v(M,P,O,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(M,C,O,P),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function h(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function c(M,C,O){const P=O.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let q=k[C.id];q===void 0&&(q={},k[C.id]=q);let rt=q[P];return rt===void 0&&(rt=d(l()),q[P]=rt),rt}function d(M){const C=[],O=[],P=[];for(let k=0;k<e;k++)C[k]=0,O[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:P,object:M,attributes:{},index:null}}function f(M,C,O,P){const k=r.attributes,q=C.attributes;let rt=0;const G=O.getAttributes();for(const L in G)if(G[L].location>=0){const Y=k[L];let B=q[L];if(B===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),Y===void 0||Y.attribute!==B||B&&Y.data!==B.data)return!0;rt++}return r.attributesNum!==rt||r.index!==P}function v(M,C,O,P){const k={},q=C.attributes;let rt=0;const G=O.getAttributes();for(const L in G)if(G[L].location>=0){let Y=q[L];Y===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const B={};B.attribute=Y,Y&&Y.data&&(B.data=Y.data),k[L]=B,rt++}r.attributes=k,r.attributesNum=rt,r.index=P}function g(){const M=r.newAttributes;for(let C=0,O=M.length;C<O;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const O=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;O[M]=1,P[M]===0&&(s.enableVertexAttribArray(M),P[M]=1),k[M]!==C&&(s.vertexAttribDivisor(M,C),k[M]=C)}function _(){const M=r.newAttributes,C=r.enabledAttributes;for(let O=0,P=C.length;O<P;O++)C[O]!==M[O]&&(s.disableVertexAttribArray(O),C[O]=0)}function x(M,C,O,P,k,q,rt){rt===!0?s.vertexAttribIPointer(M,C,O,k,q):s.vertexAttribPointer(M,C,O,P,k,q)}function y(M,C,O,P){g();const k=P.attributes,q=O.getAttributes(),rt=C.defaultAttributeValues;for(const G in q){const L=q[G];if(L.location>=0){let Q=k[G];if(Q===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const Y=Q.normalized,B=Q.itemSize,J=t.get(Q);if(J===void 0)continue;const z=J.buffer,A=J.type,R=J.bytesPerElement,H=A===s.INT||A===s.UNSIGNED_INT||Q.gpuType===Xc;if(Q.isInterleavedBufferAttribute){const $=Q.data,it=$.stride,K=Q.offset;if($.isInstancedInterleavedBuffer){for(let N=0;N<L.locationSize;N++)p(L.location+N,$.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let N=0;N<L.locationSize;N++)m(L.location+N);s.bindBuffer(s.ARRAY_BUFFER,z);for(let N=0;N<L.locationSize;N++)x(L.location+N,B/L.locationSize,A,Y,it*R,(K+B/L.locationSize*N)*R,H)}else{if(Q.isInstancedBufferAttribute){for(let $=0;$<L.locationSize;$++)p(L.location+$,Q.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let $=0;$<L.locationSize;$++)m(L.location+$);s.bindBuffer(s.ARRAY_BUFFER,z);for(let $=0;$<L.locationSize;$++)x(L.location+$,B/L.locationSize,A,Y,B*R,B/L.locationSize*$*R,H)}}else if(rt!==void 0){const Y=rt[G];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(L.location,Y);break;case 3:s.vertexAttrib3fv(L.location,Y);break;case 4:s.vertexAttrib4fv(L.location,Y);break;default:s.vertexAttrib1fv(L.location,Y)}}}}_()}function T(){D();for(const M in n){const C=n[M];for(const O in C){const P=C[O];for(const k in P)u(P[k].object),delete P[k];delete C[O]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const O in C){const P=C[O];for(const k in P)u(P[k].object),delete P[k];delete C[O]}delete n[M.id]}function I(M){for(const C in n){const O=n[C];if(O[M.id]===void 0)continue;const P=O[M.id];for(const k in P)u(P[k].object),delete P[k];delete O[M.id]}}function D(){E(),o=!0,r!==i&&(r=i,h(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function Dm(s,t,e){let n;function i(h){n=h}function r(h,u){s.drawArrays(n,h,u),e.update(u,n,1)}function o(h,u,c){c!==0&&(s.drawArraysInstanced(n,h,u,c),e.update(u,n,c))}function a(h,u,c){if(c===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<c;f++)this.render(h[f],u[f]);else{d.multiDrawArraysWEBGL(n,h,0,u,0,c);let f=0;for(let v=0;v<c;v++)f+=u[v];e.update(f,n,1)}}function l(h,u,c,d){if(c===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<h.length;v++)o(h[v],u[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,u,0,d,0,c);let v=0;for(let g=0;g<c;g++)v+=u[g];for(let g=0;g<d.length;g++)e.update(v,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Um(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Mn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const I=b===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==li&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Rn&&!I)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const u=l(h);u!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);const c=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:T}}function Fm(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new _i,a=new oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const f=c.length!==0||d||n!==0||i;return i=d,n=c.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){e=u(c,d,0)},this.setState=function(c,d,f){const v=c.clippingPlanes,g=c.clipIntersection,m=c.clipShadows,p=s.get(c);if(!i||v===null||v.length===0||r&&!m)r?u(null):h();else{const _=r?0:n,x=_*4;let y=p.clippingState||null;l.value=y,y=u(v,d,x,f);for(let T=0;T!==x;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(c,d,f,v){const g=c!==null?c.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=f+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==g;++x,y+=4)o.copy(c[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Bm(s){let t=new WeakMap;function e(o,a){return a===Yo?o.mapping=or:a===jo&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yo||a===jo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Yd(l.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ca extends ch{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const tr=4,Cl=[.125,.215,.35,.446,.526,.582],Si=20,bo=new ca,Pl=new Kt;let Ro=null,Co=0,Po=0,Lo=!1;const yi=(1+Math.sqrt(5))/2,qi=1/yi,Ll=[new W(-yi,qi,0),new W(yi,qi,0),new W(-qi,0,yi),new W(qi,0,yi),new W(0,yi,-qi),new W(0,yi,qi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ro,Co,Po),this._renderer.xr.enabled=Lo,t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ro=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Lo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:qs,format:Mn,colorSpace:We,depthBuffer:!1},i=Nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Om(r)),this._blurMaterial=zm(r,t,e)}return i}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,bo)}_sceneToCubeUV(t,e,n,i){const a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,d=u.toneMapping;u.getClearColor(Pl),u.toneMapping=oi,u.autoClear=!1;const f=new ii({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),v=new Ge(new Ri,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(Pl),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));const x=this._cubeSize;ms(i,_*x,p>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=c,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===or||t.mapping===ar;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ms(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,bo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ll[(i-r-1)%Ll.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Ge(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Si-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let _=0;for(let I=0;I<Si;++I){const D=I/g,E=Math.exp(-D*D/2);p.push(E),I===0?_+=E:I<m&&(_+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const y=this._sizeLods[i],T=3*y*(i>x-tr?i-x+tr:0),b=4*(this._cubeSize-y);ms(e,T,b,3*y,2*y),l.setRenderTarget(e),l.render(c,bo)}}function Om(s){const t=[],e=[],n=[];let i=s;const r=s-tr+1+Cl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-tr?l=Cl[o-s+tr-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),u=-h,c=1+h,d=[u,u,c,u,c,c,u,u,c,c,u,c],f=6,v=6,g=3,m=2,p=1,_=new Float32Array(g*v*f),x=new Float32Array(m*v*f),y=new Float32Array(p*v*f);for(let b=0;b<f;b++){const I=b%3*2/3-1,D=b>2?0:-1,E=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];_.set(E,g*v*b),x.set(d,m*v*b);const M=[b,b,b,b,b,b];y.set(M,p*v*b)}const T=new fn;T.setAttribute("position",new tn(_,g)),T.setAttribute("uv",new tn(x,m)),T.setAttribute("faceIndex",new tn(y,p)),t.push(T),i>tr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nl(s,t,e){const n=new Ai(s,t,e);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function zm(s,t,e){const n=new Float32Array(Si),i=new W(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ha(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Dl(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ha(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ul(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ha(){return`

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
	`}function Vm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Yo||l===jo,u=l===or||l===ar;if(h||u){let c=t.get(a);const d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Il(s)),c=h?e.fromEquirectangular(a,c):e.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),c.texture;if(c!==void 0)return c.texture;{const f=a.image;return h&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Il(s)),c=h?e.fromEquirectangular(a):e.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),a.addEventListener("dispose",r),c.texture):null}}}return a}function i(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function km(s,t,e,n){const i={},r=new WeakMap;function o(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const v in d)t.update(d[v],s.ARRAY_BUFFER);const f=c.morphAttributes;for(const v in f){const g=f[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function h(c){const d=[],f=c.index,v=c.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let x=0,y=_.length;x<y;x+=3){const T=_[x+0],b=_[x+1],I=_[x+2];d.push(T,b,b,I,I,T)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const T=x+0,b=x+1,I=x+2;d.push(T,b,b,I,I,T)}}else return;const m=new(th(d)?ah:oh)(d,1);m.version=g;const p=r.get(c);p&&t.remove(p),r.set(c,m)}function u(c){const d=r.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return r.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function Gm(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,v){v!==0&&(s.drawElementsInstanced(n,f,r,d*o,v),e.update(f,n,v))}function u(d,f,v){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/o,f[m]);else{g.multiDrawElementsWEBGL(n,f,0,r,d,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];e.update(m,n,1)}}function c(d,f,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,v);let p=0;for(let _=0;_<v;_++)p+=f[_];for(let _=0;_<g.length;_++)e.update(p,n,g[_])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=c}function Wm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Xm(s,t,e){const n=new WeakMap,i=new xe;function r(o,a,l){const h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==c){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let y=a.attributes.position.count*x,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const b=new Float32Array(y*T*4*c),I=new ih(b,y,T,c);I.type=Rn,I.needsUpdate=!0;const D=x*4;for(let M=0;M<c;M++){const C=m[M],O=p[M],P=_[M],k=y*T*4*M;for(let q=0;q<C.count;q++){const rt=q*D;f===!0&&(i.fromBufferAttribute(C,q),b[k+rt+0]=i.x,b[k+rt+1]=i.y,b[k+rt+2]=i.z,b[k+rt+3]=0),v===!0&&(i.fromBufferAttribute(O,q),b[k+rt+4]=i.x,b[k+rt+5]=i.y,b[k+rt+6]=i.z,b[k+rt+7]=0),g===!0&&(i.fromBufferAttribute(P,q),b[k+rt+8]=i.x,b[k+rt+9]=i.y,b[k+rt+10]=i.z,b[k+rt+11]=P.itemSize===4?i.w:1)}}d={count:c,texture:I,size:new te(y,T)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<h.length;g++)f+=h[g];const v=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function qm(s,t,e,n){let i=new WeakMap;function r(l){const h=n.render.frame,u=l.geometry,c=t.get(l,u);if(i.get(c)!==h&&(t.update(c),i.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return c}function o(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class dh extends Oe{constructor(t,e,n,i,r,o,a,l,h,u){if(u=u!==void 0?u:ir,u!==ir&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=cr),n===void 0&&u===zr&&(n=qr),super(null,i,r,o,a,l,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=l!==void 0?l:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fh=new Oe,ph=new dh(1,1);ph.compareFunction=Jc;const mh=new ih,vh=new Ld,gh=new hh,Fl=[],Bl=[],Ol=new Float32Array(16),zl=new Float32Array(9),Vl=new Float32Array(4);function vr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Fl[i];if(r===void 0&&(r=new Float32Array(i),Fl[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zs(s,t){let e=Bl[t];e===void 0&&(e=new Int32Array(t),Bl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ym(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function Km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function Zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function $m(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Vl.set(n),s.uniformMatrix2fv(this.addr,!1,Vl),Ue(e,n)}}function Qm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;zl.set(n),s.uniformMatrix3fv(this.addr,!1,zl),Ue(e,n)}}function Jm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Ol.set(n),s.uniformMatrix4fv(this.addr,!1,Ol),Ue(e,n)}}function tv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ev(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function nv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function iv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function rv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function sv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function ov(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function av(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function lv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?ph:fh;e.setTexture2D(t||r,i)}function cv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vh,i)}function hv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gh,i)}function uv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mh,i)}function dv(s){switch(s){case 5126:return Ym;case 35664:return jm;case 35665:return Km;case 35666:return Zm;case 35674:return $m;case 35675:return Qm;case 35676:return Jm;case 5124:case 35670:return tv;case 35667:case 35671:return ev;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return rv;case 36294:return sv;case 36295:return ov;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}function fv(s,t){s.uniform1fv(this.addr,t)}function pv(s,t){const e=vr(t,this.size,2);s.uniform2fv(this.addr,e)}function mv(s,t){const e=vr(t,this.size,3);s.uniform3fv(this.addr,e)}function vv(s,t){const e=vr(t,this.size,4);s.uniform4fv(this.addr,e)}function gv(s,t){const e=vr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _v(s,t){const e=vr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function yv(s,t){const e=vr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function xv(s,t){s.uniform1iv(this.addr,t)}function Mv(s,t){s.uniform2iv(this.addr,t)}function Sv(s,t){s.uniform3iv(this.addr,t)}function Ev(s,t){s.uniform4iv(this.addr,t)}function wv(s,t){s.uniform1uiv(this.addr,t)}function Tv(s,t){s.uniform2uiv(this.addr,t)}function Av(s,t){s.uniform3uiv(this.addr,t)}function bv(s,t){s.uniform4uiv(this.addr,t)}function Rv(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||fh,r[o])}function Cv(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vh,r[o])}function Pv(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||gh,r[o])}function Lv(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||mh,r[o])}function Iv(s){switch(s){case 5126:return fv;case 35664:return pv;case 35665:return mv;case 35666:return vv;case 35674:return gv;case 35675:return _v;case 35676:return yv;case 5124:case 35670:return xv;case 35667:case 35671:return Mv;case 35668:case 35672:return Sv;case 35669:case 35673:return Ev;case 5125:return wv;case 36294:return Tv;case 36295:return Av;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Lv}}class Nv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dv(e.type)}}class Dv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Iv(e.type)}}class Uv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Io=/(\w+)(\])?(\[|\.)?/g;function Hl(s,t){s.seq.push(t),s.map[t.id]=t}function Fv(s,t,e){const n=s.name,i=n.length;for(Io.lastIndex=0;;){const r=Io.exec(n),o=Io.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){Hl(e,h===void 0?new Nv(a,s,t):new Dv(a,s,t));break}else{let c=e.map[a];c===void 0&&(c=new Uv(a),Hl(e,c)),e=c}}}class Ns{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Fv(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function kl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Bv=37297;let Ov=0;function zv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Vv(s){const t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(s);let n;switch(t===e?n="":t===Os&&e===Bs?n="LinearDisplayP3ToLinearSRGB":t===Bs&&e===Os&&(n="LinearSRGBToLinearDisplayP3"),s){case We:case Ys:return[n,"LinearTransferOETF"];case Ye:case oa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Gl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+zv(s.getShaderSource(t),o)}else return i}function Hv(s,t){const e=Vv(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kv(s,t){let e;switch(t){case Nu:e="Linear";break;case Du:e="Reinhard";break;case Uu:e="OptimizedCineon";break;case Fu:e="ACESFilmic";break;case Ou:e="AgX";break;case zu:e="Neutral";break;case Bu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Wv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ur(s){return s!==""}function Wl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(s){return s.replace(qv,jv)}const Yv=new Map;function jv(s,t){let e=se[t];if(e===void 0){const n=Yv.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $o(e)}const Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(s){return s.replace(Kv,Zv)}function Zv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $v(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Qv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case Xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function tg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ra:t="ENVMAP_BLENDING_MULTIPLY";break;case Lu:t="ENVMAP_BLENDING_MIX";break;case Iu:t="ENVMAP_BLENDING_ADD";break}return t}function eg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ng(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=$v(e),h=Qv(e),u=Jv(e),c=tg(e),d=eg(e),f=Gv(e),v=Wv(r),g=i.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(m=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?se.tonemapping_pars_fragment:"",e.toneMapping!==oi?kv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Hv("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),o=$o(o),o=Wl(o,e),o=Xl(o,e),a=$o(a),a=Wl(a,e),a=Xl(a,e),o=ql(o),a=ql(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=_+m+o,y=_+p+a,T=kl(i,i.VERTEX_SHADER,x),b=kl(i,i.FRAGMENT_SHADER,y);i.attachShader(g,T),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function I(C){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(T).trim(),k=i.getShaderInfoLog(b).trim();let q=!0,rt=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,T,b);else{const G=Gl(i,T,"vertex"),L=Gl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+G+`
`+L)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(P===""||k==="")&&(rt=!1);rt&&(C.diagnostics={runnable:q,programLog:O,vertexShader:{log:P,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(T),i.deleteShader(b),D=new Ns(i,g),E=Xv(i,g)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,Bv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ov++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=b,this}let ig=0;class rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new sg(t),e.set(t,n)),n}}class sg{constructor(t){this.id=ig++,this.code=t,this.usedTimes=0}}function og(s,t,e,n,i,r,o){const a=new rh,l=new rg,h=new Set,u=[],c=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return h.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,O,P){const k=O.fog,q=P.geometry,rt=E.isMeshStandardMaterial?O.environment:null,G=(E.isMeshStandardMaterial?e:t).get(E.envMap||rt),L=G&&G.mapping===Xs?G.image.height:null,Q=v[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Y=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,B=Y!==void 0?Y.length:0;let J=0;q.morphAttributes.position!==void 0&&(J=1),q.morphAttributes.normal!==void 0&&(J=2),q.morphAttributes.color!==void 0&&(J=3);let z,A,R,H;if(Q){const le=bn[Q];z=le.vertexShader,A=le.fragmentShader}else z=E.vertexShader,A=E.fragmentShader,l.update(E),R=l.getVertexShaderID(E),H=l.getFragmentShaderID(E);const $=s.getRenderTarget(),it=P.isInstancedMesh===!0,K=P.isBatchedMesh===!0,N=!!E.map,ut=!!E.matcap,vt=!!G,Mt=!!E.aoMap,dt=!!E.lightMap,st=!!E.bumpMap,lt=!!E.normalMap,Vt=!!E.displacementMap,Ot=!!E.emissiveMap,U=!!E.metalnessMap,S=!!E.roughnessMap,et=E.anisotropy>0,at=E.clearcoat>0,ct=E.dispersion>0,pt=E.iridescence>0,Rt=E.sheen>0,St=E.transmission>0,gt=et&&!!E.anisotropyMap,Wt=at&&!!E.clearcoatMap,wt=at&&!!E.clearcoatNormalMap,Gt=at&&!!E.clearcoatRoughnessMap,ne=pt&&!!E.iridescenceMap,qt=pt&&!!E.iridescenceThicknessMap,Ut=Rt&&!!E.sheenColorMap,jt=Rt&&!!E.sheenRoughnessMap,ee=!!E.specularMap,ue=!!E.specularColorMap,Zt=!!E.specularIntensityMap,Z=St&&!!E.transmissionMap,mt=St&&!!E.thicknessMap,ht=!!E.gradientMap,Ct=!!E.alphaMap,Pt=E.alphaTest>0,re=!!E.alphaHash,ce=!!E.extensions;let de=oi;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(de=s.toneMapping);const Ae={shaderID:Q,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:A,defines:E.defines,customVertexShaderID:R,customFragmentShaderID:H,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:K,instancing:it,instancingColor:it&&P.instanceColor!==null,instancingMorph:it&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:We,alphaToCoverage:!!E.alphaToCoverage,map:N,matcap:ut,envMap:vt,envMapMode:vt&&G.mapping,envMapCubeUVHeight:L,aoMap:Mt,lightMap:dt,bumpMap:st,normalMap:lt,displacementMap:d&&Vt,emissiveMap:Ot,normalMapObjectSpace:lt&&E.normalMapType===td,normalMapTangentSpace:lt&&E.normalMapType===sa,metalnessMap:U,roughnessMap:S,anisotropy:et,anisotropyMap:gt,clearcoat:at,clearcoatMap:Wt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Gt,dispersion:ct,iridescence:pt,iridescenceMap:ne,iridescenceThicknessMap:qt,sheen:Rt,sheenColorMap:Ut,sheenRoughnessMap:jt,specularMap:ee,specularColorMap:ue,specularIntensityMap:Zt,transmission:St,transmissionMap:Z,thicknessMap:mt,gradientMap:ht,opaque:E.transparent===!1&&E.blending===nr&&E.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Pt,alphaHash:re,combine:E.combine,mapUv:N&&g(E.map.channel),aoMapUv:Mt&&g(E.aoMap.channel),lightMapUv:dt&&g(E.lightMap.channel),bumpMapUv:st&&g(E.bumpMap.channel),normalMapUv:lt&&g(E.normalMap.channel),displacementMapUv:Vt&&g(E.displacementMap.channel),emissiveMapUv:Ot&&g(E.emissiveMap.channel),metalnessMapUv:U&&g(E.metalnessMap.channel),roughnessMapUv:S&&g(E.roughnessMap.channel),anisotropyMapUv:gt&&g(E.anisotropyMap.channel),clearcoatMapUv:Wt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:jt&&g(E.sheenRoughnessMap.channel),specularMapUv:ee&&g(E.specularMap.channel),specularColorMapUv:ue&&g(E.specularColorMap.channel),specularIntensityMapUv:Zt&&g(E.specularIntensityMap.channel),transmissionMapUv:Z&&g(E.transmissionMap.channel),thicknessMapUv:mt&&g(E.thicknessMap.channel),alphaMapUv:Ct&&g(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(lt||et),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!q.attributes.uv&&(N||Ct),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:P.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,useLegacyLights:s._useLegacyLights,decodeVideoTexture:N&&E.map.isVideoTexture===!0&&fe.getTransfer(E.map.colorSpace)===we,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_n,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ce&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ce&&E.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ae.vertexUv1s=h.has(1),Ae.vertexUv2s=h.has(2),Ae.vertexUv3s=h.has(3),h.clear(),Ae}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(_(M,E),x(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),E.push(a.mask)}function y(E){const M=v[E.type];let C;if(M){const O=bn[M];C=Gd.clone(O.uniforms)}else C=E.uniforms;return C}function T(E,M){let C;for(let O=0,P=u.length;O<P;O++){const k=u[O];if(k.cacheKey===M){C=k,++C.usedTimes;break}}return C===void 0&&(C=new ng(s,M,E,r),u.push(C)),C}function b(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function I(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:I,programs:u,dispose:D}}function ag(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function lg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function jl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Kl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(c,d,f,v,g,m){let p=s[t];return p===void 0?(p={id:c.id,object:c,geometry:d,material:f,groupOrder:v,renderOrder:c.renderOrder,z:g,group:m},s[t]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=c.renderOrder,p.z=g,p.group=m),t++,p}function a(c,d,f,v,g,m){const p=o(c,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(c,d,f,v,g,m){const p=o(c,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(c,d){e.length>1&&e.sort(c||lg),n.length>1&&n.sort(d||jl),i.length>1&&i.sort(d||jl)}function u(){for(let c=t,d=s.length;c<d;c++){const f=s[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:h}}function cg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Kl,s.set(n,[o])):i>=r.length?(o=new Kl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function hg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Kt};break;case"SpotLight":e={position:new W,direction:new W,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[t.id]=e,e}}}function ug(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let dg=0;function fg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function pg(s){const t=new hg,e=ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new W);const i=new W,r=new ie,o=new ie;function a(h,u){let c=0,d=0,f=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let v=0,g=0,m=0,p=0,_=0,x=0,y=0,T=0,b=0,I=0,D=0;h.sort(fg);const E=u===!0?Math.PI:1;for(let C=0,O=h.length;C<O;C++){const P=h[C],k=P.color,q=P.intensity,rt=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=k.r*q*E,d+=k.g*q*E,f+=k.b*q*E;else if(P.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(P.sh.coefficients[L],q);D++}else if(P.isDirectionalLight){const L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const Q=P.shadow,Y=e.get(P);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.directionalShadow[v]=Y,n.directionalShadowMap[v]=G,n.directionalShadowMatrix[v]=P.shadow.matrix,x++}n.directional[v]=L,v++}else if(P.isSpotLight){const L=t.get(P);L.position.setFromMatrixPosition(P.matrixWorld),L.color.copy(k).multiplyScalar(q*E),L.distance=rt,L.coneCos=Math.cos(P.angle),L.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),L.decay=P.decay,n.spot[m]=L;const Q=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[m]=Q.matrix,P.castShadow){const Y=e.get(P);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.spotShadow[m]=Y,n.spotShadowMap[m]=G,T++}m++}else if(P.isRectAreaLight){const L=t.get(P);L.color.copy(k).multiplyScalar(q),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=L,p++}else if(P.isPointLight){const L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity*E),L.distance=P.distance,L.decay=P.decay,P.castShadow){const Q=P.shadow,Y=e.get(P);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=L,g++}else if(P.isHemisphereLight){const L=t.get(P);L.skyColor.copy(P.color).multiplyScalar(q*E),L.groundColor.copy(P.groundColor).multiplyScalar(q*E),n.hemi[_]=L,_++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Bt.LTC_FLOAT_1,n.rectAreaLTC2=Bt.LTC_FLOAT_2):(n.rectAreaLTC1=Bt.LTC_HALF_1,n.rectAreaLTC2=Bt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=f;const M=n.hash;(M.directionalLength!==v||M.pointLength!==g||M.spotLength!==m||M.rectAreaLength!==p||M.hemiLength!==_||M.numDirectionalShadows!==x||M.numPointShadows!==y||M.numSpotShadows!==T||M.numSpotMaps!==b||M.numLightProbes!==D)&&(n.directional.length=v,n.spot.length=m,n.rectArea.length=p,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=T+b-I,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=D,M.directionalLength=v,M.pointLength=g,M.spotLength=m,M.rectAreaLength=p,M.hemiLength=_,M.numDirectionalShadows=x,M.numPointShadows=y,M.numSpotShadows=T,M.numSpotMaps=b,M.numLightProbes=D,n.version=dg++)}function l(h,u){let c=0,d=0,f=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,_=h.length;p<_;p++){const x=h[p];if(x.isDirectionalLight){const y=n.directional[c];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),c++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Zl(s){const t=new pg(s),e=[],n=[];function i(u){h.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mg(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Zl(s),t.set(i,[a])):r>=o.length?(a=new Zl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class vg extends hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gg extends hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
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
}`;function xg(s,t,e){let n=new la;const i=new te,r=new te,o=new xe,a=new vg({depthPacking:Ju}),l=new gg,h={},u=e.maxTextureSize,c={[Gn]:nn,[nn]:Gn,[_n]:_n},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:_g,fragmentShader:yg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new fn;v.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ge(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let p=this.type;this.render=function(b,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),O=s.state;O.setBlending(si),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const P=p!==zn&&this.type===zn,k=p===zn&&this.type!==zn;for(let q=0,rt=b.length;q<rt;q++){const G=b[q],L=G.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const Q=L.getFrameExtents();if(i.multiply(Q),r.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Q.x),i.x=r.x*Q.x,L.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Q.y),i.y=r.y*Q.y,L.mapSize.y=r.y)),L.map===null||P===!0||k===!0){const B=this.type!==zn?{minFilter:ke,magFilter:ke}:{};L.map!==null&&L.map.dispose(),L.map=new Ai(i.x,i.y,B),L.map.texture.name=G.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();const Y=L.getViewportCount();for(let B=0;B<Y;B++){const J=L.getViewport(B);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(o),L.updateMatrices(G,B),n=L.getFrustum(),y(I,D,L.camera,G,this.type)}L.isPointLightShadow!==!0&&this.type===zn&&_(L,D),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,C)};function _(b,I){const D=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ai(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(I,null,D,d,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(I,null,D,f,g,null)}function x(b,I,D,E){let M=null;const C=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?l:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const O=M.uuid,P=I.uuid;let k=h[O];k===void 0&&(k={},h[O]=k);let q=k[P];q===void 0&&(q=M.clone(),k[P]=q,I.addEventListener("dispose",T)),M=q}if(M.visible=I.visible,M.wireframe=I.wireframe,E===zn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:c[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=s.properties.get(M);O.light=D}return M}function y(b,I,D,E,M){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===zn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const P=t.update(b),k=b.material;if(Array.isArray(k)){const q=P.groups;for(let rt=0,G=q.length;rt<G;rt++){const L=q[rt],Q=k[L.materialIndex];if(Q&&Q.visible){const Y=x(b,Q,E,M);b.onBeforeShadow(s,b,I,D,P,Y,L),s.renderBufferDirect(D,null,P,Y,b,L),b.onAfterShadow(s,b,I,D,P,Y,L)}}}else if(k.visible){const q=x(b,k,E,M);b.onBeforeShadow(s,b,I,D,P,q,null),s.renderBufferDirect(D,null,P,q,b,null),b.onAfterShadow(s,b,I,D,P,q,null)}}const O=b.children;for(let P=0,k=O.length;P<k;P++)y(O[P],I,D,E,M)}function T(b){b.target.removeEventListener("dispose",T);for(const D in h){const E=h[D],M=b.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Mg(s){function t(){let Z=!1;const mt=new xe;let ht=null;const Ct=new xe(0,0,0,0);return{setMask:function(Pt){ht!==Pt&&!Z&&(s.colorMask(Pt,Pt,Pt,Pt),ht=Pt)},setLocked:function(Pt){Z=Pt},setClear:function(Pt,re,ce,de,Ae){Ae===!0&&(Pt*=de,re*=de,ce*=de),mt.set(Pt,re,ce,de),Ct.equals(mt)===!1&&(s.clearColor(Pt,re,ce,de),Ct.copy(mt))},reset:function(){Z=!1,ht=null,Ct.set(-1,0,0,0)}}}function e(){let Z=!1,mt=null,ht=null,Ct=null;return{setTest:function(Pt){Pt?H(s.DEPTH_TEST):$(s.DEPTH_TEST)},setMask:function(Pt){mt!==Pt&&!Z&&(s.depthMask(Pt),mt=Pt)},setFunc:function(Pt){if(ht!==Pt){switch(Pt){case wu:s.depthFunc(s.NEVER);break;case Tu:s.depthFunc(s.ALWAYS);break;case Au:s.depthFunc(s.LESS);break;case Ds:s.depthFunc(s.LEQUAL);break;case bu:s.depthFunc(s.EQUAL);break;case Ru:s.depthFunc(s.GEQUAL);break;case Cu:s.depthFunc(s.GREATER);break;case Pu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=Pt}},setLocked:function(Pt){Z=Pt},setClear:function(Pt){Ct!==Pt&&(s.clearDepth(Pt),Ct=Pt)},reset:function(){Z=!1,mt=null,ht=null,Ct=null}}}function n(){let Z=!1,mt=null,ht=null,Ct=null,Pt=null,re=null,ce=null,de=null,Ae=null;return{setTest:function(le){Z||(le?H(s.STENCIL_TEST):$(s.STENCIL_TEST))},setMask:function(le){mt!==le&&!Z&&(s.stencilMask(le),mt=le)},setFunc:function(le,pe,ot){(ht!==le||Ct!==pe||Pt!==ot)&&(s.stencilFunc(le,pe,ot),ht=le,Ct=pe,Pt=ot)},setOp:function(le,pe,ot){(re!==le||ce!==pe||de!==ot)&&(s.stencilOp(le,pe,ot),re=le,ce=pe,de=ot)},setLocked:function(le){Z=le},setClear:function(le){Ae!==le&&(s.clearStencil(le),Ae=le)},reset:function(){Z=!1,mt=null,ht=null,Ct=null,Pt=null,re=null,ce=null,de=null,Ae=null}}}const i=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let h={},u={},c=new WeakMap,d=[],f=null,v=!1,g=null,m=null,p=null,_=null,x=null,y=null,T=null,b=new Kt(0,0,0),I=0,D=!1,E=null,M=null,C=null,O=null,P=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,rt=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=rt>=1):G.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=rt>=2);let L=null,Q={};const Y=s.getParameter(s.SCISSOR_BOX),B=s.getParameter(s.VIEWPORT),J=new xe().fromArray(Y),z=new xe().fromArray(B);function A(Z,mt,ht,Ct){const Pt=new Uint8Array(4),re=s.createTexture();s.bindTexture(Z,re),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ce=0;ce<ht;ce++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,Pt):s.texImage2D(mt+ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pt);return re}const R={};R[s.TEXTURE_2D]=A(s.TEXTURE_2D,s.TEXTURE_2D,1),R[s.TEXTURE_CUBE_MAP]=A(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[s.TEXTURE_2D_ARRAY]=A(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),R[s.TEXTURE_3D]=A(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),H(s.DEPTH_TEST),r.setFunc(Ds),st(!1),lt(ba),H(s.CULL_FACE),Mt(si);function H(Z){h[Z]!==!0&&(s.enable(Z),h[Z]=!0)}function $(Z){h[Z]!==!1&&(s.disable(Z),h[Z]=!1)}function it(Z,mt){return u[Z]!==mt?(s.bindFramebuffer(Z,mt),u[Z]=mt,Z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),Z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function K(Z,mt){let ht=d,Ct=!1;if(Z){ht=c.get(mt),ht===void 0&&(ht=[],c.set(mt,ht));const Pt=Z.textures;if(ht.length!==Pt.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let re=0,ce=Pt.length;re<ce;re++)ht[re]=s.COLOR_ATTACHMENT0+re;ht.length=Pt.length,Ct=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,Ct=!0);Ct&&s.drawBuffers(ht)}function N(Z){return f!==Z?(s.useProgram(Z),f=Z,!0):!1}const ut={[Mi]:s.FUNC_ADD,[au]:s.FUNC_SUBTRACT,[lu]:s.FUNC_REVERSE_SUBTRACT};ut[cu]=s.MIN,ut[hu]=s.MAX;const vt={[uu]:s.ZERO,[du]:s.ONE,[fu]:s.SRC_COLOR,[Xo]:s.SRC_ALPHA,[yu]:s.SRC_ALPHA_SATURATE,[gu]:s.DST_COLOR,[mu]:s.DST_ALPHA,[pu]:s.ONE_MINUS_SRC_COLOR,[qo]:s.ONE_MINUS_SRC_ALPHA,[_u]:s.ONE_MINUS_DST_COLOR,[vu]:s.ONE_MINUS_DST_ALPHA,[xu]:s.CONSTANT_COLOR,[Mu]:s.ONE_MINUS_CONSTANT_COLOR,[Su]:s.CONSTANT_ALPHA,[Eu]:s.ONE_MINUS_CONSTANT_ALPHA};function Mt(Z,mt,ht,Ct,Pt,re,ce,de,Ae,le){if(Z===si){v===!0&&($(s.BLEND),v=!1);return}if(v===!1&&(H(s.BLEND),v=!0),Z!==ou){if(Z!==g||le!==D){if((m!==Mi||x!==Mi)&&(s.blendEquation(s.FUNC_ADD),m=Mi,x=Mi),le)switch(Z){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ra:s.blendFunc(s.ONE,s.ONE);break;case Ca:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ra:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ca:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}p=null,_=null,y=null,T=null,b.set(0,0,0),I=0,g=Z,D=le}return}Pt=Pt||mt,re=re||ht,ce=ce||Ct,(mt!==m||Pt!==x)&&(s.blendEquationSeparate(ut[mt],ut[Pt]),m=mt,x=Pt),(ht!==p||Ct!==_||re!==y||ce!==T)&&(s.blendFuncSeparate(vt[ht],vt[Ct],vt[re],vt[ce]),p=ht,_=Ct,y=re,T=ce),(de.equals(b)===!1||Ae!==I)&&(s.blendColor(de.r,de.g,de.b,Ae),b.copy(de),I=Ae),g=Z,D=!1}function dt(Z,mt){Z.side===_n?$(s.CULL_FACE):H(s.CULL_FACE);let ht=Z.side===nn;mt&&(ht=!ht),st(ht),Z.blending===nr&&Z.transparent===!1?Mt(si):Mt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),r.setFunc(Z.depthFunc),r.setTest(Z.depthTest),r.setMask(Z.depthWrite),i.setMask(Z.colorWrite);const Ct=Z.stencilWrite;o.setTest(Ct),Ct&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Ot(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?H(s.SAMPLE_ALPHA_TO_COVERAGE):$(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(Z){E!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),E=Z)}function lt(Z){Z!==ru?(H(s.CULL_FACE),Z!==M&&(Z===ba?s.cullFace(s.BACK):Z===su?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$(s.CULL_FACE),M=Z}function Vt(Z){Z!==C&&(q&&s.lineWidth(Z),C=Z)}function Ot(Z,mt,ht){Z?(H(s.POLYGON_OFFSET_FILL),(O!==mt||P!==ht)&&(s.polygonOffset(mt,ht),O=mt,P=ht)):$(s.POLYGON_OFFSET_FILL)}function U(Z){Z?H(s.SCISSOR_TEST):$(s.SCISSOR_TEST)}function S(Z){Z===void 0&&(Z=s.TEXTURE0+k-1),L!==Z&&(s.activeTexture(Z),L=Z)}function et(Z,mt,ht){ht===void 0&&(L===null?ht=s.TEXTURE0+k-1:ht=L);let Ct=Q[ht];Ct===void 0&&(Ct={type:void 0,texture:void 0},Q[ht]=Ct),(Ct.type!==Z||Ct.texture!==mt)&&(L!==ht&&(s.activeTexture(ht),L=ht),s.bindTexture(Z,mt||R[Z]),Ct.type=Z,Ct.texture=mt)}function at(){const Z=Q[L];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Rt(){try{s.texSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function gt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function wt(){try{s.texStorage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Gt(){try{s.texStorage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ne(){try{s.texImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function qt(){try{s.texImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ut(Z){J.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),J.copy(Z))}function jt(Z){z.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),z.copy(Z))}function ee(Z,mt){let ht=l.get(mt);ht===void 0&&(ht=new WeakMap,l.set(mt,ht));let Ct=ht.get(Z);Ct===void 0&&(Ct=s.getUniformBlockIndex(mt,Z.name),ht.set(Z,Ct))}function ue(Z,mt){const Ct=l.get(mt).get(Z);a.get(mt)!==Ct&&(s.uniformBlockBinding(mt,Ct,Z.__bindingPointIndex),a.set(mt,Ct))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},L=null,Q={},u={},c=new WeakMap,d=[],f=null,v=!1,g=null,m=null,p=null,_=null,x=null,y=null,T=null,b=new Kt(0,0,0),I=0,D=!1,E=null,M=null,C=null,O=null,P=null,J.set(0,0,s.canvas.width,s.canvas.height),z.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:H,disable:$,bindFramebuffer:it,drawBuffers:K,useProgram:N,setBlending:Mt,setMaterial:dt,setFlipSided:st,setCullFace:lt,setLineWidth:Vt,setPolygonOffset:Ot,setScissorTest:U,activeTexture:S,bindTexture:et,unbindTexture:at,compressedTexImage2D:ct,compressedTexImage3D:pt,texImage2D:ne,texImage3D:qt,updateUBOMapping:ee,uniformBlockBinding:ue,texStorage2D:wt,texStorage3D:Gt,texSubImage2D:Rt,texSubImage3D:St,compressedTexSubImage2D:gt,compressedTexSubImage3D:Wt,scissor:Ut,viewport:jt,reset:Zt}}function Sg(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new te,u=new WeakMap;let c;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,S){return f?new OffscreenCanvas(U,S):Hr("canvas")}function g(U,S,et){let at=1;const ct=Ot(U);if((ct.width>et||ct.height>et)&&(at=et/Math.max(ct.width,ct.height)),at<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const pt=Math.floor(at*ct.width),Rt=Math.floor(at*ct.height);c===void 0&&(c=v(pt,Rt));const St=S?v(pt,Rt):c;return St.width=pt,St.height=Rt,St.getContext("2d").drawImage(U,0,0,pt,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+pt+"x"+Rt+")."),St}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),U;return U}function m(U){return U.generateMipmaps&&U.minFilter!==ke&&U.minFilter!==an}function p(U){s.generateMipmap(U)}function _(U,S,et,at,ct=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let pt=S;if(S===s.RED&&(et===s.FLOAT&&(pt=s.R32F),et===s.HALF_FLOAT&&(pt=s.R16F),et===s.UNSIGNED_BYTE&&(pt=s.R8)),S===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(pt=s.R8UI),et===s.UNSIGNED_SHORT&&(pt=s.R16UI),et===s.UNSIGNED_INT&&(pt=s.R32UI),et===s.BYTE&&(pt=s.R8I),et===s.SHORT&&(pt=s.R16I),et===s.INT&&(pt=s.R32I)),S===s.RG&&(et===s.FLOAT&&(pt=s.RG32F),et===s.HALF_FLOAT&&(pt=s.RG16F),et===s.UNSIGNED_BYTE&&(pt=s.RG8)),S===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(pt=s.RG8UI),et===s.UNSIGNED_SHORT&&(pt=s.RG16UI),et===s.UNSIGNED_INT&&(pt=s.RG32UI),et===s.BYTE&&(pt=s.RG8I),et===s.SHORT&&(pt=s.RG16I),et===s.INT&&(pt=s.RG32I)),S===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(pt=s.RGB9_E5),S===s.RGBA){const Rt=ct?Fs:fe.getTransfer(at);et===s.FLOAT&&(pt=s.RGBA32F),et===s.HALF_FLOAT&&(pt=s.RGBA16F),et===s.UNSIGNED_BYTE&&(pt=Rt===we?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function x(U,S){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==ke&&U.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function y(U){const S=U.target;S.removeEventListener("dispose",y),b(S),S.isVideoTexture&&u.delete(S)}function T(U){const S=U.target;S.removeEventListener("dispose",T),D(S)}function b(U){const S=n.get(U);if(S.__webglInit===void 0)return;const et=U.source,at=d.get(et);if(at){const ct=at[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&I(U),Object.keys(at).length===0&&d.delete(et)}n.remove(U)}function I(U){const S=n.get(U);s.deleteTexture(S.__webglTexture);const et=U.source,at=d.get(et);delete at[S.__cacheKey],o.memory.textures--}function D(U){const S=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(S.__webglFramebuffer[at]))for(let ct=0;ct<S.__webglFramebuffer[at].length;ct++)s.deleteFramebuffer(S.__webglFramebuffer[at][ct]);else s.deleteFramebuffer(S.__webglFramebuffer[at]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[at])}else{if(Array.isArray(S.__webglFramebuffer))for(let at=0;at<S.__webglFramebuffer.length;at++)s.deleteFramebuffer(S.__webglFramebuffer[at]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let at=0;at<S.__webglColorRenderbuffer.length;at++)S.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[at]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const et=U.textures;for(let at=0,ct=et.length;at<ct;at++){const pt=n.get(et[at]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(et[at])}n.remove(U)}let E=0;function M(){E=0}function C(){const U=E;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),E+=1,U}function O(U){const S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function P(U,S){const et=n.get(U);if(U.isVideoTexture&&lt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const at=U.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(et,U,S);return}}e.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+S)}function k(U,S){const et=n.get(U);if(U.version>0&&et.__version!==U.version){J(et,U,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+S)}function q(U,S){const et=n.get(U);if(U.version>0&&et.__version!==U.version){J(et,U,S);return}e.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+S)}function rt(U,S){const et=n.get(U);if(U.version>0&&et.__version!==U.version){z(et,U,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+S)}const G={[lr]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[Us]:s.MIRRORED_REPEAT},L={[ke]:s.NEAREST,[Gc]:s.NEAREST_MIPMAP_NEAREST,[Dr]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[Is]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},Q={[ed]:s.NEVER,[ad]:s.ALWAYS,[nd]:s.LESS,[Jc]:s.LEQUAL,[id]:s.EQUAL,[od]:s.GEQUAL,[rd]:s.GREATER,[sd]:s.NOTEQUAL};function Y(U,S){if(S.type===Rn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===Is||S.magFilter===Dr||S.magFilter===Vn||S.minFilter===an||S.minFilter===Is||S.minFilter===Dr||S.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,G[S.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,G[S.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,G[S.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,L[S.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,L[S.minFilter]),S.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ke||S.minFilter!==Dr&&S.minFilter!==Vn||S.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function B(U,S){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",y));const at=S.source;let ct=d.get(at);ct===void 0&&(ct={},d.set(at,ct));const pt=O(S);if(pt!==U.__cacheKey){ct[pt]===void 0&&(ct[pt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,et=!0),ct[pt].usedTimes++;const Rt=ct[U.__cacheKey];Rt!==void 0&&(ct[U.__cacheKey].usedTimes--,Rt.usedTimes===0&&I(S)),U.__cacheKey=pt,U.__webglTexture=ct[pt].texture}return et}function J(U,S,et){let at=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(at=s.TEXTURE_3D);const ct=B(U,S),pt=S.source;e.bindTexture(at,U.__webglTexture,s.TEXTURE0+et);const Rt=n.get(pt);if(pt.version!==Rt.__version||ct===!0){e.activeTexture(s.TEXTURE0+et);const St=fe.getPrimaries(fe.workingColorSpace),gt=S.colorSpace===ti?null:fe.getPrimaries(S.colorSpace),Wt=S.colorSpace===ti||St===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let wt=g(S.image,!1,i.maxTextureSize);wt=Vt(S,wt);const Gt=r.convert(S.format,S.colorSpace),ne=r.convert(S.type);let qt=_(S.internalFormat,Gt,ne,S.colorSpace,S.isVideoTexture);Y(at,S);let Ut;const jt=S.mipmaps,ee=S.isVideoTexture!==!0,ue=Rt.__version===void 0||ct===!0,Zt=pt.dataReady,Z=x(S,wt);if(S.isDepthTexture)qt=s.DEPTH_COMPONENT16,S.type===Rn?qt=s.DEPTH_COMPONENT32F:S.type===cr?qt=s.DEPTH_COMPONENT24:S.type===qr&&(qt=s.DEPTH24_STENCIL8),ue&&(ee?e.texStorage2D(s.TEXTURE_2D,1,qt,wt.width,wt.height):e.texImage2D(s.TEXTURE_2D,0,qt,wt.width,wt.height,0,Gt,ne,null));else if(S.isDataTexture)if(jt.length>0){ee&&ue&&e.texStorage2D(s.TEXTURE_2D,Z,qt,jt[0].width,jt[0].height);for(let mt=0,ht=jt.length;mt<ht;mt++)Ut=jt[mt],ee?Zt&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,Gt,ne,Ut.data):e.texImage2D(s.TEXTURE_2D,mt,qt,Ut.width,Ut.height,0,Gt,ne,Ut.data);S.generateMipmaps=!1}else ee?(ue&&e.texStorage2D(s.TEXTURE_2D,Z,qt,wt.width,wt.height),Zt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt.width,wt.height,Gt,ne,wt.data)):e.texImage2D(s.TEXTURE_2D,0,qt,wt.width,wt.height,0,Gt,ne,wt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ee&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Z,qt,jt[0].width,jt[0].height,wt.depth);for(let mt=0,ht=jt.length;mt<ht;mt++)Ut=jt[mt],S.format!==Mn?Gt!==null?ee?Zt&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,Ut.width,Ut.height,wt.depth,Gt,Ut.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,qt,Ut.width,Ut.height,wt.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?Zt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,Ut.width,Ut.height,wt.depth,Gt,ne,Ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,qt,Ut.width,Ut.height,wt.depth,0,Gt,ne,Ut.data)}else{ee&&ue&&e.texStorage2D(s.TEXTURE_2D,Z,qt,jt[0].width,jt[0].height);for(let mt=0,ht=jt.length;mt<ht;mt++)Ut=jt[mt],S.format!==Mn?Gt!==null?ee?Zt&&e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,Gt,Ut.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,qt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?Zt&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,Gt,ne,Ut.data):e.texImage2D(s.TEXTURE_2D,mt,qt,Ut.width,Ut.height,0,Gt,ne,Ut.data)}else if(S.isDataArrayTexture)ee?(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Z,qt,wt.width,wt.height,wt.depth),Zt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Gt,ne,wt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,qt,wt.width,wt.height,wt.depth,0,Gt,ne,wt.data);else if(S.isData3DTexture)ee?(ue&&e.texStorage3D(s.TEXTURE_3D,Z,qt,wt.width,wt.height,wt.depth),Zt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Gt,ne,wt.data)):e.texImage3D(s.TEXTURE_3D,0,qt,wt.width,wt.height,wt.depth,0,Gt,ne,wt.data);else if(S.isFramebufferTexture){if(ue)if(ee)e.texStorage2D(s.TEXTURE_2D,Z,qt,wt.width,wt.height);else{let mt=wt.width,ht=wt.height;for(let Ct=0;Ct<Z;Ct++)e.texImage2D(s.TEXTURE_2D,Ct,qt,mt,ht,0,Gt,ne,null),mt>>=1,ht>>=1}}else if(jt.length>0){if(ee&&ue){const mt=Ot(jt[0]);e.texStorage2D(s.TEXTURE_2D,Z,qt,mt.width,mt.height)}for(let mt=0,ht=jt.length;mt<ht;mt++)Ut=jt[mt],ee?Zt&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Gt,ne,Ut):e.texImage2D(s.TEXTURE_2D,mt,qt,Gt,ne,Ut);S.generateMipmaps=!1}else if(ee){if(ue){const mt=Ot(wt);e.texStorage2D(s.TEXTURE_2D,Z,qt,mt.width,mt.height)}Zt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Gt,ne,wt)}else e.texImage2D(s.TEXTURE_2D,0,qt,Gt,ne,wt);m(S)&&p(at),Rt.__version=pt.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function z(U,S,et){if(S.image.length!==6)return;const at=B(U,S),ct=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+et);const pt=n.get(ct);if(ct.version!==pt.__version||at===!0){e.activeTexture(s.TEXTURE0+et);const Rt=fe.getPrimaries(fe.workingColorSpace),St=S.colorSpace===ti?null:fe.getPrimaries(S.colorSpace),gt=S.colorSpace===ti||Rt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,wt=S.image[0]&&S.image[0].isDataTexture,Gt=[];for(let ht=0;ht<6;ht++)!Wt&&!wt?Gt[ht]=g(S.image[ht],!0,i.maxCubemapSize):Gt[ht]=wt?S.image[ht].image:S.image[ht],Gt[ht]=Vt(S,Gt[ht]);const ne=Gt[0],qt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type),jt=_(S.internalFormat,qt,Ut,S.colorSpace),ee=S.isVideoTexture!==!0,ue=pt.__version===void 0||at===!0,Zt=ct.dataReady;let Z=x(S,ne);Y(s.TEXTURE_CUBE_MAP,S);let mt;if(Wt){ee&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Z,jt,ne.width,ne.height);for(let ht=0;ht<6;ht++){mt=Gt[ht].mipmaps;for(let Ct=0;Ct<mt.length;Ct++){const Pt=mt[Ct];S.format!==Mn?qt!==null?ee?Zt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,0,0,Pt.width,Pt.height,qt,Pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,jt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?Zt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,0,0,Pt.width,Pt.height,qt,Ut,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct,jt,Pt.width,Pt.height,0,qt,Ut,Pt.data)}}}else{if(mt=S.mipmaps,ee&&ue){mt.length>0&&Z++;const ht=Ot(Gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Z,jt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(wt){ee?Zt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Gt[ht].width,Gt[ht].height,qt,Ut,Gt[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,jt,Gt[ht].width,Gt[ht].height,0,qt,Ut,Gt[ht].data);for(let Ct=0;Ct<mt.length;Ct++){const re=mt[Ct].image[ht].image;ee?Zt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,0,0,re.width,re.height,qt,Ut,re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,jt,re.width,re.height,0,qt,Ut,re.data)}}else{ee?Zt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,qt,Ut,Gt[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,jt,qt,Ut,Gt[ht]);for(let Ct=0;Ct<mt.length;Ct++){const Pt=mt[Ct];ee?Zt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,0,0,qt,Ut,Pt.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ct+1,jt,qt,Ut,Pt.image[ht])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),pt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function A(U,S,et,at,ct,pt){const Rt=r.convert(et.format,et.colorSpace),St=r.convert(et.type),gt=_(et.internalFormat,Rt,St,et.colorSpace);if(!n.get(S).__hasExternalTextures){const wt=Math.max(1,S.width>>pt),Gt=Math.max(1,S.height>>pt);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,pt,gt,wt,Gt,S.depth,0,Rt,St,null):e.texImage2D(ct,pt,gt,wt,Gt,0,Rt,St,null)}e.bindFramebuffer(s.FRAMEBUFFER,U),st(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,ct,n.get(et).__webglTexture,0,dt(S)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,ct,n.get(et).__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function R(U,S,et){if(s.bindRenderbuffer(s.RENDERBUFFER,U),S.depthBuffer&&!S.stencilBuffer){let at=s.DEPTH_COMPONENT24;if(et||st(S)){const ct=S.depthTexture;ct&&ct.isDepthTexture&&(ct.type===Rn?at=s.DEPTH_COMPONENT32F:ct.type===cr&&(at=s.DEPTH_COMPONENT24));const pt=dt(S);st(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,at,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,at,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,at,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,U)}else if(S.depthBuffer&&S.stencilBuffer){const at=dt(S);et&&st(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,s.DEPTH24_STENCIL8,S.width,S.height):st(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,U)}else{const at=S.textures;for(let ct=0;ct<at.length;ct++){const pt=at[ct],Rt=r.convert(pt.format,pt.colorSpace),St=r.convert(pt.type),gt=_(pt.internalFormat,Rt,St,pt.colorSpace),Wt=dt(S);et&&st(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,gt,S.width,S.height):st(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,gt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,gt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function H(U,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);const at=n.get(S.depthTexture).__webglTexture,ct=dt(S);if(S.depthTexture.format===ir)st(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(S.depthTexture.format===zr)st(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function $(U){const S=n.get(U),et=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!S.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");H(S.__webglFramebuffer,U)}else if(et){S.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[at]),S.__webglDepthbuffer[at]=s.createRenderbuffer(),R(S.__webglDepthbuffer[at],U,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),R(S.__webglDepthbuffer,U,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(U,S,et){const at=n.get(U);S!==void 0&&A(at.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&$(U)}function K(U){const S=U.texture,et=n.get(U),at=n.get(S);U.addEventListener("dispose",T);const ct=U.textures,pt=U.isWebGLCubeRenderTarget===!0,Rt=ct.length>1;if(Rt||(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=S.version,o.memory.textures++),pt){et.__webglFramebuffer=[];for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0){et.__webglFramebuffer[St]=[];for(let gt=0;gt<S.mipmaps.length;gt++)et.__webglFramebuffer[St][gt]=s.createFramebuffer()}else et.__webglFramebuffer[St]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){et.__webglFramebuffer=[];for(let St=0;St<S.mipmaps.length;St++)et.__webglFramebuffer[St]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let St=0,gt=ct.length;St<gt;St++){const Wt=n.get(ct[St]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),o.memory.textures++)}if(U.samples>0&&st(U)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let St=0;St<ct.length;St++){const gt=ct[St];et.__webglColorRenderbuffer[St]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[St]);const Wt=r.convert(gt.format,gt.colorSpace),wt=r.convert(gt.type),Gt=_(gt.internalFormat,Wt,wt,gt.colorSpace,U.isXRRenderTarget===!0),ne=dt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,Gt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,et.__webglColorRenderbuffer[St])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),R(et.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),Y(s.TEXTURE_CUBE_MAP,S);for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)A(et.__webglFramebuffer[St][gt],U,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,gt);else A(et.__webglFramebuffer[St],U,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let St=0,gt=ct.length;St<gt;St++){const Wt=ct[St],wt=n.get(Wt);e.bindTexture(s.TEXTURE_2D,wt.__webglTexture),Y(s.TEXTURE_2D,Wt),A(et.__webglFramebuffer,U,Wt,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,0),m(Wt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let St=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(St=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(St,at.__webglTexture),Y(St,S),S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)A(et.__webglFramebuffer[gt],U,S,s.COLOR_ATTACHMENT0,St,gt);else A(et.__webglFramebuffer,U,S,s.COLOR_ATTACHMENT0,St,0);m(S)&&p(St),e.unbindTexture()}U.depthBuffer&&$(U)}function N(U){const S=U.textures;for(let et=0,at=S.length;et<at;et++){const ct=S[et];if(m(ct)){const pt=U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Rt=n.get(ct).__webglTexture;e.bindTexture(pt,Rt),p(pt),e.unbindTexture()}}}const ut=[],vt=[];function Mt(U){if(U.samples>0){if(st(U)===!1){const S=U.textures,et=U.width,at=U.height;let ct=s.COLOR_BUFFER_BIT;const pt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(U),St=S.length>1;if(St)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),St){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[gt]);const Wt=n.get(S[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,et,at,0,0,et,at,ct,s.NEAREST),l===!0&&(ut.length=0,vt.length=0,ut.push(s.COLOR_ATTACHMENT0+gt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ut.push(pt),vt.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),St)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[gt]);const Wt=n.get(S[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const S=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function dt(U){return Math.min(i.maxSamples,U.samples)}function st(U){const S=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(U){const S=o.render.frame;u.get(U)!==S&&(u.set(U,S),U.update())}function Vt(U,S){const et=U.colorSpace,at=U.format,ct=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==We&&et!==ti&&(fe.getTransfer(et)===we?(at!==Mn||ct!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),S}function Ot(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=C,this.resetTextureUnits=M,this.setTexture2D=P,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=rt,this.rebindTextures=it,this.setupRenderTarget=K,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=A,this.useMultisampledRTT=st}function Eg(s,t){function e(n,i=ti){let r;const o=fe.getTransfer(i);if(n===li)return s.UNSIGNED_BYTE;if(n===qc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return s.BYTE;if(n===ku)return s.SHORT;if(n===Wc)return s.UNSIGNED_SHORT;if(n===Xc)return s.INT;if(n===cr)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===qs)return s.HALF_FLOAT;if(n===Wu)return s.ALPHA;if(n===Xu)return s.RGB;if(n===Mn)return s.RGBA;if(n===qu)return s.LUMINANCE;if(n===Yu)return s.LUMINANCE_ALPHA;if(n===ir)return s.DEPTH_COMPONENT;if(n===zr)return s.DEPTH_STENCIL;if(n===jc)return s.RED;if(n===Kc)return s.RED_INTEGER;if(n===ju)return s.RG;if(n===Zc)return s.RG_INTEGER;if(n===$c)return s.RGBA_INTEGER;if(n===no||n===io||n===ro||n===so)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Na||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Ba||n===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Ba)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Va||n===Ha||n===ka||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka||n===Za||n===$a||n===Qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===Ja||n===tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ku||n===el||n===nl||n===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class wg extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ei extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tg={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=u.position.distanceTo(c.position),f=.02,v=.005;h.inputState.pinching&&d>f+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
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

}`;class Rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Oe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,i=new ci({vertexShader:Ag,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ge(new Ks(20,20),i)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Cg extends mr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,c=null,d=null,f=null,v=null;const g=new Rg,m=e.getContextAttributes();let p=null,_=null;const x=[],y=[],T=new te;let b=null;const I=new Qe;I.layers.enable(1),I.viewport=new xe;const D=new Qe;D.layers.enable(2),D.viewport=new xe;const E=[I,D],M=new wg;M.layers.enable(1),M.layers.enable(2);let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let R=x[A];return R===void 0&&(R=new No,x[A]=R),R.getTargetRaySpace()},this.getControllerGrip=function(A){let R=x[A];return R===void 0&&(R=new No,x[A]=R),R.getGripSpace()},this.getHand=function(A){let R=x[A];return R===void 0&&(R=new No,x[A]=R),R.getHandSpace()};function P(A){const R=y.indexOf(A.inputSource);if(R===-1)return;const H=x[R];H!==void 0&&(H.update(A.inputSource,A.frame,h||o),H.dispatchEvent({type:A.type,data:A.inputSource}))}function k(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",q);for(let A=0;A<x.length;A++){const R=y[A];R!==null&&(y[A]=null,x[A].disconnect(R))}C=null,O=null,g.reset(),t.setRenderTarget(p),f=null,d=null,c=null,i=null,_=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){r=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){a=A,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(A){h=A},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(A){if(i=A,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",k),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){const R={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,R),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Ai(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let R=null,H=null,$=null;m.depth&&($=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,R=m.stencil?zr:ir,H=m.stencil?qr:cr);const it={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};c=new XRWebGLBinding(i,e),d=c.createProjectionLayer(it),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Ai(d.textureWidth,d.textureHeight,{format:Mn,type:li,depthTexture:new dh(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,R),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(a),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(A){for(let R=0;R<A.removed.length;R++){const H=A.removed[R],$=y.indexOf(H);$>=0&&(y[$]=null,x[$].disconnect(H))}for(let R=0;R<A.added.length;R++){const H=A.added[R];let $=y.indexOf(H);if($===-1){for(let K=0;K<x.length;K++)if(K>=y.length){y.push(H),$=K;break}else if(y[K]===null){y[K]=H,$=K;break}if($===-1)break}const it=x[$];it&&it.connect(H)}}const rt=new W,G=new W;function L(A,R,H){rt.setFromMatrixPosition(R.matrixWorld),G.setFromMatrixPosition(H.matrixWorld);const $=rt.distanceTo(G),it=R.projectionMatrix.elements,K=H.projectionMatrix.elements,N=it[14]/(it[10]-1),ut=it[14]/(it[10]+1),vt=(it[9]+1)/it[5],Mt=(it[9]-1)/it[5],dt=(it[8]-1)/it[0],st=(K[8]+1)/K[0],lt=N*dt,Vt=N*st,Ot=$/(-dt+st),U=Ot*-dt;R.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(U),A.translateZ(Ot),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const S=N+Ot,et=ut+Ot,at=lt-U,ct=Vt+($-U),pt=vt*ut/et*S,Rt=Mt*ut/et*S;A.projectionMatrix.makePerspective(at,ct,pt,Rt,S,et),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function Q(A,R){R===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(R.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(i===null)return;g.texture!==null&&(A.near=g.depthNear,A.far=g.depthFar),M.near=D.near=I.near=A.near,M.far=D.far=I.far=A.far,(C!==M.near||O!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,O=M.far,I.near=C,I.far=O,D.near=C,D.far=O,I.updateProjectionMatrix(),D.updateProjectionMatrix(),A.updateProjectionMatrix());const R=A.parent,H=M.cameras;Q(M,R);for(let $=0;$<H.length;$++)Q(H[$],R);H.length===2?L(M,I,D):M.projectionMatrix.copy(I.projectionMatrix),Y(A,M,R)};function Y(A,R,H){H===null?A.matrix.copy(R.matrixWorld):(A.matrix.copy(H.matrixWorld),A.matrix.invert(),A.matrix.multiply(R.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(R.projectionMatrix),A.projectionMatrixInverse.copy(R.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=ur*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(A){l=A,d!==null&&(d.fixedFoveation=A),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=A)},this.hasDepthSensing=function(){return g.texture!==null};let B=null;function J(A,R){if(u=R.getViewerPose(h||o),v=R,u!==null){const H=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let $=!1;H.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let K=0;K<H.length;K++){const N=H[K];let ut=null;if(f!==null)ut=f.getViewport(N);else{const Mt=c.getViewSubImage(d,N);ut=Mt.viewport,K===0&&(t.setRenderTargetTextures(_,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(_))}let vt=E[K];vt===void 0&&(vt=new Qe,vt.layers.enable(K),vt.viewport=new xe,E[K]=vt),vt.matrix.fromArray(N.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(N.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(ut.x,ut.y,ut.width,ut.height),K===0&&(M.matrix.copy(vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(vt)}const it=i.enabledFeatures;if(it&&it.includes("depth-sensing")){const K=c.getDepthInformation(H[0]);K&&K.isValid&&K.texture&&g.init(t,K,i.renderState)}}for(let H=0;H<x.length;H++){const $=y[H],it=x[H];$!==null&&it!==void 0&&it.update($,R,h||o)}g.render(t,M),B&&B(A,R),R.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:R}),v=null}const z=new uh;z.setAnimationLoop(J),this.setAnimationLoop=function(A){B=A},this.dispose=function(){}}}const mi=new dn,Pg=new ie;function Lg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),c(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,x):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),x=_.envMap,y=_.envMapRotation;if(x&&(m.envMap.value=x,mi.copy(y),mi.x*=-1,mi.y*=-1,mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(mi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ig(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function h(_,x){let y=i[_.id];y===void 0&&(v(_),y=u(_),i[_.id]=y,_.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(_,T);const b=t.render.frame;r[_.id]!==b&&(d(_),r[_.id]=b)}function u(_){const x=c();_.__bindingPointIndex=x;const y=s.createBuffer(),T=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function c(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=i[_.id],y=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,I=y.length;b<I;b++){const D=Array.isArray(y[b])?y[b]:[y[b]];for(let E=0,M=D.length;E<M;E++){const C=D[E];if(f(C,b,E,T)===!0){const O=C.__offset,P=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let q=0;q<P.length;q++){const rt=P[q],G=g(rt);typeof rt=="number"||typeof rt=="boolean"?(C.__data[0]=rt,s.bufferSubData(s.UNIFORM_BUFFER,O+k,C.__data)):rt.isMatrix3?(C.__data[0]=rt.elements[0],C.__data[1]=rt.elements[1],C.__data[2]=rt.elements[2],C.__data[3]=0,C.__data[4]=rt.elements[3],C.__data[5]=rt.elements[4],C.__data[6]=rt.elements[5],C.__data[7]=0,C.__data[8]=rt.elements[6],C.__data[9]=rt.elements[7],C.__data[10]=rt.elements[8],C.__data[11]=0):(rt.toArray(C.__data,k),k+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,x,y,T){const b=_.value,I=x+"_"+y;if(T[I]===void 0)return typeof b=="number"||typeof b=="boolean"?T[I]=b:T[I]=b.clone(),!0;{const D=T[I];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return T[I]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function v(_){const x=_.uniforms;let y=0;const T=16;for(let I=0,D=x.length;I<D;I++){const E=Array.isArray(x[I])?x[I]:[x[I]];for(let M=0,C=E.length;M<C;M++){const O=E[M],P=Array.isArray(O.value)?O.value:[O.value];for(let k=0,q=P.length;k<q;k++){const rt=P[k],G=g(rt),L=y%T;L!==0&&T-L<G.boundary&&(y+=T-L),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=G.storage}}}const b=y%T;return b>0&&(y+=T-b),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:h,dispose:p}}class Ng{constructor(t={}){const{canvas:e=Td(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;const x=this;let y=!1,T=0,b=0,I=null,D=-1,E=null;const M=new xe,C=new xe;let O=null;const P=new Kt(0);let k=0,q=e.width,rt=e.height,G=1,L=null,Q=null;const Y=new xe(0,0,q,rt),B=new xe(0,0,q,rt);let J=!1;const z=new la;let A=!1,R=!1;const H=new ie,$=new W,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function K(){return I===null?G:1}let N=n;function ut(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ia}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){const F="webgl2";if(N=ut(F,w),N===null)throw ut(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let vt,Mt,dt,st,lt,Vt,Ot,U,S,et,at,ct,pt,Rt,St,gt,Wt,wt,Gt,ne,qt,Ut,jt,ee;function ue(){vt=new Hm(N),vt.init(),Ut=new Eg(N,vt),Mt=new Um(N,vt,t,Ut),dt=new Mg(N),st=new Wm(N),lt=new ag,Vt=new Sg(N,vt,dt,lt,Mt,Ut,st),Ot=new Bm(x),U=new Vm(x),S=new Zd(N),jt=new Nm(N,S),et=new km(N,S,st,jt),at=new qm(N,et,S,st),Gt=new Xm(N,Mt,Vt),gt=new Fm(lt),ct=new og(x,Ot,U,vt,Mt,jt,gt),pt=new Lg(x,lt),Rt=new cg,St=new mg(vt),wt=new Im(x,Ot,U,dt,at,d,l),Wt=new xg(x,at,Mt),ee=new Ig(N,st,Mt,dt),ne=new Dm(N,vt,st),qt=new Gm(N,vt,st),st.programs=ct.programs,x.capabilities=Mt,x.extensions=vt,x.properties=lt,x.renderLists=Rt,x.shadowMap=Wt,x.state=dt,x.info=st}ue();const Zt=new Cg(x,N);this.xr=Zt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(q,rt,!1))},this.getSize=function(w){return w.set(q,rt)},this.setSize=function(w,F,V=!0){if(Zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,rt=F,e.width=Math.floor(w*G),e.height=Math.floor(F*G),V===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(q*G,rt*G).floor()},this.setDrawingBufferSize=function(w,F,V){q=w,rt=F,G=V,e.width=Math.floor(w*V),e.height=Math.floor(F*V),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,F,V,X){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,F,V,X),dt.viewport(M.copy(Y).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,F,V,X){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,F,V,X),dt.scissor(C.copy(B).multiplyScalar(G).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(w){dt.setScissorTest(J=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(w=!0,F=!0,V=!0){let X=0;if(w){let j=!1;if(I!==null){const tt=I.texture.format;j=tt===$c||tt===Zc||tt===Kc}if(j){const tt=I.texture.type,xt=tt===li||tt===cr||tt===Wc||tt===qr||tt===qc||tt===Yc,Et=wt.getClearColor(),zt=wt.getClearAlpha(),Lt=Et.r,Ft=Et.g,At=Et.b;xt?(f[0]=Lt,f[1]=Ft,f[2]=At,f[3]=zt,N.clearBufferuiv(N.COLOR,0,f)):(v[0]=Lt,v[1]=Ft,v[2]=At,v[3]=zt,N.clearBufferiv(N.COLOR,0,v))}else X|=N.COLOR_BUFFER_BIT}F&&(X|=N.DEPTH_BUFFER_BIT),V&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Rt.dispose(),St.dispose(),lt.dispose(),Ot.dispose(),U.dispose(),at.dispose(),jt.dispose(),ee.dispose(),ct.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",le),Zt.removeEventListener("sessionend",pe),ot.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=st.autoReset,F=Wt.enabled,V=Wt.autoUpdate,X=Wt.needsUpdate,j=Wt.type;ue(),st.autoReset=w,Wt.enabled=F,Wt.autoUpdate=V,Wt.needsUpdate=X,Wt.type=j}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ct(w){const F=w.target;F.removeEventListener("dispose",Ct),Pt(F)}function Pt(w){re(w),lt.remove(w)}function re(w){const F=lt.get(w).programs;F!==void 0&&(F.forEach(function(V){ct.releaseProgram(V)}),w.isShaderMaterial&&ct.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,V,X,j,tt){F===null&&(F=it);const xt=j.isMesh&&j.matrixWorld.determinant()<0,Et=bt(w,F,V,X,j);dt.setMaterial(X,xt);let zt=V.index,Lt=1;if(X.wireframe===!0){if(zt=et.getWireframeAttribute(V),zt===void 0)return;Lt=2}const Ft=V.drawRange,At=V.attributes.position;let he=Ft.start*Lt,me=(Ft.start+Ft.count)*Lt;tt!==null&&(he=Math.max(he,tt.start*Lt),me=Math.min(me,(tt.start+tt.count)*Lt)),zt!==null?(he=Math.max(he,0),me=Math.min(me,zt.count)):At!=null&&(he=Math.max(he,0),me=Math.min(me,At.count));const ye=me-he;if(ye<0||ye===1/0)return;jt.setup(j,X,Et,V,zt);let Le,Jt=ne;if(zt!==null&&(Le=S.get(zt),Jt=qt,Jt.setIndex(Le)),j.isMesh)X.wireframe===!0?(dt.setLineWidth(X.wireframeLinewidth*K()),Jt.setMode(N.LINES)):Jt.setMode(N.TRIANGLES);else if(j.isLine){let Ht=X.linewidth;Ht===void 0&&(Ht=1),dt.setLineWidth(Ht*K()),j.isLineSegments?Jt.setMode(N.LINES):j.isLineLoop?Jt.setMode(N.LINE_LOOP):Jt.setMode(N.LINE_STRIP)}else j.isPoints?Jt.setMode(N.POINTS):j.isSprite&&Jt.setMode(N.TRIANGLES);if(j.isBatchedMesh)j._multiDrawInstances!==null?Jt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances):Jt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Jt.renderInstances(he,ye,j.count);else if(V.isInstancedBufferGeometry){const Ht=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ke=Math.min(V.instanceCount,Ht);Jt.renderInstances(he,ye,Ke)}else Jt.render(he,ye)};function ce(w,F,V){w.transparent===!0&&w.side===_n&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,Tt(w,F,V),w.side=Gn,w.needsUpdate=!0,Tt(w,F,V),w.side=_n):Tt(w,F,V)}this.compile=function(w,F,V=null){V===null&&(V=w),m=St.get(V),m.init(F),_.push(m),V.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),w!==V&&w.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(x._useLegacyLights);const X=new Set;return w.traverse(function(j){const tt=j.material;if(tt)if(Array.isArray(tt))for(let xt=0;xt<tt.length;xt++){const Et=tt[xt];ce(Et,V,j),X.add(Et)}else ce(tt,V,j),X.add(tt)}),_.pop(),m=null,X},this.compileAsync=function(w,F,V=null){const X=this.compile(w,F,V);return new Promise(j=>{function tt(){if(X.forEach(function(xt){lt.get(xt).currentProgram.isReady()&&X.delete(xt)}),X.size===0){j(w);return}setTimeout(tt,10)}vt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let de=null;function Ae(w){de&&de(w)}function le(){ot.stop()}function pe(){ot.start()}const ot=new uh;ot.setAnimationLoop(Ae),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(w){de=w,Zt.setAnimationLoop(w),w===null?ot.stop():ot.start()},Zt.addEventListener("sessionstart",le),Zt.addEventListener("sessionend",pe),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(F),F=Zt.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,I),m=St.get(w,_.length),m.init(F),_.push(m),H.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),z.setFromProjectionMatrix(H),R=this.localClippingEnabled,A=gt.init(this.clippingPlanes,R),g=Rt.get(w,p.length),g.init(),p.push(g),ft(w,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(L,Q);const V=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1;V&&wt.addToRenderList(g,w),this.info.render.frame++,A===!0&&gt.beginShadows();const X=m.state.shadowsArray;Wt.render(X,w,F),A===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,tt=g.transmissive;if(m.setupLights(x._useLegacyLights),F.isArrayCamera){const xt=F.cameras;if(tt.length>0)for(let Et=0,zt=xt.length;Et<zt;Et++){const Lt=xt[Et];yt(j,tt,w,Lt)}V&&wt.render(w);for(let Et=0,zt=xt.length;Et<zt;Et++){const Lt=xt[Et];_t(g,w,Lt,Lt.viewport)}}else tt.length>0&&yt(j,tt,w,F),V&&wt.render(w),_t(g,w,F);I!==null&&(Vt.updateMultisampleRenderTarget(I),Vt.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(x,w,F),jt.resetDefaultState(),D=-1,E=null,_.pop(),_.length>0?(m=_[_.length-1],A===!0&&gt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function ft(w,F,V,X){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||z.intersectsSprite(w)){X&&$.setFromMatrixPosition(w.matrixWorld).applyMatrix4(H);const xt=at.update(w),Et=w.material;Et.visible&&g.push(w,xt,Et,V,$.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||z.intersectsObject(w))){const xt=at.update(w),Et=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$.copy(w.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),$.copy(xt.boundingSphere.center)),$.applyMatrix4(w.matrixWorld).applyMatrix4(H)),Array.isArray(Et)){const zt=xt.groups;for(let Lt=0,Ft=zt.length;Lt<Ft;Lt++){const At=zt[Lt],he=Et[At.materialIndex];he&&he.visible&&g.push(w,xt,he,V,$.z,At)}}else Et.visible&&g.push(w,xt,Et,V,$.z,null)}}const tt=w.children;for(let xt=0,Et=tt.length;xt<Et;xt++)ft(tt[xt],F,V,X)}function _t(w,F,V,X){const j=w.opaque,tt=w.transmissive,xt=w.transparent;m.setupLightsView(V),A===!0&&gt.setGlobalState(x.clippingPlanes,V),X&&dt.viewport(M.copy(X)),j.length>0&&Yt(j,F,V),tt.length>0&&Yt(tt,F,V),xt.length>0&&Yt(xt,F,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function yt(w,F,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Ai(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?qs:li,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const tt=m.state.transmissionRenderTarget[X.id],xt=X.viewport||M;tt.setSize(xt.z,xt.w);const Et=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(P),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear();const zt=x.toneMapping;x.toneMapping=oi;const Lt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),A===!0&&gt.setGlobalState(x.clippingPlanes,X),Yt(w,V,X),Vt.updateMultisampleRenderTarget(tt),Vt.updateRenderTargetMipmap(tt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let At=0,he=F.length;At<he;At++){const me=F[At],ye=me.object,Le=me.geometry,Jt=me.material,Ht=me.group;if(Jt.side===_n&&ye.layers.test(X.layers)){const Ke=Jt.side;Jt.side=nn,Jt.needsUpdate=!0,Dt(ye,V,X,Le,Jt,Ht),Jt.side=Ke,Jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(Vt.updateMultisampleRenderTarget(tt),Vt.updateRenderTargetMipmap(tt))}x.setRenderTarget(Et),x.setClearColor(P,k),Lt!==void 0&&(X.viewport=Lt),x.toneMapping=zt}function Yt(w,F,V){const X=F.isScene===!0?F.overrideMaterial:null;for(let j=0,tt=w.length;j<tt;j++){const xt=w[j],Et=xt.object,zt=xt.geometry,Lt=X===null?xt.material:X,Ft=xt.group;Et.layers.test(V.layers)&&Dt(Et,F,V,zt,Lt,Ft)}}function Dt(w,F,V,X,j,tt){w.onBeforeRender(x,F,V,X,j,tt),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(x,F,V,X,w,tt),j.transparent===!0&&j.side===_n&&j.forceSinglePass===!1?(j.side=nn,j.needsUpdate=!0,x.renderBufferDirect(V,F,X,j,w,tt),j.side=Gn,j.needsUpdate=!0,x.renderBufferDirect(V,F,X,j,w,tt),j.side=_n):x.renderBufferDirect(V,F,X,j,w,tt),w.onAfterRender(x,F,V,X,j,tt)}function Tt(w,F,V){F.isScene!==!0&&(F=it);const X=lt.get(w),j=m.state.lights,tt=m.state.shadowsArray,xt=j.state.version,Et=ct.getParameters(w,j.state,tt,F,V),zt=ct.getProgramCacheKey(Et);let Lt=X.programs;X.environment=w.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(w.isMeshStandardMaterial?U:Ot).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Ct),Lt=new Map,X.programs=Lt);let Ft=Lt.get(zt);if(Ft!==void 0){if(X.currentProgram===Ft&&X.lightsStateVersion===xt)return nt(w,Et),Ft}else Et.uniforms=ct.getUniforms(w),w.onBuild(V,Et,x),w.onBeforeCompile(Et,x),Ft=ct.acquireProgram(Et,zt),Lt.set(zt,Ft),X.uniforms=Et.uniforms;const At=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=gt.uniform),nt(w,Et),X.needsLights=kt(w),X.lightsStateVersion=xt,X.needsLights&&(At.ambientLightColor.value=j.state.ambient,At.lightProbe.value=j.state.probe,At.directionalLights.value=j.state.directional,At.directionalLightShadows.value=j.state.directionalShadow,At.spotLights.value=j.state.spot,At.spotLightShadows.value=j.state.spotShadow,At.rectAreaLights.value=j.state.rectArea,At.ltc_1.value=j.state.rectAreaLTC1,At.ltc_2.value=j.state.rectAreaLTC2,At.pointLights.value=j.state.point,At.pointLightShadows.value=j.state.pointShadow,At.hemisphereLights.value=j.state.hemi,At.directionalShadowMap.value=j.state.directionalShadowMap,At.directionalShadowMatrix.value=j.state.directionalShadowMatrix,At.spotShadowMap.value=j.state.spotShadowMap,At.spotLightMatrix.value=j.state.spotLightMatrix,At.spotLightMap.value=j.state.spotLightMap,At.pointShadowMap.value=j.state.pointShadowMap,At.pointShadowMatrix.value=j.state.pointShadowMatrix),X.currentProgram=Ft,X.uniformsList=null,Ft}function It(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Ns.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function nt(w,F){const V=lt.get(w);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function bt(w,F,V,X,j){F.isScene!==!0&&(F=it),Vt.resetTextureUnits();const tt=F.fog,xt=X.isMeshStandardMaterial?F.environment:null,Et=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:We,zt=(X.isMeshStandardMaterial?U:Ot).get(X.envMap||xt),Lt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),At=!!V.morphAttributes.position,he=!!V.morphAttributes.normal,me=!!V.morphAttributes.color;let ye=oi;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=x.toneMapping);const Le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Jt=Le!==void 0?Le.length:0,Ht=lt.get(X),Ke=m.state.lights;if(A===!0&&(R===!0||w!==E)){const Se=w===E&&X.id===D;gt.setState(X,w,Se)}let $t=!1;X.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ke.state.version||Ht.outputColorSpace!==Et||j.isBatchedMesh&&Ht.batching===!1||!j.isBatchedMesh&&Ht.batching===!0||j.isInstancedMesh&&Ht.instancing===!1||!j.isInstancedMesh&&Ht.instancing===!0||j.isSkinnedMesh&&Ht.skinning===!1||!j.isSkinnedMesh&&Ht.skinning===!0||j.isInstancedMesh&&Ht.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ht.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ht.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ht.instancingMorph===!1&&j.morphTexture!==null||Ht.envMap!==zt||X.fog===!0&&Ht.fog!==tt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==gt.numPlanes||Ht.numIntersection!==gt.numIntersection)||Ht.vertexAlphas!==Lt||Ht.vertexTangents!==Ft||Ht.morphTargets!==At||Ht.morphNormals!==he||Ht.morphColors!==me||Ht.toneMapping!==ye||Ht.morphTargetsCount!==Jt)&&($t=!0):($t=!0,Ht.__version=X.version);let ze=Ht.currentProgram;$t===!0&&(ze=Tt(X,F,j));let Ve=!1,be=!1,Ce=!1;const ve=ze.getUniforms(),Fe=Ht.uniforms;if(dt.useProgram(ze.program)&&(Ve=!0,be=!0,Ce=!0),X.id!==D&&(D=X.id,be=!0),Ve||E!==w){ve.setValue(N,"projectionMatrix",w.projectionMatrix),ve.setValue(N,"viewMatrix",w.matrixWorldInverse);const Se=ve.map.cameraPosition;Se!==void 0&&Se.setValue(N,$.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&ve.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ve.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,be=!0,Ce=!0)}if(j.isSkinnedMesh){ve.setOptional(N,j,"bindMatrix"),ve.setOptional(N,j,"bindMatrixInverse");const Se=j.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ve.setValue(N,"boneTexture",Se.boneTexture,Vt))}j.isBatchedMesh&&(ve.setOptional(N,j,"batchingTexture"),ve.setValue(N,"batchingTexture",j._matricesTexture,Vt));const Qt=V.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Gt.update(j,V,ze),(be||Ht.receiveShadow!==j.receiveShadow)&&(Ht.receiveShadow=j.receiveShadow,ve.setValue(N,"receiveShadow",j.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Fe.envMap.value=zt,Fe.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Fe.envMapIntensity.value=F.environmentIntensity),be&&(ve.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&Nt(Fe,Ce),tt&&X.fog===!0&&pt.refreshFogUniforms(Fe,tt),pt.refreshMaterialUniforms(Fe,X,G,rt,m.state.transmissionRenderTarget[w.id]),Ns.upload(N,It(Ht),Fe,Vt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ns.upload(N,It(Ht),Fe,Vt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ve.setValue(N,"center",j.center),ve.setValue(N,"modelViewMatrix",j.modelViewMatrix),ve.setValue(N,"normalMatrix",j.normalMatrix),ve.setValue(N,"modelMatrix",j.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Se=X.uniformsGroups;for(let Re=0,In=Se.length;Re<In;Re++){const wn=Se[Re];ee.update(wn,ze),ee.bind(wn,ze)}}return ze}function Nt(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function kt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,F,V){lt.get(w.texture).__webglTexture=F,lt.get(w.depthTexture).__webglTexture=V;const X=lt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const V=lt.get(w);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,V=0){I=w,T=F,b=V;let X=!0,j=null,tt=!1,xt=!1;if(w){const zt=lt.get(w);zt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(N.FRAMEBUFFER,null),X=!1):zt.__webglFramebuffer===void 0?Vt.setupRenderTarget(w):zt.__hasExternalTextures&&Vt.rebindTextures(w,lt.get(w.texture).__webglTexture,lt.get(w.depthTexture).__webglTexture);const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(xt=!0);const Ft=lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?j=Ft[F][V]:j=Ft[F],tt=!0):w.samples>0&&Vt.useMultisampledRTT(w)===!1?j=lt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?j=Ft[V]:j=Ft,M.copy(w.viewport),C.copy(w.scissor),O=w.scissorTest}else M.copy(Y).multiplyScalar(G).floor(),C.copy(B).multiplyScalar(G).floor(),O=J;if(dt.bindFramebuffer(N.FRAMEBUFFER,j)&&X&&dt.drawBuffers(w,j),dt.viewport(M),dt.scissor(C),dt.setScissorTest(O),tt){const zt=lt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,zt.__webglTexture,V)}else if(xt){const zt=lt.get(w.texture),Lt=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.__webglTexture,V||0,Lt)}D=-1},this.readRenderTargetPixels=function(w,F,V,X,j,tt,xt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){dt.bindFramebuffer(N.FRAMEBUFFER,Et);try{const zt=w.texture,Lt=zt.format,Ft=zt.type;if(!Mt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-X&&V>=0&&V<=w.height-j&&N.readPixels(F,V,X,j,Ut.convert(Lt),Ut.convert(Ft),tt)}finally{const zt=I!==null?lt.get(I).__webglFramebuffer:null;dt.bindFramebuffer(N.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(w,F,V=0){const X=Math.pow(2,-V),j=Math.floor(F.image.width*X),tt=Math.floor(F.image.height*X);Vt.setTexture2D(F,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,w.x,w.y,j,tt),dt.unbindTexture()},this.copyTextureToTexture=function(w,F,V,X=0){const j=F.image.width,tt=F.image.height,xt=Ut.convert(V.format),Et=Ut.convert(V.type);Vt.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,w.x,w.y,j,tt,xt,Et,F.image.data):F.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,xt,F.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,X,w.x,w.y,xt,Et,F.image),X===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,V,X,j=0){const tt=w.max.x-w.min.x,xt=w.max.y-w.min.y,Et=w.max.z-w.min.z,zt=Ut.convert(X.format),Lt=Ut.convert(X.type);let Ft;if(X.isData3DTexture)Vt.setTexture3D(X,0),Ft=N.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)Vt.setTexture2DArray(X,0),Ft=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const At=N.getParameter(N.UNPACK_ROW_LENGTH),he=N.getParameter(N.UNPACK_IMAGE_HEIGHT),me=N.getParameter(N.UNPACK_SKIP_PIXELS),ye=N.getParameter(N.UNPACK_SKIP_ROWS),Le=N.getParameter(N.UNPACK_SKIP_IMAGES),Jt=V.isCompressedTexture?V.mipmaps[j]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Jt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,w.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,w.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(Ft,j,F.x,F.y,F.z,tt,xt,Et,zt,Lt,Jt.data):X.isCompressedArrayTexture?N.compressedTexSubImage3D(Ft,j,F.x,F.y,F.z,tt,xt,Et,zt,Jt.data):N.texSubImage3D(Ft,j,F.x,F.y,F.z,tt,xt,Et,zt,Lt,Jt),N.pixelStorei(N.UNPACK_ROW_LENGTH,At),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he),N.pixelStorei(N.UNPACK_SKIP_PIXELS,me),N.pixelStorei(N.UNPACK_SKIP_ROWS,ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Le),j===0&&X.generateMipmaps&&N.generateMipmap(Ft),dt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Vt.setTextureCube(w,0):w.isData3DTexture?Vt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Vt.setTexture2DArray(w,0):Vt.setTexture2D(w,0),dt.unbindTexture()},this.resetState=function(){T=0,b=0,I=null,dt.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===oa?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===Ys?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ua{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new ua(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dg extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _h{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return eh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new W;class kr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new kr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class da extends hn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const wr=new W,ji=new W,Ki=new W,Zi=new te,Tr=new te,yh=new ie,vs=new W,Ar=new W,gs=new W,$l=new te,Do=new te,Ql=new te;class xh extends Ee{constructor(t=new da){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new fn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _h(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new kr(n,3,0,!1)),Yi.setAttribute("uv",new kr(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new te(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),yh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ki.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;_s(vs.set(-.5,-.5,0),Ki,o,ji,i,r),_s(Ar.set(.5,-.5,0),Ki,o,ji,i,r),_s(gs.set(.5,.5,0),Ki,o,ji,i,r),$l.set(0,0),Do.set(1,0),Ql.set(1,1);let a=t.ray.intersectTriangle(vs,Ar,gs,!1,wr);if(a===null&&(_s(Ar.set(-.5,.5,0),Ki,o,ji,i,r),Do.set(0,1),a=t.ray.intersectTriangle(vs,gs,Ar,!1,wr),a===null))return;const l=t.ray.origin.distanceTo(wr);l<t.near||l>t.far||e.push({distance:l,point:wr.clone(),uv:xn.getInterpolation(wr,vs,Ar,gs,$l,Do,Ql,new te),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _s(s,t,e,n,i,r){Zi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Tr.x=r*Zi.x-i*Zi.y,Tr.y=i*Zi.x+r*Zi.y):Tr.copy(Zi),s.copy(t),s.x+=Tr.x,s.y+=Tr.y,s.applyMatrix4(yh)}const Jl=new W,tc=new xe,ec=new xe,Ug=new W,nc=new ie,ys=new W,Uo=new Cn,ic=new ie,Fo=new js;class Fg extends Ge{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=La,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ys),this.boundingBox.expandByPoint(ys)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ys),this.boundingSphere.expandByPoint(ys)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),t.ray.intersectsSphere(Uo)!==!1&&(ic.copy(i).invert(),Fo.copy(t.ray).applyMatrix4(ic),!(this.boundingBox!==null&&Fo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Fo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===La?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;tc.fromBufferAttribute(i.attributes.skinIndex,t),ec.fromBufferAttribute(i.attributes.skinWeight,t),Jl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=ec.getComponent(r);if(o!==0){const a=tc.getComponent(r);nc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Ug.copy(Jl).applyMatrix4(nc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Mh extends Ee{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sh extends Oe{constructor(t=null,e=1,n=1,i,r,o,a,l,h=ke,u=ke,c,d){super(null,o,a,l,h,u,i,r,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rc=new ie,Bg=new ie;class fa{constructor(t=[],e=[]){this.uuid=Sn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Bg;rc.multiplyMatrices(a,e[r]),rc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new fa(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Sh(e,t,t,Mn,Rn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Mh),this.bones.push(o),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Qo extends tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new ie,sc=new ie,xs=[],oc=new Wn,Og=new ie,br=new Ge,Rr=new Cn;class Eh extends Ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Og)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),oc.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(oc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Rr.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$i),sc.multiplyMatrices(n,$i),br.matrixWorld=sc,br.raycast(t,xs);for(let o=0,a=xs.length;o<a;o++){const l=xs[o];l.instanceId=r,l.object=this,e.push(l)}xs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sh(new Float32Array(i*this.count),i,this.count,jc,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pa extends hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vs=new W,Hs=new W,ac=new ie,Cr=new js,Ms=new Cn,Bo=new W,lc=new W;class ma extends Ee{constructor(t=new fn,e=new pa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Vs.fromBufferAttribute(e,i-1),Hs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Vs.distanceTo(Hs);t.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(i),Ms.radius+=r,t.ray.intersectsSphere(Ms)===!1)return;ac.copy(i).invert(),Cr.copy(t.ray).applyMatrix4(ac);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let g=f,m=v-1;g<m;g+=h){const p=u.getX(g),_=u.getX(g+1),x=Ss(this,t,Cr,l,p,_);x&&e.push(x)}if(this.isLineLoop){const g=u.getX(v-1),m=u.getX(f),p=Ss(this,t,Cr,l,g,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let g=f,m=v-1;g<m;g+=h){const p=Ss(this,t,Cr,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=Ss(this,t,Cr,l,v-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ss(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(Vs.fromBufferAttribute(o,i),Hs.fromBufferAttribute(o,r),e.distanceSqToSegment(Vs,Hs,Bo,lc)>n)return;Bo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Bo);if(!(l<t.near||l>t.far))return{distance:l,point:lc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const cc=new W,hc=new W;class zg extends ma{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)cc.fromBufferAttribute(e,i),hc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cc.distanceTo(hc);t.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vg extends ma{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class wh extends hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uc=new ie,Jo=new js,Es=new Cn,ws=new W;class Hg extends Ee{constructor(t=new fn,e=new wh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=r,t.ray.intersectsSphere(Es)===!1)return;uc.copy(i).invert(),Jo.copy(t.ray).applyMatrix4(uc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,c=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let v=d,g=f;v<g;v++){const m=h.getX(v);ws.fromBufferAttribute(c,m),dc(ws,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let v=d,g=f;v<g;v++)ws.fromBufferAttribute(c,v),dc(ws,v,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dc(s,t,e,n,i,r,o){const a=Jo.distanceSqToPoint(s);if(a<e){const l=new W;Jo.closestPointToPoint(s,l),l.applyMatrix4(n);const h=i.ray.origin.distanceTo(l);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class va extends fn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const u=[],c=new W,d=new W,f=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){const _=[],x=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const b=T/e;c.x=-t*Math.cos(i+b*r)*Math.sin(o+x*a),c.y=t*Math.cos(o+x*a),c.z=t*Math.sin(i+b*r)*Math.sin(o+x*a),v.push(c.x,c.y,c.z),d.copy(c).normalize(),g.push(d.x,d.y,d.z),m.push(b+y,1-x),_.push(h++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const x=u[p][_+1],y=u[p][_],T=u[p+1][_],b=u[p+1][_+1];(p!==0||o>0)&&f.push(x,y,b),(p!==n-1||l<Math.PI)&&f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new un(v,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gr extends hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pn extends Gr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ga extends hn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Ts(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function kg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Gg(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function fc(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Th(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class Yr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wg extends Yr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sl:r=t,a=2*e-n;break;case ol:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sl:o=t,l=2*n-e;break;case ol:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(n-e)/(i-e),g=v*v,m=g*v,p=-d*m+2*d*g-d*v,_=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*v+1,x=(-1-f)*m+(1.5+f)*g+.5*v,y=f*m-f*g;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+_*o[h+T]+x*o[l+T]+y*o[c+T];return r}}class Xg extends Yr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(n-e)/(i-e),c=1-u;for(let d=0;d!==a;++d)r[d]=o[h+d]*c+o[l+d]*u;return r}}class qg extends Yr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ln{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ts(e,this.TimeBufferType),this.values=Ts(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ts(t.times,Array),values:Ts(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Vr:e=this.InterpolantFactoryMethodDiscrete;break;case hr:e=this.InterpolantFactoryMethodLinear;break;case ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&kg(i))for(let a=0,l=i.length;a!==l;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ao,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(i)l=!0;else{const c=a*n,d=c-n,f=c+n;for(let v=0;v!==n;++v){const g=e[c+v];if(g!==e[d+v]||g!==e[f+v]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const c=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[c+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=hr;class gr extends Ln{}gr.prototype.ValueTypeName="bool";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=Vr;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ah extends Ln{}Ah.prototype.ValueTypeName="color";class fr extends Ln{}fr.prototype.ValueTypeName="number";class Yg extends Yr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let h=t*a;for(let u=h+a;h!==u;h+=4)En.slerpFlat(r,0,o,h-a,o,h,l);return r}}class bi extends Ln{InterpolantFactoryMethodLinear(t){return new Yg(this.times,this.values,this.getValueSize(),t)}}bi.prototype.ValueTypeName="quaternion";bi.prototype.DefaultInterpolation=hr;bi.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends Ln{}_r.prototype.ValueTypeName="string";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=Vr;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends Ln{}pr.prototype.ValueTypeName="vector";class jg{constructor(t="",e=-1,n=[],i=Zu){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Zg(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Ln.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],h=[];l.push((a+r-1)%r,a,(a+1)%r),h.push(0,1,0);const u=Gg(l);l=fc(l,1,u),h=fc(h,1,u),!i&&l[0]===0&&(l.push(r),h.push(h[0])),o.push(new fr(".morphTargetInfluences["+e[a].name+"]",l,h).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const h=t[a],u=h.name.match(r);if(u&&u.length>1){const c=u[1];let d=i[c];d||(i[c]=d=[]),d.push(h)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(c,d,f,v,g){if(f.length!==0){const m=[],p=[];Th(f,m,p,v),m.length!==0&&g.push(new c(d,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const h=t.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let g=0;g<d[v].morphTargets.length;g++)f[d[v].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let _=0;_!==d[v].morphTargets.length;++_){const x=d[v];m.push(x.time),p.push(x.morphTarget===g?1:0)}i.push(new fr(".morphTargetInfluence["+g+"]",m,p))}l=f.length*o}else{const f=".bones["+e[c].name+"]";n(pr,f+".position",d,"pos",i),n(bi,f+".quaternion",d,"rot",i),n(pr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Kg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fr;case"vector":case"vector2":case"vector3":case"vector4":return pr;case"color":return Ah;case"quaternion":return bi;case"bool":case"boolean":return gr;case"string":return _r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Zg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Kg(s.type);if(s.times===void 0){const e=[],n=[];Th(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ri={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class $g{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,c){return h.push(u,c),this},this.removeHandler=function(u){const c=h.indexOf(u);return c!==-1&&h.splice(c,2),this},this.getHandler=function(u){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],v=h[c+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}}const Qg=new $g;class yr{constructor(t){this.manager=t!==void 0?t:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class Jg extends Error{constructor(t,e){super(t),this.response=e}}class bh extends yr{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ri.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(On[t]!==void 0){On[t].push({onLoad:e,onProgress:n,onError:i});return}On[t]=[],On[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const u=On[t],c=h.body.getReader(),d=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=d?parseInt(d):0,v=f!==0;let g=0;const m=new ReadableStream({start(p){_();function _(){c.read().then(({done:x,value:y})=>{if(x)p.close();else{g+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let b=0,I=u.length;b<I;b++){const D=u[b];D.onProgress&&D.onProgress(T)}p.enqueue(y),_()}})}}});return new Response(m)}else throw new Jg(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return h.json();default:if(a===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(v=>f.decode(v))}}}).then(h=>{ri.add(t,h);const u=On[t];delete On[t];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const u=On[t];if(u===void 0)throw this.manager.itemError(t),h;delete On[t];for(let c=0,d=u.length;c<d;c++){const f=u[c];f.onError&&f.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class t0 extends yr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ri.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Hr("img");function l(){u(),ri.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(c){u(),i&&i(c),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class _a extends yr{constructor(t){super(t)}load(t,e,n,i){const r=new Oe,o=new t0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class $s extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Oo=new ie,pc=new W,mc=new W;class ya{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(pc),mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mc),e.updateMatrixWorld(),Oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class e0 extends ya{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ur*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class n0 extends $s{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new e0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const vc=new ie,Pr=new W,zo=new W;class i0 extends ya{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Pr),zo.copy(n.position),zo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zo),n.updateMatrixWorld(),i.makeTranslation(-Pr.x,-Pr.y,-Pr.z),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc)}}class r0 extends $s{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new i0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class s0 extends ya{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rh extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new s0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class o0 extends $s{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Or{static decodeText(t){if(typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class a0 extends yr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ri.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(h=>{e&&e(h),r.manager.itemEnd(t)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return ri.add(t,h),e&&e(h),r.manager.itemEnd(t),h}).catch(function(h){i&&i(h),ri.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ri.add(t,l),r.manager.itemStart(t)}}const xa="\\[\\]\\.:\\/",l0=new RegExp("["+xa+"]","g"),Ma="[^"+xa+"]",c0="[^"+xa.replace("\\.","")+"]",h0=/((?:WC+[\/:])*)/.source.replace("WC",Ma),u0=/(WCOD+)?/.source.replace("WCOD",c0),d0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ma),f0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ma),p0=new RegExp("^"+h0+u0+d0+f0+"$"),m0=["material","materials","bones","map"];class v0{constructor(t,e,n){const i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class _e{constructor(t,e,n){this.path=e,this.parsedPath=n||_e.parseTrackName(e),this.node=_e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new _e.Composite(t,e,n):new _e(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(l0,"")}static parseTrackName(t){const e=p0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);m0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=_e.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}const o=t[i];if(o===void 0){const h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_e.Composite=v0;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ia);var g0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function As(s){throw new Error('Could not dynamically require "'+s+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ch={exports:{}};(function(s,t){(function(e){s.exports=e()})(function(){return function e(n,i,r){function o(h,u){if(!i[h]){if(!n[h]){var c=typeof As=="function"&&As;if(!u&&c)return c(h,!0);if(a)return a(h,!0);throw new Error("Cannot find module '"+h+"'")}var d=i[h]={exports:{}};n[h][0].call(d.exports,function(f){var v=n[h][1][f];return o(v||f)},d,d.exports,e,n,i,r)}return i[h].exports}for(var a=typeof As=="function"&&As,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(e,n,i){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,i){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,i){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=o;function o(h){h=h||{},this.lowerBound=new r,h.lowerBound&&this.lowerBound.copy(h.lowerBound),this.upperBound=new r,h.upperBound&&this.upperBound.copy(h.upperBound)}var a=new r;o.prototype.setFromPoints=function(h,u,c,d){var f=this.lowerBound,v=this.upperBound,g=c;f.copy(h[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<h.length;m++){var p=h[m];g&&(g.vmult(p,a),p=a),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return u&&(u.vadd(f,f),u.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},o.prototype.copy=function(h){return this.lowerBound.copy(h.lowerBound),this.upperBound.copy(h.upperBound),this},o.prototype.clone=function(){return new o().copy(this)},o.prototype.extend=function(h){var u=h.lowerBound.x;this.lowerBound.x>u&&(this.lowerBound.x=u);var c=h.upperBound.x;this.upperBound.x<c&&(this.upperBound.x=c);var u=h.lowerBound.y;this.lowerBound.y>u&&(this.lowerBound.y=u);var c=h.upperBound.y;this.upperBound.y<c&&(this.upperBound.y=c);var u=h.lowerBound.z;this.lowerBound.z>u&&(this.lowerBound.z=u);var c=h.upperBound.z;this.upperBound.z<c&&(this.upperBound.z=c)},o.prototype.overlaps=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return(d.x<=c.x&&c.x<=f.x||u.x<=f.x&&f.x<=c.x)&&(d.y<=c.y&&c.y<=f.y||u.y<=f.y&&f.y<=c.y)&&(d.z<=c.z&&c.z<=f.z||u.z<=f.z&&f.z<=c.z)},o.prototype.contains=function(h){var u=this.lowerBound,c=this.upperBound,d=h.lowerBound,f=h.upperBound;return u.x<=d.x&&c.x>=f.x&&u.y<=d.y&&c.y>=f.y&&u.z<=d.z&&c.z>=f.z},o.prototype.getCorners=function(h,u,c,d,f,v,g,m){var p=this.lowerBound,_=this.upperBound;h.copy(p),u.set(_.x,p.y,p.z),c.set(_.x,_.y,p.z),d.set(p.x,_.y,_.z),f.set(_.x,p.y,p.z),v.set(p.x,_.y,p.z),g.set(p.x,p.y,_.z),m.copy(_)};var l=[new r,new r,new r,new r,new r,new r,new r,new r];o.prototype.toLocalFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],x=c[7];this.getCorners(d,f,v,g,m,p,_,x);for(var y=0;y!==8;y++){var T=c[y];h.pointToLocal(T,T)}return u.setFromPoints(c)},o.prototype.toWorldFrame=function(h,u){var c=l,d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=c[5],_=c[6],x=c[7];this.getCorners(d,f,v,g,m,p,_,x);for(var y=0;y!==8;y++){var T=c[y];h.pointToWorld(T,T)}return u.setFromPoints(c)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,i){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(o,a){if(o=o.index,a=a.index,a>o){var l=a;a=o,o=l}return this.matrix[(o*(o+1)>>1)+a-1]},r.prototype.set=function(o,a,l){if(o=o.index,a=a.index,a>o){var h=a;a=o,o=h}this.matrix[(o*(o+1)>>1)+a-1]=l?1:0},r.prototype.reset=function(){for(var o=0,a=this.matrix.length;o!==a;o++)this.matrix[o]=0},r.prototype.setNumObjects=function(o){this.matrix.length=o*(o-1)>>1}},{}],5:[function(e,n,i){var r=e("../objects/Body"),o=e("../math/Vec3"),a=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=l;function l(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}l.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var h=r.STATIC|r.KINEMATIC;l.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&h||g.sleepState===r.SLEEPING)&&(m.type&h||m.sleepState===r.SLEEPING))},l.prototype.intersectionTest=function(g,m,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,_):this.doBoundingSphereBroadphase(g,m,p,_)};var u=new o;new o,new a,new o,l.prototype.doBoundingSphereBroadphase=function(g,m,p,_){var x=u;m.position.vsub(g.position,x);var y=Math.pow(g.boundingRadius+m.boundingRadius,2),T=x.norm2();T<y&&(p.push(g),_.push(m))},l.prototype.doBoundingBoxBroadphase=function(g,m,p,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),_.push(m))};var c={keys:[]},d=[],f=[];l.prototype.makePairsUnique=function(g,m){for(var p=c,_=d,x=f,y=g.length,T=0;T!==y;T++)_[T]=g[T],x[T]=m[T];g.length=0,m.length=0;for(var T=0;T!==y;T++){var b=_[T].id,I=x[T].id,D=b<I?b+","+I:I+","+b;p[D]=T,p.keys.push(D)}for(var T=0;T!==p.keys.length;T++){var D=p.keys.pop(),E=p[D];g.push(_[E]),m.push(x[E]),delete p[D]}},l.prototype.setWorld=function(g){};var v=new o;l.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},l.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,i){n.exports=l;var r=e("./Broadphase"),o=e("../math/Vec3"),a=e("../shapes/Shape");function l(u,c,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=u||new o(100,100,100),this.aabbMax=c||new o(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}l.prototype=new r,l.prototype.constructor=l;var h=new o;new o,l.prototype.collisionPairs=function(u,c,d){var f=u.numObjects(),v=u.bodies,$=this.aabbMax,H=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,_=m*p,x=p,y=1,T=$.x,b=$.y,I=$.z,D=H.x,E=H.y,M=H.z,C=g/(T-D),O=m/(b-E),P=p/(I-M),k=(T-D)/g,q=(b-E)/m,rt=(I-M)/p,G=Math.sqrt(k*k+q*q+rt*rt)*.5,L=a.types,Q=L.SPHERE,Y=L.PLANE;L.BOX,L.COMPOUND,L.CONVEXPOLYHEDRON;for(var B=this.bins,J=this.binLengths,z=this.bins.length,A=0;A!==z;A++)J[A]=0;var R=Math.ceil,H=Math.min,$=Math.max;function it(Gt,ne,qt,Ut,jt,ee,ue){var Zt=(Gt-D)*C|0,Z=(ne-E)*O|0,mt=(qt-M)*P|0,ht=R((Ut-D)*C),Ct=R((jt-E)*O),Pt=R((ee-M)*P);Zt<0?Zt=0:Zt>=g&&(Zt=g-1),Z<0?Z=0:Z>=m&&(Z=m-1),mt<0?mt=0:mt>=p&&(mt=p-1),ht<0?ht=0:ht>=g&&(ht=g-1),Ct<0?Ct=0:Ct>=m&&(Ct=m-1),Pt<0?Pt=0:Pt>=p&&(Pt=p-1),Zt*=_,Z*=x,mt*=y,ht*=_,Ct*=x,Pt*=y;for(var re=Zt;re<=ht;re+=_)for(var ce=Z;ce<=Ct;ce+=x)for(var de=mt;de<=Pt;de+=y){var Ae=re+ce+de;B[Ae][J[Ae]++]=ue}}for(var A=0;A!==f;A++){var K=v[A],N=K.shape;switch(N.type){case Q:var ut=K.position.x,vt=K.position.y,Mt=K.position.z,dt=N.radius;it(ut-dt,vt-dt,Mt-dt,ut+dt,vt+dt,Mt+dt,K);break;case Y:N.worldNormalNeedsUpdate&&N.computeWorldNormal(K.quaternion);var st=N.worldNormal,lt=D+k*.5-K.position.x,Vt=E+q*.5-K.position.y,Ot=M+rt*.5-K.position.z,U=h;U.set(lt,Vt,Ot);for(var S=0,et=0;S!==g;S++,et+=_,U.y=Vt,U.x+=k)for(var at=0,ct=0;at!==m;at++,ct+=x,U.z=Ot,U.y+=q)for(var pt=0,Rt=0;pt!==p;pt++,Rt+=y,U.z+=rt)if(U.dot(st)<G){var St=et+ct+Rt;B[St][J[St]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),it(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var A=0;A!==z;A++){var gt=J[A];if(gt>1)for(var Wt=B[A],S=0;S!==gt;S++)for(var K=Wt[S],at=0;at!==S;at++){var wt=Wt[at];this.needBroadphaseCollision(K,wt)&&this.intersectionTest(K,wt,c,d)}}this.makePairsUnique(c,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,i){n.exports=a;var r=e("./Broadphase"),o=e("./AABB");function a(){r.apply(this)}a.prototype=new r,a.prototype.constructor=a,a.prototype.collisionPairs=function(l,h,u){var c=l.bodies,d=c.length,f,v,g,m;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=c[f],m=c[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,h,u)},new o,a.prototype.aabbQuery=function(l,h,u){u=u||[];for(var c=0;c<l.bodies.length;c++){var d=l.bodies[c];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(h)&&u.push(d)}return u}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,i){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(o,a){if(o=o.id,a=a.id,a>o){var l=a;a=o,o=l}return o+"-"+a in this.matrix},r.prototype.set=function(o,a,l){if(o=o.id,a=a.id,a>o){var h=a;a=o,o=h}l?this.matrix[o+"-"+a]=!0:delete this.matrix[o+"-"+a]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(o){}},{}],9:[function(e,n,i){n.exports=c;var r=e("../math/Vec3"),o=e("../math/Quaternion"),a=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var l=e("../collision/RaycastResult"),h=e("../shapes/Shape"),u=e("../collision/AABB");function c(z,A){this.from=z?z.clone():new r,this.to=A?A.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=c.ANY,this.result=new l,this.hasHit=!1,this.callback=function(R){}}c.prototype.constructor=c,c.CLOSEST=1,c.ANY=2,c.ALL=4;var d=new u,f=[];c.prototype.intersectWorld=function(z,A){return this.mode=A.mode||c.ANY,this.result=A.result||new l,this.skipBackfaces=!!A.skipBackfaces,this.collisionFilterMask=typeof A.collisionFilterMask<"u"?A.collisionFilterMask:-1,this.collisionFilterGroup=typeof A.collisionFilterGroup<"u"?A.collisionFilterGroup:-1,A.from&&this.from.copy(A.from),A.to&&this.to.copy(A.to),this.callback=A.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,z.broadphase.aabbQuery(z,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;c.pointInTriangle=m;function m(z,A,R,H){H.vsub(A,Y),R.vsub(A,v),z.vsub(A,g);var $=Y.dot(Y),it=Y.dot(v),K=Y.dot(g),N=v.dot(v),ut=v.dot(g),vt,Mt;return(vt=N*K-it*ut)>=0&&(Mt=$*ut-it*K)>=0&&vt+Mt<$*N-it*it}var p=new r,_=new o;c.prototype.intersectBody=function(z,A){A&&(this.result=A,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!z.collisionResponse)&&!(!(this.collisionFilterGroup&z.collisionFilterMask)||!(z.collisionFilterGroup&this.collisionFilterMask)))for(var H=p,$=_,it=0,K=z.shapes.length;it<K;it++){var N=z.shapes[it];if(!(R&&!N.collisionResponse)&&(z.quaternion.mult(z.shapeOrientations[it],$),z.quaternion.vmult(z.shapeOffsets[it],H),H.vadd(z.position,H),this.intersectShape(N,$,H,z),this.result._shouldStop))break}},c.prototype.intersectBodies=function(z,A){A&&(this.result=A,this._updateDirection());for(var R=0,H=z.length;!this.result._shouldStop&&R<H;R++)this.intersectBody(z[R])},c.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},c.prototype.intersectShape=function(z,A,R,H){var $=this.from,it=J($,this._direction,R);if(!(it>z.boundingSphereRadius)){var K=this[z.type];K&&K.call(this,z,A,R,H)}},new r,new r;var x=new r,y=new r,T=new r,b=new r;new r,new l,c.prototype.intersectBox=function(z,A,R,H){return this.intersectConvex(z.convexPolyhedronRepresentation,A,R,H)},c.prototype[h.types.BOX]=c.prototype.intersectBox,c.prototype.intersectPlane=function(z,A,R,H){var $=this.from,it=this.to,K=this._direction,N=new r(0,0,1);A.vmult(N,N);var ut=new r;$.vsub(R,ut);var vt=ut.dot(N);it.vsub(R,ut);var Mt=ut.dot(N);if(!(vt*Mt>0)&&!($.distanceTo(it)<vt)){var dt=N.dot(K);if(!(Math.abs(dt)<this.precision)){var st=new r,lt=new r,Vt=new r;$.vsub(R,st);var Ot=-N.dot(st)/dt;K.scale(Ot,lt),$.vadd(lt,Vt),this.reportIntersection(N,Vt,z,H,-1)}}},c.prototype[h.types.PLANE]=c.prototype.intersectPlane,c.prototype.getAABB=function(z){var A=this.to,R=this.from;z.lowerBound.x=Math.min(A.x,R.x),z.lowerBound.y=Math.min(A.y,R.y),z.lowerBound.z=Math.min(A.z,R.z),z.upperBound.x=Math.max(A.x,R.x),z.upperBound.y=Math.max(A.y,R.y),z.upperBound.z=Math.max(A.z,R.z)};var I={faceList:[0]};c.prototype.intersectHeightfield=function(z,A,R,H){z.data,z.elementSize;var $=new r,it=new c(this.from,this.to);a.pointToLocalFrame(R,A,it.from,it.from),a.pointToLocalFrame(R,A,it.to,it.to);var K=[],N=null,ut=null,vt=null,Mt=null,dt=z.getIndexOfPosition(it.from.x,it.from.y,K,!1);if(dt&&(N=K[0],ut=K[1],vt=K[0],Mt=K[1]),dt=z.getIndexOfPosition(it.to.x,it.to.y,K,!1),dt&&((N===null||K[0]<N)&&(N=K[0]),(vt===null||K[0]>vt)&&(vt=K[0]),(ut===null||K[1]<ut)&&(ut=K[1]),(Mt===null||K[1]>Mt)&&(Mt=K[1])),N!==null){var st=[];z.getRectMinMax(N,ut,vt,Mt,st),st[0],st[1];for(var lt=N;lt<=vt;lt++)for(var Vt=ut;Vt<=Mt;Vt++){if(this.result._shouldStop||(z.getConvexTrianglePillar(lt,Vt,!1),a.pointToWorldFrame(R,A,z.pillarOffset,$),this.intersectConvex(z.pillarConvex,A,$,H,I),this.result._shouldStop))return;z.getConvexTrianglePillar(lt,Vt,!0),a.pointToWorldFrame(R,A,z.pillarOffset,$),this.intersectConvex(z.pillarConvex,A,$,H,I)}}},c.prototype[h.types.HEIGHTFIELD]=c.prototype.intersectHeightfield;var D=new r,E=new r;c.prototype.intersectSphere=function(z,A,R,H){var $=this.from,it=this.to,K=z.radius,N=Math.pow(it.x-$.x,2)+Math.pow(it.y-$.y,2)+Math.pow(it.z-$.z,2),ut=2*((it.x-$.x)*($.x-R.x)+(it.y-$.y)*($.y-R.y)+(it.z-$.z)*($.z-R.z)),vt=Math.pow($.x-R.x,2)+Math.pow($.y-R.y,2)+Math.pow($.z-R.z,2)-Math.pow(K,2),Mt=Math.pow(ut,2)-4*N*vt,dt=D,st=E;if(!(Mt<0))if(Mt===0)$.lerp(it,Mt,dt),dt.vsub(R,st),st.normalize(),this.reportIntersection(st,dt,z,H,-1);else{var lt=(-ut-Math.sqrt(Mt))/(2*N),Vt=(-ut+Math.sqrt(Mt))/(2*N);if(lt>=0&&lt<=1&&($.lerp(it,lt,dt),dt.vsub(R,st),st.normalize(),this.reportIntersection(st,dt,z,H,-1)),this.result._shouldStop)return;Vt>=0&&Vt<=1&&($.lerp(it,Vt,dt),dt.vsub(R,st),st.normalize(),this.reportIntersection(st,dt,z,H,-1))}},c.prototype[h.types.SPHERE]=c.prototype.intersectSphere;var M=new r;new r,new r;var C=new r;c.prototype.intersectConvex=function(A,R,H,$,it){for(var K=M,N=C,ut=it&&it.faceList||null,vt=A.faces,Mt=A.vertices,dt=A.faceNormals,st=this._direction,lt=this.from,Vt=this.to,Ot=lt.distanceTo(Vt),U=ut?ut.length:vt.length,S=this.result,et=0;!S._shouldStop&&et<U;et++){var at=ut?ut[et]:et,ct=vt[at],pt=dt[at],Rt=R,St=H;N.copy(Mt[ct[0]]),Rt.vmult(N,N),N.vadd(St,N),N.vsub(lt,N),Rt.vmult(pt,K);var gt=st.dot(K);if(!(Math.abs(gt)<this.precision)){var Wt=K.dot(N)/gt;if(!(Wt<0)){st.mult(Wt,x),x.vadd(lt,x),y.copy(Mt[ct[0]]),Rt.vmult(y,y),St.vadd(y,y);for(var wt=1;!S._shouldStop&&wt<ct.length-1;wt++){T.copy(Mt[ct[wt]]),b.copy(Mt[ct[wt+1]]),Rt.vmult(T,T),Rt.vmult(b,b),St.vadd(T,T),St.vadd(b,b);var Gt=x.distanceTo(lt);!(m(x,y,T,b)||m(x,T,y,b))||Gt>Ot||this.reportIntersection(K,x,A,$,at)}}}}},c.prototype[h.types.CONVEXPOLYHEDRON]=c.prototype.intersectConvex;var O=new r,P=new r,k=new r,q=new r,rt=new r,G=new r;new u;var L=[],Q=new a;c.prototype.intersectTrimesh=function(A,R,H,$,it){var K=O,N=L,ut=Q,vt=C,Mt=P,dt=k,st=q,lt=G,Vt=rt;it&&it.faceList;var Ot=A.indices;A.vertices,A.faceNormals;var U=this.from,S=this.to,et=this._direction;ut.position.copy(H),ut.quaternion.copy(R),a.vectorToLocalFrame(H,R,et,Mt),a.pointToLocalFrame(H,R,U,dt),a.pointToLocalFrame(H,R,S,st);var at=dt.distanceSquared(st);A.tree.rayQuery(this,ut,N);for(var ct=0,pt=N.length;!this.result._shouldStop&&ct!==pt;ct++){var Rt=N[ct];A.getNormal(Rt,K),A.getVertex(Ot[Rt*3],y),y.vsub(dt,vt);var St=Mt.dot(K),gt=K.dot(vt)/St;if(!(gt<0)){Mt.scale(gt,x),x.vadd(dt,x),A.getVertex(Ot[Rt*3+1],T),A.getVertex(Ot[Rt*3+2],b);var Wt=x.distanceSquared(dt);!(m(x,T,y,b)||m(x,y,T,b))||Wt>at||(a.vectorToWorldFrame(R,K,Vt),a.pointToWorldFrame(H,R,x,lt),this.reportIntersection(Vt,lt,A,$,Rt))}}N.length=0},c.prototype[h.types.TRIMESH]=c.prototype.intersectTrimesh,c.prototype.reportIntersection=function(z,A,R,H,$){var it=this.from,K=this.to,N=it.distanceTo(A),ut=this.result;if(!(this.skipBackfaces&&z.dot(this._direction)>0))switch(ut.hitFaceIndex=typeof $<"u"?$:-1,this.mode){case c.ALL:this.hasHit=!0,ut.set(it,K,z,A,R,H,N),ut.hasHit=!0,this.callback(ut);break;case c.CLOSEST:(N<ut.distance||!ut.hasHit)&&(this.hasHit=!0,ut.hasHit=!0,ut.set(it,K,z,A,R,H,N));break;case c.ANY:this.hasHit=!0,ut.hasHit=!0,ut.set(it,K,z,A,R,H,N),ut._shouldStop=!0;break}};var Y=new r,B=new r;function J(z,A,R){R.vsub(z,Y);var H=Y.dot(A);A.mult(H,B),B.vadd(z,B);var $=R.distanceTo(B);return $}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,i){var r=e("../math/Vec3");n.exports=o;function o(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}o.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},o.prototype.abort=function(){this._shouldStop=!0},o.prototype.set=function(a,l,h,u,c,d,f){this.rayFromWorld.copy(a),this.rayToWorld.copy(l),this.hitNormalWorld.copy(h),this.hitPointWorld.copy(u),this.shape=c,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,i){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=o;function o(a){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var l=this.axisList;this._addBodyHandler=function(h){l.push(h.body)},this._removeBodyHandler=function(h){var u=l.indexOf(h.body);u!==-1&&l.splice(u,1)},a&&this.setWorld(a)}o.prototype=new r,o.prototype.setWorld=function(a){this.axisList.length=0;for(var l=0;l<a.bodies.length;l++)this.axisList.push(a.bodies[l]);a.removeEventListener("addBody",this._addBodyHandler),a.removeEventListener("removeBody",this._removeBodyHandler),a.addEventListener("addBody",this._addBodyHandler),a.addEventListener("removeBody",this._removeBodyHandler),this.world=a,this.dirty=!0},o.insertionSortX=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.x<=u.aabb.lowerBound.x);c--)a[c+1]=a[c];a[c+1]=u}return a},o.insertionSortY=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.y<=u.aabb.lowerBound.y);c--)a[c+1]=a[c];a[c+1]=u}return a},o.insertionSortZ=function(a){for(var l=1,h=a.length;l<h;l++){for(var u=a[l],c=l-1;c>=0&&!(a[c].aabb.lowerBound.z<=u.aabb.lowerBound.z);c--)a[c+1]=a[c];a[c+1]=u}return a},o.prototype.collisionPairs=function(a,l,h){var u=this.axisList,c=u.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==c;f++){var g=u[f];for(v=f+1;v<c;v++){var m=u[v];if(this.needBroadphaseCollision(g,m)){if(!o.checkBounds(g,m,d))break;this.intersectionTest(g,m,l,h)}}}},o.prototype.sortList=function(){for(var a=this.axisList,l=this.axisIndex,h=a.length,u=0;u!==h;u++){var c=a[u];c.aabbNeedsUpdate&&c.computeAABB()}l===0?o.insertionSortX(a):l===1?o.insertionSortY(a):l===2&&o.insertionSortZ(a)},o.checkBounds=function(a,l,h){var u,c;h===0?(u=a.position.x,c=l.position.x):h===1?(u=a.position.y,c=l.position.y):h===2&&(u=a.position.z,c=l.position.z);var d=a.boundingRadius,f=l.boundingRadius,v=u+d,g=c-f;return g<v},o.prototype.autoDetectAxis=function(){for(var a=0,l=0,h=0,u=0,c=0,d=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],_=p.position.x;a+=_,l+=_*_;var x=p.position.y;h+=x,u+=x*x;var y=p.position.z;c+=y,d+=y*y}var T=l-a*a*g,b=u-h*h*g,I=d-c*c*g;T>b?T>I?this.axisIndex=0:this.axisIndex=2:b>I?this.axisIndex=1:this.axisIndex=2},o.prototype.aabbQuery=function(a,l,h){h=h||[],this.dirty&&(this.sortList(),this.dirty=!1);var u=this.axisIndex,c="x";u===1&&(c="y"),u===2&&(c="z");var d=this.axisList;l.lowerBound[c],l.upperBound[c];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(l)&&h.push(v)}return h}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,i){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),o=e("../equations/ConeEquation"),a=e("../equations/RotationalEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function h(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new l,g=d.pivotB?d.pivotB.clone():new l;this.axisA=d.axisA?d.axisA.clone():new l,this.axisB=d.axisB?d.axisB.clone():new l,r.call(this,u,v,c,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new o(u,c,d),p=this.twistEquation=new a(u,c,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}h.prototype=new r,h.constructor=h,new l,new l,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),u.vectorToWorldFrame(this.axisA,d.axisA),c.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),u.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),c.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,i){n.exports=o;var r=e("../utils/Utils");function o(a,l,h){h=r.defaults(h,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=a,this.bodyB=l,this.id=o.idCounter++,this.collideConnected=h.collideConnected,h.wakeUpBodies&&(a&&a.wakeUp(),l&&l.wakeUp())}o.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},o.prototype.enable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!0},o.prototype.disable=function(){for(var a=this.equations,l=0;l<a.length;l++)a[l].enabled=!1},o.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,i){n.exports=a;var r=e("./Constraint"),o=e("../equations/ContactEquation");function a(l,h,u,c){r.call(this,l,h),typeof u>"u"&&(u=l.position.distanceTo(h.position)),typeof c>"u"&&(c=1e6),this.distance=u;var d=this.distanceEquation=new o(l,h);this.equations.push(d),d.minForce=-c,d.maxForce=c}a.prototype=new r,a.prototype.update=function(){var l=this.bodyA,h=this.bodyB,u=this.distanceEquation,c=this.distance*.5,d=u.ni;h.position.vsub(l.position,d),d.normalize(),d.mult(c,u.ri),d.mult(-c,u.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,i){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),o=e("../equations/RotationalEquation"),a=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var l=e("../math/Vec3");function h(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new l,p=v.pivotB?v.pivotB.clone():new l;r.call(this,d,m,f,p,g);var _=this.axisA=v.axisA?v.axisA.clone():new l(1,0,0);_.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new l(1,0,0);x.normalize();var y=this.rotationalEquation1=new o(d,f,v),T=this.rotationalEquation2=new o(d,f,v),b=this.motorEquation=new a(d,f,g);b.enabled=!1,this.equations.push(y,T,b)}h.prototype=new r,h.constructor=h,h.prototype.enableMotor=function(){this.motorEquation.enabled=!0},h.prototype.disableMotor=function(){this.motorEquation.enabled=!1},h.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},h.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var u=new l,c=new l;h.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=u,_=c,x=this.axisA,y=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(x,p),f.quaternion.vmult(y,_),p.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,i){n.exports=l,e("./Constraint");var r=e("./PointToPointConstraint"),o=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var a=e("../math/Vec3");function l(h,u,c){c=c||{};var d=typeof c.maxForce<"u"?c.maxForce:1e6,f=new a,v=new a,g=new a;h.position.vadd(u.position,g),g.scale(.5,g),u.pointToLocalFrame(g,v),h.pointToLocalFrame(g,f),r.call(this,h,f,u,v,d);var m=this.rotationalEquation1=new o(h,u,c),p=this.rotationalEquation2=new o(h,u,c),_=this.rotationalEquation3=new o(h,u,c);this.equations.push(m,p,_)}l.prototype=new r,l.constructor=l,new a,new a,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB;this.motorEquation;var c=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),h.vectorToWorldFrame(a.UNIT_X,c.axisA),u.vectorToWorldFrame(a.UNIT_Y,c.axisB),h.vectorToWorldFrame(a.UNIT_Y,d.axisA),u.vectorToWorldFrame(a.UNIT_Z,d.axisB),h.vectorToWorldFrame(a.UNIT_Z,f.axisA),u.vectorToWorldFrame(a.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,i){n.exports=l;var r=e("./Constraint"),o=e("../equations/ContactEquation"),a=e("../math/Vec3");function l(h,u,c,d,f){r.call(this,h,c),f=typeof f<"u"?f:1e6,this.pivotA=u?u.clone():new a,this.pivotB=d?d.clone():new a;var v=this.equationX=new o(h,c),g=this.equationY=new o(h,c),m=this.equationZ=new o(h,c);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}l.prototype=new r,l.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.equationX,d=this.equationY,f=this.equationZ;h.quaternion.vmult(this.pivotA,c.ri),u.quaternion.vmult(this.pivotB,c.rj),d.ri.copy(c.ri),d.rj.copy(c.rj),f.ri.copy(c.ri),f.rj.copy(c.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var o=e("./Equation");function a(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;o.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}a.prototype=new o,a.prototype.constructor=a;var l=new r,h=new r;a.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.angle)-f.dot(v),y=this.computeGW(),T=this.computeGiMf(),b=-x*c-y*d-u*T;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,i){n.exports=a;var r=e("./Equation"),o=e("../math/Vec3");e("../math/Mat3");function a(m,p,_){_=typeof _<"u"?_:1e6,r.call(this,m,p,0,_),this.restitution=0,this.ri=new o,this.rj=new o,this.ni=new o}a.prototype=new r,a.prototype.constructor=a;var l=new o,h=new o,u=new o;a.prototype.computeB=function(m){var p=this.a,_=this.b,x=this.bi,y=this.bj,T=this.ri,b=this.rj,I=l,D=h,E=x.velocity,M=x.angularVelocity;x.force,x.torque;var C=y.velocity,O=y.angularVelocity;y.force,y.torque;var P=u,k=this.jacobianElementA,q=this.jacobianElementB,rt=this.ni;T.cross(rt,I),b.cross(rt,D),rt.negate(k.spatial),I.negate(k.rotational),q.spatial.copy(rt),q.rotational.copy(D),P.copy(y.position),P.vadd(b,P),P.vsub(x.position,P),P.vsub(T,P);var G=rt.dot(P),L=this.restitution+1,Q=L*C.dot(rt)-L*E.dot(rt)+O.dot(D)-M.dot(I),Y=this.computeGiMf(),B=-G*p-Q*_-m*Y;return B};var c=new o,d=new o,f=new o,v=new o,g=new o;a.prototype.getImpactVelocityAlongNormal=function(){var m=c,p=d,_=f,x=v,y=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(x,p),m.vsub(p,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,i){n.exports=a;var r=e("../math/JacobianElement"),o=e("../math/Vec3");function a(g,m,p,_){this.id=a.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}a.prototype.constructor=a,a.id=0,a.prototype.setSpookParams=function(g,m,p){var _=m,x=g,y=p;this.a=4/(y*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(y*y*x*(1+4*_))},a.prototype.computeB=function(g,m,p){var _=this.computeGW(),x=this.computeGq(),y=this.computeGiMf();return-x*g-_*m-y*p},a.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.position,y=_.position;return g.spatial.dot(x)+m.spatial.dot(y)};var l=new o;a.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.velocity,y=_.velocity,T=p.angularVelocity||l,b=_.angularVelocity||l;return g.multiplyVectors(x,T)+m.multiplyVectors(y,b)},a.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.vlambda,y=_.vlambda,T=p.wlambda||l,b=_.wlambda||l;return g.multiplyVectors(x,T)+m.multiplyVectors(y,b)};var h=new o,u=new o,c=new o,d=new o;a.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.force,y=p.torque,T=_.force,b=_.torque,I=p.invMassSolve,D=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(y,c):c.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(b,d):d.set(0,0,0),x.mult(I,h),T.mult(D,u),g.multiplyVectors(h,c)+m.multiplyVectors(u,d)};var f=new o;a.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,x=p.invMassSolve,y=_.invMassSolve,T=p.invInertiaWorldSolve,b=_.invInertiaWorldSolve,I=x+y;return T&&(T.vmult(g.rotational,f),I+=f.dot(g.rotational)),b&&(b.vmult(m.rotational,f),I+=f.dot(m.rotational)),I};var v=new o;new o,new o,new o,new o,new o,a.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,x=this.bj,y=v;m.spatial.mult(_.invMassSolve*g,y),_.vlambda.vadd(y,_.vlambda),p.spatial.mult(x.invMassSolve*g,y),x.vlambda.vadd(y,x.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,y),y.mult(g,y),_.wlambda.vadd(y,_.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(p.rotational,y),y.mult(g,y),x.wlambda.vadd(y,x.wlambda))},a.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,i){n.exports=a;var r=e("./Equation"),o=e("../math/Vec3");e("../math/Mat3");function a(u,c,d){r.call(this,u,c,-d,d),this.ri=new o,this.rj=new o,this.t=new o}a.prototype=new r,a.prototype.constructor=a;var l=new o,h=new o;a.prototype.computeB=function(u){this.a;var c=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=l,g=h,m=this.t;d.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,_=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),_.spatial.copy(m),_.rotational.copy(g);var x=this.computeGW(),y=this.computeGiMf(),T=-x*c-u*y;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var o=e("./Equation");function a(u,c,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;o.call(this,u,c,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}a.prototype=new o,a.prototype.constructor=a;var l=new r,h=new r;a.prototype.computeB=function(u){var c=this.a,d=this.b,f=this.axisA,v=this.axisB,g=l,m=h,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.maxAngle)-f.dot(v),y=this.computeGW(),T=this.computeGiMf(),b=-x*c-y*d-u*T;return b}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,i){n.exports=a;var r=e("../math/Vec3");e("../math/Mat3");var o=e("./Equation");function a(l,h,u){u=typeof u<"u"?u:1e6,o.call(this,l,h,-u,u),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}a.prototype=new o,a.prototype.constructor=a,a.prototype.computeB=function(l){this.a;var h=this.b;this.bi,this.bj;var u=this.axisA,c=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(u),c.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*h-l*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,i){var r=e("../utils/Utils");n.exports=o;function o(a,l,h){h=r.defaults(h,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=o.idCounter++,this.materials=[a,l],this.friction=h.friction,this.restitution=h.restitution,this.contactEquationStiffness=h.contactEquationStiffness,this.contactEquationRelaxation=h.contactEquationRelaxation,this.frictionEquationStiffness=h.frictionEquationStiffness,this.frictionEquationRelaxation=h.frictionEquationRelaxation}o.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,i){n.exports=r;function r(o){var a="";o=o||{},typeof o=="string"?(a=o,o={}):typeof o=="object"&&(a=""),this.name=a,this.id=r.idCounter++,this.friction=typeof o.friction<"u"?o.friction:-1,this.restitution=typeof o.restitution<"u"?o.restitution:-1}r.idCounter=0},{}],26:[function(e,n,i){n.exports=o;var r=e("./Vec3");function o(){this.spatial=new r,this.rotational=new r}o.prototype.multiplyElement=function(a){return a.spatial.dot(this.spatial)+a.rotational.dot(this.rotational)},o.prototype.multiplyVectors=function(a,l){return a.dot(this.spatial)+l.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,i){n.exports=o;var r=e("./Vec3");function o(a){a?this.elements=a:this.elements=[0,0,0,0,0,0,0,0,0]}o.prototype.identity=function(){var a=this.elements;a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=1,a[5]=0,a[6]=0,a[7]=0,a[8]=1},o.prototype.setZero=function(){var a=this.elements;a[0]=0,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=0,a[6]=0,a[7]=0,a[8]=0},o.prototype.setTrace=function(a){var l=this.elements;l[0]=a.x,l[4]=a.y,l[8]=a.z},o.prototype.getTrace=function(l){var l=l||new r,h=this.elements;l.x=h[0],l.y=h[4],l.z=h[8]},o.prototype.vmult=function(a,l){l=l||new r;var h=this.elements,u=a.x,c=a.y,d=a.z;return l.x=h[0]*u+h[1]*c+h[2]*d,l.y=h[3]*u+h[4]*c+h[5]*d,l.z=h[6]*u+h[7]*c+h[8]*d,l},o.prototype.smult=function(a){for(var l=0;l<this.elements.length;l++)this.elements[l]*=a},o.prototype.mmult=function(a,l){for(var h=l||new o,u=0;u<3;u++)for(var c=0;c<3;c++){for(var d=0,f=0;f<3;f++)d+=a.elements[u+f*3]*this.elements[f+c*3];h.elements[u+c*3]=d}return h},o.prototype.scale=function(a,l){l=l||new o;for(var h=this.elements,u=l.elements,c=0;c!==3;c++)u[3*c+0]=a.x*h[3*c+0],u[3*c+1]=a.y*h[3*c+1],u[3*c+2]=a.z*h[3*c+2];return l},o.prototype.solve=function(a,l){l=l||new r;for(var h=3,u=4,c=[],d=0;d<h*u;d++)c.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)c[d+u*f]=this.elements[d+3*f];c[3+4*0]=a.x,c[3+4*1]=a.y,c[3+4*2]=a.z;var v=3,g=v,m,p=4,_;do{if(d=g-v,c[d+u*d]===0){for(f=d+1;f<g;f++)if(c[d+u*f]!==0){m=p;do _=p-m,c[_+u*d]+=c[_+u*f];while(--m);break}}if(c[d+u*d]!==0)for(f=d+1;f<g;f++){var x=c[d+u*f]/c[d+u*d];m=p;do _=p-m,c[_+u*f]=_<=d?0:c[_+u*f]-c[_+u*d]*x;while(--m)}}while(--v);if(l.z=c[2*u+3]/c[2*u+2],l.y=(c[1*u+3]-c[1*u+2]*l.z)/c[1*u+1],l.x=(c[0*u+3]-c[0*u+2]*l.z-c[0*u+1]*l.y)/c[0*u+0],isNaN(l.x)||isNaN(l.y)||isNaN(l.z)||l.x===1/0||l.y===1/0||l.z===1/0)throw"Could not solve equation! Got x=["+l.toString()+"], b=["+a.toString()+"], A=["+this.toString()+"]";return l},o.prototype.e=function(a,l,h){if(h===void 0)return this.elements[l+3*a];this.elements[l+3*a]=h},o.prototype.copy=function(a){for(var l=0;l<a.elements.length;l++)this.elements[l]=a.elements[l];return this},o.prototype.toString=function(){for(var a="",l=",",h=0;h<9;h++)a+=this.elements[h]+l;return a},o.prototype.reverse=function(a){a=a||new o;for(var l=3,h=6,u=[],c=0;c<l*h;c++)u.push(0);var c,d;for(c=0;c<3;c++)for(d=0;d<3;d++)u[c+h*d]=this.elements[c+3*d];u[3+6*0]=1,u[3+6*1]=0,u[3+6*2]=0,u[4+6*0]=0,u[4+6*1]=1,u[4+6*2]=0,u[5+6*0]=0,u[5+6*1]=0,u[5+6*2]=1;var f=3,v=f,g,m=h,p;do{if(c=v-f,u[c+h*c]===0){for(d=c+1;d<v;d++)if(u[c+h*d]!==0){g=m;do p=m-g,u[p+h*c]+=u[p+h*d];while(--g);break}}if(u[c+h*c]!==0)for(d=c+1;d<v;d++){var _=u[c+h*d]/u[c+h*c];g=m;do p=m-g,u[p+h*d]=p<=c?0:u[p+h*d]-u[p+h*c]*_;while(--g)}}while(--f);c=2;do{d=c-1;do{var _=u[c+h*d]/u[c+h*c];g=h;do p=h-g,u[p+h*d]=u[p+h*d]-u[p+h*c]*_;while(--g)}while(d--)}while(--c);c=2;do{var _=1/u[c+h*c];g=h;do p=h-g,u[p+h*c]=u[p+h*c]*_;while(--g)}while(c--);c=2;do{d=2;do{if(p=u[l+d+h*c],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";a.e(c,d,p)}while(d--)}while(c--);return a},o.prototype.setRotationFromQuaternion=function(a){var l=a.x,h=a.y,u=a.z,c=a.w,d=l+l,f=h+h,v=u+u,g=l*d,m=l*f,p=l*v,_=h*f,x=h*v,y=u*v,T=c*d,b=c*f,I=c*v,D=this.elements;return D[3*0+0]=1-(_+y),D[3*0+1]=m-I,D[3*0+2]=p+b,D[3*1+0]=m+I,D[3*1+1]=1-(g+y),D[3*1+2]=x-T,D[3*2+0]=p-b,D[3*2+1]=x+T,D[3*2+2]=1-(g+_),this},o.prototype.transpose=function(a){a=a||new o;for(var l=a.elements,h=this.elements,u=0;u!==3;u++)for(var c=0;c!==3;c++)l[3*u+c]=h[3*c+u];return a}},{"./Vec3":30}],28:[function(e,n,i){n.exports=o;var r=e("./Vec3");function o(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}o.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},o.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},o.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},o.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},o.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var a=new r,l=new r;o.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=a,g=l;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var h=new r,u=new r,c=new r;o.prototype.mult=function(d,f){f=f||new o;var v=this.w,g=h,m=u,p=c;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(m),g.cross(m,p),f.x=v*m.x+d.w*g.x+p.x,f.y=v*m.y+d.w*g.y+p.y,f.z=v*m.z+d.w*g.z+p.z,f},o.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,m=this.w;d=d||new o,this.conjugate(d);var p=1/(f*f+v*v+g*g+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},o.prototype.conjugate=function(d){return d=d||new o,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},o.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},o.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},o.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,m=d.z,p=this.x,_=this.y,x=this.z,y=this.w,T=y*v+_*m-x*g,b=y*g+x*v-p*m,I=y*m+p*g-_*v,D=-p*v-_*g-x*m;return f.x=T*y+D*-p+b*-x-I*-_,f.y=b*y+D*-_+I*-p-T*-x,f.z=I*y+D*-x+T*-_-b*-p,f},o.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},o.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,m,p=this.x,_=this.y,x=this.z,y=this.w;switch(f){case"YZX":var T=p*_+x*y;if(T>.499&&(v=2*Math.atan2(p,y),g=Math.PI/2,m=0),T<-.499&&(v=-2*Math.atan2(p,y),g=-Math.PI/2,m=0),isNaN(v)){var b=p*p,I=_*_,D=x*x;v=Math.atan2(2*_*y-2*p*x,1-2*I-2*D),g=Math.asin(2*T),m=Math.atan2(2*p*y-2*_*x,1-2*b-2*D)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=m},o.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),_=Math.cos(v/2),x=Math.sin(d/2),y=Math.sin(f/2),T=Math.sin(v/2);return g==="XYZ"?(this.x=x*p*_+m*y*T,this.y=m*y*_-x*p*T,this.z=m*p*T+x*y*_,this.w=m*p*_-x*y*T):g==="YXZ"?(this.x=x*p*_+m*y*T,this.y=m*y*_-x*p*T,this.z=m*p*T-x*y*_,this.w=m*p*_+x*y*T):g==="ZXY"?(this.x=x*p*_-m*y*T,this.y=m*y*_+x*p*T,this.z=m*p*T+x*y*_,this.w=m*p*_-x*y*T):g==="ZYX"?(this.x=x*p*_-m*y*T,this.y=m*y*_+x*p*T,this.z=m*p*T-x*y*_,this.w=m*p*_+x*y*T):g==="YZX"?(this.x=x*p*_+m*y*T,this.y=m*y*_+x*p*T,this.z=m*p*T-x*y*_,this.w=m*p*_-x*y*T):g==="XZY"&&(this.x=x*p*_-m*y*T,this.y=m*y*_-x*p*T,this.z=m*p*T+x*y*_,this.w=m*p*_+x*y*T),this},o.prototype.clone=function(){return new o(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,i){var r=e("./Vec3"),o=e("./Quaternion");n.exports=a;function a(h){h=h||{},this.position=new r,h.position&&this.position.copy(h.position),this.quaternion=new o,h.quaternion&&this.quaternion.copy(h.quaternion)}var l=new o;a.pointToLocalFrame=function(h,u,c,f){var f=f||new r;return c.vsub(h,f),u.conjugate(l),l.vmult(f,f),f},a.prototype.pointToLocal=function(h,u){return a.pointToLocalFrame(this.position,this.quaternion,h,u)},a.pointToWorldFrame=function(h,u,c,f){var f=f||new r;return u.vmult(c,f),f.vadd(h,f),f},a.prototype.pointToWorld=function(h,u){return a.pointToWorldFrame(this.position,this.quaternion,h,u)},a.prototype.vectorToWorldFrame=function(h,c){var c=c||new r;return this.quaternion.vmult(h,c),c},a.vectorToWorldFrame=function(h,u,c){return h.vmult(u,c),c},a.vectorToLocalFrame=function(h,u,c,f){var f=f||new r;return u.w*=-1,u.vmult(c,f),u.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,i){n.exports=o;var r=e("./Mat3");function o(u,c,d){this.x=u||0,this.y=c||0,this.z=d||0}o.ZERO=new o(0,0,0),o.UNIT_X=new o(1,0,0),o.UNIT_Y=new o(0,1,0),o.UNIT_Z=new o(0,0,1),o.prototype.cross=function(u,c){var d=u.x,f=u.y,v=u.z,g=this.x,m=this.y,p=this.z;return c=c||new o,c.x=m*v-p*f,c.y=p*d-g*v,c.z=g*f-m*d,c},o.prototype.set=function(u,c,d){return this.x=u,this.y=c,this.z=d,this},o.prototype.setZero=function(){this.x=this.y=this.z=0},o.prototype.vadd=function(u,c){if(c)c.x=u.x+this.x,c.y=u.y+this.y,c.z=u.z+this.z;else return new o(this.x+u.x,this.y+u.y,this.z+u.z)},o.prototype.vsub=function(u,c){if(c)c.x=this.x-u.x,c.y=this.y-u.y,c.z=this.z-u.z;else return new o(this.x-u.x,this.y-u.y,this.z-u.z)},o.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},o.prototype.normalize=function(){var u=this.x,c=this.y,d=this.z,f=Math.sqrt(u*u+c*c+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},o.prototype.unit=function(u){u=u||new o;var c=this.x,d=this.y,f=this.z,v=Math.sqrt(c*c+d*d+f*f);return v>0?(v=1/v,u.x=c*v,u.y=d*v,u.z=f*v):(u.x=1,u.y=0,u.z=0),u},o.prototype.norm=function(){var u=this.x,c=this.y,d=this.z;return Math.sqrt(u*u+c*c+d*d)},o.prototype.length=o.prototype.norm,o.prototype.norm2=function(){return this.dot(this)},o.prototype.lengthSquared=o.prototype.norm2,o.prototype.distanceTo=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,m=u.z;return Math.sqrt((v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f))},o.prototype.distanceSquared=function(u){var c=this.x,d=this.y,f=this.z,v=u.x,g=u.y,m=u.z;return(v-c)*(v-c)+(g-d)*(g-d)+(m-f)*(m-f)},o.prototype.mult=function(u,c){c=c||new o;var d=this.x,f=this.y,v=this.z;return c.x=u*d,c.y=u*f,c.z=u*v,c},o.prototype.scale=o.prototype.mult,o.prototype.dot=function(u){return this.x*u.x+this.y*u.y+this.z*u.z},o.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},o.prototype.negate=function(u){return u=u||new o,u.x=-this.x,u.y=-this.y,u.z=-this.z,u};var a=new o,l=new o;o.prototype.tangents=function(u,c){var d=this.norm();if(d>0){var f=a,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=l;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,u)):(g.set(0,1,0),f.cross(g,u)),f.cross(u,c)}else u.set(1,0,0),c.set(0,1,0)},o.prototype.toString=function(){return this.x+","+this.y+","+this.z},o.prototype.toArray=function(){return[this.x,this.y,this.z]},o.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this},o.prototype.lerp=function(u,c,d){var f=this.x,v=this.y,g=this.z;d.x=f+(u.x-f)*c,d.y=v+(u.y-v)*c,d.z=g+(u.z-g)*c},o.prototype.almostEquals=function(u,c){return c===void 0&&(c=1e-6),!(Math.abs(this.x-u.x)>c||Math.abs(this.y-u.y)>c||Math.abs(this.z-u.z)>c)},o.prototype.almostZero=function(u){return u===void 0&&(u=1e-6),!(Math.abs(this.x)>u||Math.abs(this.y)>u||Math.abs(this.z)>u)};var h=new o;o.prototype.isAntiparallelTo=function(u,c){return this.negate(h),h.almostEquals(u,c)},o.prototype.clone=function(){return new o(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,i){n.exports=c;var r=e("../utils/EventTarget");e("../shapes/Shape");var o=e("../math/Vec3"),a=e("../math/Mat3"),l=e("../math/Quaternion");e("../material/Material");var h=e("../collision/AABB"),u=e("../shapes/Box");function c(C){C=C||{},r.apply(this),this.id=c.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new o,this.collisionFilterGroup=typeof C.collisionFilterGroup=="number"?C.collisionFilterGroup:1,this.collisionFilterMask=typeof C.collisionFilterMask=="number"?C.collisionFilterMask:1,this.collisionResponse=!0,this.position=new o,C.position&&this.position.copy(C.position),this.previousPosition=new o,this.initPosition=new o,this.velocity=new o,C.velocity&&this.velocity.copy(C.velocity),this.initVelocity=new o,this.force=new o;var O=typeof C.mass=="number"?C.mass:0;this.mass=O,this.invMass=O>0?1/O:0,this.material=C.material||null,this.linearDamping=typeof C.linearDamping=="number"?C.linearDamping:.01,this.type=O<=0?c.STATIC:c.DYNAMIC,typeof C.type==typeof c.STATIC&&(this.type=C.type),this.allowSleep=typeof C.allowSleep<"u"?C.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof C.sleepSpeedLimit<"u"?C.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof C.sleepTimeLimit<"u"?C.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new o,this.quaternion=new l,C.quaternion&&this.quaternion.copy(C.quaternion),this.initQuaternion=new l,this.angularVelocity=new o,C.angularVelocity&&this.angularVelocity.copy(C.angularVelocity),this.initAngularVelocity=new o,this.interpolatedPosition=new o,this.interpolatedQuaternion=new l,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new o,this.invInertia=new o,this.invInertiaWorld=new a,this.invMassSolve=0,this.invInertiaSolve=new o,this.invInertiaWorldSolve=new a,this.fixedRotation=typeof C.fixedRotation<"u"?C.fixedRotation:!1,this.angularDamping=typeof C.angularDamping<"u"?C.angularDamping:.01,this.aabb=new h,this.aabbNeedsUpdate=!0,this.wlambda=new o,C.shape&&this.addShape(C.shape),this.updateMassProperties()}c.prototype=new r,c.prototype.constructor=c,c.DYNAMIC=1,c.STATIC=2,c.KINEMATIC=4,c.AWAKE=0,c.SLEEPY=1,c.SLEEPING=2,c.idCounter=0,c.prototype.wakeUp=function(){var C=this.sleepState;this.sleepState=0,C===c.SLEEPING&&this.dispatchEvent({type:"wakeup"})},c.prototype.sleep=function(){this.sleepState=c.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},c.sleepyEvent={type:"sleepy"},c.sleepEvent={type:"sleep"},c.prototype.sleepTick=function(C){if(this.allowSleep){var O=this.sleepState,P=this.velocity.norm2()+this.angularVelocity.norm2(),k=Math.pow(this.sleepSpeedLimit,2);O===c.AWAKE&&P<k?(this.sleepState=c.SLEEPY,this.timeLastSleepy=C,this.dispatchEvent(c.sleepyEvent)):O===c.SLEEPY&&P>k?this.wakeUp():O===c.SLEEPY&&C-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(c.sleepEvent))}},c.prototype.updateSolveMassProperties=function(){this.sleepState===c.SLEEPING||this.type===c.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},c.prototype.pointToLocalFrame=function(C,P){var P=P||new o;return C.vsub(this.position,P),this.quaternion.conjugate().vmult(P,P),P},c.prototype.vectorToLocalFrame=function(C,P){var P=P||new o;return this.quaternion.conjugate().vmult(C,P),P},c.prototype.pointToWorldFrame=function(C,P){var P=P||new o;return this.quaternion.vmult(C,P),P.vadd(this.position,P),P},c.prototype.vectorToWorldFrame=function(C,P){var P=P||new o;return this.quaternion.vmult(C,P),P};var d=new o,f=new l;c.prototype.addShape=function(C,O,P){var k=new o,q=new l;return O&&k.copy(O),P&&q.copy(P),this.shapes.push(C),this.shapeOffsets.push(k),this.shapeOrientations.push(q),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},c.prototype.updateBoundingRadius=function(){for(var C=this.shapes,O=this.shapeOffsets,P=C.length,k=0,q=0;q!==P;q++){var rt=C[q];rt.updateBoundingSphereRadius();var G=O[q].norm(),L=rt.boundingSphereRadius;G+L>k&&(k=G+L)}this.boundingRadius=k};var v=new h;c.prototype.computeAABB=function(){for(var C=this.shapes,O=this.shapeOffsets,P=this.shapeOrientations,k=C.length,q=d,rt=f,G=this.quaternion,L=this.aabb,Q=v,Y=0;Y!==k;Y++){var B=C[Y];P[Y].mult(G,rt),rt.vmult(O[Y],q),q.vadd(this.position,q),B.calculateWorldAABB(q,rt,Q.lowerBound,Q.upperBound),Y===0?L.copy(Q):L.extend(Q)}this.aabbNeedsUpdate=!1};var g=new a,m=new a;new a,c.prototype.updateInertiaWorld=function(C){var O=this.invInertia;if(!(O.x===O.y&&O.y===O.z&&!C)){var P=g,k=m;P.setRotationFromQuaternion(this.quaternion),P.transpose(k),P.scale(O,P),P.mmult(k,this.invInertiaWorld)}};var p=new o,_=new o;c.prototype.applyForce=function(C,O){if(this.type===c.DYNAMIC){var P=p;O.vsub(this.position,P);var k=_;P.cross(C,k),this.force.vadd(C,this.force),this.torque.vadd(k,this.torque)}};var x=new o,y=new o;c.prototype.applyLocalForce=function(C,O){if(this.type===c.DYNAMIC){var P=x,k=y;this.vectorToWorldFrame(C,P),this.pointToWorldFrame(O,k),this.applyForce(P,k)}};var T=new o,b=new o,I=new o;c.prototype.applyImpulse=function(C,O){if(this.type===c.DYNAMIC){var P=T;O.vsub(this.position,P);var k=b;k.copy(C),k.mult(this.invMass,k),this.velocity.vadd(k,this.velocity);var q=I;P.cross(C,q),this.invInertiaWorld.vmult(q,q),this.angularVelocity.vadd(q,this.angularVelocity)}};var D=new o,E=new o;c.prototype.applyLocalImpulse=function(C,O){if(this.type===c.DYNAMIC){var P=D,k=E;this.vectorToWorldFrame(C,P),this.pointToWorldFrame(O,k),this.applyImpulse(P,k)}};var M=new o;c.prototype.updateMassProperties=function(){var C=M;this.invMass=this.mass>0?1/this.mass:0;var O=this.inertia,P=this.fixedRotation;this.computeAABB(),C.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),u.calculateInertia(C,this.mass,O),this.invInertia.set(O.x>0&&!P?1/O.x:0,O.y>0&&!P?1/O.y:0,O.z>0&&!P?1/O.z:0),this.updateInertiaWorld(!0)},c.prototype.getVelocityAtWorldPoint=function(C,O){var P=new o;return C.vsub(this.position,P),this.angularVelocity.cross(P,O),this.velocity.vadd(O,O),O}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,i){e("./Body");var r=e("../math/Vec3"),o=e("../math/Quaternion");e("../collision/RaycastResult");var a=e("../collision/Ray"),l=e("../objects/WheelInfo");n.exports=h;function h(G){this.chassisBody=G.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof G.indexRightAxis<"u"?G.indexRightAxis:1,this.indexForwardAxis=typeof G.indexForwardAxis<"u"?G.indexForwardAxis:0,this.indexUpAxis=typeof G.indexUpAxis<"u"?G.indexUpAxis:2}new r,new r,new r;var u=new r,c=new r,d=new r;new a,h.prototype.addWheel=function(G){G=G||{};var L=new l(G),Q=this.wheelInfos.length;return this.wheelInfos.push(L),Q},h.prototype.setSteeringValue=function(G,L){var Q=this.wheelInfos[L];Q.steering=G},new r,h.prototype.applyEngineForce=function(G,L){this.wheelInfos[L].engineForce=G},h.prototype.setBrake=function(G,L){this.wheelInfos[L].brake=G},h.prototype.addToWorld=function(G){this.constraints,G.add(this.chassisBody);var L=this;this.preStepCallback=function(){L.updateVehicle(G.dt)},G.addEventListener("preStep",this.preStepCallback),this.world=G},h.prototype.getVehicleAxisWorld=function(G,L){L.set(G===0?1:0,G===1?1:0,G===2?1:0),this.chassisBody.vectorToWorldFrame(L,L)},h.prototype.updateVehicle=function(G){for(var L=this.wheelInfos,Q=L.length,Y=this.chassisBody,B=0;B<Q;B++)this.updateWheelTransform(B);this.currentVehicleSpeedKmHour=3.6*Y.velocity.norm();var J=new r;this.getVehicleAxisWorld(this.indexForwardAxis,J),J.dot(Y.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var B=0;B<Q;B++)this.castRay(L[B]);this.updateSuspension(G);for(var z=new r,A=new r,B=0;B<Q;B++){var R=L[B],H=R.suspensionForce;H>R.maxSuspensionForce&&(H=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale(H*G,z),R.raycastResult.hitPointWorld.vsub(Y.position,A),Y.applyImpulse(z,R.raycastResult.hitPointWorld)}this.updateFriction(G);var $=new r,it=new r,K=new r;for(B=0;B<Q;B++){var R=L[B];Y.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,K);var N=1;switch(this.indexUpAxis){case 1:N=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,it);var ut=it.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(ut,$),it.vsub($,it);var vt=it.dot(K);R.deltaRotation=N*vt*G/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*G),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},h.prototype.updateSuspension=function(G){for(var L=this.chassisBody,Q=L.mass,Y=this.wheelInfos,B=Y.length,J=0;J<B;J++){var z=Y[J];if(z.isInContact){var A,R=z.suspensionRestLength,H=z.suspensionLength,$=R-H;A=z.suspensionStiffness*$*z.clippedInvContactDotSuspension;var it=z.suspensionRelativeVelocity,K;it<0?K=z.dampingCompression:K=z.dampingRelaxation,A-=K*it,z.suspensionForce=A*Q,z.suspensionForce<0&&(z.suspensionForce=0)}else z.suspensionForce=0}},h.prototype.removeFromWorld=function(G){this.constraints,G.remove(this.chassisBody),G.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;h.prototype.castRay=function(G){var L=f,Q=v;this.updateWheelTransformWorld(G);var Y=this.chassisBody,B=-1,J=G.suspensionRestLength+G.radius;G.directionWorld.scale(J,L);var z=G.chassisConnectionPointWorld;z.vadd(L,Q);var A=G.raycastResult;A.reset();var R=Y.collisionResponse;Y.collisionResponse=!1,this.world.rayTest(z,Q,A),Y.collisionResponse=R;var H=A.body;if(G.raycastResult.groundObject=0,H){B=A.distance,G.raycastResult.hitNormalWorld=A.hitNormalWorld,G.isInContact=!0;var $=A.distance;G.suspensionLength=$-G.radius;var it=G.suspensionRestLength-G.maxSuspensionTravel,K=G.suspensionRestLength+G.maxSuspensionTravel;G.suspensionLength<it&&(G.suspensionLength=it),G.suspensionLength>K&&(G.suspensionLength=K,G.raycastResult.reset());var N=G.raycastResult.hitNormalWorld.dot(G.directionWorld),ut=new r;Y.getVelocityAtWorldPoint(G.raycastResult.hitPointWorld,ut);var vt=G.raycastResult.hitNormalWorld.dot(ut);if(N>=-.1)G.suspensionRelativeVelocity=0,G.clippedInvContactDotSuspension=1/.1;else{var Mt=-1/N;G.suspensionRelativeVelocity=vt*Mt,G.clippedInvContactDotSuspension=Mt}}else G.suspensionLength=G.suspensionRestLength+0*G.maxSuspensionTravel,G.suspensionRelativeVelocity=0,G.directionWorld.scale(-1,G.raycastResult.hitNormalWorld),G.clippedInvContactDotSuspension=1;return B},h.prototype.updateWheelTransformWorld=function(G){G.isInContact=!1;var L=this.chassisBody;L.pointToWorldFrame(G.chassisConnectionPointLocal,G.chassisConnectionPointWorld),L.vectorToWorldFrame(G.directionLocal,G.directionWorld),L.vectorToWorldFrame(G.axleLocal,G.axleWorld)},h.prototype.updateWheelTransform=function(G){var L=u,Q=c,Y=d,B=this.wheelInfos[G];this.updateWheelTransformWorld(B),B.directionLocal.scale(-1,L),Q.copy(B.axleLocal),L.cross(Q,Y),Y.normalize(),Q.normalize();var J=B.steering,z=new o;z.setFromAxisAngle(L,J);var A=new o;A.setFromAxisAngle(Q,B.rotation);var R=B.worldTransform.quaternion;this.chassisBody.quaternion.mult(z,R),R.mult(A,R),R.normalize();var H=B.worldTransform.position;H.copy(B.directionWorld),H.scale(B.suspensionLength,H),H.vadd(B.chassisConnectionPointWorld,H)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];h.prototype.getWheelTransformWorld=function(G){return this.wheelInfos[G].worldTransform};var m=new r,p=[],_=[],x=1;h.prototype.updateFriction=function(G){for(var L=m,Q=this.wheelInfos,Y=Q.length,B=this.chassisBody,J=_,z=p,A=0;A<Y;A++){var R=Q[A],H=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,J[A]||(J[A]=new r),z[A]||(z[A]=new r)}for(var A=0;A<Y;A++){var R=Q[A],H=R.raycastResult.body;if(H){var $=z[A],it=this.getWheelTransformWorld(A);it.vectorToWorldFrame(g[this.indexRightAxis],$);var K=R.raycastResult.hitNormalWorld,N=$.dot(K);K.scale(N,L),$.vsub(L,$),$.normalize(),K.cross($,J[A]),J[A].normalize(),R.sideImpulse=rt(B,R.raycastResult.hitPointWorld,H,R.raycastResult.hitPointWorld,$),R.sideImpulse*=x}}var ut=1,vt=.5;this.sliding=!1;for(var A=0;A<Y;A++){var R=Q[A],H=R.raycastResult.body,Mt=0;if(R.slipInfo=1,H){var dt=0,st=R.brake?R.brake:dt;Mt=I(B,H,R.raycastResult.hitPointWorld,J[A],st),Mt+=R.engineForce*G;var lt=st/Mt;R.slipInfo*=lt}if(R.forwardImpulse=0,R.skidInfo=1,H){R.skidInfo=1;var Vt=R.suspensionForce*G*R.frictionSlip,Ot=Vt,U=Vt*Ot;R.forwardImpulse=Mt;var S=R.forwardImpulse*vt,et=R.sideImpulse*ut,at=S*S+et*et;if(R.sliding=!1,at>U){this.sliding=!0,R.sliding=!0;var lt=Vt/Math.sqrt(at);R.skidInfo*=lt}}}if(this.sliding)for(var A=0;A<Y;A++){var R=Q[A];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var A=0;A<Y;A++){var R=Q[A],ct=new r;if(ct.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var pt=new r;J[A].scale(R.forwardImpulse,pt),B.applyImpulse(pt,ct)}if(R.sideImpulse!==0){var H=R.raycastResult.body,Rt=new r;Rt.copy(R.raycastResult.hitPointWorld);var St=new r;z[A].scale(R.sideImpulse,St),B.pointToLocalFrame(ct,ct),ct["xyz"[this.indexUpAxis]]*=R.rollInfluence,B.pointToWorldFrame(ct,ct),B.applyImpulse(St,ct),St.scale(-1,St),H.applyImpulse(St,Rt)}}};var y=new r,T=new r,b=new r;function I(G,L,Q,Y,B){var J=0,z=Q,A=y,R=T,H=b;G.getVelocityAtWorldPoint(z,A),L.getVelocityAtWorldPoint(z,R),A.vsub(R,H);var $=Y.dot(H),it=O(G,Q,Y),K=O(L,Q,Y),N=1,ut=N/(it+K);return J=-$*ut,B<J&&(J=B),J<-B&&(J=-B),J}var D=new r,E=new r,M=new r,C=new r;function O(G,L,Q){var Y=D,B=E,J=M,z=C;return L.vsub(G.position,Y),Y.cross(Q,B),G.invInertiaWorld.vmult(B,z),z.cross(Y,J),G.invMass+Q.dot(J)}var P=new r,k=new r,q=new r;function rt(G,L,Q,Y,B,N){var z=B.norm2();if(z>1.1)return 0;var A=P,R=k,H=q;G.getVelocityAtWorldPoint(L,A),Q.getVelocityAtWorldPoint(Y,R),A.vsub(R,H);var $=B.dot(H),it=.2,K=1/(G.invMass+Q.invMass),N=-it*$*K;return N}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,i){var r=e("./Body"),o=e("../shapes/Sphere"),a=e("../shapes/Box"),l=e("../math/Vec3"),h=e("../constraints/HingeConstraint");n.exports=u;function u(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new l(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new a(new l(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}u.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new o(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new l;var g=typeof f.position<"u"?f.position.clone():new l,m=new l;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new l(0,1,0);this.wheelAxes.push(p);var _=new h(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:l.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},u.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),_=g.x,x=g.y;this.constraints[v].axisA.set(m*_-p*x,p*_+m*x,0)},u.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},u.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var c=new l;u.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},u.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,c),m.vectorToWorldFrame(c,c),p.vadd(c,p)},u.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},u.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},u.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var d=new l;u.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,i){n.exports=o,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function o(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}o.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},o.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var a=new r;o.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,_=this.smoothingRadius*this.smoothingRadius,x=a,y=0;y!==m;y++){var T=this.particles[y];T.position.vsub(v.position,x),p!==T.id&&x.norm2()<_&&g.push(T)}};var l=new r,h=new r,u=new r,c=new r,d=new r,f=new r;o.prototype.update=function(){for(var v=this.particles.length,g=l,m=this.speedOfSound,p=this.eps,_=0;_!==v;_++){var x=this.particles[_],y=this.neighbors[_];y.length=0,this.getNeighbors(x,y),y.push(this.particles[_]);for(var T=y.length,b=0,I=0;I!==T;I++){x.position.vsub(y[I].position,g);var D=g.norm(),E=this.w(D);b+=y[I].mass*E}this.densities[_]=b,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var M=h,C=u,O=c,P=d,k=f,_=0;_!==v;_++){var q=this.particles[_];M.set(0,0,0),C.set(0,0,0);for(var rt,G,y=this.neighbors[_],T=y.length,I=0;I!==T;I++){var L=y[I];q.position.vsub(L.position,P);var Q=P.norm();rt=-L.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[I]/(this.densities[I]*this.densities[I]+p)),this.gradw(P,O),O.mult(rt,O),M.vadd(O,M),L.velocity.vsub(q.velocity,k),k.mult(1/(1e-4+this.densities[_]*this.densities[I])*this.viscosity*L.mass,k),G=this.nablaw(Q),k.mult(G,k),C.vadd(k,C)}C.mult(q.mass,C),M.mult(q.mass,M),q.force.vadd(C,q.force),q.force.vadd(M,q.force)}},o.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},o.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},o.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,i){var r=e("../math/Vec3");n.exports=o;function o(_,x,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=_,this.bodyB=x,this.localAnchorA=new r,this.localAnchorB=new r,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}o.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},o.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},o.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},o.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var a=new r,l=new r,h=new r,u=new r,c=new r,d=new r,f=new r,v=new r,g=new r,m=new r,p=new r;o.prototype.applyForce=function(){var _=this.stiffness,x=this.damping,y=this.restLength,T=this.bodyA,b=this.bodyB,I=a,D=l,E=h,M=u,C=p,O=c,P=d,k=f,q=v,rt=g,G=m;this.getWorldAnchorA(O),this.getWorldAnchorB(P),O.vsub(T.position,k),P.vsub(b.position,q),P.vsub(O,I);var L=I.norm();D.copy(I),D.normalize(),b.velocity.vsub(T.velocity,E),b.angularVelocity.cross(q,C),E.vadd(C,E),T.angularVelocity.cross(k,C),E.vsub(C,E),D.mult(-_*(L-y)-x*E.dot(D),M),T.force.vsub(M,T.force),b.force.vadd(M,b.force),k.cross(M,rt),q.cross(M,G),T.torque.vsub(rt,T.torque),b.torque.vadd(G,b.torque)}},{"../math/Vec3":30}],36:[function(e,n,i){var r=e("../math/Vec3"),o=e("../math/Transform"),a=e("../collision/RaycastResult"),l=e("../utils/Utils");n.exports=h;function h(d){d=l.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new a,this.worldTransform=new o,this.isInContact=!1}var c=new r,u=new r,c=new r;h.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,u),d.getVelocityAtWorldPoint(u,c);var g=f.hitNormalWorld.dot(c);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,i){n.exports=l;var r=e("./Shape"),o=e("../math/Vec3"),a=e("./ConvexPolyhedron");function l(c){r.call(this),this.type=r.types.BOX,this.halfExtents=c,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l,l.prototype.updateConvexPolyhedronRepresentation=function(){var c=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=o,g=[new v(-c,-d,-f),new v(c,-d,-f),new v(c,d,-f),new v(-c,d,-f),new v(-c,-d,f),new v(c,-d,f),new v(c,d,f),new v(-c,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new a(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},l.prototype.calculateLocalInertia=function(c,d){return d=d||new o,l.calculateInertia(this.halfExtents,c,d),d},l.calculateInertia=function(c,d,f){var v=c;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},l.prototype.getSideNormals=function(c,d){var f=c,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},l.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},l.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var h=new o;new o,l.prototype.forEachWorldCorner=function(c,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)h.set(g[m][0],g[m][1],g[m][2]),d.vmult(h,h),c.vadd(h,h),f(h.x,h.y,h.z)};var u=[new o,new o,new o,new o,new o,new o,new o,new o];l.prototype.calculateWorldAABB=function(c,d,f,v){var g=this.halfExtents;u[0].set(g.x,g.y,g.z),u[1].set(-g.x,g.y,g.z),u[2].set(-g.x,-g.y,g.z),u[3].set(-g.x,-g.y,-g.z),u[4].set(g.x,-g.y,-g.z),u[5].set(g.x,g.y,-g.z),u[6].set(-g.x,g.y,-g.z),u[7].set(g.x,-g.y,g.z);var m=u[0];d.vmult(m,m),c.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=u[p];d.vmult(m,m),c.vadd(m,m);var _=m.x,x=m.y,y=m.z;_>v.x&&(v.x=_),x>v.y&&(v.y=x),y>v.z&&(v.z=y),_<f.x&&(f.x=_),x<f.y&&(f.y=x),y<f.z&&(f.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,i){n.exports=l;var r=e("./Shape"),o=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform");function l(B,J,z){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=B||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=J||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=z?z.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}l.prototype=new r,l.prototype.constructor=l;var h=new o;l.prototype.computeEdges=function(){var B=this.faces,J=this.vertices;J.length;var z=this.uniqueEdges;z.length=0;for(var A=h,R=0;R!==B.length;R++)for(var H=B[R],$=H.length,it=0;it!==$;it++){var K=(it+1)%$;J[H[it]].vsub(J[H[K]],A),A.normalize();for(var N=!1,ut=0;ut!==z.length;ut++)if(z[ut].almostEquals(A)||z[ut].almostEquals(A)){N=!0;break}N||z.push(A.clone())}},l.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var B=0;B<this.faces.length;B++){for(var J=0;J<this.faces[B].length;J++)if(!this.vertices[this.faces[B][J]])throw new Error("Vertex "+this.faces[B][J]+" not found!");var z=this.faceNormals[B]||new o;this.getFaceNormal(B,z),z.negate(z),this.faceNormals[B]=z;var A=this.vertices[this.faces[B][0]];if(z.dot(A)<0){console.error(".faceNormals["+B+"] = Vec3("+z.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var J=0;J<this.faces[B].length;J++)console.warn(".vertices["+this.faces[B][J]+"] = Vec3("+this.vertices[this.faces[B][J]].toString()+")")}}};var u=new o,c=new o;l.computeNormal=function(B,J,z,A){J.vsub(B,c),z.vsub(J,u),u.cross(c,A),A.isZero()||A.normalize()},l.prototype.getFaceNormal=function(B,J){var z=this.faces[B],A=this.vertices[z[0]],R=this.vertices[z[1]],H=this.vertices[z[2]];return l.computeNormal(A,R,H,J)};var d=new o;l.prototype.clipAgainstHull=function(B,J,z,A,R,H,$,it,K){for(var N=d,ut=-1,vt=-Number.MAX_VALUE,Mt=0;Mt<z.faces.length;Mt++){N.copy(z.faceNormals[Mt]),R.vmult(N,N);var dt=N.dot(H);dt>vt&&(vt=dt,ut=Mt)}for(var st=[],lt=z.faces[ut],Vt=lt.length,Ot=0;Ot<Vt;Ot++){var U=z.vertices[lt[Ot]],S=new o;S.copy(U),R.vmult(S,S),A.vadd(S,S),st.push(S)}ut>=0&&this.clipFaceAgainstHull(H,B,J,st,$,it,K)};var f=new o,v=new o,g=new o,m=new o,p=new o,_=new o;l.prototype.findSeparatingAxis=function(B,J,z,A,R,H,$,it){var K=f,N=v,ut=g,vt=m,Mt=p,dt=_,st=Number.MAX_VALUE,lt=this;if(lt.uniqueAxes)for(var Ot=0;Ot!==lt.uniqueAxes.length;Ot++){z.vmult(lt.uniqueAxes[Ot],K);var S=lt.testSepAxis(K,B,J,z,A,R);if(S===!1)return!1;S<st&&(st=S,H.copy(K))}else for(var Vt=$?$.length:lt.faces.length,Ot=0;Ot<Vt;Ot++){var U=$?$[Ot]:Ot;K.copy(lt.faceNormals[U]),z.vmult(K,K);var S=lt.testSepAxis(K,B,J,z,A,R);if(S===!1)return!1;S<st&&(st=S,H.copy(K))}if(B.uniqueAxes)for(var Ot=0;Ot!==B.uniqueAxes.length;Ot++){R.vmult(B.uniqueAxes[Ot],N);var S=lt.testSepAxis(N,B,J,z,A,R);if(S===!1)return!1;S<st&&(st=S,H.copy(N))}else for(var et=it?it.length:B.faces.length,Ot=0;Ot<et;Ot++){var U=it?it[Ot]:Ot;N.copy(B.faceNormals[U]),R.vmult(N,N);var S=lt.testSepAxis(N,B,J,z,A,R);if(S===!1)return!1;S<st&&(st=S,H.copy(N))}for(var at=0;at!==lt.uniqueEdges.length;at++){z.vmult(lt.uniqueEdges[at],vt);for(var ct=0;ct!==B.uniqueEdges.length;ct++)if(R.vmult(B.uniqueEdges[ct],Mt),vt.cross(Mt,dt),!dt.almostZero()){dt.normalize();var pt=lt.testSepAxis(dt,B,J,z,A,R);if(pt===!1)return!1;pt<st&&(st=pt,H.copy(dt))}}return A.vsub(J,ut),ut.dot(H)>0&&H.negate(H),!0};var x=[],y=[];l.prototype.testSepAxis=function(B,J,z,A,R,H){var $=this;l.project($,B,z,A,x),l.project(J,B,R,H,y);var it=x[0],K=x[1],N=y[0],ut=y[1],vt=it-ut,Mt=N-K,dt=vt<Mt?vt:Mt;return dt};var T=new o,b=new o;l.prototype.calculateLocalInertia=function(B,J){this.computeLocalAABB(T,b);var z=b.x-T.x,A=b.y-T.y,R=b.z-T.z;J.x=1/12*B*(2*A*2*A+2*R*2*R),J.y=1/12*B*(2*z*2*z+2*R*2*R),J.z=1/12*B*(2*A*2*A+2*z*2*z)},l.prototype.getPlaneConstantOfFace=function(B){var J=this.faces[B],z=this.faceNormals[B],A=this.vertices[J[0]],R=-z.dot(A);return R};var I=new o,D=new o,E=new o,M=new o,C=new o,O=new o,P=new o,k=new o;l.prototype.clipFaceAgainstHull=function(B,J,z,A,R,H,$){for(var it=I,K=D,N=E,ut=M,vt=C,Mt=O,dt=P,st=k,lt=this,Vt=[],Ot=A,U=Vt,S=-1,et=Number.MAX_VALUE,at=0;at<lt.faces.length;at++){it.copy(lt.faceNormals[at]),z.vmult(it,it);var ct=it.dot(B);ct<et&&(et=ct,S=at)}if(!(S<0)){var pt=lt.faces[S];pt.connectedFaces=[];for(var Rt=0;Rt<lt.faces.length;Rt++)for(var St=0;St<lt.faces[Rt].length;St++)pt.indexOf(lt.faces[Rt][St])!==-1&&Rt!==S&&pt.connectedFaces.indexOf(Rt)===-1&&pt.connectedFaces.push(Rt);Ot.length;for(var gt=pt.length,Wt=0;Wt<gt;Wt++){var wt=lt.vertices[pt[Wt]],Gt=lt.vertices[pt[(Wt+1)%gt]];wt.vsub(Gt,K),N.copy(K),z.vmult(N,N),J.vadd(N,N),ut.copy(this.faceNormals[S]),z.vmult(ut,ut),J.vadd(ut,ut),N.cross(ut,vt),vt.negate(vt),Mt.copy(wt),z.vmult(Mt,Mt),J.vadd(Mt,Mt),-Mt.dot(vt);var Ut;{var ne=pt.connectedFaces[Wt];dt.copy(this.faceNormals[ne]);var qt=this.getPlaneConstantOfFace(ne);st.copy(dt),z.vmult(st,st);var Ut=qt-st.dot(J)}for(this.clipFaceAgainstPlane(Ot,U,st,Ut);Ot.length;)Ot.shift();for(;U.length;)Ot.push(U.shift())}dt.copy(this.faceNormals[S]);var qt=this.getPlaneConstantOfFace(S);st.copy(dt),z.vmult(st,st);for(var Ut=qt-st.dot(J),Rt=0;Rt<Ot.length;Rt++){var jt=st.dot(Ot[Rt])+Ut;if(jt<=R&&(console.log("clamped: depth="+jt+" to minDist="+(R+"")),jt=R),jt<=H){var ee=Ot[Rt];if(jt<=0){var ue={point:ee,normal:st,depth:jt};$.push(ue)}}}}},l.prototype.clipFaceAgainstPlane=function(B,J,z,A){var R,H,$=B.length;if($<2)return J;var it=B[B.length-1],K=B[0];R=z.dot(it)+A;for(var N=0;N<$;N++){if(K=B[N],H=z.dot(K)+A,R<0)if(H<0){var ut=new o;ut.copy(K),J.push(ut)}else{var ut=new o;it.lerp(K,R/(R-H),ut),J.push(ut)}else if(H<0){var ut=new o;it.lerp(K,R/(R-H),ut),J.push(ut),J.push(K)}it=K,R=H}return J},l.prototype.computeWorldVertices=function(B,J){for(var z=this.vertices.length;this.worldVertices.length<z;)this.worldVertices.push(new o);for(var A=this.vertices,R=this.worldVertices,H=0;H!==z;H++)J.vmult(A[H],R[H]),B.vadd(R[H],R[H]);this.worldVerticesNeedsUpdate=!1},new o,l.prototype.computeLocalAABB=function(B,J){var z=this.vertices.length,A=this.vertices;B.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),J.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<z;R++){var H=A[R];H.x<B.x?B.x=H.x:H.x>J.x&&(J.x=H.x),H.y<B.y?B.y=H.y:H.y>J.y&&(J.y=H.y),H.z<B.z?B.z=H.z:H.z>J.z&&(J.z=H.z)}},l.prototype.computeWorldFaceNormals=function(B){for(var J=this.faceNormals.length;this.worldFaceNormals.length<J;)this.worldFaceNormals.push(new o);for(var z=this.faceNormals,A=this.worldFaceNormals,R=0;R!==J;R++)B.vmult(z[R],A[R]);this.worldFaceNormalsNeedsUpdate=!1},l.prototype.updateBoundingSphereRadius=function(){for(var B=0,J=this.vertices,z=0,A=J.length;z!==A;z++){var R=J[z].norm2();R>B&&(B=R)}this.boundingSphereRadius=Math.sqrt(B)};var q=new o;l.prototype.calculateWorldAABB=function(B,J,z,A){for(var R=this.vertices.length,H=this.vertices,$,it,K,N,ut,vt,Mt=0;Mt<R;Mt++){q.copy(H[Mt]),J.vmult(q,q),B.vadd(q,q);var dt=q;dt.x<$||$===void 0?$=dt.x:(dt.x>N||N===void 0)&&(N=dt.x),dt.y<it||it===void 0?it=dt.y:(dt.y>ut||ut===void 0)&&(ut=dt.y),dt.z<K||K===void 0?K=dt.z:(dt.z>vt||vt===void 0)&&(vt=dt.z)}z.set($,it,K),A.set(N,ut,vt)},l.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},l.prototype.getAveragePointLocal=function(B){B=B||new o;for(var J=this.vertices.length,z=this.vertices,A=0;A<J;A++)B.vadd(z[A],B);return B.mult(1/J,B),B},l.prototype.transformAllPoints=function(B,J){var z=this.vertices.length,A=this.vertices;if(J){for(var R=0;R<z;R++){var H=A[R];J.vmult(H,H)}for(var R=0;R<this.faceNormals.length;R++){var H=this.faceNormals[R];J.vmult(H,H)}}if(B)for(var R=0;R<z;R++){var H=A[R];H.vadd(B,H)}};var rt=new o,G=new o,L=new o;l.prototype.pointIsInside=function(B){var J=this.vertices.length,z=this.vertices,A=this.faces,R=this.faceNormals,H=null,$=this.faces.length,it=rt;this.getAveragePointLocal(it);for(var K=0;K<$;K++){this.faces[K].length;var J=R[K],N=z[A[K][0]],ut=G;B.vsub(N,ut);var vt=J.dot(ut),Mt=L;it.vsub(N,Mt);var dt=J.dot(Mt);if(vt<0&&dt>0||vt>0&&dt<0)return!1}return H?1:-1},new o;var Q=new o,Y=new o;l.project=function(B,J,z,A,R){var H=B.vertices.length,$=Q,it=0,K=0,N=Y,ut=B.vertices;N.setZero(),a.vectorToLocalFrame(z,A,J,$),a.pointToLocalFrame(z,A,N,N);var vt=N.dot($);K=it=ut[0].dot($);for(var Mt=1;Mt<H;Mt++){var dt=ut[Mt].dot($);dt>it&&(it=dt),dt<K&&(K=dt)}if(K-=vt,it-=vt,K>it){var st=K;K=it,it=st}R[0]=it,R[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,i){n.exports=l;var r=e("./Shape"),o=e("../math/Vec3");e("../math/Quaternion");var a=e("./ConvexPolyhedron");function l(h,u,c,d){var f=d,v=[],g=[],m=[],p=[],_=[],x=Math.cos,y=Math.sin;v.push(new o(u*x(0),u*y(0),-c*.5)),p.push(0),v.push(new o(h*x(0),h*y(0),c*.5)),_.push(1);for(var T=0;T<f;T++){var b=2*Math.PI/f*(T+1),I=2*Math.PI/f*(T+.5);T<f-1?(v.push(new o(u*x(b),u*y(b),-c*.5)),p.push(2*T+2),v.push(new o(h*x(b),h*y(b),c*.5)),_.push(2*T+3),m.push([2*T+2,2*T+3,2*T+1,2*T])):m.push([0,1,2*T+1,2*T]),(f%2===1||T<f/2)&&g.push(new o(x(I),y(I),0))}m.push(_),g.push(new o(0,0,1));for(var D=[],T=0;T<p.length;T++)D.push(p[p.length-T-1]);m.push(D),this.type=r.types.CONVEXPOLYHEDRON,a.call(this,v,m,g)}l.prototype=new a},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,i){var r=e("./Shape"),o=e("./ConvexPolyhedron"),a=e("../math/Vec3"),l=e("../utils/Utils");n.exports=h;function h(u,c){c=l.defaults(c,{maxValue:null,minValue:null,elementSize:1}),this.data=u,this.maxValue=c.maxValue,this.minValue=c.minValue,this.elementSize=c.elementSize,c.minValue===null&&this.updateMinValue(),c.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new o,this.pillarOffset=new a,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}h.prototype=new r,h.prototype.update=function(){this._cachedPillars={}},h.prototype.updateMinValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v<c&&(c=v)}this.minValue=c},h.prototype.updateMaxValue=function(){for(var u=this.data,c=u[0][0],d=0;d!==u.length;d++)for(var f=0;f!==u[d].length;f++){var v=u[d][f];v>c&&(c=v)}this.maxValue=c},h.prototype.setHeightValueAtIndex=function(u,c,d){var f=this.data;f[u][c]=d,this.clearCachedConvexTrianglePillar(u,c,!1),u>0&&(this.clearCachedConvexTrianglePillar(u-1,c,!0),this.clearCachedConvexTrianglePillar(u-1,c,!1)),c>0&&(this.clearCachedConvexTrianglePillar(u,c-1,!0),this.clearCachedConvexTrianglePillar(u,c-1,!1)),c>0&&u>0&&this.clearCachedConvexTrianglePillar(u-1,c-1,!0)},h.prototype.getRectMinMax=function(u,c,d,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=u;p<=d;p++)for(var _=c;_<=f;_++){var x=g[p][_];x>m&&(m=x)}v[0]=this.minValue,v[1]=m},h.prototype.getIndexOfPosition=function(u,c,d,f){var v=this.elementSize,g=this.data,m=Math.floor(u/v),p=Math.floor(c/v);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},h.prototype.getHeightAt=function(u,c,d){var f=[];this.getIndexOfPosition(u,c,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},h.prototype.getCacheConvexTrianglePillarKey=function(u,c,d){return u+"_"+c+"_"+(d?1:0)},h.prototype.getCachedConvexTrianglePillar=function(u,c,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.setCachedConvexTrianglePillar=function(u,c,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]={convex:f,offset:v}},h.prototype.clearCachedConvexTrianglePillar=function(u,c,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(u,c,d)]},h.prototype.getConvexTrianglePillar=function(u,c,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(u,c,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new o,v=new a,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new a);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var x=f.vertices,y=(Math.min(g[u][c],g[u+1][c],g[u][c+1],g[u+1][c+1])-this.minValue)/2+this.minValue;d?(v.set((u+.75)*m,(c+.75)*m,y),x[0].set(.25*m,.25*m,g[u+1][c+1]-y),x[1].set(-.75*m,.25*m,g[u][c+1]-y),x[2].set(.25*m,-.75*m,g[u+1][c]-y),x[3].set(.25*m,.25*m,-y-1),x[4].set(-.75*m,.25*m,-y-1),x[5].set(.25*m,-.75*m,-y-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((u+.25)*m,(c+.25)*m,y),x[0].set(-.25*m,-.25*m,g[u][c]-y),x[1].set(.75*m,-.25*m,g[u+1][c]-y),x[2].set(-.25*m,.75*m,g[u][c+1]-y),x[3].set(-.25*m,-.25*m,-y-1),x[4].set(.75*m,-.25*m,-y-1),x[5].set(-.25*m,.75*m,-y-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(u,c,d,f,v)},h.prototype.calculateLocalInertia=function(u,c){return c=c||new a,c.set(0,0,0),c},h.prototype.volume=function(){return Number.MAX_VALUE},h.prototype.calculateWorldAABB=function(u,c,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},h.prototype.updateBoundingSphereRadius=function(){var u=this.data,c=this.elementSize;this.boundingSphereRadius=new a(u.length*c,u[0].length*c,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,i){n.exports=a;var r=e("./Shape"),o=e("../math/Vec3");function a(){r.call(this),this.type=r.types.PARTICLE}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,h){return h=h||new o,h.set(0,0,0),h},a.prototype.volume=function(){return 0},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},a.prototype.calculateWorldAABB=function(l,h,u,c){u.copy(l),c.copy(l)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,i){n.exports=a;var r=e("./Shape"),o=e("../math/Vec3");function a(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new o,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}a.prototype=new r,a.prototype.constructor=a,a.prototype.computeWorldNormal=function(h){var u=this.worldNormal;u.set(0,0,1),h.vmult(u,u),this.worldNormalNeedsUpdate=!1},a.prototype.calculateLocalInertia=function(h,u){return u=u||new o,u},a.prototype.volume=function(){return Number.MAX_VALUE};var l=new o;a.prototype.calculateWorldAABB=function(h,u,c,d){l.set(0,0,1),u.vmult(l,l);var f=Number.MAX_VALUE;c.set(-f,-f,-f),d.set(f,f,f),l.x===1&&(d.x=h.x),l.y===1&&(d.y=h.y),l.z===1&&(d.z=h.z),l.x===-1&&(c.x=h.x),l.y===-1&&(c.y=h.y),l.z===-1&&(c.z=h.z)},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,i){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(o,a){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,i){n.exports=a;var r=e("./Shape"),o=e("../math/Vec3");function a(l){if(r.call(this),this.radius=l!==void 0?Number(l):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}a.prototype=new r,a.prototype.constructor=a,a.prototype.calculateLocalInertia=function(l,h){h=h||new o;var u=2*l*this.radius*this.radius/5;return h.x=u,h.y=u,h.z=u,h},a.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},a.prototype.calculateWorldAABB=function(l,h,u,c){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];u[g]=l[g]-d,c[g]=l[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,i){n.exports=u;var r=e("./Shape"),o=e("../math/Vec3");e("../math/Quaternion");var a=e("../math/Transform"),l=e("../collision/AABB"),h=e("../utils/Octree");function u(D,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(D),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new l,this.edges=null,this.scale=new o(1,1,1),this.tree=new h,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}u.prototype=new r,u.prototype.constructor=u;var c=new o;u.prototype.updateTree=function(){var D=this.tree;D.reset(),D.aabb.copy(this.aabb);var E=this.scale;D.aabb.lowerBound.x*=1/E.x,D.aabb.lowerBound.y*=1/E.y,D.aabb.lowerBound.z*=1/E.z,D.aabb.upperBound.x*=1/E.x,D.aabb.upperBound.y*=1/E.y,D.aabb.upperBound.z*=1/E.z;for(var M=new l,C=new o,O=new o,P=new o,k=[C,O,P],q=0;q<this.indices.length/3;q++){var rt=q*3;this._getUnscaledVertex(this.indices[rt],C),this._getUnscaledVertex(this.indices[rt+1],O),this._getUnscaledVertex(this.indices[rt+2],P),M.setFromPoints(k),D.insert(M,q)}D.removeEmptyNodes()};var d=new l;u.prototype.getTrianglesInAABB=function(D,E){d.copy(D);var M=this.scale,C=M.x,O=M.y,P=M.z,k=d.lowerBound,q=d.upperBound;return k.x/=C,k.y/=O,k.z/=P,q.x/=C,q.y/=O,q.z/=P,this.tree.aabbQuery(d,E)},u.prototype.setScale=function(D){var E=this.scale.x===this.scale.y===this.scale.z,M=D.x===D.y===D.z;E&&M||this.updateNormals(),this.scale.copy(D),this.updateAABB(),this.updateBoundingSphereRadius()},u.prototype.updateNormals=function(){for(var D=c,E=this.normals,M=0;M<this.indices.length/3;M++){var C=M*3,O=this.indices[C],P=this.indices[C+1],k=this.indices[C+2];this.getVertex(O,p),this.getVertex(P,_),this.getVertex(k,x),u.computeNormal(_,p,x,D),E[C]=D.x,E[C+1]=D.y,E[C+2]=D.z}},u.prototype.updateEdges=function(){for(var D={},E=function(rt,G){var L=O<P?O+"_"+P:P+"_"+O;D[L]=!0},M=0;M<this.indices.length/3;M++){var C=M*3,O=this.indices[C],P=this.indices[C+1];this.indices[C+2],E(),E(),E()}var k=Object.keys(D);this.edges=new Int16Array(k.length*2);for(var M=0;M<k.length;M++){var q=k[M].split("_");this.edges[2*M]=parseInt(q[0],10),this.edges[2*M+1]=parseInt(q[1],10)}},u.prototype.getEdgeVertex=function(D,E,M){var C=this.edges[D*2+(E?1:0)];this.getVertex(C,M)};var f=new o,v=new o;u.prototype.getEdgeVector=function(D,E){var M=f,C=v;this.getEdgeVertex(D,0,M),this.getEdgeVertex(D,1,C),C.vsub(M,E)};var g=new o,m=new o;u.computeNormal=function(D,E,M,C){E.vsub(D,m),M.vsub(E,g),g.cross(m,C),C.isZero()||C.normalize()};var p=new o,_=new o,x=new o;u.prototype.getVertex=function(D,E){var M=this.scale;return this._getUnscaledVertex(D,E),E.x*=M.x,E.y*=M.y,E.z*=M.z,E},u.prototype._getUnscaledVertex=function(D,E){var M=D*3,C=this.vertices;return E.set(C[M],C[M+1],C[M+2])},u.prototype.getWorldVertex=function(D,E,M,C){return this.getVertex(D,C),a.pointToWorldFrame(E,M,C,C),C},u.prototype.getTriangleVertices=function(D,E,M,C){var O=D*3;this.getVertex(this.indices[O],E),this.getVertex(this.indices[O+1],M),this.getVertex(this.indices[O+2],C)},u.prototype.getNormal=function(D,E){var M=D*3;return E.set(this.normals[M],this.normals[M+1],this.normals[M+2])};var y=new l;u.prototype.calculateLocalInertia=function(D,E){this.computeLocalAABB(y);var M=y.upperBound.x-y.lowerBound.x,C=y.upperBound.y-y.lowerBound.y,O=y.upperBound.z-y.lowerBound.z;return E.set(1/12*D*(2*C*2*C+2*O*2*O),1/12*D*(2*M*2*M+2*O*2*O),1/12*D*(2*C*2*C+2*M*2*M))};var T=new o;u.prototype.computeLocalAABB=function(D){var E=D.lowerBound,M=D.upperBound,C=this.vertices.length;this.vertices;var O=T;this.getVertex(0,O),E.copy(O),M.copy(O);for(var P=0;P!==C;P++)this.getVertex(P,O),O.x<E.x?E.x=O.x:O.x>M.x&&(M.x=O.x),O.y<E.y?E.y=O.y:O.y>M.y&&(M.y=O.y),O.z<E.z?E.z=O.z:O.z>M.z&&(M.z=O.z)},u.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},u.prototype.updateBoundingSphereRadius=function(){for(var D=0,E=this.vertices,M=new o,C=0,O=E.length/3;C!==O;C++){this.getVertex(C,M);var P=M.norm2();P>D&&(D=P)}this.boundingSphereRadius=Math.sqrt(D)},new o;var b=new a,I=new l;u.prototype.calculateWorldAABB=function(D,E,M,C){var O=b,P=I;O.position=D,O.quaternion=E,this.aabb.toWorldFrame(O,P),M.copy(P.lowerBound),C.copy(P.upperBound)},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.createTorus=function(D,E,M,C,O){D=D||1,E=E||.5,M=M||8,C=C||6,O=O||Math.PI*2;for(var P=[],k=[],q=0;q<=M;q++)for(var rt=0;rt<=C;rt++){var G=rt/C*O,L=q/M*Math.PI*2,Q=(D+E*Math.cos(L))*Math.cos(G),Y=(D+E*Math.cos(L))*Math.sin(G),B=E*Math.sin(L);P.push(Q,Y,B)}for(var q=1;q<=M;q++)for(var rt=1;rt<=C;rt++){var J=(C+1)*q+rt-1,z=(C+1)*(q-1)+rt-1,A=(C+1)*(q-1)+rt,R=(C+1)*q+rt;k.push(J,z,R),k.push(z,A,R)}return new u(P,k)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,i){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function o(){r.call(this),this.iterations=10,this.tolerance=1e-7}o.prototype=new r;var a=[],l=[],h=[];o.prototype.solve=function(u,c){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=c.bodies,_=p.length,x=u,y,T,b,I,D,E;if(m!==0)for(var M=0;M!==_;M++)p[M].updateSolveMassProperties();var C=l,O=h,P=a;C.length=m,O.length=m,P.length=m;for(var M=0;M!==m;M++){var k=g[M];P[M]=0,O[M]=k.computeB(x),C[M]=1/k.computeC()}if(m!==0){for(var M=0;M!==_;M++){var q=p[M],rt=q.vlambda,G=q.wlambda;rt.set(0,0,0),G&&G.set(0,0,0)}for(d=0;d!==f;d++){I=0;for(var L=0;L!==m;L++){var k=g[L];y=O[L],T=C[L],E=P[L],D=k.computeGWlambda(),b=T*(y-D-k.eps*E),E+b<k.minForce?b=k.minForce-E:E+b>k.maxForce&&(b=k.maxForce-E),P[L]+=b,I+=b>0?b:-b,k.addToWlambda(b)}if(I*I<v)break}for(var M=0;M!==_;M++){var q=p[M],Q=q.velocity,Y=q.angularVelocity;Q.vadd(q.vlambda,Q),Y&&Y.vadd(q.wlambda,Y)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,i){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(o,a){return 0},r.prototype.addEquation=function(o){o.enabled&&this.equations.push(o)},r.prototype.removeEquation=function(o){var a=this.equations,l=a.indexOf(o);l!==-1&&a.splice(l,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,i){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),o=e("../objects/Body");function a(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}a.prototype=new r;var l=[],h=[],u={bodies:[]},c=o.STATIC;function d(p){for(var _=p.length,x=0;x!==_;x++){var y=p[x];if(!y.visited&&!(y.body.type&c))return y}return!1}var f=[];function v(p,_,x,y){for(f.push(p),p.visited=!0,_(p,x,y);f.length;)for(var T=f.pop(),b;b=d(T.children);)b.visited=!0,_(b,x,y),f.push(b)}function g(p,_,x){_.push(p.body);for(var y=p.eqs.length,T=0;T!==y;T++){var b=p.eqs[T];x.indexOf(b)===-1&&x.push(b)}}a.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},a.prototype.solve=function(p,_){for(var x=l,y=this.nodePool,T=_.bodies,b=this.equations,I=b.length,D=T.length,E=this.subsolver;y.length<D;)y.push(this.createNode());x.length=D;for(var M=0;M<D;M++)x[M]=y[M];for(var M=0;M!==D;M++){var C=x[M];C.body=T[M],C.children.length=0,C.eqs.length=0,C.visited=!1}for(var O=0;O!==I;O++){var P=b[O],M=T.indexOf(P.bi),k=T.indexOf(P.bj),q=x[M],rt=x[k];q.children.push(rt),q.eqs.push(P),rt.children.push(q),rt.eqs.push(P)}var G,L=0,Q=h;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var Y=u;G=d(x);){Q.length=0,Y.bodies.length=0,v(G,g,Y.bodies,Q);var B=Q.length;Q=Q.sort(m);for(var M=0;M!==B;M++)E.addEquation(Q[M]);E.solve(p,Y),E.removeAllEquations(),L++}return L};function m(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,i){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(o,a){this._listeners===void 0&&(this._listeners={});var l=this._listeners;return l[o]===void 0&&(l[o]=[]),l[o].indexOf(a)===-1&&l[o].push(a),this},hasEventListener:function(o,a){if(this._listeners===void 0)return!1;var l=this._listeners;return l[o]!==void 0&&l[o].indexOf(a)!==-1},removeEventListener:function(o,a){if(this._listeners===void 0)return this;var l=this._listeners;if(l[o]===void 0)return this;var h=l[o].indexOf(a);return h!==-1&&l[o].splice(h,1),this},dispatchEvent:function(o){if(this._listeners===void 0)return this;var a=this._listeners,l=a[o.type];if(l!==void 0){o.target=this;for(var h=0,u=l.length;h<u;h++)l[h].call(this,o)}return this}}},{}],50:[function(e,n,i){var r=e("../collision/AABB"),o=e("../math/Vec3");n.exports=l;function a(c){c=c||{},this.root=c.root||null,this.aabb=c.aabb?c.aabb.clone():new r,this.data=[],this.children=[]}function l(c,d){d=d||{},d.root=null,d.aabb=c,a.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}l.prototype=new a,a.prototype.reset=function(c,d){this.children.length=this.data.length=0},a.prototype.insert=function(c,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(c))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(c,d,f+1))return!0;m&&(g.length=0)}return v.push(d),!0};var h=new o;a.prototype.subdivide=function(){var c=this.aabb,d=c.lowerBound,f=c.upperBound,v=this.children;v.push(new a({aabb:new r({lowerBound:new o(0,0,0)})}),new a({aabb:new r({lowerBound:new o(1,0,0)})}),new a({aabb:new r({lowerBound:new o(1,1,0)})}),new a({aabb:new r({lowerBound:new o(1,1,1)})}),new a({aabb:new r({lowerBound:new o(0,1,1)})}),new a({aabb:new r({lowerBound:new o(0,0,1)})}),new a({aabb:new r({lowerBound:new o(1,0,1)})}),new a({aabb:new r({lowerBound:new o(0,1,0)})})),f.vsub(d,h),h.scale(.5,h);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var _=p.aabb.lowerBound;_.x*=h.x,_.y*=h.y,_.z*=h.z,_.vadd(d,_),_.vadd(h,p.aabb.upperBound)}},a.prototype.aabbQuery=function(c,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(c)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var u=new r;a.prototype.rayQuery=function(c,d,f){return c.getAABB(u),u.toLocalFrame(d,u),this.aabbQuery(u,f),f},a.prototype.removeEmptyNodes=function(){for(var c=[this];c.length;){for(var d=c.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(c,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,i){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var o=arguments.length,a=0;a!==o;a++)this.objects.push(arguments[a])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,i){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(o,a){if(o>a){var l=a;a=o,o=l}return this.data[o+"-"+a]},r.prototype.set=function(o,a,l){if(o>a){var h=a;a=o,o=h}var u=o+"-"+a;this.get(o,a)||this.data.keys.push(u),this.data[u]=l},r.prototype.reset=function(){for(var o=this.data,a=o.keys;a.length>0;){var l=a.pop();delete o[l]}}},{}],53:[function(e,n,i){function r(){}n.exports=r,r.defaults=function(o,a){o=o||{};for(var l in a)l in o||(o[l]=a[l]);return o}},{}],54:[function(e,n,i){n.exports=a;var r=e("../math/Vec3"),o=e("./Pool");function a(){o.call(this),this.type=r}a.prototype=new o,a.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,i){n.exports=v;var r=e("../collision/AABB"),o=e("../shapes/Shape"),a=e("../collision/Ray"),l=e("../math/Vec3"),h=e("../math/Transform");e("../shapes/ConvexPolyhedron");var u=e("../math/Quaternion");e("../solver/Solver");var c=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(ot){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new c,this.world=ot,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(ot,ft,_t,yt,Yt,Dt){var Tt;this.contactPointPool.length?(Tt=this.contactPointPool.pop(),Tt.bi=ot,Tt.bj=ft):Tt=new d(ot,ft),Tt.enabled=ot.collisionResponse&&ft.collisionResponse&&_t.collisionResponse&&yt.collisionResponse;var It=this.currentContactMaterial;Tt.restitution=It.restitution,Tt.setSpookParams(It.contactEquationStiffness,It.contactEquationRelaxation,this.world.dt);var nt=_t.material||ot.material,bt=yt.material||ft.material;return nt&&bt&&nt.restitution>=0&&bt.restitution>=0&&(Tt.restitution=nt.restitution*bt.restitution),Tt.si=Yt||_t,Tt.sj=Dt||yt,Tt},v.prototype.createFrictionEquationsFromContact=function(ot,ft){var _t=ot.bi,yt=ot.bj,Yt=ot.si,Dt=ot.sj,Tt=this.world,It=this.currentContactMaterial,nt=It.friction,bt=Yt.material||_t.material,Nt=Dt.material||yt.material;if(bt&&Nt&&bt.friction>=0&&Nt.friction>=0&&(nt=bt.friction*Nt.friction),nt>0){var kt=nt*Tt.gravity.length(),w=_t.invMass+yt.invMass;w>0&&(w=1/w);var F=this.frictionEquationPool,V=F.length?F.pop():new f(_t,yt,kt*w),X=F.length?F.pop():new f(_t,yt,kt*w);return V.bi=X.bi=_t,V.bj=X.bj=yt,V.minForce=X.minForce=-kt*w,V.maxForce=X.maxForce=kt*w,V.ri.copy(ot.ri),V.rj.copy(ot.rj),X.ri.copy(ot.ri),X.rj.copy(ot.rj),ot.ni.tangents(V.t,X.t),V.setSpookParams(It.frictionEquationStiffness,It.frictionEquationRelaxation,Tt.dt),X.setSpookParams(It.frictionEquationStiffness,It.frictionEquationRelaxation,Tt.dt),V.enabled=X.enabled=ot.enabled,ft.push(V,X),!0}return!1};var g=new l,m=new l,p=new l;v.prototype.createFrictionFromAverage=function(ot){var ft=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ft,this.frictionResult)||ot===1)){var _t=this.frictionResult[this.frictionResult.length-2],yt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var Yt=ft.bi;ft.bj;for(var Dt=0;Dt!==ot;Dt++)ft=this.result[this.result.length-1-Dt],ft.bodyA!==Yt?(g.vadd(ft.ni,g),m.vadd(ft.ri,m),p.vadd(ft.rj,p)):(g.vsub(ft.ni,g),m.vadd(ft.rj,m),p.vadd(ft.ri,p));var Tt=1/ot;m.scale(Tt,_t.ri),p.scale(Tt,_t.rj),yt.ri.copy(_t.ri),yt.rj.copy(_t.rj),g.normalize(),g.tangents(_t.t,yt.t)}};var _=new l,x=new l,y=new u,T=new u;v.prototype.getContacts=function(ot,ft,_t,yt,Yt,Dt,Tt){this.contactPointPool=Yt,this.frictionEquationPool=Tt,this.result=yt,this.frictionResult=Dt;for(var It=y,nt=T,bt=_,Nt=x,kt=0,w=ot.length;kt!==w;kt++){var F=ot[kt],V=ft[kt],X=null;F.material&&V.material&&(X=_t.getContactMaterial(F.material,V.material)||null);for(var j=0;j<F.shapes.length;j++){F.quaternion.mult(F.shapeOrientations[j],It),F.quaternion.vmult(F.shapeOffsets[j],bt),bt.vadd(F.position,bt);for(var tt=F.shapes[j],xt=0;xt<V.shapes.length;xt++){V.quaternion.mult(V.shapeOrientations[xt],nt),V.quaternion.vmult(V.shapeOffsets[xt],Nt),Nt.vadd(V.position,Nt);var Et=V.shapes[xt];if(!(bt.distanceTo(Nt)>tt.boundingSphereRadius+Et.boundingSphereRadius)){var zt=null;tt.material&&Et.material&&(zt=_t.getContactMaterial(tt.material,Et.material)||null),this.currentContactMaterial=zt||X||_t.defaultContactMaterial;var Lt=this[tt.type|Et.type];Lt&&(tt.type<Et.type?Lt.call(this,tt,Et,bt,Nt,It,nt,F,V,tt,Et):Lt.call(this,Et,tt,Nt,bt,nt,It,V,F,tt,Et))}}}}},v.prototype[o.types.BOX|o.types.BOX]=v.prototype.boxBox=function(ot,ft,_t,yt,Yt,Dt,Tt,It){ot.convexPolyhedronRepresentation.material=ot.material,ft.convexPolyhedronRepresentation.material=ft.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.convexConvex(ot.convexPolyhedronRepresentation,ft.convexPolyhedronRepresentation,_t,yt,Yt,Dt,Tt,It,ot,ft)},v.prototype[o.types.BOX|o.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(ot,ft,_t,yt,Yt,Dt,Tt,It){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexConvex(ot.convexPolyhedronRepresentation,ft,_t,yt,Yt,Dt,Tt,It,ot,ft)},v.prototype[o.types.BOX|o.types.PARTICLE]=v.prototype.boxParticle=function(ot,ft,_t,yt,Yt,Dt,Tt,It){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexParticle(ot.convexPolyhedronRepresentation,ft,_t,yt,Yt,Dt,Tt,It,ot,ft)},v.prototype[o.types.SPHERE]=v.prototype.sphereSphere=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=this.createContactEquation(Tt,It,ot,ft);yt.vsub(_t,nt.ni),nt.ni.normalize(),nt.ri.copy(nt.ni),nt.rj.copy(nt.ni),nt.ri.mult(ot.radius,nt.ri),nt.rj.mult(-ft.radius,nt.rj),nt.ri.vadd(_t,nt.ri),nt.ri.vsub(Tt.position,nt.ri),nt.rj.vadd(yt,nt.rj),nt.rj.vsub(It.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)};var b=new l,I=new l,D=new l;v.prototype[o.types.PLANE|o.types.TRIMESH]=v.prototype.planeTrimesh=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=new l,bt=b;bt.set(0,0,1),Yt.vmult(bt,bt);for(var Nt=0;Nt<ft.vertices.length/3;Nt++){ft.getVertex(Nt,nt);var kt=new l;kt.copy(nt),h.pointToWorldFrame(yt,Dt,kt,nt);var w=I;nt.vsub(_t,w);var F=bt.dot(w);if(F<=0){var V=this.createContactEquation(Tt,It,ot,ft);V.ni.copy(bt);var X=D;bt.scale(w.dot(bt),X),nt.vsub(X,X),V.ri.copy(X),V.ri.vsub(Tt.position,V.ri),V.rj.copy(nt),V.rj.vsub(It.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}};var E=new l,M=new l;new l;var C=new l,O=new l,P=new l,k=new l,q=new l,rt=new l,G=new l,L=new l,Q=new l,Y=new l,B=new l,J=new r,z=[];v.prototype[o.types.SPHERE|o.types.TRIMESH]=v.prototype.sphereTrimesh=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=P,bt=k,Nt=q,kt=rt,w=G,F=L,V=J,X=O,j=M,tt=z;h.pointToLocalFrame(yt,Dt,_t,w);var xt=ot.radius;V.lowerBound.set(w.x-xt,w.y-xt,w.z-xt),V.upperBound.set(w.x+xt,w.y+xt,w.z+xt),ft.getTrianglesInAABB(V,tt);for(var Et=C,zt=ot.radius*ot.radius,Lt=0;Lt<tt.length;Lt++)for(var Ft=0;Ft<3;Ft++)if(ft.getVertex(ft.indices[tt[Lt]*3+Ft],Et),Et.vsub(w,j),j.norm2()<=zt){X.copy(Et),h.pointToWorldFrame(yt,Dt,X,Et),Et.vsub(_t,j);var At=this.createContactEquation(Tt,It,ot,ft);At.ni.copy(j),At.ni.normalize(),At.ri.copy(At.ni),At.ri.scale(ot.radius,At.ri),At.ri.vadd(_t,At.ri),At.ri.vsub(Tt.position,At.ri),At.rj.copy(Et),At.rj.vsub(It.position,At.rj),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}for(var Lt=0;Lt<tt.length;Lt++)for(var Ft=0;Ft<3;Ft++){ft.getVertex(ft.indices[tt[Lt]*3+Ft],nt),ft.getVertex(ft.indices[tt[Lt]*3+(Ft+1)%3],bt),bt.vsub(nt,Nt),w.vsub(bt,F);var he=F.dot(Nt);w.vsub(nt,F);var me=F.dot(Nt);if(me>0&&he<0){w.vsub(nt,F),kt.copy(Nt),kt.normalize(),me=F.dot(kt),kt.scale(me,F),F.vadd(nt,F);var ye=F.distanceTo(w);if(ye<ot.radius){var At=this.createContactEquation(Tt,It,ot,ft);F.vsub(w,At.ni),At.ni.normalize(),At.ni.scale(ot.radius,At.ri),h.pointToWorldFrame(yt,Dt,F,F),F.vsub(It.position,At.rj),h.vectorToWorldFrame(Dt,At.ni,At.ni),h.vectorToWorldFrame(Dt,At.ri,At.ri),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}}}for(var Le=Q,Jt=Y,Ht=B,Ke=E,Lt=0,$t=tt.length;Lt!==$t;Lt++){ft.getTriangleVertices(tt[Lt],Le,Jt,Ht),ft.getNormal(tt[Lt],Ke),w.vsub(Le,F);var ye=F.dot(Ke);if(Ke.scale(ye,F),w.vsub(F,F),ye=F.distanceTo(w),a.pointInTriangle(F,Le,Jt,Ht)&&ye<ot.radius){var At=this.createContactEquation(Tt,It,ot,ft);F.vsub(w,At.ni),At.ni.normalize(),At.ni.scale(ot.radius,At.ri),h.pointToWorldFrame(yt,Dt,F,F),F.vsub(It.position,At.rj),h.vectorToWorldFrame(Dt,At.ni,At.ni),h.vectorToWorldFrame(Dt,At.ri,At.ri),this.result.push(At),this.createFrictionEquationsFromContact(At,this.frictionResult)}}tt.length=0};var A=new l,R=new l;v.prototype[o.types.SPHERE|o.types.PLANE]=v.prototype.spherePlane=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=this.createContactEquation(Tt,It,ot,ft);if(nt.ni.set(0,0,1),Dt.vmult(nt.ni,nt.ni),nt.ni.negate(nt.ni),nt.ni.normalize(),nt.ni.mult(ot.radius,nt.ri),_t.vsub(yt,A),nt.ni.mult(nt.ni.dot(A),R),A.vsub(R,nt.rj),-A.dot(nt.ni)<=ot.radius){var bt=nt.ri,Nt=nt.rj;bt.vadd(_t,bt),bt.vsub(Tt.position,bt),Nt.vadd(yt,Nt),Nt.vsub(It.position,Nt),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}};var H=new l,$=new l,it=new l;function K(ot,ft,_t){for(var yt=null,Yt=ot.length,Dt=0;Dt!==Yt;Dt++){var Tt=ot[Dt],It=H;ot[(Dt+1)%Yt].vsub(Tt,It);var nt=$;It.cross(ft,nt);var bt=it;_t.vsub(Tt,bt);var Nt=nt.dot(bt);if(yt===null||Nt>0&&yt===!0||Nt<=0&&yt===!1){yt===null&&(yt=Nt>0);continue}else return!1}return!0}var N=new l,ut=new l,vt=new l,Mt=new l,dt=[new l,new l,new l,new l,new l,new l],st=new l,lt=new l,Vt=new l,Ot=new l;v.prototype[o.types.SPHERE|o.types.BOX]=v.prototype.sphereBox=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=this.v3pool,bt=dt;_t.vsub(yt,N),ft.getSideNormals(bt,Dt);for(var Nt=ot.radius,kt=!1,w=lt,F=Vt,V=Ot,X=null,j=0,tt=0,xt=0,Et=null,zt=0,Lt=bt.length;zt!==Lt&&kt===!1;zt++){var Ft=ut;Ft.copy(bt[zt]);var At=Ft.norm();Ft.normalize();var he=N.dot(Ft);if(he<At+Nt&&he>0){var me=vt,ye=Mt;me.copy(bt[(zt+1)%3]),ye.copy(bt[(zt+2)%3]);var Le=me.norm(),Jt=ye.norm();me.normalize(),ye.normalize();var Ht=N.dot(me),Ke=N.dot(ye);if(Ht<Le&&Ht>-Le&&Ke<Jt&&Ke>-Jt){var Re=Math.abs(he-At-Nt);(Et===null||Re<Et)&&(Et=Re,tt=Ht,xt=Ke,X=At,w.copy(Ft),F.copy(me),V.copy(ye),j++)}}}if(j){kt=!0;var Qt=this.createContactEquation(Tt,It,ot,ft);w.mult(-Nt,Qt.ri),Qt.ni.copy(w),Qt.ni.negate(Qt.ni),w.mult(X,w),F.mult(tt,F),w.vadd(F,w),V.mult(xt,V),w.vadd(V,Qt.rj),Qt.ri.vadd(_t,Qt.ri),Qt.ri.vsub(Tt.position,Qt.ri),Qt.rj.vadd(yt,Qt.rj),Qt.rj.vsub(It.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}for(var $t=nt.get(),ze=st,Ve=0;Ve!==2&&!kt;Ve++)for(var be=0;be!==2&&!kt;be++)for(var Ce=0;Ce!==2&&!kt;Ce++)if($t.set(0,0,0),Ve?$t.vadd(bt[0],$t):$t.vsub(bt[0],$t),be?$t.vadd(bt[1],$t):$t.vsub(bt[1],$t),Ce?$t.vadd(bt[2],$t):$t.vsub(bt[2],$t),yt.vadd($t,ze),ze.vsub(_t,ze),ze.norm2()<Nt*Nt){kt=!0;var Qt=this.createContactEquation(Tt,It,ot,ft);Qt.ri.copy(ze),Qt.ri.normalize(),Qt.ni.copy(Qt.ri),Qt.ri.mult(Nt,Qt.ri),Qt.rj.copy($t),Qt.ri.vadd(_t,Qt.ri),Qt.ri.vsub(Tt.position,Qt.ri),Qt.rj.vadd(yt,Qt.rj),Qt.rj.vsub(It.position,Qt.rj),this.result.push(Qt),this.createFrictionEquationsFromContact(Qt,this.frictionResult)}nt.release($t),$t=null;for(var ve=nt.get(),Fe=nt.get(),Qt=nt.get(),Se=nt.get(),Re=nt.get(),In=bt.length,Ve=0;Ve!==In&&!kt;Ve++)for(var be=0;be!==In&&!kt;be++)if(Ve%3!==be%3){bt[be].cross(bt[Ve],ve),ve.normalize(),bt[Ve].vadd(bt[be],Fe),Qt.copy(_t),Qt.vsub(Fe,Qt),Qt.vsub(yt,Qt);var wn=Qt.dot(ve);ve.mult(wn,Se);for(var Ce=0;Ce===Ve%3||Ce===be%3;)Ce++;Re.copy(_t),Re.vsub(Se,Re),Re.vsub(Fe,Re),Re.vsub(yt,Re);var tu=Math.abs(wn),eu=Re.norm();if(tu<bt[Ce].norm()&&eu<Nt){kt=!0;var Te=this.createContactEquation(Tt,It,ot,ft);Fe.vadd(Se,Te.rj),Te.rj.copy(Te.rj),Re.negate(Te.ni),Te.ni.normalize(),Te.ri.copy(Te.rj),Te.ri.vadd(yt,Te.ri),Te.ri.vsub(_t,Te.ri),Te.ri.normalize(),Te.ri.mult(Nt,Te.ri),Te.ri.vadd(_t,Te.ri),Te.ri.vsub(Tt.position,Te.ri),Te.rj.vadd(yt,Te.rj),Te.rj.vsub(It.position,Te.rj),this.result.push(Te),this.createFrictionEquationsFromContact(Te,this.frictionResult)}}nt.release(ve,Fe,Qt,Se,Re)};var U=new l,S=new l,et=new l,at=new l,ct=new l,pt=new l,Rt=new l,St=new l,gt=new l,Wt=new l;v.prototype[o.types.SPHERE|o.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=this.v3pool;_t.vsub(yt,U);for(var bt=ft.faceNormals,Nt=ft.faces,kt=ft.vertices,w=ot.radius,F=0;F!==kt.length;F++){var V=kt[F],X=ct;Dt.vmult(V,X),yt.vadd(X,X);var j=at;if(X.vsub(_t,j),j.norm2()<w*w){xt=!0;var tt=this.createContactEquation(Tt,It,ot,ft);tt.ri.copy(j),tt.ri.normalize(),tt.ni.copy(tt.ri),tt.ri.mult(w,tt.ri),X.vsub(yt,tt.rj),tt.ri.vadd(_t,tt.ri),tt.ri.vsub(Tt.position,tt.ri),tt.rj.vadd(yt,tt.rj),tt.rj.vsub(It.position,tt.rj),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);return}}for(var xt=!1,F=0,Et=Nt.length;F!==Et&&xt===!1;F++){var zt=bt[F],Lt=Nt[F],Ft=pt;Dt.vmult(zt,Ft);var At=Rt;Dt.vmult(kt[Lt[0]],At),At.vadd(yt,At);var he=St;Ft.mult(-w,he),_t.vadd(he,he);var me=gt;he.vsub(At,me);var ye=me.dot(Ft),Le=Wt;if(_t.vsub(At,Le),ye<0&&Le.dot(Ft)>0){for(var Jt=[],Ht=0,Ke=Lt.length;Ht!==Ke;Ht++){var $t=nt.get();Dt.vmult(kt[Lt[Ht]],$t),yt.vadd($t,$t),Jt.push($t)}if(K(Jt,Ft,_t)){xt=!0;var tt=this.createContactEquation(Tt,It,ot,ft);Ft.mult(-w,tt.ri),Ft.negate(tt.ni);var ze=nt.get();Ft.mult(-ye,ze);var Ve=nt.get();Ft.mult(-w,Ve),_t.vsub(yt,tt.rj),tt.rj.vadd(Ve,tt.rj),tt.rj.vadd(ze,tt.rj),tt.rj.vadd(yt,tt.rj),tt.rj.vsub(It.position,tt.rj),tt.ri.vadd(_t,tt.ri),tt.ri.vsub(Tt.position,tt.ri),nt.release(ze),nt.release(Ve),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);for(var Ht=0,be=Jt.length;Ht!==be;Ht++)nt.release(Jt[Ht]);return}else for(var Ht=0;Ht!==Lt.length;Ht++){var Ce=nt.get(),ve=nt.get();Dt.vmult(kt[Lt[(Ht+1)%Lt.length]],Ce),Dt.vmult(kt[Lt[(Ht+2)%Lt.length]],ve),yt.vadd(Ce,Ce),yt.vadd(ve,ve);var Fe=S;ve.vsub(Ce,Fe);var Qt=et;Fe.unit(Qt);var Se=nt.get(),Re=nt.get();_t.vsub(Ce,Re);var In=Re.dot(Qt);Qt.mult(In,Se),Se.vadd(Ce,Se);var wn=nt.get();if(Se.vsub(_t,wn),In>0&&In*In<Fe.norm2()&&wn.norm2()<w*w){var tt=this.createContactEquation(Tt,It,ot,ft);Se.vsub(yt,tt.rj),Se.vsub(_t,tt.ni),tt.ni.normalize(),tt.ni.mult(w,tt.ri),tt.rj.vadd(yt,tt.rj),tt.rj.vsub(It.position,tt.rj),tt.ri.vadd(_t,tt.ri),tt.ri.vsub(Tt.position,tt.ri),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult);for(var Ht=0,be=Jt.length;Ht!==be;Ht++)nt.release(Jt[Ht]);nt.release(Ce),nt.release(ve),nt.release(Se),nt.release(wn),nt.release(Re);return}nt.release(Ce),nt.release(ve),nt.release(Se),nt.release(wn),nt.release(Re)}for(var Ht=0,be=Jt.length;Ht!==be;Ht++)nt.release(Jt[Ht])}}},new l,new l,v.prototype[o.types.PLANE|o.types.BOX]=v.prototype.planeBox=function(ot,ft,_t,yt,Yt,Dt,Tt,It){ft.convexPolyhedronRepresentation.material=ft.material,ft.convexPolyhedronRepresentation.collisionResponse=ft.collisionResponse,this.planeConvex(ot,ft.convexPolyhedronRepresentation,_t,yt,Yt,Dt,Tt,It)};var wt=new l,Gt=new l,ne=new l,qt=new l;v.prototype[o.types.PLANE|o.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=wt,bt=Gt;bt.set(0,0,1),Yt.vmult(bt,bt);for(var Nt=0,kt=ne,w=0;w!==ft.vertices.length;w++){nt.copy(ft.vertices[w]),Dt.vmult(nt,nt),yt.vadd(nt,nt),nt.vsub(_t,kt);var F=bt.dot(kt);if(F<=0){var V=this.createContactEquation(Tt,It,ot,ft),X=qt;bt.mult(bt.dot(kt),X),nt.vsub(X,X),X.vsub(_t,V.ri),V.ni.copy(bt),nt.vsub(yt,V.rj),V.ri.vadd(_t,V.ri),V.ri.vsub(Tt.position,V.ri),V.rj.vadd(yt,V.rj),V.rj.vsub(It.position,V.rj),this.result.push(V),Nt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(V,this.frictionResult)}}this.enableFrictionReduction&&Nt&&this.createFrictionFromAverage(Nt)};var Ut=new l,jt=new l;v.prototype[o.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(ot,ft,_t,yt,Yt,Dt,Tt,It,nt,bt,Nt,kt){var w=Ut;if(!(_t.distanceTo(yt)>ot.boundingSphereRadius+ft.boundingSphereRadius)&&ot.findSeparatingAxis(ft,_t,Yt,yt,Dt,w,Nt,kt)){var F=[],V=jt;ot.clipAgainstHull(_t,Yt,ft,yt,Dt,w,-100,100,F);for(var X=0,j=0;j!==F.length;j++){var tt=this.createContactEquation(Tt,It,ot,ft,nt,bt),xt=tt.ri,Et=tt.rj;w.negate(tt.ni),F[j].normal.negate(V),V.mult(F[j].depth,V),F[j].point.vadd(V,xt),Et.copy(F[j].point),xt.vsub(_t,xt),Et.vsub(yt,Et),xt.vadd(_t,xt),xt.vsub(Tt.position,xt),Et.vadd(yt,Et),Et.vsub(It.position,Et),this.result.push(tt),X++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(tt,this.frictionResult)}this.enableFrictionReduction&&X&&this.createFrictionFromAverage(X)}};var ee=new l,ue=new l,Zt=new l;v.prototype[o.types.PLANE|o.types.PARTICLE]=v.prototype.planeParticle=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=ee;nt.set(0,0,1),Tt.quaternion.vmult(nt,nt);var bt=ue;yt.vsub(Tt.position,bt);var Nt=nt.dot(bt);if(Nt<=0){var kt=this.createContactEquation(It,Tt,ft,ot);kt.ni.copy(nt),kt.ni.negate(kt.ni),kt.ri.set(0,0,0);var w=Zt;nt.mult(nt.dot(yt),w),yt.vsub(w,w),kt.rj.copy(w),this.result.push(kt),this.createFrictionEquationsFromContact(kt,this.frictionResult)}};var Z=new l;v.prototype[o.types.PARTICLE|o.types.SPHERE]=v.prototype.sphereParticle=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=Z;nt.set(0,0,1),yt.vsub(_t,nt);var bt=nt.norm2();if(bt<=ot.radius*ot.radius){var Nt=this.createContactEquation(It,Tt,ft,ot);nt.normalize(),Nt.rj.copy(nt),Nt.rj.mult(ot.radius,Nt.rj),Nt.ni.copy(nt),Nt.ni.negate(Nt.ni),Nt.ri.set(0,0,0),this.result.push(Nt),this.createFrictionEquationsFromContact(Nt,this.frictionResult)}};var mt=new u,ht=new l;new l;var Ct=new l,Pt=new l,re=new l;v.prototype[o.types.PARTICLE|o.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=-1,bt=Ct,Nt=re,kt=null,w=ht;if(w.copy(yt),w.vsub(_t,w),Yt.conjugate(mt),mt.vmult(w,w),ot.pointIsInside(w)){ot.worldVerticesNeedsUpdate&&ot.computeWorldVertices(_t,Yt),ot.worldFaceNormalsNeedsUpdate&&ot.computeWorldFaceNormals(Yt);for(var F=0,V=ot.faces.length;F!==V;F++){var X=[ot.worldVertices[ot.faces[F][0]]],j=ot.worldFaceNormals[F];yt.vsub(X[0],Pt);var tt=-j.dot(Pt);(kt===null||Math.abs(tt)<Math.abs(kt))&&(kt=tt,nt=F,bt.copy(j))}if(nt!==-1){var xt=this.createContactEquation(It,Tt,ft,ot);bt.mult(kt,Nt),Nt.vadd(yt,Nt),Nt.vsub(_t,Nt),xt.rj.copy(Nt),bt.negate(xt.ni),xt.ri.set(0,0,0);var Et=xt.ri,zt=xt.rj;Et.vadd(yt,Et),Et.vsub(It.position,Et),zt.vadd(_t,zt),zt.vsub(Tt.position,zt),this.result.push(xt),this.createFrictionEquationsFromContact(xt,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[o.types.BOX|o.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(ot,ft,_t,yt,Yt,Dt,Tt,It){ot.convexPolyhedronRepresentation.material=ot.material,ot.convexPolyhedronRepresentation.collisionResponse=ot.collisionResponse,this.convexHeightfield(ot.convexPolyhedronRepresentation,ft,_t,yt,Yt,Dt,Tt,It)};var ce=new l,de=new l,Ae=[0];v.prototype[o.types.CONVEXPOLYHEDRON|o.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=ft.data,bt=ft.elementSize,Nt=ot.boundingSphereRadius,kt=de,w=Ae,F=ce;h.pointToLocalFrame(yt,Dt,_t,F);var V=Math.floor((F.x-Nt)/bt)-1,X=Math.ceil((F.x+Nt)/bt)+1,j=Math.floor((F.y-Nt)/bt)-1,tt=Math.ceil((F.y+Nt)/bt)+1;if(!(X<0||tt<0||V>nt.length||j>nt[0].length)){V<0&&(V=0),X<0&&(X=0),j<0&&(j=0),tt<0&&(tt=0),V>=nt.length&&(V=nt.length-1),X>=nt.length&&(X=nt.length-1),tt>=nt[0].length&&(tt=nt[0].length-1),j>=nt[0].length&&(j=nt[0].length-1);var xt=[];ft.getRectMinMax(V,j,X,tt,xt);var Et=xt[0],zt=xt[1];if(!(F.z-Nt>zt||F.z+Nt<Et))for(var Lt=V;Lt<X;Lt++)for(var Ft=j;Ft<tt;Ft++)ft.getConvexTrianglePillar(Lt,Ft,!1),h.pointToWorldFrame(yt,Dt,ft.pillarOffset,kt),_t.distanceTo(kt)<ft.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.convexConvex(ot,ft.pillarConvex,_t,kt,Yt,Dt,Tt,It,null,null,w,null),ft.getConvexTrianglePillar(Lt,Ft,!0),h.pointToWorldFrame(yt,Dt,ft.pillarOffset,kt),_t.distanceTo(kt)<ft.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.convexConvex(ot,ft.pillarConvex,_t,kt,Yt,Dt,Tt,It,null,null,w,null)}};var le=new l,pe=new l;v.prototype[o.types.SPHERE|o.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(ot,ft,_t,yt,Yt,Dt,Tt,It){var nt=ft.data,bt=ot.radius,Nt=ft.elementSize,kt=pe,w=le;h.pointToLocalFrame(yt,Dt,_t,w);var F=Math.floor((w.x-bt)/Nt)-1,V=Math.ceil((w.x+bt)/Nt)+1,X=Math.floor((w.y-bt)/Nt)-1,j=Math.ceil((w.y+bt)/Nt)+1;if(!(V<0||j<0||F>nt.length||j>nt[0].length)){F<0&&(F=0),V<0&&(V=0),X<0&&(X=0),j<0&&(j=0),F>=nt.length&&(F=nt.length-1),V>=nt.length&&(V=nt.length-1),j>=nt[0].length&&(j=nt[0].length-1),X>=nt[0].length&&(X=nt[0].length-1);var tt=[];ft.getRectMinMax(F,X,V,j,tt);var xt=tt[0],Et=tt[1];if(!(w.z-bt>Et||w.z+bt<xt))for(var zt=this.result,Lt=F;Lt<V;Lt++)for(var Ft=X;Ft<j;Ft++){var At=zt.length;ft.getConvexTrianglePillar(Lt,Ft,!1),h.pointToWorldFrame(yt,Dt,ft.pillarOffset,kt),_t.distanceTo(kt)<ft.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.sphereConvex(ot,ft.pillarConvex,_t,kt,Yt,Dt,Tt,It),ft.getConvexTrianglePillar(Lt,Ft,!0),h.pointToWorldFrame(yt,Dt,ft.pillarOffset,kt),_t.distanceTo(kt)<ft.pillarConvex.boundingSphereRadius+ot.boundingSphereRadius&&this.sphereConvex(ot,ft.pillarConvex,_t,kt,Yt,Dt,Tt,It);var he=zt.length-At;if(he>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,i){n.exports=y;var r=e("../shapes/Shape"),o=e("../math/Vec3"),a=e("../math/Quaternion"),l=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var h=e("./Narrowphase"),u=e("../utils/EventTarget"),c=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),_=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function y(){u.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new o,this.broadphase=new x,this.bodies=[],this.solver=new l,this.constraints=[],this.narrowphase=new h(this),this.collisionMatrix=new c,this.collisionMatrixPrevious=new c,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new u,new p;var T=new _;if(y.prototype.getContactMaterial=function(L,Q){return this.contactMaterialTable.get(L.id,Q.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var L=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=L,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(L){this.bodies.indexOf(L)===-1&&(L.index=this.bodies.length,this.bodies.push(L),L.world=this,L.initPosition.copy(L.position),L.initVelocity.copy(L.velocity),L.timeLastSleepy=this.time,L instanceof v&&(L.initAngularVelocity.copy(L.angularVelocity),L.initQuaternion.copy(L.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=L,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(L){this.constraints.push(L)},y.prototype.removeConstraint=function(L){var Q=this.constraints.indexOf(L);Q!==-1&&this.constraints.splice(Q,1)},y.prototype.rayTest=function(L,Q,Y){Y instanceof m?this.raycastClosest(L,Q,{skipBackfaces:!0},Y):this.raycastAll(L,Q,{skipBackfaces:!0},Y)},y.prototype.raycastAll=function(L,Q,Y,B){return Y.mode=_.ALL,Y.from=L,Y.to=Q,Y.callback=B,T.intersectWorld(this,Y)},y.prototype.raycastAny=function(L,Q,Y,B){return Y.mode=_.ANY,Y.from=L,Y.to=Q,Y.result=B,T.intersectWorld(this,Y)},y.prototype.raycastClosest=function(L,Q,Y,B){return Y.mode=_.CLOSEST,Y.from=L,Y.to=Q,Y.result=B,T.intersectWorld(this,Y)},y.prototype.remove=function(L){L.world=null;var Q=this.bodies.length-1,Y=this.bodies,B=Y.indexOf(L);if(B!==-1){Y.splice(B,1);for(var J=0;J!==Y.length;J++)Y[J].index=J;this.collisionMatrix.setNumObjects(Q),this.removeBodyEvent.body=L,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(L){this.materials.push(L)},y.prototype.addContactMaterial=function(L){this.contactmaterials.push(L),this.contactMaterialTable.set(L.materials[0].id,L.materials[1].id,L)},typeof performance>"u"&&(performance={}),!performance.now){var b=Date.now();performance.timing&&performance.timing.navigationStart&&(b=performance.timing.navigationStart),performance.now=function(){return Date.now()-b}}var I=new o;y.prototype.step=function(L,Q,Y){if(Y=Y||10,Q=Q||0,Q===0)this.internalStep(L),this.time+=L;else{var B=Math.floor((this.time+Q)/L)-Math.floor(this.time/L);B=Math.min(B,Y);for(var J=performance.now(),z=0;z!==B&&(this.internalStep(L),!(performance.now()-J>L*1e3));z++);this.time+=Q;for(var A=this.time%L,R=A/L,H=I,$=this.bodies,it=0;it!==$.length;it++){var K=$[it];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,H),H.scale(R,H),K.position.vadd(H,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var D={type:"postStep"},E={type:"preStep"},M={type:"collide",body:null,contact:null},C=[],O=[],P=[],k=[];new o,new o,new o,new o,new o,new o,new o,new o,new o,new a;var q=new a,rt=new a,G=new o;y.prototype.internalStep=function(L){this.dt=L;var Q=this.contacts,Y=P,B=k,J=this.numObjects(),z=this.bodies,A=this.solver,R=this.gravity,H=this.doProfiling,$=this.profile,it=v.DYNAMIC,K,N=this.constraints,ut=O;R.norm();var vt=R.x,Mt=R.y,dt=R.z,st=0;for(H&&(K=performance.now()),st=0;st!==J;st++){var lt=z[st];if(lt.type&it){var Vt=lt.force,Ot=lt.mass;Vt.x+=Ot*vt,Vt.y+=Ot*Mt,Vt.z+=Ot*dt}}for(var st=0,U=this.subsystems.length;st!==U;st++)this.subsystems[st].update();H&&(K=performance.now()),Y.length=0,B.length=0,this.broadphase.collisionPairs(this,Y,B),H&&($.broadphase=performance.now()-K);var Ut=N.length;for(st=0;st!==Ut;st++){var S=N[st];if(!S.collideConnected)for(var et=Y.length-1;et>=0;et-=1)(S.bodyA===Y[et]&&S.bodyB===B[et]||S.bodyB===Y[et]&&S.bodyA===B[et])&&(Y.splice(et,1),B.splice(et,1))}this.collisionMatrixTick(),H&&(K=performance.now());var at=C,ct=Q.length;for(st=0;st!==ct;st++)at.push(Q[st]);Q.length=0;var pt=this.frictionEquations.length;for(st=0;st!==pt;st++)ut.push(this.frictionEquations[st]);this.frictionEquations.length=0,this.narrowphase.getContacts(Y,B,this,Q,at,this.frictionEquations,ut),H&&($.narrowphase=performance.now()-K),H&&(K=performance.now());for(var st=0;st<this.frictionEquations.length;st++)A.addEquation(this.frictionEquations[st]);for(var Rt=Q.length,St=0;St!==Rt;St++){var S=Q[St],lt=S.bi,gt=S.bj;S.si,S.sj;var Wt;if(lt.material&&gt.material?Wt=this.getContactMaterial(lt.material,gt.material)||this.defaultContactMaterial:Wt=this.defaultContactMaterial,Wt.friction,lt.material&&gt.material&&(lt.material.friction>=0&&gt.material.friction>=0&&lt.material.friction*gt.material.friction,lt.material.restitution>=0&&gt.material.restitution>=0&&(S.restitution=lt.material.restitution*gt.material.restitution)),A.addEquation(S),lt.allowSleep&&lt.type===v.DYNAMIC&&lt.sleepState===v.SLEEPING&&gt.sleepState===v.AWAKE&&gt.type!==v.STATIC){var wt=gt.velocity.norm2()+gt.angularVelocity.norm2(),Gt=Math.pow(gt.sleepSpeedLimit,2);wt>=Gt*2&&(lt._wakeUpAfterNarrowphase=!0)}if(gt.allowSleep&&gt.type===v.DYNAMIC&&gt.sleepState===v.SLEEPING&&lt.sleepState===v.AWAKE&&lt.type!==v.STATIC){var ne=lt.velocity.norm2()+lt.angularVelocity.norm2(),qt=Math.pow(lt.sleepSpeedLimit,2);ne>=qt*2&&(gt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(lt,gt,!0),this.collisionMatrixPrevious.get(lt,gt)||(M.body=gt,M.contact=S,lt.dispatchEvent(M),M.body=lt,gt.dispatchEvent(M))}for(H&&($.makeContactConstraints=performance.now()-K,K=performance.now()),st=0;st!==J;st++){var lt=z[st];lt._wakeUpAfterNarrowphase&&(lt.wakeUp(),lt._wakeUpAfterNarrowphase=!1)}var Ut=N.length;for(st=0;st!==Ut;st++){var S=N[st];S.update();for(var et=0,jt=S.equations.length;et!==jt;et++){var ee=S.equations[et];A.addEquation(ee)}}A.solve(L,this),H&&($.solve=performance.now()-K),A.removeAllEquations();var ue=Math.pow;for(st=0;st!==J;st++){var lt=z[st];if(lt.type&it){var Zt=ue(1-lt.linearDamping,L),Z=lt.velocity;Z.mult(Zt,Z);var mt=lt.angularVelocity;if(mt){var ht=ue(1-lt.angularDamping,L);mt.mult(ht,mt)}}}for(this.dispatchEvent(E),st=0;st!==J;st++){var lt=z[st];lt.preStep&&lt.preStep.call(lt)}H&&(K=performance.now());var Ct=q,Pt=rt,re=this.stepnumber,ce=v.DYNAMIC|v.KINEMATIC,de=re%(this.quatNormalizeSkip+1)===0,Ae=this.quatNormalizeFast,le=L*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,st=0;st!==J;st++){var pe=z[st],ot=pe.force,ft=pe.torque;if(pe.type&ce&&pe.sleepState!==v.SLEEPING){var _t=pe.velocity,yt=pe.angularVelocity,Yt=pe.position,Dt=pe.quaternion,Tt=pe.invMass,It=pe.invInertiaWorld;_t.x+=ot.x*Tt*L,_t.y+=ot.y*Tt*L,_t.z+=ot.z*Tt*L,pe.angularVelocity&&(It.vmult(ft,G),G.mult(L,G),G.vadd(yt,yt)),Yt.x+=_t.x*L,Yt.y+=_t.y*L,Yt.z+=_t.z*L,pe.angularVelocity&&(Ct.set(yt.x,yt.y,yt.z,0),Ct.mult(Dt,Pt),Dt.x+=le*Pt.x,Dt.y+=le*Pt.y,Dt.z+=le*Pt.z,Dt.w+=le*Pt.w,de&&(Ae?Dt.normalizeFast():Dt.normalize())),pe.aabb&&(pe.aabbNeedsUpdate=!0),pe.updateInertiaWorld&&pe.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,H&&($.integrate=performance.now()-K),this.time+=L,this.stepnumber+=1,this.dispatchEvent(D),st=0;st!==J;st++){var lt=z[st],nt=lt.postStep;nt&&nt.call(lt)}if(this.allowSleep)for(st=0;st!==J;st++)z[st].sleepTick(this.time)},y.prototype.clearForces=function(){for(var L=this.bodies,Q=L.length,Y=0;Y!==Q;Y++){var B=L[Y];B.force,B.torque,B.force.set(0,0,0),B.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Ch);var Ie=Ch.exports;const gc=105,Ph=1500,An=new W(3.875,.5,4),Qn=An.z/2*.9,y0=.825,x0=.2,Lh=.01,Ih=120,M0=500,S0=50,E0=3,w0=4.25,T0=5.88,A0=6.57*1.2,b0=.85,R0=1.2,C0=.5,P0=1.5,L0=.47,I0=.53,N0=1.95,D0=2.05,U0=63e-5,Nh=new Event("restartplay");function F0(s){const t=+this._x.call(null,s),e=+this._y.call(null,s);return Dh(this.cover(t,e),t,e,s)}function Dh(s,t,e,n){if(isNaN(t)||isNaN(e))return s;var i,r=s._root,o={data:n},a=s._x0,l=s._y0,h=s._x1,u=s._y1,c,d,f,v,g,m,p,_;if(!r)return s._root=o,s;for(;r.length;)if((g=t>=(c=(a+h)/2))?a=c:h=c,(m=e>=(d=(l+u)/2))?l=d:u=d,i=r,!(r=r[p=m<<1|g]))return i[p]=o,s;if(f=+s._x.call(null,r.data),v=+s._y.call(null,r.data),t===f&&e===v)return o.next=r,i?i[p]=o:s._root=o,s;do i=i?i[p]=new Array(4):s._root=new Array(4),(g=t>=(c=(a+h)/2))?a=c:h=c,(m=e>=(d=(l+u)/2))?l=d:u=d;while((p=m<<1|g)===(_=(v>=d)<<1|f>=c));return i[_]=r,i[p]=o,s}function B0(s){var t,e,n=s.length,i,r,o=new Array(n),a=new Array(n),l=1/0,h=1/0,u=-1/0,c=-1/0;for(e=0;e<n;++e)isNaN(i=+this._x.call(null,t=s[e]))||isNaN(r=+this._y.call(null,t))||(o[e]=i,a[e]=r,i<l&&(l=i),i>u&&(u=i),r<h&&(h=r),r>c&&(c=r));if(l>u||h>c)return this;for(this.cover(l,h).cover(u,c),e=0;e<n;++e)Dh(this,o[e],a[e],s[e]);return this}function O0(s,t){if(isNaN(s=+s)||isNaN(t=+t))return this;var e=this._x0,n=this._y0,i=this._x1,r=this._y1;if(isNaN(e))i=(e=Math.floor(s))+1,r=(n=Math.floor(t))+1;else{for(var o=i-e||1,a=this._root,l,h;e>s||s>=i||n>t||t>=r;)switch(h=(t<n)<<1|s<e,l=new Array(4),l[h]=a,a=l,o*=2,h){case 0:i=e+o,r=n+o;break;case 1:e=i-o,r=n+o;break;case 2:i=e+o,n=r-o;break;case 3:e=i-o,n=r-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=e,this._y0=n,this._x1=i,this._y1=r,this}function z0(){var s=[];return this.visit(function(t){if(!t.length)do s.push(t.data);while(t=t.next)}),s}function V0(s){return arguments.length?this.cover(+s[0][0],+s[0][1]).cover(+s[1][0],+s[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Je(s,t,e,n,i){this.node=s,this.x0=t,this.y0=e,this.x1=n,this.y1=i}function H0(s,t,e){var n,i=this._x0,r=this._y0,o,a,l,h,u=this._x1,c=this._y1,d=[],f=this._root,v,g;for(f&&d.push(new Je(f,i,r,u,c)),e==null?e=1/0:(i=s-e,r=t-e,u=s+e,c=t+e,e*=e);v=d.pop();)if(!(!(f=v.node)||(o=v.x0)>u||(a=v.y0)>c||(l=v.x1)<i||(h=v.y1)<r))if(f.length){var m=(o+l)/2,p=(a+h)/2;d.push(new Je(f[3],m,p,l,h),new Je(f[2],o,p,m,h),new Je(f[1],m,a,l,p),new Je(f[0],o,a,m,p)),(g=(t>=p)<<1|s>=m)&&(v=d[d.length-1],d[d.length-1]=d[d.length-1-g],d[d.length-1-g]=v)}else{var _=s-+this._x.call(null,f.data),x=t-+this._y.call(null,f.data),y=_*_+x*x;if(y<e){var T=Math.sqrt(e=y);i=s-T,r=t-T,u=s+T,c=t+T,n=f.data}}return n}function k0(s){if(isNaN(u=+this._x.call(null,s))||isNaN(c=+this._y.call(null,s)))return this;var t,e=this._root,n,i,r,o=this._x0,a=this._y0,l=this._x1,h=this._y1,u,c,d,f,v,g,m,p;if(!e)return this;if(e.length)for(;;){if((v=u>=(d=(o+l)/2))?o=d:l=d,(g=c>=(f=(a+h)/2))?a=f:h=f,t=e,!(e=e[m=g<<1|v]))return this;if(!e.length)break;(t[m+1&3]||t[m+2&3]||t[m+3&3])&&(n=t,p=m)}for(;e.data!==s;)if(i=e,!(e=e.next))return this;return(r=e.next)&&delete e.next,i?(r?i.next=r:delete i.next,this):t?(r?t[m]=r:delete t[m],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(n?n[p]=e:this._root=e),this):(this._root=r,this)}function G0(s){for(var t=0,e=s.length;t<e;++t)this.remove(s[t]);return this}function W0(){return this._root}function X0(){var s=0;return this.visit(function(t){if(!t.length)do++s;while(t=t.next)}),s}function q0(s){var t=[],e,n=this._root,i,r,o,a,l;for(n&&t.push(new Je(n,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!s(n=e.node,r=e.x0,o=e.y0,a=e.x1,l=e.y1)&&n.length){var h=(r+a)/2,u=(o+l)/2;(i=n[3])&&t.push(new Je(i,h,u,a,l)),(i=n[2])&&t.push(new Je(i,r,u,h,l)),(i=n[1])&&t.push(new Je(i,h,o,a,u)),(i=n[0])&&t.push(new Je(i,r,o,h,u))}return this}function Y0(s){var t=[],e=[],n;for(this._root&&t.push(new Je(this._root,this._x0,this._y0,this._x1,this._y1));n=t.pop();){var i=n.node;if(i.length){var r,o=n.x0,a=n.y0,l=n.x1,h=n.y1,u=(o+l)/2,c=(a+h)/2;(r=i[0])&&t.push(new Je(r,o,a,u,c)),(r=i[1])&&t.push(new Je(r,u,a,l,c)),(r=i[2])&&t.push(new Je(r,o,c,u,h)),(r=i[3])&&t.push(new Je(r,u,c,l,h))}e.push(n)}for(;n=e.pop();)s(n.node,n.x0,n.y0,n.x1,n.y1);return this}function j0(s){return s[0]}function K0(s){return arguments.length?(this._x=s,this):this._x}function Z0(s){return s[1]}function $0(s){return arguments.length?(this._y=s,this):this._y}function Uh(s,t,e){var n=new Sa(t??j0,e??Z0,NaN,NaN,NaN,NaN);return s==null?n:n.addAll(s)}function Sa(s,t,e,n,i,r){this._x=s,this._y=t,this._x0=e,this._y0=n,this._x1=i,this._y1=r,this._root=void 0}function _c(s){for(var t={data:s.data},e=t;s=s.next;)e=e.next={data:s.data};return t}var en=Uh.prototype=Sa.prototype;en.copy=function(){var s=new Sa(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,n;if(!t)return s;if(!t.length)return s._root=_c(t),s;for(e=[{source:t,target:s._root=new Array(4)}];t=e.pop();)for(var i=0;i<4;++i)(n=t.source[i])&&(n.length?e.push({source:n,target:t.target[i]=new Array(4)}):t.target[i]=_c(n));return s};en.add=F0;en.addAll=B0;en.cover=O0;en.data=z0;en.extent=V0;en.find=H0;en.remove=k0;en.removeAll=G0;en.root=W0;en.size=X0;en.visit=q0;en.visitAfter=Y0;en.x=K0;en.y=$0;const Fh=Math.sqrt(3),Q0=.5*(Fh-1),Lr=(3-Fh)/6,yc=s=>Math.floor(s)|0,xc=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function J0(s=Math.random){const t=t_(s),e=new Float64Array(t).map(i=>xc[i%12*2]),n=new Float64Array(t).map(i=>xc[i%12*2+1]);return function(r,o){let a=0,l=0,h=0;const u=(r+o)*Q0,c=yc(r+u),d=yc(o+u),f=(c+d)*Lr,v=c-f,g=d-f,m=r-v,p=o-g;let _,x;m>p?(_=1,x=0):(_=0,x=1);const y=m-_+Lr,T=p-x+Lr,b=m-1+2*Lr,I=p-1+2*Lr,D=c&255,E=d&255;let M=.5-m*m-p*p;if(M>=0){const P=D+t[E],k=e[P],q=n[P];M*=M,a=M*M*(k*m+q*p)}let C=.5-y*y-T*T;if(C>=0){const P=D+_+t[E+x],k=e[P],q=n[P];C*=C,l=C*C*(k*y+q*T)}let O=.5-b*b-I*I;if(O>=0){const P=D+1+t[E+1],k=e[P],q=n[P];O*=O,h=O*O*(k*b+q*I)}return 70*(a+l+h)}}function t_(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=e[n];e[n]=e[i],e[i]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}var Bh={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(g0,function(){return e.importState=function(i){var r=new e;return r.importState(i),r},e;function e(){return function(i){var r=0,o=0,a=0,l=1;i.length==0&&(i=[+new Date]);var h=n();r=h(" "),o=h(" "),a=h(" ");for(var u=0;u<i.length;u++)r-=h(i[u]),r<0&&(r+=1),o-=h(i[u]),o<0&&(o+=1),a-=h(i[u]),a<0&&(a+=1);h=null;var c=function(){var d=2091639*r+l*23283064365386963e-26;return r=o,o=a,a=d-(l=d|0)};return c.next=c,c.uint32=function(){return c()*4294967296},c.fract53=function(){return c()+(c()*2097152|0)*11102230246251565e-32},c.version="Alea 0.9",c.args=i,c.exportState=function(){return[r,o,a,l]},c.importState=function(d){r=+d[0]||0,o=+d[1]||0,a=+d[2]||0,l=+d[3]||0},c}(Array.prototype.slice.call(arguments))}function n(){var i=4022871197,r=function(o){o=o.toString();for(var a=0;a<o.length;a++){i+=o.charCodeAt(a);var l=.02519603282416938*i;i=l>>>0,l-=i,l*=i,i=l>>>0,l-=i,i+=l*4294967296}return(i>>>0)*23283064365386963e-26};return r.version="Mash 0.9",r}})})(Bh);var e_=Bh.exports;const kn=_0(e_),Tn=[{id:"6aeda305-3ccc-49c8-88d9-08a491d07b8f"},{id:"7f404916-ef74-4fca-892e-4e4cdc20c1b9"},{id:"d505ae4f-deb3-4ca0-a0df-e0143265f469"},{id:"4e4281b5-7d19-4658-8380-7721f93c8aa6"},{id:"c153d8c3-a448-44af-971c-c195c4670f01"},{id:"9abb4ef9-3274-434d-9f1e-4e4214e4eada"},{id:"e7174a3b-262f-4cc4-ba08-da919a030f65"},{id:"1d4eea48-6f44-4941-8635-28bae01f07e8"},{id:"11b813f5-4f57-42b8-affe-4203aae883ba"},{id:"fa3e1b2a-9a80-4396-b58d-1e7eadd4124f"},{id:"ad6b907c-6672-431d-bc28-9b3611b704f4"},{id:"8153abf8-ca2e-4f8a-8f02-6b301d49e440"},{id:"bee7195c-2603-4f32-8f9a-84cc9ed58e0d"},{id:"663c437d-3efe-4080-8e36-287d3a301733"},{id:"acadd25c-ce2d-4b4c-b2c8-2a171b52cdaa"},{id:"a9cd6e50-6d1c-4586-af6e-ab2682e3eb55"},{id:"c2f54730-b8e1-4087-b3cc-a80f49e16b38"},{id:"999bcf4e-3c2d-4c50-a4dc-df5e4e2d6d6d"},{id:"ff942509-db52-4d11-8127-b002eb593734"},{id:"995684e5-122a-4c74-959f-44058687ccf0"},{id:"46773150-ce22-4114-aefd-1e4ac9a1d65f"},{id:"37c31a0c-7904-4fca-8cee-02deb7e67db6"},{id:"790a7cd1-3524-4dcb-a813-38439be5c800"},{id:"ce64df0a-a178-47bc-908f-d037c4722830"},{id:"8eac66e4-0eea-479f-a78b-f6b7d670b622"},{id:"e78a689d-b3df-42c1-ba5c-9533bd3bd44a"},{id:"a7f0f0ac-b319-4edb-bc0a-1354c3b2e3d7"},{id:"d783574c-6327-4077-85dd-165584a0c01e"},{id:"14ac5fd9-2281-4d4d-8c83-24e4e4ed68e0"},{id:"9495a192-73a1-4e17-945e-b040155188c0"},{id:"b5c04318-25cb-4b4f-807b-99af8f5f9086"},{id:"18cfef7f-c7e2-4318-937c-7cdec9d97282"},{id:"35317548-b99e-4b60-94ce-15466b5b99c8"},{id:"5215e600-bda0-4bb8-aa22-74fe315476f0"},{id:"a864c3d5-fa26-4136-9b7c-2332d28cdf7b"},{id:"6dd8c446-d3da-40d8-9e15-d620ca5d7ea1"},{id:"de5cbfd2-863c-4f7a-adac-b731e870fc5b"},{id:"22461132-a2a0-4b07-b295-e4540280aaea"},{id:"7ea66bea-3d76-41dd-8a9e-ba5fcea8f095"},{id:"528bed4c-5c81-480c-8a35-b74e8e8efc23"},{id:"4d5e2bb6-dae4-46c7-9a21-5aba59aa817f"},{id:"bab24a7c-f93f-4384-9999-115a9a8460d2"},{id:"42a4dadb-b14e-4a5c-977a-7f8532d2effc"},{id:"71d13df3-679d-4e3a-be04-e65ebccdf081"},{id:"1ab29bce-90d5-4b88-a89b-16294b683661"},{id:"039ce56b-7704-407a-acfc-00b52f654668"},{id:"50ab1c77-b1c0-4daf-9573-e0307e3b7a54"},{id:"4e7dd5c0-2737-4b1f-865a-f8ed1a5086dd"},{id:"5b47d3ea-163a-4ee5-85a3-fe0db1c2231b"},{id:"251e0088-c278-4180-b01b-326929ee8026"}];console.log("Total levels:",Tn.length);let Ne=Tn[0];function n_(s){Ne=s}function i_(s){return new W(s.x,s.y,s.z)}function Qi(s){return new Ie.Vec3(s.x,s.y,s.z)}new pa({color:0});function ks(s,t,e){return s+Math.floor(e()*(t-s+1))}function Gs(s,t,e){return s+e()*(t-s)}function Oh(s,t,e){const n=kn(e);return s+Math.floor(n()*(t-s+1))}function wi(s,t,e){const n=kn(e);return s+n()*(t-s)}function zh(s){var t=Math.floor(s/60),e=s%60;return t+":"+(e<10?"0":"")+e.toFixed(2)}const Vh=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);function r_(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}const s_=r_();class o_{constructor(t,e,n=42){Xt(this,"width");Xt(this,"height");Xt(this,"noise",[]);Xt(this,"heightmap");Xt(this,"octaves");Xt(this,"minValue",1/0);Xt(this,"avgDiff",0);Xt(this,"maxDiff",0);this.width=t,this.height=e,this.octaves=Oh(3,6,`octaves_${Ne.id}`),console.log("Octaves: ",this.octaves);for(let i=0;i<this.octaves;i++){const r=kn(`heightmap_${Ne.id}_${i}`);this.noise.push(J0(r))}this.heightmap=[]}generateHeightmap(t){let e=wi(b0,R0,`frequency_multiplier_${Ne.id}_1`);console.log("Frequency multiplier:",e);const n=wi(C0,P0,`heightmap_power_${Ne.id}_1`);console.log("Heightmap power:",n);const i=wi(L0,I0,`persistence_${Ne.id}`);console.log("Persistence:",i);const r=wi(N0,D0,`lacunarity_${Ne.id}`);console.log("Lacunarity:",r),this.avgDiff=0;let o=0;return this.heightmap=Array(this.height).fill(null).map((a,l)=>Array(this.width).fill(null).map((h,u)=>{let c=1,d=1*e,f=0;for(let g=0;g<this.octaves;g++){let m=this.noise[g]((u-this.width*.5)/30*d,l/30*d)*c;m=(m+1)/2,m=m**n,f+=m,c*=i,d*=r}let v=f;return v=v**n,this.minValue=Math.min(v,this.minValue),u>0&&(this.maxDiff=Math.max(this.maxDiff,Math.abs(v-o)),this.avgDiff+=(v-this.avgDiff)/((this.width-1)*this.height)),o=v,v})),this.heightmap}}const Mc=10;class Sc{constructor(t,e,n){Xt(this,"body");Xt(this,"pos");Xt(this,"dim");Xt(this,"color");this.pos=t,this.dim=e,this.color=n}top(){return this.pos.y+this.dim.y/2}}var Wr;class a_{constructor(){Xt(this,"squareDim");to(this,Wr);Xt(this,"terrainArr",[]);Xt(this,"minHeight");Xt(this,"maxZIndex");Xt(this,"finishZ");this.squareDim=wi(E0,w0,`square_dim_${Ne.id}`),console.log("Square dim:",this.squareDim);const t=this.getColorArr(),e=Math.floor(Ih/this.squareDim),n=Math.floor(M0/this.squareDim);this.maxZIndex=n-1,this.finishZ=-this.squareDim*n;const i=new o_(e,n),r=i.generateHeightmap(this.squareDim);let o=wi(T0,A0,`height_multiplier_${Ne.id}`);console.log("Height multiplier: ",o),o/=i.maxDiff,this.minHeight=i.minValue*o;const a=kn("colors2_"+Ne.id),l=this.terrainArr,h=new W(this.squareDim,Mc,this.squareDim);for(let v=0;v<n;v++){l.push([]);for(let g=0;g<e;g++){const m=new W((g-e/2)*this.squareDim,-Mc/2+.1+r[v][g]*o,-v*this.squareDim),p=ks(0,t.length-1,a),_=t[p],x=new Sc(m,h,_);l[l.length-1].push(x)}}const u=Math.ceil(S0/this.squareDim),c=l[l.length-1],d=new Kt(4473924),f=new Kt(16777215);for(let v=0;v<u;v++){l.push([]);for(let g=0;g<e;g++){const m=(g+v)%2===0?d:f,p=new W((g-e/2)*this.squareDim,c[g].pos.y,(-v-n)*this.squareDim),_=new Sc(p,h,m);l[l.length-1].push(_)}}eo(this,Wr,Uh().x(v=>v.pos.x).y(v=>v.pos.z).addAll(l.flat())),this.raiseStartingPosition()}getColorArr(){const t=[],e=kn("colors_hue_"+Ne.id),n=6,i=kn("colors_value"+Ne.id);for(let r=0;r<256;r++){const o=Gs(60,85,i);let a=Hh()+ks(-n,n,e);a=(a+360)%360,t.push(new Kt(`hsl(${a}, 30%, ${o}%)`))}return t}raiseStartingPosition(){const t=this.closestSquares(new W(0,0,0),this.squareDim*1.9),e=Math.max(...t.map(n=>n.pos.y));t.forEach(n=>{n.pos.y=e})}closestSquares(t,e=this.squareDim/2+Qn*1.1){return l_(Js(this,Wr),t.x-e,t.z-e,t.x+e,t.z+e)}}Wr=new WeakMap;const Hh=()=>Oh(0,360,`colors_hue_middle_${Ne.id}_6`);function l_(s,t,e,n,i){const r=[];return s.visit((o,a,l,h,u)=>{if(!o.length)do{const c=o.data,d=c.pos.x,f=c.pos.z;d>=t&&d<n&&f>=e&&f<i&&r.push(c)}while(o=o.next);return a>=n||l>=i||h<t||u<e}),r}let Me;function c_(){Me=new a_}const Ws=200,h_=new Ri(1,1,1);let vi;const u_=new ga({color:8947848}),Ec=new ie,d_=new En().setFromEuler(new dn(0,0,0));function f_(s){const t=Me.closestSquares(s,Ws);vi&&vi.removeFromParent(),vi=new Eh(h_,u_,t.length),vi.receiveShadow=!0;let e=0;for(let n of t)Ec.compose(n.pos,d_,n.dim),vi.setMatrixAt(e,Ec),vi.setColorAt(e,n.color),e++;gn.add(vi)}let Vo="hsl(209, 62.20%, 72.00%)";const ei=new Qe(69,Ea(),2,Ws+20),ai=new Ng({antialias:!0});ai.shadowMap.enabled=!0;ai.shadowMap.type=Hc;document.body.appendChild(ai.domElement);let gn,He;function kh(){Vo=`hsl(${(209+wi(-10,10,`sky_color_hue_range_${Ne.id}_5`)+360)%360}, 62.20%, 72.00%)`,ai.setClearColor(Vo),gn=new Dg;const e=(Hh()+180)%360,n=new o0(new Kt(`hsl(${e}, 100%, 96%)`),3.3*1.175);gn.add(n),He=new Rh(16777215,8),He.position.set(-.38,3,.3),He.castShadow=!0,He.shadow.mapSize.width=512,He.shadow.mapSize.height=512,He.shadow.camera.near=.1,He.shadow.camera.far=100,He.shadow.radius=1;const i=7;He.shadow.camera.left=-i,He.shadow.camera.right=i,He.shadow.camera.top=i,He.shadow.camera.bottom=-i,gn.add(He),gn.add(He.target),gn.add(He),gn.fog=new ua(Vo,Ws-120,Ws-1)}Gh();kh();function Ea(){return window.innerWidth/window.innerHeight}function p_(){return Ea()>=1}function Gh(){p_()?Vh?ei.fov=59:ei.fov=69:ei.fov=94,ei.aspect=Ea(),ei.updateProjectionMatrix(),ai.setSize(window.innerWidth,window.innerHeight),ai.setPixelRatio(window.devicePixelRatio),window.innerWidth*window.devicePixelRatio>3800&&ai.setPixelRatio(window.devicePixelRatio*.75)}window.addEventListener("resize",Gh);var Xr;class m_{constructor(){to(this,Xr);eo(this,Xr,document.querySelector("#debug-info"))}set(t){Js(this,Xr).innerText=t.toString()}}Xr=new WeakMap;const wc=new m_;class v_{constructor(){Xt(this,"upDown",0);Xt(this,"leftRight",0);Xt(this,"jumpHoldStart",null);Xt(this,"prevGamepad",!1);document.addEventListener("keydown",this.keyDown.bind(this)),document.addEventListener("keyup",this.keyUp.bind(this)),this.initTouchTurning();const t=document.querySelector("#gas");t.addEventListener("touchstart",()=>{this.upDown=1}),t.addEventListener("touchend",()=>this.upDown=0);const e=document.querySelector("#reverse");e.addEventListener("touchstart",()=>{this.upDown=-1}),e.addEventListener("touchend",()=>this.upDown=0)}initTouchTurning(){const t=document.querySelector("#left"),e=document.querySelector("#right");let n=!1,i=0,r=0;t.addEventListener("touchstart",o=>{o.preventDefault(),this.leftRight=-1,i++,t.classList.add("active"),e.classList.remove("active")}),t.addEventListener("touchend",o=>{try{if(this.prevGamepad=!1,i--,this.leftRight===-1||n)if(!(n&&this.leftRight===-1)||i===0)this.leftRight=0,n=!1,e.classList.remove("active"),t.classList.remove("active"),r&&(this.leftRight=1,e.classList.add("active"));else{let a=e.getBoundingClientRect(),l=a.width;o.targetTouches[0].pageX-a.left>0&&(this.leftRight=1,t.classList.remove("active"),e.classList.add("active"))}o.targetTouches.length<=1&&(n=!1,this.leftRight=0,i=0,r=0)}catch{n=!1,this.leftRight=0,i=0,r=0}}),t.addEventListener("touchmove",o=>{try{if(this.prevGamepad=!1,r)return;let a=t.getBoundingClientRect(),l=a.width;o.targetTouches[0].pageX-a.left>l?n||(t.classList.remove("active"),e.classList.add("active"),this.leftRight=1,n=!0):(n=!1,e.classList.remove("active"),t.classList.add("active"),this.leftRight=-1)}catch{}}),e.addEventListener("touchstart",o=>{this.prevGamepad=!1,o.preventDefault(),r++,e.classList.add("active"),t.classList.remove("active"),this.leftRight=1}),e.addEventListener("touchend",o=>{try{if(this.prevGamepad=!1,r--,this.leftRight===1||n)if(!(n&&this.leftRight===1)||r===0)t.classList.remove("active"),e.classList.remove("active"),this.leftRight=0,n=!1,i&&(this.leftRight=-1,t.classList.add("active"),wc.set(3));else{let a=t.getBoundingClientRect(),l=a.width;o.targetTouches[0].pageX-a.left<l&&(this.leftRight=-1,t.classList.add("active"),e.classList.remove("active"),wc.set(2))}o.targetTouches.length<=1&&(n=!1,this.leftRight=0,i=0,r=0)}catch{n=!1,this.leftRight=0,i=0,r=0}}),e.addEventListener("touchmove",o=>{try{if(this.prevGamepad=!1,i)return;let a=e.getBoundingClientRect(),l=a.width;o.targetTouches[0].pageX-a.left<0?n||(e.classList.remove("active"),t.classList.add("active"),this.leftRight=-1,n=!0):(t.classList.remove("active"),e.classList.add("active"),this.leftRight=1,n=!1)}catch{}})}handleGamepads(){try{const t=navigator.getGamepads();if(!t)return;const e=t[0];if(!e||!e.buttons||e.buttons.length<1||(e.buttons.length>=8&&(e.buttons[0].pressed?(this.prevGamepad=!0,this.jumpHoldStart===null&&(this.jumpHoldStart=Date.now()/1e3)):this.prevGamepad&&(this.jumpHoldStart=null),e.buttons[6].value>.15?(this.prevGamepad=!0,this.upDown=-e.buttons[6].value):this.prevGamepad&&this.upDown<0&&(this.upDown=0,this.prevGamepad=!1),e.buttons[7].value>.15?(this.prevGamepad=!0,this.upDown=e.buttons[7].value):this.prevGamepad&&this.upDown>0&&(this.upDown=0,this.prevGamepad=!1)),!e.axes||e.axes.length<2))return;const n=e.axes[0];if(Math.abs(n)<.15){this.prevGamepad&&(this.leftRight=0);return}else this.prevGamepad=!0,this.leftRight=n}catch{}}keyDown(t){switch(this.prevGamepad=!1,t.code){case"KeyA":case"ArrowLeft":this.leftRight=-1;break;case"KeyD":case"ArrowRight":this.leftRight=1;break;case"KeyW":case"ArrowUp":this.upDown=1;break;case"KeyS":case"ArrowDown":this.upDown=-1;break;case"Space":this.jumpHoldStart===null&&(this.jumpHoldStart=Date.now()/1e3);break}}keyUp(t){switch(this.prevGamepad=!1,t.code){case"KeyA":case"ArrowLeft":this.leftRight===-1&&(this.leftRight=0);break;case"KeyD":case"ArrowRight":this.leftRight===1&&(this.leftRight=0);break;case"KeyS":case"ArrowDown":this.upDown===-1&&(this.upDown=0);break;case"KeyW":case"ArrowUp":this.upDown===1&&(this.upDown=0);break;case"Space":this.jumpHoldStart=null;break}}}const er=new v_;let Ti;function g_(){return Ti=new Ie.World,Ti.gravity.set(0,-9.82,0),Ti}const __=.4,y_=.2,x_=4e4,M_=.5,S_=.075,bs=16,Wh=3e4*2,Xh=6e3,E_=Wh*2,w_=Xh*2*16*8;class T_{constructor(t,e,n,i){Xt(this,"obj3D",new Ee);Xt(this,"carBody");Xt(this,"frozen",!1);Xt(this,"oldForward",new W(0,0,-1));Xt(this,"closestBodies",[]);Xt(this,"oldCloseTerrain",[]);Xt(this,"oldVelocity",0);Xt(this,"rotation",0);this.carBody=n,i=i.clone(),i.rotation.z=Math.PI/2,i.scale.copy(new W(.5,.5,.5)),this.obj3D.attach(i),this.obj3D.position.copy(t),e.attach(this.obj3D)}fixedUpdate(t){if(this.frozen||t<=0)return;const e=this.getWorldPos(),n=this.getWorldVel(e);this.handleCloseTerrain(e),this.handleSteering(),this.obj3D.children.length&&(this.obj3D.children[0].position.y=0);const i=this.getSpokeHitResult(e,n);this.updateRotation(i.haveContact,n,t),this.handleGas(e,i),i.haveContact&&(this.handleBumping(n,e,i.totalOffsetVec),this.handelSupport(e,n,i),this.handleFriction(t,e,n))}handleCloseTerrain(t){this.oldCloseTerrain.forEach(n=>{n.body&&(Ti.removeBody(n.body),n.body=void 0)});const e=Me.closestSquares(t);this.closestBodies=[],this.oldCloseTerrain=e,e.forEach(n=>{if(n.body){this.closestBodies.push(n.body);return}const i=A_(n.dim,n.pos);n.body=i,Ti.addBody(i),this.closestBodies.push(i)})}updateRotation(t,e,n){const i=this.obj3D.children[0];if(!i)return;const r=this.oldVelocity;if(t){const h=this.getForwardDir(),u=i_(e);var o=Math.sign(u.dot(h));const c=o*e.norm();this.oldVelocity=c}const l=r*n/(Math.PI*Qn);this.rotation+=l,this.rotation=this.rotation%(Math.PI*2),i.rotation.x=-this.rotation*Math.PI}getSpokeHitResult(t,e){const n=[],i=this.getForwardDir();let r=this.getDir(Rs),o=r.clone();o.y=0,o.length()>.05&&(r=o.normalize());const a=new W;let l=i.clone().multiplyScalar(-1),h=i.clone();for(let c=0;c<bs;c++){let d=c*Math.PI/bs*2;const f=i.clone().applyAxisAngle(r,d),v=this.rayCast(t,Qi(f.clone().multiplyScalar(Qn)));if(v===-1)continue;f.dot(i)>l.dot(i)&&(l=f.clone()),f.dot(i)<h.dot(i)&&(h=f.clone());var u=Qn-v;const g=f.clone().multiplyScalar(-u);n.push(g),a.add(g)}return{offsetVecs:n,totalOffsetVec:a,mostForward:l,mostBackward:h,haveContact:!!n.length}}handleBumping(t,e,n){const i=n.clone();if(i.y=0,i.length()/bs<.05)return;i.normalize();const r=i,o=Math.abs(r.dot(t));let a=Math.abs(n.dot(r))*E_-o*w_;a=Math.max(0,a)/bs,this.carBody.applyForce(Qi(r).mult(a*1),e)}getForwardDir(){const t=this.getDir(Rs),e=new W(0,1,0).applyAxisAngle(t,-Math.PI/2);return e.y=0,e.length()<.05?this.oldForward.clone():(e.normalize(),this.oldForward=e,e)}getDir(t){const e=new En;this.obj3D.getWorldQuaternion(e);const n=t.clone();return n.applyQuaternion(e),n}handleFriction(t,e,n){const i=Qi(this.getDir(Rs));i.y=0,i.normalize();const a=-i.dot(n)*y_/t,l=Ph*.25*a,h=i.clone().mult(l),u=e.clone();u.y-=Qn*S_,this.carBody.applyForce(h,u)}handleSteering(){let t=1;this.obj3D.position.z<0&&(t=-1),this.obj3D.rotation.y=er.leftRight*__*t}handleGas(t,e){if(e.haveContact){const n=this.getDir(Rs),i=er.upDown>=0?e.mostForward:e.mostBackward,r=i.clone().applyAxisAngle(n,Math.PI/2),o=Qi(r),a=x_*.25*er.upDown,l=o.clone().mult(a),h=t.vadd(Qi(i).mult(Qn*M_));this.carBody.applyForce(l,h)}else{const n=er.upDown*30;(Math.abs(n)>Math.abs(this.oldVelocity)||Math.sign(n*this.oldVelocity)==-1)&&(this.oldVelocity=n);return}}handelSupport(t,e,n){const i=this.getUpOffest(n);if(this.obj3D.children.length){const l=new W(0,1,0);this.obj3D.children[0].position.y=i,this.getDir(l).y<0&&(this.obj3D.children[0].position.y=-i)}const o=new Ie.Vec3(0,1,0).dot(e);let a=i*Wh-o*Xh;a=Math.max(0,a),this.carBody.applyForce(new Ie.Vec3(0,a,0),t)}getUpOffest(t){let e=0;const n=new W(0,1,0);for(let i of t.offsetVecs)e+=n.dot(i);return e/=t.offsetVecs.length,e}getWorldPos(){const t=new W;return this.obj3D.getWorldPosition(t),Qi(t)}getWorldVel(t){const e=new Ie.Vec3;return this.carBody.getVelocityAtWorldPoint(t,e),e}rayCast(t,e){const n=t.clone().vadd(e),i=new Ie.Ray(t,n);i.checkCollisionResponse=!1,i.skipBackfaces=!0,i.mode=Ie.Ray.CLOSEST;const r=new Ie.RaycastResult;return i.intersectBodies(this.closestBodies,r),r.distance}rayCastDown(t){return this.rayCast(t,new Ie.Vec3(0,-Qn,0))}}const Rs=new W(1,0,0),Tc=new Ie.Material("terr material");function A_(s,t){const e=new Ie.Box(new Ie.Vec3(s.x/2,s.y/2,s.z/2));Tc.friction=Lh;const n=new Ie.Body({mass:0,type:Ie.Body.STATIC,shape:e,material:Tc});return n.position.x=t.x,n.position.y=t.y,n.position.z=t.z,n}function Ac(s,t){if(t===$u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Ko||t===Qc){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Ko)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class b_ extends yr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new I_(e)}),this.register(function(e){return new N_(e)}),this.register(function(e){return new k_(e)}),this.register(function(e){return new G_(e)}),this.register(function(e){return new W_(e)}),this.register(function(e){return new U_(e)}),this.register(function(e){return new F_(e)}),this.register(function(e){return new B_(e)}),this.register(function(e){return new O_(e)}),this.register(function(e){return new L_(e)}),this.register(function(e){return new z_(e)}),this.register(function(e){return new D_(e)}),this.register(function(e){return new H_(e)}),this.register(function(e){return new V_(e)}),this.register(function(e){return new C_(e)}),this.register(function(e){return new X_(e)}),this.register(function(e){return new q_(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const h=Or.extractUrlBase(t);o=Or.resolveURL(h,this.path)}else o=Or.extractUrlBase(t);this.manager.itemStart(t);const a=function(h){i?i(h):console.error(h),r.manager.itemError(t),r.manager.itemEnd(t)},l=new bh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(h){try{r.parse(h,o,function(u){e(u),r.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===qh){try{o[ae.KHR_BINARY_GLTF]=new Y_(t)}catch(c){i&&i(c);return}r=JSON.parse(o[ae.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new oy(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const c=this.pluginCallbacks[u](h);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[c.name]=c,o[c.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const c=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(c){case ae.KHR_MATERIALS_UNLIT:o[c]=new P_;break;case ae.KHR_DRACO_MESH_COMPRESSION:o[c]=new j_(r,this.dracoLoader);break;case ae.KHR_TEXTURE_TRANSFORM:o[c]=new K_;break;case ae.KHR_MESH_QUANTIZATION:o[c]=new Z_;break;default:d.indexOf(c)>=0&&a[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}h.setExtensions(o),h.setPlugins(a),h.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function R_(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const ae={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class C_{constructor(t){this.parser=t,this.name=ae.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let h;const u=new Kt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],We);const c=l.range!==void 0?l.range:0;switch(l.type){case"directional":h=new Rh(u),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new r0(u),h.distance=c;break;case"spot":h=new n0(u),h.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,h.angle=l.spot.outerConeAngle,h.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return h.position.set(0,0,0),h.decay=2,Jn(h,l),l.intensity!==void 0&&(h.intensity=l.intensity),h.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(h),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class P_{constructor(){this.name=ae.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(t,e,n){const i=[];t.color=new Kt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],We),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ye))}return Promise.all(i)}}class L_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class I_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new te(a,a)}return Promise.all(r)}}class N_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class D_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class U_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Kt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],We)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ye)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class F_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class B_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Kt().setRGB(a[0],a[1],a[2],We),Promise.all(r)}}class O_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class z_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Kt().setRGB(a[0],a[1],a[2],We),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ye)),Promise.all(r)}}class V_{constructor(t){this.parser=t,this.name=ae.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class H_{constructor(t){this.parser=t,this.name=ae.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class k_{constructor(t){this.parser=t,this.name=ae.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class G_{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class W_{constructor(t){this.parser=t,this.name=ae.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(l=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class X_{constructor(t){this.name=ae.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,h=i.byteLength||0,u=i.count,c=i.byteStride,d=new Uint8Array(a,l,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,c,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*c);return o.decodeGltfBuffer(new Uint8Array(f),u,c,d,i.mode,i.filter),f})})}else return null}}class q_{constructor(t){this.name=ae.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==cn.TRIANGLES&&h.mode!==cn.TRIANGLE_STRIP&&h.mode!==cn.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const h in o)a.push(this.parser.getDependency("accessor",o[h]).then(u=>(l[h]=u,l[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(h=>{const u=h.pop(),c=u.isGroup?u.children:[u],d=h[0].count,f=[];for(const v of c){const g=new ie,m=new W,p=new En,_=new W(1,1,1),x=new Eh(v.geometry,v.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,g.compose(m,p,_));for(const y in l)if(y==="_COLOR_0"){const T=l[y];x.instanceColor=new Qo(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&v.geometry.setAttribute(y,l[y]);Ee.prototype.copy.call(x,v),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const qh="glTF",Ir=12,bc={JSON:1313821514,BIN:5130562};class Y_{constructor(t){this.name=ae.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ir),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ir,r=new DataView(t,Ir);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===bc.JSON){const h=new Uint8Array(t,Ir+o,a);this.content=n.decode(h)}else if(l===bc.BIN){const h=Ir+o;this.body=t.slice(h,h+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class j_{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ae.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},h={};for(const u in o){const c=ta[u]||u.toLowerCase();a[c]=o[u]}for(const u in t.attributes){const c=ta[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[t.attributes[u]],f=sr[d.componentType];h[c]=f.name,l[c]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(c,d){i.decodeDracoFile(u,function(f){for(const v in f.attributes){const g=f.attributes[v],m=l[v];m!==void 0&&(g.normalized=m)}c(f)},a,h,We,d)})})}}class K_{constructor(){this.name=ae.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Z_{constructor(){this.name=ae.KHR_MESH_QUANTIZATION}}class Yh extends Yr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,h=a*3,u=i-e,c=(n-e)/u,d=c*c,f=d*c,v=t*h,g=v-h,m=-2*f+3*d,p=f-d,_=1-m,x=p-d+c;for(let y=0;y!==a;y++){const T=o[g+y+a],b=o[g+y+l]*u,I=o[v+y+a],D=o[v+y]*u;r[y]=_*T+x*b+m*I+p*D}return r}}const $_=new En;class Q_ extends Yh{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return $_.fromArray(r).normalize().toArray(r),r}}const cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rc={9728:ke,9729:an,9984:Gc,9985:Is,9986:Dr,9987:Vn},Cc={33071:ni,33648:Us,10497:lr},Ho={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ta={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},J_={CUBICSPLINE:void 0,LINEAR:hr,STEP:Vr},ko={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ty(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Gr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),s.DefaultMaterial}function gi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Jn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ey(s,t,e){let n=!1,i=!1,r=!1;for(let h=0,u=t.length;h<u;h++){const c=t[h];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),c.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let h=0,u=t.length;h<u;h++){const c=t[h];if(n){const d=c.POSITION!==void 0?e.getDependency("accessor",c.POSITION):s.attributes.position;o.push(d)}if(i){const d=c.NORMAL!==void 0?e.getDependency("accessor",c.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=c.COLOR_0!==void 0?e.getDependency("accessor",c.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(h){const u=h[0],c=h[1],d=h[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=c),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function ny(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iy(s){let t;const e=s.extensions&&s.extensions[ae.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Go(e.attributes):t=s.indices+":"+Go(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Go(s.targets[n]);return t}function Go(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function ea(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ry(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const sy=new ie;class oy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new R_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new _a(this.options.manager):this.textureLoader=new a0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return gi(r,a,i),Jn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[h,u]of o.children.entries())r(u,a.children[h])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ae.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Or.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ho[i.type],a=sr[i.componentType],l=i.normalized===!0,h=new a(i.count*o);return Promise.resolve(new tn(h,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ho[i.type],h=sr[i.componentType],u=h.BYTES_PER_ELEMENT,c=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,m;if(f&&f!==c){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=e.cache.get(_);x||(g=new h(a,p*f,i.count*f/u),x=new _h(g,f/u),e.cache.add(_,x)),m=new kr(x,l,d%f/u,v)}else a===null?g=new h(i.count*l):g=new h(a,d,i.count*l),m=new tn(g,l,v);if(i.sparse!==void 0){const p=Ho.SCALAR,_=sr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new _(o[1],x,i.sparse.count*p),b=new h(o[2],y,i.sparse.count*l);a!==null&&(m=new tn(m.array.slice(),m.itemSize,m.normalized));for(let I=0,D=T.length;I<D;I++){const E=T[I];if(m.setX(E,b[I*l]),l>=2&&m.setY(E,b[I*l+1]),l>=3&&m.setZ(E,b[I*l+2]),l>=4&&m.setW(E,b[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const h=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Rc[d.magFilter]||an,u.minFilter=Rc[d.minFilter]||Vn,u.wrapS=Cc[d.wrapS]||lr,u.wrapT=Cc[d.wrapT]||lr,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(c=>c.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",h=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(c){h=!0;const d=new Blob([c],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(c){return new Promise(function(d,f){let v=d;e.isImageBitmapLoader===!0&&(v=function(g){const m=new Oe(g);m.needsUpdate=!0,d(m)}),e.load(Or.resolveURL(c,r.path),v,void 0,f)})}).then(function(c){return h===!0&&a.revokeObjectURL(l),c.userData.mimeType=o.mimeType||ry(o.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ae.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ae.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ae.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new wh,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new pa,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Gr}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},h=[];if(l[ae.KHR_MATERIALS_UNLIT]){const c=i[ae.KHR_MATERIALS_UNLIT];o=c.getMaterialType(),h.push(c.extendParams(a,r,e))}else{const c=r.pbrMetallicRoughness||{};if(a.color=new Kt(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){const d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],We),a.opacity=d[3]}c.baseColorTexture!==void 0&&h.push(e.assignTexture(a,"map",c.baseColorTexture,Ye)),a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(h.push(e.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),h.push(e.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),h.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=_n);const u=r.alphaMode||ko.OPAQUE;if(u===ko.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ko.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ii&&(h.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){const c=r.normalTexture.scale;a.normalScale.set(c,c)}if(r.occlusionTexture!==void 0&&o!==ii&&(h.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ii){const c=r.emissiveFactor;a.emissive=new Kt().setRGB(c[0],c[1],c[2],We)}return r.emissiveTexture!==void 0&&o!==ii&&h.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Ye)),Promise.all(h).then(function(){const c=new o(a);return r.name&&(c.name=r.name),Jn(c,r),e.associations.set(c,{materials:t}),r.extensions&&gi(i,c,r),c})}createUniqueName(t){const e=_e.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ae.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Pc(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const h=t[a],u=iy(h),c=i[u];if(c)o.push(c.promise);else{let d;h.extensions&&h.extensions[ae.KHR_DRACO_MESH_COMPRESSION]?d=r(h):d=Pc(new fn,h,e),i[u]={primitive:h,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,h=o.length;l<h;l++){const u=o[l].material===void 0?ty(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],c=[];for(let f=0,v=u.length;f<v;f++){const g=u[f],m=o[f];let p;const _=h[f];if(m.mode===cn.TRIANGLES||m.mode===cn.TRIANGLE_STRIP||m.mode===cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Fg(g,_):new Ge(g,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===cn.TRIANGLE_STRIP?p.geometry=Ac(p.geometry,Qc):m.mode===cn.TRIANGLE_FAN&&(p.geometry=Ac(p.geometry,Ko));else if(m.mode===cn.LINES)p=new zg(g,_);else if(m.mode===cn.LINE_STRIP)p=new ma(g,_);else if(m.mode===cn.LINE_LOOP)p=new Vg(g,_);else if(m.mode===cn.POINTS)p=new Hg(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ny(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Jn(p,r),m.extensions&&gi(i,p,m),e.assignFinalMaterial(p),c.push(p)}for(let f=0,v=c.length;f<v;f++)e.associations.set(c[f],{meshes:t,primitives:f});if(c.length===1)return r.extensions&&gi(i,c[0],r),c[0];const d=new Ei;r.extensions&&gi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,v=c.length;f<v;f++)d.add(c[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Qe(wd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new ca(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Jn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let h=0,u=o.length;h<u;h++){const c=o[h];if(c){a.push(c);const d=new ie;r!==null&&d.fromArray(r.array,h*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[h])}return new fa(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],h=[],u=[];for(let c=0,d=i.channels.length;c<d;c++){const f=i.channels[c],v=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[v.input]:v.input,_=i.parameters!==void 0?i.parameters[v.output]:v.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),h.push(v),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(h),Promise.all(u)]).then(function(c){const d=c[0],f=c[1],v=c[2],g=c[3],m=c[4],p=[];for(let _=0,x=d.length;_<x;_++){const y=d[_],T=f[_],b=v[_],I=g[_],D=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const E=n._createAnimationTracks(y,T,b,I,D);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new jg(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,h=i.weights.length;l<h;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let h=0,u=a.length;h<u;h++)o.push(n.getDependency("node",a[h]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(h){const u=h[0],c=h[1],d=h[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,sy)});for(let f=0,v=c.length;f<v;f++)u.add(c[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){a.push(h)}),this.nodeCache[t]=Promise.all(a).then(function(h){let u;if(r.isBone===!0?u=new Mh:h.length>1?u=new Ei:h.length===1?u=h[0]:u=new Ee,u!==h[0])for(let c=0,d=h.length;c<d;c++)u.add(h[c]);if(r.name&&(u.userData.name=r.name,u.name=o),Jn(u,r),r.extensions&&gi(n,u,r),r.matrix!==void 0){const c=new ie;c.fromArray(r.matrix),u.applyMatrix4(c)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Ei;n.name&&(r.name=i.createUniqueName(n.name)),Jn(r,n),n.extensions&&gi(e,r,n);const o=n.nodes||[],a=[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,c=l.length;u<c;u++)r.add(l[u]);const h=u=>{const c=new Map;for(const[d,f]of i.associations)(d instanceof hn||d instanceof Oe)&&c.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&c.set(d,f)}),c};return i.associations=h(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];$n[r.path]===$n.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let h;switch($n[r.path]){case $n.weights:h=fr;break;case $n.rotation:h=bi;break;case $n.position:case $n.scale:h=pr;break;default:switch(n.itemSize){case 1:h=fr;break;case 2:case 3:default:h=pr;break}break}const u=i.interpolation!==void 0?J_[i.interpolation]:hr,c=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const v=new h(l[d]+"."+$n[r.path],e.array,c,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=ea(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof bi?Q_:Yh;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ay(s,t,e){const n=t.attributes,i=new Wn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,h=a.max;if(l!==void 0&&h!==void 0){if(i.set(new W(l[0],l[1],l[2]),new W(h[0],h[1],h[2])),a.normalized){const u=ea(sr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new W,l=new W;for(let h=0,u=r.length;h<u;h++){const c=r[h];if(c.POSITION!==void 0){const d=e.json.accessors[c.POSITION],f=d.min,v=d.max;if(f!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),d.normalized){const g=ea(sr[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Cn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Pc(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=ta[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return fe.workingColorSpace!==We&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${fe.workingColorSpace}" not supported.`),Jn(s,t),ay(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?ey(s,t.targets,e):s})}const ly=""+new URL("truckWithoutWheels-DBph6hH8.glb",import.meta.url).href,cy=""+new URL("wheel-BiNbC63B.glb",import.meta.url).href,hy=""+new URL("Evacodemon_one_red-DjzKGJ3Z.png",import.meta.url).href,Lc="FinishTimes";class uy{submit(t,e){const n=this.readTimes(),i=n[t]===void 0,r=e<n[t];if(i||r){n[t]=e;const o=JSON.stringify(n);localStorage.setItem(Lc,o)}}readTimes(){const t=localStorage.getItem(Lc);return t===null?{}:JSON.parse(t)}}const jh=new uy;Array.prototype.findLastIndex||(Array.prototype.findLastIndex=function(s,t){for(let e=this.length-1;e>=0;e--)if(s.call(t,this[e],e,this))return e;return-1});const Nr=3;class dy{constructor(){Xt(this,"screenDiv");Xt(this,"cardContainer");Xt(this,"cardTemplate");Xt(this,"active",!1);this.screenDiv=document.querySelector("#level-select-screen"),this.cardContainer=document.querySelector("#level-card-container"),this.cardTemplate=document.querySelector("#level-card-template")}activate(){this.active=!0,this.screenDiv.classList.add("visible"),this.cardContainer.innerHTML="";const t=jh.readTimes();this.fillInTotals(t);let e=Tn.findLastIndex(r=>t[r.id]!==void 0),n=Nr-1;e!==-1&&(n=Math.ceil((e+1)/Nr)*Nr+Nr-1),n=Math.min(n,Tn.length-1);const i=Math.min(n+Nr,Tn.length-1);for(let r=0;r<=i;r++)this.addCard(r,t,r>n)}fillInTotals(t){const e=document.querySelector("#total-finished"),n=document.querySelector("#total-under-strive-time"),i=Tn.reduce((o,a)=>{let l=0;return t[a.id]!==void 0&&l++,o+l},0),r=Tn.reduce((o,a)=>{let l=0;return t[a.id]<gc&&l++,o+l},0);e.innerText=i.toString(),n.innerText=r.toString()}addCard(t,e,n){const i=this.cardTemplate.content.cloneNode(!0),r=i.querySelector(".level-index");let o=n?"🔒︎":(t+1).toString();r.innerText=o,this.fillInTime(Tn[t],i,e),e[Tn[t].id]!==void 0&&i.querySelector(".level-card").classList.add("completed"),this.cardContainer.appendChild(i),!n&&(this.cardContainer.lastElementChild.onclick=()=>{n_(Tn[t]),this.active=!1,this.screenDiv.classList.remove("visible"),window.dispatchEvent(Nh)})}fillInTime(t,e,n){const i=n[t.id];if(i===void 0)return;const r=e.querySelector(".level-time");r.innerText=zh(i),i<gc&&e.querySelector(".under-1min").classList.add("visible")}}const Ci=new dy;class fy{constructor(){Xt(this,"containerDiv");Xt(this,"retryButton");Xt(this,"levelSelectButton");Xt(this,"active",!1);this.containerDiv=document.querySelector("#game-over-modal"),this.retryButton=document.querySelector("#retry-button"),this.retryButton.onclick=()=>{this.active=!1,this.containerDiv.style.display="none",window.dispatchEvent(Nh)},this.levelSelectButton=document.querySelector("#game-over-level-select-button"),this.levelSelectButton.onclick=()=>{Ci.activate(),this.active=!1,this.containerDiv.style.display="none"}}activate(t){console.log("Game Over: "+t),this.active=!0,this.containerDiv.style.display="grid"}}const wa=new fy,py=5,jr=Ih/2,my=jr**2,vy=3**2,gy=3,_y=4,Ic=.025;class yy{constructor(t){Xt(this,"position");Xt(this,"sprite");Xt(this,"dead",!1);const e=new _a().load(hy),n=new da({map:e});this.sprite=new xh(n),e.magFilter=ke,this.sprite.scale.copy(new W(1,1,1).multiplyScalar(py)),this.sprite.position.copy(t),gn.add(this.sprite),this.position=this.sprite.position,this.position.y=this.targetYPos()}fixedUpdate(t,e){if(this.dead)return;const n=e.clone().sub(this.position),i=n.lengthSq();if(i>my||(i<vy&&wa.activate("got by demon"),e.z<=this.position.z))return;let o=n.clone().normalize().clone().multiplyScalar(t*gy);o.length()>n.length()&&(o=n.clone()),this.position.add(o),this.position.y=this.position.y*(1-Ic)+this.targetYPos()*Ic}tryExplode(t,e){e=new W(e.x,0,e.z);const n=this.position.clone();n.y=0,n.sub(e).lengthSq()<t.EXPLOSION_RADIUS*t.EXPLOSION_RADIUS&&(this.dead=!0,this.sprite.removeFromParent())}targetYPos(){const t=Me.closestSquares(this.position,Me.squareDim/2*1.45);return t.length?t[0].top()+_y:this.position.y}}function xy(s,t,e){return(1-e)*s+e*t}const Nc=1.125,My=1,Sy=.75;class Ey{constructor(t){Xt(this,"startTime");Xt(this,"obj3D");Xt(this,"EXPLOSION_RADIUS");this.startTime=1/0,this.EXPLOSION_RADIUS=jr+Me.squareDim/2*1.42*1.05;const e=new va(1),n=new ii({transparent:!0,color:new Kt("yellow"),opacity:Sy}),i=new Ge(e,n);i.scale.set(.001,.001,.001),t.attach(i),this.obj3D=i}restart(){this.startTime=Date.now()/1e3}visualUpdate(t){const e=Date.now()/1e3-this.startTime;let n=.001;e<Nc&&(n=xy(My,this.EXPLOSION_RADIUS,e/Nc)),this.obj3D.scale.set(n,n,n)}}class wy{constructor(t,e,n){Xt(this,"body");Xt(this,"obj3D");Xt(this,"wheels");Xt(this,"explosion");Xt(this,"frozen",!1);Xt(this,"timeStartedMovingSec");this.body=this.makeBody(t),this.obj3D=this.makeObj3D(e),this.wheels=this.makeWheels(n),this.explosion=new Ey(this.obj3D)}makeObj3D(t){const e=new ga({color:1118481}),n=new Ri(An.x-1.8,.1,An.z),i=-.125,r=new Ge(n,e);r.castShadow=!0,r.receiveShadow=!0;const o=new Ee;return r.position.y=-.05+i,o.attach(r),t.position.y=-.5+i,t.rotation.y=Math.PI,t.position.z=.2,o.attach(t),gn.add(o),o}fixedUpdate(t){this.frozen||(this.timeStartedMovingSec===void 0&&er.upDown!==0&&(this.timeStartedMovingSec=Date.now()/1e3),this.wheels.forEach(e=>e.fixedUpdate(t)),this.copyBodyPositionToObj3D(),this.explosion.visualUpdate(t))}makeWheels(t){const e=[[-1,1],[1,1],[-1,-1],[1,-1]],n=[];for(let i of e){const r=new W(i[0]*An.x/2,0,i[1]*An.z/2);n.push(new T_(r,this.obj3D,this.body,t))}return n}makeBody(t){const e=new Ie.Box(new Ie.Vec3(An.x/2,An.y/20,An.z/2+.1)),n=new Ie.Material("car body material");n.friction=Lh;const i=new Ie.Body({mass:Ph,material:n});return i.addShape(e),i.position.x=t.x,i.position.y=t.y+Qn+.1,i.position.z=t.z,Ti.addBody(i),i.angularDamping=y0,i.linearDamping=x0,i}copyBodyPositionToObj3D(){this.obj3D.position.set(this.body.position.x,this.body.position.y,this.body.position.z),this.obj3D.quaternion.set(this.body.quaternion.x,this.body.quaternion.y,this.body.quaternion.z,this.body.quaternion.w),this.obj3D.updateMatrixWorld()}}let Cs,Ps;const Dc=new b_;async function Ty(s){if(!Cs){Cs=await Dc.loadAsync(ly);const t=new Gr({color:16777215,metalness:.1,roughness:.8,side:_n});Cs.scene.traverse(function(e){e instanceof Ge&&(t.map=e.material.map,e.material=t,e.castShadow=!0,e.receiveShadow=!0)})}if(!Ps){Ps=await Dc.loadAsync(cy);const t=new Gr({color:9474192,metalness:.4,roughness:.63});Ps.scene.traverse(function(e){e instanceof Ge&&(e.castShadow=!0,e.receiveShadow=!0,e.name==="Cylinder001"?e.material=new ga({color:2631720}):e.material=t)})}return new wy(s,Cs.scene.clone(),Ps.scene.clone())}const Uc=.5;class Ay{constructor(){Xt(this,"div");Xt(this,"active",!1);this.div=document.querySelector("#wrong-way")}update(t){t.z>Uc&&!this.active?(this.active=!0,this.div.classList.add("visible")):t.z<=Uc&&this.active&&(this.active=!1,this.div.classList.remove("visible"))}}const by=new Ay;let xi;function Ry(s){xi||(xi=Bc(s));const t=Bc(s),e=.1;xi=t.multiplyScalar(e).add(xi.multiplyScalar(1-e)).normalize();const n=-12.5,i=new W(0,6.5,0);ei.position.copy(s.obj3D.position.clone().add(xi.clone().multiplyScalar(n)).add(i));const r=s.obj3D.position.clone();r.y+=2,ei.lookAt(r),by.update(xi)}let Fc=new W(0,0,-1);function Bc(s){const t=new W(1,0,0),e=new En;s.obj3D.getWorldQuaternion(e);const n=t.clone();n.applyQuaternion(e),n.y=0;const i=new W(0,1,0).applyAxisAngle(n,-Math.PI/2);return i.y=0,i.length()<.05?Fc.clone():(i.normalize(),Fc=i,i)}function Cy(){xi=void 0}const Py=""+new URL("bomb_one-PsRsFKBg.png",import.meta.url).href,Ly=4,Iy=1.95,Ny=An.z*1.77**2;class Dy{constructor(t){Xt(this,"position");Xt(this,"exploded",!1);Xt(this,"sprite");const e=new _a().load(Py);e.colorSpace=Ye;const n=new da({map:e});this.sprite=new xh(n),e.magFilter=ke,this.sprite.scale.copy(new W(1,1,1).multiplyScalar(Ly)),this.sprite.position.copy(t),gn.add(this.sprite),this.position=this.sprite.position,this.position.y=this.targetYPos()}fixedUpdate(t,e,n){if(this.exploded)return;const i=e.x-this.position.x,r=e.z-this.position.z;i*i+r*r<=Ny&&(n.forEach(a=>a.tryExplode(t.explosion,this.position)),t.explosion.restart(),this.exploded=!0,this.sprite.removeFromParent())}targetYPos(){const t=Me.closestSquares(this.position,Me.squareDim/2*1.45);return t.length?t[0].top()+Iy:this.position.y}}const Uy=jr*.5,Fy=jr,Oc=Math.PI/3;function By(){const s=Me.terrainArr,t=[],e=[];if(s.length===0)return{demons:t,bombs:e};const n=s.length*s[0].length,i=Math.round(jr/Me.squareDim*1.25),r=Me.maxZIndex;if(i>r)return{demons:t,bombs:e};const o=kn("demon_density_"+Ne.id),a=Gs(0,U0*Me.squareDim**2,o),l=Math.round(n*a);console.log(`Num demons: ${l}`);const h=kn("demons_"+Ne.id),u=kn("bombs_"+Ne.id);for(let c=0;c<l;c++){const d=ks(0,s[0].length-1,h),f=ks(i,r,h),v=s[f][d].pos.clone(),g=new yy(v);t.push(g);const m=Oy(d,f,u);e.push(m)}return{demons:t,bombs:e}}function Oy(s,t,e){const n=Uy/Me.squareDim,i=Fy/Me.squareDim,r=Gs(n,i,e),o=Gs(-Oc,Oc,e),a=Math.floor(r*Math.cos(o)),l=Math.floor(r*Math.sin(o)),h=Math.max(t-a,0);let u=s+l;return u>=Me.terrainArr[0].length&&(u=Me.terrainArr[0].length-1-l),u=Math.max(0,u),new Dy(Me.terrainArr[h][u].pos)}class zy{constructor(){Xt(this,"modalDiv");Xt(this,"timeDiv");Xt(this,"levelSelectButton");Xt(this,"active",!1);this.modalDiv=document.querySelector("#finished-modal"),this.timeDiv=document.querySelector("#finished-time-value"),this.levelSelectButton=document.querySelector("#level-select-button"),this.levelSelectButton.onclick=()=>{this.modalDiv.style.display="none",Ci.activate(),this.active=!1}}activate(t){jh.submit(Ne.id,t),this.active=!0,this.modalDiv.style.display="grid",this.timeDiv.innerText=zh(t)}}const Kh=new zy;var Ji=1/60,Zh=3;let on,na=[],$h=[],Qh;const zc=document.querySelector("#spinner-wrapper");document.querySelector("#fullscreen-button").onclick=()=>{document.fullscreenElement===null?document.body.requestFullscreen():document.exitFullscreen()};async function Qs(){cancelAnimationFrame(Qh),Ci.active||history.pushState({screen:"gameplay"},""),zc.classList.remove("hidden"),console.log(`Starting level ${Ne.id}`),kh(),g_(),c_(),{demons:na,bombs:$h}=By(),await Vy(),Cy(),zc.classList.add("hidden"),requestAnimationFrame(Jh)}async function Vy(){const s=new Ie.Vec3(Me.squareDim/2,64,-An.z/2-.5),t=Me.closestSquares(new W(0,0,0),Me.squareDim/2*1.45);t.length&&(s.y=t[0].top()+.05),on=await Ty(s),on.fixedUpdate(0)}let Ls,Wo=0;function Jh(s){if(Ci.active)return;if(Qh=requestAnimationFrame(Jh),Ls===void 0){Ls=s;return}let t=(s-Ls)/1e3;Ls=s,t=Math.min(t,Ji*Zh),!wa.active&&!Kh.active&&Hy(t),ai.render(gn,ei)}function Hy(s){s_||er.handleGamepads(),Wo+=s;let t=0;for(;Wo>=Ji&&t<Zh;)on.fixedUpdate(Ji),Ti.step(Ji),$h.forEach(e=>e.fixedUpdate(on,on.obj3D.position,na)),na.forEach(e=>e.fixedUpdate(Ji,on.obj3D.position)),ky(),Wo-=Ji,t++;on.obj3D.position.y<Me.minHeight-10&&wa.activate("fell outside map"),Ry(on),He.target.position.copy(on.obj3D.position),He.position.copy(on.obj3D.position.clone().add(new W(-1,3,.25))),f_(on.obj3D.position)}function ky(){const s=on.obj3D.position,t=Me.terrainArr[0][0].pos.x-Me.squareDim/2,e=Me.terrainArr[0][Me.terrainArr[0].length-1].pos.x+Me.squareDim/2;if(s.z<=Me.finishZ&&s.x>t&&s.x<e){let n=on.timeStartedMovingSec;n===void 0&&(n=-1/0),Kh.activate(Date.now()/1e3-n)}}document.onkeydown=s=>{s.code==="Escape"&&Ci.activate(),s.code==="KeyR"&&Qs()};document.querySelector("#restart-button").onclick=()=>{Qs()};Vh||(document.querySelector("#touch-controls").style.display="none");window.addEventListener("restartplay",()=>{Qs()});window.onpopstate=()=>{Ci.activate()};Ci.activate();Qs();

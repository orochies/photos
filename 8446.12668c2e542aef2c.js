"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8446],{8446:(w,p,u)=>{u.r(p),u.d(p,{CameraPreviewWeb:()=>f});var a=u(5861),v=u(2726);class f extends v.Uw{constructor(){super({name:"CameraPreview",platforms:["web"]})}start(e){var r=this;return(0,a.Z)(function*(){var i;return new Promise(function(d,n){return(i=i||(0,a.Z)(function*(o,s){yield navigator.mediaDevices.getUserMedia({audio:!e.disableAudio,video:!0}).then(t=>{t.getTracks().forEach(l=>l.stop())}).catch(t=>{s(t)});const c=document.getElementById("video"),g=document.getElementById(e.parent);if(c)s({message:"camera already started"});else{const t=document.createElement("video");t.id="video",t.setAttribute("class",e.className||""),"rear"!==e.position&&t.setAttribute("style","-webkit-transform: scaleX(-1); transform: scaleX(-1);");const l=navigator.userAgent.toLowerCase();if(l.includes("safari")&&!l.includes("chrome")&&(t.setAttribute("autoplay","true"),t.setAttribute("muted","true"),t.setAttribute("playsinline","true")),g.appendChild(t),navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){const h={video:{width:{ideal:e.width},height:{ideal:e.height}}};"rear"===e.position?(h.video.facingMode="environment",r.isBackCamera=!0):r.isBackCamera=!1,navigator.mediaDevices.getUserMedia(h).then(function(m){t.srcObject=m,t.play(),o({})},m=>{s(m)})}}})).apply(this,arguments)})})()}startRecordVideo(){var e=this;return(0,a.Z)(function*(){throw e.unimplemented("Not implemented on web.")})()}stopRecordVideo(){var e=this;return(0,a.Z)(function*(){throw e.unimplemented("Not implemented on web.")})()}stop(){return(0,a.Z)(function*(){const e=document.getElementById("video");if(e){e.pause();const i=e.srcObject.getTracks();for(let d=0;d<i.length;d++)i[d].stop();e.remove()}})()}capture(e){var r=this;return(0,a.Z)(function*(){return new Promise((i,d)=>{const n=document.getElementById("video"),o=document.createElement("canvas"),s=o.getContext("2d");let c;o.width=n.videoWidth,o.height=n.videoHeight,r.isBackCamera||(s.translate(n.videoWidth,0),s.scale(-1,1)),s.drawImage(n,0,0,n.videoWidth,n.videoHeight),c=null!=e.quality?o.toDataURL("image/jpeg",e.quality/100).replace("data:image/jpeg;base64,",""):o.toDataURL("image/png").replace("data:image/png;base64,",""),i({value:c})})})()}captureSample(e){var r=this;return(0,a.Z)(function*(){return r.capture(e)})()}getSupportedFlashModes(){return(0,a.Z)(function*(){throw new Error("getSupportedFlashModes not supported under the web platform")})()}setFlashMode(e){return(0,a.Z)(function*(){throw new Error("setFlashMode not supported under the web platform")})()}flip(){return(0,a.Z)(function*(){throw new Error("flip not supported under the web platform")})()}setOpacity(e){return(0,a.Z)(function*(){const r=document.getElementById("video");r&&e.opacity&&r.style.setProperty("opacity",e.opacity.toString())})()}}}}]);
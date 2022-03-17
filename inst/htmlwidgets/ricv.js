(()=>{"use strict";HTMLWidgets;var t=!1;if("undefined"!=typeof window){var e={get passive(){t=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),s=[],n=!1,o=-1,r=void 0,a=void 0,l=function(t){return s.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},d=function(t){var e=t||window.event;return!!l(e.target)||e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1)},c=function(e,c){if(e){if(!s.some((function(t){return t.targetElement===e}))){var h={targetElement:e,options:c||{}};s=[].concat(function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(s),[h]),i?(e.ontouchstart=function(t){1===t.targetTouches.length&&(o=t.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(t,e){var i=t.targetTouches[0].clientY-o;!l(t.target)&&(e&&0===e.scrollTop&&i>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&i<0?d(t):t.stopPropagation())}(t,e)},n||(document.addEventListener("touchmove",d,t?{passive:!1}:void 0),n=!0)):function(t){if(void 0===a){var e=!!t&&!0===t.reserveScrollBarGap,i=window.innerWidth-document.documentElement.clientWidth;e&&i>0&&(a=document.body.style.paddingRight,document.body.style.paddingRight=i+"px")}void 0===r&&(r=document.body.style.overflow,document.body.style.overflow="hidden")}(c)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},h=function(e){e?(s=s.filter((function(t){return t.targetElement!==e})),i?(e.ontouchstart=null,e.ontouchmove=null,n&&0===s.length&&(document.removeEventListener("touchmove",d,t?{passive:!1}:void 0),n=!1)):s.length||(void 0!==a&&(document.body.style.paddingRight=a,a=void 0),void 0!==r&&(document.body.style.overflow=r,r=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};HTMLWidgets.widget({name:"ricv",type:"output",factory:function(t,e,i){return{renderValue:function(t){console.log(t);const e=document.createElement("div");e.id=t.viewerId;const i=document.createElement("img");i.src=t.img1,e.appendChild(i);const s=document.createElement("img");s.src=t.img2,e.appendChild(s),document.getElementById(t.widgetId).appendChild(e),new class{constructor(t,e={}){this.settings=Object.assign({controlColor:"#FFFFFF",controlShadow:!0,addCircle:!1,addCircleBlur:!0,showLabels:!1,labelOptions:{before:"Before",after:"After",onHover:!1},smoothing:!0,smoothingAmount:100,hoverStart:!1,verticalMode:!1,startingPoint:50,fluidMode:!1},e),this.safariAgent=-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome"),this.el=t,this.images={},this.wrapper=null,this.control=null,this.arrowContainer=null,this.arrowAnimator=[],this.active=!1,this.slideWidth=50,this.lineWidth=2,this.arrowCoordinates={circle:[5,3],standard:[8,0]}}mount(){this.safariAgent&&(this.settings.smoothing=!1),this._shapeContainer(),this._getImages(),this._buildControl(),this._events()}_events(){this.el.addEventListener("mousedown",(t=>{this._activate(!0),document.body.classList.add("icv__body"),c(this.el,{reserveScrollBarGap:!0}),this._slideCompare(t)})),this.el.addEventListener("mousemove",(t=>this.active&&this._slideCompare(t))),this.el.addEventListener("mouseup",(()=>this._activate(!1))),document.body.addEventListener("mouseup",(()=>{document.body.classList.remove("icv__body"),h(this.el),this._activate(!1)})),this.control.addEventListener("touchstart",(t=>{this._activate(!0),document.body.classList.add("icv__body"),c(this.el,{reserveScrollBarGap:!0})})),this.el.addEventListener("touchmove",(t=>{this.active&&this._slideCompare(t)})),this.el.addEventListener("touchend",(()=>{this._activate(!1),document.body.classList.remove("icv__body"),h(this.el)})),this.el.addEventListener("mouseenter",(()=>{this.settings.hoverStart&&this._activate(!0);let t=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach(((e,i)=>{e.style.cssText=`\n        ${this.settings.verticalMode?`transform: translateY(${t[1]*(0===i?1:-1)}px);`:`transform: translateX(${t[1]*(0===i?1:-1)}px);`}\n        `}))})),this.el.addEventListener("mouseleave",(()=>{let t=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach(((e,i)=>{e.style.cssText=`\n        ${this.settings.verticalMode?`transform: translateY(${0===i?`${t[0]}px`:`-${t[0]}px`});`:`transform: translateX(${0===i?`${t[0]}px`:`-${t[0]}px`});`}\n        `}))}))}_slideCompare(t){let e=this.el.getBoundingClientRect(),i=void 0!==t.touches?t.touches[0].clientX-e.left:t.clientX-e.left,s=void 0!==t.touches?t.touches[0].clientY-e.top:t.clientY-e.top,n=this.settings.verticalMode?s/e.height*100:i/e.width*100;n>=0&&n<=100&&(this.settings.verticalMode?this.control.style.top=`calc(${n}% - ${this.slideWidth/2}px)`:this.control.style.left=`calc(${n}% - ${this.slideWidth/2}px)`,this.settings.fluidMode?this.settings.verticalMode?this.wrapper.style.clipPath=`inset(0 0 ${100-n}% 0)`:this.wrapper.style.clipPath=`inset(0 0 0 ${n}%)`:this.settings.verticalMode?this.wrapper.style.height=`calc(${n}%)`:this.wrapper.style.width=`calc(${100-n}%)`)}_activate(t){this.active=t}_shapeContainer(){let t=document.createElement("div"),e=document.createElement("span"),i=document.createElement("span");e.classList.add("icv__label","icv__label-before","keep"),i.classList.add("icv__label","icv__label-after","keep"),this.settings.labelOptions.onHover&&(e.classList.add("on-hover"),i.classList.add("on-hover")),this.settings.verticalMode&&(e.classList.add("vertical"),i.classList.add("vertical")),e.innerHTML=this.settings.labelOptions.before||"Before",i.innerHTML=this.settings.labelOptions.after||"After",this.settings.showLabels&&(this.el.appendChild(e),this.el.appendChild(i)),this.el.classList.add("icv",this.settings.verticalMode?"icv__icv--vertical":"icv__icv--horizontal",this.settings.fluidMode?"icv__is--fluid":"standard"),t.classList.add("icv__imposter"),this.el.appendChild(t)}_buildControl(){let t=document.createElement("div"),e=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div");i.classList.add("icv__theme-wrapper");for(var n=0;n<=1;n++){let t=document.createElement("div"),e=`<svg\n      height="15"\n      width="15"\n       style="\n       transform: \n       scale(${this.settings.addCircle?.7:1.5})  \n       rotateZ(${0===n?this.settings.verticalMode?"-90deg":"180deg":this.settings.verticalMode?"90deg":"0deg"}); height: 20px; width: 20px;\n       \n       ${this.settings.controlShadow?`\n       -webkit-filter: drop-shadow( 0px 3px 5px rgba(0, 0, 0, .33));\n       filter: drop-shadow( 0px ${0===n?"-3px":"3px"} 5px rgba(0, 0, 0, .33));\n       `:""}\n       "\n       xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 15 15">\n       <path ${this.settings.addCircle?'fill="transparent"':`fill="${this.settings.controlColor}"`}\n       stroke="${this.settings.controlColor}"\n       stroke-linecap="round"\n       stroke-width="${this.settings.addCircle?3:0}"\n       d="M4.5 1.9L10 7.65l-5.5 5.4"\n       />\n     </svg>`;t.innerHTML+=e,this.arrowAnimator.push(t),i.appendChild(t)}let o=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach(((t,e)=>{t.classList.add("icv__arrow-wrapper"),t.style.cssText=`\n      ${this.settings.verticalMode?`transform: translateY(${0===e?`${o[0]}px`:`-${o[0]}px`});`:`transform: translateX(${0===e?`${o[0]}px`:`-${o[0]}px`});`}\n      `})),t.classList.add("icv__control"),t.style.cssText=`\n    ${this.settings.verticalMode?"height":"width "}: ${this.slideWidth}px;\n    ${this.settings.verticalMode?"top":"left "}: calc(${this.settings.startingPoint}% - ${this.slideWidth/2}px);\n    ${"ontouchstart"in document.documentElement?"":this.settings.smoothing?`transition: ${this.settings.smoothingAmount}ms ease-out;`:""}\n    `,e.classList.add("icv__control-line"),e.style.cssText=`\n      ${this.settings.verticalMode?"height":"width "}: ${this.lineWidth}px;\n      background: ${this.settings.controlColor};\n        ${this.settings.controlShadow?"box-shadow: 0px 0px 15px rgba(0,0,0,0.33);":""}\n    `;let r=e.cloneNode(!0);s.classList.add("icv__circle"),s.style.cssText=`\n\n      ${this.settings.addCircleBlur&&"-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px)"};\n      \n      border: ${this.lineWidth}px solid ${this.settings.controlColor};\n      ${this.settings.controlShadow&&"box-shadow: 0px 0px 15px rgba(0,0,0,0.33)"};\n    `,t.appendChild(e),this.settings.addCircle&&t.appendChild(s),t.appendChild(i),t.appendChild(r),this.arrowContainer=i,this.control=t,this.el.appendChild(t)}_getImages(){let t=this.el.querySelectorAll("img, .keep");this.el.innerHTML="",t.forEach((t=>{this.el.appendChild(t)}));let e=[...t].filter((t=>"img"===t.nodeName.toLowerCase()));this.settings.verticalMode&&e.reverse();for(let t=0;t<=1;t++){let i=e[t];if(i.classList.add("icv__img"),i.classList.add(0===t?"icv__img-a":"icv__img-b"),1===t){let t=document.createElement("div"),s=e[1].src;t.classList.add("icv__wrapper"),t.style.cssText=`\n            width: ${100-this.settings.startingPoint}%; \n            height: ${this.settings.startingPoint}%;\n\n            ${"ontouchstart"in document.documentElement?"":this.settings.smoothing?`transition: ${this.settings.smoothingAmount}ms ease-out;`:""}\n            ${this.settings.fluidMode&&`background-image: url(${s}); clip-path: inset(${this.settings.verticalMode?` 0 0 ${100-this.settings.startingPoint}% 0`:`0 0 0 ${this.settings.startingPoint}%`})`}\n        `,t.appendChild(i),this.wrapper=t,this.el.appendChild(this.wrapper)}}if(this.settings.fluidMode){let t=e[0].src,i=document.createElement("div");i.classList.add("icv__fluidwrapper"),i.style.cssText=`\n \n        background-image: url(${t});\n        \n      `,this.el.appendChild(i)}}}(e).mount()},resize:function(t,e){}}}})})();
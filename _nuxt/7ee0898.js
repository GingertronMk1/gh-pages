(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{314:function(t,e,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("1bc9a464",content,!0,{sourceMap:!1})},333:function(t,e,r){"use strict";r(314)},334:function(t,e,r){var n=r(65)(!1);n.push([t.i,".risky-texts{width:100%}.risky-texts,.risky-texts__wrapper{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.risky-texts__wrapper{margin:1.6rem auto;max-width:768px}.risky-texts__input{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;width:80%;padding:1.6rem 0;border-bottom:2px solid grey}.risky-texts__input textarea{border:2px solid #000;border-radius:.8rem;margin:1.6rem auto;padding:.8rem;width:100%;resize:vertical}.risky-texts__input textarea.floating{position:fixed;top:0;left:0;width:60%;margin:1rem;box-shadow:.1rem .1rem .3rem}.risky-texts__input button{background-color:#0088d2;margin:auto;max-width:640px;color:#fff;padding:1.6rem;border-radius:.8rem;border:2px solid #0088d2}.risky-texts__display{width:100%;max-width:768px;padding:1.6rem 0}.risky-texts__display .message{display:flex;margin-top:.3rem;font-size:1.6rem}.risky-texts__display .message--me{flex-direction:row-reverse}.risky-texts__display .message--time{justify-content:center}.risky-texts__display .message--chain-top{margin-top:.8rem}.risky-texts__display .text{padding:.8rem 1.6rem;color:#fff;line-height:2rem;white-space:pre-line}.risky-texts__display .text--me,.risky-texts__display .text--them{max-width:70%}.risky-texts__display .text--me{background-color:#0088d2;border-top-left-radius:1.6rem;border-bottom-left-radius:1.6rem}.risky-texts__display .text--me.text--chain-top{border-top-right-radius:1.6rem}.risky-texts__display .text--them{background-color:#a0a0a0;border-top-right-radius:1.6rem;border-bottom-right-radius:1.6rem}.risky-texts__display .text--them.text--chain-top{border-top-left-radius:1.6rem}.risky-texts__display .text--time{font-weight:900;color:grey;min-width:100%;text-align:center}",""]),t.exports=n},349:function(t,e,r){"use strict";r.r(e);r(23),r(139),r(13),r(31),r(204);var n={data:function(){return{input_text:"\nme: A blue message on the right of the screen\n\nthem: A grey message on the left of the screen\n\ntime: Grey bolded text at the center of the screen\n\nAnd this text won't be shown at all!\n",input_class:""}},computed:{texts:function(){var t=/(.+?)(: *?)([\s\S]+)/,e=this.input_text.split("\n\n"),r="",n=[];return e.forEach((function(text){var e=text.split(t),o=e[1],l=e[3];if(!o||!l)return!1;o=o.trim(),l=l.trim();var m=["text"],d=["message"];switch(r!==o&&(m.push("text--chain-top"),d.push("message--chain-top")),o.toLowerCase()){case"me":m.push("text--me"),d.push("message--me");break;case"them":m.push("text--them"),d.push("message--them");break;case"time":m.push("text--time"),d.push("message--time")}n.push({textClasses:m,messageClasses:d,message:l}),r=o})),n}},mounted:function(){this.input_text=this.input_text.trim()},methods:{toggleFloat:function(){null===this.input_class?this.input_class="floating":this.input_class=null}}},o=(r(333),r(24)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"risky-texts__wrapper",attrs:{id:"app"}},[r("div",{staticClass:"risky-texts__input"},[t._m(0),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input_text,expression:"input_text"}],class:t.input_class,attrs:{id:"input-form",rows:"7"},domProps:{value:t.input_text},on:{input:function(e){e.target.composing||(t.input_text=e.target.value)}}}),t._v(" "),r("button",{staticClass:"p-2",on:{click:function(e){return t.toggleFloat()}}},[t._v("Toggle Floating Editor")])]),t._v(" "),r("div",{staticClass:"risky-texts__display",attrs:{id:"all-texts-div"}},t._l(t.texts,(function(text,e){return r("div",{key:e,class:text.messageClasses},[r("div",{class:text.textClasses,domProps:{textContent:t._s(text.message)}})])})),0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{attrs:{for:"input-form"}},[t._v("\n      Please enter your texts here!"),r("br"),t._v("\n      They should be of the form "),r("em",[t._v("person: message")]),t._v(", where\n      "),r("em",[t._v("person")]),t._v(" is one of:\n      "),r("ul",[r("li",[r("em",[t._v("me")]),t._v(", blue messages from the right of the screen")]),t._v(" "),r("li",[r("em",[t._v("them")]),t._v(", grey messages from the left of the screen")]),t._v(" "),r("li",[r("em",[t._v("time")]),t._v(", grey text in the center of the screen,")])]),t._v("\n      and they should be separated by new lines (i.e. one empty line between\n      texts).\n    ")])}],!1,null,null,null);e.default=component.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26cab207"],{"0908":function(t,e,r){"use strict";var n=r("4d02"),i=r.n(n);i.a},"1a26":function(t,e,r){"use strict";var n=r("5d03"),i=r.n(n);i.a},"1f98":function(t,e,r){"use strict";var n=r("f425"),i=RegExp.prototype.exec,s=String.prototype.replace,c=i,o="lastIndex",a=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),u=void 0!==/()??/.exec("")[1],l=a||u;l&&(c=function(t){var e,r,c,l,d=this;return u&&(r=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),a&&(e=d[o]),c=i.call(d,t),a&&c&&(d[o]=d.global?c.index+c[0].length:e),u&&c&&c.length>1&&s.call(c[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c}),t.exports=c},2262:function(t,e,r){t.exports=r.p+"img/player_cover.373e0739.png"},"2f03":function(t,e,r){var n=r("c481"),i=r("f01a");t.exports=function(t){return function(e,r){var s,c,o=String(i(e)),a=n(r),u=o.length;return a<0||a>=u?t?"":void 0:(s=o.charCodeAt(a),s<55296||s>56319||a+1===u||(c=o.charCodeAt(a+1))<56320||c>57343?t?o.charAt(a):s:t?o.slice(a,a+2):c-56320+(s-55296<<10)+65536)}}},"34a3":function(t,e,r){"use strict";var n=r("a013"),i=r("db4b"),s=r("b146"),c=r("c481"),o=r("b0f4"),a=r("35dd"),u=Math.max,l=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};r("629c")("replace",2,(function(t,e,r,v){return[function(n,i){var s=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,s,i):r.call(String(s),n,i)},function(t,e){var i=v(r,t,this,e);if(i.done)return i.value;var d=n(t),f=String(this),h="function"===typeof e;h||(e=String(e));var g=d.global;if(g){var y=d.unicode;d.lastIndex=0}var b=[];while(1){var x=a(d,f);if(null===x)break;if(b.push(x),!g)break;var w=String(x[0]);""===w&&(d.lastIndex=o(f,s(d.lastIndex),y))}for(var P="",C=0,M=0;M<b.length;M++){x=b[M];for(var O=String(x[0]),_=u(l(c(x.index),f.length),0),E=[],k=1;k<x.length;k++)E.push(m(x[k]));var I=x.groups;if(h){var T=[O].concat(E,_,f);void 0!==I&&T.push(I);var j=String(e.apply(void 0,T))}else j=p(O,f,_,E,I,e);_>=C&&(P+=f.slice(C,_)+j,C=_+O.length)}return P+f.slice(C)}];function p(t,e,n,s,c,o){var a=n+t.length,u=s.length,l=h;return void 0!==c&&(c=i(c),l=f),r.call(o,l,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(a);case"<":o=c[i.slice(1,-1)];break;default:var l=+i;if(0===l)return r;if(l>u){var f=d(l/10);return 0===f?r:f<=u?void 0===s[f-1]?i.charAt(1):s[f-1]+i.charAt(1):r}o=s[l-1]}return void 0===o?"":o}))}}))},"35dd":function(t,e,r){"use strict";var n=r("4819"),i=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var s=r.call(t,e);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"3a59":function(t,e,r){"use strict";var n=r("1f98");r("b2f5")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},"3c6b":function(t,e,r){"use strict";var n=r("a013"),i=r("b146"),s=r("b0f4"),c=r("35dd");r("629c")("match",1,(function(t,e,r,o){return[function(r){var n=t(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n):new RegExp(r)[e](String(n))},function(t){var e=o(r,t,this);if(e.done)return e.value;var a=n(t),u=String(this);if(!a.global)return c(a,u);var l=a.unicode;a.lastIndex=0;var d,f=[],h=0;while(null!==(d=c(a,u))){var m=String(d[0]);f[h]=m,""===m&&(a.lastIndex=s(u,i(a.lastIndex),l)),h++}return 0===h?null:f}]}))},"4d02":function(t,e,r){},"4e6a":function(t,e,r){"use strict";var n=r("5f1d"),i=r.n(n);i.a},"5d03":function(t,e,r){},"5f1d":function(t,e,r){},"629c":function(t,e,r){"use strict";r("3a59");var n=r("e5ef"),i=r("743d"),s=r("b6f1"),c=r("f01a"),o=r("8b37"),a=r("1f98"),u=o("species"),l=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var f=o(t),h=!s((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),m=h?!s((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[u]=function(){return r}),r[f](""),!e})):void 0;if(!h||!m||"replace"===t&&!l||"split"===t&&!d){var v=/./[f],p=r(c,f,""[t],(function(t,e,r,n,i){return e.exec===a?h&&!i?{done:!0,value:v.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),g=p[0],y=p[1];n(String.prototype,t,g),i(RegExp.prototype,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}}},"7bc1":function(t,e,r){"use strict";var n=r("22e9"),i=r("a013"),s=r("0d5f"),c=r("b0f4"),o=r("b146"),a=r("35dd"),u=r("1f98"),l=r("b6f1"),d=Math.min,f=[].push,h="split",m="length",v="lastIndex",p=4294967295,g=!l((function(){RegExp(p,"y")}));r("629c")("split",2,(function(t,e,r,l){var y;return y="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[m]||2!="ab"[h](/(?:ab)*/)[m]||4!="."[h](/(.?)(.?)/)[m]||"."[h](/()()/)[m]>1||""[h](/.?/)[m]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(i,t,e);var s,c,o,a=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,h=void 0===e?p:e>>>0,g=new RegExp(t.source,l+"g");while(s=u.call(g,i)){if(c=g[v],c>d&&(a.push(i.slice(d,s.index)),s[m]>1&&s.index<i[m]&&f.apply(a,s.slice(1)),o=s[0][m],d=c,a[m]>=h))break;g[v]===s.index&&g[v]++}return d===i[m]?!o&&g.test("")||a.push(""):a.push(i.slice(d)),a[m]>h?a.slice(0,h):a}:"0"[h](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}:r,[function(r,n){var i=t(this),s=void 0==r?void 0:r[e];return void 0!==s?s.call(r,i,n):y.call(String(i),r,n)},function(t,e){var n=l(y,t,this,e,y!==r);if(n.done)return n.value;var u=i(t),f=String(this),h=s(u,RegExp),m=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),b=new h(g?u:"^(?:"+u.source+")",v),x=void 0===e?p:e>>>0;if(0===x)return[];if(0===f.length)return null===a(b,f)?[f]:[];var w=0,P=0,C=[];while(P<f.length){b.lastIndex=g?P:0;var M,O=a(b,g?f:f.slice(P));if(null===O||(M=d(o(b.lastIndex+(g?0:P)),f.length))===w)P=c(f,P,m);else{if(C.push(f.slice(w,P)),C.length===x)return C;for(var _=1;_<=O.length-1;_++)if(C.push(O[_]),C.length===x)return C;P=w=M}}return C.push(f.slice(w)),C}]}))},af81:function(t,e,r){},b0f4:function(t,e,r){"use strict";var n=r("2f03")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},b76b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"music"},[r("div",{staticClass:"music-content"},[r("div",{staticClass:"music-left"},[r("music-btn"),r("keep-alive",[t.$route.meta.keepAlive?r("router-view",{staticClass:"music-list"}):t._e()],1),t.$route.meta.keepAlive?t._e():r("router-view",{key:t.$route.path,staticClass:"music-list"})],1),r("lyric",{staticClass:"music-right",attrs:{lyric:t.lyric,nolyric:t.nolyric,lyricIndex:t.lyricIndex}})],1),r("div",{staticClass:"music-bar",class:{disable:!t.musicReady||!t.currentMusic.id}},[r("div",{staticClass:"music-bar-btns"},[r("i",{staticClass:"bar-icon btn-prev",attrs:{title:"上一曲 Ctrl + Left"},on:{click:t.prev}}),r("i",{staticClass:"bar-icon btn-play",class:{"btn-play-pause":t.playing},attrs:{title:"播放暂停 Ctrl + Space"},on:{click:t.play}}),r("i",{staticClass:"bar-icon btn-next",attrs:{title:"下一曲 Ctrl + Right"},on:{click:t.next}})]),r("div",{staticClass:"music-music"},[r("div",{staticClass:"music-bar-info"},[t.currentMusic&&t.currentMusic.id?[t._v("\n          "+t._s(t.currentMusic.name)+"\n          "),r("span",[t._v("- "+t._s(t.currentMusic.singer))])]:[t._v("欢迎使用mmPlayer在线音乐播放器")]],2),t.currentMusic.id?r("div",{staticClass:"music-bar-time"},[t._v(t._s(t._f("format")(t.currentTime))+"/"+t._s(t._f("format")(t.currentMusic.duration%3600)))]):t._e(),r("mm-progress",{staticClass:"music-progress",attrs:{percent:t.percentMusic,percentProgress:t.currentProgress},on:{percentChange:t.progressMusic}})],1),r("i",{staticClass:"bar-icon btn-mode",class:t.modeClass,attrs:{title:t.modeTitle},on:{click:t.modeChange}}),r("i",{staticClass:"bar-icon btn-comment",on:{click:t.openComment}}),r("div",{staticClass:"music-bar-volume",attrs:{title:"音量加减 [Ctrl+Up/Down]"}},[r("i",{staticClass:"bar-icon btn-volume",class:{"btn-volume-no":t.isMute},on:{click:t.switchMute}}),r("mm-progress",{attrs:{percent:t.volume},on:{percentChange:t.volumeChange}})],1)]),r("div",{staticClass:"mmPlayer-bg",style:{backgroundImage:t.picUrl}}),r("div",{staticClass:"mmPlayer-mask"})])},i=[],s=(r("2338"),r("f763"),r("fb37"),r("cde0"),r("d4d5"),r("5bf7")),c=r("365c"),o=r("db49"),a={initAudio:function(t){var e=t.audioEle;e.onprogress=function(){try{if(e.buffered.length>0){var r=t.currentMusic.duration,n=0;e.buffered.end(0),n=e.buffered.end(0)>r?r:e.buffered.end(0),t.currentProgress=n/r}}catch(i){}},e.onplay=function(){var e;clearTimeout(e),e=setTimeout((function(){t.musicReady=!0}),100)},e.ontimeupdate=function(){t.currentTime=e.currentTime},e.onended=function(){t.mode===o["e"].loop?t.loop():t.next()},e.onerror=function(){t.$mmToast("当前音乐不可播放，已自动播放下一曲"),t.next()},e.onstalled=function(){var r;e.load(),t.setPlaying(!1),clearTimeout(r),r=setTimeout((function(){t.setPlaying(!0)}),10)},e.oncanplay=function(){0!==t.historyList.length&&t.currentMusic.id===t.historyList[0].id||t.setHistory(t.currentMusic)}}},u=a,l=r("bbd5"),d=r("591a"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"music-btn"},[r("div",[r("router-link",{attrs:{to:"/music/playlist",tag:"span"}},[t._v("正在播放")]),r("router-link",{attrs:{to:"/music/toplist",tag:"span"}},[t._v("推荐")]),r("router-link",{attrs:{to:"/music/search",tag:"span"}},[t._v("搜索")]),r("router-link",{attrs:{to:"/music/userlist",tag:"span"}},[t._v("我的歌单")]),r("router-link",{attrs:{to:"/music/fm",tag:"span"}},[t._v("电台")])],1)])},h=[],m={},v=m,p=(r("f98e"),r("6691")),g=Object(p["a"])(v,f,h,!1,null,"05e813f3",null),y=g.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("dl",{staticClass:"music-info"},[r("dt",[r("img",{attrs:{src:t.musicPicUrl}})]),t.currentMusic.id?[r("dd",[t._v("歌曲名："+t._s(t.currentMusic.name))]),r("dd",[t._v("歌手名："+t._s(t.currentMusic.singer))]),r("dd",[t._v("专辑名："+t._s(t.currentMusic.album))])]:[r("dd",[t._v("mmPlayer在线音乐播放器")]),t._m(0)]],2),r("div",{ref:"musicLyric",staticClass:"music-lyric"},[r("div",{staticClass:"music-lyric-items",style:t.lyricTop},[t.currentMusic.id?t.nolyric?r("p",[t._v("暂无歌词！")]):t.lyric.length>0?t._l(t.lyric,(function(e,n){return r("p",{key:n,class:{on:t.lyricIndex===n}},[t._v(t._s(e.text))])})):r("p",[t._v("歌词加载失败！")]):r("p",[t._v("还没有播放音乐哦！")])],2)])])},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dd",[r("a",{staticClass:"github",attrs:{target:"_blank",href:"https://github.com/maomao1996"}},[t._v("茂茂")])])}];function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var C={name:"lyric",props:{lyric:{type:Array,default:function(){return[]}},nolyric:{type:Boolean,default:!1},lyricIndex:{type:Number,default:0}},data:function(){return{top:0}},computed:P({musicPicUrl:function(){return this.currentMusic.id?"".concat(this.currentMusic.image,"?param=200y200"):r("2262")},lyricTop:function(){return"transform :translate3d(0, ".concat(-34*(this.lyricIndex-this.top),"px, 0)")}},Object(d["c"])(["currentMusic"])),mounted:function(){var t=this;window.addEventListener("resize",(function(){clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout((function(){return t.clacTop()}),60)})),this.$nextTick((function(){return t.clacTop()}))},methods:{clacTop:function(){var t=this.$refs.musicLyric.offsetHeight;this.top=Math.floor(t/34/2)}}},M=C,O=(r("4e6a"),Object(p["a"])(M,b,x,!1,null,"82d3c266",null)),_=O.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"mmProgress",staticClass:"mmProgress",on:{click:t.barClick}},[r("div",{staticClass:"mmProgress-bar"}),r("div",{ref:"mmPercentProgress",staticClass:"mmProgress-outer"}),r("div",{ref:"mmProgressInner",staticClass:"mmProgress-inner"},[r("div",{staticClass:"mmProgress-dot",on:{mousedown:t.barDown,touchstart:function(e){return e.preventDefault(),t.barDown(e)}}})])])},k=[],I=10,T={name:"mmProgress",data:function(){return{move:{status:!1,startX:0,left:0}}},props:{percent:{type:[Number],default:0},percentProgress:{type:[Number],default:0}},mounted:function(){var t=this;this.$nextTick((function(){t.bindEvents();var e=t.$refs.mmProgress.clientWidth-I,r=t.percent*e;t.moveSilde(r)}))},methods:{bindEvents:function(){document.addEventListener("mousemove",this.barMove),document.addEventListener("mouseup",this.barUp),document.addEventListener("touchmove",this.barMove),document.addEventListener("touchend",this.barUp)},unbindEvents:function(){document.removeEventListener("mousemove",this.barMove),document.removeEventListener("mouseup",this.barUp),document.removeEventListener("touchmove",this.barMove),document.removeEventListener("touchend",this.barUp)},barClick:function(t){var e=this.$refs.mmProgress.getBoundingClientRect(),r=Math.min(this.$refs.mmProgress.clientWidth-I,Math.max(0,t.clientX-e.left));this.moveSilde(r),this.commitPercent()},barDown:function(t){this.move.status=!0,this.move.startX=t.clientX||t.touches[0].pageX,this.move.left=this.$refs.mmProgressInner.clientWidth},barMove:function(t){if(!this.move.status)return!1;var e=t.clientX||t.touches[0].pageX,r=e-this.move.startX,n=Math.min(this.$refs.mmProgress.clientWidth-I,Math.max(0,this.move.left+r));this.moveSilde(n),this.commitPercent()},barUp:function(t){t.stopPropagation(),this.move.status=!1},moveSilde:function(t){this.$refs.mmProgressInner.style.width="".concat(t,"px")},commitPercent:function(){var t=this.$refs.mmProgress.clientWidth-I,e=this.$refs.mmProgressInner.clientWidth/t;this.$emit("percentChange",e)}},watch:{percent:function(t){if(t>=0&&!this.move.status){var e=this.$refs.mmProgress.clientWidth-I,r=t*e;this.moveSilde(r)}},percentProgress:function(t){var e=this.$refs.mmProgress.clientWidth*t;this.$refs.mmPercentProgress.style.width="".concat(e,"px")}},beforeDestroy:function(){this.unbindEvents()}},j=T,S=(r("0908"),Object(p["a"])(j,E,k,!1,null,null,null)),$=S.exports;function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var D={name:"music",components:{Lyric:_,MusicBtn:y,MmProgress:$},data:function(){return{musicReady:!1,currentTime:0,currentProgress:0,lyric:[],nolyric:!1,lyricIndex:0,isMute:!1,volume:1}},computed:L({picUrl:function(){return this.currentMusic.id&&this.currentMusic.image?"url(".concat(this.currentMusic.image,"?param=300y300)"):"url(".concat(o["c"],")")},modeClass:function(){var t;return(t={},Object(s["a"])(t,o["e"].listLoop,"mode-listLoop"),Object(s["a"])(t,o["e"].order,"mode-order"),Object(s["a"])(t,o["e"].random,"mode-random"),Object(s["a"])(t,o["e"].loop,"mode-loop"),t)[this.mode]},modeTitle:function(){var t,e="Ctrl + O";return(t={},Object(s["a"])(t,o["e"].listLoop,"列表循环 ".concat(e)),Object(s["a"])(t,o["e"].order,"顺序播放 ".concat(e)),Object(s["a"])(t,o["e"].random,"随机播放 ".concat(e)),Object(s["a"])(t,o["e"].loop,"单曲循环 ".concat(e)),t)[this.mode]},percentMusic:function(){var t=this.currentMusic.duration;return this.currentTime&&t?this.currentTime/t:0}},Object(d["c"])(["audioEle","mode","playing","playlist","orderList","currentIndex","currentMusic","historyList"])),watch:{currentMusic:function(t,e){var r=this;t.id?t.id!==e.id&&(this.lyricIndex=this.currentTime=this.currentProgress=0,this.audioEle.play(),this.$nextTick((function(){r._getLyric(t.id)}))):this.lyric=[]},playing:function(t){var e=this,r=this.audioEle;this.$nextTick((function(){t?r.play():r.pause(),e.musicReady=!0}))},currentTime:function(t){if(!this.nolyric){for(var e=0,r=0;r<this.lyric.length;r++)t>this.lyric[r].time&&(e=r);this.lyricIndex=e}}},mounted:function(){var t=this;window.clv.hass.then((function(e){var r=e.attr,n=(e.isPlaying,e.isReady);t.musicReady=n,t.volume=r.volume_level||1,r.playlist.length>0&&t.$nextTick((function(){t._getLyric(r.playlist[r.index].id);var e=Math.ceil(r.media_position),n=e+11;setInterval((function(){window.clv.hass.then((function(r){var i=r.attr,s=r.isPlaying;if(s){var c=Math.ceil(i.media_position);e!=c?(n=e=c,n+=11):n+=1,t.currentTime=n}t.setCurrentIndex(i.index),t.setPlaying(s),t.setDOM()}))}),1e3)})),t.setDOM()})).finally((function(){t.$nextTick((function(){u.initAudio(t),t.initKeyDown()}))}))},methods:L({setDOM:function(){try{var t=top.document.body.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("#view hui-iframe-card").shadowRoot.querySelector("ha-card");t.style="height:calc(100vh - 112px)";var e=t.querySelector("#root");e.style="height:100%; padding-top:0;"}catch(r){}},initKeyDown:function(){var t=this;document.onkeydown=function(e){switch(e.ctrlKey&&e.keyCode){case 32:t.play();break;case 37:t.prev();break;case 38:var r=Number((t.volume+=.1).toFixed(1));r>1&&(r=1),t.volumeChange(r);break;case 39:t.next();break;case 40:var n=Number((t.volume-=.1).toFixed(1));n<0&&(n=0),t.volumeChange(n);break;case 79:t.modeChange();break}}},prev:function(){if(window.clv.exec({cmd:"prev"}),this.musicReady)if(1===this.playlist.length)this.loop();else{var t=this.currentIndex-1;t<0&&(t=this.playlist.length-1),this.setCurrentIndex(t),!this.playing&&this.musicReady&&this.setPlaying(!0)}},play:function(){window.clv.exec({cmd:this.playing?"pause":"play"}),this.musicReady&&this.setPlaying(!this.playing)},next:function(){if(window.clv.exec({cmd:"next"}),this.musicReady){if(this.playlist.length-1===this.currentIndex&&this.mode===o["e"].order)return this.setCurrentIndex(-1),void this.setPlaying(!1);if(1===this.playlist.length)this.loop();else{var t=this.currentIndex+1;t===this.playlist.length&&(t=0),!this.playing&&this.musicReady&&this.setPlaying(!0),this.setCurrentIndex(t)}}},loop:function(){this.audioEle.currentTime=0,this.audioEle.play(),this.setPlaying(!0),this.lyric.length>0&&(this.lyricIndex=0)},progressMusic:function(t){this.audioEle.currentTime=this.currentMusic.duration*t},modeChange:function(){top.alert("如果加上这个功能，我还要改很多代码，所以不能用")},resetCurrentIndex:function(t){var e=this,r=t.findIndex((function(t){return t.id===e.currentMusic.id}));this.setCurrentIndex(r)},openComment:function(){if(!this.currentMusic.id)return this.$mmToast("还没有播放歌曲哦！"),!1;this.$router.push("/music/comment/".concat(this.currentMusic.id))},volumeChange:function(t){this.isMute=0===t,window.clv.setVolume(t),this.volume=t,this.audioEle.volume=t},switchMute:function(){var t=this.audioEle;this.isMute=!this.isMute,this.isMute?t.volume=0:t.volume=this.volume},_getLyric:function(t){var e=this;Object(c["d"])(t).then((function(t){200===t.status&&(t.data.nolyric?e.nolyric=!0:t.data.lrc?(e.nolyric=!1,e.lyric=Object(l["c"])(t.data.lrc.lyric)):(e.nolyric=!0,e.lyric=[]))}))}},Object(d["d"])({setPlaying:"SET_PLAYING",setPlaylist:"SET_PLAYLIST",setCurrentIndex:"SET_CURRENTINDEX"}),{},Object(d["b"])(["setHistory","setPlayMode"])),filters:{format:l["b"]}},A=D,U=(r("1a26"),Object(p["a"])(A,n,i,!1,null,null,null));e["default"]=U.exports},bbd5:function(t,e,r){"use strict";r.d(e,"d",(function(){return i})),r.d(e,"a",(function(){return s})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return o}));r("d4d5"),r("34a3"),r("3c6b"),r("7bc1");function n(t,e){var r=-1,n=t.length;e||(e=new Array(n));while(++r<n)e[r]=t[r];return e}var i=function(t){var e=null==t?0:t.length;if(!e)return[];var r=-1,i=e-1,s=n(t);while(++r<e){var c=r+Math.floor(Math.random()*(i-r+1)),o=s[c];s[c]=s[r],s[r]=o}return s};function s(t){return t<10?"0"+t:t}function c(t){for(var e=t.split("\n"),r=[],n=0;n<e.length;n++){var i=decodeURIComponent(e[n]),s=/\[\d*:\d*((\.|:)\d*)*\]/g,c=i.match(s);if(c)for(var o=i.replace(s,""),a=0,u=c.length;a<u;a++){var l=c[a],d=Number(String(l.match(/\[\d*/i)).slice(1)),f=Number(String(l.match(/:\d*/i)).slice(1)),h=60*d+f;""!==o&&r.push({time:h,text:o})}}return r}function o(t){var e=Math.floor(t/60),r=Math.floor(t%60);return"".concat(s(e),":").concat(s(r))}},f425:function(t,e,r){"use strict";var n=r("a013");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},f98e:function(t,e,r){"use strict";var n=r("af81"),i=r.n(n);i.a}}]);
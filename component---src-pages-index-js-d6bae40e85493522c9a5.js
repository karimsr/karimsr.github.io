(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7W2i":function(e,t,a){var n=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var o=+new Date;!!t&&o<t+n?(clearTimeout(a),a=setTimeout((function(){t=o,e()}),n)):(t=o,e())}};t.default=n},Ijbi:function(e,t,a){var n=a("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},RIqP:function(e,t,a){var n=a("Ijbi"),o=a("EbDI"),i=a("ZhPi"),r=a("Bnag");e.exports=function(e){return n(e)||o(e)||i(e)||r()}},RXBc:function(e,t,a){"use strict";a.r(t);a("f3/d");var n=a("q1tI"),o=a.n(n),i=a("7oih"),r=a("YIkO"),l=a.n(r),s=a("dwco"),c=a.n(s);var u=function(e){return e.children},m=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){c.a.polyfill()},i.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,o=n.type,i=n.element,r=n.offset,l=n.timeout;if(o&&i)switch(o){case"class":a=!!(t=document.getElementsByClassName(i)[0]);break;case"id":a=!!(t=document.getElementById(i))}a?this.scrollTo(t,r,l):console.log("Element not found: "+i)},i.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},i.render=function(){return o.a.createElement(u,null,"object"==typeof this.props.children?o.a.cloneElement(this.props.children,{onClick:this.handleClick}):o.a.createElement("span",{onClick:this.handleClick,onKeyPress:this.handleClick,role:"button",tabindex:"0"},this.props.children))},n}(o.a.Component),p=a("d82A"),d=a.n(p),f=a("obyI"),h=a.n(f);var v=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Portfolio",href:"portfolio"},{content:"Certifications",href:"certifications"}]},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.state.tabs;return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},o.a.createElement("a",{className:"navbar-brand",href:"#page-top"},o.a.createElement("span",{className:"d-block d-lg-none"},h.a.firstName," ",h.a.lastName),o.a.createElement("span",{className:"d-none d-lg-block"},o.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:d.a,alt:""}))),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement(l.a,{items:e.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map((function(e,t){var a=e.href,n=e.content;return o.a.createElement("li",{className:"nav-item",key:a},o.a.createElement(m,{type:"id",element:a},o.a.createElement("a",{className:"nav-link",href:"#"+a},n)))})))),o.a.createElement("small",{className:"d-none d-lg-block text-white"},"Generated with the"," ",o.a.createElement("a",{href:""+h.a.footerUrl,className:"text-light sidebar-footer-link"},"Ops Platform")))},n}(n.Component);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(v,null),o.a.createElement("div",{className:"container-fluid p-0"},o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h1",{className:"mb-0"},h.a.firstName,o.a.createElement("span",{className:"text-primary"}," ",h.a.lastName)),o.a.createElement("div",{className:"subheading mb-5"},o.a.createElement("a",{href:"mailto:"+h.a.email},h.a.email," · "),h.a.address," · ",h.a.phone),o.a.createElement("p",{className:"lead mb-5"},h.a.bio),o.a.createElement("div",{className:"social-icons"},h.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return o.a.createElement("a",{key:a,href:a},o.a.createElement("i",{className:"fab "+t}))}))))),o.a.createElement("hr",{className:"m-0"}),o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h2",{className:"mb-5"},"Experience"),h.a.experienceList.map((function(e){var t=e.title,a=e.company,n=e.description,i=e.period;return o.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},o.a.createElement("div",{className:"resume-content"},o.a.createElement("h3",{className:"mb-0"},t),o.a.createElement("div",{className:"subheading mb-3"},a),o.a.createElement("p",null,n)),o.a.createElement("div",{className:"resume-date text-md-right"},o.a.createElement("span",{className:"text-primary"},i)))})))),o.a.createElement("hr",{className:"m-0"}),o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h2",{className:"mb-5"},"Education"),h.a.educationList.map((function(e){var t=e.institution,a=e.qualification,n=e.description,i=e.period;return o.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},o.a.createElement("div",{className:"resume-content"},o.a.createElement("h3",{className:"mb-0"},t),o.a.createElement("div",{className:"subheading mb-3"},a),o.a.createElement("div",null,n)),o.a.createElement("div",{className:"resume-date text-md-right"},o.a.createElement("span",{className:"text-primary"},i)))})))),o.a.createElement("hr",{className:"m-0"}),o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h2",{className:"mb-5"},"Skills"),o.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),o.a.createElement("ul",{className:"list-inline dev-icons"},h.a.langTools.map((function(e){var t=e.iconClass;return o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("i",{className:"fab "+t}))}))),o.a.createElement("div",{className:"subheading mb-3"},"Other skills"),o.a.createElement("ul",{className:"fa-ul mb-0"},h.a.skills.map((function(e){return o.a.createElement("li",null,o.a.createElement("i",{className:"fa-li fa fa-check"}),e)}))))),o.a.createElement("hr",{className:"m-0"}),o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"portfolio"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h2",{className:"mb-5"},"Portfolio"),h.a.portfolio.introParagraphs.map((function(e){return o.a.createElement("p",null,e)})),o.a.createElement("div",{className:"mb-5"}),h.a.portfolio.items.map((function(e){var t=e.name,a=e.description,n=e.url;return o.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},o.a.createElement("div",{className:"resume-content"},o.a.createElement("div",{className:"subheading mb-3"},t),o.a.createElement("div",null,a)),o.a.createElement("div",{className:"resume-date text-md-right"},o.a.createElement("span",{className:"text-primary portfolio-icons"},o.a.createElement("a",{key:n,href:n},o.a.createElement("i",{className:"fab fa-git-alt"})))))})))),o.a.createElement("hr",{className:"m-0"}),o.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"certifications"},o.a.createElement("div",{className:"w-100"},o.a.createElement("h2",{className:"mb-5"},"Certifications & Awards"),o.a.createElement("ul",{className:"fa-ul mb-0"},h.a.certifications.map((function(e){return o.a.createElement("li",null,o.a.createElement("i",{className:"fa-li fa fa-award text-warning"}),e)})))))),o.a.createElement("div",{className:"container w-100"},o.a.createElement("p",{className:"text-center"},o.a.createElement("small",{className:"d-lg-none d-xl-none"},"Generated with the"," ",o.a.createElement("a",{href:""+h.a.footerUrl,className:""},"Ops Platform")))))}},SksO:function(e,t){function a(t,n){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,n)}e.exports=a},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var r=o.apply(null,n);r&&e.push(r)}else if("object"===i)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},YIkO:function(e,t,a){"use strict";a("V+eJ"),a("dZ+Y"),a("bWfx"),a("2Spj"),a("LK8F"),a("HAE/");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("pVnL")),i=n(a("lSNA")),r=n(a("RIqP")),l=n(a("lwsE")),s=n(a("a1gu")),c=n(a("Nsbk")),u=n(a("PJYZ")),m=n(a("W8MJ")),p=n(a("7W2i")),d=n(a("17x9")),f=n(a("q1tI")),h=n(a("TSYQ")),v=n(a("Fxm3"));var b=function(e){function t(e){var a;return(0,l.default)(this,t),(a=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,u.default)(a)),a}return(0,p.default)(t,e),(0,m.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.element]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,m.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,o=e.length;n<o;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],o=e||this.state.targetItems,i=!1,l=0,s=o.length;l<s;l++){var c=o[l],u=!i&&this._isInView(c);u?(i=!0,t.push(c)):a.push(c);var m=l===s-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&m&&p&&(a.pop(),a.push.apply(a,(0,r.default)(t)),t=[c],n=this._fillArray(n,!1),u=!0),n.push(u)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,o=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var i=e.getBoundingClientRect(),r=n?t.height:window.innerHeight,l=this._getScrollDimension().scrollTop,s=l+r,c=n?i.top+l-t.top+o:i.top+l+o,u=c+e.offsetHeight;return c<s&&u>l}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,r=a.className,l=a.scrolledPastClassName,s=a.style,c=0,u=f.default.Children.map(n,(function(t,a){var n;if(!t)return null;var r=t.type,s=l&&e.state.isScrolledPast[a],u=(0,h.default)((n={},(0,i.default)(n,"".concat(t.props.className),t.props.className),(0,i.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,i.default)(n,"".concat(e.props.scrolledPastClassName),s),n));return f.default.createElement(r,(0,o.default)({},t.props,{className:u,key:c++}),t.props.children)})),m=(0,h.default)((0,i.default)({},"".concat(r),r));return f.default.createElement(t,{className:m,style:s},u)}}]),t}(f.default.Component);t.default=b},ZhPi:function(e,t,a){var n=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},a1gu:function(e,t,a){var n=a("cDf5"),o=a("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},cDf5:function(e,t){function a(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=a=function(e){return typeof e}:e.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(t)}e.exports=a},d82A:function(e,t,a){e.exports=a.p+"static/cto-ai-f01aa6cb6d8a8e9628e1aefd7b2d9662.png"},dwco:function(e,t,a){a("Oyvg"),a("eM6i"),a("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,r=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var a=p(this),n=a.getBoundingClientRect(),i=this.getBoundingClientRect();a!==t.body?(f.call(this,a,a.scrollLeft+i.left-n.left,a.scrollTop+i.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+r<e.scrollHeight:"X"===t?e.clientWidth+r<e.scrollWidth:void 0}function u(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function m(e){var t=c(e,"Y")&&u(e,"Y"),a=c(e,"X")&&u(e,"X");return t||a}function p(e){for(;e!==t.body&&!1===m(e);)e=e.parentNode||e.host;return e}function d(t){var a,n,o,r,l=(i()-t.startTime)/468;r=l=l>1?1:l,a=.5*(1-Math.cos(Math.PI*r)),n=t.startX+(t.x-t.startX)*a,o=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,o),n===t.x&&o===t.y||e.requestAnimationFrame(d.bind(e,t))}function f(a,n,r){var s,c,u,m,p=i();a===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,m=o.scroll):(s=a,c=a.scrollLeft,u=a.scrollTop,m=l),d({scrollable:s,method:m,startTime:p,startX:c,startY:u,x:n,y:r})}}}}()},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"Karim Rahemtulla Resume",manifestName:"Karim Rahemtulla Resume",manifestShortName:"Resume",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/images/cto-ai.png",pathPrefix:"/",firstName:"Karim",lastName:"Rahemtulla",bio:"\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",experienceList:[{title:"Title 1",company:"Company 1",description:"\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",period:"January 2019 - present"},{title:"Title 2",company:"Company 2",description:"\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",period:"April 2018 - January 2019"},{title:"Title 3",company:"Company 3",description:"\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum.",period:"December 2015 - April 2018"}],educationList:[{institution:"Institution 1",qualification:"Qualification 1",description:"\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",period:"2015"},{institution:"Institution 2",qualification:"Qualification 2",description:"\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",period:"2012"}],langTools:[{name:"HTML5",iconClass:"fa-html5"},{name:"CSS3",iconClass:"fa-css3-alt"},{name:"Javascript",iconClass:"fa-js-square"},{name:"Angular",iconClass:"fa-angular"},{name:"React",iconClass:"fa-react"},{name:"NodeJS",iconClass:"fa-node-js"},{name:"SASS",iconClass:"fa-sass"},{name:"LESS",iconClass:"fa-less"},{name:"Wordpress",iconClass:"fa-wordpress"},{name:"Gulp",iconClass:"fa-gulp"},{name:"Grunt",iconClass:"fa-grunt"},{name:"NPM",iconClass:"fa-npm"},{name:"R",iconClass:"fa-r-project"}],skills:["Skill 1","Skill 2","Skill 3","Skill 4","Skill 5"],certifications:["Certification 1","Certification 2","Certification 3","Award 1","Award 2"],portfolio:{introParagraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum."],items:[{name:"First portfolio item",description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",url:"https://github.com/user/repo"},{name:"Second portoflio item name",description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",url:"https://github.com/user/repo"}]},socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/karimsr"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://linkedin.com/in/krahemtu"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/k8skarim"}],email:"jane.doe@email.com",phone:"604-XXX-XXXX",address:"Vancouver",footerUrl:"https://www.cto.ai"}}}]);
//# sourceMappingURL=component---src-pages-index-js-d6bae40e85493522c9a5.js.map
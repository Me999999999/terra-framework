(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1006:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=u(n(2)),r=u(n(4)),l=u(n(1007));function u(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(l.default),d={name:o.default.string.isRequired,url:o.default.string,version:o.default.string.isRequired},s=function(e){var t=e.name,n=e.url,o=e.version;return a.default.createElement("div",{className:i("badge-container")},a.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(o))))};s.propTypes=d;var c=s;t.default=c},1007:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1009:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=u(n(2)),r=u(n(4)),l=u(n(1013));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=r.default.bind(l.default),m={example:o.default.element,exampleSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},h=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=d(t).call(this,e))||"object"!==i(o)&&"function"!=typeof o?s(a):o).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(s(n)),n.handleCodeToggle=n.handleCodeToggle.bind(s(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),_(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:f("header")},a.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:f("description")},e):null}}]),_(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,o=e.exampleSrc,r=e.title,l=e.description,u=this.state,i=u.isExpanded,d=u.isBackgroundTransparent;return a.default.createElement("div",{className:f("template")},t.renderHeader(r),a.default.createElement("div",{className:f("content",{"dynamic-content":d})},t.renderDescription(l),n),o&&a.default.createElement("div",{className:f("footer")},a.default.createElement("div",{className:f("button-container")},a.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:f("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:f("chevron-right")}))),i&&a.default.createElement("div",{className:f("code")},o)))}}]),t}(a.default.Component);h.propTypes=m,h.defaultProps={isExpanded:!1};var b=h;t.default=b},1013:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),o=u(n(2)),r=u(n(4)),l=u(n(1022));function u(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(l.default),d={rows:o.default.arrayOf(o.default.shape({name:o.default.string,type:o.default.func,required:o.default.bool,defaultValue:o.default.string,description:o.default.func}))},s=function(e){var t=e.rows;return a.default.createElement("table",{className:i("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:i("tr")},a.default.createElement("th",{className:i("th")},"Prop Name"),a.default.createElement("th",{className:i("th")},"Type"),a.default.createElement("th",{className:i("th")},"Is Required"),a.default.createElement("th",{className:i("th")},"Default Value"),a.default.createElement("th",{className:i("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:i(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:i(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:i(["td","props-td"])},e.type()),a.default.createElement("td",{className:i(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:i(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:i(["td","props-td"])},e.description()))}))))};s.propTypes=d;var c=s;t.default=c},1022:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1068:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DependentViewport=t.default=void 0;var a=i(n(0)),o=i(n(2)),r=i(n(169)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(230));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var f={children:o.default.node,onChange:o.default.func,onResize:o.default.func,tiny:o.default.element,small:o.default.element,medium:o.default.element,large:o.default.element,huge:o.default.element,enormous:o.default.element,responsiveTo:o.default.oneOf(["window","parent"])},m=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(a=c(t).call(this))||"object"!==d(a)&&"function"!=typeof a?_(n):a).state={element:null},e.setContainer=e.setContainer.bind(_(e)),e.handleResize=e.handleResize.bind(_(e)),e.handleWindowResize=e.handleWindowResize.bind(_(e)),e.animationFrameID=null,e}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new r.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,a=t.onResize,o=t.tiny,r=t.small,u=t.medium,i=t.large,d=t.huge,s=t.enormous;a&&a(e);var c,_=(0,l.activeBreakpointForSize)(e);n&&_!==this.breakpoint&&n(_),this.breakpoint=_,(o||r||u||i||d||s)&&(c=e>=l.default.enormous&&s?"enormous":e>=l.default.huge&&d?"huge":e>=l.default.large&&i?"large":e>=l.default.medium&&u?"medium":e>=l.default.small&&r?"small":"tiny",this.state.element!==c&&this.setState({element:c}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:a.default.createElement(a.default.Fragment,null,"parent"===n&&!this.container&&a.default.createElement("div",{ref:this.setContainer}),t)}}])&&s(n.prototype,o),u&&s(n,u),t}(a.default.Component);m.propTypes=f,m.defaultProps={responsiveTo:"parent"};var h=m;t.default=h}}]);
//# sourceMappingURL=126-fd1cb28558851e39b34a.js.map
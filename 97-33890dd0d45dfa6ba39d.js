(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1006:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(2)),o=d(n(4)),l=d(n(1007));function d(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),u={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.name,n=e.url,r=e.version;return a.default.createElement("div",{className:i("badge-container")},a.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(r))))};s.propTypes=u;var c=s;t.default=c},1007:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1009:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(2)),o=d(n(4)),l=d(n(1013));function d(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=o.default.bind(l.default),f={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},b=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=u(t).call(this,e))||"object"!==i(r)&&"function"!=typeof r?s(a):r).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(s(n)),n.handleCodeToggle=n.handleCodeToggle.bind(s(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),m(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:_("header")},a.default.createElement("h2",{className:_("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:_("description")},e):null}}]),m(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,r=e.exampleSrc,o=e.title,l=e.description,d=this.state,i=d.isExpanded,u=d.isBackgroundTransparent;return a.default.createElement("div",{className:_("template")},t.renderHeader(o),a.default.createElement("div",{className:_("content",{"dynamic-content":u})},t.renderDescription(l),n),r&&a.default.createElement("div",{className:_("footer")},a.default.createElement("div",{className:_("button-container")},a.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:_("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:_("chevron-right")}))),i&&a.default.createElement("div",{className:_("code")},r)))}}]),t}(a.default.Component);b.propTypes=f,b.defaultProps={isExpanded:!1};var h=b;t.default=h},1013:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(2)),o=d(n(4)),l=d(n(1022));function d(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),u={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},s=function(e){var t=e.rows;return a.default.createElement("table",{className:i("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:i("tr")},a.default.createElement("th",{className:i("th")},"Prop Name"),a.default.createElement("th",{className:i("th")},"Type"),a.default.createElement("th",{className:i("th")},"Is Required"),a.default.createElement("th",{className:i("th")},"Default Value"),a.default.createElement("th",{className:i("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:i(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:i(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:i(["td","props-td"])},e.type()),a.default.createElement("td",{className:i(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:i(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:i(["td","props-td"])},e.description()))}))))};s.propTypes=u;var c=s;t.default=c},1022:function(e,t,n){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1128:function(e,t,n){e.exports={container:"SlideGroupDemo-module__container___2zjCb",slide:"SlideGroupDemo-module__slide___1Lr5R","content-wrapper":"SlideGroupDemo-module__content-wrapper___2e3Pl",button:"SlideGroupDemo-module__button___769LH","custom-slide":"SlideGroupDemo-module__custom-slide____pG-d"}},1450:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a),o=n(1006),l=n.n(o),d=function(e){var t=e.url;return r.a.createElement(l.a,{name:"terra-slide-group",version:"4.18.0",url:t})}},1976:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(23)),o=a(n(25)),l=a(n(26)),d=a(n(27)),i=a(n(29)),u=a(n(28)),s=a(n(0)),c=a(n(2)),m=a(n(4)),p=a(n(365)),_=a(n(1128)),f=m.default.bind(_.default),b=function(e){function t(e){var n;return(0,r.default)(this,t),(n=(0,l.default)(this,(0,d.default)(t).call(this,e))).increment=n.increment.bind((0,i.default)(n)),n.decrement=n.decrement.bind((0,i.default)(n)),n.state={counter:1},n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(s.default.createElement("div",{key:"Slide ".concat(t),className:f("slide")},s.default.createElement("h2",null,"Slide",t),s.default.createElement("br",null),s.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?s.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return s.default.createElement("div",{className:f("container")},s.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),t}(s.default.Component);b.propTypes={isAnimated:c.default.bool};var h=b;t.default=h},1977:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(23)),o=a(n(25)),l=a(n(26)),d=a(n(27)),i=a(n(29)),u=a(n(28)),s=a(n(0)),c=a(n(2)),m=a(n(4)),p=a(n(365)),_=a(n(1128)),f=m.default.bind(_.default),b=function(e){function t(e){var n;return(0,r.default)(this,t),(n=(0,l.default)(this,(0,d.default)(t).call(this,e))).increment=n.increment.bind((0,i.default)(n)),n.decrement=n.decrement.bind((0,i.default)(n)),n.state={counter:1},n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(s.default.createElement("div",{key:"Slide ".concat(t),className:f("slide")},s.default.createElement("h2",null,"Slide",t),s.default.createElement("br",null),s.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?s.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return s.default.createElement("div",{className:f("container")},s.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),t}(s.default.Component);b.propTypes={isAnimated:c.default.bool};var h=function(){return s.default.createElement(b,{isAnimated:!0})};t.default=h},2430:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var a=n(17),r=n.n(a),o=n(22),l=n.n(o),d=n(0),i=n.n(d),u=n(354),s=n(1450),c=n(1014),m=n.n(c),p=function(){return Object(u.mdx)(m.a,{rows:[{name:"items",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(u.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"array"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(u.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"The array of components for the group. Only the last component is visible. The others are hidden but still mounted."))}return t.isMDXComponent=!0,t({})}},{name:"isAnimated",type:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(u.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=l()(t,["components"]);return Object(u.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(u.mdx)("p",null,"When true, the transition between slides is animated."))}return t.isMDXComponent=!0,t({})}}]})},_=n(1976),f=n.n(_),b={};function h(e){var t=e.components,n=l()(e,["components"]);return Object(u.mdx)("wrapper",r()({},b,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("pre",null,Object(u.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nexport default SlideGroupDemo;\n\n")))}h.isMDXComponent=!0;var v=n(1009),y=n.n(v),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.a.createElement(y.a,{title:t||"Slide Group Demo",description:n,example:i.a.createElement(f.a,null),exampleSrc:i.a.createElement(h,null),isExpanded:a})},g=n(1977),T=n.n(g),E={};function O(e){var t=e.components,n=l()(e,["components"]);return Object(u.mdx)("wrapper",r()({},E,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("pre",null,Object(u.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nconst AnimatedSlideGroup = () => (\n  <SlideGroupDemo isAnimated />\n);\nexport default AnimatedSlideGroup;\n\n")))}O.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.a.createElement(y.a,{title:t||"Slide Group Demo Animated",description:n,example:i.a.createElement(T.a,null),exampleSrc:i.a.createElement(O,null),isExpanded:a})},N={};function S(e){var t=e.components,n=l()(e,["components"]);return Object(u.mdx)("wrapper",r()({},N,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)(s.a,{mdxType:"Badge"}),Object(u.mdx)("h1",{id:"terra-slide-group"},"Terra Slide Group"),Object(u.mdx)("p",null,"The SlideGroup is a utility component that utilizes the ",Object(u.mdx)("inlineCode",{parentName:"p"},"react-transition-group")," library to present a stack of components in an\nanimated fashion."),Object(u.mdx)("p",null,"The last component in the group is visible, and all others are hidden. While the hidden components are not visible and\nmarked with the ",Object(u.mdx)("inlineCode",{parentName:"p"},"aria-hidden")," attribute, they are not actually unmounted."),Object(u.mdx)("p",null,"As a utility component, any component utilizing the SlideGroup will need to handle the keyboard accessibility of the content on each slide."),Object(u.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(u.mdx)("ul",null,Object(u.mdx)("li",{parentName:"ul"},"Install with ",Object(u.mdx)("a",r()({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(u.mdx)("ul",{parentName:"li"},Object(u.mdx)("li",{parentName:"ul"},Object(u.mdx)("inlineCode",{parentName:"li"},"npm install terra-slide-group"))))),Object(u.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(u.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(u.mdx)("table",null,Object(u.mdx)("thead",{parentName:"table"},Object(u.mdx)("tr",{parentName:"thead"},Object(u.mdx)("th",r()({parentName:"tr"},{align:null}),"Peer Dependency"),Object(u.mdx)("th",r()({parentName:"tr"},{align:null}),"Version"))),Object(u.mdx)("tbody",{parentName:"table"},Object(u.mdx)("tr",{parentName:"tbody"},Object(u.mdx)("td",r()({parentName:"tr"},{align:null}),"react"),Object(u.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")),Object(u.mdx)("tr",{parentName:"tbody"},Object(u.mdx)("td",r()({parentName:"tr"},{align:null}),"react-dom"),Object(u.mdx)("td",r()({parentName:"tr"},{align:null}),"^16.8.5")))),Object(u.mdx)("h2",{id:"usage"},"Usage"),Object(u.mdx)("pre",null,Object(u.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import SlideGroup from 'terra-slide-group';\n")),Object(u.mdx)("p",null,Object(u.mdx)("a",r()({parentName:"p"},{href:"https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-group"}),"View Component Source Code")),Object(u.mdx)("h2",{id:"examples"},"Examples"),Object(u.mdx)(x,{title:"Non-Animated SlideGroup",mdxType:"SlideGroupDemo"}),Object(u.mdx)(j,{title:"Animated SlideGroup",mdxType:"SlideGroupDemoAnimated"}),Object(u.mdx)("h2",{id:"slide-group-props-table"},"Slide Group Props Table"),Object(u.mdx)(p,{mdxType:"SlideGroupPropsTable"}))}S.isMDXComponent=!0}}]);
//# sourceMappingURL=97-33890dd0d45dfa6ba39d.js.map
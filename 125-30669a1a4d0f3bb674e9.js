(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1006:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(0)),r=d(l(2)),o=d(l(4)),n=d(l(1007));function d(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(n.default),i={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.name,l=e.url,r=e.version;return a.default.createElement("div",{className:u("badge-container")},a.default.createElement("a",{className:u("badge"),href:l||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:u("badge-name")},l?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(r))))};s.propTypes=i;var _=s;t.default=_},1007:function(e,t,l){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1009:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(0)),r=d(l(2)),o=d(l(4)),n=d(l(1013));function d(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,l){return t&&_(e.prototype,t),l&&_(e,l),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=o.default.bind(n.default),m={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},b=function(e){function t(e){var l,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(l=!(r=i(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?s(a):r).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},l.handleBgToggle=l.handleBgToggle.bind(s(l)),l.handleCodeToggle=l.handleCodeToggle.bind(s(l)),l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),c(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:f("header")},a.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:f("description")},e):null}}]),c(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,l=e.example,r=e.exampleSrc,o=e.title,n=e.description,d=this.state,u=d.isExpanded,i=d.isBackgroundTransparent;return a.default.createElement("div",{className:f("template")},t.renderHeader(o),a.default.createElement("div",{className:f("content",{"dynamic-content":i})},t.renderDescription(n),l),r&&a.default.createElement("div",{className:f("footer")},a.default.createElement("div",{className:f("button-container")},a.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:f("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:f("chevron-right")}))),u&&a.default.createElement("div",{className:f("code")},r)))}}]),t}(a.default.Component);b.propTypes=m,b.defaultProps={isExpanded:!1};var h=b;t.default=h},1013:function(e,t,l){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1014:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(l(0)),r=d(l(2)),o=d(l(4)),n=d(l(1022));function d(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(n.default),i={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},s=function(e){var t=e.rows;return a.default.createElement("table",{className:u("table")},a.default.createElement("thead",null,a.default.createElement("tr",{className:u("tr")},a.default.createElement("th",{className:u("th")},"Prop Name"),a.default.createElement("th",{className:u("th")},"Type"),a.default.createElement("th",{className:u("th")},"Is Required"),a.default.createElement("th",{className:u("th")},"Default Value"),a.default.createElement("th",{className:u("th")},"Description"))),a.default.createElement("tbody",null,t.map((function(e){return a.default.createElement("tr",{className:u(["tr","props-tr"]),key:e.name},a.default.createElement("td",{className:u(["td","strong","props-td"])},e.name),a.default.createElement("td",{className:u(["td","props-td"])},e.type()),a.default.createElement("td",{className:u(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),a.default.createElement("td",{className:u(["td","props-td"])},e.defaultValue),a.default.createElement("td",{className:u(["td","props-td"])},e.description()))}))))};s.propTypes=i;var _=s;t.default=_},1022:function(e,t,l){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},1098:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(l(0)),r=u(l(2)),o=u(l(357)),n=u(l(360)),d=u(l(366));function u(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var _={inputId:r.default.string.isRequired,label:r.default.node.isRequired,defaultValue:r.default.oneOfType([r.default.string,r.default.number]),disabled:r.default.bool,error:r.default.node,errorIcon:r.default.element,help:r.default.node,hideRequired:r.default.bool,inputAttrs:r.default.object,isIncomplete:r.default.bool,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,labelAttrs:r.default.object,maxWidth:r.default.string,onChange:r.default.func,placeholder:r.default.string,refCallback:r.default.func,required:r.default.bool,showOptional:r.default.bool,type:r.default.string,value:r.default.oneOfType([r.default.string,r.default.number])},c={defaultValue:void 0,disabled:!1,error:null,errorIcon:a.default.createElement(n.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,placeholder:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},p=function(e){var t,l=e.defaultValue,r=e.disabled,n=e.error,u=e.errorIcon,_=e.help,c=e.hideRequired,p=e.inputAttrs,f=e.inputId,m=e.isIncomplete,b=e.isInline,h=e.isInvalid,g=e.isLabelHidden,v=e.label,y=e.labelAttrs,T=e.maxWidth,E=e.onChange,P=e.placeholder,O=e.refCallback,x=e.required,N=e.showOptional,k=e.type,w=e.value,q=s(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","placeholder","refCallback","required","showOptional","type","value"]);_&&n&&h?t="".concat(f,"-error ").concat(f,"-help"):(_&&(t="".concat(f,"-help")),n&&h&&(t="".concat(f,"-error")));var I=k||p.type;return a.default.createElement(o.default,i({label:v,labelAttrs:y,error:n,errorIcon:u,help:_,hideRequired:c,required:x,showOptional:N,isInvalid:h,isInline:b,isLabelHidden:g,htmlFor:f,maxWidth:T},q),a.default.createElement(d.default,i({},p,{disabled:p.disabled||r,id:f,isIncomplete:m,type:I,onChange:E,placeholder:P||p.placeholder,value:w,defaultValue:l,refCallback:O,"aria-describedby":t})))};p.propTypes=_,p.defaultProps=c;var f=p;t.default=f}}]);
//# sourceMappingURL=125-30669a1a4d0f3bb674e9.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1006:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(2)),o=i(n(4)),r=i(n(1007));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(r.default),u={name:l.default.string.isRequired,url:l.default.string,version:l.default.string.isRequired},d=function(e){var t=e.name,n=e.url,l=e.version;return a.default.createElement("div",{className:c("badge-container")},a.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(l)},a.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(l))))};d.propTypes=u;var s=d;t.default=s},1007:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1009:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(2)),o=i(n(4)),r=i(n(1013));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=o.default.bind(r.default),g={example:l.default.element,exampleSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},_=function(e){function t(e){var n,a,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(l=u(t).call(this,e))||"object"!==c(l)&&"function"!=typeof l?d(a):l).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(d(n)),n.handleCodeToggle=n.handleCodeToggle.bind(d(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),m(t,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:f("header")},a.default.createElement("h2",{className:f("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:f("description")},e):null}}]),m(t,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.example,l=e.exampleSrc,o=e.title,r=e.description,i=this.state,c=i.isExpanded,u=i.isBackgroundTransparent;return a.default.createElement("div",{className:f("template")},t.renderHeader(o),a.default.createElement("div",{className:f("content",{"dynamic-content":u})},t.renderDescription(r),n),l&&a.default.createElement("div",{className:f("footer")},a.default.createElement("div",{className:f("button-container")},a.default.createElement("button",{type:"button",className:f("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:f("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:f("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:f("chevron-right")}))),c&&a.default.createElement("div",{className:f("code")},l)))}}]),t}(a.default.Component);_.propTypes=g,_.defaultProps={isExpanded:!1};var v=_;t.default=v},1013:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},1034:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(2)),o=i(n(4)),r=i(n(1058));function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=o.default.bind(r.default),s={variant:l.default.oneOf(["light","dark"]),title:l.default.string},m=function(e){var t=e.variant,n=e.title,l=u(e,["variant","title"]),o=d(["placeholder",l.className]),r=d(["inner","is-".concat(t)]);return a.default.createElement("div",c({},l,{className:o}),a.default.createElement("div",{className:r},a.default.createElement("h2",null,n)))};m.propTypes=s,m.defaultProps={variant:"dark",title:""};var p=m;t.default=p},1044:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l.default}});var l=a(n(361))},1058:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___37I0I",inner:"Placeholder-module__inner___2DX7N","is-light":"Placeholder-module__is-light___3__YD","is-dark":"Placeholder-module__is-dark___9wQwQ"}},1088:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(73));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M47.4 43.2l-13-13A19.66 19.66 0 0038 19a19 19 0 10-7.9 15.4l13 13a2.05 2.05 0 002.9 0l1.4-1.4a1.93 1.93 0 000-2.8zM3 19a16 16 0 1116 16A16 16 0 013 19z"}))};i.displayName="IconSearch",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var c=i;t.default=c},1089:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(73));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M48 8v16h-6v-5.7L25.31 35l-4.56-4.56L9.18 42H48v6H0V0h6v36.7l14.75-14.76 4.56 4.56L37.82 14H32V8z"}))};i.displayName="IconVisualization",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c},1111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(73));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M44.7 3.2C42.6 1.1 39.8 0 37 0s-5.7 1.1-7.8 3.3l-26 26c-4.3 4.3-4.2 11.3.1 15.6 2.1 2 4.9 3.1 7.7 3.1s5.7-1.1 7.8-3.3l26-26c4.3-4.3 4.3-11.3-.1-15.5zm-2 13.4l-13 13-11.4-11.2 13-13C32.8 3.8 34.8 3 37 3c2.1 0 4.1.8 5.6 2.3S45 8.8 45 11c0 2.1-.8 4.1-2.3 5.6z"}))};i.displayName="IconPill",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var c=i;t.default=c},1112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(73));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M24 0A14.94 14.94 0 009.1 14.9a15.52 15.52 0 001.5 6.5 14.69 14.69 0 004.1 5.1 12.06 12.06 0 014.3 6.7 2.19 2.19 0 00-1.1 1.8v7.8a2.11 2.11 0 002.1 2.1h1a3 3 0 106 0h.9a2.11 2.11 0 002.1-2.1V35a2.06 2.06 0 00-1.1-1.8 12.4 12.4 0 014.1-6.6 16.23 16.23 0 004.4-5.3 14.43 14.43 0 001.5-6.5A14.92 14.92 0 0024 0zm7 24.4a15.76 15.76 0 00-3.9 5 11.75 11.75 0 00-1.2 3.6h-.2V20h2a1.54 1.54 0 001.5-1.5 1.56 1.56 0 00-1.6-1.5h-7a1.5 1.5 0 000 3h2v13h-.5a13.86 13.86 0 00-1.2-3.6 14.67 14.67 0 00-4.5-5.4h.1a12 12 0 01-4.3-9.1A11.78 11.78 0 0124 3a11.93 11.93 0 0111.9 11.9 12 12 0 01-4.9 9.5z"}))};i.displayName="IconLightbulb",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var c=i;t.default=c},1159:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),l=n.n(a),o=n(1006),r=n.n(o),i=function(e){var t=e.url;return l.a.createElement(r.a,{name:"terra-application-navigation",version:"1.23.0",url:t})}},1632:function(e,t,n){"use strict";var a=n(14),l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(94)),r=a(n(0)),i=l(n(1044)),c=l(n(1088)),u=l(n(1111)),d=l(n(1089)),s=l(n(1112)),m=l(n(1034)),p=l(n(1633)),f=l(n(362)),g={title:"Test Title"},_={name:"Test Name",initials:"TN"},v=[{icon:r.default.createElement(c.default,null),key:"item-a",text:"Item A",metaData:{test:"a"}},{icon:r.default.createElement(u.default,null),key:"item-b",text:"Item B",metaData:{test:"b"}},{icon:r.default.createElement(d.default,null),key:"item-c",text:"Item C",metaData:{test:"c"}},{icon:r.default.createElement(s.default,null),key:"item-d",text:"Item D",metaData:{test:"d"}}],y=[{key:"/page_1",text:"Page 1",metaData:{display:"Page 1"}},{key:"/page_2",text:"Page 2",metaData:{display:"Page 2"}},{key:"/page_3",text:"Page 3",metaData:{display:"Page 3"}},{key:"/page_4",text:"Page 4",metaData:{display:"Page 4"}},{key:"/page_5",text:"Page 5",metaData:{display:"Page 5"}},{key:"/page_6",text:"Page 6",metaData:{display:"Page 6"}},{key:"/page_7",text:"Page 7",metaData:{display:"Page 7"}},{key:"/page_8",text:"Page 8",metaData:{display:"Page 8"}}],b=[{icon:r.default.createElement(c.default,null),key:"item-a",text:"Item A",metaData:{test:"a"}},{icon:r.default.createElement(u.default,null),key:"item-b",text:"Item B",metaData:{test:"b"}},{icon:r.default.createElement(d.default,null),key:"item-c",text:"Item C",metaData:{test:"c"}},{icon:r.default.createElement(s.default,null),key:"item-d",text:"Item D",metaData:{test:"d"}}],x=function(e){var t=e.onAction,n=(0,r.useState)(y[0].key),a=(0,o.default)(n,2),l=a[0],c=a[1];return r.default.createElement(i.default,{locale:"en-US"},r.default.createElement(f.default,{titleConfig:g,userConfig:_,extensionItems:v,onSelectExtensionItem:t,navigationItems:y,activeNavigationItemKey:l,onSelectNavigationItem:function(e){return c(e)},utilityItems:b,onSelectUtilityItem:t,onSelectSettings:function(){return t("settings")},onSelectHelp:function(){return t("help")},onSelectLogout:function(){return t("logout")}},r.default.createElement(m.default,{title:l})))},h=function(){return r.default.createElement(p.default,null,r.default.createElement(x,null))};t.default=h},1633:function(e,t,n){"use strict";var a=n(14),l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(94)),r=a(n(0)),i=l(n(4)),c=l(n(1634)),u=i.default.bind(c.default),d=function(e){var t=e.children,n=(0,r.useState)(null),a=(0,o.default)(n,2),l=a[0],i=a[1];function c(e){i("Current Action: ".concat(e))}return r.default.createElement("div",null,l,r.default.createElement("div",{className:u("wrapper")},r.default.Children.map(t,(function(e){return r.default.cloneElement(e,{onAction:c})}))))};t.default=d},1634:function(e,t,n){e.exports={wrapper:"ExampleWrapper-module__wrapper___1fs0r"}},2443:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(17),l=n.n(a),o=n(22),r=n.n(o),i=n(0),c=n.n(i),u=n(354),d=n(1159),s=n(1632),m=n.n(s),p={};function f(e){var t=e.components,n=r()(e,["components"]);return Object(u.mdx)("wrapper",l()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)("pre",null,Object(u.mdx)("code",l()({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable react/prop-types */\nimport React, { useState } from 'react';\nimport ApplicationBase from 'terra-application/lib/application-base';\nimport IconSearch from 'terra-icon/lib/icon/IconSearch';\nimport IconPill from 'terra-icon/lib/icon/IconPill';\nimport IconVisualization from 'terra-icon/lib/icon/IconVisualization';\nimport IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport ExampleWrapper from './ExampleWrapper';\nimport ApplicationNavigation from '../../../ApplicationNavigation';\n\nconst titleConfig = {\n  title: 'Test Title',\n};\n\nconst userConfig = {\n  name: 'Test Name',\n  initials: 'TN',\n};\n\nconst extensionItems = [\n  {\n    icon: <IconSearch />,\n    key: 'item-a',\n    text: 'Item A',\n    metaData: {\n      test: 'a',\n    },\n  }, {\n    icon: <IconPill />,\n    key: 'item-b',\n    text: 'Item B',\n    metaData: {\n      test: 'b',\n    },\n  }, {\n    icon: <IconVisualization />,\n    key: 'item-c',\n    text: 'Item C',\n    metaData: {\n      test: 'c',\n    },\n  }, {\n    icon: <IconLightbulb />,\n    key: 'item-d',\n    text: 'Item D',\n    metaData: {\n      test: 'd',\n    },\n  },\n];\n\nconst navigationItems = [\n  {\n    key: '/page_1',\n    text: 'Page 1',\n    metaData: {\n      display: 'Page 1',\n    },\n  }, {\n    key: '/page_2',\n    text: 'Page 2',\n    metaData: {\n      display: 'Page 2',\n    },\n  }, {\n    key: '/page_3',\n    text: 'Page 3',\n    metaData: {\n      display: 'Page 3',\n    },\n  }, {\n    key: '/page_4',\n    text: 'Page 4',\n    metaData: {\n      display: 'Page 4',\n    },\n  }, {\n    key: '/page_5',\n    text: 'Page 5',\n    metaData: {\n      display: 'Page 5',\n    },\n  }, {\n    key: '/page_6',\n    text: 'Page 6',\n    metaData: {\n      display: 'Page 6',\n    },\n  }, {\n    key: '/page_7',\n    text: 'Page 7',\n    metaData: {\n      display: 'Page 7',\n    },\n  }, {\n    key: '/page_8',\n    text: 'Page 8',\n    metaData: {\n      display: 'Page 8',\n    },\n  },\n];\n\nconst utilityItems = [\n  {\n    icon: <IconSearch />,\n    key: 'item-a',\n    text: 'Item A',\n    metaData: {\n      test: 'a',\n    },\n  }, {\n    icon: <IconPill />,\n    key: 'item-b',\n    text: 'Item B',\n    metaData: {\n      test: 'b',\n    },\n  }, {\n    icon: <IconVisualization />,\n    key: 'item-c',\n    text: 'Item C',\n    metaData: {\n      test: 'c',\n    },\n  }, {\n    icon: <IconLightbulb />,\n    key: 'item-d',\n    text: 'Item D',\n    metaData: {\n      test: 'd',\n    },\n  },\n];\n\nconst ExampleApplication = ({ onAction }) => {\n  const [activeKey, setActiveKey] = useState(navigationItems[0].key);\n\n  return (\n    <ApplicationBase locale=\"en-US\">\n      <ApplicationNavigation\n        titleConfig={titleConfig}\n        userConfig={userConfig}\n        extensionItems={extensionItems}\n        onSelectExtensionItem={onAction}\n        navigationItems={navigationItems}\n        activeNavigationItemKey={activeKey}\n        onSelectNavigationItem={key => setActiveKey(key)}\n        utilityItems={utilityItems}\n        onSelectUtilityItem={onAction}\n        onSelectSettings={() => onAction('settings')} // eslint-disable-line no-alert\n        onSelectHelp={() => onAction('help')} // eslint-disable-line no-alert\n        onSelectLogout={() => onAction('logout')} // eslint-disable-line no-alert\n      >\n        <Placeholder title={activeKey} />\n      </ApplicationNavigation>\n    </ApplicationBase>\n  );\n};\n\nconst ExampleNavigation = () => (\n  <ExampleWrapper>\n    <ExampleApplication />\n  </ExampleWrapper>\n);\n\nexport default ExampleNavigation;\n\n")))}f.isMDXComponent=!0;var g=n(1009),_=n.n(g),v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return c.a.createElement(_.a,{title:t||"Example Application",description:n,example:c.a.createElement(m.a,null),exampleSrc:c.a.createElement(f,null),isExpanded:a})},y={};function b(e){var t=e.components,n=r()(e,["components"]);return Object(u.mdx)("wrapper",l()({},y,n,{components:t,mdxType:"MDXLayout"}),Object(u.mdx)(d.a,{mdxType:"Badge"}),Object(u.mdx)("h1",{id:"terra-application-navigation"},"Terra Application Navigation"),Object(u.mdx)("h2",{id:"examples"},"Examples"),Object(u.mdx)(v,{mdxType:"ExampleApplication"}))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=77-d328f7d7200e3d243aac.js.map
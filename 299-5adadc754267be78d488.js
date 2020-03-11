(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1006:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=d(a(0)),o=d(a(2)),t=d(a(4)),s=d(a(1007));function d(e){return e&&e.__esModule?e:{default:e}}var p=t.default.bind(s.default),c={name:o.default.string.isRequired,url:o.default.string,version:o.default.string.isRequired},l=function(e){var n=e.name,a=e.url,o=e.version;return r.default.createElement("div",{className:p("badge-container")},r.default.createElement("a",{className:p("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:p("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:p("badge-version")},"v".concat(o))))};l.propTypes=c;var i=l;n.default=i},1007:function(e,n,a){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1216:function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var r=a(0),o=a.n(r),t=a(1006),s=a.n(t),d=function(e){var n=e.url;return o.a.createElement(s.a,{name:"terra-modal-manager",version:"6.29.0",url:n})}},2096:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return l}));var r=a(17),o=a.n(r),t=a(22),s=a.n(t),d=(a(0),a(354)),p=a(1216),c={};function l(e){var n=e.components,a=s()(e,["components"]);return Object(d.mdx)("wrapper",o()({},c,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)(p.a,{mdxType:"Badge"}),Object(d.mdx)("h1",{id:"terra-modal-manager---upgrade-guide"},"Terra Modal Manager - Upgrade Guide"),Object(d.mdx)("h2",{id:"upgrading-from-v3x-to-v4x"},"Upgrading from v3.x to v4.x"),Object(d.mdx)("p",null,"With the release of terra-disclosure-manager v3.x, the ModalManager now provides its APIs through context instead of prop injection. Please view the terra-disclosure-manager documentation/upgrade guide for more information. "),Object(d.mdx)("p",null,"The below example code details the changes necessary to interact with terra-modal-manager v4.x."),Object(d.mdx)("pre",null,Object(d.mdx)("code",o()({parentName:"pre"},{className:"language-diff"}),"/**\n * v3.x to v4.x\n */\n import Base from 'terra-base';\n import ModalManager from 'terra-modal-manager'; \n- import AppDelegate from 'terra-app-delegate';\n+ import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\n- const MyDisclosureComponent = ({ app }) => (\n+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n   <Button\n     text=\"Close Modal\"\n     onClick={() => { \n-      app.closeDisclosure();\n+      disclosureManager.closeDisclosure();\n     }}\n   />\n- );\n+ ));\n\n MyDisclosureComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n- const MyComponent = ({ app }) => (\n+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n    <Button\n      text=\"Launch Modal\"\n      onClick={() => { \n-       app.disclose({\n+       disclosureManager.disclose({\n          preferredType: 'modal',\n          content: {\n            key: 'MY-MODAL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n- );\n+ ));\n \n MyComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n const MyApp = () => (\n   <Base locale=\"en\">\n     <ModalManager>\n       <MyComponent />\n     </ModalManager>\n   </Base>\n );\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=299-5adadc754267be78d488.js.map
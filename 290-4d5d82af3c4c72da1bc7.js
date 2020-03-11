(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1006:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=c(a(0)),r=c(a(2)),o=c(a(4)),s=c(a(1007));function c(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(s.default),l={name:r.default.string.isRequired,url:r.default.string,version:r.default.string.isRequired},d=function(e){var n=e.name,a=e.url,r=e.version;return t.default.createElement("div",{className:i("badge-container")},t.default.createElement("a",{className:i("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},t.default.createElement("span",{className:i("badge-name")},a?"package":"npm"),t.default.createElement("span",{className:i("badge-version")},"v".concat(r))))};d.propTypes=l;var u=d;n.default=u},1007:function(e,n,a){e.exports={badge:"NpmBadge-module__badge___3p041","badge-container":"NpmBadge-module__badge-container___2W9ft","badge-name":"NpmBadge-module__badge-name___2TNAy","badge-version":"NpmBadge-module__badge-version___3bRIz"}},1117:function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));var t=a(0),r=a.n(t),o=a(1006),s=a.n(o),c=function(e){var n=e.url;return r.a.createElement(s.a,{name:"terra-disclosure-manager",version:"4.32.0",url:n})}},2077:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return d}));var t=a(17),r=a.n(t),o=a(22),s=a.n(o),c=(a(0),a(354)),i=a(1117),l={};function d(e){var n=e.components,a=s()(e,["components"]);return Object(c.mdx)("wrapper",r()({},l,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)(i.a,{mdxType:"Badge"}),Object(c.mdx)("h1",{id:"interacting-with-the-disclosure-manager"},"Interacting with the Disclosure Manager"),Object(c.mdx)("p",null,"The DisclosureManager wraps its contents in a context provider that exposes an instance of a DisclosureManagerDelegate. The DisclosureManagerDelegate is an object containing DisclosureManager APIs that reflect where a component has been rendered in the disclosure stack."),Object(c.mdx)("p",null,"The Disclosure Manager exposes the DisclosureManagerDelegate via the DisclosureManagerContext. This context can be used directly via the ",Object(c.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext")," or it can be consumed with the HOC ",Object(c.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager")," wrapper."),Object(c.mdx)("h2",{id:"disclosuremanagercontext"},"DisclosureManagerContext"),Object(c.mdx)("p",null,"The ",Object(c.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext")," can be used directly to access the available DisclosureManager APIs."),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ModalManager from 'terra-modal-manager'; \nimport { DisclosureManagerContext } from 'terra-disclosure-manager';\n\nconst DisclosedComponent = () => {\nconst disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <Button\n      text=\"Close Modal\"\n      onClick={() => { \n        disclosureManager.closeDisclosure();\n      }}\n    />\n  );\n};\n\nconst DisclosingComponent = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <ModalManager>\n      <Button\n        text=\"Launch Modal\"\n        onClick={() => { \n          disclosureManager.disclose({\n            preferredType: 'modal',\n            content: {\n              key: 'DISCLOSED-COMPONENT',\n              title: 'My Disclosed Component',\n              component: <DisclosedComponent />,\n            }\n          });\n        }}\n      />\n    </ModalManager>\n  );\n};\n")),Object(c.mdx)("h4",{id:"withdisclosuremanager"},"withDisclosureManager"),Object(c.mdx)("p",null,"Components can also use the higher order component ",Object(c.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()")," to automatically wrap themselves in a context consumer and receive a prop named ",Object(c.mdx)("inlineCode",{parentName:"p"},"disclosureManager")," containing a DisclosureManagerDelegate instance."),Object(c.mdx)("pre",null,Object(c.mdx)("code",r()({parentName:"pre"},{className:"language-jsx"}),"import Base from 'terra-base';\nimport ModalManager from 'terra-modal-manager';\nimport { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\nconst DisclosedComponent = withDisclosureManager(({ disclosureManager }) => (\n  <Button\n    text=\"Close Modal\"\n    onClick={() => {\n      disclosureManager.closeDisclosure();\n    }}\n  />\n));\n\nDisclosedComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n};\n\nconst DisclosingComponent = withDisclosureManager({ disclosureManager }) => (\n  <Button\n    text=\"Launch Modal\"\n    onClick={() => {\n      disclosureManager.disclose({\n        preferredType: 'modal',\n        content: {\n          key: 'MY-MODAL-DISCLOSURE',\n          component: <MyDisclosureComponent />,\n        }\n      });\n    }}\n  />\n);\n\nDisclosingComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n};\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=290-4d5d82af3c4c72da1bc7.js.map
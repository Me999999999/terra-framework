(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1030:function(e,n,l){"use strict";var a=l(6);Object.defineProperty(n,"__esModule",{value:!0}),n.SlidePanelPositions=n.default=void 0;var t=a(l(17)),i=a(l(22)),o=a(l(23)),d=a(l(25)),s=a(l(26)),r=a(l(27)),p=a(l(29)),u=a(l(28)),f=a(l(0)),_=a(l(2)),c=a(l(4)),m=a(l(1041)),v=c.default.bind(m.default),P={START:"start",END:"end"};n.SlidePanelPositions=P;var h={panelAriaLabel:_.default.string,mainAriaLabel:_.default.string,mainContent:_.default.node,panelContent:_.default.node,panelBehavior:_.default.oneOf(["overlay","squish"]),panelPosition:_.default.oneOf(["start","end"]),panelSize:_.default.oneOf(["small","large"]),isFullscreen:_.default.bool,isOpen:_.default.bool,fill:_.default.bool},b={panelBehavior:"overlay",panelPosition:P.END,panelSize:"small"},S=function(e){function n(e){var l;return(0,o.default)(this,n),(l=(0,s.default)(this,(0,r.default)(n).call(this,e))).setPanelNode=l.setPanelNode.bind((0,p.default)(l)),l.mainNode=f.default.createRef(),l}return(0,u.default)(n,e),(0,d.default)(n,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,n=e.panelAriaLabel,l=e.mainAriaLabel,a=e.mainContent,o=e.panelContent,d=e.panelBehavior,s=e.panelPosition,r=e.panelSize,p=e.isFullscreen,u=e.isOpen,_=e.fill,c=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),m=v(["slide-panel",{"is-open":u},{"is-fullscreen":p},{fill:_},c.className]),h=f.default.createElement("div",{className:v(["panel"]),tabIndex:"-1","aria-label":n,"aria-hidden":u?"false":"true",ref:this.setPanelNode},o),b=f.default.createElement("div",{className:v("main"),tabIndex:"-1","aria-label":l,ref:this.mainNode},a),S=s===P.START?f.default.createElement(f.default.Fragment,null,h,b):f.default.createElement(f.default.Fragment,null,b,h);return f.default.createElement("div",(0,t.default)({},c,{className:m,"data-slide-panel-panel-behavior":d,"data-slide-panel-panel-position":s,"data-slide-panel-panel-size":r}),S)}}]),n}(f.default.Component);S.propTypes=h,S.defaultProps=b;var N=S;n.default=N},1041:function(e,n,l){e.exports={"slide-panel":"SlidePanel-module__slide-panel___16_Ez",main:"SlidePanel-module__main___Qtxtf",panel:"SlidePanel-module__panel___2NV-G","is-open":"SlidePanel-module__is-open___IAbgR","is-fullscreen":"SlidePanel-module__is-fullscreen___29Ymh",fill:"SlidePanel-module__fill___11BRG"}},1129:function(e,n,l){e.exports={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___1FDjp","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___9DcFW","main-content":"SlidePanelDocCommon-test-module__main-content___25hpF","panel-content":"SlidePanelDocCommon-test-module__panel-content___3OmYU","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___1Zi-9",button:"SlidePanelDocCommon-test-module__button___3r3Sh"}},2363:function(e,n,l){"use strict";var a=l(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(l(0)),i=a(l(4)),o=a(l(1030)),d=a(l(1129)),s=i.default.bind(d.default),r=function(){return t.default.createElement("div",{className:s("content-wrapper-large")},t.default.createElement(o.default,{mainContent:t.default.createElement("div",{className:s("main-content")}),panelContent:t.default.createElement("div",{className:s("panel-content")}),panelBehavior:"squish",panelSize:"large",isOpen:!0,fill:!0}))};n.default=r}}]);
//# sourceMappingURL=242-695497f0702eebc74824.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[454],{1231:function(e,t,n){e.exports={"content-wrapper":"SizePopupCommon-module__content-wrapper___2qyEy","popup-area-small":"SizePopupCommon-module__popup-area-small___3OhXN","popup-area-medium":"SizePopupCommon-module__popup-area-medium___1d41l","popup-area-invalid":"SizePopupCommon-module__popup-area-invalid___3Y2g9"}},2357:function(e,t,n){"use strict";var o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(23)),u=o(n(25)),d=o(n(26)),l=o(n(27)),i=o(n(29)),s=o(n(28)),p=o(n(0)),r=o(n(4)),f=o(n(132)),c=o(n(1231)),m=r.default.bind(c.default),h=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,d.default)(this,(0,l.default)(t).call(this,e))).handleButtonClick=n.handleButtonClick.bind((0,i.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,i.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,i.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,i.default)(n)),n.setParentNode=n.setParentNode.bind((0,i.default)(n)),n.getParentNode=n.getParentNode.bind((0,i.default)(n)),n.state={open:!0},n}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return p.default.createElement("div",{className:m("content-wrapper")},p.default.createElement("div",{id:"test-popup-area",className:m("popup-area-medium"),ref:this.setParentNode},p.default.createElement(f.default,{boundingRef:this.getParentNode,classNameArrow:"test-arrow",classNameContent:"test-content",contentHeight:"120",contentWidth:"320",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},p.default.createElement("p",null,"This popup is 120h by 320w.")),p.default.createElement("button",{type:"button",id:"dimension-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Medium Popup")))}}]),t}(p.default.Component);t.default=h}}]);
//# sourceMappingURL=454-9b7960b782e80add51db.js.map
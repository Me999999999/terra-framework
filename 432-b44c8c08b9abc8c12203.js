(window.webpackJsonp=window.webpackJsonp||[]).push([[432],{1230:function(e,t,u){e.exports={content:"NavigationSideMenuDocCommon-module__content___qpu7Q","content-wrapper":"NavigationSideMenuDocCommon-module__content-wrapper___2TEdv",toolbar:"NavigationSideMenuDocCommon-module__toolbar___3R9ov"}},2318:function(e,t,u){"use strict";var n=u(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(u(23)),s=n(u(25)),d=n(u(26)),l=n(u(27)),i=n(u(29)),o=n(u(28)),c=n(u(0)),b=n(u(4)),m=n(u(1103)),r=n(u(1230)),f=b.default.bind(r.default),h=function(e){function t(e){var u;return(0,a.default)(this,t),(u=(0,d.default)(this,(0,l.default)(t).call(this,e))).handleOnChange=u.handleOnChange.bind((0,i.default)(u)),u.resetMenuState=u.resetMenuState.bind((0,i.default)(u)),u.fakeRoutingBack=u.fakeRoutingBack.bind((0,i.default)(u)),u.state={selectedMenuKey:"menu",selectedChildKey:void 0},u}return(0,o.default)(t,e),(0,s.default)(t,[{key:"handleOnChange",value:function(e,t){this.setState({selectedMenuKey:t.selectedMenuKey,selectedChildKey:t.selectedChildKey})}},{key:"resetMenuState",value:function(){this.setState({selectedMenuKey:"menu",selectedChildKey:void 0})}},{key:"fakeRoutingBack",value:function(){this.setState({selectedMenuKey:"fake-parent",selectedChildKey:void 0})}},{key:"render",value:function(){var e;return e="fake-parent"===this.state.selectedMenuKey?c.default.createElement("div",{className:f("content")},c.default.createElement("button",{type:"button",onClick:this.resetMenuState},"Child Route"),c.default.createElement("p",null,"Parent Route")):c.default.createElement(m.default,{id:"test-menu",menuItems:[{key:"menu",text:"Menu",childKeys:["submenu1","submenu2","submenu3","submenu4"]},{key:"submenu1",text:"Sub Menu 1",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Sub Menu 2"},{key:"submenu3",text:"Sub Menu 3"},{key:"submenu4",text:"Sub Menu 4"},{key:"subsubmenu1",text:"Sub-Sub Menu 1",id:"test-item-2"},{key:"subsubmenu2",text:"Sub-Sub Menu 2"},{key:"subsubmenu3",text:"Sub-Sub Menu 3"}],onChange:this.handleOnChange,routingStackBack:this.fakeRoutingBack,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey}),c.default.createElement("div",{className:f("content-wrapper")},e)}}]),t}(c.default.Component);t.default=h}}]);
//# sourceMappingURL=432-b44c8c08b9abc8c12203.js.map
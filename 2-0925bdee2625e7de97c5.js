(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1017:function(e,t,n){"use strict";(function(e){var i=n(14),u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(17)),o=u(n(22)),s=u(n(23)),r=u(n(25)),l=u(n(26)),d=u(n(27)),h=u(n(29)),c=u(n(28)),m=u(n(0)),p=u(n(2)),f=u(n(4)),v=u(n(366)),g=u(n(1046)),_=n(8),M=i(n(19)),I=u(n(1029)),T=u(n(1660)),b=f.default.bind(T.default),y={disabled:p.default.bool,inputAttributes:p.default.object,hourAttributes:p.default.object,intl:_.intlShape.isRequired,isIncomplete:p.default.bool,isInvalid:p.default.bool,isInvalidMeridiem:p.default.bool,minuteAttributes:p.default.object,name:p.default.string.isRequired,onBlur:p.default.func,onChange:p.default.func,onFocus:p.default.func,refCallback:p.default.func,required:p.default.bool,secondAttributes:p.default.object,showSeconds:p.default.bool,value:p.default.string,variant:p.default.oneOf([I.default.FORMAT_12_HOUR,I.default.FORMAT_24_HOUR])},F={disabled:!1,inputAttributes:{},isIncomplete:!1,isInvalid:!1,isInvalidMeridiem:!1,minuteAttributes:{},hourAttributes:{},onBlur:null,onChange:null,onFocus:void 0,refCallback:void 0,required:!1,secondAttributes:{},showSeconds:!1,value:void 0,variant:I.default.FORMAT_24_HOUR},S=function(t){function n(t){var i;(0,s.default)(this,n);var u=(i=(0,l.default)(this,(0,d.default)(n).call(this,t))).props.value,a=i.props.showSeconds;u&&!I.default.validateTime(u,a)&&("production"!==e.env&&console.warn("An invalid time value, ".concat(u,", has been passed to the terra-time-picker. ")+"This value has been ignored and will not be rendered. "+"Time values must be in ".concat(a?"hh:mm:ss":"hh:mm"," format because showSeconds is ").concat(a,".")),u=void 0),i.timeInputContainer=m.default.createRef(),i.handleHourChange=i.handleHourChange.bind((0,h.default)(i)),i.handleMinuteChange=i.handleMinuteChange.bind((0,h.default)(i)),i.handleSecondChange=i.handleSecondChange.bind((0,h.default)(i)),i.handleHourInputKeyDown=i.handleHourInputKeyDown.bind((0,h.default)(i)),i.handleMinuteInputKeyDown=i.handleMinuteInputKeyDown.bind((0,h.default)(i)),i.handleSecondInputKeyDown=i.handleSecondInputKeyDown.bind((0,h.default)(i)),i.handleFocus=i.handleFocus.bind((0,h.default)(i)),i.handleHourFocus=i.handleHourFocus.bind((0,h.default)(i)),i.handleMinuteFocus=i.handleMinuteFocus.bind((0,h.default)(i)),i.handleSecondFocus=i.handleSecondFocus.bind((0,h.default)(i)),i.handleHourBlur=i.handleHourBlur.bind((0,h.default)(i)),i.handleMinuteBlur=i.handleMinuteBlur.bind((0,h.default)(i)),i.handleSecondBlur=i.handleSecondBlur.bind((0,h.default)(i)),i.handleMeridiemButtonFocus=i.handleMeridiemButtonFocus.bind((0,h.default)(i)),i.handleMeridiemButtonBlur=i.handleMeridiemButtonBlur.bind((0,h.default)(i)),i.handleMeridiemButtonChange=i.handleMeridiemButtonChange.bind((0,h.default)(i));var o,r=I.default.splitHour(u);if(I.default.getVariantFromLocale(t)===I.default.FORMAT_12_HOUR)if(i.props.intl.messages["Terra.timeInput.am"]&&i.props.intl.messages["Terra.timeInput.pm"]?(i.anteMeridiem=i.props.intl.formatMessage({id:"Terra.timeInput.am"}),i.postMeridiem=i.props.intl.formatMessage({id:"Terra.timeInput.pm"})):("production"!==e.env&&console.warn("This locale only uses 24 hour clock. The ante meridiem and post meridiem will not be displayed"),i.anteMeridiem="",i.postMeridiem=""),r){var c=I.default.parseTwelveHourTime(r,i.anteMeridiem,i.postMeridiem);r=c.hourString,o=c.meridiem}else o=i.anteMeridiem;return i.state={hour:r,minute:I.default.splitMinute(u),second:I.default.splitSecond(u),isFocused:!1,meridiem:o,hourInitialFocused:!1,minuteInitialFocused:!1,secondInitialFocused:!1},i}return(0,c.default)(n,t),(0,r.default)(n,[{key:"componentDidUpdate",value:function(e){var t=I.default.getVariantFromLocale(this.props);if(this.props.value!==e.value||t!==I.default.getVariantFromLocale(e)){var n=I.default.splitHour(this.props.value),i=this.state.meridiem;if(t===I.default.FORMAT_12_HOUR&&(this.anteMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.am"}),this.postMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.pm"}),n)){var u=I.default.parseTwelveHourTime(n,this.anteMeridiem,this.postMeridiem);n=u.hourString,i=u.meridiem}this.setState({hour:n,minute:I.default.splitMinute(this.props.value),second:I.default.splitSecond(this.props.value),meridiem:i})}}},{key:"handleFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e),this.setState({isFocused:!0})}},{key:"handleSecondFocus",value:function(e){this.handleFocus(e),this.setState({secondInitialFocused:!0}),I.default.isConsideredMobileDevice()||this.secondInput.setSelectionRange(0,this.secondInput.value.length)}},{key:"handleMinuteFocus",value:function(e){this.handleFocus(e),this.setState({minuteInitialFocused:!0}),I.default.isConsideredMobileDevice()||this.minuteInput.setSelectionRange(0,this.minuteInput.value.length)}},{key:"handleHourFocus",value:function(e){this.handleFocus(e),this.setState({hourInitialFocused:!0}),I.default.isConsideredMobileDevice()||this.hourInput.setSelectionRange(0,this.hourInput.value.length)}},{key:"handleHourBlur",value:function(e){this.handleBlur(e,I.default.inputType.HOUR),this.setState({hourInitialFocused:!1})}},{key:"handleMinuteBlur",value:function(e){this.handleBlur(e,I.default.inputType.MINUTE),this.setState({minuteInitialFocused:!1})}},{key:"handleSecondBlur",value:function(e){this.handleBlur(e,I.default.inputType.SECOND),this.setState({secondInitialFocused:!1})}},{key:"handleMeridiemButtonBlur",value:function(e){this.handleBlur(e,I.default.inputType.MERIDIEM)}},{key:"handleBlur",value:function(e,t){if(this.setState({isFocused:!1}),t===I.default.inputType.HOUR||t===I.default.inputType.MINUTE||t===I.default.inputType.SECOND){var n=e.target.value;1===n.length&&(n=I.default.getVariantFromLocale(this.props)===I.default.FORMAT_12_HOUR&&t===I.default.inputType.HOUR&&"0"===n?"12":"0".concat(n),this.handleValueChange(e,t,n,this.state.meridiem))}if(this.props.onBlur){var i=e.relatedTarget?e.relatedTarget:document.activeElement;this.timeInputContainer.current.contains(i)||this.props.onBlur(e)}}},{key:"handleHourChange",value:function(e){var t=this;if(I.default.validNumericInput(e.target.value)){var n=e.target.value,i=this.state.hour,u=I.default.getVariantFromLocale(this.props),a=u===I.default.FORMAT_12_HOUR?12:23;if(!(n===i||n.length>2||Number(n)>a)){if(n.length>=i.length){var o=["3","4","5","6","7","8","9"];u===I.default.FORMAT_12_HOUR&&o.push("2"),o.indexOf(n)>-1&&(n="0".concat(n))}"00"===n&&u===I.default.FORMAT_12_HOUR&&(n="12");this.handleValueChange(e,I.default.inputType.HOUR,n,this.state.meridiem,(function(){2===n.length&&t.minuteInput.focus()}))}}}},{key:"handleMinuteChange",value:function(e){var t=this;if(I.default.validNumericInput(e.target.value)){var n=e.target.value,i=this.state.minute;if(!(n===i||n.length>2||Number(n)>59)){if(n.length>=i.length){["6","7","8","9"].indexOf(n)>-1&&(n="0".concat(n))}this.handleValueChange(e,I.default.inputType.MINUTE,n,this.state.meridiem,(function(){2===n.length&&t.props.showSeconds&&t.secondInput.focus()}))}}}},{key:"handleSecondChange",value:function(e){if(I.default.validNumericInput(e.target.value)){var t=e.target.value,n=this.state.second;if(!(t===n||t.length>2||Number(t)>59)){if(t.length>=n.length){["6","7","8","9"].indexOf(t)>-1&&(t="0".concat(t))}this.handleValueChange(e,I.default.inputType.SECOND,t,this.state.meridiem)}}}},{key:"handleMeridiemButtonFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e)}},{key:"handleHourInputKeyDown",value:function(e){var t=this.state.hour,n=this.state.meridiem,i=t,u=I.default.getVariantFromLocale(this.props);e.keyCode===M.KEY_UP&&(t=I.default.incrementHour(t,u),u===I.default.FORMAT_12_HOUR&&"12"===t&&(n=n!==this.postMeridiem&&i?this.postMeridiem:this.anteMeridiem)),e.keyCode===M.KEY_DOWN&&(t=I.default.decrementHour(t,u),u===I.default.FORMAT_12_HOUR&&"11"===t&&(n=n===this.postMeridiem?this.anteMeridiem:this.postMeridiem)),t!==i&&this.handleValueChange(e,I.default.inputType.HOUR,t,n),e.keyCode===M.KEY_RIGHT&&this.focusMinuteFromHour(e)}},{key:"focusMinuteFromHour",value:function(e){0!==this.state.hour.length&&this.state.hour.length!==this.hourInput.selectionEnd||(this.minuteInput.focus(),this.minuteInput.setSelectionRange(0,0),e.preventDefault())}},{key:"handleMinuteInputKeyDown",value:function(e){var t=this.state.minute,n=t;e.keyCode===M.KEY_UP&&(t=I.default.incrementMinute(t)),e.keyCode===M.KEY_DOWN&&(t=I.default.decrementMinute(t)),n!==t&&this.handleValueChange(e,I.default.inputType.MINUTE,t,this.state.meridiem),e.keyCode!==M.KEY_LEFT&&e.keyCode!==M.KEY_DELETE&&e.keyCode!==M.KEY_BACK_SPACE||this.focusHour(e),e.keyCode===M.KEY_RIGHT&&this.props.showSeconds&&this.focusSecondFromMinute(e)}},{key:"focusHour",value:function(e){0===this.minuteInput.selectionEnd&&(this.hourInput.focus(),this.state.hour&&(this.hourInput.setSelectionRange(this.state.hour.length,this.state.hour.length),e.preventDefault()))}},{key:"focusSecondFromMinute",value:function(e){0!==this.state.minute.length&&this.state.minute.length!==this.minuteInput.selectionEnd||!this.secondInput||(this.secondInput.focus(),this.state.second&&(this.secondInput.setSelectionRange(0,0),e.preventDefault()))}},{key:"handleSecondInputKeyDown",value:function(e){var t=this.state.second,n=t;e.keyCode===M.KEY_UP&&(t=I.default.incrementSecond(t)),e.keyCode===M.KEY_DOWN&&(t=I.default.decrementSecond(t)),n!==t&&this.handleValueChange(e,I.default.inputType.SECOND,t,this.state.meridiem),e.keyCode!==M.KEY_LEFT&&e.keyCode!==M.KEY_DELETE&&e.keyCode!==M.KEY_BACK_SPACE||this.focusMinuteFromSecond(e)}},{key:"focusMinuteFromSecond",value:function(e){0===this.secondInput.selectionEnd&&(this.minuteInput.focus(),this.state.minute&&(this.minuteInput.setSelectionRange(this.state.minute.length,this.state.minute.length),e.preventDefault()))}},{key:"handleValueChange",value:function(e,t,n,i,u){if(t===I.default.inputType.HOUR?this.setState({hour:n,meridiem:i,hourInitialFocused:!1},u):t===I.default.inputType.MINUTE?this.setState({minute:n,minuteInitialFocused:!1},u):this.setState({second:n,secondInitialFocused:!1},u),this.props.onChange&&1!==n.length){var a=t===I.default.inputType.HOUR?n:this.state.hour,o=t===I.default.inputType.MINUTE?n:this.state.minute,s=t===I.default.inputType.SECOND?n:this.state.second;""===a&&""===o&&""===s?this.props.onChange(e,""):this.props.onChange(e,this.formatHour(a,i).concat(":",o).concat(this.props.showSeconds?":".concat(s):""))}}},{key:"formatHour",value:function(e,t){if(!e)return e;var n=parseInt(e,10);I.default.getVariantFromLocale(this.props)===I.default.FORMAT_12_HOUR&&(t===this.postMeridiem&&n<12?n+=12:t===this.anteMeridiem&&12===n&&(n=0));var i=n.toString();return i.length<2&&(i="0".concat(i)),i}},{key:"handleMeridiemButtonChange",value:function(e,t){this.handleValueChange(e,I.default.inputType.HOUR,this.state.hour.toString(),t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.disabled,i=t.inputAttributes,u=t.minuteAttributes,s=t.hourAttributes,r=t.intl,l=t.isIncomplete,d=t.isInvalid,h=t.isInvalidMeridiem,c=(t.onBlur,t.onChange,t.onFocus,t.name),p=t.refCallback,f=t.required,_=t.secondAttributes,M=t.showSeconds,T=(t.value,t.variant,(0,o.default)(t,["disabled","inputAttributes","minuteAttributes","hourAttributes","intl","isIncomplete","isInvalid","isInvalidMeridiem","onBlur","onChange","onFocus","name","refCallback","required","secondAttributes","showSeconds","value","variant"])),y=b(["meridiem-button",{"is-invalid":h&&this.state.meridiem===this.anteMeridiem}]),F=b(["meridiem-button",{"is-invalid":h&&this.state.meridiem===this.postMeridiem}]),S=I.default.getVariantFromLocale(this.props),C="";if(this.state.hour.length>0||this.state.minute.length>0||this.state.second.length>0&&M){var O=parseInt(this.state.hour,10);S===I.default.FORMAT_12_HOUR&&this.state.meridiem===this.postMeridiem&&(O+=12),C="T".concat(O,":",this.state.minute),M&&(C=C.concat(":",this.state.second))}var R=b([{disabled:n},"time-input",{"is-focused":this.state.isFocused},{"is-invalid":d},{"is-incomplete":l&&f&&!d&&!h},T.className]);return m.default.createElement("div",(0,a.default)({},T,{ref:this.timeInputContainer,className:b("time-input-container")}),m.default.createElement("div",{className:R},m.default.createElement("input",{type:"hidden",name:c,value:C}),m.default.createElement(v.default,(0,a.default)({},i,s,{"aria-label":r.formatMessage({id:"Terra.timeInput.hours"}),refCallback:function(t){e.hourInput=t,p&&p(t)},className:b("time-input-hour",{"initial-focus":this.state.hourInitialFocused}),type:"text",value:this.state.hour,name:"terra-time-hour-".concat(c),placeholder:r.formatMessage({id:"Terra.timeInput.hh"}),maxLength:"2",onChange:this.handleHourChange,onKeyDown:this.handleHourInputKeyDown,onFocus:this.handleHourFocus,onBlur:this.handleHourBlur,size:"2",pattern:"\\d*",disabled:n})),m.default.createElement("span",{className:b("time-spacer")},":"),m.default.createElement(v.default,(0,a.default)({},i,u,{refCallback:function(t){e.minuteInput=t},"aria-label":r.formatMessage({id:"Terra.timeInput.minutes"}),className:b("time-input-minute",M?"with-second":"without-second",{"initial-focus":this.state.minuteInitialFocused}),type:"text",value:this.state.minute,name:"terra-time-minute-".concat(c),placeholder:r.formatMessage({id:"Terra.timeInput.mm"}),maxLength:"2",onChange:this.handleMinuteChange,onKeyDown:this.handleMinuteInputKeyDown,onFocus:this.handleMinuteFocus,onBlur:this.handleMinuteBlur,size:"2",pattern:"\\d*",disabled:n})),M&&m.default.createElement(m.default.Fragment,null,m.default.createElement("span",{className:b("time-spacer")},":"),m.default.createElement(v.default,(0,a.default)({},i,_,{refCallback:function(t){e.secondInput=t},"aria-label":r.formatMessage({id:"Terra.timeInput.seconds"}),className:b("time-input-second",{"initial-focus":this.state.secondInitialFocused}),type:"text",value:this.state.second,name:"terra-time-second-".concat(c),placeholder:r.formatMessage({id:"Terra.timeInput.ss"}),maxLength:"2",onChange:this.handleSecondChange,onKeyDown:this.handleSecondInputKeyDown,onFocus:this.handleSecondFocus,onBlur:this.handleSecondBlur,size:"2",pattern:"\\d*",disabled:n})))),S===I.default.FORMAT_12_HOUR&&m.default.createElement(g.default,{selectedKeys:[this.state.meridiem],onChange:this.handleMeridiemButtonChange,className:b("meridiem-button-group")},m.default.createElement(g.default.Button,{key:this.anteMeridiem,className:y,text:this.anteMeridiem,onBlur:this.handleMeridiemButtonBlur,onFocus:this.handleMeridiemButtonFocus,isDisabled:n}),m.default.createElement(g.default.Button,{key:this.postMeridiem,className:F,text:this.postMeridiem,onBlur:this.handleMeridiemButtonBlur,onFocus:this.handleMeridiemButtonFocus,isDisabled:n})))}}]),n}(m.default.Component);S.propTypes=y,S.defaultProps=F;var C=(0,_.injectIntl)(S);t.default=C}).call(this,n(355))},1029:function(e,t,n){"use strict";var i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n(23)),a=i(n(25)),o=function(){function e(){(0,u.default)(this,e)}return(0,a.default)(e,null,[{key:"validNumericInput",value:function(e){return 0===e.length||/^\d+$/.test(e)}},{key:"parseTwelveHourTime",value:function(e,t,n){var i={hourString:e},u=parseInt(e,10);return u>=12?(i.meridiem=n,u>12&&(u-=12)):(i.meridiem=t,0===u&&(u=12)),i.hourString=u<10?"0".concat(u.toString()):u.toString(),i}},{key:"incrementHour",value:function(e,t){var n=t===this.FORMAT_12_HOUR?12:23;if(e){var i=Number(e);return i<n?(i+=1)<10?"0".concat(i.toString()):i.toString():t===this.FORMAT_12_HOUR?"01":e}return t===this.FORMAT_12_HOUR?"12":"00"}},{key:"decrementHour",value:function(e,t){var n=t===this.FORMAT_12_HOUR?1:0;if(e){var i=Number(e);return i>n?(i-=1)<10?"0".concat(i.toString()):i.toString():t===this.FORMAT_12_HOUR?"12":e}return t===this.FORMAT_12_HOUR?"12":"00"}},{key:"incrementMinute",value:function(e){if(e){var t=Number(e);return t<59?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"decrementMinute",value:function(e){if(e){var t=Number(e);return t>0?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"incrementSecond",value:function(e){if(e){var t=Number(e);return t<59?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"decrementSecond",value:function(e){if(e){var t=Number(e);return t>0?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"splitHour",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length){var n=Number(t[0]);if(n>=0&&n<24)return 1===t[0].length?"0".concat(t[0]):t[0]}return""}return""}},{key:"splitMinute",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length>1){var n=Number(t[1]);if(n>=0&&n<60)return 1===t[1].length?"0".concat(t[1]):t[1]}return""}return""}},{key:"splitSecond",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length>2){var n=Number(t[2]);if(n>=0&&n<60)return 1===t[2].length?"0".concat(t[2]):t[2]}return""}return""}},{key:"validateTime",value:function(e,t){return t?/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(e):/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(e)}},{key:"getVariantFromLocale",value:function(e){var t=e.intl,n=e.variant;return t.messages["Terra.timeInput.am"]&&t.messages["Terra.timeInput.pm"]?n:this.FORMAT_24_HOUR}}]),e}();o.inputType={HOUR:0,MINUTE:1,MERIDIEM:2,SECOND:3},o.isConsideredMobileDevice=function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},Object.defineProperty(o,"FORMAT_12_HOUR",{value:"12-hour",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(o,"FORMAT_24_HOUR",{value:"24-hour",configurable:!1,enumerable:!0,writable:!1});var s=o;t.default=s},1660:function(e,t,n){e.exports={"time-input-container":"TimeInput-module__time-input-container___33Rt0","time-input":"TimeInput-module__time-input___T4wlC","time-input-hour":"TimeInput-module__time-input-hour___2VQ6_","time-input-minute":"TimeInput-module__time-input-minute___1elGu","time-input-second":"TimeInput-module__time-input-second___3X_4K","is-focused":"TimeInput-module__is-focused___niMlR",disabled:"TimeInput-module__disabled___CSggS","is-invalid":"TimeInput-module__is-invalid___3o6NT","is-incomplete":"TimeInput-module__is-incomplete___3O5ye","initial-focus":"TimeInput-module__initial-focus___3pBpb","without-second":"TimeInput-module__without-second___2G5o1","with-second":"TimeInput-module__with-second___1EprD","time-spacer":"TimeInput-module__time-spacer___kAFrV","meridiem-button-group":"TimeInput-module__meridiem-button-group___3sIUS","meridiem-button":"TimeInput-module__meridiem-button___2_S7a"}}}]);
//# sourceMappingURL=2-0925bdee2625e7de97c5.js.map
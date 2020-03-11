(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1083:function(e,n){},1429:function(e,n,t){"use strict";var r=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t(165)),a=r(t(23)),o=r(t(25)),s=r(t(26)),l=r(t(27)),u=r(t(29)),d=r(t(28)),m=r(t(1152)),p=r(t(1153)),f=r(t(0)),c=t(1097),h=r(t(1098)),v=r(t(1430)),b=r(t(59)),F=r(t(363));function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=function(){var e=(0,p.default)(m.default.mark((function e(n){var t;return m.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return e("TerraUser"!==n?"":"Name is Unavailable")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),T=function(e){function n(e){var t;return(0,a.default)(this,n),(t=(0,s.default)(this,(0,l.default)(n).call(this,e))).state={},t.submitForm=t.submitForm.bind((0,u.default)(t)),t.renderForm=t.renderForm.bind((0,u.default)(t)),t}return(0,d.default)(n,e),(0,o.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit;return f.default.createElement("form",{noValidate:!0,onSubmit:n},f.default.createElement(c.Field,{name:"user_name",validate:S},(function(e){var n=e.input,t=e.meta;return f.default.createElement(h.default,{inputId:"user-name",label:"User Name",error:t.error,isInvalid:t.submitFailed&&!t.valid,required:!0,help:"TerraUser is not available",inputAttrs:y({placeholder:"Description"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value})})),f.default.createElement(c.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return f.default.createElement(v.default,{inputId:"description-field",label:"Description",error:t.error,isInvalid:t.submitFailed&&!t.valid,inputAttrs:y({placeholder:"Description"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),f.default.createElement(b.default,{text:"Submit",type:b.default.Opts.Types.SUBMIT}),this.state.submittedValues&&f.default.createElement("div",null,f.default.createElement("p",null,"Form Submitted Successfully With"),f.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}},{key:"render",value:function(){return f.default.createElement(F.default,{marginBottom:"small"},f.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}))}}]),n}(f.default.Component);n.default=T},1433:function(e,n,t){"use strict";t.r(n),n.default="/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n    this.renderForm = this.renderForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              required\n              help=\"TerraUser is not available\"\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n            />\n          )}\n        </Field>\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <TextareaField\n              inputId=\"description-field\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n      </Spacer>\n    );\n  }\n}\n"},1876:function(e,n,t){"use strict";t.r(n),n.default="# Form Validation\n\nTerra recommends using [react-final-form](https://github.com/final-form/react-final-form) to write form validations for components. This package contains several different hooks and functionality for performing validations at various levels which include:\n\n- Validating onChange\n- Validating onSubmit\n- Validating Synchronously (Such as for unique user name implementations)\n- Restricting inputs to a particular format.\n\nFor other functionality that is provided, consult [react-final-form documentation](https://github.com/final-form/react-final-form).\n\n\n## Getting Started\n\n- Install from [npmjs](https://www.npmjs.com): `npm install terra-form-validation`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| final-form | ^4.6.0 |\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-final-form | >=5.0.2 <7.0.0 |\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Integration with Terra\n\nTo easily integrate react-final-form with Terra form elements, we have created individual Field components inside of terra-form-input (InputField), terra-form-textarea (TextareaField), terra-form-radio (RadioField) and terra-form-checkbox (CheckboxField). For integrating with terra-form-select components, a Select element can be combined with a terra-form-field component. There are future enhancements to add a Field component to terra-form-select.\n\nFor all of these field components, the isInvalid and error props of the Fields will be set from the data coming from react-final-form.\n\n## Usage\n\nreact-final-form consists of a wrapping Form element that houses the validation logic, and Field elements that validate individual inputs of a given form.\n\nTo start, you need to import the Form component from react-final-form, and set the onSubmit and render props of the Form. onSubmit is a function with a single argument that is an object of the submitted form values, and the render function is essentially a function that returns a native form rendered in react. The render function has several different props provided by react-final-form that can be used for creating your forms (see [form render props](https://github.com/final-form/react-final-form#formrenderprops) for all possible options). One thing to note is that inside the render function, handleSubmit needs to be passed into the native form component as well.\n\nWhen rendering individual fields inside the form, there are a few things that need to be done. The first is to create a Field component using the Field object from react-final-form, and setting the name, initial value, and validate props. Then inside the Field children, render a function with the arguments input and meta. The input prop contains information specific to the event such as value and name, and meta includes information related to field errors, submission state, validity status. You can view more of the provided attributes [here](https://github.com/final-form/react-final-form#fieldrenderprops). For immediate use, make sure that the function returns a form element with the onChange, value, and other input attributes set appropriately.\n\n**NOTE:** When using [react-final-form](https://github.com/final-form/react-final-form) for validation, we recommend disabling HTML5 form validation by adding the [`noValidate` boolean attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate) to your form element.\n\n```html\n<form noValidate>\n```\n\nTo get a visual on what the implementation looks like, see below:\n\n```jsx\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n    this.renderForm = this.renderForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed}\n              required\n              help=\"TerraUser is not available\"\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n            />\n          )}\n        </Field>\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <TextareaField\n              inputId=\"description-field\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed}\n              inputAttrs={{\n                placeholder: 'Description',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n        {this.state.submittedValues &&\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n        }\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n        />\n      </Spacer>\n    );\n  }\n}\n```\n\nSee links in the sidebar for working with additional validation events and writing custom validations.\n"},2084:function(e,n,t){"use strict";var r=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t(0)),a=r(t(1081)),o=r(t(1876)),s=r(t(1429)),l=r(t(1433)),u=function(){return i.default.createElement(a.default,{readme:o.default,examples:[{title:"Basic Form Validation Example",example:i.default.createElement(s.default,null),source:l.default}]})};n.default=u}}]);
//# sourceMappingURL=337-ceb0fd71bd0ff5a5ea1d.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},11:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);n(11),n(12),n(13);var a=n(1),i=n(3),o=n(4),c=n(5),l=n(8),r=n(6),s=n(9),d=n(0),u=n.n(d),m=function(e){var t=e.inputRef,n=e.hasError,a=e.id,i=e.label,o=e.options,c=e.name,l=e.styles,r=e.isRequired,s=e.value,d=e.onChange;return u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:a},i),r&&u.a.createElement("i",{className:"fa fa-asterisk","aria-hidden":"true",style:l.asterisk}),u.a.createElement("select",{ref:t,className:"form-control ".concat(n?"is-invalid":""),name:c,id:a,value:s,onChange:d},u.a.createElement("option",null),o.map(function(e){return u.a.createElement("option",{key:e},e)})),n?u.a.createElement("div",{className:"invalid-feedback"},"This field is required."):u.a.createElement("br",null))};m.defaultProps={options:[],styles:{},hasError:!1,id:null,inputRef:null,isRequired:!1,label:"",name:null,onChange:function(e){return e}};var h=m,p=function(e){var t=e.formClassname,n=e.autoComplete,a=e.inputRef,i=e.hasError,o=e.id,c=e.label,l=e.labelSrOnly,r=e.maxLength,s=e.name,d=e.styles,m=e.placeholder,h=e.spellCheck,p=e.isRequired,f=e.value,b=e.onChange,y=e.onKeyPress;return u.a.createElement("div",{className:"form-group ".concat(t)},u.a.createElement("label",{htmlFor:o,className:l?"sr-only":""},c),p&&u.a.createElement("i",{className:"fa fa-asterisk","aria-hidden":"true",style:d.asterisk}),u.a.createElement("input",{ref:a,className:"form-control ".concat(i?"is-invalid":""),autoComplete:n,name:s,value:f,type:"text",id:o,maxLength:r,placeholder:m,spellCheck:h,onChange:b,onKeyPress:y}),i?u.a.createElement("div",{className:"invalid-feedback"},"Uzupe\u0142nij s\u0142ownik pocz\u0105tkowy..."):u.a.createElement("br",null))};p.defaultProps={styles:{},formClassname:"",autoComplete:"random_string_off",hasError:!1,id:null,inputRef:null,isRequired:!1,label:"",labelSrOnly:!1,maxLength:60,name:null,placeholder:"",spellCheck:!1,value:"",onChange:function(e){return e},onKeyPress:function(e){return e}};var f=p,b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(r.a)(t).call(this,e))).handleKeyPress=function(e){var t=e.target,a=e.which,i=e.keyCode;if(13===a||13===i)switch(t.name){case"initialText":n.txtInput.blur(),n.handleStart();break;case"initialDictInput":n.handleCreateInitialDictionary()}},n.handleChangeValue=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(i.a)({},a,o))},n.handleCreateInitialDictionary=function(){var e=n.state,t=e.initialDictInput,i=e.dictionary;t&&!i.some(function(e){return e===t})&&n.setState(function(e){return{dictionary:[].concat(Object(a.a)(e.dictionary),[t]),initialDictInput:""}},function(){return n.dictInput.focus()})},n.handleStart=function(){var e=n.state,t=e.initialText,a=e.dictionary,i=t.split(" ").join("-");i.split("").filter(function(e){return!a.includes(e)}).length?n.setState({initialError:!0}):n.setState({initialError:!1,joinedText:i,disableActions:!0,decodedDict:a},n.encodeLoop)},n.findNext=function(e,t){for(var n=2,a="";;){if(a=e.slice(0,n),!t.some(function(e){return e===a})||a===e)return a;n++,a=""}},n.prepareDecode=function(){n.state.shouldDecode&&(window.scroll({top:document.body.scrollHeight,behavior:"smooth"}),n.setState({isDecoding:!0},n.decodeLoop))},n.decodeLoop=function(){var e=n.state,t=e.code,i=e.step,o=e.slowMode;setTimeout(function(){},100*i+500*Number(o)),i<t.length+1&&(setTimeout(function(){n.setState(function(e){var n=e.decodedDict[t[i-1]];return"undefined"===typeof n&&(n=e.decodedDict[t[i-2]].concat(e.decodedDict[t[i-2]][0])),{decodedDict:i>1?[].concat(Object(a.a)(e.decodedDict),[e.decodedDict[t[i-2]].concat(n[0])]):e.decodedDict,decodedSentence:e.decodedSentence.concat(n),step:e.step+1}})},100*i+500+500*Number(o)),setTimeout(function(){window.scroll({top:document.body.scrollHeight,behavior:"smooth"}),n.decodeLoop()},100*i+1e3+500*Number(o)))},n.encodeLoop=function(){var e=n.state,t=e.dictionary,i=e.joinedText,o=e.step,c=e.slowMode,l="";(l=n.findNext(i,t))?(setTimeout(function(){},100*o+500*Number(c)),setTimeout(function(){n.setState(function(e){var t=e.joinedText.length>l.length?l.slice(0,l.length-1):l,n=e.dictionary.indexOf(t),i="",o=-1;if(-1===n){for(var c=0;-1===n;)c++,n=e.dictionary.indexOf(t.slice(0,t.length-c));i=e.joinedText.slice(-1*c),o=e.dictionary.indexOf(i)}return{joinedText:e.joinedText.substr(l.length-1,e.joinedText.length),code:i.length?[].concat(Object(a.a)(e.code),[n,o]):[].concat(Object(a.a)(e.code),[n]),dictionary:e.dictionary.some(function(e){return e===l})?e.dictionary:[].concat(Object(a.a)(e.dictionary),[l])}})},100*o+500+500*Number(c)),setTimeout(function(){n.setState(function(e){return{step:e.step+1}}),n.state.joinedText.length>1?(window.scroll({top:document.body.scrollHeight,behavior:"smooth"}),n.encodeLoop()):n.setState({step:1,disableActions:!1,joinedText:"S\u0141OWNIK KO\u0143COWY:"},n.prepareDecode)},100*o+1e3+500*Number(c))):n.setState({step:1,disableActions:!1})},n.initialState={dictionary:[],code:[],decodedDict:[],step:1,slowMode:0,initialDictInput:"",initialText:"",initialError:!1,disableActions:!1,shouldDecode:!0,isDecoding:!1,decodedSentence:"",joinedText:""},n.state=n.initialState,n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.code,i=t.decodedDict,o=t.isDecoding,c=t.decodedSentence,l=t.dictionary,r=t.disableActions,s=t.initialDictInput,d=t.initialText,m=t.initialError,p=t.joinedText,b=t.slowMode,y=t.shouldDecode;return u.a.createElement("div",{className:"wrapper"},u.a.createElement("h1",null,"Lempel\u2013Ziv\u2013Welch"),u.a.createElement("div",{className:"section slow"},u.a.createElement("p",null,"Spowolnienie:\xa0"),u.a.createElement(h,{name:"slowMode",options:Object(a.a)(Array(10).keys()),value:b,onChange:this.handleChangeValue})),u.a.createElement("div",{className:"form-check",style:{marginBottom:40}},u.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:y,id:"decodeCheck",onChange:function(){return e.setState(function(e){return{shouldDecode:!e.shouldDecode}})},style:{width:20,height:20,marginTop:10}}),u.a.createElement("label",{className:"form-check-label",style:{marginLeft:10},htmlFor:"decodeCheck"},"Dekoduj po zako\u0144czeniu")),u.a.createElement("div",{className:"section"},u.a.createElement(f,{inputRef:function(t){return e.dictInput=t},formClassname:"initial-dict",label:"Stw\xf3rz s\u0142ownik pocz\u0105tkowy:",name:"initialDictInput",maxLength:1,placeholder:"Dodaj liter\u0119",value:s,onChange:this.handleChangeValue,onKeyPress:this.handleKeyPress}),u.a.createElement("button",{type:"button",className:"btn btn-success add",disabled:r,onClick:this.handleCreateInitialDictionary},"Dodaj"),u.a.createElement("button",{type:"button",className:"btn btn-danger clean",disabled:r,onClick:function(){return e.setState(e.initialState)}},u.a.createElement("i",{className:"fa fa-trash fa-lg","aria-hidden":"true"}))),u.a.createElement("div",{className:"section"},u.a.createElement(f,{inputRef:function(t){return e.txtInput=t},formClassname:"initial-txt",hasError:m,label:"Tekst do zakodowania:",name:"initialText",maxLength:100,placeholder:"Wpisz tekst",value:d,onChange:this.handleChangeValue,onKeyPress:this.handleKeyPress}),u.a.createElement("button",{type:"button",className:"btn btn-warning",disabled:r,onClick:this.handleStart},"Rozpocznij"),u.a.createElement("button",{type:"button",className:"btn btn-danger clean",disabled:r,onClick:function(){return e.setState(e.initialState)}},u.a.createElement("i",{className:"fa fa-trash fa-lg","aria-hidden":"true"}))),!y&&u.a.createElement("h2",null,n.join(", ")),u.a.createElement("h3",null,p),u.a.createElement("div",{className:"dictionary"},l.map(function(e,t){return u.a.createElement("p",{className:"word",key:t},"".concat(t," = ").concat(e))})),y&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",{style:{marginTop:30}},n.join(", ")),o&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",{style:{color:"orange"}},c),u.a.createElement("div",{className:"dictionary"},i.map(function(e,t){return u.a.createElement("p",{className:"word",key:t},"".concat(t," = ").concat(e))})))))}}]),t}(u.a.Component),y=n(7);n.n(y).a.render(u.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cc1c4f1c.chunk.js.map
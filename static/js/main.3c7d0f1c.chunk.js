(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(40)},25:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);a(25),a(26),a(27);var n=a(6),i=a(5),o=a(0),c=a.n(o);var l=a(8),r=a(17),s=a(18),d=a(19),u=a(22),m=a(20),h=a(23),p=function(e){var t=e.inputRef,a=e.hasError,n=e.id,i=e.label,o=e.options,l=e.name,r=e.styles,s=e.isRequired,d=e.value,u=e.onChange;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:n},i),s&&c.a.createElement("i",{className:"fa fa-asterisk","aria-hidden":"true",style:r.asterisk}),c.a.createElement("select",{ref:t,className:"form-control ".concat(a?"is-invalid":""),name:l,id:n,value:d,onChange:u},c.a.createElement("option",null),o.map(function(e){return c.a.createElement("option",{key:e},e)})),a?c.a.createElement("div",{className:"invalid-feedback"},"This field is required."):c.a.createElement("br",null))};p.defaultProps={options:[],styles:{},hasError:!1,id:null,inputRef:null,isRequired:!1,label:"",name:null,onChange:function(e){return e}};var f=p,b=function(e){var t=e.formClassname,a=e.autoComplete,n=e.inputRef,i=e.hasError,o=e.id,l=e.label,r=e.labelSrOnly,s=e.maxLength,d=e.name,u=e.styles,m=e.placeholder,h=e.spellCheck,p=e.isRequired,f=e.value,b=e.onChange,y=e.onKeyPress;return c.a.createElement("div",{className:"form-group ".concat(t)},c.a.createElement("label",{htmlFor:o,className:r?"sr-only":""},l),p&&c.a.createElement("i",{className:"fa fa-asterisk","aria-hidden":"true",style:u.asterisk}),c.a.createElement("input",{ref:n,className:"form-control ".concat(i?"is-invalid":""),autoComplete:a,name:d,value:f,type:"text",id:o,maxLength:s,placeholder:m,spellCheck:h,onChange:b,onKeyPress:y}),i?c.a.createElement("div",{className:"invalid-feedback"},"Trzeba by co\u015b tutaj wpisa\u0107..."):c.a.createElement("br",null))};b.defaultProps={styles:{},formClassname:"",autoComplete:"random_string_off",hasError:!1,id:null,inputRef:null,isRequired:!1,label:"",labelSrOnly:!1,maxLength:60,name:null,placeholder:"",spellCheck:!1,value:"",onChange:function(e){return e},onKeyPress:function(e){return e}};var y=b,E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleKeyPress=function(e){var t=e.target,n=e.which,i=e.keyCode;if(13===n||13===i)switch(t.name){case"initialText":a.txtInput.blur(),a.handleStart();break;case"initialDictInput":a.handleCreateInitialDictionary()}},a.handleChangeValue=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(r.a)({},n,i))},a.handleCreateInitialDictionary=function(){var e=a.state,t=e.initialDictInput,n=e.dictionary;t&&!n.some(function(e){return e===t})&&a.setState(function(e){return{dictionary:[].concat(Object(l.a)(e.dictionary),[t]),initialDictInput:""}},function(){return a.dictInput.focus()})},a.handleStart=function(){var e=a.state,t=e.initialText,n=e.dictionary;if(t.length){var i=t.split(" ").join("-");a.setState({joinedText:i,disableActions:!0,decodedDict:n},a.encodeLoop)}else a.setState({initialError:!0})},a.findNext=function(e,t){for(var a=2,n="";;){if(n=e.slice(0,a),!t.some(function(e){return e===n})||n===e)return n;a++,n=""}},a.prepareDecode=function(){a.state.shouldDecode&&(window.scroll({top:document.body.scrollHeight,behavior:"smooth"}),a.setState({isDecoding:!0},a.decodeLoop))},a.decodeLoop=function(){var e=a.state,t=e.code,n=e.step,i=e.slowMode;setTimeout(function(){},100*n+500*Number(i)),n<t.length+1&&(setTimeout(function(){a.setState(function(e){var a=e.decodedDict[t[n-1]];return"undefined"===typeof a&&(a=e.decodedDict[t[n-2]].concat(e.decodedDict[t[n-2]][0])),{decodedDict:n>1?[].concat(Object(l.a)(e.decodedDict),[e.decodedDict[t[n-2]].concat(a[0])]):e.decodedDict,decodedSentence:e.decodedSentence.concat(a),step:e.step+1}})},100*n+500+500*Number(i)),setTimeout(function(){window.scroll({top:document.body.scrollHeight,behavior:"smooth"}),a.decodeLoop()},100*n+1e3+500*Number(i)))},a.encodeLoop=function(){var e=a.state,t=e.dictionary,n=e.joinedText,i=e.step,o=e.slowMode,c="";(c=a.findNext(n,t))?(setTimeout(function(){},100*i+500*Number(o)),setTimeout(function(){a.setState(function(e){var t=e.joinedText.length>c.length?c.slice(0,c.length-1):c,a=e.dictionary.indexOf(t);return{joinedText:e.joinedText.substr(c.length-1,e.joinedText.length),code:-1!==a?[].concat(Object(l.a)(e.code),[a]):e.code,dictionary:e.dictionary.some(function(e){return e===c})?e.dictionary:[].concat(Object(l.a)(e.dictionary),[c])}})},100*i+500+500*Number(o)),setTimeout(function(){a.setState(function(e){return{step:e.step+1}}),a.state.joinedText.length>1?(window.scroll({top:document.body.scrollHeight,behavior:"smooth"}),a.encodeLoop()):a.setState({step:1,disableActions:!1,joinedText:"S\u0141OWNIK KO\u0143COWY:"},a.prepareDecode)},100*i+1e3+500*Number(o))):a.setState({step:1,disableActions:!1})},a.initialState={dictionary:[],code:[],decodedDict:[],step:1,slowMode:0,initialDictInput:"",initialText:"",initialError:!1,disableActions:!1,shouldDecode:!0,isDecoding:!1,decodedSentence:"",joinedText:""},a.state=a.initialState,a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.code,i=t.decodedDict,o=t.isDecoding,r=t.decodedSentence,s=t.dictionary,d=t.disableActions,u=t.initialDictInput,m=t.initialText,h=t.initialError,p=t.joinedText,b=t.slowMode,E=t.shouldDecode;return c.a.createElement("div",{className:"wrapper"},c.a.createElement(n.b,{to:"/"},c.a.createElement("i",{className:"fa fa-long-arrow-left fa-lg top-left"})),c.a.createElement("h1",null,"Lempel\u2013Ziv\u2013Welch"),c.a.createElement("div",{className:"section slow"},c.a.createElement("p",null,"Spowolnienie:\xa0"),c.a.createElement(f,{name:"slowMode",options:Object(l.a)(Array(10).keys()),value:b,onChange:this.handleChangeValue})),c.a.createElement("div",{className:"form-check",style:{marginBottom:40}},c.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:E,id:"decodeCheck",onChange:function(){return e.setState(function(e){return{shouldDecode:!e.shouldDecode}})},style:{width:20,height:20,marginTop:10}}),c.a.createElement("label",{className:"form-check-label",style:{marginLeft:10},htmlFor:"decodeCheck"},"Dekoduj po zako\u0144czeniu")),c.a.createElement("div",{className:"section"},c.a.createElement(y,{inputRef:function(t){return e.dictInput=t},formClassname:"initial-dict",label:"Stw\xf3rz s\u0142ownik pocz\u0105tkowy:",name:"initialDictInput",maxLength:1,placeholder:"Dodaj liter\u0119",value:u,onChange:this.handleChangeValue,onKeyPress:this.handleKeyPress}),c.a.createElement("button",{type:"button",className:"btn btn-success add",disabled:d,onClick:this.handleCreateInitialDictionary},"Dodaj"),c.a.createElement("button",{type:"button",className:"btn btn-danger clean",disabled:d,onClick:function(){return e.setState(e.initialState)}},c.a.createElement("i",{className:"fa fa-trash fa-lg","aria-hidden":"true"}))),c.a.createElement("div",{className:"section"},c.a.createElement(y,{inputRef:function(t){return e.txtInput=t},formClassname:"initial-txt",hasError:!!h&&0===m.length,label:"Tekst do zakodowania:",name:"initialText",maxLength:100,placeholder:"Wpisz tekst",value:m,onChange:this.handleChangeValue,onKeyPress:this.handleKeyPress}),c.a.createElement("button",{type:"button",className:"btn btn-warning",disabled:d,onClick:this.handleStart},"Rozpocznij"),c.a.createElement("button",{type:"button",className:"btn btn-danger clean",disabled:d,onClick:function(){return e.setState(e.initialState)}},c.a.createElement("i",{className:"fa fa-trash fa-lg","aria-hidden":"true"}))),!E&&c.a.createElement("h2",null,a.join(", ")),c.a.createElement("h3",null,p),c.a.createElement("div",{className:"dictionary"},s.map(function(e,t){return c.a.createElement("p",{className:"word",key:t},"".concat(t," = ").concat(e))})),E&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{style:{marginTop:30}},a.join(", ")),o&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{style:{color:"orange"}},r),c.a.createElement("div",{className:"dictionary"},i.map(function(e,t){return c.a.createElement("p",{className:"word",key:t},"".concat(t," = ").concat(e))})))))}}]),t}(c.a.Component),g=a(21),v=a.n(g);a.d(t,"PATHS",function(){return k});var k=["LZW"];v.a.render(c.a.createElement(n.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:function(e){return c.a.createElement("div",{className:"home"},c.a.createElement("h1",null,"Algorytmy kompresji danych"),k.map(function(e){return c.a.createElement(n.b,{key:e,className:"btn btn-light home",to:e},e)}))}}),c.a.createElement(i.a,{exact:!0,path:"/".concat(k[0]),component:E}))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3c7d0f1c.chunk.js.map
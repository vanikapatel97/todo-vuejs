(function(e){function t(t){for(var o,c,d=t[0],a=t[1],r=t[2],s=0,b=[];s<d.length;s++)c=d[s],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&b.push(i[c][0]),i[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);u&&u(t);while(b.length)b.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,d=1;d<n.length;d++){var a=n[d];0!==i[a]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={app:0},l=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],a=d.push.bind(d);d.push=t,d=d.slice();for(var r=0;r<d.length;r++)t(d[r]);var u=a;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5487:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i={id:"app"},l=Object(o["e"])("h1",null,"To-Do List",-1),c={"aria-labelledby":"list-summary",class:"stack-large"};function d(e,t,n,d,a,r){var u=Object(o["l"])("to-do-form"),s=Object(o["l"])("to-do-item");return Object(o["h"])(),Object(o["d"])("div",i,[l,Object(o["g"])(u,{onTodoAdded:r.addToDo},null,8,["onTodoAdded"]),Object(o["e"])("h2",{id:"list-summary",ref:"listSummary",tabindex:"-1"},Object(o["m"])(r.listSummary),513),Object(o["e"])("ul",c,[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(a.ToDoItems,(function(e){return Object(o["h"])(),Object(o["d"])("li",{key:e.id},[Object(o["g"])(s,{label:e.label,done:e.done,id:e.id,onCheckboxChanged:function(t){return r.updateDoneStatus(e.id)},onItemDeleted:function(t){return r.deleteToDo(e.id)},onItemEdited:function(t){return r.editToDo(e.id,t)}},null,8,["label","done","id","onCheckboxChanged","onItemDeleted","onItemEdited"])])})),128))])])}n("7db0"),n("d3b7"),n("c740"),n("a434"),n("4de4"),n("99af");var a={key:0,class:"stack-small"},r={class:"custom-checkbox"},u=["id","checked"],s=["for"],b={class:"btn-group"},f=Object(o["f"])(" Edit "),p={class:"visually-hidden"},m=Object(o["f"])(" Delete "),h={class:"visually-hidden"};function O(e,t,n,i,l,c){var d=Object(o["l"])("to-do-item-edit-form");return l.isEditing?(Object(o["h"])(),Object(o["c"])(d,{key:1,id:l.id,label:n.label,onItemEdited:c.itemEdited,onEditCancelled:c.editCancelled},null,8,["id","label","onItemEdited","onEditCancelled"])):(Object(o["h"])(),Object(o["d"])("div",a,[Object(o["e"])("div",r,[Object(o["e"])("input",{type:"checkbox",class:"checkbox",id:l.id,checked:c.isDone,onChange:t[0]||(t[0]=function(t){return e.$emit("checkbox-changed")})},null,40,u),Object(o["e"])("label",{for:l.id,class:"checkbox-label"},Object(o["m"])(n.label),9,s)]),Object(o["e"])("div",b,[Object(o["e"])("button",{type:"button",class:"btn",ref:"editButton",onClick:t[1]||(t[1]=function(){return c.toggleToItemEditForm&&c.toggleToItemEditForm.apply(c,arguments)})},[f,Object(o["e"])("span",p,Object(o["m"])(n.label),1)],512),Object(o["e"])("button",{type:"button",class:"btn btn__danger",onClick:t[2]||(t[2]=function(){return c.deleteToDo&&c.deleteToDo.apply(c,arguments)})},[m,Object(o["e"])("span",h,Object(o["m"])(n.label),1)])])]))}var j=n("f5cb"),v=n.n(j),y={class:"edit-label"},g=["id"],T={class:"btn-group"},D=Object(o["f"])(" Cancel "),I={class:"visually-hidden"},k={type:"submit",class:"btn btn__primary"},S=Object(o["f"])(" Save "),E={class:"visually-hidden"};function _(e,t,n,i,l,c){return Object(o["h"])(),Object(o["d"])("form",{class:"stack-small",onSubmit:t[2]||(t[2]=Object(o["p"])((function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),["prevent"]))},[Object(o["e"])("div",null,[Object(o["e"])("label",y,'Edit Name for "'+Object(o["m"])(n.label)+'"',1),Object(o["o"])(Object(o["e"])("input",{id:n.id,ref:"labelInput",type:"text",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.newLabel=e})},null,8,g),[[o["n"],l.newLabel,void 0,{lazy:!0,trim:!0}]])]),Object(o["e"])("div",T,[Object(o["e"])("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=function(){return c.onCancel&&c.onCancel.apply(c,arguments)})},[D,Object(o["e"])("span",I,"editing "+Object(o["m"])(n.label),1)]),Object(o["e"])("button",k,[S,Object(o["e"])("span",E,"edit for "+Object(o["m"])(n.label),1)])])],32)}var w={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data:function(){return{newLabel:this.label}},methods:{onSubmit:function(){this.newLabel&&this.newLabel!==this.label&&this.$emit("item-edited",this.newLabel)},onCancel:function(){this.$emit("edit-cancelled")}},mounted:function(){var e=this.$refs.labelInput;e.focus()}},C=(n("78ad"),n("6b0d")),x=n.n(C);const $=x()(w,[["render",_],["__scopeId","data-v-7b56920c"]]);var L=$,B={components:{ToDoItemEditForm:L},props:{label:{required:!0,type:String},done:{default:!1,type:Boolean}},data:function(){return{isEditing:!1,id:v()("todo-")}},computed:{isDone:function(){return this.done}},methods:{deleteToDo:function(){this.$emit("item-deleted")},toggleToItemEditForm:function(){console.log(this.$refs.editButton),this.isEditing=!0},itemEdited:function(e){this.$emit("item-edited",e),this.isEditing=!1,this.focusedOnEditButton()},editCancelled:function(){this.isEditing=!1,this.focusOnEditButton()},focusOnEditButton:function(){var e=this;this.$nextTick((function(){var t=e.$refs.editButton;t.focus()}))}}};n("f33f");const P=x()(B,[["render",O],["__scopeId","data-v-139d2ac8"]]);var F=P,M=Object(o["e"])("h2",{class:"label-wrapper"},[Object(o["e"])("label",{for:"new-todo-input",class:"label__lg"}," What needs to be done? ")],-1),V=Object(o["e"])("button",{type:"submit",class:"btn btn__primary btn__lg"}," Add ",-1);function q(e,t,n,i,l,c){return Object(o["h"])(),Object(o["d"])("form",{onSubmit:t[1]||(t[1]=Object(o["p"])((function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),["prevent"]))},[M,Object(o["o"])(Object(o["e"])("input",{type:"text",id:"new-todo-input",name:"new-todo",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.label=e}),class:"input__lg"},null,512),[[o["n"],l.label,void 0,{lazy:!0,trim:!0}]]),V],32)}var A={methods:{onSubmit:function(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}},data:function(){return{label:""}}};const z=x()(A,[["render",q]]);var H=z,J={name:"app",components:{ToDoItem:F,ToDoForm:H},data:function(){return{ToDoItems:[{id:v()("todo-"),label:"Learn Vue",done:!1},{id:v()("todo-"),label:"Create a Vue project with the CLI",done:!0},{id:v()("todo-"),label:"Have fun",done:!0},{id:v()("todo-"),label:"Create a to-do list",done:!1},{id:v()("todo-"),label:"Have a break",done:!1}]}},methods:{addToDo:function(e){this.ToDoItems.push({id:v()("todo-"),label:e,done:!1})},updateDoneStatus:function(e){var t=this.ToDoItems.find((function(t){return t.id===e}));t.done=!t.done},deleteToDo:function(e){var t=this.ToDoItems.findIndex((function(t){return t.id===e}));this.ToDoItems.splice(t,1),this.$refs.listSummary.focus()},editToDo:function(e,t){var n=this.ToDoItems.find((function(t){return t.id===e}));n.label=t}},computed:{listSummary:function(){var e=this.ToDoItems.filter((function(e){return e.done})).length;return"".concat(e," out of ").concat(this.ToDoItems.length," items completed")}}};n("d2f8");const U=x()(J,[["render",d]]);var N=U;n("b059");Object(o["b"])(N).mount("#app")},"78ad":function(e,t,n){"use strict";n("5487")},"933e":function(e,t,n){},a7b6:function(e,t,n){},b059:function(e,t,n){},d2f8:function(e,t,n){"use strict";n("933e")},f33f:function(e,t,n){"use strict";n("a7b6")}});
//# sourceMappingURL=app.28f24b3b.js.map
import{a as M}from"./chunk-WWFGJIL7.js";import{a as ne,d as se,f as ae,g as le}from"./chunk-WVKPQXMQ.js";import{b as W,c as g,d as X,e as J,f as Q,g as Y,h as ee,i as te,k as ie}from"./chunk-EFOSX7OL.js";import{B as K,C as H,H as oe,I as re,K as ce,M as de,N as me,O as pe,P as fe,i as j,j as G,k as L,l as $,m as B,r as q,y as Z}from"./chunk-MY5GYTRH.js";import{Ab as O,Ka as r,Na as f,Ra as v,Ta as c,Ua as i,Va as n,Wa as h,Za as C,ab as _,bb as u,fb as S,ha as N,hb as P,jb as d,kb as V,lb as U,mb as z,na as b,nc as F,oa as x,ub as A,xb as D,ya as w,yb as T,zb as R}from"./chunk-KLCY7QU5.js";import{g as k,i as E,j as I}from"./chunk-LKY6D2P2.js";function ye(t,l){if(t&1){let e=C();i(0,"div",23)(1,"div",24)(2,"div",25),h(3,"img",26),i(4,"label",27),d(5,"Registro exitoso"),n()(),i(6,"div",28),_("click",function(){b(e);let p=u();return x(p.alertSw="1")}),h(7,"img",29),n()(),i(8,"div",30)(9,"label",31),d(10,"Hemos\xA0enviado\xA0una notificaci\xF3n\xA0al correo del usuario registrado."),n()()()}if(t&2){let e=u();r(3),S("src","",e.url_images,"success.svg",w),r(4),S("src","",e.url_images,"close.svg",w)}}function we(t,l){t&1&&(i(0,"label",31),d(1,"Tus datos no han podido ser validados correctamente."),n())}function Se(t,l){t&1&&(i(0,"label",31),d(1,"Verifica tu usuario y rol asignado."),n())}function Re(t,l){if(t&1){let e=C();i(0,"div",32)(1,"div",24)(2,"div",25),h(3,"img",33),i(4,"label",34),d(5,"\xA1Algo no anda bien!"),n()(),i(6,"div",28),_("click",function(){b(e);let p=u();return x(p.alertSw="1")}),h(7,"img",35),n()(),i(8,"div",30),v(9,we,2,0,"label",36),v(10,Se,2,0,"label",36),n()()}if(t&2){let e=u();r(3),S("src","",e.url_images,"warning_red.svg",w),r(4),S("src","",e.url_images,"close.svg",w),r(2),c("ngSwitchCase",3),r(1),c("ngSwitchCase",4)}}function Oe(t,l){if(t&1){let e=C();i(0,"div",41),_("click",function(){let s=b(e).$implicit,a=u(2);return x(a.changeOption("d",s.Id_DocumentType))}),i(1,"label",42),d(2),n()()}if(t&2){let e=l.$implicit;r(2),z("",e.Id_DocumentType," - ",e.Name,"")}}var Fe=function(t,l){return{selected:t,selected_focus:l}},ue=function(t){return{active:t}},Me=function(t,l){return{input_document:t,input_document_focus:l}};function Ie(t,l){if(t&1){let e=C();i(0,"div",14)(1,"label",15),d(2,"Tipo y n\xFAmero de documento"),n(),i(3,"div",37)(4,"div",17)(5,"div",38),_("click",function(){b(e);let p=u();return x(p.openOptions("d"))}),d(6),i(7,"span",39),d(8,"\u02C7"),n()(),i(9,"div",20),v(10,Oe,3,2,"div",21),n()(),i(11,"input",40),_("click",function(){b(e);let p=u();return x(p.focusFunction("d"))})("blur",function(){b(e);let p=u();return x(p.focusFunction("d"))}),n()()()}if(t&2){let e=u();P("input_document_error",!e.formRegister.controls.identificationNumber.valid&&e.formRegister.controls.identificationNumber.touched)("input_type_error",!e.formRegister.controls.identificationNumber.valid&&e.formRegister.controls.identificationNumber.touched),r(5),c("ngClass",O(9,Fe,e.state,!e.state)),r(1),U(" ",e.selected,""),r(3),c("ngClass",R(12,ue,e.activar)),r(1),c("ngForOf",e.listDocument),r(1),c("ngClass",O(14,Me,e.state,!e.state))}}function Pe(t,l){if(t&1){let e=C();i(0,"div",41),_("click",function(){let s=b(e).$implicit,a=u();return x(a.changeOption("r",s.roleName))}),i(1,"label",42),d(2),n()()}if(t&2){let e=l.$implicit;r(2),V(e.roleName)}}var Ue=function(){return["3","4"]},ke=function(t,l){return{selected:t,selected_focus_rol:l}},Ee=function(t){return{selected_focus_icon:t}},Qe=(()=>{var l,ge;let m=class{constructor(s,a,o,y,he,_e,be,xe,ve,Ce){k(this,l);this._parametersService=s,this.userService=a,this.fb=o,this.router=y,this.validateUser=he,this.sessionCookieService=_e,this.userIdle=be,this.encryptService=xe,this._permissionStore=ve,this._envStore=Ce,this.idleState="Not started.",this.faChevronDown=se,this.faAngleDown=ne,this.alertSw="1",this.isValidFormSubmitted=null}ngOnInit(){this.userIdle.startWatching(),this.userIdle.onTimerStart().subscribe(()=>{this.sessionCookieService.deleteCookie(F.NAME_COOKIE),this.validateUser.seeAlert=6,this.router.navigate([H.LOGIN])}),this.patternUsuario="^[a-zA-Z]+$",this.patternIdentification="^[1-9][0-9]+$";let s=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+){1,2}$/;this.formRegister=this.fb.group({mail:["",g.compose([g.required,g.pattern(s)])],identificationNumber:["",g.compose([g.required,g.pattern(this.patternIdentification),g.minLength(6),g.maxLength(10)])],typeDocument:["",g.required],rol:["",g.required]}),E(this,l,ge).call(this)}getRoles(){this.userService.getRoleEntity(this.validateUser.entityId).subscribe(s=>{if(s.code==="UP02"){let a=this.encryptService.decryptMethodAES(s.data);this.listRol=a.roles}else this.alertSw="4"})}openOptions(s){if(s==="d"){this.listDocument=this.validateUser.listDocument;let a=this.listDocument.filter(o=>o.Id_DocumentType!="TI");this.listDocument=a,this.activar=!this.activar}else s==="r"&&(this.activarRol=!this.activarRol)}focusFunction(s){s==="d"?this.formRegister.value.typeDocument&&this.formRegister.value.identificationNumber?this.state=!1:this.state=!0:s==="r"&&(this.selectedRol!=="Selecciona una opci\xF3n"?this.stateRol=!1:this.stateRol=!0)}changeOption(s,a){if(s==="d")this.selected=a,this.formRegister.controls.typeDocument.setValue(this.selected),this.activar=!1;else if(s==="r"){this.selectedRol=a;let o=this.listRol.find(y=>y.roleName==this.selectedRol);this.formRegister.controls.rol.setValue(o.roleId),this.validateUser.activeDirectory===1&&(this.formRegister.controls.typeDocument.clearValidators(),this.formRegister.controls.typeDocument.updateValueAndValidity(),this.formRegister.controls.identificationNumber.setValue("0"),this.formRegister.controls.identificationNumber.clearValidators(),this.formRegister.controls.identificationNumber.updateValueAndValidity()),this.activarRol=!1,this.stateRol=!1}}resetForm(){this.formRegister.reset(),this.selected="CC",this.formRegister.controls.typeDocument.setValue(this.selected),this.selectedRol="Selecciona una opci\xF3n",this.formRegister.controls.rol.setValue(""),this.state=!0,this.stateRol=!0}registerUser(){return I(this,null,function*(){if(this.formRegister.valid){this.dataRegister={documentType:this.formRegister.value.typeDocument,enterpriseEmail:this.formRegister.value.mail,identificationNumber:this.formRegister.value.identificationNumber,role:this.formRegister.value.rol,entityId:this.validateUser.entityId,portal:"portal",domain:this._envStore.env.DOMAIN,activeDirectory:this.validateUser.activeDirectory,rolLoggedId:Number(this.validateUser.idRol)};let s=this.encryptService.encryptMethodAES(this.dataRegister,"post");this.userService.registerUser(s).subscribe(a=>{try{a.code==="UP01"?this.alertSw="2":a.code==="UP04"?this.alertSw="4":this.alertSw="3"}catch{this.alertSw="3"}})}this.resetForm()})}},t=m;return l=new WeakSet,ge=function(){return I(this,null,function*(){this.url_images=F.URL_IMAGE,this.validateUser.cookieExistence=this.sessionCookieService.checkCookies(F.NAME_COOKIE),this.validateUser.cookieExistence&&(this.validateUser.webUserId=this._permissionStore.value.webUserId,this.validateUser.administrador=this._permissionStore.value.administrador,this.validateUser.username=this._permissionStore.value.username,this.validateUser.entityId=this._permissionStore.value.entityId,this._parametersService.getDocumentType(),this.getRoles(),this.on_class="SI",this.state=!0,this.selected="CC",this.formRegister.controls.typeDocument.setValue(this.selected),this.activar=!1,this.seeAlert=0,this.stateRol=!0,this.selectedRol="Selecciona una opci\xF3n",this.activarRol=!1)})},(()=>{m.\u0275fac=function(a){return new(a||m)(f(ce),f(me),f(te),f(Z),f(pe),f(re),f(M),f(de),f(fe),f(oe))}})(),(()=>{m.\u0275cmp=N({type:m,selectors:[["app-create-user"]],standalone:!0,features:[A([M]),D],decls:32,vars:24,consts:[[1,"row"],[1,"div_title"],[1,"title"],[1,"subtitle"],[1,"row","div_top","ml-4","mr-4"],[1,"col-xl-4","col-lg-3","col-md-2"],[1,"col-xl-4","col-lg-6","col-md-8","col-sm-12","mt-2","align-items-center"],[1,"mb-4","mt-4",3,"ngSwitch"],["class","alert alert-success",4,"ngSwitchCase"],["class","alert",4,"ngSwitchCase"],[3,"formGroup"],["class","form-group",3,"input_document_error","input_type_error",4,"ngIf"],[1,"form-group","control"],["id","mail","type","text","formControlName","mail","name","mail","placeholder","nombre@micorreo.com","autocomplete","off",1,"form-control"],[1,"form-group"],[1,"lbl_doc"],[1,"input-group"],[1,"input-group-prepend","select-box"],["id","op2",1,"selector-register",3,"ngClass","click"],["id","icon2",1,"icon-selector-rol",3,"icon","ngClass"],[1,"options-container",3,"ngClass"],["class","option selector-option",3,"click",4,"ngFor","ngForOf"],[1,"btnregistrar","btn","btn-lg","btn-block",3,"disabled","click"],[1,"alert","alert-success"],[1,"alert-up"],[1,"alert-inside-up"],["alt","Icono",3,"src"],[1,"title-alert","title-alert-success"],[1,"",3,"click"],["rectanglelt","Icono","alt","Cerrar",1,"icon-close2",3,"src"],[1,"alert-down"],[1,"copy-alert"],[1,"alert"],["alt","Icono de Exclamaci\xF3n",1,"conf",3,"src"],[1,"title-alert"],["alt","Icono",1,"icon-close2",3,"src"],["class","copy-alert",4,"ngSwitchCase"],[1,"input-group","mb-2"],["id","op",3,"ngClass","click"],[1,"down"],["type","text","formControlName","identificationNumber","placeholder","N\xFAmero de documento",1,"form-control",3,"ngClass","click","blur"],[1,"option","selector-option",3,"click"],[1,"selector-option"]],template:function(a,o){a&1&&(i(0,"div",0)(1,"div",1)(2,"label",2),d(3,"A\xF1adir colaboradores"),n(),h(4,"br"),i(5,"label",3),d(6,"Registra los usuarios requeridos para acceder a nuestros portales."),n()()(),i(7,"div",4),h(8,"div",5),i(9,"div",6)(10,"div",7),v(11,ye,11,2,"div",8),v(12,Re,11,4,"div",9),n(),i(13,"form",10),v(14,Ie,12,17,"div",11),i(15,"div",12)(16,"label"),d(17,"Correo electr\xF3nico(empresarial)"),n(),h(18,"input",13),n(),i(19,"div",14)(20,"label",15),d(21,"Rol"),n(),i(22,"div",16)(23,"div",17)(24,"div",18),_("click",function(){return o.openOptions("r")}),d(25),h(26,"fa-icon",19),n(),i(27,"div",20),v(28,Pe,3,1,"div",21),n()()()(),i(29,"button",22),_("click",function(){return o.registerUser()}),d(30," Registrar "),n()()(),h(31,"div",5),n()),a&2&&(r(10),c("ngSwitch",o.alertSw),r(1),c("ngSwitchCase",2),r(1),c("ngSwitchCase",T(16,Ue).includes(o.alertSw)?o.alertSw:!o.alertSw),r(1),c("formGroup",o.formRegister),r(1),c("ngIf",o.validateUser.activeDirectory!=1),r(1),P("control_error",!o.formRegister.controls.mail.valid&&o.formRegister.controls.mail.touched)("control_focus",o.formRegister.controls.mail.valid),r(9),c("ngClass",O(17,ke,o.stateRol,!o.stateRol)),r(1),U(" ",o.selectedRol," "),r(1),c("icon",o.faChevronDown)("ngClass",R(20,Ee,!o.stateRol)),r(1),c("ngClass",R(22,ue,o.activarRol)),r(1),c("ngForOf",o.listRol),r(1),c("disabled",!o.formRegister.valid))},dependencies:[q,j,G,L,$,B,K,ie,Q,W,X,J,Y,ee,le,ae],styles:['@font-face{font-family:nunito-bold;src:url(/assets/fonts/Nunito-Bold.ttf) format("truetype");font-weight:400}@font-face{font-family:nunito-regular;src:url(/assets/fonts/Nunito-Regular.ttf) format("truetype");font-weight:400}@font-face{font-family:nunito-light;src:url(/assets/fonts/Nunito-Light.ttf) format("truetype");font-weight:400}@font-face{font-family:nunito-extra-bold;src:url(/assets/fonts/Nunito-ExtraBold.ttf) format("truetype");font-weight:400}@font-face{font-family:montserrat-regular;src:url(/assets/fonts/Montserrat-Regular.otf) format("truetype");font-weight:400}@font-face{font-family:montserrat-semibold;src:url(/assets/fonts/Montserrat-SemiBold.otf) format("truetype");font-weight:400}@font-face{font-family:montserrat-bold;src:url(/assets/fonts/Montserrat-Bold.otf) format("truetype");font-weight:400}.title[_ngcontent-%COMP%]{font-family:montserrat-bold;font-weight:700;font-size:18px;color:#2e2c35}.div_title[_ngcontent-%COMP%]{margin:14px 0 0;padding-left:36px}.div_top[_ngcontent-%COMP%]{border-top:1px solid rgba(151,151,151,.4)}.subtitle[_ngcontent-%COMP%]{font-family:montserrat-regular;font-weight:400;font-size:14px;color:#2e2c35;line-height:21px}.control[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .lbl_doc[_ngcontent-%COMP%]{opacity:.8;color:#2e2c35;font-family:montserrat-regular;font-weight:none;font-size:12px;letter-spacing:0;line-height:15px}.control[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{box-sizing:border-box;border:.5px solid rgba(46,44,53,.1);border-radius:10px;background-color:#fff9;color:#5a33ff;font-family:montserrat-regular;font-weight:none;font-size:15px;letter-spacing:0;line-height:19px;height:48px}.control[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus{box-sizing:border-box;border:.5px solid #5A33FF;color:#5a33ff}.input_document[_ngcontent-%COMP%]{box-sizing:border-box;border-top:.5px solid rgba(46,44,53,.1);border-right:.5px solid rgba(46,44,53,.1);border-bottom:.5px solid rgba(46,44,53,.1);border-left:hidden;border-top-right-radius:10px;border-bottom-right-radius:10px;background-color:#fff9;color:#5a33ff;font-family:montserrat-regular;font-weight:none;font-size:15x;letter-spacing:0;line-height:19px;height:48px}.control_error[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{box-sizing:border-box;border:1px solid #FF7171;border-radius:10px;background-color:#fff9;color:#ff7171;font-family:montserrat-semibold;font-weight:none;font-size:15px;letter-spacing:0;line-height:19px;height:48px}.control_focus[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{box-sizing:border-box;border:.5px solid #5A33FF;border-radius:10px;color:#5a33ff;font-family:montserrat-semibold;font-weight:none;font-size:15px;letter-spacing:0;line-height:19px;height:48px;box-shadow:0 0 #5a33ff}.input_document_focus[_ngcontent-%COMP%]{border-top:.5px solid #5A33FF;border-right:.5px solid #5A33FF;border-bottom:.5px solid #5A33FF;border-left:hidden;font-family:montserrat-semibold;font-weight:none;font-size:15px;box-shadow:0 0 #5a33ff!important;border-top-right-radius:10px;border-bottom-right-radius:10px;background-color:#fff9;color:#5a33ff;letter-spacing:0;line-height:19px;height:48px}.input_document_error[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{box-sizing:border-box;border-top:1px solid #FF7171;border-right:1px solid #FF7171;border-bottom:1px solid #FF7171;border-left:hidden;font-family:montserrat-semibold;font-weight:none;font-size:15px;box-shadow:0 0 #ff7171!important;border-top-right-radius:10px;border-bottom-right-radius:10px;background-color:#fff9;color:#ff7171;letter-spacing:0;line-height:19px;height:48px}.input_type_error[_ngcontent-%COMP%]   #op[_ngcontent-%COMP%]{border-top:.5px solid #FF7171;border-left:.5px solid #FF7171;border-bottom:.5px solid #FF7171;border-right:hidden;box-shadow:0 0 #ff7171;color:#ff7171;margin-bottom:8px;position:relative;order:0;box-sizing:border-box;border-radius:10px 0 0 10px;background-color:#ff717133;font-family:montserrat-semibold;font-weight:none;font-size:15px;letter-spacing:0;line-height:19px;height:48px;outline:transparent}[_ngcontent-%COMP%]:focus::placeholder{color:transparent}[_ngcontent-%COMP%]::placeholder{color:#2e2c354d;font-family:montserrat-regular;font-weight:400;font-size:none}.btnregistrar[_ngcontent-%COMP%]{border-radius:10px;background-color:#5a33ff;color:#fff;font-family:montserrat-bold;font-weight:500;font-size:16px;letter-spacing:0;line-height:19px;text-align:center;border-width:0;padding:20px;margin-bottom:30px}.btn[_ngcontent-%COMP%]:disabled{background-color:#2e2c35;cursor:not-allowed}.input_type_error[_ngcontent-%COMP%]   #op2[_ngcontent-%COMP%]{border:.5px solid #FF7171;box-shadow:0 0 #ff7171;color:#ff7171;margin-bottom:8px;position:relative;order:0;box-sizing:border-box;border-radius:10px;background-color:#ff717133;font-family:montserrat-semibold;font-weight:600;font-size:15px;letter-spacing:0;line-height:19px;height:48px;outline:transparent}.selected_focus_rol[_ngcontent-%COMP%]{box-sizing:border-box!important;border:.5px solid #5A33FF!important;border-radius:10px!important;color:#5a33ff!important;font-family:montserrat-semibold;font-weight:600;font-size:15px;letter-spacing:0!important;line-height:19px!important;height:48px!important;box-shadow:0 0 #5a33ff!important}.selector-register[_ngcontent-%COMP%]{box-sizing:border-box;border:.5px solid rgba(46,44,53,.1);border-radius:10px;background-color:#fff9;color:#6c757d99;font-family:montserrat-regular;font-weight:400;font-size:15px;letter-spacing:0;line-height:19px;height:48px;width:100%;display:flex;align-items:center;padding:.375rem .75rem;justify-content:space-between;cursor:pointer}.selected_focus_icon[_ngcontent-%COMP%]{color:#5a33ff!important}.icon-selector[_ngcontent-%COMP%]{margin-left:.5rem}.icon-selector-rol[_ngcontent-%COMP%]{font-size:.8rem;color:#757575}.form-control[_ngcontent-%COMP%]{box-shadow:none!important}.select-box[_ngcontent-%COMP%]{display:contents;flex-direction:unset}.alert[_ngcontent-%COMP%]{background-color:#fff;display:grid;grid-template-rows:auto auto;border-radius:10px;border:1px solid #ff7171;padding:12px 16px;margin:0;grid-gap:13px}.alert-success[_ngcontent-%COMP%]{border:1px solid #5a33ff}.copy-alert[_ngcontent-%COMP%]{color:#2e2c35;font-family:montserrat-regular;font-weight:400;font-size:12px;margin:0;text-align:start}.alert-up[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:-5px}.alert-down[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column;align-items:flex-start}.alert-inside-up[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;align-items:center;grid-gap:10px}.title-alert[_ngcontent-%COMP%]{color:#ff7171;font-family:montserrat-semibold;font-weight:600;font-size:14px;margin:0}.title-alert-success[_ngcontent-%COMP%]{color:#5a33ff}.icon-close2[_ngcontent-%COMP%]{cursor:pointer;margin-bottom:5px;z-index:200}.conf[_ngcontent-%COMP%]{margin-left:-10px;margin-right:-8px}']})})(),t})();export{Qe as CreateUserComponent};

(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{k0AJ:function(l,n,u){"use strict";u.r(n),u.d(n,"ProductDetailsModuleNgFactory",function(){return U});var t=u("8Y7J");class i{}var a=u("pMnS"),e=u("RhBh"),o=u("ZH7z"),s=u("SVse"),c=u("2Q0+"),r=u("jhVY"),b=u("EaNY"),d=u("fyIi"),p=u("Ahbh"),v=u("s7LF"),f=u("G0yt"),m=u("9AJC"),h=u("iInd"),g=u("xkeV");class k{constructor(){this.shopblock=g,this.settings={slidesToShow:4,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:6e3,arrows:!1,dots:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}}]}}ngOnInit(){}}var w=t.yb({encapsulation:0,styles:[[""]],data:{}});function A(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,9,"div",[["class","col-lg-3 col-sm-6"],["ngxSlickItem",""]],null,null,null,null,null)),t.zb(1,212992,null,0,d.c,[t.o,t.I,d.a],null,null),(l()(),t.Ab(2,0,null,null,7,"div",[["class","single-product"]],null,null,null,null,null)),(l()(),t.Ab(3,0,null,null,1,"div",[["class","product-img"]],null,null,null,null,null)),(l()(),t.Ab(4,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),t.Ab(5,0,null,null,4,"div",[["class","product-desc"]],null,null,null,null,null)),(l()(),t.Ab(6,0,null,null,3,"h5",[["class","title"]],null,null,null,null,null)),(l()(),t.Ab(7,0,null,null,2,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Pb(l,8).onClick(u.button,u.ctrlKey,u.shiftKey,u.altKey,u.metaKey)&&i),i},null,null)),t.zb(8,671744,null,0,h.n,[h.l,h.a,s.i],{routerLink:[0,"routerLink"]},null),(l()(),t.Zb(9,null,["",""]))],function(l,n){l(n,1,0),l(n,8,0,t.Hb(1,"/product-details/",n.context.$implicit.id,""))},function(l,n){l(n,4,0,n.context.$implicit.image[0],n.context.$implicit.title),l(n,7,0,t.Pb(n,8).target,t.Pb(n,8).href),l(n,9,0,n.context.$implicit.title)})}function N(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,7,"div",[["class","related-product"]],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,1,"h2",[["class","related-title"]],null,null,null,null,null)),(l()(),t.Zb(-1,null,["Related Products"])),(l()(),t.Ab(3,0,null,null,4,"ngx-slick-carousel",[["class","product-loop related-product-slider row"]],null,null,null,p.b,p.a)),t.Ub(5120,null,v.b,function(l){return[l]},[d.a]),t.zb(5,13287424,[["slickModal",4]],0,d.a,[t.o,t.F,t.I],{config:[0,"config"]},null),(l()(),t.kb(16777216,null,0,1,null,A)),t.zb(7,278528,null,0,s.k,[t.W,t.T,t.x],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,5,0,u.settings),l(n,7,0,u.shopblock)},null)}var P=u("Rm1N");class y{constructor(l){this.router=l,this.shopdetails=g,this.authors=P,this.counter=1,this.settings={slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:6e3,arrows:!0,focusOnSelect:!0,nextArrow:'<button class="slick-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',prevArrow:'<button class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',asNavFor:".slick-thumbs"},this.settingsThumb={infinite:!0,slidesToShow:3,slidesToScroll:1,arrows:!1,dots:!1,vertical:!0,autoplay:!0,autoplaySpeed:6e3,focusOnSelect:!0,asNavFor:".product-gallery-slider",responsive:[{breakpoint:768,settings:{vertical:!1}}]}}getAuthor(l){return P.filter(n=>l.includes(n.id))}setPost(l){this.shopdetails=g.filter(n=>n.id==l)}increment(){this.counter+=1}decrement(){this.counter-=1}ngAfterContentInit(){this.setPost(this.router.snapshot.params.id)}}var I=t.yb({encapsulation:0,styles:[[""]],data:{}});function x(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,2,"li",[["ngxSlickItem",""]],null,null,null,null,null)),t.zb(1,212992,null,0,d.c,[t.o,t.I,d.a],null,null),(l()(),t.Ab(2,0,null,null,0,"img",[["class","w-100"]],[[8,"src",4],[8,"alt",0]],null,null,null,null))],function(l,n){l(n,1,0)},function(l,n){l(n,2,0,n.context.$implicit,n.parent.context.$implicit.title)})}function z(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,2,"div",[["class","single-gallery-itam"],["ngxSlickItem",""]],null,null,null,null,null)),t.zb(1,212992,null,0,d.c,[t.o,t.I,d.a],null,null),(l()(),t.Ab(2,0,null,null,0,"img",[["class","w-100"]],[[8,"src",4],[8,"alt",0]],null,null,null,null))],function(l,n){l(n,1,0)},function(l,n){l(n,2,0,n.context.$implicit,n.parent.context.$implicit.title)})}function T(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,0,"div",[["class","product-description"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.productdescription)})}function S(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Zb(2,null,["",""])),(l()(),t.Ab(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Zb(4,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.title),l(n,4,0,n.context.$implicit.text)})}function F(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,4,"div",[["class","additional-info"]],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,3,"table",[],null,null,null,null,null)),(l()(),t.Ab(2,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.kb(16777216,null,null,1,null,S)),t.zb(4,278528,null,0,s.k,[t.W,t.T,t.x],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,4,0,n.parent.context.$implicit.additional)},null)}function D(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,45,"div",[["class","product-details section-gap"]],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,44,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Ab(2,0,null,null,13,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),t.Ab(3,0,null,null,12,"div",[["class","product-gallery clearfix"]],null,null,null,null,null)),(l()(),t.Ab(4,0,null,null,5,"div",[["class","product-gallery-arrow"]],null,null,null,null,null)),(l()(),t.Ab(5,0,null,null,4,"ngx-slick-carousel",[["class","slick-thumbs"]],null,null,null,p.b,p.a)),t.Ub(5120,null,v.b,function(l){return[l]},[d.a]),t.zb(7,13287424,[["slickModal",4]],0,d.a,[t.o,t.F,t.I],{config:[0,"config"]},null),(l()(),t.kb(16777216,null,0,1,null,x)),t.zb(9,278528,null,0,s.k,[t.W,t.T,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ab(10,0,null,null,5,"div",[["class","gallery-slider-warp"]],null,null,null,null,null)),(l()(),t.Ab(11,0,null,null,4,"ngx-slick-carousel",[["class","product-gallery-slider"]],null,null,null,p.b,p.a)),t.Ub(5120,null,v.b,function(l){return[l]},[d.a]),t.zb(13,13287424,[["slickModal",4]],0,d.a,[t.o,t.F,t.I],{config:[0,"config"]},null),(l()(),t.kb(16777216,null,0,1,null,z)),t.zb(15,278528,null,0,s.k,[t.W,t.T,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ab(16,0,null,null,4,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),t.Ab(17,0,null,null,3,"div",[["class","product-summary"]],null,null,null,null,null)),(l()(),t.Ab(18,0,null,null,1,"h3",[["class","product-name"]],null,null,null,null,null)),(l()(),t.Zb(19,null,["",""])),(l()(),t.Ab(20,0,null,null,0,"div",[["class","short-description"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.Ab(21,0,null,null,24,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.Ab(22,0,null,null,23,"div",[["class","product-details-tab"]],null,null,null,null,null)),(l()(),t.Ab(23,0,null,null,20,"div",[["class","tab-filter-nav"]],null,null,null,null,null)),(l()(),t.Ab(24,0,null,null,19,"div",[["class","nav nav-tabs"],["id","nav-tab"],["ngbNav",""],["role","tablist"]],[[2,"nav",null],[2,"flex-column",null],[1,"aria-orientation",0],[1,"role",0]],[[null,"keydown.arrowLeft"],[null,"keydown.arrowRight"],[null,"keydown.arrowDown"],[null,"keydown.arrowUp"],[null,"keydown.Home"],[null,"keydown.End"]],function(l,n,u){var i=!0;return"keydown.arrowLeft"===n&&(i=!1!==t.Pb(l,25).onKeyDown(u)&&i),"keydown.arrowRight"===n&&(i=!1!==t.Pb(l,25).onKeyDown(u)&&i),"keydown.arrowDown"===n&&(i=!1!==t.Pb(l,25).onKeyDown(u)&&i),"keydown.arrowUp"===n&&(i=!1!==t.Pb(l,25).onKeyDown(u)&&i),"keydown.Home"===n&&(i=!1!==t.Pb(l,25).onKeyDown(u)&&i),"keydown.End"===n&&(i=!1!==t.Pb(l,25).onKeyDown(u)&&i),i},null,null)),t.zb(25,1720320,[["nav",4]],2,f.z,[[8,"tablist"],f.A,t.i,s.c],null,null),t.Vb(603979776,1,{items:1}),t.Vb(603979776,2,{links:1}),(l()(),t.Ab(28,0,null,null,7,"li",[],[[2,"nav-item",null]],null,null,null,null)),t.zb(29,2179072,[[1,4]],1,f.C,[f.z,t.o],{_id:[0,"_id"]},null),t.Vb(603979776,3,{contentTpls:1}),(l()(),t.Ab(31,0,null,null,2,"a",[["class","border-0"],["href",""],["ngbNavLink",""]],[[8,"id",0],[2,"nav-link",null],[2,"nav-item",null],[1,"role",0],[2,"active",null],[2,"disabled",null],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-disabled",0]],[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(t.Pb(l,32).nav.click(t.Pb(l,32).navItem),i=!1!==u.preventDefault()&&i),i},null,null)),t.zb(32,16384,[[2,4]],0,f.D,[[8,null],f.C,f.z,t.o],null,null),(l()(),t.Zb(-1,null,[" Description "])),(l()(),t.kb(0,null,null,1,null,T)),t.zb(35,16384,[[3,4]],0,f.B,[t.T],null,null),(l()(),t.Ab(36,0,null,null,7,"li",[],[[2,"nav-item",null]],null,null,null,null)),t.zb(37,2179072,[[1,4]],1,f.C,[f.z,t.o],{_id:[0,"_id"]},null),t.Vb(603979776,4,{contentTpls:1}),(l()(),t.Ab(39,0,null,null,2,"a",[["class","border-0"],["href",""],["ngbNavLink",""]],[[8,"id",0],[2,"nav-link",null],[2,"nav-item",null],[1,"role",0],[2,"active",null],[2,"disabled",null],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-selected",0],[1,"aria-disabled",0]],[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(t.Pb(l,40).nav.click(t.Pb(l,40).navItem),i=!1!==u.preventDefault()&&i),i},null,null)),t.zb(40,16384,[[2,4]],0,f.D,[[8,null],f.C,f.z,t.o],null,null),(l()(),t.Zb(-1,null,[" Additional information "])),(l()(),t.kb(0,null,null,1,null,F)),t.zb(43,16384,[[4,4]],0,f.B,[t.T],null,null),(l()(),t.Ab(44,0,null,null,1,"div",[],[[2,"tab-content",null]],null,null,m.f,m.d)),t.zb(45,4243456,null,0,f.F,[t.i,t.F],{nav:[0,"nav"]},null)],function(l,n){var u=n.component;l(n,7,0,u.settingsThumb),l(n,9,0,n.context.$implicit.image),l(n,13,0,u.settings),l(n,15,0,n.context.$implicit.image),l(n,29,0,1),l(n,37,0,2),l(n,45,0,t.Pb(n,25))},function(l,n){l(n,19,0,n.context.$implicit.title),l(n,20,0,n.context.$implicit.shortdescription),l(n,24,0,!0,"vertical"===t.Pb(n,25).orientation,"vertical"===t.Pb(n,25).orientation&&"tablist"===t.Pb(n,25).roles?"vertical":void 0,t.Pb(n,25).role?t.Pb(n,25).role:t.Pb(n,25).roles?"tablist":void 0),l(n,28,0,!0),l(n,31,0,t.Pb(n,32).navItem.domId,!0,t.Pb(n,32).hasNavItemClass(),t.Pb(n,32).role?t.Pb(n,32).role:t.Pb(n,32).nav.roles?"tab":void 0,t.Pb(n,32).navItem.active,t.Pb(n,32).navItem.disabled,t.Pb(n,32).navItem.disabled?-1:void 0,t.Pb(n,32).navItem.isPanelInDom()?t.Pb(n,32).navItem.panelDomId:null,t.Pb(n,32).navItem.active,t.Pb(n,32).navItem.disabled),l(n,36,0,!0),l(n,39,0,t.Pb(n,40).navItem.domId,!0,t.Pb(n,40).hasNavItemClass(),t.Pb(n,40).role?t.Pb(n,40).role:t.Pb(n,40).nav.roles?"tab":void 0,t.Pb(n,40).navItem.active,t.Pb(n,40).navItem.disabled,t.Pb(n,40).navItem.disabled?-1:void 0,t.Pb(n,40).navItem.isPanelInDom()?t.Pb(n,40).navItem.panelDomId:null,t.Pb(n,40).navItem.active,t.Pb(n,40).navItem.disabled),l(n,44,0,!0)})}function O(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,5,"section",[["class","shop-details-wrap"]],null,null,null,null,null)),(l()(),t.Ab(1,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.kb(16777216,null,null,1,null,D)),t.zb(3,278528,null,0,s.k,[t.W,t.T,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Ab(4,0,null,null,1,"app-relatedshop",[],null,null,null,N,w)),t.zb(5,114688,null,0,k,[],null,null)],function(l,n){l(n,3,0,n.component.shopdetails),l(n,5,0)},null)}var $=u("R8T8"),K=u("FezY");class C{constructor(){this.classname="",this.ftlogo="assets/img/logo-2.png",this.ftshape="assets/img/lines/01.png",this.ftshape2="assets/img/lines/02.png",this.ftshapeclass="line-one",this.ftshape2class="line-two"}ngOnInit(){}}var L=t.yb({encapsulation:0,styles:[[""]],data:{}});function V(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,1,"app-header-one",[],null,[["window","scroll"]],function(l,n,u){var i=!0;return"window:scroll"===n&&(i=!1!==t.Pb(l,1).onWindowScroll(u)&&i),i},e.b,e.a)),t.zb(1,114688,null,0,o.a,[s.c,t.z,c.a],null,null),(l()(),t.Ab(2,0,null,null,1,"app-breadcrumb",[],null,null,null,r.b,r.a)),t.zb(3,114688,null,0,b.a,[],null,null),(l()(),t.Ab(4,0,null,null,1,"app-content",[],null,null,null,O,I)),t.zb(5,1097728,null,0,y,[h.a],null,null),(l()(),t.Ab(6,0,null,null,1,"app-footer",[],null,null,null,$.b,$.a)),t.zb(7,114688,null,0,K.a,[c.a],{layout:[0,"layout"],logo:[1,"logo"],shape:[2,"shape"],shape2:[3,"shape2"],shapeclass:[4,"shapeclass"],shape2class:[5,"shape2class"]},null)],function(l,n){var u=n.component;l(n,1,0),l(n,3,0),l(n,7,0,u.classname,u.ftlogo,u.ftshape,u.ftshape2,u.ftshapeclass,u.ftshape2class)},null)}function M(l){return t.cc(0,[(l()(),t.Ab(0,0,null,null,1,"app-product-details",[],null,null,null,V,L)),t.zb(1,114688,null,0,C,[],null,null)],function(l,n){l(n,1,0)},null)}var R=t.wb("app-product-details",C,M,{},{},[]),Z=u("iryk"),E=u("lABs"),J=u("IheW");class W{}var H=u("hGdz"),U=t.xb(i,[],function(l){return t.Mb([t.Nb(512,t.l,t.db,[[8,[a.a,R,m.a,m.b,m.j,m.k,m.g,m.h,m.i]],[3,t.l],t.D]),t.Nb(4608,s.n,s.m,[t.z]),t.Nb(4608,v.e,v.e,[]),t.Nb(4608,f.v,f.v,[t.l,t.v,f.pb,f.w]),t.Nb(5120,Z.a,E.b,[h.l]),t.Nb(4608,J.h,J.n,[s.c,t.I,J.l]),t.Nb(4608,J.o,J.o,[J.h,J.m]),t.Nb(5120,J.a,function(l){return[l]},[J.o]),t.Nb(4608,J.k,J.k,[]),t.Nb(6144,J.i,null,[J.k]),t.Nb(4608,J.g,J.g,[J.i]),t.Nb(6144,J.b,null,[J.g]),t.Nb(4608,J.f,J.j,[J.b,t.v]),t.Nb(4608,J.c,J.c,[J.f]),t.Nb(1073742336,s.b,s.b,[]),t.Nb(1073742336,h.o,h.o,[[2,h.t],[2,h.l]]),t.Nb(1073742336,W,W,[]),t.Nb(1073742336,f.c,f.c,[]),t.Nb(1073742336,f.f,f.f,[]),t.Nb(1073742336,f.g,f.g,[]),t.Nb(1073742336,f.k,f.k,[]),t.Nb(1073742336,f.l,f.l,[]),t.Nb(1073742336,v.d,v.d,[]),t.Nb(1073742336,v.a,v.a,[]),t.Nb(1073742336,f.r,f.r,[]),t.Nb(1073742336,f.t,f.t,[]),t.Nb(1073742336,f.x,f.x,[]),t.Nb(1073742336,f.E,f.E,[]),t.Nb(1073742336,f.J,f.J,[]),t.Nb(1073742336,f.P,f.P,[]),t.Nb(1073742336,f.S,f.S,[]),t.Nb(1073742336,f.V,f.V,[]),t.Nb(1073742336,f.ab,f.ab,[]),t.Nb(1073742336,f.db,f.db,[]),t.Nb(1073742336,f.eb,f.eb,[]),t.Nb(1073742336,f.fb,f.fb,[]),t.Nb(1073742336,f.y,f.y,[]),t.Nb(1073742336,E.a,E.a,[]),t.Nb(1073742336,d.b,d.b,[]),t.Nb(1073742336,H.a,H.a,[]),t.Nb(1073742336,J.e,J.e,[]),t.Nb(1073742336,J.d,J.d,[]),t.Nb(1073742336,i,i,[]),t.Nb(1024,h.j,function(){return[[{path:"",component:C}]]},[]),t.Nb(256,J.l,"XSRF-TOKEN",[]),t.Nb(256,J.m,"X-XSRF-TOKEN",[])])})}}]);
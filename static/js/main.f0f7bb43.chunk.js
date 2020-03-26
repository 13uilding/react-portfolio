(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{103:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),c=(a(79),a(28)),i=a(22),m=a(70),u=a(163),s=a(164),p=(a(80),a(145)),h=a(166),E=a(147),d=a(71),f=a(35),g=Object(p.a)((function(e){return{root:{flexGrow:1},portrait:{height:"auto",maxHeight:300,maxWidth:300,width:"auto"},img:{height:"auto",width:"auto"},paper:{margin:"1rem 0 0 1rem",zIndex:"10"},typography:{margin:"0.5rem",textIndent:"1rem"},control:{padding:e.spacing(2)}}}));function y(){var e=g();return r.a.createElement("div",{class:"wrapper"},r.a.createElement(E.a,{container:!0,className:e.root},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h1",{style:{textAlign:"center"}},"Hello World, ",r.a.createElement("br",null),"I'm Dan Brown")),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(E.a,{container:!0,justify:"center",item:!0,sm:4},r.a.createElement(h.a,{src:"./static/media/mustachiothumb.png",alt:"Dan Brown",className:e.portrait})),r.a.createElement(E.a,{container:!0,justify:"center",item:!0,sm:8},r.a.createElement(d.a,{variant:"outlined",className:e.paper},r.a.createElement(f.a,{className:e.typography},"Full Stack Developer with background in Physics and Math eager to apply my knowledge concerning simulations and logic. Recently earned a certificate in Full Stack Web Development from the University of Denver, acquired skills in HTML/CSS, JavaScript, React.js, Node, and MongoDB/SQL. Known as a team player, troubleshooter, and lifelong learner with 5+ years of programming experience. With each project, my aim is guided by agile development, whether that entails working closely with another person, handling things on my own, or learning a new technology. My goal is to acquire new knowledge at every challenge, and be an asset to my future team regardless of the programming language or role.")))))))}function v(){return r.a.createElement("h1",null,"Algorithms")}function b(){return r.a.createElement("h1",null,"Contact")}var w=a(21),j=a(149),x=a(150),k=a(153),O=a(152),N=a(151),L=a(154),S=Object(p.a)({root:{maxWidth:345},media:{height:140}});function C(e){window.open(e).opener=null}function I(e){var t=S();return r.a.createElement(j.a,{className:t.root},r.a.createElement(x.a,null,r.a.createElement(N.a,{className:t.media,image:e.image,title:e.contributors}),r.a.createElement(O.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},e.description))),r.a.createElement(k.a,null,r.a.createElement(L.a,{size:"small",color:"primary",onClick:function(){return C(e.deployedLink)}},"Deployed App"),r.a.createElement(L.a,{size:"small",color:"primary",onClick:function(){return C(e.repositoryLink)}},"Repository")))}var W=a(84);a(102);var M=["react-portfolio","project3","project-two","Project01","HW6-WeatherAPI","EmployeeSummary"],D=["contributors_url","description","html_url","name"],P=Object(p.a)((function(e){return{root:{flexGrow:1},portrait:{height:"auto",maxHeight:300,maxWidth:300,width:"auto"},img:{height:"auto",width:"auto"},paper:{margin:"1rem 0 0 1rem",zIndex:"10"},typography:{margin:"0.5rem",textIndent:"1rem"},control:{padding:e.spacing(2)}}}));function A(){var e=P(),t=Object(n.useState)([{}]),a=Object(w.a)(t,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){!function(e,t,a){W.get("https://api.github.com/users/13uilding/repos").then((function(n){var r=n.data.filter((function(t){return e.includes(t.name)})),o=[],l=!0,c=!1,i=void 0;try{for(var m,u=r[Symbol.iterator]();!(l=(m=u.next()).done);l=!0){var s=m.value,p={},h=!0,E=!1,d=void 0;try{for(var f,g=t[Symbol.iterator]();!(h=(f=g.next()).done);h=!0){var y=f.value;p[y]=s[y]}}catch(v){E=!0,d=v}finally{try{h||null==g.return||g.return()}finally{if(E)throw d}}o.push(p)}}catch(v){c=!0,i=v}finally{try{l||null==u.return||u.return()}finally{if(c)throw i}}return a(o)}))}(M,D,(function(e){l(e)}))}),[]),r.a.createElement("div",{class:"wrapper"},r.a.createElement(E.a,{container:!0,className:e.root},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h1",{style:{textAlign:"center"}},"Pinned GitHub Projects")),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(E.a,{container:!0,justify:"center",spacing:3},o.map((function(e){return r.a.createElement(I,{contributors:e.contributors_url,deployedLink:e.name,description:e.description,image:"/assets/"+e.name+".png",repositoryLink:e.html_url,title:e.name,xs:12,lg:3})}))))))}var B=a(42),G=(a(103),0);function H(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[50,55],n=1.57+3.14*e/30,r=Math.round(100*(a[0]+t*Math.sin(n)+Number.EPSILON))/100,o=Math.round(100*(a[1]+t*Math.cos(n)+Number.EPSILON))/100;return[r,o]}function R(e){var t=Object(w.a)(e,2);return[t[0]+"vw",t[1]+"vh"]}function T(e){var t=Object(n.useState)({earth:[],date:"DD-MM-YYYY",mars:[],mercury:[],moon:[],venus:[]}),a=Object(w.a)(t,2),o=a[0],l=a[1];Object(n.useEffect)((function(){var e=setInterval((function(){(G+=.2)>=3e3&&clearTimeout(e);var t=H(G/13,35,[50,55]);l(Object(B.a)({},o,{earth:R(t),mars:R(H(G/24.5,40,[50,55])),mercury:R(H(G/3.1,15,[50,55])),moon:R(H(G,5,t)),venus:R(H(G/8,25,[50,55]))}))}),20)}),[]);var c={right:o.earth[0],top:o.earth[1]},i={right:o.mars[0],top:o.mars[1]},m={right:o.mercury[0],top:o.mercury[1]},u={right:o.moon[0],top:o.moon[1]},s={right:o.venus[0],top:o.venus[1]};return r.a.createElement("div",{class:"sunEarth"},r.a.createElement("span",{class:"matter sun"}),r.a.createElement("span",{style:c,class:"matter earth"}),r.a.createElement("span",{style:i,class:"matter mars"}),r.a.createElement("span",{style:m,class:"matter mercury"}),r.a.createElement("span",{style:u,class:"matter moon"}),r.a.createElement("span",{style:s,class:"matter venus"}))}var Y=a(161),z=a(162),_=a(15),F=a(3),J=a(165),q=a(160),K=a(155),U=a(157),Q=a(159),$=a(167),V=a(156),X=a(158),Z=a(69),ee=a.n(Z),te=a(62),ae=a.n(te),ne=a(63),re=a.n(ne),oe=a(66),le=a.n(oe),ce=a(64),ie=a.n(ce),me=a(67),ue=a.n(me),se=a(68),pe=a.n(se),he=Object(p.a)((function(e){return{root:{flexGrow:1},list:{width:250},fullList:{width:"auto"},menuButton:{marginRight:e.spacing(2)}}}));function Ee(){var e,t=he(),a=r.a.useState({top:!1}),n=Object(w.a)(a,2),o=n[0],l=n[1],i=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(B.a)({},o,Object(_.a)({},e,t)))}};return r.a.createElement("div",{className:t.root},r.a.createElement(q.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",onClick:i("top",!0)},r.a.createElement(ee.a,null)),r.a.createElement(J.a,{anchor:"top",open:o.top,onClose:i("top",!1),color:"inherit"},(e="top",r.a.createElement("div",{className:Object(F.a)(t.list,Object(_.a)({},t.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:i(e,!1),onKeyDown:i(e,!1)},r.a.createElement(K.a,null,["About","Portfolio","Algorithms"].map((function(e){return r.a.createElement($.a,{button:!0,key:e},r.a.createElement(V.a,null,"About"===e?r.a.createElement(ae.a,null):"Portfolio"===e?r.a.createElement(re.a,null):r.a.createElement(ie.a,null)),r.a.createElement(U.a,{component:c.b,to:"/".concat(e.toLowerCase())},r.a.createElement(X.a,{primary:e})))}))),r.a.createElement(Q.a,null),r.a.createElement(K.a,null,["Contact","LinkedIn","Github"].map((function(e){return r.a.createElement($.a,{button:!0,key:e},r.a.createElement(V.a,null,"Contact"===e?r.a.createElement(le.a,null):"LinkedIn"===e?r.a.createElement(ue.a,null):r.a.createElement(pe.a,null)),r.a.createElement(U.a,{component:c.b,to:"/".concat(e.toLowerCase())},r.a.createElement(X.a,{style:{fontWeight:"strong"},primary:e})))})))))))}var de=Object(p.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));function fe(e){var t=de(),a=Object(i.f)();return console.log(a),r.a.createElement("div",{className:t.root},r.a.createElement(Y.a,{position:"static"},r.a.createElement(z.a,null,r.a.createElement(Ee,null),r.a.createElement(f.a,{className:t.title,variant:"h6",noWrap:!0},"/"===a.pathname?"WELCOME TO MY PORTFOLIO":a.pathname.split("/").join(" ").toUpperCase()))))}var ge=Object(m.a)({palette:{type:"dark",primary:{main:"#9c27b0"},secondary:{main:"#ff1744"}}});var ye=function(){return r.a.createElement(u.a,{theme:ge},r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement(fe,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/about"},r.a.createElement(y,null)),r.a.createElement(i.a,{exact:!0,path:"/portfolio"},r.a.createElement(A,null)),r.a.createElement(i.a,{exact:!0,path:"/algorithms"},r.a.createElement(v,null)),r.a.createElement(i.a,{exact:!0,path:"/contact"},r.a.createElement(b,null)),r.a.createElement(i.a,null,r.a.createElement(T,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(107);l.a.render(r.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a(108)},79:function(e,t,a){},80:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[74,1,2]]]);
//# sourceMappingURL=main.f0f7bb43.chunk.js.map
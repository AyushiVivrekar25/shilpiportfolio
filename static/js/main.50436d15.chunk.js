(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{47:function(e,i,t){},51:function(e,i,t){},52:function(e,i,t){},53:function(e,i,t){},54:function(e,i,t){},55:function(e,i,t){},56:function(e,i,t){},57:function(e,i,t){},58:function(e,i,t){},59:function(e,i,t){"use strict";t.r(i);var s=t(1),c=t.n(s),a=t(16),l=t.n(a),n=t(8),r=t(19),j=t(76),d=t(22),h=t.p+"static/media/mee2.8444b8d1.jpeg",o=t(23),b=t.n(o),O=t(6),x=t.n(O),m=t(0);function p(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){var i;Object(d.a)(e.current,(i={showCursor:!1,backDelay:1e3,backSpeed:80},Object(r.a)(i,"showCursor",!0),Object(r.a)(i,"strings",[" Developer"]),i))}),[]),Object(m.jsxs)("div",{className:"intro",id:"intro",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)(b.a,{top:!0,left:!0,children:Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{className:"meimg",src:h,alt:"My img"})})})}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(x.a,{top:!0,children:Object(m.jsx)("h2",{children:" Hi There ,I'm"})}),Object(m.jsxs)(x.a,{right:!0,children:["    ",Object(m.jsx)("h1",{children:"Shilpee Agrawal"})]}),Object(m.jsxs)(x.a,{bottom:!0,children:[" ",Object(m.jsxs)("h3",{children:["Software",Object(m.jsx)("span",{ref:e})]})]})]}),Object(m.jsx)("a",{href:"#portfolio",children:Object(m.jsx)(j.a,{className:"iconDown "})})]})]})}var g=t(77),u=t(78);function f(e){var i=e.menuOpen,t=e.setMenuOpen;return Object(m.jsx)("div",{className:"topbar "+(i&&"active"),children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("a",{href:"#intro",className:"logo",children:"Developer "}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(g.a,{className:"icon"}),Object(m.jsx)("span",{children:"+91 810 939 3133"})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(u.a,{className:"icon"}),Object(m.jsx)("span",{children:" agrawalshilpi191@gmail.com"})]})]}),Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"hamburger",onClick:function(){return t(!i)},children:[Object(m.jsx)("span",{className:"line1"}),Object(m.jsx)("span",{className:"line2"}),Object(m.jsx)("span",{className:"line3"})]})})]})})}t(47);function v(e){var i=e.id,t=e.title,s=e.active,c=e.setSelected;return Object(m.jsx)("li",{className:s?"portfolioList active":"portfolioList",onClick:function(){return c(i)},children:t})}var N=t(25),w=t.n(N),k=t(26),S=t.n(k),C=t(27),y=t.n(C),A=t.p+"static/media/live.8fa0ff8d.png",I=t.p+"static/media/task1.3675e0ce.png",E=t.p+"static/media/task2.a61d3ed2.png",P=t.p+"static/media/mydesign.126b636c.png",D=t.p+"static/media/mydesign1.fade38e6.png",M=t.p+"static/media/mydesign2.a3e146da.png",L=t.p+"static/media/mydesign3.b457cc2b.png",B=[{id:"1",title:"Juno App",img:A,href:"https://junowebapp.z29.web.core.windows.net/login"},{id:"2",title:"Demo Website",img:I,href:"https://shilpiagrawal19.github.io/Learningdemoapp.github.io/index.html"},{id:"3",title:"SAM App",img:E,href:"https://shilpiagrawal19.github.io/Systemassets.github.io/1login.html"},{id:"4",title:"Company website",img:P,href:"https://shilpiagrawal19.github.io/Demoworkex.github.io/"},{id:"5",title:"Company website",img:D,href:"https://shilpiagrawal19.github.io/DemojavascriptWeb.github.io/website.html"},{id:"6",title:"E-commerse website",img:M,href:"https://shilpiagrawal19.github.io/craft.github.io/Craft.html"},{id:"7",title:"Signup Form",img:L,href:"https://shilpiagrawal19.github.io/Signup-form/signin.html"}],H=[{id:"1",title:"Juno App",img:A,href:"https://junowebapp.z29.web.core.windows.net/login"}],T=[{id:"2",title:"Demo Website",img:I,href:"https://shilpiagrawal19.github.io/Learningdemoapp.github.io/index.html"},{id:"3",title:"SAM App",img:E,href:"https://shilpiagrawal19.github.io/Systemassets.github.io/1login.html"}],J=[{id:"4",title:"Company website",img:P,href:"https://shilpiagrawal19.github.io/Demoworkex.github.io/"},{id:"5",title:"Company website",img:D,href:"https://shilpiagrawal19.github.io/DemojavascriptWeb.github.io/website.html"},{id:"6",title:"E-commerse website",img:M,href:"https://shilpiagrawal19.github.io/craft.github.io/Craft.html"},{id:"7",title:"Signup Form",img:L,href:"https://shilpiagrawal19.github.io/Signup-form/signin.html"}];function z(){var e=Object(s.useState)("featured"),i=Object(n.a)(e,2),t=i[0],c=i[1],a=Object(s.useState)([]),l=Object(n.a)(a,2),r=l[0],j=l[1];return Object(s.useEffect)((function(){switch(t){case"featured":j(B);break;case"live":j(H);break;case"task":j(T);break;case"design":j(J);break;default:j(B)}}),[t]),Object(m.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(m.jsx)(w.a,{right:!0,children:Object(m.jsx)("h1",{children:"Portfolio"})}),Object(m.jsx)(S.a,{left:!0,children:Object(m.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"live",title:"Live Project"},{id:"task",title:"Internship Tasks"},{id:"design",title:"My Designs"}].map((function(e){return Object(m.jsx)(v,{title:e.title,active:t===e.id,setSelected:c,id:e.id})}))})}),Object(m.jsx)(y.a,{left:!0,children:Object(m.jsx)("div",{className:"container",children:r.map((function(e){return Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("img",{className:"imgproject",src:e.img,alt:"loading"}),Object(m.jsx)("a",{href:e.href,className:"titlelink",children:e.title}),Object(m.jsx)("div",{})]})}))})})]})}var G=t(17),F=t.n(G);function R(e){var i=e.title,t=e.span;return Object(m.jsx)(F.a,{top:!0,children:Object(m.jsx)("div",{className:"Title",children:Object(m.jsxs)("h3",{children:[i,Object(m.jsxs)("span",{children:[" ",t]})]})})})}var W=t(5),_=t.n(W);function K(){function e(e){var i=e.skill,t=e.progress,s=e.width;return Object(m.jsx)("div",{className:"SkillsSection",children:Object(m.jsxs)("div",{className:"skills-container",children:[Object(m.jsx)("h5",{className:"skill-title",children:i}),Object(m.jsxs)("div",{className:"skill-bar",children:[Object(m.jsx)("p",{className:"skill-text",children:t}),Object(m.jsx)("div",{className:"skill-progress",children:Object(m.jsx)("div",{className:"progress",children:Object(m.jsx)("div",{className:"inner-pregress",style:{width:s}})})})]})]})})}return Object(m.jsxs)("div",{className:"skill",id:"skill",children:[Object(m.jsx)("div",{className:"techskills",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(R,{title:"SKILLS"}),Object(m.jsxs)(x.a,{top:!0,children:[Object(m.jsx)("div",{className:"leftskills",children:Object(m.jsx)("div",{className:"skillsContainer",children:Object(m.jsxs)(_.a,{left:!0,children:[Object(m.jsx)(e,{skill:"Html",progress:"80%",width:"80%"}),Object(m.jsx)(e,{skill:"Bootstrap",progress:"70%",width:"70%"}),Object(m.jsx)(e,{skill:"Css & scss",progress:"80%",width:"80%"}),Object(m.jsx)(e,{skill:"Javascript",progress:"60%",width:"60%"})]})})}),Object(m.jsx)("div",{className:"rightskills",children:Object(m.jsx)("div",{className:"skillsContainer",children:Object(m.jsxs)(_.a,{right:!0,children:[Object(m.jsx)(e,{skill:"React Js",progress:"60%",width:"60%"}),Object(m.jsx)(e,{skill:"Php",progress:"40%",width:"40%"}),Object(m.jsx)(e,{skill:"Git",progress:"75%",width:"75%"}),Object(m.jsx)(e,{skill:"Material UI",progress:"40%",width:"40%"})]})})})]})]})}),Object(m.jsxs)("div",{className:"personalskills",children:[Object(m.jsx)(x.a,{top:!0,className:"fade",children:Object(m.jsx)("h2",{children:"PERSONAL SKILLS"})}),Object(m.jsx)(x.a,{right:!0,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Communication Skills"}),Object(m.jsx)("li",{children:"Creative Thinking"}),Object(m.jsx)("li",{children:"Punctual"}),Object(m.jsx)("li",{children:"Leadership Skills"}),Object(m.jsx)("li",{children:"Team Work"}),Object(m.jsx)("li",{children:"Time Management"})]})})]})]})}var V=t(28),q=t.n(V),Q=(t.p,t(29)),U=t.n(Q),X=t(30),Y=t.n(X),Z=t(31),$=t.n(Z);function ee(){var e=Object(s.useState)(!1),i=Object(n.a)(e,2),t=i[0],c=i[1];return Object(m.jsxs)("div",{className:"contact",id:"contact",children:[Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)(F.a,{top:!0,children:Object(m.jsx)("h2",{children:"CONTACT"})}),Object(m.jsx)(_.a,{right:!0,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),q.a.sendForm("service_jcuda82","template_sl3e6mg",e.target,"user_t48JjNsFxzI7L2xqgGi6H").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(m.jsx)("input",{type:"text",placeholder:"Name",name:"name"}),Object(m.jsx)("input",{type:"text",placeholder:"Email",name:"email"}),Object(m.jsx)("textarea",{placeholder:"Message",name:"message"}),Object(m.jsx)("button",{type:"submit",children:"Send"}),t&&Object(m.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})})]}),Object(m.jsx)("div",{className:"left",children:Object(m.jsxs)(_.a,{left:!0,children:[Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(u.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{children:"agrawalshilpi191@gmail.com"})})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(g.a,{className:"icon"}),Object(m.jsx)("span",{children:"+91 810 939 3133"})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(U.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/shilpi-agrawal-2a18ab13b",children:"https://www.linkedin.com/in/shilpi-agrawal-2a18ab13b"})})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(Y.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"https://github.com/shilpiagrawal19",children:"https://github.com/shilpiagrawal19"})})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)($.a,{className:"icon"}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"https://www.google.com/maps/place/Sarafa+Bazar,+Indore,+Madhya+Pradesh+452002/@22.7177054,75.849403,17z/data=!4m5!3m4!1s0x3962fda0c01c3295:0xe1004ef7a4cbe1c7!8m2!3d22.7175144!4d75.852306",children:"79,Bada Sarafa near Rajwada ,Indore"})})]})]})})]})}t(51),t(52),t(53),t(54),t(55),t(56),t(57);function ie(e){var i=e.Open,t=e.setOpen;return Object(m.jsx)("div",{className:"menu "+(i&&"active"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){return t(!1)},children:Object(m.jsx)("a",{href:"#intro",children:"Home"})}),Object(m.jsx)("li",{onClick:function(){return t(!1)},children:Object(m.jsx)("a",{href:"#about",children:"About"})}),Object(m.jsx)("li",{onClick:function(){return t(!1)},children:Object(m.jsx)("a",{href:"#skill",children:"Skills"})}),Object(m.jsx)("li",{onClick:function(){return t(!1)},children:Object(m.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(m.jsx)("li",{onClick:function(){return t(!1)},children:Object(m.jsx)("a",{href:"#contact",children:"Contact"})})]})})}t(58);var te=t(32),se=t.n(te),ce=t(33),ae=t.n(ce),le=t(12),ne=t.n(le);function re(){return Object(m.jsxs)("div",{className:"education",children:[Object(m.jsx)(se.a,{className:"icon"}),Object(m.jsx)("span",{children:"Interships"}),Object(m.jsx)("div",{children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)(ne.a,{className:"icondot"}),Object(m.jsx)("span",{className:"interntitle",children:"Sysmetis IT Solution "}),Object(m.jsx)("p",{children:" Sept 2020 - Apr 2021 "})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(ne.a,{className:"icondot"}),Object(m.jsx)("span",{className:"interntitle",children:"SNV Infotech "}),Object(m.jsx)("p",{children:" June 2019 - July 2020 "})]})]})}),Object(m.jsxs)("div",{children:[Object(m.jsx)(ae.a,{className:"icon"}),Object(m.jsx)("span",{children:"Education"}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)(ne.a,{className:"icondot"}),Object(m.jsx)("span",{className:"interntitle",children:"Bachelor Of Engieering (2016-2020)"}),Object(m.jsxs)("p",{children:[" Swami Vivekanand College Of Engineering ",Object(m.jsx)("br",{}),"CGPA : 7.8 "]})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(ne.a,{className:"icondot"}),Object(m.jsx)("span",{className:"interntitle",children:"HSSCE (2015-2016)"}),Object(m.jsxs)("p",{children:[" SBGM Girls H.S. School ",Object(m.jsx)("br",{}),"Percentage : 71 "]})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(ne.a,{className:"icondot"}),Object(m.jsx)("span",{className:"interntitle",children:"HSCE(2013-2014)"}),Object(m.jsxs)("p",{children:[" SBGM Girls H.S. School ",Object(m.jsx)("br",{}),"Percentage : 76 "]})]})]})]})]})}var je=t(34),de=t.p+"static/media/shilpee Agrawal.79535dd0.jpg";var he=function(){function e(){return Object(m.jsxs)("div",{className:"ImageSection",children:[Object(m.jsxs)("div",{className:"about-info",children:[Object(m.jsx)("p",{className:"about-text",children:"A passionate Software developer who is always eager to learn new things. I love creating website with great user experience.I like to optimised code and make it highly configurable.I would love to work with an organization which provides me the opportunity to improve my skills along with growth of the organization."}),Object(m.jsxs)("div",{className:"about-details",children:[Object(m.jsxs)("div",{className:"left-section",children:[Object(m.jsx)("p",{children:"Birthday"}),Object(m.jsx)("p",{children:"Highest Qualification"}),Object(m.jsx)("p",{children:"Languages"}),Object(m.jsx)("p",{children:"Phone"}),Object(m.jsx)("p",{children:"Email"}),Object(m.jsx)("p",{children:"Address"})]}),Object(m.jsxs)("div",{className:"right-section",children:[Object(m.jsx)("p",{children:": 19/01/1999"}),Object(m.jsx)("p",{children:": Bachelor of Engineering"}),Object(m.jsx)("p",{children:": English,Hindi"}),Object(m.jsx)("p",{children:": 8109393133"}),Object(m.jsx)("p",{children:":agrawalshilpi191@gmail.com"}),Object(m.jsx)("p",{children:": 79,Bada Sarafa near Rajwada ,Indore"})]})]}),Object(m.jsx)("button",{className:"btn",onClick:function(){var e=new je.a("landscape","px","a4","false");e.addImage(de,"PDF",65,0,500,450),e.addPage(),e.save("shilpee Agrawal.pdf")},children:"Download Cv"})]}),Object(m.jsx)("div",{className:"skill"})]})}return Object(m.jsx)("div",{className:"about",id:"about",children:Object(m.jsxs)("div",{className:"AboutPage",children:[Object(m.jsx)(R,{title:"About Me"}),Object(m.jsx)(_.a,{top:!0,children:Object(m.jsxs)("div",{className:"aboutsection",children:[Object(m.jsx)(e,{className:"details"}),Object(m.jsx)(re,{})]})})]})})};var oe=function(){var e=Object(s.useState)(!1),i=Object(n.a)(e,2),t=i[0],c=i[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(f,{menuOpen:t,setMenuOpen:c}),Object(m.jsx)(ie,{Open:t,setOpen:c}),Object(m.jsxs)("div",{className:"sections",children:[Object(m.jsx)(p,{}),Object(m.jsx)(he,{}),Object(m.jsx)(K,{}),Object(m.jsx)(z,{}),Object(m.jsx)(ee,{})]})]})};l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(oe,{})}),document.getElementById("root"))}},[[59,1,3]]]);
//# sourceMappingURL=main.50436d15.chunk.js.map
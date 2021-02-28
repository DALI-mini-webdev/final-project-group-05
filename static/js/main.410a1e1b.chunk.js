(this.webpackJsonpfinalprojectgroup5=this.webpackJsonpfinalprojectgroup5||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(18),a=n.n(s),r=(n(27),n(5)),o=n(6),l=n(8),h=n(7),d=(n(28),[{title:"Home",url:"#",cName:"nav-links"},{title:"Symptom List + Self check",url:"#",cName:"nav-links"},{title:"Vaccine Information",url:"#",cName:"nav-links"},{title:"Other Resources",url:"#",cName:"nav-links"}]),j=(n(29),n(10)),b=n(0),u=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("nav",{className:"NavbarItems",children:[Object(b.jsxs)("h1",{className:"navbar-logo",children:["Lewsiton ME Covid-19 Information",Object(b.jsx)("i",{className:"fab fa-react"})]}),Object(b.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(b.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(b.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:d.map((function(e,t){return Object(b.jsx)(j.b,{to:"/".concat(e.title),children:e.title})}))})]})}}]),n}(c.Component),O=n(2),m=n.p+"static/media/LewistonMap.2e893ac9.png",x=(n(36),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"header",children:"Testing and Vaccine Information"}),Object(b.jsx)("h3",{className:"subheader",children:" Lewiston COVID-19 Testing Information  "}),Object(b.jsx)("div",{className:"LewistonMap",children:Object(b.jsx)("img",{src:m,height:"450px",width:"600px",alt:"map"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"links",children:" Links"}),Object(b.jsx)("div",{}),Object(b.jsx)("a",{href:"https://www.maine.gov/covid19/restartingmaine/keepmainehealthy/testing",children:Object(b.jsx)("h3",{className:"linkone",children:" Click here for Maine Government Site-Covid info"})}),Object(b.jsx)("a",{href:"https://www.cmhc.org/about-us/cmh-alert/",children:Object(b.jsx)("h3",{className:"linktwo",children:" Click Here for Central Maine Healthcare "})}),Object(b.jsx)("a",{href:"https://www.cvs.com/store-locator/cvs-pharmacy-address/8+Union+Street-Auburn-ME-04210/storeid=2382",children:Object(b.jsx)("h3",{className:"linkthree",children:" Click Here for CVS Pharmacy"})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"VaccineInfo",children:"Vaccine Information"}),Object(b.jsx)("h3",{className:"MaineVac",children:"Maine is committed to an accessible, flexible, and equitable vaccination effort."}),Object(b.jsx)("h4",{className:"Goals",children:"Our vaccination strategy has two immediate goals:"}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Save the lives of Maine people at greatest risk of serious illness or death from COVID-19. "}),Object(b.jsx)("li",{children:"Ensure vaccine providers can efficiently and quickly vaccinate as many people as possible. "})]}),Object(b.jsx)("h4",{className:"Equitable",children:"When am I equitable to be vaccinated?"}),Object(b.jsx)("p",{children:"The state of Maine is using an age based approach for vaccination eligibility in order to maximize the limited vaccine supply and ensure every dose is used to protect the health of the Maine population"}),Object(b.jsx)("h5",{className:"Eligibility",children:"Vaccination Eligibility by Age:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"March 3: Age 60 and older"}),Object(b.jsx)("li",{children:"April: Age 50 and older"}),Object(b.jsx)("li",{children:"May: Age 40 and older"}),Object(b.jsx)("li",{children:"June: Age 30 and older"}),Object(b.jsx)("li",{children:"July: All ages (including children)"})]}),Object(b.jsx)("h4",{className:"Dashboard",children:"Visit Maine's COVID-19 Vaccination Dashboard"}),Object(b.jsx)("p",{children:"view updated information about COVID-19 vaccine doses administered statewide"}),Object(b.jsx)("a",{href:"https://www.maine.gov/covid19/vaccines/dashboard",children:"view dashboard"}),Object(b.jsx)("h4",{children:"More Vaccine Information Resources:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.maine.gov/covid19/vaccines/updates",children:"Latest Vaccine Updates"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits.html",children:"Vaccine Facts"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.maine.gov/covid19/vaccines/public-faq",children:"FAQs"})})]})]})]})}}]),n}(c.Component)),f=n(11);var p=function(){var e=[{questionText:"Do you have any of these life-threatening symptoms? Pale, gray, or blue-colored skin, lips, or nail beds, depending on skin tone. Severe and constant pain or pressure in the chest. Extreme difficulty breathing (such as gasping for air, being unable to talk without catching your breath, severe wheezing, nostrils flaring). New disorientation (acting confused). Unconscious or very difficult to wake up. Slurred speech or difficulty speaking (new or worsening). New or worsening seizures. Signs of low blood pressure (too weak to stand, dizziness, lightheaded, feeling cold, pale, clammy skin). Dehydration (dry lips and mouth, not urinating much, sunken eyes).",answerOptions:[{answerText:"Yes",isCorrect:!0},{answerText:"No",isCorrect:!1}]},{questionText:"Are you feeling sick?",answerOptions:[{answerText:"Yes",isCorrect:!0},{answerText:"No",isCorrect:!1}]},{questionText:"In the last two weeks, have you been in close contact with someone who has COVID-19? \u2014excluding people who have had COVID-19 within the past 3 months.",answerOptions:[{answerText:"Yes",isCorrect:!0},{answerText:"No",isCorrect:!1},,]}],t=Object(c.useState)(0),n=Object(f.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(!1),r=Object(f.a)(a,2),o=r[0],l=r[1],h=Object(c.useState)(0),d=Object(f.a)(h,2),j=d[0],u=d[1];return Object(b.jsx)("div",{children:o?Object(b.jsxs)("div",{className:"score-section",children:["if (",j>=1,") ",Object(b.jsx)("text",{children:"'Call a medical provider. Sorry you are not feeling well. Your symptoms may be related to COVID-19.'"})," else ",Object(b.jsx)("text",{children:"'No COVID-19 testing needed at this time Based on the answers given, you do not need to get tested unless recommended or required by your healthcare provider, employer, or public health official.'"}),"You scored ",j," out of ",e.length]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"question-section",children:[Object(b.jsxs)("div",{className:"question-count",children:[Object(b.jsxs)("span",{children:["Question ",i+1]}),"/",e.length]}),Object(b.jsx)("div",{className:"question-text",children:e[i].questionText})]}),Object(b.jsx)("div",{className:"answer-section",children:e[i].answerOptions.map((function(t){return Object(b.jsx)("button",{onClick:function(){return function(t){t&&u(j+1);var n=i+1;n<e.length?s(n):l(!0)}(t.isCorrect)},children:t.answerText})}))})]})})},v=n.p+"static/media/hopeful.43288715.png",g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("p",{id:"header1-container",className:"header1",children:" We are committed to providing regular updates to the community about COVID-19 testing results. This dashboard tracks the incidence of COVID-19 cases in the Maine community. "}),Object(b.jsxs)("h4",{children:["I am currently concerned about COVID-19 in my community:",Object(b.jsx)("button",{className:"button",onClick:function(){console.log("the yes button was clicked")},children:"yes"}),Object(b.jsx)("button",{className:"button",onClick:function(){console.log("the no button was clicked")},children:"no"})]}),Object(b.jsx)("div",{className:"info-container",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Symptom List + Self check: "}),Object(b.jsxs)("p",{children:[" (information overview + link here) ",Object(b.jsx)("a",{href:"http://localhost:3000/Symptom%20List%20+%20Self%20check",children:"Self Check Assessment"})]})]})}),Object(b.jsx)("div",{className:"info-container",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Testing/Vaccine Information: "}),Object(b.jsxs)("p",{children:[" (information overview + link here) ",Object(b.jsx)("a",{href:"http://localhost:3000/Vaccine%20Information",children:"Testing/Vaccine Information"})]})]})}),Object(b.jsx)("div",{className:"info-container",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Other Resources: "}),Object(b.jsxs)("p",{children:[" (information overview + link here) ",Object(b.jsx)("a",{href:"http://localhost:3000/Other%20Resources",children:"Other Resources"})]})]})}),Object(b.jsx)("div",{className:"tracker-container",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"ANDROSCOGGIN COUNTY COVID-19 TRACKER:"}),Object(b.jsx)("p",{children:" insert API "})]})}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{clasName:"hopeful",src:v,alt:"Lewiston Hopeful Sign"})})]})}}]),n}(c.Component),w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:" Other resources for Covid Information"}),Object(b.jsx)("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/index.html",children:Object(b.jsx)("h2",{children:" CDC National Website Information"})}),Object(b.jsx)("a",{href:"https://www.maine.gov/dhhs/mecdc/infectious-disease/epi/airborne/coronavirus/index.shtml",children:Object(b.jsx)("h3",{children:" Local Maine Covid Updates "})}),Object(b.jsx)("a",{href:"https://www.nami.org/Support-Education/NAMI-HelpLine/COVID-19-Information-and-Resources/COVID-19-Resource-and-Information-Guide",children:Object(b.jsx)("h4",{children:" NAMI Covid Information Guide"})})]})}}]),n}(c.Component),y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(u,{}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/Vaccine Information",children:Object(b.jsx)(x,{})}),Object(b.jsx)(O.a,{path:"/Symptom List + Self check",children:Object(b.jsx)(p,{})}),Object(b.jsx)(O.a,{path:"/Other Resources",children:Object(b.jsx)(w,{})}),Object(b.jsx)(O.a,{path:"/",children:Object(b.jsx)(g,{})})]})]})})}}]),n}(c.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.410a1e1b.chunk.js.map
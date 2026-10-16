
const ICONS = {
  search:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  users:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>`,
  clipboard:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 9h6M9 13h6M9 17h4"/></svg>`,
  map:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15m6-12v15"/></svg>`,
  flame:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c4.4 0 8-3.6 8-8 0-5-4-7-4-11-3 2-5 4-5 8-1.5-1.5-2-3-2-5-3 2-5 5-5 8 0 4.4 3.6 8 8 8Z"/></svg>`,
  share:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.7 6.8-4.4m-6.8 7 6.8 4.4"/></svg>`,
  graduation:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6"/></svg>`,
  clock:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  calendar:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`,
  id:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5.5 16c.7-1.7 4.3-1.7 5 0M13 10h5M13 14h5"/></svg>`,
  plus:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
  trophy:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M6 5H3v2a4 4 0 0 0 5 4M18 5h3v2a4 4 0 0 1-5 4M12 12v5M8 21h8"/></svg>`,
  book:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h7a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4V4Z"/><path d="M20 4h-7a3 3 0 0 0-3 3"/></svg>`,
  cloud:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H7a5 5 0 1 1 1-9.9A7 7 0 0 1 21 12a4 4 0 0 1-3.5 7Z"/></svg>`,
  repeat:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m17 1 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  wrench:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5L15 12l-3-3 2.7-2.7Z"/></svg>`,
  truck:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>`,
  laptop:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="12" rx="2"/><path d="M2 20h20"/></svg>`,
  building:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 21V3h11v18M15 9h5v12M8 7h3M8 11h3M8 15h3"/></svg>`,
  medical:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"/></svg>`,
  globe:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>`,
  lock:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>`,
  arrow:`<svg class="svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>`
};

const links = [
  {title:"CrewSense",description:"Staffing and scheduling",category:"Systems",url:"https://www.crewsense.com/Application/",icon:"users",primary:true},
  {title:"OperativeIQ",description:"Inventory, assets and service requests",category:"Systems",url:"https://login.operativeiq.com/Login.aspx?identifier=wtfd&ReturnUrl=&LoginType=&check=IE",icon:"clipboard",primary:true},
  {title:"ESO",description:"Fire and EMS records management",category:"Systems",url:"https://www.esosuite.net/login/wtfdoh?returnUrl=%2FEsoSuite%2FHome%2FIndex",icon:"medical",primary:true},
  {title:"Live Fleet Dashboard",description:"Real-time apparatus locations",category:"Systems",url:"https://wtfd-fleet-dashboard.pages.dev/?mode=kiosk",icon:"map",primary:true},
  {title:"ImageTrend",description:"ePCR and EMS reporting",category:"Systems",url:"https://washingtontownship.imagetrendelite.com/Elite/Organizationwashingtontownship/?logout=1",icon:"flame",primary:true},
  {title:"SharePoint",description:"Department SharePoint site",category:"Systems",url:"https://washingtontwpohio.sharepoint.com/sites/fire",icon:"share",primary:true},
  {title:"Vector Training",description:"Vector / TargetSolutions",category:"Systems",url:"https://app.targetsolutions.com/auth/index.cfm?action=login.showlogin&customerid=37255&customerpath=washingtontwpoh",icon:"graduation",primary:true},
  {title:"FlowMSP",description:"Preplans and response information",category:"Systems",url:"https://app.flowmsp.com",icon:"cloud",primary:true},

  {title:"Time Adjustment",description:"Submit a time adjustment",category:"Employee Services",url:"https://docs.google.com/forms/d/e/1FAIpQLSeiEExxWT88-EGZL6zvqp1z72a5sswMqvVydu997n24ps-M0A/viewform",icon:"clock"},
  {title:"Member Review Page",description:"Review payroll actions and ride-up assignments",category:"Employee Services",url:"https://wtfd-fleet-tv.hartleywtfd.workers.dev/member-review.html",icon:"clipboard"},
  {title:"Employee Info Update",description:"Update employee information",category:"Employee Services",url:"https://arcg.is/1viuH03",icon:"id"},
  {title:"Exposure Form",description:"Submit an exposure report",category:"Employee Services",url:"https://docs.google.com/forms/d/e/1FAIpQLSfgL3HHEJojxQsqhsIiIjLuf8qpSVfzIBWC-xylqhINWjQXYQ/viewform",icon:"plus"},
  {title:"Award Nominations",description:"Submit an award nomination",category:"Employee Services",url:"https://docs.google.com/forms/d/e/1FAIpQLSe403NA8g2yRjIY8jaZ0QlJUOS58rVhvABPSDxxf6Ix-pGesw/viewform",icon:"trophy"},

  {title:"Training / Tuition Reimbursement",description:"Training and tuition form",category:"Training & Operations",url:"https://washingtontwpohio.sharepoint.com/sites/Fire/Fire%20Forms/Forms/AllItems.aspx?id=%2Fsites%2FFire%2FFire%20Forms%2FTRAINING%20REQUEST%2DTUITION%20REIMBURSEMENT%2Epdf&parent=%2Fsites%2FFire%2FFire%20Forms",icon:"book"},
  {title:"EMS Training Survey",description:"EMS training survey",category:"Training & Operations",url:"https://docs.google.com/forms/d/1iizuNiHleeAWpN3cwUvKJJUx3xiROelr6vUCJt6wDgo/edit?ts=6a8d89fb",icon:"clipboard"},

  {title:"Morning Meeting",description:"Department Teams meeting",category:"Quick Access",url:"https://teams.microsoft.com/l/meetup-join/19:meeting_NDdlMzNjZjQtOGFjZC00ZGFjLTk4NzctNDRhODE4ZjhlNzRh%40thread.v2/0?context=%7b%22Tid%22:%22eb5ef174-ffa9-46f5-873f-51288e5031dc%22%2c%22Oid%22:%224d26948c-b4f3-4685-bb3a-8b39b5c92b20%22%7d",icon:"users"},
  {title:"Department Calendar",description:"WTFD calendar",category:"Quick Access",url:"https://calendar.google.com/calendar/u/0/newembed?src=wtfd57007@gmail.com&ctz=America/New_York&mode=WEEK",icon:"calendar"},
  {title:"2026 Illness / Injury Packet",description:"Current illness and injury packet",category:"Quick Access",url:"https://drive.google.com/file/d/15T53yk_7PXFatRTtX81U1m64eGM2zBcc/view?usp=sharing",icon:"clipboard"},
  {title:"Transfer Portal",description:"Department transfer portal",category:"Quick Access",url:"https://docs.google.com/forms/d/e/1FAIpQLSd__rhf05vL8VSAqqDy503_birkvfRJVIOXcVWc52vz2nKReg/viewform?usp=dialog",icon:"repeat"},
  {title:"Washington Township Fire / EMS",description:"Public department webpage",category:"Quick Access",url:"https://www.washingtontwp.org/services/fire_ems",icon:"globe"},

  {title:"Vehicle Repair",description:"Submit vehicle service request",category:"Service Desk",url:"mailto:wtfd_1@servicedesk-operativeiq.com",icon:"truck"},
  {title:"Technology Repair",description:"Submit technology service request",category:"Service Desk",url:"mailto:wtfd_4@servicedesk-operativeiq.com",icon:"laptop"},
  {title:"Fire Equipment Repair",description:"Submit fire equipment service request",category:"Service Desk",url:"mailto:wtfd_5@servicedesk-operativeiq.com",icon:"wrench"},
  {title:"Facilities Repair",description:"Submit facilities service request",category:"Service Desk",url:"mailto:wtfd_2@servicedesk-operativeiq.com",icon:"building"},
  {title:"EMS Equipment Repair",description:"Submit EMS equipment service request",category:"Service Desk",url:"mailto:wtfd_3@servicedesk-operativeiq.com",icon:"medical"}
];

function icon(n){ return ICONS[n] || ICONS.clipboard; }
function target(url){ return url.startsWith("mailto:") ? "_self" : "_blank"; }
function textFor(x){ return `${x.title} ${x.description} ${x.category}`.toLowerCase(); }

function renderPrimary(){
  primaryGrid.innerHTML = links.filter(x=>x.primary).map(x=>`
    <a class="primary-card searchable" href="${x.url}" target="${target(x.url)}" rel="noopener noreferrer" data-search="${textFor(x)}">
      <div class="primary-icon">${icon(x.icon)}</div>
      <div class="primary-title">${x.title}</div>
      <div class="primary-desc">${x.description}</div>
      <div class="primary-launch">Open ${icon("arrow")}</div>
    </a>`).join("");
}

function renderGroups(){
  const groups = [
    ["Employee Services","Employee Forms"],
    ["Training & Operations","Training & Response"],
    ["Quick Access","Department Resources"],
    ["Service Desk","Service Requests"]
  ];
  groupsGrid.innerHTML = groups.map(([cat,label])=>`
    <section class="group-panel group-section" id="${cat==="Service Desk" ? "service" : ""}">
      <div class="group-head">
        <div><div class="eyebrow">${label}</div><h3>${cat}</h3></div>
      </div>
      <div class="group-body">
        ${links.filter(x=>x.category===cat).map(x=>`
          <a class="resource-row searchable" href="${x.url}" target="${target(x.url)}" rel="noopener noreferrer" data-search="${textFor(x)}">
            <div class="resource-icon">${icon(x.icon)}</div>
            <div><strong>${x.title}</strong><small>${x.description}</small></div>
            <span>${icon("arrow")}</span>
          </a>`).join("")}
      </div>
    </section>`).join("");
}

function updateClock(){
  const d = new Date();
  dateText.textContent = new Intl.DateTimeFormat("en-US",{weekday:"short",month:"long",day:"numeric",year:"numeric"}).format(d);
  timeText.textContent = new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit"}).format(d);
}
function filterPortal(q){
  q=q.trim().toLowerCase();
  let count=0;
  document.querySelectorAll(".searchable").forEach(el=>{
    const show=!q||el.dataset.search.includes(q);
    el.classList.toggle("hidden",!show);
    if(show) count++;
  });
  document.querySelectorAll(".group-section").forEach(section=>{
    const show=[...section.querySelectorAll(".searchable")].some(el=>!el.classList.contains("hidden"));
    section.classList.toggle("hidden",!show);
  });
  emptyState.hidden = count!==0;
}
renderPrimary();
renderGroups();
document.querySelectorAll("[data-icon]").forEach(el=>el.innerHTML=icon(el.dataset.icon));
updateClock();
setInterval(updateClock,30000);
searchInput.addEventListener("input",e=>filterPortal(e.target.value));
document.addEventListener("keydown",e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();searchInput.focus();}
});

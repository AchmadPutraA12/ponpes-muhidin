import{r as u,j as a}from"./app-DZkf647O.js";import{A as c}from"./AdminLayout-B-2a8RP7.js";import{_ as h}from"./index-DAVAFhZK.js";import{T as b,a as j,b as x,c as f,D as _}from"./DataTableCustom-DmoIZMbj.js";import{studentColumns as T}from"./columnStudent-CKQpCf8m.js";import"./dropdown-menu-BhyZnD4_.js";import"./Combination-BFQUT4FN.js";import"./index-8RxCLllT.js";import"./tslib.es6-DjSP9Sqm.js";import"./index-B4hS6di9.js";import"./utils-8RyR4BqC.js";import"./createLucideIcon-C4ABKeCs.js";import"./index-CQbAAHMh.js";import"./x-DTn9t4Ei.js";import"./ApplicationLogo-BuNA6KCz.js";import"./user-round-yD2Rsv0J.js";import"./button-eVarx2oj.js";import"./input-BvLGwOgT.js";import"./chevron-down-CjB2r7Fg.js";import"./FormatDate-Czrtc8mP.js";import"./ShowDoc-DC7x5dbo.js";import"./dialog-DJF1KRlX.js";import"./ShowDoc2-yJVj87XJ.js";import"./EditStatus-DXRylCs9.js";import"./InputError-CQp5qYyc.js";import"./Spinner-CdPeayFU.js";import"./label-DrDDnpoN.js";import"./SelectOptionCustom-BhJYrbS6.js";import"./arrow-up-down-CkWze77h.js";function g({studentRegister:e,schoolYears:s}){const[i,o]=h("ponpes_table_student",""),n=t=>{o(t)},[r,l]=u.useState(null),m=t=>{const d=parseInt(t.target.value);l(d)},p=r?e.filter(t=>t.school_year_id===r):e;return a.jsx(a.Fragment,{children:a.jsxs(b,{defaultValue:i,onValueChange:n,className:"mt-5",children:[a.jsx(j,{className:"bg-brandy-rose-100",children:a.jsx(x,{value:"ponpes_table_student",children:"Data Tahun Ajaran"})}),a.jsx(f,{value:"ponpes_table_student",children:a.jsx(_,{data:p,columns:T,children:a.jsx("div",{children:a.jsxs("select",{onChange:m,value:r||"",children:[a.jsx("option",{value:"",children:"Pilih Tahun Ajaran"}),s.map(t=>a.jsxs("option",{value:t.id,children:[t.first_year,"/",t.last_year]},t.id))]})})})})]})})}g.layout=e=>a.jsx(c,{tittle:"Manajemen Siswa",description:"Halaman ini berfungsi sebagai halaman utama manajemen siswa",head:"siswa",children:e});export{g as default};

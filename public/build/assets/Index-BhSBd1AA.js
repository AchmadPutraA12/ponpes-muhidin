import{r as u,j as a}from"./app-BH8NPoQZ.js";import{A as c}from"./AdminLayout-C_Dyo262.js";import{_ as h}from"./index-EZ3c-a1H.js";import{T as b,a as j,b as x,c as f,D as _}from"./DataTableCustom-siV6Ecw6.js";import{studentColumns as T}from"./columnStudent-B3207DYY.js";import"./dropdown-menu-zemPDBS1.js";import"./Combination-CG_MCUhR.js";import"./index-8dRenCLO.js";import"./tslib.es6-DjSP9Sqm.js";import"./index-C6Zb9Kxi.js";import"./utils-8RyR4BqC.js";import"./createLucideIcon-DMB5ZCIW.js";import"./index-8HSEolIG.js";import"./x-D_LkI2lB.js";import"./ApplicationLogo-CKuyb25L.js";import"./user-round-CUlKvFc0.js";import"./button-CKIxU5iC.js";import"./input-DiOuQv5j.js";import"./chevron-down-Bfv3IQRt.js";import"./FormatDate-LNa9frJ8.js";import"./ShowDoc-BEbgQfnu.js";import"./dialog-CsreFxk3.js";import"./ShowDoc2-CjdGI90i.js";import"./EditStatus-g58oFL2s.js";import"./InputError-Ekkw5NXS.js";import"./Spinner-Dk1S-GF5.js";import"./label-_jvs7dGd.js";import"./SelectOptionCustom-BPzV8t2O.js";import"./arrow-up-down-SyPS4lk2.js";function g({studentRegister:e,schoolYears:s}){const[i,o]=h("ponpes_table_student",""),n=t=>{o(t)},[r,l]=u.useState(null),m=t=>{const d=parseInt(t.target.value);l(d)},p=r?e.filter(t=>t.school_year_id===r):e;return a.jsx(a.Fragment,{children:a.jsxs(b,{defaultValue:i,onValueChange:n,className:"mt-5",children:[a.jsx(j,{className:"bg-brandy-rose-100",children:a.jsx(x,{value:"ponpes_table_student",children:"Data Tahun Ajaran"})}),a.jsx(f,{value:"ponpes_table_student",children:a.jsx(_,{data:p,columns:T,children:a.jsx("div",{children:a.jsxs("select",{onChange:m,value:r||"",children:[a.jsx("option",{value:"",children:"Pilih Tahun Ajaran"}),s.map(t=>a.jsxs("option",{value:t.id,children:[t.first_year,"/",t.last_year]},t.id))]})})})})]})})}g.layout=e=>a.jsx(c,{tittle:"Manajemen Siswa",description:"Halaman ini berfungsi sebagai halaman utama manajemen siswa",head:"siswa",children:e});export{g as default};

import{j as r}from"./app-J-nl61Ul.js";import{B as a}from"./button-Dg5hDc9c.js";import{D as i}from"./DeleteData-90JXVRKw.js";import{f as o}from"./FormatDate-DttZ8cRc.js";import l from"./Edit-1HQtqlp7.js";import{A as t}from"./arrow-up-down-WpV6VmTO.js";import"./index-BgTR32tM.js";import"./utils-8RyR4BqC.js";import"./dialog-U2lgMX8U.js";import"./index-BK_uh38w.js";import"./Combination-Csr8EeQy.js";import"./tslib.es6-DjSP9Sqm.js";import"./x-CHiqlFVI.js";import"./createLucideIcon-U8OoLDE3.js";import"./tooltip-DTZXePSr.js";import"./index-npdf8n-y.js";import"./InputError-DmUSytB3.js";import"./Spinner-CQoPNfQt.js";import"./input-72fr_1gH.js";import"./label-2XZmbnsE.js";import"./square-pen-DC3LlXH1.js";const C=[{id:"No",header:"No",cell:e=>e.row.index+1,enableSorting:!1,enableHiding:!1,sortUndefined:!1},{accessorKey:"first_date",header:({column:e})=>r.jsxs(a,{variant:"outline",size:"sm",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Tanggal Awal",r.jsx(t,{className:"ml-2 h-4 w-4"})]})},{accessorKey:"last_date",header:({column:e})=>r.jsxs(a,{variant:"outline",size:"sm",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Tanggal Akhir",r.jsx(t,{className:"ml-2 h-4 w-4"})]})},{header:"Tahun Ajaran",cell(e){return e.row.original.school_year.first_year+"/"+e.row.original.school_year.last_year}},{accessorKey:"school_year.is_active",header:({column:e})=>r.jsxs(a,{variant:"outline",size:"sm",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Status",r.jsx(t,{className:"ml-2 h-4 w-4"})]}),cell(e){return e.row.original.school_year.is_active===1?r.jsx("span",{className:"text-green-500 font-bold px-3 bg-primary/20 py-2 rounded-lg",children:"Buka"}):r.jsx("span",{className:"text-red-500 font-bold px-3 bg-destructive/20 py-2 rounded-lg",children:"Tutup"})}},{accessorKey:"created_at",header:({column:e})=>r.jsxs(a,{variant:"outline",size:"sm",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Dibuat",r.jsx(t,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>o(e.original.created_at)},{id:"actions",enableHiding:!1,header:"Actions",cell:({row:e})=>{const s=e.original;return r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(l,{scheduleRegister:s}),r.jsx(i,{paramId:`/admin/jadwal-pendaftaran/${s.id}`})]})}}];export{C as scheduleRegisterColumns};

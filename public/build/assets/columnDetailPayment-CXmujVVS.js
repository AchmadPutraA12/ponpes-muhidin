import{j as r}from"./app-dyEedQDV.js";import{B as i}from"./button-C1h3fcFY.js";import{D as a}from"./DeleteData-DXXJf549.js";import{f as o}from"./FormatDate-bdZpIIE5.js";import{F as s}from"./format-rupiah.esm-Dv-bfkK6.js";import m from"./Edit-Drqktbsm.js";import{A as n}from"./arrow-up-down-CptkCjWm.js";import"./index-ByBgoO1s.js";import"./utils-8RyR4BqC.js";import"./dialog-BDGiPI9Q.js";import"./index-CUpcweR_.js";import"./Combination-DPxoxnHO.js";import"./tslib.es6-DjSP9Sqm.js";import"./x-Dnk1tJxt.js";import"./createLucideIcon-CWAzpxlm.js";import"./tooltip-CtVM1K4P.js";import"./index-Drn6J6xb.js";import"./InputError-X62y0BR_.js";import"./Spinner-DAwe7WKz.js";import"./input-C__vgjvb.js";import"./label-Bo7oSQMa.js";import"./square-pen-yyBc9o7U.js";const C=[{id:"No",header:"No",cell:e=>e.row.index+1,enableSorting:!1,enableHiding:!1,sortUndefined:!1},{accessorKey:"description",header:"Deskripsi"},{accessorKey:"price",header:"Harga",cell(e){return r.jsx(s,{value:e.row.getValue("price")})}},{accessorKey:"created_at",header:({column:e})=>r.jsxs(i,{variant:"outline",size:"sm",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Dibuat",r.jsx(n,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>o(e.original.created_at)},{id:"actions",enableHiding:!1,header:"Actions",cell:({row:e})=>{const t=e.original;return r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(m,{detailPayment:t}),r.jsx(a,{paramId:`/admin/detail-pembayaran/${t.id}`})]})}}];export{C as detailPaymentColumns};

import{j as e,r as c,W as N,y as D}from"./app-J-nl61Ul.js";import{B as f}from"./button-Dg5hDc9c.js";import{D as b,a as y,b as E,c as T,d as k}from"./dialog-U2lgMX8U.js";import{T as C,a as S,b as I,c as F}from"./tooltip-DTZXePSr.js";import{c as z}from"./utils-8RyR4BqC.js";import{S as L}from"./square-pen-DC3LlXH1.js";import{I as u}from"./InputError-DmUSytB3.js";import{I as d}from"./input-72fr_1gH.js";import{L as g}from"./label-2XZmbnsE.js";import"./index-BgTR32tM.js";import"./index-BK_uh38w.js";import"./Combination-Csr8EeQy.js";import"./tslib.es6-DjSP9Sqm.js";import"./x-CHiqlFVI.js";import"./createLucideIcon-U8OoLDE3.js";import"./index-npdf8n-y.js";const P=({children:a,dialogTitle:t,showModal:l,className:s,setShowModal:r})=>e.jsxs(b,{open:l,onOpenChange:r,children:[e.jsxs(y,{children:[e.jsx(C,{delayDuration:0,skipDelayDuration:0,children:e.jsxs(S,{children:[e.jsxs(I,{children:[" ",e.jsxs(f,{onClick:()=>r(!0),variant:"outline",size:"sm",className:" hover:bg-red-100/20 border-red-500",children:[" ",e.jsx(L,{className:"h-4  w-4 text-red-500"})]})]}),e.jsx(F,{children:e.jsx("p",{children:"Edit"})})]})})," "]}),e.jsxs(E,{className:`${s||z("z-[120] max-w-xs sm:max-w-[600px] h-[80vh] md:h-[90vh] max-h-sm overflow-y-auto rounded-lg overflow-auto bg-background")} `,children:[e.jsx(T,{children:e.jsx(k,{className:"py-3 text-xl",children:t})}),a]})]}),Y=({extra:a})=>{const[t,l]=c.useState(!1),{data:s,setData:r,errors:o,processing:j,reset:R,clearErrors:p}=N({image:a.image,name:a.name,description:a.description});c.useEffect(()=>{r({...s,image:a.image,name:a.name,description:a.description})},[a]);const v=i=>{i.preventDefault(),D.post(route("admin.extracurricular.update",a.id),{...s,_method:"put",forceFormData:!0},{preserveScroll:!0,onSuccess:()=>{l(!1)}})},[x,h]=c.useState(null),w=i=>{const n=i.target.files[0];r({...s,image:n});const m=new FileReader;m.onloadend=()=>{h(m.result)},n?m.readAsDataURL(n):h(null)};return e.jsx(P,{dialogTitle:"Edit Ekstrakurikuler",showModal:t,setShowModal:l,children:e.jsxs("form",{onSubmit:v,children:[e.jsxs("div",{className:"flex flex-col gap-4 ",children:[e.jsxs("div",{className:"mb-4 flex flex-col gap-2",children:[e.jsx("div",{className:"flex items-center justify-center  w-full  mt-2",children:e.jsx("div",{className:"relative",children:e.jsx("img",{className:" object-contain size-80  rounded-xl",src:x||window.location.origin+"/storage/"+s.image})})}),e.jsx("div",{className:" items-center gap-2 ",children:e.jsx(d,{id:"foto",type:"file",className:"w-full px-4 py-2",name:"foto",onChange:i=>w(i)})}),e.jsx("span",{className:"text-red-600",children:o.image})]})," ",e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(g,{variant:"wajib",htmlFor:"name",children:"Nama"}),e.jsx(d,{type:"text",placeholder:"John Doe",id:"name",name:"name",value:s.name,onChange:i=>{r("name",i.target.value),p("name")}}),e.jsx(u,{message:o.name})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(g,{variant:"wajib",htmlFor:"email",children:"Deskripsi"}),e.jsx(d,{type:"text",placeholder:"eksul ini adalah ...",id:"email",name:"email",value:s.description,onChange:i=>{r("description",i.target.value),p("description")}}),e.jsx(u,{message:o.description})]})]})]}),e.jsxs("div",{className:"mt-8 w-full flex gap-4  justify-end",children:[" ",e.jsx(f,{className:"w-1/2",disabled:j,type:"submit",children:"Save"})]})]})})};export{Y as default};

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7917],{99790:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/knowledge/graph",function(){return r(15219)}])},15219:function(e,t,r){"use strict";r.r(t);var l=r(85893),a=r(67294),n=r(1387),o=r(13840),i=r.n(o),s=r(14726),c=r(71965),u=r(76212),d=r(11163);n.Z.use(i());let f={name:"euler",springLength:340,fit:!1,springCoeff:8e-4,mass:20,dragCoeff:1,gravity:-20,pull:.009,randomize:!1,padding:0,maxIterations:1e3,maxSimulationTime:4e3};t.default=function(){let e=(0,a.useRef)(null),t=(0,d.useRouter)(),r=async()=>{let[t,r]=await (0,u.Vx)((0,u.FT)(p,{limit:500}));e.current&&r&&i(o(r))},o=e=>{let t=[],r=[];return e.nodes.forEach(e=>{let r={data:{id:e.vid,displayName:e.vid}};t.push(r)}),e.edges.forEach(e=>{let t={data:{id:e.src+"_"+e.dst+"_"+e.label,source:e.src,target:e.dst,displayName:e.label}};r.push(t)}),{nodes:t,edges:r}},i=t=>{let r=e.current,l=(0,n.Z)({container:e.current,elements:t,zoom:.3,pixelRatio:"auto",style:[{selector:"node",style:{width:60,height:60,color:"#fff","text-outline-color":"#37D4BE","text-outline-width":2,"text-valign":"center","text-halign":"center","background-color":"#37D4BE",label:"data(displayName)"}},{selector:"edge",style:{width:1,color:"#fff",label:"data(displayName)","line-color":"#66ADFF","font-size":14,"target-arrow-shape":"vee","control-point-step-size":40,"curve-style":"bezier","text-background-opacity":1,"text-background-color":"#66ADFF","target-arrow-color":"#66ADFF","text-background-shape":"roundrectangle","text-border-color":"#000","text-wrap":"wrap","text-valign":"top","text-halign":"center","text-background-padding":"5"}}]});l.layout(f).run(),l.pan({x:r.clientWidth/2,y:r.clientHeight/2})},{query:{spaceName:p}}=(0,d.useRouter)();return(0,a.useEffect)(()=>{p&&r()}),(0,l.jsxs)("div",{className:"p-4 h-full overflow-y-scroll relative px-2",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.ZP,{onClick:()=>{t.push("/knowledge")},icon:(0,l.jsx)(c.Z,{}),children:" Back "})}),(0,l.jsx)("div",{className:"h-full w-full",ref:e})]})}}},function(e){e.O(0,[9209,193,9774,2888,179],function(){return e(e.s=99790)}),_N_E=e.O()}]);
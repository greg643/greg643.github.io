const d=()=>{
  const[c,h]=r.useState("I'm asking about #3, the 31:05 order. What bid/ask did you see for that order?"),
  [a,p]=r.useState(""),
  [x,u]=r.useState(""),
    
  m=()=>{
    p("SELECT side, size, time, qty, execQty \nFROM ORDERS \nWHERE date = CURRENT_DATE \n  AND symbol = 'NKE' \n  AND time BETWEEN '10:25:00' AND '10:35:00'\n  AND customerID = [CustomerID]"),
    u("Here are 3 orders in that window. Which one are you asking about? \n1. Buy 100 NKE @ 10:28:35, Filled: 100 \n2. Sell 50 NKE @ 10:29:12, Filled: 50 \n3. Buy 100 NKE @ 10:31:05, Filled: 75 ")
  },
  o={padding:"10px 20px",fontSize:"16px",borderRadius:"5px",border:"none",color:"white",cursor:"pointer",marginRight:"10px"};return e.jsxs("div",{style:{fontFamily:"Arial, sans-serif",padding:"20px",maxWidth:"800px",margin:"0 auto"},children:[e.jsx("h1",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"20px"},children:"Order Inquiry Follow-up"}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"Client Request:"}),e.jsx("div",{style:{border:"1px solid #ccc",borderRadius:"5px",padding:"10px"},children:c})]}),e.jsx("button",{onClick:m,style:{...o,backgroundColor:"#0088ff",marginBottom:"20px"},children:"Process Request"}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"Proposed Action:"}),e.jsx("div",{style:{border:"1px solid #ccc",borderRadius:"5px",padding:"10px",minHeight:"50px"},children:a})]}),e.jsxs("div",{style:{marginBottom:"20px"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"Action Results:"}),e.jsx("div",{style:{border:"1px solid #ccc",borderRadius:"5px",padding:"10px",minHeight:"50px"},children:x})]}),e.jsxs("div",{children:[e.jsx("button",{style:{...o,backgroundColor:"#4CAF50"},children:"Accept"}),e.jsx("button",{style:{...o,backgroundColor:"#FFA500"},children:"Modify"}),e.jsx("button",{style:{...o,backgroundColor:"#FF6347"},children:"Ignore"})]})]})},l=d;d.__docgenInfo={description:"",methods:[],displayName:"OrderInquiry"};const b={title:"Components/OrderInquiry",component:l},t=()=>e.jsx(l,{});t.__docgenInfo={description:"",methods:[],displayName:"Default"};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"() => <OrderInquiry />",...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,b as default};

import React, { useState } from 'react';

const OrderInquiry = () => {
  const [clientRequest, setClientRequest] = useState(
    "I'm asking about #3, the 31:05 order. What bid/ask did you see for that order?"
  );
  const [proposedAction, setProposedAction] = useState('');
  const [actionResults, setActionResults] = useState('');

  const processRequest = () => {
    setProposedAction(`
      SELECT side, size, time, qty, execQty 
      FROM ORDERS 
      WHERE date = CURRENT_DATE 
        AND symbol = 'NKE' 
        AND time BETWEEN '10:25:00' AND '10:35:00'
        AND customerID = [CustomerID]
    `);

    setActionResults(`Here are 3 orders in that window. Which one are you asking about?
1. Buy 100 NKE @ 10:28:35, Filled: 100
2. Sell 50 NKE @ 10:29:12, Filled: 50
3. Buy 100 NKE @ 10:31:05, Filled: 75
    `);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Order Inquiry Follow-up</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Client Request:</h2>
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>{clientRequest}</div>
      </div>

      <button onClick={processRequest} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#0088ff', color: 'white', cursor: 'pointer', marginBottom: '20px' }}>
        Process Request
      </button>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Proposed Action:</h2>
        <pre style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', minHeight: '50px', whiteSpace: 'pre-wrap' }}>{proposedAction}</pre>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Action Results:</h2>
        <pre style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', minHeight: '50px', whiteSpace: 'pre-wrap' }}>{actionResults}</pre>
      </div>

      {/* ... rest of your component ... */}
    </div>
  );
};

export default OrderInquiry;

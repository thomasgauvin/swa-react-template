import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const response = await fetch(`/api/HelloWorld`);
      const data = await response.text();
      console.log(data);
      setData(data);
    })();
  }, []);

  return <div>{data}</div>;
}

export default App;
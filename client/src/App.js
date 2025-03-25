import React, { useEffect, useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3000/orders");

        setStatus(response.status);

        const data = await response.json();

        setMessage(data.message);

        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }

        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
    setCounter(0);

    const secondsCounter = setInterval(() => {
      setCounter(prevCounter => (prevCounter + 1) % 5);
    }, 1000);

    const intervalId = setInterval(() => {
      fetchOrders();
      setCounter(0);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearInterval(secondsCounter);
    };
  }, []);

  return (
    <div>
      <h1>Short Polling</h1>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <p>
        <strong>Status:</strong> {status}
      </p>

      <p>
        <strong>Message:</strong> {message}
      </p>

      <p>
        <strong>Next request in:</strong> {5 - counter} seconds
        {isLoading && <span style={{ color: "blue", marginLeft: "10px" }}>Sending request...</span>}
      </p>

      <p>
        <em>Data updates every 5 seconds...</em>
      </p>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

export default function Socket() {
  const websocket = () => {
  client.onopen = () => {
    console.log('WebSocket Connected');
    client.send(JSON.stringify())
  }
  client.onmessage = (event) => {
    const response  = JSON.parse(event.data)
    console.log(response);
  }
  client.onclose = () => {
    console.log('WebSocket DisConnected');
  }
  client.onerror = () => {
    console.log('WebScoket Error');
  }
};

  useEffect(()=>{
    websocket();
  },[])
  return (
    <div>
      <button>Send Message!!!</button>
    </div>
  )
}

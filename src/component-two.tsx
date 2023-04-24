import { useEffect, useMemo, useState } from "react";
import { getAblyClient } from "./create-ably-client";

export const ComponentTwo = () => {
  const [connectionState, setConnectionState] = useState<string | undefined>();
  const client = useMemo(() => getAblyClient(), []);

  useEffect(() => {
    client.connection.on(
      [
        "closed",
        "closing",
        "connected",
        "connecting",
        "disconnected",
        "failed",
        "initialized",
        "suspended",
      ],
      () => {
        setConnectionState(client.connection.state);
      }
    );
  }, [client]);

  const publish = () => {
    const c = client.channels.get("random");
    c.publish("test", "test");
  };

  const disconnect = () => {
    client.close();
  };
  const connect = () => {
    client.connect();
  };

  return (
    <div>
      <h1>Component Two</h1>
      <p>connected: {connectionState}</p>
      <button onClick={publish}>Publish</button>
      <button onClick={disconnect}>disconnect</button>
      <button onClick={connect}>connect</button>
    </div>
  );
};

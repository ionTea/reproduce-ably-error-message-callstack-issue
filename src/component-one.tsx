import { useEffect, useMemo, useState } from "react";
import { getAblyClient } from "./create-ably-client";

export const ComponentOne = () => {
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

  return (
    <div>
      <h1>Component One</h1>
      <p>connected: {connectionState}</p>
    </div>
  );
};

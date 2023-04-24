import Ably from "ably";

let client: Ably.Types.RealtimePromise | undefined = undefined;
export const getAblyClient = (): Ably.Types.RealtimePromise => {
  return new Ably.Realtime.Promise({
    key: "....",
    echoMessages: false,
    useBinaryProtocol: false,

    transportParams: {
      remainPresentFor: "1000",
      heartbeatInterval: "10000",
    },
  });
};

"use client";
import { Suspense, use, useState } from "react";

export interface IProfileProps {}

export default function Profile() {
  const [messagePromise, setMessagePromise] = useState(null);
  const [show, setShow] = useState(false);
  function download() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return <button onClick={download}>Download message</button>;
  }
}

function fetchMessage() {
  return new Promise((resolve) => setTimeout(resolve, 1000, "hi"));
}

export function MessageContainer({ messagePromise }: any) {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}

function Message({ messagePromise }: any) {
  const messageContent = use(messagePromise) as any;
  return <p>Here is the message: {messageContent}</p>;
}

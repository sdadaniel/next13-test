export interface IAppProps {}

function fetchInnerMessage(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(resolve, 3000, "fetchInnerMessage")
  );
}

function fetchOuterMessage(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, "fetchOuterMessage")
  );
}
export default async function App(props: IAppProps) {
  const innerMessage = fetchInnerMessage();
  const outerMessage = fetchOuterMessage();
  return (
    <div>
      {outerMessage}
      <br />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <br />
        {innerMessage}
      </Suspense> */}
    </div>
  );
}

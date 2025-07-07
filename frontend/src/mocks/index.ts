const enableApiMocking = async (): Promise<void> => {
  const { worker } = await import("./browser");
  await worker.start({ onUnhandledRequest: "bypass" });
  worker.events.on("request:match", ({ request }) => {
    console.info(
      "MSW worker intercepted request match:",
      request.method,
      request.url
    );
  });
};

export { enableApiMocking };

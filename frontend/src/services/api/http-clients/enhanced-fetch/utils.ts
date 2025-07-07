const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

const retryRequest = async <T>(
  retries: number,
  fn: () => Promise<T>,
  delay = 500
): Promise<T> => {
  let attempt = 0;
  while (attempt <= retries) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === retries) throw error;
      await sleep(delay * 2 ** attempt); // exponential backoff
      attempt++;
    }
  }
  throw new Error("Max retry attempts reached");
};

export { retryRequest, sleep };

export function createError(jsonrpc, error, id) {
  const newError = {
    jsonrpc,
    error,
    id,
  };
  return JSON.stringify(newError);
}

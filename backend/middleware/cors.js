// backend/middleware/cors.js
export default (fn) => async (req, res) => {
  // Allow frontend domain
  res.setHeader('Access-Control-Allow-Origin', 'https://bristol-west.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-user-role');

  // Preflight request
  if (req.method === 'OPTIONS') return res.status(200).end();

  // Run actual function
  return await fn(req, res);
};
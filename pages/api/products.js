export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json({ 
    status: 'success',
    timestamp: new Date().toISOString() 
  });
}

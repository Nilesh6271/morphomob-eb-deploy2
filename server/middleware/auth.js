export const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access token required'
    });
  }
  
  // Simple token validation - in production, use JWT
  if (token.startsWith('admin-token-')) {
    req.admin = { id: 'admin', role: 'admin' };
    next();
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid access token'
    });
  }
};
export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  // Determine the cookie name based on the user's role
  const cookieName =
    user.role === 'Admin'
      ? 'adminToken'
      : user.role === 'Patient'
      ? 'patientToken'
      : 'userToken';

  // Parse COOKIE_EXPIRE from string to number
  const cookieExpireDays = parseInt(process.env.COOKIE_EXPIRE, 10);

  // Validate parsed COOKIE_EXPIRE
  if (isNaN(cookieExpireDays) || cookieExpireDays <= 0) {
    throw new Error('Invalid COOKIE_EXPIRE: Must be a positive number');
  }

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000), // Calculate expiration date
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'Strict', // Protect against CSRF
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
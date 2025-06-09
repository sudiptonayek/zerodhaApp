

export const logoutController = (req, res) => {
  res.clearCookie("token", { httpOnly: true, secure: false, sameSite: "strict" });
  res.status(200).json({ message: "Logged out successfully" });
};



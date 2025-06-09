const verifyController = async (req, res) => {
    console.log(req.user);
    res.status(200).json({ user: req.user });
    
}

module.exports = {verifyController};    
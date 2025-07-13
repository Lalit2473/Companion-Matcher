const User = require("../models/userModel");
const { Op } = require("sequelize");

exports.createUser = async (req, res) => {
  const { name, age, interests } = req.body;
  if (!name || !age || !Array.isArray(interests)) {
    return res.status(400).json({ error: "Invalid data" });
  }

  try{
    const user = await User.create({
      name: name.toLowerCase(),
      age,
      interests,
    });
    res.status(201).json(user);
  } 
  catch (err){
    res.status(500).json({ error: "Server error" });
  }
};

exports.getMatches = async (req, res) => {
  const { username } = req.params;

  const user = await User.findOne({ where: { name: username.toLowerCase() } });
  if (!user){
    return res.status(404).json({ error: "User not found" });
  }

  const allUsers = await User.findAll({
    where: {
      name: { [Op.ne]: user.name },
    },
  });

  const matches = allUsers
    .filter((u) => {
      const shared = u.interests.filter((i) => user.interests.includes(i));
      return shared.length >= 2;
    })
    .map((u) => ({
      name: u.name,
      interests: u.interests,
    }));

  res.json(matches);
};

exports.shortlistUser = async (req, res) => {
  const { username } = req.params;
  const { target } = req.body;

  const user = await User.findOne({ where: { name: username.toLowerCase() } });
  const targetUser = await User.findOne({
    where: { name: target.toLowerCase() },
  });

  if (!user || !targetUser){
    return res.status(404).json({ error: "User not found" });
  }

  const currentList = user.shortlisted;
  if (!currentList.includes(targetUser.name)){
    currentList.push(targetUser.name);
    user.shortlisted = currentList;
    await user.save();
  }

  res.json({ message: `Shortlisted ${targetUser.name}` });
};
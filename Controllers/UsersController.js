import User from '../Models/User.js';

const UsersController = {
// קבלת כל המשתמשים
 getAllUsers : async (req,res) => {
    try {
        const Users = await User.find();
            res.json({ Users });
      } catch (e) {
        res.status(400).json({ message: e.message });
      }
},

// קבלת משתמש לפי ID
 getUserById : async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
},

// יצירת משתמש חדש
 addUser : async (req, res) => {
    const { name, email, password, links } = req.body;
    try {
      const newUser = await User.create({ name, email, password, links });
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

// עדכון משתמש קיים
updateUser: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });

      await user.remove();
      res.json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

};

export default UsersController;
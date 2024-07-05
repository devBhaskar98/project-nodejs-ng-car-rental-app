import User from '../models/user.js'; // Adjust the path to where your User model is located
import config from '../config/config.js'; // Adjust the path to your config
import jwt from 'jwt-simple'; // Import jwt-simple
import httpClient from '../../httpClient.js';
import utils from '../../utils.js';

// FIXME: duplicate
const USER_SERVICE_ENDPOINT = utils.getUserServiceEndpoint();

// Login function using async/await
export const login = async (req, res) => {
  console.log("Logged In");

  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }

    const payload = {
      id: user.id,
      expire: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
    };
    const token = jwt.encode(payload, config.jwtSecret);

    return res.json({ token });
  } catch (err) {
    console.error('Error Happened In auth /token Route', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Register function
export const register = async (req, res) => {

  let isUserCreated = false;
  const data = req.body;

  User.register(
    new User({ name: req.body.name, username: req.body.username }), req.body.password,
    (err, msg) => {
      if (err) {
        res.status(500).json({ message: 'Registration failed', error: err.message });
      } else {
        isUserCreated = true;
      }
    }
  );

  const body = {  
    name: data.name,
    email: data.email ,
    address: data.address,
    profile_img: data.profile_img,
    user_type: data.user_type
  }

  if (!isUserCreated) {
    let response = await httpClient.postData(USER_SERVICE_ENDPOINT + '/user/create', body);
    response = JSON.parse(response).data;
    response.username = data.username;
    res.json(response);
  }



};

// Logout route handler
export const logout = (req, res) => {
  console.log('Logging out user:', req.user.username); // Log username for debugging
  req.logout((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ message: 'Failed to logout', error: err.message });
    }
    console.log('User logged out successfully');
    res.json({ message: 'Logout successful' });
  });
};
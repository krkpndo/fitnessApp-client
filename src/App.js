import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Workouts from './pages/Workouts';
import AddWorkout from './pages/AddWorkout';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import { useState, useEffect } from 'react';

function App() {
  // State hook for the user state to allow it to have a global scope
  // This will be used to store user information for validating if a user is logged in
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });

  // Function for clearing localStorage on logout
  function unsetUser() {
    localStorage.clear();
  }

  useEffect(() => {
    // Fetch to retrieve the user details if token exists in localStorage
    if (localStorage.getItem('token')) {
      fetch('https://fitnessapp-api-ln8u.onrender.com/users/details', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Check if data.user exists and has the required properties
          if (data && data.user && data.user._id) {
            setUser({
              id: data.user._id,
              isAdmin: data.user.isAdmin || false,
            });
          } else {
            setUser({
              id: null,
              isAdmin: null,
            });
          }
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
          setUser({
            id: null,
            isAdmin: null,
          });
        });
    } else {
      setUser({
        id: null,
        isAdmin: null,
      });
    }
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <AppNavBar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/addWorkout" element={<AddWorkout />} />
            </Routes>
          </Container>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;

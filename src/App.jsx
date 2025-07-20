import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './pages/Unauthorized';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import TeacherPage from './pages/TeacherPage';
import ParentPage from './pages/ParentPage';
import Login from './pages/Login';

function App() {
      return (
            <Router>
                  <Routes>

                        <Route path="/login" element={<Login />} />
                        <Route path="/unauthorized" element={<Unauthorized />} />

                        {/* Common dashboard - accessible to all logged in roles */}
                        <Route element={<ProtectedRoute allowedRoles={['admin', 'teacher', 'parent']} />}>
                              <Route path="/dashboard" element={<Dashboard />} />
                        </Route>

                        {/* Admin-only routes */}
                        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                              <Route path="/admin" element={<AdminPage />} />
                        </Route>

                        {/* Teacher-only routes */}
                        <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
                              <Route path="/teacher" element={<TeacherPage />} />
                        </Route>

                        {/* Parent-only routes */}
                        <Route element={<ProtectedRoute allowedRoles={['parent']} />}>
                              <Route path="/parent" element={<ParentPage />} />
                        </Route>

                  </Routes>
            </Router>
      );
}

export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import MemberDashboard from '../pages/memberDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import DealerDashboard from '../pages/DealerDashboard';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="auth/login" element={<AuthPage />} />
        <Route path="member/dashboard" element={<MemberDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="dealer/dashboard" element={<DealerDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;

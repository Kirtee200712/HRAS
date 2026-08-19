import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Overview from './pages/Overview';
import Tasks from './pages/Tasks';
import Issues from './pages/Issues';
import Blockers from './pages/Blockers';
import Testing from './pages/Testing';
import ActivityLog from './pages/ActivityLog';
import PlaceholderPage from './pages/PlaceholderPage';
import Login from './pages/Login';
import { AuthProvider } from './lib/AuthContext';
import ProtectedRoute from './lib/ProtectedRoute';

export default function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />

                {/* Protected Dashboard Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Overview />} />
                        <Route path="tasks" element={<Tasks />} />
                        <Route path="roadmap" element={<PlaceholderPage title="Roadmap Workspace" />} />

                        <Route path="development" element={<PlaceholderPage title="Development" />} />
                        <Route path="testing" element={<Testing />} />
                        <Route path="issues" element={<Issues />} />
                        <Route path="blockers" element={<Blockers />} />

                        <Route path="team" element={<PlaceholderPage title="Team Directory" />} />
                        <Route path="meetings" element={<PlaceholderPage title="Meetings" />} />
                        <Route path="activity" element={<ActivityLog />} />

                        <Route path="documents" element={<PlaceholderPage title="Documents" />} />
                        <Route path="decisions" element={<PlaceholderPage title="Decision Log" />} />
                        <Route path="reports" element={<PlaceholderPage title="Reports" />} />
                        <Route path="*" element={<div className="p-8">404 Not Found</div>} />
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

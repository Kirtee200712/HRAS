import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';
import { Badge } from '../components/ui';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        try {
            await login(email, password);
            navigate('/'); // Redirect to dashboard Overview on success
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid credentials or server unavailable.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="h-screen w-full flex items-center justify-center bg-background">
            <div className="w-full max-w-md p-8 bg-card border border-border/50 rounded-2xl shadow-sm">
                <div className="flex flex-col items-center mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-indigo-600 rounded-sm"></div>
                        <span className="font-bold tracking-tight text-xl text-foreground">RoomNext</span>
                    </div>
                    <Badge variant="outline" className="text-xs">Command Center</Badge>
                </div>

                <h2 className="text-2xl tracking-tight font-bold mb-2 text-foreground">Access Workspace</h2>
                <p className="text-muted-foreground mb-8 text-sm">Enter your credentials to connect to the project environment.</p>

                {error && (
                    <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-500">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Corporate Email</label>
                        <input
                            type="email"
                            className="w-full h-10 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-foreground">Password</label>
                        </div>
                        <input
                            type="password"
                            className="w-full h-10 px-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-10 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? 'Authenticating...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
}

import { NavLink } from 'react-router-dom';
import {
    PanelsTopLeft,
    CheckSquare,
    Map,
    Code2,
    FlaskConical,
    AlertCircle,
    ShieldAlert,
    Users,
    Video,
    Activity,
    FileText,
    Gavel,
    BarChart3,
    Settings,
    User,
    SunMoon
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';

const navGroups = [
    {
        label: "Workspace",
        items: [
            { name: 'Overview', icon: PanelsTopLeft, path: '/' },
            { name: 'Tasks', icon: CheckSquare, path: '/tasks' },
            { name: 'Roadmap', icon: Map, path: '/roadmap' },
        ]
    },
    {
        label: "Build",
        items: [
            { name: 'Development', icon: Code2, path: '/development' },
            { name: 'Testing', icon: FlaskConical, path: '/testing' },
            { name: 'Issues', icon: AlertCircle, path: '/issues' },
            { name: 'Blockers', icon: ShieldAlert, path: '/blockers' },
        ]
    },
    {
        label: "Collaborate",
        items: [
            { name: 'Team', icon: Users, path: '/team' },
            { name: 'Meetings', icon: Video, path: '/meetings' },
            { name: 'Activity', icon: Activity, path: '/activity' },
        ]
    },
    {
        label: "Knowledge",
        items: [
            { name: 'Documents', icon: FileText, path: '/documents' },
            { name: 'Decisions', icon: Gavel, path: '/decisions' },
            { name: 'Reports', icon: BarChart3, path: '/reports' },
        ]
    }
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <aside className={cn(
            "flex flex-col border-r border-border bg-card transition-all duration-300 ease-in-out",
            collapsed ? "w-[68px]" : "w-[240px]"
        )}>
            {/* Brand */}
            <div className="h-14 flex items-center px-4 border-b border-border shrink-0 cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
                <div className="flex items-center justify-center w-8 h-8 rounded bg-primary text-primary-foreground font-bold shrink-0">
                    R
                </div>
                {!collapsed && <span className="ml-3 font-semibold tracking-tight text-foreground truncate">RoomNext</span>}
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6 scrollbar-hide">
                {navGroups.map((group, i) => (
                    <div key={i}>
                        {!collapsed && (
                            <div className="px-2 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                {group.label}
                            </div>
                        )}
                        <ul className="space-y-1">
                            {group.items.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => cn(
                                            "flex items-center rounded-md px-2 py-1.5 transition-colors group",
                                            isActive
                                                ? "bg-muted text-foreground font-medium"
                                                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                        )}
                                        title={collapsed ? item.name : undefined}
                                    >
                                        <item.icon className="w-4 h-4 shrink-0" />
                                        {!collapsed && <span className="ml-3 text-sm">{item.name}</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="p-3 border-t border-border space-y-1">
                <button className="w-full flex items-center rounded-md px-2 py-1.5 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors" title={collapsed ? "Settings" : undefined}>
                    <Settings className="w-4 h-4 shrink-0" />
                    {!collapsed && <span className="ml-3 text-sm">Settings</span>}
                </button>
                <button className="w-full flex items-center rounded-md px-2 py-1.5 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors" title={collapsed ? "Profile" : undefined}>
                    <User className="w-4 h-4 shrink-0" />
                    {!collapsed && <span className="ml-3 text-sm">Profile</span>}
                </button>
                <button
                    onClick={toggleTheme}
                    className="w-full flex items-center rounded-md px-2 py-1.5 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors"
                    title={collapsed ? "Toggle Theme" : undefined}
                >
                    <SunMoon className="w-4 h-4 shrink-0" />
                    {!collapsed && <span className="ml-3 text-sm">Theme</span>}
                </button>
            </div>
        </aside>
    );
}

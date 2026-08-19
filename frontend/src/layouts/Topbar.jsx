import { Search, Bell, UserCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Topbar() {
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter(Boolean);

    // Create a nice breadcrumb
    let breadcrumb = "Workspace / Overview";
    if (pathParts.length > 0) {
        const section = pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1);
        breadcrumb = `Workspace / ${section}`;
    }

    return (
        <header className="h-14 border-b border-border bg-card flex items-center justify-between px-6 shrink-0">
            <div className="flex-1 flex items-center">
                <h1 className="font-semibold text-foreground mr-4">RoomNext</h1>
                <div className="text-sm border-l border-border pl-4 text-muted-foreground">
                    {breadcrumb}
                </div>
            </div>

            <div className="flex items-center space-x-4">
                {/* Global Search CMD+K */}
                <button className="flex items-center space-x-2 text-sm text-muted-foreground bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-md border border-border/50 transition-colors">
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                    <kbd className="ml-2 px-1.5 py-0.5 rounded border border-border/80 text-[10px] uppercase font-medium">⌘ K</kbd>
                </button>

                <button className="text-muted-foreground hover:text-foreground transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-critical"></span>
                </button>

                <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <UserCircle className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}

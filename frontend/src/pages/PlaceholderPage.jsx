export default function PlaceholderPage({ title }) {
    return (
        <div className="max-w-6xl mx-auto p-8 h-full flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-muted/30 mb-6 flex items-center justify-center border border-border">
                {/* Simple placeholder icon */}
                <div className="w-6 h-6 border-2 border-muted-foreground rounded-sm opacity-50"></div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">{title}</h1>
            <p className="text-muted-foreground max-w-md">This workspace segment is active in the infrastructure but the specific UI view is still under construction in the current sprint.</p>
        </div>
    );
}

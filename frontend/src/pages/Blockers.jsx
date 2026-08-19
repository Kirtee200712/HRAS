import { AlertCircle, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import { Badge } from "../components/ui";

const blockers = [
    {
        id: 1,
        title: "AI Compatibility API unavailable",
        description: "The Python microservice hosting the compatibility engine is failing to start on the staging server due to a missing Torch dependency.",
        affects: "Compatibility Engine",
        owner: "Rahul",
        expectedResolution: "21 Aug",
        status: "Investigating"
    },
    {
        id: 2,
        title: "Database migration conflict",
        description: "There is a state mismatch between the production DB and the latest Flyway migration for the Student table.",
        affects: "Backend Core",
        owner: "Ananya",
        expectedResolution: "Today",
        status: "Fixing"
    }
];

export default function Blockers() {
    return (
        <div className="max-w-4xl mx-auto p-8 space-y-8">
            {/* Header */}
            <div className="pb-6 border-b border-border/50">
                <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2 flex items-center">
                    Blockers <Badge variant="critical" className="ml-4 tabular-nums">2 Active</Badge>
                </h1>
                <blockquote className="text-sm text-muted-foreground border-l-2 border-muted-foreground/30 pl-3 italic">
                    Things currently preventing progress.
                </blockquote>
            </div>

            <div className="space-y-6">
                {blockers.map(blocker => (
                    <div key={blocker.id} className="bg-card border border-critical/30 rounded-xl overflow-hidden shadow-sm shadow-critical/5 transition-all hover:border-critical/60">
                        <div className="bg-critical/5 p-4 border-b border-critical/10 flex items-center space-x-3">
                            <div className="w-8 h-8 rounded bg-critical/20 flex items-center justify-center text-critical shrink-0">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground text-lg">{blocker.title}</h3>
                                <p className="text-sm text-muted-foreground mt-0.5">{blocker.description}</p>
                            </div>
                        </div>

                        <div className="p-4 bg-background">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider font-semibold">Affects</div>
                                    <div className="text-sm font-medium">{blocker.affects}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider font-semibold">Owner</div>
                                    <div className="text-sm font-medium flex items-center">
                                        <img src={`https://i.pravatar.cc/150?u=${blocker.owner.toLowerCase()}`} className="w-5 h-5 rounded-full mr-2 ring-1 ring-border" />
                                        {blocker.owner}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider font-semibold">Expected Resolution</div>
                                    <div className="text-sm font-medium flex items-center text-foreground">
                                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                                        {blocker.expectedResolution}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1.5 uppercase tracking-wider font-semibold">Status</div>
                                    <div className="text-sm font-medium flex items-center text-warning">
                                        <div className="w-1.5 h-1.5 rounded-full bg-warning mr-2 animate-pulse"></div>
                                        {blocker.status}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-3 bg-muted/20 border-t border-border flex justify-between items-center text-sm">
                            <button className="flex items-center text-muted-foreground hover:text-foreground font-medium transition-colors">
                                <MessageSquare className="w-4 h-4 mr-2" /> Add update
                            </button>
                            <button className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                                View related issue <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

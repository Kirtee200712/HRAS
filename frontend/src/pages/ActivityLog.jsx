import { Badge } from "../components/ui";

const activities = [
    {
        id: 1, date: "18 Aug", items: [
            { time: "10:42 PM", user: "Kirtee", action: "completed", target: "Compatibility Questionnaire", type: "Task" },
            { time: "9:31 PM", user: "Rahul", action: "created", target: "Issue RN-024", type: "Issue" },
            { time: "7:14 PM", user: "Ananya", action: "updated", target: "PostgreSQL schema", type: "Database" },
            { time: "5:48 PM", user: "Team", action: "completed", target: "Meeting #08", type: "Meeting" }
        ]
    },
    {
        id: 2, date: "17 Aug", items: [
            { time: "4:20 PM", user: "Kirtee", action: "deployed", target: "Testing environment", type: "Deployment" },
            { time: "1:15 PM", user: "Priya", action: "completed", target: "Student Authentication API", type: "Backend" },
        ]
    }
];

export default function ActivityLog() {
    return (
        <div className="max-w-4xl mx-auto p-8 space-y-8">
            <div className="pb-6 border-b border-border/50">
                <h1 className="text-3xl font-bold tracking-tight text-foreground mb-1">Activity Log</h1>
                <div className="text-sm text-muted-foreground font-medium">All project activity timeline</div>
            </div>

            <div className="space-y-8">
                {activities.map(group => (
                    <div key={group.id}>
                        <div className="sticky top-0 bg-background/95 backdrop-blur py-2 z-10 mb-4">
                            <Badge variant="outline" className="font-bold border-border/60">{group.date}</Badge>
                        </div>
                        <div className="relative border-l border-border/60 ml-4 space-y-8 py-2">
                            {group.items.map((item, idx) => (
                                <div key={idx} className="relative pl-6 group">
                                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-accent group-hover:scale-125 transition-all outline outline-4 outline-background"></div>
                                    <div className="text-sm text-muted-foreground mb-0.5">{item.time}</div>
                                    <div className="text-base">
                                        <span className="font-medium text-foreground">{item.user}</span>{" "}
                                        <span className="text-muted-foreground">{item.action}</span>{" "}
                                        <span className="font-bold text-foreground group-hover:text-accent transition-colors cursor-pointer">{item.target}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

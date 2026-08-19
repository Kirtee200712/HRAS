import { useState } from "react";
import { Badge } from "../components/ui";
import { Search, Filter, AlertCircle, CheckCircle2, Circle } from "lucide-react";

const issues = [
    { id: "RN-024", title: "Duplicate room allocation", severity: "Critical", module: "Allocation", assignee: "Rahul", status: "In Progress" },
    { id: "RN-025", title: "Compatibility score not updating", severity: "High", module: "AI Engine", assignee: "Kirtee", status: "Open" },
    { id: "RN-026", title: "Swap request status mismatch", severity: "High", module: "Database", assignee: "Ananya", status: "Open" },
    { id: "RN-027", title: "WebSocket authentication failure", severity: "Critical", module: "Backend", assignee: "Priya", status: "Resolved" },
    { id: "RN-028", title: "Incorrect room capacity validation", severity: "Medium", module: "Frontend", assignee: "Kirtee", status: "In Progress" },
];

export default function Issues() {
    const [filter, setFilter] = useState("All");

    return (
        <div className="max-w-6xl mx-auto p-8 h-full flex flex-col">
            {/* Header */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-end sm:justify-between sm:space-y-0 pb-6 border-b border-border/50">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground mb-1">Issues</h1>
                    <div className="text-sm text-muted-foreground font-medium">12 open <span className="mx-2">•</span> 3 critical/high</div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-6 py-6 border-b border-border/50">
                <div className="flex space-x-1 border border-border bg-card p-1 rounded-md">
                    {["All", "Open", "In Progress", "Resolved", "Closed"].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-3 py-1.5 text-sm font-medium rounded-sm transition-colors ${filter === f ? 'bg-muted text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="flex-1"></div>

                <div className="relative group w-64">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input type="text" placeholder="Search issues..." className="w-full bg-card border border-border rounded-md pl-9 pr-3 py-1.5 text-sm outline-none focus:border-accent transition-colors" />
                </div>
                <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground border border-border bg-card px-3 py-1.5 rounded-md transition-colors">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                </button>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto mt-6">
                <div className="min-w-[800px] border border-border rounded-lg bg-card overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-muted/30 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        <div className="col-span-1">ID</div>
                        <div className="col-span-5">Issue</div>
                        <div className="col-span-2">Severity</div>
                        <div className="col-span-2">Module</div>
                        <div className="col-span-1">Assignee</div>
                        <div className="col-span-1 text-right">Status</div>
                    </div>
                    <div className="divide-y divide-border/50">
                        {issues.map(issue => (
                            <div key={issue.id} className="grid grid-cols-12 gap-4 p-4 text-sm items-center hover:bg-muted/30 transition-colors cursor-pointer group">
                                <div className="col-span-1 font-medium text-muted-foreground">{issue.id}</div>
                                <div className="col-span-5 font-semibold text-foreground group-hover:text-accent transition-colors">{issue.title}</div>
                                <div className="col-span-2">
                                    <div className="flex items-center space-x-1.5">
                                        {issue.severity === "Critical" && <div className="w-2 h-2 rounded-full bg-critical"></div>}
                                        {issue.severity === "High" && <div className="w-2 h-2 rounded-full bg-warning"></div>}
                                        {issue.severity === "Medium" && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                                        <span className={issue.severity === "Critical" ? "text-critical" : issue.severity === "High" ? "text-warning" : "text-muted-foreground"}>{issue.severity}</span>
                                    </div>
                                </div>
                                <div className="col-span-2"><Badge variant="outline" className="font-normal text-xs">{issue.module}</Badge></div>
                                <div className="col-span-1 flex items-center">
                                    <img src={`https://i.pravatar.cc/150?u=${issue.assignee.toLowerCase()}`} className="w-5 h-5 rounded-full mr-2" />
                                </div>
                                <div className="col-span-1 text-right flex justify-end">
                                    {issue.status === "Open" && <Circle className="w-4 h-4 text-muted-foreground" />}
                                    {issue.status === "In Progress" && <Circle className="w-4 h-4 text-accent fill-accent/20" />}
                                    {issue.status === "Resolved" && <CheckCircle2 className="w-4 h-4 text-success" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

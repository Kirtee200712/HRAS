import { useState } from "react";
import { Badge } from "../components/ui";
import { Search, Filter, Plus, Calendar, Clock, CheckCircle2, ChevronRight, MessageSquare, LayoutList, AlignLeft, CalendarDays } from "lucide-react";
import { cn } from "../lib/utils";

const demoTasks = [
    { id: "RN-024", title: "Implement compatibility scoring", type: "AI", assignee: "Kirtee", due: "Aug 22", priority: "High", status: "In Progress" },
    { id: "RN-025", title: "Design Student Authentication", type: "Frontend", assignee: "Rahul", due: "Aug 23", priority: "Medium", status: "Todo" },
    { id: "RN-026", title: "Setup PostgreSQL Schema", type: "Database", assignee: "Ananya", due: "Aug 20", priority: "Critical", status: "Review" },
    { id: "RN-027", title: "Build WebSocket Chat", type: "Backend", assignee: "Priya", due: "Aug 25", priority: "Low", status: "Backlog" },
    { id: "RN-028", title: "Swap Request API", type: "API", assignee: "Rahul", due: "Aug 24", priority: "High", status: "Testing" },
    { id: "RN-029", title: "Compatibility UI Dashboard", type: "Frontend", assignee: "Kirtee", due: "Aug 21", priority: "High", status: "Done" },
];

const columns = ["Backlog", "Todo", "In Progress", "Review", "Testing", "Done"];

export default function Tasks() {
    const [selectedTask, setSelectedTask] = useState(null);
    const [view, setView] = useState("Board");

    return (
        <div className="flex h-full relative">
            <div className={cn("flex-1 p-8 space-y-6 flex flex-col h-full transition-all duration-300", selectedTask ? "mr-[400px]" : "")}>

                {/* Header Section */}
                <div className="flex flex-col space-y-4 sm:flex-row sm:items-end sm:justify-between sm:space-y-0 pb-4 border-b border-border/50 shrink-0">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-1">Tasks</h1>
                        <div className="text-sm text-muted-foreground font-medium">36 total <span className="mx-2">•</span> 24 completed</div>
                    </div>

                    <div className="flex items-center space-x-3">
                        {/* View Toggles */}
                        <div className="flex items-center bg-card border border-border rounded-md p-1">
                            <button onClick={() => setView("Board")} className={cn("px-3 py-1.5 text-sm font-medium rounded-sm flex items-center transition-colors", view === "Board" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                                <AlignLeft className="w-4 h-4 mr-2 rotate-90" /> Board
                            </button>
                            <button onClick={() => setView("List")} className={cn("px-3 py-1.5 text-sm font-medium rounded-sm flex items-center transition-colors", view === "List" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                                <LayoutList className="w-4 h-4 mr-2" /> List
                            </button>
                            <button onClick={() => setView("Timeline")} className={cn("px-3 py-1.5 text-sm font-medium rounded-sm flex items-center transition-colors", view === "Timeline" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                                <Clock className="w-4 h-4 mr-2" /> Timeline
                            </button>
                            <button onClick={() => setView("Calendar")} className={cn("px-3 py-1.5 text-sm font-medium rounded-sm flex items-center transition-colors", view === "Calendar" ? "bg-muted text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")}>
                                <CalendarDays className="w-4 h-4 mr-2" /> Calendar
                            </button>
                        </div>

                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                            <Plus className="w-4 h-4 mr-2" /> New Task
                        </button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex items-center space-x-3 shrink-0 py-2">
                    <div className="relative group flex-1 max-w-sm">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input type="text" placeholder="Filter tasks..." className="w-full bg-card border border-border rounded-md pl-9 pr-3 py-1.5 text-sm outline-none focus:border-accent transition-colors" />
                    </div>
                    <button className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground border border-border bg-card px-3 py-1.5 rounded-md transition-colors">
                        <Filter className="w-4 h-4" />
                        <span>Filter</span>
                    </button>
                </div>

                {/* Board */}
                <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4">
                    <div className="flex space-x-4 h-full snap-x snap-mandatory">
                        {columns.map((col) => (
                            <div key={col} className="w-[320px] shrink-0 flex flex-col h-full snap-start">
                                <div className="flex items-center justify-between mb-3 px-1 group cursor-pointer">
                                    <div className="flex items-center space-x-2">
                                        <h3 className="text-sm font-bold text-foreground">{col}</h3>
                                        <span className="text-xs font-semibold text-muted-foreground bg-border px-1.5 rounded-sm">
                                            {demoTasks.filter(t => t.status === col).length}
                                        </span>
                                    </div>
                                    <Plus className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-foreground" />
                                </div>

                                <div className="flex-1 overflow-y-auto space-y-3 pb-2 scrollbar-none">
                                    {demoTasks.filter(t => t.status === col).map(task => (
                                        <div
                                            key={task.id}
                                            onClick={() => setSelectedTask(task)}
                                            className={cn(
                                                "bg-card border rounded-lg p-4 cursor-pointer hover:border-accent/50 hover:shadow-sm transition-all group",
                                                selectedTask?.id === task.id ? "border-accent ring-1 ring-accent shadow-sm" : "border-border"
                                            )}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">{task.id}</span>
                                                {task.priority === "Critical" && <div className="w-2 h-2 rounded-full bg-critical"></div>}
                                                {task.priority === "High" && <div className="w-2 h-2 rounded-full bg-warning"></div>}
                                            </div>
                                            <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-snug mb-3">
                                                {task.title}
                                            </h4>
                                            <div className="flex items-center space-x-2 mb-4">
                                                <Badge variant="outline" className="text-[10px] border-border/60 text-muted-foreground bg-muted/30">{task.type}</Badge>
                                            </div>
                                            <div className="flex justify-between items-center text-xs text-muted-foreground pt-3 border-t border-border/40">
                                                <div className="flex items-center">
                                                    <img src={`https://i.pravatar.cc/150?u=${task.assignee.toLowerCase()}`} alt={task.assignee} className="w-5 h-5 rounded-full mr-2 ring-1 ring-border" />
                                                    <span className="font-medium">{task.assignee}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Calendar className="w-3.5 h-3.5 mr-1" />
                                                    {task.due}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Empty state for demo */}
                                    {demoTasks.filter(t => t.status === col).length === 0 && (
                                        <div className="border border-dashed border-border/60 rounded-lg p-4 text-center text-xs text-muted-foreground bg-background/50">
                                            Drag tasks here
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Slide-over Detail Panel */}
            <div
                className={cn(
                    "absolute top-0 right-0 h-full w-[400px] bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-in-out z-20 flex flex-col",
                    selectedTask ? "translate-x-0" : "translate-x-full"
                )}
            >
                {selectedTask && (
                    <>
                        <div className="flex items-center justify-between p-4 border-b border-border">
                            <div className="flex items-center space-x-3">
                                <Badge variant="outline" className="tracking-wider uppercase">{selectedTask.id}</Badge>
                                <div className="h-4 w-px bg-border"></div>
                                <button className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center transition-colors">
                                    <CheckCircle2 className="w-4 h-4 mr-1.5" /> Mark complete
                                </button>
                            </div>
                            <button
                                onClick={() => setSelectedTask(null)}
                                className="p-1 hover:bg-muted text-muted-foreground rounded-md transition-colors"
                                title="Close"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4 leading-tight">{selectedTask.title}</h2>
                                <div className="text-sm text-muted-foreground leading-relaxed">
                                    Implement the backend and frontend logic for evaluating the compatibility score between two target users based on their questionnaire responses. Ensure the AI evaluation aligns with the new schema update.
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1.5">Status</div>
                                    <div className="text-sm font-medium flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
                                        {selectedTask.status}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1.5">Assignee</div>
                                    <div className="text-sm font-medium flex items-center">
                                        <img src={`https://i.pravatar.cc/150?u=${selectedTask.assignee.toLowerCase()}`} className="w-5 h-5 rounded-full mr-2" />
                                        {selectedTask.assignee}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1.5">Priority</div>
                                    <div className="text-sm font-medium flex items-center">
                                        {selectedTask.priority === "Critical" && <span className="text-critical mr-1">●</span>}
                                        {selectedTask.priority}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground mb-1.5">Due date</div>
                                    <div className="text-sm font-medium flex items-center">
                                        <Calendar className="w-4 h-4 mr-2 opacity-50" />
                                        {selectedTask.due}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <h3 className="text-sm font-bold text-foreground mb-4">Properties</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center py-1">
                                        <span className="text-sm text-muted-foreground">Module</span>
                                        <Badge variant="outline" className="font-normal">{selectedTask.type}</Badge>
                                    </div>
                                    <div className="flex justify-between items-center py-1">
                                        <span className="text-sm text-muted-foreground">Milestone</span>
                                        <span className="text-sm font-medium text-foreground">Compatibility Engine</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <h3 className="text-sm font-bold text-foreground mb-4">Activity</h3>
                                <div className="space-y-4">
                                    <div className="flex space-x-3">
                                        <img src="https://i.pravatar.cc/150?u=rahul" className="w-6 h-6 rounded-full" />
                                        <div className="flex-1 bg-muted/40 p-3 rounded-lg rounded-tl-none border border-border/50 text-sm">
                                            <div className="font-medium text-foreground mb-1">Rahul <span className="font-normal text-muted-foreground text-xs ml-2">Yesterday 2:45 PM</span></div>
                                            I've pushed the schema updates, so the API should be ready for this integration now.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="p-4 border-t border-border bg-background">
                            <div className="flex items-center space-x-2 relative">
                                <input type="text" placeholder="Add a comment..." className="flex-1 bg-card border border-border rounded-md px-3 py-2 text-sm outline-none focus:border-accent" />
                                <button className="p-2 border border-border rounded-md bg-muted/50 hover:bg-muted text-foreground transition-colors absolute right-1 top-[3px]">
                                    <MessageSquare className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>

        </div>
    );
}

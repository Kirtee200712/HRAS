import { Card, Badge, Progress, TextThinProgress } from "../components/ui";
import { CheckCircle2, ChevronRight, CircleDot } from "lucide-react";

export default function Overview() {
    return (
        <div className="max-w-6xl mx-auto p-8 space-y-12">
            {/* 9. OVERVIEW PAGE HEADER */}
            <div className="flex flex-col space-y-4 md:flex-row md:items-end md:justify-between md:space-y-0 pb-8 border-b border-border/50">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">RoomNext</h1>
                    <p className="text-lg text-muted-foreground">AI-powered hostel allocation & compatibility platform</p>
                    <div className="flex items-center space-x-3 mt-4 text-sm font-medium text-muted-foreground">
                        <Badge variant="outline">Software Project</Badge>
                        <span>•</span>
                        <span>Banasthali Vidyapith</span>
                    </div>
                </div>

                <div className="flex items-start space-x-8">
                    <div className="flex flex-col items-end">
                        <div className="text-4xl font-bold text-foreground tracking-tighter">72%</div>
                        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">Project Progress</div>
                        <Progress value={72} className="w-32 mt-3" />
                    </div>
                    <div className="h-16 w-px bg-border"></div>
                    <div className="flex flex-col space-y-1">
                        <Badge variant="success" className="mb-1"><CheckCircle2 className="w-3 h-3 mr-1" /> ON TRACK</Badge>
                        <div className="text-xs text-muted-foreground mt-2">Next milestone:</div>
                        <div className="text-sm font-bold text-foreground">Compatibility Engine</div>
                        <div className="text-xs text-muted-foreground">Due: <span className="font-medium text-foreground">28 Aug</span></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column */}
                <div className="lg:col-span-8 space-y-10">

                    {/* 11. DEVELOPMENT ROADMAP */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-6">Roadmap</h2>
                        <div className="relative pt-6 pb-2">
                            <div className="absolute left-0 top-1/2 w-full h-[2px] bg-border border-dashed border-t -translate-y-1/2 z-0 hidden sm:block"></div>
                            <div className="relative z-10 flex justify-between items-center w-full">
                                {/* Milestone Node */}
                                <div className="flex flex-col items-center group cursor-pointer">
                                    <div className="w-4 h-4 rounded-full bg-success border-[3px] border-background mb-3 group-hover:scale-125 transition-transform"></div>
                                    <div className="text-xs font-bold text-foreground">Planning</div>
                                </div>
                                <div className="flex flex-col items-center group cursor-pointer">
                                    <div className="w-4 h-4 rounded-full bg-success border-[3px] border-background mb-3 group-hover:scale-125 transition-transform"></div>
                                    <div className="text-xs font-bold text-foreground">Design</div>
                                </div>
                                <div className="flex flex-col items-center group cursor-pointer">
                                    <div className="w-4 h-4 rounded-full bg-accent border-[3px] border-background mb-3 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                                    <div className="text-xs font-bold text-foreground">Development</div>
                                    <div className="text-[10px] text-muted-foreground mt-1 absolute -bottom-5">78% • Kirtee</div>
                                </div>
                                <div className="flex flex-col items-center group cursor-pointer opacity-50">
                                    <div className="w-4 h-4 rounded-full bg-muted-foreground/30 border-[3px] border-background mb-3 group-hover:scale-125 transition-transform"></div>
                                    <div className="text-xs font-bold text-foreground">Integration</div>
                                </div>
                                <div className="flex flex-col items-center group cursor-pointer opacity-50">
                                    <div className="w-4 h-4 rounded-full bg-muted-foreground/30 border-[3px] border-background mb-3 group-hover:scale-125 transition-transform"></div>
                                    <div className="text-xs font-bold text-foreground">Testing</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 12. TODAY'S FOCUS */}
                    <section>
                        <h2 className="text-xl font-bold text-foreground mb-4">Today's Focus</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Card className="p-4 hover:border-accent transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-3">
                                    <Badge variant="outline" className="text-[10px] border-accent/30 text-accent bg-accent/5">In Progress</Badge>
                                    <img src="https://i.pravatar.cc/150?u=kirtee" alt="Avatar" className="w-6 h-6 rounded-full ring-2 ring-background" />
                                </div>
                                <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-accent transition-colors">Compatibility Questionnaire</h3>
                                <div className="flex justify-between items-center text-xs text-muted-foreground mt-4 border-t border-border/50 pt-3">
                                    <span>Frontend</span>
                                    <span className="text-warning font-medium">Due today</span>
                                </div>
                            </Card>

                            <Card className="p-4 hover:border-accent transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-3">
                                    <Badge variant="outline" className="text-[10px] border-accent/30 text-accent bg-accent/5">In Progress</Badge>
                                    <img src="https://i.pravatar.cc/150?u=rahul" alt="Avatar" className="w-6 h-6 rounded-full ring-2 ring-background" />
                                </div>
                                <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-accent transition-colors">Swap Request API</h3>
                                <div className="flex justify-between items-center text-xs text-muted-foreground mt-4 border-t border-border/50 pt-3">
                                    <span>Backend</span>
                                    <span className="font-medium">Due tomorrow</span>
                                </div>
                            </Card>
                        </div>
                    </section>

                    {/* 15. ISSUES & BLOCKERS COMPACT SPLIT */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold text-foreground">Issues</h2>
                                <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded">12 open</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-critical mr-2"></div> <span className="text-foreground">Critical</span></div>
                                    <span className="font-bold">1</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-warning mr-2"></div> <span className="text-foreground">High</span></div>
                                    <span className="font-bold">3</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div> <span className="text-foreground">Medium</span></div>
                                    <span className="font-bold">5</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-muted-foreground mr-2"></div> <span className="text-foreground">Low</span></div>
                                    <span className="font-bold">3</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold text-foreground">Blockers</h2>
                                <span className="text-xs font-semibold text-critical bg-critical/10 px-2 py-0.5 rounded">2 active</span>
                            </div>
                            <div className="space-y-3">
                                <div className="border border-border rounded-lg p-3 text-sm hover:bg-muted/30 cursor-pointer transition-colors group">
                                    <div className="flex items-center text-foreground font-medium mb-1">
                                        <CircleDot className="w-3.5 h-3.5 text-critical mr-2" />
                                        AI service integration
                                    </div>
                                    <div className="text-xs text-muted-foreground ml-5.5">Compatibility Engine • Rahul</div>
                                </div>
                                <div className="border border-border rounded-lg p-3 text-sm hover:bg-muted/30 cursor-pointer transition-colors group">
                                    <div className="flex items-center text-foreground font-medium mb-1">
                                        <CircleDot className="w-3.5 h-3.5 text-critical mr-2" />
                                        WebSocket authentication
                                    </div>
                                    <div className="text-xs text-muted-foreground ml-5.5">Backend Core • Kirtee</div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Right Column */}
                <div className="lg:col-span-4 space-y-10 border-l border-border/50 pl-0 lg:pl-8">

                    {/* 13. MY WORK */}
                    <section>
                        <h2 className="text-lg font-bold text-foreground mb-4">My Work</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between py-2 border-b border-border/30">
                                <span className="text-sm font-medium">In progress</span>
                                <span className="font-bold px-2 py-0.5 rounded bg-muted">3</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-border/30">
                                <span className="text-sm font-medium text-warning">Overdue</span>
                                <span className="font-bold px-2 py-0.5 rounded bg-warning/10 text-warning">1</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-border/30">
                                <span className="text-sm font-medium">Reviews waiting</span>
                                <span className="font-bold px-2 py-0.5 rounded bg-accent/10 text-accent">2</span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-border/30">
                                <span className="text-sm font-medium">Meetings today</span>
                                <span className="font-bold px-2 py-0.5 rounded bg-muted">1</span>
                            </div>
                        </div>
                    </section>

                    {/* 10. PROJECT HEALTH / 14. PROJECT PULSE combination */}
                    <section>
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-lg font-bold text-foreground">Project Pulse</h2>
                            <div className="flex items-center text-xs font-semibold text-success">
                                <div className="w-2 h-2 rounded-full bg-success mr-1.5 animate-pulse"></div> Healthy
                            </div>
                        </div>
                        <div className="space-y-4">
                            <TextThinProgress label="Development" value={78} />
                            <TextThinProgress label="Testing" value={84} />
                            <TextThinProgress label="Requirements" value={92} />
                            <TextThinProgress label="Documentation" value={67} colorClass="bg-muted-foreground" />
                        </div>
                    </section>

                    {/* 20. COMING UP */}
                    <section>
                        <h2 className="text-lg font-bold text-foreground mb-4">Coming Up</h2>
                        <div className="space-y-3">
                            <div className="group flex p-3 rounded-lg hover:bg-muted/40 transition-colors cursor-pointer border border-transparent hover:border-border/50">
                                <div className="w-12 text-xs font-bold text-foreground shrink-0 mt-0.5">Today</div>
                                <div>
                                    <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">Team Meeting</div>
                                    <div className="text-xs text-muted-foreground mt-1">7:00 PM • 6 participants</div>
                                </div>
                            </div>
                            <div className="group flex p-3 rounded-lg hover:bg-muted/40 transition-colors cursor-pointer border border-transparent hover:border-border/50">
                                <div className="w-12 text-xs font-semibold text-muted-foreground shrink-0 mt-0.5">Tmw</div>
                                <div>
                                    <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">Backend Integration Review</div>
                                </div>
                            </div>
                            <div className="group flex p-3 rounded-lg hover:bg-muted/40 transition-colors cursor-pointer border border-transparent hover:border-border/50">
                                <div className="w-12 text-xs font-semibold text-muted-foreground shrink-0 mt-0.5">24 Aug</div>
                                <div>
                                    <div className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">Compatibility Engine</div>
                                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mt-1">Milestone</div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

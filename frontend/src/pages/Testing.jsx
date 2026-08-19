import { Badge, Card, Progress } from "../components/ui";
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Activity, Cpu } from "lucide-react";

export default function Testing() {
    return (
        <div className="max-w-6xl mx-auto p-8 space-y-10">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-border/50">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2 flex items-center">
                        <ShieldCheck className="w-8 h-8 mr-3 text-success" />
                        Quality Command Center
                    </h1>
                </div>
                <div className="flex items-end mt-4 sm:mt-0">
                    <div className="text-right mr-6">
                        <div className="text-4xl font-bold text-foreground">84%</div>
                        <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">Test Pass Rate</div>
                    </div>
                    <div className="w-32 h-16 flex flex-col justify-end">
                        <div className="flex w-full space-x-[1px] items-end pb-1 h-3/4">
                            <div className="w-1/6 bg-border h-1/4 rounded-t-sm hover:bg-muted-foreground transition-colors"></div>
                            <div className="w-1/6 bg-border h-2/4 rounded-t-sm hover:bg-muted-foreground transition-colors"></div>
                            <div className="w-1/6 bg-critical h-1/6 rounded-t-sm hover:bg-critical/80 transition-colors"></div>
                            <div className="w-1/6 bg-border h-3/4 rounded-t-sm hover:bg-muted-foreground transition-colors"></div>
                            <div className="w-1/6 bg-success h-full rounded-t-sm hover:bg-success/80 transition-colors"></div>
                            <div className="w-1/6 bg-success h-[90%] rounded-t-sm hover:bg-success/80 transition-colors"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Test Stats */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="p-6">
                        <div className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">Suite Overview</div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm font-medium">
                                <span className="text-muted-foreground">Total Tests</span>
                                <span className="text-foreground font-bold">120</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center text-success"><CheckCircle2 className="w-4 h-4 mr-2" /> Passed</span>
                                <span className="font-bold">96</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center text-critical"><XCircle className="w-4 h-4 mr-2" /> Failed</span>
                                <span className="font-bold">12</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center text-warning"><AlertTriangle className="w-4 h-4 mr-2" /> Blocked</span>
                                <span className="font-bold">4</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center text-muted-foreground"><Activity className="w-4 h-4 mr-2" /> Not Run</span>
                                <span className="font-bold">8</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border">
                            <div className="text-xs text-muted-foreground mb-1">Latest Test Run</div>
                            <div className="flex justify-between items-end">
                                <div className="font-mono font-bold text-foreground bg-muted px-2 py-1 rounded">TR-009</div>
                                <div className="text-xs text-muted-foreground">18 Aug 2026</div>
                            </div>
                            <div className="mt-3 text-sm font-medium text-warning flex items-center">
                                Status: Passed with issues
                            </div>
                        </div>
                    </Card>
                </div>

                {/* AI Evaluation */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="p-0 border-accent/20 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold flex items-center">
                                    <Cpu className="w-5 h-5 mr-2 text-accent" /> Compatibility Engine
                                </h2>
                                <Badge variant="outline" className="border-accent/40 text-accent bg-accent/5">Model v0.3</Badge>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <div className="border border-border/50 rounded-lg p-3 bg-muted/20">
                                    <div className="text-xs text-muted-foreground mb-1 uppercase font-semibold">Evaluation Set</div>
                                    <div className="text-lg font-bold">120 scenarios</div>
                                </div>
                                <div className="border border-border/50 rounded-lg p-3 bg-muted/20">
                                    <div className="text-xs text-muted-foreground mb-1 uppercase font-semibold">Consistency</div>
                                    <div className="text-lg font-bold text-success">94%</div>
                                </div>
                                <div className="border border-border/50 rounded-lg p-3 bg-muted/20">
                                    <div className="text-xs text-muted-foreground mb-1 uppercase font-semibold">Explainability</div>
                                    <div className="text-lg font-bold">92%</div>
                                </div>
                                <div className="border border-border/50 rounded-lg p-3 bg-muted/20">
                                    <div className="text-xs text-muted-foreground mb-1 uppercase font-semibold">Bias Checks</div>
                                    <div className="text-lg font-bold text-success flex items-center"><CheckCircle2 className="w-4 h-4 mr-1" /> Passed</div>
                                </div>
                            </div>

                            <div className="border border-border rounded-lg overflow-hidden text-sm">
                                <div className="bg-muted px-4 py-2 font-semibold border-b border-border text-xs uppercase tracking-wider">
                                    Sample Evaluation Scenario #412
                                </div>
                                <div className="p-4 bg-background space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-xs text-muted-foreground mb-1.5 font-semibold">Input Traits</div>
                                            <div className="space-y-1">
                                                <Badge variant="secondary" className="mr-2">Night Owl</Badge>
                                                <Badge variant="secondary" className="mr-2">Early Bird</Badge>
                                                <Badge variant="secondary">Quiet Env</Badge>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-muted-foreground mb-1.5 font-semibold">Expected Output</div>
                                            <div className="font-medium text-warning">Moderate match (approx 60%)</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                        <div className="flex space-x-6">
                                            <div>
                                                <span className="text-xs text-muted-foreground mr-2 font-semibold">Actual Score</span>
                                                <span className="font-bold text-lg text-foreground">62%</span>
                                            </div>
                                            <div>
                                                <span className="text-xs text-muted-foreground mr-2 font-semibold">Evaluation</span>
                                                <span className="font-bold text-success flex items-center h-full"><CheckCircle2 className="w-4 h-4 mr-1" /> Passed</span>
                                            </div>
                                        </div>
                                        <button className="text-xs font-semibold text-accent hover:underline">View Trace Log</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>

        </div>
    );
}

import { cn } from "../../lib/utils"

function Progress({ value, className, indicatorClassName }) {
    return (
        <div className={cn("relative w-full overflow-hidden rounded-full bg-border h-2", className)}>
            <div
                className={cn("h-full w-full flex-1 bg-primary transition-all", indicatorClassName)}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </div>
    )
}

function Card({ className, children }) {
    return (
        <div className={cn("bg-card border border-border rounded-xl shadow-sm overflow-hidden", className)}>
            {children}
        </div>
    )
}

function Badge({ children, variant = 'default', className }) {
    const variants = {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success/10 text-success border border-success/20",
        warning: "bg-warning/10 text-warning border border-warning/20",
        critical: "bg-critical/10 text-critical border border-critical/20",
        outline: "border border-border text-foreground"
    }

    return (
        <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center w-fit", variants[variant], className)}>
            {children}
        </span>
    )
}

function TextThinProgress({ label, value, colorClass = "bg-primary" }) {
    return (
        <div className="flex items-center space-x-4 mb-2">
            <div className="w-32 text-sm font-medium text-muted-foreground">{label}</div>
            <div className="flex-1 flex items-center space-x-3">
                <div className="w-32 h-[4px] bg-border rounded-full overflow-hidden shrink-0">
                    <div className={cn("h-full rounded-full", colorClass)} style={{ width: `${value}%` }} />
                </div>
                <div className="text-sm font-bold text-foreground w-10">{value}%</div>
            </div>
        </div>
    )
}

export { Progress, Card, Badge, TextThinProgress }

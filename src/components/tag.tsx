import type { LucideIcon } from "lucide-react";

export default function Tag({ text, icon: Icon }: { text: string; icon: LucideIcon }) {
    return (
        <div className="inline-flex items-center gap-1 bg-zinc-800 text-white text-xs sm:text-sm md:text-base px-2 py-1 rounded-full">
            <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span className="truncate">{text}</span>
        </div>
    );
}

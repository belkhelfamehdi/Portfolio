const TimelineItem = ({ label, date, title, content }) => (
    <div className="relative pl-4 sm:pl-32 md:pl-36 lg:pl-32 py-6 group w-full max-w-3xl mx-auto">
        {/* Label */}
        <div className="font-caveat font-medium text-2xl text-red-500 mb-1 sm:mb-0">{label}</div>
        
        {/* Vertical line, date, title, and marker */}
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-600 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-black after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-red-500 bg-black rounded-full">
                {date}
            </time>
            <div className="text-xl font-bold text-white">{title}</div>
        </div>

        {/* Content */}
        <div className="text-gray-400">
            {content}
        </div>
    </div>
);

export default TimelineItem;
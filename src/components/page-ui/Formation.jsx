import TimelineItem from '../ui/TimelineItem';

const Formation = () => {
    const timelineData = [
        {
            label: "Scientific Baccalaureate",
            date: "2018 - 2019",
            title: "Lycée Kadi Athmane, Algeria",
            content: "Completed the Baccalaureate in the Scientific stream with the mention 'Good'."
        },
        {
            label: "Bachelor's in Computer Science",
            date: "2019 - 2023",
            title: "University of Béjaia, Algeria",
            content: "Completed a comprehensive program in computer science, focusing on programming languages (Python, Java, C/C++), software development, mobile development, web applications (HTML, CSS, JavaScript, Laravel), databases (SQL), and operating systems. Gained experience in Agile methodologies and Git for version control."
        },
        {
            label: "Master's in Software Engineering",
            date: "2022 - 2024",
            title: "University of Béjaia, Algeria",
            content: "Pursuing a Master's in Software Engineering with a focus on advanced software development, project management, and modern technologies."
        },
        {
            label: "Master’s in Web Development",
            date: "Since 2024",
            title: "YNOV, Lille",
            content: "Currently enrolled in a Master's program specializing in Web Development at YNOV, Lille, focusing on advanced front-end and back-end technologies."
        }
    ];

    return (
        <section id='formations' className="dark:bg-black bg-white pb-16 px-4 sm:px-14 transition-all duration-500">
            <div className="container flex flex-col justify-center items-center -my-6">
                {timelineData.map((item, index) => (
                    <TimelineItem 
                        key={index}
                        id={`formation-${index}`}
                        label={item.label}
                        date={item.date}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </section>
    );
};

export default Formation;


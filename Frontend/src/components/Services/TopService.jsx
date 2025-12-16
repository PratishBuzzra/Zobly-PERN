import React from 'react';

const TopService = () => {
    const service = [
        {
            id: 1,
            image: '/resumedisplay.jpg',
            span: "Resume Display",
            title: "Increase Your Profile Visibility to recruiters upto 3 times.",
            subTitle: "Get a Featured Profile, stand Out and get noticed in recruiter eyes.",
            subscription: "0"
        },
        {
            id: 2,
            image: '/applicant.jpg',
            span: "Priority Applicant",
            title: "Be a Priority Applicant & increase your chance of getting a call.",
            subTitle: "Be the first one to apply and catch recruiter attention",
            subscription: "$22 for 3 Months"
        },
        {
            id: 3,
            image: '/interview.jpg',
            span: "Resume Display",
            title: "Increase Your Profile Visibility to recruiters upto 3 times.",
            subTitle: "Get a Featured Profile, stand Out and get noticed in recruiter eyes.",
            subscription: "$15 for 3 Months"
        },
        {
            id: 4,
            image: '/resumewrite.png',
            span: "Resume Writing",
            title: "Standout from the crowd with our professionally written Resume by expert",
            subTitle: "Resume that highlights your strengths and showcase your experience",
            subscription: "$90 Only"
        },
        {
            id: 5,
            image: '/trainee.jpg',
            span: "Trainee Program",
            title: "Kickstart Your Career with Our Trainee Program",
            subTitle: "Gain practical experience and get noticed by top recruiters with a featured trainee profile.",
            subscription: "$90"
        },
        {
            id: 6,
            image: '/resumedisplay.jpg',
            span: "Resume Display",
            title: "Increase Your Profile Visibility to recruiters upto 3 times.",
            subTitle: "Get a Featured Profile, stand Out and get noticed in recruiter eyes.",
            subscription: "0"
        },
        {
            id: 7,
            image: '/job.png',
            span: "Jobs For you",
            title: "Stand out as an Early Applicant with instant access to jobs.",
            subTitle: "Our experts will understand your job preference & set alerts. Instant job on SMS.",
            subscription: "$76 for 3 Months"
        },
        {
            id: 8,
            image: '/recruit.jpg',
            span: "Recruiter Connection",
            title: "Send personalized message to recruiters",
            subTitle: "Search from a database of 1.6 Lakh recruiters",
            subscription: "$20 for 5 credits"
        },
        {
            id: 9,
            image: '/resumedisplay.jpg',
            span: "Resume Critique",
            title: "Get your resume reviewed and improve your job application",
            subTitle: "Our experts will analyze your resume and send a detailed report",
            subscription: "$25 Only"
        }
    ];

    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-7'>
                {service.map((element) => (
                    <div key={element.id} className='bg-white p-5 shadow-lg rounded'>
                        <img 
                            src={element.image} 
                            alt="img" 
                            className='w-full h-64 object-cover rounded'
                        />
                        <div className='flex flex-col mt-2'>
                            <span className='text-xl text-gray-500'>{element.span}</span>
                            <p className='text-xl font-semibold mt-2'>{element.title}</p>
                            <p className='text-lg mt-2'>{element.subTitle}</p>
                            <div className='flex justify-between items-center mt-3'>
                                <p className='flex flex-col'>
                                    Subscription start from: <span>{element.subscription}</span>
                                </p>
                                <p className='text-green-600 text-lg font-semibold'>Know more</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopService;

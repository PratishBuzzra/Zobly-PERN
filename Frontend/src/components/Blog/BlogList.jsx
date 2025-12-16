import React from 'react'

const BlogList = () => {
    const articles = [
  { 
    title: "Basic Soft Skills Required in a Workplace", 
    description: "What are soft skills? Well, they are certain skill sets that you can develop to work more harmoniously with other people. You can perform better with practice..." 
  },
  { 
    title: "Essential Employability Skills that Will Get You Hired!", 
    description: "Despite being really important, people tend to overlook some of these crucial skills that employers regard as valuable when hiring candidates..." 
  },
  { 
    title: "How to Avoid Common Job-Interview Mistakes", 
    description: "Job interviews are not to be taken too lightly. It’s more than just a simple conversation. You are being evaluated by the company if you are a good fit..." 
  },
  { 
    title: "Navigating the Job Jungle: 6 Ways To Find Your Next Job and Boost Your Career", 
    description: "Finding a job in today's environment is challenging. Here are practical strategies to boost your job search efforts..." 
  },
  { 
    title: "Kathmandu Employment Trends", 
    description: "Kathmandu, Nepal's cultural and economic hub, is seeing rapid job market growth. Understand the latest trends and how they can benefit you..." 
  },
  { 
    title: "Career Development in Nepal", 
    description: "Career development in Nepal involves continuous learning and adapting to an evolving job market. Here's how you can stay ahead..." 
  },
  { 
    title: "Strategic Job Searching in Nepal", 
    description: "Simply browsing classified ads isn't enough. To find the right job in Nepal, you need a strategic approach to job searching..." 
  },
  { 
    title: "Understanding NGO/INGO Job Opportunities: Unlocking Paths to Meaningful Careers", 
    description: "NGOs and INGOs offer great career opportunities that can make a real difference in the world. Here's how to access these meaningful careers..." 
  },
  { 
    title: "Crafting a Winning Resume: Expert Tips", 
    description: "A well-crafted resume is key to standing out. Here are expert tips for creating a resume that gets you noticed..." 
  },
  { 
    title: "Resume Writing Tips: Crafting Your Path to Success", 
    description: "In today’s competitive job market, a winning resume is essential. Here's how to write a resume that lands you your dream job..." 
  },
];
  return (
    <div className="max-w-4xl mx-auto mt-10">
      {articles.map((article, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{article.title}</h2>
          <p className="mt-2 text-gray-600">{article.description}</p>
          <a href="#" className="text-blue-500 mt-4 inline-block">Read more...</a>
        </div>
      ))}
    </div>
  )
}

export default BlogList

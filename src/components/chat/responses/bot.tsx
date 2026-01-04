export const botResponses: { keywords: string[]; response: string }[] = [
  {
    keywords: ["hi", "hello", "hey"],
    response: "Hello! Welcome to my portfolio.",
  },
  {
    keywords: ["portfolio", "projects", "work", "showcase"],
    response: "You can check the Projects section to see my work!",
  },
  {
    keywords: ["skills", "technologies", "tech"],
    response: "I specialize in React, Python, and Web Development.",
  },
  {
    keywords: ["contact", "email", "reach"],
    response: "You can reach me via email at eoricogonzales@gmail.com or use the contact form on this site.",
  },
  {
    keywords: ["help", "support", "assist"],
    response: "I can answer questions about my portfolio, skills, projects, hobbies, and more!",
  },
  {
    keywords: ["about", "yourself", "who are you"],
    response: "I am Eorico Gonzales' AI assistant created to guide visitors through the portfolio.",
  },
  {
    keywords: ["live", "location", "where", "from"],
    response: "I live in the Philippines, specifically in Cavite.",
  },
  {
    keywords: ["hobbies", "interests", "free time", "do",],
    response: "Some of my hobbies include coding, learning new tech, and creating projects for fun!",
  },
  {
    keywords: ["creator", "owner", "who made this"],
    response: "This portfolio was created by Eorico Gonzales.",
  },
  {
    keywords: ["default", "other"],
    response: "I'm not sure about that. Try asking something like 'about yourself' or 'what are your skills'.",
  },
];


export const getBotReply = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    for (let rule of botResponses) {

        for (let keyword of rule.keywords) {

            if (msg.includes(keyword)) {
                return rule.response
            }
        }
    }

    return "I'm not sure how to answer that. Try asking about my projects, skills, or contact info.";
}
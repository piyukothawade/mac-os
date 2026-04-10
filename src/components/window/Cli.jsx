import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
  const commands = {
  about: {
    description: 'Display information about me',
    usage: 'about',
    fn: () => `
👨‍💻 About Me:

Hi, I'm Piyusha Kothawade 👋  
A Frontend / Full Stack Developer with ~2 years of experience.

I’ve worked on enterprise-level projects like CIMB and CC Engage,
fixing bugs, enhancing UI, and building features using React and Angular.

I enjoy building clean, scalable UIs, admin dashboards, and
JavaScript-heavy applications.
Currently preparing and aiming for high package role.
    `
  },

  skills: {
    description: 'List technical skills',
    usage: 'skills',
    fn: () => `
💪 Technical Skills:

Frontend:
• React.js, Angular
• JavaScript (ES6+)
• HTML5, CSS3, SCSS, Tailwind CSS

Backend:
• Node.js, Express.js
• REST APIs

Database:
• MongoDB
• LocalStorage-based state management (for frontend apps)

Tools & Others:
• Git & GitHub
• VS Code
• Postman
• npm
• Basic AWS (Cloud Practitioner prep)
    `
  },

  projects: {
    description: 'View my projects',
    usage: 'projects',
    fn: () => `
🚀 Projects:

1. Mac OS Style Portfolio (React + Vite)
   → Interactive desktop UI with terminal-based navigation

2. Admin Panel Dashboard
   → Built using React, Tailwind CSS
   → Modules: Orders, Categories, Subcategories, Brands,
     Products, Vendors, Purchases, Sales, Staff, Customers
   → Full Add / Edit / Delete using LocalStorage
3. Productivity Management Dashboard
   → Built using Javascript, Tailwind

4. Ecommerce Website
→ Built using React, Tailwind CSS, HTML, CSS, Payment Gateway
   → Modules: Product, Cart, ProductList, About,
     Contact, Payment Page
   → Full Add / Edit / Delete using LocalStorage

5. Multiple UI & JavaScript Mini Projects
   → DOM manipulation, events, state handling
    `
  },

  contact: {
    description: 'Get contact information',
    usage: 'contact',
    fn: () => `
📧 Contact Information:

Email:     piyukothawade789@gmail.com
LinkedIn:  https://www.linkedin.com/in/piyukothawade-7217171b7/
GitHub:    https://github.com/piyukothawade

(Open to frontend / full stack opportunities)
    `
  },
resume: {
  description: 'Download my resume',
  usage: 'resume',
  fn: () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Piyusha_Kothawade_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    return `
📄 Resume:

Downloading resume...
If the download didn’t start, please check your browser settings.
    `;
  }
},


  portfolio: {
    description: 'View portfolio highlights',
    usage: 'portfolio',
    fn: () => `
⭐ Portfolio Highlights:

✓ Enterprise project experience (CIMB, CC Engage)
✓ Strong React & Angular fundamentals
✓ Admin dashboards with real CRUD logic
✓ Clean UI + solid JavaScript concepts
✓ Actively preparing for high-growth roles 
    `
  },

  echo: {
    description: 'Echo a passed string',
    usage: 'echo <string>',
    fn: (...args) => args.join(' ')
  },

  date: {
    description: 'Show current date and time',
    usage: 'date',
    fn: () => new Date().toString()
  }
};


  const welcomeMessage = `
🍎 Welcome to Mac Terminal 🍎

Type 'help' to see available commands.
Start exploring my portfolio!
      `;

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="cli-window">
            <Terminal 
            commands={commands}
            welcomeMessage={welcomeMessage}
            promptLabel={'piyushakothawade:~'}
            promptLabelStyle={{ color : "#00ff00"}}
            />
        </div>
    </MacWindow>
  )
}

export default Cli
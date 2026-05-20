const BASE_URL="https://theboarsin.alwaysdata.net/portfolio-api/v1";

export const endpoints=Object.freeze({
    contact: `${BASE_URL}/contact-user/`,
    login: `${BASE_URL}/login/`,
    details: `${BASE_URL}/user/`,
    projects: `${BASE_URL}/projects/`,
    experiences: `${BASE_URL}/experiences/`,
});

export const data={
    "details":{
        "first_name":"George",
        "last_name":"Kitawi",
        "email":"georgemobisa23@outlook.com",
        "profile":{
            "bio":"Dedicated software developer with a keen focus on detail and efficiency. Developed and deployed multiple vigorously tested and secure projects ranging from web applications, stand-alone APIs to useful scripts that automate repetitive tasks. Focused on building ethical, scalable and optimizable systems in the society",
            "skills":[
                "Python","Django","Djangorest","React","NextJs","PostgreSQL","Postman","Swagger",
                "HTML","CSS","SASS","Javascript","C","C++","Java","Bootstrap","Redux","jQuery",
                "Scratch",
            ],
            "socials":{
                "freecodecamp":"https://www.freecodecamp.org/nerds-playground",
                "github":"https://github.com/NerdPlayground",
                "codepen":"https://codepen.io/nerdsplayground",
                "linkedin":"https://www.linkedin.com/in/george-mobisa-857a842b5/",
            }
        }
    },
    "projects":[
        {
            "name": "Django REST Templates",
            "link": "https://github.com/NerdPlayground/django-rest-auth-template",
            "start_date": "2024-04-01",
            "ongoing": true,
            "description": "The template has configured endpoints for user registration, account access, password management, email verification, and account management.\
            Instructions are attached to their respective repositories on my GitHub account",
            "objectives":[],
            "tools":["Python","Django","DjangoREST","PostgreSQL","Factory Boy"],
        },
        {
            "name": "Auralis",
            "link": "https://auralis-zeta.vercel.app/",
            "start_date": "2024-08-01",
            "end_date": "2025-10-01",
            "ongoing": false,
            "description": "Plays around with your Spotify account. \
            Since the application works with your personal data, everything is encrypted and safely stored in your browser.",
            "objectives": [
                "Gets the song currently playing on your Spotify",
                "Automatically creates a playlist of your top tracks in your Library",
                "Updates the Top Tracks playlist overtime depending on your listening habits",
            ],
            "tools": ["NextJs"]
        },
        {
            "name": "All You Can Eat",
            "link": "https://github.com/NerdPlayground/allyoucaneat",
            "start_date": "2022-05-01",
            "end_date": "2022-09-01",
            "ongoing": false,
            "description": "Food delivery platform that allows users to order food from the local vendors and have it seamlessly delivered at their offices. Inspired by the SasaPay staff members.",
            "objectives":[
                "Developed an intuitive and user-friendly Django web application that allows users to easily browse the available catalogue and find their desired foods and drinks",
                "Integrated a secure and reliable payment gateway that enables users to make online payments with SasaPay",
                "Established robust data storage capabilities using PostgreSQL that allows for easy management of menu items, user data and customer receipts.",
                "Optimized performance metrics suggested by Google Page Speed Insights after careful assessment of the web application",
                "Deployed efficient and effective security features to ensure smooth and secure operation of the web application and also to prevent data loss and/or theft"
            ],
            "tools":[
                "Python","Django","HTML","CSS","JavaScript",
            ]
        },
        {
            "name": "Cleanup Gmail API",
            "link": "https://github.com/NerdPlayground/cleanupgmailapi",
            "start_date": "2023-01-01",
            "end_date": "2023-02-01",
            "ongoing": false,
            "description": "Automates the organization of your Gmail inbox by grouping the current and incoming emails by their sender",
            "objectives":[
                "Implemented a RESTful API using Django and Django REST Framework to enable communication between the Gmail API and client-side applications.",
                "Integrated the Gmail API to authenticate and authorize users, access and retrieve their emails and message threads, and perform sorting and filtering operations",
                "Created a custom algorithm to filter and label users' emails based on their senders and integrated these filters into their accounts to be applied on incoming emails."
            ],
            "tools":[
                "Python","Djangorest","Postman"
            ]
        }
    ],
    "experiences":[
        {
            "company": "Brookshine Schools",
            "title": "Coding and Robotics Trainer",
            "link": "http://brookshine.ac.ke/",
            "start_date": "2025-02-01",
            "ongoing":  true,
            "description": "Coding and Robotics Trainer",
            "objectives": [
                "Delivered comprehensive training in Coding, Robotics and Digital Literacy to students in both the Cambridge and CBC curriculum, boosting their skills in computational thinking and problem-solving",
                "Spearheaded coordination of students' participation in Science fairs, and relevant competitions, nurturing innovation beyond the classroom",
                "Integrated Google Workspace tools to streamline student tracking, project documentation and official reporting to interested parties",
            ],
            "tools": [
                "Python","Scratch","HTML","CSS","Javascript"
            ],
        },
        {
            "company": "Calm Collections KE",
            "title": "Fullstack Developer",
            "link": "",
            "start_date": "2024-11-01",
            "end_date":  "2025-07-01",
            "ongoing":  false,
            "description": "Fullstack Developer",
            "objectives": [
                "Developed a fully responsive e-commerce website using Next.js and SCSS for styling, featuring a dynamic landing page that directs customers to the online shop across devices.",
                "Developed a Django REST Framework API for managing inventory, customer profiles, and sales receipts, using PostgreSQL for data storage.",
                "Integrated MPESA API payment processing to enable secure mobile transactions and streamlining checkout and improving customer experience by 85%.",
            ],
            "tools": [
                "Python","DjangoREST","NextJs","SCSS",
            ],
        },
        {
            "company": "MOTI Inc",
            "title": "Fullstack Developer",
            "link": "https://moti-carsharing.azurewebsites.net/",
            "start_date": "2023-05-01",
            "end_date": "2024-12-01",
            "ongoing": false,
            "description": "Fullstack Developer",
            "objectives":[
                "Collaborated with UX and UI designers to create intuitive user interfaces for web applications using HTML, SASS, Javascript, resulting in 80% user acceptance",
                "Analyzed performance metrics using Page Speed Insights, resulting in a 75% decrease in page load time and improved user experience",
                "Implemented robust data storage capabilities using PostgreSQL, enabling seamless collection and storage of user emails for targeted marketing campaigns",
                "Utilized effective and efficient security measures to safeguard against cross-site scripting, cross-site request forgery, clickjacking and shell jacking, resulting in 80% increase in user and data safety"
            ],
            "tools":[
                "Python","Django","HTML","SCSS","JavaScript"
            ]
        },
        {
            "company": "SasaPay",
            "title": "Backend Developer Associate",
            "link": "https://www.sasapay.co.ke/",
            "start_date": "2022-01-01",
            "end_date": "2022-06-01",
            "ongoing": false,
            "description": "Backend Developer Associate",
            "objectives": [
                "Formulated a Python script that automates the extraction and organization of information from the KPLC token database, resulting in a 80% reduction in data collection and processing time.",
                "Contributed to the successful testing of the SasaPay Wallet as a Service platform by providing support during the development process, resulting in 75% bug-free code for release.",
                "Participated in regular code reviews with the product team and sought feedback from senior engineers, leading to a 30% increase in code quality and adherence to best practices."
            ],
            "tools":[
                "Python","DjangoREST","Postman","Swagger"
            ]
        }
    ]
}
const
    BASE_URL="https://portfolio-api-vwdg.onrender.com/portfolio-api/v1",
    PORTFOLIO_USER=process.env.PORTFOLIO_USER,
    USER=`${BASE_URL}/users/${PORTFOLIO_USER}`;

export const endpoints=Object.freeze({
    contact: `${BASE_URL}/contact-user/`,
    details: `${USER}/`,
    projects: `${USER}/projects/`,
    experiences: `${USER}/experiences/`,
});

export const data={
    "details":{
        "first_name":"George",
        "last_name":"Mobisa",
        "email":"studytime023@gmail.com",
        "profile":{
            "bio":"Dedicated software developer with a keen focus on detail and efficiency. Developed and deployed multiple vigorously tested and secure projects ranging from web applications, stand-alone APIs to useful scripts that automate repetitive tasks. Focused on building ethical, scalable and optimizable systems in the society",
            "skills":[
                "C","C++","Java","Python","HTML","CSS","Javascript","Bootstrap","SASS",
                "React","Redux","jQuery","Django","Djangorest","PostgreSQL","Postman","Swagger"
            ],
            "socials":{
                "freecodecamp":"https://www.freecodecamp.org/nerds-playground",
                "github":"https://github.com/NerdPlayground",
                "codepen":"https://codepen.io/nerdsplayground",
                "twitter":"https://twitter.com/nplayground_",
                "instagram":"https://www.instagram.com/nplayground_/"
            }
        }
    },
    "projects":[
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
                "Python","Django","HTML","CSS","JavaScript"
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
            "company": "MOTI Inc",
            "title": "Fullstack Developer",
            "link": "https://moti-carsharing.azurewebsites.net/",
            "start_date": "2023-05-01",
            "ongoing": true,
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
                "Python","Djangorest","Postman","Swagger"
            ]
        }
    ]
}
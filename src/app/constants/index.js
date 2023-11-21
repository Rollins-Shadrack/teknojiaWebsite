//Navigation links

export const NAV_LINKS = [
    {href:'#', label:"Home"},
    {href:'#', label:"How we work"},
    {href:'#', label:"Our Mission"},
    {href:'#', label:"About"},
    {href:'#', label:"Contact"} 
]

export const heroContent = {
    text:{
        subheading:"Welcome to Teknojia",
        heading:"Protecting Families, Securing Futures",
        description:"We understand that protecting your loved oned is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs. our expert team is committed to creating a solid foundation of security and peace of mind for you and loved ones"
    },
    images:{
        img1:'/images/family5.png',
        img2:'/images/family2.png',
        img3:'/images/family3.png',
        img4:'/images/family.png',
        img5:'/images/family4.png'
    }
}

export const statsContent = {
    stats:[
        {number:'99.9%', label:'Child Safety Solutions'},
        {number:'3,455', label:'Happy Customers'},
        {number:'4.5', label:'Rating Reviews'}
    ],
    getStarted:{
        heading:"Get Started with our services?",
        description:'We understand that protecting your loved ones is of utmost importance',
        img:'/images/illustration.png',
        cta:{
            cta_href:'#_',
            cta_label:'Learn More'
        }
    }
}

export const servicesContent ={
    heading:{
        headingSubTitle:"Our Awesome Services",
        headingTitle:"Our Services",
        description:"We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs"
    },
    items:[
        {
            icon:'/images/icon1.png', 
            title:'Child Safety Solution',
            description:'Childproofing services and safety education to keep your children secure and protected at home and in public spaces.'
        },
        {
            icon:'/images/icon2.png', 
            title:'Elderly Care Monitoring',
            description:'Innovative technologies for monitoring and caring for elderly family members, promoting their safety and independence.'
        },
        {
            icon:'/images/icon4.png', 
            title:'Home Fire Safety',
            description:'Innovative technologies for monitoring and caring for elderly family members, promoting their safety and independence.'
        },
        {
            icon:'/images/icon3.png', 
            title:'Financial Planning',
            description:"Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security"
        },
        {
            icon:'/images/pana.png', 
            title:'Personal Safety Devices',
            description:"Wearable personal safety devices equipped with GPS tracking and emergency alerts for family members in the go."
        },
        {
            icon:'/images/about.png', 
            title:'Insurance Coverage',
            description:"Tailored insurance policies to protect your family's financial future, including life insurance, health insurance ad property insurance."
        }
    ]
}

export const solutionContent = {
    text:{
        headingSubTitle:"Our Solutions",
        headingTitle:"From safeguarding your home with state-of-the-art alarm systems",
        description:"From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our family security plan, you can rest easy knowing that you've taken the neccessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most- your family's well-being",
        features: [
            {title:"Home Fire Safety"},
            {title:"Cybersecurity Solutions"},
            {title:"Emergency preparedness"},
            {title:"Identify Theft Protection"}
        ],
        cta:{
            btn1:{
                href:"#_",
                label:"Get Started"
            },
            btn2:{
                href:"#_",
                label:"How it Works?"
            }
        }
    },
    images:{
        img1:"/images/solution3.png",
        img2:"/images/solution4.png",
        img3:"/images/solution5.png"
    },
    experience:{
        year:"10+",
        label:"years of experience"
    }
}

export const testimonialContent = {
    heading:{
        headingSubTitle:"Customers Says...",
        headingTitle:"Hear what Our Customers Say",
        description:"From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with.",
        cta:{
            cta_href:"#_",
            cta_label:"Get Started"
        }
    },
    testimonials:[
        {
            img:'/images/profile.png',
            name:"Jane Cooper",
            titleRole:"Customer - Dallas, TX",
            testimony:"With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The System is user-friendly, and their customer support is fantastic"
        },
        {
            img:'/images/profile2.png',
            name:"Alisa Richardson",
            titleRole:"Customer - Miami, FL",
            testimony:"Installing Family Home Security was the best decision we made for out family's safety. Their quick response during emergencies  gave us peace of mind"
        },
        {
            img:'/images/profile3.png',
            name:"Mitchelle Dam",
            titleRole:"Customer - Seattle, WA",
            testimony:"After moving to a new neighborhood, I felt vulnerable. Thanks to Teknojia Security, I can now sleep soundly, knowing our home is well-protected"
        }
    ]
}


export const blogContent = {
    heading: {
        headingSubTitle:"Our Writeups",
        headingTitle:"Our Latest Articles",
        description:"We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights and innovations."
    },
    recentBlogs:[
        {
            permalink:"#_",
            featuredImg:"/images/blog5.png",
            title:"10 Essential Tips for Protecting Your Home from Burglaries",
            excerpt:"Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft",
            author:{
                img:"/images/profile.png",
                name:"Alisa Richardson",
                titleRole:"Editor, CEO, Co-Founder"
            }
        },
        {
            permalink:"#_",
            featuredImg:"/images/blog4.png",
            title:"Ultimate Guide to Choosing the Right life Insurance for Your Family",
            excerpt:"Understanding the various types of life insurance policies and finding the perfect coverage to ensure...",
            author:{
                img:"/images/profile2.png",
                name:"Jane Cooper",
                titleRole:"Editor, COO"
            }
        },
        {
            permalink:"#_",
            featuredImg:"/images/blog3.png",
            title:"A Comprehensive Guide to Choosing the Right Family Health Insurance Plan",
            excerpt:"Learn the best practices and simple steps to safeguard your home and loved ones from potential break-ins and theft",
            author:{
                img:"/images/profile3.png",
                name:"Davon Rollins",
                titleRole:"Editor, Product Designer"
            }
        },
        {
            permalink:"#_",
            featuredImg:"/images/blog2.png",
            title:"Understanding Homeowners Insurance",
            excerpt:"Understanding the various types of life insurance policies and finding the perfect coverage to ensure...",
            author:{
                img:"/images/profile4.png",
                name:"Shadrack Davon ",
                titleRole:"Editor, Product COO"
            }
        },
        {
            permalink:"#_",
            featuredImg:"/images/blog1.png",
            title:"Securing Your Family's with Disability Insurance",
            excerpt:"Understanding the various types of life insurance policies and finding the perfect coverage to ensure...",
            author:{
                img:"/images/profile5.png",
                name:"Shadrack Davon ",
                titleRole:"Editor, Product COO"
            }
        }
    ],
    cta:{
        href:"#_",
        label:"To view all posts",
        labelSuffix:"Click Here"
    }
}

export const footerContent = {  
    about: {
        logo:"/images/Icon.png",
        description:"From heartwarming testimonial to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experience that await you with",
        cta:{
            href:"#_",
            label:"Learn More"
        }
    },
    footerLinks : [
        {
            heading:"Company",
            links:[
                {href:"#_", label:"Home"},
                {href:"#_", label:"How we work"},
                {href:"#_", label:"Our Mission"},
                {href:"#_", label:"About"},
                {href:"#_", label:"Careers"},
                {href:"#_", label:"Contact"}
            ]
        },
        {
            heading:"Resources",
            links:[
                {href:"#_", label:"Blog"},
                {href:"#_", label:"Support"},
                {href:"#_", label:"Terms & Conditions"},
                {href:"#_", label:"Privacy Policy"},
            ]
        }

    ],
    contact:{
        heading:"Contact",
        description:"Please feel free to reach out to us with any inquiries, wuestions or assistance you may need",
        address:{
            street:"23 Main Street, Nairobi City",
            phone:"0746179246",
            website:"https://rollinscodes.com"
        }
    },
    copyright:{
        labelOne:"Copyright 2023",
        labeltwo:"All rights reserved"
    }
}
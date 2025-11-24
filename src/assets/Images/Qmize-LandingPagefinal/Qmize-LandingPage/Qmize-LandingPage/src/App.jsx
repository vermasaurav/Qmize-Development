import { useState } from "react";
import brand1 from './assets/brand1.png'
import brand2 from './assets/brand2.jpeg'
import brand3 from './assets/brand3.png'
import brand4 from './assets/brand4.webp'
import brand5 from './assets/brand5.png'
import brand6 from './assets/brand6.png'
import brand7 from './assets/brand7.png'
import testi1 from './assets/testi1.jpg'
import testi2 from './assets/testi2.jpg'
import testi3 from './assets/testi3.jpg'
import VideoTesti from './assets/testiVideo2.mp4'
import { ChevronLeft, ChevronRight ,ChevronDown} from "lucide-react";
// import brand8 from './assets/brand8.png'
// import brand9 from './assets/brand9.webp'
// import brand10 from './assets/brand1.png'
const App = () => {



  const [pricingType, setPricingType] = useState("india"); 

const videoUrl = VideoTesti;
  const testimonials = [
    {
      name: "Soumyadeep",
      role: "",
      text: "The team is highly professional and provided prompt service, delivering the results well ahead of the promised deadline. A special thank you to Mr. Rashid for his assistance in helping us onboard the WABA platform and navigate the WhatsApp Blue Tick process.",
      image: testi1,
    },
    {
      name: "Basharat Amin",
      role: "",
      text: "I am Basharat Amin From Srinagar, Kashmir.I had the pleasure of working with Qmize formerly MSG24x7, and I must say my relationship manager Ms. Kulsoom is exceptional! Her promptness and efficiency in getting the WhatsApp Green Tick for our business were truly impressive. Within just 2 days, she managed to secure the coveted verification, which speaks volumes about her dedication and expertise.",
      image: testi2,
    },
    {
      name: "Nadeem Asif",
      role: "",
      text: "Very professional team specialy Mr.Shujat ALI, Mr. Sarim Helal and Mr. Jabir Azad. They are helping with WA API on very reasonable fees, They are cooperative, informative and suportive since i came to this company. I am happy to deal with you guys. All the best.",
      image: testi3,
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const current = testimonials[index];







  const [billing, setBilling] = useState("monthly");
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      q: "What is WhatsApp Business API?",
      a: "It enables automated customer engagement, chatbots, broadcasts, and verified business communication at scale."
    },
    {
      q: "Why should I choose Qmize for WhatsApp API?",
      a: "Qmize provides automated flows, smart analytics, segmentation, and unbeatable message delivery — all in one simple platform."
    },
    {
      q: "Do I need a verified business for WhatsApp API?",
      a: "Yes, WhatsApp requires basic business verification, and Qmize helps you through every step."
    },
    {
      q: "Can I send bulk messages?",
      a: "Yes! With Qmize you can broadcast to unlimited audiences with approved WhatsApp templates."
    },
    {
      q: "Is automation included?",
      a: "Yes, AI chatbots, drip campaigns, auto-replies, abandoned-cart recovery, and more are included."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };





   const brands = [
   brand1,brand2,brand3,brand4,brand5,brand6,brand7
  ];

   const pricingData = {
    monthly: [
      {
        name: "Free Plan",
        price: "₹0",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      {
        name: "Saving Plan",
        price: "₹1299",
        freeSms: "1000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Basic WABA Access",
          "Advanced Analytics",
          "Broadcasting",
          "CSV Broadcasting",
          "Audience Segmentation",
          "SMS Broadcasting",
          "Team Inbox",
          "Live Chat Dashboard",
          "Custom Quick Replies",
          "Notes Feature",
          "Agent Transfer Monitoring",
          "Contact Import",
          "Multi Agent Chat",
          "Template Library Access",
          "Create Message Template",
          "Google Sheet Integration (₹999 chagred separately)",
        ],
        limit:[
          "Team Members - 2",
          "Team Roles - 1",
          "Max Tags - 5",
          "Max Attributes - 2",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - No"
        ]
      },
      {
        name: "Basic Plan",
        price: "₹2999",
        freeSms: "2500",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration (₹999 charged separately)"

        ],
         limit:[
          "Team Members - 5",
          "Team Roles - 1",
          "Max Tags - 10",
          "Max Attributes - 5 ",
          "Webhook Limit - 0",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free"
        ]
      },

      {
        name: "Standard Plan",
        price: "₹3999",
        freeSms: "5000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 15",
          "Team Roles - 2",
          "Max Tags - 25",
          "Max Tags - 10",
          "Max Contacts Import - 100000"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Pro Plan",
        price: "₹5499",
        freeSms: "10000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Ultimate Plan",
        price: "₹8999",
        freeSms: "20000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration Free"
        ],
         limit:[
          "Team Members - Unlimited",
          "Team Roles - Unlimited",
          "Max Tags - Unlimited",
          "Max Tags - Unlimited",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      
    ],

    quarterly: [
      {
        name: "Free Plan",
        price: "₹0",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      {
        name: "Saving Plan",
        price: "₹3500",
        freeSms: "1000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Basic WABA Access",
          "Advanced Analytics",
          "Broadcasting",
          "CSV Broadcasting",
          "Audience Segmentation",
          "SMS Broadcasting",
          "Team Inbox",
          "Live Chat Dashboard",
          "Custom Quick Replies",
          "Notes Feature",
          "Agent Transfer Monitoring",
          "Contact Import",
          "Multi Agent Chat",
          "Template Library Access",
          "Create Message Template",
          "Google Sheet Integration (₹999 chagred separately)",
        ],
        limit:[
          "Team Members - 2",
          "Team Roles - 1",
          "Max Tags - 5",
          "Max Attributes - 2",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - No"
        ]
      },
      {
        name: "Basic Plan",
        price: "₹8500",
        freeSms: "2500",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration (₹999 charged separately)"

        ],
         limit:[
          "Team Members - 5",
          "Team Roles - 1",
          "Max Tags - 10",
          "Max Attributes - 5 ",
          "Webhook Limit - 0",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free"
        ]
      },

      {
        name: "Standard Plan",
        price: "₹10999",
        freeSms: "5000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 15",
          "Team Roles - 2",
          "Max Tags - 25",
          "Max Tags - 10",
          "Max Contacts Import - 100000"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Pro Plan",
        price: "₹16500",
        freeSms: "10000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Ultimate Plan",
        price: "₹25500",
        freeSms: "20000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration Free"
        ],
         limit:[
          "Team Members - Unlimited",
          "Team Roles - Unlimited",
          "Max Tags - Unlimited",
          "Max Tags - Unlimited",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      
    ],

    halfyearly: [
      {
        name: "Free Plan",
        price: "₹0",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      {
        name: "Saving Plan",
        price: "₹6800",
        freeSms: "1000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Basic WABA Access",
          "Advanced Analytics",
          "Broadcasting",
          "CSV Broadcasting",
          "Audience Segmentation",
          "SMS Broadcasting",
          "Team Inbox",
          "Live Chat Dashboard",
          "Custom Quick Replies",
          "Notes Feature",
          "Agent Transfer Monitoring",
          "Contact Import",
          "Multi Agent Chat",
          "Template Library Access",
          "Create Message Template",
          "Google Sheet Integration (₹999 chagred separately)",
        ],
        limit:[
          "Team Members - 2",
          "Team Roles - 1",
          "Max Tags - 5",
          "Max Attributes - 2",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - No"
        ]
      },
      {
        name: "Basic Plan",
        price: "₹15999",
        freeSms: "2500",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration (₹999 charged separately)"

        ],
         limit:[
          "Team Members - 5",
          "Team Roles - 1",
          "Max Tags - 10",
          "Max Attributes - 5 ",
          "Webhook Limit - 0",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free"
        ]
      },

      {
        name: "Standard Plan",
        price: "₹21500",
        freeSms: "5000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 15",
          "Team Roles - 2",
          "Max Tags - 25",
          "Max Tags - 10",
          "Max Contacts Import - 100000"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Pro Plan",
        price: "₹32500",
        freeSms: "10000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Ultimate Plan",
        price: "₹50500",
        freeSms: "20000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration Free"
        ],
         limit:[
          "Team Members - Unlimited",
          "Team Roles - Unlimited",
          "Max Tags - Unlimited",
          "Max Tags - Unlimited",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      
    ],

    annually: [
      {
        name: "Free Plan",
        price: "₹0",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      {
        name: "Saving Plan",
        price: "₹13000",
        freeSms: "1000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Basic WABA Access",
          "Advanced Analytics",
          "Broadcasting",
          "CSV Broadcasting",
          "Audience Segmentation",
          "SMS Broadcasting",
          "Team Inbox",
          "Live Chat Dashboard",
          "Custom Quick Replies",
          "Notes Feature",
          "Agent Transfer Monitoring",
          "Contact Import",
          "Multi Agent Chat",
          "Template Library Access",
          "Create Message Template",
          "Google Sheet Integration (₹999 chagred separately)",
        ],
        limit:[
          "Team Members - 2",
          "Team Roles - 1",
          "Max Tags - 5",
          "Max Attributes - 2",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - No"
        ]
      },
      {
        name: "Basic Plan",
        price: "₹29500",
        freeSms: "2500",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration (₹999 charged separately)"

        ],
         limit:[
          "Team Members - 5",
          "Team Roles - 1",
          "Max Tags - 10",
          "Max Attributes - 5 ",
          "Webhook Limit - 0",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free"
        ]
      },

      {
        name: "Standard Plan",
        price: "₹42500",
        freeSms: "5000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 15",
          "Team Roles - 2",
          "Max Tags - 25",
          "Max Tags - 10",
          "Max Contacts Import - 100000"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Pro Plan",
        price: "₹62500",
        freeSms: "10000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration (₹999 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow Price - ₹2999 (charged separately)"
        ]
      },

      {
        name: "Ultimate Plan",
        price: "₹99999",
        freeSms: "20000",
        conversationPricing: [
          { name: "Marketing", price: "₹0.785" },
          { name: "Utility", price: "₹0.115" },
          { name: "Authentication", price: "₹0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration Free"
        ],
         limit:[
          "Team Members - Unlimited",
          "Team Roles - Unlimited",
          "Max Tags - Unlimited",
          "Max Tags - Unlimited",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      
    ]
  };
   const pricingDataInt = {
    monthly: [
      {
        name: "Free Plan",
        price: "$0",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      {
        name: "Saving Plan",
        price: "$25",
        freeSms: "1000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Basic WABA Access",
          "Advanced Analytics",
          "Broadcasting",
          "CSV Broadcasting",
          "Audience Segmentation",
          "SMS Broadcasting",
          "Team Inbox",
          "Live Chat Dashboard",
          "Custom Quick Replies",
          "Notes Feature",
          "Agent Transfer Monitoring",
          "Contact Import",
          "Multi Agent Chat",
          "Template Library Access",
          "Create Message Template",
          "Google Sheet Integration ($15 chagred separately)",
        ],
        limit:[
          "Team Members - 2",
          "Team Roles - 1",
          "Max Tags - 5",
          "Max Attributes - 2",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - No"
        ]
      },
      {
        name: "Basic Plan",
        price: "$35",
        freeSms: "2500",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration ($15 charged separately)"

        ],
         limit:[
          "Team Members - 5",
          "Team Roles - 1",
          "Max Tags - 10",
          "Max Attributes - 5 ",
          "Webhook Limit - 0",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free"
        ]
      },

      {
        name: "Standard Plan",
        price: "$55",
        freeSms: "5000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 15",
          "Team Roles - 2",
          "Max Tags - 25",
          "Max Tags - 10",
          "Max Contacts Import - 100000"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Pro Plan",
        price: "$99",
        freeSms: "10000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Ultimate Plan",
        price: "$199",
        freeSms: "20000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration Free"
        ],
         limit:[
          "Team Members - Unlimited",
          "Team Roles - Unlimited",
          "Max Tags - Unlimited",
          "Max Tags - Unlimited",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      
    ],

    quarterly: [
      {
        name: "Free Plan",
        price: "$0",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      {
        name: "Saving Plan",
        price: "$65",
        freeSms: "1000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Basic WABA Access",
          "Advanced Analytics",
          "Broadcasting",
          "CSV Broadcasting",
          "Audience Segmentation",
          "SMS Broadcasting",
          "Team Inbox",
          "Live Chat Dashboard",
          "Custom Quick Replies",
          "Notes Feature",
          "Agent Transfer Monitoring",
          "Contact Import",
          "Multi Agent Chat",
          "Template Library Access",
          "Create Message Template",
          "Google Sheet Integration ($15 chagred separately)",
        ],
        limit:[
          "Team Members - 2",
          "Team Roles - 1",
          "Max Tags - 5",
          "Max Attributes - 2",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - No"
        ]
      },
      {
        name: "Basic Plan",
        price: "$99",
        freeSms: "2500",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration ($15 charged separately)"

        ],
         limit:[
          "Team Members - 5",
          "Team Roles - 1",
          "Max Tags - 10",
          "Max Attributes - 5 ",
          "Webhook Limit - 0",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free"
        ]
      },

      {
        name: "Standard Plan",
        price: "$155",
        freeSms: "5000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 15",
          "Team Roles - 2",
          "Max Tags - 25",
          "Max Tags - 10",
          "Max Contacts Import - 100000"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Pro Plan",
        price: "$280",
        freeSms: "10000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Ultimate Plan",
        price: "$560",
        freeSms: "20000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration Free"
        ],
         limit:[
          "Team Members - Unlimited",
          "Team Roles - Unlimited",
          "Max Tags - Unlimited",
          "Max Tags - Unlimited",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      
    ],

    halfyearly: [
      {
        name: "Free Plan",
        price: "$0",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      {
        name: "Saving Plan",
        price: "$120",
        freeSms: "1000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Basic WABA Access",
          "Advanced Analytics",
          "Broadcasting",
          "CSV Broadcasting",
          "Audience Segmentation",
          "SMS Broadcasting",
          "Team Inbox",
          "Live Chat Dashboard",
          "Custom Quick Replies",
          "Notes Feature",
          "Agent Transfer Monitoring",
          "Contact Import",
          "Multi Agent Chat",
          "Template Library Access",
          "Create Message Template",
          "Google Sheet Integration ($15 chagred separately)",
        ],
        limit:[
          "Team Members - 2",
          "Team Roles - 1",
          "Max Tags - 5",
          "Max Attributes - 2",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - No"
        ]
      },
      {
        name: "Basic Plan",
        price: "$180",
        freeSms: "2500",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration ($15 charged separately)"

        ],
         limit:[
          "Team Members - 5",
          "Team Roles - 1",
          "Max Tags - 10",
          "Max Attributes - 5 ",
          "Webhook Limit - 0",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free"
        ]
      },

      {
        name: "Standard Plan",
        price: "$290",
        freeSms: "5000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 15",
          "Team Roles - 2",
          "Max Tags - 25",
          "Max Tags - 10",
          "Max Contacts Import - 100000"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Pro Plan",
        price: "$520",
        freeSms: "10000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Ultimate Plan",
        price: "$1030",
        freeSms: "20000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration Free"
        ],
         limit:[
          "Team Members - Unlimited",
          "Team Roles - Unlimited",
          "Max Tags - Unlimited",
          "Max Tags - Unlimited",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      
    ],

    annually: [
      {
        name: "Free Plan",
        price: "$0",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      {
        name: "Saving Plan",
        price: "$210",
        freeSms: "1000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Basic WABA Access",
          "Advanced Analytics",
          "Broadcasting",
          "CSV Broadcasting",
          "Audience Segmentation",
          "SMS Broadcasting",
          "Team Inbox",
          "Live Chat Dashboard",
          "Custom Quick Replies",
          "Notes Feature",
          "Agent Transfer Monitoring",
          "Contact Import",
          "Multi Agent Chat",
          "Template Library Access",
          "Create Message Template",
          "Google Sheet Integration ($15 chagred separately)",
        ],
        limit:[
          "Team Members - 2",
          "Team Roles - 1",
          "Max Tags - 5",
          "Max Attributes - 2",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - No"
        ]
      },
      {
        name: "Basic Plan",
        price: "$330",
        freeSms: "2500",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration ($15 charged separately)"

        ],
         limit:[
          "Team Members - 5",
          "Team Roles - 1",
          "Max Tags - 10",
          "Max Attributes - 5 ",
          "Webhook Limit - 0",
          "Max Contacts Import - 50000"
        ],
        chatbots:[
          "Google Dialogflow Chatbot - Free"
        ]
      },

      {
        name: "Standard Plan",
        price: "$520",
        freeSms: "5000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 15",
          "Team Roles - 2",
          "Max Tags - 25",
          "Max Tags - 10",
          "Max Contacts Import - 100000"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Pro Plan",
        price: "$935",
        freeSms: "10000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
        "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration ($15 charged separately)"
        ],
         limit:[
          "Team Members - 50",
          "Team Roles - 10",
          "Max Tags - 50",
          "Max Tags - 25",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
         "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },

      {
        name: "Ultimate Plan",
        price: "$1850",
        freeSms: "20000",
        conversationPricing: [
          { name: "Marketing", price: "$0.785" },
          { name: "Utility", price: "$0.115" },
          { name: "Authentication", price: "$0.115" }
        ],
        features: [
          "Free Waba Access",
"Advanced Analytics",
"Super Meta Analytics",
"Broadcasting",
"Csv Broadcasting",
"Sms Broadcasting",
"Audience Segmentation",
"Team Inbox",
"Live Chat Dashboard",
"Custom Quick Replies",
"Notes Feature",
"Agent Transfer Monitoring",
"Contact Import",
"Multi Agent Chat",
"Template Library Access",
"Create Message Templates",
"Campaign Scheduler",
"Smart Routing",
"Campaign Click Tracking",
"Carousel Click Tracking",
"CSV Campaign Scheduler",
"Developer API",
"Integration Marketplace",
"Round Robin Assignment",
"Automated Follow Ups",
"Google Sheet Integration Free"
        ],
         limit:[
          "Team Members - Unlimited",
          "Team Roles - Unlimited",
          "Max Tags - Unlimited",
          "Max Tags - Unlimited",
          "Max Contacts Import - Unlimited",
          "Webhook Limit - 5"
        ],
        chatbots:[
          "Include Flows - 5",
          "Extra Flow - Additional Price"
        ]
      },
      
    ]
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    {
      title: "Your Growth Slowed Down? Supercharge It With WhatsApp Automation.",
      text: "Reach customers instantly, deliver smarter campaigns, and automate conversions - all inside the inbox they check 50+ times a day."
    },
    {
      title: "Every Message Is a Lead. Every Lead Deserves Automation.",
      text: "From inquiry to purchase - automate the entire customer journey with personalized drips, chatbots, and AI-driven replies."
    },
    {
      title: "Scale Your Business 10× Without Hiring 10× the Team.",
      text: "Let automation handle onboarding, support, promotions, and conversions - so your team focuses on growth while Qmize does the rest."
    }
  ];
  return (
   <div className="min-h-screen w-full bg-black relative overflow-hidden">
  {/* Emerald Spotlight Background */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      background: `
        radial-gradient(
          circle at center,
          rgba(34, 197, 94, 0.12) 0%,
          rgba(34, 197, 94, 0.06) 20%,
          rgba(0, 0, 0, 0.0) 60%
        )
      `,
    }}
  />
  
{/* navbar */}
   <div className="w-full fixed top-0 left-0 z-50">
      <nav
        className="
        w-[92%] mx-auto mt-3
        flex items-center justify-between 
        backdrop-blur-xl bg-white/10 
        border border-white/20 
        rounded-3xl md:rounded-[15px] 
        py-3 px-5 md:px-8
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      "
      >
        {/* LEFT SIDE LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <p className="text-white font-semibold text-lg">Qmize</p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-5 text-white">
          <a  href="#pricing"><button className="nav-btn cursor-pointer">Offer Plans</button></a>
          <a  href="#testinomials"><button className="nav-btn cursor-pointer">Testimonials</button></a>
         <a href="https://apihub.msg24x7.com/register" target="blank"> <button className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md cursor-pointer">
            Login
          </button></a>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button
            className="text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {menuOpen && (
        <div
          className="
          w-[92%] mx-auto mt-2
          backdrop-blur-xl bg-white/10 border border-white/20
          rounded-2xl py-4 px-5 text-white
          flex flex-col gap-4
          animate-slideDown
        "
        >
          <a href="#pricing"><button className="nav-btn w-full text-left">Offer Plans</button></a>
          <a href="#testinomials"><button className="nav-btn w-full text-left">Testimonials</button></a>
          <button className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 shadow-md">
            Login
          </button>
        </div>
      )}
    </div>


    {/* hero section */}

    <div className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-4 mt-20">

  {/* Top Badge */}
  <div className="mb-6 animate-fadeUp delay-100">
    <span className="px-5 py-1 rounded-full text-xs tracking-wide text-white bg-white/10 backdrop-blur-md border border-white/20">
      ✦ DIGITAL MARKETING COMPANY
    </span>
  </div>

  {/* Hero Heading */}
  <h1 className="text-white font-semibold leading-tight text-[32px] md:text-[58px] lg:text-[64px] space-y-3">

    <span className="block animate-fadeUp delay-200">
      Reimagine the
    </span>

    {/* Animated “Future of Marketing” */}
    <span className="relative inline-block animate-highlightSlide delay-500">
      <span className="relative z-10  text-green-400">WhatsApp </span>
      <span className="relative z-10  "> Marketing</span>
      <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-transparent blur-xl rounded-xl"></span>
    </span>

    <span className="block animate-fadeUp delay-300">
      With
    </span>

    {/* Animated “Qmize” */}
    <span className="relative inline-block group animate-qmizeGlowSlow">

  {/* Outer Floating Glow Ring */}
  <span className="absolute -inset-3 rounded-xl bg-emerald-500/20 blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700"></span>

  {/* Shimmering Gradient Border */}
  <span className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-green-950 via-green-600 to-green-950 opacity-80 group-hover:opacity-100 animate-borderGlow"></span>

  {/* Inner Glass Highlight */}
  <span className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-xl"></span>

  {/* Moving Light Beam */}
  <span className="absolute inset-0 overflow-hidden rounded-xl">
    <span className="absolute left-[-100%] top-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-lightSweep"></span>
  </span>

  {/* Floating Particles */}
  <span className="absolute -top-2 left-3 w-2 h-2 rounded-full bg-emerald-300 animate-floatParticle"></span>
  <span className="absolute bottom-1 right-2 w-1.5 h-1.5 rounded-full bg-white/50 animate-floatParticle delay-300"></span>

  {/* MAIN TEXT */}
  <span className="relative z-10 px-4 py-1 font-semibold tracking-wide bg-clip-text text-transparent 
      bg-gradient-to-r from-white via-emerald-200 to-white animate-textGlow">
    Qmize
  </span>

</span>

  </h1>

  {/* Subtitle */}
  <p className="mt-6 text-white/60 text-sm md:text-[15px] max-w-[650px] animate-fadeUp delay-800">
    Data, AI, & Creativity - Enhanced by WhatsApp Business API for better customer communication.
  </p>

  {/* Buttons */}
  <div className="flex gap-4 mt-8 animate-fadeUp delay-900">
   <a href="https://apihub.msg24x7.com/register"> <button className=" cursor-pointer px-7 py-2 rounded-full bg-white text-black font-medium hover:bg-white/80 transition-all">
      Get Started
    </button></a>

   <a href="https://apihub.msg24x7.com/register"> <button className=" cursor-pointer px-7 py-2 rounded-full border border-white/40 text-white hover:bg-white/10 transition-all">
      Book Demo
    </button></a>
  </div>

</div>

<div className="flex justify-center ">
  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex p-1">
    <button
      onClick={() => setPricingType("india")}
      className={`px-6 py-2 rounded-full text-sm transition-all ${
        pricingType === "india"
          ? "bg-emerald-500 text-black font-semibold"
          : "text-white/70 hover:text-white"
      }`}
    >
      Indian
    </button>

    <button
      onClick={() => setPricingType("international")}
      className={`px-6 py-2 rounded-full text-sm transition-all ${
        pricingType === "international"
          ? "bg-emerald-500 text-black font-semibold"
          : "text-white/70 hover:text-white"
      }`}
    >
      International
    </button>
  </div>
</div>





{pricingType === "india" && (
 <div id="pricing" className="w-full py-5 px-6 md:px-16 text-white">

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent animate-fadeUp">
        Upgrade Now to Supercharge Your Business (Indian Pricing)
      </h2>

      {/* Billing Toggle */}
      <div className="flex justify-center mt-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex p-1 gap-1">
          {[
            ["monthly", "Monthly"],
            ["quarterly", "Quarterly"],
            ["halfyearly", "Half-Yearly"],
            ["annually", "Annually"]
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setBilling(key)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                billing === key
                  ? "bg-emerald-500 text-black font-semibold shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-6 gap-2 mt-14 animate-fadeUp">

        {pricingData[billing].map((plan, idx) => (
          <div
  key={idx}
  className="
    group rounded-3xl border border-white/20 backdrop-blur-xl 
    hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]
    transition-all duration-500 
  "
>
  <div className="bg-black/40 p-7 rounded-3xl hover:bg-black/30 transition-all duration-500 flex flex-col h-full">

    {/* Title */}
    <h3 className="text-lg font-semibold leading-tight">{plan.name}</h3>

    {/* Price */}
    <p className="text-2xl font-bold mt-2 text-emerald-400">
      {plan.price}
      <span className="text-[9px] text-white/60"> + taxes</span>
    </p>


    {/* FREE SMS CREDITS */}
    <div className="mt-3 flex items-center gap-2 animate-fadeIn">
      <p className="text-[11px] text-white-300 font-medium tracking-wide leading-snug">
        Markup Fee:{" "}
        <span className="font-semibold">0%</span>
      </p>
    </div>

    {/* FREE SMS CREDITS */}
    <div className="mt-3 flex items-center gap-2 animate-fadeIn">
      <p className="text-[11px] text-emerald-300 font-medium tracking-wide leading-snug">
        Free Bulk SMS Credits:{" "}
        <span className="font-semibold">{plan.freeSms}</span> (Every Month)
      </p>
    </div>
    

    {/* LINE DIVIDER */}
    <div className="w-full h-[1px] bg-white/10 my-4"></div>

    {/* CONVERSATION PRICING */}
    <div>
      <h4 className="text-white/80 font-semibold text-xs mb-2">Conversation Pricing</h4>

      <ul className="space-y-1 text-sm">
        {plan.conversationPricing.map((cp, i) => (
          <li
            key={i}
            className="flex justify-between text-white/70 text-[11px] leading-tight"
          >
            <span>{cp.name}</span>
            <span>{cp.price}</span>
          </li>
        ))}
      </ul>
    </div>

        {/* LINE */}
    <div className="w-full h-[1px] bg-white/10 my-4"></div>

    <div className="mt-0 flex items-center gap-2 animate-fadeIn">
      <p className="text-[11px] text-emerald-300 font-medium tracking-wide leading-snug">
       Unlimited Free Service Chats
      </p>
    </div>

    {/* LINE */}
    <div className="w-full h-[1px] bg-white/10 my-4"></div>

    {/* FEATURES */}
    <div>
      <h4 className="font-semibold text-white/80 text-xs">Features</h4>

      <ul className="mt-3 space-y-2 text-[11px] leading-relaxed">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-2 h-2 mt-[6px] bg-emerald-400 rounded-full"></span>
            <span className="block">{f}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* LINE */}
    <div className="w-full h-[1px] bg-white/10 my-4"></div>

    {/* LIMITS SECTION */}
    <div className="">
      <h4 className="font-semibold text-white/80 text-xs">Limits</h4>

      <ul className="mt-3 space-y-2 text-[11px] leading-relaxed">
        {plan.limit.map((limit, i) => (
          <li key={i} className="flex gap-2">
            <span className="w-2 h-2 bg-white/30 rounded-full mt-[6px]"></span>
            <span className="text-white/70">{limit}</span>
          </li>
        ))}
      </ul>
    </div>


    <div className="w-full h-[1px] bg-white/10 my-4"></div>

     <div className="">
      <h4 className="font-semibold text-white/80 text-xs">Chatbots - ₹2999 (Charged Separately)</h4>

      <ul className="mt-3 space-y-2 text-[11px] leading-relaxed">
        {plan.chatbots.map((limit, i) => (
          <li key={i} className="flex gap-2">
            <span className="w-2 h-2 bg-white/30 rounded-full mt-[6px]"></span>
            <span className="text-white/70">{limit}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="w-full h-[1px] bg-white/10 my-4"></div>


    {/* SUBSCRIBE BUTTON */}
<a
  href="https://apihub.msg24x7.com/register"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 block "
>
  <button
    className="
      relative w-full py-2.5 rounded-full font-semibold text-[14px]
      text-white bg-gradient-to-r from-emerald-500 to-green-400
      transition-all duration-300 overflow-hidden cursor-pointer
      hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
    "
  >
    {/* Floating Stars */}
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <svg className="absolute top-1 left-4 w-4 opacity-70 animate-twinkle" viewBox="0 0 24 24">
        <path fill="white" d="M12 17l-5 3 2-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 2 5z" />
      </svg>

      <svg className="absolute bottom-1 right-4 w-3 opacity-70 animate-twinkle-delay" viewBox="0 0 24 24">
        <path fill="white" d="M12 17l-5 3 2-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 2 5z" />
      </svg>
    </span>

    Subscribe Now →
  </button>
</a>






  </div>
</div>


        ))}

      </div>
    </div>
)}

{pricingType === "international" && (
 <div className="w-full py-5 px-6 md:px-16 text-white">

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent animate-fadeUp">
       Boost Your Business Instantly (International Pricing)
      </h2>

      {/* Billing Toggle */}
      <div className="flex justify-center mt-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex p-1 gap-1">
          {[
            ["monthly", "Monthly"],
            ["quarterly", "Quarterly"],
            ["halfyearly", "Half-Yearly"],
            ["annually", "Annually"]
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setBilling(key)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                billing === key
                  ? "bg-emerald-500 text-black font-semibold shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-6 gap-2 mt-14 animate-fadeUp">

        {pricingDataInt[billing].map((plan, idx) => (
          <div
  key={idx}
  className="
    group rounded-3xl border border-white/20 backdrop-blur-xl 
    hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]
    transition-all duration-500 
  "
>
  <div className="bg-black/40 p-7 rounded-3xl hover:bg-black/30 transition-all duration-500 flex flex-col h-full">

    {/* Title */}
    <h3 className="text-lg font-semibold leading-tight">{plan.name}</h3>

    {/* Price */}
    <p className="text-2xl font-bold mt-2 text-emerald-400">
      {plan.price}
      <span className="text-[9px] text-white/60"> + taxes</span>
    </p>


    {/* FREE SMS CREDITS */}
    <div className="mt-3 flex items-center gap-2 animate-fadeIn">
      <p className="text-[11px] text-white-300 font-medium tracking-wide leading-snug">
        Markup Fee:{" "}
        <span className="font-semibold">0%</span>
      </p>
    </div>

    {/* FREE SMS CREDITS */}
    <div className="mt-3 flex items-center gap-2 animate-fadeIn">
      <p className="text-[11px] text-emerald-300 font-medium tracking-wide leading-snug">
        Free Bulk SMS Credits:{" "}
        <span className="font-semibold">{plan.freeSms}</span> (Every Month)
      </p>
    </div>
    

    {/* LINE DIVIDER */}
    <div className="w-full h-[1px] bg-white/10 my-4"></div>

    {/* CONVERSATION PRICING */}
    
  <a
  href="https://business.whatsapp.com/products/platform-pricing"
  target="_blank"
  rel="noopener noreferrer"
  className=" block "
>
  <button
    className="
      relative w-full py-2 rounded-full font-semibold text-[9px] mb-5
      text-white bg-gradient-to-br from-sky-500 to-blue-400
      transition-all duration-300 overflow-hidden cursor-pointer
      hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
    "
  >
    {/* Floating Stars */}
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <svg className="absolute top-1 left-4 w-4 opacity-70 animate-twinkle" viewBox="0 0 24 24">
        <path fill="white" d="M12 17l-5 3 2-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 2 5z" />
      </svg>

      <svg className="absolute bottom-1 right-4 w-3 opacity-70 animate-twinkle-delay" viewBox="0 0 24 24">
        <path fill="white" d="M12 17l-5 3 2-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 2 5z" />
      </svg>
    </span>

    META MESSAGES PRICING →
  </button>
</a>

    

    <div className="mt-0 flex items-center gap-2 animate-fadeIn">
      <p className="text-[11px] text-emerald-300 font-medium tracking-wide leading-snug">
       Unlimited Free Service Chats
      </p>
    </div>

    {/* LINE */}
    <div className="w-full h-[1px] bg-white/10 my-4"></div>

    {/* FEATURES */}
    <div>
      <h4 className="font-semibold text-white/80 text-xs">Features</h4>

      <ul className="mt-3 space-y-2 text-[11px] leading-relaxed">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-2 h-2 mt-[6px] bg-emerald-400 rounded-full"></span>
            <span className="block">{f}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* LINE */}
    <div className="w-full h-[1px] bg-white/10 my-4"></div>

    {/* LIMITS SECTION */}
    <div className="">
      <h4 className="font-semibold text-white/80 text-xs">Limits</h4>

      <ul className="mt-3 space-y-2 text-[11px] leading-relaxed">
        {plan.limit.map((limit, i) => (
          <li key={i} className="flex gap-2">
            <span className="w-2 h-2 bg-white/30 rounded-full mt-[6px]"></span>
            <span className="text-white/70">{limit}</span>
          </li>
        ))}
      </ul>
    </div>


    <div className="w-full h-[1px] bg-white/10 my-4"></div>

     <div className="">
      <h4 className="font-semibold text-white/80 text-xs">Chatbots - $35 (Charged Separately)</h4>

      <ul className="mt-3 space-y-2 text-[11px] leading-relaxed">
        {plan.chatbots.map((limit, i) => (
          <li key={i} className="flex gap-2">
            <span className="w-2 h-2 bg-white/30 rounded-full mt-[6px]"></span>
            <span className="text-white/70">{limit}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="w-full h-[1px] bg-white/10 my-4"></div>


    {/* SUBSCRIBE BUTTON */}
<a
  href="https://apihub.msg24x7.com/register"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 block "
>
  <button
    className="
      relative w-full py-2.5 rounded-full font-semibold text-[14px]
      text-white bg-gradient-to-r from-emerald-500 to-green-400
      transition-all duration-300 overflow-hidden cursor-pointer
      hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]
    "
  >
    {/* Floating Stars */}
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <svg className="absolute top-1 left-4 w-4 opacity-70 animate-twinkle" viewBox="0 0 24 24">
        <path fill="white" d="M12 17l-5 3 2-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 2 5z" />
      </svg>

      <svg className="absolute bottom-1 right-4 w-3 opacity-70 animate-twinkle-delay" viewBox="0 0 24 24">
        <path fill="white" d="M12 17l-5 3 2-5-4-3 5-.5L12 7l2 4.5 5 .5-4 3 2 5z" />
      </svg>
    </span>

    Subscribe Now →
  </button>
</a>






  </div>
</div>


        ))}

      </div>
    </div>
    )}









{/* cards section */}

<div className="relative w-full py-32 px-6 md:px-20 text-white">

      {/* Background Spotlight + Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-green-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] left-[10%] w-[250px] h-[250px] bg-black/10 blur-[100px] rounded-full"></div>

        {/* Floating dots */}
        <div className="floating-dot left-[20%] top-[30%]"></div>
        <div className="floating-dot left-[60%] top-[50%]"></div>
        <div className="floating-dot left-[80%] top-[20%]"></div>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-10">

        {sections.map((sec, i) => (
          <div
            key={i}
            className="group p-[2px] rounded-3xl bg-gradient-to-br from-black/60 to-emerald-700/70 backdrop-blur-xl 
            hover:shadow-[0_0_35px_rgba(34,197,94,0.4)] transition-all duration-500"
          >
            <div className="rounded-3xl h-full p-8 bg-black/40 backdrop-blur-2xl 
              group-hover:bg-black/30 transition-all duration-500 cursor-pointer 
              transform origin-center hover:-translate-y-2 hover:rotate-[0.8deg]"
            >
              <h2 className="text-[26px] md:text-[34px] font-semibold leading-tight 
                bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent
                animate-slideUp"
              >
                {sec.title}
              </h2>

              <p className="mt-4 text-white/60 text-sm md:text-base animate-fadeUp delay-200">
                {sec.text}
              </p>

              {/* Accent Line */}
              <div className="mt-6 h-[2px] w-20 bg-emerald-400/60 group-hover:w-28 transition-all duration-500"></div>
            </div>
          </div>
        ))}

      </div>
    </div>



    <section className="w-full  px-6 md:px-20 text-white">

  {/* HEADING */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h2 className="
      text-3xl md:text-5xl font-bold 
      bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent
      animate-fadeUp
    ">
      Scale Your Business Faster With
      <span className="text-green-500"> WhatsApp Business API</span> 
    </h2>

    <p className="text-white/60 mt-4 md:text-lg animate-fadeUp delay-200">
      Convert leads instantly, automate customer journeys, boost retention and  
      give your business the superpower of real-time engagement.
    </p>
  </div>

  {/* BENEFIT CARDS */}
  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

    {/* CARD 1 */}
    <div className="
      bg-black/40 border border-white/10 rounded-3xl p-7 backdrop-blur-xl 
      hover:bg-black/30 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]
      transition-all duration-500 animate-fadeUp
    ">
      <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
        <svg className="w-7 h-7 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 6h-2V3H5v3H3v15h18V6zm-4 0H7V5h10v1zm-1 12H8v-2h8v2zm3-4H5v-2h14v2z"/>
        </svg>
      </div>

      <h3 className="text-xl font-semibold mt-5">Instant Lead Conversion</h3>
      <p className="text-white/60 text-sm mt-2 leading-relaxed">
        Respond instantly to new leads, send auto-followups and convert 3x  
        faster with WhatsApp automation flows.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="
      bg-black/40 border border-white/10 rounded-3xl p-7 backdrop-blur-xl 
      hover:bg-black/30 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]
      transition-all duration-500 animate-fadeUp delay-200
    ">
      <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
        <svg className="w-7 h-7 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 7h-1V3H9v4H8L12 11l4-4zm-4 6l-4 4h1v4h6v-4h1l-4-4z" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold mt-5">Automated Customer Journeys</h3>
      <p className="text-white/60 text-sm mt-2 leading-relaxed">
        Build powerful automation: abandoned cart recovery, onboarding,  
        remarketing, reminders & drip campaigns.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="
      bg-black/40 border border-white/10 rounded-3xl p-7 backdrop-blur-xl 
      hover:bg-black/30 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]
      transition-all duration-500 animate-fadeUp delay-300
    ">
      <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
        <svg className="w-7 h-7 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 21h-1l-5-5 5-5h1v3h8v4h-8v3zm2-18h1l5 5-5 5h-1v-3H5V6h8V3z"/>
        </svg>
      </div>

      <h3 className="text-xl font-semibold mt-5">Higher Retention & Repeat Sales</h3>
      <p className="text-white/60 text-sm mt-2 leading-relaxed">
        Send personalized offers, alerts and notifications that keep  
        customers coming back automatically.
      </p>
    </div>
  </div>

  {/* CTA SECTION */}
  <div className="text-center mt-16 animate-fadeUp">
    <a
      href="#pricing"
      className="
        inline-block px-10 py-3 rounded-full font-semibold
        bg-gradient-to-r from-emerald-500 to-green-400
        text-black shadow-lg hover:scale-105 transition-all duration-300
      "
    >
      Explore WhatsApp API Plans →
    </a>
  </div>
</section>












   

   






    {/* brand */}

    <div className="w-full mt-10 py-10 text-white">

  {/* Heading */}
  <h2
    className="
      text-center text-2xl md:text-4xl font-bold 
      bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent
      mb-10
    "
  >
    Trusted by Leading Brands Who Grow Faster With Qmize
  </h2>

  {/* Marquee Wrapper */}
  <div className="relative overflow-hidden py-4">

    {/* Gradient Fade */}
    <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
    <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

    {/* FIXED MARQUEE TRACK */}
    <div
      className="flex gap-14 animate-marquee whitespace-nowrap"
      style={{ width: "max-content" }}
    >
      {brands.concat(brands).map((logo, index) => (
        <img
          key={index}
          src={logo}
          className="h-10 opacity-80 hover:opacity-100 transition-all duration-300 flex-shrink-0"
          alt="Brand Logo"
        />
      ))}
    </div>
  </div>
</div>



    <section className="w-full py-20 px-6 md:px-20 text-white">

      {/* HEADING */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="
          text-3xl md:text-5xl font-bold
          bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent
        ">
          Video Testimonial
        </h2>

        <p className="text-white/60 mt-3 md:text-lg">
          Hear directly from businesses using Qmize to scale their customer engagement.
        </p>
      </div>

      {/* SINGLE VIDEO CARD */}
      <div className="
        max-w-3xl mx-auto group rounded-3xl p-[2px]
        bg-gradient-to-br from-white/10 to-emerald-400/20
        backdrop-blur-xl transition-all duration-500
        hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]
        hover:scale-[1.03]
      ">
        <div className="relative bg-black/40 rounded-3xl overflow-hidden">

          {/* Animated Play Overlay */}
          {/* <div className="
            absolute inset-0 flex items-center justify-center pointer-events-none
            opacity-0 group-hover:opacity-100 transition-all duration-500
          ">
            <div className="
              w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl 
              border border-white/20 flex items-center justify-center
              animate-pulseSlow
            ">
              
            </div>
          </div> */}

          {/* VIDEO IFRAME */}
          <iframe
            className="w-full h-64 md:h-96 rounded-3xl"
            src={videoUrl}
            title="Video Testimonial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Caption */}
        <p className="text-center text-white/70 mt-4 pb-4 text-sm">
          “Qmize made our WhatsApp automation seamless. 10x results!”
        </p>
      </div>
    </section>








          <section id="testinomials" className="w-full py-20 px-6 md:px-20 text-white">

  {/* HEADING SECTION */}
  <div className="text-center mb-14 max-w-4xl mx-auto">
    <h2 className="
      text-3xl md:text-5xl font-bold
      bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent
    ">
      What Our Customers Say About Us
    </h2>

    <p className="text-white/60 mt-3 md:text-lg">
      Real experiences. Real results. Trusted by thousands of businesses who use Qmize 
      to automate conversations and grow faster.
    </p>
  </div>

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

    {/* LEFT SECTION — IMAGE STACK */}
    <div className="relative w-[260px] h-[350px] md:w-[300px] md:h-[400px]">

      {/* BACK CARD */}
      <img
        src={current.image}
        className="absolute w-full h-full object-cover rounded-3xl opacity-40 scale-90 blur-sm
        transition-all duration-700"
      />

      {/* MID CARD */}
      <img
        src={current.image}
        className="absolute w-full h-full object-cover rounded-3xl opacity-60 scale-95 rotate-6
        transition-all duration-700"
      />

      {/* FRONT CARD */}
      <img
        src={current.image}
        className="absolute w-full h-full object-cover rounded-3xl shadow-xl 
        transition-all duration-700"
      />
    </div>

    {/* RIGHT SECTION — TEXT */}
    <div key={index} className="flex-1 fade-slide">
      <h3 className="text-xl md:text-2xl font-bold">{current.name}</h3>
      <p className="text-white/60 text-sm md:text-base">{current.role}</p>

      <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
        {current.text}
      </p>

      {/* NAV BUTTONS */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 
          flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 
          flex items-center justify-center hover:bg-white/20 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  </div>
</section>






<section className="w-full py-20 px-6 md:px-20 text-white">

      {/* HEADING */}
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <h2 className="
          text-3xl md:text-5xl font-bold
          bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent
        ">
          Frequently Asked Questions
        </h2>

        <p className="text-white/60 mt-3 md:text-lg">
          Everything you need to know about WhatsApp Business API and our platform.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl mx-auto space-y-5">

        {faqData.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className={`
                rounded-2xl backdrop-blur-xl border transition-all duration-300
                ${isOpen ? "border-emerald-400/60 bg-white/10 shadow-[0_0_25px_rgba(16,185,129,0.4)]" 
                         : "border-white/10 bg-white/5 hover:bg-white/10"}
              `}
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-lg font-medium">{item.q}</span>

                <ChevronDown
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-400" : ""}`}
                  size={22}
                />
              </button>

              {/* ANSWER */}
              <div
                className={`
                  px-6 overflow-hidden transition-all duration-300
                  ${isOpen ? "max-h-40 mb-4 text-white/70" : "max-h-0"}
                `}
              >
                {item.a}
              </div>
            </div>
          );
        })}

      </div>
    </section>








        {/* footer */}


        <footer className="w-full border-t border-white/10 bg-black/40 backdrop-blur-xl text-white py-12 px-6 md:px-20">

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-72">

    {/* LOGO + BRAND */}
    <div>
      <div className="flex items-center gap-3">
        <img src="/logo.png" className="w-12" alt="Qmize Logo" />
        <h3 className="text-xl font-semibold">Qmize</h3>
      </div>

      <p className="text-white/60 mt-3 text-sm leading-relaxed">
        Empowering businesses with automation, analytics, and WhatsApp Business API solutions.
      </p>
    </div>

    {/* CONTACT DETAILS */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

      <ul className="space-y-2 text-white/70 text-sm">
        <li>
          📞 <span className="ml-1">+91 - 9031011559</span>
        </li>
        <li>
          📧 <span className="ml-1">support@msg24x7.com</span>
        </li>
        <li className="flex items-start">
          📍 <span className="ml-1">
            2nd Floor, G.R Tower, opp. Railway Hospital, Gaya, Bihar 823001
          </span>
        </li>
      </ul>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

      <ul className="space-y-2 text-white/70 text-sm">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">Pricing</li>
        <li className="hover:text-white cursor-pointer">Features</li>
        <li className="hover:text-white cursor-pointer">Testimonials</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>
    </div>

  </div>

  {/* BOTTOM COPYRIGHT BAR */}
  <div className="w-full text-center mt-12 pt-6 border-t border-white/10 text-white/50 text-sm">
    © {new Date().getFullYear()} Qmize. All Rights Reserved.
  </div>

</footer>


















</div>
  )
}

export default App
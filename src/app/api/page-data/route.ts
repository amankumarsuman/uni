import { NextResponse } from 'next/server'
import {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from '@/app/types/menu'

const avatarList: avatar[] = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList: brand[] = [
  {
    image: '/images/home/brand/brand-icon-1.svg',
    darkImg: '/images/home/brand/brand-darkicon-1.svg',
    title: 'Adobe',
  },
  {
    image: '/images/home/brand/brand-icon-2.svg',
    darkImg: '/images/home/brand/brand-darkicon-2.svg',
    title: 'Figma',
  },
  {
    image: '/images/home/brand/brand-icon-3.svg',
    darkImg: '/images/home/brand/brand-darkicon-3.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/brand/brand-icon-4.svg',
    darkImg: '/images/home/brand/brand-darkicon-4.svg',
    title: 'Dribble',
  },
  {
    image: '/images/home/brand/brand-icon-5.svg',
    darkImg: '/images/home/brand/brand-darkicon-5.svg',
    title: 'Webflow',
  },
]

const innovationList: innovation[] = [
  {
    image: '/images/home/innovation/brand.svg',
    title: 'Brand\nStrategy',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'Digital\nMarketing',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'UI/UX\nDesign',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'Analytics &\nReporting',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Web\nDevelopment',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList: onlinePresence[] = [
  {
    image: '/images/home/onlinePresence/online_img_1.jpg',
    title: 'Block Chain Application',
    tag: ['UX Research', 'Interface Design'],
    link: '',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'LMS',
    tag: ['Product Design', 'Interaction Design','Educational Software'],
    link: '',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'EHR',
    tag: ['Brand identity design', 'UX Research','Healthcare Software'],
    link: '',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'Ecommerce App',
    tag: ['Visual Storytelling', 'Web & Mobile Design','Grocery App'],
    link: '',
  },
]

const creativeMindList: creativeMind[] = [
   {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Rahul Baksariya',
    position: 'FOUNDER & CEO (Social Media Specialist)',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/aman.jpg',
    name: 'Aman Kumar',
    position: 'CO-FOUNDER & CTO ',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://www.linkedin.com/in/aman-kumar-b683b614b/',
  },
 
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Parul Giri',
    position: 'Product Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Utkarsh Kumar',
    position: 'Software Developer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Dilip Kumar',
    position: 'Software Developer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Creativity',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Innovation',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Strategy',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: 'bg-green',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Village/Women Entrepreneur',
    plan_descp: 'Special package to promote rural and women-led businesses',
    plan_price: '₹4,999',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      '1 Year .in Domain + Hosting',
      '5 Business Email Accounts',
      'Basic Website (5 Pages)',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      '1 Year Technical Support'
    ],
    // badge: 'Empowering Rural India'
  },
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Starter',
    plan_descp: 'For businesses needing basic e-commerce capabilities',
    plan_price: '₹9,999',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Everything in Village Plan',
      'Basic E-commerce Application',
      'Product Management (Up to 50)',
      'Payment Gateway Integration',
      'Order Management System',
      'Basic Analytics Dashboard'
    ]
  },
  {
    plan_bg_color: 'bg-pink',
    text_color: 'text-white',
    descp_color: 'white/80',
    border_color: 'border-white/20',
    plan_name: 'Grocery Delivery',
    plan_descp: 'Specialized solution for local grocery businesses',
    plan_price: '₹6,999',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Grocery-specific E-commerce App',
      'Inventory Management',
      'Delivery Zone Configuration',
      'Real-time Order Tracking',
      'Mobile App for Delivery Agents',
      'Basic Vendor Management'
    ],
    // badge: 'Local Business Focus'
  },
  {
    plan_bg_color: 'bg-blue',
    text_color: 'text-white',
    descp_color: 'white/80',
    border_color: 'border-white/20',
    plan_name: 'E-commerce Basic',
    plan_descp: 'Standard online store solution',
    plan_price: '₹6,999',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      'Custom E-commerce Website',
      'Up to 100 Products',
      'Multiple Payment Options',
      'Basic Marketing Tools',
      'Order Processing System',
      '6 Months Support'
    ]
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Enterprise Pro',
    plan_descp: 'End-to-end solution for established businesses',
    plan_price: '₹24,999',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Everything in Starter Plan',
      'Admin Management Portal',
      'Amazon Seller Registration',
      'Professional Branding Package',
      'Multi-platform Sync Dashboard',
      'Digital Marketing Campaign Setup',
      'Advanced Analytics',
      'Priority Support'
    ],
    // highlight: true
  }
];

const faqList: faq[] = [
  {
    faq_que: 'What services does Unibazar offer?',
    faq_ans:
      'Yes, we provide All Types of Application & post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'How long does a typical project take?',
    faq_ans:
      'The timeline for a project varies based on its complexity and scope. On average, a project can take anywhere from 4 to 12 weeks from initial consultation to final delivery.',
  },
  {
    faq_que: 'How is pricing structured at Unibazar Agency?',
    faq_ans:
      'Our pricing is project-based and depends on the specific requirements and scope of work. We provide detailed quotes after understanding your needs during the initial consultation.',
  },
  {
    faq_que: 'Do you offer ongoing support after project completion?',
    faq_ans:
      'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.',
  },
  {
    faq_que: 'How often will I receive updates on my project?',
    faq_ans:
      'We believe in transparent communication. Clients receive regular updates through scheduled meetings, emails, or project management tools, depending on their preference.',
  },
  // {
  //   faq_que: 'How often will I receive updates on my project?',
  //   faq_ans:
  //     '',
  // },
]

const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Framer Awards',
    title:
      'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2025',
    url: '',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Dribbble Awards',
    title: 'Recognized for creative excellence and innovative design solutions',
    year: '2024',
    url: '',
  },
  // {
  //   icon: '/images/home/achievement/awward_award.svg',
  //   dark_icon: '/images/home/achievement/dark_awward_award.svg',
  //   sub_title: 'awwwards Awards',
  //   title:
  //     'Honored with the Best Website Design for creativity, usability, and innovation.',
  //   year: '2022',
  //   url: 'https://www.framer.com/@wrap-pixel/',
  // },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};

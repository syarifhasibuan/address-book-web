const contactsDefault = [
  {
    id: 1,
    name: "David Evans",
    nickname: "Dave",
    email: "david@evans.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "234-567-8904",
    },
    workInfo: {
      jobTitle: "Software Tester",
      department: "QA",
      company: "TestCo",
    },
    address: {
      street: "2929 Birch St",
      city: "Summit",
      state: "USA",
      zip: "70770",
    },
    group: "friends",
    createdAt: "2022-09-18",
    isFavorited: false,
  },
  {
    id: 2,
    name: "Grace Harris",
    nickname: "Gracie",
    email: "grace@harris.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "567-890-1237",
    },
    workInfo: {
      jobTitle: "Marketing Coordinator",
      department: "Marketing",
      company: "MarketCo",
    },
    address: {
      street: "3232 Willow St",
      city: "Ridge",
      state: "USA",
      zip: "10111",
    },
    group: "friends",
    createdAt: "2021-07-10",
    isFavorited: false,
  },
  {
    id: 3,
    name: "Oscar Perez",
    nickname: "Ozzy",
    email: "oscar@perez.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "789-012-3457",
    },
    workInfo: {
      jobTitle: "Accountant",
      department: "Finance",
      company: "Money Matters",
    },
    address: {
      street: "1414 Dogwood St",
      city: "Lakeside",
      state: "USA",
      zip: "10101",
    },
    group: "friends",
    createdAt: "2023-03-28",
    isFavorited: false,
  },
  {
    id: 4,
    name: "Henry Irving",
    nickname: "Hank",
    email: "henry@irving.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "678-901-2348",
    },
    workInfo: {
      jobTitle: "Operations Specialist",
      department: "Operations",
      company: "OpsCo",
    },
    address: {
      street: "3333 Aspen St",
      city: "Plateau",
      state: "USA",
      zip: "20221",
    },
    group: "work",
    createdAt: "2020-11-29",
    isFavorited: false,
  },
  {
    id: 5,
    name: "Ian Jackson",
    nickname: "IJ",
    email: "ian@jackson.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "123-456-7891",
    },
    workInfo: {
      jobTitle: "Financial Analyst",
      department: "Finance",
      company: "Finance Pro",
    },
    address: {
      street: "808 Willow St",
      city: "Uptown",
      state: "USA",
      zip: "44545",
    },
    group: "friends",
    createdAt: "2017-06-14",
    isFavorited: false,
  },
  {
    id: 6,
    name: "John Doe",
    nickname: "Johnny",
    email: "john@doe.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "123-456-7890",
    },
    workInfo: {
      jobTitle: "Software Engineer",
      department: "Engineering",
      company: "Acme Inc.",
    },
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "USA",
      zip: "12345",
    },
    group: "",
    createdAt: "2021-08-15",
    isFavorited: false,
  },
  {
    id: 7,
    name: "Kevin Lewis",
    nickname: "Kev",
    email: "kevin@lewis.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "345-678-9013",
    },
    workInfo: {
      jobTitle: "IT Specialist",
      department: "IT",
      company: "Tech Support",
    },
    address: {
      street: "1010 Poplar St",
      city: "Suburbia",
      state: "USA",
      zip: "66767",
    },
    group: "",
    createdAt: "2019-01-19",
    isFavorited: false,
  },
  {
    id: 8,
    name: "Michael Nelson",
    nickname: "Mike",
    email: "michael@nelson.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "567-890-1235",
    },
    workInfo: {
      jobTitle: "Business Analyst",
      department: "Business",
      company: "Biz Solutions",
    },
    address: {
      street: "1212 Palm St",
      city: "Capital City",
      state: "USA",
      zip: "88989",
    },
    group: "work",
    createdAt: "2021-09-21",
    isFavorited: false,
  },
  {
    id: 9,
    name: "Nina Owens",
    nickname: "Nini",
    email: "nina@owens.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "678-901-2346",
    },
    workInfo: {
      jobTitle: "Recruiter",
      department: "HR",
      company: "Hire Me",
    },
    address: {
      street: "1313 Magnolia St",
      city: "Seaside",
      state: "USA",
      zip: "99090",
    },
    group: "",
    createdAt: "2022-12-15",
    isFavorited: false,
  },
  {
    id: 10,
    name: "Paula Quinn",
    nickname: "PQ",
    email: "paula@quinn.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "890-123-4568",
    },
    workInfo: {
      jobTitle: "Legal Advisor",
      department: "Legal",
      company: "Law Firm",
    },
    address: {
      street: "1515 Cherry St",
      city: "Riverside",
      state: "USA",
      zip: "20202",
    },
    group: "work",
    createdAt: "2022-07-11",
    isFavorited: false,
  },
  {
    id: 11,
    name: "Quincy Roberts",
    nickname: "Q",
    email: "quincy@roberts.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "901-234-5679",
    },
    workInfo: {
      jobTitle: "Research Scientist",
      department: "Research",
      company: "Lab Co.",
    },
    address: {
      street: "1616 Walnut St",
      city: "Hilltop",
      state: "USA",
      zip: "30303",
    },
    group: "",
    createdAt: "2021-11-30",
    isFavorited: false,
  },
  {
    id: 12,
    name: "Rachel Scott",
    nickname: "Rach",
    email: "rachel@scott.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "012-345-6780",
    },
    workInfo: {
      jobTitle: "Event Planner",
      department: "Events",
      company: "Eventful",
    },
    address: {
      street: "1717 Maple St",
      city: "Valley",
      state: "USA",
      zip: "40404",
    },
    group: "friends",
    createdAt: "2020-02-17",
    isFavorited: false,
  },
  {
    id: 13,
    name: "Sam Taylor",
    nickname: "Sammy",
    email: "sam@taylor.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "123-456-7892",
    },
    workInfo: {
      jobTitle: "Logistics Coordinator",
      department: "Logistics",
      company: "LogiCo",
    },
    address: {
      street: "1818 Pine St",
      city: "Mountain",
      state: "USA",
      zip: "50505",
    },
    group: "work",
    createdAt: "2019-06-25",
    isFavorited: false,
  },
  {
    id: 14,
    name: "Tina Underwood",
    nickname: "T",
    email: "tina@underwood.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "234-567-8903",
    },
    workInfo: {
      jobTitle: "Public Relations",
      department: "PR",
      company: "PR Pros",
    },
    address: {
      street: "1919 Birch St",
      city: "Forest",
      state: "USA",
      zip: "60606",
    },
    group: "",
    createdAt: "2018-10-09",
    isFavorited: false,
  },
  {
    id: 15,
    name: "Ursula Vance",
    nickname: "Urs",
    email: "ursula@vance.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "345-678-9014",
    },
    workInfo: {
      jobTitle: "Quality Assurance",
      department: "QA",
      company: "Quality Check",
    },
    address: {
      street: "2020 Cedar St",
      city: "Desert",
      state: "USA",
      zip: "70707",
    },
    group: "friends",
    createdAt: "2017-01-03",
    isFavorited: false,
  },
  {
    id: 16,
    name: "Victor White",
    nickname: "Vic",
    email: "victor@white.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "456-789-0125",
    },
    workInfo: {
      jobTitle: "Security Specialist",
      department: "Security",
      company: "Secure It",
    },
    address: {
      street: "2121 Redwood St",
      city: "Oasis",
      state: "USA",
      zip: "80808",
    },
    group: "work",
    createdAt: "2016-05-22",
    isFavorited: false,
  },
  {
    id: 17,
    name: "Wendy Xander",
    nickname: "Wen",
    email: "wendy@xander.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "567-890-1236",
    },
    workInfo: {
      jobTitle: "Supply Chain Manager",
      department: "Supply Chain",
      company: "Supply Co.",
    },
    address: {
      street: "2222 Willow St",
      city: "Harbor",
      state: "USA",
      zip: "90909",
    },
    group: "",
    createdAt: "2015-09-14",
    isFavorited: false,
  },
  {
    id: 18,
    name: "Xander Young",
    nickname: "Xan",
    email: "xander@young.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "678-901-2347",
    },
    workInfo: {
      jobTitle: "Technical Writer",
      department: "Documentation",
      company: "DocuWrite",
    },
    address: {
      street: "2323 Aspen St",
      city: "Bay",
      state: "USA",
      zip: "10110",
    },
    group: "friends",
    createdAt: "2016-12-01",
    isFavorited: false,
  },
  {
    id: 19,
    name: "Yvonne Zane",
    nickname: "Yve",
    email: "yvonne@zane.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "789-012-3458",
    },
    workInfo: {
      jobTitle: "Product Owner",
      department: "Product",
      company: "ProdCo",
    },
    address: {
      street: "2424 Poplar St",
      city: "Cove",
      state: "USA",
      zip: "20220",
    },
    group: "work",
    createdAt: "2017-03-19",
    isFavorited: false,
  },
  {
    id: 20,
    name: "Zachary Adams",
    nickname: "Zach",
    email: "zachary@adams.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "890-123-4569",
    },
    workInfo: {
      jobTitle: "Network Engineer",
      department: "IT",
      company: "NetCo",
    },
    address: {
      street: "2525 Cypress St",
      city: "Shore",
      state: "USA",
      zip: "30330",
    },
    group: "",
    createdAt: "2018-07-04",
    isFavorited: false,
  },
  {
    id: 21,
    name: "Ava Baker",
    nickname: "Avie",
    email: "ava@baker.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "901-234-5670",
    },
    workInfo: {
      jobTitle: "Social Media Manager",
      department: "Marketing",
      company: "Socialize",
    },
    address: {
      street: "2626 Cherry St",
      city: "Cliff",
      state: "USA",
      zip: "40440",
    },
    group: "friends",
    createdAt: "2019-11-27",
    isFavorited: false,
  },
  {
    id: 22,
    name: "Ben Carter",
    nickname: "Benny",
    email: "ben@carter.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "012-345-6781",
    },
    workInfo: {
      jobTitle: "DevOps Engineer",
      department: "Engineering",
      company: "DevOps Co.",
    },
    address: {
      street: "2727 Maple St",
      city: "Hill",
      state: "USA",
      zip: "50550",
    },
    group: "work",
    createdAt: "2020-02-14",
    isFavorited: false,
  },
  {
    id: 23,
    name: "Chloe Davis",
    nickname: "Chlo",
    email: "chloe@davis.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "123-456-7893",
    },
    workInfo: {
      jobTitle: "HR Specialist",
      department: "HR",
      company: "HR Solutions",
    },
    address: {
      street: "2828 Pine St",
      city: "Peak",
      state: "USA",
      zip: "60660",
    },
    group: "",
    createdAt: "2021-06-01",
    isFavorited: false,
  },
  {
    id: 24,
    name: "Diana Evans",
    nickname: "Di",
    email: "diana@evans.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "678-901-2345",
    },
    workInfo: {
      jobTitle: "HR Manager",
      department: "Human Resources",
      company: "People First",
    },
    address: {
      street: "303 Birch St",
      city: "Oldtown",
      state: "USA",
      zip: "77889",
    },
    group: "work",
    createdAt: "2018-12-20",
    isFavorited: false,
  },
  {
    id: 25,
    name: "Ella Foster",
    nickname: "Ellie",
    email: "ella@foster.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "345-678-9015",
    },
    workInfo: {
      jobTitle: "Business Development",
      department: "Business",
      company: "BizDev",
    },
    address: {
      street: "3030 Cedar St",
      city: "Crest",
      state: "USA",
      zip: "80880",
    },
    group: "work",
    createdAt: "2023-12-05",
    isFavorited: false,
  },
  {
    id: 26,
    name: "Frank Green",
    nickname: "Frankie",
    email: "frank@green.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "456-789-0126",
    },
    workInfo: {
      jobTitle: "Systems Administrator",
      department: "IT",
      company: "SysAdmin Co.",
    },
    address: {
      street: "3131 Redwood St",
      city: "Bluff",
      state: "USA",
      zip: "90990",
    },
    group: "",
    createdAt: "2022-03-22",
    isFavorited: false,
  },
  {
    id: 27,
    name: "George Harris",
    nickname: "Geo",
    email: "george@harris.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "901-234-5678",
    },
    workInfo: {
      jobTitle: "Project Manager",
      department: "Projects",
      company: "Manage It",
    },
    address: {
      street: "606 Fir St",
      city: "Largetown",
      state: "USA",
      zip: "22323",
    },
    group: "work",
    createdAt: "2015-11-11",
    isFavorited: false,
  },
  {
    id: 28,
    name: "Hannah Irving",
    nickname: "Han",
    email: "hannah@irving.com",
    name: "Henry Irving",
    nickname: "Hank",
    email: "henry@irving.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "678-901-2348",
    },
    workInfo: {
      jobTitle: "Operations Specialist",
      department: "Operations",
      company: "OpsCo",
    },
    address: {
      street: "3333 Aspen St",
      city: "Plateau",
      state: "USA",
      zip: "20221",
    },
    group: "work",
    createdAt: "2020-11-29",
    isFavorited: false,
  },
  {
    id: 29,
    name: "Isla Jackson",
    nickname: "Izzy",
    email: "isla@jackson.com",
    phone: {
      countryCode: "+1",
      areaCode: "",
      phoneNumber: "789-012-3459",
    },
    workInfo: {
      jobTitle: "Financial Planner",
      department: "Finance",
      company: "FinanceCo",
    },
    address: {},
    group: "family",
    createdAt: "2019-02-16",
    isFavorited: false,
  },
];

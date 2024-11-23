const contactsDefault = [
  {
    name: "John Doe",
    nickname: "Johnny",
    email: "john@doe.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "123-456-7890",
    },
    work_info: {
      job_title: "Software Engineer",
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
    created_at: "2021-08-15",
    isFavorited: false,
  },
  {
    name: "Jane Smith",
    nickname: "Janey",
    email: "jane@smith.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "234-567-8901",
    },
    work_info: {
      job_title: "Product Manager",
      department: "Product",
      company: "Tech Solutions",
    },
    address: {
      street: "456 Elm St",
      city: "Othertown",
      state: "USA",
      zip: "67890",
    },
    group: "friends",
    created_at: "2019-11-23",
    isFavorited: true,
  },
  {
    name: "Alice Johnson",
    nickname: "Ally",
    email: "alice@johnson.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "345-678-9012",
    },
    work_info: {
      job_title: "UX Designer",
      department: "Design",
      company: "Creative Co.",
    },
    address: {
      street: "789 Oak St",
      city: "Sometown",
      state: "USA",
      zip: "11223",
    },
    group: "work",
    created_at: "2018-07-30",
    isFavorited: false,
  },
  {
    name: "Bob Brown",
    nickname: "Bobby",
    email: "bob@brown.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "456-789-0123",
    },
    work_info: {
      job_title: "Data Analyst",
      department: "Analytics",
      company: "Data Corp.",
    },
    address: {
      street: "101 Pine St",
      city: "Anycity",
      state: "USA",
      zip: "33445",
    },
    group: "family",
    created_at: "2020-03-12",
    isFavorited: false,
  },
  {
    name: "Charlie Davis",
    nickname: "Chuck",
    email: "charlie@davis.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "567-890-1234",
    },
    work_info: {
      job_title: "Marketing Specialist",
      department: "Marketing",
      company: "Market Masters",
    },
    address: {
      street: "202 Maple St",
      city: "Newtown",
      state: "USA",
      zip: "55667",
    },
    group: "friends",
    created_at: "2017-09-05",
    isFavorited: false,
  },
  {
    name: "Diana Evans",
    nickname: "Di",
    email: "diana@evans.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "678-901-2345",
    },
    work_info: {
      job_title: "HR Manager",
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
    created_at: "2018-12-20",
    isFavorited: false,
  },
  {
    name: "Ethan Foster",
    nickname: "E",
    email: "ethan@foster.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "789-012-3456",
    },
    work_info: {
      job_title: "Sales Executive",
      department: "Sales",
      company: "Salesforce",
    },
    address: {
      street: "404 Cedar St",
      city: "Smalltown",
      state: "USA",
      zip: "99001",
    },
    group: "",
    created_at: "2017-04-18",
    isFavorited: false,
  },
  {
    name: "Fiona Green",
    nickname: "Fi",
    email: "fiona@green.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "890-123-4567",
    },
    work_info: {
      job_title: "Content Writer",
      department: "Content",
      company: "Write Right",
    },
    address: {
      street: "505 Spruce St",
      city: "Bigcity",
      state: "USA",
      zip: "11212",
    },
    group: "friends",
    created_at: "2016-08-29",
    isFavorited: false,
  },
  {
    name: "George Harris",
    nickname: "Geo",
    email: "george@harris.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "901-234-5678",
    },
    work_info: {
      job_title: "Project Manager",
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
    created_at: "2015-11-11",
    isFavorited: false,
  },
  {
    name: "Hannah Irving",
    nickname: "Han",
    email: "hannah@irving.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "012-345-6789",
    },
    work_info: {
      job_title: "Operations Manager",
      department: "Operations",
      company: "Ops Inc.",
    },
    address: {
      street: "707 Redwood St",
      city: "Middletown",
      state: "USA",
      zip: "33434",
    },
    group: "",
    created_at: "2016-02-25",
    isFavorited: false,
  },
  {
    name: "Ian Jackson",
    nickname: "IJ",
    email: "ian@jackson.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "123-456-7891",
    },
    work_info: {
      job_title: "Financial Analyst",
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
    created_at: "2017-06-14",
    isFavorited: false,
  },
  {
    name: "Julia King",
    nickname: "Jules",
    email: "julia@king.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "234-567-8902",
    },
    work_info: {
      job_title: "Customer Support",
      department: "Support",
      company: "Help Desk",
    },
    address: {
      street: "909 Aspen St",
      city: "Downtown",
      state: "USA",
      zip: "55656",
    },
    group: "work",
    created_at: "2018-10-03",
    isFavorited: false,
  },
  {
    name: "Kevin Lewis",
    nickname: "Kev",
    email: "kevin@lewis.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "345-678-9013",
    },
    work_info: {
      job_title: "IT Specialist",
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
    created_at: "2019-01-19",
    isFavorited: false,
  },
  {
    name: "Laura Miller",
    nickname: "Laurie",
    email: "laura@miller.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "456-789-0124",
    },
    work_info: {
      job_title: "Graphic Designer",
      department: "Design",
      company: "Design Studio",
    },
    address: {
      street: "1111 Cypress St",
      city: "Metropolis",
      state: "USA",
      zip: "77878",
    },
    group: "friends",
    created_at: "2020-05-07",
    isFavorited: false,
  },
  {
    name: "Michael Nelson",
    nickname: "Mike",
    email: "michael@nelson.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "567-890-1235",
    },
    work_info: {
      job_title: "Business Analyst",
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
    created_at: "2021-09-21",
    isFavorited: false,
  },
  {
    name: "Nina Owens",
    nickname: "Nini",
    email: "nina@owens.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "678-901-2346",
    },
    work_info: {
      job_title: "Recruiter",
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
    created_at: "2022-12-15",
    isFavorited: false,
  },
  {
    name: "Oscar Perez",
    nickname: "Ozzy",
    email: "oscar@perez.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "789-012-3457",
    },
    work_info: {
      job_title: "Accountant",
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
    created_at: "2023-03-28",
    isFavorited: false,
  },
  {
    name: "Paula Quinn",
    nickname: "PQ",
    email: "paula@quinn.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "890-123-4568",
    },
    work_info: {
      job_title: "Legal Advisor",
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
    created_at: "2022-07-11",
    isFavorited: false,
  },
  {
    name: "Quincy Roberts",
    nickname: "Q",
    email: "quincy@roberts.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "901-234-5679",
    },
    work_info: {
      job_title: "Research Scientist",
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
    created_at: "2021-11-30",
    isFavorited: false,
  },
  {
    name: "Rachel Scott",
    nickname: "Rach",
    email: "rachel@scott.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "012-345-6780",
    },
    work_info: {
      job_title: "Event Planner",
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
    created_at: "2020-02-17",
    isFavorited: false,
  },
  {
    name: "Sam Taylor",
    nickname: "Sammy",
    email: "sam@taylor.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "123-456-7892",
    },
    work_info: {
      job_title: "Logistics Coordinator",
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
    created_at: "2019-06-25",
    isFavorited: false,
  },
  {
    name: "Tina Underwood",
    nickname: "T",
    email: "tina@underwood.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "234-567-8903",
    },
    work_info: {
      job_title: "Public Relations",
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
    created_at: "2018-10-09",
    isFavorited: false,
  },
  {
    name: "Ursula Vance",
    nickname: "Urs",
    email: "ursula@vance.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "345-678-9014",
    },
    work_info: {
      job_title: "Quality Assurance",
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
    created_at: "2017-01-03",
    isFavorited: false,
  },
  {
    name: "Victor White",
    nickname: "Vic",
    email: "victor@white.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "456-789-0125",
    },
    work_info: {
      job_title: "Security Specialist",
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
    created_at: "2016-05-22",
    isFavorited: false,
  },
  {
    name: "Wendy Xander",
    nickname: "Wen",
    email: "wendy@xander.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "567-890-1236",
    },
    work_info: {
      job_title: "Supply Chain Manager",
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
    created_at: "2015-09-14",
    isFavorited: false,
  },
  {
    name: "Xander Young",
    nickname: "Xan",
    email: "xander@young.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "678-901-2347",
    },
    work_info: {
      job_title: "Technical Writer",
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
    created_at: "2016-12-01",
    isFavorited: false,
  },
  {
    name: "Yvonne Zane",
    nickname: "Yve",
    email: "yvonne@zane.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "789-012-3458",
    },
    work_info: {
      job_title: "Product Owner",
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
    created_at: "2017-03-19",
    isFavorited: false,
  },
  {
    name: "Zachary Adams",
    nickname: "Zach",
    email: "zachary@adams.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "890-123-4569",
    },
    work_info: {
      job_title: "Network Engineer",
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
    created_at: "2018-07-04",
    isFavorited: false,
  },
  {
    name: "Ava Baker",
    nickname: "Avie",
    email: "ava@baker.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "901-234-5670",
    },
    work_info: {
      job_title: "Social Media Manager",
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
    created_at: "2019-11-27",
    isFavorited: false,
  },
  {
    name: "Ben Carter",
    nickname: "Benny",
    email: "ben@carter.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "012-345-6781",
    },
    work_info: {
      job_title: "DevOps Engineer",
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
    created_at: "2020-02-14",
    isFavorited: false,
  },
  {
    name: "Chloe Davis",
    nickname: "Chlo",
    email: "chloe@davis.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "123-456-7893",
    },
    work_info: {
      job_title: "HR Specialist",
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
    created_at: "2021-06-01",
    isFavorited: false,
  },
  {
    name: "David Evans",
    nickname: "Dave",
    email: "david@evans.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "234-567-8904",
    },
    work_info: {
      job_title: "Software Tester",
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
    created_at: "2022-09-18",
    isFavorited: false,
  },
  {
    name: "Ella Foster",
    nickname: "Ellie",
    email: "ella@foster.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "345-678-9015",
    },
    work_info: {
      job_title: "Business Development",
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
    created_at: "2023-12-05",
    isFavorited: false,
  },
  {
    name: "Frank Green",
    nickname: "Frankie",
    email: "frank@green.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "456-789-0126",
    },
    work_info: {
      job_title: "Systems Administrator",
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
    created_at: "2022-03-22",
    isFavorited: false,
  },
  {
    name: "Grace Harris",
    nickname: "Gracie",
    email: "grace@harris.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "567-890-1237",
    },
    work_info: {
      job_title: "Marketing Coordinator",
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
    created_at: "2021-07-10",
    isFavorited: false,
  },
  {
    name: "Henry Irving",
    nickname: "Hank",
    email: "henry@irving.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "678-901-2348",
    },
    work_info: {
      job_title: "Operations Specialist",
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
    created_at: "2020-11-29",
    isFavorited: false,
  },
  {
    name: "Isla Jackson",
    nickname: "Izzy",
    email: "isla@jackson.com",
    phone: {
      country_code: "+1",
      area_code: "",
      phone_number: "789-012-3459",
    },
    work_info: {
      job_title: "Financial Planner",
      department: "Finance",
      company: "FinanceCo",
    },
    address: {},
    group: "family",
    created_at: "2019-02-16",
    isFavorited: true,
  },
];

const contactsConfig = {
  phone_to_string_delimiter: "-",
  address_to_string_delimiter: ", ",
  work_info_to_string_delimiter: ", ",
};

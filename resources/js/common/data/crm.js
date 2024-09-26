// Apps > CRM
import avatar1 from "@assets/images/users/avatar-1.jpg";
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";
import avatar5 from "@assets/images/users/avatar-5.jpg";
import avatar6 from "@assets/images/users/avatar-6.jpg";
import avatar7 from "@assets/images/users/avatar-7.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import avatar9 from "@assets/images/users/avatar-9.jpg";

import dribbble from "@assets/images/brands/dribbble.png";
import bitbucket from "@assets/images/brands/bitbucket.png";
import dropbox from "@assets/images/brands/dropbox.png";
import mail_chimp from "@assets/images/brands/mail_chimp.png";
import slack from "@assets/images/brands/slack.png";

import cImg8 from "@assets/images/companies/img-8.png";
import cImg1 from "@assets/images/companies/img-1.png";
import cImg6 from "@assets/images/companies/img-6.png";
import cImg3 from "@assets/images/companies/img-3.png";
import cImg4 from "@assets/images/companies/img-4.png";

// CRM > Contacts
const contacts = [
    {
    id: 1,
    contactId: "#VZ001",
    name: "Tonya Noble",
    company: "Nesta Technologies",
    email: "tonyanoble@velzon.com",
    phone: "414-453-5725",
    score: "154",
    date: "15 Dec, 2021",
    image: avatar1,
    tags: ["Partner"]
},
{
    id: 2,
    contactId: "#VZ002",
    name: "Thomas Taylor",
    company: "iTest Factory",
    email: "thomastaylor@velzon.com",
    phone: "580-464-4694",
    score: "236",
    date: "17 Dec, 2021",
    image: avatar2,
    tags: ["Long-term", "Lead"]
},
{
    id: 3,
    contactId: "#VZ003",
    name: "Nancy Martino",
    company: "Force Medicines",
    email: "nancymartino@velzon.com",
    phone: "786-253-9927",
    score: "197",
    date: "04 Dec, 2021",
    image: avatar3,
    tags: ["Lead", "Partner"]
},
{
    id: 4,
    contactId: "#VZ004",
    name: "Alexis Clarke",
    company: "Digitech Galaxy",
    email: "alexisclarke@velzon.com",
    phone: "515-395-1069",
    score: "369",
    date: "27 Oct, 2021",
    image: avatar4,
    tags: ["Lead"]
},
{
    id: 5,
    contactId: "#VZ005",
    name: "James Price",
    company: "Themesbrand",
    email: "jamesprice@velzon.com",
    phone: "646-276-2274",
    score: "81",
    date: "23 Oct, 2021",
    image: avatar5,
    tags: ["Exiting"]
},
{
    id: 6,
    contactId: "#VZ006",
    name: "Mary Cousar",
    company: "Micro Design",
    email: "marycousar@velzon.com",
    phone: "540-575-0991",
    score: "643",
    date: "18 Oct, 2021",
    image: avatar6,
    tags: ["Exiting", "Lead", "Partner"]
},
{
    id: 7,
    contactId: "#VZ007",
    name: "Herbert Stokes",
    company: "Themesbrand",
    email: "herbertstokes@velzon.com",
    phone: "949-791-0614",
    score: "784",
    date: "01 Jan, 2022",
    image: avatar7,
    tags: ["Lead", "Partner"]
},
{
    id: 8,
    contactId: "#VZ008",
    name: "Michael Morris",
    company: "Syntyce Solutions",
    email: "michaelmorris@velzon.com",
    phone: "484-606-3104",
    score: "361",
    date: "20 Sep, 2021",
    image: avatar8,
    tags: ["Partner"]
},
{
    id: 9,
    contactId: "#VZ009",
    name: "Timothy Smith",
    company: "Digitech Galaxy",
    email: "timothysmith@velzon.com",
    phone: "231-480-8536",
    score: "732",
    date: "02 Jan, 2022",
    image: avatar9,
    tags: ["Lead"]
},
{
    id: 10,
    contactId: "#VZ0010",
    name: "Kevin Dawson",
    company: "Meta4Systems",
    email: "kevindawson@velzon.com",
    phone: "745-321-9874",
    score: "00",
    date: "-",
    image: avatar1,
    tags: ["Lead", "Partner"]
}];

// CRM > Companies
const companies = [{
    id: 1,
    name: "Nesta Technologies",
    owner: "Tonya Noble",
    industry_type: "Computer Industry",
    star_value: "4.5",
    location: "Los Angeles, USA",
    employee: "10-30",
    website: "www.abcd.com",
    contact_email: "info@abcd.com",
    since: "1995",
    image_src: dribbble
},
{
    id: 2,
    name: "iTest Factory",
    owner: "Thomas Taylor",
    industry_type: "Chemical Industries",
    star_value: "3.8",
    location: "Berlin, Germany",
    employee: "10-15",
    website: "www.itesttech.com",
    contact_email: "info@itesttech.com",
    since: "2005",
    image_src: bitbucket
},
{
    id: 3,
    name: "Force Medicines",
    owner: "Glen Matney",
    industry_type: "Health Services",
    star_value: "3.1",
    location: "Phoenix, USA",
    employee: "10-15",
    website: "www.forcemedicine.com",
    contact_email: "info@forcemedicine.com",
    since: "1998",
    image_src: cImg8
},
{
    id: 4,
    name: "Digitech Galaxy",
    owner: "Alexis Clarke",
    industry_type: "Telecommunications Services",
    star_value: "3.2",
    location: "Bogota, Colombia",
    employee: "10-25",
    website: "www.digitech.com",
    contact_email: "info@digitech.com",
    since: "1992",
    image_src: cImg1
},
{
    id: 5,
    name: "Zoetic Fashion",
    owner: "James Price",
    industry_type: "Textiles: Clothing, Footwear",
    star_value: "4.4",
    location: "Brasilia, Brazil",
    employee: "10-30",
    website: "www.zoetic.com",
    contact_email: "info@zoetic.com",
    since: "1993",
    image_src: cImg6
},
{
    id: 6,
    name: "Micro Design",
    owner: "Mary Cousar",
    industry_type: "Financial Services",
    star_value: "2.7",
    location: "Windhoek, Namibia",
    employee: "10-20",
    website: "www.microdesign.com",
    contact_email: "info@microdesign.com",
    since: "2005",
    image_src: dropbox
},
{
    id: 7,
    name: "Syntyce Solutions",
    owner: "Michael Morris",
    industry_type: "Chemical Industries",
    star_value: "4.0",
    location: "Damascus, Syria",
    employee: "01-15",
    website: "www.syntycesolu.com",
    contact_email: "info@syntycesolu.com",
    since: "1991",
    image_src: mail_chimp
},
{
    id: 8,
    name: "Meta4Systems",
    owner: "Nancy Martino",
    industry_type: "Computer Industry",
    star_value: "3.3",
    location: "London, UK",
    employee: "01-10",
    website: "www.meta4systems.com",
    contact_email: "info@meta4systems.com",
    since: "1989",
    image_src: cImg3
},
{
    id: 9,
    name: "Moetic Fashion",
    owner: "Timothy Smith",
    industry_type: "Textiles: Clothing, Footwear",
    star_value: "4.9",
    location: "Damascus, Syria",
    employee: "05-50",
    website: "www.moetic.com",
    contact_email: "info@moetic.com",
    since: "1975",
    image_src: cImg4
},
{
    id: 10,
    name: "Syntyce Solutions",
    owner: "Herbert Stokes",
    industry_type: "Health Services",
    star_value: "2.9",
    location: "Berlin, Germany",
    employee: "01-60",
    website: "www.syntyce.com",
    contact_email: "info@syntyce.com",
    since: "2009",
    image_src: slack
}];

// CRM > Leads
const leads = [{
    id: 1,
    leadsId: "#VZ2101",
    name: "Alexis Clarke",
    company: "Force Medicines",
    score: "147",
    phone: "580-464-4694",
    location: "Los Angeles, USA",
    date: "07 Apr, 2021",
    image_src: avatar1,
    tags: ["Partner"]
},
{
    id: 2,
    leadsId: "#VZ2102",
    name: "James Morris",
    company: "iTest Factory",
    score: "230",
    phone: "863-577-5537",
    location: "Phoenix, USA",
    date: "15 Feb, 2021",
    image_src: avatar2,
    tags: ["Long-term", "Lead"]
},
{
    id: 3,
    leadsId: "#VZ2103",
    name: "Nancy Martino",
    company: "Syntyce Solutions",
    score: "159",
    phone: "786-253-9927",
    location: "London, UK",
    date: "02 Jan, 2022",
    image_src: avatar3,
    tags: ["Lead", "Partner"]
},
{
    id: 4,
    leadsId: "#VZ2104",
    name: "Michael Morris",
    company: "Micro Design",
    score: "352",
    phone: "786-253-9927",
    location: "Damascus, Syria",
    date: "19 May, 2021",
    image_src: avatar4,
    tags: ["Lead"]
},
{
    id: 5,
    leadsId: "#VZ2105",
    name: "Kevin Dawson",
    company: "Nesta Technologies",
    score: "78",
    phone: "213-741-4294",
    location: "Bogota, Colombia",
    date: "14 Apr, 2021",
    image_src: avatar5,
    tags: ["Exiting"]
},
{
    id: 6,
    leadsId: "#VZ2106",
    name: "Herbert Stokes",
    company: "Zoetic Fashion",
    score: "85",
    phone: "414-453-5725",
    location: "Windhoek, Namibia",
    date: "07 Jun, 2022",
    image_src: avatar6,
    tags: ["Exiting", "Lead", "Partner"]
},
{
    id: 7,
    leadsId: "#VZ2107",
    name: "Glen Matney",
    company: "Moetic Fashion",
    score: "365",
    phone: "515-395-1069",
    location: "Berlin, Germany",
    date: "02 Nov, 2021",
    image_src: avatar7,
    tags: ["Lead", "Partner"]
},
{
    id: 8,
    leadsId: "#VZ2108",
    name: "Charles Kubik",
    company: "Syntyce Solutions",
    score: "236",
    phone: "231-480-8536",
    location: "Brasilia, Brazil",
    date: "25 Sep, 2021",
    image_src: avatar8,
    tags: ["Partner"]
},
{
    id: 9,
    leadsId: "#VZ2109",
    name: "Thomas Taylor",
    company: "Digitech Galaxy",
    score: "754",
    phone: "231-480-8536",
    location: "Windhoek, Namibia",
    date: "16 Sep, 2021",
    image_src: avatar9,
    tags: ["Lead"]
},
{
    id: 10,
    leadsId: "#VZ21010",
    name: "Tonya Noble",
    company: "Micro Design",
    score: "193",
    phone: "745-321-9874",
    location: "London, UK",
    date: "23 Nov, 2021",
    image_src: avatar1,
    tags: ["Lead"]
},
{
    id: 11,
    leadsId: "#VZ21011",
    name: "Anna Martino",
    company: "Syntyce Solutions",
    score: "254",
    phone: "654-987-0123",
    location: "London, UK",
    date: "02 Jan, 2022",
    image_src: avatar2,
    tags: ["Lead", "Partner"]
}];

export { contacts, companies, leads };
import featuresLogo1 from '../assets/images/features-logo-1.jpg';
import featuresLogo2 from '../assets/images/features-logo-2.jpg';
import featuresLogo3 from '../assets/images/features-logo-3.jpg';
import featuresLogo4 from '../assets/images/features-logo-4.jpg';
import featuresLogo5 from '../assets/images/features-logo-5.jpg';
import featuresLogo6 from '../assets/images/features-logo-6.jpg';
import priceIcon from '../assets/images/price-icon.jpg';
import portImg from '../assets/images/portfolio.jpg';
import contIcon from '../assets/images/contact-icon.jpg';
import twitterIcon from '../assets/images/twitter-icon.jpg';
import facebookIcon from '../assets/images/facebook-icon.jpg';
import youtubeIcon from '../assets/images/youtube-icon.jpg';

export const navLinks = [
  { id: 1, name: 'About' },
  { id: 2, name: 'Gallery' },
  { id: 3, name: 'Pricing' },
  { id: 4, name: 'FAQ' },
  { id: 5, name: 'Benefits' },
];

export const features = [
  {
    id: 1,
    name: 'The first',
    text: 'Microsoft Patch Management For Home Users',
    logo: featuresLogo1,
  },
  {
    id: 2,
    name: 'Second',
    text: 'An Ugly Myspace Profile Will Sure Ruin Your Reputation',
    logo: featuresLogo2,
  },
  {
    id: 3,
    name: 'Third',
    text: 'Learn To Love Growth And Change And You Will Be A Success',
    logo: featuresLogo3,
  },
  {
    id: 4,
    name: 'Fourth',
    text: 'Microsoft Patch Management For Home Users',
    logo: featuresLogo4,
  },
  {
    id: 5,
    name: 'Fifth',
    text: 'An Ugly Myspace Profile Will Sure Ruin Your Reputation',
    logo: featuresLogo5,
  },
  {
    id: 6,
    name: 'Sixth',
    text: 'Learn To Love Growth And Change And You Will Be A Success',
    logo: featuresLogo6,
  },
];

const person = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'Maria Ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'John Doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'Peter Smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'Susan Andersen',
    title: 'the boss',
    quote:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
];

export default person;

export const pricing = [
  {
    id: 1,
    title: 'Free',
    cost: 0,
    text: ['Free', 'Up to 2 users', 'Github'],
    button: 'GET STARTED',
  },
  {
    id: 2,
    title: 'Lite',
    cost: 199,
    text: ['Teams', 'Up to 8 users', 'Github'],
    button: 'BUY NOW',
  },
  {
    id: 3,
    title: 'PRO',
    cost: 399,
    text: ['Teams', 'Unlimited users', 'Github'],
    button: 'BUY NOW',
  },
  {
    id: 4,
    title: 'Enterprise',
    cost: priceIcon,
    text: ['Teams', 'Unlimited users', 'Github'],
    button: 'CONTACT US',
  },
];

export const portfolio = [
  { id: 1, img: portImg },
  { id: 2, img: portImg },
  { id: 3, img: portImg },
  { id: 4, img: portImg },
  { id: 5, img: portImg },
  { id: 6, img: portImg },
];

export const contacts = [
  {
    id: 1,
    icon: contIcon,
    title: 'San Francisco',
    address: '1772 Nevskaya Street NW, Suite 21389, Atlanta',
    phone: '+1 789 123456',
  },
  {
    id: 2,
    icon: contIcon,
    title: 'London',
    address: '65 Brushfield St, London E1 6AA, Great Britain',
    phone: '+1 123 123456',
  },
  {
    id: 3,
    icon: contIcon,
    title: 'Tallinn',
    address: 'Ülemiste city, Valukoja 10, 11415 Tallinn, Estonia',
    phone: '+372 55 555 55',
  },
];

export const social = [
  { id: 1, icon: twitterIcon },
  { id: 2, icon: facebookIcon },
  { id: 3, icon: youtubeIcon },
];

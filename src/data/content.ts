// All the page copy lives here. Text is copied exactly from the design prototype.
import shower from "../assets/shower.jpg";
import paint from "../assets/paint.jpg";
import basement from "../assets/basement.jpg";
import about from "../assets/about.jpg";
import gc from "../assets/gc.jpg";

// Hero pillars: [title, description]
export const PILLARS = [['General contracting', 'Renovations and remodeling, managed in-house.'], ['Reasonable prices', 'Price match policy without sacrificing quality.'], ['No middleman', 'You deal directly with the team doing the work.'], ['Service guarantee', 'We take the steps to get the job done right.']];

// Project picker tabs. k = tab label, t = heading, d = description, inc = what's included
export const SVC = [
  { k: 'Bathroom', img: shower, t: 'Bathroom renovations', d: 'Full bathroom transformations with high quality and speed, including custom showers waterproofed to last.', inc: ['Custom showers', 'Tile', 'Vanities & countertops', 'Waterproofing'] },
  { k: 'Kitchen', img: paint, t: 'Kitchen renovations', d: 'Kitchen remodels with countertop replacements, backsplash upgrades and appliance installations.', inc: ['Countertops', 'Backsplash', 'Appliance install', 'Design input'] },
  { k: 'Basement', img: basement, t: 'Basement renovation', d: 'Turn your basement into a functional space with design, finishing, flooring and waterproofing.', inc: ['Design', 'Finishing', 'Flooring', 'Waterproofing'] },
  { k: 'Additions', img: about, t: 'Home additions', d: 'Room conversions, office renovations and custom expansions tailored to how you live.', inc: ['Room conversions', 'Office renovations', 'Custom expansions'] },
  { k: 'Painting & drywall', img: gc, t: 'Painting & drywall', d: 'Interior and exterior painting for ceilings, walls, trims, doors, decks, patios and garages. Drywall installation, patching and replacement.', inc: ['Interior & exterior', 'Ceilings & trim', 'Drywall install', 'Patching'] },
  { k: 'Flooring', img: basement, t: 'Flooring installation', d: 'All types of flooring installation, including tile, laminate and engineered wood.', inc: ['Tile', 'Laminate', 'Engineered wood'] },
  { k: 'Exterior', img: about, t: 'Exterior & maintenance', d: 'Pressure washing for patios, playgrounds, pool decks and fences, deck waterproofing with epoxy coating, and general property maintenance.', inc: ['Pressure washing', 'Deck epoxy coating', 'Property maintenance'] }
];

export const EXTRAS = ['Backsplash installation', 'Tile installation', 'Deck waterproofing', 'Property maintenance', 'General contracting'];

// How it works steps: [title, description]
export const HOW = [['Free consultation', 'Tell us about the project and we’ll set up a time to talk.'], ['Clear quote', 'Reasonable pricing, with a price match policy.'], ['Managed in-house', 'Amin and the team coordinate the work and subtrades.'], ['Clean finish', 'Floors and surfaces protected, and no mess left behind.']];

// Reviews: [quote, name, caption]. The first one is shown large on green.
export const REVIEWS = [
  ['Amin did an excellent job on our townhome renovation, exceeding our expectations. As an experienced project manager, he identified overlooked issues early, saving us time and costs.', 'Leila Chan', 'Townhome owner'],
  ['Masoud did a great job incorporating our various ideas into a beautiful kitchen design. Amin was very effective in coordinating with the various subtrades and made himself readily available.', 'Kyle Mitchel', 'Condo owner · Kitchen'],
  ['They covered the flooring from our front door all the way to the bathroom, covered all the additional surfaces, and left absolutely no mess behind. Highly recommend.', 'M Arbabi', 'Home owner · Bathroom & laminate'],
  ['The price was reasonable and the work they did was impeccable! So polite and professional, and the homeowners felt very comfortable having them in their home.', 'Melissa Richardson', 'Interior designer · Full interior paint'],
  ['Amin was responsive, friendly and they did a great job with the install and matching the flooring. The invoice was as expected in relation to the quote.', 'Nicole H', 'West 2nd, Vancouver · Hardwood'],
  ['Very professional, with a lot of job pride. He removed carpet from 2 sets of 6 stairs and replaced them with laminate. His price was also very competitive.', 'Tressa', 'Townhouse, Port Coquitlam · Stairs']
];

// Options in the quote form's "Project" dropdown
export const PROJECT_OPTIONS = ['Bathroom renovation', 'Kitchen renovation', 'Basement renovation', 'Home addition', 'Painting or drywall', 'Flooring', 'Exterior or other'];

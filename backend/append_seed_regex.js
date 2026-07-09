const fs = require('fs');
let seedPath = './seed.js';
let seed = fs.readFileSync(seedPath, 'utf8');

const newItems = `,
      // New item 1
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900001'),
        title: 'Treehouse Retreat',
        price: 100,
        country: 'Indonesia',
        city: 'Ubud',
        isPopular: true,
        description: 'A beautiful, aesthetic, and luxury treehouse retreat nestled in the dense tropical rainforest of Ubud, Bali. Morning sunlight breaking through the canopy.',
        unit: 'night',
        sumBooking: 1,
        imageId: [mongoose.Types.ObjectId('6596cbe292b97300fc900011')],
        featureId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')],
        activityId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')]
      },
      // New item 2
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900002'),
        title: 'Oceanfront Villa',
        price: 350,
        country: 'Indonesia',
        city: 'Lombok',
        isPopular: true,
        description: 'A luxurious oceanfront villa in Lombok, Indonesia. Infinity pool overlooking a white sand beach and turquoise blue ocean.',
        unit: 'night',
        sumBooking: 5,
        imageId: [mongoose.Types.ObjectId('6596cbe292b97300fc900012')],
        featureId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')],
        activityId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')]
      },
      // New item 3
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900003'),
        title: 'Pine Cabin',
        price: 80,
        country: 'Indonesia',
        city: 'Lembang',
        isPopular: false,
        description: 'A cozy, aesthetic wooden cabin surrounded by tall pine trees in Lembang, Bandung, Indonesia.',
        unit: 'night',
        sumBooking: 10,
        imageId: [mongoose.Types.ObjectId('6596cbe292b97300fc900013')],
        featureId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')],
        activityId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')]
      },
      // New item 4
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900004'),
        title: 'City Skyline Penthouse',
        price: 500,
        country: 'Indonesia',
        city: 'Jakarta',
        isPopular: true,
        description: 'A luxurious modern penthouse apartment interior in Jakarta with floor to ceiling windows showing a stunning night city skyline.',
        unit: 'night',
        sumBooking: 2,
        imageId: [mongoose.Types.ObjectId('6596cbe292b97300fc900014')],
        featureId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')],
        activityId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')]
      },
      // New item 5
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900005'),
        title: 'Lake View Glamping',
        price: 120,
        country: 'Indonesia',
        city: 'Kintamani',
        isPopular: false,
        description: 'A luxury glamping (glamorous camping) tent on the edge of Lake Batur in Kintamani, Bali. Mount Batur in the background.',
        unit: 'night',
        sumBooking: 8,
        imageId: [mongoose.Types.ObjectId('6596cbe292b97300fc900015')],
        featureId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')],
        activityId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')]
      }`;

const newImages = `,
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900011'),
        imageUrl: 'images/treehouse_ubud.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900012'),
        imageUrl: 'images/oceanfront_villa.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900013'),
        imageUrl: 'images/pine_cabin.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900014'),
        imageUrl: 'images/city_penthouse.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900015'),
        imageUrl: 'images/lake_glamping.jpg'
      }`;

seed = seed.replace(/([ \t]*\]\s*\}\s*,\s*\n\s*\]\n\s*\}\s*,\s*\n\s*\/\/\s*end item)/, newItems + '\n$1');
seed = seed.replace(/([ \t]*\]\s*\}\s*\n\s*\]\n\s*\}\s*,\s*\n\s*\/\/\s*end image)/, newImages + '\n$1');

fs.writeFileSync(seedPath, seed);
console.log('Regex injection done!');

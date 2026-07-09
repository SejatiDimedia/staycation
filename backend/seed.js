var seeder = require('mongoose-seed');
var mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB via Mongoose
seeder.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}, function () {

  // Load Mongoose models
  seeder.loadModels([
    './models/Category',
    './models/Bank',
    './models/Item',
    './models/Feature',
    './models/Activity',
    './models/Member',
    './models/Image',
    './models/Member',
    './models/Booking',
    './models/Users'
  ]);

  // Clear specified collections
  seeder.clearModels(['Category', 'Bank', 'Item', 'Member', 'Item', 'Feature', 'Image', 'Booking', 'Users'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });

  });
});

var data = [
  // start category
  {
    'model': 'Category',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
        name: 'Villas with Private Pool',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225') },
          { _id: mongoose.Types.ObjectId('6596cbe292b97300fc900001') },
          { _id: mongoose.Types.ObjectId('6596cbe292b97300fc900002') }
        ]
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901112'),
        name: 'Cozy Glamping Sites',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902227') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902228') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902229') },
          { _id: mongoose.Types.ObjectId('6596cbe292b97300fc900003') },
          { _id: mongoose.Types.ObjectId('6596cbe292b97300fc900005') }
        ]
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901113'),
        name: 'Apartments with City View',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902230') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902231') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902232') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902233') },
          { _id: mongoose.Types.ObjectId('6596cbe292b97300fc900004') }
        ]
      }
    ]
  },
  // end category
  // start item
  {
    'model': 'Item',
    'documents': [
      // houses
      // done
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        title: 'Villa Bidadari',
        price: 250,
        sumBooking: 2,
        country: 'Indonesia',
        city: 'Bali',
        isPopular: false,
        description: 'A beautiful luxury villa located in the heart of Bali. Perfect for family vacations with a stunning private pool, lush tropical garden, and direct access to the beach. Experience tranquility and luxury like never before.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08') }
        ]
      },
      // done
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        title: 'Mountain View Resort',
        price: 150,
        sumBooking: 4,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Experience the cold breeze and majestic views of the mountains. This glamping site offers a unique staycation experience where you can reconnect with nature without sacrificing comfort. Includes BBQ facilities and a campfire pit.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') }
        ]
      },
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900001'),
        title: 'Treehouse Retreat',
        price: 100,
        country: 'Indonesia',
        city: 'Ubud',
        isPopular: true,
        description: 'A beautiful, aesthetic, and luxury treehouse retreat nestled in the dense tropical rainforest of Ubud, Bali.',
        unit: 'night',
        sumBooking: 1,
        imageId: [mongoose.Types.ObjectId('6596cbe292b97300fc900011')],
        featureId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')],
        activityId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')]
      },
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900002'),
        title: 'Oceanfront Villa',
        price: 350,
        country: 'Indonesia',
        city: 'Lombok',
        isPopular: true,
        description: 'A luxurious oceanfront villa in Lombok, Indonesia. Infinity pool overlooking a white sand beach.',
        unit: 'night',
        sumBooking: 5,
        imageId: [mongoose.Types.ObjectId('6596cbe292b97300fc900012')],
        featureId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')],
        activityId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')]
      },
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
      {
        _id: mongoose.Types.ObjectId('6596cbe292b97300fc900005'),
        title: 'Lake View Glamping',
        price: 120,
        country: 'Indonesia',
        city: 'Kintamani',
        isPopular: false,
        description: 'A luxury glamping tent on the edge of Lake Batur in Kintamani, Bali.',
        unit: 'night',
        sumBooking: 8,
        imageId: [mongoose.Types.ObjectId('6596cbe292b97300fc900015')],
        featureId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01')],
        activityId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')]
      }
    ]
  },
  // end item
  // start image
  {
    'model': 'Image',
    'documents': [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
        imageUrl: 'images/item-1.png'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
        imageUrl: 'images/item-2.png'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3'),
        imageUrl: 'images/item-3.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4'),
        imageUrl: 'images/item-4.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5'),
        imageUrl: 'images/item-1.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6'),
        imageUrl: 'images/item-2.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7'),
        imageUrl: 'images/item-3.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9'),
        imageUrl: 'images/item-4.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10'),
        imageUrl: 'images/item-1.png'
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11'),
        imageUrl: 'images/item-1.png'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12'),
        imageUrl: 'images/item-2.png'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13'),
        imageUrl: 'images/item-3.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14'),
        imageUrl: 'images/item-4.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15'),
        imageUrl: 'images/item-1.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16'),
        imageUrl: 'images/item-2.png'
      },
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
      }
    ]
  },
  // end image
  // start feature
  {
    'model': 'Feature',
    'documents': [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01'),
        name: 'badroom',
        qty: 2,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02'),
        name: 'living room',
        qty: 23,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03'),
        name: 'televison',
        qty: 12,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04'),
        name: 'televison',
        qty: 5,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05'),
        name: 'mbp/s',
        qty: 5,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06'),
        name: 'unit ready',
        qty: 5,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07'),
        name: 'refigrator',
        qty: 5,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08'),
        name: 'televion',
        qty: 5,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      // item 2
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09'),
        name: 'badroom',
        qty: 2,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10'),
        name: 'living room',
        qty: 23,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11'),
        name: 'televison',
        qty: 12,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12'),
        name: 'televison',
        qty: 5,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13'),
        name: 'mbp/s',
        qty: 5,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14'),
        name: 'unit ready',
        qty: 5,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15'),
        name: 'refigrator',
        qty: 5,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16'),
        name: 'televion',
        qty: 5,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      }
    ]
  },
  // end feature
  // start activity
  {
    'model': 'Activity',
    'documents': [
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01'),
        name: 'Tirta Empul Temple',
        type: 'Nature',
        imageUrl: 'images/activity-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02'),
        name: 'Monkey Forest',
        type: 'Nature',
        imageUrl: 'images/activity-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03'),
        name: 'Ubud Market',
        type: 'Shopping',
        imageUrl: 'images/activity-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04'),
        name: 'Seminyak Square',
        type: 'Shopping',
        imageUrl: 'images/activity-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05'),
        name: 'Kawah Putih',
        type: 'Nature',
        imageUrl: 'images/activity-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06'),
        name: 'Tea Plantation',
        type: 'Nature',
        imageUrl: 'images/activity-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07'),
        name: 'Floating Market',
        type: 'Shopping',
        imageUrl: 'images/activity-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08'),
        name: 'Farmhouse Lembang',
        type: 'Shopping',
        imageUrl: 'images/activity-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      }
    ]
  },
  // end activity

  // start booking
  {
    'model': 'Booking',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cee1'),
        bookingStartDate: '12-12-2020',
        bookingEndDate: '12-12-2020',
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
          title: 'Village Angga',
          price: 6,
          duration: 2,
        },
        total: 12,
        memberId: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        bankId: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        payments: {
          proofPayment: 'images/bukti.jpg',
          bankFrom: 'BCA',
          status: 'Proses',
          accountHolder: 'ang'
        }
      }
    ]
  },
  // end booking

  // member
  {
    'model': 'Member',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        firstName: 'Elfin',
        lastName: 'Sanjaya',
        email: 'elfinsanjaya12@gmail.com',
        phoneNumber: '082377954008'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
        firstName: 'Yein',
        lastName: 'Narayana',
        email: 'elfinsanjaya1207@gmail.com',
        phoneNumber: '082377954008'
      }
    ]
  },
  {
    'model': 'Bank',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903322'),
        nameBank: 'Mandiri',
        nomorRekening: '089898',
        name: 'elfin',
        imageUrl: 'images/9999999999.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        nameBank: 'BCA',
        nomorRekening: '878678',
        name: 'elfin',
        imageUrl: 'images/9999999999.png'
      }
    ]
  },
  {
    'model': 'Users',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        username: 'admin',
        password: 'rahasia',
      },
    ]
  }
];
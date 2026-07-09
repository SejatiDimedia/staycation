import re

with open('seed.js', 'r') as f:
    lines = f.readlines()

def insert_before(lines, marker, content):
    for i, line in enumerate(lines):
        if marker in line:
            # Find the closest ']' before this marker
            for j in range(i, -1, -1):
                if ']' in lines[j]:
                    # Insert content here
                    lines.insert(j, content + '\n')
                    return

# new items string
new_items = """      },
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
        activityId: [mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01')]"""

new_images = """      },
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
        imageUrl: 'images/lake_glamping.jpg'"""

insert_before(lines, '// end item', new_items)
insert_before(lines, '// end image', new_images)

with open('seed.js', 'w') as f:
    f.writelines(lines)

print("Injected via python!")

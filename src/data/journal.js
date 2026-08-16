export const articles = [
  {
    id: 1,
    date: 'Spring 2026',
    category: 'Aviation',
    title: 'The Future of Flight',
    text: 'On quiet cabins, considered luggage and the return of the journey as ritual.',
    src: '/assets/img/journal/aviation.jpg',
    lead: true,
    body: [
      'Flying was once the most considered hour of the day — a boarding ritual, a cabin of strangers, a slow descent into somewhere new. Somewhere along the way it became a waiting room with wings.',
      'The future of flight is not faster. It is quieter. Wider seats, softer light, less noise and fewer announcements. Time measured not by distance but by the room we are given to think in it.',
      'We make bags for that future. Not more, but better. Luggage that slips into the overhead without ceremony, that returns to you the weight of what you did not need. The journey, refined — because the point of travel was never the arrival.',
    ],
  },
  {
    id: 2,
    date: 'Winter 2026',
    category: 'Architecture',
    title: 'Architecture of Silence',
    text: 'Negative space as a luxury — lessons from the masters of stillness.',
    src: '/assets/img/journal/architecture.jpg',
    body: [
      'In architecture, silence is not the absence of sound. It is the absence of noise — the distance between objects, the weight of a room that asks for nothing.',
      'The masters understood it: a corridor is not space left over, it is space composed. A wall is not a barrier but a pause. What is not built matters as much as what is.',
      'Our objects borrow from that thinking. The less a piece says, the more it holds. A bag with a single line where others need two. Quiet, because quiet was the point.',
    ],
  },
  {
    id: 3,
    date: 'Winter 2026',
    category: 'Travel',
    title: 'The Art of Modern Travel',
    text: 'Packing less, carrying better — notes from a slow season.',
    src: '/assets/img/journal/travel.jpg',
    body: [
      'The slow season taught us to pack like we live — deliberately. One good coat, two pairs of shoes, a bag that earns its place in the cabin.',
      'Modern travel is subtraction. Every thing we leave at home becomes space we can actually use: for a walk without a map, a longer conversation, a window seat watched all the way down.',
      'Carry less, but carry better. This is the whole philosophy of the house, applied to the road.',
    ],
  },
  {
    id: 4,
    date: 'Autumn 2025',
    category: 'Design',
    title: 'Design Notes from Tokyo',
    text: 'Restraint, precision and the quiet objects of daily life.',
    src: '/assets/img/journal/tokyo.jpg',
    body: [
      'In Tokyo, the best design goes almost unnoticed. A door that closes itself, a cup weighted to the hand, a bag that fits the day exactly.',
      'Precision there is not perfectionism. It is respect — for the material, for the person who will use the thing, for the small rituals that make a life.',
      'We returned with one rule: if a detail is not doing work, remove it. Restraint is the highest form of craftsmanship.',
    ],
  },
  {
    id: 5,
    date: 'Autumn 2025',
    category: 'Craftsmanship',
    title: 'The New Luxury Movement',
    text: 'Fewer things, made better — and the buyers who choose them.',
    src: '/assets/img/journal/movement.jpg',
    body: [
      'A quiet shift is happening in luxury. Buyers are no longer counting logos — they are counting years. How long will this last? How well will it wear?',
      'The new luxury movement is not about price. It is about intention. Fewer things, made better, kept longer, repaired rather than replaced.',
      'This is the house we are building for. Small collections, honest materials, objects made to be lived with — and outlived by.',
    ],
  },
  {
    id: 6,
    date: 'Summer 2025',
    category: 'Photography',
    title: 'Photography and Stillness',
    text: 'How the camera learns the art of waiting.',
    src: '/assets/img/journal/photography.jpg',
    body: [
      'The best photographs are not taken — they are waited for. Light arrives late. A shadow settles. The frame was always there; the photographer was simply patient enough to see it.',
      'We shoot our campaigns the same way. No motion for motion\'s sake. A single figure, a still composition, time left in the image for the eye to rest.',
      'Stillness is not emptiness. It is the presence of everything, waiting.',
    ],
  },
  {
    id: 7,
    date: 'Summer 2025',
    category: 'Travel',
    title: 'Rooms With Nothing in Them',
    text: 'A stay at a hotel that removed everything but the light.',
    src: '/assets/img/journal/rooms.jpg',
    body: [
      'There is a hotel in the mountains with rooms nearly empty — a bed, a chair, a window. Nothing to do, nowhere to look but out.',
      'Guests call it the hardest luxury to buy: the refusal to fill. In the absence of things, you notice the quality of the light, the weight of your own thoughts.',
      'It is a lesson we carry into the atelier. The object we are proudest of is the one we had the discipline to leave unadorned.',
    ],
  },
  {
    id: 8,
    date: 'Spring 2025',
    category: 'Craftsmanship',
    title: 'Hands That Measure Twice',
    text: 'Inside the atelier — cutting, stitching and the patience in between.',
    src: '/assets/img/journal/hands.jpg',
    body: [
      'The atelier is quiet, which is the point. Leather is laid, marked, cut by hand. A stitch is pulled and checked, pulled again. In an age of speed, this is the luxury: deliberate slowness.',
      'The cutters measure twice not because they are unsure, but because the material deserves the second pass. Each hide is different; each piece begins with a conversation with the grain.',
      'When you buy a VELAIRE object, you are not buying the time it took to make it. You are buying what that time produced — a thing that will not need to be replaced.',
    ],
  },
]

export const categories = ['All', ...new Set(articles.map((a) => a.category))]

export function getArticle(id) {
  return articles.find((a) => String(a.id) === String(id))
}

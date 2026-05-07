export const getRandomColor = () => {
  const colors = [
    '#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF',
    '#E8BAFF', '#FFBAF3', '#BAFFFC', '#D6FFBA', '#FFE4BA',
    '#FFC4C4', '#D4C4FF', '#C4E8FF', '#C4FFD4', '#FFF4C4'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const animalElements: Record<string, { label: string; emoji: string; audioUrl: string; sound: string }> = {
  a: { label: 'Ayam', emoji: '🐔', audioUrl: 'https://actions.google.com/sounds/v1/animals/rooster_crowing.ogg', sound: 'Ayam' },
  b: { label: 'Bebek', emoji: '🦆', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Mallard_Duck.ogg', sound: 'Bebek' },
  c: { label: 'Cicak', emoji: '🦎', audioUrl: 'https://actions.google.com/sounds/v1/insects/cricket_chirping.ogg', sound: 'Cicak' },
  d: { label: 'Domba', emoji: '🐑', audioUrl: 'https://actions.google.com/sounds/v1/animals/sheep_bleat.ogg', sound: 'Domba' },
  e: { label: 'Elang', emoji: '🦅', audioUrl: 'https://actions.google.com/sounds/v1/animals/crow_cawing.ogg', sound: 'Elang' },
  f: { label: 'Flamingo', emoji: '🦩', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Flamingo_vocalizations.ogg', sound: 'Flamingo' },
  g: { label: 'Gajah', emoji: '🐘', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Elephant_sound.ogg', sound: 'Gajah' },
  h: { label: 'Harimau', emoji: '🐅', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Tiger_roar.ogg', sound: 'Harimau' },
  i: { label: 'Ikan', emoji: '🐟', audioUrl: 'https://actions.google.com/sounds/v1/water/water_bubbles.ogg', sound: 'Ikan' },
  j: { label: 'Jerapah', emoji: '🦒', audioUrl: 'https://actions.google.com/sounds/v1/animals/horse_whinny.ogg', sound: 'Jerapah' },
  k: { label: 'Kucing', emoji: '🐈', audioUrl: 'https://actions.google.com/sounds/v1/animals/cat_purr_close.ogg', sound: 'Kucing' },
  l: { label: 'Lebah', emoji: '🐝', audioUrl: 'https://actions.google.com/sounds/v1/insects/fly_buzz.ogg', sound: 'Lebah' },
  m: { label: 'Monyet', emoji: '🐒', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Macaque.ogg', sound: 'Monyet' },
  n: { label: 'Naga', emoji: '🐉', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Lion_roar.ogg', sound: 'Naga' },
  o: { label: 'Orangutan', emoji: '🦧', audioUrl: 'https://actions.google.com/sounds/v1/animals/monkey_chatter.ogg', sound: 'Orangutan' },
  p: { label: 'Panda', emoji: '🐼', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Orangutan.ogg', sound: 'Panda' },
  q: { label: 'Quokka', emoji: '🐹', audioUrl: 'https://actions.google.com/sounds/v1/animals/rat_squeak.ogg', sound: 'Quokka' },
  r: { label: 'Rusa', emoji: '🦌', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Red_Deer_Stag_Roar.ogg', sound: 'Rusa' },
  s: { label: 'Sapi', emoji: '🐄', audioUrl: 'https://actions.google.com/sounds/v1/animals/cow_moo.ogg', sound: 'Sapi' },
  t: { label: 'Tikus', emoji: '🐁', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Mouse_squeaking.ogg', sound: 'Tikus' },
  u: { label: 'Ular', emoji: '🐍', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Snake_hiss.ogg', sound: 'Ular' },
  v: { label: 'Vampir', emoji: '🦇', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Bat_sounds.ogg', sound: 'Vampir' },
  w: { label: 'Walrus', emoji: '🦭', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Walrus_sounds.ogg', sound: 'Walrus' },
  x: { label: 'X-Ray Ikan', emoji: '🐠', audioUrl: 'https://actions.google.com/sounds/v1/water/water_splash.ogg', sound: 'X-Ray Ikan' },
  y: { label: 'Yak', emoji: '🐂', audioUrl: 'https://actions.google.com/sounds/v1/animals/cow_mooing.ogg', sound: 'Yak' },
  z: { label: 'Zebra', emoji: '🦓', audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zebra_call.ogg', sound: 'Zebra' },
};

export const randomElements = [
  { label: 'Bintang', emoji: '🌟', audioUrl: 'https://actions.google.com/sounds/v1/fantasy/magic_chime.ogg', sound: 'Bintang' },
  { label: 'Balon', emoji: '🎈', audioUrl: 'https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg', sound: 'Balon' },
  { label: 'Mobil', emoji: '🚗', audioUrl: 'https://actions.google.com/sounds/v1/transportation/car_horn.ogg', sound: 'Mobil' },
  { label: 'Roket', emoji: '🚀', audioUrl: 'https://actions.google.com/sounds/v1/science_fiction/rocket_launch.ogg', sound: 'Roket' },
  { label: 'Kodok', emoji: '🐸', audioUrl: 'https://actions.google.com/sounds/v1/animals/frog_croak.ogg', sound: 'Kodok' },
  { label: 'Anjing', emoji: '🐶', audioUrl: 'https://actions.google.com/sounds/v1/animals/dog_barking.ogg', sound: 'Anjing' },
  { label: 'Kereta', emoji: '🚂', audioUrl: 'https://actions.google.com/sounds/v1/transportation/train_horn.ogg', sound: 'Kereta' },
];

export const getRandomElement = () => {
  return randomElements[Math.floor(Math.random() * randomElements.length)];
};

export const restaurantInfo = {
  name: 'Fogo Prime',
  address: 'Av. Miguel Bombarda, 1050-161 Lisboa, Portugal',
  phoneDisplay: '965 366 666',
  phoneHref: 'tel:+351218006981',
  mapsUrl:
    'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd193315d025ff81:0x9a31f8b03995aaf0',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.163704016821!2d-9.148969024024598!3d38.73700547175885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193315d025ff81%3A0x9a31f8b03995aaf0!2sFogo%20Prime!5e0!3m2!1sen!2spt!4v1788615747459!5m2!1sen!2spt',
  reservationWidgetUrl: 'https://reserve.intelis.pt/fogoprime',
  fullMenuPdfUrl: '/Menu.pdf',
  instagram: 'https://www.instagram.com/fogoprime/?hl=en',
  featuredTikTok:
    'https://www.tiktok.com/@ondeirempt/video/7672369561835965718',
  facebook: 'https://www.facebook.com/p/Prime-Fogo-61593334026375/',
  complaintsBook: 'https://www.livroreclamacoes.pt/Inicio/',
} as const;

export const restaurantDataSource = {
  supabaseUrl: 'https://tccjxuzbekhycyfzjkxh.supabase.co',
  publishableKey: 'sb_publishable_kvF-YqPsvxDSJdcM9e8ajQ_QCVU4mps',
  restaurantId: 'fogoprime',
} as const;

export const pricing = [
  { key: 'adults', price: '24,90 €' },
  { key: 'children', price: '10,90 €' },
] as const;

export const foodImages = [
  { src: '/images/food-1.webp', key: 'foodOne' },
  { src: '/images/food-2.webp', key: 'foodTwo' },
  { src: '/images/food-3.webp', key: 'foodThree' },
  { src: '/images/food-4.webp', key: 'foodFour' },
  { src: '/images/food-5.webp', key: 'foodFive' },
  { src: '/images/food-6.webp', key: 'foodSix' },
  { src: '/images/food-7.webp', key: 'foodSeven' },
] as const;

export const spaceImages = [
  { src: '/images/space-0.webp', key: 'space0' },
  { src: '/images/space-1.webp', key: 'space1' },
  { src: '/images/space-2.webp', key: 'space2' },
  { src: '/images/space-3.webp', key: 'space3' },
  { src: '/images/space-4.webp', key: 'space4' },
  { src: '/images/space-5.webp', key: 'space5' },
] as const;

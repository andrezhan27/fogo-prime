export const restaurantInfo = {
  name: 'Fogo Prime',
  address: 'Av. Miguel Bombarda, 1050-161 Lisboa, Portugal',
  phoneDisplay: '965 366 666',
  phoneHref: 'tel:+351965366666',
  mapsUrl:
    'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd193315d025ff81:0x9a31f8b03995aaf0',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.163704016821!2d-9.148969024024598!3d38.73700547175885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193315d025ff81%3A0x9a31f8b03995aaf0!2sFogo%20Prime!5e0!3m2!1sen!2spt!4v1788615747459!5m2!1sen!2spt',
  reservationWidgetUrl: 'https://reserve.intelis.pt/fogoprime',
  instagram: 'https://www.instagram.com/fogoprime/?hl=en',
  instagramVideo: 'https://www.instagram.com/p/Db27TGzsIMd/?hl=en',
  featuredTikTok:
    'https://www.tiktok.com/@ondeirempt/video/7672369561835965718',
  tiktok: 'https://www.tiktok.com/@chongqingnoodles722',
  facebook: 'https://www.facebook.com/p/Prime-Fogo-61593334026375/',
  complaintsBook: 'https://www.livroreclamacoes.pt/Inicio/',
  privacy_policy_url: '' as string,
  terms_and_conditions_url: '' as string,
} as const;

export const pricing = [
  { key: 'adults', price: '24,90 €' },
  { key: 'children', price: '10,90 €' },
] as const;

export const foodImages = [
  { src: '/images/food-1.jpg', key: 'foodOne' },
  { src: '/images/food-group-1.jpg', key: 'foodTwo' },
  { src: '/images/food-group-2.jpg', key: 'foodThree' },
  { src: '/images/food-4.jpg', key: 'foodFour' },
] as const;

export const spaceImages = [
  { src: '/images/space-0.jpg', key: 'space0' },
  { src: '/images/space-1.jpg', key: 'space1' },
  { src: '/images/space-2.jpg', key: 'space2' },
  { src: '/images/space-3.jpg', key: 'space3' },
  { src: '/images/space-4.jpg', key: 'space4' },
  { src: '/images/space-5.jpg', key: 'space5' },
] as const;

export const socialVideos = [
  {
    href: restaurantInfo.instagramVideo,
    thumbnail: '/images/food-1.jpg',
    platform: 'Instagram',
    key: 'instagramVideo',
  },
  {
    href: restaurantInfo.featuredTikTok,
    thumbnail: '/images/hero-mobile.jpg',
    platform: 'TikTok',
    key: 'featuredTikTok',
  },
  {
    href: restaurantInfo.tiktok,
    thumbnail: '/images/food-4.jpg',
    platform: 'TikTok',
    key: 'tiktokProfile',
  },
] as const;

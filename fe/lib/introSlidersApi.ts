import baseAxios from './baseAxios';
import { Slider } from '../app/interface/introSlider';
// import IntroSliderProps from '../app/interface/introSlider';

export default async function fetchSliders(): Promise<Slider[]> {
  try {
    const res = await baseAxios.get('/sliders'); 
    const sliders = res.data as Slider[];
    return sliders;
  } catch (err) {
    console.error('Lỗi fetch sliders:', err);
    return [];
  }
}

// export async function fetchIntroSilders(): Promise<IntroSliderProps[]> {
//   try {
//     const res = await baseAxios.get('/introsliders');
//     const introslider = res.data as { data: IntroSliderProps[] };
//     return introslider.data.map(introslider => ({
//       id: introslider.id,
//       name: introslider.name,
//       slug: introslider.slug, 
//       image: introslider.image,
//       description: introslider.description,
//       is_active: introslider.is_active,
//       created_at: introslider.created_at,
//       updated_at: introslider.updated_at,
//       link: introslider.link,
//     }));
//   } catch (err) {
//     console.error('Lỗi fetch intro sliders:', err);
//     return [];
//   }
// }

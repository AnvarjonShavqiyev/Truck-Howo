import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'UZ', 
    resources: {
      UZ: {
        translation: {
            "bizHaqimizda":"Biz haqimizda",
            "maxsulotlar":"Maxsulotlar",
            "asosiy":"Asosiy",
            "hero-information":"Truck uchun eng yaxshi extiyot qismlarni oling.Eng yaxshilarini ilinamiz :)",
            "extiyot-qismlar":"Extiyot qismlar"
        },
      },
      RU:{
        translation: {
            "bizHaqimizda":"O нас",
            "maxsulotlar":"Продукты",
            "asosiy":"Oсновной",
            "hero-information":"Приобретайте лучшие запчасти для вашего грузовика.Мы опубликуем лучшие :)",
            "extiyot-qismlar":"Запасные части"
        },
      }
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;

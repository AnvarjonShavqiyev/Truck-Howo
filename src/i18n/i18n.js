import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const lang = localStorage.getItem('lang') || 'uz'

i18n
  .use(initReactI18next)
  .init({
    lng: lang, 
    resources: {
      uz: {
        translation: {
            "bizHaqimizda":"Biz haqimizda",
            "maxsulotlar":"Maxsulotlar",
            "asosiy":"Asosiy",
            "hero-information":"Truck uchun eng yaxshi extiyot qismlarni oling.Eng yaxshilarini ilinamiz :)",
            "extiyot-qismlar":"Extiyot qismlar",
            "check-title":"Yuqori sifatli mahsulot",
            "check-info":"Arzon narxlarda yuqori sifatli mahsulotlar sotib olish",
            "clock-title":"24 soat xizmat",
            "filiallar":"filiallar",
            "tajriba":"yillik tajriba",
            "mijozlar":"mamnun mijozlar",
            "hamkorlar":"hamkorlar",
            "brandlar":"Brandlar",
            "contact":"Bog'lanish",
            "seeAll":"Hammasini ko'rish",
            "manzil":"Manzilimiz",
            "kuzating":"Bizni tarmoqlarda kuzating",
            "boglaning":"Biz bilan bog'laning" ,
            "location":"Toshkent shahar, Sergeli tumani, Yangi Sergeli ko'chasi,Sergeli moshina bozori, avto ehtiyot qismlar 11/2-18 do’kon."
          },
      },
      ru:{
        translation: {
            "bizHaqimizda":"O нас",
            "maxsulotlar":"Продукты",
            "asosiy":"Oсновной",
            "hero-information":"Приобретайте лучшие запчасти для вашего грузовика.Мы опубликуем лучшие :)",
            "extiyot-qismlar":"Запасные части",
            "check-title":"Высококачественный продукт",
            "check-info":"Покупайте качественную продукцию по низким ценам",
            "clock-title":"24-часовое обслуживание",
            "filiallar":"филиал",
            "tajriba":"года опыта",
            "mijozlar":"довольных клиентов",
            "hamkorlar":"партнеры",
            "brandlar":"Бренды",
            "contact":"Связаться с нами",
            "seeAll":"Увидеть все",
            "manzil":"Адрес",
            "kuzating":"Следуйте за нами в сетях",
            "boglaning":"Связаться с нами",
            "location":"Город Ташкент, Сергелийский район, улица Новый Сергели, Сергелийский авторынок, магазин автозапчастей 11/2-18."
        },
      }
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;

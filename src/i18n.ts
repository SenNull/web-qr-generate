import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 从URL获取语言参数
const getLanguageFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('lang');
};

const resources = {
  en: {
    translation: {
      title: 'QR Code Generator',
      inputPlaceholder: 'Enter text here...',
      inputLabel: 'Please enter the text to generate QR code:',
      version: 'Version',
      error: {
        versionFailed: 'Failed to get version number, using default version'
      }
    }
  },
  zh: {
    translation: {
      title: '二维码生成器',
      inputPlaceholder: '在此输入文本...',
      inputLabel: '请输入要生成二维码的文本：',
      version: '版本',
      error: {
        versionFailed: '获取版本号失败，使用默认版本号'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'navigator'], // 优先使用URL参数，然后是浏览器语言
      lookupQuerystring: 'lang', // URL参数名为lang
    }
  });

// 如果URL中有语言参数，立即切换语言
const urlLang = getLanguageFromUrl();
if (urlLang && (urlLang === 'en' || urlLang === 'zh')) {
  i18n.changeLanguage(urlLang);
}

export default i18n; 
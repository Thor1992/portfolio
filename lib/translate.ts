import axios from 'axios';

const SILICON_CLOUD_API_KEY = 'sk-eymzeuvxuqqaeskhkmnjeozizypbijaramufsjtecebhbbhr';
const SILICON_CLOUD_API_URL = 'https://api.siliconflow.cn/v1/translate';

export async function translateToEnglish(text: string): Promise<string> {
  if (!SILICON_CLOUD_API_KEY) {
    throw new Error('请配置 SiliconCloud API Key。您可以在环境变量中设置 SILICON_CLOUD_API_KEY');
  }

  try {
    const response = await axios.post(SILICON_CLOUD_API_URL, {
      text,
      source_language: 'zh',
      target_language: 'en',
    }, {
      headers: {
        'Authorization': `Bearer ${SILICON_CLOUD_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.data && response.data.translation) {
      return response.data.translation;
    }

    return text;
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
}
export interface PageContent {
  [key: string]: any;
}

const API_BASE_URL = 'https://api.test.soa-dev.net/api/v1';

export async function fetchPageContent(lang: string): Promise<PageContent> {
  try {
    console.log(`Fetching content for language: ${lang}`);
    const response = await fetch(`${API_BASE_URL}/pages?lang=${lang}`, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response:', data);

    // The API returns an array with a single object, we take the first item
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid API response format');
    }

    // Extract the content object from the array
    const content = data[0];

    // Remove the id and language fields as they're not needed for translations
    const { id, language, ...translationContent } = content;

    console.log('Processed content:', translationContent);

    // Return the content object directly for next-intl to use
    return translationContent;
  } catch (error) {
    console.error('Error fetching page content:', error);
    throw error;
  }
}

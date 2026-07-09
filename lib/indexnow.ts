import { SITE_URL } from './og';

/** IndexNow API key — hosted at /{key}.txt in public/ */
export const INDEXNOW_KEY = '97fad61e97c347309a1f078e4f810086';

export const INDEXNOW_HOST = 'rkcautomotive.com';

const INDEXNOW_API = 'https://api.indexnow.org/indexnow';

export function indexNowKeyLocation(): string {
  return `${SITE_URL}/${INDEXNOW_KEY}.txt`;
}

export type IndexNowSubmitResult = {
  ok: boolean;
  status: number;
  submitted: number;
};

/**
 * Notify Bing and other IndexNow engines that URLs were added or updated.
 * @see https://www.indexnow.org/documentation
 */
export async function submitUrlsToIndexNow(urls: string[]): Promise<IndexNowSubmitResult> {
  const urlList = [...new Set(urls.map((u) => u.trim()).filter(Boolean))];
  if (urlList.length === 0) {
    return { ok: false, status: 0, submitted: 0 };
  }

  const response = await fetch(INDEXNOW_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: indexNowKeyLocation(),
      urlList,
    }),
  });

  // 200 = accepted, 202 = accepted and queued
  return {
    ok: response.status === 200 || response.status === 202,
    status: response.status,
    submitted: urlList.length,
  };
}

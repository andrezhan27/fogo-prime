import { restaurantDataSource } from '@/data/restaurant';

export type RestaurantLegalUrls = {
  privacy_policy_url: string | null;
  terms_and_conditions_url: string | null;
};

export const emptyRestaurantLegalUrls: RestaurantLegalUrls = {
  privacy_policy_url: null,
  terms_and_conditions_url: null,
};

function normalizeUrl(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value : null;
}

export async function getRestaurantLegalUrls(
  signal?: AbortSignal,
): Promise<RestaurantLegalUrls> {
  const { supabaseUrl, publishableKey, restaurantId } = restaurantDataSource;
  const query = new URLSearchParams({
    select: 'privacy_policy_url,terms_and_conditions_url',
    id: `eq.${restaurantId}`,
    limit: '1',
  });

  const response = await fetch(
    `${supabaseUrl}/rest/v1/restaurants?${query.toString()}`,
    {
      headers: {
        Accept: 'application/json',
        'Accept-Profile': 'public',
        apikey: publishableKey,
      },
      signal,
    },
  );

  if (!response.ok) {
    throw new Error(
      `Unable to load restaurant legal URLs (${response.status})`,
    );
  }

  const [restaurant] = (await response.json()) as RestaurantLegalUrls[];

  return {
    privacy_policy_url: normalizeUrl(restaurant?.privacy_policy_url),
    terms_and_conditions_url: normalizeUrl(
      restaurant?.terms_and_conditions_url,
    ),
  };
}

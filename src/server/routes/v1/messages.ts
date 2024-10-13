import { defineEventHandler } from 'h3';

export type TMessagesResponse = {
  data: [
    {
      attributes: {
        content: string;
        inserted_at: string;
        updated_at: string;
      };
      id: string;
      links: {};
      meta: {};
      type: string;
      relationships: {};
    },
  ];
};

export default defineEventHandler(async () => {
  const response = await fetch(
    `${import.meta.env['VITE_API_URL']}/api/messages`,
  );
  const messages: TMessagesResponse = await response.json();

  return messages;
});

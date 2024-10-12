import { eventHandler, defineEventHandler } from 'h3';

export type TMessagesResponse = {
  data: [
    {
      attributes: {
        content: string;
      };
      id: string;
      links: {};
      meta: {};
      type: string;
      relationships: {};
    }
  ];
};

export default defineEventHandler(async () => {
  const response = await fetch('http://localhost:4000/api/messages');
  const messages: TMessagesResponse = await response.json();

  return messages;
});

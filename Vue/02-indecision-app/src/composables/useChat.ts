import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no-response.interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([
    {
      id: new Date().getTime(),
      message: 'Quieres ir a tomar cafe?',
      itsMine: true,
    },
    {
      id: new Date().getTime(),
      message: 'No',
      itsMine: false,
      image: 'https://yesno.wtf/assets/no/19-2062f4c91189b1f88a9e809c10a5b0f0.gif',
    },
  ]);

  const getHerResponse = async (): Promise<YesNoResponse> => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  const onMessage = async (message: string) => {
    if (message.length === 0) return;
    messages.value.push({
      id: new Date().getTime(),
      message,
      itsMine: true,
    });

    // Evaluar si termina con un ?

    if (!message.endsWith('?')) return;
    await sleep(1);
    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: new Date().getTime(),
      message: answer,
      itsMine: false,
      image,
    });
  };

  return {
    messages,
    onMessage,
  };
};

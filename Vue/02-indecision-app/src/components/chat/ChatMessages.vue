<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watchEffect, nextTick } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const {messages} = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watchEffect(async () => {
    console.log("Mensajes: " + messages.length);
    await nextTick();
    chatRef.value?.scrollTo({
        top: chatRef.value.scrollHeight,
        behavior: 'smooth',
    });
});
</script>

<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- Example Message -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
      <!-- :message="message.message"
        :itsMine="message.itsMine"
        :image="message.image" -->
    </div>
  </div>
</template>

<template>
  <div v-if="isOpen" class="modal modal-open z-50">
    <div class="modal-box bg-navy-light border border-electric-blue/30 flex flex-col h-[600px] max-h-[90vh] w-full max-w-lg p-0">
      <!-- Header -->
      <div class="flex items-center justify-between px-5 py-4 border-b border-electric-blue/20">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-electric-blue animate-pulse"></span>
          <h3 class="font-bold text-white text-lg">DevBot</h3>
        </div>
        <button
          class="btn btn-ghost btn-sm btn-circle text-muted hover:text-white"
          aria-label="Close DevBot"
          @click="emit('close')"
        >
          ✕
        </button>
      </div>

      <!-- Message list -->
      <div ref="messageListRef" class="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3">
        <!-- Greeting -->
        <div class="chat chat-start">
          <div class="chat-bubble bg-navy border border-electric-blue/20 text-white text-sm">
            Hi! I'm DevBot — Kutlo's assistant. What kind of project are you looking to build?
          </div>
        </div>

        <!-- Conversation messages -->
        <template v-for="(msg, index) in messages" :key="index">
          <div :class="msg.role === 'user' ? 'chat chat-end' : 'chat chat-start'">
            <div
              :class="[
                'chat-bubble text-sm',
                msg.role === 'user'
                  ? 'bg-electric-blue text-white'
                  : 'bg-navy border border-electric-blue/20 text-white'
              ]"
            >
              {{ msg.content }}
            </div>
          </div>
        </template>

        <!-- Loading indicator -->
        <div v-if="isLoading" class="chat chat-start">
          <div class="chat-bubble bg-navy border border-electric-blue/20 text-muted text-sm">
            <span class="loading loading-dots loading-sm"></span>
          </div>
        </div>
      </div>

      <!-- Input area -->
      <div class="px-5 py-4 border-t border-electric-blue/20">
        <form class="flex gap-2" @submit.prevent="handleSend">
          <input
            v-model="inputText"
            type="text"
            placeholder="Ask about services, pricing..."
            class="input input-bordered flex-1 bg-navy border-electric-blue/30 text-white placeholder-muted text-sm focus:border-electric-blue focus:outline-none"
            :disabled="isLoading"
          />
          <button
            type="submit"
            class="btn bg-electric-blue hover:bg-electric-blue-light border-none text-white btn-square"
            :disabled="isLoading || !inputText.trim()"
            aria-label="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
      </div>
    </div>

    <!-- Backdrop -->
    <div class="modal-backdrop bg-black/60" @click="emit('close')"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useChatbot } from '../composables/useChatbot'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const { messages, isLoading, sendMessage, clearMessages } = useChatbot()
const inputText = ref('')
const messageListRef = ref<HTMLElement | null>(null)

// Clear messages when modal opens fresh
watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      clearMessages()
    }
  }
)

// Auto-scroll to bottom when new messages arrive
watch(
  messages,
  async () => {
    await nextTick()
    if (messageListRef.value) {
      messageListRef.value.scrollTop = messageListRef.value.scrollHeight
    }
  },
  { deep: true }
)

async function handleSend() {
  const text = inputText.value.trim()
  if (!text || isLoading.value) return
  inputText.value = ''
  await sendMessage(text)
}
</script>

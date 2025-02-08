<script setup lang="ts">
import { useField } from 'vee-validate';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
    name: string
}>()

const { value, errors } = useField(() => props.name)

const inputs = ref<HTMLInputElement[]>([])
const digits = ref(Array(6).fill(''))

const otpCode = computed(() => digits.value.join(""))

function moveToNext(event: Event, index: number) {
  const target = event.target as HTMLInputElement
  
  if (target.value.match(/\d/) && index < inputs.value.length - 1) {
    inputs.value[index + 1].focus()
  }
}

function moveToPrev(event: KeyboardEvent, index: number) {
  if (event.key === "Backspace" && index > 0 && (event.target as HTMLInputElement).value === "") {
    inputs.value[index - 1].focus();
  }
}

watch(otpCode, newVal => {
  value.value = newVal
})
</script>

<template>
    <div class="flex items-center justify-center" dir="ltr">
        <div class="grid grid-cols-6 gap-x-3 max-w-370px">
            <input
                v-for="(_, index) in 6"
                :key="index"
                ref="inputs"
                pattern="\d*"
                maxlength="1"
                v-model="digits[index]"
                class="text-center outline-none text-heading-4 s-56px border-1 border-gray-6 rounded-4"
                type="text"
                @input="moveToNext($event, index)"
                @keydown="moveToPrev($event, index)"
            >
        </div>
        <span class="text-error-1 mt-2 text-caption-2" v-if="errors[0]">{{ errors[0] }}</span>
    </div>
</template>
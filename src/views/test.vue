<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue';
import { ref } from 'vue';
import Bank from '@/assets/icons/bank.svg'
import InputPassword from '@/components/InputPassword.vue';

const inputTest1 = ref('')
</script>

<template>
    <div>
        <h1>colors</h1>
        <div class="flex flex-wrap">
            <div class="w-100px h-100px bg-primary-50"></div>
            <div class="w-100px h-100px bg-primary-100"></div>
            <div class="w-100px h-100px bg-primary-200"></div>
            <div class="w-100px h-100px bg-primary-300"></div>
            <div class="w-100px h-100px bg-primary-400"></div>
            <div class="w-100px h-100px bg-primary-500"></div>
            <div class="w-100px h-100px bg-primary-600"></div>
            <div class="w-100px h-100px bg-primary-700"></div>
            <div class="w-100px h-100px bg-primary-800"></div>
            <div class="w-100px h-100px bg-primary-900"></div>
            <div class="w-100px h-100px bg-primary-950"></div>
            <div class="w-100px h-100px bg-black"></div>
            <div class="w-100px h-100px bg-gray-1"></div>
            <div class="w-100px h-100px bg-gray-2"></div>
            <div class="w-100px h-100px bg-gray-3"></div>
            <div class="w-100px h-100px bg-gray-4"></div>
            <div class="w-100px h-100px bg-gray-5"></div>
            <div class="w-100px h-100px bg-gray-6"></div>
            <div class="w-100px h-100px bg-gray-7"></div>
            <div class="w-100px h-100px bg-gray-8"></div>
            <div class="w-100px h-100px bg-gray-9"></div>
            <div class="w-100px h-100px bg-gray-10"></div>
            <div class="w-100px h-100px bg-gray-11"></div>
            <div class="w-100px h-100px bg-white"></div>
            <div class="w-100px h-100px bg-error-1"></div>
            <div class="w-100px h-100px bg-error-2"></div>
            <div class="w-100px h-100px bg-success-1"></div>
            <div class="w-100px h-100px bg-success-2"></div>
            <div class="w-100px h-100px bg-info-1"></div>
            <div class="w-100px h-100px bg-info-2"></div>
            <div class="w-100px h-100px bg-warning-1"></div>
            <div class="w-100px h-100px bg-warning-2"></div>
            <div class="w-100px h-100px bg-chart"></div>
        </div>
        <h1>Shadow</h1>
        <div class="w-100px h-100px shadow"></div>
        <h1>Typography</h1>
        <p class="text-display-1">بانک اروند</p>
        <p class="text-display-2">بانک اروند</p>
        <p class="text-heading-1">بانک اروند</p>
        <p class="text-heading-2">بانک اروند</p>
        <p class="text-heading-3">بانک اروند</p>
        <p class="text-heading-4">بانک اروند</p>
        <p class="text-heading-5">بانک اروند</p>
        <p class="text-heading-6">بانک اروند</p>
        <p class="text-body-1">بانک اروند</p>
        <p class="text-body-2">بانک اروند</p>
        <p class="text-body-3">بانک اروند</p>
        <p class="text-body-4">بانک اروند</p>
        <p class="text-body-5">بانک اروند</p>
        <p class="text-caption-1">بانک اروند</p>
        <p class="text-caption-2">بانک اروند</p>
        <p class="text-button-1">بانک اروند</p>
        <p class="text-button-2">بانک اروند</p>
        <p class="text-overline-1">بانک اروند</p>
        <p class="text-overline-2">بانک اروند</p>
        <h1 class="mt-4">Inputs</h1>
        <div class="p-10 grid grid-cols-1 gap-y-4">
            <BaseInput id="test1" type="text" placeholder="تست" v-model="inputTest1" />
            <BaseInput id="test2" type="text" :size="48" placeholder="تست" v-model="inputTest1" />
            <BaseInput id="test3" type="text" :size="48" placeholder="تست" v-model="inputTest1" :prepend-icon="Bank" />
            <InputPassword id="test4" v-model="inputTest1" placeholder="رمز عبور" />
        </div>
    </div>
</template>
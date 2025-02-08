<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue';
import Bank from '@/assets/icons/bank.svg'
import InputPassword from '@/components/InputPassword.vue';
import { useForm } from 'vee-validate';
import InputNumber from '@/components/InputNumber.vue';
import TwoFACode from '@/components/TwoFACode.vue';
import BaseButton from '@/components/base/BaseButton.vue';

useForm({
    initialValues: {
        test1: '',
        test2: '',
        test3: '',
        test4: '',
        test5: undefined,
        test6: '',
    }
})
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
            <BaseInput name="test1" type="text" placeholder="تست" />
            <BaseInput name="test2" type="text" :size="48" placeholder="تست" />
            <BaseInput name="test3" type="text" :size="48" placeholder="تست" :prepend-icon="Bank" />
            <InputPassword name="test4" placeholder="رمز عبور" />
            <InputNumber name="test5" placeholder="عدد" />
            <TwoFACode name="test6" />
        </div>
        <h1 class="mt-4">Buttons</h1>
        <div class="flex items-center flex-wrap flex-gap-1">
            <BaseButton>تست</BaseButton>
            <BaseButton size="48">تست</BaseButton>
            <BaseButton size="56">تست</BaseButton>
            <BaseButton style-type="outline">تست</BaseButton>
            <BaseButton style-type="outline" size="48">تست</BaseButton>
            <BaseButton style-type="outline" size="56">تست</BaseButton>
            <BaseButton style-type="text">تست</BaseButton>
            <BaseButton style-type="text" size="48">تست</BaseButton>
            <BaseButton style-type="text" size="56">تست</BaseButton>
            <BaseButton disabled>تست</BaseButton>
            <BaseButton disabled size="48">تست</BaseButton>
            <BaseButton disabled size="56">تست</BaseButton>
            <BaseButton disabled style-type="outline">تست</BaseButton>
            <BaseButton disabled style-type="outline" size="48">تست</BaseButton>
            <BaseButton disabled style-type="outline" size="56">تست</BaseButton>
            <BaseButton disabled style-type="text">تست</BaseButton>
            <BaseButton disabled style-type="text" size="48">تست</BaseButton>
            <BaseButton disabled style-type="text" size="56">تست</BaseButton>
            <BaseButton color="neutral">تست</BaseButton>
            <BaseButton color="neutral" size="48">تست</BaseButton>
            <BaseButton color="neutral" size="56">تست</BaseButton>
            <BaseButton color="neutral" style-type="outline">تست</BaseButton>
            <BaseButton color="neutral" style-type="outline" size="48">تست</BaseButton>
            <BaseButton color="neutral" style-type="outline" size="56">تست</BaseButton>
            <BaseButton color="neutral" style-type="text">تست</BaseButton>
            <BaseButton color="neutral" style-type="text" size="48">تست</BaseButton>
            <BaseButton color="neutral" style-type="text" size="56">تست</BaseButton>
            <BaseButton color="neutral" disabled>تست</BaseButton>
            <BaseButton color="neutral" disabled size="48">تست</BaseButton>
            <BaseButton color="neutral" disabled size="56">تست</BaseButton>
            <BaseButton color="neutral" disabled style-type="outline">تست</BaseButton>
            <BaseButton color="neutral" disabled style-type="outline" size="48">تست</BaseButton>
            <BaseButton color="neutral" disabled style-type="outline" size="56">تست</BaseButton>
            <BaseButton color="neutral" disabled style-type="text">تست</BaseButton>
            <BaseButton color="neutral" disabled style-type="text" size="48">تست</BaseButton>
            <BaseButton color="neutral" disabled style-type="text" size="56">تست</BaseButton>

            <BaseButton :prepend-icon="Bank">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" style-type="outline">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" style-type="outline" size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" style-type="outline" size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" style-type="text">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" style-type="text" size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" style-type="text" size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" disabled>تست</BaseButton>
            <BaseButton :prepend-icon="Bank" disabled size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" disabled size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" disabled style-type="outline">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" disabled style-type="outline" size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" disabled style-type="outline" size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" disabled style-type="text">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" disabled style-type="text" size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" disabled style-type="text" size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" style-type="outline">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" style-type="outline" size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" style-type="outline" size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" style-type="text">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" style-type="text" size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" style-type="text" size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" disabled>تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" disabled size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" disabled size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" disabled style-type="outline">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" disabled style-type="outline" size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" disabled style-type="outline" size="56">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" disabled style-type="text">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" disabled style-type="text" size="48">تست</BaseButton>
            <BaseButton :prepend-icon="Bank" color="neutral" disabled style-type="text" size="56">تست</BaseButton>

            <BaseButton :append-icon="Bank">تست</BaseButton>
            <BaseButton :append-icon="Bank" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" style-type="outline">تست</BaseButton>
            <BaseButton :append-icon="Bank" style-type="outline" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" style-type="outline" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" style-type="text">تست</BaseButton>
            <BaseButton :append-icon="Bank" style-type="text" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" style-type="text" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" disabled>تست</BaseButton>
            <BaseButton :append-icon="Bank" disabled size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" disabled size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" disabled style-type="outline">تست</BaseButton>
            <BaseButton :append-icon="Bank" disabled style-type="outline" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" disabled style-type="outline" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" disabled style-type="text">تست</BaseButton>
            <BaseButton :append-icon="Bank" disabled style-type="text" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" disabled style-type="text" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" style-type="outline">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" style-type="outline" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" style-type="outline" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" style-type="text">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" style-type="text" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" style-type="text" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" disabled>تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" disabled size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" disabled size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" disabled style-type="outline">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" disabled style-type="outline" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" disabled style-type="outline" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" disabled style-type="text">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" disabled style-type="text" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" color="neutral" disabled style-type="text" size="56">تست</BaseButton>

            <BaseButton :append-icon="Bank" :prepend-icon="Bank">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" style-type="outline">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" style-type="outline" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" style-type="outline" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" style-type="text">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" style-type="text" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" style-type="text" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" disabled>تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" disabled size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" disabled size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" disabled style-type="outline">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" disabled style-type="outline" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" disabled style-type="outline" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" disabled style-type="text">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" disabled style-type="text" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" disabled style-type="text" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" style-type="outline">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" style-type="outline" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" style-type="outline" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" style-type="text">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" style-type="text" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" style-type="text" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" disabled>تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" disabled size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" disabled size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" disabled style-type="outline">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" disabled style-type="outline" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" disabled style-type="outline" size="56">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" disabled style-type="text">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" disabled style-type="text" size="48">تست</BaseButton>
            <BaseButton :append-icon="Bank" :prepend-icon="Bank" color="neutral" disabled style-type="text" size="56">تست</BaseButton>
        </div>
    </div>
</template>
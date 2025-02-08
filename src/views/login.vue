<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue';
import BaseLogo from '@/components/base/BaseLogo.vue';
import InputPassword from '@/components/InputPassword.vue';
import { useForm } from 'vee-validate';

const {} = useForm({
    initialValues: {
        username: '',
        password: '',
    }
})
</script>

<template>
    <div class="login s-full flex items-center justify-center">
        <div class="bg-white rounded-4 p-10 flex flex-col items-center max-w-490px w-full">
            <BaseLogo typography class="h-51px" />
            <p class="mt-4 text-primary-700 text-body-5 text-center">
                مشتری گرامی در صورت بروز مشکل در هنگام ورود به نت بانک،‌ خواهشمند است حافظه نهان مرورگر خود را پاک نمایید.
            </p>
            <BaseInput type="text" name="username" placeholder="نام کاربری" class="mt-10 w-full" />
            <InputPassword name="password" placeholder="رمز عبور" class="mt-6 w-full" />
        </div>
    </div>
</template>
<template>
    <footer class="mt-[140px] flex-wrap flex pt-[140px] px-[112px] w-full h-full bg-[#E2BEFF]">
        <div class="flex flex-col gap-[56px]">
            <span class="text-base">
                Is there a project?
            </span>
            <span class="text-[112px] max-w-[464px] underline underline-offset-8 decoration-2 leading-[100%]">
                Let’s work together
            </span>
        </div>
        <div class="ml-[368px] max-w-[152px]">
            <p>For all questions</p>
            <p>
                +7 (920) 278—00—68 <br>
                qtim@agency.com
            </p>
            <p class="mt-[36px]">
                Office in Russia
            </p>
            <p>
                139 Ruben Station Lake Drew, NM 52678 
            </p>
            <UiLocation />
            <p class="mt-[36px]">
                Office in Dubai
            </p>
            <p>
                139 Ruben Station Lake Drew, NM 52678 
            </p>
            <UiLocation />
        </div>
        <div class="mt-[143px] flex w-full items-end justify-between">
            <UiFooterNav :items="['Facebook', 'Instagram', 'Telegram']" />
            <div class="w-full max-w-[358px] h-[179px] flex items-end justify-center bg-black rounded-t-full">
                <span class="text-white text-[32px] pb-4">Go</span>
            </div>
            <UiFooterNav :items="['Behance', 'Linkedn', 'Privacy Policy']" />
        </div>
    </footer>
</template>
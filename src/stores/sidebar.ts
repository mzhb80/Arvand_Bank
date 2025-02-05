import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed } from "vue";

export const useSidebarStore = defineStore('sidebar', () => {
    const breakpoints = useBreakpoints(breakpointsTailwind)

    function showText() {
        return breakpoints.greaterOrEqual('md')
    }


    return { showText }
})
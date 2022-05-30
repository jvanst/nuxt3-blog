import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  /**
   * Temporary scroll fix while waiting for
   * https://github.com/nuxt/framework/pull/3851
   */
  scrollBehavior() {
    return { top: 0 }
  },
}
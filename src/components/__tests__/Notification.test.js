import { expect, test, describe } from 'vitest'
import { mount } from '@vue/test-utils'

import NotificationToast from '../NotificationToast.vue'

describe('NotificationToast', () => {
  test('renders notification properly', () => {
    const wrapper = mount(NotificationToast, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

import { expect, test, describe } from 'vitest'
import { mount } from '@vue/test-utils'

import NotificationToast from '../NotificationToast.vue'

describe('NotificationToast', () => {
  test('renders notification style properly for error', () => {
    const status = "error"
    const elementWrapper = mount(NotificationToast, {
        props: {
            status
        }
    })

    expect(elementWrapper.classes()).toEqual(expect.arrayContaining(['notification--error']))
  })
})

import { expect, test, describe } from 'vitest'
import { mount } from '@vue/test-utils'

import NotificationToast from '../NotificationToast.vue'

describe('NotificationToast', () => {
//   test for error message
  test('renders notification style properly for error', () => {
    const status = "error"
    const elementWrapper = mount(NotificationToast, {
        props: {
            status
        }
    })

    expect(elementWrapper.classes()).toEqual(expect.arrayContaining(['notification--error']))
  })
  
//   test for success message
  test('renders notification style properly for success', () => {
    const status = "success"
    const elementWrapper = mount(NotificationToast, {
        props: {
            status
        }
    })

    expect(elementWrapper.classes()).toEqual(expect.arrayContaining(['notification--success']))
  })

  //   test for info message
  test('renders notification style properly for info', () => {
    const status = "info"
    const elementWrapper = mount(NotificationToast, {
        props: {
            status
        }
    })

    expect(elementWrapper.classes()).toEqual(expect.arrayContaining(['notification--info']))
  })

})

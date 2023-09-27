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

  //   check the slide up test case
  test('norification slide up when the message is empty', ()=>{
    const message = ''
    const elementWrapper = mount(NotificationToast, {
        props: {
            message
        }
    })
    expect(elementWrapper.classes('notification--slide')).toBe(false)
  })

  //   test case for event to the functionality
  test('emit event when close the button', async ()=>{
    const elementWrapper = mount(NotificationToast, {
        data() {
            return {
                isClicked: false
            }
        }
    })

    // const button = elementWrapper.find('button')
    await elementWrapper.find('button').trigger('click')

    expect(elementWrapper.emitted()).toHaveProperty('clear-notification')
  })


})

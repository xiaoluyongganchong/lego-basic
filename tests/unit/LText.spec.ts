import { shallowMount } from '@vue/test-utils'
import LText from '@/components/LText.vue'
import { textDefaultProps } from '../../src/defaultProps'

describe('LText.vue', () => {
  const originalLocationHref = window.location.href
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' }
    })
  })
  afterEach(() => {
    window.location.href = originalLocationHref
  })
  const msg = 'test'
  const props = {
    ...textDefaultProps,
    text: msg
  }
  const wrapper = shallowMount(LText, { props })
  it('defalut LText render', () => {
    // should have the correct text
    expect(wrapper.text()).toBe(msg)
    //should be defalt div tag
    expect(wrapper.element.tagName).toBe('DIV')
    //should have contain css attr
    const style = wrapper.attributes().style
    expect(style.includes('font-size')).toBeTruthy()
    //should not have prop has been filtered
    expect(style?.includes('actionType')).toBeFalsy()
  })
  it('LText with actionType url should trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      tag: 'H2'
    }
    const wrapper = shallowMount(LText, { props })
    expect(wrapper.element.tagName).toBe('H2')
    await wrapper.trigger('click')
    expect(window.location.href).toBe('http://dummy.url')
  })
  it('LText with isEditing should trigger location change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'http://dummy.url',
      isEditing: true
    }
    const wrapper = shallowMount(LText, { props })
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe('http://dummy.url')
  })
})
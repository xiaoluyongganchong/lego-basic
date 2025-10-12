import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { vi, describe, it, expect } from 'vitest'
import  flushPromises  from 'flush-promises'
import axios from 'axios'
vi.mock('axios')
const mockAxios = axios as unknown as { get: vi.Mock; post: vi.Mock }
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    // 创建组件实例并传入 props
    const wrapper = shallowMount(HelloWorld, {
      props: { msg: 'Hello Jest!' }
    })
    console.log(wrapper.findComponent('HelloWorld'))
    // 断言组件文本内容包含传入的 msg
    expect(wrapper.text()).toContain('Hello Jest!')
  })
  it('should update the count when clicking the buton', async () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg: 'Hello Jest!' }
    })
    await wrapper.get('button').trigger('click')
    expect(wrapper.get('button').text()).toBe("1")
  })
  it('should add todo when fill the input and click the add button', async () => {
    const msg = 'new message'
    const todoContent = 'buy milk'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    await wrapper.get('input').setValue(todoContent)
    expect(wrapper.get('input').element.value).toBe(todoContent)
    await wrapper.get('button.addTodo').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(1)
    expect(wrapper.findAll('li')[0].text()).toBe(todoContent)
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('send')
    expect(wrapper.emitted('send')[0][0]).toBe(todoContent)
  })
  it.only('should load user message when click the load button', async () => {
    const msg = 'new message'
const wrapper = shallowMount(HelloWorld, {
  props: { msg }
})
   mockAxios.get = vi.fn().mockResolvedValue({ data: { username: 'xiaoming' } })
    await wrapper.get('.loadUser').trigger('click')
    expect(mockAxios.get).toHaveBeenCalled()
    expect(wrapper.find('.loading').exists()).toBeTruthy()
    await flushPromises()
    expect(wrapper.find('.loading').exists()).toBeFalsy()
    expect(wrapper.get('.userName').text()).toBe('xiaoming')
  })
})

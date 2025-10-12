import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

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
})

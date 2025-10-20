import ColorPicker from '@/components/ColorPicker.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import  rgbHex  from 'rgb-hex'

let wrapper: VueWrapper<any>
let defaultColor = ['#ffffff','#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#800080','#808080','#000000','']

describe('test colorPicker', () => {
  beforeAll(() => {
    wrapper = mount(ColorPicker, {
      props: {
        value:'#ffffff'
      }
    })
  })
  it('should render the correct interface', () => {
    //<div><input></div>
    // <ul class="picked-color-list">
    // <li class="item-0" or class="transparent-back">
    // <div></div>
    // </li></ul>
    // 测试左侧是否为input，类型和值是否正确
    expect(wrapper.find('input').exists()).toBeTruthy()
    const input = wrapper.get('input').element
    expect(input.type).toBe('color')
    expect(input.value).toBe('#ffffff')
    // 测试右侧是否有颜色列表
    expect(wrapper.findAll('.picked-color-list li').length).toBe(defaultColor.length)
    // 检查一个元素的css bgc属性是否等于对应颜色
    const firstItem = wrapper.get('li:first-child div').element as HTMLElement
    expect('#' + rgbHex(firstItem.style.backgroundColor)).toBe(defaultColor[0])
    //测试最后一个元素是否有特殊类名
    const lastItem = wrapper.get('li:last-child div').element as HTMLElement
    expect(lastItem.classList.contains('transparent-back')).toBeTruthy()
  })
  it('should send the correct event when change input', async() => {
    //测试input修改之后，是否发送对应的值(事件类型是否是change,发送的值是否是blackHex)
    const blackHex = '#000000'
    const input = wrapper.get('input')
    await input.setValue(blackHex)
    expect(wrapper.emitted()).toHaveProperty('change')
    const events = wrapper.emitted('change')
    if (events) {
      expect(events[0]).toEqual([blackHex])
    }
  })
  it('should send the correct event when clicking the color list', async() => {
    //测试点击右侧元素列表之后，是否返回对应的值
    const firstItem = wrapper.get('li:first-child div')
    firstItem.trigger('click')
    const events = wrapper.emitted('change')
     if (events) {
     expect(events[1]).toEqual(defaultColor[0])
 }
  })
})
import UserProfile from '@/components/UserProfile.vue'
import { mount, VueWrapper } from '@vue/test-utils'
import { message } from 'ant-design-vue'
import { vi } from 'vitest'
import store from '@/store/index'

let wrapper: VueWrapper<any>
let mockedRoputes:string[] = []

vi.mock('ant-design-vue', () => ({
  message: {
    success:vi.fn()
  }
}))
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push:(url:string) => mockedRoputes.push(url)
  })
}))

const mockComponent = {
  template: '<div><slot></slot></div>'
}
const mockComponent2 = {
  template: '<div><slot></slot><slot name="overlay"></slot></div>'
}
const globalComponent = {
  'a-button': mockComponent,
  'a-dropdown-button': mockComponent2,
  'router-link': mockComponent,
  'a-menu': mockComponent,
  'a-menu-item': mockComponent
}

describe('UserProfile Components', () => {
  beforeAll(() => {
    vi.useFakeTimers()
    wrapper = mount(UserProfile, { 
      props: {
        user:{isLogin:false}
      },
      global: {
        components: globalComponent,
        provide: {
          store
        }
      }
      
    })
    
  })
  it('should render login button when login is false', async() => {
    console.log(wrapper.html())
    expect(wrapper.get('div').text()).toBe('登录')
    await wrapper.get('div').trigger('click')
    expect(message.success).toHaveBeenCalled()
    expect(store.state.user.userName).toBe('xiaoming')
  })
  it('should render username when login is true', async()=> {
    await wrapper.setProps({
      user:{isLogin:true,userName:'xiaoming'}
    })
    console.log(wrapper.html())
    expect(wrapper.get('.user-profile-component').html()).toContain('xiaoming')
    expect(wrapper.find('.user-profile-dropdown').exists()).toBeTruthy()
  })
  it('should call logout and show message,call router.push after timeout when click logout', async() => {
    await wrapper.get('.user-profile-dropdown div').trigger('click')
    expect(store.state.user.isLogin).toBeFalsy()
    expect(message.success).toBeCalledTimes(1)
    vi.runAllTimers()
    expect(mockedRoputes).toEqual(['/'])
  })
  afterEach(() => {
    (message as vi.Mocked<typeof message>).success.mockReset()
  })
})
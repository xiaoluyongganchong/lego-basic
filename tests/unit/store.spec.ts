import store from '@/store/index.ts'
import { testData } from '@/store/templates.ts'
import { testComponent, ComponentsData } from '@/store/editor.ts'
import { TextComponentProps } from '@/defaultProps.ts'
import { clone, last } from 'lodash-es'
const cloneComponents = clone(testComponent)

describe('test vuex store', () => {
  it('should have three modules', () => {
    expect(store.state).toHaveProperty('user')
    expect(store.state).toHaveProperty('templates')
    expect(store.state).toHaveProperty('editor')
  })
  describe('test user modules', () => {
    it('test login mutation', () => {
      store.commit('login')
      expect(store.state.user.isLogin).toBeTruthy()
      expect(store.state.user.userName).toBe('xiaoming')
    })
    it('test logout mutation', () => {
      store.commit('logout')
      expect(store.state.user.isLogin).toBeFalsy()
    })
  })
  describe('test templates module', () => {
    it('should have default template', () => {
      expect(store.state.templates.data).toHaveLength(testData.length)
    })
    it('should have correct template by Id', () => {
      const selectTemplate = store.getters.getTempalteId(1)
      expect(selectTemplate.title).toBe('前端架构师直播海报')
    })
  })
  describe('test editor module', () => {
    it('should have default Component', () => {
      expect(store.state.editor.components).toHaveLength(cloneComponents.length)
    })
    it('should get current component when set active one component', () => {
      store.commit('setActive', cloneComponents[0].id)
      expect(store.state.editor.currentElement).toBe(cloneComponents[0].id)
      const currentElement = store.getters.getCurrentElement
      expect(currentElement.id).toBe(cloneComponents[0].id)
    })
    it('add component should works fine', () => {
      const payload: Partial<TextComponentProps> = {
        text:'text-1'
      }
      store.commit('addComponent', payload)
      expect(store.state.editor.components).toHaveLength(cloneComponents.length + 1)
      const lastItem = last(store.state.editor.components)
      expect(lastItem?.props.text).toBe('text-1')
    })
    it('update component should works fine', () => {
      const newProps = {
        key: 'text',
        value:'update'
      }
      store.commit('updateComponent', newProps)
      const currentElement:ComponentsData = store.getters.getCurrentElement
      expect(currentElement.props.text).toBe('update')
    })
  })
})
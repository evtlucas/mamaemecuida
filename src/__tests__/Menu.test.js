import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Menu from '../components/Menu.vue'
import { routes } from '../router'

const localVue = createLocalVue()
localVue.use(VueRouter)


describe('Menu tests', () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  })

  test('Query with 3 characters or more redirects to search page', () => {
    const query = 'abc'
    const router = new VueRouter(routes)
    const wp = shallowMount(Menu, {
      localVue,
      router,
      stubs: ['router-link']
    })
    const searchBox = wp.find('#searchBox')
    const searchProduct = wp.find('#searchProduct')
    const spy = jest.spyOn(router, 'push')

    searchBox.setValue(query)
    searchProduct.trigger('click')

    expect(wp.vm.$data.searchQuery).toBe(query)
    expect(spy).toHaveBeenCalled()
  })

  test('Query with less than 3 characters does nothing', () => {
    const router = new VueRouter(routes)
    const wp = shallowMount(Menu, {
      localVue,
      router,
      stubs: ['router-link']
    })
    const searchBox = wp.find('#searchBox')
    const searchProduct = wp.find('#searchProduct')
    const spy = jest.spyOn(router, 'push')

    searchBox.setValue('ab')
    searchProduct.trigger('click')

    expect(wp.vm.$data.searchQuery).toBe('ab')
    expect(spy).not.toHaveBeenCalled()
  })

  test('Empty searchBox does nothing', () => {
    const router = new VueRouter(routes)
    const wp = shallowMount(Menu, {
      localVue,
      router,
      stubs: ['router-link']
    })
    const searchBox = wp.find('#searchBox')
    const searchProduct = wp.find('#searchProduct')
    const spy = jest.spyOn(router, 'push')

    searchBox.setValue('')
    searchProduct.trigger('click')

    expect(spy).not.toHaveBeenCalled()
  })

  test('mount category menu correctly', () => {
    const categories = [ 'Shampoo', 'Sabonete', 'Creme' ]

    const loadCategory = jest.fn()
    loadCategory.mockResolvedValue(Menu)

    const wrapper = shallowMount(Menu, {
      mocks: {
        loadCategory: loadCategory
      },
      stubs: ['router-link']
    })

    const menu = wrapper.find('.submenu > li:nth-child(1) > p:nth-child(1)')
  })

  test('has a title', () => {
    const wrapper = shallowMount(Menu, {
      stubs: ['router-link']
    })
    const title = wrapper.find('#title')
    expect(title.text()).toBe('mamãe me cuida')
  })
})
import { shallowMount } from '@vue/test-utils'
import MainPage from '../components/MainPage.vue'


describe('MainPage tests', () => {
    afterEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    })

    test('has a title', () => {
        const wrapper = shallowMount(MainPage)
        const title = wrapper.find('#title')
        expect(title.text()).toBe('mamãe me cuida')
    })

    test('mount category menu correctly', () => {
        const categories = [ 'Shampoo', 'Sabonete', 'Creme' ]

        const loadCategory = jest.fn()
        loadCategory.mockResolvedValue(categories)

        const wrapper = shallowMount(MainPage, {
            mocks: {
                loadCategory: loadCategory
            }
        })

        const menu = wrapper.find('.submenu > li:nth-child(1) > p:nth-child(1)')
    })
})
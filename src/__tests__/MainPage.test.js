import { shallowMount } from '@vue/test-utils'
import MainPage from '../components/MainPage.vue'


describe('MainPage tests', () => {
    test('has a title', () => {
        const wrapper = shallowMount(MainPage)
        const title = wrapper.find('#title')
        expect(title.text()).toBe('mamãe me cuida')
    })
})
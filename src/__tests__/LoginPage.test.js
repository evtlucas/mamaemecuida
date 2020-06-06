import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import LoginPage from '../components/LoginPage'
import { store } from '../store'
import { routes } from '../router'
import loginFunction from '../services/login'

jest.mock('../services/login')

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('LoginPage tests', () => {
  it('Check login ok', () => {
    const uid = '123456789'
    const email = 'abc@gmail.com'
    const password = '123456'

    loginFunction.mockResolvedValue({ user: {
      uid: uid,
      email: email
    }})

    const router = new VueRouter(routes)
    const wrapper = shallowMount(LoginPage, {
      mocks: {
        loginFunction: (msg) => loginFunction
      },
      localVue,
      store,
      router
    })

    wrapper.find('[data-email]').setValue(email)
    wrapper.find('[data-password]').setValue(password)
    wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.vm.$data.loginForm.email).toBe(email)
    expect(wrapper.vm.$data.loginForm.password).toBe(password)
    expect(loginFunction).toHaveBeenCalled()
  })
})
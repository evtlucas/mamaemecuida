import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import LoginPage from '../components/LoginPage'
import { store } from '../store'
import { routes } from '../router'
import { signIn } from '../services/login'

jest.mock('../services/login')

const email = 'abc@gmail.com'
const password = '123456'
const message = 'The password is invalid or the user does not have a password'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('LoginPage tests', () => {
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  })

  it('Check login ok', () => {
    const router = new VueRouter(routes)

    const uid = '123456789'
    const email = 'abc@gmail.com'
    const password = '123456'

    signIn.mockResolvedValue({ user: {
      uid: uid,
      email: email
    }})

    const wrapper = shallowMount(LoginPage, {
      mocks: {
        signIn: signIn
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
    expect(signIn).toHaveBeenCalled()
  })


  it('Check login with error', () => {
    const router = new VueRouter(routes)

    signIn.mockRejectedValue({
      message: 'The password is invalid or the user does not have a password'
    })

    const wrapper = shallowMount(LoginPage, {
      mocks: {
        signIn: signIn
      },
      data () {
        return {
          errorMsg: message
        }
      },
      localVue,
      store,
      router
    })

    wrapper.find('[data-email]').setValue(email)
    wrapper.find('[data-password]').setValue(password)
    wrapper.find('form').trigger('submit.prevent')
    expect(signIn).toHaveBeenCalledTimes(1)
    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.text()).toMatch(message)
    })
  })
})

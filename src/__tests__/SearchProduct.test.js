import { shallowMount } from '@vue/test-utils'
import SearchProduct from '../components/SearchProduct'

describe('Search Products Test', () => {
  test('Filter accented string', () => {
    const mockLoadProducts = jest.fn()
    const wp = shallowMount(SearchProduct, {
      mocks: {
        $route: {
          query: ""
        },
      },
      methods: {
        loadProducts: mockLoadProducts
      }
    })
    const query = 'óleo'.normalize('NFD')
    const result = wp.vm.filterString(query)
    expect(result).toBe('oleo')
  })
})
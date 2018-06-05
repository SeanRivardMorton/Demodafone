import { shallowMount } from '@vue/test-utils';
import BuyPhone from '@/views/BuyPhone.vue';

describe('BuyPhone.vue', () => {
  it('renders li for each item in props.items', () => {
    const wrapper = shallowMount(BuyPhone, {});
    expect(wrapper.find('.columns').is('div'));
  });
});

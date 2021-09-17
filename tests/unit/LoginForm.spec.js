import { mount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForn', () => {
  test('Emit an event with user data payload', () => {
    const wrapper = mount(LoginForm);
    const input = wrapper.find('[data-testid="name-input"]');

    input.setValue('Andy Warhol');
    wrapper.trigger('submit');

    const formSubmittedCalls = wrapper.emitted('formSubmitted');
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = { name: 'Andy Warhol' };
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    );
  });
});

import { shallowMount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("App.vue", () => {
  it("input 'timer' should have default value equals 10", async () => {
    const wrapper = shallowMount(App);

    await wrapper.setData({ timer: 10 });

    const timerInput = wrapper.get('input#timer');

    await timerInput.setValue(5);
    await timerInput.trigger('change'); 
    // await timerInput.setValue(5);
    // await wrapper.find('input#timer').trigger('change');
    // await wrapper.find('input').setData(5);
    // expect(timerInput.text()).toBe('5')
    expect(timerInput.text()).toBe('5');
  });
});

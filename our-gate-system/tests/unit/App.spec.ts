import { mount } from '@vue/test-utils';

import App from "../../src/App.vue";

describe("App.vue", () => {
  let wrapper: any;
  const log = console.log;

  beforeEach(() => {
    wrapper = mount(App);
  });

  describe("button 'toggle' test", () => {

    it("there two buttons 'toggle' in the component App", () => {
      expect(wrapper.findAll('button')).toHaveLength(2);
    });

    it("when button 'toggle' clicks, method 'toggle' calls", async () => {
      const spy = jest.spyOn(wrapper.vm, 'toggle');

      const [toggleBtnVgt, toggleIPhonVgt] = wrapper.findAll('button');

      await toggleBtnVgt.trigger('click');

      expect(spy).toHaveBeenCalled();

      await toggleIPhonVgt.trigger('click');

      expect(spy).toHaveBeenCalled();
    });
  });

  describe("input 'timer' test", () => {

    it("input 'timer' should be in DOM", () => {
      expect(wrapper.get('[data-test=timer]').exists()).toBe(true);
    });

    it("method 'setTimer' should be working properly", async () => {
      const spy = jest.spyOn(wrapper.vm, 'setTimer');
    
      const timerSet = wrapper.get('[data-test=timer]')
      
      await timerSet.setValue('5');
      
      expect(spy).toBeCalledWith('5');
    });
  });
  
  describe("input 'speed' test", () => {

    it("input 'speed' should be in DOM", () => {
      expect(wrapper.get('[data-test=speed]').exists()).toBe(true);
    });

    it("method 'setSpeed' should be working properly", async () => {
      const spy = jest.spyOn(wrapper.vm, 'setSpeed');
    
      const speedSet = wrapper.get('[data-test=speed]')
      
      await speedSet.setValue('3');
      
      expect(spy).toBeCalledWith('3');
    });
  });

  describe("drag-n-drop test", () => {

    it("method 'startDrag' shoul be working properly", async () => {
      const draggableCar = wrapper.get('[data-test=car]');

      const e = { dataTransfer: { dropEffect: '', effectAllowed: '' } };

      const spy = jest.spyOn(wrapper.vm, 'startDrag');

      await draggableCar.trigger('dragstart', e);
      
      expect(spy).toHaveBeenCalled();

      expect(e.dataTransfer.dropEffect).toBe('move');
      expect(e.dataTransfer.effectAllowed).toBe('move');
    });

    it("method 'onDrop' calls method 'moveAt'", async () => {
      console.log = jest.fn();

      const [, inZone, ] = wrapper.findAll('[data-test=area]');

      const spy = jest.spyOn(wrapper.vm, 'onDrop');

      let e = { pageX: '240', pageY: '401' };

      await inZone.trigger('drop', e);

      expect(spy).toHaveBeenCalled();

      console.log = log;
    });

    it("method 'moveAt' warks properly", async () => {
      console.log = jest.fn(); 

      const [, inZone, ] = wrapper.findAll('[data-test=area]');

      const spy = jest.spyOn(wrapper.vm, 'moveAt');

      let e = { pageX: '240', pageY: '401' };

      await inZone.trigger('drop', e);

      expect(spy).toHaveBeenCalled();

      expect(wrapper.vm.carCoord.top).toBe('361px');
      expect(wrapper.vm.carCoord.left).toBe('200px');

      console.log = log;
    });
  });
});

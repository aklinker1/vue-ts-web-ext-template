import { GetterTree } from 'vuex';

const getters: GetterTree<VuexState, VuexState> = {
  foo(state) {
    return state.foo;
  },
};

export default getters;

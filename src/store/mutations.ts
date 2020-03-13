import types from './mutation-types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<VuexState> = {
  [types.UPDATE_FOO](state, payload) {
    state.foo = payload;
  },
};

export default mutations;

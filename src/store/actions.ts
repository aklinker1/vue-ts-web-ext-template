import types from './mutation-types';
import { ActionTree } from 'vuex';

const Actions: ActionTree<VuexState, VuexState> = {
  setFoo({ commit }, payload) {
    commit(types.UPDATE_FOO, payload);
  },
};

export default Actions;

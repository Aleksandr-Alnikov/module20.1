const state = {
    tasks: []
};

const mutations = {
    ADD_TASK(state, task) {
        state.tasks.push(task);
    },
    EDIT_TASK(state, updatedTask) {
        const index = state.tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
            state.tasks.splice(index, 1, {...updatedTask});
        }
    },
    DELETE_TASK(state, taskId) {
        state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
};

const actions = {
    addTask({commit}, task) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit('ADD_TASK', task);
                resolve();
            }, 500);
        });
    },
    editTask({commit}, task) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit('EDIT_TASK', task);
                resolve();
            }, 500);
        });
    },
    deleteTask({commit}, taskId) {
        return new Promise(resolve => {
            setTimeout(() => {
                commit('DELETE_TASK', taskId);
                resolve();
            }, 500);
        });
    }
};

const getters = {
    tasks: state => state.tasks
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
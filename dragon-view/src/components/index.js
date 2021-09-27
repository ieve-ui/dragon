import Vue from 'vue'
import DgApprove from './approve'
const Components = {
    DgApprove
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components


import {filterImage} from './minix'

export default  {
    // 在绑定元素的 attribute 前
    // 或事件监听器应用前调用
    created(el, binding) {
      // 下面会介绍各个参数的细节
      filterImage(el,binding)
    },
    // 在元素被插入到 DOM 前调用
    beforeMount() {
     

    },
    // 在绑定元素的父组件
    // 及他自己的所有子节点都挂载完成后调用
    mounted() {
     

    },
    // 绑定元素的父组件更新前调用
    beforeUpdate() {
     

    },
    // 在绑定元素的父组件
    // 及他自己的所有子节点都更新后调用
    updated() {
     

    },
    // 绑定元素的父组件卸载前调用
    beforeUnmount() {
     

    },
    // 绑定元素的父组件卸载后调用
    unmounted() {
     

    }
  }

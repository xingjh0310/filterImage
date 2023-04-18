import {filterImage} from './minix'

onmessage = function (e) {
    console.log(e);
    // onmessage获取传入的初始值
    let sum = e.data;

    let data= filterImage(sum)

    console.log(data)
    // eslint-disable-next-line no-undef
    importScripts(data);
    
    // postMessage(sum);
  }

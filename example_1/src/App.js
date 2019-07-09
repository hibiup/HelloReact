import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 文件名代表模块名，该模块 `App` 下下声明了一个名为 `App()` 的函数
 */
function App() {
  /** 定义变量. 尽可能遵守函数式编程要求使用静态修饰符 const，而不是 let 或 var. */
  const helloWorld = '欢迎！Welcome to the Road to learn React';

  /** 返回 JSX。JSX 是 React 使用的 UI 语言，支持直接(花括号)混入变量和 HTML。
   * 
   * className 就是 html <div> 的 class 属性，JSX 会替换一些标准的 HTML 标签属性, 遵守驼峰命名法
   * 
  */
  return (
    <div className="App">
      <h2>{helloWorld}</h2>
    </div>
  );
}

/**
 * 2) 将 MyApp 函数暴露出去. 这样才能够在 index.js 中 import 它。
 */
export default App;

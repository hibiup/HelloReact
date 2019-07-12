import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './Search'

/**
 * 变量：尽可能遵守函数式编程要求使用静态修饰符 const，而不是 let 或 var. 
 */
const helloWorld = '欢迎！Welcome to the Road to learn React';
const books = [
  {
    title: 'React',
    author: 'Famous',
    id: 1
  },
  {
    title: 'Redux',
    author: 'Not that famous',
    id: 2
  }
]

/**
 * 文件名代表模块名，该模块 `App` 下下声明了一个名为 `PrintBookInfo` 的函数，接受一个参数
 */
function PrintBookInfo(b, owner) {
  /** 
   * 返回打印 book 信息的 JSX:
   * 
   * JSX 是 React 使用的 UI 语言，支持直接(花括号)混入变量和 HTML, 必须以 `<div>` 为单元。
   * 
   * className 就是 <div> 的 class 属性，JSX 会替换一些标准的 HTML 标签属性, 遵守驼峰命名法
   */
  return (
    <div className="App">
      <h2>{helloWorld}</h2>
      {
        b.map( book => {
          // 打印日志
          console.log('Return book: ' + book.title)

          // 返回结果
          return(
            <div key={book.id}>
              <span>Title: {book.title}</span>
              <span>Author: {book.author}</span>
              <span>
                <button onClick={() => owner.onDismiss(book.id)} type="button">删除</button>
              </span>
            </div>
          )
        })
      }
    </div>
  )
}

/** 
 * JavaScript 同时支持函数式和类编程. UI 类型的类必须集成 Component，并实现 render 方法。
 */
class App extends Component {
  /**
   * 类的构造器:
   *   `props` 是构造参数，可以是数组，但是不管是什么，被传递给构造函数后都成为 `props`. 例如 `App`
   *   可以被这样初始化：
   *     `new App(param1, param2,...)`
   * 
   *   然后在 `App` 实例内任何地方可以通过解构从 `props` 中获得参数：
   *     `const {param1, param2} = this.props`
   * 
   *   构造函数 `constructor(props)` 是隐含的，即便没有显式声明也会缺省被执行。
   */
  constructor(props) {
    // 在类构造器中处理任何数据之前，必须先调用父构造器
    super(props);

    // 定义类成员变量通过 `this` 绑定. state 是一个数据结构，含有一个名为 `books` 的成员变量。
    this.state = {
      // 等价于 `books: books,`。如果成员变量名与赋予的变量名称相同，可以简写。
      books,
    };

    // 旧版本的 react 必须声明将成员函数拌定到 this，否则会遇到 undefined 错误。
    //this.onDismiss = this.onDismiss.bind(this)
    //this.onEvent = this.onEvent.bind(this)
  }

  // 声明成员变量
  onDismiss(id) {
    console.log( id + " has been deleted")
    const updatedList = this.state.books.filter(book => {
      return book.id !== id
    })

    // React 会自动为属性生成 setter
    this.setState({
      // state.books = updatedList
      books: updatedList,
    })
  }

  // onClick = {this.onEvent}; partial apply 函数 this.onEvent 被传递给 onClick，当点击事件产生后，event 被作为缺省参数传递给 onEvent 得到执行。
  onEvent(event) {
    console.log(event.target)
  }
  
  // render 方式是唯一需要实现的方法。
  render() {
    // 在这里我们调用了之前定义的函数
    return (
      // PrintBookInfo(this.state.books, this)
      <Search value="AA" onChange={this.onEvent}></Search>
      )
  }
}

/**
 * 最后：将 App 类暴露出去. 这样才能够在 index.js 中 import 它。
 * 
 * 也可以将 `PrintBookInfo` 函数改名为 `App()`，这样就不需要定义`App`类，只使用函数也可以。
 */
export default App

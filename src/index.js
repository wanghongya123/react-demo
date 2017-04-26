import React from "react";
import ReactDom from "react-dom";

//
// let age = 18;
// let h = "HELLO";
// function　sum(x,y){
//   return x+y
// }
// let hello =<div>
//   <p>hello word</p>;
//   <lable htmlfor="name">姓名</lable>
//   <input value="sss" id="name" />
//   <h1>dff {h.toLowerCase()} dvvd </h1>
//   <p className="afs">{sum(5,9)}   {age}</p>
//   <p>{Date.note}</p>
//
// </div>
// ReactDom.render(hello,document.querySelector("#root"))
// //组件
let Word = React.createClass({
  render:function(){
    return(
        <h1>第一种组件的创建方式</h1>
    )
  }
})
// ReactDom.render(<word />,document.querySelector("#root"))
//第二种
function Hello(){
  return(
    <div>
      <h2>我是第二种组建的创建方式，必须有返回值，且返回值必须是ＪＳＸ　elements</h2>
      <Word></Word>
    </div>

  )
}
ReactDom.render(<Hello></Hello>,document.querySelector("#root"))
//第三种
class My extends React.Component{//继承了React的方法
  render(){
    return(
      <div>
        <h3>我是第三种组件创建方式</h3>
        <Word></Word>
      </div>
    )
  }
}
ReactDom.render(<My></My>,document.querySelector("#root"))

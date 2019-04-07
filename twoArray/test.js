// 使用多种方式实现二维数组转一维数组
let weekDays = [
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
  '周日'
]

let arrSchedule = new Array();
for(let i = 0; i< 7; i++){
  arrSchedule[i] = new Array();
  for(let j = 0; j< 24; j++) {
    arrSchedule[i][j] = {
      objectId: i.toString()+'-'+j.toString(),
      clsDay: weekDays[i],
      hour: j,
      time: j.toString()+'-'+(j+1).toString(),
    };
  }
}

// 二维数组转一维数组
const twoToOne = (arr) => {
  let result = []
  for (const iterator of arr) {
    result = result.concat(iterator)
  }
  return result
}
// let oneArr = twoToOne(arrSchedule)

// 使用reduce实现二维数组转一维数组
// let oneArr = arrSchedule.reduce((result, item) => result.concat(item))

// 使用ES最新语法 flat() 方法会递归到指定深度将所有子数组连接，并返回一个新数组。缺点是，有兼容性问题。优点是非常简单。
// 语法：var newArray = arr.flat(depth)，参数说明：depth，可选，指定嵌套数组中的结构深度，默认值为1。
let oneArr = arrSchedule.flat();

console.log(JSON.stringify(oneArr));
import _ from 'lodash'

var foo = [1,2,3,4,5]
var bar = [2,3,4,9,10]

var cats = [
  {name: 'domino', size: 'medium'},
  {name: 'lily', size: 'big'},
  {name: 'jones', size: 'big'},
  {name: 'felix', size: 'small'},
  {name: 'bob', size: 'xl'}
]

_.union(foo, bar)
// console.log(_.sortBy(cats, 'name'))
// _.uniqBy(cats, 'size')
// _.map(cats, (cat) => {
//   console.log(_.get(cat, 'size'))
// })

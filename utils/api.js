let  apiconfig={
    dev:{
      url:'http://magic.frp.soulfree.cn',
      files:'http://localhost:9200',
    },
  }
  const mode='dev'
  export default  apiconfig[mode]
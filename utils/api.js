let  apiconfig={
    dev:{
      url:'http://localhost:9233',
      files:'http://localhost:9200',
    },
  }
  const mode='dev'
  export default  apiconfig[mode]
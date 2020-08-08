<template>
    <div class="media">
        <a-card class="media" title='素材库' style="height:100%;overflow:hidden" :bodyStyle='{height:"calc(100% - 60px)",padding:"0 24px"}'>
            <a-button type="primary" shape="circle" icon='plus' slot="extra" class='add' @click="showAddModal"/>
            <div style='height:100%,'
                v-infinite-scroll="handleInfiniteOnLoad"
                class="demo-infinite-container"
                :infinite-scroll-disabled="busy"
                :infinite-scroll-distance="1">
                <a-list :data-source="fileLists" :grid='grids'>
                    <!-- <transition-group name="slide-fade" mode='out-in'> -->
                    <a-list-item slot="renderItem" slot-scope="item" style="padding:10px;overflow:hidden;" ref='listItem' :key='item'>
                        <div  class="imgitem" :style='"background-image: url(http://localhost:9200/public/image/"+item.path+");"/*height:"+(item.ratio>1.5?"184px":"400px")*/'/>
                    </a-list-item>
                    <!-- </transition-group> -->
                    <div v-if="loading && !busy" class="demo-loading-container">
                        <a-spin />
                    </div>
                </a-list>
                <!-- <a-row>
                    <transition-group name="slide-fade" mode='out-in'>
                        <a-col v-for="(item,index) in fileLists" :key="index" :span='4' :xs='2' :sm='4' :xl='8'>
                            <div  class="imgitem" :style='"background-image: url(http://localhost:9200/public/image/"+item.path+");"/*height:"+(item.ratio>1.5?"184px":"400px")*/'/>
                        </a-col>
                    </transition-group>
                </a-row> -->
            </div>
        </a-card>
        <a-modal v-model="addModal" title="添加" on-ok="handleOk" :destroyOnClose='true'>
            <a-upload-dragger
                name="img"
                :multiple="true"
                :action="'http://localhost:1617/file/upload'"
                @change="handleChange"
                @preview='preview'
                :accept='accept'
                listType='picture'
                @reject='rejectErr'
            >
                <p class="ant-upload-drag-icon"><a-icon type="inbox" /></p>
                <p class="ant-upload-text">拖拽图片至此可上传或者点击选择图片</p>
                <p class="ant-upload-hint">支持单次或批量上传。 严格禁止上传隐私数据</p>
            </a-upload-dragger>
            <a-button slot='footer' type="primary" @click="imgListSub" v-if="true">提交</a-button>
        </a-modal>
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel" >
            <img alt="example" style="maxHeight:100%;maxWidth:100%;" :src="previewImage" @onerror='imgErr' @onsuccess='imgsucc' v-if="imgerr"/>
            <span v-else>err</span>
        </a-modal>
    </div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll';
import scrollReveal from 'scrollreveal';
export default {
    directives: { infiniteScroll },
    name:'Media',
    data(){
        return{
            scrollReveal: scrollReveal(),
            grids:{
                xs:1,
                sm:2,
                md:4,
                lg:4,
                xl:4,
                xxl:6,
            },
            accept:'image/*',
            addModal:false,
            previewImage:'',
            previewVisible:false,
            imgerr:true,
            imgLoading:false,
            loading: false,
            busy: false,
            fileList:[],
            fileLists:[],
            page:1,
            pageSize:20,
        }
    },
    mounted() {
        this.scrollReveal.reveal('.reveal-top', {
            // 动画的时长
            duration: 2000,
            // 延迟时间
            delay: 500,
            // 动画开始的位置，'bottom', 'left', 'top', 'right'
            origin: 'left',
            // 回滚的时候是否再次触发动画
            reset: true,
            // 在移动端是否使用动画
            mobile: false,
            // 滚动的距离，单位可以用%，rem等
            distance: '200px',
            // 其他可用的动画效果
            opacity: 0.001,
            easing: 'linear',
            scale: 0.9,
        });

 console.log(this.$refs.listItem)
        this.initList()
    },  
    methods: {
        rejectErr(){
            this.$message.error('错误的文件类型',1);
        },
        initList(){
            this.$axios.post('http://localhost:9200' + '/xuanque/getInfoByPage',{
                pageSize:this.pageSize,
                page:this.page
            })
            .then((res)=>{
                let list =  res.data.list
                this.fileLists = list
                if(list.length !== this.pageSize){
                    this.busy = false
                }else{
                    this.loading = true
                }
            })
        },
        handleInfiniteOnLoad() {
            if(this.loading){
                this.page++
                this.$axios.post('http://localhost:9200' + '/xuanque/getInfoByPage',{
                    pageSize:this.pageSize,
                    page:this.page
                })
                .then((res)=>{
                    let list =  res.data.list
                    this.fileLists = this.fileLists.concat(list)
                    if(list.length !== this.pageSize){
                        this.busy = false
                        this.loading = false
                    }else{
                        this.loading = true
                    }
                })
            }
        },
        showAddModal(){
            this.addModal = true
        },
        handleChange(e){
            console.log(e.file.status,e)
            if((('done|removed').indexOf(e.file.status) > -1) && e.file.response.code == 0){
                console.log(e)
                this.fileList = e.fileList
            }
            if(e.file.status !== 'removed'  && e.file.response.code !== 0){
                if(e.file.response.code == -2){
                    this.$message.error('错误的文件类型',1);
                }else{
                    this.$message.error('系统异常',1);
                }
            }
        },
        preview(e){
            this.imgerr = true
            this.imgLoading = true
            this.$axios.get(this.$api.url + '/public/image/' + e.response.data.imgPath)
            .then((res)=>{
               // this.previewImage = res
            })
            console.log(e)
            this.previewImage = this.$api.url + '/public/image/' + e.response.data.imgPath
            this.previewVisible = true
        },
        handleCancel(){
            this.previewVisible = false
        },
        imgErr(err){
            console.log(err)
            this.imgerr = false
        },
        imgsucc(e){
            console.log(e)
            this.imgLoading=false

        },
        imgListSub(){
            this.$message.loading({ content: '上传中...', key:'imgsub' });

            this.fileList.forEach(item => {
                this.$axios.post(this.$api.url + '/xuanque/picAdd',{
                    path:item.response.data.imgPath
                })
                .then((res)=>{
                    if(res.code == 0){
                        this.addModal = false
                        this.$message.success({ content: '上传成功', key:'imgsub',duration:0.5});
                        if(this.page == 1){
                            this.initList()
                        }
                    }else if(res.code == -2){
                        this.$message.error('错误的文件类型',1);
                    }else{
                        throw '内部错误'
                    }
                })
                .catch((err)=>{
                    this.$message.error('网络异常',1);
                })
            });
            console.log(this.fileList)
        }
    },
}
</script>
<style lang="scss" scoped>
.imgitem{
    background:url(http://localhost:9200/public/image/1593226339645-9006.jpg) no-repeat center;
    background-size: auto 100%;
    width:100%;
    height:400px;
}
.media{
    height: 100%;
    .add{
       padding:0px 2px 2px 2px;
    }
}
.demo-infinite-container {
  overflow: auto;
  height: 100%;
  padding: 10px 0;
}
</style>
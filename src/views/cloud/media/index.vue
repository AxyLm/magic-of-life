<template>
    <div class="media">
        <a-card class="media" title='素材库' style="height:100%;overflow:hidden" :bodyStyle='{height:"calc(100% - 50px)",padding:"0 24px"}'>
            <a-button type="primary" shape="circle" icon='plus' slot="extra" class='add' @click="showAddModal"></a-button>

        <div style='height:100%,'
            v-infinite-scroll="handleInfiniteOnLoad"
            class="demo-infinite-container"
            :infinite-scroll-disabled="busy"
            :infinite-scroll-distance="10">
            <a-list :data-source="fileList" :grid='grid'>
            <a-list-item slot="renderItem" slot-scope="item, index" style="padding:10px;overflow:hidden" ref='listItem' class="reveal-top">
                <img src="http://localhost:9200/public/image/1592705542007-6447.jpg" alt="" srcset=""  style="width:200px;height:400px">
            </a-list-item>
            <div v-if="loading && !busy" class="demo-loading-container">
                <a-spin />
            </div>
            </a-list>
        </div>
        </a-card>
        <a-modal v-model="addModal" title="添加" on-ok="handleOk" :destroyOnClose='true'>
            <a-upload-dragger
                name="pic"
                :multiple="true"
                :action="this.$api.url + '/file/upload'"
                @change="handleChange"
                @preview='preview'
            >
                <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">
                Click or drag file to this area to upload
                </p>
                <p class="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
                </p>
            </a-upload-dragger>
            <a-button slot='footer' type="primary" @click="imgListSub" v-if="false">提交</a-button>
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
            grid:{
                xs:2,
                sm:4,
                md:6,
                lg:8,
                xl:10,
                xxl:12,
            },
            addModal:false,
            previewImage:'',
            previewVisible:false,
            imgerr:true,
            imgLoading:false,
            loading: false,
            busy: false,
            fileList:[
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
            ],
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

    },  
    methods: {
        handleInfiniteOnLoad() {
            console.log(this)
            this.loading = true
            let list = [
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
                {title:'a',name:{last:1}},
            ]
            this.fileList = this.fileList.concat(list)
            this.loading = false
            let item = document.getElementsByClassName('listItem')
           item.classList.add('reveal-top')
           console.log(item)
        },
        showAddModal(){
            this.addModal = true
        },
        handleChange(e){
            console.log(e.file.status)
            if((('done|remove').indexOf(e.file.status) > -1) && e.file.response.code == 0){
                console.log(e)
            }
            this.fileList = e.fileList
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
            console.log(this.fileList)
        }
    },
}
</script>
<style lang="scss" scoped>
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
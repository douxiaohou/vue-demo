<template>
	<!-- 根元素 -->
	<div id="temp">
		<!-- 轮播图 begin -->
		<mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in datalist" :key ="item.id">
                <img v-bind:src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <!-- menu begin -->
        <div class="mui-content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/news/newslist">
                            <span class="mui-icon mui-icon-home"></span>
                            <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/photo/photoshare">
                            <span class="mui-icon mui-icon-email"></span>
                            <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/goods/goodslist">
                            <span class="mui-icon mui-icon-chatbubble"></span>
                            <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/feedback">
                            <span class="mui-icon mui-icon-location"></span>
                            <div class="mui-media-body">留言反馈</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/video">
                            <span class="mui-icon mui-icon-search"></span>
                            <div class="mui-media-body">视频专区</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/callme">
                            <span class="mui-icon mui-icon-phone"></span>
                            <div class="mui-media-body">联系我们</div>
                        </router-link>
                    </li>
                </ul>
        </div>
        <!-- menu end -->
	</div>
</template>

<script>
	import apicommon from '../../../common/apicommon.js';
	// ES6导出一个对象的语法 export default
	export default{
		data(){
			return{
				datalist: [
					{img:'../../../statics/images/1.jpg'},
					{img:'../../../statics/images/2.jpg'},
					{img:'../../../statics/images/3.jpg'}
				]	
			}
			
		},
		created(){
			this.getImg();
		},
		methods:{
			getImg(){
				var url = apicommon.apidomain + '/api/getlunbo';
				this.$http.get(url).
				then(function(res){
					console.log(res.body);
					//this.datalist = res.body.message;
				});
			}
		}
	}
</script>

<style scoped>
	/* 轮播图 begin  */
    .mint-swipe{
        height: 500px;
    }
    .mint-swipe-item{
        width: 100%;
        height: 500px;
    }
    .mint-swipe-item img{
        width: 100%;
        height: 100%
    }
   /*菜单列表 begin*/

    /* 菜单 list begin */
    .mui-content,.mui-content ul{
        background-color: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right:0px;
        border-bottom:0px;
    }
    .mui-grid-view.mui-grid-9{
        border-top:0px;
        border-left:0px;
    }
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before{
        content: '';
        display: inline-block;
        width: 50px;
        height: 50px;
        background-repeat: round;
    }

    .mui-icon-home:before{
        background-image: url(../../../statics/images/1.png);
    }

    .mui-icon-email:before{
        background-image: url(../../../statics/images/2.png);
    }
    .mui-icon-chatbubble:before{
        background-image: url(../../../statics/images/3.png);
    }
    .mui-icon-location:before{
        background-image: url(../../../statics/images/4.png);
    }
    .mui-icon-search:before{
        background-image: url(../../../statics/images/5.png);
    }
    .mui-icon-phone:before{
        background-image: url(../../../statics/images/6.png);
    }
</style>
<template>
    <div style="width: 100%;height: 3rem;padding: 0px 25px 10px 25px;background-color: #fff">
        <div class="bshare-custom">
            <div class="bsPromo bsPromo2"></div>
            <a title="分享到微信" class="bshare-weixin" href="javascript:void(0);"></a>
            <a title="分享到QQ好友" class="bshare-qqim" href="javascript:void(0);"></a>
            <a title="分享到新浪微博" class="bshare-sinaminiblog" href="javascript:void(0);"></a>
            <a title="分享到QQ空间" class="bshare-qzone"></a>
            <a title="分享到有道笔记" class="bshare-youdaonote" href="javascript:void(0);"></a>
            <a title="分享到i贴吧" class="bshare-itieba" href="javascript:void(0);"></a>
            <a title="分享到腾讯微博" class="bshare-qqmb"></a>
            <a title="分享到网易微博" class="bshare-neteasemb"></a>
            <a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'share',
    head() {
      return {
        script: [
          {src: 'http://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=&amp;pophcol=2&amp;lang=zh'},
          {src: 'http://static.bshare.cn/b/bshareC0.js'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>

// DOM 完全就绪时执行
$(function() {
    // 找到文章所在的容器
    var $article = q("#fxb_container");
    console.log($article)
    if ($article.length > 0) {
        // 文章的实际高度
        var article = $article[0], height = article.clientHeight;
        // 文章隐藏后的高度
        var halfHeight = height * 0.3;

        $article.css('height', halfHeight + 'px');
        $article.addClass('lock');
    }
});
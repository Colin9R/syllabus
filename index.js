let matchSyllabus = function(html){
    // 正则匹配所有标签
    let syllabus = html.match(/<h[^>]+>(.*)<\/h[^>]+>/gim);
    // 预设返回值
    let arr = [];
    // 判断是否有值
    if(syllabus != null)
    {
        // 生成随机字符串方法
        function getRanNum(){
            let result = [];
            for(let i=0;i<4;i++){
                let ranNum = Math.ceil(Math.random() * 25); //生成一个0到25的数字
                //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
                result.push(String.fromCharCode(65+ranNum));
            }
            return result.join('');
        }
        // 循环匹配替换锚点和大纲
        for(let i = 0; i < syllabus.length; i++)
        {
            let str = syllabus[i];
            // 匹配首标签,用于查找替换锚点
            let str2 = str.match(/<\w\d/)[0];
            // 生成随机锚点
            let str3 = getRanNum()+ i;
            // 替换文章内容体(匹配锚点)
            html = html.replace(str2+'>',str2 + ' id ="' + str3 + '">');
            // push数组(用于大纲渲染)
            arr.push({title:str3,html:str});
        }
    }
    return {syllabus:arr,content:html};
}
export default matchSyllabus;

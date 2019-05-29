$('.jobInfo').click(function(){
    var corpName = $(this).prev().children('a').text(); 
    var result = '';
    for(var i = 0; i < corpName.length; i++){
        if('㈜' == corpName.charAt(i)){
            continue;
        }else{
            result = result + corpName.charAt(i);
        }
    }
    window.open('https://www.jobplanet.co.kr/search?query='+result+'&category=&_rs_con=job_postings&_rs_act=search&_rs_element=main_search_bar', '_blank');
});

$( function() {
    $( "#datepicker" ).datepicker({ 
        minDate: 0, maxDate: "7D",
    }
    );
  } );

$(function () {
    (function (factory) {
        if (typeof define === "function" && define.amd) {
            // AMD. Register as an anonymous module.
            define(["../widgets/datepicker"], factory);
        } else {
            // Browser globals
            factory(jQuery.datepicker);
        }
    }(function (datepicker) {
        datepicker.regional["zh-TW"] = {
            closeText: "關閉",
            prevText: "&#x3C;上個月",
            nextText: "下個月&#x3E;",
            currentText: "今天",
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月",
                "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月",
                "七月", "八月", "九月", "十月", "十一月", "十二月"],
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            weekHeader: "週",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: true,
            yearSuffix: "年"
        };
        datepicker.setDefaults(datepicker.regional["zh-TW"]);
        return datepicker.regional["zh-TW"];
    }));
});

$(function () {
    $("#datepicker").datepicker();
    $("#twzipcode").twzipcode({
        zipcodeIntoDistrict: false, // 郵遞區號自動顯示在區別選單中
        css: ['addr-county', 'addr-area', 'addr-zip'], // 自訂 "城市"、"地別","郵遞區號" class 名稱 
        countyName: "city", // 自訂城市 select 標籤的 name 值
        districtName: "town" // 自訂區別 select 標籤的 name 值
    });
    $('.label').click(function () {
        $('input[name="label"]').val("");
    });

    $(".way_group_item_1").click(function () {
        $(".adders-group-big").show();
        $(".label2").show();
        $(".label").hide();
        $(this).css('background-color','#d65b04');
        $(".way_group_item_2").css('background-color','#ff8732');
    });

    $(".way_group_item_2").click(function () {
        $(".adders-group-big").show();  
        $(".label2").hide();
        $(".label").show(); 
        $(this).css('background-color','#d65b04');
        $(".way_group_item_1").css('background-color','#ff8732');
    });

});

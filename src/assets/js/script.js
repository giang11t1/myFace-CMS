var cont_size_1 = 0.75; //300*400
$(document).ready(function() {
    //slimscroll
    $(function() {
        $('.termofuse-inner').slimScroll({
            color: '#c1c1c1',
            height: '300px',
            size: '5px',
            opacity: 1,
            railVisible: true,
            railOpacity: 1,
            railColor: '#ebebeb',
            alwaysVisible: true
        });
        $('.notifi-slimScrollDiv').slimScroll({
            color: '#0776d0',
            height: '188px',
            size: '5px',
            opacity: 1,
            railVisible: true,
            railOpacity: 0.06,
            railColor: '#0776d0',
            alwaysVisible: true
        });
        $('.galley-SlimScroll').slimScroll({
            color: '#d8e7f4',
            height: '350px',
            size: '5px',
            opacity: 1,
            railVisible: true,
            railOpacity: 0,
            railColor: '#0776d0',
            alwaysVisible: true
        });
        $('.product-list-SlimScroll').slimScroll({
            color: '#d8e7f4',
            height: '190px',
            size: '5px',
            opacity: 1,
            railVisible: true,
            railOpacity: 0,
            railColor: '#0776d0',
            alwaysVisible: true
        });
        $('.list-toggle-Slimscroll').slimScroll({
            color: '#d8e7f4',
            height: '400px',
            size: '5px',
            opacity: 1,
            railVisible: true,
            railOpacity: 0,
            railColor: '#0776d0',
            alwaysVisible: true
        });
    });

    $(function() {
        $(document).on('click', '.search-toggle', function(e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                $('.search-box').removeClass('show-box');
                $('.search-toggle').removeClass('active');
            } else {
                $('.search-box').addClass('show-box');
                $('.search-toggle').addClass('active');
            }
        });
        $(document).on('click', '.search-advanced-show', function(e) {
            e.preventDefault();
            $('.search-tool-advanced').slideDown('slow');
            $(this).hide();
            $('.search-advanced-hide').show();
        });
        $(document).on('click', '.search-advanced-hide', function(e) {
            e.preventDefault();
            $('.search-tool-advanced').slideUp('slow');
            $(this).hide();
            $('.search-advanced-show').show();
        });
        $('.create-step-1').show();
        //chat-comment
        $(document).on('click', '.inbox-tabs-list li', function(e) {
            $('.inbox-tabs-list li').removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '.inbox-message-list li.item', function(e) {
            e.preventDefault();
            $('.inbox-message-list li.item').removeClass('active');
            $(this).removeClass('new');
            $(this).addClass('active');
        });
        //gallery-modal
        $(document).on('click', '.gallery-img-list li.gallery-img-item', function(e) {
            e.preventDefault();
            $('.gallery-img-list li.gallery-img-item').removeClass('active');
            $(this).addClass('active');
        });
        //import-product
        $(document).on('click', '.gotoDoneImport', function(e) {
            e.preventDefault();
            $('.sale-chanel-modal').modal('hide');
            $('.upload-success-modal').modal('show');
        });
        $(document).on('click', '.import-addimg-list .item-toggle ', function(e) {
            e.preventDefault();
            $('.import-addimg-list li.item').removeClass('active');
            $(this).parent('li').addClass('active');
        });
        //customer
        $(document).on('click', '.customer-quickview-toogle', function(e) {
            e.preventDefault();
            $('.customer-quick-view-modal').modal('show');
        });
        $(document).on('click', '.item-control', function(e) {
            e.preventDefault();
            $('.item-control').removeClass('active');
            $(this).addClass('active');
        });

        //create-address
        $('.edit-info').hide();
        $(document).on('click', '.add-address-action', function(e) {
            e.preventDefault();
            $('.show-info').show();
            $('.address-action-group').show();
            $('.edit-info').slideUp();
            $(this).closest('.customer-detail-body').children('.edit-info').slideDown("slow");
            $(this).hide();
        });
        //edit-address
        $(document).on('click', '.edit-address-action', function(e) {
            e.preventDefault();
            $('.edit-info').hide();
            $('.show-info').show();
            $('.address-action-group').show();
            $('.add-address-action').show();
            $(this).closest('.customer-detail-body').children('.show-info').slideUp("slow");
            $(this).closest('.customer-detail-body').children('.edit-info').slideDown("slow");
            $(this).closest('.customer-detail-body').children('.address-action-group').hide();
        });
        $(document).on('click', '.update-customer-btn', function(e) {
            e.preventDefault();
            $('.edit-info').hide();
            $('.show-info').show();
            $('.address-action-group').show();
            $('.add-address-action').show();
            $(this).closest('.customer-detail-body').children('.show-info').slideUp("slow");
            $(this).closest('.customer-detail-body').children('.edit-info').slideDown("slow");
            $(this).closest('.customer-detail-body').children('.address-action-group').hide();
        });
    });
    //sidebar-menu===
    $(".sidebar-menu li.panel").click(function(){
        $(".sidebar-menu li.panel").removeClass("active");
        $(this).addClass("active");
        // $(this).toggleClass("active");
        // $(this).children().find(".fa-angle-right, .fa-angle-down").toggle();
    });

    //datatable-length
    $(function() {
        $('.data-length-text').text($('.data-length-dropdown .active a').text());
        $('.data-length-dropdown li a').click(function(e) {
            e.preventDefault();
            if (!$(this).closest('li').hasClass('active')) {
                $('.data-length-dropdown li').removeClass('active');
                $(this).closest('li').addClass('active');
            }
            $('.data-length-text').text($(this).text());
        });

    });
    $(".goto-orderAddProduct").click(function(e) {
        event.preventDefault();
        $('.orderFillInfo').removeClass('active');
        $('.orderAddProduct').addClass('active');
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    //collapse-table
    $(".collapse-close").click(function(e) {
        e.preventDefault();
        $(this).closest('.collapse-row').find('.collapse-div').slideUp("slow");
        $('.collapse-toggle-nav').removeClass('show-collapse');
    });
    $(".collapse-toggle").click(function(e) {
        e.preventDefault();
        if (!$(this).closest('.collapse-toggle-nav').hasClass('show-collapse')) {
            $('.collapse-div').slideUp("slow");
            $('.collapse-toggle-nav').removeClass('show-collapse');
            $(this).closest('.collapse-toggle-nav').addClass('show-collapse');
            $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-div').slideDown("slow");
        } else {
            $(this).closest('.collapse-toggle-nav').removeClass('show-collapse');
            $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-div').slideUp("slow");
        }
    });
    $(".multi-collapse-toggle").click(function(e) {
        e.preventDefault();
        if (!$(this).closest('.collapse-toggle-nav').hasClass('show-collapse')) {
            $('.collapse-div').slideUp("slow");
            $('.collapse-toggle-nav').removeClass('show-collapse');
            $(this).closest('.collapse-toggle-nav').addClass('show-collapse');
            //multi-invoice
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-store-address-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.store-address-info').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-address-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.address-info').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-ship-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.ship-info').slideDown("slow");
            }
        } else {
            $(this).closest('.collapse-toggle-nav').removeClass('show-collapse');
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-promotion-detail')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-promotion-detail').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-promotion-date')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-promotion-date').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-promotion-turns')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-promotion-turns').slideDown("slow");
            }

            //multi-invoice
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-store-address-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.store-address-info').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-address-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.address-info').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-ship-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.ship-info').slideDown("slow");
            }
        }
    });
    //Create-multi-invoice
    $(".show-add-product-control").click(function(e) {
        e.preventDefault();
        $(this).hide();
        $('.collapse-div').hide("slow");
        $(this).closest('.product-col').find('.add-product-control').show();
    });
    //tooltip
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
        $(document).on('focus', '[data-toggle="tooltip"]', function() { $(this).tooltip('hide'); });
    });
    //datepicker
    $(function() {
        $(".datepicker").datetimepicker({
            format: "yyyy/mm/dd hh:ii"
        });
    });
    // scroll sidebar==
    $(function() {
        if ($(".scrollbar").length > 0) {
            $(".scrollbar").mCustomScrollbar();
        }
    });
    //setsize tab-banner
    function setSizes1() {
        var containerW = $('.tab-banner-inner').width();
        $('.tab-banner-inner').height(containerW / 4.04);
    }
    setSizes1();
    $(window).resize(function() {
        setSizes1();
    });

    //setsize img
    function setSizes(imgClass, prop) {
        var containerW = $(imgClass).width();
        $(imgClass).height(containerW * prop);
    }
    setSizes('.product-create-box .img-box-item', cont_size_1);
    setSizes('.upload-img-step .img-create', cont_size_1);
    // setSizes('.first-item .img-box-item', cont_size_1);
    // setSizes('.upload-img-step .col-xs-4 .img-box-item', cont_size_1);
    // setSizes('.img-item-inner', cont_size_1);
    $(window).resize(function() {
        setSizes('.product-create-box .img-box-item', cont_size_1);
        setSizes('.upload-img-step .img-create', cont_size_1);
        // setSizes('.first-item .img-box-item', cont_size_1);
        // setSizes('.upload-img-step .col-xs-4 .img-box-item', cont_size_1);
        // setSizes('.img-item-inner', cont_size_1);
    });

    //show promotion-tab
    $(function() {
        var checkboxValue;
        $('.promotion-option-control').click(function() {
            checkboxValue = $(this).attr('data-id');
            $('.promotion-form-body').removeClass('active');
            $('.' + checkboxValue).addClass('active');
        });
    });
    //show report-tab
    $(function() {
        var checkboxValue;
        $('.report-form-control').click(function() {
            checkboxValue = $(this).attr('id');
            $(this).closest('.panel').children('.panel-body').children('.report-form-wrap').children('.report-form').removeClass('active');
            $('.' + checkboxValue).addClass('active');
        });
    });

    // click update information account
    $(".infor_ .icon-update").click(function() {
        $(this).parent().parent().find(".infor").slideUp("slow");
        $(this).parent().parent().find(".update").slideDown("slow");
    });

    $(".box3 .infor1 .icon-update").click(function() {
        $(".update-form1").slideDown("slow");
    });
    $(".sub-item .infor2 .icon-update").click(function() {
        $(this).parent().parent().find(".update-form2").slideDown("slow");
    });
    $(".box-panel .btn-cancel ").click(function() {
        $(this).parent().parent().parent().find(".infor").slideDown("slow");
        $(this).parent().parent().parent().find(".update").slideUp("slow");
        $(".btn-add-address").show();
    });

    $(".btn-add-address").click(function() {
        $(this).hide();
        $(".add-form").slideDown("slow");
    });
    // nhan vien quan tri
    $("#tab-3 .btn-create").click(function() {
        $(this).hide();
        $(this).parent().find(".show-list").slideUp("slow");
        $(this).parent().find(".create-admin").slideDown("slow");
    });
    $("#tab-3 .btn-done .btn-secondary, #tab-3 .btn-done .btn-cancel").click(function() {
        $("#tab-3 .btn-create").show();
        $(this).parent().parent().parent().parent().parent().parent().find(".show-list").slideDown();
        $(this).parent().parent().parent().parent().parent().parent().find(".create-admin").slideUp();
        $(this).parent().parent().parent().parent().parent().parent().find(".edit-admin").slideUp();
    });
    $("#tab-3 .edit-action").click(function() {
        $(".show-list").slideUp("slow");
        $(".edit-admin").slideDown("slow");
        $("#tab-3 .btn-create").hide();
    });
    // change time option
    $(".box-change-package .wrap-box .item select")

    // selection value
    $(function() {
        $('#choose-act1, #choose-act2').change(function() {
            if ($(this).val() === "6") {
                $("._ip input").show();
                $(".col-md-2 p").show();
            } else {
                $("._ip input").hide();
                $(".col-md-2 p").hide();
            }
        });
    });
    // click update package
    $(".panel-package .btn-upgrage").click(function() {
        $(".panel-package").hide();
        $(".box-change-package2").show();
    });
    $(".panel-package .btn-package").click(function() {
        $(".panel-package").hide();
        $(".box-change-package1").show();
    });
    $(".box-change-package .btn-cancel").click(function() {
        $(".panel-package").show();
        $(".box-change-package").hide();
    });
    //collapse radio
    $("#radio_company,#radio_company1").click(function() {
        $(".panel-group").slideDown();
        $(".first_choice .panel-shop").slideUp();
    });
    $("#radio_shop,#radio_shop1").click(function() {
        $(".panel-group").slideUp();
        $(".first_choice .panel-shop").slideDown();
    });

    $('input:radio[name="payment_method"]').change(
        function() {
            if ($(this).is(':checked')) {
                $(".panel-outner .block").slideUp();
                $(this).parent().parent().find(".block").slideDown();
            }
        });

    // click checkbox and show switch bar
    $(".data-product").selectpicker();

   /* function CheckForm() {
        var checked = false;
        var elements = document.getElementsByName("choose");
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].checked) {
                checked = true;
            }
        }
        if (!checked) {
            $(".switch_bar").slideUp();
        }
        if (checked) {
            $(".switch_bar").slideDown();
        }
        return checked;
    }
    CheckForm();*/


    $('input[type="checkbox"].checkbox_check').click(function() {
        CheckForm();
    });
    // show chart report
    $("#tabs ul li").click(function(){
        $(".chartContainer").removeClass("visible");
    })
    $(".btn-view").click(function() {
        $(".chartContainer").addClass("visible");
    });

    // multi collapse advanced product
    $(".multi-collapse-toggle").click(function(e) {
        e.preventDefault();
        if (!$(this).closest('.collapse-toggle-nav').hasClass('show-collapse')) {
            $('.collapse-div').slideUp("slow");
            $('.collapse-toggle-nav').removeClass('show-collapse');
            $(this).closest('.collapse-toggle-nav').addClass('show-collapse');
            //multi-invoice
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-price-si-info')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.price-si-info').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-group-customer-info')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.group-customer-info').slideDown("slow");
            }
        } else {
            $(this).closest('.collapse-toggle-nav').removeClass('show-collapse');
            //multi-invoice
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-price-si-info')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.price-si-info').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-group-customer-info')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.group-customer-info').slideDown("slow");
            }
        }
    });
    // product advanced
    $(".goto-ListProductAdvance").click(function(e) {
        $('html, body').animate({
            scrollTop: $(".ListProductAdvance").offset().top - 80} ,
            'slow');
    });

    $('input[type="radio"]').click(function() {
        if ($(this).is(':checked')) {
            if($(this).attr('id') == 'choose2') {
                $('.second-choice ul').slideDown();
            }else{
                $('.second-choice ul').slideUp();
            }
        }
    });
    $(".panel-custom .edit-action").click(function(){
        $(this).hide();
        $(this).parent().find(".content-show").slideUp();
        $(this).parent().find(".content-edit ").slideDown();
    });
    $(".panel-custom .btn-cancel").click(function(){
        $(this).parent().parent().parent().find(".edit-action").show();
        $(this).parent().parent().parent().find(".content-show").slideDown();
        $(this).parent().parent().parent().find(".content-edit ").slideUp();
    });
    // choose color
    $(function() {
      var $inputs = $('input.color');
      $inputs.colorPicker({pickerDefault: '#F44336'});
    });
    // choose click 3 level
    function callText(){
        $(".ShowText").click(function(){
            $(".box-option-click").show();
        });
        $(".box-option-click .third-list li a").click(function(){
            $(".ShowText").text("");
            var text = $(this).text();
            $(".ShowText").text(text);
            $(".box-option-click").hide();
        });
    }
    callText();
    //show div when click
    $(document).on("click", function(e){
        if($(e.target).is(".ShowText")){
          $(".box-option-click").show();
        }else{
            $(".box-option-click").hide();
        }
    });
    /*choose list option 3 level*/
    $(".dropdown.ChooseStatus dt a").on('click', function() {
      $(".dropdown.ChooseStatus dd ul").slideToggle('fast');
    });
    $(".dropdown.ChooseTransport dt a").on('click', function() {
      $(".dropdown.ChooseTransport dd ul").slideToggle('fast');
    });

    $(".dropdown.ChooseStatus dd ul li a").on('click', function() {
      $(".dropdown.ChooseStatus dd ul").hide();
    });

    $(".dropdown.ChooseTransport dd ul li a").on('click', function() {
      $(".dropdown.ChooseTransport dd ul").hide();
    });

    function getSelectedValue(id) {
      return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("dropdown")) $(".dropdown.ChooseStatus dd ul").hide();
    });
    $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("dropdown")) $(".dropdown.ChooseTransport dd ul").hide();
    });

    $('.ChooseStatus .mutliSelect input[type="checkbox"]').on('click', function() {

      var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
        title = $(this).val() + ",";

      if ($(this).is(':checked')) {
        var html = '<span title="' + title + '">' + title + '</span>';
        $('.ChooseStatus .multiSel').append(html);
        $(".ChooseStatus .hida").hide();
      } else {
        $('span[title="' + title + '"]').remove();
        var ret = $(".hida");
        $('.ChooseStatus .dropdown dt a').append(ret);
      }

      if ($(".ChooseStatus .mutliSelect input:checkbox:checked").length > 0)
        {
            $(".ChooseStatus .hida").hide();
        }
        else
        {
           $(".ChooseStatus .hida").show();
        }

    });

    $('.ChooseTransport .mutliSelect input[type="checkbox"]').on('click', function() {

      var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
        title = $(this).val() + ",";

      if ($(this).is(':checked')) {
        var html = '<span title="' + title + '">' + title + '</span>';
        $('.ChooseTransport .multiSel').append(html);
        $(".ChooseTransport .hida").hide();
      } else {
        $('span[title="' + title + '"]').remove();
        var ret = $(".hida");
        $('.ChooseTransport .dropdown dt a').append(ret);

      }

      if ($(".ChooseTransport .mutliSelect input:checkbox:checked").length > 0)
        {
            $(".ChooseTransport .hida").hide();
        }
        else
        {
           $(".ChooseTransport .hida").show();
        }

    });
    // create tab using jquery ui
    $( "#tabs" ).tabs();

    //set Height of chat-comment content


    function chatWidgetSetHeight() {
        var header =  $('.main-header');
        var pageHeader = $('.page-header');
        var chatWidgetContent = $('.chatWidgetContent');
        var chatWidgetHeading = $('.chat-widget-heading');
        var typeBox = $('.message-type-tool');
        var inboxSearch = $('.inbox-search');
        h = window.innerHeight;
        h_header = header.outerHeight();
        h_pageheader = pageHeader.outerHeight();
        h_chatgroup = h - (h_header + h_pageheader);
        h_typebox = typeBox.outerHeight();
        h_chatheading = chatWidgetHeading.outerHeight();
        h_inboxsearch = inboxSearch.outerHeight();
        h_chatcontent = h_chatgroup - h_chatheading;
        h_mess_box = h_chatcontent - h_typebox;
        h_inbox_block = h_chatcontent - h_inboxsearch;

        chatWidgetContent.height(h_chatgroup);
        $('.message-box-Slimscroll').slimScroll({
            height: h_mess_box +'px',
            color: '#d8e7f4',
            start: 'bottom',
            size: '5px',
            opacity: 1,
            railVisible: true,
            railOpacity: 0,
            railColor: '#0776d0',
            alwaysVisible: true
        });
        $('.inbox-list-Slimscroll').slimScroll({
            height: h_inbox_block +'px',
            color: '#d8e7f4',
            start: 'bottom',
            size: '5px',
            opacity: 1,
            railVisible: true,
            railOpacity: 0,
            railColor: '#0776d0',
            alwaysVisible: true
        });
        $('.customer-box-Slimscroll').slimScroll({
            height: h_chatcontent +'px',
            color: '#d8e7f4',
            start: 'bottom',
            size: '5px',
            opacity: 1,
            railVisible: true,
            railOpacity: 0,
            railColor: '#0776d0',
            alwaysVisible: true
        });
    };
    chatWidgetSetHeight();
    $(window).resize(function() {
        chatWidgetSetHeight();
    });
    //chart
    if ($('.chart')[0]) {
        $(function() {
            /* ChartJS
             * -------
             * Here we will create a few charts using ChartJS
             */

            //--------------
            //- AREA CHART -
            //--------------

            // Get context with jQuery - using jQuery's .get() method.
            var areaChartCanvas = $(".areaChart").get(0).getContext("2d");
            // This will get the first returned node in the jQuery collection.
            var areaChart = new Chart(areaChartCanvas);
            var daTacuata = [28, 48, 40, 19, 86, 27, 90];
            var labelscuata = ["0", "01/12/16", "01/01/17", "01/02/17", "01/03/17", "01/03/17", "01/04/17"];
            var areaChartData = {
                labels: labelscuata,
                datasets: [{
                    label: "doanh thu",
                    fillColor: "rgba(39,182,200,0.9)",
                    strokeColor: "rgba(39,182,200,0.8)",
                    pointColor: "#27b6c8",
                    pointStrokeColor: "rgba(39,182,200,1)",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(39,182,200,1)",
                    data: daTacuata
                }]
            };

            var areaChartOptions = {
                //Boolean - If we should show the scale at all
                showScale: true,
                //Boolean - Whether grid lines are shown across the chart
                scaleShowGridLines: false,
                //String - Colour of the grid lines
                scaleGridLineColor: "rgba(0,0,0,.05)",
                //Number - Width of the grid lines
                scaleGridLineWidth: 1,
                //Boolean - Whether to show horizontal lines (except X axis)
                scaleShowHorizontalLines: true,
                //Boolean - Whether to show vertical lines (except Y axis)
                scaleShowVerticalLines: true,
                //Boolean - Whether the line is curved between points
                bezierCurve: true,
                //Number - Tension of the bezier curve between points
                bezierCurveTension: 0.3,
                //Boolean - Whether to show a dot for each point
                pointDot: false,
                //Number - Radius of each point dot in pixels
                pointDotRadius: 4,
                //Number - Pixel width of point dot stroke
                pointDotStrokeWidth: 1,
                //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                pointHitDetectionRadius: 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke: true,
                //Number - Pixel width of dataset stroke
                datasetStrokeWidth: 2,
                //Boolean - Whether to fill the dataset with a color
                datasetFill: true,
                //String - A legend template
                legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
                //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                maintainAspectRatio: true,
                //Boolean - whether to make the chart responsive to window resizing
                responsive: true
            };
            areaChart.Line(areaChartData, areaChartOptions);
        });
    }
    // line chart
    if ($('.chart1')[0]) {
        $(function() {
            var lineChartData = {
                labels: ["0", "01/12/16", "01/01/17", "01/02/17", "01/03/17", "01/03/17", "01/04/17"],
                datasets: [
                    {
                        fillColor: "rgba(220,220,220,0)",
                        strokeColor: "#f26223",
                        pointColor: "#fff",
                        data: [20, 30, 8000, 20, 40, 10, 60]
                    }
                ]
            }

            Chart.defaults.global.animationSteps = 120;
            Chart.defaults.global.tooltipYPadding = 6;
            Chart.defaults.global.tooltipCornerRadius = 0;
            Chart.defaults.global.tooltipTitleFontStyle = "normal";
            Chart.defaults.global.tooltipFillColor = "#f26223";
            Chart.defaults.global.animationEasing = "easeOutBounce";
            Chart.defaults.global.responsive = true;
            Chart.defaults.global.scaleLineColor = "#ccc";
            Chart.defaults.global.scaleFontSize = 16;

            var ctx = document.getElementById("canvas").getContext("2d");
            var LineChartDemo = new Chart(ctx).Line(lineChartData, {
                pointDotRadius: 5,
                bezierCurve: false,
                scaleShowVerticalLines: false,
                scaleGridLineColor: "#ccc"
            });
        });
    }

});


$(document).ready(function() {
    //select
    function formatProduct(repo) {
        if (repo.loading) return ('Đang tải');
        // console.log(repo);
        var markup = "<div class='select2-result-repository clearfix' data-id='123'>" +
            "<div class='select2-result-repository__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
            "<div class='select2-result-repository__meta'>" +
            "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";
        markup +="</div></div>";
        return markup;
    }
    function formatRepoSelection(repo) {
        return repo.full_name || repo.text;
    }
    $(".data-product-ajax").select2({
        placeholder: "chọn sản phẩm",
        allowClear: false,
        ajax: {
            url: "https://api.github.com/search/repositories",
            dataType: 'json',
            delay: 250,
            data: function(params) {
                return {
                    q: params.term, // search term
                    page: params.page
                };
            },
            processResults: function(data, params) {
                // parse the results into the format expected by Select2
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data, except to indicate that infinite
                // scrolling can be used
                params.page = params.page || 1;
                return {
                    results: data.items,
                    pagination: {
                        more: (params.page * 30) < data.total_count
                    }
                };
            },
            cache: true
        },
        escapeMarkup: function(markup) {
            return markup;
        }, // let our custom formatter work
        minimumInputLength: 1,
        templateResult: formatProduct,
        templateSelection: formatRepoSelection
    });
    $(".data-productcate-ajax").select2({
        placeholder: "chọn nhóm sản phẩm",
        allowClear: false
    });
    // $('.select2-result-repository').on("click", function() {
    //     var valueChosen = $(this).find('img').attr('src');
    //     console.log (valueChosen);
    // });
});

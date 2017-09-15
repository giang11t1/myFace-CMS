// http://jsfiddle.net/mekwall/sgxKJ/

$.widget("ui.autocomplete", $.ui.autocomplete, {
    options : $.extend({}, this.options, {
        multiselect: false
    }),
    _create: function(){
        this._super();

        var self = this,
            o = self.options;

        if (o.multiselect) {
            self.selectedItems = {};
            self.multiselect = $("<div></div>")
                .addClass("ui-autocomplete-multiselect ui-state-default ui-widget ss-box")
                .css("width", self.element.width())
                .insertBefore(self.element)
                .append(self.element)
                .bind("click.autocomplete", function(){
                    self.element.focus();
                });

            var fontSize = parseInt(self.element.css("fontSize"), 10);
            function autoSize(e){
                // Hackish autosizing
                var $this = $(this);
                $this.width(1).width(this.scrollWidth+fontSize-1);
            };

            var kc = $.ui.keyCode;
            self.element.bind({
                "keydown.autocomplete": function(e){
                    if ((this.value === "") && (e.keyCode == kc.BACKSPACE)) {
                        var prev = self.element.prev();
                        delete self.selectedItems[prev.text()];
                        prev.remove();
                    }
                },
                // TODO: Implement outline of container
                "focus.autocomplete blur.autocomplete": function(){
                    self.multiselect.toggleClass("ui-state-active");
                },
                "keypress.autocomplete change.autocomplete focus.autocomplete blur.autocomplete": autoSize
            }).trigger("change");

            // TODO: There's a better way?
            o.select = o.select || function(e, ui) {
                //Chi chon dc 1, hide if chon nhieu
                var prev = self.element.prev();
                delete self.selectedItems[prev.text()];
                prev.remove();
                //end Chi chon dc 1 hide if chon nhieu
                var tem = 0;
                $('.insertProduct').each(function() {
                    if(this.id == ui.item.id){
                        tem = tem + 1;
                    }
                });
                if(tem > 0){
                    return false;
                }
                $("<div></div>")
                    .addClass("ui-autocomplete-multiselect-item insertProduct")
                    .attr('id',ui.item.id)
                    .text(ui.item.label)
                    .append(
                        $("<span></span>")
                            .addClass("ui-icon ui-icon-close")
                            .click(function(){
                                var item = $(this).parent();
                                delete self.selectedItems[item.text()];
                                item.remove();
                            })
                    )
                    .insertBefore(self.element);

                self.selectedItems[ui.item.label] = ui.item;
                self._value("");
                return false;
            }

            /*self.options.open = function(e, ui) {
                var pos = self.multiselect.position();
                pos.top += self.multiselect.height();
                self.menu.element.position(pos);
            }*/
        }

        return this;
    }
});

$(document).ready(function() {
    //order step by step
    $(document).on('click', '.gotoStep2', function(e) {
        e.preventDefault();
        $('.create-step-1').slideUp('slow');
        $('.create-step-2').slideDown('slow');
    });
    $(document).on('click', '.gotoStep3', function(e) {
        e.preventDefault();
        $('.create-step-2').slideUp('slow');
        $('.create-step-3').slideDown('slow');
    });
    $(document).on('click', '.gotoDone', function(e) {
        e.preventDefault();
        $('.create-order-modal').modal('hide');
        $('.order-success-modal').modal('show');
    });
    //edit customer's profile
    $(document).on('click', '.update-info-btn', function(e) {
        e.preventDefault();
        $('.show-customer-info').slideUp();
        $('.edit-customer-info').slideDown();
    });
    $(document).on('click', '.submit-info-btn', function(e) {
        e.preventDefault();
        $('.edit-customer-info').slideUp();
        $('.show-customer-info').slideDown();
    });
    //edit-address-customer
    $(document).on('click', '.customer-detail-body .cta-block .btn', function(e) {
        e.preventDefault();
        $('.edit-info').slideUp("slow");
        $('.show-info').slideDown("slow");
        $('.add-address-action').show();
        $('.address-action-group').show()
    });
    //goto-next-step in create invoice
    $(".goto-orderFillInfo").click(function() {
        $('.orderAddProduct').removeClass('active');
        $('.orderFillInfo').addClass('active');
        $('html,body').animate({ scrollTop: ($('.' + 'orderFillInfo').offset().top - 80) }, 'slow');
    });
    $(function() {
        var availableTags = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion"
        ];
        $(".productPromotion").autocomplete({
            source: availableTags,
            minLength: 1,
            select: function(event, ui) {
                console.log(ui.item.value);
                $(this).val('');
                return false;
            }
        });
    });
    // multiselect
    $( function() {
        var availableTags = [
          "ActionScript",
          "AppleScript",
          "Asp",
          "BASIC",
          "C",
          "C++",
          "Clojure",
          "COBOL",
          "ColdFusion",
          "Erlang",
          "Fortran",
          "Groovy",
          "Haskell",
          "Java",
          "JavaScript",
          "Lisp",
          "Perl",
          "PHP",
          "Python",
          "Ruby",
          "Scala",
          "Scheme"
        ];
        function split( val ) {
          return val.split( /,\s*/ );
        }
        function extractLast( term ) {
          return split( term ).pop();
        }

        $( "#inputSearchProduct" )
          // don't navigate away from the field on tab when selecting an item
          .on( "keydown", function( event ) {
            if ( event.keyCode === $.ui.keyCode.TAB &&
                $( this ).autocomplete( "instance" ).menu.active ) {
              event.preventDefault();
            }
          })
          .autocomplete({
            multiselect : true, //chon nhieu : multiselect : true
            minLength: 0,
            source: function( request, response ) {
              // delegate back to autocomplete, but extract the last term
              response( $.ui.autocomplete.filter(
                availableTags, extractLast( request.term ) ) );
            },
            focus: function() {
              // prevent value inserted on focus
              return false;
            },
            select: function( event, ui ) {
              var terms = split( this.value );
              // remove the current input
              terms.pop();
              // add the selected item
              terms.push( ui.item.value );
              // add placeholder to get the comma-and-space at the end
              terms.push( "" );
              this.value = terms.join( "" );
              return false;
            }
          });
    });
});

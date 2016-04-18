$(document).ready(function() {

    //Page Loading


    /*==========================================================================================
        * Home
     ===========================================================================================*/
    var data_array = [{
        img_src: 'img/supermarket_shelf.png',
        features: ['Boltless- Layers Can be adjustable easily', 'Shelves with ribs to prevent bending', 'Rust-free- Electrolytic Powder coated', 'Uprights with shoe for extra stability'],
        name: 'Supermarket Shelf'
    }, {
        img_src: 'img/warehouse_rack.png',
        features: ['Boltless- Layers Can be adjustable easily', 'Shelves with ribs to prevent bending', 'Rust-free- Electrolytic Powder coated', 'Uprights with shoe for extra stability'],
        name: 'Warehouse Rack'
    }, {
        img_src: 'img/library_rack.png',
        features: ['6 layers Rack', 'Easy to assemble & dismantle', 'Adjustable shelf Height', 'Electrolytic Powder coated'],
        name: 'Library Rack'
    }, {
        img_src: 'img/pallet_rack.png',
        features: ['High- quality RAW STEEL', 'A wide range of different racking types to suit different storage needs.', 'Free but expert advice & proposed racking solutions for your kind reference', 'The foot accompanied by a high elastic rubber, greatly enhanced and the surface adsorption.'],
        name: 'Pallet Rack'
    }, {
        img_src: 'img/counter.png',
        features: ['The main platform is made of high-quality steel plate', 'alumium alloy or PVC plastic for covered edge to prevent the collision.', 'The foot accompanied by a high elastic rubber, greatly enhanced and the surface adsorption.', 'accessories,such as keyboard holder, stop bar and bagging frame,etc can be supplied', 'Direction can be in left side or right side'],
        name: 'Counter'
    }, {
        img_src: 'img/trolley.png',
        features: ['Materials: bright steel wire.', 'surface treatment: zinc plated', 'Different design is available'],
        name: 'Trolley'
    }, {
        img_src: 'img/scafold.png',
        features: ['aluminum scaffolding ', 'can be folded.', 'Does not occupy a space'],
        name: 'Scafold'
    }, {
        img_src: 'img/cantilever.png',
        features: [' High grade raw material of high tenacity.', 'Perfect powder coated surface treatment.', 'High quality of competitive price.', 'Professional package and punctual delivery.'],
        name: 'Cantilever'
    }, {
        img_src: 'img/locker.png',
        features: ['Iiron', 'carbon steel', 'stainless steel', 'brass', 'copper', 'alloy steel', 'aluminum', 'cold rolled steel with various plating'],
        name: 'Locker/Cabinet'
    }];

    //load Images to cache
    function preloadImages() {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 1; i < data_array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        
        img.src = data_array[i].img_src;
        list.push(img);
    }
}

$(window).bind("load", function() {
   preloadImages();
});


    //Slide menu and Features
    function sideMenu() {
        if (side_menu) {
            menu.html("<i>Show Menu</i>");
            side_menu = false;
        } else {
            menu.html("<i>Hide Menu</i>");
            side_menu = true;

        };
        $('#q_slider img').toggleClass('resizer');
        $('.q_sidemenu').toggleClass('toggle_sidemenu');



    }

    var side_menu = true;
    var bottom_menu = false;
    var menu = $('#slide_menu');
    var popup = $('#media_q_slider_popup');

    if (menu.length >= 1) {
        menu.click(function() {
            sideMenu();
            if (side_menu) {
                if (bottom_menu) {
                    popup.toggleClass('toggle_popup');
                    bottom_menu = false;
                };

            };


        });


        popup.click(function() {

            $(this).toggleClass('toggle_popup');
            if (side_menu) {
                sideMenu();
            };
            if (bottom_menu) {
                bottom_menu = false;
            } else {
                bottom_menu = true;
            }

        });

       
                //swipe functions
     $( "body" ).on( "swipeleft", swipeleftHandler );
 
  // Callback function references the event target and adds the 'swipeleft' class to it
    function swipeleftHandler( event ){
         if (side_menu) {
                    sideMenu();
                };
  };

   $("body").on( "swiperight", swiperightHandler );
 
  // Callback function references the event target and adds the 'swipeleft' class to it
    function swiperightHandler( event ){
         if (!side_menu) {
                    sideMenu();
                };
  };

       


        //Responsive effects
        var body = $(window);
        body.resize(function() {
            if ($('toggle_sidemenu').length > 1) {
                if (side_menu) {
                    sideMenu();
                };
                if (bottom_menu) {
                    popup.toggleClass('toggle_popup');
                    bottom_menu = false;
                };
            } else {
                if (!side_menu) {
                    sideMenu();
                };
            };

        });

        //Image click event
         var image = $('#q_slider img');
         image.click(function() {
             if (side_menu) {
                    sideMenu();
                };
             if (bottom_menu) {
                    popup.toggleClass('toggle_popup');
                    bottom_menu = false;
                };
         });


    };

    //Q-Menu Hover Effect
    $('.q_sidemenu li').mouseover(function() {
        $(this).animate({
            width: '120px'
        });

    });

    $('.q_sidemenu li').mouseleave(function() {
        $(this).animate({
            width: '110px'
        });

    });

    //Side Menu Buttons click events
    function add_element(name) {
        return "<li>" + name + "</li>";
    }

    function link_iterator(it_var) {
        var this_image = $('#q_slider img');
        this_image.addClass('img_fade');

        setTimeout(function() {
            this_image.attr("src", data_array[it_var].img_src);
            this_image.attr("alt", data_array[it_var].name);
        }, 500);
        setTimeout(function() {
            this_image.removeClass('img_fade');
        }, 750);



        var elem = '';
        $.each(data_array[it_var].features, function(index, value) {
            elem += add_element(value);
        });
        $('.q_slider_popup h3, .media_q_slider_popup h3').html(data_array[it_var].name);
        $('.q_slider_popup ul:first, .media_q_slider_popup ul:first').html(elem);
    }

    $('.q_sidemenu li').click(function() {

        $(this).addClass('active');
        //loading


        var data_name = $(this).attr("data-name");
        switch (data_name) {
            case 'super_shelf':
                link_iterator(0);
                break;
            case 'ware_rack':
                link_iterator(1);
                break;
            case 'lib_rack':
                link_iterator(2);
                break;
            case 'pallet_rack':
                link_iterator(3);
                break;
            case 'counter':
                link_iterator(4);
                break;
            case 'trolley':
                link_iterator(5);
                break;
            case 'scafold':
                link_iterator(6);
                break;
            case 'cantilever':
                link_iterator(7);
                break;
            case 'locker':
                link_iterator(8);
                break;

        }

    });

    /*==========================================================================================
    * Contacts
    ============================================================================================*/

    var contact = $('#contact');
    // validate contact form
    if (contact.length >= 1) {
        $(function() {
            contact.validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true
                    },
                    answer: {
                        required: true,
                        answercheck: true
                    }
                },
                messages: {
                    name: {
                        required: "come on, you have a name don't you?",
                        minlength: "your name must consist of at least 2 characters"
                    },
                    email: {
                        required: "no email, no message!"
                    },
                    message: {
                        required: "you have to write something to send this form.",
                        minlength: "thats all? really?"
                    },
                    answer: {
                        required: "sorry, wrong answer!"
                    }
                },
                submitHandler: function(form) {
                    $('#load').show();
                    $(form).ajaxSubmit({
                        type: "POST",
                        data: $(form).serialize(),
                        url: "process.php",
                        success: function() {
                            $('#contact :input').attr('disabled', 'disabled');
                            $('#contact').fadeTo("slow", 1, function() {
                                $(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor', 'default');
                                $('#load').hide();
                                $('#success').show();
                            });
                        },
                        error: function() {
                            $('#contact').fadeTo("slow", 1, function() {
                                $('#load').hide();
                                $('#error').show();
                            });
                        }
                    });
                }
            });
        });
    }
    /*==========================================================================================
    *Fancy Box
    ============================================================================================*/

    var fancy = $('.fancybox');
    if (fancy.length >= 1) {
        fancy.fancybox();
    }




}); // Init
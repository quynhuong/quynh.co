$(document).ready(function() {
    // jQuery Function Number 1 (on view 4/contact page)
   $("#social1").css("opacity", 1);

   // jQuery Function Number 2
    $("#social1").hover(function() {
    	// jQuery Function Number 3
        $(this).animate({opacity: 0.6}, 300);
    }, function() {
        $(this).animate({opacity: 1.0}, 300);
    });

    $("#social2").css("opacity", 1);
    $("#social2").hover(function() {
        $(this).animate({opacity: 0.6}, 300);
    }, function() {
        $(this).animate({opacity: 1.0}, 300);
    });

    $("#social3").css("opacity", 1);
    $("#social3").hover(function() {
        $(this).animate({opacity: 0.6}, 300);
    }, function() {
        $(this).animate({opacity: 1.0}, 300);
    });

    // jQuery Function Number 4 
    $('#navbar-item1').click(function(){
   		window.location.href='https://quynhuong.github.io/view2';

    });
    $('#navbar-item2').click(function(){
   		window.location.href='https://quynhuong.github.io/view3';
	})
	$('#navbar-item3').click(function(){
   		window.location.href='https://quynhuong.github.io/view4';

	})
	$('#logo').click(function(){
   		window.location.href='https://quynhuong.github.io/index.html';

	})

	$("#quote").click(function(){
		// jQuery Function Number 5 (on view 3/about page)
		$(this).text("WE ARE ONLY LINE AND COLOR. -PIET MONDRIAN");
		// jQuery Function Number 6 (on view 3/about page)
		$(this).addClass("change-color");
	$(this).click(function(){
		$(this).text("I PAINT MY OWN REALITY. -FRIDA KAHLO");
	$(this).click(function(){
		$(this).text("ART IS WHAT YOU CAN GET AWAY WITH. -ANDY WARHOL");
	$(this).click(function(){
		$(this).text("I LIKE TO PRETEND MY ART HAS NOTHING TO DO WITH ME. -ROY LICHTENSTEIN");
	$(this).click(function(){
		$(this).text("I HAVE NO FEAR OF MAKING CHANGES. -JACKSON POLLOCK");
	$(this).click(function(){
		$(this).text("ART IS KALEIDOSCOPIC. -QUYNH UONG");
	});
	});
	});
	});
	});
	});
  });









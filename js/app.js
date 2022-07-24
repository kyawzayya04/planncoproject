$(document).ready(function(){

	// Start Back to Top

	$(".btn-backtotops").hide();
	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		console.log(getscrolltop)

		if(getscrolltop >= 370){
			$(".btn-backtotops").fadeIn(1000);
		}else{
			$(".btn-backtotops").fadeOut(1000);
		}
	})

	// End Back to Top

	// Start Header

	// Start nav

	$(".navbuttons").click(function(){
		$(".navbuttons").toggleClass("crossxs")
	})

	// for nav
	$(window).scroll(function(){


		let getscrolltop = $(window).scrollTop()
		console.log(getscrolltop)

		if(getscrolltop >= 200){
			$(".navbar").addClass("navmenus")
		}else{
			$(".navbar").removeClass("navmenus")
		}
	})

	// End nav

	// End Header

	// Start Properties

	$(".propertylists").click(function(){

		// for active item
		$(this).addClass("activeitems").siblings().removeClass("activeitems")

		// for filter
		let getattvalue = $(this).attr("data-filter")
		console.log(getattvalue)

		if(getattvalue === "all"){
			$(".filters").show("slide",800)
		}else{
			$(".filters").not("."+ getattvalue).hide("slide",800)
			$(".filters").filter("."+ getattvalue).show("slide",800)
		}
	})

	lightbox.option({
      showImageNumberLabel:false
    })

	// End Properties

	// Start Adv

	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop()
		console.log(getscrolltop)

		if(getscrolltop >= 900){
			$(".advimgs").addClass("fromlefts")
			$(".advtexts").addClass("fromrights")
		}else{
			$(".advimgs").removeClass("fromlefts")
			$(".advtexts").removeClass("fromrights")
		}

	})

	// End Adv

	// Start Footer

	const getyear = $("#getyear");
	const getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);


	// End Footer
})
		function count(){

			var shop_str=localStorage.getItem("cake_shop");
			if(shop_str){
				var shop_arr=JSON.parse(shop_str);
				console.log(shop_arr);
				var count=0;
				
				$.each(shop_arr,function(i,v){
					count +=v.qty;
					console.log(count);
					$("#count").text(count);
				})
			}
		}
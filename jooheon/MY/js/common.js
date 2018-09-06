 //maps
window.onload = function(){
   var mymap = document.getElementById('map');
   var latlng = new google.maps.LatLng(37.6371007,127.0242582);
   var gmap = new google.maps.Map(
   mymap, {
      zoom: 16,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   });
   var marker = new google.maps.Marker({
      position: latlng,
      map: gmap,
      title: '수유역'
   });
   google.maps.event.addListener(marker, 'click', function(event){
      alert('수유역');
   });
}
//menu
$(document).ready(function(){
   $('#header .lnb').hide();
   $('.btn_nav').click(function(){
      $('#header .lnb').slideToggle(500);
   });
});
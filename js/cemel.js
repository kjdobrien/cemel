function poster(id, date, name, genre, posterUrl, price) {
	this.id = id;
	this.date = date;
	this.name = name;
	this.genre = genre; 
	this.posterUrl = posterUrl;
	this.price = price; 
	
	
}

var dkdm = new poster(1, ("01/05/2015"), "Duke Dumont", "House", "../css/friday-1st-may-4.jpg", 15);
var rt94 = new poster(2, ("17/04/2015"), "Route94", "House", "../css/Route94-Cover.jpg", 15); 
var ndct = new poster(3, ("30/01/2015"), "Second City", "House", "../css/ss.jpg", 10);
var wzod = new poster(4, ("13/02/2015"), "Waze & Odyssey", "House", "../css/wo.jpg", 14);
var rgsz = new poster(5, ("27/02/2015"), "Roger Sanchez", "House", "../css/rs.jpg", 10);



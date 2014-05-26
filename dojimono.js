//Use localStorage
//http://www.misclog.com/tech/1021/

function get_parameter(p){ return parseInt( document.getElementById(p).innerHTML ); }
function change_parameter(p,v){ document.getElementById(p).innerHTML = v; }

function get_exp()      { return get_parameter("experience"); }
function get_friend()   { return get_parameter("friend"    ); }
function get_money()    { return get_parameter("money"     ); }
function get_stock()    { return get_parameter("stock"     ); }
function get_book()     { return get_parameter("book"      ); }
function get_paper()    { return get_parameter("paper"     ); }
function get_plant()    { return get_parameter("plant"     ); }
function get_wood()     { return get_parameter("wood"      ); }

function get_skill_forestry()  { return get_parameter("forestry_skill"    ); }
function get_skill_papermake() { return get_parameter("papermaking_skill" ); }
function get_experience()      { return get_parameter("experience"        ); }

function publish(){
  money = get_money();
  paper = get_paper();
  book  = get_book ();
  stock = get_stock();
  if( publish_enable() ){
    change_parameter( "money", money - 2000 );
    change_parameter( "paper", paper - 50   );
    change_parameter( "book" , book  + 1    );
    change_parameter( "stock", stock + 10   );
  }
}

function publish_enable() {
  money = get_money();
  paper = get_paper();
  if ( money < 2000 ) { alert("You need more money!"); return false; }
  if ( paper < 50   ) { alert("Please papermake!"   ); return false; }
  return true;
}

function forestry(){
  plant = get_plant();
  wood  = get_wood();
  skill_forestry = get_skill_forestry();
  if ( plant <= 0 ) {
    alert("Buy plant!");
  }else{
    change_parameter( "plant", plant - 1 );
    change_parameter( "wood" , wood  + 5 );
    change_parameter( "forestry_skill", skill_forestry + 10 );
  }
}

function papermake(){
  wood  = get_wood();
  paper = get_paper();
  papermake_skill = get_skill_papermake();
  if ( wood <= 0 ){
    alert("Do forestry!");
  }else{
    change_parameter( "wood" , wood  - 1  );
    change_parameter( "paper", paper + 30 );
    change_parameter( "papermaking_skill", papermaking_skill + 10 );
  }
}

function go_on_event(){}

function sell_books(){
  stock = get_stock();
  sales = Math.round( Math.random() * 15 );
  if ( sales <= stock ) {
    change_parameter( "money", money + ( sales * 300 ) );
    change_parameter( "stock", stock -   sales         );
  }else{
    change_parameter( "money", money + ( stock * 300 ) );
    change_parameter( "stock", 0                       );
  }
}

function add_villager(){
  friend = get_friend();
  if ( friend < 20 ) {
    change_parameter( "friend", friend + 1 );
  }else{
    alert( "Overcrowded!" );
  }
}

function buy_plant(){
  money = get_money();
  plant = get_plant();
  if ( money < 50 ) {
    alert( "You need more money!" );
  }else{
    change_parameter( "money", money - 50 );
    change_parameter( "plant", plant + 3  );
  }
}

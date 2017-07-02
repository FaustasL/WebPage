function active(){
  var searchBar = document.getElementById('searchBar');

  if(searchBar.value == 'Search...'){
    searchBar.value = ''
    searchBar.placeholder= 'Search...'
  }
}

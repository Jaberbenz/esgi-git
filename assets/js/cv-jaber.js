function toggleDrawer(drawerId) {
    var drawer = document.getElementById(drawerId);
    if (drawer.style.display === 'block') {
      drawer.style.display = 'none';
    } else {
      drawer.style.display = 'block';
    }
  }
document.getElementById('openSidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.remove('-translate-x-full');
  });
  
  document.getElementById('closeSidebar').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('-translate-x-full');
  });
  
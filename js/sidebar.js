// slide out sidebar
function SideBar(props) {
  this.props = props
  this.elem = document.getElementById(this.props.id)

  this.render = function() {

    var html =  /* html */`
      <div class="sidebar" id="sidebar">
        <div class="sidebar-items" id="sidebar-items">
          <a href="/about"><div class="sidebar-items-item">About</div></a>
          <hr>
        </div>
      </div>
    `
    this.elem.innerHTML = html

    // get self
    var self = this
    // get items
    this.items = document.getElementById('sidebar-items')
    // get hamburger button and listen to mouse down
    var hamburger = document.getElementById('hamburger')
    hamburger.addEventListener('mousedown', function() {
      event.stopPropagation()
      if(self.isVisible) {
        self.hide()
      } else {
        self.show()
      }
    })
    // hide if click anywhere else
    document.addEventListener('mousedown', (e) => {
      // only close if we don't click on a link
      if (e.target.className !== 'sidebar-items-item') {
        self.hide()
      }
    })
  }

  // hide sidebar
  this.hide = function() {
    this.isVisible = false
    this.items.style.transform = 'translate(200px, 0px)'
    this.elem.style.zIndex = 1
  }
  // show sidebar
  this.show = function() {
    this.isVisible = true
    this.elem.style.zIndex = 10
    this.items.style.transform = 'translate(0px, 0px)'
  }

  this.render()
  return this
}

var sidebar = new SideBar({id: 'mobile-menu'})
import React from 'react'

export default function Nav() {
  return (
        <nav class="navbar navbar-expand-lg bg-danger text-white">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Netrikan</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">rules</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Report a crime</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">trucks</a></li>
            <li><a class="dropdown-item " href="#">BIKES</a></li>
            <li><hr class="dropdown-divider"/></li>
    
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
  )
}

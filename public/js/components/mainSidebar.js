import React from 'react'

const MainSidebar = () => {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                    </div>
                    <div className="pull-left info">
                        <p>Alexander Pierce</p>
                        <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..."/>
          <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                </button>
              </span>
                    </div>
                </form>
                <ul className="sidebar-menu">
                    <li className="header">MAIN NAVIGATION</li>
                    <li>
                        <a href="../widgets.html">
                            <i className="fa fa-th"></i> <span>Widgets</span>
                        </a>
                    </li>
                </ul>
            </section>
        </aside>
    )
};

export default MainSidebar;
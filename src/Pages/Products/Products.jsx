import React from 'react'
import './Products.css'
import { NavLink, Outlet } from 'react-router-dom'

const Products = () => {

    return (
        <div className="products-main-container">
            <div className="container">
                <div className="row">
                    <div className="col-3 left-menu-container">
                        <NavLink to='SketchToImage'><i class="bi bi-vector-pen"></i> SketchToImage</NavLink>
                        <NavLink to='RemoveBackgroundFromImage'><i class="bi bi-image"></i> RemoveBackgroundFromImage</NavLink>
                        <NavLink to='ChatBot'><i class="bi bi-chat-left-text-fill"></i> ChatBot</NavLink>
                    </div>
                    <div className="col-9 right-content-container">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Products
import { StrictMode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'

import {
  Outlet,
  RouterProvider,
  Link,
  Router,
  Route,
  RootRoute,
} from '@tanstack/router'


const rootRoute = new RootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/token">Token</Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const tokenRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/token',
  component: Token,
})

function About() {
  return <div>Hello from About!</div>
}

function Token() {
  const [token, setToken] = useState('')

  const fetchToken = async () => {
    const response = await fetch('http://localhost:3000/token')
    const token = await response.json()
    return token
  }

  useEffect(() => {
    fetchToken().then(token => setToken(token))
  }, [])

  return <div>token: {token}</div>
}

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, tokenRoute])

// Create the router using your route tree
const router = new Router({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

// Render our app!
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
import { App as KonstaApp } from 'konsta/react'
import Home from './pages/home'
import Login from './pages/login'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { Category } from './config/types'
import { db } from './config/firebase'
import categoryStore from './stores/category'

const App = () => {
  const setCategories = categoryStore(state => state.setCategories)
  useEffect(() => {
    const q = query(collection(db, "categories"), where("isActive", "==", true))
    const unsubscribeCategories = onSnapshot(q, (querySnapshot) => {
      let categories: Category[] = []
      querySnapshot.forEach((doc) => {
        categories.push({
          id: doc.id,
          name: doc.data().name,
          parentId: doc.data().parentId,
          ordering: doc.data().ordering,
          isLeaf: doc.data().isLeaf
        })
      })
      setCategories(categories)
    }, (err: Error) => {
      unsubscribeCategories()
    })
  }, [])
  return (
    <KonstaApp theme="ios" safeAreas>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </KonstaApp>
  )
}

export default App

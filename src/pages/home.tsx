import { Page, Navbar, List, Toolbar, Link, Icon, Button } from 'konsta/react'
import categoryStore from '../stores/category'
import { MdLogin } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate()
  const stateCategories = categoryStore(state => state.categories)
  return (
    <Page>
      <Navbar title="Konsta UI" />
      <Toolbar className="left-0 bottom-0 fixed w-full">
        <Link toolbar iconOnly onClick={() => navigate('/login')}>
          <Icon ios={<MdLogin className="w-6 h-6" />} material={<MdLogin className="w-6 h-6" />}/>
        </Link>
      </Toolbar>
      <List>
        {stateCategories.map(c => 
          <Button key={c.id} large rounded outline className='m-3 w-full' href={`/packs/n/${c.id}`}>{c.name}</Button>
        )}
      </List>
    </Page>
  )
}

export default Home

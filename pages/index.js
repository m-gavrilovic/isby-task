import Header from './components/header'
import LoginRegisterForm from './components/LoginRegisterForm'
import MainContent from './components/mainContent'
import UserData from './components/UserData'

export default function Home() {
  return (
    <div>
      <Header>
        <UserData />
      </Header>
      <MainContent />
    </div>
  )
}

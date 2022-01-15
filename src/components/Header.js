import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { selectCars } from '../features/Car/carSlice'
import { useSelector } from 'react-redux'

const Header = () => {
  const [burgerState, setBurgerState] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <img src="images\logo.svg" alt="tesla logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car) => (
            <a href="#" key={car}>
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CutomeMenu
          onClick={() => {
            setBurgerState(true)
          }}
        />
      </RightMenu>

      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomeClose
            onClick={() => {
              setBurgerState(false)
            }}
          />
        </CloseWrapper>

        {cars &&
          cars.map((car) => (
            <li>
              <a href="#" key={car}>
                {car}
              </a>
            </li>
          ))}

        <li>
          <a href="#">Exsiting inventory</a>
        </li>
        <li>
          <a href="#">Used inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Test-drive</a>
        </li>
      </BurgerNav>
    </Container>
  )
}

const Container = styled.div`
  z-index: 10;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin-right: 10px;
  }
`
const CutomeMenu = styled(MenuIcon)`
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  //align-items: flex-start;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  a {
    font-weight: 600;
  }
`
const CustomeClose = styled(CloseIcon)`
  cursor: pointer;
`
const CloseWrapper = styled.div`
  display: flex;
  align-self: flex-end;
`

export default Header

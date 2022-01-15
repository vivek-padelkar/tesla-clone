import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        desciption="Order online for touchless delivery"
        backgroundImage="model-s.jpg"
        leftButtonText="Custome Order"
        rightButtonText="Exisiing Inventory"
      />
      <Section
        title="Model Y"
        desciption="Order online for touchless delivery"
        backgroundImage="model-y.jpg"
        leftButtonText="Custome Order"
        rightButtonText="Exisiing Inventory"
      />
      <Section
        title="Model 3"
        desciption="Order online for touchless delivery"
        backgroundImage="model-3.jpg"
        leftButtonText="Custome Order"
        rightButtonText="Exisiing Inventory"
      />
      <Section
        title="Model x"
        desciption="Order online for touchless delivery"
        backgroundImage="model-x.jpg"
        leftButtonText="Custome Order"
        rightButtonText="Exisiing Inventory"
      />
      <Section
        title="Lowest cost Solar panel in America "
        desciption="Money back gurantee"
        backgroundImage="solar-panel.jpg"
        leftButtonText="Oder now"
        rightButtonText="Learn more"
      />
      <Section
        title="Solar for new Roofs"
        desciption="Solar roof costs less than a new roof plus solar panel"
        backgroundImage="solar-roof.jpg"
        leftButtonText="Oder now"
        rightButtonText="Learn more"
      />
      <Section
        title="Accessories"
        desciption=""
        backgroundImage="accessories.jpg"
        leftButtonText="Oder now"
      />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
`
export default Home

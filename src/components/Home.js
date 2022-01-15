import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section
        key={1}
        title="Model S"
        desciption="Order online for touchless delivery"
        backgroundImage="model-s.jpg"
        leftButtonText="Custome Order"
        rightButtonText="Exisiing Inventory"
      />
      <Section
        key={2}
        title="Model Y"
        desciption="Order online for touchless delivery"
        backgroundImage="model-y.jpg"
        leftButtonText="Custome Order"
        rightButtonText="Exisiing Inventory"
      />
      <Section
        key={3}
        title="Model 3"
        desciption="Order online for touchless delivery"
        backgroundImage="model-3.jpg"
        leftButtonText="Custome Order"
        rightButtonText="Exisiing Inventory"
      />
      <Section
        key={4}
        title="Model x"
        desciption="Order online for touchless delivery"
        backgroundImage="model-x.jpg"
        leftButtonText="Custome Order"
        rightButtonText="Exisiing Inventory"
      />
      <Section
        key={5}
        title="Lowest cost Solar panel in America "
        desciption="Money back gurantee"
        backgroundImage="solar-panel.jpg"
        leftButtonText="Oder now"
        rightButtonText="Learn more"
      />
      <Section
        key={6}
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
